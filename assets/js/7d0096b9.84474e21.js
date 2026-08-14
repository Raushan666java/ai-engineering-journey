"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[52464],{

/***/ 14134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_14_space_complexity_md_7d0_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-14-space-complexity-md-7d0.json
const site_docs_courses_theory_of_computation_14_space_complexity_md_7d0_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/14-space-complexity","title":"Chapter 14: Space Complexity","description":"Previous Advanced Complexity Topics","source":"@site/docs/courses/theory-of-computation/14-space-complexity.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/14-space-complexity","permalink":"/ai-engineering-journey/theory-of-computation/14-space-complexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":14,"frontMatter":{"id":"14-space-complexity","slug":"/theory-of-computation/14-space-complexity","title":"Chapter 14: Space Complexity","sidebar_label":"Chapter 14: Space Complexity","sidebar_position":14},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 13: Time Complexity and NP-Completeness","permalink":"/ai-engineering-journey/theory-of-computation/13-time-complexity"},"next":{"title":"Chapter 15: Advanced Complexity Topics","permalink":"/ai-engineering-journey/theory-of-computation/15-advanced-complexity"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/14-space-complexity.md


const frontMatter = {
	id: '14-space-complexity',
	slug: '/theory-of-computation/14-space-complexity',
	title: 'Chapter 14: Space Complexity',
	sidebar_label: 'Chapter 14: Space Complexity',
	sidebar_position: 14
};
const contentTitle = 'Chapter 14: Space Complexity';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "13.1 Space Complexity",
  "id": "131-space-complexity",
  "level": 3
}, {
  "value": "13.2 Fundamental Space Classes",
  "id": "132-fundamental-space-classes",
  "level": 3
}, {
  "value": "13.3 Time vs Space: Key Differences",
  "id": "133-time-vs-space-key-differences",
  "level": 3
}, {
  "value": "13.4 Savitch&#39;s Theorem",
  "id": "134-savitchs-theorem",
  "level": 3
}, {
  "value": "13.5 PSPACE",
  "id": "135-pspace",
  "level": 3
}, {
  "value": "13.6 PSPACE-Completeness",
  "id": "136-pspace-completeness",
  "level": 3
}, {
  "value": "13.7 L and NL",
  "id": "137-l-and-nl",
  "level": 3
}, {
  "value": "13.8 The Reachability Method",
  "id": "138-the-reachability-method",
  "level": 3
}, {
  "value": "13.9 The Space Hierarchy",
  "id": "139-the-space-hierarchy",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 13.1: PATH ∈ NL",
  "id": "example-131-path--nl",
  "level": 3
}, {
  "value": "Example 13.2: Savitch&#39;s Theorem in Action",
  "id": "example-132-savitchs-theorem-in-action",
  "level": 3
}, {
  "value": "Example 13.3: QBF is PSPACE-Complete",
  "id": "example-133-qbf-is-pspace-complete",
  "level": 3
}, {
  "value": "Example 13.4: L Contains Balanced Parentheses",
  "id": "example-134-l-contains-balanced-parentheses",
  "level": 3
}, {
  "value": "Example 13.5: NL-Completeness of PATH",
  "id": "example-135-nl-completeness-of-path",
  "level": 3
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript Implementation: Savitch&#39;s Theorem Explorer and PSPACE Verifier",
  "id": "typescript-implementation-savitchs-theorem-explorer-and-pspace-verifier",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
  "level": 3
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "TypeScript QBF Evaluator (PSPACE Algorithm)",
  "id": "typescript-qbf-evaluator-pspace-algorithm",
  "level": 2
}, {
  "value": "The Immerman-Szelepcsényi Theorem: Counting Without Paths",
  "id": "the-immerman-szelepcsényi-theorem-counting-without-paths",
  "level": 2
}, {
  "value": "TypeScript: NL Reachability Counter (Concept Demonstration)",
  "id": "typescript-nl-reachability-counter-concept-demonstration",
  "level": 3
}, {
  "value": "TypeScript Configuration Graph Example",
  "id": "typescript-configuration-graph-example",
  "level": 2
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
        id: "chapter-14-space-complexity",
        children: "Chapter 14: Space Complexity"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/13-time-complexity",
          children: "Time Complexity"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/15-advanced-complexity",
          children: "Advanced Complexity Topics"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define space complexity classes SPACE and NSPACE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the space complexity of algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State and prove Savitch's theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define PSPACE and PSPACE-completeness."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify key PSPACE-complete problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between time and space complexity classes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the reachability method for space-efficient computation."
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
        href: "../../assets/images/lessons/theory-of-computation/14-space-complexity/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/14-space-complexity/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/14-space-complexity/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/14-space-complexity/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/14-space-complexity/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/14-space-complexity/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum tape cells used"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-bounded computation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Savitch's Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSPACE(s) ? SPACE(s²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterminism less powerful for space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Games like QBF, GEOGRAPHY"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L and NL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log-space classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reachability problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE(n) ? SPACE(n²) strict"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More space = more power"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Space Complexity] --> B[Savitch Theorem]\n    B --> C[PSPACE]\n    C --> D[PSPACE-Completeness]\n    D --> E[L and NL]\n    E --> F[Reachability Method]\n    F --> G[Space Hierarchy]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/13-space-complexity.png",
        alt: "Space Complexity Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-space-complexity",
      children: "13.1 Space Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "space complexity"
      }), " of a Turing machine is the maximum number of tape cells used on any input of length n. For a multitape TM, the space used is the sum of cells used on all work tapes (the input tape is often excluded if it's read-only)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Formal definition:"
      }), " SPACE(s(n)) = { L | L is decided by a TM using O(s(n)) space }.\nSimilarly, NSPACE(s(n)) = { L | L is decided by an NTM using O(s(n)) space }."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-fundamental-space-classes",
      children: "13.2 Fundamental Space Classes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "L"
            }), " = SPACE(log n)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic log space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NL"
            }), " = NSPACE(log n)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic log space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "PSPACE"
            }), " = ∪_{k} SPACE(nᵏ)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "NPSPACE"
            }), " = ∪_{k} NSPACE(nᵏ)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic polynomial space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "EXPSPACE"
            }), " = ∪_{k} SPACE(2^{nᵏ})"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential space"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key relationships:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L ⊆ NL ⊆ P ⊆ NP ⊆ PSPACE ⊆ EXPTIME ⊆ EXPSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L ≠ PSPACE (space hierarchy theorem)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ≠ EXPTIME (time hierarchy theorem)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-time-vs-space-key-differences",
      children: "13.3 Time vs Space: Key Differences"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Time and space complexity behave differently in fundamental ways:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reusable resource?"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (steps consumed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (cells can be reused)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nondeterminism"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds power (P vs NP open)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Closed (NPSPACE = PSPACE)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complement"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "co-NP vs NP open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NL = co-NL proven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hierarchy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "P ? EXP (known)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L ? PSPACE (known, stricter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key technique"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonalization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration graphs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The reusability of space explains why nondeterminism is less powerful: a nondeterministic space-bounded machine can try all possibilities by reusing space, but a nondeterministic time-bounded machine must \"pay\" for each step."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "134-savitchs-theorem",
      children: "13.4 Savitch's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Savitch's Theorem:"
      }), " For any function s(n) ≥ log n,\nNSPACE(s(n)) ⊆ SPACE(s(n)²)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Corollary:"
      }), " NPSPACE = PSPACE (nondeterminism doesn't add power for polynomial space)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof sketch:"
      }), " Given an NTM N that uses s(n) space, we construct a deterministic TM that uses O(s(n)²) space by solving the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reachability problem"
      }), " in the configuration graph of N."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The configuration graph has nodes = configurations of N on input w. Each configuration uses O(s(n)) symbols. N accepts if there is a path from start to accept in this graph."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The deterministic TM uses a recursive ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "divide-and-conquer"
      }), " approach: to check if configuration c₂ is reachable from c₁ in t steps, try all possible intermediate configurations cₘ and check:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can we reach cₘ from c₁ in t/2 steps?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can we reach c₂ from cₘ in t/2 steps?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The depth of recursion is log(2^{O(s(n))}) = O(s(n)), and each level stores a configuration of size O(s(n)). Total space: O(s(n)²)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "135-pspace",
      children: "13.5 PSPACE"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PSPACE"
      }), " = languages decidable in polynomial space on a DTM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since NPSPACE = PSPACE, nondeterminism doesn't add power here (unlike for time)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Problems in PSPACE:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "QBF (Quantified Boolean Formulas):"
        }), " Is a fully quantified Boolean formula (∀x∃y∀z…) true?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GEOGRAPHY:"
        }), " Can the first player force a win in the geography game?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Generalized CHECKERS, GO, and other games"
        }), " on n×n boards."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "REGULAR EXPRESSION EQUIVALENCE"
        }), " (for some variants)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "LBA (Linear Bounded Automaton) acceptance."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "136-pspace-completeness",
      children: "13.6 PSPACE-Completeness"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language B is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PSPACE-complete"
      }), " if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B ∈ PSPACE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For every A ∈ PSPACE, A ≤_P B (B is PSPACE-hard)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "QBF"
      }), " was the first problem proven PSPACE-complete (the space analog of Cook-Levin)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "TQBF (True Quantified Boolean Formulas):"
      }), " Given a fully quantified Boolean formula (all variables quantified), is it true?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QBF ∈ PSPACE: Recursively evaluate the formula using polynomial space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "QBF is PSPACE-hard: Similar to Cook-Levin, but we encode the recursive space-bounded computation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Other PSPACE-complete problems:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GEOGRAPHY:"
        }), " Given a directed graph and start vertex, can the current player force a win?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SUCCINCT REACHABILITY:"
        }), " Given a succinctly described graph, is there a path from s to t?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MASTERMIND"
        }), " (the game)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "NUMBER-LABELED PARTITION."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "137-l-and-nl",
      children: "13.7 L and NL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "L"
      }), " (deterministic log space): Problems solvable using only O(log n) work space (excluding the input)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples in L:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Checking if parentheses are balanced."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determining if a linked list has a cycle."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computing the parity of the number of 1 bits."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NL"
      }), " (nondeterministic log space): Problems solvable on an NTM using O(log n) space."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PATH"
      }), " (is there a directed path from s to t?) is NL-complete."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATH ∈ NL: Nondeterministically guess the next vertex on the path; O(log n) bits to store current vertex."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PATH is NL-hard: Every NL problem reduces to PATH (configuration graph reachability)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important theorem:"
      }), " NL ⊆ P (since PATH ∈ P via BFS, and PATH is NL-complete)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "NL = co-NL"
      }), " (Immerman-Szelepcsényi theorem): Nondeterministic log space is closed under complement."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proven independently by Immerman and Szelepcsényi (1987)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The proof uses a clever counting technique to verify that no path exists to an accepting configuration."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "138-the-reachability-method",
      children: "13.8 The Reachability Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many space-bounded algorithms use the configuration graph approach:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define configurations of the computation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the acceptance problem reduces to reachability in this graph."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use space-efficient reachability algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For Savitch's theorem:"
      }), " Use divide-and-conquer reachability in O(log² n) space for NL problems, generalized to O(s²) for NSPACE(s)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For NL ⊆ P:"
      }), " The configuration graph of an NL machine is of polynomial size, and reachability in this graph is in P (via DFS/BFS)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "139-the-space-hierarchy",
      children: "13.9 The Space Hierarchy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Hierarchy Theorem:"
      }), " For any space-constructible function f(n) ≥ log n,\nSPACE(f(n)) ⊂ SPACE(g(n)) whenever f(n) = o(g(n))."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L ⊂ PSPACE (more space allows more problems to be solved)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PSPACE ⊂ EXPSPACE."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This gives a strict hierarchy: L ⊂ PSPACE ⊂ EXPSPACE ⊂ … unlike time, where we only know P ⊆ NP ⊆ PSPACE with unknown strictness."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-131-path--nl",
      children: "Example 13.1: PATH ∈ NL"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Given directed graph G = (V, E), vertices s and t."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set current = s."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For i = 1 to |V|:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Nondeterministically choose a vertex v ∈ V (O(log n) bits)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If (current, v) ∈ E, set current = v."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If current = t, accept."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reject."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The algorithm stores only the current vertex (log n bits) and a counter (log n bits). Space = O(log n). Nondeterminism guesses the path."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-132-savitchs-theorem-in-action",
      children: "Example 13.2: Savitch's Theorem in Action"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given an NTM that uses s(n) = n space, show the equivalent DTM uses O(n²) space."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The NTM has at most 2^{O(n)} configurations. The DTM uses recursion:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["REACH(c₁, c₂, i): can we go from c₁ to c₂ in ≤ 2ⁱ steps?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If i = 0: check if c₁ = c₂ or c₁ → c₂ in one step."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otherwise: for each configuration cₘ (O(n) space):\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If REACH(c₁, cₘ, i-1) and REACH(cₘ, c₂, i-1), return true."
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Return false."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursion depth: i = log(2^{O(n)}) = O(n). Each call stores a constant number of configurations of size O(n). Total: O(n²) space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-133-qbf-is-pspace-complete",
      children: "Example 13.3: QBF is PSPACE-Complete"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A QBF formula: ∃x₁ ∀x₂ ∃x₃ … φ(x₁, …, xₙ)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PSPACE membership:"
      }), " Evaluate the formula recursively:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If φ has no quantifiers (all variables bound), evaluate directly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If φ = ∃x ψ(x, …): return True if ψ(0) or ψ(1) is true."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If φ = ∀x ψ(x, …): return True if both ψ(0) and ψ(1) are true."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The recursion depth is O(n), and each level stores partial variable assignments. Total space: O(n²) → polynomial."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "PSPACE-hardness:"
      }), " Given any PSPACE machine M and input w, construct a QBF formula that is true iff M accepts w. This is similar to Cook-Levin, but the quantifiers ∀ and ∃ handle the alternation between universal and existential configurations in the nondeterministic computation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-134-l-contains-balanced-parentheses",
      children: "Example 13.4: L Contains Balanced Parentheses"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm"
      }), " for checking if a string w of '(' and ')' is balanced:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize counter = 0 (log n bits)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each symbol c in w:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If c = '(': counter++."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If c = ')': counter--."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If counter < 0: reject (too many closing)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If counter = 0: accept. Else reject."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Space used: one counter (⌈log₂(n+1)⌉ bits) = O(log n). So this problem is in L."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-135-nl-completeness-of-path",
      children: "Example 13.5: NL-Completeness of PATH"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To show EVERY NL problem A reduces to PATH:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let N be an NTM for A with space log n."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On input w, construct the configuration graph G of N on w: vertices = configurations, edges = transitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let s = start configuration, t = accept configuration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "N accepts w iff there is a path from s to t in G."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G has O(n·2^{log n}) = O(n²) vertices, and can be constructed in log space (each edge can be generated on demand)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus A ≤_L PATH, and PATH is NL-complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Bound"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problem"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Balanced parentheses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) nondet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PATH"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PSPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QBF"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EXPSPACE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^{n^k})"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Succinct reachability"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Theorem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Statement"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Savitch's"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NSPACE(s) ? SPACE(s²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immerman-Szelepcsényi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NL = co-NL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space hierarchy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SPACE(n) ? SPACE(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NL ? P"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configuration graph poly-size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PSPACE-complete games (GO, chess generalized)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LBA acceptance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query evaluation space bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game tree search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory-bounded parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Savitch's theorem states:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) NSPACE(s) = SPACE(s)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) NSPACE(s) ? SPACE(s²) ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) NSPACE(s) ? SPACE(s³)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) PSPACE = NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Savitch: NSPACE(s(n)) ? SPACE(s(n)²). Corollary: NPSPACE = PSPACE.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " NL is the class of problems solvable in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n) space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(log n) space nondeterministically ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n²) space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(1) space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** NL = nondeterministic O(log n) space. PATH is NL-complete.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " QBF is the canonical:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) NP-complete problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) PSPACE-complete problem ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) NL-complete problem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P problem"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** True Quantified Boolean Formulas is PSPACE-complete (space analog of Cook-Levin).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The Immerman-Szelepcsényi theorem says:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) NL = co-NL ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PSPACE = NPSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) L = NL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Nondeterministic log space is closed under complement.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which containment is known to be strict?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P ? NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) L ? PSPACE ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) NP ? PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) P ? PSPACE"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** The space hierarchy theorem gives L ? PSPACE, while P vs NP remains open.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Space is more structured than time."
          }), " While the P vs NP question remains open, the space hierarchy has been fully characterized: L ? PSPACE and PSPACE ? EXPSPACE are proven. Space complexity admits cleaner mathematical analysis."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The configuration graph technique is powerful."
          }), " Space complexity proofs rely on the observation that a machine's behavior can be represented as a graph of configurations. Reachability in this graph determines acceptance, and graph reachability is in NL."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Savitch's theorem has a surprising consequence."
          }), " Because NPSPACE = PSPACE, nondeterminism doesn't help with space the way it does with time. This means PSPACE-complete problems cannot be solved efficiently by simply guessing and verifying."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "PSPACE-complete problems are harder than NP-complete ones."
          }), " While NP-complete problems like SAT have practical solvers, PSPACE-complete problems like QBF (quantified Boolean formulas) are exponentially harder. Generalized games (chess, Go) are PSPACE-hard."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-savitchs-theorem-explorer-and-pspace-verifier",
      children: "TypeScript Implementation: Savitch's Theorem Explorer and PSPACE Verifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Space Complexity Analyzer and Savitch's Theorem Simulation\n\nclass SpaceComplexity {\n  static measure(fn: (arr: number[]) => number[], input: number[]): {\n    spaceCells: number;\n    complexityClass: string;\n  } {\n    // Measure approximate space usage\n    const initialMemory = process.memoryUsage().heapUsed;\n    fn(input);\n    const finalMemory = process.memoryUsage().heapUsed;\n    const deltaBytes = finalMemory - initialMemory;\n    const n = input.length;\n\n    // Classify based on growth relative to input\n    if (deltaBytes < 1000) return { spaceCells: deltaBytes, complexityClass: \"O(1) / O(log n)\" };\n    if (deltaBytes < 1000 * n) return { spaceCells: deltaBytes, complexityClass: \"O(n)\" };\n    if (deltaBytes < 1000 * n * n) return { spaceCells: deltaBytes, complexityClass: \"O(n²)\" };\n    return { spaceCells: deltaBytes, complexityClass: \"O(2n) or worse\" };\n  }\n\n  static configurationGraph(tmStates: number, tapeAlphabetSize: number, tapeCells: number): number {\n    // Total configurations = states × alphabet^tapeCells × headPositions\n    return tmStates * Math.pow(tapeAlphabetSize, tapeCells) * tapeCells;\n  }\n}\n\nclass SavitchTheorem {\n  // Simulates Savitch's theorem: NSPACE(f(n)) ? SPACE(f(n)²)\n  static reachability(\n    graph: Map<number, number[]>,\n    start: number,\n    target: number,\n    maxDepth: number,\n    depth: number = 0\n  ): boolean {\n    if (start === target) return true;\n    if (depth >= Math.ceil(Math.log2(maxDepth))) return false;\n\n    const midDepth = Math.ceil(maxDepth / 2);\n    const allNodes = [...graph.keys()];\n\n    for (const mid of allNodes) {\n      if (this.reachability(graph, start, mid, midDepth, depth + 1) &&\n          this.reachability(graph, mid, target, maxDepth - midDepth, depth + 1)) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  static demonstrateTheorem(): string[] {\n    return [\n      \"Savitch's Theorem (1970): NSPACE(f(n)) ? SPACE(f(n)²)\",\n      \"\",\n      \"Key insight: Nondeterministic space can be simulated\",\n      \"deterministically with only a quadratic space overhead.\",\n      \"\",\n      \"For f(n) = log n, NSPACE(f(n)) ? SPACE(f(n)²)\",\n      \"\",\n      \"Proof uses the configuration graph of the NTM:\",\n      \"1. NTM configuration = (state, tape, head position)\",\n      \"2. The NTM accepts iff a path exists from start config to accept config\",\n      \"3. Use divide-and-conquer: CANYIELD(c1, c2, t) =\",\n      \"   ?c3: CANYIELD(c1, c3, t/2) ? CANYIELD(c3, c2, t/2)\",\n      \"4. Recursion depth = O(log t), each level stores O(f(n)) space\",\n      \"5. Total: O(f(n)²) deterministic space\",\n      \"\",\n      \"Corollaries:\",\n      \"- NPSPACE = PSPACE (nondeterminism doesn't help for polynomial space)\",\n      \"- NSPACE(n) ? SPACE(n²)\",\n      \"- PSPACE = co-PSPACE (by Immerman-Szelepcsényi)\"\n    ];\n  }\n\n  static hierarchySummary(): Map<string, string> {\n    const h = new Map<string, string>();\n    h.set(\"L\", \"Deterministic O(log n) space\");\n    h.set(\"NL\", \"Nondeterministic O(log n) space\");\n    h.set(\"P\", \"Polynomial time (? NL by the PATH problem being in P)\");\n    h.set(\"NP\", \"Nondeterministic polynomial time\");\n    h.set(\"PSPACE\", \"Polynomial space (= NPSPACE by Savitch)\");\n    h.set(\"EXPSPACE\", \"Exponential space\");\n    h.set(\"L ? NL ? P ? NP ? PSPACE ? EXPSPACE\", \"Known containments (none known to be strict)\");\n    return h;\n  }\n}\n\nclass PSPACEProblems {\n  static QBF(formula: string, variables: string[], values: Map<string, boolean>): boolean {\n    // Simplified QBF solver for quantified Boolean formulas\n    if (variables.length === 0) {\n      return this.evaluate(formula, values);\n    }\n    const var_ = variables[0];\n    const rest = variables.slice(1);\n\n    values.set(var_, true);\n    const trueResult = this.QBF(formula, rest, values);\n\n    values.set(var_, false);\n    const falseResult = this.QBF(formula, rest, values);\n\n    values.delete(var_);\n    return trueResult && falseResult; // Universal quantification\n  }\n\n  private static evaluate(formula: string, values: Map<string, boolean>): boolean {\n    let result = formula;\n    for (const [v, val] of values) {\n      result = result.replace(new RegExp(v, \"g\"), val ? \"1\" : \"0\");\n    }\n    result = result.replace(/¬1/g, \"0\").replace(/¬0/g, \"1\");\n    result = result.replace(/1?1/g, \"1\").replace(/0?./g, \"0\").replace(/1?/g, \"\");\n    result = result.replace(/1?./g, \"1\").replace(/0?0/g, \"0\").replace(/0?/g, \"\");\n    return result.includes(\"1\") || result === \"\";\n  }\n\n  static isPSPACEComplete(problem: string): string {\n    const pspaceComplete = [\"QBF\", \"GEOGRAPHY\", \"GO\", \"CHECKERS\", \"L\", \"NLM\"];\n    return pspaceComplete.includes(problem.toUpperCase())\n      ? `${problem} is PSPACE-complete`\n      : `${problem} is not known to be PSPACE-complete`;\n  }\n}\n\nconsole.log(SavitchTheorem.demonstrateTheorem().join(\"\\n\"));\nconst h = SavitchTheorem.hierarchySummary();\nconsole.log([...h.entries()].map(([k, v]) => `${k}: ${v}`).join(\"\\n\"));\nconsole.log(PSPACEProblems.isPSPACEComplete(\"QBF\"));\nconsole.log(PSPACEProblems.isPSPACEComplete(\"SAT\"));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// L / NL / PSPACE Classifier\n// Given a problem description, classifies it by its\n// known space complexity class.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class SpaceComplexityClassifier {\n// Known problems and their space complexity classes\nprivate static readonly knownProblems = new Map<string, string>([\n[\"DFA membership\", \"L (O(log n) space)\"],\n[\"Tree traversal\", \"L (O(log n) space)\"],\n[\"Graph connectivity (undirected)\", \"L (Reingold 2005)\"],\n[\"Graph connectivity (directed)\", \"NL-complete\"],\n[\"ST-connectivity (directed)\", \"NL-complete\"],\n[\"2SAT\", \"NL-complete\"],\n[\"CFG membership (CYK)\", \"P (not space-bounded)\"],\n[\"SAT\", \"NP-complete (not space-bounded)\"],\n[\"QBF (Quantified Boolean Formula)\", \"PSPACE-complete\"],\n[\"Geography game\", \"PSPACE-complete\"],\n[\"Generalized Go\", \"PSPACE-complete\"],\n[\"Generalized Chess\", \"PSPACE-complete\"],\n[\"Generalized Checkers\", \"PSPACE-complete\"],\n[\"TQBF\", \"PSPACE-complete\"],\n[\"Regex with backreferences\", \"PSPACE-complete\"],\n[\"NEXP\", \"Nondeterministic exponential time\"],\n[\"EXPSPACE\", \"EXPSPACE\"],\n]);"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static classify(name: string): string {\nreturn this.knownProblems.get(name) || \"Unknown — research frontier\";\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static table(): string[] {\nconst output: string[] = [];\noutput.push(\"Space Complexity Classification Table\");\noutput.push(\"=\".repeat(55));\noutput.push(\"Problem\".padEnd(40) + \"Class\");\noutput.push(\"-\".repeat(55));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const [problem, cls] of this.knownProblems) {\n  output.push(`${problem.padEnd(40)} ${cls}`);\n}\n\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Savitch's Theorem Helper — demonstrates the key\n// insight: NL ? SPACE(log² n) by simulating\n// nondeterministic space with deterministic space\n// using divide-and-conquer on the computation path.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class SavitchHelper {\n// Simulate the Savitch construction: to check if path\n// exists from c1 to c2 in = t steps, recursively check\n// if there is a midpoint reachable in = t/2 steps.\nstatic reachableInSteps(\nconfigs: string[],\nsuccessors: Map<string, string[]>,\nc1: string, c2: string, steps: number,\ndepth: number = 0\n): boolean {\nif (steps === 0) return c1 === c2;\nif (steps === 1) return successors.get(c1)?.includes(c2) ?? false;"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "const mid = Math.floor(steps / 2);\nfor (const cfg of configs) {\n  if (this.reachableInSteps(configs, successors, c1, cfg, mid, depth + 1) &&\n      this.reachableInSteps(configs, successors, cfg, c2, steps - mid, depth + 1)) {\n    return true;\n  }\n}\nreturn false;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Space usage of Savitch's algorithm\nstatic spaceUsage(n: number): string {\n// O(log² n) space for the recursion stack\nreturn ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(log² ${n}) = O(${Math.ceil(Math.log2(n) ** 2)}) cells"
      }), ";\n}\n}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconsole.log(SpaceComplexityClassifier.table().join(\"\\n\"));\nconsole.log(\"\");\nconst configs = [\"c1\", \"c2\", \"c3\", \"c4\"];\nconst succ = new Map<string, string[]>([\n[\"c1\", [\"c2\", \"c3\"]], [\"c2\", [\"c4\"]], [\"c3\", [\"c4\"]], [\"c4\", []]\n]);\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "c1 ? c4 in =3 steps: ${SavitchHelper.reachableInSteps(configs, succ, \"c1\", \"c4\", 3)}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Space for n=${configs.length}: ${SavitchHelper.spaceUsage(configs.length)}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// space complexity\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'space complexity', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Space complexity measures the maximum tape cells used during computation.\n- L = O(log n) space; NL = nondeterministic O(log n) space.\n- Savitch's theorem: NSPACE(s) ? SPACE(s²), so NPSPACE = PSPACE.\n- PSPACE = polynomial space; PSPACE-complete problems include QBF, GEOGRAPHY, and generalized games.\n- L ? NL ? P ? NP ? PSPACE, but some containments are not known to be strict.\n- NL = co-NL (Immerman-Szelepcsényi theorem).\n- The configuration graph approach is central to space complexity proofs.\n- Space hierarchy is strict (L ? PSPACE ? EXPSPACE), unlike the time hierarchy where P vs PSPACE is unknown.\n\n## Complexity Class Relationships\n\n```mermaid\nflowchart TD\n    L[\"L<br/>log space\"] --> NL[\"NL<br/>nondet log space\"]\n    NL --> P[\"P<br/>polynomial time\"]\n    P --> NP[\"NP<br/>nondet poly time\"]\n    NP --> PSPACE[\"PSPACE<br/>polynomial space\"]\n    PSPACE --> EXP[\"EXP<br/>exponential time\"]\n    EXP --> EXPSPACE[\"EXPSPACE<br/>exponential space\"]\n    \n    L -.->|\"? (known)\"| PSPACE\n    P -.->|\"? (open)\"| NP\n    NP -.->|\"? (open)\"| PSPACE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key: solid arrows indicate known containments; dashed arrows with labels show what's known vs open."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Summary of known containments:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L ? PSPACE (strict, by space hierarchy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ? EXP (strict, by time hierarchy)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NL = co-NL (Immerman-Szelepcsényi)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NPSPACE = PSPACE (Savitch)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the problem of checking if a binary number is divisible by 3 is in L."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that every regular language is in L."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that PATH is in P by giving a polynomial-time algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain Savitch's theorem in your own words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that if L1 ? PSPACE and L2 ? PSPACE then L1 n L2 ? PSPACE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a TypeScript function that checks balanced parentheses using O(log n) space."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that QBF is in PSPACE by describing a polynomial-space algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that NL ? P using the configuration graph approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the problem of determining if a DFA accepts all strings (universality) is in PSPACE — and actually in NL if the DFA is presented differently."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that if A =_P B and B ? PSPACE, then A ? PSPACE."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give an example of a problem in PSPACE that is not known to be in NP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the Savitch reachability algorithm in TypeScript for a directed graph."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove Savitch's theorem in detail: show NSPACE(s(n)) ? SPACE(s(n)²)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the Immerman-Szelepcsényi theorem (NL = co-NL)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the problem of deciding whether two regular expressions with exponentiation (a^n means a repeated n times) denote different languages is PSPACE-complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that GEOGRAPHY (the game) is PSPACE-complete."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that the space hierarchy is strict: SPACE(n) ? SPACE(n²)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser, Michael."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to the Theory of Computation"
        }), " (3rd ed.). Chapter 8 covers space complexity with Savitch's theorem and PSPACE-completeness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arora, Sanjeev and Barak, Boaz."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computational Complexity: A Modern Approach"
        }), ". Chapters 4 and 7 provide detailed coverage of space complexity and the polynomial hierarchy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Papadimitriou, Christos H."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computational Complexity"
        }), ". Chapters 7-8 give a comprehensive treatment of space complexity and the Immerman-Szelepcsenyi theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stockmeyer, Larry and Chandra, Ashok K."
        }), " \"Provably Difficult Combinatorial Games.\" SIAM Journal on Computing, 1979. A seminal paper on PSPACE-completeness of combinatorial games."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-qbf-evaluator-pspace-algorithm",
      children: "TypeScript QBF Evaluator (PSPACE Algorithm)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Evaluate a Quantified Boolean Formula in polynomial space\n// Formula syntax: ?x(f), ?x(f), or a Boolean expression with variables\n\ntype QBF =\n  | { type: \"exists\"; var: string; sub: QBF }\n  | { type: \"forall\"; var: string; sub: QBF }\n  | { type: \"var\"; name: string }\n  | { type: \"not\"; sub: QBF }\n  | { type: \"and\"; left: QBF; right: QBF }\n  | { type: \"or\"; left: QBF; right: QBF };\n\nfunction evaluateQBF(\n  formula: QBF,\n  assignments: Map&lt;string, boolean&gt;\n): boolean {\n  switch (formula.type) {\n    case \"exists\": {\n      const trueAssign = new Map(assignments);\n      trueAssign.set(formula.var, true);\n      const falseAssign = new Map(assignments);\n      falseAssign.set(formula.var, false);\n      return evaluateQBF(formula.sub, trueAssign) ||\n             evaluateQBF(formula.sub, falseAssign);\n    }\n    case \"forall\": {\n      const trueAssign = new Map(assignments);\n      trueAssign.set(formula.var, true);\n      const falseAssign = new Map(assignments);\n      falseAssign.set(formula.var, false);\n      return evaluateQBF(formula.sub, trueAssign) &&\n             evaluateQBF(formula.sub, falseAssign);\n    }\n    case \"var\":\n      return assignments.get(formula.name) ?? false;\n    case \"not\":\n      return !evaluateQBF(formula.sub, assignments);\n    case \"and\":\n      return evaluateQBF(formula.left, assignments) &&\n             evaluateQBF(formula.right, assignments);\n    case \"or\":\n      return evaluateQBF(formula.left, assignments) ||\n             evaluateQBF(formula.right, assignments);\n  }\n}\n\n// Example: ?x ?y ((x ? y) ? (¬x ? ¬y))\n// This formula asserts that for every x, there is a y equal to x\nconst exampleQBF: QBF = {\n  type: \"forall\", var: \"x\",\n  sub: {\n    type: \"exists\", var: \"y\",\n    sub: {\n      type: \"or\",\n      left: { type: \"and\",\n        left: { type: \"var\", name: \"x\" },\n        right: { type: \"var\", name: \"y\" }\n      },\n      right: { type: \"and\",\n        left: { type: \"not\", sub: { type: \"var\", name: \"x\" } },\n        right: { type: \"not\", sub: { type: \"var\", name: \"y\" } }\n      }\n    }\n  }\n};\n\nconsole.log(evaluateQBF(exampleQBF, new Map())); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-immerman-szelepcsényi-theorem-counting-without-paths",
      children: "The Immerman-Szelepcsényi Theorem: Counting Without Paths"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The theorem states NL = co-NL, meaning nondeterministic log space is closed under complement."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof intuition for PATH complement:"
      }), " To prove no path exists from s to t:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the number of vertices reachable from s (call it R)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform a nondeterministic traversal that visits R distinct vertices."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If we never reach t and visit exactly R distinct vertices, no path from s to t exists."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: we can count reachable vertices using an inductive definition:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Let R(i) = vertices reachable in = i steps."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R(0) = {s}."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "R(i+1) = vertices in R(i) plus any vertex with an edge from R(i)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "We can nondeterministically verify |R(i)| without explicitly storing all vertices."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-nl-reachability-counter-concept-demonstration",
      children: "TypeScript: NL Reachability Counter (Concept Demonstration)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countReachableVertices(\n  graph: Map&lt;number, number[]&gt;,\n  source: number,\n  totalVertices: number\n): number {\n  let count = 0;\n  // Try all vertices; guess which ones are reachable\n  for (let v = 0; v &lt; totalVertices; v++) {\n    if (isReachable(graph, source, v)) count++;\n  }\n  return count;\n}\n\nfunction isReachable(\n  graph: Map&lt;number, number[]&gt;,\n  source: number,\n  target: number\n): boolean {\n  let current = source;\n  const n = graph.size;\n  // Nondeterministically guess a path (simulated with iterative deepening)\n  for (let step = 0; step &lt; n; step++) {\n    if (current === target) return true;\n    const neighbors = graph.get(current) || [];\n    if (neighbors.length === 0) return false;\n    // Nondeterministic choice of next vertex\n    current = neighbors[Math.floor(Math.random() * neighbors.length)];\n  }\n  return current === target;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-configuration-graph-example",
      children: "TypeScript Configuration Graph Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Configuration graph for space-bounded Turing machines\n// Demonstrates the concept of reachability in PSPACE\n\ninterface Config {\n  state: string;\n  tapeHead: number;\n  tapeContent: string;\n}\n\nfunction configToString(c: Config): string {\n  return c.state + \",\" + c.tapeHead + \",\" + c.tapeContent;\n}\n\nfunction buildConfigGraph(\n  initialState: string,\n  acceptState: string,\n  maxSpace: number,\n  maxSteps: number\n): Map&lt;string, string[]&gt; {\n  const graph = new Map&lt;string, string[]&gt;();\n\n  function explore(\n    state: string,\n    head: number,\n    tape: string,\n    depth: number\n  ): void {\n    if (depth > maxSteps) return;\n    if (tape.length > maxSpace) return;\n\n    const current = configToString({ state, tapeHead: head, tapeContent: tape });\n    if (graph.has(current)) return;\n\n    const neighbors: string[] = [];\n    const symbol = head &lt; tape.length ? tape[head] : \"_\";\n\n    // Simulate transitions\n    const transitions = generateTransitions(state, symbol);\n    for (const t of transitions) {\n      let newTape = tape;\n      if (head &lt; newTape.length) {\n        newTape = newTape.substring(0, head) + t.write + newTape.substring(head + 1);\n      } else {\n        newTape += t.write;\n      }\n\n      const newHead = head + (t.move === \"R\" ? 1 : -1);\n      if (newHead &lt; 0) {\n        newTape = \"_\" + newTape;\n        head = 0;\n      }\n\n      const neighbor = configToString({\n        state: t.nextState,\n        tapeHead: Math.max(0, newHead),\n        tapeContent: newTape\n      });\n      neighbors.push(neighbor);\n    }\n\n    graph.set(current, neighbors);\n\n    for (const n of neighbors) {\n      const parts = n.split(\",\");\n      explore(parts[0], parseInt(parts[1]), parts.slice(2).join(\",\"), depth + 1);\n    }\n  }\n\n  explore(initialState, 0, \"_\", 0);\n  return graph;\n}\n\nfunction generateTransitions(state: string, symbol: string): any[] {\n  return [{ write: symbol, move: \"R\", nextState: state }];\n}\n"
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