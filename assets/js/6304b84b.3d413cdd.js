"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[17790],{

/***/ 35874
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_01_analysis_md_630_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-01-analysis-md-630.json
const site_docs_courses_algorithms_01_analysis_md_630_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/01-analysis","title":"Chapter 1: Fundamentals of Algorithm Analysis","description":"Prerequisites Chapter 2: Searching — From measuring efficiency to finding elements","source":"@site/docs/courses/algorithms/01-analysis.md","sourceDirName":"courses/algorithms","slug":"/algorithms/01-analysis","permalink":"/ai-engineering-journey/algorithms/01-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-analysis","slug":"/algorithms/01-analysis","title":"Chapter 1: Fundamentals of Algorithm Analysis","sidebar_label":"Chapter 1: Fundamentals of Algorithm Analysis","sidebar_position":1},"sidebar":"course-algorithms","next":{"title":"Chapter 2: Searching","permalink":"/ai-engineering-journey/algorithms/02-searching"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/01-analysis.md


const frontMatter = {
	id: '01-analysis',
	slug: '/algorithms/01-analysis',
	title: 'Chapter 1: Fundamentals of Algorithm Analysis',
	sidebar_label: 'Chapter 1: Fundamentals of Algorithm Analysis',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Fundamentals of Algorithm Analysis';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Algorithm Analysis Matters",
  "id": "why-algorithm-analysis-matters",
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
  "value": "1.1 Asymptotic Notation",
  "id": "11-asymptotic-notation",
  "level": 3
}, {
  "value": "Algorithm Steps: How to Find the Asymptotic Bound",
  "id": "algorithm-steps-how-to-find-the-asymptotic-bound",
  "level": 4
}, {
  "value": "Dry Run: Visualizing Bound Relations",
  "id": "dry-run-visualizing-bound-relations",
  "level": 4
}, {
  "value": "Code Examples: Complexity in Practice",
  "id": "code-examples-complexity-in-practice",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages of Asymptotic Notation",
  "id": "advantages--disadvantages-of-asymptotic-notation",
  "level": 4
}, {
  "value": "Edge Cases in Asymptotic Analysis",
  "id": "edge-cases-in-asymptotic-analysis",
  "level": 4
}, {
  "value": "1.2 Recurrence Relations",
  "id": "12-recurrence-relations",
  "level": 3
}, {
  "value": "1.2.1 Substitution Method",
  "id": "121-substitution-method",
  "level": 4
}, {
  "value": "Algorithm Steps for Substitution Method",
  "id": "algorithm-steps-for-substitution-method",
  "level": 5
}, {
  "value": "Dry Run Trace Table: T(n) = 2T(n/2) + n with guess T(n) ≤ cn lg n",
  "id": "dry-run-trace-table-tn--2tn2--n-with-guess-tn--cn-lg-n",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages of Substitution Method",
  "id": "advantages--disadvantages-of-substitution-method",
  "level": 5
}, {
  "value": "Edge Cases in Substitution Method",
  "id": "edge-cases-in-substitution-method",
  "level": 5
}, {
  "value": "1.2.2 Recursion-Tree Method",
  "id": "122-recursion-tree-method",
  "level": 4
}, {
  "value": "Dry Run Trace Table: T(n) = 3T(n/4) + cn²",
  "id": "dry-run-trace-table-tn--3tn4--cn",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages of Recursion-Tree Method",
  "id": "advantages--disadvantages-of-recursion-tree-method",
  "level": 5
}, {
  "value": "Edge Cases in Recursion-Tree Method",
  "id": "edge-cases-in-recursion-tree-method",
  "level": 5
}, {
  "value": "1.2.3 Master Theorem",
  "id": "123-master-theorem",
  "level": 4
}, {
  "value": "Algorithm Steps: How to Apply the Master Theorem",
  "id": "algorithm-steps-how-to-apply-the-master-theorem",
  "level": 5
}, {
  "value": "Dry Run: Comparing f(n) with n^{log_b a}",
  "id": "dry-run-comparing-fn-with-nlog_b-a",
  "level": 5
}, {
  "value": "Advantages &amp; Disadvantages of the Master Theorem",
  "id": "advantages--disadvantages-of-the-master-theorem",
  "level": 5
}, {
  "value": "Edge Cases Where the Master Theorem Fails",
  "id": "edge-cases-where-the-master-theorem-fails",
  "level": 5
}, {
  "value": "Code Implementations: Merge Sort (Divide and Conquer)",
  "id": "code-implementations-merge-sort-divide-and-conquer",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages of Recurrence Analysis Methods",
  "id": "advantages--disadvantages-of-recurrence-analysis-methods",
  "level": 4
}, {
  "value": "1.3 Amortized Analysis",
  "id": "13-amortized-analysis",
  "level": 3
}, {
  "value": "1.3.1 Aggregate Method",
  "id": "131-aggregate-method",
  "level": 4
}, {
  "value": "1.3.2 Accounting Method",
  "id": "132-accounting-method",
  "level": 4
}, {
  "value": "1.3.3 Potential Method",
  "id": "133-potential-method",
  "level": 4
}, {
  "value": "Algorithm Steps for Amortized Analysis",
  "id": "algorithm-steps-for-amortized-analysis",
  "level": 4
}, {
  "value": "Dry Run: Dynamic Array Insertions (Aggregate Method)",
  "id": "dry-run-dynamic-array-insertions-aggregate-method",
  "level": 4
}, {
  "value": "Code Examples: Dynamic Array (Amortized O(1) Append)",
  "id": "code-examples-dynamic-array-amortized-o1-append",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages of Amortized Analysis",
  "id": "advantages--disadvantages-of-amortized-analysis",
  "level": 4
}, {
  "value": "Edge Cases in Amortized Analysis",
  "id": "edge-cases-in-amortized-analysis",
  "level": 4
}, {
  "value": "Example 1.1: Ordering Functions by Growth Rate",
  "id": "example-11-ordering-functions-by-growth-rate",
  "level": 3
}, {
  "value": "Example 1.2: Solving by Master Theorem",
  "id": "example-12-solving-by-master-theorem",
  "level": 3
}, {
  "value": "Example 1.3: Substitution Method",
  "id": "example-13-substitution-method",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Common Pitfalls Table",
  "id": "common-pitfalls-table",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
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
    annotation: "annotation",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    math: "math",
    mi: "mi",
    mn: "mn",
    mo: "mo",
    mrow: "mrow",
    ol: "ol",
    p: "p",
    pre: "pre",
    semantics: "semantics",
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
        id: "chapter-1-fundamentals-of-algorithm-analysis",
        children: "Chapter 1: Fundamentals of Algorithm Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " None | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/02-searching",
          children: "Chapter 2: Searching"
        }), " — From measuring efficiency to finding elements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define and apply Big-O, Big-Omega, Big-Theta, little-o, and little-omega notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve recurrence relations using the substitution method, recursion-tree method, and the master theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform amortized analysis using the aggregate method, accounting method, and potential method."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the asymptotic complexity of iterative and recursive algorithms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-algorithm-analysis-matters",
      children: "Why Algorithm Analysis Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine choosing a route to work. Walking works for 1 block (linear in distance) but fails at 10 miles. A bicycle handles neighborhood errands, but a car cruises at constant speed once on the highway. Algorithm analysis is the same science — it predicts how your code behaves before input grows."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider Google: it processes 40,000+ queries per second. If search were O(n²) instead of O(n log n), each query would take years instead of milliseconds. Facebook's News Feed ranks billions of posts in real time. Amazon recommends from 350+ million products. Without algorithm analysis, engineers build bridges without load-testing them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Three reasons every developer needs algorithm analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalability prediction"
        }), " — Code that runs fine on 100 items may crash on 100,000."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tool selection"
        }), " — HashMap (O(1)) vs. TreeMap (O(log n)) trades speed for ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bottleneck hunting"
        }), " — A single O(n³) loop can dominate an entire system's runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always ask \"What happens when n is 10? 1000? 1,000,000?\" If you can't answer, you need asymptotic analysis."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Algorithm analysis is the engineering discipline that turns \"it works on my machine\" into \"it scales to production.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Asymptotic Notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O, Θ, Ω describe upper, tight, and lower bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always express algorithm efficiency using Big-O for worst-case analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrence Relations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive algorithms modeled as T(n) = aT(n/b) + f(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master theorem solves most common recurrences in one step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guess + induction proves asymptotic bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when master theorem doesn't apply; guess from experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion-Tree Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visualize recursion as levels with per-level costs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds intuition for why divide-and-conquer algorithms have log factors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three cases covering polynomial comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The fastest way to analyze divide-and-conquer recurrences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average cost per operation over a sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reveals O(1) amortized cost for structures with rare expensive ops"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Asymptotic Notation] --> B[Recurrence Relations]\n    B --> C[Substitution Method]\n    B --> D[Recursion-Tree Method]\n    B --> E[Master Theorem]\n    A --> F[Amortized Analysis]\n    F --> G[Aggregate Method]\n    F --> H[Accounting Method]\n    F --> I[Potential Method]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch01-analysis.png",
        alt: "Algorithm Analysis Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-asymptotic-notation",
      children: "1.1 Asymptotic Notation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asymptotic notation describes the limiting behavior of functions as the input size grows to infinity. It abstracts away constant factors and lower-order terms to focus on the fundamental growth rate."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 1.1 (Big-O)."
      }), " Let ( f, g : \\mathbb{N} \\to \\mathbb{R}^+ ). We say ( f(n) = O(g(n)) ) if there exist positive constants ( c ) and ( n_0 ) such that for all ( n \\ge n_0 ),"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n0 \\le f(n) \\le c \\cdot g(n).\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Big-O provides an asymptotic ", (0,jsx_runtime.jsx)(_components.em, {
        children: "upper bound"
      }), ". For example, ( 3n^2 + 5n + 7 = O(n^3) ) but the tightest bound is ( O(n^2) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 1.2 (Big-Omega)."
      }), " ( f(n) = \\Omega(g(n)) ) if there exist positive constants ( c ) and ( n_0 ) such that for all ( n \\ge n_0 ),"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n0 \\le c \\cdot g(n) \\le f(n).\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Big-Omega provides an asymptotic ", (0,jsx_runtime.jsx)(_components.em, {
        children: "lower bound"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 1.3 (Big-Theta)."
      }), " ( f(n) = \\Theta(g(n)) ) if ( f(n) = O(g(n)) ) and ( f(n) = \\Omega(g(n)) ). Equivalently, there exist positive constants ( c_1, c_2, n_0 ) such that"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n0 \\le c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n) \\quad \\text{for all } n \\ge n_0.\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Big-Theta is an asymptotically ", (0,jsx_runtime.jsx)(_components.em, {
        children: "tight"
      }), " bound."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition 1.4 (Little-o and Little-Omega)."
      }), " ( f(n) = o(g(n)) ) if for every positive constant ( c > 0 ), there exists ( n_0 ) such that ( f(n) < c \\cdot g(n) ) for all ( n \\ge n_0 ). This is the asymptotic analogue of a strict inequality. Similarly, ( f(n) = \\omega(g(n)) ) if for every positive constant ( c ), ( f(n) > c \\cdot g(n) ) for all sufficiently large ( n )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common growth rates (ordered by increasing asymptotic growth):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nO(1) \\subset O(\\log n) \\subset O(n) \\subset O(n \\log n) \\subset O(n^2) \\subset O(2^n) \\subset O(n!)\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always find the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "tightest"
        }), " Big-O bound. Saying an algorithm is O(n³) might be technically correct, but if it's actually O(n log n), the looser bound hides the algorithm's true efficiency."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Asymptotic notation gives a precise language to describe how runtime grows with input size, abstracting away constants and lower-order terms."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy (Shipping):"
        }), " Choosing a Big-O bound is like picking a delivery method. A bicycle (O(1)) is perfect for one package downtown. A delivery van (O(n)) handles suburban routes. A freight train (O(n log n)) moves cross-country cargo. A fleet covering every route combination (O(n²)) is wasteful. The right vehicle depends on how many packages you carry."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-how-to-find-the-asymptotic-bound",
      children: "Algorithm Steps: How to Find the Asymptotic Bound"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the dominant operation"
        }), " — the most frequent instruction (comparisons, swaps, memory accesses)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count executions"
        }), " — express the number of times the dominant operation runs as a function of input size n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop constant factors"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3n²"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n²"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1000n"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop lower-order terms"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n² + 100n + 50000"
        }), " becomes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "n²"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Classify into a growth rate"
        }), " — match the result to a known complexity class."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example walkthrough:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(n) = 12n² + 300n + 5"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n = 10: 12(100) + 3000 + 5 = 4205 — both terms matter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n = 100: 12(10000) + 30000 + 5 = 150005 — n² already dominant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n = 1000: 12(1,000,000) + 300,000 + 5 = 12,300,005 — n² overwhelms everything"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "n = 10,000: n² term contributes ~99.9% of total"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-visualizing-bound-relations",
      children: "Dry Run: Visualizing Bound Relations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f(n) = 2n² + 3n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "g(n) = n²"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f(n) ≤ 3·g(n)?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f(n) ≤ 3·g(n) from n₀ ≥?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (5 > 3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (14 > 12)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (27 ≤ 27)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "44"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (44 ≤ 48)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "65"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (65 ≤ 75)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "230"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (230 ≤ 300)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20,300"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (20,300 ≤ 30,000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Thus 2n² + 3n = O(n²) with c = 3, n₀ = 3."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-examples-complexity-in-practice",
      children: "Code Examples: Complexity in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear Search — O(n):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-cpp",
          children: "int linearSearch(const vector<int>& arr, int target) {\n    for (size_t i = 0; i < arr.size(); i++) {  // n iterations\n        if (arr[i] == target) return i;         // O(1) comparison\n    }\n    return -1;\n}\n// Worst-case: O(n), Best-case: O(1), Average-case: O(n)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Python</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "def linear_search(arr, target):\n    for i, val in enumerate(arr):    # n iterations\n        if val == target:            # O(1) comparison\n            return i                  # O(1) return\n    return -1\n# Worst-case: O(n), Best-case: O(1), Average-case: O(n/2) = O(n)\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Java</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public static int linearSearch(int[] arr, int target) {\n    for (int i = 0; i < arr.length; i++) {  // n iterations\n        if (arr[i] == target) return i;      // O(1) comparison\n    }\n    return -1;\n}\n// Worst-case: O(n), Best-case: O(1), Average-case: O(n)\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary Search — O(log n):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-cpp",
          children: "int binarySearch(const vector<int>& arr, int target) {\n    int lo = 0, hi = arr.size() - 1;\n    while (lo <= hi) {                        // log₂(n) iterations\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}\n// Requires sorted input. Each iteration halves the search space.\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Python</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "def binary_search(arr, target):\n    lo, hi = 0, len(arr) - 1\n    while lo <= hi:                          # log₂(n) iterations\n        mid = (lo + hi) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n# Each step eliminates half the remaining elements → O(log n)\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Java</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public static int binarySearch(int[] arr, int target) {\n    int lo = 0, hi = arr.length - 1;\n    while (lo <= hi) {                        // log₂(n) iterations\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        else if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}\n// Only on sorted arrays. O(log n) time, O(1) space.\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-of-asymptotic-notation",
      children: "Advantages & Disadvantages of Asymptotic Notation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware-independent — pure mathematical growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides constant factors that matter in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables direct algorithm comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores low-input-size behavior (n < 100)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any input size n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misleading when hidden constants are large"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Established standard in CS literature"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores cache misses, I/O, and parallelism"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-asymptotic-analysis",
      children: "Edge Cases in Asymptotic Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constant functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n) = 10, g(n) = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both O(1) — even a constant of 10²⁰ is still O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Oscillating functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n) = n·(1 + sin n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O cannot capture oscillating growth cleanly; Θ may not exist"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very small n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting n = 3 items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) bubble sort can beat O(n log n) quick sort for n < 10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Equal growth class"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n) = 3n², g(n) = 5n²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both Θ(n²) — constants differ but class is same"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multi-variable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n, m) = n + m²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-dimensional; which variable dominates depends on context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-recurrence-relations",
      children: "1.2 Recurrence Relations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A recurrence relation expresses the running time of a recursive algorithm in terms of its running time on smaller inputs. The general form for divide-and-conquer recurrences is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nT(n) = aT(n/b) + f(n),\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ( a ) is the number of subproblems, ( n/b ) is the size of each subproblem, and ( f(n) ) is the cost to divide and combine."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy (Russian Nesting Dolls):"
        }), " A recurrence is like a set of matryoshka dolls. Each doll contains a smaller copy of itself. To compute the total paint volume, you paint the outer doll (pay f(n)), then recursively paint each inner doll (pay a × T(n/b)). The total depends on how many dolls exist (a) and how much smaller each one gets (b)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-substitution-method",
      children: "1.2.1 Substitution Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The substitution method involves two steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guess"
        }), " the form of the solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prove"
        }), " by induction that the guess is correct."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " Solve ( T(n) = 2T(\\lfloor n/2 \\rfloor) + n )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Guess:"
      }), " ( T(n) = O(n \\log n) ). Assume ( T(k) \\le ck \\lg k ) for ( k < n )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.em, {
        children: "Proof:"
      }), "\n[\n\\begin{aligned}\nT(n) &\\le 2 \\cdot c (n/2) \\lg (n/2) + n \\\n&= cn \\lg (n/2) + n \\\n&= cn \\lg n - cn \\lg 2 + n \\\n&= cn \\lg n - cn + n \\\n&\\le cn \\lg n \\quad \\text{for } c \\ge 1.\n\\end{aligned}\n]"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "algorithm-steps-for-substitution-method",
      children: "Algorithm Steps for Substitution Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Guess the form"
        }), " — based on similar recurrences you've encountered."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State the inductive hypothesis"
        }), " — assume T(k) ≤ c·g(k) for all k < n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Substitute"
        }), " — replace T(n/b) with the inductive bound."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simplify"
        }), " — expand algebra until the desired form emerges."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Choose constants"
        }), " — pick c and n₀ to make the induction hold."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify the base case"
        }), " — check that n₀ and c satisfy small values."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-tn--2tn2--n-with-guess-tn--cn-lg-n",
      children: "Dry Run Trace Table: T(n) = 2T(n/2) + n with guess T(n) ≤ cn lg n"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assume T(1) = 1. Test the guess for increasing n:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2T(n/2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "+ n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "= T(n)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "cn lg₂n (c = 2)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Valid?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·T(1) = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·2·1 = 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·T(2) = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·4·2 = 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·T(4) = 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·8·3 = 48"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·T(8) = 64"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2·16·4 = 128"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For c = 2, the bound holds for all n ≥ 1. The inequality becomes progressively tighter as n grows."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-of-substitution-method",
      children: "Advantages & Disadvantages of Substitution Method"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works for any recurrence form"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires accurate guess — bad guess = wasted effort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Yields exact constants, not just order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Becomes algebraically heavy for complex recurrences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Builds deep understanding of induction proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not systematic — no guaranteed procedure"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-in-substitution-method",
      children: "Edge Cases in Substitution Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floor/ceiling functions:"
        }), " Asymptotic analysis usually ignores ⌊n/2⌋ vs. n/2, but rigorous proofs must handle them."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-integer n:"
        }), " Recurrences are defined on integers; treat n/2 with floor/ceil."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unequal subproblems:"
        }), " T(n) = T(2n/3) + T(n/3) + n needs Akra-Bazzi, not standard substitution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tightness verification:"
        }), " Proving O(·) alone is insufficient; you may also need Ω(·) for a Θ result."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-recursion-tree-method",
      children: "1.2.2 Recursion-Tree Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The recursion-tree method visualizes each recursive call as a node, with the cost of each level written explicitly. The total cost is the sum over all levels."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example:"
      }), " For ( T(n) = 3T(n/4) + cn^2 ):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 0: ( 1 ) node, cost ( cn^2 )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 1: ( 3 ) nodes, each cost ( c(n/4)^2 = cn^2/16 ), total ( 3cn^2/16 )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Level 2: ( 9 ) nodes, each cost ( c(n/16)^2 = cn^2/256 ), total ( 9cn^2/256 )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Depth: ( \\log_4 n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total: ( cn^2 \\sum_{i=0}^{\\log_4 n} (3/16)^i \\le cn^2 \\cdot \\frac{1}{1 - 3/16} = (16/13)cn^2 = O(n^2) )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-trace-table-tn--3tn4--cn",
      children: "Dry Run Trace Table: T(n) = 3T(n/4) + cn²"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Nodes"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Node Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Level Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running Sum"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 = 3⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c(n/4⁰)² = cn²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cn²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "cn²"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 = 3¹"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c(n/4¹)² = cn²/16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3/16)cn²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1 + 3/16)cn²"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 = 3²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c(n/4²)² = cn²/256"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(9/256)cn²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1 + 3/16 + 9/256)cn²"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27 = 3³"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c(n/4³)² = cn²/4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(27/4096)cn²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(continued)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "…"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "log₄ n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n^{log₄ 3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c(1)² = c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "c·n^{log₄ 3}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total < (16/13)cn²"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The geometric ratio r = 3/16 < 1, so the series converges. The deepest level contributes negligible cost."
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-of-recursion-tree-method",
      children: "Advantages & Disadvantages of Recursion-Tree Method"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive visual representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for complex recurrences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No initial guess required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Becomes messy with non-uniform branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles unbalanced recurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level sums may be difficult to compute in closed form"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-in-recursion-tree-method",
      children: "Edge Cases in Recursion-Tree Method"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uneven depth:"
        }), " In quicksort's worst case, the tree is highly unbalanced; computing level costs is harder."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-constant branching:"
        }), " Algorithms that branch on data values rather than fixed ratios produce irregular trees."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fractional nodes:"
        }), " Floor/ceil effects create slightly irregular tree shapes — usually safe to ignore."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-master-theorem",
      children: "1.2.3 Master Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 1.1 (Master Theorem)."
      }), " Let ( a \\ge 1 ) and ( b > 1 ) be constants, let ( f(n) ) be a function, and let ( T(n) = aT(n/b) + f(n) ). Then:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ( f(n) = O(n^{\\log_b a - \\epsilon}) ) for some ( \\epsilon > 0 ), then ( T(n) = \\Theta(n^{\\log_b a}) )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ( f(n) = \\Theta(n^{\\log_b a}) ), then ( T(n) = \\Theta(n^{\\log_b a} \\log n) )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If ( f(n) = \\Omega(n^{\\log_b a + \\epsilon}) ) for some ( \\epsilon > 0 ) and if ( af(n/b) \\le cf(n) ) for some ( c < 1 ) and all sufficiently large ( n ), then ( T(n) = \\Theta(f(n)) )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Examples:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( a )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( b )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( \\log_b a )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( f(n) )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( T(n) = 2T(n/2) + n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( T(n) = 2T(n/2) + 1 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( T(n) = 4T(n/2) + n^3 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^3 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(n^3) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( T(n) = 4T(n/2) + n^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Theta(n^2 \\log n) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When applying the master theorem, first compute log_b a, then compare f(n) to n^{log_b a} — these are the two critical numbers that determine the case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The master theorem only works for recurrences of the exact form T(n) = aT(n/b) + f(n). If the subproblem sizes differ (e.g., T(n) = T(n-1) + n), you must use other methods."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Recurrence relations model recursive algorithm costs, and the master theorem solves the common divide-and-conquer cases in constant time by comparing f(n) with n^{log_b a}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "algorithm-steps-how-to-apply-the-master-theorem",
      children: "Algorithm Steps: How to Apply the Master Theorem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify a, b, and f(n)"
        }), " from the recurrence T(n) = aT(n/b) + f(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute ρ = log_b a"
        }), " — the critical exponent."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare f(n) to n^ρ"
        }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Case 1:"
            }), " f(n) = O(n^{ρ-ε}) for ε > 0 → recursion dominates → T(n) = Θ(n^ρ)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Case 2:"
            }), " f(n) = Θ(n^ρ) → equal weight → T(n) = Θ(n^ρ log n)."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Case 3:"
            }), " f(n) = Ω(n^{ρ+ε}) for ε > 0 AND af(n/b) ≤ cf(n) for c < 1 → divide/combine dominates → T(n) = Θ(f(n))."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verify regularity (Case 3 only)"
        }), " — check af(n/b) ≤ cf(n) holds."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "dry-run-comparing-fn-with-nlog_b-a",
      children: "Dry Run: Comparing f(n) with n^{log_b a}"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "log_b a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "f(n)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compare f(n) to n^{log_b a}"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = Θ(n¹) → equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 = O(n^{1-ε}) → smaller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 4T(n/2) + n³"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n³"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n³ = Ω(n^{2+ε}) → larger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n³)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 4T(n/2) + n²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n² = Θ(n²) → equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n² log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 3T(n/3) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = Θ(n¹) → equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/4) + √n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "√n = Θ(n^{0.5}) → equal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(√n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "advantages--disadvantages-of-the-master-theorem",
      children: "Advantages & Disadvantages of the Master Theorem"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Solves common recurrences in seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for T(n) = aT(n/b) + f(n) form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No induction or heavy algebra required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails when f(n) and n^{log_b a} differ by non-polynomial factor (e.g., log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three clear, memorizable cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case 3 requires verifying the regularity condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Industry standard — used in CLRS and papers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle T(n) = T(n-1) + n or other non-divide-and-conquer forms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h5, {
      id: "edge-cases-where-the-master-theorem-fails",
      children: "Edge Cases Where the Master Theorem Fails"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It Fails"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Alternative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-polynomial gap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + n/log n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n) differs by log factor, not n^ε"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion-tree / substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbalanced subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(n-1) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sizes don't divide evenly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iteration method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Different subproblem sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(2n/3) + T(n/3) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not of the form aT(n/b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Akra-Bazzi method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-constant a or b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = √n·T(√n) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a depends on n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gap between cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + n/lg n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f(n) is polynomially smaller?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extended master theorem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-implementations-merge-sort-divide-and-conquer",
      children: "Code Implementations: Merge Sort (Divide and Conquer)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merge Sort — O(n log n):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "C++"
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          className: "language-cpp",
          children: "void merge(vector<int>& arr, int l, int m, int r) {\n    vector<int> L(arr.begin() + l, arr.begin() + m + 1);\n    vector<int> R(arr.begin() + m + 1, arr.begin() + r + 1);\n    int i = 0, j = 0, k = l;\n    while (i < L.size() && j < R.size())\n        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n    while (i < L.size()) arr[k++] = L[i++];\n    while (j < R.size()) arr[k++] = R[j++];\n}\n\nvoid mergeSort(vector<int>& arr, int l, int r) {\n    if (l >= r) return;                     // O(1) — base case\n    int m = l + (r - l) / 2;\n    mergeSort(arr, l, m);                    // T(n/2)\n    mergeSort(arr, m + 1, r);                // T(n/2)\n    merge(arr, l, m, r);                     // O(n)\n}\n// Recurrence: T(n) = 2T(n/2) + n → Θ(n log n)\n"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Python</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "def merge_sort(arr):\n    if len(arr) <= 1:                       # O(1) — base case\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])             # T(n/2)\n    right = merge_sort(arr[mid:])            # T(n/2)\n    # Merge — O(n)\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i]); i += 1\n        else:\n            result.append(right[j]); j += 1\n    return result + left[i:] + right[j:]\n# Recurrence: T(n) = 2T(n/2) + n → Θ(n log n)\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Java</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "public static void mergeSort(int[] arr, int l, int r) {\n    if (l >= r) return;                      // O(1) — base case\n    int m = l + (r - l) / 2;\n    mergeSort(arr, l, m);                     // T(n/2)\n    mergeSort(arr, m + 1, r);                 // T(n/2)\n    merge(arr, l, m, r);                      // O(n)\n}\n\nprivate static void merge(int[] arr, int l, int m, int r) {\n    int[] L = Arrays.copyOfRange(arr, l, m + 1);\n    int[] R = Arrays.copyOfRange(arr, m + 1, r + 1);\n    int i = 0, j = 0, k = l;\n    while (i < L.length && j < R.length)\n        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];\n    while (i < L.length) arr[k++] = L[i++];\n    while (j < R.length) arr[k++] = R[j++];\n}\n// Recurrence: T(n) = 2T(n/2) + n → Master Theorem Case 2 → Θ(n log n)\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-of-recurrence-analysis-methods",
      children: "Advantages & Disadvantages of Recurrence Analysis Methods"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Substitution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any recurrence form, exact constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Needs a good guess, algebra-heavy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursion-Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive, no guess needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Messy for complex branching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest, systematic, three clear cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restricted form, fails on non-polynomial gaps"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-amortized-analysis",
      children: "1.3 Amortized Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amortized analysis gives the average performance of each operation in the worst case over a sequence of operations. Three methods exist."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-World Analogy (Netflix Subscription):"
        }), " A Netflix subscription costs ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "15"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "r"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "f"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "w"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "W"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "h"
                  }), (0,jsx_runtime.jsx)(_components.mn, {
                    children: "1"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mo, {
                    children: "→"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "15/month regardless of how many movies you watch. Watch 1 movie → cost is "
                })]
              })
            })
          }), (0,jsx_runtime.jsxs)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: [(0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "15/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0278em"
                },
                children: "r"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "esso"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1076em"
                },
                children: "f"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0269em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "man"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "esy"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0269em"
                },
                children: "w"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "."
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.1389em"
                },
                children: "W"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "c"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "h"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "1"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mrel",
                children: "→"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mspace",
                style: {
                  marginRight: "0.2778em"
                }
              })]
            }), (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "0.6595em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "cos"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
              })]
            })]
          })]
        }), "15. Watch 30 movies → amortized cost is ", (0,jsx_runtime.jsxs)(_components.span, {
          className: "katex",
          children: [(0,jsx_runtime.jsx)(_components.span, {
            className: "katex-mathml",
            children: (0,jsx_runtime.jsx)(_components.math, {
              xmlns: "http://www.w3.org/1998/Math/MathML",
              children: (0,jsx_runtime.jsxs)(_components.semantics, {
                children: [(0,jsx_runtime.jsxs)(_components.mrow, {
                  children: [(0,jsx_runtime.jsx)(_components.mn, {
                    children: "0.50"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "/"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "m"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    mathvariant: "normal",
                    children: "."
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "R"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "e"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "g"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "n"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "v"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "i"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "d"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "u"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "a"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "l"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "y"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "c"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "o"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "t"
                  }), (0,jsx_runtime.jsx)(_components.mi, {
                    children: "s"
                  })]
                }), (0,jsx_runtime.jsx)(_components.annotation, {
                  encoding: "application/x-tex",
                  children: "0.50/movie. Renting individually costs "
                })]
              })
            })
          }), (0,jsx_runtime.jsx)(_components.span, {
            className: "katex-html",
            "aria-hidden": "true",
            children: (0,jsx_runtime.jsxs)(_components.span, {
              className: "base",
              children: [(0,jsx_runtime.jsx)(_components.span, {
                className: "strut",
                style: {
                  height: "1em",
                  verticalAlign: "-0.25em"
                }
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "0.50/"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "m"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "o"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord",
                children: "."
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0077em"
                },
                children: "R"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "e"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "n"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "in"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "g"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "in"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "v"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "i"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "d"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "u"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "a"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0197em"
                },
                children: "l"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                style: {
                  marginRight: "0.0359em"
                },
                children: "y"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "cos"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "t"
              }), (0,jsx_runtime.jsx)(_components.span, {
                className: "mord mathnormal",
                children: "s"
              })]
            })
          })]
        }), "5/movie — cheaper for 1 movie but far more expensive for 30. A dynamic array is the same: occasional O(n) \"rental\" costs are absorbed into cheap O(1) \"subscription\" payments."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-aggregate-method",
      children: "1.3.1 Aggregate Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute the total cost of ( m ) operations and divide by ( m )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Dynamic array resizing):"
      }), " A dynamic array doubles its capacity when full. The cost of inserting the ( i )-th element is ( O(1) ) except when ( i ) is a power of two, where the cost is ( O(i) ) to copy existing elements. Total cost for ( n ) insertions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n\\sum_{i=0}^{\\lfloor \\lg n \\rfloor} 2^i = 2n - 1.\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amortized cost per insertion: ( (2n - 1)/n = O(1) )."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-accounting-method",
      children: "1.3.2 Accounting Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Assign different amortized costs to different operations. When the amortized cost exceeds the actual cost, the surplus is stored as \"credit.\" Credit is spent to pay for operations whose actual cost exceeds amortized cost."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary counter:"
      }), " A ( k )-bit binary counter increments from 0 to ( n ). Each flip of a bit costs 1. The amortized cost per increment is 2: charge 1 for flipping the 0 to 1, and 1 for future flips from 1 back to 0. Each bit flip is prepaid."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "133-potential-method",
      children: "1.3.3 Potential Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Define a potential function ( \\Phi ) that maps the data structure state to a non-negative real number. The amortized cost of an operation is:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n\\hat{c} = c + \\Phi(D_{i}) - \\Phi(D_{i-1}),\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "where ( c ) is the actual cost and ( D_i ) is the state after the ( i )-th operation."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Example (Stack with multipop):"
      }), " Define ( \\Phi = \\text{number of elements on stack} ). For a push: actual cost 1, potential increases by 1, amortized cost = ( 1 + 1 = 2 ). For a multipop of ( k ) elements: actual cost ( k ), potential decreases by ( k ), amortized cost = ( k - k = 0 )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The potential method is the most powerful amortized technique because a well-chosen potential function can handle complex data structures where aggregate and accounting become unwieldy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Amortized analysis is not the same as average-case analysis — amortized guarantees hold for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "every"
        }), " sequence of operations, not just on average."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Amortized analysis reveals that data structures with occasional expensive operations can still guarantee constant average cost per operation across any sequence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-for-amortized-analysis",
      children: "Algorithm Steps for Amortized Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the sequence of m operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum all actual costs: total = Σc_i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Divide by m: amortized cost = total / m."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounting Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign an amortized cost (≥ actual) to each operation type."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Track the credit balance: credit_i = Σ(amortized_j − actual_j) for j ≤ i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove credit never goes negative."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Potential Method:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define Φ(D_i) — a non-negative potential function on the data structure state."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute amortized cost: â = actual + Φ(D_i) − Φ(D_{i-1})."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show Φ(D_0) = 0 and Φ(D_i) ≥ 0 for all i."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-dynamic-array-insertions-aggregate-method",
      children: "Dry Run: Dynamic Array Insertions (Aggregate Method)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A dynamic array starts empty (capacity 1). When full, it doubles capacity and copies all elements."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Ins #"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Capacity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running Total"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double (copy 1) + insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 + 1 = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double (copy 2) + insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 + 1 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double (copy 4) + insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 + 1 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double (copy 8) + insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 + 1 = 9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total cost for n insertions = n + sum of powers of two (for copying) < n + 2n = 3n. Amortized per insertion = 3n/n = O(1)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "code-examples-dynamic-array-amortized-o1-append",
      children: "Code Examples: Dynamic Array (Amortized O(1) Append)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["C++ (std::vector)</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "#include <vector>\n\nint main() {\n    vector<int> v;                          // capacity starts at 0\n    for (int i = 0; i < 1'000'000; i++) {\n        v.push_back(i);                     // amortized O(1)\n        // When capacity exhausted, vector doubles its buffer\n        // and copies all existing elements — O(n) but rare\n    }\n    // Total cost across all push_backs: O(n)\n    // Amortized per push_back: O(1)\n}\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Python (list)</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "arr = []                                    # dynamic array\nfor i in range(1_000_000):\n    arr.append(i)                           # amortized O(1)\n# Python's list uses geometric growth (~1.125×)\n# Overall: O(n) total, O(1) amortized per append\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Java (ArrayList)</summary>\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "import java.util.ArrayList;\n\npublic class DynamicArrayDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        for (int i = 0; i < 1_000_000; i++) {\n            list.add(i);                    // amortized O(1)\n        }                                   // ArrayList grows by 50% (1.5×)\n    }\n}\n"
          })
        }), "\n"]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-of-amortized-analysis",
      children: "Advantages & Disadvantages of Amortized Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provides real-world average cost per operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not bound cost of any single operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guarantees worst-case over any sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful potential function design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reveals O(1) cost where worst-case suggests O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable outside sequential operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Three complementary methods offer flexibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Potential method is abstract and non-intuitive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-in-amortized-analysis",
      children: "Edge Cases in Amortized Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shrink as well as grow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array shrink on delete"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple doubling fails; use halving at ¼ capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-geometric growth"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex potential functions required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrent operations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lock contention"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard analysis assumes sequential execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time constraints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Audio / video processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized ≠ O(1) per op; individual ops may be slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Shrink-resistant structures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash table with deletions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequent insert/delete cycles can break amortized bounds"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-11-ordering-functions-by-growth-rate",
      children: "Example 1.1: Ordering Functions by Growth Rate"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Order the following functions by asymptotic growth rate:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nf_1(n) = 2^n, \\quad f_2(n) = n^{3/2}, \\quad f_3(n) = n \\log n, \\quad f_4(n) = \\log(n!), \\quad f_5(n) = n^3, \\quad f_6(n) = n^{0.5}\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Compute ( \\log(n!) = \\Theta(n \\log n) ) by Stirling's approximation. Ordering (slowest to fastest): ( n^{0.5} \\prec n \\log n \\prec \\log(n!) \\prec n^{3/2} \\prec n^3 \\prec 2^n )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-12-solving-by-master-theorem",
      children: "Example 1.2: Solving by Master Theorem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve ( T(n) = 3T(n/3) + n )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Here ( a = 3 ), ( b = 3 ), ( \\log_b a = 1 ), ( f(n) = n = \\Theta(n^1) ). This is Case 2 of the master theorem, so ( T(n) = \\Theta(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-13-substitution-method",
      children: "Example 1.3: Substitution Method"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Solve ( T(n) = T(\\sqrt{n}) + O(\\log \\log n) ) using substitution."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Let ( m = \\log n ), so ( n = 2^m ). Then ( T(2^m) = T(2^{m/2}) + O(\\log m) ). Let ( S(m) = T(2^m) ). Then ( S(m) = S(m/2) + O(\\log m) ). By the master theorem, ( S(m) = O(\\log^2 m) ). Thus ( T(n) = O(\\log^2 \\log n) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Algorithm analysis is the most frequently tested topic in technical interviews — every solution requires complexity analysis."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "top-10-interview-questions",
      children: "Top 10 Interview Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the difference between O, Ω, and Θ?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "O = upper bound, Ω = lower bound, Θ = tight bound (both upper and lower)."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Solve T(n) = 2T(n/2) + n using the master theorem."
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "a=2, b=2, log_b a=1, f(n)=n=n¹ → Case 2 → Θ(n log n)."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the amortized cost of n insertions into a dynamic array?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "O(1) amortized — total = 3n, divided by n = O(1)."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prove that 2ⁿ⁺¹ = O(2ⁿ)."
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "2ⁿ⁺¹ = 2·2ⁿ ≤ c·2ⁿ for c = 2, n₀ = 1."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Is n² = Ω(n log n)? Is n² = ω(n log n)?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Yes to both: n²/(n log n) → ∞, so n² = ω(n log n) ⊆ Ω(n log n)."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "When does the master theorem fail?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "When f(n) and n^{log_b a} differ by a non-polynomial factor, or when the recurrence is not of the form T(n) = aT(n/b) + f(n)."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How is amortized analysis different from average-case analysis?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Amortized is deterministic over any sequence; average-case assumes a probability distribution over inputs."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a data structure with O(1) amortized insert and delete-min."
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "Use a pair of stacks or a finger structure; prove the bound via the accounting method."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Why do we ignore constants in asymptotic analysis?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "As n → ∞, constants become negligible compared to the growth rate. They matter for profiling but not for scalability classification."
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the regularity condition in Master Theorem Case 3?"
          }), "\n", (0,jsx_runtime.jsx)(_components.em, {
            children: "af(n/b) ≤ cf(n) for some c < 1 — ensures cost decreases down the recursion tree."
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls-table",
      children: "Common Pitfalls Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Writing \"O(n) = O(n²)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O is a set relation, not equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write \"f(n) = O(n²)\" meaning f ∈ O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Applying master theorem to T(n) = T(n-1) + n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subproblem must divide, not decrement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use iteration: T(n) = Σ(i) = Θ(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing amortized with average-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized = worst-case bound over any sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both have different mathematical guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring constants for small n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants dominate for n < 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile and benchmark when n is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claiming binary search is O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "It halves each step → log₂ n iterations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each comparison eliminates half the array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting regularity in Master Case 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without it, the series may not converge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always verify af(n/b) ≤ cf(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong log base in Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case 2 requires exact polynomial comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log_b a is the only exponent that matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using Big-O when Θ is needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O says \"at most\" but doesn't guarantee tightness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer Θ when you know the exact bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System / Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concept Applied"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It's Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O, recursion-tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PageRank converges in O(log n) iterations; indexing requires O(n) crawl pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL / MySQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree node splits are amortized O(1); buffer pool management uses potential method"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Python list"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized O(1) append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric growth (~1.125×); append is O(1) amortized, O(n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java ArrayList"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grows 50% (1.5×) when full; add() is O(1) amortized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O documentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every command documents Big-O complexity (e.g., ZADD = O(log n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux CFS scheduler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-black tree for task management — O(log n) enqueue/dequeue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uber / Google Maps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O((V+E) log V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dijkstra's shortest path on road networks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Apache Kafka"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) sequential I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log-structured storage appends in O(1); index lookups in O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "TensorFlow / PyTorch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³) complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication limits model scaling; motivates sparse methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) graph ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge-base computation in O(log n) via binary search on DAG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "MongoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default B-tree index on _id — all indexed lookups are O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Elasticsearch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) + scoring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted index lookup O(1) per term; TF-IDF scoring O(k) per document"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AWS DynamoDB"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consistent hash ring; partition splits are amortized O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook News Feed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) ranking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EdgeRank / ML ranking sorts billions of candidate posts per user"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Big-O ( O )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotic upper bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm guarantees"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-Omega ( \\Omega )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotic lower bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-case or lower limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower-bound proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-Theta ( \\Theta )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotically tight bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both upper and lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact growth classification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves T(n) = aT(n/b) + f(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compares f(n) to n^{log_b a}"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guess + induction proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires good initial guess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-standard recurrences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average over sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three methods: aggregate, accounting, potential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data structure analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Notation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O = upper bound, Ω = lower bound, Θ = tight bound, o = strict upper, ω = strict lower"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Growth Rates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 < log n < n < n log n < n² < 2ⁿ < n! — memorize this ordering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Master Theorem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Case 1: f(n) < n^{log_b a} → Θ(n^{log_b a}); Case 2: f(n) = n^{log_b a} → Θ(n^{log_b a} log n); Case 3: f(n) > n^{log_b a} → Θ(f(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Amortized Methods"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate: total ÷ n; Accounting: prepay credit; Potential: energy function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfalls"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forget the regularity condition in Master Case 3; Use master theorem on unbalanced recurrences"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Academia/Research"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for every solution explanation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for problem constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity planning, latency modeling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Paper complexity proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick recurrence solving"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast divide-and-conquer analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm design verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Substitution Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proving tighter bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifying non-standard recurrences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishing novel algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designing efficient data structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Union-find, segment tree analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database index costing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persistent data structure analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion-Tree Method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Intuition for merge sort / quick sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding log factors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching and exposition"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Asymptotic notation (( O, \\Omega, \\Theta, o, \\omega )) provides a precise language for describing growth rates."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurrence relations model recursive algorithms; the master theorem solves many common recurrences in closed form."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The substitution method proves guesses by induction; recursion trees build intuition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amortized analysis reveals constant amortized costs for data structures with occasional expensive operations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Three amortized methods exist: aggregate, accounting, and potential."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which notation represents an asymptotically tight bound?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Big-O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Big-Omega"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Big-Theta"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Little-o"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Big-Theta — it requires both an upper and lower bound match.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Solve T(n) = 2T(n/4) + n^{0.5} using the master theorem."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Θ(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Θ(√n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Θ(√n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Θ(log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Θ(√n). Here a=2, b=4, log_b a = 0.5, f(n) = n^{0.5} = n^{log_b a}. This is Case 2, so T(n) = Θ(n^{0.5} log n)... Wait — f(n) = √n = n^{1/2}, and log_b a = log_4 2 = 1/2. They match, so Case 2 gives Θ(√n log n). The correct answer is B.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " A dynamic array that doubles when full has what amortized insertion cost?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(n²)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) O(1). Although occasional insertions cost O(n) to copy elements, the amortized cost across n insertions is (2n-1)/n = O(1).\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine whether ( 2^{n+1} = O(2^n) ). Justify your answer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Is ( n^2 = \\Omega(n \\log n) )? Is ( n^2 = \\omega(n \\log n) )?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the three cases of the master theorem. Give an example recurrence for each case."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between Big-O and little-o notation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve ( T(n) = 2T(n/4) + n^{0.5} ) using the master theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve ( T(n) = T(n-1) + 1/n ) by iteration."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Show that ( \\log(n!) = \\Theta(n \\log n) ) using Stirling's approximation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform amortized analysis of a binary counter using the potential method."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Order: ( n^2, 2^n, \\log n, n \\log n, n, \\sqrt{n}, n! ) by asymptotic growth."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a data structure that supports insert and delete-min in ( O(1) ) amortized time. Prove the bound using the accounting method."
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