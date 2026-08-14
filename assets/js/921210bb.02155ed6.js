"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[79588],{

/***/ 12710
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_08_dp_knapsack_md_921_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-08-dp-knapsack-md-921.json
const site_docs_courses_algorithms_08_dp_knapsack_md_921_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/08-dp-knapsack","title":"Chapter 8: Dynamic Programming — Knapsack Problems","description":"Prerequisites Dynamic Programming — Foundations — DP properties, recurrence design, tabulation | Next Dynamic Programming — Sequences — From resource allocation to string and sequence patterns","source":"@site/docs/courses/algorithms/08-dp-knapsack.md","sourceDirName":"courses/algorithms","slug":"/algorithms/08-dp-knapsack","permalink":"/ai-engineering-journey/algorithms/08-dp-knapsack","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"08-dp-knapsack","slug":"/algorithms/08-dp-knapsack","title":"Chapter 8: Dynamic Programming — Knapsack Problems","sidebar_label":"Chapter 8: Dynamic Programming — Knapsack Problems","sidebar_position":8},"sidebar":"course-algorithms","previous":{"title":"Chapter 7: Dynamic Programming — Foundations","permalink":"/ai-engineering-journey/algorithms/07-dp-intro"},"next":{"title":"Chapter 9: Dynamic Programming — Sequences","permalink":"/ai-engineering-journey/algorithms/09-dp-sequences"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/08-dp-knapsack.md


const frontMatter = {
	id: '08-dp-knapsack',
	slug: '/algorithms/08-dp-knapsack',
	title: 'Chapter 8: Dynamic Programming — Knapsack Problems',
	sidebar_label: 'Chapter 8: Dynamic Programming — Knapsack Problems',
	sidebar_position: 8
};
const contentTitle = 'Chapter 8: Dynamic Programming — Knapsack Problems';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Knapsack Problems Matter",
  "id": "why-knapsack-problems-matter",
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
  "value": "8.1 0/1 Knapsack",
  "id": "81-01-knapsack",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 4
}, {
  "value": "Recurrence",
  "id": "recurrence",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run with 2D DP Table",
  "id": "step-by-step-dry-run-with-2d-dp-table",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Space Optimization (1D Array)",
  "id": "space-optimization-1d-array",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "8.2 Fractional Knapsack (Greedy)",
  "id": "82-fractional-knapsack-greedy",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-1",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "8.3 Bounded Knapsack",
  "id": "83-bounded-knapsack",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-2",
  "level": 4
}, {
  "value": "Algorithm Steps (Binary Splitting)",
  "id": "algorithm-steps-binary-splitting",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "8.4 Unbounded Knapsack",
  "id": "84-unbounded-knapsack",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-3",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 4
}, {
  "value": "Recurrence",
  "id": "recurrence-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-3",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-3",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-3",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 4
}, {
  "value": "8.5 Subset Sum",
  "id": "85-subset-sum",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-4",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 4
}, {
  "value": "Recurrence",
  "id": "recurrence-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-4",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-4",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-4",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 4
}, {
  "value": "8.6 Equal Partition Subset Sum",
  "id": "86-equal-partition-subset-sum",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-5",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 4
}, {
  "value": "Reduction",
  "id": "reduction",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-4",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-5",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-5",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-5",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 4
}, {
  "value": "8.7 Coin Change (Minimum Coins)",
  "id": "87-coin-change-minimum-coins",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-6",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-5",
  "level": 4
}, {
  "value": "Recurrence",
  "id": "recurrence-3",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-5",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-6",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-6",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-6",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 4
}, {
  "value": "8.8 Target Sum",
  "id": "88-target-sum",
  "level": 3
}, {
  "value": "Problem Definition",
  "id": "problem-definition-7",
  "level": 4
}, {
  "value": "Reduction to Subset Sum",
  "id": "reduction-to-subset-sum",
  "level": 4
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-6",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-6",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-7",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-7",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-7",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 4
}, {
  "value": "Knapsack Family Comparison",
  "id": "knapsack-family-comparison",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Problem 1: Partition Equal Subset Sum (LeetCode 416)",
  "id": "problem-1-partition-equal-subset-sum-leetcode-416",
  "level": 3
}, {
  "value": "Problem 2: Target Sum (LeetCode 494)",
  "id": "problem-2-target-sum-leetcode-494",
  "level": 3
}, {
  "value": "Problem 3: Coin Change 2 — Number of Ways (LeetCode 518)",
  "id": "problem-3-coin-change-2--number-of-ways-leetcode-518",
  "level": 3
}, {
  "value": "Problem 4: Ones and Zeroes (LeetCode 474)",
  "id": "problem-4-ones-and-zeroes-leetcode-474",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Resource Allocation &amp; Cloud Computing",
  "id": "resource-allocation--cloud-computing",
  "level": 3
}, {
  "value": "Cryptography",
  "id": "cryptography",
  "level": 3
}, {
  "value": "Cutting Stock Problem",
  "id": "cutting-stock-problem",
  "level": 3
}, {
  "value": "Portfolio Optimization",
  "id": "portfolio-optimization",
  "level": 3
}, {
  "value": "Logistics &amp; Supply Chain",
  "id": "logistics--supply-chain",
  "level": 3
}, {
  "value": "Dynamic Programming Framework",
  "id": "dynamic-programming-framework",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 3
}, {
  "value": "Exercises",
  "id": "exercises-1",
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
    h4: "h4",
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
        id: "chapter-8-dynamic-programming--knapsack-problems",
        children: "Chapter 8: Dynamic Programming — Knapsack Problems"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/07-dp-intro",
          children: "Chapter 7: Dynamic Programming — Foundations"
        }), " — DP properties, recurrence design, tabulation | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/09-dp-sequences",
          children: "Chapter 9: Dynamic Programming — Sequences"
        }), " — From resource allocation to string and sequence patterns"]
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
        href: "../../assets/images/lessons/algorithms/08-dp-knapsack/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/08-dp-knapsack/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/08-dp-knapsack/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/08-dp-knapsack/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/08-dp-knapsack/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/08-dp-knapsack/visual-explanation.png",
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
        children: "Solve 0/1 knapsack, unbounded knapsack, and subset sum using DP."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between 0/1 and unbounded knapsack and adapt the recurrence accordingly."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply DP to the partition equal subset sum and target sum problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimize space usage from ( O(nW) ) to ( O(W) )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify which knapsack variant fits a given real-world problem."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-knapsack-problems-matter",
      children: "Why Knapsack Problems Matter"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are shipping goods in a truck with a weight limit. Each item has a weight and a profit. Which items do you load to maximize profit without breaking the axle? This is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "knapsack problem"
      }), " — and it shows up everywhere:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Knapsack Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Budget allocation"
            }), " — ( n ) projects with cost & ROI, limited capital"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each project is an item. Invest or skip (0/1)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cargo loading"
            }), " — planes, ships, trucks with weight/volume limits"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximize freight value within capacity (0/1)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Inventory restocking"
            }), " — order any quantity of each product up to warehouse capacity"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each product can be ordered multiple times (unbounded)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cloud resource provisioning"
            }), " — VMs of different sizes and costs"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose VM types to meet workload within budget (bounded)."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Raw material cutting"
            }), " — cut steel rods of fixed length into saleable pieces"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut any number of each piece size (unbounded)."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Knapsack problems are the gateway to understanding ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "resource-constrained optimization"
      }), ". Every knapsack variant teaches a different DP pattern: 0/1 teaches item-or-skip decisions, unbounded teaches unlimited reuse, and fractional teaches greedy optimality. Mastering these patterns unlocks solutions to hundreds of interview and real-world problems."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(skip, take) — backward capacity loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The classic DP for item selection with capacity constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy by value/weight ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal when items are divisible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple copies per item, expand to 0/1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalization between 0/1 and unbounded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1D array, iterate capacity backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) ) space, but loses reconstruction ability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same recurrence but forward capacity loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direction difference = item can be reused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean DP for reachable sums"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for many NP-hard reductions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Equal Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to subset sum with target = total/2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic \"can you split equally\" problem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1 + dp[c - coin]) — forward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded min-coin variation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to subset sum via math transform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign assignment counting problem"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Knapsack Problems] --> B[0/1 Knapsack]\n    A --> C[Fractional Knapsack<br/>(Greedy)]\n    A --> D[Bounded Knapsack]\n    A --> E[Unbounded Knapsack]\n    A --> F[Subset Sum]\n    B --> G[Backward loop 1D]\n    B --> H[2D DP table]\n    C --> I[Greedy by value/weight ratio]\n    D --> J[Item limits + 0/1 expansion]\n    E --> K[Forward loop 1D]\n    E --> L[Coin Change]\n    F --> M[Boolean DP]\n    F --> N[Equal Partition]\n    F --> O[Target Sum]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch08-dp-knapsack.png",
        alt: "DP Knapsack Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-01-knapsack",
      children: "8.1 0/1 Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are a hiker packing a backpack with a 5 kg limit. You have a tent (1 kg, $10), sleeping bag (2 kg, $15), stove (3 kg, $40), and water filter (4 kg, $55). Each item can be taken at most once. Which combination gives the most value without exceeding 5 kg? The answer is the water filter ($55) + tent ($10) = 5 kg, $65. DP finds this optimum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given ( n ) items, each with weight ( w_i ) and value ( v_i ), and a knapsack capacity ( W ), select a subset of items to maximize total value without exceeding capacity. Each item can be taken at most once (0/1 decision)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a 2D DP table ( dp[n+1][W+1] ) initialized to 0."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each item ( i ) from 1 to ( n ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each capacity ( c ) from 1 to ( W ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If ( w_i > c ): item cannot fit → ( dp[i][c] = dp[i-1][c] )"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Else: ( dp[i][c] = \\max(dp[i-1][c], ; v_i + dp[i-1][c - w_i]) )"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( dp[n][W] ) — the maximum value achievable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recurrence",
      children: "Recurrence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\ndp[i][c] = \\begin{cases}\n0 & \\text{if } i = 0 \\text{ or } c = 0 \\\ndp[i-1][c] & \\text{if } w_i > c \\\n\\max(dp[i-1][c], ; v_i + dp[i-1][c - w_i]) & \\text{otherwise}\n\\end{cases}\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this works:"
      }), " At each item ( i ) and capacity ( c ), we have two choices — skip the item (keep value from previous row at same capacity) or take it (add its value to best value for remaining capacity from previous row). The max picks the better option. The previous row guarantees each item is used at most once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Knapsack01(n, W, w, v):\n    dp = 2D array of size (n+1) x (W+1), initialized to 0\n    for i = 1 to n:\n        for c = 1 to W:\n            if w[i] > c:\n                dp[i][c] = dp[i-1][c]\n            else:\n                dp[i][c] = max(dp[i-1][c], v[i] + dp[i-1][c - w[i]])\n    return dp[n][W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-with-2d-dp-table",
      children: "Step-by-Step Dry Run with 2D DP Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Items = [(1, 10), (2, 15), (3, 40), (4, 55)], ( W = 5 )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize: row 0 and column 0 are all 0."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "( dp[i][c] )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c=5"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "i=0"
            }), " (none)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "i=1"
            }), " (1,10)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "i=2"
            }), " (2,15)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "25"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "25"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "25"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "i=3"
            }), " (3,40)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "40"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "50"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "55"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "i=4"
            }), " (4,55)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "55"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "65"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key computations:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["( dp[1][1] ): w=1 ≤ 1 → max(0, 10+0) = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "10"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["( dp[2][3] ): w=2 ≤ 3 → max(10, 15+10) = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "25"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["( dp[3][5] ): w=3 ≤ 5 → max(25, 40+15) = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "55"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["( dp[4][5] ): w=4 ≤ 5 → max(55, 55+10) = ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "65"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 65. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Items selected:"
      }), " Water filter (4 kg, $55) + Tent (1 kg, $10) = 5 kg, $65."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nint knapsack01(const std::vector<int>& w, const std::vector<int>& v, int W) {\n    int n = static_cast<int>(w.size());\n    std::vector<std::vector<int>> dp(n + 1, std::vector<int>(W + 1, 0));\n\n    for (int i = 1; i <= n; ++i) {\n        for (int c = 1; c <= W; ++c) {\n            if (w[i - 1] > c) {\n                dp[i][c] = dp[i - 1][c];\n            } else {\n                dp[i][c] = std::max(dp[i - 1][c],\n                                    v[i - 1] + dp[i - 1][c - w[i - 1]]);\n            }\n        }\n    }\n    return dp[n][W];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def knapsack01(weights: list[int], values: list[int], W: int) -> int:\n    n = len(weights)\n    dp = [[0] * (W + 1) for _ in range(n + 1)]\n\n    for i in range(1, n + 1):\n        for c in range(1, W + 1):\n            if weights[i - 1] > c:\n                dp[i][c] = dp[i - 1][c]\n            else:\n                dp[i][c] = max(dp[i - 1][c],\n                               values[i - 1] + dp[i - 1][c - weights[i - 1]])\n    return dp[n][W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Knapsack01 {\n    public static int knapsack01(int[] weights, int[] values, int W) {\n        int n = weights.length;\n        int[][] dp = new int[n + 1][W + 1];\n\n        for (int i = 1; i <= n; i++) {\n            for (int c = 1; c <= W; c++) {\n                if (weights[i - 1] > c) {\n                    dp[i][c] = dp[i - 1][c];\n                } else {\n                    dp[i][c] = Math.max(dp[i - 1][c],\n                                        values[i - 1] + dp[i - 1][c - weights[i - 1]]);\n                }\n            }\n        }\n        return dp[n][W];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double loop: ( n ) items × ( W ) capacity slots. Each subproblem solved in ( O(1) ). Pseudo-polynomial because ( W ) is a numeric value, not input size in bits."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D table stores ( (n+1)(W+1) ) integers."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why pseudo-polynomial?"
      }), " Input size is ( O(n \\log W) ) (weights + capacity in bits), but runtime is ( O(nW) ) which is exponential in the bit-length of ( W )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "space-optimization-1d-array",
      children: "Space Optimization (1D Array)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The recurrence reads only from the previous row. Replace the 2D table with a 1D array by iterating capacity ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "backward"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Knapsack01_1D(n, W, w, v):\n    dp = array of size W+1, initialized to 0\n    for i = 1 to n:\n        for c = W down to w[i]:\n            dp[c] = max(dp[c], v[i] + dp[c - w[i]])\n    return dp[W]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why backward?"
      }), " Reading ( dp[c - w_i] ) from the right ensures we read the value from the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "previous iteration"
      }), " (without the current item), preventing reuse. Forward would read the current item's value, allowing multiple uses — exactly what unbounded knapsack wants."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int knapsack01_1D(const std::vector<int>& w, const std::vector<int>& v, int W) {\n    int n = static_cast<int>(w.size());\n    std::vector<int> dp(W + 1, 0);\n    for (int i = 0; i < n; ++i) {\n        for (int c = W; c >= w[i]; --c) {\n            dp[c] = std::max(dp[c], v[i] + dp[c - w[i]]);\n        }\n    }\n    return dp[W];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple recurrence, easy to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) ) is pseudo-polynomial — slow for large ( W )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1D space optimization is straightforward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reconstruct selected items with 1D alone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all other knapsack variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only handles at-most-once per item"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( W = 0 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 — no items can fit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n = 0 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0 — nothing to choose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Item heavier than capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( w_i > W )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Item is always skipped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All items too heavy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All ( w_i > W )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single item fits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One item with ( w_1 \\le W )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns ( v_1 )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The backward loop in 0/1 knapsack is the single most important implementation detail. Backward = each item used at most once. Forward = items can be reused."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The 1D space optimization loses the ability to reconstruct ", (0,jsx_runtime.jsx)(_components.em, {
          children: "which"
        }), " items were selected. Keep the 2D table if reconstruction is needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " 0/1 knapsack uses ( dp[i][c] = \\max(dp[i-1][c], v_i + dp[i-1][c - w_i]) ) with backward capacity iteration to ensure each item is used at most once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-fractional-knapsack-greedy",
      children: "8.2 Fractional Knapsack (Greedy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note:"
        }), " This is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "greedy"
        }), " algorithm, not DP. It is included because it is the only knapsack variant solvable in polynomial time and is the counterpoint that motivates why 0/1 needs DP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " At a bulk food market, you can take any amount of rice, beans, or flour — you do not need whole bags. Just scoop what you need."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-1",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given ( n ) items, each with weight ( w_i ) and value ( v_i ), and capacity ( W ), maximize total value where ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "fractions of items can be taken"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute ratio ( r_i = v_i / w_i ) for each item."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort items by ( r_i ) descending."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize total value = 0, remaining capacity = ( W )."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each item in sorted order:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If item fits entirely: take it fully, subtract weight."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Else: take fraction ( remaining / w_i ), add proportional value, stop."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return total value."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FractionalKnapsack(n, W, w, v):\n    items = list of (w[i], v[i], v[i]/w[i])\n    sort items by ratio descending\n    totalValue = 0\n    for each item in items:\n        if W >= item.w:\n            totalValue += item.v\n            W -= item.w\n        else:\n            totalValue += item.v * (W / item.w)\n            break\n    return totalValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Items = [(5, 30), (10, 40), (15, 45), (20, 100)], ( W = 30 )"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Ratio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorted: A(6.0), B(5.0), C(4.0), D(3.0)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Take ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "A"
        }), " fully: value = 30, remaining = 25"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Take ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "B"
        }), " fully: value = 130, remaining = 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Take ( \\frac{5}{10} = 0.5 ) of ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "C"
        }), ": value = 130 + 20 = 150"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 150. Items: A (full), B (full), C (half)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nstruct Item { double weight, value; };\n\ndouble fractionalKnapsack(std::vector<Item>& items, int W) {\n    std::sort(items.begin(), items.end(),\n        [](const Item& a, const Item& b) {\n            return (a.value / a.weight) > (b.value / b.weight);\n        });\n\n    double totalValue = 0.0;\n    for (const auto& item : items) {\n        if (W >= item.weight) {\n            totalValue += item.value;\n            W -= item.weight;\n        } else {\n            totalValue += item.value * (W / item.weight);\n            break;\n        }\n    }\n    return totalValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fractional_knapsack(weights: list[int], values: list[int], W: int) -> float:\n    items = [(values[i] / weights[i], weights[i], values[i]) for i in range(len(weights))]\n    items.sort(reverse=True)\n\n    total_value = 0.0\n    for ratio, weight, value in items:\n        if W >= weight:\n            total_value += value\n            W -= weight\n        else:\n            total_value += value * (W / weight)\n            break\n    return total_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\nclass FractionalKnapsack {\n    public static double fractionalKnapsack(int[] weights, int[] values, int W) {\n        int n = weights.length;\n        double[][] items = new double[n][3];\n\n        for (int i = 0; i < n; i++) {\n            items[i][0] = (double) values[i] / weights[i];\n            items[i][1] = weights[i];\n            items[i][2] = values[i];\n        }\n\n        Arrays.sort(items, (a, b) -> Double.compare(b[0], a[0]));\n\n        double totalValue = 0;\n        for (double[] item : items) {\n            if (W >= item[1]) {\n                totalValue += item[2];\n                W -= item[1];\n            } else {\n                totalValue += item[2] * (W / item[1]);\n                break;\n            }\n        }\n        return totalValue;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting dominates; selection loop is ( O(n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) or ( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place sort uses ( O(1) ); storing ratios uses ( O(n) )."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why greedy is optimal:"
      }), " Taking a fraction of a higher-ratio item always yields more value per unit weight than any lower-ratio item. The exchange argument proves optimality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Polynomial time ( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Items must be divisible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple greedy, easy to prove correct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails for 0/1 (indivisible items)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity fits all items"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Takes everything fully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single item larger than capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Takes fraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero capacity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Fractional knapsack is the only knapsack variant solvable in polynomial time. When an interviewer asks \"why can't we use greedy for 0/1 knapsack?\", the answer is that indivisibility breaks the exchange argument."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Fractional knapsack uses greedy by value/weight ratio because items are divisible, achieving ( O(n \\log n) ) — the only polynomial knapsack variant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-bounded-knapsack",
      children: "8.3 Bounded Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A warehouse can store 100 pallets. You have TVs (2 pallets, $500 profit, 5 available), Phones (1 pallet, $200, 10 available), and Laptops (3 pallets, $800, 2 available). Each product has limited stock. How many of each do you store?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-2",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given ( n ) item types, each with weight ( w_i ), value ( v_i ), and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "count limit"
      }), " ( k_i ), maximize total value without exceeding capacity ( W ). Each type can be used up to ( k_i ) times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-binary-splitting",
      children: "Algorithm Steps (Binary Splitting)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For each item type with limit ( k_i ), decompose ( k_i ) into binary powers: ( 1, 2, 4, \\ldots, 2^p ), plus remainder."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create new items: weight = ( w_i \\times \\text{count} ), value = ( v_i \\times \\text{count} )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run standard 0/1 knapsack on the expanded item list."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( dp[W] )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why binary splitting works:"
      }), " Any number ( k ) can be represented as a sum of ( O(\\log k) ) powers of two plus remainder. This reduces ( k ) identical items to ( O(\\log k) ) groups without losing any combination."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BoundedKnapsack(n, W, w, v, k):\n    newW = [], newV = []\n    for i = 1 to n:\n        count = k[i]\n        p = 1\n        while count > 0:\n            take = min(p, count)\n            newW.append(w[i] * take)\n            newV.append(v[i] * take)\n            count -= take\n            p *= 2\n\n    dp = array of size W+1, initialized to 0\n    for i = 0 to len(newW)-1:\n        for c = W down to newW[i]:\n            dp[c] = max(dp[c], newV[i] + dp[c - newW[i]])\n    return dp[W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Items = [(2, 5, limit=3), (3, 8, limit=2)], ( W = 7 )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary splitting:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Item 1 (w=2, v=5, k=3): 3 = 1 + 2 → groups: (2,5), (4,10)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Item 2 (w=3, v=8, k=2): 2 = 1 + 1 → groups: (3,8), (3,8)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "New items: [(2,5), (4,10), (3,8), (3,8)]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "0/1 DP trace (1D array):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After (2,5): dp = [0,0,5,5,5,5,5,5]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After (4,10): dp = [0,0,5,5,10,10,15,15]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After (3,8): dp = [0,0,5,8,10,13,15,18]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After (3,8): dp = [0,0,5,8,10,13,16,18]"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " dp[7] = 18. Selection: 2 × item 1 (4 wt, $10) + 1 × item 2 (3 wt, $8) = 7 wt, $18."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nint boundedKnapsack(const std::vector<int>& w, const std::vector<int>& v,\n                    const std::vector<int>& k, int W) {\n    std::vector<int> nw, nv;\n    for (size_t i = 0; i < w.size(); ++i) {\n        int count = k[i], p = 1;\n        while (count > 0) {\n            int take = std::min(p, count);\n            nw.push_back(w[i] * take);\n            nv.push_back(v[i] * take);\n            count -= take;\n            p *= 2;\n        }\n    }\n\n    std::vector<int> dp(W + 1, 0);\n    for (size_t i = 0; i < nw.size(); ++i)\n        for (int c = W; c >= nw[i]; --c)\n            dp[c] = std::max(dp[c], nv[i] + dp[c - nw[i]]);\n    return dp[W];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bounded_knapsack(weights: list[int], values: list[int],\n                     limits: list[int], W: int) -> int:\n    new_weights, new_values = [], []\n    for i, limit in enumerate(limits):\n        count, p = limit, 1\n        while count > 0:\n            take = min(p, count)\n            new_weights.append(weights[i] * take)\n            new_values.append(values[i] * take)\n            count -= take\n            p *= 2\n\n    dp = [0] * (W + 1)\n    for i in range(len(new_weights)):\n        for c in range(W, new_weights[i] - 1, -1):\n            dp[c] = max(dp[c], new_values[i] + dp[c - new_weights[i]])\n    return dp[W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.ArrayList;\n\npublic class BoundedKnapsack {\n    public static int boundedKnapsack(int[] weights, int[] values,\n                                       int[] limits, int W) {\n        ArrayList<Integer> nw = new ArrayList<>();\n        ArrayList<Integer> nv = new ArrayList<>();\n\n        for (int i = 0; i < weights.length; i++) {\n            int count = limits[i], p = 1;\n            while (count > 0) {\n                int take = Math.min(p, count);\n                nw.add(weights[i] * take);\n                nv.add(values[i] * take);\n                count -= take;\n                p *= 2;\n            }\n        }\n\n        int[] dp = new int[W + 1];\n        for (int i = 0; i < nw.size(); i++)\n            for (int c = W; c >= nw.get(i); c--)\n                dp[c] = Math.max(dp[c], nv.get(i) + dp[c - nw.get(i)]);\n        return dp[W];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W \\cdot \\sum \\log k_i) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary splitting creates ( O(\\sum \\log k_i) ) items; 0/1 DP runs in ( O(\\text{expanded_items} \\times W) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W + \\sum \\log k_i) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP array plus expanded items list."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Handles limited-quantity items realistically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary splitting adds complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes both 0/1 (k=1) and unbounded (k=∞)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Without splitting, naive ( O(nWK) ) is too slow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "limit = 1 for all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to 0/1 knapsack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "limit = ∞ (very large)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to unbounded knapsack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Item type is ignored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Bounded knapsack with binary splitting is a common interview optimization. The key insight: any number of identical items can be encoded as ( O(\\log k) ) powers-of-two groups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Bounded knapsack generalizes 0/1 and unbounded by adding per-item limits, solvable efficiently via binary splitting into ( O(\\log k_i) ) groups per item type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-unbounded-knapsack",
      children: "8.4 Unbounded Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You run a smoothie shop with unlimited stock of bananas ($0.50 each, 1 min prep), protein powder ($2.00 scoop, 30 sec), and spinach ($0.75 bunch, 20 sec). With 5 minutes before lunch rush, how many of each do you use to maximize profit per smoothie? Unlimited stock means any quantity of each ingredient."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-3",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Same as 0/1 knapsack, but each item can be taken ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "any number of times"
      }), " (unlimited supply)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize 1D DP array of size ( W + 1 ) with zeros."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each capacity ( c ) from 1 to ( W ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each item ( i ) from 1 to ( n ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If ( w_i \\le c ): ( dp[c] = \\max(dp[c], ; v_i + dp[c - w_i]) )"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( dp[W] )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recurrence-1",
      children: "Recurrence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\ndp[c] = \\max_{i: w_i \\le c} (v_i + dp[c - w_i])\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key difference:"
      }), " The capacity loop goes ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "forward"
      }), ". This lets ( dp[c - w_i] ) already include the current item, enabling unlimited reuse."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "UnboundedKnapsack(n, W, w, v):\n    dp = array of size W+1, initialized to 0\n    for c = 1 to W:\n        for i = 1 to n:\n            if w[i] <= c:\n                dp[c] = max(dp[c], v[i] + dp[c - w[i]])\n    return dp[W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Items = [(2, 3), (3, 5)], ( W = 7 )"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "dp[c] computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "Initialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "No item fits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[0]=3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[1]=3, 5+dp[0]=5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[2]=6, 5+dp[1]=5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[3]=8, 5+dp[2]=8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[4]=9, 5+dp[3]=10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "max(0, 3+dp[5]=11, 5+dp[4]=11)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "11"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 11. Selection: (3,5) + (2,3) + (2,3) = 7 weight."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-3",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nint unboundedKnapsack(const std::vector<int>& w,\n                      const std::vector<int>& v, int W) {\n    int n = static_cast<int>(w.size());\n    std::vector<int> dp(W + 1, 0);\n\n    for (int c = 1; c <= W; ++c) {\n        for (int i = 0; i < n; ++i) {\n            if (w[i] <= c) {\n                dp[c] = std::max(dp[c], v[i] + dp[c - w[i]]);\n            }\n        }\n    }\n    return dp[W];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-3",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def unbounded_knapsack(weights: list[int], values: list[int], W: int) -> int:\n    dp = [0] * (W + 1)\n\n    for c in range(1, W + 1):\n        for i in range(len(weights)):\n            if weights[i] <= c:\n                dp[c] = max(dp[c], values[i] + dp[c - weights[i]])\n    return dp[W]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-3",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UnboundedKnapsack {\n    public static int unboundedKnapsack(int[] weights, int[] values, int W) {\n        int n = weights.length;\n        int[] dp = new int[W + 1];\n\n        for (int c = 1; c <= W; c++) {\n            for (int i = 0; i < n; i++) {\n                if (weights[i] <= c) {\n                    dp[c] = Math.max(dp[c], values[i] + dp[c - weights[i]]);\n                }\n            }\n        }\n        return dp[W];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each capacity, try each item. Same total work as 0/1."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one 1D array. Can't drop below ( O(W) )."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Forward loop directly captures unbounded reuse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) ) is still pseudo-polynomial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1D array is already space-optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reconstruct selected items"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "W = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All items heavier than W"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single item"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns ( v \\times \\lfloor W / w \\rfloor )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The forward/backward loop direction is the universal tell for 0/1 vs unbounded. Backward = 0/1 (each item once). Forward = unbounded (item can be reused). This applies to ALL knapsack variants."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Unbounded knapsack has the same ( O(nW) ) complexity as 0/1, but can feel slower in practice because the forward loop may process more states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Unbounded knapsack allows unlimited reuse of each item simply by changing the capacity loop from backward to forward."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-subset-sum",
      children: "8.5 Subset Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A cashier needs to give exactly $17 in change using $2, $3, $5, and $7 bills (each at most once). Is it possible?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-4",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given a set of integers ( A ) and a target sum ( S ), determine whether there exists a subset summing to exactly ( S ). This is a boolean 0/1 knapsack where \"value\" = \"weight.\""
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize boolean DP array of size ( S + 1 ), set ( dp[0] = ) true."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each element ( x ) in ( A ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For sum ( s ) from ( S ) down to ( x ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "( dp[s] = dp[s] ;\\text{OR}; dp[s - x] )"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( dp[S] )."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recurrence-2",
      children: "Recurrence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\ndp[i][s] = dp[i-1][s] ;\\lor; dp[i-1][s - A[i]]\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SubsetSum(A, n, S):\n    dp = boolean array of size S+1, dp[0] = true\n    for i = 1 to n:\n        for s = S down to A[i]:\n            dp[s] = dp[s] || dp[s - A[i]]\n    return dp[S]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ( A = [2, 3, 4, 7], S = 9 )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize: dp = [T, F, F, F, F, F, F, F, F, F]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Loop ( s )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Updated dp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[T, F, F, F, F, F, F, F, F, F]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9→2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["[T, F, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", F, F, F, F, F, F, F]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9→3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["[T, F, T, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", F, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", F, F, F, F]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9→4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["[T, F, T, T, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", T, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", F, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", F]"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "9→7"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: ["[T, F, T, T, T, T, T, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), ", T, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "T"
            }), "]"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " dp[9] = true. Subset: {2, 3, 4} = 9, or {2, 7} = 9."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-4",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n\nbool subsetSum(const std::vector<int>& A, int S) {\n    std::vector<bool> dp(S + 1, false);\n    dp[0] = true;\n\n    for (int x : A) {\n        for (int s = S; s >= x; --s) {\n            if (dp[s - x]) dp[s] = true;\n        }\n    }\n    return dp[S];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-4",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def subset_sum(arr: list[int], target: int) -> bool:\n    dp = [False] * (target + 1)\n    dp[0] = True\n\n    for x in arr:\n        for s in range(target, x - 1, -1):\n            if dp[s - x]:\n                dp[s] = True\n    return dp[target]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-4",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SubsetSum {\n    public static boolean subsetSum(int[] arr, int S) {\n        boolean[] dp = new boolean[S + 1];\n        dp[0] = true;\n\n        for (int x : arr)\n            for (int s = S; s >= x; s--)\n                if (dp[s - x]) dp[s] = true;\n        return dp[S];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nS) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n ) elements × ( S ) capacity. Each cell is ( O(1) ) boolean OR."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(S) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean array. Bitset reduces 8×: `dp"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Simple boolean DP, easy to understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nS) ) is impractical for large ( S )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitset optimization reduces space/time 8×"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot reconstruct subset with 1D bitset"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always true (empty subset)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All elements > S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "S = sum of all"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "True"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Subset sum uses backward loop (0/1 style). The boolean DP tracks reachable sums, not values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " When ( S ) is large (( 10^6 )), ( O(nS) ) is impractical. For small ( n ) but large ( S ), use meet-in-the-middle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Subset sum is a boolean 0/1 knapsack variant answering reachability using ( O(nS) ) time and ( O(S) ) space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-equal-partition-subset-sum",
      children: "8.6 Equal Partition Subset Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Two siblings inherit valuables — can they split so each gets exactly half the total value?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-5",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given an integer array, determine if it can be partitioned into two subsets with equal sum."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute total sum. If odd → return false."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target = total / 2."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run subset sum DP."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reduction",
      children: "Reduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n\\text{EqualPartition}(A) \\equiv \\text{SubsetSum}(A, \\text{total} / 2)\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-4",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ( A = [1, 5, 11, 5] )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total = 22, even. Target = 11."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run subset sum DP for target 11:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Reachable sums"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0, 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0, 1, 5, 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0, 1, 5, 6, 11, 12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "0, 1, 5, 6, 10, 11, 12, 16, 17"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " dp[11] = true. Partition: {1, 5, 5} and {11}."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-5",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <numeric>\n\nbool canPartition(const std::vector<int>& nums) {\n    int total = std::accumulate(nums.begin(), nums.end(), 0);\n    if (total % 2 != 0) return false;\n    return subsetSum(nums, total / 2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-5",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def can_partition(nums: list[int]) -> bool:\n    total = sum(nums)\n    if total % 2 != 0:\n        return False\n    return subset_sum(nums, total // 2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-5",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class EqualPartition {\n    public static boolean canPartition(int[] nums) {\n        int total = 0;\n        for (int x : nums) total += x;\n        if (total % 2 != 0) return false;\n        return subsetSum(nums, total / 2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nT) ) where ( T = \\text{total} / 2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as subset sum."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(T) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean array."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why odd-total early exit:"
      }), " Integer partition requires two equal integer halves. An odd total is impossible to split equally. This ( O(1) ) filter avoids massive DP."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-5",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Trivial reduction to subset sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudo-polynomial (grows with sum)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Odd-total filter catches ~50% of random inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle negative numbers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Odd total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns false immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total = 0, target = 0 → true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All zeros"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total = 0 → true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Equal partition is an immediate \"if odd total → false\" filter. No need to run DP if the total is odd."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Equal partition reduces to subset sum with target = total/2; the odd-total early exit rejects impossible cases instantly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "87-coin-change-minimum-coins",
      children: "8.7 Coin Change (Minimum Coins)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A vending machine needs to return $0.87 using quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). What is the minimum number of coins?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-6",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given coin denominations ( C ) and amount ( A ), find the minimum coins needed. Each coin is unlimited. Return -1 if impossible."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-5",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Initialize DP array of size ( A + 1 ) with INF."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set ( dp[0] = 0 )."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each amount ( c ) from 1 to ( A ):\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For each coin:\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "If ( coin \\le c ): ( dp[c] = \\min(dp[c], ; 1 + dp[c - coin]) )"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return ( dp[A] ) if not INF, else -1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recurrence-3",
      children: "Recurrence"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\ndp[c] = \\min_{i: coin_i \\le c} (1 + dp[c - coin_i])\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why unbounded:"
      }), " Forward loop ensures unlimited coin reuse. Min instead of max because we minimize count."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "CoinChange(coins, n, amount):\n    dp = array of size amount+1, initialized to INF\n    dp[0] = 0\n    for c = 1 to amount:\n        for i = 1 to n:\n            if coins[i] <= c:\n                dp[c] = min(dp[c], 1 + dp[c - coins[i]])\n    return dp[amount] if dp[amount] != INF else -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-5",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Coins = [1, 3, 4], Amount = 6"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize: dp = [0, INF, INF, INF, INF, INF, INF]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Amount"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "Consider coins"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "dp[c]"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[0]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[1]=2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[2]=3, 3: 1+dp[0]=1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), " (coin 3)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[3]=2, 3: 1+dp[1]=2, 4: 1+dp[0]=1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            }), " (coin 4)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[4]=2, 3: 1+dp[2]=3, 4: 1+dp[1]=2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), " (1+4)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "1: 1+dp[5]=3, 3: 1+dp[3]=2, 4: 1+dp[2]=3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "2"
            }), " (3+3)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " dp[6] = 2. Solution: 3¢ + 3¢."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-6",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <climits>\n\nint coinChange(const std::vector<int>& coins, int amount) {\n    std::vector<int> dp(amount + 1, INT_MAX);\n    dp[0] = 0;\n\n    for (int c = 1; c <= amount; ++c) {\n        for (int coin : coins) {\n            if (coin <= c && dp[c - coin] != INT_MAX) {\n                dp[c] = std::min(dp[c], 1 + dp[c - coin]);\n            }\n        }\n    }\n    return dp[amount] == INT_MAX ? -1 : dp[amount];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-6",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def coin_change(coins: list[int], amount: int) -> int:\n    INF = float('inf')\n    dp = [INF] * (amount + 1)\n    dp[0] = 0\n\n    for c in range(1, amount + 1):\n        for coin in coins:\n            if coin <= c:\n                dp[c] = min(dp[c], 1 + dp[c - coin])\n\n    return -1 if dp[amount] == INF else dp[amount]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-6",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Arrays;\n\npublic class CoinChange {\n    public static int coinChange(int[] coins, int amount) {\n        int[] dp = new int[amount + 1];\n        Arrays.fill(dp, Integer.MAX_VALUE);\n        dp[0] = 0;\n\n        for (int c = 1; c <= amount; c++)\n            for (int coin : coins)\n                if (coin <= c && dp[c - coin] != Integer.MAX_VALUE)\n                    dp[c] = Math.min(dp[c], 1 + dp[c - coin]);\n\n        return dp[amount] == Integer.MAX_VALUE ? -1 : dp[amount];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nA) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n ) coins × ( A ) amount. Each cell checks all coins."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(A) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer array of size ( A + 1 )."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-6",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Handles arbitrary denominations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INF sentinel must be handled carefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forward loop models unlimited coins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nA) ) slow for large amounts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "amount = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No coins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No combination possible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Coin change (min coins) uses forward loop (unbounded). For \"number of ways,\" replace min with sum and set ( dp[0] = 1 )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Use a large sentinel (( > ) amount) for INF and always check ( dp[c - coin] \\neq \\text{INF} ) before comparing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Coin change finds minimum coins using forward-loop unbounded DP with INF sentinel for impossible amounts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "88-target-sum",
      children: "8.8 Target Sum"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " In a voting system, each voter supports (+1) or opposes (-1) a proposition. Given the vote counts, can the final margin be exactly ( S )? How many voting patterns achieve this margin?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "problem-definition-7",
      children: "Problem Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given an array of integers and a target ( S ), assign ( + ) or ( - ) signs to each element to achieve the target. Count the number of valid assignments."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "reduction-to-subset-sum",
      children: "Reduction to Subset Sum"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let ( P ) be elements with ( + ) sign, ( N ) with ( - ) sign:\n[\n\\text{sum}(P) - \\text{sum}(N) = S,\\quad \\text{sum}(P) + \\text{sum}(N) = \\text{total}\n]\n[\n\\therefore; 2 \\cdot \\text{sum}(P) = \\text{total} + S,\\quad \\text{sum}(P) = \\frac{\\text{total} + S}{2}\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Count subsets summing to ( (\\text{total} + S) / 2 ). If odd or ( |S| > ) total, return 0."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-6",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute total. If ( (\\text{total} + S) ) odd → return 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Target = ( (\\text{total} + S) / 2 ). If target < 0 → return 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Run counting subset sum: ( dp[s] = dp[s] + dp[s - x] ), backward loop."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-6",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ( A = [1, 1, 1, 1, 1], S = 3 )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total = 5, (5+3) = 8, even. Target = 4."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Initialize: dp = [1, 0, 0, 0, 0]"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "center"
            },
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            style: {
              textAlign: "left"
            },
            children: "dp"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 0, 0, 0, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 1, 0, 0, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 2, 1, 0, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 3, 3, 1, 0]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 4, 6, 4, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "center"
            },
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            style: {
              textAlign: "left"
            },
            children: "[1, 5, 10, 10, 5]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " dp[4] = 5. There are 5 ways (choose 4 out of 5 elements to be positive)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-7",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <numeric>\n#include <cstdlib>\n\nint findTargetSumWays(const std::vector<int>& nums, int S) {\n    int total = std::accumulate(nums.begin(), nums.end(), 0);\n    if ((total + S) % 2 != 0 || std::abs(S) > total) return 0;\n\n    int target = (total + S) / 2;\n    if (target < 0) return 0;\n\n    std::vector<int> dp(target + 1, 0);\n    dp[0] = 1;\n\n    for (int x : nums)\n        for (int s = target; s >= x; --s)\n            dp[s] += dp[s - x];\n\n    return dp[target];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-7",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def find_target_sum_ways(nums: list[int], target: int) -> int:\n    total = sum(nums)\n    if (total + target) % 2 != 0 or abs(target) > total:\n        return 0\n\n    s = (total + target) // 2\n    if s < 0:\n        return 0\n\n    dp = [0] * (s + 1)\n    dp[0] = 1\n\n    for x in nums:\n        for c in range(s, x - 1, -1):\n            dp[c] += dp[c - x]\n\n    return dp[s]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-7",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class TargetSum {\n    public static int findTargetSumWays(int[] nums, int S) {\n        int total = 0;\n        for (int x : nums) total += x;\n\n        if ((total + S) % 2 != 0 || Math.abs(S) > total) return 0;\n\n        int target = (total + S) / 2;\n        if (target < 0) return 0;\n\n        int[] dp = new int[target + 1];\n        dp[0] = 1;\n\n        for (int x : nums)\n            for (int s = target; s >= x; s--)\n                dp[s] += dp[s - x];\n\n        return dp[target];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nT) ) where ( T = (\\text{total} + S) / 2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting subset sum."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(T) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer array."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why counting uses + instead of OR:"
      }), " We count ways, not just feasibility. Each new way to reach sum ( s ) via element ( x ) adds the ways to reach ( s - x )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-7",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Clever reduction transforms sign assignment to subset sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires math insight"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Same efficient DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pseudo-polynomial"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(total + S) odd"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "("
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty array, S = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return 1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Target sum is a clever reduction. Assign + elements to set P and - to set N, solve ( 2 \\cdot \\text{sum}(P) = \\text{total} + S )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Target sum is a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "counting"
        }), " problem. Use sum DP (( dp[c] \\mathrel{+}= dp[c - v] )) instead of boolean or max."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Target sum reduces to counting subsets with sum ( (\\text{total} + S) / 2 ), transforming sign-assignment into a knapsack counting variant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "knapsack-family-comparison",
      children: "Knapsack Family Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Item Reuse"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Property"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fractional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy (sort by ratio)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only polynomial variant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "0/1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP, backward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic item selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bounded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to ( k_i ) times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary splitting → 0/1 DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W \\sum \\log k_i) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes 0/1 & unbounded"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unbounded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP, forward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited item reuse"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Which variant to use when:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Variant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Items are divisible (sand, grain)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy works, polynomial time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Items are unique, once each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The default choice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Items have limited stock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary splitting for efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Items have infinite supply"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward loop captures reuse"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Can we make exact sum X?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean DP, 0/1 constraints"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Split equally?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal Partition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subset sum with target = total/2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"Minimum units to make amount?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded min-count DP"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"How many sign assignments?\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to counting subset sum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Classic interview problems that reduce to knapsack:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-1-partition-equal-subset-sum-leetcode-416",
      children: "Problem 1: Partition Equal Subset Sum (LeetCode 416)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["Given an array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "nums"
        }), ", return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), " if it can be split into two subsets with equal sum."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "bool canPartition(std::vector<int>& nums) {\n    int total = std::accumulate(nums.begin(), nums.end(), 0);\n    if (total % 2 != 0) return false;\n    return subsetSum(nums, total / 2);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " ( O(n \\cdot \\text{total}/2) ), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(\\text{total}/2) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-2-target-sum-leetcode-494",
      children: "Problem 2: Target Sum (LeetCode 494)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Count ways to assign + or - signs to make sum equal to target."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int findTargetSumWays(std::vector<int>& nums, int S) {\n    int total = std::accumulate(nums.begin(), nums.end(), 0);\n    if ((total + S) % 2 != 0 || std::abs(S) > total) return 0;\n    int target = (total + S) / 2;\n    std::vector<int> dp(target + 1, 0);\n    dp[0] = 1;\n    for (int x : nums)\n        for (int s = target; s >= x; --s)\n            dp[s] += dp[s - x];\n    return dp[target];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-3-coin-change-2--number-of-ways-leetcode-518",
      children: "Problem 3: Coin Change 2 — Number of Ways (LeetCode 518)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Count ways to make amount with unlimited coins."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int change(int amount, std::vector<int>& coins) {\n    std::vector<int> dp(amount + 1, 0);\n    dp[0] = 1;\n    for (int coin : coins)\n        for (int c = coin; c <= amount; ++c)\n            dp[c] += dp[c - coin];\n    return dp[amount];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Forward loop"
      }), " = unbounded. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outer coins, inner amount"
      }), " = combinations (not permutations)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "problem-4-ones-and-zeroes-leetcode-474",
      children: "Problem 4: Ones and Zeroes (LeetCode 474)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "Given binary strings and limits ( m ) (0s) and ( n ) (1s), find largest subset."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int findMaxForm(std::vector<std::string>& strs, int m, int n) {\n    std::vector<std::vector<int>> dp(m + 1, std::vector<int>(n + 1, 0));\n    for (const auto& s : strs) {\n        int zeros = std::count(s.begin(), s.end(), '0');\n        int ones = s.size() - zeros;\n        for (int z = m; z >= zeros; --z)\n            for (int o = n; o >= ones; --o)\n                dp[z][o] = std::max(dp[z][o], 1 + dp[z - zeros][o - ones]);\n    }\n    return dp[m][n];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Time:"
      }), " ( O(l \\cdot m \\cdot n) ), ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(m \\cdot n) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resource-allocation--cloud-computing",
      children: "Resource Allocation & Cloud Computing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Cloud providers (AWS, Azure, GCP) use knapsack algorithms for ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "VM instance placement"
      }), ". Given server capacity and VM requests with different resource profiles, the scheduler decides placement — a multi-dimensional 0/1 knapsack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Server:  64 CPUs, 256 GB RAM, 10 TB SSD\nVMs:     t2.micro (1 CPU, 1 GB) = $0.0116/hr\n         t2.small (1 CPU, 2 GB) = $0.023/hr\n         t2.medium (2 CPU, 4 GB) = $0.0464/hr\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cryptography",
      children: "Cryptography"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merkle-Hellman knapsack cryptosystem"
      }), " (1978) was based on subset sum (NP-complete). The private key uses a superincreasing sequence (easy), and the public key disguises it via modular multiplication. Though broken by Shamir in 1984, it was the first public-key cryptosystem after RSA."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cutting-stock-problem",
      children: "Cutting Stock Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Paper mills, steel plants, and textile manufacturers face the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cutting stock problem"
      }), ": cut raw rolls of fixed width into smaller rolls to minimize waste. This is a bounded/unbounded knapsack depending on available raw material."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Raw roll: 100 inches\nOrders:   25 in (100 rolls), 30 in (75 rolls), 15 in (200 rolls)\nGoal:     Minimize raw rolls used (minimize waste)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "portfolio-optimization",
      children: "Portfolio Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Financial portfolio selection restricts total investment capital (capacity). Each asset has a cost (weight) and expected return (value). Fractional shares → fractional knapsack. Whole shares only → 0/1 knapsack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "logistics--supply-chain",
      children: "Logistics & Supply Chain"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shipping companies (FedEx, UPS, Maersk) load containers, trucks, and cargo planes by solving knapsack-constrained optimization: maximize shipment value given weight and volume limits."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dynamic-programming-framework",
      children: "Dynamic Programming Framework"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Subset Sum (boolean)\n    ↓\n0/1 Knapsack (max value) ← Backward loop ← Counter ← Target Sum (counting)\n    ↓               ↓\n    Bounded (binary split → 0/1)\n    ↓\n    Unbounded (forward loop)\n        ↓\n    Coin Change (min)\n        ↓\n    Coin Change 2 (ways)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When facing a new problem, ask: (1) Can items be reused? → Forward or backward. (2) Maximize, minimize, count, or check? → max, min, sum, or boolean. (3) Item limits? → 0/1, bounded (with split), or unbounded."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "State Definition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Uses Each Item"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[c] = ) max value at capacity ( c )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(skip, ( v_i + dp[c - w_i] ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy by ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Take by decreasing ( v_i / w_i )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Max value with item limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward + binary split"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(skip, ( v_i \\times t + dp[c - w_i \\times t] ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Up to ( k_i )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[c] = ) max value at capacity ( c )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(skip, ( v_i + dp[c - w_i] ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[s] = ) is sum ( s ) reachable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[s] ;\\text{OR}; dp[s - v_i] )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[c] = ) min coins for amount ( c )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "min(1 + ( dp[c - \\text{coin}] ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unlimited"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[s] = ) ways to reach sum ( s )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( dp[s] + dp[s - v_i] )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At most once"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "0/1 Knapsack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward loop, each item once, max value over capacity constraint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fractional Knapsack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy by value/weight ratio, only polynomial variant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bounded Knapsack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary splitting reduces ( k ) copies to ( \\log k ) groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unbounded"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward loop = item reuse, same core recurrence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Subset Sum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean DP, backward loop, checks reachability not value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Coin Change"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward loop, min instead of max, INF sentinel for unreachable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Target Sum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Math reduce to subset sum counting, odd-total filter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1D always possible, but reconstruction requires 2D table"
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
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DSA Interviews"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Competitive Programming"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System Design"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common — resource allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Budget allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cargo loading, portfolio selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — greedy comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting-based warm-up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisible resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Warehouse stocking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less common"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Coin change variants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inventory management"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — reduction problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Meet-in-the-middle for large ( S )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Capacity planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Payment systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common — warm-up to hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core CP DP problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Denomination systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vending machines, ATMs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target Sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally asked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting DP problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sign assignment, opinion polling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\max(\\text{skip}, \\text{take}) ), backward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional knapsack (greedy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort by ( v_i / w_i )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary split → 0/1 DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W \\sum \\log k_i) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unbounded knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\max(\\text{skip}, \\text{take}) ), forward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nW) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(W) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Subset sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\lor(\\text{skip}, \\text{take}) ), backward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nS) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(S) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin change (min)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\min(1 + dp[c - w_i]) ), forward loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nA) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(A) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Target sum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduce to subset sum (counting)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(nS) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(S) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Why does 0/1 knapsack use a backward loop in the 1D space-optimized version?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) To improve cache locality"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) To prevent using an item more than once (reads from previous row)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) To process items in decreasing value order"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) To avoid integer overflow"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Backward iteration reads \\( dp[c - w[i]] \\) from the previous row (without the current item), ensuring each item is used at most once.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the first check in equal partition subset sum?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Is the array sorted?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Is the total sum odd?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Is the largest element greater than half the total?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Is there at least one element?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) If total sum is odd, equal partition is impossible — return false immediately without running DP.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which recurrence correctly defines coin change (minimum coins)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ( dp[c] = \\min(dp[c], dp[c-1] + 1) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ( dp[c] = \\min(dp[c], 1 + dp[c - \\text{coin}]) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ( dp[c] = \\max(dp[c], 1 + dp[c - \\text{coin}]) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ( dp[c] = dp[c] + dp[c - \\text{coin}] )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) \\( dp[c] = \\min(dp[c], 1 + dp[c - \\text{coin}]) \\) — add one coin to the optimal solution for the remaining amount.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is the time complexity of fractional knapsack?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ( O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ( O(n \\log n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ( O(nW) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ( O(2^n) )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) \\( O(n \\log n) \\) — sorting dominates; selection loop is \\( O(n) \\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does binary splitting achieve in bounded knapsack?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Divides items into equal halves"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Reduces ( k_i ) copies to ( O(\\log k_i) ) groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Splits capacity into binary powers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Converts bounded to unbounded"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Binary splitting decomposes any count \\( k \\) into \\( \\lfloor \\log_2 k \\rfloor + 1 \\) powers-of-two groups, enabling 0/1 DP to simulate any quantity from 1 to \\( k \\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises-1",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does 0/1 knapsack DP iterate capacity backward while unbounded knapsack iterates forward?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can the space-optimized 1D approach reconstruct which items are selected? How?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reduce target sum to subset sum. Show the derivation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why binary splitting works for bounded knapsack. Prove any integer ( k ) can be formed using ( {1, 2, 4, \\ldots, 2^p, r} )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why can fractional knapsack use greedy while 0/1 cannot?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement 0/1 knapsack with reconstruction of the selected items."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the unbounded knapsack: denominations [2, 3, 5] with values [3, 4, 6], capacity 10."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given coins [1, 3, 4] and amount 6, use coin change DP to find minimum coins."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine if [1, 5, 11, 5] can be partitioned equally. Show the DP table."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement bounded knapsack: items (2, 5, limit=3), (3, 8, limit=2), W=7. Show binary splitting steps."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Generalize 0/1 knapsack to ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "multiple knapsacks"
        }), ": given ( k ) knapsacks with capacities ( W_1, \\ldots, W_k ), maximize total value. Design a DP algorithm and analyze its complexity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Solve the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "subset sum counting"
        }), " problem: given an array, count subsets that sum to exactly ( S ). How does the DP differ from boolean subset sum?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a DP for ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "3-partition"
        }), ": can an array be partitioned into three subsets with equal sum?"]
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