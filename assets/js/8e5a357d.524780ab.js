"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[66525],{

/***/ 19074
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_05_sdt_md_8e5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-05-sdt-md-8e5.json
const site_docs_courses_compiler_design_05_sdt_md_8e5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/05-sdt","title":"Chapter 5: Syntax-Directed Translation","description":"? Previous Bottom-Up Parsing | Next Intermediate Code Generation","source":"@site/docs/courses/compiler-design/05-sdt.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/05-sdt","permalink":"/ai-engineering-journey/compiler-design/05-sdt","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-sdt","slug":"/compiler-design/05-sdt","title":"Chapter 5: Syntax-Directed Translation","sidebar_label":"Chapter 5: Syntax-Directed Translation","sidebar_position":5},"sidebar":"coursesSidebar","previous":{"title":"Chapter 4: Bottom-Up Parsing","permalink":"/ai-engineering-journey/compiler-design/04-parsing-bottomup"},"next":{"title":"Chapter 6: Intermediate Code Generation","permalink":"/ai-engineering-journey/compiler-design/06-intermediate-code"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/05-sdt.md


const frontMatter = {
	id: '05-sdt',
	slug: '/compiler-design/05-sdt',
	title: 'Chapter 5: Syntax-Directed Translation',
	sidebar_label: 'Chapter 5: Syntax-Directed Translation',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Syntax-Directed Translation';

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
  "value": "Syntax-Directed Definitions",
  "id": "syntax-directed-definitions",
  "level": 3
}, {
  "value": "Attribute Classification",
  "id": "attribute-classification",
  "level": 3
}, {
  "value": "Dependency Graphs",
  "id": "dependency-graphs",
  "level": 3
}, {
  "value": "S-Attributed Definitions",
  "id": "s-attributed-definitions",
  "level": 3
}, {
  "value": "L-Attributed Definitions",
  "id": "l-attributed-definitions",
  "level": 3
}, {
  "value": "Syntax-Directed Translation Schemes",
  "id": "syntax-directed-translation-schemes",
  "level": 3
}, {
  "value": "Evaluation Order",
  "id": "evaluation-order",
  "level": 3
}, {
  "value": "Complete TypeScript SDT Evaluator",
  "id": "complete-typescript-sdt-evaluator",
  "level": 3
}, {
  "value": "Implementing S-Attributed Definitions in Yacc/Bison",
  "id": "implementing-s-attributed-definitions-in-yaccbison",
  "level": 3
}, {
  "value": "Implementing L-Attributed Definitions",
  "id": "implementing-l-attributed-definitions",
  "level": 3
}, {
  "value": "Applications of SDDs",
  "id": "applications-of-sdds",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
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
        id: "chapter-5-syntax-directed-translation",
        children: "Chapter 5: Syntax-Directed Translation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "? Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/04-parsing-bottomup",
        children: "Chapter 4: Bottom-Up Parsing"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/06-intermediate-code",
        children: "Chapter 6: Intermediate Code Generation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: define syntax-directed definitions (SDDs) for S-attributed and L-attributed grammars; construct syntax-directed translation schemes (SDTs); determine evaluation order from dependency graphs; implement S-attributed definitions using a bottom-up parser; implement L-attributed definitions using a top-down parser; compute attribute values with synthesized and inherited attributes; and apply SDDs to practical translation tasks such as type checking and code generation."
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
        href: "../../assets/images/lessons/compiler-design/05-sdt/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/05-sdt/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/05-sdt/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/05-sdt/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/05-sdt/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/05-sdt/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax-Directed Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG augmented with semantic rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute Classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synthesized vs inherited attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dependency Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualizing attribute flow through parse trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S-Attributed Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up evaluation with only synthesized attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L-Attributed Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left-to-right evaluation with inherited attributes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax-Directed Translation Schemes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedding actions in productions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluation Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topological sorting of attribute dependencies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementing S-Attributed Definitions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yacc/Bison ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$$"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "$i"
            }), " mechanism"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementing L-Attributed Definitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter passing in recursive-descent parsers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[SDD: Grammar + Rules] --> B{Attribute Type?}\n    B -->|Synthesized Only| C[S-Attributed]\n    B -->|Synthesized + Inherited| D[L-Attributed]\n    C --> E[Bottom-Up Evaluation]\n    D --> F[Depth-First Evaluation]\n    E --> G[Yacc/Bison Implementation]\n    F --> H[Recursive-Descent Implementation]\n    G --> I[Translator]\n    H --> I\n    style A fill:#e1f5fe\n    style I fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-directed-definitions",
      children: "Syntax-Directed Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "syntax-directed definition"
      }), " (SDD) is a context-free grammar augmented with semantic rules associated with each production. For a production ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? X1X2...X?"
      }), ", each grammar symbol may have an associated set of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "attributes"
      }), ". A semantic rule computes the value of an attribute in terms of other attributes in the same production. Attributes capture the meaning of the program fragment represented by the grammar symbol."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": An SDD for a desk calculator:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Production"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Semantic Rule"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "L ? E n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "L.val = E.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E ? E1 + T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E.val = E1.val + T.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E ? T"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "E.val = T.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T ? T1 * F"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T.val = T1.val * F.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T ? F"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "T.val = F.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F ? ( E )"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F.val = E.val"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F ? digit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "F.val = digit.lexval"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "attribute-classification",
      children: "Attribute Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Attributes are classified as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "synthesized"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inherited"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Attribute Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Synthesized"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed from children's attributes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Child ? Parent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postorder traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inherited"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computed from parent, siblings, or self"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parent/Sibling ? Child"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preorder/inorder traversal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A synthesized attribute for a nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " is computed from attributes of its children in the parse tree. Synthesized attributes pass information upward, from leaves toward the root."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An inherited attribute is computed from the attributes of the parent, siblings, and the nonterminal itself. Inherited attributes pass information sideways or downward through the parse tree, enabling context-dependent computations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dependency-graphs",
      children: "Dependency Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dependency graph"
      }), " represents attribute dependencies as a directed graph where nodes are attribute instances and edges indicate that the target attribute depends on the source attribute. For a well-formed SDD, the dependency graph for every possible parse tree must be acyclic."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Parse tree for 3*5+4\"\n        E_val[\"E.val\"]\n        E1_val[\"E1.val\"]\n        T_val[\"T.val\"]\n        T1_val[\"T1.val\"]\n        F1_val[\"F1.val\"]\n        F2_val[\"F2.val\"]\n        F3_val[\"F3.val\"]\n        plus[\"+\"]\n        times[\"*\"]\n        E_val --> plus\n        E1_val --> plus\n        T_val --> plus\n        T1_val --> times\n        F1_val --> times\n        F2_val --> times\n        plus --> E_val[\"E.val\"]\n        times --> T_val\n        F3_val --> T_val\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For S-attributed definitions, the dependency graph edges always go from children to parent. For L-attributed definitions, edges may go left-to-right or parent-to-child, but never right-to-left across a production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A correct evaluation order is any topological sort of the dependency graph. For S-attributed definitions, this corresponds to a postorder traversal. For L-attributed definitions, a depth-first left-to-right traversal works."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "s-attributed-definitions",
      children: "S-Attributed Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "S-attributed definition"
      }), " uses only synthesized attributes. Semantic rules compute a left-hand-side attribute from right-hand-side attributes only. S-attributed definitions are evaluated naturally during a bottom-up parse when a reduction occurs, because the child attributes are available on the parser stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "S-attributed grammars correspond to the class of context-free grammars that can be evaluated in a single bottom-up pass. Every S-attributed definition is trivially L-attributed."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "l-attributed-definitions",
      children: "L-Attributed Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L-attributed definition"
      }), " permits both synthesized and inherited attributes, subject to the restriction that each inherited attribute of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X?"
      }), " (the j-th symbol on the right-hand side) depends only on:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Inherited attributes of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A"
        }), " (the left-hand side)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attributes of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X1"
        }), " through ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X??1"
        }), " (symbols to the left of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X?"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Attributes of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "X?"
        }), " itself (synthesized or inherited ? but inherited must follow rule 1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left-to-right restriction"
      }), " ensures evaluation can proceed during a depth-first, left-to-right traversal of the parse tree, which matches the traversal performed by top-down (predictive) parsers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " S-attributed = bottom-up (Yacc), L-attributed = top-down (recursive descent). Every S-attributed grammar is also L-attributed, but not vice versa."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-directed-translation-schemes",
      children: "Syntax-Directed Translation Schemes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "syntax-directed translation scheme"
      }), " (SDT) embeds semantic actions at arbitrary positions within the right-hand side of a production. Actions are delimited by curly braces:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E ? E1 + T   { E.val = E1.val + T.val }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For LR parsing, actions must appear at the right end (", (0,jsx_runtime.jsx)(_components.strong, {
        children: "postfix SDT"
      }), ") because reductions occur only after the full right-hand side has been parsed. For LL parsing, actions may appear between grammar symbols; the action executes when the parser has recognized all symbols to its left."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An SDT can always be derived from an SDD by placing each semantic rule at the position where its evaluation becomes possible. The translation from SDD to SDT may require restructuring for practical parsing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "evaluation-order",
      children: "Evaluation Order"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For a well-formed SDD, the dependency graph for every possible parse tree is acyclic. A correct evaluation order is any topological sort. For S-attributed definitions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evaluate attributes in postorder:\n    for each node in parse tree (post-order):\n        compute synthesized attributes of node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For L-attributed definitions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Evaluate attributes in depth-first left-to-right:\n    function visit(node):\n        compute inherited attributes for children\n        for each child in left-to-right order:\n            visit(child)\n        compute synthesized attributes of node\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-sdt-evaluator",
      children: "Complete TypeScript SDT Evaluator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Abstract Syntax Tree node types\ninterface ASTNode {\n    kind: string;\n    value?: number;\n    children: ASTNode[];\n    attrs: {\n        synthesized?: Record<string, any>;\n        inherited?: Record<string, any>;\n    };\n}\n\nclass SDTEvaluator {\n    // S-attributed evaluation (bottom-up, postorder)\n    static evaluateSynthesized(node: ASTNode): number {\n        switch (node.kind) {\n            case \"digit\":\n                return node.value!;\n            case \"add\": {\n                const left = this.evaluateSynthesized(node.children[0]);\n                const right = this.evaluateSynthesized(node.children[1]);\n                const result = left + right;\n                node.attrs.synthesized = { val: result };\n                return result;\n            }\n            case \"sub\": {\n                const left = this.evaluateSynthesized(node.children[0]);\n                const right = this.evaluateSynthesized(node.children[1]);\n                const result = left - right;\n                node.attrs.synthesized = { val: result };\n                return result;\n            }\n            case \"mul\": {\n                const left = this.evaluateSynthesized(node.children[0]);\n                const right = this.evaluateSynthesized(node.children[1]);\n                const result = left * right;\n                node.attrs.synthesized = { val: result };\n                return result;\n            }\n            case \"div\": {\n                const left = this.evaluateSynthesized(node.children[0]);\n                const right = this.evaluateSynthesized(node.children[1]);\n                if (right === 0) throw new Error(\"Division by zero\");\n                const result = left / right;\n                node.attrs.synthesized = { val: result };\n                return result;\n            }\n            default:\n                throw new Error(`Unknown node kind: ${node.kind}`);\n        }\n    }\n\n    // L-attributed evaluation: type checking with symbol table\n    static typeCheck(\n        node: ASTNode,\n        env: Map<string, string>,\n        inherited?: { expectedType?: string }\n    ): string {\n        node.attrs.inherited = { ...inherited };\n\n        switch (node.kind) {\n            case \"id\": {\n                const name = node.value?.toString() ?? \"\";\n                const actualType = env.get(name) ?? \"unknown\";\n                const expected = inherited?.expectedType;\n                if (expected && actualType !== expected) {\n                    throw new Error(\n                        `Type error: ${name} has type ${actualType}, expected ${expected}`\n                    );\n                }\n                node.attrs.synthesized = { type: actualType };\n                return actualType;\n            }\n\n            case \"int\":\n                node.attrs.synthesized = { type: \"int\" };\n                return \"int\";\n\n            case \"float\":\n                node.attrs.synthesized = { type: \"float\" };\n                return \"float\";\n\n            case \"add\":\n            case \"sub\":\n            case \"mul\":\n            case \"div\": {\n                const leftType = this.typeCheck(node.children[0], env);\n                const rightType = this.typeCheck(node.children[1], env);\n\n                let resultType: string;\n                if (leftType === \"float\" || rightType === \"float\") {\n                    resultType = \"float\";\n                } else if (leftType === \"int\" && rightType === \"int\") {\n                    resultType = \"int\";\n                } else {\n                    throw new Error(\n                        `Type error in ${node.kind}: incompatible types ${leftType} and ${rightType}`\n                    );\n                }\n\n                node.attrs.synthesized = { type: resultType };\n                return resultType;\n            }\n\n            case \"assign\": {\n                // Inherited: expectedType flows from declaration to expression\n                const idNode = node.children[0];\n                const exprNode = node.children[1];\n                const idName = idNode.value?.toString() ?? \"\";\n                const declaredType = env.get(idName);\n\n                if (!declaredType) {\n                    throw new Error(`Undeclared variable: ${idName}`);\n                }\n\n                // Inherited attribute: pass expected type to expression\n                const exprType = this.typeCheck(exprNode, env, {\n                    expectedType: declaredType,\n                });\n\n                if (exprType !== declaredType) {\n                    throw new Error(\n                        `Type error: cannot assign ${exprType} to ${idName} (${declaredType})`\n                    );\n                }\n\n                node.attrs.synthesized = { type: declaredType };\n                return declaredType;\n            }\n\n            case \"decl\": {\n                const typeNode = node.children[0];\n                const idNode = node.children[1];\n                const type = typeNode.value?.toString() ?? \"int\";\n                const name = idNode.value?.toString() ?? \"\";\n\n                // Add to symbol table (side effect on env)\n                env.set(name, type);\n                node.attrs.synthesized = { type };\n                return type;\n            }\n\n            default:\n                throw new Error(`Unknown node kind: ${node.kind}`);\n        }\n    }\n\n    // Translation: infix expression to postfix notation (synthesized)\n    static toPostfix(node: ASTNode): string {\n        switch (node.kind) {\n            case \"digit\":\n                return String(node.value);\n            case \"id\":\n                return node.value?.toString() ?? \"\";\n            case \"add\":\n                return `${this.toPostfix(node.children[0])} ${this.toPostfix(node.children[1])} +`;\n            case \"sub\":\n                return `${this.toPostfix(node.children[0])} ${this.toPostfix(node.children[1])} -`;\n            case \"mul\":\n                return `${this.toPostfix(node.children[0])} ${this.toPostfix(node.children[1])} *`;\n            case \"div\":\n                return `${this.toPostfix(node.children[0])} ${this.toPostfix(node.children[1])} /`;\n            default:\n                throw new Error(`Unknown node kind: ${node.kind}`);\n        }\n    }\n\n    // Translation: AST to three-address code (L-attributed)\n    static toTAC(\n        node: ASTNode,\n        tempCounter: { count: number },\n        labelCounter: { count: number }\n    ): string[] {\n        const newTemp = (): string => `t${++tempCounter.count}`;\n        const newLabel = (): string => `L${++labelCounter.count}`;\n\n        // Synthesized: result variable name\n        // Inherited: label for jumps (via parameter)\n\n        const emit = (s: string) => code.push(s);\n        const code: string[] = [];\n\n        switch (node.kind) {\n            case \"int\":\n            case \"float\": {\n                const t = newTemp();\n                emit(`${t} = ${node.value}`);\n                node.attrs.synthesized = { var: t };\n                return code;\n            }\n            case \"id\": {\n                const t = newTemp();\n                emit(`${t} = ${node.value}`);\n                node.attrs.synthesized = { var: t };\n                return code;\n            }\n            case \"add\": case \"sub\": case \"mul\": case \"div\": {\n                const leftCode = this.toTAC(node.children[0], tempCounter, labelCounter);\n                const rightCode = this.toTAC(node.children[1], tempCounter, labelCounter);\n                const leftVar = node.children[0].attrs.synthesized?.var;\n                const rightVar = node.children[1].attrs.synthesized?.var;\n                const result = newTemp();\n                const op = node.kind === \"add\" ? \"+\" : node.kind === \"sub\" ? \"-\" : node.kind === \"mul\" ? \"*\" : \"/\";\n                code.push(...leftCode, ...rightCode, `${result} = ${leftVar} ${op} ${rightVar}`);\n                node.attrs.synthesized = { var: result };\n                return code;\n            }\n            case \"assign\": {\n                const exprCode = this.toTAC(node.children[1], tempCounter, labelCounter);\n                const exprVar = node.children[1].attrs.synthesized?.var;\n                const target = node.children[0].value;\n                code.push(...exprCode, `${target} = ${exprVar}`);\n                return code;\n            }\n            case \"if\": {\n                const condCode = this.toTAC(node.children[0], tempCounter, labelCounter);\n                const condVar = node.children[0].attrs.synthesized?.var;\n                const elseLabel = newLabel();\n                const endLabel = newLabel();\n\n                // Inherited label information flows to condition\n                code.push(...condCode);\n                code.push(`ifFalse ${condVar} goto ${elseLabel}`);\n                const thenCode = this.toTAC(node.children[1], tempCounter, labelCounter);\n                code.push(...thenCode);\n                code.push(`goto ${endLabel}`);\n                code.push(`${elseLabel}:`);\n                if (node.children.length > 2) {\n                    const elseCode = this.toTAC(node.children[2], tempCounter, labelCounter);\n                    code.push(...elseCode);\n                }\n                code.push(`${endLabel}:`);\n                return code;\n            }\n            case \"while\": {\n                const startLabel = newLabel();\n                const exitLabel = newLabel();\n                code.push(`${startLabel}:`);\n                const condCode = this.toTAC(node.children[0], tempCounter, labelCounter);\n                const condVar = node.children[0].attrs.synthesized?.var;\n                code.push(...condCode);\n                code.push(`ifFalse ${condVar} goto ${exitLabel}`);\n                const bodyCode = this.toTAC(node.children[1], tempCounter, labelCounter);\n                code.push(...bodyCode);\n                code.push(`goto ${startLabel}`);\n                code.push(`${exitLabel}:`);\n                return code;\n            }\n            default:\n                throw new Error(`Unknown node kind: ${node.kind}`);\n        }\n    }\n}\n\n// === Demo: S-Attributed Evaluation ===\n// Build AST for (3 + 5) * 2\nconst ast: ASTNode = {\n    kind: \"mul\",\n    children: [\n        {\n            kind: \"add\",\n            children: [\n                { kind: \"digit\", value: 3, children: [], attrs: {} },\n                { kind: \"digit\", value: 5, children: [], attrs: {} },\n            ],\n            attrs: {},\n        },\n        { kind: \"digit\", value: 2, children: [], attrs: {} },\n    ],\n    attrs: {},\n};\n\nconst result = SDTEvaluator.evaluateSynthesized(ast);\nconsole.log(`(3 + 5) * 2 = ${result}`);\n\n// === Demo: Type Checking (L-Attributed) ===\nconst env = new Map<string, string>();\nenv.set(\"x\", \"int\");\nenv.set(\"y\", \"float\");\n\nconst assignAST: ASTNode = {\n    kind: \"assign\",\n    children: [\n        { kind: \"id\", value: \"y\", children: [], attrs: {} },\n        { kind: \"int\", value: 42, children: [], attrs: {} },\n    ],\n    attrs: {},\n};\n\ntry {\n    const type = SDTEvaluator.typeCheck(assignAST, env);\n    console.log(`Assignment type: ${type}`);\n} catch (e: any) {\n    console.log(`Type error: ${e.message}`);\n}\n\n// === Demo: Postfix Translation ===\nconst exprAST: ASTNode = {\n    kind: \"add\",\n    children: [\n        { kind: \"id\", value: \"a\", children: [], attrs: {} },\n        {\n            kind: \"mul\",\n            children: [\n                { kind: \"id\", value: \"b\", children: [], attrs: {} },\n                { kind: \"id\", value: \"c\", children: [], attrs: {} },\n            ],\n            attrs: {},\n        },\n    ],\n    attrs: {},\n};\n\nconst postfix = SDTEvaluator.toPostfix(exprAST);\nconsole.log(`a + b * c ? postfix: ${postfix}`);\n\n// === Demo: Three-Address Code ===\nconst tacCode = SDTEvaluator.toTAC(exprAST, { count: 0 }, { count: 0 });\nconsole.log(\"\\nThree-address code for a + b * c:\");\ntacCode.forEach(line => console.log(`  ${line}`));\n\n// While loop TAC\nconst whileAST: ASTNode = {\n    kind: \"while\",\n    children: [\n        { kind: \"id\", value: \"i\", children: [], attrs: {} },  // condition: i (nonzero = true)\n        {\n            kind: \"assign\",\n            children: [\n                { kind: \"id\", value: \"sum\", children: [], attrs: {} },\n                {\n                    kind: \"add\",\n                    children: [\n                        { kind: \"id\", value: \"sum\", children: [], attrs: {} },\n                        { kind: \"id\", value: \"i\", children: [], attrs: {} },\n                    ],\n                    attrs: {},\n                },\n            ],\n            attrs: {},\n        },\n    ],\n    attrs: {},\n};\n\nconst whileCode = SDTEvaluator.toTAC(whileAST, { count: 0 }, { count: 10 });\nconsole.log(\"\\nThree-address code for while loop:\");\nwhileCode.forEach(line => console.log(`  ${line}`));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementing-s-attributed-definitions-in-yaccbison",
      children: "Implementing S-Attributed Definitions in Yacc/Bison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In Yacc or Bison, the synthesized attribute of a left-hand side nonterminal is denoted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$$"
      }), ", while right-hand side attributes are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$1"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$2"
      }), ", etc. When the parser reduces, it pops the right-hand side attributes, computes the action, and pushes the result:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yacc",
        children: "expr: expr '+' term   { $$ = $1 + $3; }\n    | term            { $$ = $1; }\n    ;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The parser's value stack manages these attributes. During reduction of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expr ? expr + term"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$1"
      }), " is the value of the first ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expr"
      }), " (previously computed and pushed), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$3"
      }), " is the value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "term"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "$$"
      }), " becomes the new ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expr"
      }), "'s value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementing-l-attributed-definitions",
      children: "Implementing L-Attributed Definitions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In a recursive-descent parser, L-attributed definitions are implemented by passing inherited attributes as function parameters and returning synthesized attributes. For each nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ", the parsing function receives inherited attributes and returns synthesized attributes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// L-attributed recursive descent with type propagation\nclass TypeCheckingParser {\n    private input: string[];\n    private pos = 0;\n    private env = new Map<string, string>();\n\n    parse(input: string[]): void {\n        this.input = input;\n        this.pos = 0;\n        this.program();\n    }\n\n    private peek(): string { return this.pos < this.input.length ? this.input[this.pos] : \"$\"; }\n    private consume(expected?: string): boolean {\n        if (expected && this.peek() !== expected) return false;\n        this.pos++;\n        return true;\n    }\n\n    // program ? decl* expr\n    private program(): void {\n        while (this.peek() === \"int\" || this.peek() === \"float\") {\n            this.declaration();\n        }\n        const type = this.expression();\n        console.log(`Expression type: ${type}`);\n    }\n\n    // declaration ? type ID ;\n    private declaration(): string {\n        const type = this.type();        // synthesized: type name\n        const name = this.peek();\n        this.consume(\"id\");              // consume identifier\n        this.env.set(name, type);\n        this.consume(\";\");\n        return type;\n    }\n\n    // type ? int | float\n    private type(): string {\n        if (this.peek() === \"int\") { this.consume(); return \"int\"; }\n        if (this.peek() === \"float\") { this.consume(); return \"float\"; }\n        throw new Error(\"Expected type\");\n    }\n\n    // expression ? term { (+|-) term }\n    private expression(inherited?: string): string {\n        let leftType = this.term();\n        while (this.peek() === \"+\" || this.peek() === \"-\") {\n            this.consume();\n            const rightType = this.term();\n            // Type checking rule: if either is float, result is float\n            leftType = leftType === \"float\" || rightType === \"float\" ? \"float\" : \"int\";\n        }\n        return leftType;  // synthesized type\n    }\n\n    // term ? factor { (*|/) factor }\n    private term(): string {\n        let leftType = this.factor();\n        while (this.peek() === \"*\" || this.peek() === \"/\") {\n            this.consume();\n            const rightType = this.factor();\n            leftType = leftType === \"float\" || rightType === \"float\" ? \"float\" : \"int\";\n        }\n        return leftType;\n    }\n\n    // factor ? ID | NUMBER | ( expression )\n    private factor(): string {\n        if (this.peek() === \"(\") {\n            this.consume();\n            const type = this.expression();\n            this.consume(\")\");\n            return type;\n        }\n        if (this.peek() === \"id\") {\n            const name = this.input[this.pos];\n            this.consume();\n            return this.env.get(name) ?? \"unknown\";\n        }\n        if (this.peek() === \"number\") {\n            this.consume();\n            return \"int\";\n        }\n        throw new Error(`Unexpected token: ${this.peek()}`);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-of-sdds",
      children: "Applications of SDDs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SDDs are used throughout compilation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type checker"
        }), ": Inherited attributes propagate the current environment; synthesized attributes compute expression types."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code generator"
        }), ": Inherited attributes manage label numbers and temporary variable names; synthesized attributes build code fragments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Desk calculator"
        }), ": Synthesized-only SDD evaluating arithmetic at parse time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language translators"
        }), ": SDTs mapping one language to another (e.g., infix to postfix, Java to JVM bytecode)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static analysis"
        }), ": Liveness analysis, reaching definitions, available expressions (Chapter 12)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "desk calculator"
      }), " is the canonical S-attributed example; the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "type checker"
      }), " is the canonical L-attributed example with context propagation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Syntax-directed definitions decorate context-free grammars with semantic rules. S-attributed definitions use only synthesized attributes and are evaluated during bottom-up parsing. L-attributed definitions add inherited attributes subject to left-to-right restrictions and are evaluated during top-down parsing. Dependency graphs determine evaluation order ? any topological sort is valid. SDDs and SDTs enable the compiler to perform type checking, code generation, and other semantic processing in a single pass integrated with parsing. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SDTEvaluator"
      }), " demonstrates both evaluation strategies with working code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with synthesized attributes"
        }), ": S-attributed definitions are simpler, expressive enough for many tasks, and map directly to bottom-up parsers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use inherited attributes for context"
        }), ": Type environments, label names, and variable scopes naturally flow downward as inherited attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency graphs expose ordering issues"
        }), ": Before implementing, draw the dependency graph. A cycle means your SDD is not well-formed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SDTs for LL parsing embed actions inline"
        }), ": Place actions where the needed information is available. Use marker nonterminals if an action must execute before a particular symbol."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Yacc/Bison's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$$"
          }), "/$i is S-attributed by nature"]
        }), ": For inherited attributes in bottom-up parsers, use embedded actions with intermediate markers or pass values through the parser stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// sdt\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'sdt', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// sdt - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'sdt' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What distinguishes a synthesized attribute from an inherited attribute?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Synthesized attributes are computed from children; inherited from parent/siblings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Synthesized attributes are always integers; inherited are always strings"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Synthesized attributes are computed at runtime; inherited at compile time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which type of attribute definition can be evaluated during a bottom-up parse?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Inherited only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) S-attributed (synthesized only)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) L-attributed only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Neither"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In a Yacc/Bison semantic action, what does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "$2"
          }), " represent?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The synthesized attribute of the LHS nonterminal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The attribute value of the second symbol on the RHS"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The second rule in the grammar"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The second token of lookahead"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "An L-attributed definition restricts inherited attributes of X? to depend on:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Only attributes of X??1 and beyond"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Inherited attributes of A and attributes of X1...X??1"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Any attribute anywhere in the grammar"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Only attributes of A"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A dependency graph for a well-formed SDD must be:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Acyclic"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Complete (every node connected to every other)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Cyclic"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. A, 2. B, 3. B, 4. B, 5. A\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between synthesized and inherited attributes. Provide a concrete example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What constraints define an L-attributed grammar? Why is the left-to-right restriction important?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does an S-attributed SDD integrate with a bottom-up parser stack?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a dependency graph, and how is it used to determine attribute evaluation order?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the difference between an SDD and an SDT. How are they related?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extend the desk-calculator SDD to include subtraction and unary minus. Show the new productions and semantic rules."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct the dependency graph for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3 * 5 + 4"
        }), " using the desk-calculator SDD. List a topological sort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an SDD that translates infix expressions to postfix notation. The rule for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "E ? E1 + T"
        }), " should emit the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " operator after both operands."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S ? while (C) S1"
        }), ", write the SDT to generate three-address code for the loop. Show the code for a specific condition and body. Identify inherited and synthesized attributes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine whether the following SDD is L-attributed: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A ? B C"
        }), " with rule ", (0,jsx_runtime.jsx)(_components.code, {
          children: "B.inh = f(A.inh, C.syn)"
        }), ". Justify your answer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SDTEvaluator"
        }), ", implement a new node kind ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"mod\""
        }), " for modulus and add its evaluation, type checking, postfix, and TAC methods."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a syntax-directed translator in TypeScript that reads infix arithmetic expressions and produces three-address code. Use a recursive-descent parser and an L-attributed SDD. Each identifier should be assigned a temporary. Support addition, subtraction, multiplication, division, and parentheses. Extend to boolean expressions with relational operators (==, <, >) and short-circuit evaluation. Demonstrate on five distinct expressions, showing the generated three-address code. Include expressions that test operator precedence and nested parentheses. Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SDTEvaluator.toTAC"
        }), " method as the core of your code generator."]
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