"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[97383],{

/***/ 55420
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_01_introduction_md_216_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-01-introduction-md-216.json
const site_docs_courses_theory_of_computation_01_introduction_md_216_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/01-introduction","title":"Chapter 1: Introduction to the Theory of Computation","description":"Previous Deterministic Finite Automata","source":"@site/docs/courses/theory-of-computation/01-introduction.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation/01-introduction","permalink":"/ai-engineering-journey/theory-of-computation/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/theory-of-computation/01-introduction","title":"Chapter 1: Introduction to the Theory of Computation","sidebar_label":"Chapter 1: Introduction to the Theory of Computation","sidebar_position":1},"sidebar":"course-theory-of-computation","next":{"title":"Chapter 2: Deterministic Finite Automata","permalink":"/ai-engineering-journey/theory-of-computation/02-dfa"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/theory-of-computation/01-introduction',
	title: 'Chapter 1: Introduction to the Theory of Computation',
	sidebar_label: 'Chapter 1: Introduction to the Theory of Computation',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to the Theory of Computation';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Mathematical Preliminaries",
  "id": "mathematical-preliminaries",
  "level": 2
}, {
  "value": "Sets",
  "id": "sets",
  "level": 3
}, {
  "value": "Relations and Functions",
  "id": "relations-and-functions",
  "level": 3
}, {
  "value": "Graphs and Trees",
  "id": "graphs-and-trees",
  "level": 3
}, {
  "value": "Alphabets, Strings, and Languages",
  "id": "alphabets-strings-and-languages",
  "level": 3
}, {
  "value": "The Chomsky Hierarchy",
  "id": "the-chomsky-hierarchy",
  "level": 2
}, {
  "value": "Type 3: Regular Grammars",
  "id": "type-3-regular-grammars",
  "level": 3
}, {
  "value": "Type 2: Context-Free Grammars",
  "id": "type-2-context-free-grammars",
  "level": 3
}, {
  "value": "Type 1: Context-Sensitive Grammars",
  "id": "type-1-context-sensitive-grammars",
  "level": 3
}, {
  "value": "Type 0: Unrestricted Grammars",
  "id": "type-0-unrestricted-grammars",
  "level": 3
}, {
  "value": "Problems as Languages",
  "id": "problems-as-languages",
  "level": 2
}, {
  "value": "Decidability vs. Recognizability",
  "id": "decidability-vs-recognizability",
  "level": 2
}, {
  "value": "Overview of Pillars",
  "id": "overview-of-pillars",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Problem Classification",
  "id": "example-1-problem-classification",
  "level": 3
}, {
  "value": "Example 2: Chomsky Hierarchy Placement",
  "id": "example-2-chomsky-hierarchy-placement",
  "level": 3
}, {
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Cantor&#39;s Diagonalization: Uncountability of Languages",
  "id": "cantors-diagonalization-uncountability-of-languages",
  "level": 2
}, {
  "value": "The Importance of Formal Languages",
  "id": "the-importance-of-formal-languages",
  "level": 2
}, {
  "value": "TypeScript: Simulating a General Language Recognizer",
  "id": "typescript-simulating-a-general-language-recognizer",
  "level": 3
}, {
  "value": "Historical Context and Key Figures",
  "id": "historical-context-and-key-figures",
  "level": 2
}, {
  "value": "Kurt Gödel (1931)",
  "id": "kurt-gödel-1931",
  "level": 3
}, {
  "value": "Alonzo Church (1936)",
  "id": "alonzo-church-1936",
  "level": 3
}, {
  "value": "Alan Turing (1936–1937)",
  "id": "alan-turing-19361937",
  "level": 3
}, {
  "value": "Stephen Kleene (1943–1956)",
  "id": "stephen-kleene-19431956",
  "level": 3
}, {
  "value": "Noam Chomsky (1956)",
  "id": "noam-chomsky-1956",
  "level": 3
}, {
  "value": "The Modern Era",
  "id": "the-modern-era",
  "level": 3
}, {
  "value": "Mermaid: Timeline of Key Contributions",
  "id": "mermaid-timeline-of-key-contributions",
  "level": 3
}, {
  "value": "Philosophical Implications",
  "id": "philosophical-implications",
  "level": 3
}, {
  "value": "TypeScript Implementation: Chomsky Hierarchy Classifier",
  "id": "typescript-implementation-chomsky-hierarchy-classifier",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "chapter-1-introduction-to-the-theory-of-computation",
        children: "Chapter 1: Introduction to the Theory of Computation"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/theory-of-computation/02-dfa",
          children: "Deterministic Finite Automata"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define the basic mathematical objects: alphabets, strings, languages, problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Chomsky hierarchy and the four levels of formal languages."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between decision problems, optimization problems, and function problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the difference between a problem being decidable vs. merely recognizable."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relate automata theory, computability theory, and complexity theory to real computing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mathematical-preliminaries",
      children: "Mathematical Preliminaries"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sets",
      children: "Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set"
      }), " is an unordered collection of distinct elements, written with curly braces."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "A = {0, 1, 2, 3}\nB = {x ? N | x is prime}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Basic set operations include union (?), intersection (n), difference (-), and complement (?). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "power set"
      }), " of A, written ??(A) or 2^A, is the set of all subsets of A."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Set operations in TypeScript\nconst A = new Set([0, 1, 2, 3]);\nconst B = new Set([2, 3, 4, 5]);\nconst union = new Set([...A, ...B]);          // {0,1,2,3,4,5}\nconst intersection = new Set([...A].filter(x => B.has(x))); // {2,3}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cartesian product"
      }), " A × B = {(a,b) | a ? A, b ? B} is the set of all ordered pairs. This is the foundation for transition functions in automata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "relations-and-functions",
      children: "Relations and Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relation"
      }), " R ? A × B is a set of ordered pairs. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function"
      }), " f: A ? B is a relation where each a ? A maps to exactly one b ? B."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "f: N ? N, f(n) = n²  // total function\ng: N ? N, g(n) = 1/n  // partial function (undefined at n=0)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "injective"
      }), " (one-to-one), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "surjective"
      }), " (onto), or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bijective"
      }), " (both). Bijections establish that two sets have the same ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cardinality"
      }), ". Countably infinite sets (N, Q) can be listed; uncountably infinite sets (R, ??(N)) cannot — this distinction drives undecidability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "graphs-and-trees",
      children: "Graphs and Trees"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "directed graph"
      }), " G = (V, E) consists of vertices V and edges E ? V × V. A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tree"
      }), " is a connected acyclic graph. Automata are labeled directed graphs where vertices are states and edges are transitions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    q0((q0)) -->|a| q1((q1))\n    q1 -->|b| q2(((q2)))\n    q2 -->|a| q1\n    q0 -->|b| q0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alphabets-strings-and-languages",
      children: "Alphabets, Strings, and Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "alphabet"
      }), " S is a finite non-empty set of symbols. Examples:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "S1 = {0, 1}              // binary alphabet\nS2 = {a, b, c, …, z}     // lowercase letters\nS3 = {0, 1, 2, …, 9}     // decimal digits\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "string"
      }), " over S is a finite sequence of symbols from S. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "empty string"
      }), " is denoted e (or ?). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "length"
      }), " of string w is written |w|, with |e| = 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The set of all strings over S of length k is S^k. The set of all strings over S is S^*. Formally:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "S^* = ?_{k = 0} S^k\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "language"
      }), " L over S is any subset of S^", (0,jsx_runtime.jsx)(_components.em, {
        children: ". That is, L ? S^"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "L1 = {e, 0, 1, 00, 01, 10, 11, …}  = S^*    (all binary strings)\nL2 = {0^n 1^n | n = 0}                    (balanced parentheses)\nL3 = {w ? {a,b}^* | w has equal a's and b's}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Representing languages as string predicates\ntype Language = (w: string) => boolean;\n\nconst allBinaryStrings: Language = (w) =>\n  [...w].every(c => c === '0' || c === '1');\n\nconst balanced01: Language = (w) => {\n  const n = w.length;\n  if (n % 2 !== 0) return false;\n  const half = n / 2;\n  return w.slice(0, half) === '0'.repeat(half) &&\n         w.slice(half) === '1'.repeat(half);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-chomsky-hierarchy",
      children: "The Chomsky Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Noam Chomsky (1956) proposed a hierarchy of formal grammars that organizes languages by the complexity of their generation rules. Each level corresponds to a class of automaton that can recognize it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph BT\n    subgraph Type-0\n    RE[\"Recursively Enumerable<br/>(Turing Machine)\"]\n    end\n    subgraph Type-1\n    CS[\"Context-Sensitive<br/>(LBA)\"]\n    end\n    subgraph Type-2\n    CF[\"Context-Free<br/>(Pushdown Automaton)\"]\n    end\n    subgraph Type-3\n    REG[\"Regular<br/>(Finite Automaton)\"]\n    end\n    REG --> CF --> CS --> RE\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Grammar"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Automaton"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Production Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Language"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? aB, A ? a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{a^n b^m}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Free"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pushdown Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A ? a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{a^n b^n}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Sensitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Bounded Automaton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aAß ? a?ß"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{a^n b^n c^n}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrestricted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turing Machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a ? ß"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "{a^n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-3-regular-grammars",
      children: "Type 3: Regular Grammars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Productions are of the form A ? aB or A ? a where A, B are non-terminals and a is a terminal. These generate exactly the regular languages recognized by finite automata."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "S ? aS | bS | e    // all strings over {a, b}\nS ? aA | bA, A ? a | b    // strings of length 1 or more\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-2-context-free-grammars",
      children: "Type 2: Context-Free Grammars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Productions are of the form A ? ? where ? is any string of terminals and non-terminals. Context-free grammars generate languages recognized by pushdown automata."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "S ? aSb | e    // {a^n b^n | n = 0}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-1-context-sensitive-grammars",
      children: "Type 1: Context-Sensitive Grammars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Productions have the form aAß ? a?ß where ? ? e. A non-terminal A can be replaced only in the context of its surrounding strings a and ß. These correspond to linear bounded automata."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "S ? aSBC | aBC\nCB ? BC\naB ? ab\nbB ? bb\nbC ? bc\ncC ? cc    // {a^n b^n c^n | n = 1}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "type-0-unrestricted-grammars",
      children: "Type 0: Unrestricted Grammars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Productions have the form a ? ß where |a| = |ß|. No restrictions. These correspond exactly to Turing machines in generative power."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "problems-as-languages",
      children: "Problems as Languages"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decision problem"
      }), " asks whether a given input satisfies a property. Every decision problem corresponds to a language: the set of strings that encode \"yes\" instances."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "PRIME = { binary representations of prime numbers }\nHALT = { descriptions of programs that halt on their own input }\nSAT = { Boolean formulas that have a satisfying assignment }\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optimization problem"
      }), " asks for the best solution among many. These can often be reformulated as repeated decision problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "TSP-OPT: Given cities and distances, find the shortest tour.\nTSP-DEC: Given cities, distances, and bound k, is there a tour = k?\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function problem"
      }), " asks for a specific output value relative to the input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "MULT: Given (x, y), compute x × y.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Encoding problems as languages\nfunction encodeBinary(n: number): string {\n  return n.toString(2);\n}\n\nfunction isPrime(n: number): boolean {\n  if (n < 2) return false;\n  for (let i = 2; i * i <= n; i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\n\nconst PRIME_Language: Language = (w) => {\n  const n = parseInt(w, 2);\n  return !isNaN(n) && isPrime(n);\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decidability-vs-recognizability",
      children: "Decidability vs. Recognizability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language L is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decidable"
      }), " (or recursive) if there exists an algorithm that, for every input w, correctly determines whether w ? L in finite time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A language L is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recognizable"
      }), " (or recursively enumerable) if there exists an algorithm that halts and accepts for every w ? L, but may run forever for w ? L."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph TD\n    subgraph \"All languages (uncountable)\"\n        RE[\"Recursively Enumerable<br/>(recognizable)\"]\n        subgraph REC[\"Decidable (recursive)\"]\n            REG[\"Regular\"]\n            CFL[\"Context-Free\"]\n        end\n    end\n    NOTRE[\"Not RE<br/>(not recognizable)\"]\n    RE --> NOTRE\n    style NOTRE fill:#f99,color:#000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every decidable language is recognizable, but not vice versa. The halting problem is the canonical example of a recognizable but undecidable language."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Simulating a recognizer that may not halt\nfunction recognizerForHalting(program: string, input: string): string {\n  // This function cannot exist — proven by diagonalization\n  // Placeholder: the concept of recognizability\n  return \"A recognizer halts and accepts for yes-instances, \" +\n         \"but may loop on no-instances.\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-of-pillars",
      children: "Overview of Pillars"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Theory of Computation rests on three pillars:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Automata Theory"
          }), " — finite and infinite-state machines that model computation. Covers DFA, NFA, PDA, Turing machines, and their language classes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Computability Theory"
          }), " — what can and cannot be computed. Explores the halting problem, reductions, and the limits of algorithmic solvability."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity Theory"
          }), " — how efficiently problems can be solved. Studies time and space bounds, the P vs NP question, and classification of problems by difficulty."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "graph LR\n    subgraph \"Automata Theory\"\n        DFA --> NFA --> REGEX[\"Regex\"]\n        CFG --> PDA\n        TM\n    end\n    subgraph \"Computability Theory\"\n        DEC[\"Decidable Problems\"]\n        UND[\"Undecidable Problems\"]\n        RED[\"Reductions\"]\n    end\n    subgraph \"Complexity Theory\"\n        P\n        NP\n        PSPACE\n        EXP\n    end\n    TM --> DEC --> UND\n    DEC --> P\n    UND --> RED\n    P --> NP --> PSPACE --> EXP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-problem-classification",
      children: "Example 1: Problem Classification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classify each problem as decision, optimization, or function:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Is graph G connected?\" — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision"
        }), " (yes/no answer)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Find the shortest path from s to t.\" — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Optimization"
        }), " (best among many)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Multiply two matrices.\" — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Function"
        }), " (compute output)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\"Does program P halt on input x?\" — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision"
        }), " (yes/no, also undecidable)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-chomsky-hierarchy-placement",
      children: "Example 2: Chomsky Hierarchy Placement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Place each language in the Chomsky hierarchy:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Grammar Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Justification"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{0^n 1^m}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regular (Type 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be recognized by DFA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{0^n 1^n}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Free (Type 2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires counting, PDA suffices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{0^n 1^n 0^n}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context-Sensitive (Type 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two counters, context needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "{0^p"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p is prime}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unrestricted (Type 0)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Every yes/no problem is a language."
          }), " This encoding insight lets us apply automata theory to any computational problem."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The Chomsky hierarchy gives a complexity roadmap."
          }), " When designing a parser or recognizer, choose the weakest grammar class that can express your language — regular for tokenization, context-free for syntax, context-sensitive for semantic analysis."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Not all problems are solvable."
          }), " Recognizing undecidability early saves engineering effort. If your problem can encode the halting problem, it has no general algorithmic solution."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "P vs NP affects real systems."
          }), " NP-complete problems (SAT, TSP, knapsack) appear constantly in scheduling, optimization, and verification. Understanding their nature helps choose between exact algorithms, heuristics, and approximation schemes."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cantors-diagonalization-uncountability-of-languages",
      children: "Cantor's Diagonalization: Uncountability of Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A foundational result that drives undecidability is that the set of all languages over an alphabet is uncountable, while the set of all Turing machines is countable."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Demonstrating countable vs uncountable infinities\nfunction cantorDiagonalization(): void {\n  // Enumerate all possible binary strings (countable)\n  function* enumerateBinaryStrings(): Generator<string> {\n    yield \"e\";\n    for (let len = 1; len < 10; len++) {\n      for (let i = 0; i < (1 << len); i++) {\n        let s = \"\";\n        for (let j = len - 1; j >= 0; j--) {\n          s += (i & (1 << j)) ? \"1\" : \"0\";\n        }\n        yield s;\n      }\n    }\n  }\n\n  // Suppose we had a list of all languages (each language is a boolean\n  // function over strings). We construct a new language not in the list.\n  const languages: Array<(s: string) => boolean> = [\n    (s: string) => s.length % 2 === 0,\n    (s: string) => s.startsWith(\"0\"),\n    (s: string) => s.includes(\"01\"),\n    (s: string) => /^10*1$/.test(s),\n  ];\n\n  // Diagonalization: flip the diagonal\n  const diagonalLanguage = (w: string): boolean => {\n    const idx = [...enumerateBinaryStrings()].indexOf(w);\n    if (idx >= 0 && idx < languages.length) {\n      return !languages[idx](w);\n    }\n    return false;\n  };\n\n  // diagonalLanguage differs from every language in the list\n  // at the corresponding diagonal position — exactly Cantor's proof.\n  console.log(\"Diagonal language constructed — not in the original list.\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This same diagonalization technique is used to prove the halting problem undecidable (Chapter 11)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "the-importance-of-formal-languages",
      children: "The Importance of Formal Languages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Formal language theory is not merely an abstract mathematical exercise — it has profound practical implications for computing:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Specification:"
          }), " Formal languages give us precise, unambiguous ways to specify syntax (e.g., programming language grammars, protocol messages)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Recognition:"
          }), " Automata give us efficient algorithms to determine whether a string belongs to a language (e.g., parsing source code, validating input)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Limits:"
          }), " Understanding what cannot be computed or recognized saves enormous wasted effort. The undecidability of the halting problem, for instance, means we know that fully automated program verification is impossible."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity classification:"
          }), " Knowing whether a problem is in P, NP-complete, or PSPACE-complete guides algorithm design and tells us whether to seek exact solutions or heuristics."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-simulating-a-general-language-recognizer",
      children: "TypeScript: Simulating a General Language Recognizer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type LanguageClassifier = {\n  name: string;\n  chomskyType: 0 | 1 | 2 | 3;\n  automatonType: string;\n  recognize: (w: string) => boolean | null;\n};\n\nfunction classifyLanguage(\n  input: string,\n  alphabets: Set<string>\n): LanguageClassifier | null {\n  const classifiers: LanguageClassifier[] = [\n    {\n      name: \"All strings with even length\",\n      chomskyType: 3,\n      automatonType: \"DFA\",\n      recognize: (w) => w.length % 2 === 0,\n    },\n    {\n      name: \"Balanced parentheses (limited depth)\",\n      chomskyType: 2,\n      automatonType: \"PDA\",\n      recognize: (w) => {\n        let depth = 0;\n        for (const c of w) {\n          if (c === \"(\") depth++;\n          else if (c === \")\") depth--;\n          if (depth < 0) return false;\n        }\n        return depth === 0;\n      },\n    },\n    {\n      name: \"Equal number of a's, b's, and c's\",\n      chomskyType: 1,\n      automatonType: \"LBA\",\n      recognize: (w) => {\n        const counts = { a: 0, b: 0, c: 0 };\n        for (const c of w) {\n          if (!alphabets.has(c)) return false;\n          if (c in counts) counts[c as keyof typeof counts]++;\n        }\n        return counts.a === counts.b && counts.b === counts.c;\n      },\n    },\n  ];\n\n  for (const cl of classifiers) {\n    if (cl.recognize(input)) return cl;\n  }\n  return null;\n}\n\nconsole.log(classifyLanguage(\"aabbcc\", new Set([\"a\", \"b\", \"c\"])));\n// LBA — equal counts of all three\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context-and-key-figures",
      children: "Historical Context and Key Figures"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Theory of Computation emerged from a remarkable confluence of intellectual breakthroughs in the 1930s:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kurt-gödel-1931",
      children: "Kurt Gödel (1931)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gödel's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Incompleteness Theorems"
      }), " showed that any sufficiently powerful formal system contains statements that can neither be proved nor disproved within the system. This shattered Hilbert's dream of a complete, consistent axiomatization of all mathematics and laid the groundwork for undecidability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alonzo-church-1936",
      children: "Alonzo Church (1936)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Church introduced the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lambda calculus"
      }), " as a formal model of computation and proved that there is no algorithmic procedure to determine whether two lambda expressions are equivalent (the Church-Turing theorem). He also formulated the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Church-Turing thesis"
      }), ": any function computable by an effective procedure is computable by a Turing machine."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alan-turing-19361937",
      children: "Alan Turing (1936–1937)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Turing's seminal paper \"On Computable Numbers, with an Application to the Entscheidungsproblem\" introduced the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Turing machine"
      }), " as a model of computation. He proved the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undecidability of the halting problem"
      }), " using a diagonalization argument. Turing also introduced the concept of a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "universal Turing machine"
      }), " — a single machine that can simulate any other Turing machine, which is the theoretical foundation of the stored-program computer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stephen-kleene-19431956",
      children: "Stephen Kleene (1943–1956)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Kleene developed ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recursive function theory"
      }), ", formalized ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "regular expressions"
      }), " as a notation for regular languages, and proved Kleene's theorem establishing the equivalence of regular expressions and finite automata."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "noam-chomsky-1956",
      children: "Noam Chomsky (1956)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chomsky introduced the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Chomsky hierarchy"
      }), " in his work on formal grammars, connecting linguistics to automata theory. His classification system remains the foundational taxonomy of formal language theory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-modern-era",
      children: "The Modern Era"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1960s–70s:"
        }), " Cook, Karp, and Levin develop NP-completeness theory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1970s–80s:"
        }), " Hartmanis, Stearns, and others develop computational complexity theory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "1990s–2000s:"
        }), " Interactive proofs (Goldwasser, Micali, Rackoff), PCP theorem, quantum computation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "2010s–present:"
        }), " Deep learning, LLMs, and the renewed philosophical debate about what constitutes \"understanding\" in computation — echoing Turing's original questions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-timeline-of-key-contributions",
      children: "Mermaid: Timeline of Key Contributions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "timeline\n    title Milestones in the Theory of Computation\n    1931 : Gödel's Incompleteness Theorems\n    1936 : Church's lambda calculus\n         : Turing's machine & undecidability\n    1937 : Turing's \"On Computable Numbers\"\n    1943 : Kleene's recursive functions\n    1956 : Chomsky hierarchy\n    1959 : Rabin & Scott: finite automata\n    1965 : Hartmanis & Stearns: complexity\n    1971 : Cook-Levin: NP-completeness\n    1985 : Goldwasser et al.: interactive proofs\n    1994 : Shor's quantum factoring algorithm\n    2000s : PCP theorem, derandomization\n    2020s : AI & the nature of computation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "philosophical-implications",
      children: "Philosophical Implications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The theory of computation forces us to confront deep questions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is computation?"
        }), " Is it a physical process, a mathematical abstraction, or both?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is knowledge?"
        }), " The existence of undecidable problems means there are well-posed yes/no questions that no computer can answer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is the human mind a computer?"
        }), " This question, at the heart of the philosophy of AI, remains unresolved. Gödel's theorems have been used (controversially) to argue that human mathematical intuition transcends formal computation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// The Entscheidungsproblem in TypeScript form\n// Can we write a program that decides whether\n// an arbitrary program halts on an arbitrary input?\nfunction haltingDetector(program: string, input: string): boolean {\n  // Hypothetical — this cannot exist\n  throw new Error(\"This function is provably unimplementable\");\n  // See Chapter 11 for the proof\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementation-chomsky-hierarchy-classifier",
      children: "TypeScript Implementation: Chomsky Hierarchy Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chomsky Hierarchy Language Classifier\n// Determines which level of the Chomsky hierarchy a grammar belongs to\n\ntype Production = { lhs: string; rhs: string };\n\nenum ChomskyType {\n  Type0 = \"Type-0 (Recursively Enumerable)\",\n  Type1 = \"Type-1 (Context-Sensitive)\",\n  Type2 = \"Type-2 (Context-Free)\",\n  Type3 = \"Type-3 (Regular)\"\n}\n\nfunction classifyChomsky(productions: Production[]): ChomskyType {\n  let isRegular = true;\n  let isContextFree = true;\n  let isContextSensitive = true;\n\n  for (const p of productions) {\n    // Type-3 (Regular): A ? aB or A ? a (RHS patterns)\n    // A must be single nonterminal, RHS must be terminal or terminal+nonterminal\n    // Skip e-productions for simplicity\n    const lhsOk = /^[A-Z]$/.test(p.lhs);\n    const rhsIsTerminal = /^[a-z]$/.test(p.rhs);\n    const rhsIsTerminalNonterminal = /^[a-z][A-Z]$/.test(p.rhs);\n    const rhsLeftRegular = /^[A-Z][a-z]$/.test(p.rhs);\n    if (!(lhsOk && (rhsIsTerminal || rhsIsTerminalNonterminal || rhsLeftRegular || p.rhs === \"e\"))) {\n      isRegular = false;\n    }\n\n    // Type-2 (CFG): A ? ? where A is single nonterminal\n    if (!/^[A-Z]$/.test(p.lhs)) {\n      isContextFree = false;\n    }\n\n    // Type-1 (CSG): aAß ? a?ß with |?| = 1 (non-decreasing)\n    // or S ? e allowed at start\n    if (p.lhs.length > p.rhs.length && p.rhs !== \"e\") {\n      isContextSensitive = false;\n    }\n  }\n\n  if (isRegular) return ChomskyType.Type3;\n  if (isContextFree) return ChomskyType.Type2;\n  if (isContextSensitive) return ChomskyType.Type1;\n  return ChomskyType.Type0;\n}\n\nclass AlphabetValidator {\n  static isValidAlphabet(symbols: string[]): boolean {\n    const seen = new Set<string>();\n    for (const s of symbols) {\n      if (s.length !== 1) return false;\n      if (seen.has(s)) return false;\n      seen.add(s);\n    }\n    return seen.size > 0;\n  }\n\n  static isStringOverAlphabet(str: string, alphabet: string[]): boolean {\n    const alphabetSet = new Set(alphabet);\n    for (const ch of str) if (!alphabetSet.has(ch)) return false;\n    return true;\n  }\n\n  static classifyLanguage(name: string, grammar: Production[]): string {\n    const type = classifyChomsky(grammar);\n    return `Language \"${name}\" is classified as ${type}`;\n  }\n}\n\n// Examples\nconst regularGrammar: Production[] = [\n  { lhs: \"S\", rhs: \"aA\" }, { lhs: \"A\", rhs: \"bS\" },\n  { lhs: \"S\", rhs: \"e\" }\n];\n\nconst cfgGrammar: Production[] = [\n  { lhs: \"S\", rhs: \"aSb\" }, { lhs: \"S\", rhs: \"e\" }\n];\n\nconst csGrammar: Production[] = [\n  { lhs: \"S\", rhs: \"aBC\" }, { lhs: \"aS\", rhs: \"aSB\" },\n  { lhs: \"CB\", rhs: \"BC\" }, { lhs: \"B\", rhs: \"b\" }\n];\n\nconsole.log(classifyChomsky(regularGrammar));  // Type-3\nconsole.log(classifyChomsky(cfgGrammar));       // Type-2\nconsole.log(classifyChomsky(csGrammar));        // Type-1 or Type-0\n\nconst lang = new Set<string>();\nfunction generateStrings(type: ChomskyType, limit: number): string[] {\n  const result: string[] = [];\n  if (type === ChomskyType.Type3) {\n    for (let i = 0; i < limit; i++) result.push(\"a\".repeat(i));\n  } else if (type === ChomskyType.Type2) {\n    for (let i = 0; i < limit; i++) result.push(\"a\".repeat(i) + \"b\".repeat(i));\n  }\n  return result;\n}\nconsole.log(generateStrings(ChomskyType.Type3, 5));     // [\"\", \"a\", \"aa\", \"aaa\", \"aaaa\"]\nconsole.log(generateStrings(ChomskyType.Type2, 4));     // [\"\", \"ab\", \"aabb\", \"aaabbb\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// ----------------------------------------------\n// Formal Language Type Checker — validates that\n// a given grammar belongs to the claimed type\n// in the Chomsky hierarchy.\n// ----------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "type Production = { lhs: string; rhs: string };\ntype LanguageType = 0 | 1 | 2 | 3;"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class LanguageTypeChecker {\nprivate productions: Production[];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(productions: Production[]) {\nthis.productions = productions;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if grammar satisfies Type-3 (regular) constraints:\n// All productions must be of form A ? aB or A ? a (right-linear)\n// or A ? Ba or A ? a (left-linear), and mix is forbidden.\nisRegular(): boolean {\nconst rightLinear = this.productions.every(\np => /^[A-Z]$/.test(p.lhs) &&\n(p.rhs.length === 1 && /^[a-z]$/.test(p.rhs) ||\np.rhs.length === 2 && /^[a-z][A-Z]$/.test(p.rhs))\n);\nconst leftLinear = this.productions.every(\np => /^[A-Z]$/.test(p.lhs) &&\n(p.rhs.length === 1 && /^[a-z]$/.test(p.rhs) ||\np.rhs.length === 2 && /^[A-Z][a-z]$/.test(p.rhs))\n);\nreturn rightLinear || leftLinear;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if grammar satisfies Type-2 (context-free) constraints:\n// LHS must be a single nonterminal.\nisContextFree(): boolean {\nreturn this.productions.every(p => /^[A-Z]$/.test(p.lhs));\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if grammar satisfies Type-1 (context-sensitive) constraints:\n// RHS length = LHS length (non-contracting), and LHS may have context.\n// For simplicity, we check |lhs| = |rhs|.\nisContextSensitive(): boolean {\nreturn this.productions.every(p => p.lhs.length <= p.rhs.length);\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Check if grammar satisfies Type-0 (unrestricted):\n// No constraints — any production form is allowed.\nisUnrestricted(): boolean {\nreturn true;\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Infer the strictest type this grammar belongs to.\ninferType(): LanguageType {\nif (this.isRegular()) return 3;\nif (this.isContextFree()) return 2;\nif (this.isContextSensitive()) return 1;\nreturn 0;\n}"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["// Report the classification with explanation.\nclassify(name: string): string[] {\nconst output: string[] = [];\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "Grammar: ${name}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Regular (Type-3): ${this.isRegular()}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Context-Free (Type-2): ${this.isContextFree()}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Context-Sensitive (Type-1): ${this.isContextSensitive()}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Unrestricted (Type-0): ${this.isUnrestricted()}"
      }), ");\noutput.push(", (0,jsx_runtime.jsx)(_components.code, {
        children: "  Inferred type: Type-${this.inferType()}"
      }), ");\nreturn output;\n}\n}"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// ----------------------------------------------\n// Chomsky Hierarchy Visualizer — generates a\n// textual representation of the hierarchy.\n// ----------------------------------------------"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "class ChomskyHierarchyRenderer {\nstatic render(): string[] {\nreturn [\n\"+------------------------------------------+\",\n\"¦     Chomsky Hierarchy (Classification)  ¦\",\n\"¦------------------------------------------¦\",\n\"¦  Type-0: Unrestricted                    ¦\",\n\"¦    ? Recursively enumerable languages    ¦\",\n\"¦    ? Recognized by Turing machines       ¦\",\n\"¦         ?                                ¦\",\n\"¦  Type-1: Context-Sensitive               ¦\",\n\"¦    ? Recognized by LBA                   ¦\",\n\"¦    ? A context ? B context substitutions ¦\",\n\"¦         ?                                ¦\",\n\"¦  Type-2: Context-Free                    ¦\",\n\"¦    ? Recognized by PDA                   ¦\",\n\"¦    ? A ? a (single nonterminal LHS)      ¦\",\n\"¦         ?                                ¦\",\n\"¦  Type-3: Regular                         ¦\",\n\"¦    ? Recognized by DFA / NFA             ¦\",\n\"¦    ? A ? aB | a (right-linear)           ¦\",\n\"+------------------------------------------+\"\n];\n}\n}"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// Demo\nconst rg = [\n{ lhs: \"S\", rhs: \"aA\" }, { lhs: \"A\", rhs: \"bS\" }, { lhs: \"A\", rhs: \"b\" }\n];\nconst cf = [\n{ lhs: \"S\", rhs: \"aSb\" }, { lhs: \"S\", rhs: \"ab\" }\n];\nconst cs = [\n{ lhs: \"aS\", rhs: \"aBC\" }, { lhs: \"CB\", rhs: \"BC\" }\n];"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "console.log(new LanguageTypeChecker(rg).classify(\"Regular Grammar (right-linear)\").join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(new LanguageTypeChecker(cf).classify(\"Context-Free Grammar\").join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(new LanguageTypeChecker(cs).classify(\"Context-Sensitive Grammar\").join(\"\\n\"));\nconsole.log(\"\");\nconsole.log(ChomskyHierarchyRenderer.render().join(\"\\n\"));"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n\n// introduction\n// automata-complexity implementation\n\ninterface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\n  private tasks: Task[] = []\n  private maxConcurrency: number\n  constructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\n  async add(task: Omit<Task, \"status\">): Promise<void> {\n    this.tasks.push({ ...task, status: \"pending\" })\n  }\n  async runAll(): Promise<void> {\n    const running: Promise<void>[] = []\n    for (const t of this.tasks) {\n      if (running.length >= this.maxConcurrency) { await Promise.race(running) }\n      const p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\n      running.push(p)\n    }\n    await Promise.all(running)\n  }\n  private async execute(t: Task): Promise<void> {\n    t.status = \"running\"\n    await new Promise(r => setTimeout(r, 10))\n    t.status = \"done\"\n  }\n  getResults(): Task[] { return this.tasks }\n  getStats(): { done: number; pending: number; running: number } {\n    const done = this.tasks.filter(t => t.status === \"done\").length\n    const pending = this.tasks.filter(t => t.status === \"pending\").length\n    const running = this.tasks.filter(t => t.status === \"running\").length\n    return { done, pending, running }\n  }\n}\nasync function main() {\n  const proc = new Processor(2)\n  await proc.add({ id: '1', name: 'introduction', data: { topic: 'automata-complexity' } })\n  await proc.runAll()\n  console.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }\n## Summary\n\nThe Theory of Computation provides the mathematical foundations for understanding what computers can and cannot do. Key concepts include:\n\n- **Alphabets, strings, and languages** form the basic vocabulary\n- **The Chomsky hierarchy** classifies languages by generative complexity\n- **Decision problems** are equivalent to language membership\n- **Decidability** separates solvable from unsolvable problems\n- **Three pillars** — automata, computability, complexity — build on each other\n\n## Chapter Quiz\n\n1. Which of the following is NOT a valid alphabet?\n   - a) {0, 1}\n   - b) {a, b, c}\n   - c) {e, 0, 1} (e is a string, not a symbol)\n   - d) {0, 1, 2}\n\n2. A context-free grammar corresponds to which automaton?\n   - a) Finite automaton\n   - b) Pushdown automaton\n   - c) Linear bounded automaton\n   - d) Turing machine\n\n3. The set of all strings over alphabet S is denoted:\n   - a) S^+\n   - b) S^*\n   - c) ??(S)\n   - d) S^8\n\n4. Which of the following is true about decidable languages?\n   - a) Every recognizable language is decidable\n   - b) Every decidable language is recognizable\n   - c) Decidable languages are always finite\n   - d) Decidable languages cannot be recognized by a Turing machine\n\n5. The language {a^n b^n c^n} belongs to which Chomsky type?\n   - a) Type 3 (regular)\n   - b) Type 2 (context-free)\n   - c) Type 1 (context-sensitive)\n   - d) Type 0 (unrestricted)\n\n**Answers:** 1-c, 2-b, 3-b, 4-b, 5-c\n\n## Exercises\n\n### Basic\n\n\n1. Write a TypeScript function that checks whether a string belongs to the language L = {w ? {0,1}* | w starts with 0 and ends with 1}.\n\n2. For each of the following strings over S = {a, b}, determine the length: e, a, abba, aaaaa.\n\n3. List all strings in {0,1}^3 (strings of length 3 over binary alphabet).\n\n4. Give three examples of decision problems encountered in everyday computing.\n\n### Intermediate\n\n\n5. Prove that the set of all binary strings that are palindromes is a language. Write a TypeScript recognizer for it.\n\n6. For each language below, determine its Chomsky type and justify your answer:\n   - L1 = {ww^R | w ? {a,b}*}\n   - L2 = {a^n b^m | n, m = 0}\n   - L3 = {a^n b^n c^n d^n | n = 1}\n\n7. Show that the set of all languages over S is uncountable, while the set of all Turing machines is countable. Conclude there exist unrecognizable languages.\n\n8. Represent the SAT problem as a language encoding. What symbols would your alphabet need?\n\n### Advanced\n\n\n9. Prove that if a language L is decidable, then its complement L¯ is also decidable. What happens if L is only recognizable?\n\n10. Research the concept of oracle machines. Explain how they enable relative computability and why they are used in the study of the Turing degrees.\n\n11. Write a TypeScript program that enumerates all binary strings of length = 4 and classifies each as belonging to language L = { w | w contains the substring \"01\" }.\n\n12. Show that there are languages that are not recursively enumerable by using a counting argument between the set of all TMs (countable) and the set of all languages (uncountable).\n\n13. Design a finite automaton that recognizes binary strings with an even number of 0s and an odd number of 1s. Explain why this language is regular.\n\n14. Consider the language L = { anbncndnen | n = 1 }. Identify its position in the Chomsky hierarchy and justify why it cannot be generated by a context-free grammar.\n\n15. Write a TypeScript function that takes a string w and a fixed alphabet S and determines whether w is a string over S. For S = {0, 1}, classify \"012\", \"\", \"101\", and \"2\".\n\n16. Research the concept of universality in computation. Explain how the universal Turing machine relates to the concept of a general-purpose computer and why this insight is considered one of Turing's greatest contributions.\n\n## Practical Takeaways\n\n1. **Always name your alphabet.** In formal language theory, every problem begins with a clear definition of allowable symbols. The same principle applies in engineering: specify the input domain before designing a solution.\n\n2. **Know where your problem lives in the hierarchy.** Before attempting to solve a problem, determine its position in the Chomsky hierarchy. If your problem requires a context-sensitive language but you're building a regular expression parser, you will fail. This classification saves enormous design effort.\n\n3. **The three pillars structure your education.** Automata theory teaches you to think like a state machine (useful for system design). Computability tells you what problems to avoid wasting time on. Complexity guides algorithm selection.\n\n4. **Decision problems are everywhere.** Every validation check (\"is this email address valid?\", \"does this program halt on input X?\") is a decision problem in disguise. Viewing them through this lens clarifies what you can and cannot automate.\n\n5. **Countability arguments are your intuition.** When evaluating whether a problem might be solvable, ask: \"Is the search space countable?\" If the answer produces a diagonalization argument reminiscent of Cantor, you are likely facing an undecidable problem.\n\n### TypeScript: DFA Runner\n\n```typescript\ninterface DFA {\n  states: Set&lt;string&gt;;\n  alphabet: Set&lt;string&gt;;\n  transition: Map&lt;string, Map<string, string&gt;>;\n  start: string;\n  accept: Set&lt;string&gt;;\n}\n\nfunction runDFA(dfa: DFA, input: string): boolean {\n  let state = dfa.start;\n  for (const symbol of input) {\n    if (!dfa.alphabet.has(symbol)) throw new Error(`Invalid symbol: ${symbol}`);\n    const next = dfa.transition.get(state)?.get(symbol);\n    if (!next) return false;\n    state = next;\n  }\n  return dfa.accept.has(state);\n}\n\n// Example: DFA for binary strings ending in \"01\"\nconst dfa: DFA = {\n  states: new Set([\"q0\", \"q1\", \"q2\"]),\n  alphabet: new Set([\"0\", \"1\"]),\n  transition: new Map([\n    [\"q0\", new Map([[\"0\", \"q1\"], [\"1\", \"q0\"]])],\n    [\"q1\", new Map([[\"0\", \"q1\"], [\"1\", \"q2\"]])],\n    [\"q2\", new Map([[\"0\", \"q1\"], [\"1\", \"q0\"]])],\n  ]),\n  start: \"q0\",\n  accept: new Set([\"q2\"]),\n};\n// console.log(runDFA(dfa, \"101\"));  // false\n// console.log(runDFA(dfa, \"10101\")); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser, Michael."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to the Theory of Computation"
        }), " (3rd ed.). Chapters 0–1 provide an excellent introduction to mathematical preliminaries and the Chomsky hierarchy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hopcroft, John E., Motwani, Rajeev, and Ullman, Jeffrey D."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to Automata Theory, Languages, and Computation"
        }), " (3rd ed.). Chapters 1–2 cover basic concepts and the regular/context-free classification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arora, Sanjeev and Barak, Boaz."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computational Complexity: A Modern Approach"
        }), ". Chapter 1 gives a concise overview of the computational worldview and complexity classification."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lewis, Harry R. and Papadimitriou, Christos H."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Elements of the Theory of Computation"
        }), " (2nd ed.). A rigorous treatment of automata, computability, and complexity fundamentals."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Davis, Martin, Sigal, Ron, and Weyuker, Elaine J."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computability, Complexity, and Languages"
        }), " (2nd ed.). A deeper exploration of the mathematical foundations including recursive function theory and the µ-recursive functions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kozen, Dexter C."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Automata and Computability"
        }), ". A concise and rigorous undergraduate text covering automata theory, computability, and complexity in a unified framework."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Harel, David."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computers Ltd.: What They Really Can't Do"
        }), ". An accessible and entertaining exploration of the limits of computation for a general audience."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chomsky, Noam."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Syntactic Structures"
        }), ". 1957. The book that introduced the Chomsky hierarchy and revolutionized linguistics with formal grammar theory."]
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