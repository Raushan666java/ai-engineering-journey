"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[20420],{

/***/ 66362
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_07_dp_intro_md_b60_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-07-dp-intro-md-b60.json
const site_docs_courses_algorithms_07_dp_intro_md_b60_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/07-dp-intro","title":"Chapter 7: Dynamic Programming — Foundations","description":"Prerequisites Greedy Algorithms — Understanding when local choices aren\'t enough | Next Dynamic Programming — Knapsack Problems — Classic DP patterns for resource allocation","source":"@site/docs/courses/algorithms/07-dp-intro.md","sourceDirName":"courses/algorithms","slug":"/algorithms/07-dp-intro","permalink":"/ai-engineering-journey/algorithms/07-dp-intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"07-dp-intro","slug":"/algorithms/07-dp-intro","title":"Chapter 7: Dynamic Programming — Foundations","sidebar_label":"Chapter 7: Dynamic Programming — Foundations","sidebar_position":7},"sidebar":"coursesSidebar","previous":{"title":"Chapter 6: Greedy Algorithms","permalink":"/ai-engineering-journey/algorithms/06-greedy"},"next":{"title":"Chapter 8: Dynamic Programming — Knapsack Problems","permalink":"/ai-engineering-journey/algorithms/08-dp-knapsack"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/07-dp-intro.md


const frontMatter = {
	id: '07-dp-intro',
	slug: '/algorithms/07-dp-intro',
	title: 'Chapter 7: Dynamic Programming — Foundations',
	sidebar_label: 'Chapter 7: Dynamic Programming — Foundations',
	sidebar_position: 7
};
const contentTitle = 'Chapter 7: Dynamic Programming — Foundations';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Dynamic Programming Matters",
  "id": "why-dynamic-programming-matters",
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
  "value": "7.1 The Dynamic Programming Paradigm",
  "id": "71-the-dynamic-programming-paradigm",
  "level": 3
}, {
  "value": "7.2 Fibonacci Numbers",
  "id": "72-fibonacci-numbers",
  "level": 3
}, {
  "value": "7.3 Rod Cutting",
  "id": "73-rod-cutting",
  "level": 3
}, {
  "value": "7.4 Steps for DP Problem Solving",
  "id": "74-steps-for-dp-problem-solving",
  "level": 3
}, {
  "value": "DP Decision Framework",
  "id": "dp-decision-framework",
  "level": 2
}, {
  "value": "How to Identify DP Problems (The 5-Step Approach)",
  "id": "how-to-identify-dp-problems-the-5-step-approach",
  "level": 3
}, {
  "value": "The 7 DP Patterns (Interview Cheatsheet)",
  "id": "the-7-dp-patterns-interview-cheatsheet",
  "level": 3
}, {
  "value": "Common Decision Questions",
  "id": "common-decision-questions",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Example 7.1: Fibonacci with Constant Space",
  "id": "example-71-fibonacci-with-constant-space",
  "level": 3
}, {
  "value": "Example 7.2: Rod Cutting with Reconstruction",
  "id": "example-72-rod-cutting-with-reconstruction",
  "level": 3
}, {
  "value": "Example 7.3: Identifying DP Problems",
  "id": "example-73-identifying-dp-problems",
  "level": 3
}, {
  "value": "Example 7.4: DP vs Greedy — Activity Selection",
  "id": "example-74-dp-vs-greedy--activity-selection",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Classic DP Patterns for Interviews",
  "id": "classic-dp-patterns-for-interviews",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 3
}, {
  "value": "Quick Interview Strategy",
  "id": "quick-interview-strategy",
  "level": 3
}, {
  "value": "Time Complexity Estimation",
  "id": "time-complexity-estimation",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Bioinformatics — Sequence Alignment",
  "id": "bioinformatics--sequence-alignment",
  "level": 3
}, {
  "value": "Routing and Navigation",
  "id": "routing-and-navigation",
  "level": 3
}, {
  "value": "Natural Language Processing",
  "id": "natural-language-processing",
  "level": 3
}, {
  "value": "Operations Research",
  "id": "operations-research",
  "level": 3
}, {
  "value": "System Design Context",
  "id": "system-design-context",
  "level": 3
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
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
    hr: "hr",
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
        id: "chapter-7-dynamic-programming--foundations",
        children: "Chapter 7: Dynamic Programming — Foundations"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/06-greedy",
          children: "Chapter 6: Greedy Algorithms"
        }), " — Understanding when local choices aren't enough | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/08-dp-knapsack",
          children: "Chapter 8: Dynamic Programming — Knapsack Problems"
        }), " — Classic DP patterns for resource allocation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
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
        href: "../../assets/images/lessons/algorithms/07-dp-intro/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/07-dp-intro/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/07-dp-intro/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/07-dp-intro/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/07-dp-intro/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/07-dp-intro/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify problems with optimal substructure and overlapping subproblems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between memoization (top-down) and tabulation (bottom-up) approaches."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve Fibonacci numbers and the rod cutting problem using dynamic programming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Transform recursive solutions into DP solutions and analyze complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the 5-step DP decision framework to new problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize common DP patterns in interview and real-world scenarios."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-dynamic-programming-matters",
      children: "Why Dynamic Programming Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy — GPS shortest path:"
      }), " Imagine you need to drive from New York to Los Angeles. The naive approach enumerates every possible route — 2^(number of intersections) — which is computationally impossible. Instead, GPS systems use DP: the shortest path to Los Angeles through any city X is the shortest path to X plus the shortest path from X to LA. By caching the shortest path to every intermediate city, we avoid recomputing the same subpaths thousands of times. This is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "exactly"
      }), " how DP works — break a problem into overlapping pieces, solve each once, and reuse."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Contrast this with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fibonacci"
      }), ": while it demonstrates DP's mechanics beautifully, it is not a real-world problem. Nobody computes Fibonacci numbers for a living. But shortest paths, sequence alignment, resource allocation, and inventory optimization are DP — and they run billions of times daily in Google Maps, BLAST, AWS EC2 Auto Scaling, and SAP systems. DP turns exponential-time pipe dreams into polynomial-time production systems."]
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
            children: "DP Paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure + overlapping subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two properties distinguish DP from divide-and-conquer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down recursion with caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy conversion from recursive; lazy evaluation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up table filling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better constant factors; avoids recursion overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci Numbers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive O(phi^n) -> DP O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1D state with O(1) space optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rod Cutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First cut decides remaining optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The canonical \"DP is for optimization\" example"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP Decision Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-step systematic approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "How to tackle any new DP problem in interviews"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[DP Properties] --> B[Optimal Substructure]\n    A --> C[Overlapping Subproblems]\n    B --> D[Memoization Top-Down]\n    C --> D\n    B --> E[Tabulation Bottom-Up]\n    C --> E\n    D --> F[Fibonacci]\n    D --> G[Rod Cutting]\n    E --> F\n    E --> G\n    F --> H[DP Decision Framework]\n    G --> H\n    H --> I[Interview Corner]\n    H --> J[Real-World Applications]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch07-dp-intro.png",
        alt: "DP Introduction Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-dynamic-programming-paradigm",
      children: "7.1 The Dynamic Programming Paradigm"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Dynamic programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems, solving each subproblem once, and storing the results for reuse. It was pioneered by Richard Bellman in the 1950s — the name \"dynamic programming\" was chosen to hide the mathematical nature from his skeptical Pentagon boss."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DP applies when a problem exhibits two properties:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Optimal Substructure"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An optimal solution to the problem contains optimal solutions to its subproblems. In other words, you can build the global optimum from locally optimal decisions."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Has Optimal Substructure?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subpath of shortest path is shortest between its endpoints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest path (general graph)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subpath of longest path may not be longest — cycles make it NP-hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting halves correctly gives sorted whole"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Searching in correct half guarantees result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix chain multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal parenthesization contains optimal sub-chains"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Greedy algorithms also require optimal substructure but add the \"greedy-choice property\" — that a local choice is globally optimal. DP never assumes this; it explores all choices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Overlapping Subproblems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The same subproblems recur multiple times, and the total number of distinct subproblems is polynomial. This is what makes DP worthwhile — without overlap, you just have divide-and-conquer (like merge sort, which splits into non-overlapping halves)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subproblems Overlap?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Distinct Subproblems"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Calls (Naive)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(phi^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rod cutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Insight:"
      }), " When subproblems overlap, storing results converts exponential to polynomial. When they don't, DP buys you nothing."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Memoization vs. Tabulation: Step-by-Step Comparison"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memoization (Top-Down)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tabulation (Bottom-Up)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start from goal, recurse down"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start from base, build up"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State solves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves only needed states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solves all states up to target"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive + cache (hash map / array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative loops over table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (recursion order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must determine topological order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache + call stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table (often smaller)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sparse state space, unknown dependencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dense state space, known order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires separate traceback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can store decisions in companion table"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-fibonacci-numbers",
      children: "7.2 Fibonacci Numbers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy — rabbit population growth:"
      }), " The Fibonacci sequence originally modeled idealized rabbit reproduction: each pair matures in one month, then produces one pair per month forever. While biologically simplified, the same recurrence appears in stock option pricing (binomial trees), computer science (AVL tree height analysis, Fibonacci heap operations), and even nature (phyllotaxis, nautilus shells). The real lesson: recurrences that branch into overlapping subproblems are everywhere."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Compute F(n) where F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2) for n >= 2."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check base cases:"
        }), " if n <= 1, return n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Check cache (memoization):"
        }), " if result exists, return it."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Recurrence:"
        }), " F(n) = F(n-1) + F(n-2)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Store and return:"
        }), " save computed result before returning."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run — Memoization Trace for F(5)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Call Tree:\n                  F(5)\n                /      \\\n           F(4)          F(3)\n          /    \\         /    \\\n      F(3)      F(2)   F(2)  F(1)\n     /    \\    /   \\   /   \\\n  F(2)  F(1) F(1) F(0) F(1) F(0)\n  /   \\\nF(1) F(0)\n\nDP Table After Execution:\nIndex:  0  1  2  3  4  5\nValue:  0  1  1  2  3  5\n\nWithout memoization: F(2) computed 3 times, F(3) computed 2 times = 15 calls\nWith memoization:    each subproblem solved once = 9 calls\nSavings: 40% fewer calls even for n=5; exponential savings for larger n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tabulation Trace for F(5)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i-2]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i-1]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "dp[i] = dp[i-1] + dp[i-2]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: F(5) = 5."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Memoization (Top-Down)\n#include <vector>\nint fibMemo(int n, std::vector<int>& memo) {\n    if (n <= 1) return n;\n    if (memo[n] != -1) return memo[n];\n    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n    return memo[n];\n}\nint fib(int n) {\n    std::vector<int> memo(n+1, -1);\n    return fibMemo(n, memo);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Tabulation (Bottom-Up) O(1) Space\nint fib(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; ++i) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Memoization\ndef fib_memo(n: int, memo: list = None) -> int:\n    if memo is None:\n        memo = [-1] * (n + 1)\n    if n <= 1:\n        return n\n    if memo[n] != -1:\n        return memo[n]\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\n    return memo[n]\n\n# Python — Tabulation O(1) Space\ndef fib(n: int) -> int:\n    if n <= 1:\n        return n\n    prev2, prev1 = 0, 1\n    for _ in range(2, n + 1):\n        prev2, prev1 = prev1, prev1 + prev2\n    return prev1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Memoization\nclass Solution {\n    int fibMemo(int n, int[] memo) {\n        if (n <= 1) return n;\n        if (memo[n] != -1) return memo[n];\n        memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n        return memo[n];\n    }\n    int fib(int n) {\n        int[] memo = new int[n+1];\n        Arrays.fill(memo, -1);\n        return fibMemo(n, memo);\n    }\n}\n\n// Java — Tabulation O(1) Space\nint fib(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack Depth"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(phi^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation (array)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation (space-optimized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Optimization Discussion:"
      }), " Fibonacci only ever needs the previous two values. This is the simplest example of state compression — noticing that dp[i] depends only on dp[i-1] and dp[i-2], so we can drop the full array. This pattern generalizes: whenever dp[i] depends on a fixed window of previous k states, we can reduce space from O(n) to O(k). More broadly, this is the first hint at ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "rolling array"
      }), " optimization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Fibonacci is the simplest example of DP's power — naive recursion is exponential (O(phi^n)), while DP is linear (O(n)). Always draw the recursion tree to check if subproblems overlap."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The naive recursive Fibonacci is a classic interview trap — never implement it without memoization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Fibonacci numbers demonstrate DP's transformative power, dropping from exponential to linear time by caching overlapping subproblem results."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-rod-cutting",
      children: "7.3 Rod Cutting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy — lumber mill optimization:"
      }), " A lumber mill receives logs of fixed length 10 meters. Customers want rods of lengths 1–10 meters at known prices. Should they sell one 10m rod? Cut into 4m + 6m? 3m + 3m + 4m? Each cut reduces total usable wood (kerf loss), and different markets value different lengths differently. The mill must compute optimal cutting patterns to maximize revenue. This is rod cutting — every sawmill, paper mill, and metal fabrication plant solves this exact problem."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a rod of length ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " and a price function ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[i]"
      }), " for rods of length ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), ", determine the maximum revenue obtainable by cutting the rod and selling the pieces."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal substructure:"
      }), " Let ", (0,jsx_runtime.jsx)(_components.code, {
        children: "r[n]"
      }), " be the optimal revenue for length ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), ". The first cut of length ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " yields revenue ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[i] + r[n - i]"
      }), ". Therefore:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "r[n] = max( p[i] + r[n - i] )  for 1 <= i <= n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["with base case ", (0,jsx_runtime.jsx)(_components.code, {
        children: "r[0] = 0"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialize:"
        }), " Create array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r[0..n]"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r[0] = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "For each length j from 1 to n:"
        }), "\na. Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "q = -infinity"
        }), ".\nb. ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "For each cut i from 1 to j:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p[i] + r[j - i] > q"
            }), ", update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "q"
            }), ".\nc. Store ", (0,jsx_runtime.jsx)(_components.code, {
              children: "r[j] = q"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Return"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "r[n]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "(Reconstruction):"
        }), " Track ", (0,jsx_runtime.jsx)(_components.code, {
          children: "s[j]"
        }), " = optimal first cut for each length; backtrack."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step-by-Step Dry Run — DP Table Trace"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Price table: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p = [0, 1, 5, 8, 9, 10, 17, 17, 20]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n = 8"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "j=1:  cut 1: p[1] + r[0] = 1 + 0 = 1  =>  r[1] = 1,   s[1] = 1\nj=2:  cut 1: p[1] + r[1] = 1 + 1 = 2\n      cut 2: p[2] + r[0] = 5 + 0 = 5  =>  r[2] = 5,   s[2] = 2\nj=3:  cut 1: p[1] + r[2] = 1 + 5 = 6\n      cut 2: p[2] + r[1] = 5 + 1 = 6\n      cut 3: p[3] + r[0] = 8 + 0 = 8  =>  r[3] = 8,   s[3] = 3\nj=4:  cut 1: p[1] + r[3] = 1 + 8 = 9\n      cut 2: p[2] + r[2] = 5 + 5 = 10 => r[4] = 10,  s[4] = 2\n      cut 3: p[3] + r[1] = 8 + 1 = 9\n      cut 4: p[4] + r[0] = 9 + 0 = 9\nj=5:  cut 1: p[1] + r[4] = 1 + 10 = 11\n      cut 2: p[2] + r[3] = 5 + 8 = 13 => r[5] = 13,  s[5] = 2\n      cut 3: p[3] + r[2] = 8 + 5 = 13 => (also 13)\n      cut 4: p[4] + r[1] = 9 + 1 = 10\n      cut 5: p[5] + r[0] = 10 + 0 = 10\nj=6:  cut 1: p[1] + r[5] = 1 + 13 = 14\n      cut 2: p[2] + r[4] = 5 + 10 = 15\n      cut 3: p[3] + r[3] = 8 + 8 = 16\n      cut 4: p[4] + r[2] = 9 + 5 = 14\n      cut 5: p[5] + r[1] = 10 + 1 = 11\n      cut 6: p[6] + r[0] = 17 + 0 = 17 => r[6] = 17,  s[6] = 6\nj=7:  cut 1: p[1] + r[6] = 1 + 17 = 18 => r[7] = 18,  s[7] = 1\n      cut 2: p[2] + r[5] = 5 + 13 = 18 => (also 18, could be s[7]=2)\n      cut 3: p[3] + r[4] = 8 + 10 = 18\n      cut 4: p[4] + r[3] = 9 + 8 = 17\n      cut 5: p[5] + r[2] = 10 + 5 = 15\n      cut 6: p[6] + r[1] = 17 + 1 = 18\n      cut 7: p[7] + r[0] = 17 + 0 = 17\nj=8:  cut 1: p[1] + r[7] = 1 + 18 = 19\n      cut 2: p[2] + r[6] = 5 + 17 = 22 => r[8] = 22,  s[8] = 2\n      cut 3: p[3] + r[5] = 8 + 13 = 21\n      cut 4: p[4] + r[4] = 9 + 10 = 19\n      cut 5: p[5] + r[3] = 10 + 8 = 18\n      cut 6: p[6] + r[2] = 17 + 5 = 22 => (also 22)\n      cut 7: p[7] + r[1] = 17 + 1 = 18\n      cut 8: p[8] + r[0] = 20 + 0 = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "DP Table (r array):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| j | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|----|----|----|----|----|----|----|----|\n| r[j] | 0 | 1 | 5 | 8 | 10 | 13 | 17 | 18 | 22 |\n| s[j] | — | 1 | 2 | 3 | 2 | 2 | 6 | 1 | 2 |"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconstruction:"
      }), " For n=8, s[8]=2. Cut a piece of length 2, remaining 6. s[6]=6. Cut 6, remaining 0. Cuts: [2, 6]. Revenue: p[2] + p[6] = 5 + 17 = 22."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Implementations"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Rod Cutting with Reconstruction\n#include <vector>\n#include <algorithm>\n\nstruct RodSolution {\n    int maxRevenue;\n    std::vector<int> cuts;\n};\n\nRodSolution rodCutting(const std::vector<int>& price, int n) {\n    std::vector<int> r(n + 1, 0);\n    std::vector<int> s(n + 1, 0);\n\n    for (int j = 1; j <= n; ++j) {\n        int q = -1;\n        for (int i = 1; i <= j; ++i) {\n            if (price[i] + r[j - i] > q) {\n                q = price[i] + r[j - i];\n                s[j] = i;\n            }\n        }\n        r[j] = q;\n    }\n\n    RodSolution sol;\n    sol.maxRevenue = r[n];\n    int len = n;\n    while (len > 0) {\n        sol.cuts.push_back(s[len]);\n        len -= s[len];\n    }\n    return sol;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Rod Cutting with Reconstruction\ndef rod_cutting(price: list, n: int) -> tuple:\n    r = [0] * (n + 1)\n    s = [0] * (n + 1)\n\n    for j in range(1, n + 1):\n        q = -1\n        for i in range(1, j + 1):\n            if price[i] + r[j - i] > q:\n                q = price[i] + r[j - i]\n                s[j] = i\n        r[j] = q\n\n    # Reconstruction\n    cuts = []\n    length = n\n    while length > 0:\n        cuts.append(s[length])\n        length -= s[length]\n\n    return r[n], cuts\n\n# Example\nprice = [0, 1, 5, 8, 9, 10, 17, 17, 20]\nmax_rev, cuts = rod_cutting(price, 8)\nprint(f\"Max revenue: {max_rev}, Cuts: {cuts}\")  # 22, [2, 6]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Rod Cutting with Reconstruction\nimport java.util.*;\n\nclass RodSolution {\n    int maxRevenue;\n    List<Integer> cuts;\n\n    RodSolution(int maxRevenue, List<Integer> cuts) {\n        this.maxRevenue = maxRevenue;\n        this.cuts = cuts;\n    }\n}\n\nclass RodCutting {\n    static RodSolution solve(int[] price, int n) {\n        int[] r = new int[n + 1];\n        int[] s = new int[n + 1];\n\n        for (int j = 1; j <= n; j++) {\n            int q = Integer.MIN_VALUE;\n            for (int i = 1; i <= j; i++) {\n                if (price[i] + r[j - i] > q) {\n                    q = price[i] + r[j - i];\n                    s[j] = i;\n                }\n            }\n            r[j] = q;\n        }\n\n        List<Integer> cuts = new ArrayList<>();\n        int len = n;\n        while (len > 0) {\n            cuts.add(s[len]);\n            len -= s[len];\n        }\n        return new RodSolution(r[n], cuts);\n    }\n\n    public static void main(String[] args) {\n        int[] price = {0, 1, 5, 8, 9, 10, 17, 17, 20};\n        RodSolution sol = solve(price, 8);\n        System.out.println(\"Max: \" + sol.maxRevenue + \", Cuts: \" + sol.cuts);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2^n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) (stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explores all 2^(n-1) cutting patterns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache prevents recomputation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation (basic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double loop over lengths and cuts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation (optimized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Theta(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot improve beyond quadratic input/output"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Optimization Discussion:"
      }), " Rod cutting's DP depends on all smaller subproblems (r[j] uses r[j-i] for any i), so the full array is necessary — O(1) space is impossible. However, if we only need the maximum value (not the cuts), the reconstruction array ", (0,jsx_runtime.jsx)(_components.code, {
        children: "s[]"
      }), " can be omitted, still O(n) for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "r[]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Rod cutting introduces the critical DP step of reconstruction — storing decisions alongside optimal values. Always implement reconstruction if the problem asks for the actual solution, not just the value."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The four-step DP framework (structure, recurse, compute, reconstruct) applies to every DP problem."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Rod cutting uses the recurrence r[n] = max(p[i] + r[n-i]) to find optimal cutting patterns in O(n^2), demonstrating the four-step DP methodology with reconstruction."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-steps-for-dp-problem-solving",
      children: "7.4 Steps for DP Problem Solving"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The classic ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "4-step DP framework:"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Characterize the structure"
        }), " of an optimal solution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Define the value"
        }), " of an optimal solution recursively (the recurrence)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute the value"
        }), " bottom-up (or top-down with memoization)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Construct the optimal solution"
        }), " from the computed information (reconstruction)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "dp-decision-framework",
      children: "DP Decision Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-identify-dp-problems-the-5-step-approach",
      children: "How to Identify DP Problems (The 5-Step Approach)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When you encounter a new problem, run through these five steps to determine if DP applies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1: Is it an optimization problem?"
      }), "\nDoes the problem ask for maximum, minimum, longest, shortest, or number of ways? If no, it might not be DP. (Exception: counting problems without optimization can still be DP.)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2: Can you make a choice at each step?"
      }), "\nIs the solution built from a sequence of decisions? Each choice leads to a subproblem of the same type."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3: Does the choice affect future choices?"
      }), "\nIf choosing A vs B at step 1 changes what's available at step 2, greedy might fail — and DP might be needed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4: Can you find overlapping subproblems?"
      }), "\nDraw the recursion tree for a small input. Do the same subproblems appear in multiple branches? If yes, memoization will help."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5: Can you define a state?"
      }), "\nA state ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j]"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][j][k]"
      }), " must capture everything needed to make future decisions. Ask: what variables change as we recurse?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-7-dp-patterns-interview-cheatsheet",
      children: "The 7 DP Patterns (Interview Cheatsheet)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Classic Problems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1D DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i] — best for first i items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, rod cutting, climbing stairs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D DP (two sequences)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] — prefixes of two strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, edit distance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D DP (knapsack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][c] — first i items with capacity c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack, subset sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interval DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] — substring i..j"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix chain multiplication, palindrome partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tree DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[node] — subtree rooted at node"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diameter of tree, max independent set"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitmask DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[mask] — subset represented as bitmask"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traveling salesman, assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP on Grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dp[i][j] — cell (i, j) in grid"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum path sum, unique paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-decision-questions",
      children: "Common Decision Questions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Question"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Answer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy, DP, or just recursion?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy has greedy-choice property; DP has overlapping subproblems; recursion alone has neither"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Medium constraint -> DP?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If constraints are 10^2-10^3, DP array of size O(n) or O(n^2) is feasible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down or bottom-up?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down for complex dependencies or sparse solves; bottom-up for dense, known order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can space be optimized?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check dp[i]'s dependency window — only previous k states? O(1) possible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-71-fibonacci-with-constant-space",
      children: "Example 7.1: Fibonacci with Constant Space"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int fib(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; ++i) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fib(n: int) -> int:\n    if n <= 1:\n        return n\n    prev2, prev1 = 0, 1\n    for _ in range(2, n + 1):\n        prev2, prev1 = prev1, prev1 + prev2\n    return prev1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "int fib(int n) {\n    if (n <= 1) return n;\n    int prev2 = 0, prev1 = 1;\n    for (int i = 2; i <= n; i++) {\n        int curr = prev1 + prev2;\n        prev2 = prev1;\n        prev1 = curr;\n    }\n    return prev1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-72-rod-cutting-with-reconstruction",
      children: "Example 7.2: Rod Cutting with Reconstruction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nstruct RodSolution {\n    int maxRevenue;\n    std::vector<int> cuts;\n};\n\nRodSolution rodCutting(const std::vector<int>& price, int n) {\n    std::vector<int> r(n + 1, 0);\n    std::vector<int> s(n + 1, 0);  // optimal first cut for each length\n\n    for (int j = 1; j <= n; ++j) {\n        int q = -1;\n        for (int i = 1; i <= j; ++i) {\n            if (price[i] + r[j - i] > q) {\n                q = price[i] + r[j - i];\n                s[j] = i;\n            }\n        }\n        r[j] = q;\n    }\n\n    RodSolution sol;\n    sol.maxRevenue = r[n];\n    int len = n;\n    while (len > 0) {\n        sol.cuts.push_back(s[len]);\n        len -= s[len];\n    }\n    return sol;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Walkthrough:"
      }), " price = [0, 1, 5, 8, 9, 10, 17, 17, 20], n = 8."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Candidates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "r[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "s[j]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[0]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[1]=2, p[2]+r[0]=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[2]=6, p[2]+r[1]=6, p[3]+r[0]=8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[3]=9, p[2]+r[2]=10, p[3]+r[1]=9, p[4]+r[0]=9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[4]=11, p[2]+r[3]=13, p[3]+r[2]=13, p[4]+r[1]=10, p[5]+r[0]=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[5]=14, p[2]+r[4]=15, p[3]+r[3]=16, p[4]+r[2]=14, p[5]+r[1]=11, p[6]+r[0]=17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[6]=18, p[2]+r[5]=18, p[3]+r[4]=18, p[4]+r[3]=17, p[5]+r[2]=15, p[6]+r[1]=18, p[7]+r[0]=17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "p[1]+r[7]=19, p[2]+r[6]=22, p[3]+r[5]=21, p[4]+r[4]=19, p[5]+r[3]=18, p[6]+r[2]=22, p[7]+r[1]=18, p[8]+r[0]=20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Maximum revenue for length 8: 22, cuts = [2, 6] (p[2]=5, p[6]=17, sum=22)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-73-identifying-dp-problems",
      children: "Example 7.3: Identifying DP Problems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimal Substructure?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Overlapping Subproblems?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP Applicable?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (divide-and-conquer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activity selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (greedy works)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path (DAG)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (Bellman-Ford)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Longest increasing subsequence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-74-dp-vs-greedy--activity-selection",
      children: "Example 7.4: DP vs Greedy — Activity Selection"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Greedy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick earliest-finishing, recurse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Try every possible first activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy-choice property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure only"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classic-dp-patterns-for-interviews",
      children: "Classic DP Patterns for Interviews"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Signature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Problems"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linear DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i] = f(dp[i-1], dp[i-2], ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, climbing stairs, house robber"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two-String DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = f(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, edit distance, wildcard matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Knapsack DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[c] = max(dp[c], v + dp[c-w])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack, subset sum, coin change"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Palindrome DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = (s[i]==s[j] && dp[i+1][j-1])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Longest palindromic substring, palindrome partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Grid DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][j] = f(dp[i-1][j], dp[i][j-1])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unique paths, minimum path sum"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stock DP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dp[i][k][hold] = max(skip, buy/sell)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best time to buy/sell stock (all variants)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting base cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check n=0, n=1, empty input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong recurrence direction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use small example to verify; trace by hand"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one in array indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP[0] is base, DP[i] uses DP[i-1] — test with i=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not handling negative values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Initialize with -inf, not 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Over-indexing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Allocate n+1, not n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignoring reconstruction until end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store decisions in companion array during compute phase"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Using DP when greedy works"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if greedy-choice property holds (local optimum is global)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-interview-strategy",
      children: "Quick Interview Strategy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1. Ask:  \"What's the smallest input?\"  ->  Base case.\n2. Ask:  \"What choices do I have?\"     ->  Recurrence.\n3. Draw:  Recursion tree.               ->  Check overlap.\n4. State: \"dp[i] = best for first i items\"  ->  Define state.\n5. Write: Recursive + memo first.       ->  Then convert to iterative.\n6. Check: Off-by-one, initialization, return value.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "time-complexity-estimation",
      children: "Time Complexity Estimation"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "State Dimensions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Transition Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Time"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) 1-state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) 1-state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*m) 2-state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*m)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n*m) 2-state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(k)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["O(n", (0,jsx_runtime.jsx)(_components.em, {
              children: "m"
            }), "k)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2) interval"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^3)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bioinformatics--sequence-alignment",
      children: "Bioinformatics — Sequence Alignment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Smith-Waterman algorithm (local sequence alignment) is DP applied to DNA/protein sequences. Given two genetic sequences, it finds regions of similarity by filling a DP table where each cell represents the alignment score up to that position. BLAST, the most-cited bioinformatics tool ever, uses DP as its core engine. Every genome sequencing pipeline depends on DP for aligning reads to reference genomes — enabling personalized medicine, evolutionary biology, and COVID-19 variant tracking."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "routing-and-navigation",
      children: "Routing and Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "GPS systems use Dijkstra's algorithm (which is DP — it relies on optimal substructure) and A* (which adds heuristics) to compute shortest paths. Google Maps processes over 40 billion kilometers of route computation daily. Without DP, routing at this scale would require supercomputers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "natural-language-processing",
      children: "Natural Language Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Viterbi algorithm"
      }), " (DP) powers part-of-speech tagging: given a sequence of words, find the most likely sequence of tags (noun, verb, etc.). The recurrence ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dp[i][tag] = max( dp[i-1][prev] + emission + transition )"
      }), " is textbook DP. Similarly, the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "CKY algorithm"
      }), " (DP) underlies constituency parsing — how computers understand sentence structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operations-research",
      children: "Operations Research"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Industry"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory management"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rod cutting variant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manufacturing, retail"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud computing, finance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Portfolio optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Knapsack + risk constraints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Investment banking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Supply chain routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest path on DAG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logistics (Amazon, FedEx)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence alignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D DP (LCS)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics, NLP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-design-context",
      children: "System Design Context"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why It's DP"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CDN caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal cache replacement (Belady's)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Future-knowing optimal — theoretical upper bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least-connections routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping server state subproblems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rate limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Token bucket / sliding window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stateful counting with overlapping time windows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database query optimizer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Join order selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix-chain multiplication pattern (interval DP)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Optimal Substructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal solution from optimal sub-solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared with greedy — not unique to DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All DP problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping Subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same subproblems recur"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distinguishes DP from divide-and-conquer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "What makes DP necessary"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down recursion + caching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy — only solves needed subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When subproblem space is sparse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom-up iterative table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eager — solves all subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When all subproblems are needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reconstruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Store decisions to recover solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separates value computation from solution building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Problems asking for actual solution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State Compression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce table to minimal window"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decreases space from O(n) to O(1) or O(k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci, house robber, grid DP row-by-row"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Two Required Properties"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure + overlapping subproblems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Two Implementation Styles"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top-down (memoization) vs bottom-up (tabulation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4-Step Framework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structure -> Recurrence -> Compute -> Reconstruct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5-Step Decision Framework"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization? Choices? Future affected? Overlap? State definable?"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "States x Transitions = O(number of subproblems x choices per problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using DP when subproblems don't overlap (just use recursion); forgetting base cases; off-by-one in indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check dependency window — rolling array for last k states"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "DP Paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely common — most important technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core technique for optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation, routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm design theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memoization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick DP in interviews"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy DP for sparse states"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Caching, query optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tabulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preferred for efficiency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard CP DP approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Table-driven automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formal verification"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial — warm-up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix exponentiation variation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rod Cutting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic DP intro problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variations in cutting problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operations research"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DP Decision Framework"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systematic approach to unknown problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern recognition training"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Curriculum design"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence Alignment DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LCS, edit distance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String DP variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Diff tools, plagiarism detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bioinformatics"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "DP solves problems by combining solutions to overlapping subproblems, turning exponential into polynomial time."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memoization"
        }), " is recursive with caching; ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "tabulation"
        }), " is iterative with table-filling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The two required properties are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "optimal substructure"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "overlapping subproblems"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "5-step decision framework"
        }), " helps identify if DP applies: optimization? choices? future affected? overlap? definable state?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rod cutting illustrates the four-step DP methodology with reconstruction."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fibonacci demonstrates exponential improvement from O(phi^n) to O(n) with O(1) space."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications span bioinformatics (BLAST), GPS routing (Dijkstra's, A*), NLP (Viterbi), and operations research."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What two properties must a problem have for DP to apply?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Divide-and-conquer and recursion"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Optimal substructure and overlapping subproblems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Greedy-choice property and optimal substructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Polynomial time and linear space"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Optimal substructure (optimal solution from optimal sub-solutions) and overlapping subproblems (same subproblems recur).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the time complexity of naive recursive Fibonacci?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n^2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(phi^n) — exponential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) O(phi^n) where phi approx 1.618 — each call spawns two recursive calls, leading to exponential growth.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which DP approach solves only the subproblems that are actually needed?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Tabulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Memoization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Both"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Neither"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Memoization (top-down) only computes subproblems that are reached through recursion. Tabulation (bottom-up) computes all subproblems in order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Why does merge sort NOT benefit from DP?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It has no optimal substructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Its subproblems don't overlap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It's already O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It uses recursion"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Merge sort's subproblems are disjoint (left half, right half) — they never overlap, so caching provides no benefit.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the space-optimized Fibonacci implementation's space complexity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n^2)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) O(1) — since dp[i] depends only on dp[i-1] and dp[i-2], we only need two variables.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between optimal substructure and overlapping subproblems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does merge sort not benefit from dynamic programming?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the space complexity of memoization for Fibonacci? How does it compare to bottom-up?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Give an example of a problem that has optimal substructure but no overlapping subproblems."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Fibonacci using memoization (top-down) in all three languages (C++, Python, Java)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify the rod cutting algorithm to return the maximum revenue and the cuts that achieve it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given the price table for n = 10, find the maximum revenue and optimal cuts using DP."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a DP solution for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "climbing stairs"
        }), " problem: a staircase with n steps, you can climb 1 or 2 steps at a time. Count distinct ways to reach the top."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generalize rod cutting to include a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "cost per cut"
        }), " c. Modify the recurrence and implement the solution. Analyze the complexity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Can Rod Cutting be solved with O(1) space?"
        }), " Prove or disprove — what about the problem's dependency structure prevents O(1) space optimization?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identify the pattern:"
        }), " For each of these problems, determine if DP applies and identify the state: (a) Minimum number of coins to make change, (b) Maximum subarray sum, (c) Tower of Hanoi, (d) Counting paths in a grid with obstacles."]
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