"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[38034],{

/***/ 69349
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_06_cfg_md_247_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-06-cfg-md-247.json
const site_docs_courses_theory_of_computation_06_cfg_md_247_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/06-cfg","title":"Chapter 6: Context-Free Grammars","description":"Previous Pushdown Automata","source":"@site/docs/courses/theory-of-computation/06-cfg.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/06-cfg","permalink":"/ai-engineering-journey/theory-of-computation/06-cfg","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-cfg","slug":"/theory-of-computation/06-cfg","title":"Chapter 6: Context-Free Grammars","sidebar_label":"Chapter 6: Context-Free Grammars","sidebar_position":6},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 5: Properties of Regular Languages","permalink":"/ai-engineering-journey/theory-of-computation/05-regular-languages"},"next":{"title":"Chapter 7: Pushdown Automata","permalink":"/ai-engineering-journey/theory-of-computation/07-pda"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/06-cfg.md


const frontMatter = {
	id: '06-cfg',
	slug: '/theory-of-computation/06-cfg',
	title: 'Chapter 6: Context-Free Grammars',
	sidebar_label: 'Chapter 6: Context-Free Grammars',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Context-Free Grammars';

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
  "value": "5.1 What is a Context-Free Grammar?",
  "id": "51-what-is-a-context-free-grammar",
  "level": 3
}, {
  "value": "5.2 Formal Definition",
  "id": "52-formal-definition",
  "level": 3
}, {
  "value": "5.3 Derivations",
  "id": "53-derivations",
  "level": 3
}, {
  "value": "5.4 Leftmost and Rightmost Derivations",
  "id": "54-leftmost-and-rightmost-derivations",
  "level": 3
}, {
  "value": "5.5 Parse Trees",
  "id": "55-parse-trees",
  "level": 3
}, {
  "value": "5.6 Ambiguity",
  "id": "56-ambiguity",
  "level": 3
}, {
  "value": "5.7 Left Recursion",
  "id": "57-left-recursion",
  "level": 3
}, {
  "value": "5.8 Left Factoring",
  "id": "58-left-factoring",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 5.1: CFG for Palindromes",
  "id": "example-51-cfg-for-palindromes",
  "level": 3
}, {
  "value": "Example 5.2: CFG for Simple Arithmetic Expressions",
  "id": "example-52-cfg-for-simple-arithmetic-expressions",
  "level": 3
}, {
  "value": "Example 5.3: Ambiguity Demonstration",
  "id": "example-53-ambiguity-demonstration",
  "level": 3
}, {
  "value": "Example 5.4: Eliminating Left Recursion",
  "id": "example-54-eliminating-left-recursion",
  "level": 3
}, {
  "value": "Example 5.5: CFG for a Simple Programming Language Fragment",
  "id": "example-55-cfg-for-a-simple-programming-language-fragment",
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
  "value": "Chomsky Normal Form (CNF)",
  "id": "chomsky-normal-form-cnf",
  "level": 2
}, {
  "value": "CNF Conversion Algorithm",
  "id": "cnf-conversion-algorithm",
  "level": 3
}, {
  "value": "Why CNF Matters",
  "id": "why-cnf-matters",
  "level": 3
}, {
  "value": "Mermaid: CNF Conversion Flowchart",
  "id": "mermaid-cnf-conversion-flowchart",
  "level": 3
}, {
  "value": "TypeScript: CNF Converter",
  "id": "typescript-cnf-converter",
  "level": 3
}, {
  "value": "CFG to PDA Conversion",
  "id": "cfg-to-pda-conversion",
  "level": 2
}, {
  "value": "Algorithm: CFG ? PDA",
  "id": "algorithm-cfg--pda",
  "level": 3
}, {
  "value": "TypeScript: Grammar Derivation Simulator",
  "id": "typescript-grammar-derivation-simulator",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "TypeScript: CYK Parser",
  "id": "typescript-cyk-parser",
  "level": 3
}, {
  "value": "TypeScript Implementation: CFG to CNF Converter and CYK Parser",
  "id": "typescript-implementation-cfg-to-cnf-converter-and-cyk-parser",
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
        id: "chapter-6-context-free-grammars",
        children: "Chapter 6: Context-Free Grammars"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/05-regular-languages",
          children: "Properties of Regular Languages"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/07-pda",
          children: "Pushdown Automata"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define a context-free grammar (CFG) formally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct derivations (leftmost, rightmost) and parse trees."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the language generated by a given CFG."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect and eliminate ambiguity in grammars."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Eliminate left recursion from CFGs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply left factoring to CFGs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between CFGs and pushdown automata (preview)."
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
        href: "../../assets/images/lessons/theory-of-computation/06-cfg/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/06-cfg/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/06-cfg/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/06-cfg/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/theory-of-computation/06-cfg/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/theory-of-computation/06-cfg/visual-explanation.png",
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
            children: "CFG Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-tuple (V, S, R, S) generative grammar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Describes programming language syntax"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derivations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leftmost/rightmost replacement sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse trees show structure"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ambiguity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple parse trees for one string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unacceptable in programming languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left Recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ?? Aa breaks top-down parsers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must eliminate for LL parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left Factoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common prefixes prevent prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prepares grammar for predictive parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[CFG Definition] --> B[Derivations]\n    B --> C[Parse Trees]\n    C --> D[Ambiguity]\n    D --> E[Left Recursion Elimination]\n    E --> F[Left Factoring]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/05-cfg.png",
        alt: "CFG Components Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-what-is-a-context-free-grammar",
      children: "5.1 What is a Context-Free Grammar?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Context-free grammars provide a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "generative"
      }), " description of languages. They are the basis for describing the syntax of most programming languages and are used extensively in compilers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A CFG consists of:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variables"
        }), " (non-terminals) representing syntactic categories."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "terminals"
        }), " representing the basic symbols of the language."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production rules"
        }), " showing how a variable can be replaced by a string of variables and terminals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A designated ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "start variable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-formal-definition",
      children: "5.2 Formal Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "context-free grammar"
      }), " is a 4-tuple G = (V, Σ, R, S) where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "V"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "variables"
        }), " (non-terminals), typically uppercase letters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Σ"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "terminals"
        }), " (the alphabet), disjoint from V."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), " is a finite set of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "productions"
        }), " (rules) of the form A → α where A ∈ V and α ∈ (V ∪ Σ)*."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S ∈ V"
        }), " is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "start variable"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The term \"context-free\" means that a variable can be replaced by its production regardless of the surrounding context (unlike context-sensitive grammars where replacements depend on neighbors)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-derivations",
      children: "5.3 Derivations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If G has a production A → γ, then we can replace A by γ in any string containing A."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " For strings u, v ∈ (V ∪ Σ)*, we write u ⇒ v (u derives v in one step) if:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "u = αAβ and v = αγβ for some production A → γ ∈ R."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We write u ⇒* v if v can be obtained from u by zero or more derivation steps."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "language generated"
      }), " by G is:\nL(G) = { w ∈ Σ* | S ⇒* w }"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-leftmost-and-rightmost-derivations",
      children: "5.4 Leftmost and Rightmost Derivations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A derivation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "leftmost"
      }), " if at each step the leftmost remaining variable is replaced. Denoted ⇒ₗ."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A derivation is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rightmost"
      }), " if at each step the rightmost remaining variable is replaced. Denoted ⇒ᵣ."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For any parse tree, there is exactly one leftmost derivation and exactly one rightmost derivation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-parse-trees",
      children: "5.5 Parse Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "parse tree"
      }), " (or derivation tree) is a graphical representation of a derivation:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The root is labeled with the start variable S."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each leaf is labeled with a terminal or ε."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each interior node is labeled with a variable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If node A has children X₁, X₂, …, Xₙ (in order), then A → X₁X₂…Xₙ is a production."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The yield (leaf string read left to right) gives the derived string."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-ambiguity",
      children: "5.6 Ambiguity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A grammar G is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ambiguous"
      }), " if there exists some string w ∈ L(G) that has two or more distinct parse trees (equivalently, two distinct leftmost derivations)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Inherent Ambiguity:"
      }), " A language L is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inherently ambiguous"
      }), " if every grammar for L is ambiguous. Example: { aⁿbⁿcᵐdᵐ | n,m ≥ 0 } ∪ { aⁿbᵐcᵐdⁿ | n,m ≥ 0 }."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For programming languages, ambiguity is unacceptable → every program must have a unique parse tree. Techniques like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "precedence rules"
      }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "associativity"
      }), " resolve ambiguity in practice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-left-recursion",
      children: "5.7 Left Recursion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A grammar is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "left-recursive"
      }), " if it has a variable A such that A ⇒⁺ Aα for some α. This causes problems for top-down parsers (they may loop infinitely)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Immediate left recursion:"
      }), " A → Aα | β (can be eliminated)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Elimination (simple case):"
      }), "\nReplace A → Aα₁ | Aα₂ | … | Aαₙ | β₁ | β₂ | … | βₘ with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → β₁A' | β₂A' | … | βₘA'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A' → α₁A' | α₂A' | … | αₙA' | ε"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General left recursion elimination"
      }), " requires ordering variables and systematically substituting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-left-factoring",
      children: "5.8 Left Factoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Left factoring is a grammar transformation needed when two productions for the same variable start with the same prefix → this makes prediction difficult for top-down parsers."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Technique:"
      }), " If A → αβ₁ | αβ₂, replace with:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A → αA'"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A' → β₁ | β₂"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-51-cfg-for-palindromes",
      children: "Example 5.1: CFG for Palindromes"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construct a CFG for PAL = { w ∈ {a,b}* | w = wʀ }."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grammar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S → aSa | bSb | ε | a | b"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation"
      }), " of \"abba\":\nS ⇒ aSa ⇒ abSba ⇒ abbεba = abba"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parse tree"
      }), " (text description):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      S\n    / | \\\n   a  S  a\n    /|\\\n   b S b\n     |\n     ε\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Yield: a b ε b a = abba ✓"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-52-cfg-for-simple-arithmetic-expressions",
      children: "Example 5.2: CFG for Simple Arithmetic Expressions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Generate expressions with + and *, using identifiers (i) and parentheses."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Grammar:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "E → E + T | T"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "T → T * F | F"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "F → (E) | i"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This grammar encodes precedence: + is lower than *, which is lower than ()."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Derivation"
      }), " of \"i + i * i\":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Leftmost:\nE ⇒ E + T ⇒ T + T ⇒ F + T ⇒ i + T ⇒ i + T * F ⇒ i + F * F ⇒ i + i * F ⇒ i + i * i"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parse tree"
      }), " (text):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      E\n    / | \\\n   E  +  T\n   |    /|\\\n   T   T * F\n   |   |   |\n   F   F   i\n   |   |\n   i   i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This tree correctly shows i + (i * i), not (i + i) * i."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-53-ambiguity-demonstration",
      children: "Example 5.3: Ambiguity Demonstration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The grammar E → E + E | E * E | (E) | i is ambiguous. The string \"i + i * i\" has two parse trees:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree 1"
      }), " (i + (i * i)):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    E\n  / | \\\n E  +  E\n |    /|\\\n i   E * E\n     |   |\n     i   i\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tree 2"
      }), " ((i + i) * i):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "      E\n    / | \\\n   E  *  E\n  /|\\    |\n E + E   i\n |   |\n i   i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This ambiguity is resolved in Example 5.2 by introducing T and F to enforce precedence."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-54-eliminating-left-recursion",
      children: "Example 5.4: Eliminating Left Recursion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Original (immediate left recursion):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E → E + T | T\nT → T * F | F\nF → (E) | i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eliminated:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "E  → T E'\nE' → + T E' | ε\nT  → F T'\nT' → * F T' | ε\nF  → (E) | i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now the grammar is suitable for recursive-descent or LL parsing. Derivation of \"i + i\":\nE ⇒ T E' ⇒ F T' E' ⇒ i T' E' ⇒ i ε E' ⇒ i + T E' ⇒ i + F T' E' ⇒ i + i T' E' ⇒ i + i ε ε = i + i"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-55-cfg-for-a-simple-programming-language-fragment",
      children: "Example 5.5: CFG for a Simple Programming Language Fragment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "P  → D ; S\nD  → int id | float id\nS  → id = E ;\nS  → if ( E ) S else S\nS  → while ( E ) S\nS  → { S S }\nE  → E + T | T\nT  → T * F | F\nF  → (E) | id | num\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This generates simple programs with declarations, assignments, conditionals, loops, and arithmetic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CFG"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Regular Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generative (productions)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Descriptive (pattern)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables + recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expressiveness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-free languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "anbn, palindromes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["a", (0,jsx_runtime.jsx)(_components.em, {
              children: "b"
            }), ", (ab)*"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "CFG Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "V"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables (non-terminals)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminals (alphabet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Productions A ? a"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L(G)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{ w ? S*"
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
            children: "CFG Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax specification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sentence parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RNA structure prediction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Programming languages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message format specification"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " A CFG consists of:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 3-tuple"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 4-tuple ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 5-tuple"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 6-tuple"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** CFG is a 4-tuple (V, S, R, S): variables, terminals, productions, start.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What makes a grammar ambiguous?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Left recursion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Multiple parse trees for some string ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Too many productions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Missing terminals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Ambiguity means at least one string has two or more distinct parse trees.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Left recursion causes problems for:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Bottom-up parsers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Top-down parsers ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) All parsers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No parsers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Top-down (LL) parsers may loop infinitely on left-recursive grammars.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Palindromes over {a,b} can be generated by:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A regular expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) A CFG ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A DFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) No grammar"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** S ? aSa | bSb | e generates all palindromes — this requires a CFG.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Left factoring handles:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Left recursion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Common prefixes ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Ambiguity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Nullable variables"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Left factoring extracts common prefixes to enable predictive parsing.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chomsky-normal-form-cnf",
      children: "Chomsky Normal Form (CNF)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A CFG is in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chomsky Normal Form"
      }), " if every production has one of these forms:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A \\to BC) (two non-terminals)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(A \\to a) (a single terminal)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "(S \\to \\varepsilon) (only the start variable can derive (\\varepsilon))"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Any CFG can be converted to CNF through a systematic process:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cnf-conversion-algorithm",
      children: "CNF Conversion Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Add a new start variable"
        }), " (S_0) with (S_0 \\to S)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate (\\varepsilon)-productions:"
        }), " Remove (A \\to \\varepsilon) and adjust all rules that use (A)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate unit productions:"
        }), " Remove (A \\to B) (single variable on right)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace long productions:"
        }), " (A \\to B_1 B_2 \\ldots B_k) becomes (A \\to B_1 C_1), (C_1 \\to B_2 C_2), etc."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Replace terminals in mixed productions:"
        }), " If (A \\to X Y) where (X) is terminal, add (X \\to a) and replace"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-cnf-matters",
      children: "Why CNF Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CNF guarantees that every parse tree for a string of length (n) has exactly (2n-1) internal nodes (if (\\varepsilon)-free). This property makes CNF the foundation for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The CYK parsing algorithm"
        }), " (polynomial-time CFG recognition)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Proving the pumping lemma for CFLs"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Computing the size of parse trees"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-cnf-conversion-flowchart",
      children: "Mermaid: CNF Conversion Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[\"Original CFG G\"] --> B[\"Add new start S0 ? S\"]\n    B --> C[\"Eliminate e-productions\"]\n    C --> D[\"Eliminate unit productions<br/>(A ? B)\"]\n    D --> E[\"Replace long productions<br/>(A ? B1B2...Bk)\"]\n    E --> F[\"Replace terminals<br/>in mixed productions\"]\n    F --> G[\"CNF Grammar G'\"]\n    style G fill:#a6e3a1,stroke:#333\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cnf-converter",
      children: "TypeScript: CNF Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Production = { lhs: string; rhs: string[] };\n\nfunction toCNF(productions: Production[]): Production[] {\n  const result: Production[] = [];\n  let varCounter = 0;\n  const newVar = () => `X${varCounter++}`;\n\n  // Step 1: Add new start\n  const start = productions.find(p => p.lhs === 'S')!;\n  result.push({ lhs: 'S0', rhs: ['S'] });\n\n  // Step 2: Eliminate e-productions\n  const nullable = new Set<string>();\n  let changed = true;\n  while (changed) {\n    changed = false;\n    for (const p of productions) {\n      if (p.rhs.every(s => s === 'e' || nullable.has(s))) {\n        if (!nullable.has(p.lhs)) { nullable.add(p.lhs); changed = true; }\n      }\n    }\n  }\n\n  // Step 3: Replace long productions\n  for (const p of productions) {\n    if (p.rhs.length === 1 && /[a-ze]/.test(p.rhs[0])) {\n      // Already in form A ? a\n      result.push(p);\n    } else if (p.rhs.length >= 3) {\n      // A ? B1 B2 ... B?\n      let lastVar = p.lhs;\n      for (let i = 0; i < p.rhs.length - 1; i++) {\n        const nextVar = newVar();\n        if (i === 0) {\n          // Replace original production\n          result.push({\n            lhs: lastVar,\n            rhs: [p.rhs[i], nextVar]\n          });\n        } else {\n          result.push({ lhs: lastVar, rhs: [p.rhs[i], nextVar] });\n        }\n        lastVar = nextVar;\n      }\n      result.push({ lhs: lastVar, rhs: [p.rhs[p.rhs.length - 1]] });\n    } else {\n      result.push(p);\n    }\n  }\n\n  return result.filter(p => !p.rhs.every(s => s === 'e'));\n}\n\n// Test on arithmetic expression grammar\nconst exprGrammar: Production[] = [\n  { lhs: 'E', rhs: ['E', '+', 'T'] },\n  { lhs: 'E', rhs: ['T'] },\n  { lhs: 'T', rhs: ['T', '*', 'F'] },\n  { lhs: 'T', rhs: ['F'] },\n  { lhs: 'F', rhs: ['(', 'E', ')'] },\n  { lhs: 'F', rhs: ['id'] },\n];\n\nconst cnf = toCNF(exprGrammar);\nconsole.log('CNF productions:', cnf.length);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cfg-to-pda-conversion",
      children: "CFG to PDA Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every CFG can be converted to an equivalent ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pushdown automaton"
      }), " (PDA) — this is a key part of the equivalence proof between CFGs and PDAs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-cfg--pda",
      children: "Algorithm: CFG ? PDA"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given CFG (G = (V, \\Sigma, R, S)), construct PDA (P = ({q}, \\Sigma, V \\cup \\Sigma \\cup {$}, \\delta, q, $}):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start by pushing (S$) onto the stack."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each production (A \\to \\alpha), add a transition that pops (A) and pushes (\\alpha)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each terminal (a), add a transition that pops (a) on matching input (a)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph \"PDA for Grammar G\"\n        q((q))\n        q -->|\"e, e ? S$\"| q\n        q -->|\"e, A ? a<br/>for each A ? a\"| q\n        q -->|\"a, a ? e<br/>for each a ? S\"| q\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The PDA nondeterministically guesses the derivation. If it reaches the bottom-of-stack marker ($) after reading all input, the string is accepted."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-grammar-derivation-simulator",
      children: "TypeScript: Grammar Derivation Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "class CFGParser {\n  private grammar: Map<string, string[][]>;\n\n  constructor(rules: [string, string[]][]) {\n    this.grammar = new Map();\n    for (const [lhs, rhs] of rules) {\n      if (!this.grammar.has(lhs)) this.grammar.set(lhs, []);\n      this.grammar.get(lhs)!.push(rhs);\n    }\n  }\n\n  /** Check if string can be derived in defined steps */\n  canDerive(input: string, maxSteps: number = 100): boolean {\n    return this.search('S', input, maxSteps);\n  }\n\n  private search(current: string, target: string, steps: number): boolean {\n    if (steps <= 0) return false;\n    if (current === target) return true;\n\n    // Find first non-terminal\n    const match = current.match(/[A-Z']/);\n    if (!match) return current === target;\n\n    const pos = match.index!;\n    const nt = match[0];\n    const alternatives = this.grammar.get(nt);\n\n    if (!alternatives) return false;\n\n    // Try each alternative (backtracking search)\n    for (const alt of alternatives) {\n      const next = current.slice(0, pos) + alt.join('') + current.slice(pos + 1);\n      if (next.length > target.length + 10) continue;\n      if (this.search(next, target, steps - 1)) return true;\n    }\n    return false;\n  }\n}\n\n// Grammar for anbn\nconst grammar = new CFGParser([\n  ['S', ['a', 'S', 'b']],\n  ['S', ['e']],\n]);\n\nconsole.log(grammar.canDerive('aabb', 50));   // true\nconsole.log(grammar.canDerive('aab', 50));    // false\nconsole.log(grammar.canDerive('aaabbb', 50)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Grammars are the standard for syntax specification."
          }), " Most programming languages are defined using CFGs. Understanding derivations, parse trees, and ambiguity is essential for anyone building or using programming languages."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Ambiguity must be eliminated for compilers."
          }), " A parse tree determines the meaning of a program. Ambiguous grammars allow multiple interpretations, which is unacceptable. Use precedence and associativity rules to disambiguate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Left recursion prevents top-down parsing."
          }), " Always eliminate left recursion before attempting LL parsing. The transformation preserves the language while making it amenable to predictive parsing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Left factoring enables lookahead decisions."
          }), " When two productions share a prefix, the parser cannot decide which to use. Left factoring delays the decision until enough input is seen."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CFGs are more expressive than regex."
          }), " Regular expressions can only describe regular languages. CFGs describe context-free languages, which properly include regular languages. Nested structures like balanced parentheses require CFGs."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chomsky Normal Form enables polynomial parsing."
          }), " The CYK algorithm, which runs in O(n³) time, requires CNF. Converting to CNF is a prerequisite for efficient CFG recognition."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CFG ? PDA equivalence"
          }), " is the foundation for syntax analysis in compilers. Grammars are how we ", (0,jsx_runtime.jsx)(_components.em, {
            children: "specify"
          }), " syntax; PDAs are how we ", (0,jsx_runtime.jsx)(_components.em, {
            children: "implement"
          }), " recognizers."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-cyk-parser",
      children: "TypeScript: CYK Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type CNFRule = { lhs: string; rhs: string[] };\n\nfunction cykParse(grammar: CNFRule[], input: string): boolean {\n  const n = input.length;\n  const table: Set<string>[][] = Array.from({ length: n }, () =>\n    Array.from({ length: n }, () => new Set<string>())\n  );\n  for (let i = 0; i < n; i++)\n    for (const r of grammar)\n      if (r.rhs.length === 1 && r.rhs[0] === input[i]) table[i][i].add(r.lhs);\n  for (let len = 2; len <= n; len++)\n    for (let i = 0; i <= n - len; i++) {\n      const j = i + len - 1;\n      for (let k = i; k < j; k++)\n        for (const r of grammar)\n          if (r.rhs.length === 2)\n            for (const B of table[i][k])\n              if (r.rhs[0] === B)\n                for (const C of table[k + 1][j])\n                  if (r.rhs[1] === C) table[i][j].add(r.lhs);\n    }\n  return table[0][n - 1].has(\"S\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-cfg-to-cnf-converter-and-cyk-parser",
      children: "TypeScript Implementation: CFG to CNF Converter and CYK Parser"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// CFG to Chomsky Normal Form converter and CYK parser\n\ntype CFGProduction = { lhs: string; rhs: string[] };\n\nclass CFG {\n  constructor(\n    public variables: Set<string>,\n    public terminals: Set<string>,\n    public productions: CFGProduction[],\n    public start: string\n  ) {}\n\n  toCNF(): CFG {\n    let prods = [...this.productions];\n    let vars = new Set(this.variables);\n    let varCounter = vars.size;\n\n    const newVar = (): string => {\n      const v = `X${varCounter++}`;\n      vars.add(v);\n      return v;\n    };\n\n    // Step 1: Add new start variable S0 ? S\n    const oldStart = this.start;\n    const newStart = \"S0\";\n    vars.add(newStart);\n    prods.push({ lhs: newStart, rhs: [oldStart] });\n\n    // Step 2: Eliminate e-productions (skip for brevity — handle nullable)\n    const nullable = new Set<string>();\n    let changed = true;\n    while (changed) {\n      changed = false;\n      for (const p of prods) {\n        if (p.rhs.every(s => nullable.has(s) || s === \"e\") && !nullable.has(p.lhs)) {\n          nullable.add(p.lhs);\n          changed = true;\n        }\n      }\n    }\n\n    // Step 3: Eliminate unit productions A ? B\n    changed = true;\n    while (changed) {\n      changed = false;\n      for (const p of [...prods]) {\n        if (p.rhs.length === 1 && vars.has(p.rhs[0])) {\n          const unitTarget = p.rhs[0];\n          prods = prods.filter(x => x !== p);\n          for (const up of prods.filter(x => x.lhs === unitTarget)) {\n            prods.push({ lhs: p.lhs, rhs: up.rhs });\n          }\n          changed = true;\n        }\n      }\n    }\n\n    // Step 4: Replace terminals in mixed RHS\n    const terminalMap = new Map<string, string>();\n    const newProds: CFGProduction[] = [];\n    for (const p of prods) {\n      if (p.rhs.length === 1 && this.terminals.has(p.rhs[0])) {\n        newProds.push(p); // Already CNF: A ? a\n        continue;\n      }\n      const rhs: string[] = [];\n      for (const sym of p.rhs) {\n        if (this.terminals.has(sym)) {\n          if (!terminalMap.has(sym)) {\n            const v = newVar();\n            terminalMap.set(sym, v);\n            newProds.push({ lhs: v, rhs: [sym] });\n          }\n          rhs.push(terminalMap.get(sym)!);\n        } else {\n          rhs.push(sym);\n        }\n      }\n      newProds.push({ lhs: p.lhs, rhs });\n    }\n\n    // Step 5: Break long RHS into binary productions\n    const binaryProds: CFGProduction[] = [];\n    for (const p of newProds) {\n      if (p.rhs.length <= 2) {\n        binaryProds.push(p);\n      } else {\n        let prev = p.rhs[0];\n        for (let i = 1; i < p.rhs.length - 1; i++) {\n          const v = newVar();\n          binaryProds.push({ lhs: i === 1 ? p.lhs : prev, rhs: [prev, v] });\n          prev = v;\n        }\n        binaryProds.push({ lhs: prev, rhs: [p.rhs[p.rhs.length - 2], p.rhs[p.rhs.length - 1]] });\n      }\n    }\n\n    return new CFG(vars, this.terminals, binaryProds, newStart);\n  }\n\n  cykParse(input: string): boolean {\n    const cnf = this.toCNF();\n    const n = input.length;\n    const table: Set<string>[][] = Array.from({ length: n }, () =>\n      Array.from({ length: n }, () => new Set<string>())\n    );\n\n    // Fill terminals\n    for (let i = 0; i < n; i++) {\n      for (const p of cnf.productions) {\n        if (p.rhs.length === 1 && p.rhs[0] === input[i]) {\n          table[i][i].add(p.lhs);\n        }\n      }\n    }\n\n    // Fill non-terminals\n    for (let len = 2; len <= n; len++) {\n      for (let i = 0; i <= n - len; i++) {\n        const j = i + len - 1;\n        for (let k = i; k < j; k++) {\n          for (const p of cnf.productions) {\n            if (p.rhs.length === 2 &&\n                table[i][k].has(p.rhs[0]) &&\n                table[k + 1][j].has(p.rhs[1])) {\n              table[i][j].add(p.lhs);\n            }\n          }\n        }\n      }\n    }\n\n    return table[0][n - 1].has(cnf.start);\n  }\n\n  isAmbiguous(): boolean {\n    // Quick ambiguity check: same RHS from same LHS with different patterns\n    const rhsCount = new Map<string, number>();\n    for (const p of this.productions) {\n      const key = `${p.lhs}?${p.rhs.join(\"\")}`;\n      const pattern = p.rhs.length >= 2 ? \"binary\" : p.rhs.length === 1 && this.terminals.has(p.rhs[0]) ? \"term\" : \"other\";\n      const count = rhsCount.get(pattern) || 0;\n      rhsCount.set(pattern, count + 1);\n    }\n    return [...rhsCount.values()].some(c => c > 1);\n  }\n}\n\nconst cfg = new CFG(\n  new Set([\"S\", \"A\", \"B\"]),\n  new Set([\"a\", \"b\"]),\n  [\n    { lhs: \"S\", rhs: [\"A\", \"B\"] },\n    { lhs: \"S\", rhs: [\"a\"] },\n    { lhs: \"A\", rhs: [\"a\"] },\n    { lhs: \"B\", rhs: [\"b\"] }\n  ],\n  \"S\"\n);\n\nconsole.log(cfg.cykParse(\"ab\"));  // true\nconsole.log(cfg.cykParse(\"a\"));   // true\nconsole.log(cfg.cykParse(\"ba\"));  // false\nconsole.log(cfg.isAmbiguous());   // false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// CNF Converter — transforms any CFG into Chomsky\n// Normal Form where every production is A ? BC or A ? a\n// (plus S ? e for the empty string).\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class CNFConverter {\nprivate variables: Set<string>;\nprivate terminals: Set<string>;\nprivate productions: Array<{ lhs: string; rhs: string[] }>;\nprivate startVar: string;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(\nvariables: Set<string>, terminals: Set<string>,\nproductions: Array<{ lhs: string; rhs: string[] }>,\nstartVar: string\n) {\nthis.variables = variables; this.terminals = terminals;\nthis.productions = productions; this.startVar = startVar;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Step 1: Add new start variable S0 ? S\nprivate addNewStart(): Array<{ lhs: string; rhs: string[] }> {\nconst prods = [...this.productions];\nprods.push({ lhs: \"S0\", rhs: [this.startVar] });\nreturn prods;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Step 2: Eliminate e-productions (simplified)\nprivate eliminateEpsilon(prods: Array<{ lhs: string; rhs: string[] }>): Array<{ lhs: string; rhs: string[] }> {\n// Find nullable variables\nconst nullable = new Set<string>();\nlet changed = true;\nwhile (changed) {\nchanged = false;\nfor (const p of prods) {\nif (p.rhs.length === 0 && !nullable.has(p.lhs)) {\nnullable.add(p.lhs); changed = true;\n}\nif (p.rhs.every(s => nullable.has(s)) && !nullable.has(p.lhs)) {\nnullable.add(p.lhs); changed = true;\n}\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Build new productions omitting nullable symbols\nconst result: Array&lt;{ lhs: string; rhs: string[] }&gt; = [];\nfor (const p of prods) {\n  if (p.rhs.length === 0) continue;\n  const subsets = this.generateSubsets(p.rhs, nullable);\n  for (const subset of subsets) {\n    if (subset.length > 0) result.push({ lhs: p.lhs, rhs: subset });\n  }\n}\nreturn result;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "private generateSubsets(rhs: string[], nullable: Set<string>): string[][] {\nconst results: string[][] = [[]];\nfor (const sym of rhs) {\nconst newResults: string[][] = [];\nfor (const r of results) {\nnewResults.push([...r, sym]);\nif (nullable.has(sym)) newResults.push([...r]);\n}\nresults.length = 0;\nresults.push(...newResults);\n}\nreturn results;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Step 3: Eliminate unit productions (simplified)\nprivate eliminateUnit(prods: Array<{ lhs: string; rhs: string[] }>): Array<{ lhs: string; rhs: string[] }> {\nconst unitPairs = new Map<string, Set<string>>();\nfor (const v of this.variables) unitPairs.set(v, new Set([v]));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Find unit closure\nlet changed = true;\nwhile (changed) {\n  changed = false;\n  for (const p of prods) {\n    if (p.rhs.length === 1 && /^[A-Z0]$/.test(p.rhs[0])) {\n      const target = p.rhs[0];\n      for (const s of unitPairs.get(target)!) {\n        if (!unitPairs.get(p.lhs)!.has(s)) {\n          unitPairs.get(p.lhs)!.add(s);\n          changed = true;\n        }\n      }\n    }\n  }\n}\n\n// Remove unit productions, add non-unit from closure\nconst result: Array&lt;{ lhs: string; rhs: string[] }&gt; = [];\nfor (const [v, closure] of unitPairs) {\n  for (const c of closure) {\n    if (c === v) continue;\n    for (const p of prods) {\n      if (p.lhs === c && !(p.rhs.length === 1 && /^[A-Z0]$/.test(p.rhs[0]))) {\n        result.push({ lhs: v, rhs: [...p.rhs] });\n      }\n    }\n  }\n}\n// Keep existing non-unit productions\nfor (const p of prods) {\n  if (!(p.rhs.length === 1 && /^[A-Z0]$/.test(p.rhs[0]))) {\n    result.push({ lhs: p.lhs, rhs: [...p.rhs] });\n  }\n}\nreturn result;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Step 4: Convert to CNF — replace terminals in mixed rhs,\n// and break long RHS sequences into binary productions.\nprivate toCNF(prods: Array<{ lhs: string; rhs: string[] }>): Array<{ lhs: string; rhs: string[] }> {\nconst result: Array<{ lhs: string; rhs: string[] }> = [];\nlet counter = 0;\nconst newVar = () => ", (0,jsx_runtime.jsx)(_components.code, {
        children: "X${counter++}"
      }), ";"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Replace terminals in mixed RHS\nconst terminalMap = new Map&lt;string, string&gt;();\nfor (const p of prods) {\n  if (p.rhs.length === 1 && this.terminals.has(p.rhs[0])) {\n    result.push({ lhs: p.lhs, rhs: [...p.rhs] });\n  } else if (p.rhs.length >= 2) {\n    const newRhs = p.rhs.map(sym => {\n      if (this.terminals.has(sym)) {\n        if (!terminalMap.has(sym)) {\n          const nv = newVar();\n          terminalMap.set(sym, nv);\n          result.push({ lhs: nv, rhs: [sym] });\n        }\n        return terminalMap.get(sym)!;\n      }\n      return sym;\n    });\n    // Break into binary productions\n    let current = newRhs;\n    while (current.length > 2) {\n      const nv = newVar();\n      result.push({ lhs: nv, rhs: [current[0], current[1]] });\n      current = [nv, ...current.slice(2)];\n    }\n    result.push({ lhs: p.lhs, rhs: current });\n  }\n}\nreturn result;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "convert(): Array<{ lhs: string; rhs: string[] }> {\nlet prods = this.addNewStart();\nprods = this.eliminateEpsilon(prods);\nprods = this.eliminateUnit(prods);\nprods = this.toCNF(prods);\nreturn prods;\n}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo\nconst cnf = new CNFConverter(\nnew Set([\"S\", \"A\", \"B\"]), new Set([\"a\", \"b\"]),\n[\n{ lhs: \"S\", rhs: [\"A\", \"S\", \"B\"] }, { lhs: \"S\", rhs: [] },\n{ lhs: \"A\", rhs: [\"a\"] }, { lhs: \"B\", rhs: [\"b\"] }\n],\n\"S\"\n);\nconst cnfProds = cnf.convert();\nconsole.log(\"CNF productions:\");\nfor (const p of cnfProds) {\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  ${p.lhs} ? ${p.rhs.join(\" \")}"
      }), ");\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// cfg\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'cfg', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- A CFG consists of variables, terminals, productions, and a start variable.\n- Derivations (leftmost/rightmost) and parse trees represent how strings are generated.\n- Ambiguity means multiple parse trees exist for some string.\n- Left recursion must be eliminated for top-down parsing.\n- Left factoring prepares grammars for predictive parsing.\n- CFGs can describe nested structures like parentheses, arithmetic expressions, and programming language syntax.\n- Formal grammars enable precise, unambiguous specification of programming language syntax.\n- **Chomsky Normal Form** restricts CFG productions to form \\(A \\to BC\\) or \\(A \\to a\\), enabling the CYK algorithm.\n- CFGs and **pushdown automata** are equivalent — every grammar can be converted to a PDA and vice versa.\n\n## Exercises\n\n### Basic\n\n1. Find a CFG for L = { aⁿbⁿ | n ≥ 0 }.\n2. Find a CFG for L = { aⁿbᵐcⁿ⁺ᵐ | n, m ≥ 0 }.\n3. Show leftmost and rightmost derivations for the string \"aababb\" using grammar: S → aS | Sb | ε.\n4. Draw the parse tree (textually) for \"i * (i + i)\" using the grammar from Example 5.2.\n5. Test the grammar S → aS | Sb | ε for ambiguity. Find a string with two derivations.\n\n### Intermediate\n\n6. Eliminate left recursion from: A → Ab | Aa | a | b.\n7. Left-factor: S → if E then S else S | if E then S | other.\n8. Find a CFG for L = { aⁱbʲcᵏ | i = j or j = k } and show it is ambiguous.\n9. Design a CFG for the language of balanced parentheses (all strings of '(' and ')' where parentheses match properly).\n10. Prove formally that the grammar E → E + T | T, T → id is unambiguous.\n11. Convert the arithmetic expression grammar (Example 5.2) to Chomsky Normal Form.\n12. Write a TypeScript function that, given a CFG, constructs an equivalent PDA using the single-state algorithm.\n\n### Advanced\n\n13. Prove that the language { aⁿbⁿcⁿ | n ≥ 0 } is NOT context-free (using the pumping lemma for CFLs, which will be covered in Chapter 7).\n14. Write a CFG for the language L = { w ∈ {a,b}* | w has twice as many a's as b's }.\n15. Show that every regular language is context-free by constructing a CFG from a DFA.\n16. Design a CFG for L = { aⁿbᵐ | n ≠ m } and prove its correctness.\n17. Show that the grammar S → SS | aSb | ε generates strings with equal numbers of a's and b's where every prefix has at least as many a's as b's. Prove by induction on string length.\n18. Implement the CYK algorithm in TypeScript for a grammar in CNF. Test it on the grammar for palindromes with input \"abba\".\n\n## Further Reading\n\n- **Sipser, Michael.** *Introduction to the Theory of Computation* (3rd ed.). Chapter 2 covers context-free grammars in depth including Chomsky Normal Form and ambiguity.\n- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 5 provides comprehensive coverage of CFG simplification and normal forms.\n- **Aho, Alfred V., Lam, Monica S., Sethi, Ravi, and Ullman, Jeffrey D.** *Compilers: Principles, Techniques, and Tools* (2nd ed.). Chapters 4-5 cover the practical application of CFGs in parsing and syntax analysis.\n- **Grzegorz, Rozenberg and Salomaa, Arto.** *Handbook of Formal Languages* (3 vols.). The definitive reference for formal language theory including context-free grammars.\n\n## Practical Takeaways\n\n1. **Grammars are the standard for syntax specification.** Most programming languages are defined using CFGs. Understanding derivations, parse trees, and ambiguity is essential for anyone building or using programming languages.\n\n2. **Ambiguity must be eliminated for compilers.** A parse tree determines the meaning of a program. Ambiguous grammars allow multiple interpretations. Use precedence and associativity rules to disambiguate.\n\n3. **Left recursion prevents top-down parsing.** Always eliminate left recursion before attempting LL parsing. The transformation preserves the language while making it amenable to predictive parsers.\n\n4. **CNF is a prerequisite for efficient parsing.** The CYK algorithm (O(n³)) requires CNF. Converting to CNF is the first step for any grammar before algorithmic parsing.\n\n5. **CFG ? PDA equivalence is foundational.** Grammars specify syntax; PDAs implement recognizers. This pair forms the backbone of compiler frontends.\n\n"
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