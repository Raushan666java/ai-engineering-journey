"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[75338],{

/***/ 14892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_compiler_design_02_lexical_md_6a6_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-compiler-design-02-lexical-md-6a6.json
const site_docs_courses_compiler_design_02_lexical_md_6a6_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/compiler-design/02-lexical","title":"Chapter 2: Lexical Analysis","description":"? Previous Introduction | Next Top-Down Parsing","source":"@site/docs/courses/compiler-design/02-lexical.md","sourceDirName":"courses/compiler-design","slug":"/compiler-design/02-lexical","permalink":"/ai-engineering-journey/compiler-design/02-lexical","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-lexical","slug":"/compiler-design/02-lexical","title":"Chapter 2: Lexical Analysis","sidebar_label":"Chapter 2: Lexical Analysis","sidebar_position":2},"sidebar":"coursesSidebar","previous":{"title":"Chapter 1: Introduction to Compiler Design","permalink":"/ai-engineering-journey/compiler-design/01-introduction"},"next":{"title":"Chapter 3: Top-Down Parsing","permalink":"/ai-engineering-journey/compiler-design/03-parsing-topdown"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/compiler-design/02-lexical.md


const frontMatter = {
	id: '02-lexical',
	slug: '/compiler-design/02-lexical',
	title: 'Chapter 2: Lexical Analysis',
	sidebar_label: 'Chapter 2: Lexical Analysis',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Lexical Analysis';

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
  "value": "Tokens, Lexemes, and Patterns",
  "id": "tokens-lexemes-and-patterns",
  "level": 3
}, {
  "value": "Input Buffering",
  "id": "input-buffering",
  "level": 3
}, {
  "value": "Specification of Tokens Using Regular Expressions",
  "id": "specification-of-tokens-using-regular-expressions",
  "level": 3
}, {
  "value": "Regex to NFA: Thompson&#39;s Construction",
  "id": "regex-to-nfa-thompsons-construction",
  "level": 3
}, {
  "value": "NFA to DFA: Subset Construction",
  "id": "nfa-to-dfa-subset-construction",
  "level": 3
}, {
  "value": "DFA Minimization: Hopcroft&#39;s Algorithm",
  "id": "dfa-minimization-hopcrofts-algorithm",
  "level": 3
}, {
  "value": "TypeScript Lexer Engine",
  "id": "typescript-lexer-engine",
  "level": 3
}, {
  "value": "Lookahead and Maximal Munch",
  "id": "lookahead-and-maximal-munch",
  "level": 3
}, {
  "value": "Error Recovery in Lexers",
  "id": "error-recovery-in-lexers",
  "level": 3
}, {
  "value": "Lex and Flex",
  "id": "lex-and-flex",
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
        id: "chapter-2-lexical-analysis",
        children: "Chapter 2: Lexical Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "? Previous:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/01-introduction",
        children: "Chapter 1: Introduction"
      }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next:"
      }), " ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/compiler-design/03-parsing-topdown",
        children: "Chapter 3: Top-Down Parsing"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, students will be able to: define tokens, lexemes, and patterns; design input buffering schemes; specify tokens using regular expressions; construct NFAs from regular expressions using Thompson's construction; convert NFAs to DFAs using subset construction; minimize DFAs using Hopcroft's algorithm; implement a complete table-driven lexical analyzer in TypeScript; and use Lex or Flex to generate scanners automatically."
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
        href: "../../assets/images/lessons/compiler-design/02-lexical/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/02-lexical/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/02-lexical/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/02-lexical/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/compiler-design/02-lexical/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/compiler-design/02-lexical/visual-explanation.png",
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
            children: "Tokens, Lexemes, and Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fundamental concepts of lexical categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input Buffering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-buffer and one-buffer schemes for efficient scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Specification of Tokens Using Regular Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal notation for describing token patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Regex to NFA: Thompson's Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inductive NFA construction from regex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NFA to DFA: Subset Construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converting NFA sets into DFA states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DFA Minimization: Hopcroft's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition-refinement for minimal DFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recognition of Tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA simulation and transition table scanning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Error Recovery in Lexers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handling unrecognized input gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lex and Flex"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic scanner generation tools"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Source Code] --> B[Input Buffer]\n    B --> C[Scanner / DFA]\n    C --> D[Token Stream]\n    E[Regular Expressions] --> F[Thompson's Construction]\n    F --> G[NFA]\n    G --> H[Subset Construction]\n    H --> I[Unminimized DFA]\n    I --> J[Hopcroft Minimization]\n    J --> K[Minimal DFA]\n    K --> C\n    L[Lex/Flex Spec] --> M[Generated Scanner]\n    M --> C\n    style A fill:#e1f5fe\n    style D fill:#c8e6c9\n    style K fill:#c8e6c9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "tokens-lexemes-and-patterns",
      children: "Tokens, Lexemes, and Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lexical analysis is the first phase of compilation. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lexical analyzer"
      }), ", or scanner, reads the source program's character stream and groups characters into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lexemes"
      }), " ? sequences of characters that form a logical unit. For each lexeme, the scanner produces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "token"
      }), ", a pair consisting of a token name and an optional attribute value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "token name"
      }), " is a symbolic category such as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ID"
      }), " (identifier), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NUMBER"
      }), " (numeric literal), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IF"
      }), " (the keyword ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), "), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "PLUS"
      }), " (the plus operator), or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "LPAREN"
      }), " (left parenthesis). The attribute value carries the specific lexeme or other information associated with the token. For example, the token for the lexeme ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count"
      }), " might be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ID"
      }), " with attribute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "pointer to symbol-table entry for \"count\""
      }), ". For a numeric literal, the attribute might be the integer or floating-point value."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pattern"
      }), " is a rule that describes the set of lexemes belonging to a given token. Patterns are typically described using regular expressions. A lexeme is a particular instance of a pattern: the string ", (0,jsx_runtime.jsx)(_components.code, {
        children: "42"
      }), " is a lexeme of the token ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NUMBER"
      }), " whose pattern could be ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0-9]+"
      }), ". The scanner must recognize multiple token types simultaneously, distinguishing, for example, between the keyword ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " and an identifier ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ifx"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Tokens are the vocabulary of the compiler ? all subsequent phases work with this token stream, never with raw characters."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input-buffering",
      children: "Input Buffering"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The scanner examines characters one at a time and must often look ahead one or more characters to determine the token boundary. Efficient input handling is essential because lexical analysis is I/O-bound."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "two-buffer scheme"
      }), ", the source file is read into two alternating buffers, typically of size 4096 or 8192 characters. A pointer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "lexemeBegin"
      }), " marks the start of the current lexeme. A second pointer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "forward"
      }), " scans ahead. When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "forward"
      }), " reaches the end of a buffer, the next block of input is loaded into the other buffer. A sentinel character (frequently EOF) placed at the end of each buffer simplifies the end-of-buffer check, eliminating a conditional branch in the innermost scanning loop."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-buffer scheme"
      }), " uses a single buffer that is refilled when necessary. While simpler, it requires more careful management of the lexeme-start pointer because buffer contents may be overwritten. Most production scanners use the two-buffer approach for efficiency."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "specification-of-tokens-using-regular-expressions",
      children: "Specification of Tokens Using Regular Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular expressions provide a formal notation for specifying token patterns. The basic operations are:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concatenation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RS"
        }), " matches R followed by S"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Alternation"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R | S"
        }), " matches R or S"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kleene closure"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R*"
        }), " matches zero or more occurrences of R"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive closure"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R+"
        }), " matches one or more occurrences of R"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Optional"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "R?"
        }), " matches zero or one occurrences of R"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Character classes"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[a-z]"
        }), " is shorthand for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a|b|c|...|z"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Important regular definitions for a typical programming language:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "digit       ? [0-9]\nletter      ? [a-zA-Z_]\nidentifier  ? letter (letter | digit)*\ninteger     ? digit+\nreal        ? digit+ (\\. digit+)? (E [+-]? digit+)?\nwhitespace  ? [ \\t\\n]+\ncomment     ? \"/*\" (any)* \"*/\"\nstringlit   ? \"\\\"\" (any - \"\\\"\")* \"\\\"\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lexical-analyzer generator converts these regular definitions into a deterministic finite automaton (DFA). The conversion proceeds through three steps: constructing NFAs via Thompson's construction, converting to a DFA via subset construction, and minimizing the DFA."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regex-to-nfa-thompsons-construction",
      children: "Regex to NFA: Thompson's Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thompson's construction maps each regular expression to an NFA inductively, following the structure of the regex:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Base cases:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "e:      start --e--? accept\na:      start --a--? accept\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Inductive cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For alternation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R | S"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    s((start)) --e--> r((R NFA start))\n    s --e--> s2((S NFA start))\n    r --...--> ra((R NFA accept))\n    s2 --...--> sa((S NFA accept))\n    ra --e--> a((accept))\n    sa --e--> a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For concatenation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R S"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    r((R NFA start)) --...--> ra((R NFA accept))\n    ra --e--> s((S NFA start))\n    s --...--> sa((S NFA accept))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For Kleene closure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R*"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    s((start)) --e--> r((R NFA start))\n    s --e--> a((accept))\n    r --...--> ra((R NFA accept))\n    ra --e--> r\n    ra --e--> a\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal algorithm for Thompson's construction:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function Thompson(regex):\n    if regex = e:\n        return NFA with start ? e ? accept\n    if regex = a (a single symbol):\n        return NFA with start ? a ? accept\n    if regex = R | S:\n        build NFA_R = Thompson(R)\n        build NFA_S = Thompson(S)\n        create new start state s0 with e transitions to NFA_R.start and NFA_S.start\n        create new accept state with e transitions from NFA_R.accept and NFA_S.accept\n        return combined NFA\n    if regex = R S:\n        build NFA_R = Thompson(R)\n        build NFA_S = Thompson(S)\n        add e transition from NFA_R.accept to NFA_S.start\n        return combined NFA (start = NFA_R.start, accept = NFA_S.accept)\n    if regex = R*:\n        build NFA_R = Thompson(R)\n        create new start state s0 with e ? NFA_R.start and e ? new accept\n        add e from NFA_R.accept ? NFA_R.start and NFA_R.accept ? new accept\n        return combined NFA\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nfa-to-dfa-subset-construction",
      children: "NFA to DFA: Subset Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The subset construction converts an NFA into an equivalent DFA. Each DFA state corresponds to a set of NFA states reachable on the same input."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function SubsetConstruction(NFA):\n    DFA.start = e-closure({NFA.start})\n    DFA.states = {DFA.start}\n    unmarked = {DFA.start}\n    DFA.transitions = {}\n\n    while unmarked is not empty:\n        remove T from unmarked\n        for each input symbol a:\n            U = e-closure(move(T, a))\n            if U is not empty and U not in DFA.states:\n                add U to DFA.states\n                add U to unmarked\n            DFA.transitions[T, a] = U\n\n    DFA.accept = {S in DFA.states | S contains any NFA accept state}\n    return DFA\n\nfunction e-closure(states):\n    result = states\n    stack = states\n    while stack is not empty:\n        pop s from stack\n        for each state t reachable from s via e:\n            if t not in result:\n                add t to result\n                push t onto stack\n    return result\n\nfunction move(states, a):\n    result = {}\n    for each state s in states:\n        for each state t reachable from s via a:\n            add t to result\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dfa-minimization-hopcrofts-algorithm",
      children: "DFA Minimization: Hopcroft's Algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hopcroft's algorithm produces the minimal DFA by partitioning states into equivalence classes. Two states are equivalent if, for every input string, they either both reach an accepting state or both reach a non-accepting state."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "function HopcroftMinimize(DFA):\n    // Partition states into accepting and non-accepting\n    P = {F, Q \\ F}  // F = accept states, Q = all states\n\n    // Refine partitions\n    while P changes:\n        for each group G in P:\n            for each input symbol a:\n                split G into states whose transitions on a go to the same group in P\n                if split found, replace G with the split groups\n\n    // Build minimal DFA from partitions\n    for each group G in P:\n        create a new state representing G\n        if G contains start, this is the new start\n        if G contains any accept, this is a new accept\n        for transition from any state s in G on a to state t in group H:\n            add transition from group G to group H on a\n\n    return minimal DFA\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example"
      }), ": Minimize a DFA for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(a|b)*abb"
      }), ". Start with partition ", (0,jsx_runtime.jsx)(_components.code, {
        children: "P = { {0,1,2}, {3} }"
      }), " (assuming state 3 is the sole accepting state). Refine by checking transitions: if states in a group go to different groups on the same input, split. After refinement, each group contains states indistinguishable by any input string."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The minimized DFA has the fewest possible states while recognizing the same language. For a DFA with N states and an alphabet of size S, Hopcroft's algorithm runs in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "O(N S log N)"
      }), " time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-lexer-engine",
      children: "TypeScript Lexer Engine"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a complete TypeScript implementation of a regex-to-DFA pipeline:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Automaton Types ===\ninterface NFAState {\n    id: number;\n    transitions: Map<string, NFAState[]>;\n    epsilon: NFAState[];\n    isAccept: boolean;\n}\n\ninterface DFAState {\n    id: number;\n    nfaStates: Set<number>;\n    transitions: Map<string, DFAState>;\n    isAccept: boolean;\n}\n\n// === Thompson's Construction ===\nclass NFA {\n    start: NFAState;\n    accept: NFAState;\n    private nextId = 0;\n\n    constructor(start?: NFAState, accept?: NFAState) {\n        this.start = start ?? this.newState();\n        this.accept = accept ?? this.newState();\n    }\n\n    private newState(): NFAState {\n        return { id: this.nextId++, transitions: new Map(), epsilon: [], isAccept: false };\n    }\n\n    // e NFA\n    static epsilon(): NFA {\n        const nfa = new NFA();\n        nfa.start.epsilon.push(nfa.accept);\n        return nfa;\n    }\n\n    // Symbol NFA\n    static symbol(c: string): NFA {\n        const nfa = new NFA();\n        nfa.start.transitions.set(c, [nfa.accept]);\n        return nfa;\n    }\n\n    // Union: R | S\n    static union(r: NFA, s: NFA): NFA {\n        const nfa = new NFA();\n        nfa.start.epsilon.push(r.start, s.start);\n        r.accept.epsilon.push(nfa.accept);\n        r.accept.isAccept = false;\n        s.accept.epsilon.push(nfa.accept);\n        s.accept.isAccept = false;\n        return nfa;\n    }\n\n    // Concatenation: R S\n    static concat(r: NFA, s: NFA): NFA {\n        r.accept.epsilon.push(s.start);\n        r.accept.isAccept = false;\n        return new NFA(r.start, s.accept);\n    }\n\n    // Kleene star: R*\n    static star(r: NFA): NFA {\n        const nfa = new NFA();\n        nfa.start.epsilon.push(r.start, nfa.accept);\n        r.accept.epsilon.push(r.start, nfa.accept);\n        r.accept.isAccept = false;\n        return nfa;\n    }\n\n    // Parse a simple regex into an NFA (supports |, *, concatenation, parens, chars)\n    static fromRegex(regex: string): NFA {\n        let idx = 0;\n\n        const parseUnion = (): NFA => {\n            let left = parseConcat();\n            while (idx < regex.length && regex[idx] === \"|\") {\n                idx++;\n                const right = parseConcat();\n                left = NFA.union(left, right);\n            }\n            return left;\n        };\n\n        const parseConcat = (): NFA => {\n            let left = parseStar();\n            while (idx < regex.length && regex[idx] !== \")\" && regex[idx] !== \"|\" && regex[idx] !== \"*\") {\n                const right = parseStar();\n                left = NFA.concat(left, right);\n            }\n            return left;\n        };\n\n        const parseStar = (): NFA => {\n            let base = parsePrimary();\n            while (idx < regex.length && regex[idx] === \"*\") {\n                idx++;\n                base = NFA.star(base);\n            }\n            return base;\n        };\n\n        const parsePrimary = (): NFA => {\n            if (idx < regex.length && regex[idx] === \"(\") {\n                idx++; // skip '('\n                const inner = parseUnion();\n                if (idx < regex.length && regex[idx] === \")\") idx++; // skip ')'\n                return inner;\n            }\n            if (idx < regex.length) {\n                const c = regex[idx++];\n                return NFA.symbol(c);\n            }\n            return NFA.epsilon();\n        };\n\n        const nfa = parseUnion();\n        nfa.accept.isAccept = true;\n        return nfa;\n    }\n}\n\n// === Subset Construction (NFA ? DFA) ===\nclass DFA {\n    states: DFAState[] = [];\n    start: DFAState;\n\n    constructor(nfa: NFA) {\n        const allNfaStates = this.collectNfaStates(nfa);\n\n        const epsilonClosure = (states: Set<number>): Set<number> => {\n            const result = new Set(states);\n            const stack = [...states];\n            while (stack.length > 0) {\n                const s = stack.pop()!;\n                for (const eps of allNfaStates.get(s)?.epsilon ?? []) {\n                    if (!result.has(eps.id)) {\n                        result.add(eps.id);\n                        stack.push(eps.id);\n                    }\n                }\n            }\n            return result;\n        };\n\n        const move = (states: Set<number>, symbol: string): Set<number> => {\n            const result = new Set<number>();\n            for (const s of states) {\n                const next = allNfaStates.get(s)?.transitions.get(symbol) ?? [];\n                for (const ns of next) result.add(ns.id);\n            }\n            return result;\n        };\n\n        const alphabet = new Set<string>();\n        for (const [_, ns] of allNfaStates) {\n            for (const sym of ns.transitions.keys()) alphabet.add(sym);\n        }\n\n        // Build DFA state map: Set<number> ? DFAState\n        const dfaMap = new Map<string, DFAState>();\n        const startClosure = epsilonClosure(new Set([nfa.start.id]));\n        this.start = this.getOrCreateDFAState(startClosure, dfaMap, nfa);\n        const queue: DFAState[] = [this.start];\n\n        while (queue.length > 0) {\n            const dfaState = queue.shift()!;\n            for (const sym of alphabet) {\n                const next = epsilonClosure(move(dfaState.nfaStates, sym));\n                if (next.size === 0) continue;\n                const nextState = this.getOrCreateDFAState(next, dfaMap, nfa);\n                dfaState.transitions.set(sym, nextState);\n                if (!this.states.includes(nextState)) {\n                    this.states.push(nextState);\n                    queue.push(nextState);\n                }\n            }\n        }\n    }\n\n    private collectNfaStates(nfa: NFA): Map<number, NFAState> {\n        const map = new Map<number, NFAState>();\n        const visit = (s: NFAState) => {\n            if (map.has(s.id)) return;\n            map.set(s.id, s);\n            for (const eps of s.epsilon) visit(eps);\n            for (const [_, arr] of s.transitions) for (const t of arr) visit(t);\n        };\n        visit(nfa.start);\n        return map;\n    }\n\n    private getOrCreateDFAState(\n        closure: Set<number>,\n        map: Map<string, DFAState>,\n        nfa: NFA\n    ): DFAState {\n        const key = [...closure].sort().join(\",\");\n        if (map.has(key)) return map.get(key)!;\n        const isAccept = [...closure].some(id => {\n            // find the NFA state with this id\n            const allStates = this.collectNfaStates(nfa);\n            return allStates.get(id)?.isAccept ?? false;\n        });\n        const state: DFAState = {\n            id: map.size,\n            nfaStates: closure,\n            transitions: new Map(),\n            isAccept,\n        };\n        map.set(key, state);\n        this.states.push(state);\n        return state;\n    }\n\n    // Hopcroft's DFA minimization\n    minimize(): DFA {\n        // Partition into accepting and non-accepting\n        let partitions: Set<number>[] = [\n            new Set(this.states.filter(s => s.isAccept).map(s => s.id)),\n            new Set(this.states.filter(s => !s.isAccept).map(s => s.id)),\n        ].filter(s => s.size > 0);\n\n        const alphabet = new Set<string>();\n        for (const s of this.states) for (const sym of s.transitions.keys()) alphabet.add(sym);\n\n        let changed = true;\n        while (changed) {\n            changed = false;\n            const newPartitions: Set<number>[] = [];\n            for (const group of partitions) {\n                const splits = new Map<string, Set<number>>();\n                for (const sid of group) {\n                    // Build signature: for each symbol, which partition does transition go to?\n                    const state = this.states[sid];\n                    const sigParts: string[] = [];\n                    for (const sym of alphabet) {\n                        const next = state.transitions.get(sym);\n                        let partIdx = -1;\n                        if (next) {\n                            partIdx = partitions.findIndex(p => p.has(next.id));\n                        }\n                        sigParts.push(`${sym}:${partIdx}`);\n                    }\n                    const sig = sigParts.join(\",\");\n                    if (!splits.has(sig)) splits.set(sig, new Set());\n                    splits.get(sig)!.add(sid);\n                }\n                if (splits.size > 1) changed = true;\n                for (const [, splitGroup] of splits) {\n                    newPartitions.push(splitGroup);\n                }\n            }\n            partitions = newPartitions;\n        }\n\n        // Build minimal DFA from partitions\n        const partIdMap = new Map<number, number>();\n        partitions.forEach((group, i) => {\n            for (const sid of group) partIdMap.set(sid, i);\n        });\n\n        const startPart = partIdMap.get(this.start.id)!;\n        // Create minimal DFA states\n        const minStates: Map<number, DFAState> = new Map();\n        for (const [_, partIdx] of partIdMap) {\n            if (!minStates.has(partIdx)) {\n                const rep = [...partitions[partIdx]][0]; // representative\n                minStates.set(partIdx, {\n                    id: partIdx,\n                    nfaStates: new Set(),\n                    transitions: new Map(),\n                    isAccept: this.states[rep].isAccept,\n                });\n            }\n        }\n\n        // Add transitions\n        for (const [sid, partIdx] of partIdMap) {\n            const orig = this.states[sid];\n            const minState = minStates.get(partIdx)!;\n            for (const [sym, next] of orig.transitions) {\n                const nextPart = partIdMap.get(next.id)!;\n                minState.transitions.set(sym, minStates.get(nextPart)!);\n            }\n        }\n\n        const result = new DFA(new NFA()); // dummy construction\n        result.states = [...minStates.values()];\n        result.start = minStates.get(startPart)!;\n        return result;\n    }\n\n    simulate(input: string): boolean {\n        let state = this.start;\n        for (const c of input) {\n            const next = state.transitions.get(c);\n            if (!next) return false;\n            state = next;\n        }\n        return state.isAccept;\n    }\n}\n\n// === TokenStream Output ===\ninterface Token {\n    type: string;\n    lexeme: string;\n    line: number;\n    column: number;\n}\n\nclass TokenStream {\n    private tokens: Token[] = [];\n    private pos = 0;\n\n    add(type: string, lexeme: string, line: number, column: number): void {\n        this.tokens.push({ type, lexeme, line, column });\n    }\n\n    next(): Token | null {\n        return this.pos < this.tokens.length ? this.tokens[this.pos++] : null;\n    }\n\n    peek(): Token | null {\n        return this.pos < this.tokens.length ? this.tokens[this.pos] : null;\n    }\n\n    getAll(): Token[] {\n        return this.tokens;\n    }\n}\n\n// === Demo ===\nconst nfa = NFA.fromRegex(\"(a|b)*abb\");\nconsole.log(\"NFA constructed from (a|b)*abb\");\n\nconst dfa = new DFA(nfa);\nconsole.log(`DFA has ${dfa.states.length} states`);\n\nconst minDfa = dfa.minimize();\nconsole.log(`Minimized DFA has ${minDfa.states.length} states`);\n\n// Test\nconst tests = [\"abb\", \"aabb\", \"babb\", \"ababb\", \"ab\", \"bbba\"];\nfor (const t of tests) {\n    console.log(`  \"${t}\" ? ${minDfa.simulate(t) ? \"ACCEPT\" : \"REJECT\"}`);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lookahead-and-maximal-munch",
      children: "Lookahead and Maximal Munch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The scanner must decide where one token ends and the next begins. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "maximal munch"
      }), " rule states: the scanner reads the longest possible string of input characters that matches any token pattern. This ensures that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ifx"
      }), " is never mistakenly tokenized as the keyword ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " followed by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["However, maximal munch occasionally interacts poorly with lookahead. Consider the ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), " token in C++: without context, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a>b>c"
      }), " could be parsed as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a > b > c"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a >> c"
      }), " (if ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), " is a token). C++11 resolves this lexically: ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), " in template contexts is treated as two ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">"
      }), " tokens. The scanner may need to consult parser state to make correct decisions ? this is known as ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context-sensitive lexing"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lookahead"
      }), " is handled by reading one character beyond the lexeme boundary without consuming it. In a two-buffer scheme, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "forward"
      }), " advances past the lexeme, then retracts to the boundary after the token is identified. Some tokens require indefinite lookahead; for example, C++ raw string literals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "R\"delimiter(content)delimiter\""
      }), " require scanning until a matching delimiter is found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-recovery-in-lexers",
      children: "Error Recovery in Lexers"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When the scanner encounters a character that does not match any token pattern, the recovery strategy is critical. Common strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Panic mode"
        }), ": Skip characters until a recognizable token begins. Report the error, include the offending characters in the error message, and continue scanning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Delete character"
        }), ": Remove the unexpected character and rescan. Simple but can cause cascading errors."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Insert character"
        }), ": Insert a guessed token (e.g., a semicolon) to allow parsing to continue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error token"
        }), ": Emit a special ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ERROR"
        }), " token with the offending lexeme and let the parser handle recovery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The TypeScript ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ErrorRecoveringLexer"
      }), " from Chapter 1 demonstrates panic mode."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lex-and-flex",
      children: "Lex and Flex"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lex and its GNU implementation Flex are lexical-analyzer generators that accept a specification file containing regular-expression patterns and associated semantic actions. The generated C function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yylex()"
      }), " reads input characters and returns token codes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Flex specification has three sections:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "%{\n/* C declarations - included verbatim in the generated scanner */\n#include \"tokens.h\"\nint line = 1;\n%}\n\n%%\n/* Translation rules: patterns and actions */\n[ \\t\\n]       { /* skip whitespace */ }\n[a-zA-Z_][a-zA-Z0-9_]* { return ID; }\n[0-9]+        { return INTEGER; }\n\"+\"           { return PLUS; }\n\"-\"           { return MINUS; }\n\"*\"           { return TIMES; }\n\"/\"           { return DIVIDE; }\n\"(\"           { return LPAREN; }\n\")\"           { return RPAREN; }\n.             { printf(\"Error at line %d\\n\", line); }\n\n%%\n/* Auxiliary routines */\nint main() { yylex(); return 0; }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Flex generates a precomputed DFA transition table for maximum speed. The variable ", (0,jsx_runtime.jsx)(_components.code, {
        children: "yytext"
      }), " contains the matched lexeme when the action executes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Lexical analysis groups source characters into tokens based on patterns described by regular expressions. The conversion pipeline ? regex ? NFA (Thompson's construction) ? DFA (subset construction) ? minimal DFA (Hopcroft's algorithm) ? produces an efficient recognizer. The scanner is implemented as a table-driven DFA simulation, optionally generated by tools such as Lex and Flex. Input buffering minimizes I/O overhead, while the maximal-munch rule and keyword-resolution logic ensure correct tokenization."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build the NFA ? DFA ? minimize pipeline once"
        }), ": These algorithms are reusable across any language's scanner. Store them in a library."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lex/Flex for production, hand-written for education"
        }), ": For serious compilers, use a generator. For learning, hand-write a scanner to understand DFA internals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximal munch is nearly always right"
        }), ": Exceptions exist (C++ templates) but are rare. Start with maximal munch and add context-sensitive rules only when needed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords are not a separate DFA"
        }), ": Build a single DFA for all tokens, then check the symbol table after acceptance. If the lexeme matches a keyword, change the token type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error recovery is critical for usability"
        }), ": A scanner that crashes on the first unexpected character is unusable. Always implement at least panic-mode recovery."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lexical\n// lexical-parsing-codegen implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'lexical', data: { topic: 'lexical-parsing-codegen' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// lexical - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'compilers demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'compiler-design', chapter: 'lexical' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('compilers'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What does the maximal-munch rule specify?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The scanner should match the shortest possible string"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The scanner should match the longest possible string that forms a token"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The scanner should always prefer keywords over identifiers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The scanner should minimize memory usage"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Thompson's construction produces what from a regular expression?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A DFA directly"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A nondeterministic finite automaton"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) A parse tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A symbol table"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Hopcroft's DFA minimization, the initial partition separates:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Start and non-start states"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Accepting and non-accepting states"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) States with self-loops and those without"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Reachable and unreachable states"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the time complexity of Hopcroft's algorithm?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) O(N)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) O(N log N)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) O(N S log N)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) O(N?)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The e-closure of a set of NFA states S is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) All states reachable from S on any single symbol"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) All states reachable from S via any number of e-transitions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The intersection of all states in S"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The union of all accepting states"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answers</summary>\n1. B, 2. B, 3. B, 4. C, 5. B\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the terms token, lexeme, and pattern. Provide an example of each."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the two-buffer input-scanning scheme. How does a sentinel character simplify buffer management?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a regular expression that matches floating-point constants in scientific notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between a DFA and an NFA. Why is a DFA preferred for the scanner implementation?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Trace the execution of Thompson's construction for the regex ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a|b)*"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Construct an NFA for the regular expression ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a|b)*abb"
        }), " using Thompson's construction. Then apply the subset construction to obtain the equivalent DFA. Minimize the resulting DFA using Hopcroft's algorithm."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a Flex specification for a scanner that recognizes the tokens of a minimal C-like language: identifiers, integer constants, string literals, keywords (if, else, while, return), operators (+, -, *, /, =, ==, !=, <, >), and punctuation (;, ,, (, ), {, })."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Given the DFA for integer literals ", (0,jsx_runtime.jsx)(_components.code, {
          children: "digit+"
        }), ", draw the transition diagram and write the transition table. Indicate the start state and accepting states."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Using the TypeScript DFA class, simulate the regex ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[a-z][a-z0-9]*"
        }), " on inputs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"foo\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"42\""
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"a1b2\""
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\"\""
        }), ". Show the sequence of states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement a table-driven lexical analyzer in TypeScript that recognizes identifiers, integer literals, real literals, and the operators +, -, *, /. The scanner must use the two-buffer input scheme and report error tokens for unrecognized characters. Construct the DFA transition table manually for this set of tokens using the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NFA.fromRegex"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DFA"
        }), " construction, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DFA.minimize"
        }), " pipeline from the chapter. Demonstrate that your scanner correctly tokenizes a sample source program containing all token categories. Measure the scanner's throughput in characters per second."]
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