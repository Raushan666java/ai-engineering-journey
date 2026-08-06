"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[94996],{

/***/ 69157
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_06_intermediate_code_md_5be_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-06-intermediate-code-md-5be.json
const site_docs_courses_compiler_design_06_intermediate_code_md_5be_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/06-intermediate-code","title":"Chapter 6: Intermediate Code Generation","description":"? Previous Syntax-Directed Translation | Next Type Checking","source":"@site/docs/courses/compiler-design/06-intermediate-code.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/06-intermediate-code","permalink":"/ai-engineering-journey/compiler-design/06-intermediate-code","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-intermediate-code","slug":"/compiler-design/06-intermediate-code","title":"Chapter 6: Intermediate Code Generation","sidebar_label":"Chapter 6: Intermediate Code Generation","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Syntax-Directed Translation","permalink":"/ai-engineering-journey/compiler-design/05-sdt"},"next":{"title":"Chapter 7: Type Checking","permalink":"/ai-engineering-journey/compiler-design/07-type-checking"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/06-intermediate-code.md


const frontMatter = {
	id: '06-intermediate-code',
	slug: '/compiler-design/06-intermediate-code',
	title: 'Chapter 6: Intermediate Code Generation',
	sidebar_label: 'Chapter 6: Intermediate Code Generation',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Intermediate Code Generation';

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
  "value": "Intermediate Representations",
  "id": "intermediate-representations",
  "level": 3
}, {
  "value": "Abstract Syntax Trees",
  "id": "abstract-syntax-trees",
  "level": 3
}, {
  "value": "Postfix Notation",
  "id": "postfix-notation",
  "level": 3
}, {
  "value": "Three-Address Code",
  "id": "three-address-code",
  "level": 3
}, {
  "value": "Types of Three-Address Code Instructions",
  "id": "types-of-three-address-code-instructions",
  "level": 3
}, {
  "value": "Quadruples, Triples, and Indirect Triples",
  "id": "quadruples-triples-and-indirect-triples",
  "level": 3
}, {
  "value": "Directed Acyclic Graphs",
  "id": "directed-acyclic-graphs",
  "level": 3
}, {
  "value": "Generating TAC for Statements",
  "id": "generating-tac-for-statements",
  "level": 3
}, {
  "value": "TAC Generation from AST",
  "id": "tac-generation-from-ast",
  "level": 3
}, {
  "value": "Complete TypeScript TAC Generator",
  "id": "complete-typescript-tac-generator",
  "level": 3
}, {
  "value": "Concept Comparison",
  "id": "concept-comparison",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
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
        id: "chapter-6-intermediate-code-generation",
        children: "Chapter 6: Intermediate Code Generation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["? Previous: ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/05-sdt",
        children: "Chapter 5: Syntax-Directed Translation"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/07-type-checking",
        children: "Chapter 7: Type Checking"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: distinguish among abstract syntax trees, postfix notation, and three-address code as intermediate representations; construct quadruples, triples, and indirect triples; build directed acyclic graphs for common-subexpression sharing; generate three-address code for common programming-language constructs including assignment, conditional statements, loops, array access, and procedure calls; compare IRs on suitability, storage cost, and optimization potential; and implement a complete TAC generator in TypeScript."
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
        href: "../../assets/images/lessons/compiler-design/06-intermediate-code/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/06-intermediate-code/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/06-intermediate-code/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/06-intermediate-code/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/06-intermediate-code/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/06-intermediate-code/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Intermediate Representations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overview of graphical and linear IRs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Syntax Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compressed parse trees for semantic analysis and code gen"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix Notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack-oriented operator-last linear representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three-Address Code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear IR with one operator per instruction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quadruples, Triples, Indirect Triples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage formats for TAC"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Directed Acyclic Graphs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common-subexpression merging in expression trees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generating TAC for Statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment, while, if-then-else, break, calls"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAC Generation from AST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm and implementation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Annotated Parse Tree] --> B[AST Construction]\n    B --> C{IR Format Choice}\n    C -->|Graphical| D[AST / DAG]\n    C -->|Linear| E[Three-Address Code]\n    C -->|Stack| F[Postfix]\n    E --> G[Quadruples]\n    E --> H[Triples]\n    E --> I[Indirect Triples]\n    D --> J[Optimization]\n    G --> J\n    J --> K[Target Code Gen]\n    style A fill:#e1f5fe\n    style K fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate-representations",
      children: "Intermediate Representations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "intermediate representation"
      }), " (IR) sits between the source-language parse tree and the target-machine code. A good IR is independent of both the source language and the target machine, facilitates optimization, and supports retargeting. Three principal forms are in wide use:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graphical IRs"
        }), ": Abstract syntax trees (ASTs) and directed acyclic graphs (DAGs)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear IRs"
        }), ": Postfix notation and three-address code (TAC)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hybrid forms"
        }), ": Control-flow graphs with basic blocks, SSA form."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The choice of IR significantly influences the compiler's optimization capability, the complexity of analysis passes, and the ease of adding new language features."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "abstract-syntax-trees",
      children: "Abstract Syntax Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "abstract syntax tree"
      }), " (AST) is a compressed representation of the parse tree in which operators appear as interior nodes and operands as children. Syntactic markers such as parentheses, semicolons, commas, and grouping nonterminals are omitted."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": The AST for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b * c"
      }), " has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " at the root, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " as its left child, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " as its right child, with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " as children of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    plus[\"+\"]\n    a[\"a\"]\n    times[\"*\"]\n    b[\"b\"]\n    c[\"c\"]\n    plus --> a\n    plus --> times\n    times --> b\n    times --> c\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ASTs are the primary IR in many compilers because they closely reflect the source program's structure while eliminating syntactic noise. Attributes can be attached to AST nodes for semantic analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An AST node stores its operator (or token kind) and pointers to its children. The tree is traversed recursively for type checking and code generation. The AST is typically constructed during or immediately after parsing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "postfix-notation",
      children: "Postfix Notation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Postfix"
      }), " (Reverse Polish) notation represents expressions with the operator following its operands. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ab c * +"
      }), " corresponds to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b * c"
      }), ". Postfix requires no parentheses and no precedence rules because operator placement alone fixes evaluation order."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Infix"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Postfix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a b +"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a * b + c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a b * c +"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b * c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a b c * +"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(a + b) * c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a b + c *"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a / b - c * d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a b / c d * -"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Postfix is evaluated by a stack machine: operands push onto the stack, operators pop their arguments and push the result. While simple to generate and evaluate, postfix is not well suited to optimization because the stack-oriented representation obscures data dependencies and variable lifetimes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "three-address-code",
      children: "Three-Address Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Three-address code"
      }), " (TAC) is a linear IR where each instruction has the form ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y op z"
      }), ", performing one operation with at most one operator on the right-hand side. The name derives from each instruction referencing at most three addresses: two for operands and one for the result. Addresses may be names (identifiers), constants, or compiler-generated temporaries."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key properties of TAC"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each instruction does bounded work (one operation)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Temporaries have explicit names, making dataflow analysis straightforward."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Instructions can be freely reordered, inserted, and removed during optimization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It is close enough to machine code to generate efficiently."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " TAC is the universal IR ? simple enough to optimize, expressive enough for all language constructs, and close enough to machine code to generate efficiently."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-three-address-code-instructions",
      children: "Types of Three-Address Code Instructions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Instruction Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment (binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = y op z"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = a + b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment (unary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = op y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = -t2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = t2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto L1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if x relop y goto L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if a < b goto L2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifFalse x goto L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifFalse x goto L3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Procedure call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "call p, n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "call sort, 1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Procedure param"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "param x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "param a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return t1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array load"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = y[i]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = a[i]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x[i] = y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i] = t1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address-of"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = &y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = &buffer"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load through pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = *y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "t1 = *ptr"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Store through pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*x = y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr = t1"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quadruples-triples-and-indirect-triples",
      children: "Quadruples, Triples, and Indirect Triples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quadruple"
      }), " is a four-field record ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(op, arg1, arg2, result)"
      }), ". For unary operators, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arg2"
      }), " is omitted. The instruction ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = y + z"
      }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(+, y, z, x)"
      }), ". Quadruples are the most common TAC representation because temporaries are named explicitly, simplifying code transformation. Optimization passes can freely move, modify, and insert quadruples without concern for positional references."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "op"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arg1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arg2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t2"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "triple"
      }), " uses three fields ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(op, arg1, arg2)"
      }), " and refers to the result of an operation by its position in the sequence. For example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(*, a, b)"
      }), " at position 1 means that subsequent instructions may refer to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(1)"
      }), " as an operand:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "op"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arg1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arg2"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Triples save space by omitting the result field, but they complicate code movement because reordering changes positional references. An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "indirect triple"
      }), " lists pointers to triples in execution order. The triple list stores actual instructions while a separate execution list determines evaluation order. Code motion is achieved by rearranging the execution list without renumbering triples."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "directed-acyclic-graphs",
      children: "Directed Acyclic Graphs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "DAG"
      }), " for an expression merges common subexpressions into a single node. If the same subexpression appears multiple times, the DAG shares one node."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Construction algorithm"
      }), ": Before creating a new node for an operator with given children, check whether such a node already exists. If so, reuse it."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": DAG for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b * c + a * d"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The DAG shares node ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " (appears in two places). The multiplication ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b * c"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a + d"
      }), " are distinct unless values coincide."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    plus2[\"+ (root)\"]\n    plus1[\"+\"]\n    times1[\"*\"]\n    times2[\"*\"]\n    a[\"a\"]\n    b[\"b\"]\n    c[\"c\"]\n    d[\"d\"]\n    plus2 --> plus1\n    plus1 --> a\n    plus1 --> times1\n    times1 --> b\n    times1 --> c\n    plus2 --> times2\n    times2 --> a\n    times2 --> d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DAGs enable:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Common-subexpression elimination"
        }), ": Identical subexpressions produce one evaluation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced register pressure"
        }), ": Fewer distinct values to hold in registers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplified code generation"
        }), ": The DAG is traversed once per unique value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "generating-tac-for-statements",
      children: "Generating TAC for Statements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Assignment"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = expr"
      }), " generates code for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expr"
      }), " ending with a temporary holding the result value, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = temp"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "t1 = expr_result\nx = t1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "While loops"
      }), ": The condition is evaluated at the top; if false, jump past the body; after the body, jump back:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "L1: ifFalse cond goto L2\n    body\n    goto L1\nL2: ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "If-then-else"
      }), ": Condition branches to the else part; the then clause falls through and jumps past else:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    ifFalse cond goto L1\n    then_body\n    goto L2\nL1: else_body\nL2: ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "For loops"
      }), ": Desugared into initialization, while-loop condition check, loop body, and increment:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "i = 0\nL1: if i >= 10 goto L2\n    sum = sum + a[i]\n    i = i + 1\n    goto L1\nL2: ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Procedure calls"
      }), ": Arguments evaluated left to right with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "param"
      }), " instructions, then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "call p, n"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "param expr1\nparam expr2\ncall f, 2\nt1 = return_value    ; if function returns a value\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Break / Continue"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " jumps to the exit label of the innermost enclosing loop; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " jumps to the loop's reentry label."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Switch"
      }), ": Typically compiled to a jump table or chained if-then-else:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    if x == case1 goto L1\n    if x == case2 goto L2\n    ...\n    goto default\nL1: ... body1 ... goto exit\nL2: ... body2 ... goto exit\n    ...\nexit:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tac-generation-from-ast",
      children: "TAC Generation from AST"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard algorithm processes the AST recursively:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function genTAC(node, nextLabel):\n    if node is IntLiteral:\n        t = newTemp()\n        emit(t \"=\" node.value)\n        return t\n    if node is Identifier:\n        t = newTemp()\n        emit(t \"=\" node.name)\n        return t\n    if node is BinaryOp:\n        left = genTAC(node.left)\n        right = genTAC(node.right)\n        t = newTemp()\n        emit(t \"=\" left node.op right)\n        return t\n    if node is Assignment:\n        val = genTAC(node.expr)\n        emit(node.target \"=\" val)\n    if node is If:\n        cond = genTAC(node.condition)\n        elseLabel = newLabel()\n        exitLabel = newLabel()\n        emit(\"ifFalse\" cond \"goto\" elseLabel)\n        genTAC(node.thenBody)\n        emit(\"goto\" exitLabel)\n        emit(elseLabel \":\")\n        genTAC(node.elseBody)    // if present\n        emit(exitLabel \":\")\n    if node is While:\n        reentryLabel = newLabel()\n        exitLabel = newLabel()\n        emit(reentryLabel \":\")\n        cond = genTAC(node.condition)\n        emit(\"ifFalse\" cond \"goto\" exitLabel)\n        genTAC(node.body)\n        emit(\"goto\" reentryLabel)\n        emit(exitLabel \":\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Labels are generated sequentially (L1, L2, L3, ...). Temporaries are generated sequentially (t1, t2, t3, ...). The algorithm maintains counters for both and passes them through recursive calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-tac-generator",
      children: "Complete TypeScript TAC Generator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// AST node types for intermediate code generation\ntype ASTNodeType =\n    | \"int\" | \"float\" | \"id\"\n    | \"add\" | \"sub\" | \"mul\" | \"div\" | \"mod\" | \"neg\"\n    | \"eq\" | \"ne\" | \"lt\" | \"le\" | \"gt\" | \"ge\"\n    | \"and\" | \"or\" | \"not\"\n    | \"assign\"\n    | \"if\" | \"while\" | \"for\"\n    | \"break\" | \"continue\"\n    | \"seq\"           // sequence of statements\n    | \"call\" | \"param\"\n    | \"array_load\" | \"array_store\"\n    ;\n\ninterface ASTNode {\n    kind: ASTNodeType;\n    value?: string | number;\n    children: ASTNode[];\n}\n\n// Factory functions for AST nodes\nconst Int = (val: number): ASTNode => ({ kind: \"int\", value: val, children: [] });\nconst Id = (name: string): ASTNode => ({ kind: \"id\", value: name, children: [] });\nconst BinOp = (kind: ASTNodeType, left: ASTNode, right: ASTNode): ASTNode =>\n    ({ kind, children: [left, right] });\nconst Assign = (target: ASTNode, expr: ASTNode): ASTNode =>\n    ({ kind: \"assign\", children: [target, expr] });\nconst If = (cond: ASTNode, then: ASTNode, else_?: ASTNode): ASTNode =>\n    ({ kind: \"if\", children: [cond, then, ...(else_ ? [else_] : [])] });\nconst While = (cond: ASTNode, body: ASTNode): ASTNode =>\n    ({ kind: \"while\", children: [cond, body] });\nconst Seq = (...stmts: ASTNode[]): ASTNode =>\n    ({ kind: \"seq\", children: stmts });\nconst Call = (name: string, ...args: ASTNode[]): ASTNode =>\n    ({ kind: \"call\", value: name, children: args });\n\n// TAC instruction types\ntype TACOp = \"=\" | \"+\" | \"-\" | \"*\" | \"/\" | \"%\" | \"-u\" | \"==\" | \"!=\" | \"<\" | \"<=\" | \">\" | \">=\"\n    | \"goto\" | \"if\" | \"ifFalse\" | \"call\" | \"param\" | \"return\"\n    | \"[]=\" | \"=[]\" | \"&\" | \"*=\" | \"=*\";\n\ninterface TACInstr {\n    op: TACOp;\n    arg1?: string;\n    arg2?: string;\n    result?: string;\n}\n\nclass TACGenerator {\n    private temps = 0;\n    private labels = 0;\n    private code: TACInstr[] = [];\n\n    private newTemp(): string {\n        return `t${++this.temps}`;\n    }\n\n    private newLabel(): string {\n        return `L${++this.labels}`;\n    }\n\n    emit(op: TACOp, result?: string, arg1?: string, arg2?: string): void {\n        this.code.push({ op, result, arg1, arg2 });\n    }\n\n    // Generate TAC for a single AST node\n    generate(node: ASTNode): string {\n        switch (node.kind) {\n            case \"int\":\n            case \"float\": {\n                const t = this.newTemp();\n                this.emit(\"=\", t, String(node.value));\n                return t;\n            }\n\n            case \"id\": {\n                const t = this.newTemp();\n                this.emit(\"=\", t, String(node.value));\n                return t;\n            }\n\n            case \"neg\": {\n                const v = this.generate(node.children[0]);\n                const t = this.newTemp();\n                this.emit(\"-u\", t, v);\n                return t;\n            }\n\n            case \"add\": case \"sub\": case \"mul\": case \"div\": case \"mod\": {\n                const left = this.generate(node.children[0]);\n                const right = this.generate(node.children[1]);\n                const t = this.newTemp();\n                const opMap: Record<string, TACOp> = {\n                    add: \"+\", sub: \"-\", mul: \"*\", div: \"/\", mod: \"%\"\n                };\n                this.emit(opMap[node.kind], t, left, right);\n                return t;\n            }\n\n            case \"eq\": case \"ne\": case \"lt\": case \"le\": case \"gt\": case \"ge\": {\n                const left = this.generate(node.children[0]);\n                const right = this.generate(node.children[1]);\n                const t = this.newTemp();\n                const opMap: Record<string, TACOp> = {\n                    eq: \"==\", ne: \"!=\", lt: \"<\", le: \"<=\", gt: \">\", ge: \">=\"\n                };\n                this.emit(opMap[node.kind], t, left, right);\n                return t;\n            }\n\n            case \"and\": {\n                // Short-circuit: if left is false, skip right\n                const left = this.generate(node.children[0]);\n                const t = this.newTemp();\n                const skipLabel = this.newLabel();\n                const assignLabel = this.newLabel();\n                this.emit(\"=\", t, \"0\");                         // t = false\n                this.emit(\"ifFalse\", undefined, left, skipLabel); // if !left goto skip\n                const right = this.generate(node.children[1]);\n                this.emit(\"=\", t, right);                        // t = right\n                this.emit(\"goto\", undefined, assignLabel);        // goto end\n                this.emit(skipLabel + \":\" as any, undefined, undefined, undefined); // label\n                return t;\n            }\n\n            case \"or\": {\n                // Short-circuit: if left is true, skip right\n                const left = this.generate(node.children[0]);\n                const t = this.newTemp();\n                const assignLabel = this.newLabel();\n                const skipLabel = this.newLabel();\n                this.emit(\"=\", t, \"1\");                          // t = true\n                this.emit(\"if\", undefined, left, assignLabel);    // if left goto assign\n                const right = this.generate(node.children[1]);\n                this.emit(\"=\", t, right);                         // t = right\n                this.emit(\"goto\", undefined, skipLabel);           // goto end\n                this.emit(assignLabel + \":\" as any);               // label\n                return t;\n            }\n\n            case \"not\": {\n                const v = this.generate(node.children[0]);\n                const t = this.newTemp();\n                const opMap: Record<string, TACOp> = { not: \"==\" };\n                this.emit(opMap[node.kind], t, v, \"0\");\n                return t;\n            }\n\n            case \"assign\": {\n                const val = this.generate(node.children[1]);\n                const target = node.children[0].value as string;\n                this.emit(\"=\", target, val);\n                return target;\n            }\n\n            case \"seq\": {\n                let lastResult = \"\";\n                for (const child of node.children) {\n                    lastResult = this.generate(child);\n                }\n                return lastResult;\n            }\n\n            case \"if\": {\n                const cond = this.generate(node.children[0]);\n                const elseLabel = this.newLabel();\n                const exitLabel = this.newLabel();\n                this.emit(\"ifFalse\", undefined, cond, elseLabel);\n                this.generate(node.children[1]);                 // then body\n                this.emit(\"goto\", undefined, exitLabel);\n                this.emit(elseLabel + \":\" as any);\n                if (node.children.length > 2) {\n                    this.generate(node.children[2]);            // else body\n                }\n                this.emit(exitLabel + \":\" as any);\n                return \"\";\n            }\n\n            case \"while\": {\n                const reentryLabel = this.newLabel();\n                const exitLabel = this.newLabel();\n                this.emit(reentryLabel + \":\" as any);\n                const cond = this.generate(node.children[0]);\n                this.emit(\"ifFalse\", undefined, cond, exitLabel);\n                this.generate(node.children[1]);                // body\n                this.emit(\"goto\", undefined, reentryLabel);\n                this.emit(exitLabel + \":\" as any);\n                return \"\";\n            }\n\n            case \"for\": {\n                // for (init; cond; incr) body\n                const init = node.children[0];\n                const cond = node.children[1];\n                const incr = node.children[2];\n                const body = node.children[3];\n                const reentryLabel = this.newLabel();\n                const exitLabel = this.newLabel();\n                this.generate(init);\n                this.emit(reentryLabel + \":\" as any);\n                const condVal = this.generate(cond);\n                this.emit(\"ifFalse\", undefined, condVal, exitLabel);\n                this.generate(body);\n                this.generate(incr);\n                this.emit(\"goto\", undefined, reentryLabel);\n                this.emit(exitLabel + \":\" as any);\n                return \"\";\n            }\n\n            case \"array_load\": {\n                const arr = this.generate(node.children[0]);\n                const idx = this.generate(node.children[1]);\n                const t = this.newTemp();\n                this.emit(\"=[]\", t, arr, idx);\n                return t;\n            }\n\n            case \"array_store\": {\n                const arr = this.generate(node.children[0]);\n                const idx = this.generate(node.children[1]);\n                const val = this.generate(node.children[2]);\n                this.emit(\"[]=\", undefined, arr, idx);\n                return val;\n            }\n\n            case \"call\": {\n                const funcName = node.value as string;\n                for (const arg of node.children) {\n                    const argVal = this.generate(arg);\n                    this.emit(\"param\", undefined, argVal);\n                }\n                const t = this.newTemp();\n                this.emit(\"call\", t, funcName, String(node.children.length));\n                return t;\n            }\n\n            default:\n                throw new Error(`Unknown node kind: ${node.kind}`);\n        }\n    }\n\n    getCode(): TACInstr[] {\n        return this.code;\n    }\n\n    printCode(): void {\n        this.code.forEach((instr, i) => {\n            const line = this.formatInstr(instr);\n            console.log(`${i + 1}: ${line}`);\n        });\n    }\n\n    private formatInstr(instr: TACInstr): string {\n        if (instr.op.endsWith(\":\")) {\n            return instr.op; // label\n        }\n        const parts: string[] = [];\n        if (instr.result) parts.push(instr.result, \"=\");\n        parts.push(instr.op);\n        if (instr.arg1) parts.push(instr.arg1);\n        if (instr.arg2) parts.push(instr.arg2);\n        return parts.join(\" \");\n    }\n\n    reset(): void {\n        this.temps = 0;\n        this.labels = 0;\n        this.code = [];\n    }\n}\n\n// === DAG Construction ===\ninterface DAGNode {\n    id: number;\n    op: string;\n    left?: DAGNode;\n    right?: DAGNode;\n    value?: string | number;\n    labels: Set<string>; // names of variables holding this value\n}\n\nclass ExpressionDAG {\n    private nodes: DAGNode[] = [];\n    private nextId = 0;\n\n    private makeNode(\n        op: string,\n        left?: DAGNode,\n        right?: DAGNode,\n        value?: string | number\n    ): DAGNode {\n        const node: DAGNode = {\n            id: this.nextId++,\n            op,\n            left,\n            right,\n            value,\n            labels: new Set(),\n        };\n        this.nodes.push(node);\n        return node;\n    }\n\n    private findNode(\n        op: string,\n        left?: DAGNode,\n        right?: DAGNode,\n        value?: string | number\n    ): DAGNode | undefined {\n        return this.nodes.find(n =>\n            n.op === op &&\n            n.left === left &&\n            n.right === right &&\n            n.value === value\n        );\n    }\n\n    // Create or find a leaf (identifier or constant)\n    leaf(value: string | number): DAGNode {\n        const existing = this.findNode(\"leaf\", undefined, undefined, value);\n        if (existing) return existing;\n        return this.makeNode(\"leaf\", undefined, undefined, value);\n    }\n\n    // Create or find an interior node (operator with children)\n    interior(op: string, left: DAGNode, right?: DAGNode): DAGNode {\n        // Check for constant folding\n        if (left.op === \"leaf\" && right && right.op === \"leaf\") {\n            const lv = Number(left.value);\n            const rv = Number(right.value);\n            if (!isNaN(lv) && !isNaN(rv)) {\n                let folded: number;\n                switch (op) {\n                    case \"+\": folded = lv + rv; break;\n                    case \"-\": folded = lv - rv; break;\n                    case \"*\": folded = lv * rv; break;\n                    case \"/\": folded = lv / rv; break;\n                    default: folded = NaN;\n                }\n                if (!isNaN(folded)) {\n                    return this.leaf(folded);\n                }\n            }\n        }\n\n        const existing = this.findNode(op, left, right);\n        if (existing) return existing;\n        return this.makeNode(op, left, right);\n    }\n\n    // Add a label (variable assignment) to a node\n    addLabel(node: DAGNode, label: string): void {\n        node.labels.add(label);\n    }\n\n    // Generate TAC from DAG (postorder)\n    toTAC(): TACInstr[] {\n        const tac: TACInstr[] = [];\n        const visited = new Set<number>();\n        const nodeToTemp = new Map<number, string>();\n        let tempCount = 0;\n\n        const visit = (node: DAGNode): string | undefined => {\n            if (visited.has(node.id) && nodeToTemp.has(node.id)) {\n                return nodeToTemp.get(node.id);\n            }\n            if (node.labels.size > 0 && nodeToTemp.has(node.id)) {\n                return nodeToTemp.get(node.id);\n            }\n\n            if (node.op === \"leaf\") {\n                // Store constant or identifier reference\n                const t = `t${++tempCount}`;\n                nodeToTemp.set(node.id, t);\n                visited.add(node.id);\n                const val = typeof node.value === \"string\"\n                    ? node.value\n                    : String(node.value);\n                tac.push({ op: \"=\", result: t, arg1: val });\n                return t;\n            }\n\n            const leftTemp = node.left ? visit(node.left) : undefined;\n            const rightTemp = node.right ? visit(node.right) : undefined;\n            const t = `t${++tempCount}`;\n\n            const opMap: Record<string, TACOp> = {\n                \"+\": \"+\", \"-\": \"-\", \"*\": \"*\", \"/\": \"/\"\n            };\n\n            tac.push({\n                op: opMap[node.op] || (node.op as TACOp),\n                result: t,\n                arg1: leftTemp,\n                arg2: rightTemp,\n            });\n\n            nodeToTemp.set(node.id, t);\n            visited.add(node.id);\n\n            // If variable assigned to this node, emit copy\n            for (const label of node.labels) {\n                tac.push({ op: \"=\", result: label, arg1: t });\n            }\n\n            return t;\n        };\n\n        // Visit roots (nodes without parents)\n        const parents = new Set<DAGNode>();\n        for (const n of this.nodes) {\n            if (n.left) parents.add(n.left);\n            if (n.right) parents.add(n.right);\n        }\n        const roots = this.nodes.filter(n => !parents.has(n));\n        for (const root of roots) {\n            visit(root);\n        }\n\n        return tac;\n    }\n\n    printDAG(): void {\n        console.log(\"DAG nodes:\");\n        for (const n of this.nodes) {\n            const children = [n.left?.id, n.right?.id]\n                .filter(id => id !== undefined)\n                .join(\", \");\n            const labels = [...n.labels].join(\", \");\n            console.log(\n                `  n${n.id}: ${n.op}${n.value !== undefined ? `(${n.value})` : \"\"}` +\n                ` children=[${children}] labels=[${labels}]`\n            );\n        }\n    }\n}\n\n// === Demos ===\n\n// Demo 1: Expression TAC\nconsole.log(\"=== Demo 1: Arithmetic Expression ===\");\nconst gen1 = new TACGenerator();\nconst expr1 = BinOp(\"add\",\n    BinOp(\"mul\", Int(3), Int(5)),\n    Int(2)\n);\ngen1.generate(expr1);\ngen1.printCode();\n\n// Demo 2: Assignment with control flow\nconsole.log(\"\\n=== Demo 2: If-Then-Else ===\");\nconst gen2 = new TACGenerator();\ngen2.generate(\n    If(\n        BinOp(\"gt\", Id(\"x\"), Id(\"y\")),\n        Assign(Id(\"z\"), BinOp(\"add\", Id(\"x\"), Id(\"y\"))),\n        Assign(Id(\"z\"), BinOp(\"sub\", Id(\"x\"), Id(\"y\")))\n    )\n);\ngen2.printCode();\n\n// Demo 3: While loop with array access\nconsole.log(\"\\n=== Demo 3: While Loop Sum ===\");\nconst gen3 = new TACGenerator();\ngen3.generate(\n    Seq(\n        Assign(Id(\"i\"), Int(0)),\n        Assign(Id(\"sum\"), Int(0)),\n        While(\n            BinOp(\"lt\", Id(\"i\"), Int(10)),\n            Seq(\n                Assign(Id(\"sum\"),\n                    BinOp(\"add\", Id(\"sum\"),\n                        { kind: \"array_load\", children: [Id(\"a\"), Id(\"i\")] } as ASTNode\n                    )\n                ),\n                Assign(Id(\"i\"), BinOp(\"add\", Id(\"i\"), Int(1)))\n            )\n        )\n    )\n);\ngen3.printCode();\n\n// Demo 4: Function call\nconsole.log(\"\\n=== Demo 4: Procedure Call ===\");\nconst gen4 = new TACGenerator();\ngen4.generate(Call(\"sort\", Id(\"arr\"), Int(0), Int(99)));\ngen4.printCode();\n\n// Demo 5: Boolean short-circuit\nconsole.log(\"\\n=== Demo 5: Boolean AND (short-circuit) ===\");\nconst gen5 = new TACGenerator();\ngen5.generate(\n    Assign(Id(\"safe\"),\n        BinOp(\"and\",\n            BinOp(\"gt\", Id(\"ptr\"), Int(0)),\n            BinOp(\"lt\", { kind: \"array_load\", children: [Id(\"ptr\"), Int(0)] } as ASTNode, Int(100))\n        )\n    )\n);\ngen5.printCode();\n\n// Demo 6: For loop desugared\nconsole.log(\"\\n=== Demo 6: For Loop ===\");\nconst gen6 = new TACGenerator();\ngen6.generate({\n    kind: \"for\",\n    children: [\n        Assign(Id(\"i\"), Int(0)),\n        BinOp(\"lt\", Id(\"i\"), Int(10)),\n        Assign(Id(\"i\"), BinOp(\"add\", Id(\"i\"), Int(1))),\n        Assign(Id(\"sum\"), BinOp(\"add\", Id(\"sum\"), { kind: \"array_load\", children: [Id(\"a\"), Id(\"i\")] } as ASTNode)),\n    ]\n} as ASTNode);\ngen6.printCode();\n\n// Demo 7: DAG construction with CSE\nconsole.log(\"\\n=== Demo 7: DAG with Common-Subexpression Elimination ===\");\nconst dag = new ExpressionDAG();\n// Expression: a + b * c + a * d\n// a appears twice; share the leaf node\nconst da = dag.leaf(\"a\");\nconst db = dag.leaf(\"b\");\nconst dc = dag.leaf(\"c\");\nconst dd = dag.leaf(\"d\");\n\nconst bc = dag.interior(\"*\", db, dc);\nconst ad = dag.interior(\"*\", da, dd);\nconst abc = dag.interior(\"+\", da, bc);\nconst root = dag.interior(\"+\", abc, ad);\n\ndag.addLabel(root, \"result\");\ndag.printDAG();\n\nconsole.log(\"\\nOptimized TAC from DAG:\");\nconst dagTac = dag.toTAC();\ndagTac.forEach((instr, i) => {\n    const parts: string[] = [];\n    if (instr.result) parts.push(instr.result, \"=\");\n    parts.push(instr.op);\n    if (instr.arg1) parts.push(instr.arg1);\n    if (instr.arg2) parts.push(instr.arg2);\n    console.log(`  ${i + 1}: ${parts.join(\" \")}`);\n});\n\n// Demo 8: Constant folding in DAG\nconsole.log(\"\\n=== Demo 8: Constant Folding ===\");\nconst dag2 = new ExpressionDAG();\nconst c2 = dag2.leaf(2);\nconst c3 = dag2.leaf(3);\nconst c5 = dag2.leaf(5);\n// 2 + 3 = 5, then 5 * 5 = 25 (constant folded)\nconst sum = dag2.interior(\"+\", c2, c3);\nconst prod = dag2.interior(\"*\", sum, c5);\ndag2.addLabel(prod, \"x\");\ndag2.printDAG();\n\nconsole.log(\"\\nConstant-folded TAC:\");\ndag2.toTAC().forEach((instr, i) => {\n    const parts: string[] = [];\n    if (instr.result) parts.push(instr.result, \"=\");\n    parts.push(instr.op);\n    if (instr.arg1) parts.push(instr.arg1);\n    if (instr.arg2) parts.push(instr.arg2);\n    console.log(`  ${i + 1}: ${parts.join(\" \")}`);\n});\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison",
      children: "Concept Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "IR Format"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization Suitability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Storage Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Retargetability"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph with node sharing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (CSE)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear stack code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAC (Quadruple)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear with named temps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAC (Triple)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear with positional refs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "TAC (Indirect Triple)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution list + triple pool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (movable)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SSA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG with f-nodes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language Design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defining IR for new compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR choice shapes optimization capability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Systems Programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LLVM IR, GCC GIMPLE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production compilers use multi-level IRs (HIR, MIR, LIR)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "WebAssembly as compile target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wasm is a typed low-level IR for the web"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tooling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static analysis frameworks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR enables cross-language analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source maps and IR breakpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IR-level debugging improves developer experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-vectorization, inlining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SSA-based IR enables aggressive optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Intermediate code generation translates the annotated parse tree into an IR independent of both source language and target machine. ASTs and DAGs provide graphical representations for analysis, while three-address code in quadruple, triple, or indirect-triple form provides a linear representation straightforward to translate into assembly. The choice of IR significantly influences the compiler's optimization capability and retargetability. TAC is the dominant IR in modern production compilers because of its simplicity, expressiveness, and optimization suitability. The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TACGenerator"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ExpressionDAG"
      }), " classes demonstrate both linear and graphical IR construction with working demos covering expressions, control flow, loops, procedure calls, DAG-based CSE, and constant folding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quadruples are the practical default"
        }), ": Explicit result fields make code transformations easy. Use quadruples unless space constraints are extreme."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DAGs are free CSE"
        }), ": Building a DAG during construction automatically eliminates common subexpressions without a separate optimization pass."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TAC is machine-independent"
        }), ": Generate TAC without knowing the target architecture. Retargeting only requires translating TAC to the target assembly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Label and temp naming conventions matter"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "L1, L2, ..."
        }), " for labels and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "t1, t2, ..."
        }), " for temporaries ? they keep the generated code readable and debuggable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short-circuit evaluation matches source semantics"
        }), ": Boolean ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " must generate conditional jumps, not simple arithmetic, to preserve the evaluation semantics required by most languages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// intermediate code\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'intermediate code', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// intermediate code - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'intermediate code' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the key advantage of three-address code over ASTs for optimization?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It is easier for humans to read"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Each instruction does bounded work, making reordering and analysis straightforward"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It requires less memory than any other representation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It can only represent arithmetic expressions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does a DAG differ from an AST?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) DAGs use more memory than ASTs"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) DAGs share common subexpressions as a single node across the tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) DAGs cannot represent control flow"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ASTs cannot represent arithmetic"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the primary difference between a quadruple and a triple?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Quadruples have 4 operands; triples have 3"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Quadruples name the result explicitly; triples refer to results by position"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Quadruples are used only for optimization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In three-address code, how is boolean ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&&"
          }), " with short-circuit evaluation implemented?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) As a single multiplication instruction"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Using conditional jumps that skip the right operand if the left is false"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["C) Through a function call to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "and"
            })]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) By converting both operands to integers"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does constant folding in a DAG accomplish?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Removes unused variables"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Evaluates constant subexpressions at compile time, replacing them with their result"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Reorders operations for better cache behavior"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Replaces variables with their declared types"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. B, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the advantages and disadvantages of ASTs and three-address code as intermediate representations."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Convert the expression ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a + b) * (c + d) - e"
        }), " into postfix notation and three-address code."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the principal difference between a quadruple and a triple? When would a compiler writer choose triples over quadruples?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how a DAG differs from an AST and how DAG construction detects common subexpressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List five distinct types of three-address code instructions and provide an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is postfix notation ill-suited for optimization? What property of TAC makes it well-suited?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generate three-address code for the following program fragment using if-then-else and while-loop patterns:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "if (x > y)\n    z = x + y;\nelse\n    z = x - y;\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct the quadruple, triple, and indirect-triple forms for the array assignment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a[i] = b[j] + c[k]"
        }), ". Show the individual components of each form clearly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Draw the DAG for the expression ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a * b + a * b + c"
        }), ". Show how the DAG reveals a common subexpression and explain what optimization this enables."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Translate the following for loop into three-address code:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "for (i = 0; i < 10; i = i + 1)\n    sum = sum + a[i];\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A snippet contains the three-address code:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "t1 = x + y\nt2 = t1 + z\nt3 = x + y\nt4 = t3 * w\n"
          })
        }), "\nHow would a DAG-based representation expose the redundancy? Write the optimized TAC."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a function in TypeScript that takes an AST for arithmetic expressions and produces TAC quadruples. Support addition, subtraction, multiplication, division, and parentheses. Use a DAG during translation to avoid recomputing identical subexpressions. Test on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x + y) * (x + y) - (x + y) / z"
        }), " and verify the generated TAC avoids redundant computation. Extend your translator to handle boolean expressions with short-circuit evaluation and if-then-else control flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a TypeScript class ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QuadrupleToAssembly"
        }), " that translates quadruple TAC to a simplified x86-64 assembly dialect. For each TAC instruction, generate the corresponding assembly sequence using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mov"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sub"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "imul"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cmp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jmp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "jle"
        }), ", etc. Assume all temporaries are stored in a stack frame. Demonstrate on the TAC output from Demo 2 and Demo 3 above."]
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