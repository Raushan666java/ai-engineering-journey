"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82120],{

/***/ 86134
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_discrete_mathematics_05_combinatorics_md_3f5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-discrete-mathematics-05-combinatorics-md-3f5.json
const site_docs_courses_discrete_mathematics_05_combinatorics_md_3f5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/discrete-mathematics/05-combinatorics","title":"Chapter 5: Combinatorics","description":"Previous Proofs | Next Recurrence Relations","source":"@site/docs/courses/discrete-mathematics/05-combinatorics.md","sourceDirName":"courses/discrete-mathematics","slug":"/discrete-mathematics/05-combinatorics","permalink":"/ai-engineering-journey/discrete-mathematics/05-combinatorics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-combinatorics","slug":"/discrete-mathematics/05-combinatorics","title":"Chapter 5: Combinatorics","sidebar_label":"Chapter 5: Combinatorics","sidebar_position":5},"sidebar":"course-discrete-mathematics","previous":{"title":"Chapter 4: Proof Techniques","permalink":"/ai-engineering-journey/discrete-mathematics/04-proofs"},"next":{"title":"Chapter 6: Recurrence Relations","permalink":"/ai-engineering-journey/discrete-mathematics/06-recurrence"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/discrete-mathematics/05-combinatorics.md


const frontMatter = {
	id: '05-combinatorics',
	slug: '/discrete-mathematics/05-combinatorics',
	title: 'Chapter 5: Combinatorics',
	sidebar_label: 'Chapter 5: Combinatorics',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Combinatorics';

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
  "value": "5.1 Fundamental Counting Principles",
  "id": "51-fundamental-counting-principles",
  "level": 3
}, {
  "value": "5.2 Permutations",
  "id": "52-permutations",
  "level": 3
}, {
  "value": "5.3 Combinations",
  "id": "53-combinations",
  "level": 3
}, {
  "value": "5.4 The Binomial Theorem",
  "id": "54-the-binomial-theorem",
  "level": 3
}, {
  "value": "5.5 Pigeonhole Principle",
  "id": "55-pigeonhole-principle",
  "level": 3
}, {
  "value": "5.6 Permutations with Repetition",
  "id": "56-permutations-with-repetition",
  "level": 3
}, {
  "value": "5.7 Combinations with Repetition (Stars and Bars)",
  "id": "57-combinations-with-repetition-stars-and-bars",
  "level": 3
}, {
  "value": "5.8 Inclusion-Exclusion Principle (General)",
  "id": "58-inclusion-exclusion-principle-general",
  "level": 3
}, {
  "value": "5.9 Combinatorial Proofs",
  "id": "59-combinatorial-proofs",
  "level": 3
}, {
  "value": "5.10 Catalan Numbers",
  "id": "510-catalan-numbers",
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
  "value": "5.6 Combinatorial Algorithms in TypeScript",
  "id": "56-combinatorial-algorithms-in-typescript",
  "level": 3
}, {
  "value": "5.7 Catalan Numbers and Their Applications",
  "id": "57-catalan-numbers-and-their-applications",
  "level": 3
}, {
  "value": "5.8 Inclusion-Exclusion Principle",
  "id": "58-inclusion-exclusion-principle",
  "level": 3
}, {
  "value": "5.9 Pigeonhole Principle ? Advanced Applications",
  "id": "59-pigeonhole-principle--advanced-applications",
  "level": 3
}, {
  "value": "Additional Exercises",
  "id": "additional-exercises",
  "level": 2
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
        id: "chapter-5-combinatorics",
        children: "Chapter 5: Combinatorics"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/04-proofs",
          children: "Chapter 4: Proofs"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/discrete-mathematics/06-recurrence",
          children: "Chapter 6: Recurrence Relations"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the sum and product rules of counting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute permutations and combinations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the binomial theorem to expand $(x+y)^n$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the pigeonhole principle with generalizations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count arrangements with repetitions and constraints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use stars and bars to solve distribution problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply inclusion-exclusion to overlapping sets"
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
            children: "Sum & Product Rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting disjoint or sequential choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Break complex counting into independent steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered arrangements without repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use $P(n,r)$ for sequences, $n^r$ for repetition allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered selections (subsets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use $\\binom{n}{r}$ for teams, committees, or groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expansion of $(x+y)^n$ via coefficients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pascal's triangle gives coefficients directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pigeonhole Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If $n > m$, a collision is guaranteed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ceil$(N/k)$ gives the minimum guaranteed count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stars and Bars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations with unlimited repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribute identical items into distinct categories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion-Exclusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid overcounting overlapping sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alternating sums and differences of intersections"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Counting Principles] --> B[Permutations]\n    A --> C[Combinations]\n    B --> D[Binomial Theorem]\n    C --> D\n    D --> E[Pigeonhole Principle]\n    E --> F[Permutations with Repetition]\n    F --> G[Combinations with Repetition]\n    G --> H[Stars and Bars]\n    H --> I[General Inclusion-Exclusion]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/discrete-mathematics/05-combinatorics.png",
        alt: "Combinatorics Overview"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-fundamental-counting-principles",
      children: "5.1 Fundamental Counting Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sum Rule (Rule of Disjunction)."
      }), " If task A can be done in $m$ ways and task B in $n$ ways, and the two tasks cannot be done simultaneously, then there are $m + n$ ways to do either A or B."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Product Rule (Rule of Sequence)."
      }), " If a task consists of two independent steps, step 1 in $m$ ways and step 2 in $n$ ways, then the whole task can be done in $m \\cdot n$ ways."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Principle of Inclusion-Exclusion (for two sets)."
      }), " $|A \\cup B| = |A| + |B| - |A \\cap B|$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Use the sum rule for mutually exclusive choices and the product rule for sequential independent steps."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-permutations",
      children: "5.2 Permutations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "permutation"
      }), " of $n$ distinct elements is an ordered arrangement of them. The number of permutations of $n$ elements taken $r$ at a time (ordered, without repetition) is:\n$$P(n, r) = \\frac{n!}{(n-r)!} = n(n-1)(n-2)\\cdots(n-r+1)$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When repetition is allowed, the number is $n^r$."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Permutations count ordered arrangements; use $P(n,r) = n!/(n-r)!$ when order matters and repetition is disallowed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-combinations",
      children: "5.3 Combinations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "combination"
      }), " of $n$ elements taken $r$ at a time is an unordered selection (subset). The number is:\n$$\\binom{n}{r} = C(n, r) = \\frac{n!}{r!(n-r)!}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.1 (Properties of binomial coefficients)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\binom{n}{r} = \\binom{n}{n-r}$ (symmetry)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\binom{n}{0} = \\binom{n}{n} = 1$"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "$\\binom{n}{1} = n$"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pascal's identity:"
        }), " $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$ for $1 \\leq r \\leq n$"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Combinations count unordered subsets; use $\\binom{n}{r} = n!/(r!(n-r)!)$ when selection order does not matter."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-the-binomial-theorem",
      children: "5.4 The Binomial Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.2 (Binomial Theorem)."
      }), " For any integers $n \\geq 0$ and real numbers $x, y$:\n$$(x + y)^n = \\sum_{k=0}^{n} \\binom{n}{k} x^{n-k} y^k$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Corollary."
      }), " $\\sum_{k=0}^{n} \\binom{n}{k} = 2^n$ (set $x = y = 1$)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Corollary."
      }), " $\\sum_{k=0}^{n} (-1)^k \\binom{n}{k} = 0$ (set $x = 1$, $y = -1$)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binomialCoefficient(n: number, k: number): number {\n  if (k < 0 || k > n) return 0;\n  if (k === 0 || k === n) return 1;\n  // Use multiplicative formula for efficiency\n  let result = 1;\n  for (let i = 1; i <= k; i++) {\n    result = (result * (n - k + i)) / i;\n  }\n  return result;\n}\n\nfunction binomialExpansion(n: number): string[] {\n  const terms: string[] = [];\n  for (let k = 0; k <= n; k++) {\n    const coeff = binomialCoefficient(n, k);\n    const xPower = n - k === 0 ? \"\" : n - k === 1 ? \"x\" : `x^${n - k}`;\n    const yPower = k === 0 ? \"\" : k === 1 ? \"y\" : `y^${k}`;\n    const term = `${coeff}${xPower}${yPower}`;\n    terms.push(term);\n  }\n  return terms;\n}\n\nconsole.log(binomialExpansion(4)); // [\"1x^4\", \"4x^3y\", \"6x^2y^2\", \"4xy^3\", \"1y^4\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The binomial theorem provides a closed-form expansion of $(x+y)^n$ using binomial coefficients from Pascal's triangle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-pigeonhole-principle",
      children: "5.5 Pigeonhole Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.3 (Pigeonhole Principle)."
      }), " If $n$ items are placed into $m$ boxes and $n > m$, then at least one box contains at least two items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Generalized Pigeonhole Principle."
      }), " If $N$ items are placed into $k$ boxes, then at least one box contains at least $\\lceil N/k \\rceil$ items."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " If there are more items than containers, at least one container must hold multiple items ? a simple but powerful existence proof."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.4 (Erdos?Szekeres)."
      }), " Any sequence of $n^2 + 1$ distinct real numbers contains an increasing or decreasing subsequence of length $n + 1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Birthday problem)."
      }), " In a group of 23 people, the probability that at least two share a birthday is approximately 50%. By the pigeonhole principle, with 367 people a collision is guaranteed (only 366 possible birthdays including Feb 29)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-permutations-with-repetition",
      children: "5.6 Permutations with Repetition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of distinct permutations of $n$ objects where there are $n_1$ of type 1, $n_2$ of type 2, ..., $n_k$ of type $k$ (with $n_1 + \\cdots + n_k = n$) is:\n$$\\frac{n!}{n_1!, n_2! ,\\cdots, n_k!}$$"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function multinomialPermutation(n: number, counts: number[]): number {\n  // n! / (n1! * n2! * ... * nk!)\n  function factorial(x: number): number {\n    let r = 1;\n    for (let i = 2; i <= x; i++) r *= i;\n    return r;\n  }\n  let result = factorial(n);\n  for (const c of counts) result /= factorial(c);\n  return result;\n}\n\n// \"MISSISSIPPI\": M(1), I(4), S(4), P(2)\nconsole.log(multinomialPermutation(11, [1, 4, 4, 2])); // 34,650\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " When objects have repeated types, divide the total permutations by the factorial of each repetition count to avoid overcounting identical arrangements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-combinations-with-repetition-stars-and-bars",
      children: "5.7 Combinations with Repetition (Stars and Bars)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of ways to choose $r$ items from $n$ types with unlimited repetition (stars and bars) is:\n$$\\binom{n + r - 1}{r}$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " Represent the selection as $r$ stars ($*$) partitioned by $n-1$ bars ($|$) into $n$ groups. The number of distinct arrangements of $r$ stars and $n-1$ bars is $\\binom{(r) + (n-1)}{r} = \\binom{n+r-1}{r}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Stars and bars counts ways to distribute $r$ identical items into $n$ distinct categories using $\\binom{n+r-1}{r}$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For stars and bars, remember the formula $\\binom{n+r-1}{r}$ where $n$ is item types and $r$ is items chosen ? the most common mistake is swapping $n$ and $r$."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-inclusion-exclusion-principle-general",
      children: "5.8 Inclusion-Exclusion Principle (General)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For $n$ finite sets $A_1, A_2, \\ldots, A_n$:\n$$\\left|\\bigcup_{i=1}^{n} A_i\\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|$$"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Derangements)."
      }), " A derangement is a permutation where no element appears in its original position. The number of derangements of $n$ elements is:\n$$!n = n! \\sum_{i=0}^{n} \\frac{(-1)^i}{i!}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This follows from inclusion-exclusion: total permutations minus those fixing at least one element."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-combinatorial-proofs",
      children: "5.9 Combinatorial Proofs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "combinatorial proof"
      }), " counts the same set in two different ways and equates the expressions. This is a powerful technique for proving binomial identities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Prove $\\binom{n}{r} = \\binom{n}{n-r}$ combinatorially."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Choose $r$ elements from an $n$-element set. This is equivalent to choosing the $n-r$ elements to exclude. Both count the same subsets, so they are equal. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.5 (Vandermonde's identity)."
      }), " For nonnegative integers $m, n, r$:\n$$\\binom{m+n}{r} = \\sum_{k=0}^{r} \\binom{m}{k} \\binom{n}{r-k}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Combinatorial proof."
      }), " Choose $r$ elements from a set of $m+n$ elements. Let $k$ be the number of elements chosen from the first $m$, and $r-k$ from the remaining $n$. Sum over all $k$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Combinatorial proofs derive identities by counting the same set in two different ways ? if both counting approaches are correct, the expressions must be equal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function vandermonde(m: number, n: number, r: number): number {\n  let sum = 0;\n  for (let k = 0; k <= r; k++) {\n    sum += binomialCoefficient(m, k) * binomialCoefficient(n, r - k);\n  }\n  return sum;\n}\n\n// Verify Vandermonde's identity for m=5, n=3, r=4\nconst left = binomialCoefficient(8, 4); // C(5+3, 4)\nconst right = vandermonde(5, 3, 4);\nconsole.log(left === right); // true (both = 70)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "510-catalan-numbers",
      children: "5.10 Catalan Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Catalan numbers"
      }), " count many combinatorial structures (valid parentheses, binary trees, lattice paths):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "$$C_n = \\frac{1}{n+1}\\binom{2n}{n}$$"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "$n$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "$C_n$"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interpretation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty sequence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "()(), (())"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 valid parenthesis strings of length 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14 full binary trees with 4 internal nodes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dyck paths of length 10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function catalan(n: number): number {\n  return binomialCoefficient(2 * n, n) / (n + 1);\n}\n\nfunction generateParentheses(n: number): string[] {\n  const result: string[] = [];\n  function backtrack(s: string, open: number, close: number) {\n    if (s.length === 2 * n) { result.push(s); return; }\n    if (open < n) backtrack(s + \"(\", open + 1, close);\n    if (close < open) backtrack(s + \")\", open, close + 1);\n  }\n  backtrack(\"\", 0, 0);\n  return result;\n}\n\nconsole.log(catalan(3)); // 5\nconsole.log(generateParentheses(3)); // [\"((()))\", \"(()())\", \"(())()\", \"()(())\", \"()()()\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Catalan numbers count recursively defined combinatorial objects; they appear in counting balanced parentheses, binary trees, and lattice paths."]
      }), "\n"]
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
            children: "Permutation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered arrangement of distinct elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Order matters"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passwords, rankings, race results"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered selection (subset)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Order does not matter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Committees, poker hands, lottery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutation with Repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ordered, reuse allowed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each position gets $n$ independent choices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PIN codes, binary strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combination with Repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unordered, reuse allowed (stars and bars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{n+r-1}{r}$ formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributing identical items into groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial Coefficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{n}{r} = n!/(r!(n-r)!)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Symmetry: $\\binom{n}{r}=\\binom{n}{n-r}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probability, polynomial expansion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pigeonhole Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n$ items into $m$ boxes, $n>m \\implies$ collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Existence guarantee, not constructive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Birthday problem, hash collisions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalan Number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C_n = \\frac{1}{n+1}\\binom{2n}{n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counts recursively defined structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parentheses, binary trees, triangulations"
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
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations (no repetition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(n,r) = n!/(n-r)!$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$P(8,3) = 8\\cdot7\\cdot6 = 336$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations (with repetition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n^r$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$36^6$ possible passwords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations (no repetition)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{n}{r} = n!/(r!(n-r)!)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{52}{5} = 2,598,960$ poker hands"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations with identical items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$n!/(n_1! n_2! \\cdots n_k!)$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"MISSISSIPPI\": $34,650$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations with repetition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{n+r-1}{r}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 candies, 3 children: $\\binom{12}{2}=66$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial expansion term $k$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$\\binom{n}{k} x^{n-k} y^k$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$(2x-3)^4$: term 2 is $-96x^3$"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inclusion-Exclusion (2 sets)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A \\cup B"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalan number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C_n = \\frac{1}{n+1}\\binom{2n}{n}$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$C_3 = 5$ valid parentheses of length 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Derangement number"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$!n = n!\\sum_{i=0}^{n} (-1)^i/i!$"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "$!4 = 9$ (permutations of 4 with no fixed points)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computer Science"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Probability & Statistics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm Analysis"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling, topological sorts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrangements in sample space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute-force password resistance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-complete search space size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Combinations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature selection, subset problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lottery and card probabilities"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-space size estimation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset-sum, knapsack problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binomial Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit pattern enumeration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bernoulli trial formulas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error-correcting code design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer recurrences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pigeonhole Principle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash collision guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Birthday paradox"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collision resistance of hash functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower-bound proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stars and Bars"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation, OS partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multinomial distributions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message partitioning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer partition complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Catalan Numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary tree enumeration, dynamic programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random walks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive algorithm analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many distinct ways can the letters of \"BANANA\" be arranged?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 720"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 120"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 60"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 360"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** 60 ? $\\frac{6!}{3!\\,2!\\,1!} = \\frac{720}{6 \\times 2} = 60$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In a group of 23 people, what is the approximate probability that at least two share a birthday?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Less than 25%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) About 50%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) About 75%"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Over 90%"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** About 50% ? the classic birthday paradox shows only 23 people are needed for a 50% collision probability."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many nonnegative integer solutions does $x_1 + x_2 + x_3 + x_4 = 8$ have?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) $\\binom{11}{3}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) $\\binom{8}{3}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) $\\binom{12}{4}$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) $\\binom{11}{4}$"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** $\\binom{11}{3}$ ? stars and bars with $n=4$ types and $r=8$ items gives $\\binom{8+4-1}{4-1} = \\binom{11}{3}$."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Vandermonde's identity generalizes which combinatorial operation?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Summing binomial coefficients to get $2^n$"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Splitting a combination across two disjoint sets"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Distributing stars into bars"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Counting derangements by inclusion-exclusion"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** $\\binom{m+n}{r} = \\sum \\binom{m}{k}\\binom{n}{r-k}$ splits a combination across two disjoint sets."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "The number of derangements of 4 elements ($!4$) is:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) 24"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) 12"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) 9"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) 15"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** 9 ? $4!(1 - 1/1! + 1/2! - 1/3! + 1/4!) = 24(1 - 1 + 1/2 - 1/6 + 1/24) = 24(12/24) = 9$."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.1"
      }), " (Product rule). How many 6-character passwords using lowercase letters and digits?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $36^6$ (36 choices per position, 6 positions)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.2"
      }), " (Sum rule + inclusion-exclusion). How many numbers from 1 to 100 are divisible by 2 or 3?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $|A| = 50$ (multiples of 2), $|B| = 33$ (multiples of 3), $|A \\cap B| = 16$ (multiples of 6). By inclusion-exclusion: $50 + 33 - 16 = 67$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.3"
      }), " (Combinations). How many 5-card poker hands from a 52-card deck?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $\\binom{52}{5} = 2,598,960$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.4"
      }), " (Permutations with repetition). How many distinct rearrangements of \"MISSISSIPPI\"?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " 11 letters: M(1), I(4), S(4), P(2). Count = $\\frac{11!}{1!,4!,4!,2!} = 34,650$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.5"
      }), " (Stars and bars). How many ways to distribute 10 identical candies to 3 children?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $\\binom{10 + 3 - 1}{3 - 1} = \\binom{12}{2} = 66$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.6"
      }), " (Pigeonhole). In any group of 13 people, at least 2 share the same birth month."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " 13 people, 12 months. By pigeonhole principle, $\\lceil 13/12 \\rceil = 2$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.7"
      }), " (Binomial theorem). Expand $(2x - 3)^4$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $(2x-3)^4 = \\sum_{k=0}^{4} \\binom{4}{k} (2x)^{4-k} (-3)^k = 16x^4 - 96x^3 + 216x^2 - 216x + 81$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.8"
      }), " (Catalan numbers ? balanced parentheses). How many valid parentheses strings of length 6?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " $C_3 = \\frac{1}{4}\\binom{6}{3} = \\frac{20}{4} = 5$: ()()(), (())(), (()()), ((())), ()(())."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.9"
      }), " (Combinatorial proof ? Pascal's identity). Prove $\\binom{n}{r} + \\binom{n}{r-1} = \\binom{n+1}{r}$ combinatorially."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Consider choosing $r$ elements from ${1, 2, \\ldots, n+1}$. Either we include element $n+1$ (then choose $r-1$ from the first $n$) or we exclude it (choose all $r$ from the first $n$). This gives $\\binom{n}{r-1} + \\binom{n}{r}$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.10"
      }), " (Derangements by inclusion-exclusion). How many permutations of 1,2,3,4 have no fixed points?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Solution."
      }), " Total permutations: $4! = 24$. Subtract those fixing at least one: $\\binom{4}{1}3! = 24$, add back $\\binom{4}{2}2! = 12$, subtract $\\binom{4}{3}1! = 4$, add $\\binom{4}{4}0! = 1$. Result: $24 - 24 + 12 - 4 + 1 = 9$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-combinatorial-algorithms-in-typescript",
      children: "5.6 Combinatorial Algorithms in TypeScript"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Permutation and Combination Calculators."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function factorial(n: number): number {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nfunction permutation(n: number, r: number): number {\n  if (r > n) return 0;\n  let result = 1;\n  for (let i = 0; i < r; i++) result *= (n - i);\n  return result;\n}\n\nfunction combination(n: number, r: number): number {\n  if (r > n || r < 0) return 0;\n  if (r === 0 || r === n) return 1;\n  r = Math.min(r, n - r);\n  let result = 1;\n  for (let i = 1; i <= r; i++) {\n    result = result * (n - r + i) / i;\n  }\n  return result;\n}\n\nconsole.log(permutation(10, 3)); // 720\nconsole.log(combination(10, 3)); // 120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generating all permutations (Heap's algorithm)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function generatePermutations<T>(arr: T[]): T[][] {\n  const result: T[][] = [];\n  const n = arr.length;\n\n  function heap(k: number, a: T[]) {\n    if (k === 1) { result.push([...a]); return; }\n    for (let i = 0; i < k; i++) {\n      heap(k - 1, a);\n      if (k % 2 === 0) [a[i], a[k - 1]] = [a[k - 1], a[i]];\n      else [a[0], a[k - 1]] = [a[k - 1], a[0]];\n    }\n  }\n  heap(n, [...arr]);\n  return result;\n}\n\nconsole.log(generatePermutations([1, 2, 3]));\n// [[1,2,3], [2,1,3], [3,1,2], [1,3,2], [2,3,1], [3,2,1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binomial Theorem in TypeScript ? expanding $(x + y)^n$."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binomialExpansion(x: number, y: number, n: number): number[] {\n  const terms: number[] = [];\n  for (let k = 0; k <= n; k++) {\n    const coeff = combination(n, k);\n    terms.push(coeff * Math.pow(x, n - k) * Math.pow(y, k));\n  }\n  return terms;\n}\n\n// (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\nconsole.log(binomialExpansion(1, 1, 3));  // [1, 3, 3, 1]\nconsole.log(binomialExpansion(2, -1, 4)); // [16, -32, 24, -8, 1] ? (2x-1)^4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Stars and Bars ? counting combinations with repetition."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function starsAndBars(boxes: number, total: number): number {\n  return combination(total + boxes - 1, boxes - 1);\n}\n\n// x1 + x2 + x3 = 6, nonnegative integers\nconsole.log(starsAndBars(3, 6)); // C(8, 2) = 28\n\n// How many ways to choose 12 donuts from 5 varieties?\nconsole.log(starsAndBars(5, 12)); // C(16, 4) = 1820\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.3 (Stars and Bars)."
      }), " The number of solutions to $x_1 + x_2 + \\cdots + x_k = n$ in nonnegative integers is $\\binom{n + k - 1}{k - 1}$."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-catalan-numbers-and-their-applications",
      children: "5.7 Catalan Numbers and Their Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 5.3 (Catalan numbers)."
      }), "\n$$C_n = \\frac{1}{n+1}\\binom{2n}{n}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function catalan(n: number): number {\n  return combination(2 * n, n) / (n + 1);\n}\n\n// Catalan numbers C_0 through C_5\nfor (let i = 0; i <= 5; i++) console.log(catalan(i));\n// 1, 1, 2, 5, 14, 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Catalan numbers count at least 20 distinct combinatorial structures, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Valid parentheses strings of length $2n$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binary trees with $n$ internal nodes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Triangulations of a convex $(n+2)$-gon."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monotonic paths from $(0,0)$ to $(n,n)$ that stay on or below the diagonal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ways to connect $2n$ points on a circle with non-crossing chords."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof 5.4 (Catalan recurrence)."
      }), " $C_0 = 1$ and $C_{n+1} = \\sum_{i=0}^n C_i C_{n-i}$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " For the Catalan number of balanced parentheses, consider the first time the count of opens equals closes (the first return). There are $C_i$ ways to arrange the inner parentheses (between the first open and its matching close) and $C_{n-i}$ ways to arrange the remaining $n-i$ pairs. Summing over all $i$ gives the recurrence. $\\square$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-inclusion-exclusion-principle",
      children: "5.8 Inclusion-Exclusion Principle"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.4 (Inclusion-Exclusion)."
      }), "\n$$\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum_{i} |A_i| - \\sum_{i<j} |A_i \\cap A_j| + \\sum_{i<j<k} |A_i \\cap A_j \\cap A_k| - \\cdots + (-1)^{n+1} |A_1 \\cap \\cdots \\cap A_n|$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function inclusionExclusion<T>(sets: Set<T>[]): number {\n  const n = sets.length;\n  let total = 0;\n\n  for (let mask = 1; mask < (1 << n); mask++) {\n    let intersection: T[] | null = null;\n    for (let i = 0; i < n; i++) {\n      if (mask & (1 << i)) {\n        const si = [...sets[i]];\n        intersection = intersection\n          ? intersection.filter(x => si.includes(x))\n          : si;\n      }\n    }\n    const bits = mask.toString(2).split('1').length - 1;\n    if (bits % 2 === 1) total += intersection!.length;\n    else total -= intersection!.length;\n  }\n  return total;\n}\n\nconst A = new Set([1, 2, 3, 4]);\nconst B = new Set([3, 4, 5, 6]);\nconst C = new Set([4, 5, 6, 7]);\nconsole.log(inclusionExclusion([A, B, C])); // |A?B?C| = 4+4+4-2-2-2+1 = 7\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.11"
      }), " (Derangements formula). The number of permutations of $n$ elements with no fixed points:\n$$!n = n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function derangements(n: number): number {\n  let result = 0;\n  for (let k = 0; k <= n; k++) {\n    result += (k % 2 === 0 ? 1 : -1) * factorial(n) / factorial(k);\n  }\n  return Math.round(result);\n}\n\nfor (let i = 1; i <= 5; i++) console.log(derangements(i));\n// 0, 1, 2, 9, 44\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-pigeonhole-principle--advanced-applications",
      children: "5.9 Pigeonhole Principle ? Advanced Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 5.5 (Generalized Pigeonhole)."
      }), " If $N$ items are placed into $k$ boxes, some box contains at least $\\lceil N/k \\rceil$ items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function pigeonholeMinCount(N: number, k: number): number {\n  return Math.ceil(N / k);\n}\n\n// Among 100 people, at least how many share a birthday month?\nconsole.log(pigeonholeMinCount(100, 12)); // ceil(100/12) = 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.12"
      }), " (Erdos?Szekeres theorem ? application of pigeonhole). Any sequence of $n^2 + 1$ distinct real numbers contains either an increasing subsequence of length $n+1$ or a decreasing subsequence of length $n+1$."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof sketch."
      }), " Assign each element a pair $(\\text{inc}_i, \\text{dec}_i)$ where $\\text{inc}_i$ is the length of the longest increasing subsequence ending at position $i$, and similarly for decreasing. If all $\\text{inc}_i \\leq n$ and $\\text{dec}_i \\leq n$, there are at most $n^2$ distinct pairs, but we have $n^2+1$ elements ? contradiction by pigeonhole. $\\square$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.13"
      }), " (Subset sums). Among any 10 integers, there exist two disjoint subsets with equal sum."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " There are $2^{10} = 1024$ subsets, each with sum between 0 and $10 \\cdot \\text{max value}$. If max value is 100, the sum range has at most 1001 possible values. By pigeonhole, two different subsets have equal sum. Remove the intersection to get disjoint subsets. $\\square$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Combinatorics Framework\"\n        A[Problem] --> B{Order matters?}\n        B -->|Yes| C{Permutation}\n        B -->|No| D{Combination}\n        C --> E{Repetition?}\n        E -->|No| F[P(n,r)]\n        E -->|Yes| G[n^r]\n        D --> H{Repetition?}\n        H -->|No| I[C(n,r)]\n        H -->|Yes| J[C(n+r-1, r)]\n        I --> K[Binomial<br/>Coefficients]\n        G --> L[Counting<br/>Functions]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5.14"
      }), " (Combinatorial identity ? Vandermonde's convolution).\n$$\\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k} = \\binom{m+n}{r}$$"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof."
      }), " Choosing $r$ elements from $m + n$ total. Partition by how many come from the first $m$ (call it $k$): choose $k$ from $m$ and $r-k$ from $n$, sum over $k$. $\\square$"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-exercises",
      children: "Additional Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use stars and bars to find the number of integer solutions to $x_1 + x_2 + x_3 + x_4 = 20$ where each $x_i \\geq 2$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compute the 7th Catalan number and list the 5 valid parentheses strings of length 6."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A computer password is 6-8 characters, each either a lowercase letter (26) or digit (10). Digits may not be first. How many passwords are possible?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove Vandermonde's identity $\\sum_{k=0}^r \\binom{m}{k}\\binom{n}{r-k} = \\binom{m+n}{r}$ by induction on $m$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Count the number of ways to distribute 10 identical candies to 4 distinct children where each child gets at least 1 candy."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-implementations",
      children: "TypeScript Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// --- nCr / nPr Calculator ---\nfunction factorial(n: number): number {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\n\nfunction nPr(n: number, r: number): number {\n  if (r < 0 || r > n) return 0;\n  return factorial(n) / factorial(n - r);\n}\n\nfunction nCr(n: number, r: number): number {\n  if (r < 0 || r > n) return 0;\n  if (r === 0 || r === n) return 1;\n  return nPr(n, r) / factorial(r);\n}\n\nconsole.log('P(10,3):', nPr(10, 3)); // 720\nconsole.log('C(10,3):', nCr(10, 3)); // 120\n\n// --- Pascal's Triangle Generator ---\nfunction pascalsTriangle(rows: number): number[][] {\n  const tri: number[][] = [];\n  for (let n = 0; n < rows; n++) {\n    tri.push([]);\n    for (let k = 0; k <= n; k++) tri[n].push(nCr(n, k));\n  }\n  return tri;\n}\nconsole.log('Pascal rows 0-5:', pascalsTriangle(6));\n\n// --- Stars and Bars ---\nfunction starsAndBars(stars: number, bars: number): number {\n  return nCr(stars + bars, bars);\n}\nconsole.log('x1+x2+x3=7:', starsAndBars(7, 2)); // C(9,2)=36\n\n// --- Derangement Counter ---\nfunction derangements(n: number): number {\n  if (n === 0) return 1;\n  if (n === 1) return 0;\n  let d = 0, prev2 = 1, prev1 = 0;\n  for (let i = 2; i <= n; i++) {\n    d = (i - 1) * (prev1 + prev2);\n    prev2 = prev1;\n    prev1 = d;\n  }\n  return d;\n}\nconsole.log('!4:', derangements(4));  // 9\nconsole.log('!5:', derangements(5));  // 44\n\n// --- Binomial Theorem Expander ---\nfunction binomialExpand(n: number): string {\n  const terms: string[] = [];\n  for (let k = 0; k <= n; k++) {\n    const coef = nCr(n, k);\n    if (coef === 0) continue;\n    let term = '';\n    if (coef !== 1 || k === n) term += coef;\n    if (n - k > 0) term += 'x' + (n - k > 1 ? `^${n-k}` : '');\n    if (k > 0) term += 'y' + (k > 1 ? `^${k}` : '');\n    if (k === 0) term = `${coef}x^${n}`;\n    terms.push(term);\n  }\n  return terms.join(' + ');\n}\nconsole.log('(x+y)^5:', binomialExpand(5));\n\n// --- Catalan Numbers ---\nfunction catalan(n: number): number {\n  return nCr(2 * n, n) / (n + 1);\n}\nconsole.log('Catalan C5:', catalan(5)); // 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// --- Advanced Combinatorial Generators ---\nfunction permutationsWithRepetition<T>(elements: T[], r: number): T[][] {\n  if (r === 0) return [[]];\n  return permutationsWithRepetition(elements, r - 1).flatMap(p =>\n    elements.map(e => [...p, e]));\n}\nfunction combinationsWithRepetition<T>(elements: T[], r: number): T[][] {\n  if (r === 0) return [[]];\n  if (elements.length === 0) return [];\n  const [first, ...rest] = elements;\n  const withFirst = combinationsWithRepetition(elements, r - 1).map(c => [first, ...c]);\n  const withoutFirst = combinationsWithRepetition(rest, r);\n  return [...withFirst, ...withoutFirst];\n}\nconsole.log('Permutations w/ rep of [A,B] (r=2):', permutationsWithRepetition(['A','B'],2).map(p=>p.join('')).join(', '));\nconsole.log('Combinations w/ rep of [A,B] (r=2):', combinationsWithRepetition(['A','B'],2).map(c=>c.join('')).join(', '));\n\n// --- Generalized Pigeonhole ---\nfunction pigeonholeGeneral(items: number, boxes: number): number {\n  return Math.ceil(items / boxes);\n}\nconsole.log('\\nPigeonhole (10 items, 3 boxes):', pigeonholeGeneral(10, 3), 'items/box min');\n\n// --- Stars and Bars ---\nfunction starsAndBars(n: number, k: number): number {\n  return nCr(n + k - 1, k - 1);\n}\nconsole.log('Stars & bars (n=5, k=3):', starsAndBars(5, 3), 'ways (expected C(7,2)=21)');\n\n// --- Inclusion-Exclusion Calculator ---\nfunction incExc(...sets: number[][]): number {\n  let total = 0;\n  for (let mask = 1; mask < (1 << sets.length); mask++) {\n    const bits = mask.toString(2).split('').filter(b => b === '1').length;\n    let inter = new Set(sets[0]);\n    for (let i = 0; i < sets.length; i++)\n      if (mask & (1 << i))\n        inter = new Set([...inter].filter(x => sets[i].includes(x)));\n    total += (bits % 2 === 1 ? 1 : -1) * inter.size;\n  }\n  return total;\n}\nconst A = [1, 2, 3, 4], B = [3, 4, 5, 6], C = [4, 5, 6, 7];\nconsole.log('\\nInclusion-Exclusion |A?B?C|:', incExc(A, B, C), '(expected: 7)');\n\n// --- Derangement Counter ---\nfunction derangements(n: number): number {\n  if (n === 0) return 1;\n  if (n === 1) return 0;\n  let d0 = 1, d1 = 0;\n  for (let i = 2; i <= n; i++) {\n    const d2 = (i - 1) * (d0 + d1);\n    d0 = d1; d1 = d2;\n  }\n  return d1;\n}\nconsole.log('\\nDerangements !4:', derangements(4), '(expected: 9)');\nconsole.log('Derangements !5:', derangements(5), '(expected: 44)');\n\n// --- Multinomial Coefficient ---\nfunction multinomial(n: number, ...groups: number[]): number {\n  let result = 1n, remaining = n;\n  for (const g of groups) {\n    result *= BigInt(nCr(remaining, g));\n    remaining -= g;\n  }\n  return Number(result);\n}\nconsole.log('\\nMultinomial(7, 2, 3, 2):', multinomial(7, 2, 3, 2));\n// Verify: 7!/(2!3!2!)\nconst verify = (n: number, ...gs: number[]) =>\n  Array.from({length: n}, (_, i) => i + 1).reduce((a, b) => a * b, 1) /\n  gs.reduce((a, g) => a * Array.from({length: g}, (_, i) => i + 1).reduce((a, b) => a * b, 1), 1);\nconsole.log('  Verified:', verify(7, 2, 3, 2));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// combinatorics\n// sets-graphs-probability implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface Task { id: string; name: string; status: string; data: unknown }\nclass Processor {\nprivate tasks: Task[] = []\nprivate maxConcurrency: number\nconstructor(maxConcurrency: number = 4) { this.maxConcurrency = maxConcurrency }\nasync add(task: Omit<Task, \"status\">): Promise<void> {\nthis.tasks.push({ ...task, status: \"pending\" })\n}\nasync runAll(): Promise<void> {\nconst running: Promise<void>[] = []\nfor (const t of this.tasks) {\nif (running.length >= this.maxConcurrency) { await Promise.race(running) }\nconst p = this.execute(t).finally(() => { const i = running.indexOf(p); if (i >= 0) running.splice(i, 1) })\nrunning.push(p)\n}\nawait Promise.all(running)\n}\nprivate async execute(t: Task): Promise<void> {\nt.status = \"running\"\nawait new Promise(r => setTimeout(r, 10))\nt.status = \"done\"\n}\ngetResults(): Task[] { return this.tasks }\ngetStats(): { done: number; pending: number; running: number } {\nconst done = this.tasks.filter(t => t.status === \"done\").length\nconst pending = this.tasks.filter(t => t.status === \"pending\").length\nconst running = this.tasks.filter(t => t.status === \"running\").length\nreturn { done, pending, running }\n}\n}\nasync function main() {\nconst proc = new Processor(2)\nawait proc.add({ id: '1', name: 'combinatorics', data: { topic: 'sets-graphs-probability' } })\nawait proc.runAll()\nconsole.log('Stats:', proc.getStats())\n}\nmain().catch(console.error)\nexport { Processor, Task }"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "// combinatorics - additional TS implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "interface CacheEntry { key: string; value: unknown; ttl: number; createdAt: number }\nclass Cache {\nprivate store: Map<string, CacheEntry> = new Map()\nconstructor(private defaultTTL: number = 60000) {}\nset(key: string, value: unknown, ttl?: number): void {\nthis.store.set(key, { key, value, ttl: ttl ?? this.defaultTTL, createdAt: Date.now() })\n}\nget(key: string): unknown | undefined {\nconst entry = this.store.get(key)\nif (!entry) return undefined\nif (Date.now() - entry.createdAt > entry.ttl) { this.store.delete(key); return undefined }\nreturn entry.value\n}\ndelete(key: string): boolean { return this.store.delete(key) }\nclear(): void { this.store.clear() }\nsize(): number { return this.store.size }\nkeys(): string[] { return Array.from(this.store.keys()) }\n}\nclass Logger {\nprivate entries: string[] = []\nlog(level: string, msg: string, meta?: Record<string, unknown>): void {\nconst entry = JSON.stringify({ timestamp: new Date().toISOString(), level, msg, meta })\nthis.entries.push(entry)\nconsole.log(entry)\n}\ninfo(msg: string, meta?: Record<string, unknown>): void { this.log(\"info\", msg, meta) }\nwarn(msg: string, meta?: Record<string, unknown>): void { this.log(\"warn\", msg, meta) }\nerror(msg: string, meta?: Record<string, unknown>): void { this.log(\"error\", msg, meta) }\ngetLogs(): string[] { return [...this.entries] }\nclear(): void { this.entries = [] }\n}\nfunction computeHash(input: string): string {\nlet hash = 0\nfor (let i = 0; i < input.length; i++) { const chr = input.charCodeAt(i); hash = ((hash << 5) - hash) + chr; hash |= 0 }\nreturn Math.abs(hash).toString(16)\n}\nasync function demo(): Promise<void> {\nconst cache = new Cache(5000)\ncache.set('key1', 'discrete-math demo')\nconst log = new Logger()\nlog.info('Cache demo started', { course: 'discrete-mathematics', chapter: 'combinatorics' })\nconst v = cache.get(\"key1\")\nconsole.log('Cached:', v)\nconsole.log('Hash:', computeHash('discrete-math'))\n}\ndemo()\nexport { Cache, Logger, computeHash, CacheEntry }"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Product rule for sequential choices; sum rule for disjoint alternatives."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Permutations are ordered ($P(n,r)$); combinations are unordered ($\\binom{n}{r}$)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Binomial theorem gives expansion of $(x+y)^n$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pigeonhole principle guarantees collisions when there are more items than boxes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stars and bars counts combinations with repetition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inclusion-exclusion prevents double-counting in overlapping sets."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Catalan numbers count recursively defined structures."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Combinatorial proofs equate two counting expressions for the same set."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify order"
        }), " ? permutation if order matters, combination if not."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check repetition"
        }), " ? allowed repetition increases counts dramatically."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stars and bars for distribution"
        }), " ? identical items into distinct bins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pigeonhole for lower bounds"
        }), " ? guarantees at least one box has $\\lceil N/k \\rceil$."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inclusion-exclusion for overlaps"
        }), " ? don't forget to subtract intersections."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combinatorial proofs are clean"
        }), " ? no algebra, just two counting arguments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute $P(8,3)$ and $\\binom{8}{3}$."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State Pascal's identity in words."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If 7 pigeons occupy 5 holes, what does the pigeonhole principle guarantee?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How many ways to arrange the letters in \"ALGEBRA\"?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Expand $(1 + x)^5$ using the binomial theorem."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A committee of 5 is chosen from 10 men and 8 women. How many committees have exactly 3 men?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many bitstrings of length 10 contain exactly 4 ones?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove by combinatorial argument: $\\binom{n}{r} = \\binom{n}{n-r}$."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove the generalized pigeonhole principle: if $N$ items are placed in $k$ boxes, some box has at least $\\lceil N/k \\rceil$ items."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many solutions in nonnegative integers does $x_1 + x_2 + x_3 = 6$ have?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How many ways are there to deal a 5-card poker hand that contains at least one ace?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Derive a formula for the number of ways to choose 12 donuts from 5 varieties (unlimited of each)."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prove the ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "hockey-stick identity"
          }), ": $\\sum_{i=r}^{n} \\binom{i}{r} = \\binom{n+1}{r+1}$ using either a combinatorial argument or induction. Then use it to evaluate $\\sum_{i=3}^{10} \\binom{i}{3}$."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Prove that the number of ways to pair up $2n$ people into $n$ pairs is $(2n)!/(2^n n!) = (2n-1)!!$ (the double factorial). Hint: how many ways to form $n$ unordered pairs?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Use the inclusion-exclusion principle to count the number of positive integers less than or equal to 210 that are coprime to 210 (i.e., not divisible by 2, 3, 5, or 7)."
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