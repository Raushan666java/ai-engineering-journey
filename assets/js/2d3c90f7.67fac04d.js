"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[77853],{

/***/ 46699
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_data_structures_01_complexity_md_2d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-data-structures-01-complexity-md-2d3.json
const site_docs_courses_data_structures_01_complexity_md_2d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/data-structures/01-complexity","title":"Chapter 1: Complexity Analysis","description":"Learning Objectives","source":"@site/docs/courses/data-structures/01-complexity.md","sourceDirName":"courses/data-structures","slug":"/data-structures/01-complexity","permalink":"/ai-engineering-journey/data-structures/01-complexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-complexity","slug":"/data-structures/01-complexity","title":"Chapter 1: Complexity Analysis","sidebar_label":"Chapter 1: Complexity Analysis","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Data Structures — Complete Course","permalink":"/ai-engineering-journey/data-structures"},"next":{"title":"Chapter 2: Arrays","permalink":"/ai-engineering-journey/data-structures/02-arrays"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/data-structures/01-complexity.md


const frontMatter = {
	id: '01-complexity',
	slug: '/data-structures/01-complexity',
	title: 'Chapter 1: Complexity Analysis',
	sidebar_label: 'Chapter 1: Complexity Analysis',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Complexity Analysis';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Complexity Analysis Matters in DS",
  "id": "why-complexity-analysis-matters-in-ds",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "Why Complexity Matters",
  "id": "why-complexity-matters",
  "level": 3
}, {
  "value": "Asymptotic Notation",
  "id": "asymptotic-notation",
  "level": 3
}, {
  "value": "Big-O Notation (O) — Upper Bound",
  "id": "big-o-notation-o--upper-bound",
  "level": 3
}, {
  "value": "Omega Notation (Ω) — Lower Bound",
  "id": "omega-notation-ω--lower-bound",
  "level": 3
}, {
  "value": "Theta Notation (Θ) — Tight Bound",
  "id": "theta-notation-θ--tight-bound",
  "level": 3
}, {
  "value": "Amortized Analysis",
  "id": "amortized-analysis",
  "level": 3
}, {
  "value": "Space Complexity",
  "id": "space-complexity",
  "level": 3
}, {
  "value": "Complexity Comparison Table",
  "id": "complexity-comparison-table",
  "level": 2
}, {
  "value": "DS Operation Complexities Master Table",
  "id": "ds-operation-complexities-master-table",
  "level": 2
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 1: Constant vs Linear",
  "id": "example-1-constant-vs-linear",
  "level": 3
}, {
  "value": "Example 2: Quadratic Complexity",
  "id": "example-2-quadratic-complexity",
  "level": 3
}, {
  "value": "Example 3: Logarithmic Complexity — Binary Search",
  "id": "example-3-logarithmic-complexity--binary-search",
  "level": 3
}, {
  "value": "Example 4: Recursive Complexity — Fibonacci (O(2ⁿ) vs O(n))",
  "id": "example-4-recursive-complexity--fibonacci-o2ⁿ-vs-on",
  "level": 3
}, {
  "value": "Example 5: Space Complexity — Recursive vs Iterative (n = 5 factorial)",
  "id": "example-5-space-complexity--recursive-vs-iterative-n--5-factorial",
  "level": 3
}, {
  "value": "💡 Pro Tips",
  "id": "-pro-tips",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "How to Identify Complexity in 5 Steps",
  "id": "how-to-identify-complexity-in-5-steps",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "Classic Space-Time Tradeoff Questions",
  "id": "classic-space-time-tradeoff-questions",
  "level": 3
}, {
  "value": "Complexity Class Quick-ID Reference",
  "id": "complexity-class-quick-id-reference",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "How Complexity Drives Real-World Data Structure Selection",
  "id": "how-complexity-drives-real-world-data-structure-selection",
  "level": 3
}, {
  "value": "Real-World Scenario: E-Commerce Checkout",
  "id": "real-world-scenario-e-commerce-checkout",
  "level": 3
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Quick Reference: Common Growth Rates",
  "id": "quick-reference-common-growth-rates",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Common Mistakes &amp; How to Avoid Them (GFG-Style)",
  "id": "common-mistakes--how-to-avoid-them-gfg-style",
  "level": 2
}, {
  "value": "Interview Corner Expansion (GFG Pattern)",
  "id": "interview-corner-expansion-gfg-pattern",
  "level": 2
}, {
  "value": "TypeScript Complexity Analyzer",
  "id": "typescript-complexity-analyzer",
  "level": 3
}, {
  "value": "Master Theorem Calculator",
  "id": "master-theorem-calculator",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern",
  "level": 3
}, {
  "value": "Little-o and Little-omega Notation (Strict Bounds)",
  "id": "little-o-and-little-omega-notation-strict-bounds",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Key Intuition",
  "id": "key-intuition",
  "level": 3
}, {
  "value": "Dry Run — Comparing Growth Rates",
  "id": "dry-run--comparing-growth-rates",
  "level": 3
}, {
  "value": "When Little-o Matters",
  "id": "when-little-o-matters",
  "level": 3
}, {
  "value": "TypeScript — Growth Rate Classifier",
  "id": "typescript--growth-rate-classifier",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern-1",
  "level": 3
}, {
  "value": "NP-Completeness and Complexity Classes",
  "id": "np-completeness-and-complexity-classes",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Complexity Classes Overview",
  "id": "complexity-classes-overview",
  "level": 3
}, {
  "value": "Definitions",
  "id": "definitions",
  "level": 3
}, {
  "value": "The P vs NP Question",
  "id": "the-p-vs-np-question",
  "level": 3
}, {
  "value": "Dry Run — Reducing 3SAT to Vertex Cover",
  "id": "dry-run--reducing-3sat-to-vertex-cover",
  "level": 3
}, {
  "value": "What This Means for Data Structures",
  "id": "what-this-means-for-data-structures",
  "level": 3
}, {
  "value": "Additional MCQs (GFG Pattern)",
  "id": "additional-mcqs-gfg-pattern-2",
  "level": 3
}, {
  "value": "Additional Exercises (GFG Pattern)",
  "id": "additional-exercises-gfg-pattern-1",
  "level": 3
}, {
  "value": "Algorithm Selection Decision Flowchart",
  "id": "algorithm-selection-decision-flowchart",
  "level": 3
}, {
  "value": "One-Sentence Takeaways",
  "id": "one-sentence-takeaways-1",
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
  "value": "Complexity Analysis Problems",
  "id": "complexity-analysis-problems",
  "level": 3
}, {
  "value": "Challenge Problem",
  "id": "challenge-problem",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-1-complexity-analysis",
        children: "Chapter 1: Complexity Analysis"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define asymptotic notation: Big-O, Omega, Theta."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze worst-case, average-case, and best-case complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute time and space complexity of iterative and recursive algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare algorithms using growth-rate families."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply complexity analysis to choose optimal data structures for real-world problems."
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
        href: "../../assets/images/lessons/data-structures/01-complexity/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/01-complexity/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/01-complexity/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/01-complexity/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/data-structures/01-complexity/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/data-structures/01-complexity/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-complexity-analysis-matters-in-ds",
      children: "Why Complexity Analysis Matters in DS"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine you are building a contact-list app for a phone with 1 million users. When a user searches for a contact, using an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ArrayList"
      }), " (O(n) search) would scan through all million entries — taking ~10 milliseconds. But using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "HashMap"
      }), " (O(1) average search) retrieves the contact in under 1 microsecond. At scale, the difference between O(n) and O(1) is the difference between a snappy app and one that freezes. Data structure choice IS complexity analysis in action."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every major system — Google Search, Redis, PostgreSQL, Netflix — lives or dies by choosing the right data structure for each operation. Complexity analysis is the tool that makes that choice rigorous."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch01-complexity.png",
        alt: "Complexity Analysis: Big O, Recurrence Relations and Analysis Types"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-complexity-matters",
      children: "Why Complexity Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two programs that solve the same problem can differ in running time by orders of magnitude. Complexity analysis gives us a language to describe this difference without reference to a specific machine."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "asymptotic-notation",
      children: "Asymptotic Notation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let ( T(n) ) be the exact running time of an algorithm on input size ( n ). We care about the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "rate of growth"
      }), " as ( n \\to \\infty )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "big-o-notation-o--upper-bound",
      children: "Big-O Notation (O) — Upper Bound"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " An elevator has a maximum capacity of 1,000 kg. Whether you load 500 kg, 800 kg, or 1,000 kg, the elevator ", (0,jsx_runtime.jsx)(_components.em, {
        children: "never exceeds"
      }), " 1,000 kg. Big-O gives the worst-case ceiling — the algorithm will never perform worse than this bound."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " ( f(n) = O(g(n)) ) means there exist constants ( c > 0 ) and ( n_0 > 0 ) such that ( 0 \\le f(n) \\le c \\cdot g(n) ) for all ( n \\ge n_0 )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm / Steps to Determine Big-O:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count all primitive operations"
        }), " (assignments, comparisons, arithmetic, array accesses) as a function of input size ( n )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Drop all constant factors"
        }), " — ( 3n ) becomes ( n ); ( 1000 ) becomes ( 1 )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keep only the highest-order term"
        }), " — ( n^2 + n ) becomes ( n^2 )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ignore lower-order terms"
        }), " — they become negligible as ( n ) grows."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Determining Big-O of Linear Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION linearSearch(arr, target):\n    FOR i = 0 TO length(arr) - 1:       // runs n times\n        IF arr[i] == target:             // 1 comparison per iteration\n            RETURN i                     // 1 operation (rare)\n    RETURN -1                            // 1 operation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Growth of O(n) vs O(n²) for n = 1 to 10:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "O(1) ops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "O(log n) ops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "O(n) ops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "O(n log n) ops"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "O(n²) ops"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "49"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "29"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "81"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice: at n=10, O(1) and O(n²) differ by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "100×"
      }), ". At n=1000, O(1) is still 1 operation but O(n²) is 1,000,000 operations — the gap widens without bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration Code — C++, Python, Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Linear Search O(n)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint linearSearch(const vector<int>& arr, int target) {\n    for (int i = 0; i < arr.size(); i++) {\n        if (arr[i] == target) return i;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> data = {5, 2, 8, 1, 9, 3};\n    cout << linearSearch(data, 8) << \"\\n\";   // 2\n    cout << linearSearch(data, 10) << \"\\n\";  // -1\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Linear Search O(n)\ndef linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target:\n            return i\n    return -1\n\ndata = [5, 2, 8, 1, 9, 3]\nprint(linear_search(data, 8))   # 2\nprint(linear_search(data, 10))  # -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Linear Search O(n)\npublic class LinearSearch {\n    static int linearSearch(int[] arr, int target) {\n        for (int i = 0; i < arr.length; i++) {\n            if (arr[i] == target) return i;\n        }\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        int[] data = {5, 2, 8, 1, 9, 3};\n        System.out.println(linearSearch(data, 8));   // 2\n        System.out.println(linearSearch(data, 10));  // -1\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — WHY O(n)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop executes exactly ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " iterations in the worst case (target not found or at last position). Each iteration performs one comparison (", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i] == target"
      }), "). Total operations = ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " comparisons + constant overhead = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n)"
      }), ". The constant factors (loop variable increment, array indexing) are absorbed into the asymptotic notation — they don't change the growth rate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages of Big-O:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Universal language for algorithm comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hides constant factors — O(n) might be slower than O(n²) for small n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Machine-independent analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case may rarely occur in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Predicts scalability to large inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't capture average-case behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simplifies complex code into a single rating"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores memory hierarchy (cache, disk) effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for data structure selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires mathematical maturity for complex algorithms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty input (n = 0):"
        }), " Loop body never executes. Big-O still O(n) — zero iterations is still linear in zero."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 1:"
        }), " No loop iterations for the trivial case — O(1) effectively, but we still classify as O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target not present:"
        }), " Every element is examined — true worst case, exactly n iterations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target at first position:"
        }), " Best case O(1) — but Big-O describes worst case, so we still say O(n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate elements:"
        }), " Search stops at first match. Still O(n) worst-case since the match might be last."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very small n (n < n₀):"
        }), " Big-O guarantees only apply for n ≥ n₀. For tiny inputs, a quadratic algorithm may outperform linear — this is why hybrid sorts (Timsort) exist."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "omega-notation-ω--lower-bound",
      children: "Omega Notation (Ω) — Lower Bound"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " No matter how fast you drive, you cannot reach a destination in less time than the speed limit permits. If the speed limit is 60 km/h on a 100 km road, the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "best possible"
      }), " time is 100/60 ≈ 1.67 hours. Omega provides this \"best case\" floor."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " ( f(n) = \\Omega(g(n)) ) means there exist constants ( c > 0 ) and ( n_0 > 0 ) such that ( 0 \\le c \\cdot g(n) \\le f(n) ) for all ( n \\ge n_0 ). Equivalently, ( g(n) = O(f(n)) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm / Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the minimum number of operations the algorithm ", (0,jsx_runtime.jsx)(_components.em, {
          children: "must"
        }), " perform for any input of size ( n )."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express this minimum as a function of ( n )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Drop constants and lower-order terms."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Best Case of Linear Search:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION linearSearch(arr, target):\n    FOR i = 0 TO length(arr) - 1:\n        IF arr[i] == target:\n            RETURN i             // Best case: target at index 0, returns immediately\n    RETURN -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Ω(n) vs Ω(1) for Linear Search:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input state"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Omega class"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target at index 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target at index 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(1) — still constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target at index k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k + 1 comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(1) — constant for fixed k"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target absent (full scan)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(n) — but this is the lower bound for all inputs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For linear search, the best case is always Ω(1) because the target ", (0,jsx_runtime.jsx)(_components.em, {
        children: "could"
      }), " be at position 0. But the worst case is O(n). The algorithm has different upper and lower bounds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Best-case demonstration\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint findFirst(const vector<int>& arr) {\n    return arr[0];  // Ω(1) — always one operation\n}\n\nint main() {\n    vector<int> data = {42, 7, 3, 9, 1};\n    cout << findFirst(data) << \"\\n\";  // 42\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Best-case demonstration\ndef find_first(arr):\n    return arr[0]  # Ω(1) — always one operation\n\ndata = [42, 7, 3, 9, 1]\nprint(find_first(data))  # 42\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Best-case demonstration\npublic class BestCaseDemo {\n    static int findFirst(int[] arr) {\n        return arr[0];  // Ω(1)\n    }\n\n    public static void main(String[] args) {\n        int[] data = {42, 7, 3, 9, 1};\n        System.out.println(findFirst(data));  // 42\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — WHY Ω(1)?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[0]"
      }), " performs exactly one array access regardless of array size. No loop, no conditionals. The number of operations is constant (1) no matter whether n = 1 or n = 10⁹. Therefore the lower bound is Ω(1)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gives best-case guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best case is often trivially optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for proving optimality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely used alone for algorithm comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Paired with Big-O gives Theta"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Misleading if algorithm has poor worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for lower-bound proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many algorithms have Ω(1) best case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array:"
        }), " Ω(1) — still constant time to return the result (or throw)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array with one element:"
        }), " Ω(1) — one access."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ω(n) algorithms:"
        }), " Any algorithm that must examine all input (e.g., sum all elements) has Ω(n) — you can't sum n numbers without looking at each one."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "theta-notation-θ--tight-bound",
      children: "Theta Notation (Θ) — Tight Bound"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A train that takes exactly 2 hours between two cities every trip — not faster, not slower. Θ(g(n)) means the algorithm's running time is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "both"
      }), " O(g(n)) and Ω(g(n)) — it grows ", (0,jsx_runtime.jsx)(_components.em, {
        children: "exactly"
      }), " like g(n) for large inputs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " ( f(n) = \\Theta(g(n)) ) iff ( f(n) = O(g(n)) ) and ( f(n) = \\Omega(g(n)) ). There exist constants ( c_1, c_2 > 0 ) and ( n_0 > 0 ) such that ( 0 \\le c_1 \\cdot g(n) \\le f(n) \\le c_2 \\cdot g(n) ) for all ( n \\ge n_0 )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm / Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute Big-O upper bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute Omega lower bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If both yield the same growth rate ( g(n) ), the algorithm is ( \\Theta(g(n)) )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Sum of Array (Θ(n)):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION sumArray(arr):\n    total = 0                         // 1 operation\n    FOR i = 0 TO length(arr) - 1:    // runs exactly n times\n        total = total + arr[i]       // 2 operations per iteration\n    RETURN total                      // 1 operation\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Trace Table for sumArray([3, 7, 1]):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "arr[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "total before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "total after"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operations so far"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (init total)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (cmp + add + assign)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return 11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total = 3n + 2 operations = Θ(n). The upper bound is O(n) and the lower bound is Ω(n) — they match, so we get Θ(n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Sum array Θ(n)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint sumArray(const vector<int>& arr) {\n    int total = 0;\n    for (int x : arr) total += x;\n    return total;\n}\n\nint main() {\n    vector<int> data = {3, 7, 1, 9, 4};\n    cout << sumArray(data) << \"\\n\";  // 24\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Sum array Θ(n)\ndef sum_array(arr):\n    total = 0\n    for x in arr:\n        total += x\n    return total\n\ndata = [3, 7, 1, 9, 4]\nprint(sum_array(data))  # 24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Sum array Θ(n)\npublic class SumArray {\n    static int sumArray(int[] arr) {\n        int total = 0;\n        for (int x : arr) total += x;\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] data = {3, 7, 1, 9, 4};\n        System.out.println(sumArray(data));  // 24\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — WHY Θ(n)?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The loop always runs exactly n times regardless of input values. Every input of size n produces exactly n iterations. The upper bound is O(n) (it never exceeds cn) and the lower bound is Ω(n) (it never does fewer than c'n operations). Since upper = lower = n, the bound is tight: Θ(n)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Most precise description of growth rate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many algorithms don't have tight bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Eliminates ambiguity of \"O vs Ω\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to prove than Big-O alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for optimality proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some algorithms require case analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for comparing similar algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not always achievable for complex code"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No tight bound:"
        }), " Linear search has O(n) but Ω(1) — they don't match, so there is no Θ bound."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constant operation:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[0]"
        }), " is Θ(1) — both upper and lower bounds are constant."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested loops that always run:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for i in 0..n: for j in 0..n:"
        }), " is Θ(n²) — always runs exactly n² iterations."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "amortized-analysis",
      children: "Amortized Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You go to the gym 30 times a month. You buy a monthly pass for $100 instead of paying $10 per visit. On day 1, you \"pay\" $100 — expensive. But amortized over 30 visits, the cost is only $3.33 per visit. One operation is costly, but the average over a sequence is cheap. Dynamic array resizing works exactly like this."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Amortized analysis averages the cost of a sequence of operations, showing that while a single operation may be expensive, the average cost per operation is low."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm — Dynamic Array (Vector):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resource: Each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "push_back"
      }), " is O(1) until the array is full. When full:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocate new array of 2× capacity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copy all n elements to new array."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deallocate old array."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Insert new element."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — push_back with Amortized Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION push_back(arr, value, size, capacity):\n    IF size == capacity:                  // Array is full → resize\n        newCapacity = capacity * 2\n        newArr = ALLOCATE(newCapacity)\n        FOR i = 0 TO size - 1:           // Copy n elements\n            newArr[i] = arr[i]\n        arr = newArr\n        capacity = newCapacity\n    arr[size] = value                     // Insert new element\n    size = size + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Cost per push_back Operation:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "size before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "capacity before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Resize?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actual cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Running total"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Amortized cost"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (→2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (alloc+copy+insert)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (→4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (→8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.33"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.75"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "push(9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (→16)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.33"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After k pushes, the total cost ≤ 3k. Each push contributes at most 3 units on average → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1) amortized"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Dynamic array amortized analysis\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main() {\n    vector<int> v;\n    for (int i = 0; i < 16; i++) {\n        v.push_back(i);\n        cout << \"Size: \" << v.size() << \", Capacity: \" << v.capacity() << \"\\n\";\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — List amortized analysis\nimport sys\n\nv = []\nfor i in range(16):\n    v.append(i)\n    print(f\"Size: {len(v)}, Capacity: {sys.getsizeof(v)}\")\n\n# Note: Python's actual capacity granularity differs but same O(1) amortized guarantee\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — ArrayList amortized analysis\nimport java.util.ArrayList;\n\npublic class AmortizedDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> list = new ArrayList<>();\n        for (int i = 0; i < 16; i++) {\n            list.add(i);\n            System.out.println(\"Size: \" + list.size());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — WHY O(1) Amortized?"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The key insight: expensive resize operations become rarer as the array grows. After a resize to capacity k, the next k/2 insertions all cost O(1). The total cost of k insertions is: k (cheap inserts) + k (copy during resize) + 1 (last insert) = 2k + 1. Average = (2k + 1) / k ≈ 2 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1) amortized"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reveals true cost over sequences"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doesn't help for single-operation latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matches real-world usage patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful accounting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Explains why dynamic arrays are practical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable to all data structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational for many DS guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex to understand than worst-case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single insertion:"
        }), " Amortized analysis is meaningless for one operation — analyze as O(n) worst-case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeated resizing:"
        }), " If the growth factor is too small (e.g., 1.1× instead of 2×), amortized cost increases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory fragmentation:"
        }), " Theory assumes contiguous allocation; real systems may slow due to cache misses."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shrinking:"
        }), " Removing elements doesn't automatically release memory — you may need explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shrink_to_fit"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "space-complexity",
      children: "Space Complexity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You have a backpack that can hold 10 kg. You're packing for a hike — every item you add takes up weight and space. Similarly, every variable, array, and recursive call consumes memory. Space complexity measures the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "peak memory usage"
      }), " of an algorithm."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition:"
      }), " Space complexity is the total amount of memory an algorithm needs relative to input size ( n ), including:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input space"
        }), " — storage for the input itself."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Auxiliary space"
        }), " — extra memory for temporary variables, data structures, call stack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm / Steps to Analyze Space Complexity:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Count all variables (scalars, arrays, objects) allocated by the algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Account for each recursive call's stack frame (parameters + return address)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sum the maximum memory used at any point during execution."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Express as a function of input size, drop constants."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode — Space Analysis of Factorial:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// Recursive — O(n) space due to call stack\nFUNCTION factorialRecursive(n):\n    IF n <= 1: RETURN 1\n    RETURN n * factorialRecursive(n - 1)   // n stack frames in memory\n\n// Iterative — O(1) space\nFUNCTION factorialIterative(n):\n    result = 1\n    FOR i = 2 TO n:\n        result = result * i\n    RETURN result                            // only 2 variables\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run — Call Stack for factorialRecursive(5):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory used (approx)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "factorialRecursive(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ factorialRecursive(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → factorialRecursive(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → factorialRecursive(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → → factorialRecursive(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 frames (peak)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → → return 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unwinding"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → return 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ → return 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "→ return 24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "return 120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Peak memory = 5 stack frames → O(n) space."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Space complexity comparison\n#include <iostream>\nusing namespace std;\n\n// O(n) space — recursive\nint factRec(int n) {\n    if (n <= 1) return 1;\n    return n * factRec(n - 1);\n}\n\n// O(1) space — iterative\nint factIter(int n) {\n    int result = 1;\n    for (int i = 2; i <= n; i++) result *= i;\n    return result;\n}\n\n// O(n) auxiliary space — copy array\nint* duplicate(const int* arr, int n) {\n    int* copy = new int[n];  // O(n) extra memory\n    for (int i = 0; i < n; i++) copy[i] = arr[i];\n    return copy;\n}\n\nint main() {\n    cout << \"factRec(5) = \" << factRec(5) << \"\\n\";\n    cout << \"factIter(5) = \" << factIter(5) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Space complexity examples\n\n# O(n) space — recursive\ndef fact_rec(n):\n    if n <= 1:\n        return 1\n    return n * fact_rec(n - 1)\n\n# O(1) space — iterative\ndef fact_iter(n):\n    result = 1\n    for i in range(2, n + 1):\n        result *= i\n    return result\n\n# O(n) auxiliary space\ndef duplicate(arr):\n    return arr[:]  # Creates new list — O(n) extra space\n\nprint(fact_rec(5))   # 120\nprint(fact_iter(5))  # 120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Space complexity examples\npublic class SpaceDemo {\n    // O(n) space — recursive\n    static int factRec(int n) {\n        if (n <= 1) return 1;\n        return n * factRec(n - 1);\n    }\n\n    // O(1) space — iterative\n    static int factIter(int n) {\n        int result = 1;\n        for (int i = 2; i <= n; i++) result *= i;\n        return result;\n    }\n\n    // O(n) auxiliary space\n    static int[] duplicate(int[] arr) {\n        int[] copy = new int[arr.length];  // O(n) extra\n        for (int i = 0; i < arr.length; i++) copy[i] = arr[i];\n        return copy;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(factRec(5));   // 120\n        System.out.println(factIter(5));  // 120\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis — WHY O(n) vs O(1):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recursive factorial:"
        }), " Each call pushes a frame onto the call stack. n recursive calls → n frames in memory at peak → O(n) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative factorial:"
        }), " Only 2 integer variables exist regardless of n → O(1) space."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "The space-time tradeoff:"
        }), " Recursive code is often cleaner but costs O(n) extra memory. Iterative code is more complex but memory-efficient."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity Comparison Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Auxiliary Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array sum (iterative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer accumulator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search (iterative)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three integer pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search (recursive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log n stack frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary array for merging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quicksort (in-place)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack frames for recursion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n stack frames depth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci DP (tabulation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two variables only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D distance matrix"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantages"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prevents memory overflow in production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern machines have ample RAM — sometimes less critical than time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for embedded/constrained devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache effects are not captured by space complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Informs algorithm choice (in-place vs copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual memory and garbage collection complicate real measurement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive algorithms become impractical without it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow is a hard failure, not just slowdown"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Tail recursion:"
        }), " Modern compilers optimize tail-recursive calls to reuse stack frames (O(1) space instead of O(n))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "n = 0:"
        }), " Recursive factorial(0) uses 1 stack frame (base case) — still O(n) where n=0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Very deep recursion (n > 10,000):"
        }), " Stack overflow in most languages regardless of complexity class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared references:"
        }), " Two pointers to the same data don't double the space — only count unique allocations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input space vs auxiliary space:"
        }), " Some analyses exclude input size. Always clarify which you're measuring."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complexity-comparison-table",
      children: "Complexity Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=10"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=100"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=10⁶"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array access, HashMap get, Stack push/pop, Queue enqueue/dequeue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logarithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "BST search/insert, Binary Heap insert/extract, Binary Search on array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10⁶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linked List search, unsorted array search, Tree traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linearithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~664"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~20×10⁶"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting (Merge sort, Heap sort), BST sort, building Segment Tree"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10¹²"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loops, Bubble sort, Floyd-Warshall, adjacency matrix traversal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " At n = 10⁶, O(n²) requires 10¹² operations — roughly ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "17 minutes"
      }), " at 1 GHz. O(n log n) takes ~20 million operations — about ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20 ms"
      }), ". That's a 50,000× difference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ds-operation-complexities-master-table",
      children: "DS Operation Complexities Master Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Delete"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Array (ArrayList)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Singly Linked List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)*"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Doubly Linked List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack (Array)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack (Linked List)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue (Array)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue (Linked List)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Circular Queue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deque"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Search Tree (avg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Search Tree (worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "AVL Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Red-Black Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "B-Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Heap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) peek"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Table (avg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hash Table (worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph (Adj Matrix)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Graph (Adj List)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trie"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × L)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Segment Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(4n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fenwick Tree"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Disjoint Set Union"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(α(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Skip List"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) avg"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linked List delete is O(1) given a pointer to the node to delete, O(n) to find it first.\nL = length of key for Trie; α(n) = inverse Ackermann (practically constant)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-constant-vs-linear",
      children: "Example 1: Constant vs Linear"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — O(1) vs O(n)\n#include <iostream>\n#include <vector>\nusing namespace std;\n\n// O(1) — constant time: direct index access\nint getFirst(const vector<int>& arr) {\n    return arr[0];\n}\n\n// O(n) — linear time: sum all elements\nint sumAll(const vector<int>& arr) {\n    int total = 0;\n    for (int x : arr) {\n        total += x;\n    }\n    return total;\n}\n\nint main() {\n    vector<int> data = {3, 7, 1, 9, 4};\n    cout << \"First: \" << getFirst(data) << \"\\n\";\n    cout << \"Sum: \" << sumAll(data) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "First: 3\nSum: 24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-quadratic-complexity",
      children: "Example 2: Quadratic Complexity"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — O(n²) bubble sort\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nvoid bubbleSort(vector<int>& arr) {\n    int n = arr.size();\n    for (int i = 0; i < n - 1; ++i) {\n        for (int j = 0; j < n - i - 1; ++j) {\n            if (arr[j] > arr[j + 1]) {\n                swap(arr[j], arr[j + 1]);\n            }\n        }\n    }\n}\n\nint main() {\n    vector<int> data = {5, 2, 9, 1, 5, 6};\n    bubbleSort(data);\n    for (int x : data) cout << x << \" \";\n    cout << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 5 5 6 9\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-logarithmic-complexity--binary-search",
      children: "Example 3: Logarithmic Complexity — Binary Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — O(log n) binary search\n#include <iostream>\n#include <vector>\nusing namespace std;\n\nint binarySearch(const vector<int>& arr, int target) {\n    int lo = 0, hi = arr.size() - 1;\n    while (lo <= hi) {\n        int mid = lo + (hi - lo) / 2;\n        if (arr[mid] == target) return mid;\n        if (arr[mid] < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return -1;\n}\n\nint main() {\n    vector<int> arr = {1, 3, 5, 7, 9, 11, 13};\n    int idx = binarySearch(arr, 7);\n    cout << \"Index of 7: \" << idx << \"\\n\";\n    idx = binarySearch(arr, 4);\n    cout << \"Index of 4: \" << idx << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Index of 7: 3\nIndex of 4: -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-recursive-complexity--fibonacci-o2ⁿ-vs-on",
      children: "Example 4: Recursive Complexity — Fibonacci (O(2ⁿ) vs O(n))"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Naive vs DP\n#include <iostream>\nusing namespace std;\n\n// O(2ⁿ) — naive recursion\nint fibNaive(int n) {\n    if (n <= 1) return n;\n    return fibNaive(n - 1) + fibNaive(n - 2);\n}\n\n// O(n) — dynamic programming\nint fibLinear(int n) {\n    if (n <= 1) return n;\n    int a = 0, b = 1;\n    for (int i = 2; i <= n; ++i) {\n        int c = a + b;\n        a = b;\n        b = c;\n    }\n    return b;\n}\n\nint main() {\n    cout << \"fibNaive(10) = \" << fibNaive(10) << \"\\n\";\n    cout << \"fibLinear(10) = \" << fibLinear(10) << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "fibNaive(10) = 55\nfibLinear(10) = 55\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-space-complexity--recursive-vs-iterative-n--5-factorial",
      children: "Example 5: Space Complexity — Recursive vs Iterative (n = 5 factorial)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recursive trace (O(n) space):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack depth"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "factorial(5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ factorial(4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ → factorial(3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → factorial(2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→ → → → factorial(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (peak)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "returns 1 → 2 → 6 → 24 → 120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "unwind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Iterative version uses exactly 2 variables (O(1) space)."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "-pro-tips",
      children: "💡 Pro Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Master the Master Theorem"
        }), ": For divide-and-conquer recurrences of the form (T(n) = aT(n/b) + f(n)), compare (f(n)) with (n^{\\log_b a}). The dominant term determines complexity — no need to expand recurrences manually."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logarithms are base-2 in CS"
        }), ": Unless specified, (\\log n) in algorithm analysis means (\\log_2 n). Doubling the input adds 1 to the depth of binary search."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amortized analysis matters"
        }), ": A single operation may be expensive, but a sequence's average cost can be low. Dynamic array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "push_back"
        }), " is O(n) worst-case but O(1) amortized."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space-time trade-off"
        }), ": Extra memory (memoization, precomputation) can dramatically reduce time. Always ask: can I cache results to avoid recomputation?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Worst-case vs average-case"
        }), ": Hash tables are O(1) average but O(n) worst-case — always know which guarantee your application needs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Big-O is not the whole story"
        }), ": Cache misses, branch prediction, and memory bandwidth can dominate on modern hardware. An O(n) algorithm that streams data sequentially can outperform O(log n) with random access."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-identify-complexity-in-5-steps",
      children: "How to Identify Complexity in 5 Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count nested loops"
        }), " — each nesting level typically multiplies by n (one loop = O(n), two loops = O(n²))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Look for halving"
        }), " — if the input shrinks by a factor each iteration (binary search), suspect O(log n)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check recursion"
        }), " — count the number of recursive calls per level. Fibonacci makes 2 calls per level → O(2ⁿ)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find the recurrence"
        }), " — write T(n) = a·T(n/b) + f(n), then apply the Master Theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Isolate the dominant term"
        }), " — drop everything that grows slower than the fastest-growing term."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"O(n + n²) = O(n)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n² dominates n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"O(2n) = O(n)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actually correct!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants are dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"O(n/2) = O(n)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Actually correct!"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants are dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"O(100) = O(100)\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants dropped"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing amortized with worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized averages over sequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Specify which you mean"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saying O(2ⁿ) = O(n·2ⁿ⁻¹)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both are O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants and lower terms dropped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring recursion depth for space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion uses call stack memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include stack frames in space analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claiming Θ(n) when best case is O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theta requires matching upper AND lower bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use O(n) worst-case, Ω(1) best-case"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classic-space-time-tradeoff-questions",
      children: "Classic Space-Time Tradeoff Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Find duplicates in an array — O(n²) time O(1) space vs O(n) time O(n) space?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The brute-force approach (nested loops) uses no extra memory but costs O(n²). Using a HashSet trades O(n) extra memory for O(n) time:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// O(n) time, O(n) space — using hash set\nbool hasDuplicate(const vector<int>& arr) {\n    unordered_set<int> seen;\n    for (int x : arr) {\n        if (seen.count(x)) return true;\n        seen.insert(x);\n    }\n    return false;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Given infinite memory but limited CPU, which data structure do you choose?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose the structure with the best time complexity: Hash Maps for O(1) lookups, even though they use O(n) memory. When memory is free but time is not, trade space for speed."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q: Given a memory-constrained embedded device, which data structure?"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Choose structures with minimal overhead: fixed-size arrays (O(n) memory with no pointers), in-place algorithms. Avoid recursion (stack overflow risk) and hash tables (unpredictable memory)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-class-quick-id-reference",
      children: "Complexity Class Quick-ID Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern in Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single loop from 0 to n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loops both 0 to n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop divides by 2 each time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop with log n steps × n inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two recursive calls per level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Divide input by b, solve a subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^(log_b a))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-complexity-drives-real-world-data-structure-selection",
      children: "How Complexity Drives Real-World Data Structure Selection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System / Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Structure Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why This Complexity Matters"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Google Search"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverted Index (HashMap-like)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) keyword → document lookup across billions of pages. Linear search would be impossible."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Table, Skip List"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) key-value access, O(log n) sorted sets. Nanosecond latency at 100K+ ops/sec."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL B-Tree Index"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) search/insert/delete for millions of rows. Log n for 10⁶ rows ≈ 20 comparisons."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Netflix Recommendation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Map + Matrix Factorization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) user profile lookup, O(n log n) recommendation sort. Process 100M+ users daily."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux Kernel (scheduler)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red-Black Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) task scheduling for thousands of processes. Deterministic, bounded latency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "DNS Resolution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie (+ Hash Table cache)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L) domain lookup where L = domain length. Fast for 10⁹+ daily queries."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Git (version control)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merkle Tree (hash tree)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) tree diff, O(1) content lookup by hash. Enables efficient branching and merging."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uber ETA"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph (Adjacency List)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V + E) Dijkstra for routing. Scaled across millions of rides in real-time."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stock Exchange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) order insertion, O(1) min/max peek. 10⁶+ orders/sec at microsecond latency."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Facebook Social Graph"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adjacency List (sharded)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) friend lookup, O(V+E) friend-of-friend traversal. 3 billion users with 6 degrees of separation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Allocator (malloc)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Free List + Red-Black Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) free block search, O(1) small allocation from thread-cache."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compression (gzip)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hash Table (LZ77)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) dictionary lookup for string matching during compression."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Garbage Collector (JVM)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph (reachability)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V+E) mark-sweep across heap objects. Must complete in bounded time for real-world apps."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Message Queue (Kafka)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Queue (Circular Buffer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) enqueue/dequeue, O(1) sequential disk writes. 10⁶+ messages/sec throughput."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-scenario-e-commerce-checkout",
      children: "Real-World Scenario: E-Commerce Checkout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An e-commerce system processes 1,000 orders/second:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Naive DS (Complexity)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimized DS (Complexity)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speedup"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup user by ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array O(n): 500μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashMap O(1): 0.1μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deduplicate cart items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loop O(n²): 25μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HashSet O(1): 0.5μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by price"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bubble O(n²): 100μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge O(n log n): 10μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find cheapest item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full scan O(n): 5μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Min-Heap O(1): 0.1μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50×"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Validate promo codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear O(n): 20μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trie O(L): 0.5μs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40×"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total:"
      }), " Naive = 650μs per order → 650 ms for 1000 orders (cannot keep up). Optimized = 11.2μs → 11.2 ms. The optimized system handles ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "58× more throughput"
      }), " — complexity analysis made this possible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Big-O is an upper bound; Omega is a lower bound; Theta is a tight bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst-case analysis gives the strongest guarantee and is the default in algorithm design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurrence relations model recursive algorithm complexity; the Master Theorem solves many common forms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amortized analysis averages costs over a sequence, revealing true performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space complexity must account for both auxiliary data structures and recursion depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n) which is linear in input size is the most common achievable efficiency goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every major real-world system chooses data structures based on complexity analysis."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Notation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formal Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(g(n)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Upper bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(f(n) \\leq c \\cdot g(n)) for (n \\geq n_0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Omega(g(n)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(f(n) \\geq c \\cdot g(n)) for (n \\geq n_0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-case analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\Theta(g(n)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both (O) and (\\Omega)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact growth rate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(o(g(n)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict upper bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(f(n) < c \\cdot g(n)) for all (c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-tight upper bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(\\omega(g(n)))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strict lower bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(f(n) > c \\cdot g(n)) for all (c)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-tight lower bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference-common-growth-rates",
      children: "Quick Reference: Common Growth Rates"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feasible Input Size"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logarithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10^{18})"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10^8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linearithmic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10^7)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n^2))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quadratic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bubble sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10^4)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n^3))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cubic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd-Warshall"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(500)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(2^n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(20)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n!))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Factorial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permutations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(10)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Desired Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) or (O(\\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable, bounded response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large data processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) or (O(n \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low space complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory is limited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Competitive programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(n)) or (O(n \\log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time limits typically 1–2 sec"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(\\log n)) per operation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Millions of rows, fast lookups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web API endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) per request"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thousands of concurrent requests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Caching layer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(1)) get/set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must not become bottleneck"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graph traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(O(V + E))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must visit every node and edge"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes--how-to-avoid-them-gfg-style",
      children: "Common Mistakes & How to Avoid Them (GFG-Style)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's Wrong"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Claiming O(n + n²) = O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n² dominates n asymptotically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) — keep only highest-order term"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saying O(2n) = O(2n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants are dropped in asymptotic notation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — 2n is still linear growth"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Confusing Ω(n) with worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω describes lower bound, not worst-case input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ω(1) is best-case for linear search; O(n) is worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring recursion stack in space analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The call stack uses O(depth) memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always count stack frames — factorial recursive uses O(n) space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming Θ(n) when best-case is better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ requires matching upper AND lower bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use O(n) worst-case, Ω(1) best-case — no tight bound exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Saying \"log n\" without specifying base"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In CS, log means log₂ unless stated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on 10⁶ takes log₂ 10⁶ ≈ 20 steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that Big-O is an upper bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²) is technically correct for linear search too"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always give the tightest meaningful bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner-expansion-gfg-pattern",
      children: "Interview Corner Expansion (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-complexity-analyzer",
      children: "TypeScript Complexity Analyzer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Runtime complexity analyzer — measures execution time of functions\n * Usage: wrap any function to see its running time\n */\nfunction measureTime<T>(fn: () => T, label: string): T {\n    const start = performance.now();\n    const result = fn();\n    const elapsed = performance.now() - start;\n    console.log(`${label}: ${elapsed.toFixed(3)}ms`);\n    return result;\n}\n\n// Example: Compare O(n) vs O(n²)\nconst n = 10000;\nconst arr = Array.from({ length: n }, (_, i) => i);\n\nmeasureTime(() => {\n    let sum = 0;\n    for (let i = 0; i < arr.length; i++) sum += arr[i];\n    return sum;\n}, \"O(n) sum\");\n\nmeasureTime(() => {\n    let pairs = 0;\n    for (let i = 0; i < arr.length; i++) {\n        for (let j = i + 1; j < arr.length; j++) {\n            if (arr[i] + arr[j] === 100) pairs++;\n        }\n    }\n    return pairs;\n}, \"O(n²) pair count\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "master-theorem-calculator",
      children: "Master Theorem Calculator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "/**\n * Solves recurrences of form T(n) = a*T(n/b) + f(n)\n * Returns the complexity class based on Master Theorem\n */\nfunction masterTheorem(a: number, b: number, fExponent: number): string {\n    const logBA = Math.log(a) / Math.log(b);\n    const epsilon = 0.0001;\n\n    if (fExponent < logBA - epsilon) {\n        return `Θ(n^${logBA.toFixed(2)})`; // Case 1\n    } else if (Math.abs(fExponent - logBA) < epsilon) {\n        return `Θ(n^${logBA.toFixed(2)} log n)`; // Case 2\n    } else if (fExponent > logBA + epsilon) {\n        return `Θ(n^${fExponent})`; // Case 3\n    }\n    return \"Need regularity condition check\";\n}\n\n// Examples:\nconsole.log(\"T(n) = 2T(n/2) + n →\", masterTheorem(2, 2, 1));    // Merge sort: Θ(n log n)\nconsole.log(\"T(n) = T(n/2) + 1 →\", masterTheorem(1, 2, 0));     // Binary search: Θ(log n)\nconsole.log(\"T(n) = 2T(n/2) + 1 →\", masterTheorem(2, 2, 0));    // Tree traversal: Θ(n)\nconsole.log(\"T(n) = 3T(n/2) + n →\", masterTheorem(3, 2, 1));    // Karatsuba-like: Θ(n^1.58)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity of accessing the middle element in a singly linked list?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is true about amortized analysis?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) It analyzes worst-case of every single operation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) It averages cost over a sequence of operations ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) It ignores the cost of resizing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) It is the same as average-case analysis"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "An algorithm runs in 2μs for n=100 and 8μs for n=200. Its complexity is likely:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(log n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the space complexity of an in-place algorithm?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) O(1) auxiliary ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) O(n) auxiliary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) O(log n) auxiliary"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) O(n²) auxiliary"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which recurrence represents the complexity of binary search?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) T(n) = 2T(n/2) + O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) T(n) = T(n/2) + O(1) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) T(n) = T(n-1) + O(1)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) T(n) = 2T(n-1) + O(1)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The inverse Ackermann function α(n) appears in which data structure's complexity?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Hash Table"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Disjoint Set Union ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Binary Search Tree"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Segment Tree"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 9-c, 10-b, 11-c, 12-a, 13-b, 14-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "14."
      }), " Determine the complexity of this recursive function:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int mystery(int n) {\n    if (n <= 1) return 1;\n    return mystery(n / 2) + mystery(n / 2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15."
      }), " What is the worst-case time complexity of searching in a hash table with chaining where load factor α = n/m? Explain why."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "16."
      }), " Write a TypeScript function to verify whether a given code snippet runs in O(n), O(n log n), or O(n²) by measuring execution time at different input sizes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "17."
      }), " A nested loop runs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (i = 0; i < n; i++) { for (j = i; j < n; j += 2) { ... } }"
      }), ". What is the exact number of inner iterations? What is the Big-O complexity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "18."
      }), " Compare the space complexity of Merge Sort (which uses O(n) auxiliary space) and Quick Sort (which uses O(log n) auxiliary space). When would you choose one over the other for a memory-constrained system?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "19."
      }), " An algorithm has time complexity T(n) = 4T(n/2) + n². Apply the Master Theorem and determine its complexity class."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "20."
      }), " Design an O(1) time and O(1) space function to check whether two strings are anagrams. Is this possible? Explain the space-time tradeoff."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "21."
      }), " Prove that for any comparison-based sorting algorithm, the worst-case time complexity is Ω(n log n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "22."
      }), " Given two algorithms with complexities O(n²) and O(n log n), for n = 10⁶, estimate how many times faster the O(n log n) algorithm is (assume each operation takes 1ns)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "23."
      }), " Implement a TypeScript decorator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@logComplexity"
      }), " that automatically logs execution time for any method it decorates."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "24."
      }), " Write a brief analysis: Why does the \"two-pointer technique\" for finding a pair with given sum in a sorted array achieve O(n) time instead of O(n²)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers for exercises 14-24:"
      }), " (14) O(n) — the recurrence is T(n)=2T(n/2)+O(1), case 1 of Master Theorem gives Θ(n). (15) O(1+α) average, O(n) worst-case. (16-24) Solutions available in instructor materials."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "little-o-and-little-omega-notation-strict-bounds",
      children: "Little-o and Little-omega Notation (Strict Bounds)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Little-o"
      }), " is like saying \"strictly less than.\" If Big-O says \"≤ 100 kg,\" little-o says \"< 100 kg\" — the algorithm is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "strictly"
      }), " faster than the bound, not just equal to it. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Little-omega"
      }), " is the strict greater-than counterpart."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Little-o"
        }), ": ( f(n) = o(g(n)) ) means for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "every"
        }), " constant ( c > 0 ), there exists ( n_0 > 0 ) such that ( 0 \\le f(n) < c \\cdot g(n) ) for all ( n \\ge n_0 ). The bound does not hold for any constant — ( f(n) ) grows strictly slower than ( g(n) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Little-omega"
        }), ": ( f(n) = \\omega(g(n)) ) means for ", (0,jsx_runtime.jsx)(_components.em, {
          children: "every"
        }), " constant ( c > 0 ), there exists ( n_0 > 0 ) such that ( 0 \\le c \\cdot g(n) < f(n) ) for all ( n \\ge n_0 )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-intuition",
      children: "Key Intuition"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "( f(n) = O(g(n)) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( f ) grows no faster than ( g )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n = O(n^2) ) ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n) = o(g(n)) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( f ) grows strictly slower than ( g )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n = o(n^2) ) ✓, but ( n^2 \\neq o(n^2) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n) = \\Omega(g(n)) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( f ) grows no slower than ( g )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 = \\Omega(n) ) ✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n) = \\omega(g(n)) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( f ) grows strictly faster than ( g )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 = \\omega(n) ) ✓, but ( n \\neq \\omega(n) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--comparing-growth-rates",
      children: "Dry Run — Comparing Growth Rates"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function Pair"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Big-O?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Little-o?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n)=n, g(n)=n^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n = O(n^2) ) ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n = o(n^2) ) ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n grows slower; for c=1, n < n² for n>1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n)=2n, g(n)=n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2n = O(n) ) ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 2n \\neq o(n) ) ✗"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No c makes 2n < cn for all n (pick c=3? 2n<3n holds, but need for ", (0,jsx_runtime.jsx)(_components.em, {
              children: "every"
            }), " c)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( f(n)=n^2, g(n)=n^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 = O(n^2) ) ✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 \\neq o(n^2) ) ✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal growth; cannot find c<1 to make n² < cn²"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-little-o-matters",
      children: "When Little-o Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In algorithm analysis, little-o appears in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strict optimality proofs"
        }), ": Showing that an algorithm is ( o(g(n)) ) proves it is strictly better than the ( \\Theta(g(n)) ) class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Limits and calculus"
        }), ": ( \\lim_{n\\to\\infty} f(n)/g(n) = 0 ) iff ( f(n) = o(g(n)) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Advanced complexity theory"
        }), ": Separating complexity classes (e.g., P vs NP uses strict containment)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript--growth-rate-classifier",
      children: "TypeScript — Growth Rate Classifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function classifyGrowth(\n    f: (n: number) => number,\n    g: (n: number) => number,\n    n0: number = 1000,\n    trials: number = 10\n): string {\n    const ratios: number[] = [];\n    for (let t = 1; t <= trials; t++) {\n        const n = n0 * t;\n        const ratio = f(n) / g(n);\n        ratios.push(ratio);\n    }\n    const trend = ratios[ratios.length - 1] / ratios[0];\n    if (trend < 0.1) return \"f = o(g) — f grows strictly slower\";\n    if (trend > 10) return \"f = ω(g) — f grows strictly faster\";\n    if (Math.abs(trend - 1) < 0.1) return \"f = Θ(g) — same growth rate\";\n    return \"f = O(g) but not o(g) — needs more data\";\n}\n\n// Example: Compare n vs n²\nconst f = (n: number) => n;\nconst g = (n: number) => n * n;\nconsole.log(classifyGrowth(f, g)); // \"f = o(g)\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern-1",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "15",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "If f(n) = n² and g(n) = n³, which statement is true?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) f = o(g) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) g = o(f)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) f = Θ(g)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) f = ω(g)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is true for f(n) = 100n + log n?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) f = o(n)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) f = Θ(n) ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) f = ω(n²)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) f = o(log n)"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "The statement \"n = o(n²)\" is:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) True ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) False"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Neither true nor false"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Only true for n ≥ 2"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "For which pair does f(n) = ω(g(n)) hold?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) f = n, g = n²"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) f = n², g = n ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) f = n, g = n"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) f = log n, g = n"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 15-a, 16-b, 17-a, 18-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "np-completeness-and-complexity-classes",
      children: "NP-Completeness and Complexity Classes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you have a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jigsaw puzzle"
      }), " with 10,000 pieces. Checking whether someone's proposed solution is correct is easy (O(n) — just look at the picture). But ", (0,jsx_runtime.jsx)(_components.em, {
        children: "finding"
      }), " the solution from scratch is exponentially hard. NP-complete problems are exactly this: solutions are easy to verify, but hard to find."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-classes-overview",
      children: "Complexity Classes Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Complexity Zoo\"\n        P[\"<b>P</b><br/>Polynomial Time<br/>O(n), O(n²), O(n³)...<br/>Solved efficiently\"]\n        NP[\"<b>NP</b><br/>Nondeterministic Polynomial<br/>Verified in polynomial time<br/>SAT, TSP, Knapsack\"]\n        NPC[\"<b>NP-Complete</b><br/>Hardest in NP<br/>SAT → 3SAT → Vertex Cover<br/>→ Ham Path → TSP\"]\n        NPH[\"<b>NP-Hard</b><br/>At least as hard as NP<br/>(may not be in NP)<br/>Halting Problem\"]\n        EXP[\"<b>EXP</b><br/>Exponential Time<br/>O(2ⁿ), O(n!)<br/>Intractable for large n\"]\n    end\n\n    P --> NP\n    NP --> NPC\n    NPC --> NPH\n    NPH -.-> EXP\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definitions",
      children: "Definitions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "P"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solvable in O(n^k) time on a deterministic Turing machine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting, searching, shortest path"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nondeterministic Polynomial Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifiable in polynomial time (given a certificate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sudoku (checking a filled board)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP-Complete"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP + NP-Hard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["In NP ", (0,jsx_runtime.jsx)(_components.em, {
              children: "and"
            }), " every NP problem reduces to it"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SAT, 3SAT, Traveling Salesman, Knapsack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NP-Hard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NP-Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At least as hard as every NP problem (may not be in NP)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Halting problem, optimization TSP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EXP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solvable in O(2^{n^k}) time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalized Chess (n×n board)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-p-vs-np-question",
      children: "The P vs NP Question"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The million-dollar question:"
      }), " Is P = NP? If true, every problem whose solution can be quickly verified can also be quickly solved. Most computer scientists believe P ≠ NP."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Practical implication:"
      }), " For NP-complete problems, we don't expect polynomial-time algorithms. Instead, use:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Approximation algorithms"
        }), " (guaranteed near-optimal)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heuristics"
        }), " (good in practice, no guarantee)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exact algorithms"
        }), " (exponential but optimized for small n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Parameterized complexity"
        }), " (exponential only in a small parameter k)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--reducing-3sat-to-vertex-cover",
      children: "Dry Run — Reducing 3SAT to Vertex Cover"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transformation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start with 3SAT formula φ with n variables, m clauses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a variable gadget: for each variable x, create edge (x, ¬x)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a clause gadget: for each clause, create a triangle of 3 literals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Connect each literal in clause gadget to its corresponding variable gadget node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set k = n + 2m (one variable per variable gadget + 2 per clause)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "φ is satisfiable iff graph has a vertex cover of size k"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is a polynomial-time reduction, proving Vertex Cover is NP-Complete."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-this-means-for-data-structures",
      children: "What This Means for Data Structures"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expected Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Acceptable DS Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In P (sorting, search)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) or O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard DS suffice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In P (shortest path)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(V log V + E)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue + adjacency list"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-Complete (small n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ) for n ≤ 30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branch and bound + pruning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-Complete (large n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy, local search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-Hard optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heuristic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simulated annealing, genetic algorithms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-mcqs-gfg-pattern-2",
      children: "Additional MCQs (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "19",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which is true about NP-Complete problems?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) They can be solved in polynomial time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) They are the hardest problems in NP ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) They cannot be verified in polynomial time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) They never have practical solutions"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "If problem A reduces to problem B in polynomial time and B ∈ P, then:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) A ∈ P ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) A ∈ NP-Complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) B ∈ NP-Complete"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) A is unsolvable"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Which of the following is NOT in NP?"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) Graph coloring"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) Traveling Salesman decision version"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) Halting Problem ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) Subset Sum"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "A problem that is in NP and every NP problem reduces to it is called:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "a) NP-Hard"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "b) NP-Complete ✓"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "c) P"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "d) EXP"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answers:"
      }), " 19-b, 20-a, 21-c, 22-b"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-exercises-gfg-pattern-1",
      children: "Additional Exercises (GFG Pattern)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "25",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Classify each problem"
          }), " as P, NP-Complete, or NP-Hard: (a) Finding MST, (b) Finding Hamiltonian Cycle, (c) Halting Problem, (d) Sorting n integers."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Prove that if a polynomial-time reduction from Problem A to Problem B exists, and B is in P, then A is also in P."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain why the Traveling Salesman Problem (TSP) optimization version is NP-Hard but the decision version (\"Is there a tour of length ≤ k?\") is NP-Complete."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a polynomial-time reduction from Vertex Cover to Independent Set."
          }), " (Hint: A vertex cover's complement is an independent set.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "For n=20, an O(2ⁿ) algorithm takes ~1 second. How long would it take for n=30? n=40? Explain why exponential algorithms become infeasible so quickly."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement a TypeScript function that checks whether a given graph coloring (assignment of colors to vertices) is valid — and explain why this verification is in P while finding the minimum coloring is NP-Hard."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-selection-decision-flowchart",
      children: "Algorithm Selection Decision Flowchart"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    Start[\"Given a computational problem\"] --> Q1[\"Is input size small<br/>(n ≤ 1000)?\"]\n    Q1 -->|Yes| Q2[\"Is exact solution needed?\"]\n    Q1 -->|No| Q3[\"Is the problem in P?\"]\n    \n    Q2 -->|\"Yes\"| Exact[\"Use exact algorithm<br/>O(n³) or better acceptable\"]\n    Q2 -->|\"No\"| Approx[\"Use approximation<br/>or heuristic\"]\n    \n    Q3 -->|\"Yes\"| Poly[\"Use polynomial algorithm<br/>O(n), O(n log n), O(n²)\"]\n    Q3 -->|\"No (NP-Hard)\"| Q4[\"How large is n?\"]\n    \n    Q4 -->|\"n ≤ 30\"| Branch[\"Branch and bound<br/>with pruning\"]\n    Q4 -->|\"n ≤ 500\"| Approx2[\"Approximation algorithm<br/>with guarantee\"]\n    Q4 -->|\"n ≥ 500\"| Heuristic[\"Heuristic / Metaheuristic<br/>GA, SA, Local Search\"]\n    \n    Exact --> Choose[\"Choose data structure<br/>for the exact algorithm\"]\n    Poly --> Choose\n    Approx --> Choose\n    Branch --> Choose\n    Approx2 --> Choose\n    Heuristic --> Choose\n    \n    Choose --> DS[\"Map to optimal DS:<br/>• Array: O(1) access<br/>• Hash: O(1) lookup<br/>• Heap: O(log n) min<br/>• BST: O(log n) search\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "one-sentence-takeaways-1",
      children: "One-Sentence Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Big-O is an upper bound; Omega is a lower bound; Theta is a tight bound; Little-o and Little-omega are strict bounds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Worst-case analysis gives the strongest guarantee and is the default in algorithm design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recurrence relations model recursive algorithm complexity; the Master Theorem solves many common forms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amortized analysis averages costs over a sequence, revealing true performance."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space complexity must account for both auxiliary data structures and recursion depth."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n) which is linear in input size is the most common achievable efficiency goal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every major real-world system chooses data structures based on complexity analysis."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problems in P are tractable; NP-Complete problems likely require exponential time for exact solutions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Algorithm selection depends on input size, exactness requirement, and problem complexity class."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between Big-O and Big-Theta?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is worst-case analysis usually preferred over average-case?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the growth rate of binary search? Explain why."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between auxiliary space and total space complexity?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does a dynamic array have O(1) amortized insert but O(n) worst-case insert?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the time complexity of the following function:"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "void func(int n) {\n    for (int i = 1; i < n; i *= 2) {\n        for (int j = 0; j < n; ++j) {\n            std::cout << i << \", \" << j << \"\\n\";\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a function that finds the maximum element in an unsorted array. State its complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the time and space complexity of computing the nth Fibonacci number using memoization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an array of n integers, design an algorithm to find the most frequent element. State both time and space complexity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-problems",
      children: "Complexity Analysis Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Classify each code snippet's complexity:\na) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for (i = 0; i < n; i = i + 2) { ... }"
          }), "\nb) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for (i = 0; i < n; i++) { for (j = i; j < n; j++) { ... } }"
          }), "\nc) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for (i = 0; i < n; i++) { for (j = 0; j < i * i; j++) { ... } }"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare O(1) space but O(n²) time vs O(n) space but O(n) time for finding the first duplicate in an array. Which would you choose for a mobile app? For a server processing 1M requests/sec?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design an algorithm to find the k-th largest element in an unsorted array in O(n) average time. Implement it and analyze its worst-case complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a data structure that supports insert, delete, and getRandom in O(1) average time. (Hint: combine an array with a hash map.) Analyze the space complexity."
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