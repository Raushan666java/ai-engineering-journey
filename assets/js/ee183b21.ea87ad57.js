"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[87198],{

/***/ 3840
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_08_functions_md_ee1_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-08-functions-md-ee1.json
const site_docs_courses_discrete_mathematics_08_functions_md_ee1_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/08-functions","title":"Chapter 8: Functions","description":"Previous Relations | Next Graph Theory","source":"@site/docs/courses/discrete-mathematics/08-functions.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/08-functions","permalink":"/ai-engineering-journey/discrete-mathematics/08-functions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-functions","slug":"/discrete-mathematics/08-functions","title":"Chapter 8: Functions","sidebar_label":"Chapter 8: Functions","sidebar_position":8},"sidebar":"coursesSidebar","previous":{"title":"Chapter 7: Relations","permalink":"/ai-engineering-journey/discrete-mathematics/07-relations"},"next":{"title":"Chapter 9: Graph Theory","permalink":"/ai-engineering-journey/discrete-mathematics/09-graph-theory"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/08-functions.md


const frontMatter = {
	id: '08-functions',
	slug: '/discrete-mathematics/08-functions',
	title: 'Chapter 8: Functions',
	sidebar_label: 'Chapter 8: Functions',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Functions';

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
  "value": "8.1 Definition",
  "id": "81-definition",
  "level": 3
}, {
  "value": "8.2 Injective, Surjective, Bijective",
  "id": "82-injective-surjective-bijective",
  "level": 3
}, {
  "value": "8.3 Composition",
  "id": "83-composition",
  "level": 3
}, {
  "value": "8.4 Inverse Functions",
  "id": "84-inverse-functions",
  "level": 3
}, {
  "value": "8.5 Special Functions",
  "id": "85-special-functions",
  "level": 3
}, {
  "value": "8.6 Growth of Functions",
  "id": "86-growth-of-functions",
  "level": 3
}, {
  "value": "8.7 Partial Functions",
  "id": "87-partial-functions",
  "level": 3
}, {
  "value": "8.8 Recursive Functions",
  "id": "88-recursive-functions",
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
  "value": "TypeScript: Function Properties Checker",
  "id": "typescript-function-properties-checker",
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
  "value": "Practical Takeaways",
  "id": "practical-takeaways",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "8.6 Function Properties in Practice",
  "id": "86-function-properties-in-practice",
  "level": 3
}, {
  "value": "8.7 Function Composition and Inverse Functions",
  "id": "87-function-composition-and-inverse-functions",
  "level": 3
}, {
  "value": "8.8 Growth of Functions ? Extended Analysis",
  "id": "88-growth-of-functions--extended-analysis",
  "level": 3
}, {
  "value": "8.9 Special Functions and Their Properties",
  "id": "89-special-functions-and-their-properties",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
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
        id: "chapter-8-functions",
        children: "Chapter 8: Functions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/07-relations",
          children: "Chapter 7: Relations"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/09-graph-theory",
          children: "Chapter 9: Graph Theory"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/08-functions.png",
        alt: "Functions Overview"
      })
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
        href: "../../assets/images/lessons/discrete-mathematics/08-functions/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/08-functions/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/08-functions/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/08-functions/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/discrete-mathematics/08-functions/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/discrete-mathematics/08-functions/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define functions and identify domains, codomains, and ranges"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Classify functions as injective, surjective, or bijective"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compose functions and find inverses"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply floor, ceiling, and other special functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze growth rates using big-O, big-$\\Omega$, and big-$\\Theta$ notation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand partial functions and recursive definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between image and preimage"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Function Definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every input maps to exactly one output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions are a special case of relations ? each $x$ has one $y$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Injective, Surjective, Bijective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-one, onto, and both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A bijection has an inverse; cardinality arguments depend on injections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply $f$ then $g$: $(g \\circ f)(x) = g(f(x))$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Composition is associative but not commutative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exists only for bijections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f^{-1}(y) = x$ iff $f(x) = y$; $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor & Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Round down and up to nearest integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for discrete math, algorithm analysis, and number theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O / $\\Omega$ / $\\Theta$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classify function growth rates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify dominant term; constants and lower-order terms are ignored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May be undefined for some inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful in modeling non-total computations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Function Definition] --> B[Domain, Codomain, Range]\n    B --> C{Classification}\n    C -->|One-to-one| D[Injective]\n    C -->|Onto| E[Surjective]\n    C -->|Both| F[Bijective]\n    F --> G[Inverse Function]\n    D --> H[Composition]\n    E --> H\n    F --> H\n    A --> I[Special Functions]\n    I --> J[Floor / Ceiling]\n    I --> K[Mod / Factorial]\n    A --> L[Growth of Functions]\n    L --> M[Big-O]\n    L --> N[Big-Omega]\n    L --> O[Big-Theta]\n    A --> P[Partial Functions]\n    C --> Q[Recursive Functions]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-definition",
      children: "8.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "function"
      }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mapping"
      }), ") $f: A \\rightarrow B$ assigns to each $a \\in A$ exactly one $b \\in B$. We write $f(a) = b$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["$A$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "domain"
        }), ", $B$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "codomain"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "image"
        }), " (or ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "range"
        }), ") of $f$ is $f(A) = {f(a) \\mid a \\in A} \\subseteq B$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If $f(a) = b$, $b$ is the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "image"
        }), " of $a$, and $a$ is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "preimage"
        }), " of $b$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Two functions $f$ and $g$ are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "equal"
      }), " if they have the same domain and $f(a) = g(a)$ for all $a$ in the domain."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A function assigns every element of the domain exactly one element of the codomain; the range (image) may be a proper subset of the codomain."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-injective-surjective-bijective",
      children: "8.2 Injective, Surjective, Bijective"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Injective (one-to-one):"
      }), " $f(a_1) = f(a_2) \\implies a_1 = a_2$.\nEquivalently: distinct inputs map to distinct outputs. $|f(A)| = |A|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Surjective (onto):"
      }), " For every $b \\in B$, there exists $a \\in A$ with $f(a) = b$.\nEquivalently: $f(A) = B$. The codomain equals the range."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bijective (one-to-one correspondence):"
      }), " Both injective and surjective."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.1."
      }), " A function is bijective if and only if it has an inverse."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.2."
      }), " If $A$ and $B$ are finite sets with $|A| = |B|$, then $f: A \\rightarrow B$ is injective iff it is surjective iff it is bijective."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isInjective<T, U>(domain: T[], f: (x: T) => U): boolean {\n  const images = new Set<U>();\n  for (const x of domain) {\n    const y = f(x);\n    if (images.has(y)) return false;\n    images.add(y);\n  }\n  return true;\n}\n\nfunction isSurjective<T, U>(\n  domain: T[],\n  codomain: U[],\n  f: (x: T) => U\n): boolean {\n  const images = new Set(domain.map(f));\n  return codomain.every(y => images.has(y));\n}\n\nconst domain = [1, 2, 3, 4];\nconsole.log(isInjective(domain, x => x * 2)); // true\nconsole.log(isInjective(domain, x => Math.floor(x / 2))); // false\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Injective functions are one-to-one (distinct inputs map to distinct outputs); surjective functions hit every codomain element; bijective functions are both ? and only bijections have inverses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-composition",
      children: "8.3 Composition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If $f: A \\rightarrow B$ and $g: B \\rightarrow C$, then the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "composition"
      }), " $g \\circ f: A \\rightarrow C$ is:\n$$(g \\circ f)(a) = g(f(a))$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Composition is associative: $(h \\circ g) \\circ f = h \\circ (g \\circ f)$."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.3 (Composition and injectivity/surjectivity)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f$ and $g$ are injective, then $g \\circ f$ is injective."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f$ and $g$ are surjective, then $g \\circ f$ is surjective."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $g \\circ f$ is injective, then $f$ is injective."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $g \\circ f$ is surjective, then $g$ is surjective."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Composition applies one function after another ($g \\circ f$ means \"first $f$, then $g$\"); it is associative but not commutative."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-inverse-functions",
      children: "8.4 Inverse Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If $f: A \\rightarrow B$ is bijective, there exists an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "inverse"
      }), " $f^{-1}: B \\rightarrow A$ such that:\n$$f^{-1}(b) = a \\iff f(a) = b$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$f^{-1} \\circ f = \\text{id}_A$ (identity on $A$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$f \\circ f^{-1} = \\text{id}_B$ (identity on $B$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Only bijective functions have inverses; the inverse reverses the mapping and satisfies $f^{-1}(f(x)) = x$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-special-functions",
      children: "8.5 Special Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Floor function:"
      }), " $\\lfloor x \\rfloor$ = the greatest integer $\\leq x$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Ceiling function:"
      }), " $\\lceil x \\rceil$ = the least integer $\\geq x$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Properties of floor and ceiling:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\lfloor x \\rfloor \\leq x < \\lfloor x \\rfloor + 1$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\lceil x \\rceil - 1 < x \\leq \\lceil x \\rceil$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\lfloor -x \\rfloor = -\\lceil x \\rceil$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\lfloor x \\rfloor = n$ iff $n \\leq x < n+1$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\lceil x \\rceil = n$ iff $n-1 < x \\leq n$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$x - 1 < \\lfloor x \\rfloor \\leq x \\leq \\lceil x \\rceil < x + 1$"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Factorial:"
      }), " $n! = n \\cdot (n-1) \\cdots 2 \\cdot 1$, with $0! = 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mod function:"
      }), " $a \\bmod m$ = the remainder when $a$ is divided by $m$ (integer $r$ with $0 \\leq r < m$ and $a = qm + r$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stirling's approximation:"
      }), " $n! \\sim \\sqrt{2\\pi n},(n/e)^n$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Floor rounds down toward $-\\infty$, ceiling rounds up toward $+\\infty$; factorial grows faster than any exponential."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-growth-of-functions",
      children: "8.6 Growth of Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-O Notation:"
      }), " $f(x) = O(g(x))$ if there exist constants $C > 0$ and $k$ such that $|f(x)| \\leq C|g(x)|$ for all $x > k$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-Omega:"
      }), " $f(x) = \\Omega(g(x))$ if $|f(x)| \\geq C|g(x)|$ for all $x > k$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-Theta:"
      }), " $f(x) = \\Theta(g(x))$ if $f(x) = O(g(x))$ and $f(x) = \\Omega(g(x))$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Little-o:"
      }), " $f(x) = o(g(x))$ if $\\lim_{x \\to \\infty} f(x)/g(x) = 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common growth rates (ordered by growth):"
      }), "\n$$1 \\prec \\log n \\prec \\sqrt{n} \\prec n \\prec n \\log n \\prec n^2 \\prec n^3 \\prec 2^n \\prec n!$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.4 (Sum rule)."
      }), " If $f_1 = O(g_1)$ and $f_2 = O(g_2)$, then $f_1 + f_2 = O(\\max(|g_1|, |g_2|))$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.5 (Product rule)."
      }), " If $f_1 = O(g_1)$ and $f_2 = O(g_2)$, then $f_1 f_2 = O(g_1 g_2)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.6 (Polynomial dominance)."
      }), " A polynomial of degree $d$ is $\\Theta(n^d)$ ? the highest-degree term dominates."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function bigOClass(f: (n: number) => number): string {\n  const tests = [\n    { name: \"O(1)\", g: (n: number) => 1 },\n    { name: \"O(log n)\", g: (n: number) => Math.log2(n) },\n    { name: \"O(n)\", g: (n: number) => n },\n    { name: \"O(n log n)\", g: (n: number) => n * Math.log2(n) },\n    { name: \"O(n?)\", g: (n: number) => n * n },\n    { name: \"O(2n)\", g: (n: number) => Math.pow(2, n) },\n  ];\n\n  // Approximate check by ratio convergence\n  for (let n = 10; n < 1000; n *= 2) {\n    const ratio = f(n) / f(n / 2);\n    // pattern matching on growth factor\n  }\n  return \"check dominant term\";\n}\n\n// Verify O(n?) for a quadratic\nfunction isQuadraticGrowth(f: (n: number) => number): boolean {\n  const ratio1 = f(100) / f(50);\n  const ratio2 = f(200) / f(100);\n  // For n^2, doubling n quadruples the value\n  return Math.abs(ratio1 - 4) < 0.5 && Math.abs(ratio2 - 4) < 0.5;\n}\n\nconsole.log(isQuadraticGrowth(n => 3 * n * n + 2 * n + 1)); // roughly true\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Big-O provides an asymptotic upper bound, big-$\\Omega$ a lower bound, and big-$\\Theta$ a tight bound ? the growth hierarchy is $1 \\prec \\log n \\prec n \\prec n \\log n \\prec n^2 \\prec 2^n \\prec n!$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-partial-functions",
      children: "8.7 Partial Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partial function"
      }), " $f: A \\rightharpoonup B$ is a function defined on a subset of $A$. If $f$ is defined for all $a \\in A$, it is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "total function"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " $f(x) = 1/x$ is a partial function from $\\mathbb{R}$ to $\\mathbb{R}$ (undefined at $x = 0$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " A partial function may be undefined for some domain elements; a total function is a partial function that is defined everywhere."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-recursive-functions",
      children: "8.8 Recursive Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Some functions are defined recursively (in terms of themselves):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$f(0) = 1$, $f(n) = n \\cdot f(n-1)$ for $n > 0$ (factorial)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$F_1 = 1$, $F_2 = 1$, $F_n = F_{n-1} + F_{n-2}$ (Fibonacci)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive definitions require base case(s) and a recursive rule that eventually reaches the base."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Injective (One-to-One)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f(a_1) = f(a_2) \\implies a_1 = a_2$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinct inputs map to distinct outputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding, unique identifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Surjective (Onto)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For all $b \\in B$, exists $a$ with $f(a)=b$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every codomain element is hit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Projection operations, covering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bijective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both injective and surjective"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-to-one correspondence; has an inverse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations, encoding/decoding pairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lfloor x \\rfloor$ = greatest integer $\\leq x$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rounds ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "down"
            }), " toward $-\\infty$"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete math, algorithm analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lceil x \\rceil$ = least integer $\\geq x$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Rounds ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "up"
            }), " toward $+\\infty$"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pagination, resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f \\leq Cg$ for large $x$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Upper"
            }), " bound; not necessarily tight"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case complexity analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-Omega"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f \\geq Cg$ for large $x$"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Lower"
            }), " bound"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-case or minimum guarantee"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Asymptotic Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f = O(g)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\\leq C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f = \\Omega(g)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\\geq C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f = \\Theta(g)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f = O(g)$ and $f = \\Omega(g)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f$ grows at the same rate as $g$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$3n^2 + 2n = \\Theta(n^2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f = o(g)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim f/g = 0$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f$ grows strictly slower than $g$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n = o(n^2)$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$f \\sim g$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\lim f/g = 1$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$f$ and $g$ asymptotically equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n^2 + n \\sim n^2$"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Engineering"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Science"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Injective Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash functions (collision-free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encoding functions, public-key maps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signal encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature embedding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bijective Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations, sorting networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encryption/decryption pairs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversible transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data normalization / denormalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floor & Ceiling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Page numbering, bucket indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Padding calculations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Discrete-time sampling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binning continuous variables"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O / $\\Theta$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm complexity classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Attack complexity estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case runtime guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model training complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pipeline architecture, decorators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cipher composition (AES rounds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cascading signal processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature transformation pipelines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which of the following functions $f: \\mathbb{Z} \\rightarrow \\mathbb{Z}$ is bijective?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $f(n) = n^2$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $f(n) = 2n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $f(n) = n + 1$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $f(n) = n \\bmod 2$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $f(n) = n + 1$ ? it is injective ($n+1 = m+1 \\implies n=m$) and surjective (for any $y$, let $n = y-1$), hence bijective."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the growth rate of $f(n) = n \\log n + \\sqrt{n}$?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\Theta(\\sqrt{n})$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\Theta(n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\Theta(n \\log n)$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\Theta(\\log n)$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** $\\Theta(n \\log n)$ ? $n \\log n$ dominates $\\sqrt{n}$ asymptotically."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute $\\lfloor -3.14 \\rfloor$."
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $-3$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $-4$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $3$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $4$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $-4$ ? floor rounds **down** toward $-\\infty$, so $-3.14$ goes to $-4$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "If $g \\circ f$ is injective, what can we conclude?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Both $f$ and $g$ are injective"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $f$ is injective"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $g$ is injective"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $f$ is surjective"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** If $g \\circ f$ is injective, then $f$ must be injective (but $g$ may not be)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Stirling's approximation approximates:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The floor function"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The factorial function"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The ceiling function"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) The mod function"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $n! \\sim \\sqrt{2\\pi n}(n/e)^n$ approximates the factorial."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.1"
      }), " (Injective but not surjective). $f: \\mathbb{Z} \\rightarrow \\mathbb{Z}$ with $f(n) = 2n$ is injective ($2n = 2m \\implies n = m$) but not surjective (odd numbers have no preimage)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.2"
      }), " (Surjective but not injective). $f: \\mathbb{Z} \\rightarrow {0,1}$ with $f(n) = n \\bmod 2$ is surjective (both 0 and 1 hit) but not injective ($f(2) = 0 = f(4)$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.3"
      }), " (Bijection). $f: \\mathbb{Z} \\rightarrow \\mathbb{Z}$ with $f(n) = n + 1$ is bijective. Inverse: $f^{-1}(n) = n - 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.4"
      }), " (Composition). Let $f(n) = n^2$ and $g(n) = n + 1$, both $\\mathbb{Z} \\rightarrow \\mathbb{Z}$. Then $(g \\circ f)(n) = n^2 + 1$ and $(f \\circ g)(n) = (n+1)^2 = n^2 + 2n + 1$. Composition is not commutative."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.5"
      }), " (Floor and ceiling). $\\lfloor 3.7 \\rfloor = 3$, $\\lceil 3.7 \\rceil = 4$, $\\lfloor -2.3 \\rfloor = -3$, $\\lceil -2.3 \\rceil = -2$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.6"
      }), " (Big-O). Show $f(n) = 3n^2 + 2n + 5$ is $O(n^2)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " For $n \\geq 1$, $3n^2 + 2n + 5 \\leq 3n^2 + 2n^2 + 5n^2 = 10n^2$. So with $C = 10$, $k = 1$, $f(n) \\leq C n^2$, hence $f(n) = O(n^2)$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.7"
      }), " (Big-Theta). Show $5n^3 + 10n$ is $\\Theta(n^3)$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " For $n \\geq 1$: $5n^3 + 10n \\leq 5n^3 + 10n^3 = 15n^3$, so $f(n) = O(n^3)$. Also $5n^3 + 10n \\geq 5n^3$, so $f(n) = \\Omega(n^3)$. Thus $f(n) = \\Theta(n^3)$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.8"
      }), " (Inverse of bijection). Prove $f: \\mathbb{R} \\rightarrow \\mathbb{R}$, $f(x) = 2x - 3$, is bijective and find its inverse."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Injective: $2x - 3 = 2y - 3 \\implies x = y$. Surjective: for any $y \\in \\mathbb{R}$, let $x = (y+3)/2$, then $f(x) = y$. Bijective. Inverse: $f^{-1}(y) = (y+3)/2$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.9"
      }), " (Recursive factorial)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function factorial(n: number): number {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nconsole.log(factorial(5)); // 120\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.10"
      }), " (Big-O in TypeScript ? verifying growth). Show that $f(n) = 100n + 5$ is $O(n)$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function verifyLinearGrowth(f: (n: number) => number, nMax: number): boolean {\n  // Check if f(n) / n converges to a constant\n  const ratios: number[] = [];\n  for (let n = 1; n <= nMax; n++) {\n    ratios.push(f(n) / n);\n  }\n  // Variance should be small for large n\n  const mean = ratios.reduce((a, b) => a + b, 0) / ratios.length;\n  const variance = ratios.reduce((sum, r) => sum + (r - mean) ** 2, 0) / ratios.length;\n  return variance < 1; // heuristic\n}\n\nconsole.log(verifyLinearGrowth(n => 100 * n + 5, 1000)); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-function-properties-checker",
      children: "TypeScript: Function Properties Checker"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type Func<T, U> = Map<T, U>;\n\nfunction isInjective<T, U>(f: Func<T, U>): boolean {\n  const seen = new Set<U>();\n  for (const v of f.values()) { if (seen.has(v)) return false; seen.add(v); }\n  return true;\n}\n\nfunction isSurjective<T, U>(f: Func<T, U>, codomain: Set<U>): boolean {\n  const images = new Set(f.values());\n  for (const v of codomain) if (!images.has(v)) return false;\n  return true;\n}\n\nfunction isBijective<T, U>(f: Func<T, U>, codomain: Set<U>): boolean {\n  return isInjective(f) && isSurjective(f, codomain);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- Function Type Checkers ---\ntype Func<T, U> = Map<T, U>;\n\nfunction isInjective<T, U>(f: Func<T, U>): boolean {\n  const images = new Set(f.values());\n  return images.size === f.size;\n}\nfunction isSurjective<T, U>(f: Func<T, U>, codomain: Set<U>): boolean {\n  const images = new Set(f.values());\n  return [...codomain].every(v => images.has(v));\n}\nfunction isBijective<T, U>(f: Func<T, U>, codomain: Set<U>): boolean {\n  return isInjective(f) && isSurjective(f, codomain);\n}\n\nconst f = new Map([[1,'a'],[2,'b'],[3,'c']]);\nconst cod = new Set(['a','b','c']);\nconsole.log('Injective:', isInjective(f));     // true\nconsole.log('Surjective:', isSurjective(f, cod)); // true\nconsole.log('Bijective:', isBijective(f, cod));   // true\n\n// --- Function Composition ---\nfunction compose<T, U, V>(f: (x: T) => U, g: (y: U) => V): (x: T) => V {\n  return (x: T) => g(f(x));\n}\nconst double = (x: number) => 2 * x;\nconst add1 = (x: number) => x + 1;\nconst doubleThenAdd1 = compose(double, add1);\nconsole.log('(f?g)(5):', doubleThenAdd1(5)); // 11\n\n// --- Inverse Function Finder ---\nfunction inverse<T extends string | number, U extends string | number>(\n  f: Map<T, U>\n): Map<U, T> | null {\n  if (!isInjective(f)) return null; // only bijective functions have inverses\n  const inv = new Map<U, T>();\n  for (const [k, v] of f) inv.set(v, k);\n  return inv;\n}\nconst bij = new Map([['a',1],['b',2],['c',3]]);\nconsole.log('Inverse:', [...(inverse(bij) ?? new Map())]); // [[1,'a'],[2,'b'],[3,'c']]\n\n// --- Floor/Ceiling Functions ---\nfunction floorDiv(a: number, b: number): number {\n  return Math.floor(a / b);\n}\nfunction ceilDiv(a: number, b: number): number {\n  return Math.ceil(a / b);\n}\nconsole.log('?7/3?:', floorDiv(7, 3)); // 2\nconsole.log('?7/3?:', ceilDiv(7, 3)); // 3\n\n// --- Big-O Verifier ---\nfunction bigOVerify(\n  f: (n: number) => number,\n  g: (n: number) => number,\n  c: number,\n  n0: number\n): boolean {\n  for (let n = n0; n <= 10000; n++) {\n    if (f(n) > c * g(n)) return false;\n  }\n  return true;\n}\n// Verify: 3n? + 2n + 1 = O(n?) with c=4, n0=1\nconst f1 = (n: number) => 3 * n * n + 2 * n + 1;\nconst f2 = (n: number) => n * n;\nconsole.log('3n?+2n+1 = O(n?):', bigOVerify(f1, f2, 4, 1)); // true\n\n// --- Function Growth Comparator ---\nfunction growthComparator(f: (n: number) => number, g: (n: number) => number, limit: number): string {\n  for (let n = 1; n <= limit; n += Math.max(1, Math.floor(limit / 100))) {\n    if (f(n) < g(n)) return 'f grows slower';\n    if (f(n) > g(n)) return 'f grows faster';\n  }\n  return 'comparable';\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "console.log('Injective f(x)=2x:', isInjective(f1));                   // true\nconsole.log('Surjective f(x)=2x on {0,2,4}:', isSurjective(f1, [1,2,3], [2,4,6]));  // no, target has 6\n\n// --- Function Composition ---\nfunction compose<A, B, C>(f: (x: A) => B, g: (y: B) => C): (x: A) => C {\n  return (x: A) => g(f(x));\n}\nconst double = (x: number) => 2 * x;\nconst addOne = (x: number) => x + 1;\nconst doubleThenAdd = compose(double, addOne);\nconsole.log('\\nCompose (double then add1) 5:', doubleThenAdd(5)); // 11\n\n// --- Inverse Function Finder ---\nfunction inverseFunction(f: (x: number) => number, domain: number[], codomain: number[]): Map<number, number> | null {\n  const mapping = new Map<number, number>();\n  for (const x of domain) {\n    const y = f(x);\n    if (!codomain.includes(y)) return null;\n    if (mapping.has(y)) return null; // not injective\n    mapping.set(y, x);\n  }\n  return mapping;\n}\nconst inv = inverseFunction(x => 2 * x, [1, 2, 3], [2, 4, 6]);\nconsole.log('\\nInverse of f(x)=2x:', inv ? [...inv.entries()].map(([k, v]) => `f??(${k})=${v}`).join(', ') : 'no inverse');\n\n// --- Pigeonhole Principle on Functions ---\nfunction pigeonholeFunc<T, U>(f: Map<T, U>): boolean {\n  const values = [...f.values()];\n  return new Set(values).size < values.length;\n}\nconst fMap = new Map([[1, 'a'], [2, 'b'], [3, 'a']]); // 3 domains, 2 codomains\nconsole.log('\\nPigeonhole applies (3?2):', pigeonholeFunc(fMap));\n\n// --- Ceiling & Floor Calculator ---\nfunction calcFloor(x: number): number { return Math.floor(x); }\nfunction calcCeil(x: number): number { return Math.ceil(x); }\nconsole.log('\\nfloor(3.7):', calcFloor(3.7), 'ceil(3.7):', calcCeil(3.7));\nconsole.log('floor(-2.3):', calcFloor(-2.3), 'ceil(-2.3):', calcCeil(-2.3));\n\n// --- Big-O Verifier ---\nfunction bigOVerifier(f: (n: number) => number, g: (n: number) => number, c: number, n0: number, limit: number): boolean {\n  for (let n = n0; n <= limit; n++) if (f(n) > c * g(n)) return false;\n  return true;\n}\n// Is n? ? O(n?)? Yes, for c=1, n0=1\nconsole.log('\\nn? ? O(n?):', bigOVerifier(n => n * n, n => n * n * n, 1, 1, 100));\n// Is n? ? O(n?)? No\nconsole.log('n? ? O(n?):', bigOVerifier(n => n * n * n, n => n * n, 1, 1, 100));\n\n// --- Hash Function (Modular) ---\nfunction hashMod(key: string, tableSize: number): number {\n  let hash = 0;\n  for (let i = 0; i < key.length; i++)\n    hash = (hash * 31 + key.charCodeAt(i)) % tableSize;\n  return hash;\n}\nconsole.log('\\nHash \"hello\" mod 10:', hashMod('hello', 10));\nconsole.log('Hash \"world\" mod 10:', hashMod('world', 10));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// functions\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'functions', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// functions - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'functions' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Functions map each input to exactly one output."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Injective: one-to-one. Surjective: onto. Bijective: both."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Bijective functions have inverses; composition is associative but not commutative."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floor/ceiling round to integers; growth rates are classified by big-O/$\\Omega$/$\\Theta$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common hierarchy: constant $\\prec$ logarithmic $\\prec$ linear $\\prec$ polynomial $\\prec$ exponential."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check injectivity via horizontal line test"
        }), " ? if any horizontal line hits the graph twice, not injective."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Surjectivity depends on codomain"
        }), " ? changing the codomain can make a non-surjective function surjective."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inverse only for bijections"
        }), " ? only bijections have true inverses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Big-O ignores constants"
        }), " ? $1000n$ is $O(n)$ just as much as $2n$ is."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dominant term wins"
        }), " ? in a sum, only the fastest-growing term matters asymptotically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.11"
      }), " (Partial function composition). Let $f: \\mathbb{R} \\rightharpoonup \\mathbb{R}$ with $f(x) = 1/x$ (undefined at 0) and $g(x) = x + 1$. Then $(g \\circ f)(x) = 1/x + 1$, also undefined at $x = 0$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.12"
      }), " (Matrix of a function). For a finite function $f: {1,\\dots,m} \\rightarrow {1,\\dots,n}$, represent as a $1 \\times m$ vector: $[f(1), f(2), \\dots, f(m)]$. Injectivity requires all distinct entries; surjectivity requires ${1,\\dots,n} \\subseteq \\text{entries}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-function-properties-in-practice",
      children: "8.6 Function Properties in Practice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A function $f: A \\to B$ associates each element of $A$ (domain) with exactly one element of $B$ (codomain). The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "range"
      }), " (or image) is ${f(a) : a \\in A} \\subseteq B$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.10 (Injection/Surjection/Bijection)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Injective (one-to-one):"
        }), " $f(a_1) = f(a_2) \\implies a_1 = a_2$. No two domain elements map to the same codomain element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Surjective (onto):"
        }), " For every $b \\in B$, there exists $a \\in A$ such that $f(a) = b$. Every codomain element is hit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bijective:"
        }), " Both injective and surjective ? a perfect one-to-one correspondence."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function isInjective<T, U>(f: (x: T) => U, domain: T[]): boolean {\n  const seen = new Set<U>();\n  for (const x of domain) {\n    const y = f(x);\n    if (seen.has(y)) return false;\n    seen.add(y);\n  }\n  return true;\n}\n\nfunction isSurjective<T, U>(f: (x: T) => U, domain: T[], codomain: U[]): boolean {\n  const image = new Set(domain.map(f));\n  return codomain.every(y => image.has(y));\n}\n\nfunction isBijective<T, U>(f: (x: T) => U, domain: T[], codomain: U[]): boolean {\n  return isInjective(f, domain) && isSurjective(f, domain, codomain);\n}\n\nconsole.log(isInjective((x: number) => 2 * x, [1, 2, 3]));    // true\nconsole.log(isSurjective((x: number) => 2 * x, [1, 2, 3], [2, 4, 6])); // true\nconsole.log(isBijective((x: number) => x + 1, [1, 2], [2, 3])); // true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-function-composition-and-inverse-functions",
      children: "8.7 Function Composition and Inverse Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.11 (Composition)."
      }), " $(g \\circ f)(x) = g(f(x))$. Composition is associative: $h \\circ (g \\circ f) = (h \\circ g) \\circ f$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.12 (Inverse)."
      }), " If $f: A \\to B$ is bijective, there exists $f^{-1}: B \\to A$ such that $f^{-1} \\circ f = \\text{id}_A$ and $f \\circ f^{-1} = \\text{id}_B$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function compose<T, U, V>(f: (x: T) => U, g: (y: U) => V): (x: T) => V {\n  return (x: T) => g(f(x));\n}\n\nfunction inverse<T extends string | number>(\n  f: (x: T) => T,\n  domain: T[]\n): ((y: T) => T) | null {\n  const pairs = new Map(domain.map(x => [f(x), x] as [T, T]));\n  if (pairs.size !== domain.length) return null; // not bijective\n  return (y: T) => {\n    const x = pairs.get(y);\n    if (x === undefined) throw new Error(\"Not in range\");\n    return x;\n  };\n}\n\nconst double = (x: number) => 2 * x;\nconst add1 = (x: number) => x + 1;\nconst h = compose(double, add1);\nconsole.log(h(5)); // (5*2)+1 = 11\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-growth-of-functions--extended-analysis",
      children: "8.8 Growth of Functions ? Extended Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.13 (Little-o and Little-$\\omega$)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$f(n) = o(g(n))$: For every $c > 0$, there exists $n_0$ such that $0 \\leq f(n) \\leq c,g(n)$ for all $n \\geq n_0$. Strictly slower growth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$f(n) = \\omega(g(n))$: For every $c > 0$, there exists $n_0$ such that $0 \\leq c,g(n) \\leq f(n)$ for all $n \\geq n_0$. Strictly faster growth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function growthClass(n: number, f: (n: number) => number): string {\n  const logN = Math.log2(n);\n  const nLogN = n * logN;\n  const nSq = n * n;\n  const nCb = n * n * n;\n  const twoN = Math.pow(2, n);\n  const fn = f(n);\n\n  if (fn <= n) return \"O(n) or less\";\n  if (fn <= nLogN) return \"T(n log n)\";\n  if (fn <= nSq) return \"T(n?)\";\n  if (fn <= nCb) return \"T(n?)\";\n  if (fn <= twoN) return \"O(2^n)\";\n  return \"super-exponential\";\n}\n\nconsole.log(growthClass(10, n => n * n + 5 * n));     // T(n?)\nconsole.log(growthClass(10, n => Math.pow(2, n)));     // O(2^n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 8.3 (Hierarchy of Growth)."
      }), "\n$$1 \\ll \\log n \\ll \\sqrt{n} \\ll n \\ll n\\log n \\ll n^2 \\ll n^3 \\ll 2^n \\ll n! \\ll n^n$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"1<br/>Constant\"] --> B[\"log n<br/>Logarithmic\"]\n    B --> C[\"vn<br/>Sublinear\"]\n    C --> D[\"n<br/>Linear\"]\n    D --> E[\"n log n<br/>Linearithmic\"]\n    E --> F[\"n?<br/>Quadratic\"]\n    F --> G[\"n?<br/>Cubic\"]\n    G --> H[\"2n<br/>Exponential\"]\n    H --> I[\"n!<br/>Factorial\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "89-special-functions-and-their-properties",
      children: "8.9 Special Functions and Their Properties"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.14 (Characteristic Function)."
      }), " For a set $A \\subseteq U$:\n$$\\chi_A(x) = \\begin{cases} 1 & \\text{if } x \\in A \\ 0 & \\text{if } x \\notin A \\end{cases}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 8.15 (Signum Function)."
      }), "\n$$\\text{sgn}(x) = \\begin{cases} -1 & \\text{if } x < 0 \\ 0 & \\text{if } x = 0 \\ 1 & \\text{if } x > 0 \\end{cases}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sgn(x: number): -1 | 0 | 1 {\n  return x > 0 ? 1 : x < 0 ? -1 : 0;\n}\n\nfunction characteristic<T>(A: Set<T>): (x: T) => number {\n  return (x: T) => A.has(x) ? 1 : 0;\n}\n\n// Floor and ceiling properties\nfunction floorDivision(a: number, b: number): number {\n  return Math.floor(a / b);\n}\n\n// Identity: floor(x) + floor(-x) = 0 (if x is integer), -1 otherwise\nfunction checkFloorIdentity(x: number): boolean {\n  return Math.floor(x) + Math.floor(-x) === (Number.isInteger(x) ? 0 : -1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.8"
      }), " (Composition and cardinalities). For finite sets $A$ and $B$:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of functions $A \\to B$: $|B|^{|A|}$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of injective functions: $P(|B|, |A|)$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of bijective functions: $|A|!$ (when $|A| = |B|$)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Number of surjective functions: $|B|! \\cdot S(|A|, |B|)$ (Stirling numbers of second kind)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.9"
      }), " (Stirling's approximation). $n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function stirling(n: number): number {\n  return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);\n}\n\n// Compare n! vs Stirling for n = 10\nconsole.log(stirling(10));  // ~3598695 (actual 3628800 ? 0.8% error)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 8.4"
      }), " ($\\log(n!) = \\Theta(n \\log n)$ via integral bound)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$\\int_1^n \\log x ,dx \\leq \\sum_{k=1}^n \\log k \\leq \\int_0^n \\log(x+1),dx$$\n$$n\\log n - n + 1 \\leq \\log(n!) \\leq (n+1)\\log(n+1) - n$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus $\\log(n!) = \\Theta(n \\log n)$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 8.10"
      }), " (Partial functions). A function $f: A \\rightharpoonup B$ is defined on a subset of $A$. In TypeScript: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(x: T) => U | undefined"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "type PartialFunction<T, U> = (x: T) => U | undefined;\n\nfunction safeDivide(n: number, d: number): number | undefined {\n  return d === 0 ? undefined : n / d;\n}\n\nfunction composePartial<T, U, V>(\n  f: PartialFunction<T, U>,\n  g: PartialFunction<U, V>\n): PartialFunction<T, V> {\n  return (x: T) => {\n    const y = f(x);\n    return y !== undefined ? g(y) : undefined;\n  };\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $f(x) = e^x$ as a function $\\mathbb{R} \\to \\mathbb{R}$ is injective, surjective, or bijective."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that if $f$ and $g$ are surjective, then $g \\circ f$ is surjective."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Rank the following in order of growth: $n^3$, $2^n$, $n!$, $n \\log n$, $n^{\\sqrt{n}}$, $4^{\\log n}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a TypeScript function ", (0,jsx_runtime.jsx)(_components.code, {
            children: "checkFunction<T, U>"
          }), " that verifies a mapping is a valid function (every domain element maps to exactly one codomain element)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show that the function $f(n) = \\lfloor \\sqrt{n} \\rfloor$ is surjective when considered as a function $\\mathbb{N} \\to \\mathbb{N}$."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can a function from ${1,2,3}$ to ${1,2}$ be injective? Explain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the growth rate of $f(n) = n \\log n + \\sqrt{n}$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If $f$ is bijective, what is $f^{-1} \\circ f$?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $\\lfloor \\pi \\rfloor$, $\\lceil \\pi \\rceil$, $\\lfloor -\\pi \\rfloor$, $\\lceil -\\pi \\rceil$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is $O(g) \\subset \\Omega(g)$ ever true? When?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Determine whether $f: \\mathbb{Z} \\rightarrow \\mathbb{Z}$, $f(n) = n^2 + 1$, is injective, surjective, or bijective."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: If $f$ and $g$ are injective, then $g \\circ f$ is injective."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove: $f(n) = \\log(n!)$ is $\\Theta(n \\log n)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Show $n^2 + 100n$ is $\\Theta(n^2)$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Let $f: A \\rightarrow B$ and $g: B \\rightarrow C$. Prove: if $g \\circ f$ is injective, then $f$ is injective."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Find $\\lfloor \\sqrt{1000} \\rfloor$ without a calculator."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Classify $f(n) = 2^n + n^{100}$ in big-O terms."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Let $f: A \\rightarrow B$ and $g: B \\rightarrow C$. Prove: $g \\circ f$ is bijective if and only if $f$ is injective and $g$ is surjective, ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "and"
          }), " the image of $f$ equals $B$. More precisely: if $g \\circ f$ is bijective, then $f$ is injective and $g$ is surjective. Show by counterexample that the converse (both injective and surjective individually) is not sufficient ? find an example where $f$ and $g$ are each bijective but $g \\circ f$ is not (which actually cannot happen, so find an example where $g \\circ f$ is bijective but $f$ is not surjective)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that $\\lfloor 2x \\rfloor = \\lfloor x \\rfloor + \\lfloor x + 0.5 \\rfloor$ for all real $x$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Estimate $30!$ using Stirling's approximation and compute the approximate number of decimal digits."
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