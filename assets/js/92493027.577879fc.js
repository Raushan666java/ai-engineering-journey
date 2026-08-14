"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85551],{

/***/ 41989
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_04_parsing_bottomup_md_924_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-04-parsing-bottomup-md-924.json
const site_docs_courses_compiler_design_04_parsing_bottomup_md_924_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/04-parsing-bottomup","title":"Chapter 4: Bottom-Up Parsing","description":"? Previous Top-Down Parsing | Next Syntax-Directed Translation","source":"@site/docs/courses/compiler-design/04-parsing-bottomup.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/04-parsing-bottomup","permalink":"/ai-engineering-journey/compiler-design/04-parsing-bottomup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-parsing-bottomup","slug":"/compiler-design/04-parsing-bottomup","title":"Chapter 4: Bottom-Up Parsing","sidebar_label":"Chapter 4: Bottom-Up Parsing","sidebar_position":4},"sidebar":"course-compiler-design","previous":{"title":"Chapter 3: Top-Down Parsing","permalink":"/ai-engineering-journey/compiler-design/03-parsing-topdown"},"next":{"title":"Chapter 5: Syntax-Directed Translation","permalink":"/ai-engineering-journey/compiler-design/05-sdt"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/04-parsing-bottomup.md


const frontMatter = {
	id: '04-parsing-bottomup',
	slug: '/compiler-design/04-parsing-bottomup',
	title: 'Chapter 4: Bottom-Up Parsing',
	sidebar_label: 'Chapter 4: Bottom-Up Parsing',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Bottom-Up Parsing';

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
  "value": "Bottom-Up Parsing and the Handle",
  "id": "bottom-up-parsing-and-the-handle",
  "level": 3
}, {
  "value": "Shift-Reduce Parsing",
  "id": "shift-reduce-parsing",
  "level": 3
}, {
  "value": "LR Parsing Framework",
  "id": "lr-parsing-framework",
  "level": 3
}, {
  "value": "LR(0) Items and the LR(0) Automaton",
  "id": "lr0-items-and-the-lr0-automaton",
  "level": 3
}, {
  "value": "SLR(1) Parsing",
  "id": "slr1-parsing",
  "level": 3
}, {
  "value": "CLR(1) ? Canonical LR(1) Parsing",
  "id": "clr1--canonical-lr1-parsing",
  "level": 3
}, {
  "value": "LALR(1) Parsing",
  "id": "lalr1-parsing",
  "level": 3
}, {
  "value": "Complete TypeScript LR Parser Implementation",
  "id": "complete-typescript-lr-parser-implementation",
  "level": 3
}, {
  "value": "Precedence and Associativity",
  "id": "precedence-and-associativity",
  "level": 3
}, {
  "value": "Yacc and Bison",
  "id": "yacc-and-bison",
  "level": 3
}, {
  "value": "Error Handling in LR Parsing",
  "id": "error-handling-in-lr-parsing",
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
        id: "chapter-4-bottom-up-parsing",
        children: "Chapter 4: Bottom-Up Parsing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "? Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/03-parsing-topdown",
        children: "Chapter 3: Top-Down Parsing"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/05-sdt",
        children: "Chapter 5: Syntax-Directed Translation"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: explain the shift-reduce parsing paradigm and the concept of a handle; construct LR(0) items and the LR(0) automaton; build SLR(1), CLR(1), and LALR(1) parsing tables; implement closure and goto operations for LR item sets; handle ambiguous grammars using precedence and associativity; implement error recovery strategies; and use Yacc or Bison to generate bottom-up parsers."
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
        href: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/04-parsing-bottomup/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Bottom-Up Parsing and the Handle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift-reduce paradigm and rightmost derivation reversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shift-Reduce Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack-based parsing with four operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LR Parsing Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ACTION and GOTO table structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LR(0) Items and Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building states from dotted items with closure and goto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SLR(1) Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FOLLOW-set-based lookahead for conflict resolution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CLR(1) LR(1) Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-item lookahead for maximum precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LALR(1) Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merged CLR(1) states for practical tables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence and Associativity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resolving shift-reduce conflicts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity in LR Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling-else and operator precedence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yacc and Bison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic LALR(1) parser generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Handling in LR Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Panic-mode and phrase-level recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Grammar G] --> B[LR0 Items]\n    B --> C[LR0 Automaton]\n    C --> D[SLR1 Table]\n    C --> E[Canonical LR1 Items]\n    E --> F[CLR1 Table]\n    F --> G[LALR1 Table via Merge]\n    D --> H[Shift-Reduce Parser]\n    G --> H\n    H --> I[Parse / Error]\n    J[Yacc/Bison Spec] --> G\n    style A fill:#e1f5fe\n    style I fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bottom-up-parsing-and-the-handle",
      children: "Bottom-Up Parsing and the Handle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bottom-up parsing constructs a parse tree starting from the leaves (input terminals) and working upward toward the start symbol. The process corresponds to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "reverse of a rightmost derivation"
      }), ": a rightmost derivation is reduced step by step to the start symbol. At each step, the parser identifies a substring of the current sentential form that can be reduced to a nonterminal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The central concept is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "handle"
      }), ". A handle of a right-sentential form ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " is a production ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? ?"
      }), " and a position in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " occurs such that replacing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " yields the previous right-sentential form in the rightmost derivation. In a shift-reduce parser, the handle always appears at the top of the stack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Formally, for a rightmost derivation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S ?*_rm aAw ?_rm a?w"
      }), ", the handle is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? ?"
      }), " at the position following ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " is the processed part on the stack and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "w"
      }), " is the remaining input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Bottom-up parsing is the reverse of a rightmost derivation ? you reduce handles instead of expanding nonterminals."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "shift-reduce-parsing",
      children: "Shift-Reduce Parsing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A shift-reduce parser uses a stack for grammar symbols and an input buffer. Four operations are possible:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Change"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shift"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push the current input token onto the stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "stack.push(token)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reduce"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pop `"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Accept"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Announce successful completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Done"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal a syntax error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invoke recovery"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Conflicts"
      }), " arise when both shift and reduce are possible on the same input (shift-reduce conflict) or when two different reductions are possible (reduce-reduce conflict). LR parsers resolve these conflicts by consulting a parsing table."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lr-parsing-framework",
      children: "LR Parsing Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LR(k) parsers scan input Left-to-right and produce a Rightmost derivation in reverse with k tokens of lookahead. The variants are LR(0), SLR(1), CLR(1), and LALR(1). All share the same algorithm but differ in table construction."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An LR parser consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stack"
        }), " of states (each state is a number indexing the ACTION/GOTO tables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "parsing table"
        }), " with ACTION and GOTO functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "input buffer"
        }), " with end marker ", (0,jsx_runtime.jsx)(_components.code, {
          children: "$"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ACTION table maps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(state, terminal)"
      }), " pairs to: shift (s_n), reduce (r_k), accept, or error.\nThe GOTO table maps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(state, nonterminal)"
      }), " pairs to next states."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LR Parsing Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stack = [0]  // initial state\ninput = w$   // input with end marker\nwhile true:\n    state = top(stack)\n    token = current input\n    action = ACTION[state, token]\n    if action == shift s:\n        push token onto semantic stack\n        push state s onto state stack\n        advance input\n    elif action == reduce A ? ?:\n        pop 2*|?| from stacks\n        state' = top(stack)\n        push A onto semantic stack\n        push GOTO[state', A] onto state stack\n        output A ? ?\n    elif action == accept: break\n    else: error\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lr0-items-and-the-lr0-automaton",
      children: "LR(0) Items and the LR(0) Automaton"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LR(0) item"
      }), " is a production with a dot marker indicating how much of the right-hand side has been seen. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? XY"
      }), ", the items are:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? ?XY     (nothing seen yet)\nA ? X?Y     (X has been seen)\nA ? XY?     (complete ? ready to reduce)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Closure"
      }), " adds items for nonterminals following the dot. For state ", (0,jsx_runtime.jsx)(_components.code, {
        children: "I"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function closure(I):\n    repeat:\n        for each item [A ? a?B?] in I:\n            for each production B ? ?:\n                add [B ? ??] to I\n    until no more items can be added\n    return I\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Goto"
      }), " moves the dot past the next symbol:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function goto(I, X):\n    J = { [A ? aX??] | [A ? a?X?] in I }\n    return closure(J)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LR(0) Automaton Construction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "I0 = closure({[S' ? ?S]})\nstates = {I0}\nworklist = {I0}\nwhile worklist is not empty:\n    remove I from worklist\n    for each symbol X (terminal or nonterminal):\n        J = goto(I, X)\n        if J is empty: continue\n        if J not in states:\n            add J to states and worklist\n        add transition I ? X ? J\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "slr1-parsing",
      children: "SLR(1) Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SLR(1) uses the LR(0) automaton but restricts reductions using FOLLOW sets. For state ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " with an item ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? a?"
      }), ", a reduction is placed only for terminals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a ? FOLLOW(A)"
      }), ". This eliminates many LR(0) conflicts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SLR(1) Table Construction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function BuildSLR1(grammar, LR0automaton, FOLLOW):\n    for each state i:\n        for each transition i ? a ? j (a is terminal):\n            ACTION[i, a] = shift j\n        for each item [A ? a?] in state i, where A ? S':\n            for each a ? FOLLOW(A):\n                ACTION[i, a] = reduce A ? a\n        if [S' ? S?] in state i:\n            ACTION[i, $] = accept\n        for each transition i ? A ? j (A is nonterminal):\n            GOTO[i, A] = j\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clr1--canonical-lr1-parsing",
      children: "CLR(1) ? Canonical LR(1) Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["CLR(1) uses LR(1) items with explicit lookahead: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[A ? a??, a]"
      }), ". The lookahead ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " is the set of terminals that can follow this particular occurrence of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Closure for LR(1) items:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function closure1(I):\n    repeat:\n        for each [A ? a?B?, a] in I:\n            for each production B ? ?:\n                for each b ? FIRST(?a):\n                    add [B ? ??, b] to I\n    until no more items can be added\n    return I\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goto for LR(1) items:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function goto1(I, X):\n    J = { [A ? aX??, a] | [A ? a?X?, a] in I }\n    return closure1(J)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CLR(1) tables are large (often thousands of states) but eliminate virtually all conflicts resolvable by additional lookahead."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lalr1-parsing",
      children: "LALR(1) Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LALR(1) merges CLR(1) states with the same ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "core"
      }), " (LR(0) portion) but different lookaheads. The lookahead sets are unioned. The resulting table matches SLR(1) in size but approaches CLR(1) in conflict-resolving power."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "LALR(1) construction from CLR(1):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for each pair of LR(1) states I?, I? with the same core:\n    merge I? into I? by unioning lookaheads\n    redirect all transitions to/from I? to I?\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "LALR(1) is the algorithm used by Yacc and Bison. Merging can introduce reduce-reduce conflicts not present in CLR(1), but such conflicts are rare in practice."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " LALR(1) is the sweet spot ? SLR(1)-sized tables with CLR(1)-near resolving power ? which is why Yacc and Bison use it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-typescript-lr-parser-implementation",
      children: "Complete TypeScript LR Parser Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Symbol = string;\n\ninterface LRItem {\n    lhs: Symbol;\n    rhs: Symbol[];\n    dot: number;           // position of dot (0..rhs.length)\n    lookahead: Set<Symbol>; // for LR(1) items\n}\n\ninterface Production {\n    lhs: Symbol;\n    rhs: Symbol[];\n}\n\nclass LRParser {\n    private productions: Production[];\n    private terminals: Set<Symbol>;\n    private nonterminals: Set<Symbol>;\n    private start: Symbol;\n    private states: Set<LRItem>[] = [];\n    private action: Map<string, string> = new Map(); // \"state,token\" ? \"s3\" | \"r2\"\n    private goto: Map<string, number> = new Map();   // \"state,NT\" ? state\n    private follow: Map<Symbol, Set<Symbol>> = new Map();\n    private epsilon = \"e\";\n\n    constructor(prods: Production[], start: Symbol) {\n        this.productions = prods;\n        this.start = start;\n        // Add augmented start production S' ? S\n        this.productions.unshift({ lhs: \"S'\", rhs: [start] });\n        this.terminals = new Set();\n        this.nonterminals = new Set();\n        for (const p of this.productions) {\n            this.nonterminals.add(p.lhs);\n            for (const s of p.rhs) {\n                if (s !== this.epsilon && !s.startsWith(\"<\") && s !== s.toUpperCase()) {\n                    this.terminals.add(s);\n                } else if (s.startsWith(\"<\") || s === s.toUpperCase()) {\n                    this.nonterminals.add(s);\n                } else {\n                    this.terminals.add(s);\n                }\n            }\n        }\n        // Recompute with our specific detection:\n        this.terminals = new Set();\n        this.nonterminals = new Set();\n        for (const p of this.productions) {\n            this.nonterminals.add(p.lhs);\n            for (const s of p.rhs) {\n                if (s !== this.epsilon && !this.nonterminals.has(s)) {\n                    this.terminals.add(s);\n                }\n            }\n        }\n    }\n\n    private closure(items: LRItem[]): LRItem[] {\n        let changed = true;\n        while (changed) {\n            changed = false;\n            for (const item of [...items]) {\n                const next = item.rhs[item.dot];\n                if (!next || !this.nonterminals.has(next)) continue;\n                for (const prod of this.productions) {\n                    if (prod.lhs !== next) continue;\n                    // Compute lookahead for LR(1): FIRST(?a)\n                    const beta = item.rhs.slice(item.dot + 1);\n                    const betaFirst = this.firstOfSequence(beta);\n                    const newLookahead = new Set<Symbol>();\n                    for (const f of betaFirst) {\n                        if (f !== this.epsilon) newLookahead.add(f);\n                    }\n                    if (betaFirst.has(this.epsilon)) {\n                        for (const l of item.lookahead) newLookahead.add(l);\n                    }\n                    if (newLookahead.size === 0) newLookahead.add(\"$\"); // default\n\n                    const exists = items.some(ex =>\n                        ex.lhs === prod.lhs &&\n                        ex.dot === 0 &&\n                        ex.rhs.join(\" \") === prod.rhs.join(\" \") &&\n                        [...newLookahead].every(l => ex.lookahead.has(l))\n                    );\n                    if (!exists) {\n                        items.push({\n                            lhs: prod.lhs,\n                            rhs: prod.rhs,\n                            dot: 0,\n                            lookahead: newLookahead,\n                        });\n                        changed = true;\n                    }\n                }\n            }\n        }\n        return items;\n    }\n\n    private gotoSet(items: LRItem[], X: Symbol): LRItem[] {\n        const next: LRItem[] = [];\n        for (const item of items) {\n            if (item.rhs[item.dot] === X) {\n                next.push({ ...item, dot: item.dot + 1, lookahead: new Set(item.lookahead) });\n            }\n        }\n        return this.closure(next);\n    }\n\n    private firstOfSequence(syms: Symbol[]): Set<Symbol> {\n        const result = new Set<Symbol>();\n        let allEpsilon = true;\n        for (const s of syms) {\n            if (s === this.epsilon) break;\n            if (this.terminals.has(s)) { result.add(s); allEpsilon = false; break; }\n            // Simplified: treat nonterminals as having unknown FIRST\n            result.add(s);\n            allEpsilon = false;\n            break;\n        }\n        if (allEpsilon) result.add(this.epsilon);\n        return result;\n    }\n\n    private itemKey(item: LRItem): string {\n        return `${item.lhs}?${item.rhs.join(\"\")}?${item.dot}`;\n    }\n\n    private stateKey(items: LRItem[]): string {\n        return items.map(i => `${this.itemKey(i)}[${[...i.lookahead].sort().join(\",\")}]`).sort().join(\"|\");\n    }\n\n    private coreKey(items: LRItem[]): string {\n        return items.map(i => `${i.lhs}?${i.rhs.join(\"\")}?${i.dot}`).sort().join(\"|\");\n    }\n\n    buildLR0Automaton(): void {\n        const startItems = this.closure([\n            { lhs: \"S'\", rhs: [this.start], dot: 0, lookahead: new Set([\"$\"]) }\n        ]);\n        this.states = [startItems];\n        const worklist: number[] = [0];\n        const transitions: Map<number, Map<Symbol, number>> = new Map();\n\n        while (worklist.length > 0) {\n            const idx = worklist.shift()!;\n            const items = this.states[idx];\n            const symbols = new Set<Symbol>();\n            for (const item of items) {\n                const next = item.rhs[item.dot];\n                if (next) symbols.add(next);\n            }\n            for (const sym of symbols) {\n                const nextItems = this.gotoSet(items, sym);\n                if (nextItems.length === 0) continue;\n                let nextIdx = -1;\n                for (let i = 0; i < this.states.length; i++) {\n                    if (this.coreKey(this.states[i]) === this.coreKey(nextItems)) {\n                        nextIdx = i;\n                        break;\n                    }\n                }\n                if (nextIdx === -1) {\n                    nextIdx = this.states.length;\n                    this.states.push(nextItems);\n                    worklist.push(nextIdx);\n                }\n                if (!transitions.has(idx)) transitions.set(idx, new Map());\n                transitions.get(idx)!.set(sym, nextIdx);\n            }\n        }\n\n        // Build ACTION and GOTO tables\n        // Compute FOLLOW for SLR(1)\n        this.computeFollow();\n\n        for (let i = 0; i < this.states.length; i++) {\n            const items = this.states[i];\n            const trans = transitions.get(i) ?? new Map();\n\n            // Shift actions\n            for (const [sym, next] of trans) {\n                if (this.terminals.has(sym)) {\n                    this.action.set(`${i},${sym}`, `s${next}`);\n                } else {\n                    this.goto.set(`${i},${sym}`, next);\n                }\n            }\n\n            // Reduce actions (SLR(1): use FOLLOW)\n            for (const item of items) {\n                if (item.dot === item.rhs.length) {\n                    if (item.lhs === \"S'\") {\n                        this.action.set(`${i},$`, \"acc\");\n                    } else {\n                        const followSet = this.follow.get(item.lhs) ?? new Set([\"$\"]);\n                        for (const a of followSet) {\n                            const key = `${i},${a}`;\n                            const existing = this.action.get(key);\n                            const reduceAction = `r${this.productions.findIndex(p =>\n                                p.lhs === item.lhs && p.rhs.join(\" \") === item.rhs.join(\" \")\n                            )}`;\n                            if (existing) {\n                                if (existing.startsWith(\"s\")) {\n                                    // Shift-reduce conflict: report it\n                                    console.warn(`Shift/reduce conflict at state ${i} on ${a}: ${existing} vs ${reduceAction}`);\n                                } else if (existing !== reduceAction) {\n                                    console.warn(`Reduce/reduce conflict at state ${i} on ${a}: ${existing} vs ${reduceAction}`);\n                                }\n                            } else {\n                                this.action.set(key, reduceAction);\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    private computeFollow(): void {\n        for (const n of this.nonterminals) this.follow.set(n, new Set());\n        this.follow.get(\"S'\")!.add(\"$\");\n        let changed = true;\n        while (changed) {\n            changed = false;\n            for (const prod of this.productions) {\n                const lhs = prod.lhs;\n                for (let i = 0; i < prod.rhs.length; i++) {\n                    const B = prod.rhs[i];\n                    if (!this.nonterminals.has(B)) continue;\n                    const before = this.follow.get(B)!.size;\n                    const ? = prod.rhs.slice(i + 1);\n                    // Add FIRST(?) \\ {e} to FOLLOW(B)\n                    for (const sym of ?) {\n                        if (this.terminals.has(sym)) {\n                            this.follow.get(B)!.add(sym);\n                            break;\n                        }\n                        if (this.nonterminals.has(sym)) break; // simplified\n                    }\n                    // If ? is empty or nullable, add FOLLOW(lhs)\n                    if (?.length === 0 || ?.every(s => s === this.epsilon)) {\n                        for (const f of this.follow.get(lhs)!) this.follow.get(B)!.add(f);\n                    }\n                    if (this.follow.get(B)!.size !== before) changed = true;\n                }\n            }\n        }\n    }\n\n    private itemCount(prod: Production): number {\n        return prod.rhs.length;\n    }\n\n    parse(input: Symbol[]): boolean {\n        const stateStack: number[] = [0];\n        const symStack: Symbol[] = [];\n        let ip = 0;\n\n        const getInput = (): Symbol => ip < input.length ? input[ip] : \"$\";\n\n        while (true) {\n            const state = stateStack[stateStack.length - 1];\n            const a = getInput();\n            const key = `${state},${a}`;\n            const action = this.action.get(key);\n\n            if (!action) {\n                console.error(`Syntax error at ${a} (position ${ip})`);\n                // Error recovery: skip\n                ip++;\n                if (ip > input.length) return false;\n                continue;\n            }\n\n            if (action === \"acc\") {\n                console.log(\"Accept\");\n                return true;\n            }\n\n            if (action.startsWith(\"s\")) {\n                const nextState = parseInt(action.slice(1));\n                stateStack.push(nextState);\n                symStack.push(a);\n                ip++;\n            } else if (action.startsWith(\"r\")) {\n                const prodIdx = parseInt(action.slice(1));\n                const prod = this.productions[prodIdx];\n                for (let i = 0; i < prod.rhs.length; i++) {\n                    if (prod.rhs[i] !== this.epsilon) {\n                        stateStack.pop();\n                        symStack.pop();\n                    }\n                }\n                const prevState = stateStack[stateStack.length - 1];\n                const gotoKey = `${prevState},${prod.lhs}`;\n                const gotoState = this.goto.get(gotoKey);\n                if (gotoState === undefined) {\n                    console.error(`No GOTO entry for ${prevState},${prod.lhs}`);\n                    return false;\n                }\n                stateStack.push(gotoState);\n                symStack.push(prod.lhs);\n                console.log(`Reduce: ${prod.lhs} ? ${prod.rhs.join(\" \")}`);\n            } else {\n                console.error(`Unknown action ${action}`);\n                return false;\n            }\n        }\n    }\n\n    printTable(): void {\n        const allSymbols = [...this.terminals, \"$\", ...this.nonterminals].filter(s => s !== \"S'\");\n        console.log(\"\\nSTATE | \" + allSymbols.map(s => s.padEnd(6)).join(\" \"));\n        console.log(\"-\".repeat(10 + allSymbols.length * 7));\n        for (let i = 0; i < this.states.length; i++) {\n            const row = `${i}`.padEnd(5) + \"| \";\n            for (const sym of allSymbols) {\n                const aKey = this.action.get(`${i},${sym}`);\n                const gKey = this.goto.has(`${i},${sym}`);\n                row += (aKey ?? (gKey ? String(this.goto.get(`${i},${sym}`)) : \"\")).padEnd(6) + \" \";\n            }\n            console.log(row);\n        }\n    }\n}\n\n// === Demo: Expression Grammar with LR(0) and SLR(1) ===\nconst prods: Production[] = [\n    { lhs: \"E\", rhs: [\"E\", \"+\", \"T\"] },\n    { lhs: \"E\", rhs: [\"T\"] },\n    { lhs: \"T\", rhs: [\"T\", \"*\", \"F\"] },\n    { lhs: \"T\", rhs: [\"F\"] },\n    { lhs: \"F\", rhs: [\"(\", \"E\", \")\"] },\n    { lhs: \"F\", rhs: [\"id\"] },\n];\n\nconst lr = new LRParser(prods, \"E\");\nlr.buildLR0Automaton();\nconsole.log(`LR(0) automaton has ${lr[\"states\"].length} states`);\nlr.printTable();\n\nconsole.log(\"\\nParsing: id + id * id\");\nlr.parse([\"id\", \"+\", \"id\", \"*\", \"id\"]);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "precedence-and-associativity",
      children: "Precedence and Associativity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Precedence and associativity declarations resolve shift-reduce conflicts without rewriting the grammar. In Yacc/Bison:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yacc",
        children: "%left '+' '-'\n%left '*' '/'   /* higher precedence than +, - */\n%right '^'      /* right-associative, highest precedence */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The parser generator assigns each token a precedence level and direction. For a conflict between shifting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " and reducing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? ?"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the shift token has higher precedence ? shift"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the reduce token has higher precedence ? reduce"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If equal precedence ? consult associativity (left ? reduce, right ? shift)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The dangling-else ambiguity"
      }), " is resolved by declaring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%nonassoc THEN"
      }), " and assigning higher precedence to shift over reduce on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yacc-and-bison",
      children: "Yacc and Bison"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yacc and Bison generate LALR(1) parsers from grammar specifications with embedded semantic actions. A Bison specification has three sections:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yacc",
        children: "%{\n#include <stdio.h>\nint yylex() { /* ... */ }\n%}\n\n%token NUMBER PLUS TIMES LPAREN RPAREN\n%left PLUS\n%left TIMES\n\n%%\nexpr: expr PLUS term   { $$ = $1 + $3; }\n    | term             { $$ = $1; }\n    ;\nterm: term TIMES factor { $$ = $1 * $3; }\n    | factor            { $$ = $1; }\n    ;\nfactor: LPAREN expr RPAREN { $$ = $2; }\n      | NUMBER             { $$ = $1; }\n      ;\n%%\nint main() { return yyparse(); }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bison generates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yyparse()"
      }), " which calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yylex()"
      }), " for tokens. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-v"
      }), " flag produces a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".output"
      }), " file showing every state and conflict, essential for debugging."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-in-lr-parsing",
      children: "Error Handling in LR Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When ACTION entry is error, the parser invokes recovery. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Panic-mode recovery"
      }), " discards input symbols until a synchronizing token (semicolon, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "}"
      }), ") is found, then pops the stack to a state with a non-error GOTO entry. TypeScript error recovery is shown in the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "parse"
      }), " method above."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Phrase-level recovery"
      }), " uses error productions in the grammar:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stmt ? error ;\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an error is encountered, the parser shifts a special ", (0,jsx_runtime.jsx)(_components.code, {
        children: "error"
      }), " token (consuming input until ", (0,jsx_runtime.jsx)(_components.code, {
        children: ";"
      }), "), then reduces to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stmt"
      }), ". GLR parsing supports arbitrary error recovery with multiple interpretations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Bottom-up parsing reverses a rightmost derivation by repeatedly reducing handles. LR parsers generalize shift-reduce parsing using state-based tables. LR(0) provides the basic automaton; SLR(1) adds FOLLOW-based lookahead; CLR(1) tracks per-item lookahead; and LALR(1) compresses CLR(1) states for practical table sizes. Parser generators like Yacc and Bison automate LALR(1) construction. Ambiguous grammars are handled via precedence and associativity annotations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Start with LR(0) then add lookahead"
        }), ": Build the LR(0) automaton first, verify it, then add SLR(1) restrictions. This isolates bugs in the automaton from bugs in lookahead computation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Use Yacc/Bison for production parsers"
        }), ": Hand-writing an LR parser is educational but impractical. Tools handle conflict resolution, error recovery, and performance optimization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Debug conflicts with Bison's -v output"
        }), ": The ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".output"
        }), " file shows every state and the cause of each conflict. Look for states with multiple items competing for the same terminal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prefer LALR(1) over CLR(1)"
        }), ": CLR(1) tables can be 10x larger than LALR(1) with negligible power difference for practical grammars."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolve conflicts with precedence, not grammar rewriting"
        }), ": Precedence declarations are clearer and less error-prone than restructuring the grammar."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// parsing bottomup\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'parsing bottomup', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// parsing bottomup - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'parsing bottomup' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the key difference between SLR(1) and CLR(1) parsing?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) SLR(1) uses LR(0) items; CLR(1) uses LR(1) items with per-item lookahead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) SLR(1) can parse ambiguous grammars; CLR(1) cannot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) CLR(1) tables are always smaller than SLR(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference; they are the same algorithm"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a shift-reduce parser, what is a handle?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The current input token"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A reducible substring at the top of the stack"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The parser state number"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A lookahead symbol"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which LR variant is used by Yacc and Bison?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) LR(0)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) SLR(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LALR(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) CLR(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does LALR(1) achieve smaller tables than CLR(1)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It uses fewer states by ignoring some grammar rules"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It merges states with the same LR(0) core by unioning lookaheads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It uses a hash table instead of a matrix"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It eliminates shift actions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "%left"
          }), " declare in Yacc/Bison?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The token is left-associative"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The token should be ignored"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The token should be shifted on equal precedence"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The token has the lowest precedence"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. A, 2. B, 3. C, 4. B, 5. A\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the concept of a handle in bottom-up parsing. Explain its role in shift-reduce parsing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What distinguishes SLR(1) from CLR(1) parsing? Under what conditions does CLR(1) succeed where SLR(1) fails?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how LALR(1) achieves table sizes comparable to SLR(1) while retaining most of CLR(1)'s conflict-resolving power."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the four actions available to a shift-reduce parser and when each is invoked."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the dangling-else ambiguity and how is it resolved in an LR parser?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build the LR(0) automaton for the grammar ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S ? CC, C ? cC | d"
        }), ". Construct the SLR(1) table. Is this grammar SLR(1)?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct the LR(1) items and the CLR(1) table for the grammar in Problem 1. Compare the state count with LR(0)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the expression grammar from this chapter, trace the shift-reduce parse for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(id + id) * id"
        }), ". Show stack and input at each step."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the shift-reduce conflict in the dangling-else grammar. Show the state and items involved."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Add the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e"
        }), " production to the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LRParser"
        }), " implementation and test it with a grammar that uses optional elements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a shift-reduce parser with a hand-built SLR(1) table for the grammar ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S ? AA, A ? aA | b"
        }), ". Your implementation must include LR(0) automaton construction, FOLLOW computation, table construction, and the shift-reduce driver. Demonstrate on inputs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ab"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aab"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "aaab"
        }), ". Extend to produce a parse tree and print it in parenthesized format. Also implement panic-mode error recovery using the follow sets."]
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