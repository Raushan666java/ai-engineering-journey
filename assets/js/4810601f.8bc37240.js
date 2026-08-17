"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61451],{

/***/ 61375
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_01_sets_md_481_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-01-sets-md-481.json
const site_docs_courses_discrete_mathematics_01_sets_md_481_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/01-sets","title":"Chapter 1: Sets","description":"Previous Chapter 2: Logic","source":"@site/docs/courses/discrete-mathematics/01-sets.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/01-sets","permalink":"/ai-engineering-journey/discrete-mathematics/01-sets","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-sets","slug":"/discrete-mathematics/01-sets","title":"Chapter 1: Sets","sidebar_label":"Chapter 1: Sets","sidebar_position":1},"sidebar":"course-discrete-mathematics","next":{"title":"Chapter 2: Logic","permalink":"/ai-engineering-journey/discrete-mathematics/02-logic"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/01-sets.md


const frontMatter = {
	id: '01-sets',
	slug: '/discrete-mathematics/01-sets',
	title: 'Chapter 1: Sets',
	sidebar_label: 'Chapter 1: Sets',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Sets';

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
  "value": "1.1 Definition of a Set",
  "id": "11-definition-of-a-set",
  "level": 3
}, {
  "value": "1.2 Subsets",
  "id": "12-subsets",
  "level": 3
}, {
  "value": "1.3 Cardinality",
  "id": "13-cardinality",
  "level": 3
}, {
  "value": "1.4 Power Set",
  "id": "14-power-set",
  "level": 3
}, {
  "value": "1.5 Set Operations",
  "id": "15-set-operations",
  "level": 3
}, {
  "value": "1.6 Set Identities",
  "id": "16-set-identities",
  "level": 3
}, {
  "value": "1.7 Venn Diagrams",
  "id": "17-venn-diagrams",
  "level": 3
}, {
  "value": "1.8 Cartesian Product",
  "id": "18-cartesian-product",
  "level": 3
}, {
  "value": "1.9 Characteristic Functions",
  "id": "19-characteristic-functions",
  "level": 3
}, {
  "value": "1.10 Multisets (Bags)",
  "id": "110-multisets-bags",
  "level": 3
}, {
  "value": "1.11 Fuzzy Sets",
  "id": "111-fuzzy-sets",
  "level": 3
}, {
  "value": "1.12 Inclusion-Exclusion Principle",
  "id": "112-inclusion-exclusion-principle",
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
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Mermaid: Set Operations",
  "id": "mermaid-set-operations",
  "level": 3
}, {
  "value": "TypeScript Implementations",
  "id": "typescript-implementations",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "1.8 Set Operations in TypeScript",
  "id": "18-set-operations-in-typescript",
  "level": 3
}, {
  "value": "1.9 Set Identities ? Formal Proofs",
  "id": "19-set-identities--formal-proofs",
  "level": 3
}, {
  "value": "1.10 Cardinality and the Power Set",
  "id": "110-cardinality-and-the-power-set",
  "level": 3
}, {
  "value": "1.11 Infinite Sets and Countability",
  "id": "111-infinite-sets-and-countability",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-1-sets",
        children: "Chapter 1: Sets"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/02-logic",
          children: "Chapter 2: Logic"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define sets, elements, and set membership using formal notation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine subsets, proper subsets, and set equality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform set operations: union, intersection, difference, symmetric difference, complement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct and interpret Venn diagrams"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute power sets and cardinalities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work with Cartesian products"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply set identities in proofs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish finite, countable, and uncountable sets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand characteristic functions, multisets, and fuzzy sets"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Definition of a Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A set is an unordered collection of distinct objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use roster or set-builder notation to precisely describe collections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subsets and Set Equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\subseteq B$ means every element of $A$ is in $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving mutual subset inclusion is the standard way to prove set equality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union, intersection, difference, complement combine sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Venn diagrams provide intuition; formal definitions enable rigorous proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{P}(S)$ is the set of all subsets of $S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A set of $n$ elements has $2^n$ subsets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Set Identities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's and distributive laws are foundational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use identity chains to simplify complex set expressions without element arguments"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian Product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\times B$ is the set of all ordered pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for defining relations, functions, and coordinate spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cardinality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finite vs infinite, countable vs uncountable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diagonalization shows $\\mathbb{R}$ is uncountably infinite"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multisets and Fuzzy Sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizations of classical sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world data often needs bag semantics or graded membership"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Definition of a Set] --> B[Subsets and Set Equality]\n    B --> C[Cardinality and Power Set]\n    C --> D[Set Operations]\n    D --> E[Set Identities]\n    E --> F[Venn Diagrams]\n    F --> G[Cartesian Product]\n    G --> H[Characteristic Functions]\n    H --> I[Multisets and Fuzzy Sets]\n    I --> J[Applications and Proofs]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/01-sets.png",
        alt: "Sets Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-definition-of-a-set",
      children: "1.1 Definition of a Set"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "set"
      }), " is an unordered collection of distinct objects, called its ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "elements"
      }), " or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "members"
      }), ". If $x$ is an element of the set $S$, we write $x \\in S$. If $x$ is not an element of $S$, we write $x \\notin S$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A set may be specified by listing its elements in roster notation:\n$$A = {1, 2, 3, 4, 5}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "or by a set-builder (predicate) notation:\n$$B = {x \\mid x \\in \\mathbb{N},; x \\text{ is even},; x \\leq 20}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Standard number sets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{N} = {0, 1, 2, 3, \\ldots}$ ? natural numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{Z} = {\\ldots, -2, -1, 0, 1, 2, \\ldots}$ ? integers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{Q} = {a/b \\mid a, b \\in \\mathbb{Z},; b \\neq 0}$ ? rational numbers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{R}$ ? real numbers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "empty set"
      }), " $\\emptyset$ (or ${}$) contains no elements. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "universal set"
      }), " $U$ is the set of all elements under consideration in a given context."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Set-builder notation patterns:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${x \\in \\mathbb{N} \\mid x < 10}$ ? natural numbers less than 10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${2k \\mid k \\in \\mathbb{Z}}$ ? even integers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${x^2 \\mid x \\in \\mathbb{R}}$ ? nonnegative reals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "${a/b \\in \\mathbb{Q} \\mid a, b \\in \\mathbb{Z},; b \\neq 0}$ ? rationals in lowest terms"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A set is defined solely by its membership ? two sets are equal iff they contain exactly the same elements, regardless of order."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-subsets",
      children: "1.2 Subsets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$A$ is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "subset"
      }), " of $B$, written $A \\subseteq B$, if every element of $A$ is also an element of $B$:\n$$A \\subseteq B \\iff \\forall x,(x \\in A \\implies x \\in B)$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["$A$ is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "proper subset"
      }), " of $B$, written $A \\subset B$, if $A \\subseteq B$ and $A \\neq B$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.1 (Set Equality)."
      }), " $A = B$ if and only if $A \\subseteq B$ and $B \\subseteq A$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.2."
      }), " The empty set is a subset of every set: $\\emptyset \\subseteq S$ for any set $S$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Subset inclusion ($\\subseteq$) is the fundamental ordering relation on sets, and proving $A \\subseteq B$ and $B \\subseteq A$ is how we prove $A = B$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-cardinality",
      children: "1.3 Cardinality"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cardinality"
      }), " of a finite set $S$, denoted $|S|$, is the number of distinct elements in $S$. For example, $|{a, b, c}| = 3$ and $|\\emptyset| = 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Finite vs infinite sets."
      }), " A set is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "finite"
      }), " if its cardinality is a natural number. Otherwise it is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "infinite"
      }), ". $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, and $\\mathbb{R}$ are all infinite, but they have different \"sizes\" of infinity."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Countable sets."
      }), " A set is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "countably infinite"
      }), " if it can be put into a bijection with $\\mathbb{N}$. Examples: $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Uncountable sets."
      }), " A set is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "uncountable"
      }), " if it is infinite but not countable. The real numbers $\\mathbb{R}$ are uncountable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.3 (Cantor's Diagonalization)."
      }), " The set of real numbers $\\mathbb{R}$ is uncountable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof sketch."
      }), " Assume $\\mathbb{R}$ is countable, so we list all reals in $(0,1)$. Construct a number whose $n$-th digit differs from the $n$-th digit of the $n$-th number in the list. This new number is not in the list ? contradiction."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Cardinality measures the size of a set; some infinities are larger than others ? $\\mathbb{R}$ is uncountably infinite while $\\mathbb{Q}$ is countably infinite."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-power-set",
      children: "1.4 Power Set"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "power set"
      }), " of $S$, denoted $\\mathcal{P}(S)$ or $2^S$, is the set of all subsets of $S$:\n$$\\mathcal{P}(S) = {T \\mid T \\subseteq S}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.4."
      }), " If $|S| = n$, then $|\\mathcal{P}(S)| = 2^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Each element of $S$ may either be in a given subset or not ? two choices per element, independently, yielding $2^n$ subsets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A set of size $n$ has $2^n$ subsets ? the power set grows exponentially."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-set-operations",
      children: "1.5 Set Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let $A$ and $B$ be sets."
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union:"
        }), " $A \\cup B = {x \\mid x \\in A \\lor x \\in B}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intersection:"
        }), " $A \\cap B = {x \\mid x \\in A \\land x \\in B}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " $A \\setminus B = {x \\mid x \\in A \\land x \\notin B}$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Symmetric difference:"
        }), " $A \\oplus B = (A \\setminus B) \\cup (B \\setminus A)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complement (relative to $U$):"
        }), " $\\overline{A} = A^c = {x \\in U \\mid x \\notin A}$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Venn diagram for three sets:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "%%{init: {\"flowchart\": {\"htmlLabels\": false}} }%%\ngraph TD\n    subgraph U[Universal Set U]\n        A1((A))\n        B1((B))\n        C1((C))\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-set-identities",
      children: "1.6 Set Identities"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For sets $A, B, C$ under universal set $U$:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Identity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identity laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup \\emptyset = A$, $A \\cap U = A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Domination laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup U = U$, $A \\cap \\emptyset = \\emptyset$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idempotent laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup A = A$, $A \\cap A = A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complement law"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup \\overline{A} = U$, $A \\cap \\overline{A} = \\emptyset$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Double complement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\overline{\\overline{A}} = A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Commutative laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup B = B \\cup A$, $A \\cap B = B \\cap A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Associative laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup (B \\cup C) = (A \\cup B) \\cup C$, $A \\cap (B \\cap C) = (A \\cap B) \\cap C$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Distributive laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$, $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "De Morgan's laws"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$, $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proving set identities."
      }), " Two methods:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Elementwise argument:"
        }), " Show $x$ in LHS $\\iff$ $x$ in RHS by logical reasoning."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identity chain:"
        }), " Reduce one side to the other using known identities."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-venn-diagrams",
      children: "1.7 Venn Diagrams"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Venn diagrams represent sets as overlapping regions in a plane. The universal set $U$ is a rectangle; sets are circles (or ovals) inside it. Shaded regions indicate the result of operations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "%%{init: {\"flowchart\": {\"htmlLabels\": false}} }%%\ngraph TD\n    subgraph \"A ? B (Union)\"\n        direction LR\n        a1((A)) --- b1((B))\n    end\n    subgraph \"A n B (Intersection)\"\n        a2((A)) --- b2((B))\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Venn diagrams provide visual intuition for set relationships but are not substitutes for formal proofs."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-cartesian-product",
      children: "1.8 Cartesian Product"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cartesian product"
      }), " of sets $A$ and $B$, written $A \\times B$, is the set of all ordered pairs $(a, b)$ with $a \\in A$ and $b \\in B$:\n$$A \\times B = {(a, b) \\mid a \\in A,; b \\in B}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.5."
      }), " $|A \\times B| = |A| \\cdot |B|$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The $n$-fold Cartesian product $A_1 \\times A_2 \\times \\cdots \\times A_n$ is the set of all $n$-tuples $(a_1, a_2, \\ldots, a_n)$ with $a_i \\in A_i$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " If $A = {1,2}$ and $B = {x,y}$, then $A \\times B = {(1,x),(1,y),(2,x),(2,y)}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The Cartesian product builds ordered pairs from sets, and its size is the product of the individual set sizes ? the foundation of relations and functions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-characteristic-functions",
      children: "1.9 Characteristic Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "characteristic function"
      }), " (indicator function) of a set $A \\subseteq U$ is:\n$$\\chi_A(x) = \\begin{cases} 1 & \\text{if } x \\in A \\ 0 & \\text{if } x \\notin A \\end{cases}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Characteristic functions connect set operations to Boolean algebra:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\chi_{A \\cap B}(x) = \\chi_A(x) \\land \\chi_B(x)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\chi_{A \\cup B}(x) = \\chi_A(x) \\lor \\chi_B(x)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\chi_{\\overline{A}}(x) = 1 - \\chi_A(x)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function characteristic<T>(set: Set<T>, universal: T[]): number[] {\n  return universal.map(x => set.has(x) ? 1 : 0);\n}\n\nconst A = new Set([1, 3, 5]);\nconst U = [1, 2, 3, 4, 5];\nconsole.log(characteristic(A, U)); // [1, 0, 1, 0, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-multisets-bags",
      children: "1.10 Multisets (Bags)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "multiset"
      }), " allows elements to appear multiple times. The count of element $x$ in multiset $M$ is $m_M(x)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operations on multisets:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Union:"
        }), " $m_{M \\cup N}(x) = \\max(m_M(x), m_N(x))$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intersection:"
        }), " $m_{M \\cap N}(x) = \\min(m_M(x), m_N(x))$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sum:"
        }), " $m_{M + N}(x) = m_M(x) + m_N(x)$"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Difference:"
        }), " $m_{M - N}(x) = \\max(m_M(x) - m_N(x), 0)$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Multiset<T> = Map<T, number>;\n\nfunction add<T>(M: Multiset<T>, N: Multiset<T>): Multiset<T> {\n  const result = new Map(M);\n  for (const [elem, count] of N) {\n    result.set(elem, (result.get(elem) || 0) + count);\n  }\n  return result;\n}\n\nconst bag1: Multiset<string> = new Map([[\"a\", 2], [\"b\", 1]]);\nconst bag2: Multiset<string> = new Map([[\"a\", 1], [\"c\", 3]]);\nconsole.log(Object.fromEntries(add(bag1, bag2))); // {a: 3, b: 1, c: 3}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-fuzzy-sets",
      children: "1.11 Fuzzy Sets"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fuzzy set"
      }), " assigns a membership degree in $[0,1]$ to each element, capturing partial membership:\n$$\\mu_A: U \\to [0,1]$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operations:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mu_{A \\cup B}(x) = \\max(\\mu_A(x), \\mu_B(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mu_{A \\cap B}(x) = \\min(\\mu_A(x), \\mu_B(x))$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mu_{\\overline{A}}(x) = 1 - \\mu_A(x)$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Fuzzy sets generalize classical sets by allowing partial membership values between 0 and 1, useful for handling uncertainty and vagueness."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-inclusion-exclusion-principle",
      children: "1.12 Inclusion-Exclusion Principle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For two sets: $|A \\cup B| = |A| + |B| - |A \\cap B|$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For three sets: $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |A \\cap C| - |B \\cap C| + |A \\cap B \\cap C|$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "General formula:"
      }), "\n$$\\left|\\bigcup_{i=1}^{n} A_i\\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When proving set identities, start with the more complex side and reduce it to the simpler side using known identities ? this is cleaner than elementwise arguments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For finite sets, always use inclusion-exclusion to avoid double-counting when sets overlap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Do not confuse $\\emptyset$ (the empty set, a set with no elements) with ${\\emptyset}$ (a set containing the empty set as an element ? its cardinality is 1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Distinction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset ($\\subseteq$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All elements of $A$ are in $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A$ may equal $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Building hierarchies of sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Proper Subset ($\\subset$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\subseteq B$ and $A \\neq B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict inclusion, $A$ is smaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precluding equality in proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Power Set ($\\mathcal{P}(S)$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of all subsets of $S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains $2^{"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian Product ($\\times$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set of all ordered pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order matters; non-commutative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defining coordinates and relations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union ($\\cup$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements in either set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusive OR logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combining sets without duplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection ($\\cap$)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements in both sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AND logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Finding common elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiset"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements can repeat"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$m(x) > 1$ allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bag semantics, histogram bins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fuzzy Set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Membership in $[0,1]$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial membership"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uncertainty, AI, control systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$x \\in S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$x$ is an element of $S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$2 \\in \\mathbb{N}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\subseteq B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$A$ is a subset of $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1} \\subseteq {1,2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cup B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union of $A$ and $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1,2} \\cup {2,3} = {1,2,3}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\cap B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intersection of $A$ and $B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1,2} \\cap {2,3} = {2}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\setminus B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1,2} \\setminus {2} = {1}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\overline{A}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complement of $A$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$U \\setminus A$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$A \\times B$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cartesian product"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "${1} \\times {a,b} = {(1,a),(1,b)}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{P}(S)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Power set of $S$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\mathcal{P}({a}) = {\\emptyset, {a}}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$\\emptyset$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How Sets Apply"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database Queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQL UNION, INTERSECT, EXCEPT map directly to set operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Probability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sample spaces and events are sets; probability axioms use set operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal languages, type theory, and relational algebra are built on sets"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truth sets of predicates connect logic to set membership"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph Theory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertices and edges are sets; adjacency is a relation (set of ordered pairs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Software Engineering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collections, uniqueness constraints, and access control lists use set semantics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature spaces, categorical encoding, and deduplication use set concepts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If $|A| = 3$ and $|B| = 2$, what is $|A \\times B|$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 5"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 6"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 8"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 9"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $|A \\times B| = |A| \\cdot |B| = 3 \\cdot 2 = 6$"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following is NOT a subset of ${1, 2, 3}$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\emptyset$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) ${1, 2}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ${1, 4}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) ${1, 2, 3}$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $\\{1, 4\\}$ contains 4 which is not an element of $\\{1, 2, 3\\}$"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "$\\overline{A \\cap B}$ is equivalent to:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\overline{A} \\cap \\overline{B}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\overline{A} \\cup \\overline{B}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $A \\cup B$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\overline{A \\cup B}$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** By De Morgan's law, $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which set is countably infinite?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\mathbb{R}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\mathbb{Q}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $(0, 1)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\mathcal{P}(\\mathbb{N})$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $\\mathbb{Q}$ is countably infinite; $\\mathbb{R}$, $(0,1)$, and $\\mathcal{P}(\\mathbb{N})$ are all uncountable."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If $A$ has 4 elements, what is $|\\mathcal{P}(A)|$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 4"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 8"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 16"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 32"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $|\\mathcal{P}(A)| = 2^4 = 16$"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.1"
      }), " (Set notation). Write the set of all positive odd integers less than 20 in roster and set-builder form."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Roster: ${1, 3, 5, 7, 9, 11, 13, 15, 17, 19}$.\nSet-builder: ${x \\in \\mathbb{N} \\mid x < 20 \\land x \\bmod 2 = 1}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.2"
      }), " (Subset verification). Let $A = {1, 2, 3}$, $B = {1, 2, 3, 4, 5}$, $C = {1, 2, 3}$. Then $A \\subseteq B$, $A \\subseteq C$, $C \\subseteq A$, and $A = C$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.3"
      }), " (Set operations). Let $U = {1, 2, 3, 4, 5, 6, 7}$, $A = {1, 2, 3, 4}$, $B = {3, 4, 5, 6}$. Compute:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$A \\cup B = {1, 2, 3, 4, 5, 6}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$A \\cap B = {3, 4}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$A \\setminus B = {1, 2}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$B \\setminus A = {5, 6}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\overline{A} = {5, 6, 7}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.4"
      }), " (Power set). Find $\\mathcal{P}({a, b})$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " The subsets of ${a, b}$ are $\\emptyset$, ${a}$, ${b}$, ${a, b}$. Thus $\\mathcal{P}({a, b}) = {\\emptyset, {a}, {b}, {a, b}}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.5"
      }), " (Cartesian product). Let $A = {1, 2}$, $B = {x, y}$. Then\n$$A \\times B = {(1, x), (1, y), (2, x), (2, y)}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.6"
      }), " (Distributive law proof). Prove $A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Let $x \\in A \\cup (B \\cap C)$. Then $x \\in A$ or $x \\in (B \\cap C)$. If $x \\in A$, then $x \\in A \\cup B$ and $x \\in A \\cup C$, so $x \\in (A \\cup B) \\cap (A \\cup C)$. If $x \\in B \\cap C$, then $x \\in B$ and $x \\in C$, so $x \\in A \\cup B$ and $x \\in A \\cup C$, hence $x \\in (A \\cup B) \\cap (A \\cup C)$. The reverse inclusion is analogous."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.7"
      }), " (Characteristic function in TypeScript). Compute the Jaccard similarity of two sets using characteristic functions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function jaccardSimilarity<T>(A: Set<T>, B: Set<T>): number {\n  const intersection = new Set([...A].filter(x => B.has(x)));\n  const union = new Set([...A, ...B]);\n  return intersection.size / union.size;\n}\n\nconst A = new Set([1, 2, 3, 4]);\nconst B = new Set([3, 4, 5, 6]);\nconsole.log(jaccardSimilarity(A, B)); // 0.333...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.8"
      }), " (Inclusion-exclusion). In a class of 50 students, 30 study math, 25 study physics, and 10 study both. How many study neither?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $|M \\cup P| = |M| + |P| - |M \\cap P| = 30 + 25 - 10 = 45$. So $50 - 45 = 5$ study neither."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mermaid-set-operations",
      children: "Mermaid: Set Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Union\n        A1[\"A\"] --- U1[\"A ? B\"]\n        B1[\"B\"] --- U1\n    end\n    subgraph Intersection\n        A2[\"A\"] --- I2[\"A n B\"]\n        B2[\"B\"] --- I2\n    end\n    subgraph Difference\n        A3[\"A\"] --- D3[\"A - B\"]\n        B3[\"B\"] --- D3\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Power Set Generator ---\nfunction powerSet<T>(set: T[]): T[][] {\n  const result: T[][] = [];\n  for (let i = 0; i < 1 << set.length; i++) {\n    const subset: T[] = [];\n    for (let j = 0; j < set.length; j++) {\n      if (i & (1 << j)) subset.push(set[j]);\n    }\n    result.push(subset);\n  }\n  return result;\n}\nconsole.log(powerSet([1, 2, 3]));\n// [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]\n\n// --- Cartesian Product ---\nfunction cartesianProduct<T, U>(a: T[], b: U[]): [T, U][] {\n  const result: [T, U][] = [];\n  for (const x of a) for (const y of b) result.push([x, y]);\n  return result;\n}\nconsole.log(cartesianProduct([1, 2], ['a', 'b']));\n// [[1,'a'],[1,'b'],[2,'a'],[2,'b']]\n\n// --- Set Operations Calculator ---\nfunction setUnion<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a, ...b]);\n}\nfunction setIntersection<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a].filter(x => b.has(x)));\n}\nfunction setDifference<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a].filter(x => !b.has(x)));\n}\nconst A = new Set([1, 2, 3, 4]);\nconst B = new Set([3, 4, 5, 6]);\nconsole.log('Union:', [...setUnion(A, B)]);          // [1,2,3,4,5,6]\nconsole.log('Intersection:', [...setIntersection(A, B)]); // [3,4]\nconsole.log('Difference A-B:', [...setDifference(A, B)]); // [1,2]\n\n// --- De Morgan's Law Verifier ---\nfunction verifyDeMorgan<T>(universal: Set<T>, a: Set<T>, b: Set<T>): boolean {\n  const complement = (s: Set<T>) => new Set([...universal].filter(x => !s.has(x)));\n  const lhs = complement(setUnion(a, b));\n  const rhs = setIntersection(complement(a), complement(b));\n  return [...lhs].every(x => rhs.has(x)) && lhs.size === rhs.size;\n}\nconst U = new Set([1, 2, 3, 4, 5, 6]);\nconsole.log('De Morgan holds:', verifyDeMorgan(U, A, B)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.log('Power set of {1,2,3}:', powerSet([1,2,3]).map(s=>`{${s.join(',')}}`).join(', '));\nconsole.log('Cartesian product {1,2}?{a,b}:', cartesianProduct([1,2],['a','b']).map(p=>`(${p[0]},${p[1]})`).join(', '));\nconsole.log('Union:', [...setUnion(new Set([1,2,3]), new Set([3,4,5]))]);\nconsole.log('Intersection:', [...setIntersection(new Set([1,2,3]), new Set([3,4,5]))]);\nconsole.log('Difference A-B:', [...setDifference(new Set([1,2,3]), new Set([3,4,5]))]);\nconsole.log('Symmetric diff:', [...symmetricDiff(new Set([1,2,3]), new Set([3,4,5]))]);\n\n// --- Fuzzy Set Operations ---\ntype FuzzySet = Record<string, number>;\nfunction fuzzyUnion(a: FuzzySet, b: FuzzySet): FuzzySet {\n  const result: FuzzySet = {};\n  for (const k of new Set([...Object.keys(a), ...Object.keys(b)]))\n    result[k] = Math.max(a[k] ?? 0, b[k] ?? 0);\n  return result;\n}\nfunction fuzzyIntersection(a: FuzzySet, b: FuzzySet): FuzzySet {\n  const result: FuzzySet = {};\n  for (const k of new Set([...Object.keys(a), ...Object.keys(b)]))\n    result[k] = Math.min(a[k] ?? 0, b[k] ?? 0);\n  return result;\n}\nfunction fuzzyComplement(a: FuzzySet): FuzzySet {\n  const result: FuzzySet = {};\n  for (const k of Object.keys(a)) result[k] = +(1 - a[k]).toFixed(2);\n  return result;\n}\nconst hot: FuzzySet = {coffee: 0.8, tea: 0.3, soup: 0.9};\nconst caffeinated: FuzzySet = {coffee: 1.0, tea: 0.8, juice: 0.0};\nconsole.log('\\nFuzzy union:', fuzzyUnion(hot, caffeinated));\nconsole.log('Fuzzy intersection:', fuzzyIntersection(hot, caffeinated));\nconsole.log('Fuzzy complement (hot):', fuzzyComplement(hot));\n\n// --- Inclusion-Exclusion Principle ---\nfunction inclusionExclusion<T>(sets: Set<T>[]): number {\n  let total = 0;\n  for (let mask = 1; mask < (1 << sets.length); mask++) {\n    const bits = mask.toString(2).split('').filter(b=>b==='1').length;\n    let intersection: Set<T> | null = null;\n    for (let i = 0; i < sets.length; i++)\n      if (mask & (1 << i))\n        intersection = intersection ? new Set([...intersection].filter(x => sets[i].has(x))) : new Set(sets[i]);\n    total += (bits % 2 === 1 ? 1 : -1) * (intersection?.size ?? 0);\n  }\n  return total;\n}\nconst S1 = new Set([1,2,3,4]), S2 = new Set([3,4,5,6]), S3 = new Set([4,5,6,7]);\nconsole.log('\\nInclusion-exclusion |A?B?C|:', inclusionExclusion([S1, S2, S3]), '(expected:', 7, ')');\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// sets\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'sets', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// sets - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'sets' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A set is a collection of distinct objects. Sets are equal when they contain exactly the same elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$|S| = n$ implies $|\\mathcal{P}(S)| = 2^n$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Union, intersection, difference, and complement generate new sets from existing ones."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "De Morgan's laws and the distributive laws are fundamental set identities."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Cartesian product $A \\times B$ is the set of ordered pairs from $A$ and $B$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Characteristic functions bridge sets and Boolean algebra."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multisets allow repeated elements; fuzzy sets allow partial membership."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inclusion-exclusion prevents double-counting in overlapping sets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\mathbb{Q}$ is countably infinite; $\\mathbb{R}$ is uncountably infinite."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-set-operations-in-typescript",
      children: "1.8 Set Operations in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function union<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a, ...b]);\n}\n\nfunction intersection<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a].filter(x => b.has(x)));\n}\n\nfunction difference<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return new Set([...a].filter(x => !b.has(x)));\n}\n\nfunction symmetricDifference<T>(a: Set<T>, b: Set<T>): Set<T> {\n  return union(difference(a, b), difference(b, a));\n}\n\nfunction isSubset<T>(a: Set<T>, b: Set<T>): boolean {\n  return [...a].every(x => b.has(x));\n}\n\nfunction isSuperset<T>(a: Set<T>, b: Set<T>): boolean {\n  return isSubset(b, a);\n}\n\nfunction cartesianProduct<T, U>(a: Set<T>, b: Set<U>): Set<[T, U]> {\n  const result = new Set<[T, U]>();\n  for (const x of a) for (const y of b) result.add([x, y]);\n  return result;\n}\n\nfunction powerSet<T>(set: Set<T>): Set<Set<T>> {\n  const arr = [...set];\n  const result = new Set<Set<T>>();\n  for (let mask = 0; mask < (1 << arr.length); mask++) {\n    const subset = new Set<T>();\n    for (let i = 0; i < arr.length; i++) {\n      if (mask & (1 << i)) subset.add(arr[i]);\n    }\n    result.add(subset);\n  }\n  return result;\n}\n\nconst A = new Set([1, 2, 3, 4]);\nconst B = new Set([3, 4, 5, 6]);\nconsole.log([...union(A, B)]); // [1, 2, 3, 4, 5, 6]\nconsole.log([...intersection(A, B)]); // [3, 4]\nconsole.log([...difference(A, B)]); // [1, 2]\nconsole.log(powerSet(new Set([1, 2])).size); // 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-set-identities--formal-proofs",
      children: "1.9 Set Identities ? Formal Proofs"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.7 (De Morgan's Laws for Sets)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof of (1)."
      }), " We show $\\overline{A \\cup B} \\subseteq \\overline{A} \\cap \\overline{B}$ and $\\overline{A \\cap B} \\supseteq \\overline{A} \\cup \\overline{B}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "($\\subseteq$)"
      }), " Take $x \\in \\overline{A \\cup B}$. Then $x \\notin A \\cup B$, so $x \\notin A$ and $x \\notin B$. Thus $x \\in \\overline{A}$ and $x \\in \\overline{B}$, so $x \\in \\overline{A} \\cap \\overline{B}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "($\\supseteq$)"
      }), " Take $x \\in \\overline{A} \\cap \\overline{B}$. Then $x \\in \\overline{A}$ and $x \\in \\overline{B}$, so $x \\notin A$ and $x \\notin B$. Thus $x \\notin A \\cup B$, so $x \\in \\overline{A \\cup B}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.8 (Absorption Laws)."
      }), "\n$$A \\cup (A \\cap B) = A \\quad \\text{and} \\quad A \\cap (A \\cup B) = A$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " For the first: $A \\cup (A \\cap B) = (A \\cup A) \\cap (A \\cup B) = A \\cap (A \\cup B) = A$. By duality, the second also holds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "110-cardinality-and-the-power-set",
      children: "1.10 Cardinality and the Power Set"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.9 (Power Set Cardinality)."
      }), " If $|S| = n$, then $|\\mathcal{P}(S)| = 2^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " For each element of $S$, a subset either includes or excludes that element ? two choices per element. By the product rule, $2^n$ total subsets."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function powerSetSize(n: number): number {\n  return 1 << n;\n}\n\nfunction subsetsOfSize<T>(set: Set<T>, k: number): Set<T>[] {\n  const arr = [...set];\n  const result: Set<T>[] = [];\n  function combine(start: number, chosen: T[]) {\n    if (chosen.length === k) { result.add(new Set(chosen)); return; }\n    for (let i = start; i < arr.length; i++) {\n      chosen.push(arr[i]);\n      combine(i + 1, chosen);\n      chosen.pop();\n    }\n  }\n  combine(0, []);\n  return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.15"
      }), " (Counting subsets). For $S = {a, b, c, d}$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "All subsets: $2^4 = 16$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsets of size 2: $\\binom{4}{2} = 6$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsets containing $a$: $2^3 = 8$ (each of the other 3 elements can be in or out)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-infinite-sets-and-countability",
      children: "1.11 Infinite Sets and Countability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 1.15 (Countably Infinite)."
      }), " A set $S$ is countably infinite if there exists a bijection $f: \\mathbb{N} \\to S$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.10 (Cantor's Diagonalization)."
      }), " $\\mathbb{R}$ is uncountable."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof (by contradiction)."
      }), " Suppose $\\mathbb{R}$ is countable. List all real numbers in $(0, 1)$ as binary expansions:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$r_1 = 0.d_{11}d_{12}d_{13}\\ldots$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$r_2 = 0.d_{21}d_{22}d_{23}\\ldots$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$r_3 = 0.d_{31}d_{32}d_{33}\\ldots$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Construct $x = 0.x_1x_2x_3\\ldots$ where $x_i = 1 - d_{ii}$. Then $x$ differs from each $r_i$ at the $i$-th digit, so $x$ is not in the list ? contradiction. $\\square$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.11."
      }), " $\\mathbb{Q}$ is countably infinite."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " List all fractions $p/q$ in an infinite grid. The zigzag diagonal traversal enumerates each rational exactly once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function enumerateRationals(n: number): [number, number][] {\n  const result: [number, number][] = [];\n  for (let sum = 1; result.length < n; sum++) {\n    for (let i = 1; i <= sum; i++) {\n      const j = sum - i;\n      if (result.length < n) result.push([i, j]);\n    }\n  }\n  return result;\n}\nconsole.log(enumerateRationals(10));\n// [(1,0), (1,1), (2,0), (1,2), (2,1), (3,0), (1,3), (2,2), (3,1), (4,0)]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1.16"
      }), " (Finite set cardinality). A set with 5 elements has $2^5 = 32$ subsets, exactly half (16) of which have even cardinality and half odd, since the empty set is even."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "17",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether the set of all finite binary strings is countable or uncountable. Justify."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use TypeScript to generate and count all 32 subsets of ${1, 2, 3, 4, 5}$, grouped by size. Verify that $\\sum_{k=0}^5 \\binom{5}{k} = 32$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that if $A \\subseteq B$, then $\\mathcal{P}(A) \\subseteq \\mathcal{P}(B)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Count the number of functions $f: {1, 2, 3} \\to {a, b}$ that are surjective."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all subsets of ${1, 2, 3, 4}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $|A| = 5$ and $|B| = 3$, what is $|A \\times B|$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State De Morgan's laws for sets in words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For $A = {x \\in \\mathbb{Z} \\mid -3 \\leq x \\leq 3}$ and $B = {x \\in \\mathbb{Z} \\mid x^2 < 10}$, determine $A \\cap B$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is $\\emptyset \\in \\mathcal{P}(\\emptyset)$? Justify."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does it mean for a set to be countably infinite?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does a multiset differ from a classical set?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let $U = {1, 2, \\ldots, 10}$, $A = {1, 3, 5, 7, 9}$, $B = {2, 3, 5, 7}$, $C = {4, 5, 6, 7}$. Compute:\n(a) $A \\cup (B \\cap C)$\n(b) $(A \\cup B) \\setminus C$\n(c) $\\overline{A \\cap B}$\n(d) $A \\oplus B$"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove the complement law: $A \\cup \\overline{A} = U$ and $A \\cap \\overline{A} = \\emptyset$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove De Morgan's law: $\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$ using elementwise argument."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let $A = {a, b}$, $B = {1, 2, 3}$. List $A \\times B$ and $B \\times A$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that $A \\subseteq B$ if and only if $A \\cap B = A$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a TypeScript function that computes the symmetric difference of two sets."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that $|\\mathcal{P}({1,2,3,4})| = 16$ by listing all subsets grouped by size."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let $A_1, A_2, \\ldots, A_n$ be sets. Prove the generalized distributive law:\n$$A \\cap (B_1 \\cup B_2 \\cup \\cdots \\cup B_n) = (A \\cap B_1) \\cup (A \\cap B_2) \\cup \\cdots \\cup (A \\cap B_n)$$\nby induction on $n$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Cantor's theorem states: For any set $S$, $|S| < |\\mathcal{P}(S)|$. Prove this by showing there is no surjection $f: S \\to \\mathcal{P}(S)$. (Hint: consider $B = {x \\in S \\mid x \\notin f(x)}$.)"
        }), "\n"]
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