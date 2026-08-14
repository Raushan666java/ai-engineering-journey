"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[89141],{

/***/ 96811
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_theory_of_computation_index_md_25d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-theory-of-computation-index-md-25d.json
const site_docs_courses_theory_of_computation_index_md_25d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/theory-of-computation/index","title":"Theory of Computation — Complete Course Textbook","description":"Course Overview","source":"@site/docs/courses/theory-of-computation/index.md","sourceDirName":"courses/theory-of-computation","slug":"/theory-of-computation","permalink":"/ai-engineering-journey/theory-of-computation","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"index","slug":"/theory-of-computation","title":"Theory of Computation — Complete Course Textbook","sidebar_label":"Theory of Computation — Complete Course Textbook","sidebar_position":17},"sidebar":"course-theory-of-computation","previous":{"title":"Chapter 16: Applications of Automata Theory","permalink":"/ai-engineering-journey/theory-of-computation/16-applications"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/theory-of-computation/index.md


const frontMatter = {
	id: 'index',
	slug: '/theory-of-computation',
	title: 'Theory of Computation — Complete Course Textbook',
	sidebar_label: 'Theory of Computation — Complete Course Textbook',
	sidebar_position: 17
};
const contentTitle = 'Theory of Computation — Complete Course Textbook';

const assets = {

};



const toc = [{
  "value": "Course Overview",
  "id": "course-overview",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "How to Use This Textbook",
  "id": "how-to-use-this-textbook",
  "level": 2
}, {
  "value": "Chapter List",
  "id": "chapter-list",
  "level": 2
}, {
  "value": "Part I: Automata and Languages",
  "id": "part-i-automata-and-languages",
  "level": 3
}, {
  "value": "Part II: Computability Theory",
  "id": "part-ii-computability-theory",
  "level": 3
}, {
  "value": "Part III: Complexity Theory",
  "id": "part-iii-complexity-theory",
  "level": 3
}, {
  "value": "Recommended Reading and References",
  "id": "recommended-reading-and-references",
  "level": 2
}, {
  "value": "Notation Conventions Used",
  "id": "notation-conventions-used",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
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
        id: "theory-of-computation--complete-course-textbook",
        children: "Theory of Computation — Complete Course Textbook"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "course-overview",
      children: "Course Overview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Theory of Computation is the branch of computer science that deals with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "what problems can be solved"
      }), " by computational means and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "how efficiently"
      }), " they can be solved. It provides the mathematical foundations for understanding computation itself — its capabilities, its limits, and its costs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This textbook covers three classical pillars of the field:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automata Theory"
        }), " — abstract machines (finite automata, pushdown automata, Turing machines) and the languages they recognize."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Computability Theory"
        }), " — what problems are solvable by algorithms, culminating in the discovery of intrinsically unsolvable problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complexity Theory"
        }), " — how much time and memory are required to solve a problem, leading to the famous P vs NP question."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discrete Mathematics"
        }), ": Sets, functions, relations, graphs, induction proofs, pigeonhole principle."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Basic Proof Techniques"
        }), ": Direct proof, proof by contradiction, proof by induction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mathematical Maturity"
        }), ": Comfort with formal definitions and abstract reasoning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "No programming experience is assumed, though familiarity with recursion and data structures is helpful for later chapters."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "how-to-use-this-textbook",
      children: "How to Use This Textbook"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each chapter is structured as follows:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Learning Objectives"
        }), " — What you should be able to do after studying the chapter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Theory"
        }), " — Formal definitions, theorems, and proofs with intuition."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Examples"
        }), " — Step-by-step worked problems with diagram descriptions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary"
        }), " — Key takeaways for rapid review."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exercises"
        }), " — Tiered practice (Basic / Intermediate / Advanced) for self-study."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-list",
      children: "Chapter List"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-i-automata-and-languages",
      children: "Part I: Automata and Languages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chapter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/01-introduction",
              children: "Introduction to the Theory of Computation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mathematical preliminaries, Chomsky hierarchy, problems, decidability vs recognizability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/02-dfa",
              children: "Deterministic Finite Automata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DFA definition, transition diagrams, language acceptance, DFA design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/03-nfa",
              children: "Nondeterministic Finite Automata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NFA definition, epsilon transitions, subset construction, DFA/NFA equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/04-regex",
              children: "Regular Expressions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Regex operators, precedence, algebraic laws, Arden's lemma, FA equivalence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/05-regular-languages",
              children: "Properties of Regular Languages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping lemma, closure properties, Myhill-Nerode theorem, DFA minimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/06-cfg",
              children: "Context-Free Grammars"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CFG definition, derivations, parse trees, ambiguity, left recursion, left factoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/07-pda",
              children: "Pushdown Automata"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PDA definition, types, CFG/PDA equivalence, design examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ai-engineering-journey/theory-of-computation/08-cfl",
              children: "Properties of Context-Free Languages"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pumping lemma for CFLs, closure, Chomsky/Greibach normal forms, CYK algorithm"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-ii-computability-theory",
      children: "Part II: Computability Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["| # | Chapter | Description |\n|---|---|---|---|\n| 9 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/09-turing",
        children: "Turing Machines"
      }), " | TM definition, design patterns, multitape TMs, nondeterministic TMs |\n| 10 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/10-turing-extensions",
        children: "Turing Machine Extensions and the Church-Turing Thesis"
      }), " | RE vs recursive languages, universal TM, Church-Turing thesis |\n| 11 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/11-decidability",
        children: "Decidability"
      }), " | Decidable vs undecidable problems, the halting problem, reduction technique |\n| 12 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/12-reducibility",
        children: "Reducibility and Advanced Undecidability"
      }), " | Mapping reductions, Rice's theorem, Post's correspondence problem |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "part-iii-complexity-theory",
      children: "Part III: Complexity Theory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["| # | Chapter | Description |\n|---|---|---|---|\n| 13 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/13-time-complexity",
        children: "Time Complexity and NP-Completeness"
      }), " | Time complexity classes P and NP, polynomial reductions, Cook-Levin theorem |\n| 14 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/14-space-complexity",
        children: "Space Complexity"
      }), " | Space complexity classes, PSPACE, Savitch's theorem, PSPACE-completeness |\n| 15 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/15-advanced-complexity",
        children: "Advanced Complexity Topics"
      }), " | L, NL, co-NP, polynomial hierarchy, circuit complexity |\n| 16 | ", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/theory-of-computation/16-applications",
        children: "Applications of Automata Theory"
      }), " | Compilers, formal verification, AI, cryptography, programming languages |"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-reading-and-references",
      children: "Recommended Reading and References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sipser, M."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to the Theory of Computation"
        }), " (3rd ed.) — The standard textbook."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hopcroft, J., Motwani, R., Ullman, J."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Introduction to Automata Theory, Languages, and Computation"
        }), " (3rd ed.) — Encyclopedic reference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kozen, D."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Automata and Computability"
        }), " — Succinct and rigorous."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arora, S. and Barak, B."
        }), " ", (0,jsx_runtime.jsx)(_components.em, {
          children: "Computational Complexity: A Modern Approach"
        }), " — Advanced complexity theory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "notation-conventions-used",
      children: "Notation Conventions Used"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Symbol"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Σ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input alphabet (finite set of symbols)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty string (length 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Q"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "δ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transition function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "q₀"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of accept states"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "L(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Language recognized by machine M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "∪, ∩, −, ¯"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set union, intersection, difference, complement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "⊆"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "∅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ℕ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural numbers {0, 1, 2, ...}"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implies or transition depending on context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "⇒"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derives in one step (grammars)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "⇒*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derives in zero or more steps"
          })]
        })]
      })]
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