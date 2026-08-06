"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[30542],{

/***/ 36901
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_04_regex_md_5e9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-04-regex-md-5e9.json
const site_docs_courses_theory_of_computation_04_regex_md_5e9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/04-regex","title":"Chapter 4: Regular Expressions","description":"Previous Properties of Regular Languages","source":"@site/docs/courses/theory-of-computation/04-regex.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/04-regex","permalink":"/ai-engineering-journey/theory-of-computation/04-regex","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-regex","slug":"/theory-of-computation/04-regex","title":"Chapter 4: Regular Expressions","sidebar_label":"Chapter 4: Regular Expressions","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Nondeterministic Finite Automata","permalink":"/ai-engineering-journey/theory-of-computation/03-nfa"},"next":{"title":"Chapter 5: Properties of Regular Languages","permalink":"/ai-engineering-journey/theory-of-computation/05-regular-languages"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/04-regex.md


const frontMatter = {
	id: '04-regex',
	slug: '/theory-of-computation/04-regex',
	title: 'Chapter 4: Regular Expressions',
	sidebar_label: 'Chapter 4: Regular Expressions',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Regular Expressions';

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
  "value": "3.1 What is a Regular Expression?",
  "id": "31-what-is-a-regular-expression",
  "level": 3
}, {
  "value": "3.2 Formal Definition",
  "id": "32-formal-definition",
  "level": 3
}, {
  "value": "3.3 Operator Precedence",
  "id": "33-operator-precedence",
  "level": 3
}, {
  "value": "3.4 Algebraic Laws of Regular Expressions",
  "id": "34-algebraic-laws-of-regular-expressions",
  "level": 3
}, {
  "value": "3.5 Equivalence of Regular Expressions and Finite Automata",
  "id": "35-equivalence-of-regular-expressions-and-finite-automata",
  "level": 3
}, {
  "value": "3.6 Arden&#39;s Lemma",
  "id": "36-ardens-lemma",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 3.1: Building Regular Expressions for Common Languages",
  "id": "example-31-building-regular-expressions-for-common-languages",
  "level": 3
}, {
  "value": "Example 3.2: Convert Regular Expression to NFA-ε",
  "id": "example-32-convert-regular-expression-to-nfa-ε",
  "level": 3
}, {
  "value": "Example 3.3: Convert DFA to Regular Expression (State Elimination)",
  "id": "example-33-convert-dfa-to-regular-expression-state-elimination",
  "level": 3
}, {
  "value": "Example 3.4: Using Arden&#39;s Lemma",
  "id": "example-34-using-ardens-lemma",
  "level": 3
}, {
  "value": "TypeScript Regex Utilities",
  "id": "typescript-regex-utilities",
  "level": 2
}, {
  "value": "Thompson&#39;s Construction: Full TypeScript Implementation",
  "id": "thompsons-construction-full-typescript-implementation",
  "level": 2
}, {
  "value": "NFA vs Backtracking Regex Engines",
  "id": "nfa-vs-backtracking-regex-engines",
  "level": 2
}, {
  "value": "Mermaid: Regex to NFA to DFA Pipeline",
  "id": "mermaid-regex-to-nfa-to-dfa-pipeline",
  "level": 2
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
  "value": "Star Height and Regular Expression Complexity",
  "id": "star-height-and-regular-expression-complexity",
  "level": 2
}, {
  "value": "Eggan&#39;s Theorem",
  "id": "eggans-theorem",
  "level": 3
}, {
  "value": "Generalised Regular Expressions (GRE)",
  "id": "generalised-regular-expressions-gre",
  "level": 2
}, {
  "value": "TypeScript Implementation: Thompson Construction and DFA-to-Regex",
  "id": "typescript-implementation-thompson-construction-and-dfa-to-regex",
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
        id: "chapter-4-regular-expressions",
        children: "Chapter 4: Regular Expressions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/03-nfa",
          children: "Nondeterministic Finite Automata"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/05-regular-languages",
          children: "Properties of Regular Languages"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define regular expressions and the languages they denote."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the three basic operators: union, concatenation, and Kleene star."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand operator precedence in regular expressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the algebraic laws for regular expressions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert between regular expressions and finite automata."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply Arden's lemma to solve regular expression equations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the limitations of regular expressions."
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
        href: "../../assets/images/lessons/theory-of-computation/04-regex/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/04-regex/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/04-regex/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/04-regex/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/04-regex/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/04-regex/visual-explanation.png",
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
            children: "Regex Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic notation for patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for text processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union, concatenation, Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build complex patterns from simple"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operator Precedence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Star > concat > union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents ambiguity in patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RE ? FA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every RE has equivalent automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexer generators use this equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arden's Lemma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves X = AX ? B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts DFA to RE systematically"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Regex Definition] --> B[Three Operators]\n    B --> C[Algebraic Laws]\n    C --> D[RE to FA]\n    D --> E[FA to RE]\n    E --> F[Arden Lemma]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/03-regex.png",
        alt: "Regular Expressions Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-what-is-a-regular-expression",
      children: "3.1 What is a Regular Expression?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regular expression"
      }), " is a algebraic notation for describing a pattern → a set of strings. Regular expressions are used extensively in text processing, lexical analysis, and input validation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A regular expression ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "r"
      }), " denotes a language ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "L(r)"
      }), ", which is a set of strings over some alphabet Σ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-formal-definition",
      children: "3.2 Formal Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε is a regular expression denoting L(ε) = {ε} (the set containing the empty string)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "∅ is a regular expression denoting L(∅) = ∅ (the empty language)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each a ∈ Σ, a is a regular expression denoting L(a) = {a}."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inductive Step:"
      }), "\nLet r and s be regular expressions denoting languages L(r) and L(s). Then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(r + s)"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "(r | s)"
        }), ": union/alternation → L(r + s) = L(r) ∪ L(s)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(r · s)"
        }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "(rs)"
        }), ": concatenation → L(rs) = L(r)L(s) = { xy | x ∈ L(r), y ∈ L(s) }."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(r*)"
        }), ": Kleene star → L(r*) = ∪_{i ≥ 0} L(r)ⁱ where L(r)⁰ = {ε} and L(r)ⁱ⁺¹ = L(r)ⁱL(r)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(r)"
        }), ": parentheses for grouping → L((r)) = L(r)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Additional derived operators:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "r⁺"
        }), " = rr* (one or more repetitions)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "r?"
        }), " = r + ε (optional)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "."
        }), " (in some notations) = any single symbol."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-operator-precedence",
      children: "3.3 Operator Precedence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When interpreting regular expressions without explicit parentheses, the order is:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kleene star"
        }), " (*) → highest precedence (binds tightest)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concatenation"
        }), " (·)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union"
        }), " (+ or |) → lowest precedence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["So ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ab*c"
      }), " means ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a(b*)c"
      }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(ab)*c"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ab(*c)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-algebraic-laws-of-regular-expressions",
      children: "3.4 Algebraic Laws of Regular Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular expressions satisfy algebraic laws that can be used to simplify and manipulate them."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Law"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associativity of union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(r + s) + t = r + (s + t)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commutativity of union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r + s = s + r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity for union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r + ∅ = r = ∅ + r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Annihilator for concat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∅r = r∅ = ∅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity for concat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "εr = rε = r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associativity of concat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(rs)t = r(st)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive (left)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r(s + t) = rs + rt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive (right)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(s + t)r = sr + tr"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotence of union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r + r = r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "∅* = ε"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ε* = ε"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(r*)* = r*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r* = ε + rr*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r* = (ε + r)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r* = (r*)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r**r*"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["r", (0,jsx_runtime.jsx)(_components.em, {
              children: "r"
            }), " = r*"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-equivalence-of-regular-expressions-and-finite-automata",
      children: "3.5 Equivalence of Regular Expressions and Finite Automata"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem:"
      }), " A language is regular if and only if it can be described by a regular expression."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This theorem has two directions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direction 1 (RE → FA):"
      }), " Every regular expression can be converted to an NFA-ε."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The conversion follows the structural induction of the regular expression definition. Each subexpression is converted to an NFA-ε with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exactly one start state (no incoming transitions)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exactly one accepting state (no outgoing transitions)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basis conversions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For ε: start state connected to accept state via ε-transition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For ∅: start state (non-accepting) with no outgoing transitions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For a ∈ Σ: start --a--> accept."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inductive conversions (using modular construction):"
      }), "\nLet N₁ and N₂ be the NFAs for r and s with start states s₁, s₂ and accept states a₁, a₂."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union"
        }), " (r + s): New start s₀ --ε--> s₁ and s₀ --ε--> s₂; a₁ --ε--> new accept a₀ and a₂ --ε--> a₀."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concatenation"
        }), " (rs): a₁ (of N₁) --ε--> s₂ (of N₂); a₁ becomes non-accepting; a₂ is the accept state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Star"
        }), " (r*): New start s₀ --ε--> new accept a₀ (for ε); s₀ --ε--> s₁; a₁ --ε--> s₁ (for loop) and a₁ --ε--> a₀."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Direction 2 (FA → RE):"
      }), " Every DFA can be converted to a regular expression using one of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State elimination method:"
        }), " Remove states one by one, updating transitions with regular expressions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arden's lemma"
        }), " (see Section 3.6): Solve a system of linear equations over languages."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "36-ardens-lemma",
      children: "3.6 Arden's Lemma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arden's lemma is a key tool for converting DFA to regular expressions by solving equations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lemma:"
      }), " For languages A, B ⊆ Σ* with ε ∉ A (unless B = ∅ or A = ∅), the equation X = AX ∪ B has the unique solution X = A*B."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof intuition:"
      }), " Unrolling the equation gives X = B ∪ AB ∪ A²B ∪ ... = A*B. The condition ε ∉ A ensures uniqueness."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To convert a DFA to a regular expression:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each state qᵢ, write the equation: Lᵢ = ∪_{a ∈ Σ} a · Lⱼ (where δ(qᵢ, a) = qⱼ) ∪ (if qᵢ ∈ F then ε)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the system of equations using substitution and Arden's lemma."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The language recognized is the solution for L₀ (start state)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-31-building-regular-expressions-for-common-languages",
      children: "Example 3.1: Building Regular Expressions for Common Languages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings containing \"ab\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(a+b)* ab (a+b)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings starting with 'a'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a(a+b)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings ending with 'b'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(a+b)* b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings with even number of 'a's"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(b* a b* a b*)*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings with no consecutive 0s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1* 011*)* (ε + 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary strings divisible by 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0+1)* 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings of alternating 0s and 1s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(01)* + (10)* + 0(10)* + 1(01)*"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-32-convert-regular-expression-to-nfa-ε",
      children: "Example 3.2: Convert Regular Expression to NFA-ε"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Convert r = a(a+b)* b to an NFA-ε."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Parse: concatenation of a, (a+b)*, and b."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Build NFA for \"a\": q₀ --a--> q₁."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Build NFA for \"a+b\": q₂ --a--> q₃, q₂ --b--> q₃."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Build NFA for \"(a+b)*\": New start q₄ --ε--> q₅ (accept for ε); q₄ --ε--> q₂; q₃ --ε--> q₂; q₃ --ε--> q₅."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simplified representation (text):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "q₀ --a--> q₁ --ε--> q₄ --ε--> q₂ --a--> q₃ --ε--> q₂\n                              q₂ --b--> q₃      q₃ --ε--> q₅\nq₅ --ε--> q₆\nq₆ --b--> q₇ (accept)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This can be simplified further during construction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-33-convert-dfa-to-regular-expression-state-elimination",
      children: "Example 3.3: Convert DFA to Regular Expression (State Elimination)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given DFA for strings with an even number of 0s over {0,1}:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ (start, accept): on 0 → q₁, on 1 → q₀"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁: on 0 → q₀, on 1 → q₁"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Add a new start s with ε → q₀ and new accept a with ε from q₀."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Eliminate q₁:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₀ → q₁ → q₀: path q₀ --0--> q₁ --0--> q₀ adds label 00"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "q₁ → q₁: loop 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "So new transition q₀ --0·(1)*·0--> q₀"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plus existing q₀ --1--> q₀"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Result: q₀ has loop (1 + 0·1*·0)", (0,jsx_runtime.jsx)(_components.em, {
        children: ". Remove q₀ connecting s to a: (1 + 01"
      }), "0)*."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The language is L = { w | w has an even number of 0s } = (1 + 01", (0,jsx_runtime.jsx)(_components.em, {
        children: "0)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-34-using-ardens-lemma",
      children: "Example 3.4: Using Arden's Lemma"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve for the language of the DFA with:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L₀ = 0·L₁ + 1·L₂ + ε (accepting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L₁ = 1·L₀"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "L₂ = 0·L₁"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Where L₀, L₁, L₂ are the languages accepted from states q₀, q₁, q₂ respectively."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " From L₁: L₁ = 1·L₀"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " From L₂: L₂ = 0·L₁ = 0·1·L₀"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Substitute into L₀:\nL₀ = 0·(1·L₀) + 1·(0·1·L₀) + ε = (01 + 101)·L₀ + ε"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Apply Arden's lemma (X = AX + B → X = A", (0,jsx_runtime.jsx)(_components.em, {
        children: "B):\nL₀ = (01 + 101)"
      }), "·ε = (01 + 101)*"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-regex-utilities",
      children: "TypeScript Regex Utilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["TypeScript's built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RegExp"
      }), " class implements regular expression matching using an efficient DFA/NFA engine under the hood:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Building a regex-based language recognizer\nclass FinitePatternMatcher {\n  private re: RegExp;\n\n  constructor(pattern: string, alphabet: string[]) {\n    const anchored = `^(${pattern})$`;\n    this.re = new RegExp(anchored);\n  }\n\n  recognizes(w: string): boolean {\n    return this.re.test(w);\n  }\n}\n\n// Recognizing regular languages via patterns\nconst endsWith01 = new FinitePatternMatcher('(0|1)*01', ['0', '1']);\nconsole.log(endsWith01.recognizes('00101'));  // true\nconsole.log(endsWith01.recognises('00100'));  // false\n\n// Converting a DFA transition table to a regex\n// State elimination algorithm\nfunction dfaToRegex(states: string[], accept: Set<string>,\n                    trans: Map<string, string>): string {\n  // Placeholder: full implementation uses Arden's lemma\n  return \"(0|1)*01\";  // for a specific case\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The theoretical connection between regular expressions and automata means every regex pattern can be compiled to a DFA for O(n) matching — this is exactly what lexer generators like Lex do."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "thompsons-construction-full-typescript-implementation",
      children: "Thompson's Construction: Full TypeScript Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type NFAState = { id: number; trans: Map<string, Set<number>>; isAccept: boolean };\n\nclass RegexCompiler {\n  private stateCount = 0;\n  private states: NFAState[] = [];\n\n  private newState(accept = false): NFAState {\n    const s = { id: this.stateCount++, trans: new Map(), isAccept: accept };\n    this.states.push(s);\n    return s;\n  }\n\n  private addTransition(from: NFAState, sym: string, to: NFAState) {\n    if (!from.trans.has(sym)) from.trans.set(sym, new Set());\n    from.trans.get(sym)!.add(to.id);\n  }\n\n  compile(regex: string): { start: NFAState; states: NFAState[] } {\n    return this.parseUnion(regex, 0).nfa;\n  }\n\n  private parseUnion(re: string, i: number): { nfa: { start: NFAState; states: NFAState[] }; end: number } {\n    let left = this.parseConcat(re, i);\n    while (left.end < re.length && re[left.end] === '|') {\n      const right = this.parseConcat(re, left.end + 1);\n      const start = this.newState();\n      const accept = this.newState(true);\n      this.addTransition(start, 'e', left.nfa.start);\n      this.addTransition(start, 'e', right.nfa.start);\n      left.nfa.start.isAccept = false;\n      right.nfa.start.isAccept = false;\n      for (const s of left.nfa.states) if (s.isAccept) this.addTransition(s, 'e', accept);\n      for (const s of right.nfa.states) if (s.isAccept) this.addTransition(s, 'e', accept);\n      left = { nfa: { start, states: [start, ...left.nfa.states, ...right.nfa.states, accept] }, end: right.end };\n    }\n    return left;\n  }\n\n  private parseConcat(re: string, i: number): { nfa: { start: NFAState; states: NFAState[] }; end: number } {\n    let left = this.parseStar(re, i);\n    while (left.end < re.length && re[left.end] !== '|' && re[left.end] !== ')') {\n      if (re[left.end] === '*') break;\n      const right = this.parseStar(re, left.end);\n      const accept = this.newState(true);\n      for (const s of left.nfa.states) if (s.isAccept) { s.isAccept = false; this.addTransition(s, 'e', right.nfa.start); }\n      left = { nfa: { start: left.nfa.start, states: [...left.nfa.states, ...right.nfa.states, accept] }, end: right.end };\n    }\n    return left;\n  }\n\n  private parseStar(re: string, i: number): { nfa: { start: NFAState; states: NFAState[] }; end: number } {\n    let base = this.parseBase(re, i);\n    while (base.end < re.length && re[base.end] === '*') {\n      const start = this.newState();\n      const accept = this.newState(true);\n      this.addTransition(start, 'e', base.nfa.start);\n      this.addTransition(start, 'e', accept);\n      base.nfa.start.isAccept = false;\n      for (const s of base.nfa.states) if (s.isAccept) { this.addTransition(s, 'e', base.nfa.start); this.addTransition(s, 'e', accept); }\n      base = { nfa: { start, states: [start, ...base.nfa.states, accept] }, end: base.end + 1 };\n    }\n    return base;\n  }\n\n  private parseBase(re: string, i: number): { nfa: { start: NFAState; states: NFAState[] }; end: number } {\n    if (i >= re.length) throw new Error('Unexpected end');\n    if (re[i] === '(') {\n      const inner = this.parseUnion(re, i + 1);\n      if (re[inner.end] !== ')') throw new Error('Missing )');\n      return { nfa: inner.nfa, end: inner.end + 1 };\n    }\n    if (re[i] === 'e') {\n      const s = this.newState(true);\n      return { nfa: { start: s, states: [s] }, end: i + 1 };\n    }\n    const s1 = this.newState();\n    const s2 = this.newState(true);\n    this.addTransition(s1, re[i], s2);\n    return { nfa: { start: s1, states: [s1, s2] }, end: i + 1 };\n  }\n\n  simulate(nfa: { start: NFAState; states: NFAState[] }, input: string): boolean {\n    let current = this.epsilonClosure(new Set([nfa.start.id]));\n    for (const sym of input) {\n      const next = new Set<number>();\n      for (const sid of current) {\n        const s = nfa.states.find(st => st.id === sid)!;\n        const targets = s.trans.get(sym);\n        if (targets) for (const t of targets) next.add(t);\n      }\n      current = this.epsilonClosure(next);\n    }\n    for (const sid of current) {\n      const s = nfa.states.find(st => st.id === sid)!;\n      if (s.isAccept) return true;\n    }\n    return false;\n  }\n\n  private epsilonClosure(states: Set<number>): Set<number> {\n    const result = new Set(states);\n    const stack = [...states];\n    while (stack.length > 0) {\n      const sid = stack.pop()!;\n      const s = this.states.find(st => st.id === sid)!;\n      const eps = s.trans.get('e');\n      if (eps) for (const t of eps) if (!result.has(t)) { result.add(t); stack.push(t); }\n    }\n    return result;\n  }\n}\n\nconst compiler = new RegexCompiler();\nconst nfa = compiler.compile('(a|b)*abb');\nconsole.log(compiler.simulate(nfa, 'abb'));       // true\nconsole.log(compiler.simulate(nfa, 'aabb'));      // true\nconsole.log(compiler.simulate(nfa, 'ab'));         // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nfa-vs-backtracking-regex-engines",
      children: "NFA vs Backtracking Regex Engines"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "NFA-based (Thompson)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Backtracking (PCRE)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matching time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2n) worst-case exponential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k) for k states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) recursion depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backreferences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookahead/lookbehind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catastrophic backtracking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impossible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "grep, awk, RE2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perl, JavaScript, Python"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The NFA-based approach guarantees ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "linear time"
      }), " but cannot handle non-regular features. Backtracking engines are more expressive but risk catastrophic backtracking on pathological inputs. Russ Cox's article \"Regular Expression Matching Can Be Simple and Fast\" provides a definitive comparison."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-regex-to-nfa-to-dfa-pipeline",
      children: "Mermaid: Regex to NFA to DFA Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"Stage 1: Compilation\"\n        RE[\"Regex: (a|b)*abb\"] --> PARSE[\"Parse Tree\"]\n        PARSE --> NFA_BUILD[\"Thompson Construction\"]\n    end\n    subgraph \"Stage 2: Determinization\"\n        NFA_BUILD --> NFA[\"NFA-e\"]\n        NFA --> DFA_BUILD[\"Subset Construction\"]\n    end\n    subgraph \"Stage 3: Optimization & Execution\"\n        DFA_BUILD --> DFA[\"DFA\"]\n        DFA --> MIN[\"Minimize\"]\n        MIN --> MATCH[\"O(n) matching\"]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This pipeline is exactly what lexer generators (lex, flex) and regex libraries implement. The key insight: the conversion is fully automatable, so specifying the pattern is enough — the machine generates itself."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ or"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "a+b"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "· or juxtaposition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ab"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ab}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kleene star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{e, a, aa, ...}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One or more"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{a, aa, aaa, ...}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{e, a}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Law"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity (union)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r + Ø = r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity (concat)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "er = re = r"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Annihilator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ør = rØ = Ø"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "r(s+t) = rs + rt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(r*)* = r*"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Star"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "e* = e"
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
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regex Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text editors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Search/replace patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexer token specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Email, phone, SSN format check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signature patterns in IDS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL LIKE, REGEXP operators"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does the Kleene star operator do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Matches exactly one repetition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Matches zero or more repetitions ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Matches zero or one repetition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Matches one or more repetitions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** r* = {e} ? {r} ? {rr} ? ... — zero or more repetitions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " In ab*c, the star applies to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ab"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) b ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) bc"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Entire expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Star has highest precedence: ab*c = a(b*)c.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What language does (0+1)* 0 denote?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All binary strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Binary strings ending with 0 ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Binary strings starting with 0"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Binary strings with only 0s"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** (0+1)* generates any binary string, then 0 forces it to end with 0.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Arden's lemma solves X = AX ? B with solution:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) X = BA*"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) X = A*B ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) X = B*A"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) X = (AB)*"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** X = A*B is the unique solution when e ? A.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Can regular expressions describe { anbn | n = 0 }?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Yes, with star operator"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) No, it's not regular ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Yes, using concatenation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Only with backreferences"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** { anbn } is not regular — no regex can match balanced pairs without counting.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Thompson's construction is used in production."
          }), " The algorithm that converts regex to NFA is the basis for grep, awk, and many lexer generators. Understanding it helps predict performance: backtracking engines can be exponential, while NFA-based engines are guaranteed linear."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "DFA minimization has practical impact."
          }), " Minimizing the DFA from a regex reduces memory usage in production systems. Pattern matching in network intrusion detection systems (Snort, Suricata) processes thousands of patterns simultaneously and benefits directly from minimization."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Star height reflects complexity."
          }), " Expressions with nested Kleene stars require more complex automata. When designing patterns, minimizing star depth leads to simpler, faster implementations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "\"Regular expression\" in practice ? regular expression in theory."
          }), " Modern regex engines include backreferences, lookahead, and recursion — making them strictly more powerful than regular expressions. They can match non-regular languages like {anbn} but risk catastrophic backtracking."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "star-height-and-regular-expression-complexity",
      children: "Star Height and Regular Expression Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "star height"
      }), " of a regular expression is the maximum depth of nested Kleene stars. This measure captures the algebraic complexity of a regular language."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Star height 0: Finite languages (no stars). Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a + b"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Star height 1: Single level of star. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a + b)*"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Star height 2: Nested stars. Example: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a* b*)*"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "eggans-theorem",
      children: "Eggan's Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The star height of a regular language is a property of the language itself, not just a specific expression. Eggan's theorem relates star height to the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cycle rank"
      }), " of the syntactic monoid's transition graph."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function starHeight(regex: string): number {\n  let maxDepth = 0, depth = 0;\n  for (const c of regex) {\n    if (c === '(') depth++;\n    else if (c === ')') depth--;\n    else if (c === '*') maxDepth = Math.max(maxDepth, depth);\n  }\n  return maxDepth;\n}\n\nconsole.log(starHeight('(a|b)*'));       // 1\nconsole.log(starHeight('(a* b*)*'));     // 2\nconsole.log(starHeight('((a*)*)'));      // 2 (depth 2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Expressions with higher star height can always be reduced to star height 1 or 2 for regular languages, though the proof is non-trivial. In practice, most regex patterns used in programming have star height 0 or 1."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "generalised-regular-expressions-gre",
      children: "Generalised Regular Expressions (GRE)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Regular expressions can be extended with additional operators while preserving their regularity:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Extension"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r^c$ or $\\overline{r}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\Sigma^* - L(r)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r \\cap s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$L(r) \\cap L(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r - s$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$L(r) - L(s)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$r^R$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse of all strings in $L(r)$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["These extended operators make some languages easier to describe. For example, \"strings with at least one 'a' and at least one 'b'\" can be written as $\\Sigma^", (0,jsx_runtime.jsx)(_components.em, {
        children: "a\\Sigma^"
      }), " \\cap \\Sigma^", (0,jsx_runtime.jsx)(_components.em, {
        children: "b\\Sigma^"
      }), "$ — more readable than the pure regex form."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key result is that ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "all these extensions describe only regular languages"
      }), " — they add convenience but not power."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-thompson-construction-and-dfa-to-regex",
      children: "TypeScript Implementation: Thompson Construction and DFA-to-Regex"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Thompson's Construction: Regex to NFA\n// State elimination: DFA to Regex\n\ntype RegexNode =\n  | { type: \"empty\" }\n  | { type: \"symbol\"; value: string }\n  | { type: \"union\"; left: RegexNode; right: RegexNode }\n  | { type: \"concat\"; left: RegexNode; right: RegexNode }\n  | { type: \"star\"; inner: RegexNode };\n\nclass RegexEngine {\n  static parse(pattern: string): RegexNode {\n    return RegexEngine.parseUnion(pattern, 0).node;\n  }\n\n  private static parseUnion(pattern: string, pos: number): { node: RegexNode; pos: number } {\n    let left = this.parseConcat(pattern, pos);\n    while (left.pos < pattern.length && pattern[left.pos] === \"|\") {\n      const right = this.parseConcat(pattern, left.pos + 1);\n      left = { node: { type: \"union\", left: left.node, right: right.node }, pos: right.pos };\n    }\n    return left;\n  }\n\n  private static parseConcat(pattern: string, pos: number): { node: RegexNode; pos: number } {\n    let left = this.parseStar(pattern, pos);\n    while (left.pos < pattern.length && pattern[left.pos] !== \"|\" && pattern[left.pos] !== \")\") {\n      const right = this.parseStar(pattern, left.pos);\n      left = { node: { type: \"concat\", left: left.node, right: right.node }, pos: right.pos };\n    }\n    return left;\n  }\n\n  private static parseStar(pattern: string, pos: number): { node: RegexNode; pos: number } {\n    let base = this.parseBase(pattern, pos);\n    while (base.pos < pattern.length && pattern[base.pos] === \"*\") {\n      base = { node: { type: \"star\", inner: base.node }, pos: base.pos + 1 };\n    }\n    return base;\n  }\n\n  private static parseBase(pattern: string, pos: number): { node: RegexNode; pos: number } {\n    if (pos >= pattern.length) return { node: { type: \"empty\" }, pos };\n    if (pattern[pos] === \"(\") {\n      const inner = this.parseUnion(pattern, pos + 1);\n      if (inner.pos < pattern.length && pattern[inner.pos] === \")\")\n        return { node: inner.node, pos: inner.pos + 1 };\n      return inner;\n    }\n    if (pattern[pos] === \"e\") return { node: { type: \"empty\" }, pos: pos + 1 };\n    return { node: { type: \"symbol\", value: pattern[pos] }, pos: pos + 1 };\n  }\n\n  static matches(pattern: string, input: string): boolean {\n    // Brute-force simulation via derivative-like expansion\n    const node = this.parse(pattern);\n    return this.simulate(node, input);\n  }\n\n  private static simulate(node: RegexNode, input: string): boolean {\n    if (node.type === \"empty\") return input === \"\";\n    if (node.type === \"symbol\") return input === node.value;\n    if (node.type === \"star\") {\n      if (input === \"\") return true;\n      for (let i = 1; i <= input.length; i++) {\n        if (this.simulate(node.inner, input.slice(0, i)) &&\n            this.simulate(node, input.slice(i)))\n          return true;\n      }\n      return false;\n    }\n    if (node.type === \"concat\") {\n      for (let i = 0; i <= input.length; i++) {\n        if (this.simulate(node.left, input.slice(0, i)) &&\n            this.simulate(node.right, input.slice(i)))\n          return true;\n      }\n      return false;\n    }\n    if (node.type === \"union\") {\n      return this.simulate(node.left, input) || this.simulate(node.right, input);\n    }\n    return false;\n  }\n\n  static stateElimination(states: string[], transitions: Map<string, string>,\n                          start: string, accept: string): string {\n    // Simplified state elimination for regex extraction\n    let remaining = [...states];\n    const trans = new Map(transitions);\n\n    while (remaining.length > 2) {\n      const rip = remaining.find(s => s !== start && s !== accept)!;\n      const incoming: string[] = [];\n      const outgoing: string[] = [];\n      for (const [k, v] of trans) {\n        const [from, to] = k.split(\",\");\n        if (to === rip && from !== rip) incoming.push(from);\n        if (from === rip && to !== rip) outgoing.push(to);\n      }\n      for (const i of incoming) {\n        for (const o of outgoing) {\n          const loop = trans.get(`${rip},${rip}`);\n          const r = loop ? `(${loop})*` : \"\";\n          const ii = trans.get(`${i},${rip}`) || \"\";\n          const oo = trans.get(`${rip},${o}`) || \"\";\n          trans.set(`${i},${o}`, `(${ii}${r}${oo})`);\n        }\n      }\n      for (const k of [...trans.keys()]) if (k.includes(rip)) trans.delete(k);\n      remaining = remaining.filter(s => s !== rip);\n    }\n\n    return trans.get(`${start},${accept}`) || \"Ø\";\n  }\n}\n\nconsole.log(RegexEngine.matches(\"a|b\", \"a\"));    // true\nconsole.log(RegexEngine.matches(\"a|b\", \"c\"));    // false\nconsole.log(RegexEngine.matches(\"ab*c\", \"ac\"));  // true\nconsole.log(RegexEngine.matches(\"ab*c\", \"abc\")); // true\nconsole.log(RegexEngine.matches(\"ab*c\", \"abbc\"));// true\nconsole.log(RegexEngine.matches(\"ab*c\", \"ab\"));  // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -------------------------------------------------------\n// Thompson Construction — converts a regex (in postfix\n// \"ab|c*.\" notation) to an equivalent NFA via Thompson's\n// algorithm.  Each sub-NFA is built compositionally.\n// -------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class ThompsonConstruction {\n// Build NFA from a regex in postfix notation\n// Operators: . = concat, | = union, * = star\nstatic toNFA(postfix: string): {\nstates: Set<string>; alphabet: Set<string>;\ntransitions: Map<string, Set<string>>;\nepsilon: Map<string, Set<string>>;\nstart: string; accept: Set<string>;\n} {\nconst stack: Array<{\nstart: string; accept: Set<string>;\nstates: Set<string>; trans: Map<string, Set<string>>;\nepsilon: Map<string, Set<string>>;\n}> = [];\nlet stateCounter = 0;\nconst newState = () => ", (0,jsx_runtime.jsx)(_components.code, {
        children: "q${stateCounter++}"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const ch of postfix) {\n  if (ch === \".\") {\n    const n2 = stack.pop()!;\n    const n1 = stack.pop()!;\n    const states = new Set([...n1.states, ...n2.states]);\n    const trans = new Map([...n1.trans, ...n2.trans]);\n    const epsilon = new Map([...n1.epsilon, ...n2.epsilon]);\n\n    // e from n1's accept states to n2's start\n    for (const acc of n1.accept) {\n      const existing = epsilon.get(acc) || new Set();\n      existing.add(n2.start);\n      epsilon.set(acc, existing);\n    }\n    // n1's accept states are no longer accept\n    stack.push({ start: n1.start, accept: n2.accept, states, trans, epsilon });\n  } else if (ch === \"|\") {\n    const n2 = stack.pop()!;\n    const n1 = stack.pop()!;\n    const s = newState();\n    const a = newState();\n    const states = new Set([s, a, ...n1.states, ...n2.states]);\n    const trans = new Map([...n1.trans, ...n2.trans]);\n    const epsilon = new Map([...n1.epsilon, ...n2.epsilon]);\n\n    epsilon.set(s, (epsilon.get(s) || new Set()).add(n1.start).add(n2.start));\n    for (const acc of n1.accept) {\n      (epsilon.get(acc) || new Set()).add(a);\n    }\n    for (const acc of n2.accept) {\n      (epsilon.get(acc) || new Set()).add(a);\n    }\n    stack.push({ start: s, accept: new Set([a]), states, trans, epsilon });\n  } else if (ch === \"*\") {\n    const n = stack.pop()!;\n    const s = newState();\n    const a = newState();\n    const states = new Set([s, a, ...n.states]);\n    const trans = new Map([...n.trans]);\n    const epsilon = new Map([...n.epsilon]);\n\n    epsilon.set(s, new Set([n.start, a]));\n    for (const acc of n.accept) {\n      (epsilon.get(acc) || new Set()).add(n.start).add(a);\n    }\n    stack.push({ start: s, accept: new Set([a]), states, trans, epsilon });\n  } else {\n    // Single character\n    const s = newState();\n    const a = newState();\n    const trans = new Map&lt;string, Set<string&gt;>();\n    trans.set(`${s},${ch}`, new Set([a]));\n    stack.push({\n      start: s, accept: new Set([a]),\n      states: new Set([s, a]), trans, epsilon: new Map()\n    });\n  }\n}\n\nconst final = stack.pop()!;\nreturn {\n  states: final.states, alphabet: new Set(postfix.replace(/[.|*]/g, \"\")),\n  transitions: final.trans, epsilon: final.epsilon,\n  start: final.start, accept: final.accept\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -------------------------------------------------------\n// Regex Simplifier — applies algebraic laws\n// to simplify regular expressions symbolically.\n// -------------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["class RegexSimplifier {\nstatic simplify(expr: string): string {\nlet s = expr;\n// Ø + R = R,  R + Ø = R,  ØR = Ø,  RØ = Ø\ns = s.replace(/Ø+(/g, \"(\").replace(/+Ø/g, \"\");\ns = s.replace(/Ø*/g, \"e\").replace(/e*/g, \"e\");\n// eR = R,  Re = R\ns = s.replace(/e(/g, \"(\").replace(/)e/g, \")\");\n// RR* = R+R,  R*R = R+R  (simplification)\ns = s.replace(/(\\w)*(\\w)/g, (m) => {\nconst c = m[1];\nreturn c === m[4] ? ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(${c})+"
      }), " : m;\n});\nreturn s;\n}\n}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconst thompson = ThompsonConstruction.toNFA(\"ab.c|\");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Thompson NFA states: ${thompson.states.size}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Thompson NFA start: ${thompson.start}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Thompson NFA accept: ${[...thompson.accept].join(\", \")}"
      }), ");\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Simplified: ${RegexSimplifier.simplify(\"(a|Ø)*b\")}"
      }), ");"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// regex\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'regex', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Regular expressions describe languages algebraically using union (+), concatenation, and Kleene star (*).\n- Regular expressions and finite automata are equivalent: each can be converted to the other.\n- Arden's lemma solves language equations of the form X = AX ? B.\n- The state elimination method converts DFA to regular expression by removing states.\n- Algebraic laws allow algebraic manipulation and simplification of regular expressions.\n- Three basic operations correspond to modular NFA constructions (union, concatenation, star).\n- **Star height** measures the nesting depth of Kleene stars and reflects language complexity.\n- **Generalised regular expressions** add intersection, complement, and reversal while remaining regular.\n- **Thompson's construction** provides a practical compiler from regex to executable automaton.\n\n### Basic\n\n1. Write regular expressions for: (a) strings ending with \"00\", (b) strings starting with \"a\" and ending with \"b\", (c) strings of length exactly 4.\n2. Describe in English the languages denoted by: (a) a* b*, (b) (a+b)* aa (a+b)*, (c) (00+11)*.\n3. Convert r = (0+1)* 0 (0+1) to an NFA-ε using the modular construction.\n4. Show that (ε + a)* = a* using algebraic laws.\n5. Simplify the regular expression: a* + a*b + a*bb.\n\n### Intermediate\n\n6. Convert the DFA from Example 1.2 (exactly two 1s) to a regular expression using state elimination.\n7. Prove (r + s)* = r* (s r*)* using algebraic laws or set equality.\n8. Convert r = (a + b)* a (a + b)* b (a + b)* to an NFA-ε, then to a DFA via subset construction.\n9. Using Arden's lemma, solve for the language of a DFA for strings over {0,1} where every 0 is followed immediately by a 1.\n10. Find a regular expression for the language L = { w ∈ {0,1}* | w has no two consecutive 0s and no two consecutive 1s }.\n\n### Advanced\n\n11. Prove that the set of regular languages is closed under complement using DFA-to-regular-expression conversion.\n12. Derive a regular expression for binary strings that represent numbers divisible by 3 (from Example 1.3).\n13. Prove that the language { 0ⁿ1ⁿ | n ≥ 0 } is not regular (cannot be described by a regular expression).\n14. Show that every regular expression can be converted to an equivalent ε-free NFA (no ε-transitions) with at most 2|r| states, where |r| is the length of the expression.\n15. Implement (in pseudocode) the Thompson construction: given a parse tree of a regular expression, produce an NFA-ε. Your algorithm should handle union, concatenation, and Kleene star.\n16. Implement the full Thompson construction in TypeScript as shown in the chapter. Extend it to support `+` (one or more) and `?` (optional) operators.\n17. Using the state elimination method, convert the DFA for \"binary strings divisible by 3\" (Example 1.3) to a regular expression. Verify your answer by testing on sample strings.\n18. Write a TypeScript function that, given a DFA transition table, produces a regular expression using Arden's lemma. Test it on a 3-state DFA of your choice.\n19. Compare the matching time of an NFA-based simulator vs a backtracking engine on the input `\"aaaa...a!\"` matched against `(a*)*b`. Explain why catastrophic backtracking occurs.\n20. Prove that regular expressions are closed under intersection by constructing an NFA-e for L(r) n L(s) given the regular expressions r and s.\n\n## Further Reading\n\n- **Friedl, Jeffrey E. F.** *Mastering Regular Expressions* (3rd ed.). The definitive practical guide to regex engines, backtracking, and optimization techniques.\n- **Thompson, Ken.** \"Programming Techniques: Regular Expression Search Algorithm.\" Communications of the ACM, 1968. The original paper describing the Thompson construction for NFA-based regex matching.\n- **Cox, Russ.** \"Regular Expression Matching Can Be Simple and Fast.\" 2007. An influential article contrasting NFA-based and backtracking regex engines.\n\n\n- **Hopcroft, John E.** *The Theory of Formal Languages*. Background reading on regular expressions and their relationship to finite automata.\n- **Aho, Alfred V. and Ullman, Jeffrey D.** *The Theory of Parsing, Translation, and Compiling*. A classic reference on the application of regex and automata theory to compilation.\n\n- **McNaughton, Robert and Yamada, Hisao.** 'Regular Expressions and State Graphs for Automata.' IRE Transactions on Electronic Computers, 1960. Early work on the equivalence of regular expressions and finite automata.\n"
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