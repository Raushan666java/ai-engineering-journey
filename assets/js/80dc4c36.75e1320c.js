"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[60316],{

/***/ 89538
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_03_parsing_topdown_md_80d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-03-parsing-topdown-md-80d.json
const site_docs_courses_compiler_design_03_parsing_topdown_md_80d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/03-parsing-topdown","title":"Chapter 3: Top-Down Parsing","description":"? Previous Lexical Analysis | Next Bottom-Up Parsing","source":"@site/docs/courses/compiler-design/03-parsing-topdown.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/03-parsing-topdown","permalink":"/ai-engineering-journey/compiler-design/03-parsing-topdown","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-parsing-topdown","slug":"/compiler-design/03-parsing-topdown","title":"Chapter 3: Top-Down Parsing","sidebar_label":"Chapter 3: Top-Down Parsing","sidebar_position":3},"sidebar":"course-compiler-design","previous":{"title":"Chapter 2: Lexical Analysis","permalink":"/ai-engineering-journey/compiler-design/02-lexical"},"next":{"title":"Chapter 4: Bottom-Up Parsing","permalink":"/ai-engineering-journey/compiler-design/04-parsing-bottomup"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/03-parsing-topdown.md


const frontMatter = {
	id: '03-parsing-topdown',
	slug: '/compiler-design/03-parsing-topdown',
	title: 'Chapter 3: Top-Down Parsing',
	sidebar_label: 'Chapter 3: Top-Down Parsing',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Top-Down Parsing';

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
  "value": "Context-Free Grammars",
  "id": "context-free-grammars",
  "level": 3
}, {
  "value": "Derivations and Parse Trees",
  "id": "derivations-and-parse-trees",
  "level": 3
}, {
  "value": "Ambiguity",
  "id": "ambiguity",
  "level": 3
}, {
  "value": "Left Recursion Elimination",
  "id": "left-recursion-elimination",
  "level": 3
}, {
  "value": "Left Factoring",
  "id": "left-factoring",
  "level": 3
}, {
  "value": "FIRST and FOLLOW Sets",
  "id": "first-and-follow-sets",
  "level": 3
}, {
  "value": "LL(1) Parsing Tables",
  "id": "ll1-parsing-tables",
  "level": 3
}, {
  "value": "Complete LL(1) Parser Generator in TypeScript",
  "id": "complete-ll1-parser-generator-in-typescript",
  "level": 3
}, {
  "value": "Recursive-Descent Parsing with Backtracking",
  "id": "recursive-descent-parsing-with-backtracking",
  "level": 3
}, {
  "value": "Error Recovery in LL Parsing",
  "id": "error-recovery-in-ll-parsing",
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
        id: "chapter-3-top-down-parsing",
        children: "Chapter 3: Top-Down Parsing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "? Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/02-lexical",
        children: "Chapter 2: Lexical Analysis"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/04-parsing-bottomup",
        children: "Chapter 4: Bottom-Up Parsing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: define context-free grammars and use them to describe programming-language syntax; construct derivations and parse trees; eliminate ambiguity, left recursion, and common prefixes from grammars; compute FIRST and FOLLOW sets using the full iterative algorithm; construct LL(1) parsing tables; implement recursive-descent parsers with proper error reporting; and implement a complete LL(1) parser generator in TypeScript."
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
        href: "../../assets/images/lessons/compiler-design/03-parsing-topdown/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/03-parsing-topdown/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/03-parsing-topdown/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/03-parsing-topdown/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/03-parsing-topdown/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/03-parsing-topdown/visual-explanation.png",
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
            children: "Context-Free Grammars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal definition and role in syntax specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derivations and Parse Trees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost and rightmost derivations, parse tree construction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple parse trees and resolution strategies"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left Recursion Elimination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforming grammars for predictive parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left Factoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Removing common prefixes from productions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "FIRST and FOLLOW Sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative algorithm for computing lookahead information"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LL(1) Parsing Tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-driven predictive parsing with error reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive-Descent Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedure-based implementation with backtracking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Recovery in LL Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handling syntax errors gracefully"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Grammar G] --> B[Eliminate Left Recursion]\n    B --> C[Left Factor]\n    C --> D[Compute FIRST & FOLLOW]\n    D --> E{LL(1) Valid?}\n    E -->|Yes| F[Build Parsing Table]\n    E -->|No| B\n    F --> G[Recursive Descent / Table-Driven Parser]\n    G --> H[Parse Tree / Error]\n    style A fill:#e1f5fe\n    style H fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "context-free-grammars",
      children: "Context-Free Grammars"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context-free grammar"
      }), " (CFG) is a four-tuple ", (0,jsx_runtime.jsx)(_components.code, {
        children: "G = (V, T, P, S)"
      }), ", where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "V"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "nonterminal"
        }), " symbols"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "terminal"
        }), " symbols disjoint from V"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "P"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "productions"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A ? a"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A ? V"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a ? (V ? T)*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "S ? V"
        }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "start symbol"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The language ", (0,jsx_runtime.jsx)(_components.code, {
        children: "L(G)"
      }), " is the set of all strings of terminals derivable from the start symbol by repeatedly replacing nonterminals with the right-hand side of a production."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": A grammar for arithmetic expressions with standard precedence:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "expr   ? expr + term | term\nterm   ? term * factor | factor\nfactor ? ( expr ) | id\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This grammar has ", (0,jsx_runtime.jsx)(_components.code, {
        children: "V = {expr, term, factor}"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T = {id, +, *, (, )}"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S = expr"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A CFG is to syntax what regular expressions are to lexemes ? the formal notation for describing hierarchical structure."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "derivations-and-parse-trees",
      children: "Derivations and Parse Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "derivation"
      }), " is a sequence of replacement steps transforming the start symbol into a terminal string. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leftmost derivation"
      }), " replaces the leftmost nonterminal at each step; a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rightmost derivation"
      }), " replaces the rightmost nonterminal at each step."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For grammar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "E ? E + T | T, T ? id"
      }), ", leftmost derivation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id + id"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E ? E + T ? T + T ? id + T ? id + id\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parse tree"
      }), " is a graphical representation of a derivation. Interior nodes are labeled with nonterminals, leaves with terminals (or e). The children of an interior node correspond to the right-hand side of a production."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parse tree vs. Abstract Syntax Tree (AST)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"Parse Tree\"\n        E1[\"E\"] --> E2[\"E\"]\n        E1 --> plus1[\"+\"]\n        E1 --> T1[\"T\"]\n        E2 --> T2[\"T\"]\n        T2 --> id1[\"id\"]\n        T1 --> id2[\"id\"]\n    end\n    subgraph \"AST\"\n        plus2[\"+\"] --> id3[\"id\"]\n        plus2 --> id4[\"id\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parse tree records every derivation step (including intermediate nonterminals), while the AST omits syntactic sugar like parentheses and grouping nonterminals, keeping only the essential structure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ambiguity",
      children: "Ambiguity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A grammar is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ambiguous"
      }), " if there exists a terminal string that has more than one distinct parse tree (equivalently, more than one leftmost or rightmost derivation). Ambiguity is undesirable because it leads to multiple possible interpretations of a program."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider the grammar:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "string ? string + string | id\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id + id + id"
      }), " has two leftmost derivations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. string ? string + string ? id + string ? id + string + string ? id + id + string ? id + id + id\n2. string ? string + string ? string + string + string ? id + string + string ? id + id + string ? id + id + id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "These correspond to left-associative and right-associative grouping. Ambiguity is resolved by imposing associativity and precedence rules, either in the grammar or in the parser implementation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The dangling-else ambiguity"
      }), " is the classic case:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stmt ? if expr then stmt | if expr then stmt else stmt | other\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For input ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if e1 then if e2 then s1 else s2"
      }), ", two parse trees exist: the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " can attach to either ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), ". Most languages resolve this by associating ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " with the nearest unmatched ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "left-recursion-elimination",
      children: "Left Recursion Elimination"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A grammar is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left-recursive"
      }), " if a nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " derives a string beginning with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate left recursion"
      }), ", where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? Aa | ?"
      }), ", is eliminated by rewriting as:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A  ? ?A'\nA' ? aA' | e\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For multiple alternatives ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? Aa1 | Aa2 | ... | Aa? | ?1 | ?2 | ... | ??"
      }), ", the transformation is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A  ? ?1A' | ?2A' | ... | ??A'\nA' ? a1A' | a2A' | ... | a?A' | e\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Indirect left recursion"
      }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? B ? Aa"
      }), ") is eliminated by ordering nonterminals and substituting productions until all left recursion is immediate, then eliminating it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm for indirect left recursion elimination:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: EliminateIndirectLeftRecursion\nInput: Grammar G with nonterminals A1, A2, ..., A?\nOutput: Grammar with no left recursion\n\nfor i = 1 to n:\n    for j = 1 to i-1:\n        Replace each A? ? A?? with A? ? d1? | d2? | ... | d??\n            where A? ? d1 | d2 | ... | d? are all productions for A?\n    Eliminate immediate left recursion for A?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Eliminate left recursion from the expression grammar:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original:   E ? E + T | T\n            T ? T * F | F\n            F ? (E) | id\n\nTransformed:\n            E  ? TE'\n            E' ? +TE' | e\n            T  ? FT'\n            T' ? *FT' | e\n            F  ? (E) | id\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "left-factoring",
      children: "Left Factoring"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When two or more productions for the same nonterminal share a common prefix, predictive parsing cannot choose among them without lookahead. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Left factoring"
      }), " delays the choice by extracting the common prefix:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? a?1 | a?2    becomes    A ? aA'   A' ? ?1 | ?2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: LeftFactor\nInput: Nonterminal A with productions A ? a?1 | a?2 | ... | a?? | ?\n    where ? represents alternatives without the common prefix a\nOutput: Factored productions\n\nLet a be the longest common prefix of two or more alternatives\nIf no common prefix exists, return unchanged\nReplace A ? a?1 | a?2 | ... | a?? | ? with:\n    A ? aA' | ?\n    A' ? ?1 | ?2 | ... | ??\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Left factor the grammar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S ? iEtS | iEtSeS | a"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S  ? iEtSS' | a\nS' ? eS | e\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Here, the common prefix is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iEtS"
      }), ". After factoring, the parser shifts past ", (0,jsx_runtime.jsx)(_components.code, {
        children: "iEtS"
      }), ", then uses the lookahead to decide between the two branches of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S'"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "first-and-follow-sets",
      children: "FIRST and FOLLOW Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FIRST"
      }), " set of a string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ", denoted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FIRST(a)"
      }), ", is the set of terminals that can begin strings derivable from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), ". If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a ?* e"
      }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
        children: "e ? FIRST(a)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FOLLOW"
      }), " set of a nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ", denoted ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FOLLOW(A)"
      }), ", is the set of terminals that can appear immediately to the right of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " in some sentential form."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm for FIRST:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: ComputeFIRST\nInput: Grammar G\nOutput: FIRST(X) for all symbols X\n\nfor each terminal a: FIRST(a) = {a}\nfor each nonterminal A: FIRST(A) = {}\ne_in_current_pass = true\n\nwhile e_in_current_pass:\n    e_in_current_pass = false\n    for each production A ? X1X2...X?:\n        k = 0\n        all_derive_e = true\n        while all_derive_e and k < length:\n            k++\n            add (FIRST(X?) \\ {e}) to FIRST(A)\n            if e ? FIRST(X?): all_derive_e = false\n        if all_derive_e: add e to FIRST(A)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm for FOLLOW:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: ComputeFOLLOW\nInput: Grammar G\nOutput: FOLLOW(A) for all nonterminals A\n\nFOLLOW(S) = {$}  // $ is end-of-input marker\nfor each nonterminal A ? S: FOLLOW(A) = {}\n\nwhile any FOLLOW set changes:\n    for each production A ? aB?:\n        // Rule 2: add FIRST(?) \\ {e} to FOLLOW(B)\n        add (FIRST(?) \\ {e}) to FOLLOW(B)\n        // Rule 3: if e ? FIRST(?), add FOLLOW(A) to FOLLOW(B)\n        if e ? FIRST(?):\n            add FOLLOW(A) to FOLLOW(B)\n    for each production A ? aB:\n        // Rule 3 (no ?): add FOLLOW(A) to FOLLOW(B)\n        add FOLLOW(A) to FOLLOW(B)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Compute FIRST and FOLLOW for the transformed expression grammar:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FIRST"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "FOLLOW"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(, id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{$, )}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{+, e}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{$, )}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(, id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{+, $, )}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{*, e}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{+, $, )}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{(, id}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{*, +, $, )}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ll1-parsing-tables",
      children: "LL(1) Parsing Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LL(1) parser"
      }), " reads input left-to-right, produces a leftmost derivation, and uses one token of lookahead. A grammar is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LL(1)"
      }), " if for every pair of productions ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? a | ?"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "FIRST(a) n FIRST(?) = ?"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At most one of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?"
        }), " can derive ", (0,jsx_runtime.jsx)(_components.code, {
          children: "e"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "? ?* e"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FIRST(a) n FOLLOW(A) = ?"
        }), " (and vice versa)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsing table construction:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: BuildLL1Table\nInput: Grammar G with FIRST and FOLLOW computed\nOutput: Parsing table M[A, a] ? production to apply\n\nInitialize M[A, a] = error for all A, a\nfor each production A ? a:\n    for each terminal a in FIRST(a) \\ {e}:\n        M[A, a] = A ? a\n    if e ? FIRST(a):\n        for each terminal b in FOLLOW(A):\n            M[A, b] = A ? a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "LL(1) parsing algorithm"
      }), " uses a stack initialized with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[$, S]"
      }), " (end marker, start symbol) and the input buffer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "w$"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "stack = [$, S]\ninput = w$\nwhile stack is not empty:\n    let X = top(stack)\n    let a = current input token\n    if X == a:\n        pop(X); advance input\n    elif X is a terminal: error\n    elif M[X, a] == error: error\n    elif M[X, a] == X ? Y1Y2...Y?:\n        pop(X)\n        push Y?...Y2Y1 (reverse order)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-ll1-parser-generator-in-typescript",
      children: "Complete LL(1) Parser Generator in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Symbol = string;\ntype Production = { lhs: Symbol; rhs: Symbol[] };\ntype Grammar = { nonterminals: Set<Symbol>; terminals: Set<Symbol>; start: Symbol; productions: Production[] };\n\nclass LL1ParserGenerator {\n    grammar: Grammar;\n    first: Map<Symbol, Set<Symbol>> = new Map();\n    follow: Map<Symbol, Set<Symbol>> = new Map();\n    table: Map<string, Production> = new Map();\n    private epsilon = \"e\";\n\n    constructor(productions: Production[], start: Symbol) {\n        this.grammar = this.normalize(productions, start);\n    }\n\n    private normalize(prods: Production[], start: Symbol): Grammar {\n        const nonterminals = new Set<Symbol>();\n        const terminals = new Set<Symbol>();\n        for (const p of prods) {\n            nonterminals.add(p.lhs);\n            for (const s of p.rhs) {\n                if (s !== this.epsilon && !s.startsWith(\"<\")) terminals.add(s);\n                else if (s.startsWith(\"<\")) nonterminals.add(s);\n            }\n        }\n        return { nonterminals, terminals, start, productions: prods };\n    }\n\n    computeFIRST(): void {\n        for (const t of this.grammar.terminals) this.first.set(t, new Set([t]));\n        for (const n of this.grammar.nonterminals) this.first.set(n, new Set());\n        let changed = true;\n        while (changed) {\n            changed = false;\n            for (const prod of this.grammar.productions) {\n                const lhs = prod.lhs;\n                const before = this.first.get(lhs)!.size;\n                let allEpsilon = true;\n                for (const sym of prod.rhs) {\n                    if (sym === this.epsilon) break; // A ? e, add e\n                    const symFirst = this.first.get(sym) ?? new Set([sym]);\n                    for (const f of symFirst) {\n                        if (f !== this.epsilon) this.first.get(lhs)!.add(f);\n                    }\n                    if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\n                }\n                if (allEpsilon || prod.rhs.length === 0) {\n                    this.first.get(lhs)!.add(this.epsilon);\n                }\n                if (this.first.get(lhs)!.size !== before) changed = true;\n            }\n        }\n    }\n\n    computeFOLLOW(): void {\n        for (const n of this.grammar.nonterminals) this.follow.set(n, new Set());\n        this.follow.get(this.grammar.start)!.add(\"$\");\n        let changed = true;\n        while (changed) {\n            changed = false;\n            for (const prod of this.grammar.productions) {\n                const lhs = prod.lhs;\n                for (let i = 0; i < prod.rhs.length; i++) {\n                    const B = prod.rhs[i];\n                    if (!this.grammar.nonterminals.has(B)) continue;\n                    const before = this.follow.get(B)!.size;\n                    const ? = prod.rhs.slice(i + 1);\n                    let allEpsilon = true;\n                    for (const sym of ?) {\n                        const symFirst = this.first.get(sym) ?? new Set([sym]);\n                        for (const f of symFirst) {\n                            if (f !== this.epsilon) this.follow.get(B)!.add(f);\n                        }\n                        if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\n                    }\n                    if (allEpsilon) {\n                        for (const f of this.follow.get(lhs)!) this.follow.get(B)!.add(f);\n                    }\n                    if (this.follow.get(B)!.size !== before) changed = true;\n                }\n            }\n        }\n    }\n\n    buildTable(): void {\n        this.table.clear();\n        for (const prod of this.grammar.productions) {\n            const rhsFirst = this.firstForRHS(prod.rhs);\n            for (const a of rhsFirst) {\n                if (a !== this.epsilon) {\n                    const key = `${prod.lhs},${a}`;\n                    this.table.set(key, prod);\n                }\n            }\n            if (rhsFirst.has(this.epsilon)) {\n                for (const b of this.follow.get(prod.lhs)!) {\n                    const key = `${prod.lhs},${b}`;\n                    this.table.set(key, prod);\n                }\n            }\n        }\n    }\n\n    private firstForRHS(rhs: Symbol[]): Set<Symbol> {\n        const result = new Set<Symbol>();\n        let allEpsilon = true;\n        for (const sym of rhs) {\n            if (sym === this.epsilon) break;\n            const symFirst = this.first.get(sym) ?? new Set([sym]);\n            for (const f of symFirst) {\n                if (f !== this.epsilon) result.add(f);\n            }\n            if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\n        }\n        if (allEpsilon && (rhs.length === 0 || rhs[rhs.length - 1] === this.epsilon)) {\n            result.add(this.epsilon);\n        }\n        return result;\n    }\n\n    parse(input: Symbol[]): boolean {\n        const stack: Symbol[] = [\"$\", this.grammar.start];\n        let ip = 0;\n        while (stack.length > 0) {\n            const X = stack.pop()!;\n            const a = ip < input.length ? input[ip] : \"$\";\n            if (X === a) {\n                ip++;\n            } else if (this.grammar.terminals.has(X)) {\n                console.error(`Error: unexpected terminal ${X} at position ${ip}`);\n                return false;\n            } else {\n                const key = `${X},${a}`;\n                const prod = this.table.get(key);\n                if (!prod) {\n                    console.error(`Error at ${X} on ${a}: no table entry (line ${this.getLine(a, ip)})`);\n                    // Error recovery: skip input tokens until a synchronizing token\n                    while (ip < input.length && !this.follow.get(X)!.has(input[ip])) ip++;\n                    if (ip >= input.length) return false;\n                    continue;\n                }\n                for (let i = prod.rhs.length - 1; i >= 0; i--) {\n                    if (prod.rhs[i] !== this.epsilon) stack.push(prod.rhs[i]);\n                }\n            }\n        }\n        return true;\n    }\n\n    private getLine(a: Symbol, pos: number): number {\n        return pos + 1; // simplified\n    }\n}\n\n// === Demo: Expression Grammar ===\nconst prods: Production[] = [\n    { lhs: \"E\", rhs: [\"T\", \"E'\"] },\n    { lhs: \"E'\", rhs: [\"+\", \"T\", \"E'\"] },\n    { lhs: \"E'\", rhs: [\"e\"] },\n    { lhs: \"T\", rhs: [\"F\", \"T'\"] },\n    { lhs: \"T'\", rhs: [\"*\", \"F\", \"T'\"] },\n    { lhs: \"T'\", rhs: [\"e\"] },\n    { lhs: \"F\", rhs: [\"(\", \"E\", \")\"] },\n    { lhs: \"F\", rhs: [\"id\"] },\n];\n\nconst parser = new LL1ParserGenerator(prods, \"E\");\nparser.computeFIRST();\nparser.computeFOLLOW();\nparser.buildTable();\n\nconsole.log(\"FIRST sets:\");\nfor (const [sym, set] of parser.first) {\n    if (parser.grammar.nonterminals.has(sym))\n        console.log(`  FIRST(${sym}) = {${[...set].join(\", \")}}`);\n}\n\nconsole.log(\"\\nFOLLOW sets:\");\nfor (const [sym, set] of parser.follow) {\n    console.log(`  FOLLOW(${sym}) = {${[...set].join(\", \")}}`);\n}\n\n// Parse id + id * id\nconsole.log(\"\\nParsing: id + id * id\");\nconst result = parser.parse([\"id\", \"+\", \"id\", \"*\", \"id\"]);\nconsole.log(`Result: ${result ? \"ACCEPT\" : \"REJECT\"}`);\n\n// Parse with error\nconsole.log(\"\\nParsing: id + * id (expect error)\");\nconst result2 = parser.parse([\"id\", \"+\", \"*\", \"id\"]);\nconsole.log(`Result: ${result2 ? \"ACCEPT\" : \"REJECT\"}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursive-descent-parsing-with-backtracking",
      children: "Recursive-Descent Parsing with Backtracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive-descent parsing implements each nonterminal as a procedure. For LL(1) grammars, no backtracking is needed. For non-LL(1) grammars, backtracking can be added:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RecursiveDescentParser {\n    private input: string[];\n    private pos = 0;\n    private savedPos = 0;\n\n    constructor(input: string[]) { this.input = input; }\n\n    private peek(): string { return this.pos < this.input.length ? this.input[this.pos] : \"$\"; }\n    private consume(expected?: string): boolean {\n        if (expected && this.peek() !== expected) return false;\n        this.pos++;\n        return true;\n    }\n    private save() { this.savedPos = this.pos; }\n    private restore() { this.pos = this.savedPos; }\n\n    parse(): boolean {\n        return this.expr() && this.peek() === \"$\";\n    }\n\n    private expr(): boolean {\n        this.save();\n        if (this.term() && this.exprTail()) return true;\n        this.restore();\n        return false;\n    }\n\n    private exprTail(): boolean {\n        if (this.peek() === \"+\") {\n            this.consume(\"+\");\n            return this.term() && this.exprTail();\n        }\n        return true; // e\n    }\n\n    private term(): boolean {\n        this.save();\n        if (this.factor() && this.termTail()) return true;\n        this.restore();\n        return false;\n    }\n\n    private termTail(): boolean {\n        if (this.peek() === \"*\") {\n            this.consume(\"*\");\n            return this.factor() && this.termTail();\n        }\n        return true; // e\n    }\n\n    private factor(): boolean {\n        if (this.peek() === \"(\") {\n            this.consume(\"(\");\n            const r = this.expr();\n            return r && this.consume(\")\");\n        }\n        if (this.peek() === \"id\") {\n            this.consume(\"id\");\n            return true;\n        }\n        return false;\n    }\n}\n\nconst rdp = new RecursiveDescentParser([\"id\", \"+\", \"id\", \"*\", \"id\"]);\nconsole.log(\"RD Parse:\", rdp.parse()); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-recovery-in-ll-parsing",
      children: "Error Recovery in LL Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["LL(1) parsers use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "panic-mode recovery"
      }), ": on encountering an error (blank table entry), the parser discards input tokens until it finds a token in FOLLOW(A) (the set of synchronizing tokens for the current nonterminal), then pops the stack and continues. This prevents cascading errors while still reporting the mistake clearly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Synchronizing token sets"
      }), ": For each nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), ", the synchronizing set is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FOLLOW(A)"
      }), ". Additional tokens like semicolons, end-keywords, and closing braces are also good synchronizers because they terminate statements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Top-down parsing constructs a derivation from the root (start symbol) toward the leaves (input). LL(1) grammars enable deterministic parsing using a predictive parsing table. Eliminating left recursion and left factoring is essential for converting practical grammars into LL(1) form. Recursive-descent parsing provides a straightforward implementation strategy when the grammar meets LL(1) conditions. The FIRST and FOLLOW sets are fundamental to table construction and error recovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LL(1) parsing is sufficient for most programming languages"
        }), ": Expressions, statements, and declarations can all be handled with LL(1) techniques. The need for bottom-up parsing is rare in practice."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive descent is the most intuitive parsing technique"
        }), ": Each nonterminal maps to exactly one function ? the implementation mirrors the grammar directly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Always eliminate left recursion first"
        }), ": Left-recursive grammars cause infinite loops in top-down parsers. The transformation is mechanical and should be done before any other analysis."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute FIRST and FOLLOW carefully"
        }), ": Errors in these sets propagate to the parsing table and produce mysterious failures. Verify with known examples."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error reporting matters"
        }), ": A good error message includes the line number, the unexpected token, and the expected tokens. Never just say \"syntax error.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// parsing topdown\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'parsing topdown', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// parsing topdown - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'parsing topdown' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which condition must hold for a grammar to be LL(1)?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It must be left-recursive"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) FIRST sets of alternative productions for the same nonterminal must be disjoint"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) It must use at least 3 tokens of lookahead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All nonterminals must derive e"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the purpose of left factoring?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) To eliminate e-productions from the grammar"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) To delay the parsing decision until sufficient lookahead is available"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) To convert the grammar to Chomsky normal form"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) To reduce the number of nonterminals"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In the LL(1) parsing table, e at position ", (0,jsx_runtime.jsx)(_components.code, {
            children: "M[E', )]"
          }), " means:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The parser should emit an error"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The parser should apply the production E' ? e when ) is the lookahead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The parser should skip the ) token"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) e is added to FOLLOW(E')"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the time complexity of the iterative FIRST computation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) O(n) where n is the number of terminals"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) O(p ? n) where p is the number of productions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) O(2n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) O(n log n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In recursive-descent parsing, what does each nonterminal correspond to?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A parsing table entry"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A procedure or function in the implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A regular expression"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A token category"
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
        children: "Define leftmost and rightmost derivations. Give an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does it mean for a grammar to be ambiguous? How can ambiguity be resolved?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the conditions that a grammar must satisfy to be LL(1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the role of FIRST and FOLLOW sets in constructing an LL(1) parser."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a parse tree and an abstract syntax tree?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Eliminate left recursion from the following grammar: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A ? Aa | Ab | c | d"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Left factor the grammar: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "S ? iEtS | iEtSeS | a"
        }), ". What is the purpose of left factoring?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute FIRST and FOLLOW for all nonterminals in the grammar:\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "S ? aBDh  B ? cC  C ? bC | e  D ? EF  E ? g | e  F ? f | e"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct the LL(1) parsing table for the expression grammar and parse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "id + id * id"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LL1ParserGenerator"
        }), " class, add the nonterminal ", (0,jsx_runtime.jsx)(_components.code, {
          children: "L"
        }), " for a list of IDs separated by commas and verify the table has no conflicts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a recursive-descent parser in TypeScript for a grammar that recognizes simple assignment statements:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "assign ? id = expr\nexpr   ? term { (+|-) term }\nterm   ? factor { (*|/) factor }\nfactor ? id | number | ( expr )\n"
          })
        }), "\nThe parser should report syntax errors with meaningful messages and show the parse tree structure as a parenthesized expression. Test it on valid and invalid inputs. Extend the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LL1ParserGenerator"
        }), " to output the actual parse tree as a structured JSON object during parsing."]
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