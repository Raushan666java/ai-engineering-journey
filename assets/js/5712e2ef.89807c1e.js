"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[25902],{

/***/ 60433
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_16_applications_md_571_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-16-applications-md-571.json
const site_docs_courses_theory_of_computation_16_applications_md_571_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/16-applications","title":"Chapter 16: Applications of Automata Theory","description":"Previous None","source":"@site/docs/courses/theory-of-computation/16-applications.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/16-applications","permalink":"/ai-engineering-journey/theory-of-computation/16-applications","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"16-applications","slug":"/theory-of-computation/16-applications","title":"Chapter 16: Applications of Automata Theory","sidebar_label":"Chapter 16: Applications of Automata Theory","sidebar_position":16},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 15: Advanced Complexity Topics","permalink":"/ai-engineering-journey/theory-of-computation/15-advanced-complexity"},"next":{"title":"Theory of Computation — Complete Course Textbook","permalink":"/ai-engineering-journey/theory-of-computation"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/16-applications.md


const frontMatter = {
	id: '16-applications',
	slug: '/theory-of-computation/16-applications',
	title: 'Chapter 16: Applications of Automata Theory',
	sidebar_label: 'Chapter 16: Applications of Automata Theory',
	sidebar_position: 16
};
const contentTitle = 'Chapter 16: Applications of Automata Theory';

const assets = {

};



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
  "value": "15.1 Lexical Analysis and Regular Expressions",
  "id": "151-lexical-analysis-and-regular-expressions",
  "level": 3
}, {
  "value": "15.2 Parsing and Context-Free Grammars",
  "id": "152-parsing-and-context-free-grammars",
  "level": 3
}, {
  "value": "15.3 Formal Verification and Model Checking",
  "id": "153-formal-verification-and-model-checking",
  "level": 3
}, {
  "value": "15.4 Cryptography and Computational Complexity",
  "id": "154-cryptography-and-computational-complexity",
  "level": 3
}, {
  "value": "15.5 Automata in Natural Language Processing",
  "id": "155-automata-in-natural-language-processing",
  "level": 3
}, {
  "value": "15.6 Programming Language Theory",
  "id": "156-programming-language-theory",
  "level": 3
}, {
  "value": "15.7 Bioinformatics",
  "id": "157-bioinformatics",
  "level": 3
}, {
  "value": "15.8 Network Security and Intrusion Detection",
  "id": "158-network-security-and-intrusion-detection",
  "level": 3
}, {
  "value": "15.9 Computability and Software Engineering",
  "id": "159-computability-and-software-engineering",
  "level": 3
}, {
  "value": "15.10 Quantum Computing and Complexity",
  "id": "1510-quantum-computing-and-complexity",
  "level": 3
}, {
  "value": "TypeScript Applications",
  "id": "typescript-applications",
  "level": 2
}, {
  "value": "TypeScript 15.1: DFA-based Lexer for a Mini-Language",
  "id": "typescript-151-dfa-based-lexer-for-a-mini-language",
  "level": 3
}, {
  "value": "TypeScript 15.2: Aho-Corasick Multi-Pattern Matcher",
  "id": "typescript-152-aho-corasick-multi-pattern-matcher",
  "level": 3
}, {
  "value": "TypeScript 15.3: HMM for Part-of-Speech Tagging (Viterbi)",
  "id": "typescript-153-hmm-for-part-of-speech-tagging-viterbi",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 15.1: Lexer Design for a Mini-Language",
  "id": "example-151-lexer-design-for-a-mini-language",
  "level": 3
}, {
  "value": "Example 15.2: Model Checking a Simple Protocol",
  "id": "example-152-model-checking-a-simple-protocol",
  "level": 3
}, {
  "value": "Example 15.3: Undecidability in Practice → Static Analysis",
  "id": "example-153-undecidability-in-practice--static-analysis",
  "level": 3
}, {
  "value": "Example 15.4: RNA Secondary Structure Prediction with CFGs",
  "id": "example-154-rna-secondary-structure-prediction-with-cfgs",
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
  "value": "TypeScript Implementation: Regex Engine, Parser Generator, and Model Checker",
  "id": "typescript-implementation-regex-engine-parser-generator-and-model-checker",
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
        id: "chapter-16-applications-of-automata-theory",
        children: "Chapter 16: Applications of Automata Theory"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/15-advanced-complexity",
          children: "Advanced Complexity Topics"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand how finite automata are used in lexical analysis and pattern matching."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe how pushdown automata and CFGs form the foundation of parsing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how automata theory applies to formal verification."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand cryptographic applications of complexity theory."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize the role of automata in AI and natural language processing."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply concepts from computability to real-world software engineering."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Lexical Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA-based tokenization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every compiler uses this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA/CFG-based syntax analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation of programming languages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Model Checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automata for system verification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used by Intel, Microsoft, NASA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way functions and NP-hardness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security from complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMMs and CFGs for sequence analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene finding, RNA folding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Lexical Analysis] --> B[Parsing]\n    B --> C[Model Checking]\n    C --> D[Cryptography]\n    D --> E[NLP]\n    E --> F[Bioinformatics]\n    F --> G[Quantum Computing]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/theory-of-computation/15-applications.png",
        alt: "Applications of Automata Theory Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "151-lexical-analysis-and-regular-expressions",
      children: "15.1 Lexical Analysis and Regular Expressions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most widespread application of finite automata is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lexical analysis"
      }), " (lexing) in compilers. A lexer converts a stream of characters into a stream of tokens (identifiers, keywords, operators, literals)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each token type (IDENTIFIER, NUMBER, WHITESPACE, etc.) is described by a regular expression."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each regular expression is converted to an NFA and then to a DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The DFAs are combined into a single DFA that recognizes all token types."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The lexer simulates this DFA on the input, tracking the longest match found so far."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When the DFA reaches a dead state, the longest matching token is emitted."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      }), " lex, flex (C/C++), ANTLR (Java, multi-language), Ragel (state machine compiler)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " A lexer for simple arithmetic:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DIGIT    → [0-9]\nNUMBER   → DIGIT+ (\\. DIGIT+)?\nPLUS     → +\nMINUS    → -\nTIMES    → *\nDIVIDE   → /\nLPAREN   → (\nRPAREN   → )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each rule compiles to a DFA. The lexer simulates them in parallel, picking the longest matching token."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "152-parsing-and-context-free-grammars",
      children: "15.2 Parsing and Context-Free Grammars"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parsing"
      }), " is the process of determining the syntactic structure of a string according to a CFG. This produces a parse tree used by subsequent compiler phases."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two main parsing strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Top-down (LL) parsing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Build the parse tree from the root downward."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Predict which production to use based on the next input symbol."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Requires the grammar to be LL(k) (no left recursion, k symbols of lookahead)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Used in: recursive-descent parsers (hand-written for many production compilers)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Bottom-up (LR) parsing:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Build the parse tree from the leaves upward."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shift symbols onto a stack until a production's RHS is matched, then reduce."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "More general than LL → can handle more grammars."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Used in: yacc, bison, and most parser generators."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parser generators:"
      }), " yacc/bison (LALR(1)), ANTLR (LL(*)), CUP (LALR), Happy (Haskell)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "The Chomsky hierarchy in parsing:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type 3 (regular): tokenization by DFA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type 2 (context-free): syntax analysis by PDA."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type 1 (context-sensitive): some semantic analysis (limited)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "153-formal-verification-and-model-checking",
      children: "15.3 Formal Verification and Model Checking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model checking"
      }), " is an automated technique for verifying that a system satisfies a given specification. It uses automata theory to represent both the system and the specification."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Temporal logics:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LTL (Linear Temporal Logic):"
        }), " Formulas over paths. \"Always eventually p\" (GFp)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CTL (Computation Tree Logic):"
        }), " Formulas over branching structure. \"For all paths, eventually p\" (AF p)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Automata-theoretic approach:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Model the system as a finite automaton (a Kripke structure) M."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convert the specification (in LTL or CTL) to an automaton A that accepts violating behaviors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute the product automaton M × A."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check if the product has any accepting path → if so, the specification is violated."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Applications:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware verification (Intel, AMD use model checking for CPU designs)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Protocol verification (checking communication protocols)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Software verification (SLAM project at Microsoft for device drivers)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Safety-critical systems (avionics, medical devices)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tools:"
      }), " SPIN (explicit-state model checker), NuSMV (symbolic model checking), CBMC (bounded model checking for C)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "154-cryptography-and-computational-complexity",
      children: "15.4 Cryptography and Computational Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Complexity theory provides the foundation for modern cryptography. In particular, the existence of ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "one-way functions"
      }), " (functions easy to compute but hard to invert) is the basis for most cryptographic primitives."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key complexity-theoretic concepts in cryptography:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-way functions:"
        }), " f(x) is easy to compute, but given y = f(x), finding any x' with f(x') = y is hard (requires super-polynomial time)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trapdoor functions:"
        }), " One-way functions with a \"back door\" → with the secret key, inversion is easy (used in public-key cryptography)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-knowledge proofs:"
        }), " An interactive proof reveals nothing beyond the validity of the statement. ZK proofs exist for all NP languages under cryptographic assumptions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Computational hardness assumptions:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factoring:"
        }), " Given product of two large primes, find the factors. (Used in RSA.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discrete log:"
        }), " Given g, p, and gˣ mod p, find x. (Used in Diffie-Hellman, ElGamal.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lattice problems:"
        }), " Learning With Errors (LWE), Shortest Vector Problem (SVP). (Used in post-quantum cryptography.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SAT hardness:"
        }), " Many cryptographic constructions rely on the hardness of NP-complete problems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "155-automata-in-natural-language-processing",
      children: "15.5 Automata in Natural Language Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite-state methods"
      }), " are extensively used in NLP:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Morphological analysis:"
        }), " Finite-state transducers model word formation (e.g., \"running\" → run + ing)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Phonology:"
        }), " Finite-state machines model sound changes in language."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Part-of-speech tagging:"
        }), " Hidden Markov Models (probabilistic finite automata) assign POS tags to words."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Speech recognition:"
        }), " Viterbi algorithm (DP on a weighted automaton) finds the most likely word sequence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Context-free grammars"
      }), " are used in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Syntactic parsing:"
        }), " CFGs (and richer formalisms like TAG, CCG) model sentence structure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dependency parsing:"
        }), " Non-projective dependency grammars go beyond CFGs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Modern NLP (transformer-based):"
      }), " While modern LLMs don't explicitly use automata, concepts from automata theory appear in:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Attention mechanisms"
        }), " can be seen as simulating weighted finite automata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regular languages"
        }), " are the limit of what certain transformer architectures can recognize."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "156-programming-language-theory",
      children: "15.6 Programming Language Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Type systems"
      }), " and automata theory:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regular types:"
        }), " Types described by regular expressions (e.g., nullable types, option types)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context-free grammars"
        }), " describe syntax, and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "attribute grammars"
        }), " extend CFGs with semantic actions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive types"
        }), " (e.g., lists, trees) correspond to concepts in µ-calculus and alternating automata."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Domain-specific languages (DSLs):"
      }), " Many DSLs are designed to be regular or context-free, enabling efficient parsing and analysis. Examples: SQL, HTML/CSS (regular for practical purposes), JSON."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bidirectional programming (lenses):"
      }), " The theory of lenses for bidirectional transformations has deep connections to automata theory, particularly finite-state transducers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "157-bioinformatics",
      children: "15.7 Bioinformatics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite automata in computational biology:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hidden Markov Models (HMMs):"
        }), " Used for gene finding, protein family classification (Pfam), and sequence alignment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profile HMMs:"
        }), " Represent conserved sequence patterns in multiple sequence alignments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deterministic finite automata"
        }), " for motif finding: search for patterns in DNA/RNA/protein sequences."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Context-free grammars:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RNA secondary structure prediction:"
        }), " Pseudoknot-free RNA structures can be modeled by CFGs. The Nussinov algorithm and Zuker algorithm use DP (like CYK) to find the optimal structure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stochastic CFGs:"
        }), " Probabilistic CFGs model RNA families and grammar-driven sequence analysis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "158-network-security-and-intrusion-detection",
      children: "15.8 Network Security and Intrusion Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern matching with automata:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aho-Corasick algorithm:"
        }), " Builds a DFA-like automaton from a set of patterns (virus signatures, attack patterns). Runs in O(n + m + z) where n is text length, m is total pattern length, z is number of matches."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Snort/Suricata rules:"
        }), " Network intrusion detection systems compile rules into efficient automata."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deep packet inspection (DPI):"
        }), " Regular expressions in hardware (TCAM, FPGA) for line-rate packet matching."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Anomaly detection:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n-gram models:"
        }), " Probabilistic automata learning normal behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Protocol analysis:"
        }), " Finite-state models of protocol states detect deviations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "159-computability-and-software-engineering",
      children: "15.9 Computability and Software Engineering"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Understanding undecidability helps engineers recognize what ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot"
      }), " be automated:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No automated termination checker:"
        }), " The halting problem means we cannot have a tool that always correctly determines whether a program terminates."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No perfect bug finder:"
        }), " Rice's theorem implies that any non-trivial property of program behavior (correctness, safety, liveness) is undecidable in general."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No fully automated program synthesis:"
        }), " While specific synthesis problems are decidable, general program synthesis is not."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical consequences:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static analysis tools (like linters) use conservative approximations (sound but incomplete, or complete but unsound)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type systems balance expressiveness with decidability."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing cannot prove correctness → it can only find bugs."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1510-quantum-computing-and-complexity",
      children: "15.10 Quantum Computing and Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "BQP"
      }), " (Bounded-error Quantum Polynomial Time): The class of problems efficiently solvable by quantum computers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Relationship to classical classes:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "P ⊆ BQP ⊆ PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "It's believed that NP ⊄ BQP (quantum computers won't solve NP-complete problems efficiently)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shor's algorithm: Factoring ∈ BQP (threatens RSA)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Grover's algorithm: Unstructured search in O(√n) (quadratic speedup)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Implications for the Church-Turing thesis:"
      }), "\nThe ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "extended Church-Turing thesis"
      }), " (every physically realizable computation can be simulated by a probabilistic TM with polynomial slowdown) is challenged by quantum computing. Whether quantum computers provide a super-polynomial advantage remains an active research question."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-applications",
      children: "TypeScript Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-151-dfa-based-lexer-for-a-mini-language",
      children: "TypeScript 15.1: DFA-based Lexer for a Mini-Language"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Token types\nenum TokenType {\n  NUMBER, IDENTIFIER, KEYWORD, PLUS, MINUS,\n  STAR, SLASH, LPAREN, RPAREN, ASSIGN, EOF, ERROR\n}\n\nclass Token {\n  constructor(public type: TokenType, public lexeme: string, public pos: number) {}\n}\n\nclass Lexer {\n  private pos = 0;\n  private tokens: Token[] = [];\n\n  constructor(private input: string) {}\n\n  // DFA simulation for each token type\n  private recognizeNumber(): Token | null {\n    let start = this.pos;\n    while (this.pos < this.input.length && /[0-9]/.test(this.input[this.pos]))\n      this.pos++;\n    if (this.pos > start) return new Token(TokenType.NUMBER, this.input.slice(start, this.pos), start);\n    return null;\n  }\n\n  private recognizeIdentifierOrKeyword(): Token | null {\n    let start = this.pos;\n    if (this.pos < this.input.length && /[a-zA-Z_]/.test(this.input[this.pos])) {\n      this.pos++;\n      while (this.pos < this.input.length && /[a-zA-Z0-9_]/.test(this.input[this.pos]))\n        this.pos++;\n      const word = this.input.slice(start, this.pos);\n      const type = [\"if\", \"else\", \"while\", \"return\"].includes(word)\n        ? TokenType.KEYWORD : TokenType.IDENTIFIER;\n      return new Token(type, word, start);\n    }\n    return null;\n  }\n\n  tokenize(): Token[] {\n    while (this.pos < this.input.length) {\n      if (/[\\s]/.test(this.input[this.pos])) { this.pos++; continue; }\n      const num = this.recognizeNumber();\n      if (num) { this.tokens.push(num); continue; }\n      const id = this.recognizeIdentifierOrKeyword();\n      if (id) { this.tokens.push(id); continue; }\n\n      const ch = this.input[this.pos];\n      const map: Record<string, TokenType> = {\n        \"+\": TokenType.PLUS, \"-\": TokenType.MINUS,\n        \"*\": TokenType.STAR, \"/\": TokenType.SLASH,\n        \"(\": TokenType.LPAREN, \")\": TokenType.RPAREN,\n        \"=\": TokenType.ASSIGN,\n      };\n      if (map[ch]) {\n        this.tokens.push(new Token(map[ch], ch, this.pos));\n        this.pos++;\n      } else {\n        this.tokens.push(new Token(TokenType.ERROR, ch, this.pos));\n        this.pos++;\n      }\n    }\n    this.tokens.push(new Token(TokenType.EOF, \"\", this.pos));\n    return this.tokens;\n  }\n}\n\n// Example\nconst lexer = new Lexer(\"if x = 42 + y\");\nconst tokens = lexer.tokenize();\ntokens.forEach(t =>\n  console.log(`${TokenType[t.type]}: \"${t.lexeme}\" at ${t.pos}`)\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-152-aho-corasick-multi-pattern-matcher",
      children: "TypeScript 15.2: Aho-Corasick Multi-Pattern Matcher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Aho-Corasick automaton for multi-pattern string matching\n// Builds a DFA with failure links (prefix-suffix matching)\n\nclass ACTrie {\n  private goto: Map<number, Map<string, number>> = new Map();\n  private fail: Map<number, number> = new Map();\n  private output: Map<number, string[]> = new Map();\n  private nextState = 0;\n\n  constructor(private patterns: string[]) {\n    this.buildTrie();\n    this.buildFailureLinks();\n  }\n\n  private buildTrie() {\n    this.goto.set(0, new Map());\n    this.output.set(0, []);\n    this.patterns.forEach(p => {\n      let state = 0;\n      for (const ch of p) {\n        if (!this.goto.get(state)!.has(ch)) {\n          this.nextState++;\n          this.goto.set(this.nextState, new Map());\n          this.output.set(this.nextState, []);\n          this.goto.get(state)!.set(ch, this.nextState);\n        }\n        state = this.goto.get(state)!.get(ch)!;\n      }\n      this.output.get(state)!.push(p);\n    });\n  }\n\n  private buildFailureLinks() {\n    const queue: number[] = [];\n    // Depth-1 states fail to state 0\n    for (const [ch, state] of this.goto.get(0)!) {\n      this.fail.set(state, 0);\n      queue.push(state);\n    }\n    // BFS to build failure links\n    while (queue.length > 0) {\n      const r = queue.shift()!;\n      for (const [ch, s] of this.goto.get(r)!) {\n        queue.push(s);\n        let f = this.fail.get(r)!;\n        while (f !== 0 && !this.goto.get(f)!.has(ch)) f = this.fail.get(f)!;\n        this.fail.set(s, this.goto.get(f)!.has(ch) ? this.goto.get(f)!.get(ch)! : 0);\n        this.output.set(s, [\n          ...this.output.get(s)!,\n          ...this.output.get(this.fail.get(s)!)!,\n        ]);\n      }\n    }\n  }\n\n  search(text: string): Map<string, number[]> {\n    const results = new Map<string, number[]>();\n    let state = 0;\n    for (let i = 0; i < text.length; i++) {\n      while (state !== 0 && !this.goto.get(state)!.has(text[i]))\n        state = this.fail.get(state)!;\n      state = this.goto.get(state)!.has(text[i])\n        ? this.goto.get(state)!.get(text[i])! : 0;\n      for (const p of this.output.get(state)!) {\n        if (!results.has(p)) results.set(p, []);\n        results.get(p)!.push(i - p.length + 1);\n      }\n    }\n    return results;\n  }\n}\n\n// Example\nconst ac = new ACTrie([\"he\", \"she\", \"his\", \"hers\"]);\nconst result = ac.search(\"ushers\");\nfor (const [pat, positions] of result) {\n  console.log(`\"${pat}\" found at positions: ${positions.join(\", \")}`);\n}\n// \"she\" at 1, \"he\" at 2, \"hers\" at 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-153-hmm-for-part-of-speech-tagging-viterbi",
      children: "TypeScript 15.3: HMM for Part-of-Speech Tagging (Viterbi)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Hidden Markov Model for POS tagging using the Viterbi algorithm\n\nclass HMM {\n  constructor(\n    private states: string[],\n    private observations: string[],\n    private startProb: Map<string, number>,\n    private transProb: Map<string, Map<string, number>>,\n    private emitProb: Map<string, Map<string, number>>\n  ) {}\n\n  viterbi(obs: string[]): string[] {\n    const T = obs.length;\n    const N = this.states.length;\n    const viterbi: number[][] = Array.from({ length: T }, () => new Array(N).fill(0));\n    const backpointer: number[][] = Array.from({ length: T }, () => new Array(N).fill(-1));\n\n    // Initialization\n    for (let s = 0; s < N; s++) {\n      const state = this.states[s];\n      viterbi[0][s] = (this.startProb.get(state) || 0) *\n                       (this.emitProb.get(state)?.get(obs[0]) || 0);\n    }\n\n    // Recursion\n    for (let t = 1; t < T; t++) {\n      for (let s = 0; s < N; s++) {\n        const state = this.states[s];\n        let maxProb = 0;\n        let bestPrev = 0;\n        for (let ps = 0; ps < N; ps++) {\n          const prevState = this.states[ps];\n          const prob = viterbi[t - 1][ps] *\n                       (this.transProb.get(prevState)?.get(state) || 0) *\n                       (this.emitProb.get(state)?.get(obs[t]) || 0);\n          if (prob > maxProb) { maxProb = prob; bestPrev = ps; }\n        }\n        viterbi[t][s] = maxProb;\n        backpointer[t][s] = bestPrev;\n      }\n    }\n\n    // Termination\n    let bestLast = 0;\n    let bestProb = 0;\n    for (let s = 0; s < N; s++) {\n      if (viterbi[T - 1][s] > bestProb) { bestProb = viterbi[T - 1][s]; bestLast = s; }\n    }\n\n    // Backtrack\n    const path: string[] = new Array(T);\n    let current = bestLast;\n    for (let t = T - 1; t >= 0; t--) {\n      path[t] = this.states[current];\n      current = t > 0 ? backpointer[t][current] : 0;\n    }\n    return path;\n  }\n}\n\n// Example: Simple POS tagger\nconst hmm = new HMM(\n  [\"DET\", \"NOUN\", \"VERB\", \"ADJ\"],\n  [\"the\", \"cat\", \"dog\", \"runs\", \"big\"],\n  new Map([[\"DET\", 0.5], [\"NOUN\", 0.3], [\"VERB\", 0.15], [\"ADJ\", 0.05]]),\n  new Map([\n    [\"DET\", new Map([[\"NOUN\", 0.8], [\"ADJ\", 0.2]])],\n    [\"NOUN\", new Map([[\"VERB\", 0.6], [\"DET\", 0.2], [\"ADJ\", 0.2]])],\n    [\"VERB\", new Map([[\"DET\", 0.7], [\"NOUN\", 0.2], [\"ADV\", 0.1]])],\n    [\"ADJ\", new Map([[\"NOUN\", 1.0]])],\n  ]),\n  new Map([\n    [\"DET\", new Map([[\"the\", 1.0]])],\n    [\"NOUN\", new Map([[\"cat\", 0.5], [\"dog\", 0.5]])],\n    [\"VERB\", new Map([[\"runs\", 1.0]])],\n    [\"ADJ\", new Map([[\"big\", 1.0]])],\n  ])\n);\n\nconst tags = hmm.viterbi([\"the\", \"big\", \"cat\", \"runs\"]);\nconsole.log(tags.join(\" \")); // DET ADJ NOUN VERB\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-151-lexer-design-for-a-mini-language",
      children: "Example 15.1: Lexer Design for a Mini-Language"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lexer for a language with keywords (if, while, else) and identifiers:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "REs: KEYWORD = if|while|else, ID = [a-z]+, NUM = [0-9]+, OP = +|-|*|/"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The combined DFA is constructed by:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Building NFAs for each pattern."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combining via ε-transitions from a new start state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Converting to a DFA via subset construction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "At each step, record which patterns are matched."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When multiple patterns match at the same position (e.g., \"if\" matches both KEYWORD and ID), the lexer uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "longest match"
      }), " rule, with ties broken by priority (KEYWORD before ID)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-152-model-checking-a-simple-protocol",
      children: "Example 15.2: Model Checking a Simple Protocol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a mutual exclusion protocol with two processes. The specification (safety property): \"never both processes in critical section simultaneously.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The model is a Kripke structure M with states (p_state, q_state) where each process state ∈ {idle, want, critical}. Transitions follow the protocol rules."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The property is expressed in LTL as: G ¬(in_cs₁ ∧ in_cs₂)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Model checking constructs the product of M and the automaton for the negation of the property. If any accepting cycle exists, the system model violates mutual exclusion and a counterexample path is produced."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-153-undecidability-in-practice--static-analysis",
      children: "Example 15.3: Undecidability in Practice → Static Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A static analyzer for null pointer dereferences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cannot decide exactly which pointers are null (undecidable in general)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Instead, uses ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "conservative approximation"
        }), ": may report false positives but never misses a real bug."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Example: assume any pointer assigned from a function return might be null unless proven otherwise."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the practical consequence of Rice's theorem → static analysis tools must trade off precision for decidability."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-154-rna-secondary-structure-prediction-with-cfgs",
      children: "Example 15.4: RNA Secondary Structure Prediction with CFGs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RNA bases {A, C, G, U} pair: A-U, C-G, G-U (wobble). Secondary structure prediction using Nussinov algorithm (DP, O(n³)):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Grammar for RNA structure:"
      }), "\nS → ε | a S | a S u | c S g | g S u | c S c | u S a | g S c | S S"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each production corresponds to a structural element:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ε: empty structure."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a S: unpaired base."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a S u: paired bases (a-u)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "S S: branch point."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The CYK-like DP algorithm finds the structure maximizing the number of paired bases."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automaton Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler Phase"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lexical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA/NFA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA (LR/LALR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attribute grammar"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TM transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code improvement"
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
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automata Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lex (flex)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA from regex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yacc (bison)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LALR(1) parsing table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SPIN model checker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B\"uchi automata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aho-Corasick"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA for multi-patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HMM (NLP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probabilistic finite automata"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "Automata Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lexing + parsing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA + PDA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intrusion detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA (Aho-Corasick)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gene finding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMM (probabilistic FA)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "AI/NLP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POS tagging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HMM, CFG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model checking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B\"uchi automata"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quantum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shor's algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BQP complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Lexical analysis uses which automaton?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) PDA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) DFA ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Turing machine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) LBA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Lexical analysis converts character streams to tokens using DFA-derived from regular expressions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " LL and LR parsers correspond to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) DFA"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) PDA ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Turing machine"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) NFA"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Both LL (top-down) and LR (bottom-up) parsing use pushdown automata.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Model checking verifies systems against:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Regular expressions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Temporal logic specifications ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) PCP instances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Busy beaver values"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Model checking uses automata-theoretic techniques to verify LTL/CTL specifications.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " The existence of one-way functions relies on:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) P = NP"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) P ? NP ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) P = PSPACE"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) NP = co-NP"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** One-way functions require computational hardness — if P = NP, they cannot exist.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " The halting problem affects software engineering by showing:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) All bugs can be found automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) No perfect termination checker exists ?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Testing is unnecessary"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Programs always halt"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Undecidability means we cannot have a tool that always correctly determines program termination.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Finite automata are everywhere."
          }), " Lexical analysis in every compiler, grep and regex engines, network intrusion detection, text editors, and protocol verification all rely on finite automata theory. The algorithms are well-understood and efficient."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Compiler design is applied theory of computation."
          }), " A compiler is a direct pipeline through the Chomsky hierarchy: lexer (DFA) ? parser (PDA) ? semantic analysis ? code generation (TM). Each stage uses the appropriate computational model."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Model checking prevents bugs mathematically."
          }), " Instead of testing some inputs, model checking exhaustively verifies all possible executions against a specification. Companies like Amazon, Microsoft, and Intel use model checking for critical system verification."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity theory guides security parameter choices."
          }), " RSA key sizes, hash function output lengths, and encryption algorithm choices are all determined by the best-known algorithms for breaking them. Understanding complexity ensures we stay ahead of attackers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automata theory enables natural language processing."
          }), " Hidden Markov models (HMMs) are essentially probabilistic finite automata. Context-free grammars model syntax in linguistics. Pushdown automata support parsing of programming and natural languages alike."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Static analysis must approximate."
          }), " Because program equivalence is undecidable, all practical static analysis tools must be either incomplete (miss some bugs) or unsound (report false positives). Understanding this trade-off is essential for tool designers and users."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Regex and automata are core security primitives."
          }), " Network IDS/IPS systems like Snort and Suricata compile rules into Aho-Corasick DFA automata for line-rate pattern matching. Every security scanner uses automata theory under the hood."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Grammarware is everywhere."
          }), " From JSON parse rs and SQL interpreters to HTML sanitizers and configuration file readers — any structured data format relies on automata and formal language theory for correct parsing."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-regex-engine-parser-generator-and-model-checker",
      children: "TypeScript Implementation: Regex Engine, Parser Generator, and Model Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Practical Applications of Theory of Computation\n\nclass LexerGenerator {\n  static tokenize(rules: { name: string; pattern: string }[], input: string): { token: string; lexeme: string; pos: number }[] {\n    const tokens: { token: string; lexeme: string; pos: number }[] = [];\n    let pos = 0;\n\n    while (pos < input.length) {\n      let matched = false;\n      for (const rule of rules) {\n        const regex = new RegExp(rule.pattern, \"y\");\n        regex.lastIndex = pos;\n        const match = regex.exec(input);\n        if (match && match.index === pos) {\n          tokens.push({ token: rule.name, lexeme: match[0], pos });\n          pos += match[0].length;\n          matched = true;\n          break;\n        }\n      }\n      if (!matched) {\n        tokens.push({ token: \"ERROR\", lexeme: input[pos], pos });\n        pos++;\n      }\n    }\n    return tokens;\n  }\n}\n\nclass ParserGenerator {\n  static parseLL1(grammar: Map<string, string[][]>, input: string[], start: string): boolean {\n    const stack: string[] = [start, \"$\"];\n    const tokens = [...input, \"$\"];\n    let tokenIdx = 0;\n\n    while (stack.length > 0) {\n      const top = stack.pop()!;\n      const current = tokens[tokenIdx];\n\n      if (top === current) {\n        tokenIdx++;\n      } else if (grammar.has(top)) {\n        const productions = grammar.get(top)!;\n        let matched = false;\n\n        for (const prod of productions) {\n          if (prod.length === 1 && prod[0] === current) {\n            // Push production in reverse\n            for (let i = prod.length - 1; i >= 0; i--) stack.push(prod[i]);\n            matched = true;\n            break;\n          } else if (prod[0] === \"e\") {\n            matched = true;\n            break;\n          }\n        }\n\n        if (!matched) return false;\n      } else {\n        return false;\n      }\n    }\n    return tokenIdx >= tokens.length;\n  }\n}\n\nclass ModelChecker {\n  // Simple CTL model checker for finite state systems\n  static reachableStates(\n    transitions: Map<string, string[]>,\n    start: string,\n    property: (state: string) => boolean\n  ): string[] {\n    const visited = new Set<string>();\n    const queue = [start];\n    const satisfying: string[] = [];\n\n    while (queue.length > 0) {\n      const state = queue.shift()!;\n      if (visited.has(state)) continue;\n      visited.add(state);\n      if (property(state)) satisfying.push(state);\n      for (const next of transitions.get(state) || []) {\n        if (!visited.has(next)) queue.push(next);\n      }\n    }\n    return satisfying;\n  }\n\n  static alwaysEventually(transitions: Map<string, string[]>,\n                           start: string, property: (state: string) => boolean): boolean {\n    // Check if property holds on all paths eventually (AF property)\n    const visited = new Set<string>();\n\n    const dfs = (state: string, depth: number): boolean => {\n      if (property(state)) return true;\n      if (depth > 100 || visited.has(state)) return false;\n      visited.add(state);\n      for (const next of transitions.get(state) || []) {\n        if (dfs(next, depth + 1)) return true;\n      }\n      return false;\n    };\n\n    return dfs(start, 0);\n  }\n}\n\nclass FormalVerification {\n  static hoareTriple(precondition: string, statement: string, postcondition: string): boolean {\n    // Simplified Hoare logic checker for toy language\n    const implies = (a: string, b: string): boolean => {\n      if (a.includes(\"true\")) return true;\n      if (a === b) return true;\n      return false;\n    };\n\n    if (statement.includes(\"=\")) {\n      const [var_, expr] = statement.split(\"=\").map(s => s.trim());\n      const postSub = postcondition.replace(new RegExp(var_, \"g\"), `(${expr})`);\n      return implies(precondition, postSub);\n    }\n    return false;\n  }\n}\n\n// Demo: Tokenizing a small expression\nconst lexerRules = [\n  { name: \"NUMBER\", pattern: \"\\\\d+\" },\n  { name: \"PLUS\", pattern: \"\\\\+\" },\n  { name: \"STAR\", pattern: \"\\\\*\" },\n  { name: \"LPAREN\", pattern: \"\\\\(\" },\n  { name: \"RPAREN\", pattern: \"\\\\)\" },\n  { name: \"WS\", pattern: \"\\\\s+\" },\n];\n\nconsole.log(LexerGenerator.tokenize(lexerRules, \"3 + 5 * (2 + 1)\"));\n\n// Model checking demo\nconst fsm = new Map<string, string[]>([\n  [\"S0\", [\"S1\"]], [\"S1\", [\"S2\"]], [\"S2\", [\"S0\", \"S3\"]], [\"S3\", [\"S3\"]]\n]);\nconst safe = (s: string) => s !== \"S3\";\nconsole.log(ModelChecker.reachableStates(fsm, \"S0\", safe));     // [\"S0\", \"S1\", \"S2\"]\nconsole.log(ModelChecker.alwaysEventually(fsm, \"S0\", safe));    // false (S3 is a sink)\n\n// Hoare logic demo\nconsole.log(FormalVerification.hoareTriple(\"x > 0\", \"x = x + 1\", \"x > 1\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Predictive Parser Generator Helper\n// Builds an LL(1) parsing table from a grammar's\n// FIRST and FOLLOW sets and uses it to parse input.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class PredictiveParserBuilder {\n// Compute FIRST set for each nonterminal\nstatic computeFirst(\nproductions: Array<{ lhs: string; rhs: string[] }>,\nterminals: Set<string>\n): Map<string, Set<string>> {\nconst first = new Map<string, Set<string>>();"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "for (const p of productions) {\n  if (!first.has(p.lhs)) first.set(p.lhs, new Set());\n}\n\n// Initialize terminals\nfor (const t of terminals) first.set(t, new Set([t]));\n\nlet changed = true;\nwhile (changed) {\n  changed = false;\n  for (const p of productions) {\n    const lhsFirst = first.get(p.lhs)!;\n    for (const sym of p.rhs) {\n      const symFirst = first.get(sym);\n      if (!symFirst) continue;\n      const size = lhsFirst.size;\n      for (const s of symFirst) {\n        if (s !== \"e\") lhsFirst.add(s);\n      }\n      if (lhsFirst.size !== size) changed = true;\n      if (!symFirst.has(\"e\")) break;\n    }\n    // All symbols derive e ? lhs gets e\n    if (p.rhs.every(s => first.get(s)?.has(\"e\"))) {\n      if (!lhsFirst.has(\"e\")) { lhsFirst.add(\"e\"); changed = true; }\n    }\n  }\n}\nreturn first;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Compute FOLLOW set for each nonterminal\nstatic computeFollow(\nproductions: Array<{ lhs: string; rhs: string[] }>,\nfirst: Map<string, Set<string>>,\nstartVar: string\n): Map<string, Set<string>> {\nconst follow = new Map<string, Set<string>>();\nfor (const p of productions) {\nif (!follow.has(p.lhs)) follow.set(p.lhs, new Set());\n}\nfollow.get(startVar)!.add(\"$\");"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let changed = true;\nwhile (changed) {\n  changed = false;\n  for (const p of productions) {\n    for (let i = 0; i &lt; p.rhs.length; i++) {\n      const sym = p.rhs[i];\n      if (!follow.has(sym)) continue;\n      const symFollow = follow.get(sym)!;\n      const size = symFollow.size;\n\n      // Check the next symbol(s)\n      let allNull = true;\n      for (let j = i + 1; j &lt; p.rhs.length; j++) {\n        const next = p.rhs[j];\n        const nextFirst = first.get(next);\n        if (!nextFirst) continue;\n        for (const s of nextFirst) {\n          if (s !== \"e\") symFollow.add(s);\n        }\n        if (!nextFirst.has(\"e\")) { allNull = false; break; }\n      }\n\n      // If next symbol is nullable or nothing follows, add follow(LHS)\n      if (allNull || i === p.rhs.length - 1) {\n        const lhsFollow = follow.get(p.lhs);\n        if (lhsFollow) {\n          for (const s of lhsFollow) symFollow.add(s);\n        }\n      }\n\n      if (symFollow.size !== size) changed = true;\n    }\n  }\n}\nreturn follow;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// -----------------------------------------------------\n// Formal Verification Helper — encodes program states\n// as automaton states and checks invariants using\n// model checking primitives.\n// -----------------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class FormalVerificationHelper {\n// Build a Kripke structure and verify AG (always globally) property\nstatic verifyAG(\nstates: string[],\ntransitions: Map<string, string[]>,\nproperty: (s: string) => boolean\n): string[] {\nconst visited = new Set<string>();\nconst queue = [\"s0\"];\nconst bad: string[] = [];"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "while (queue.length > 0) {\n  const s = queue.shift()!;\n  if (visited.has(s)) continue;\n  visited.add(s);\n\n  if (!property(s)) {\n    bad.push(s);\n  }\n\n  for (const next of transitions.get(s) || []) {\n    if (!visited.has(next)) queue.push(next);\n  }\n}\n\nconst output: string[] = [];\noutput.push(`Model Checking: AG(property)`);\noutput.push(`States visited: ${visited.size}`);\nif (bad.length === 0) {\n  output.push(\"? Property holds on all reachable states (AG satisfied).\");\n} else {\n  output.push(`? Property violated at states: ${bad.join(\", \")}`);\n}\nreturn output;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "}\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Demo: LL(1) parsing table for expression grammar\nconst exprProds = [\n{ lhs: \"E\", rhs: [\"T\", \"E'\"] }, { lhs: \"E'\", rhs: [\"+\", \"T\", \"E'\"] },\n{ lhs: \"E'\", rhs: [\"e\"] }, { lhs: \"T\", rhs: [\"F\", \"T'\"] },\n{ lhs: \"T'\", rhs: [\"", (0,jsx_runtime.jsx)(_components.em, {
        children: "\", \"F\", \"T'\"] }, { lhs: \"T'\", rhs: [\"e\"] },\n{ lhs: \"F\", rhs: [\"(\", \"E\", \")\"] }, { lhs: \"F\", rhs: [\"id\"] },\n];\nconst terms = new Set([\"+\", \""
      }), "\", \"(\", \")\", \"id\", \"e\", \"$\"]);"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const first = PredictiveParserBuilder.computeFirst(exprProds, terms);\nconsole.log(\"FIRST sets:\");\nfor (const [nt, set] of first) {\nif (/^[A-Z]/.test(nt)) console.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  FIRST(${nt}) = {${[...set].join(\", \")}}"
      }), ");\n}"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["const follow = PredictiveParserBuilder.computeFollow(exprProds, first, \"E\");\nconsole.log(\"\\nFOLLOW sets:\");\nfor (const [nt, set] of follow) {\nconsole.log(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  FOLLOW(${nt}) = {${[...set].join(\", \")}}"
      }), ");\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Verification demo\nconst kripkeStates = [\"s0\", \"s1\", \"s2\"];\nconst kripkeTrans = new Map([[\"s0\", [\"s1\", \"s2\"]], [\"s1\", [\"s0\"]], [\"s2\", [\"s2\"]]]);\nconst safe = (s: string) => s !== \"s2\";\nconsole.log(\"\\n\" + FormalVerificationHelper.verifyAG(kripkeStates, kripkeTrans, safe).join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// applications\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'applications', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\n- Finite automata power lexical analysis, pattern matching, and network intrusion detection.\n- Context-free grammars and PDAs are the foundation of parsing in compilers.\n- Model checking uses automata theory for automated hardware and software verification.\n- Complexity theory provides the mathematical foundation for cryptography and security.\n- Automata theory is applied in NLP (morphology, POS tagging), bioinformatics (HMMs, RNA folding), and protocol verification.\n- Undecidability results guide the design of practical static analysis tools.\n- Quantum computing challenges the extended Church-Turing thesis.\n- The entire software stack — from compilers to security to AI — builds on automata theory.\n\n## Exercises\n\n### Basic\n\n1. Explain how a lexer uses DFA to tokenize source code.\n2. Describe the difference between LL and LR parsing strategies.\n3. What is the role of the pumping lemma in proving that some languages cannot be parsed with regular expressions?\n4. Give three examples of undecidable problems that affect software engineering.\n5. What is a one-way function and why is it important for cryptography?\n6. Trace the Aho-Corasick automaton on text \"cacache\" with patterns [\"ca\", \"ac\", \"che\"].\n\n### Intermediate\n\n7. Design a lexer DFA that recognizes: identifiers ([a-zA-Z_][a-zA-Z0-9_]*), numbers ([0-9]+), and operators (+, -, *, /), with longest match semantics.\n8. Explain how model checking works for verifying hardware designs. What is the state explosion problem?\n9. Show how the LTL formula G(p ? F q) can be translated into a Büchi automaton.\n10. Explain why static analysis tools cannot be both sound (no false negatives) and complete (no false positives) for non-trivial properties.\n11. Describe how RNA secondary structure prediction uses the CYK algorithm or similar DP methods.\n12. Implement a Viterbi algorithm in TypeScript for a 2-state HMM (rainy/sunny) predicting weather from activity observations.\n13. Show the product construction used in model checking for a simple mutual exclusion protocol with 2 processes.\n\n### Advanced\n\n14. Build a complete lexer and parser (in pseudocode) for a simple expression language using a DFA for tokens and a recursive-descent parser for the CFG. The language should support variables, integers, +, *, parentheses, and assignment.\n15. Prove that the problem of determining whether a C program ever dereferences a null pointer is undecidable (by reduction from the halting problem).\n16. Explain the relationship between P, NP, and the existence of one-way functions. Show that if P = NP, then one-way functions do not exist.\n17. Show how the Aho-Corasick algorithm constructs a finite automaton for multiple pattern matching. What is its complexity?\n18. Write a research summary on the state of quantum computing relative to the Church-Turing thesis, covering BQP, Shor's algorithm, and the limits of quantum speedup.\n19. Implement an LTL model checker for a simple Kripke structure in TypeScript, checking property G(¬critical1 ? ¬critical2).\n\n## Further Reading\n\n- **Aho, Alfred V., Lam, Monica S., Sethi, Ravi, and Ullman, Jeffrey D.** *Compilers: Principles, Techniques, and Tools* (2nd ed.). Chapters 3-4 cover lexer and parser construction using automata theory.\n- **Clarke, Edmund M., Grumberg, Orna, and Peled, Doron A.** *Model Checking*. The standard reference for automata-theoretic model checking in hardware and software verification.\n- **Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D.** *Introduction to Automata Theory, Languages, and Computation* (3rd ed.). Chapter 1 provides an overview of applications of automata theory.\n- **Rabin, Michael O. and Scott, Dana S.** \"Finite Automata and Their Decision Problems.\" IBM Journal of Research, 1959. The foundational paper on finite automata and their applications to decision problems.\n- **Kleene, Stephen C.** \"Representation of Events in Nerve Nets and Finite Automata.\" 1956. The paper that introduced regular expressions and established the connection between automata and formal logic.\n\n"
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