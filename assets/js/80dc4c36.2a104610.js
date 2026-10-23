"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[316],{

/***/ 9538
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
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    li: "li",
    mermaid: "mermaid",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[Grammar G] --> B[Eliminate Left Recursion]\r\n    B --> C[Left Factor]\r\n    C --> D[Compute FIRST & FOLLOW]\r\n    D --> E{\"LL(1) Valid?\"}\r\n    E -->|Yes| F[Build Parsing Table]\r\n    E -->|No| B\r\n    F --> G[Recursive Descent / Table-Driven Parser]\r\n    G --> H[Parse Tree / Error]\r\n    style A fill:#e1f5fe\r\n    style H fill:#c8e6c9"
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
        children: "expr   ? expr + term | term\r\nterm   ? term * factor | factor\r\nfactor ? ( expr ) | id\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "graph TD\r\n    subgraph \"Parse Tree\"\r\n        E1[\"E\"] --> E2[\"E\"]\r\n        E1 --> plus1[\"+\"]\r\n        E1 --> T1[\"T\"]\r\n        E2 --> T2[\"T\"]\r\n        T2 --> id1[\"id\"]\r\n        T1 --> id2[\"id\"]\r\n    end\r\n    subgraph \"AST\"\r\n        plus2[\"+\"] --> id3[\"id\"]\r\n        plus2 --> id4[\"id\"]\r\n    end"
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
        children: "1. string ? string + string ? id + string ? id + string + string ? id + id + string ? id + id + id\r\n2. string ? string + string ? string + string + string ? id + string + string ? id + id + string ? id + id + id\n"
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
        children: "A  ? ?A'\r\nA' ? aA' | e\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For multiple alternatives ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A ? Aa1 | Aa2 | ... | Aa? | ?1 | ?2 | ... | ??"
      }), ", the transformation is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "A  ? ?1A' | ?2A' | ... | ??A'\r\nA' ? a1A' | a2A' | ... | a?A' | e\n"
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
        children: "Algorithm: EliminateIndirectLeftRecursion\r\nInput: Grammar G with nonterminals A1, A2, ..., A?\r\nOutput: Grammar with no left recursion\r\n\r\nfor i = 1 to n:\r\n    for j = 1 to i-1:\r\n        Replace each A? ? A?? with A? ? d1? | d2? | ... | d??\r\n            where A? ? d1 | d2 | ... | d? are all productions for A?\r\n    Eliminate immediate left recursion for A?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Eliminate left recursion from the expression grammar:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original:   E ? E + T | T\r\n            T ? T * F | F\r\n            F ? (E) | id\r\n\r\nTransformed:\r\n            E  ? TE'\r\n            E' ? +TE' | e\r\n            T  ? FT'\r\n            T' ? *FT' | e\r\n            F  ? (E) | id\n"
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
        children: "Algorithm: LeftFactor\r\nInput: Nonterminal A with productions A ? a?1 | a?2 | ... | a?? | ?\r\n    where ? represents alternatives without the common prefix a\r\nOutput: Factored productions\r\n\r\nLet a be the longest common prefix of two or more alternatives\r\nIf no common prefix exists, return unchanged\r\nReplace A ? a?1 | a?2 | ... | a?? | ? with:\r\n    A ? aA' | ?\r\n    A' ? ?1 | ?2 | ... | ??\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Left factor the grammar ", (0,jsx_runtime.jsx)(_components.code, {
        children: "S ? iEtS | iEtSeS | a"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "S  ? iEtSS' | a\r\nS' ? eS | e\n"
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
        children: "Algorithm: ComputeFIRST\r\nInput: Grammar G\r\nOutput: FIRST(X) for all symbols X\r\n\r\nfor each terminal a: FIRST(a) = {a}\r\nfor each nonterminal A: FIRST(A) = {}\r\ne_in_current_pass = true\r\n\r\nwhile e_in_current_pass:\r\n    e_in_current_pass = false\r\n    for each production A ? X1X2...X?:\r\n        k = 0\r\n        all_derive_e = true\r\n        while all_derive_e and k < length:\r\n            k++\r\n            add (FIRST(X?) \\ {e}) to FIRST(A)\r\n            if e ? FIRST(X?): all_derive_e = false\r\n        if all_derive_e: add e to FIRST(A)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm for FOLLOW:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Algorithm: ComputeFOLLOW\r\nInput: Grammar G\r\nOutput: FOLLOW(A) for all nonterminals A\r\n\r\nFOLLOW(S) = {$}  // $ is end-of-input marker\r\nfor each nonterminal A ? S: FOLLOW(A) = {}\r\n\r\nwhile any FOLLOW set changes:\r\n    for each production A ? aB?:\r\n        // Rule 2: add FIRST(?) \\ {e} to FOLLOW(B)\r\n        add (FIRST(?) \\ {e}) to FOLLOW(B)\r\n        // Rule 3: if e ? FIRST(?), add FOLLOW(A) to FOLLOW(B)\r\n        if e ? FIRST(?):\r\n            add FOLLOW(A) to FOLLOW(B)\r\n    for each production A ? aB:\r\n        // Rule 3 (no ?): add FOLLOW(A) to FOLLOW(B)\r\n        add FOLLOW(A) to FOLLOW(B)\n"
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
        children: "Algorithm: BuildLL1Table\r\nInput: Grammar G with FIRST and FOLLOW computed\r\nOutput: Parsing table M[A, a] ? production to apply\r\n\r\nInitialize M[A, a] = error for all A, a\r\nfor each production A ? a:\r\n    for each terminal a in FIRST(a) \\ {e}:\r\n        M[A, a] = A ? a\r\n    if e ? FIRST(a):\r\n        for each terminal b in FOLLOW(A):\r\n            M[A, b] = A ? a\n"
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
        children: "stack = [$, S]\r\ninput = w$\r\nwhile stack is not empty:\r\n    let X = top(stack)\r\n    let a = current input token\r\n    if X == a:\r\n        pop(X); advance input\r\n    elif X is a terminal: error\r\n    elif M[X, a] == error: error\r\n    elif M[X, a] == X ? Y1Y2...Y?:\r\n        pop(X)\r\n        push Y?...Y2Y1 (reverse order)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-ll1-parser-generator-in-typescript",
      children: "Complete LL(1) Parser Generator in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Symbol = string;\r\ntype Production = { lhs: Symbol; rhs: Symbol[] };\r\ntype Grammar = { nonterminals: Set<Symbol>; terminals: Set<Symbol>; start: Symbol; productions: Production[] };\r\n\r\nclass LL1ParserGenerator {\r\n    grammar: Grammar;\r\n    first: Map<Symbol, Set<Symbol>> = new Map();\r\n    follow: Map<Symbol, Set<Symbol>> = new Map();\r\n    table: Map<string, Production> = new Map();\r\n    private epsilon = \"e\";\r\n\r\n    constructor(productions: Production[], start: Symbol) {\r\n        this.grammar = this.normalize(productions, start);\r\n    }\r\n\r\n    private normalize(prods: Production[], start: Symbol): Grammar {\r\n        const nonterminals = new Set<Symbol>();\r\n        const terminals = new Set<Symbol>();\r\n        for (const p of prods) {\r\n            nonterminals.add(p.lhs);\r\n            for (const s of p.rhs) {\r\n                if (s !== this.epsilon && !s.startsWith(\"<\")) terminals.add(s);\r\n                else if (s.startsWith(\"<\")) nonterminals.add(s);\r\n            }\r\n        }\r\n        return { nonterminals, terminals, start, productions: prods };\r\n    }\r\n\r\n    computeFIRST(): void {\r\n        for (const t of this.grammar.terminals) this.first.set(t, new Set([t]));\r\n        for (const n of this.grammar.nonterminals) this.first.set(n, new Set());\r\n        let changed = true;\r\n        while (changed) {\r\n            changed = false;\r\n            for (const prod of this.grammar.productions) {\r\n                const lhs = prod.lhs;\r\n                const before = this.first.get(lhs)!.size;\r\n                let allEpsilon = true;\r\n                for (const sym of prod.rhs) {\r\n                    if (sym === this.epsilon) break; // A ? e, add e\r\n                    const symFirst = this.first.get(sym) ?? new Set([sym]);\r\n                    for (const f of symFirst) {\r\n                        if (f !== this.epsilon) this.first.get(lhs)!.add(f);\r\n                    }\r\n                    if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\r\n                }\r\n                if (allEpsilon || prod.rhs.length === 0) {\r\n                    this.first.get(lhs)!.add(this.epsilon);\r\n                }\r\n                if (this.first.get(lhs)!.size !== before) changed = true;\r\n            }\r\n        }\r\n    }\r\n\r\n    computeFOLLOW(): void {\r\n        for (const n of this.grammar.nonterminals) this.follow.set(n, new Set());\r\n        this.follow.get(this.grammar.start)!.add(\"$\");\r\n        let changed = true;\r\n        while (changed) {\r\n            changed = false;\r\n            for (const prod of this.grammar.productions) {\r\n                const lhs = prod.lhs;\r\n                for (let i = 0; i < prod.rhs.length; i++) {\r\n                    const B = prod.rhs[i];\r\n                    if (!this.grammar.nonterminals.has(B)) continue;\r\n                    const before = this.follow.get(B)!.size;\r\n                    const ? = prod.rhs.slice(i + 1);\r\n                    let allEpsilon = true;\r\n                    for (const sym of ?) {\r\n                        const symFirst = this.first.get(sym) ?? new Set([sym]);\r\n                        for (const f of symFirst) {\r\n                            if (f !== this.epsilon) this.follow.get(B)!.add(f);\r\n                        }\r\n                        if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\r\n                    }\r\n                    if (allEpsilon) {\r\n                        for (const f of this.follow.get(lhs)!) this.follow.get(B)!.add(f);\r\n                    }\r\n                    if (this.follow.get(B)!.size !== before) changed = true;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    buildTable(): void {\r\n        this.table.clear();\r\n        for (const prod of this.grammar.productions) {\r\n            const rhsFirst = this.firstForRHS(prod.rhs);\r\n            for (const a of rhsFirst) {\r\n                if (a !== this.epsilon) {\r\n                    const key = `${prod.lhs},${a}`;\r\n                    this.table.set(key, prod);\r\n                }\r\n            }\r\n            if (rhsFirst.has(this.epsilon)) {\r\n                for (const b of this.follow.get(prod.lhs)!) {\r\n                    const key = `${prod.lhs},${b}`;\r\n                    this.table.set(key, prod);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    private firstForRHS(rhs: Symbol[]): Set<Symbol> {\r\n        const result = new Set<Symbol>();\r\n        let allEpsilon = true;\r\n        for (const sym of rhs) {\r\n            if (sym === this.epsilon) break;\r\n            const symFirst = this.first.get(sym) ?? new Set([sym]);\r\n            for (const f of symFirst) {\r\n                if (f !== this.epsilon) result.add(f);\r\n            }\r\n            if (!symFirst.has(this.epsilon)) { allEpsilon = false; break; }\r\n        }\r\n        if (allEpsilon && (rhs.length === 0 || rhs[rhs.length - 1] === this.epsilon)) {\r\n            result.add(this.epsilon);\r\n        }\r\n        return result;\r\n    }\r\n\r\n    parse(input: Symbol[]): boolean {\r\n        const stack: Symbol[] = [\"$\", this.grammar.start];\r\n        let ip = 0;\r\n        while (stack.length > 0) {\r\n            const X = stack.pop()!;\r\n            const a = ip < input.length ? input[ip] : \"$\";\r\n            if (X === a) {\r\n                ip++;\r\n            } else if (this.grammar.terminals.has(X)) {\r\n                console.error(`Error: unexpected terminal ${X} at position ${ip}`);\r\n                return false;\r\n            } else {\r\n                const key = `${X},${a}`;\r\n                const prod = this.table.get(key);\r\n                if (!prod) {\r\n                    console.error(`Error at ${X} on ${a}: no table entry (line ${this.getLine(a, ip)})`);\r\n                    // Error recovery: skip input tokens until a synchronizing token\r\n                    while (ip < input.length && !this.follow.get(X)!.has(input[ip])) ip++;\r\n                    if (ip >= input.length) return false;\r\n                    continue;\r\n                }\r\n                for (let i = prod.rhs.length - 1; i >= 0; i--) {\r\n                    if (prod.rhs[i] !== this.epsilon) stack.push(prod.rhs[i]);\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n\r\n    private getLine(a: Symbol, pos: number): number {\r\n        return pos + 1; // simplified\r\n    }\r\n}\r\n\r\n// === Demo: Expression Grammar ===\r\nconst prods: Production[] = [\r\n    { lhs: \"E\", rhs: [\"T\", \"E'\"] },\r\n    { lhs: \"E'\", rhs: [\"+\", \"T\", \"E'\"] },\r\n    { lhs: \"E'\", rhs: [\"e\"] },\r\n    { lhs: \"T\", rhs: [\"F\", \"T'\"] },\r\n    { lhs: \"T'\", rhs: [\"*\", \"F\", \"T'\"] },\r\n    { lhs: \"T'\", rhs: [\"e\"] },\r\n    { lhs: \"F\", rhs: [\"(\", \"E\", \")\"] },\r\n    { lhs: \"F\", rhs: [\"id\"] },\r\n];\r\n\r\nconst parser = new LL1ParserGenerator(prods, \"E\");\r\nparser.computeFIRST();\r\nparser.computeFOLLOW();\r\nparser.buildTable();\r\n\r\nconsole.log(\"FIRST sets:\");\r\nfor (const [sym, set] of parser.first) {\r\n    if (parser.grammar.nonterminals.has(sym))\r\n        console.log(`  FIRST(${sym}) = {${[...set].join(\", \")}}`);\r\n}\r\n\r\nconsole.log(\"\\nFOLLOW sets:\");\r\nfor (const [sym, set] of parser.follow) {\r\n    console.log(`  FOLLOW(${sym}) = {${[...set].join(\", \")}}`);\r\n}\r\n\r\n// Parse id + id * id\r\nconsole.log(\"\\nParsing: id + id * id\");\r\nconst result = parser.parse([\"id\", \"+\", \"id\", \"*\", \"id\"]);\r\nconsole.log(`Result: ${result ? \"ACCEPT\" : \"REJECT\"}`);\r\n\r\n// Parse with error\r\nconsole.log(\"\\nParsing: id + * id (expect error)\");\r\nconst result2 = parser.parse([\"id\", \"+\", \"*\", \"id\"]);\r\nconsole.log(`Result: ${result2 ? \"ACCEPT\" : \"REJECT\"}`);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recursive-descent-parsing-with-backtracking",
      children: "Recursive-Descent Parsing with Backtracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive-descent parsing implements each nonterminal as a procedure. For LL(1) grammars, no backtracking is needed. For non-LL(1) grammars, backtracking can be added:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class RecursiveDescentParser {\r\n    private input: string[];\r\n    private pos = 0;\r\n    private savedPos = 0;\r\n\r\n    constructor(input: string[]) { this.input = input; }\r\n\r\n    private peek(): string { return this.pos < this.input.length ? this.input[this.pos] : \"$\"; }\r\n    private consume(expected?: string): boolean {\r\n        if (expected && this.peek() !== expected) return false;\r\n        this.pos++;\r\n        return true;\r\n    }\r\n    private save() { this.savedPos = this.pos; }\r\n    private restore() { this.pos = this.savedPos; }\r\n\r\n    parse(): boolean {\r\n        return this.expr() && this.peek() === \"$\";\r\n    }\r\n\r\n    private expr(): boolean {\r\n        this.save();\r\n        if (this.term() && this.exprTail()) return true;\r\n        this.restore();\r\n        return false;\r\n    }\r\n\r\n    private exprTail(): boolean {\r\n        if (this.peek() === \"+\") {\r\n            this.consume(\"+\");\r\n            return this.term() && this.exprTail();\r\n        }\r\n        return true; // e\r\n    }\r\n\r\n    private term(): boolean {\r\n        this.save();\r\n        if (this.factor() && this.termTail()) return true;\r\n        this.restore();\r\n        return false;\r\n    }\r\n\r\n    private termTail(): boolean {\r\n        if (this.peek() === \"*\") {\r\n            this.consume(\"*\");\r\n            return this.factor() && this.termTail();\r\n        }\r\n        return true; // e\r\n    }\r\n\r\n    private factor(): boolean {\r\n        if (this.peek() === \"(\") {\r\n            this.consume(\"(\");\r\n            const r = this.expr();\r\n            return r && this.consume(\")\");\r\n        }\r\n        if (this.peek() === \"id\") {\r\n            this.consume(\"id\");\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\nconst rdp = new RecursiveDescentParser([\"id\", \"+\", \"id\", \"*\", \"id\"]);\r\nconsole.log(\"RD Parse:\", rdp.parse()); // true\n"
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
      children: "// parsing topdown\r\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\r\nclass Processor {\r\nprivate tasks: Task[] = []\r\nprivate maxConcurrency: number\r\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\r\nasync add(task: Omit<Task, \"status\">): Promise<void> {\r\nthis.tasks.push({ ...task, status: \"pending\" })\r\n}\r\nasync runAll(): Promise<void> {\r\nconst running: Promise<void>[] = []\r\nfor (const t of this.tasks) {\r\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\r\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\r\nrunning.push(p)\r\n}\r\nawait Promise.all(running)\r\n}\r\nprivate async execute(t: Task): Promise<void> {\r\nt.status = \"running\"\r\nawait new Promise(r => setTimeout(r, 10))\r\nt.status = \"done\"\r\n}\r\ngetResults(): Task[] { return this.tasks }\r\ngetStats(): { done: number; pending: number; running: number } {\r\nconst done = this.tasks.filter(t => t.status === \"done\").length\r\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\r\nconst running = this.tasks.filter(t => t.status === \"running\").length\r\nreturn { done, pending, running }\r\n}\r\n}\r\nasync function main() {\r\nconst proc = new Processor(2)\r\nawait proc.add({ id: '1', name: 'parsing topdown', data: { topic: 'lexical-parsing-codegen' } })\r\nawait proc.runAll()\r\nconsole.log('Stats:', proc.getStats())\r\n}\r\nmain().catch(console.error)\r\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// parsing topdown - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\r\nclass Cache {\r\nprivate store: Map<string, CacheEntry> = new Map()\r\nconstructor(private defaultTTL: number = 60000) {}\r\nset(key: string, value: unknown, ttl?: number): void {\r\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\r\n}\r\nget(key: string): unknown | undefined {\r\nconst entry = this.store.get(key)\r\nif (!entry) return undefined\r\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\r\nreturn entry.value\r\n}\r\ndelete(key: string): boolean { return this.store.delete(key) }\r\nclear(): void { this.store.clear() }\r\nsize(): number { return this.store.size }\r\nkeys(): string[] { return Array.from(this.store.keys()) }\r\n}\r\nclass Logger {\r\nprivate entries: string[] = []\r\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\r\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\r\nthis.entries.push(entry)\r\nconsole.log(entry)\r\n}\r\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\r\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\r\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\r\ngetLogs(): string[] { return [...this.entries] }\r\nclear(): void { this.entries = [] }\r\n}\r\nfunction computeHash(input: string): string {\r\nlet hash = 0\r\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\r\nreturn Math.abs(hash).toString(16)\r\n}\r\nasync function demo(): Promise<void> {\r\nconst cache = new Cache(5000)\r\ncache.set('key1', 'compilers demo')\r\nconst log = new Logger()\r\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'parsing topdown' })\r\nconst v = cache.get(\"key1\")\r\nconsole.log('Cached:', v)\r\nconsole.log('Hash:', computeHash('compilers'))\r\n}\r\ndemo()\r\nexport { Cache, Logger, computeHash, CacheEntry }"
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
        children: ["Compute FIRST and FOLLOW for all nonterminals in the grammar:\r\n", (0,jsx_runtime.jsx)(_components.code, {
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
            children: "assign ? id = expr\r\nexpr   ? term { (+|-) term }\r\nterm   ? factor { (*|/) factor }\r\nfactor ? id | number | ( expr )\n"
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



/***/ }

}]);