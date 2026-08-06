"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[55763],{

/***/ 36655
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_06_greedy_md_ba9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-06-greedy-md-ba9.json
const site_docs_courses_algorithms_06_greedy_md_ba9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/06-greedy","title":"Chapter 6: Greedy Algorithms","description":"Prerequisites Divide and Conquer — Recursive problem decomposition | Next Dynamic Programming — Foundations — When greedy fails, DP takes over","source":"@site/docs/courses/algorithms/06-greedy.md","sourceDirName":"courses/algorithms","slug":"/algorithms/06-greedy","permalink":"/ai-engineering-journey/algorithms/06-greedy","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-greedy","slug":"/algorithms/06-greedy","title":"Chapter 6: Greedy Algorithms","sidebar_label":"Chapter 6: Greedy Algorithms","sidebar_position":6},"sidebar":"coursesSidebar","previous":{"title":"Chapter 5: Divide and Conquer","permalink":"/ai-engineering-journey/algorithms/05-divide-conquer"},"next":{"title":"Chapter 7: Dynamic Programming — Foundations","permalink":"/ai-engineering-journey/algorithms/07-dp-intro"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/06-greedy.md


const frontMatter = {
	id: '06-greedy',
	slug: '/algorithms/06-greedy',
	title: 'Chapter 6: Greedy Algorithms',
	sidebar_label: 'Chapter 6: Greedy Algorithms',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Greedy Algorithms';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Greedy Algorithms Matter",
  "id": "why-greedy-algorithms-matter",
  "level": 3
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
  "value": "6.1 The Greedy Paradigm",
  "id": "61-the-greedy-paradigm",
  "level": 3
}, {
  "value": "6.2 Activity Selection",
  "id": "62-activity-selection",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Dry Run with Trace Table",
  "id": "dry-run-with-trace-table",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
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
  "value": "6.3 Huffman Coding",
  "id": "63-huffman-coding",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Dry Run with Trace Table",
  "id": "dry-run-with-trace-table-1",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-1",
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
  "value": "6.4 Fractional Knapsack",
  "id": "64-fractional-knapsack",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 4
}, {
  "value": "Dry Run with Trace Table",
  "id": "dry-run-with-trace-table-2",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-2",
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
  "value": "6.5 Job Sequencing with Deadlines",
  "id": "65-job-sequencing-with-deadlines",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 4
}, {
  "value": "Dry Run with Trace Table",
  "id": "dry-run-with-trace-table-3",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-3",
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
  "value": "6.6 Canonical Coin Change",
  "id": "66-canonical-coin-change",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 4
}, {
  "value": "Dry Run with Trace Table",
  "id": "dry-run-with-trace-table-4",
  "level": 4
}, {
  "value": "Implementations",
  "id": "implementations-4",
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
  "value": "6.7 Greedy vs. Dynamic Programming",
  "id": "67-greedy-vs-dynamic-programming",
  "level": 3
}, {
  "value": "6.8 Exchange Argument — The Proof Technique",
  "id": "68-exchange-argument--the-proof-technique",
  "level": 3
}, {
  "value": "Framework",
  "id": "framework",
  "level": 4
}, {
  "value": "Standard Template",
  "id": "standard-template",
  "level": 4
}, {
  "value": "Example: Activity Selection",
  "id": "example-activity-selection",
  "level": 4
}, {
  "value": "Common Pitfall",
  "id": "common-pitfall",
  "level": 4
}, {
  "value": "6.9 Interview Corner",
  "id": "69-interview-corner",
  "level": 3
}, {
  "value": "When Greedy Fails — Classic Counterexamples",
  "id": "when-greedy-fails--classic-counterexamples",
  "level": 4
}, {
  "value": "How to Approach a Greedy Problem in an Interview",
  "id": "how-to-approach-a-greedy-problem-in-an-interview",
  "level": 4
}, {
  "value": "Proof of Optimality Checklist",
  "id": "proof-of-optimality-checklist",
  "level": 4
}, {
  "value": "6.10 Applications in Real Systems",
  "id": "610-applications-in-real-systems",
  "level": 3
}, {
  "value": "Huffman Coding in Compression",
  "id": "huffman-coding-in-compression",
  "level": 4
}, {
  "value": "Scheduling in Operating Systems",
  "id": "scheduling-in-operating-systems",
  "level": 4
}, {
  "value": "Network Routing",
  "id": "network-routing",
  "level": 4
}, {
  "value": "Resource Allocation",
  "id": "resource-allocation",
  "level": 4
}, {
  "value": "DNA Sequence Assembly",
  "id": "dna-sequence-assembly",
  "level": 4
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
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
        id: "chapter-6-greedy-algorithms",
        children: "Chapter 6: Greedy Algorithms"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/05-divide-conquer",
          children: "Chapter 5: Divide and Conquer"
        }), " — Recursive problem decomposition | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/07-dp-intro",
          children: "Chapter 7: Dynamic Programming — Foundations"
        }), " — When greedy fails, DP takes over"]
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
        href: "../../assets/images/lessons/algorithms/06-greedy/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/06-greedy/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/06-greedy/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/06-greedy/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/06-greedy/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/06-greedy/visual-explanation.png",
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
        children: "Understand the greedy paradigm and the conditions under which it produces optimal solutions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement activity selection, Huffman coding, fractional knapsack, job sequencing, and canonical coin change."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the optimality of greedy algorithms using the exchange argument."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between problems solvable by greedy algorithms and those requiring dynamic programming."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-greedy-algorithms-matter",
      children: "Why Greedy Algorithms Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you are packing a suitcase for a trip. You have limited space, and you want to carry the most valuable combination of items. One natural approach: grab the item with the best value-per-space ratio first, then the next best, and so on. This is exactly how greedy algorithms think — they make the best immediate choice without worrying about future consequences."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Now imagine making change for a customer at a cash register. You want to use the fewest coins possible. In the US (quarters, dimes, nickels, pennies), the natural strategy is to take the largest coin that fits, again and again. This greedy approach works perfectly for that system."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But what if your coin system was 1, 3, and 4 cents? To make 6 cents, the greedy approach picks 4 + 1 + 1 (three coins), while the optimal is 3 + 3 (two coins). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy fails when local optimization does not align with global optimization."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This tension — between the seductive simplicity of \"take what looks best now\" and the mathematical rigor required to prove it actually works — is what makes greedy algorithms both powerful and dangerous. They are the first tool you reach for, but they demand proof before you trust them."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Greedy algorithms power file compression (Huffman coding in ZIP, JPEG), network routing (Dijkstra, OSPF), operating system scheduling (Shortest Job First), and even DNA sequence assembly. Understanding when they work — and when they do not — separates a competent programmer from a master algorithm designer."
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
            children: "Greedy Paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local optimal choices lead to global optimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires optimal substructure + greedy-choice property"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activity Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pick earliest-finish activity first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic exchange argument proof of optimality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huffman Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge lowest-frequency characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal prefix code for data compression"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Take highest value/weight ratio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy works because you can take fractions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Job Sequencing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schedule by profit, use latest slot"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) with union-find optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canonical Coin Change"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Take largest denomination first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails for non-canonical systems like 1,3,4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Greedy Paradigm] --> B[Activity Selection]\n    A --> C[Huffman Coding]\n    A --> D[Fractional Knapsack]\n    A --> E[Job Sequencing]\n    A --> F[Canonical Coin Change]\n    B --> G[Earliest finish time]\n    C --> H[Frequency merging]\n    D --> I[Value/weight ratio]\n    E --> J[Profit sorting + slot]\n    F --> K[Largest denomination]\n    G --> L[Exchange argument proof]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch06-greedy.png",
        alt: "Greedy Algorithms Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-the-greedy-paradigm",
      children: "6.1 The Greedy Paradigm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A greedy algorithm makes the locally optimal choice at each step, hoping that local optima lead to a global optimum. For many problems this approach fails, but for problems that exhibit ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optimal substructure"
      }), " and the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "greedy-choice property"
      }), ", it yields optimal solutions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy-choice property:"
      }), " A globally optimal solution can be reached by making a locally optimal (greedy) choice."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimal substructure:"
      }), " An optimal solution to the problem contains optimal solutions to subproblems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exchange argument (proof technique):"
      }), " Show that any optimal solution can be transformed into the greedy solution without worsening the objective."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Before using a greedy algorithm, always verify the two properties: optimal substructure and greedy-choice property. If you can find a counterexample where a local choice leads to a suboptimal global solution, you need DP instead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Greedy algorithms work when making the best local choice at each step leads to a globally optimal solution, requiring both optimal substructure and the greedy-choice property."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-activity-selection",
      children: "6.2 Activity Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A conference room can host only one meeting at a time. You have a list of meeting requests with start and end times. How do you schedule the maximum number of meetings? The greedy strategy: always pick the meeting that ends the earliest, because it leaves the most room for subsequent meetings."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given ( n ) activities with start times ( s_i ) and finish times ( f_i ) (where ( s_i < f_i )), select the maximum number of non-overlapping activities."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy strategy:"
      }), " Always select the activity with the earliest finish time that does not conflict with previously selected activities."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort all activities by finish time in ascending order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select the first activity (earliest finish)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lastFinish = f[0]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each remaining activity in sorted order:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If its start time ( s_i \\ge ) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lastFinish"
            }), ", select it and update ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lastFinish = f_i"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the selected set."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "ActivitySelection(s, f, n):\n    Sort activities by finish time\n    selected = [0]\n    lastFinish = f[0]\n    for i = 1 to n-1:\n        if s[i] >= lastFinish:\n            selected.push(i)\n            lastFinish = f[i]\n    return selected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Activities indexed 0..6 with (start, finish): (0,6), (1,4), (3,5), (3,8), (5,7), (8,9), (6,10)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1 — Sort by finish time:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Start"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Finish"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Iterate:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Act (s,f)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "s >= lastFinish?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "lastFinish"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Selected"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "- (selected first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 >= 4? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(0,6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 >= 4? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(5,7)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["5 >= 4? ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 >= 7? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,4]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(8,9)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["8 >= 7? ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,4,5]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(6,10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6 >= 9? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1,4,5]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Selected activities: (1,4), (5,7), (8,9) — 3 activities maximum."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nstruct Activity { int start, finish; };\n\nstd::vector<int> activitySelection(std::vector<Activity>& acts) {\n    std::sort(acts.begin(), acts.end(),\n              [](const Activity& a, const Activity& b) {\n                  return a.finish < b.finish;\n              });\n    std::vector<int> selected = {0};\n    int lastFinish = acts[0].finish;\n    for (size_t i = 1; i < acts.size(); ++i) {\n        if (acts[i].start >= lastFinish) {\n            selected.push_back(static_cast<int>(i));\n            lastFinish = acts[i].finish;\n        }\n    }\n    return selected;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def activity_selection(activities):\n    # activities: list of (start, finish)\n    activities.sort(key=lambda x: x[1])\n    selected = [activities[0]]\n    last_finish = activities[0][1]\n    for i in range(1, len(activities)):\n        if activities[i][0] >= last_finish:\n            selected.append(activities[i])\n            last_finish = activities[i][1]\n    return selected\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass Activity {\n    int start, finish;\n    Activity(int s, int f) { start = s; finish = f; }\n}\n\npublic static List<Integer> activitySelection(List<Activity> acts) {\n    acts.sort(Comparator.comparingInt(a -> a.finish));\n    List<Integer> selected = new ArrayList<>();\n    selected.add(0);\n    int lastFinish = acts.get(0).finish;\n    for (int i = 1; i < acts.size(); i++) {\n        if (acts.get(i).start >= lastFinish) {\n            selected.add(i);\n            lastFinish = acts.get(i).finish;\n        }\n    }\n    return selected;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison-based sort dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan through sorted array"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting is the bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(1) ) extra (or ( O(n) ) to store selected indices)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
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
            children: "Simple and intuitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails for weighted intervals (needs DP)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for unweighted case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorting — cannot be used on streaming data directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) ) is efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not minimize number of rooms (that is a different problem)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange argument proof is clean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy choice must be proven — not always obvious"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty input:"
        }), " Return empty list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single activity:"
        }), " Return that activity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All overlapping:"
        }), " Only the earliest-finishing activity is selected."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All non-overlapping:"
        }), " All activities are selected in sorted order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Same start and finish times:"
        }), " Activity with finish = start is considered non-overlapping (can start exactly when previous ends)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of optimality (exchange argument):"
      }), " Let ( A ) be the greedy solution and ( O ) be any optimal solution. Let the first activity in ( A ) be ( a_1 ) (earliest finish) and the first in ( O ) be ( o_1 ). Since ( f_{a_1} \\le f_{o_1} ), we can replace ( o_1 ) with ( a_1 ) in ( O ), yielding another optimal solution. By induction, ( A ) is optimal."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Activity selection is the canonical example for proving greedy correctness via exchange argument. Master this proof — the same technique applies to many other greedy problems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " If activities have weights instead of just counts, greedy fails. Weighted interval scheduling requires DP."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Activity selection picks the earliest-finishing compatible activity at each step, and the exchange argument proves this greedy strategy is optimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-huffman-coding",
      children: "6.3 Huffman Coding"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine you are writing a secret language where common letters like 'E' should be quick to write (short code) and rare letters like 'Z' can be longer. If you assign the shortest codes to the most frequent characters, your average message length shrinks. Huffman coding automates this intuition to produce provably optimal prefix codes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given a set of characters with frequencies, construct a binary prefix code that minimizes the total number of bits."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy strategy:"
      }), " At each step, merge the two characters (or subtrees) with the smallest frequencies."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a leaf node for each character with its frequency. Insert all into a min-priority queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "While more than one node remains in the queue:\na. Extract the two nodes with the smallest frequencies.\nb. Create a new internal node whose frequency is the sum of the two extracted nodes.\nc. Make the first extracted node the left child, the second the right child.\nd. Insert the new node back into the queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The remaining node is the root of the Huffman tree."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assign codes by traversing the tree: left = 0, right = 1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Huffman(C):\n    Q = min-priority queue of characters by frequency\n    for i = 1 to |C| - 1:\n        z = new node\n        z.left = ExtractMin(Q)\n        z.right = ExtractMin(Q)\n        z.freq = z.left.freq + z.right.freq\n        Insert(Q, z)\n    return ExtractMin(Q)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-1",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Characters with frequencies: A:45, B:13, C:12, D:16, E:9, F:5."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initial queue:"
      }), " [F:5, E:9, C:12, B:13, D:16, A:45]"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extract1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Extract2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "New Node"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Queue State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "E:9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "F:5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[C:12, B:13, X:14, D:16, A:45]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C:12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B:13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y:25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[X:14, D:16, Y:25, A:45]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "X:14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "D:16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z:30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Y:25, Z:30, A:45]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Y:25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Z:30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W:55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[A:45, W:55]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A:45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "W:55"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Root:100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[Root:100]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Codes from tree traversal:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Char"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Length"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "111"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "E"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "F"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total bits:"
      }), " ( 45 \\cdot 1 + 13 \\cdot 3 + 12 \\cdot 3 + 16 \\cdot 3 + 9 \\cdot 4 + 5 \\cdot 4 = 45 + 39 + 36 + 48 + 36 + 20 = 224 )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If fixed-length codes (3 bits for 6 symbols) were used: ( 100 \\cdot 3 = 300 ) bits. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Savings: 25.3%."
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <queue>\n#include <vector>\n#include <string>\n#include <unordered_map>\n\nstruct Node {\n    char ch;\n    int freq;\n    Node *left, *right;\n    Node(char c, int f) : ch(c), freq(f), left(nullptr), right(nullptr) {}\n};\n\nstruct Compare {\n    bool operator()(Node* a, Node* b) { return a->freq > b->freq; }\n};\n\nvoid encode(Node* root, std::string code,\n            std::unordered_map<char, std::string>& codes) {\n    if (!root) return;\n    if (!root->left && !root->right)\n        codes[root->ch] = code;\n    encode(root->left, code + \"0\", codes);\n    encode(root->right, code + \"1\", codes);\n}\n\nstd::unordered_map<char, std::string> huffman(\n        const std::unordered_map<char, int>& freq) {\n    std::priority_queue<Node*, std::vector<Node*>, Compare> pq;\n    for (auto& p : freq)\n        pq.push(new Node(p.first, p.second));\n    while (pq.size() > 1) {\n        Node* l = pq.top(); pq.pop();\n        Node* r = pq.top(); pq.pop();\n        Node* n = new Node('\\0', l->freq + r->freq);\n        n->left = l; n->right = r;\n        pq.push(n);\n    }\n    std::unordered_map<char, std::string> codes;\n    encode(pq.top(), \"\", codes);\n    return codes;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import heapq\nfrom collections import Counter\n\ndef huffman_codes(text):\n    freq = Counter(text)\n    heap = [[w, [ch, \"\"]] for ch, w in freq.items()]\n    heapq.heapify(heap)\n    while len(heap) > 1:\n        lo = heapq.heappop(heap)\n        hi = heapq.heappop(heap)\n        for pair in lo[1:]:\n            pair[1] = \"0\" + pair[1]\n        for pair in hi[1:]:\n            pair[1] = \"1\" + pair[1]\n        heapq.heappush(heap, [lo[0] + hi[0]] + lo[1:] + hi[1:])\n    return sorted(heap[0][1:], key=lambda p: len(p[1]))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass HuffmanNode implements Comparable<HuffmanNode> {\n    char ch; int freq;\n    HuffmanNode left, right;\n    HuffmanNode(char c, int f) { ch = c; freq = f; }\n    public int compareTo(HuffmanNode o) { return this.freq - o.freq; }\n}\n\npublic static Map<Character, String> huffman(Map<Character, Integer> freq) {\n    PriorityQueue<HuffmanNode> pq = new PriorityQueue<>();\n    for (Map.Entry<Character, Integer> e : freq.entrySet())\n        pq.add(new HuffmanNode(e.getKey(), e.getValue()));\n    while (pq.size() > 1) {\n        HuffmanNode l = pq.poll(), r = pq.poll();\n        HuffmanNode n = new HuffmanNode('\\0', l.freq + r.freq);\n        n.left = l; n.right = r;\n        pq.add(n);\n    }\n    Map<Character, String> codes = new HashMap<>();\n    encode(pq.peek(), \"\", codes);\n    return codes;\n}\n\nstatic void encode(HuffmanNode n, String s, Map<Character, String> codes) {\n    if (n == null) return;\n    if (n.left == null && n.right == null) codes.put(n.ch, s);\n    encode(n.left, s + \"0\", codes);\n    encode(n.right, s + \"1\", codes);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Building heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floyd's heapify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ExtractMin x 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) each"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap pop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap push"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total merges"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n-1 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One per iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n ) heap operations x ( O(\\log n) )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(n) ) for the tree and priority queue."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
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
            children: "Optimal prefix code for symbol-by-symbol encoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires frequency table to be transmitted with data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy merge is intuitive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not optimal for correlated symbols (arithmetic coding is better)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix-free = unambiguous decoding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pass algorithm (one to count, one to encode)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in real systems (ZIP, JPEG, MP3)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed codeword width per symbol"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single character:"
        }), " Code is empty string (or \"0\"). Tree has one node."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Two characters:"
        }), " One gets \"0\", the other gets \"1\"."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All equal frequencies:"
        }), " Tree is balanced, codes have similar lengths."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Character appears 0 times:"
        }), " Simply omit from the tree."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Huffman coding is optimal for symbol-by-symbol encoding with fixed codeword lengths. For correlated symbols, arithmetic coding or Lempel-Ziv (LZ77) usually performs better."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Huffman codes are prefix-free — no codeword is a prefix of another, ensuring unambiguous decoding."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Huffman coding builds an optimal prefix code by repeatedly merging the two lowest-frequency nodes, achieving maximum compression for symbol-by-symbol encoding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-fractional-knapsack",
      children: "6.4 Fractional Knapsack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are at a bulk candy store with a container that holds 5 lbs. You see gummy bears ($8/lb), chocolate truffles ($15/lb), and licorice ($5/lb). Since you can take any amount of each, the optimal strategy is clear: fill your container starting with the most expensive-per-pound candy, taking as much as you can. If truffles run out, move to gummy bears. This is the fractional knapsack strategy — always take the best value-per-unit first."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given items with weights and values, and a knapsack capacity ( W ), maximize the value of items placed in the knapsack. Items can be taken fractionally."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy strategy:"
      }), " Sort items by value-to-weight ratio ( v_i / w_i ) in decreasing order. Take as much as possible of the highest-ratio item, then the next, etc."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute value/weight ratio for each item."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort items by ratio descending."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "totalValue = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each item in sorted order:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["If the item fits entirely (", (0,jsx_runtime.jsx)(_components.code, {
              children: "W >= w_i"
            }), "), take it whole: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "totalValue += v_i"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "W -= w_i"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Otherwise, take fraction ", (0,jsx_runtime.jsx)(_components.code, {
              children: "W / w_i"
            }), " of it: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "totalValue += v_i * (W / w_i)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "W = 0"
            }), ", break."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "totalValue"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FractionalKnapsack(items, W):\n    Sort items by v_i / w_i descending\n    totalValue = 0\n    for each item in sorted order:\n        if W >= item.weight:\n            totalValue += item.value\n            W -= item.weight\n        else:\n            totalValue += item.value * (W / item.weight)\n            break\n    return totalValue\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-2",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Capacity W = 50. Items:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Ratio"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sorted by ratio:"
      }), " A(6), B(5), C(4)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Item"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Weight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Fit?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Taken Wt"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Taken Val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining W"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50 >= 10 yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 >= 20 yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 < 30 no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 (fraction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120*(20/30)=80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Total value:"
      }), " 60 + 100 + 80 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "240"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nstruct Item { double value, weight; };\n\ndouble fractionalKnapsack(std::vector<Item>& items, double W) {\n    std::sort(items.begin(), items.end(),\n              [](const Item& a, const Item& b) {\n                  return (a.value / a.weight) > (b.value / b.weight);\n              });\n    double totalValue = 0;\n    for (auto& item : items) {\n        if (W >= item.weight) {\n            totalValue += item.value;\n            W -= item.weight;\n        } else {\n            totalValue += item.value * (W / item.weight);\n            break;\n        }\n    }\n    return totalValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fractional_knapsack(items, W):\n    # items: list of (value, weight)\n    items.sort(key=lambda x: x[0] / x[1], reverse=True)\n    total_value = 0\n    for value, weight in items:\n        if W >= weight:\n            total_value += value\n            W -= weight\n        else:\n            total_value += value * (W / weight)\n            break\n    return total_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass Item {\n    double value, weight;\n    Item(double v, double w) { value = v; weight = w; }\n}\n\npublic static double fractionalKnapsack(Item[] items, double W) {\n    Arrays.sort(items, (a, b) -> Double.compare(\n        b.value / b.weight, a.value / a.weight));\n    double totalValue = 0;\n    for (Item item : items) {\n        if (W >= item.weight) {\n            totalValue += item.value;\n            W -= item.weight;\n        } else {\n            totalValue += item.value * (W / item.weight);\n            break;\n        }\n    }\n    return totalValue;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio sort dominates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting bottleneck"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(1) ) extra (in-place sort)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
      children: "Advantages & Disadvantages"
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
            children: "Greedy is provably optimal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works because items are divisible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very fast (( O(n \\log n) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useless for 0/1 knapsack (items cannot be split)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio sort loses precision with floating-point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear correctness proof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not consider minimum-take constraints"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Item heavier than capacity:"
        }), " Skip or take fraction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-weight items:"
        }), " Division by zero — handle separately (infinite ratio, take first)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero-value items:"
        }), " Skip (they do not contribute)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All items fit:"
        }), " Take everything."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "W = 0:"
        }), " Return 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The fractional knapsack problem is the perfect interview question to test whether a candidate understands why greedy works for fractional but not 0/1 — the key is fractional divisibility allows you to always fill the knapsack optimally."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The value-to-weight ratio sort is the greedy choice; taking fractions is what makes it optimal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Fractional knapsack is greedy-solvable because items can be divided, so sorting by value-to-weight ratio and taking as much as possible yields the optimal solution."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Contrast with 0/1 knapsack:"
      }), " The fractional knapsack problem is solvable by a greedy algorithm, while the 0/1 knapsack problem requires dynamic programming. The difference lies in the ability to take fractions of items."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-job-sequencing-with-deadlines",
      children: "6.5 Job Sequencing with Deadlines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are a freelancer with five tasks due this week. Each task pays a different amount and has a different deadline. You can only work on one task per day. The greedy approach: sort by payment (highest first) and schedule each task as late as possible before its deadline without conflicting with higher-paying tasks already scheduled."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given ( n ) jobs, each with a deadline ( d_i ) and profit ( p_i ), each job takes one unit of time. Schedule jobs to maximize total profit."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy strategy:"
      }), " Sort jobs by profit descending. For each job, assign it to the latest available time slot before its deadline."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sort jobs by profit in descending order."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the maximum deadline among all jobs."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create a slot array of size ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxDeadline"
        }), ", initialized to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1"
        }), " (empty)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "totalProfit = 0"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each job in sorted order:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
              children: "t = min(deadline-1, maxDeadline-1)"
            }), " down to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["If slot ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "t"
                }), " is empty, assign this job to slot ", (0,jsx_runtime.jsx)(_components.code, {
                  children: "t"
                }), ", add profit, break."]
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the schedule and total profit."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "JobSequencing(jobs, n):\n    Sort jobs by profit descending\n    result = array of size maxDeadline, initialized to -1\n    totalProfit = 0\n    for each job in sorted order:\n        for t = min(d_i, maxDeadline) - 1 down to 0:\n            if result[t] == -1:\n                result[t] = job\n                totalProfit += p_i\n                break\n    return result, totalProfit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-3",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " Jobs with (deadline, profit): J1(2,100), J2(1,19), J3(2,27), J4(1,25), J5(3,15)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Sorted by profit:"
      }), " J1(2,100), J3(2,27), J4(1,25), J2(1,19), J5(3,15)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Max deadline = 3"
      }), " → slots [0, 1, 2] (0-indexed)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Job"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Profit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Deadline"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Candidate Slots (desc)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Chosen Slot"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Total Profit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1, 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "27"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (taken), 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (taken)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (taken)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "127"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "J5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, 1 (taken), 0 (taken)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "142"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " Slot0=J3, Slot1=J1, Slot2=J5. Total profit = 100 + 27 + 15 = ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "142"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ (naive):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nstruct Job { int deadline, profit; };\n\nint jobSequencing(std::vector<Job>& jobs) {\n    std::sort(jobs.begin(), jobs.end(),\n              [](const Job& a, const Job& b) { return a.profit > b.profit; });\n    int maxDeadline = 0;\n    for (auto& j : jobs) maxDeadline = std::max(maxDeadline, j.deadline);\n    std::vector<int> slots(maxDeadline, -1);\n    int totalProfit = 0;\n    for (auto& job : jobs) {\n        for (int t = std::min(job.deadline, maxDeadline) - 1; t >= 0; --t) {\n            if (slots[t] == -1) {\n                slots[t] = 1;\n                totalProfit += job.profit;\n                break;\n            }\n        }\n    }\n    return totalProfit;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def job_sequencing(jobs):\n    # jobs: list of (deadline, profit)\n    jobs.sort(key=lambda x: x[1], reverse=True)\n    max_deadline = max(d for d, _ in jobs)\n    slots = [-1] * max_deadline\n    total_profit = 0\n    for deadline, profit in jobs:\n        for t in range(min(deadline, max_deadline) - 1, -1, -1):\n            if slots[t] == -1:\n                slots[t] = 1\n                total_profit += profit\n                break\n    return total_profit\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\nclass Job {\n    int deadline, profit;\n    Job(int d, int p) { deadline = d; profit = p; }\n}\n\npublic static int jobSequencing(Job[] jobs) {\n    Arrays.sort(jobs, (a, b) -> b.profit - a.profit);\n    int maxDeadline = 0;\n    for (Job j : jobs) maxDeadline = Math.max(maxDeadline, j.deadline);\n    int[] slots = new int[maxDeadline];\n    Arrays.fill(slots, -1);\n    int totalProfit = 0;\n    for (Job job : jobs) {\n        for (int t = Math.min(job.deadline, maxDeadline) - 1; t >= 0; --t) {\n            if (slots[t] == -1) {\n                slots[t] = 1;\n                totalProfit += job.profit;\n                break;\n            }\n        }\n    }\n    return totalProfit;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "For each job, scan up to maxDeadline slots"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union-Find"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find next free slot in near-constant time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(\\text{maxDeadline}) ) for slot array."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optimization with Union-Find:"
      }), " Each set tracks the latest available slot. When a slot is filled, union it with the previous slot. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "find(i)"
      }), " returns the latest available slot ≤ i."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-3",
      children: "Advantages & Disadvantages"
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
            children: "Simple greedy sorting + slot assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive O(n²) is slow for large n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Union-find optimization is elegant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes each job takes exactly 1 time unit"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Provably optimal with exchange argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot handle variable-duration jobs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used in real task schedulers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires discrete time slots"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All deadlines same:"
        }), " Only the highest-profit min(deadline, n) jobs fit."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deadlines exceed number of jobs:"
        }), " Jobs schedule into their own slots."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single job:"
        }), " Always scheduled."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Profits equal:"
        }), " Order does not matter."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "No jobs:"
        }), " Return 0."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use a disjoint-set (union-find) data structure to optimize the slot-finding step in job sequencing. Each set tracks the latest available slot, and path compression makes this nearly constant time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Job sequencing with deadlines schedules highest-profit jobs first, placing each in the latest available slot before its deadline — O(n log n) with union-find optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-canonical-coin-change",
      children: "6.6 Canonical Coin Change"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A cashier needs to give you 67 cents in change. The drawer has quarters (25¢), dimes (10¢), nickels (5¢), and pennies (1¢). Instinctively, you take 2 quarters (50¢), 1 dime (60¢), 1 nickel (65¢), and 2 pennies (67¢) — 6 coins. This greedy approach works perfectly for US currency. But if a fictional country had coins of 1, 3, and 4 units, greedy would fail."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given coin denominations ( d_1 > d_2 > \\cdots > d_k = 1 ), make change for amount ( A ) using the minimum number of coins."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy strategy:"
      }), " Repeatedly take the largest denomination that does not exceed the remaining amount."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Initialize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count = 0"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remaining = A"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For each denomination from largest to smallest:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["While ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remaining >= d_i"
            }), ":\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "remaining -= d_i"
                })
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "count++"
                })
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CoinChange(denoms[], A):\n    count = 0\n    remaining = A\n    for i = 0 to k-1:          // denoms sorted descending\n        while remaining >= denoms[i]:\n            remaining -= denoms[i]\n            count++\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-4",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " USD denominations [25, 10, 5, 1], Amount A = 67."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Denom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "While Remaining >= Denom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtract"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "67 >= 25 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42 >= 25 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17 >= 25 -> no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "17 >= 10 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 >= 10 -> no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 >= 5 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 >= 5 -> no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 >= 1 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 >= 1 -> yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " 6 coins (2 quarters, 1 dime, 1 nickel, 2 pennies)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Non-canonical counterexample:"
      }), " Denominations [4, 3, 1], Amount A = 6."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Coin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Remaining After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Count"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Greedy gives 3 coins (4+1+1). Optimal is 2 coins (3+3). Greedy fails."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n\nint coinChange(const std::vector<int>& denoms, int amount) {\n    int count = 0;\n    for (int coin : denoms) {\n        while (amount >= coin) {\n            amount -= coin;\n            count++;\n        }\n    }\n    return count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def coin_change(denoms, amount):\n    count = 0\n    for coin in denoms:\n        while amount >= coin:\n            amount -= coin\n            count += 1\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static int coinChange(int[] denoms, int amount) {\n    int count = 0;\n    for (int coin : denoms) {\n        while (amount >= coin) {\n            amount -= coin;\n            count++;\n        }\n    }\n    return count;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cost"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop over denoms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k denominations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "While loop total"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(A) ) worst-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If all pennies, amount iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Total"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(k + A) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Or ( O(k) ) if using division: count += amount / coin"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space:"
      }), " ( O(1) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-4",
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
            children: "Extremely fast (( O(k) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only optimal for canonical systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero extra memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot detect non-canonical systems automatically"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Intuitive and easy to code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fails spectacularly on simple inputs (1,3,4 -> 6)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Amount = 0:"
        }), " Return 0 coins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Smallest denomination > 1:"
        }), " May not make exact change (assumes 1 exists)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Denominations not sorted:"
        }), " Must sort descending first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative amount:"
        }), " Not applicable."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Large amount:"
        }), " Works fine but many iterations if penny-heavy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never assume a coin system is canonical without verifying. Counterexample: coins 1, 3, 4 fail for amount 6 (greedy: 4+1+1=3 coins, optimal: 3+3=2 coins). Use DP for general coin systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Greedy coin change works optimally only for canonical systems where larger denominations are multiples of smaller ones; otherwise DP is needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-greedy-vs-dynamic-programming",
      children: "6.7 Greedy vs. Dynamic Programming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The most common confusion in algorithm design is when to use greedy vs. dynamic programming. Both rely on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "optimal substructure"
      }), ", but they differ fundamentally."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Greedy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Programming"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Decision basis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local optimum at each step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Considers all subproblem solutions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greedy-choice property"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overlapping subproblems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recomputation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (single pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May recompute subproblems (memoization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correctness proof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Induction on subproblem optimality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually ( O(n \\log n) ) or ( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often ( O(n^2) ) or exponential (without memoization)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space complexity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Usually ( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Often ( O(n) ) or more"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Typical failures"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong for non-canonical systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works for most optimization problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional knapsack, activity selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 knapsack, weighted interval scheduling"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key decision rule:"
      }), " If the problem has optimal substructure AND you can prove that a locally optimal choice never forecloses a better global solution, use greedy. Otherwise, use DP."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Greedy?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "DP?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activity Selection (unweighted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Earliest finish maximizes count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted Interval Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy can pick low-weight early activity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisibility ensures optimal fill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy can leave unusable capacity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change (canonical)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger denominations are multiples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change (general)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counterexample exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huffman Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge property provably optimal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest Path (Dijkstra)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No negative edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shortest Path (Bellman-Ford)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles negative edges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "MST (Prim, Kruskal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cut property guarantees optimality"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-exchange-argument--the-proof-technique",
      children: "6.8 Exchange Argument — The Proof Technique"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "exchange argument"
      }), " is the standard method for proving greedy algorithms are optimal. The idea: take any optimal solution, and show you can transform it step-by-step into the greedy solution without decreasing its quality."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "framework",
      children: "Framework"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Let G be the greedy solution"
        }), " (what your algorithm produces)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Let O be any optimal solution"
        }), " (hypothetical best)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find the first point of difference"
        }), " between G and O."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Swap"
        }), " the greedy choice into O, showing the new solution O' is at least as good as O."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Induct"
        }), " — repeat the swap until O becomes G."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "standard-template",
      children: "Standard Template"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Given: Problem P with objective function f.\n\n1. Let G = greedy choices (g1, g2, ..., gk).\n2. Let O = optimal choices (o1, o2, ..., om).\n3. Let i be the first index where gi ≠ oi.\n4. Claim: Swapping oi with gi in O yields O' with f(O') >= f(O).\n   - Prove by problem-specific reasoning.\n5. By induction, G is at least as good as the optimal solution.\n6. Therefore G is optimal.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "example-activity-selection",
      children: "Example: Activity Selection"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "G picks earliest-finish activity a1. O picks some activity o1 (finishes no earlier than a1)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Swap: replace o1 with a1 in O. Since a1 finishes earlier, all activities compatible with o1 are also compatible with a1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O' is at least as good as O."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Induct on remaining activities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "common-pitfall",
      children: "Common Pitfall"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An exchange argument must show the swap does not break feasibility. This is the hardest part. For activity selection, the swap works because earlier finish means more remaining time. For job sequencing, swapping a lower-profit job for a higher-profit job in the same slot increases profit without breaking deadlines."
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " When writing an exchange argument, always explicitly check: (1) the swap preserves feasibility, and (2) the swap does not worsen the objective. These two checks are the entire proof."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "69-interview-corner",
      children: "6.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Greedy algorithms are a favorite interview topic because they test whether a candidate can recognize the structural properties that make an optimization problem solvable efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "when-greedy-fails--classic-counterexamples",
      children: "When Greedy Fails — Classic Counterexamples"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Greedy Choice"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counterexample"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimal (DP)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coin Change [1,3,4] for 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+1+1=3 coins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+3=2 coins"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 coins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 Knapsack W=50, items: (v=60,w=10), (v=100,w=20), (v=120,w=30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ratio sort picks A+B=160"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B+C=220 is better"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "220"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Weighted Interval Scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Earliest finish first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-weight early interval blocks high-weight later one"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DP picks max-weight set"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "how-to-approach-a-greedy-problem-in-an-interview",
      children: "How to Approach a Greedy Problem in an Interview"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State the greedy choice"
        }), " clearly: \"I propose always picking the item with the largest X.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Test with a small example"
        }), " — if it works, build confidence."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Describe the algorithm"
        }), " in steps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Argue correctness"
        }), ": \"Let me sketch an exchange argument...\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "State complexity"
        }), ": \"This runs in O(n log n) because...\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Discuss where it fails"
        }), ": \"If the problem had weights instead of counts, greedy would fail and we would need DP.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "proof-of-optimality-checklist",
      children: "Proof of Optimality Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does the problem have optimal substructure?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does the problem have the greedy-choice property?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can you construct a counterexample where greedy fails?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can you write an exchange argument?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Interviewers love greedy fail cases. Go in knowing exactly where the line is between greedy and DP. Mentioning the exchange argument unprompted is a strong signal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "610-applications-in-real-systems",
      children: "6.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Greedy algorithms are not just academic — they power critical infrastructure."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "huffman-coding-in-compression",
      children: "Huffman Coding in Compression"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ZIP/GZIP:"
        }), " Uses DEFLATE, which combines LZ77 (sliding window) with Huffman coding for the compressed output."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JPEG:"
        }), " Uses Huffman coding (or arithmetic coding) after the DCT and quantization steps."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MP3:"
        }), " Modified Huffman coding in the bit allocation stage."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fax machines:"
        }), " Group 3 and Group 4 fax compression use modified Huffman run-length encoding."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "scheduling-in-operating-systems",
      children: "Scheduling in Operating Systems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shortest Job First (SJF):"
        }), " Greedy — always run the process with the shortest CPU burst. Minimizes average waiting time (provably optimal for preemptive version = Shortest Remaining Time First)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Earliest Deadline First (EDF):"
        }), " Greedy — always run the task with the closest deadline. Used in real-time operating systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I/O Scheduling:"
        }), " Elevator (SCAN) algorithm — greedy movement to the nearest request in the current direction."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "network-routing",
      children: "Network Routing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OSPF (Open Shortest Path First):"
        }), " Uses Dijkstra's greedy algorithm for link-state routing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Distance Vector Routing:"
        }), " Bellman-Ford (not greedy) but RIP uses a greedy-like distance-minimization at each hop."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "resource-allocation",
      children: "Resource Allocation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory allocation:"
        }), " First-fit, best-fit, worst-fit — all greedy strategies for allocating memory blocks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cloud computing VM placement:"
        }), " Greedy packing of VMs onto physical servers to minimize active machines (bin packing variant)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dna-sequence-assembly",
      children: "DNA Sequence Assembly"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Genome assembly algorithms use greedy overlap-layout-consensus (OLC) approaches, though modern assemblers also use de Bruijn graphs."
      }), "\n"]
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
            children: "Greedy-Choice Property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local optimum leads to global optimum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different from optimal substructure alone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verifying greedy applicability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange Argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transform any optimal to greedy solution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves optimality by contradiction switching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy correctness proofs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Activity Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Earliest finish time first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange argument is clean and canonical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling, resource allocation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huffman Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge smallest frequencies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal prefix code — prefix-free property"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File compression (ZIP, JPEG)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional vs 0/1 Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divisibility determines approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy works for fractional only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation problems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy vs DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local vs global optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy-choice property distinguishes them"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm selection decision"
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
              children: "When Greedy Works"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal substructure + greedy-choice property"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Proof Technique"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange argument — transform any optimal to greedy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Always Greedy-Solvable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Activity selection, fractional knapsack, Huffman coding, Dijkstra, Prim's"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Greedy Fails"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0/1 knapsack, weighted interval scheduling, coin change (non-canonical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming greedy works because it seems intuitive — always verify or test a counterexample"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exchange Argument Steps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1) Find first difference 2) Swap 3) Prove not worse 4) Induct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Strategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State choice, test example, sketch proof, note limitations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Activity Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — interval scheduling variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation, meeting room mgmt"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matroid theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Huffman Coding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally — compression basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data compression systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Information theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fractional Knapsack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Common — greedy vs DP contrast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear programming duality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Job Sequencing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally asked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deadline scheduling variations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Task scheduling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scheduling theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange Arguments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Critical skill — proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required for many greedy proofs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm correctness"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Greedy vs DP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very common interview question"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architecture decisions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization theory"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The greedy paradigm works when the greedy-choice property and optimal substructure hold."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exchange arguments provide a systematic method for proving greedy optimality."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Activity selection and Huffman coding are canonical examples of correct greedy algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fractional knapsack is greedy-solvable; 0/1 knapsack is not."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Greedy coin change requires the coin system to be canonical."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Greedy vs DP: greedy is faster but requires the greedy-choice property; DP works more generally."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exchange argument: find the first difference, swap, prove no loss, induct."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world uses: Huffman in ZIP/JPEG/MP3, scheduling in OS kernels, Dijkstra in network routing."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which property must a problem satisfy for a greedy algorithm to produce an optimal solution?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Overlapping subproblems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Greedy-choice property and optimal substructure"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Polynomial-time verifiability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Divide-and-conquer compatibility"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Greedy-choice property (local optimum leads to global optimum) and optimal substructure (optimal solution contains optimal sub-solutions).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Why does greedy work for fractional knapsack but not 0/1 knapsack?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Fractional knapsack has smaller input size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Items can be divided, allowing the greedy to always fill capacity optimally"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 0/1 knapsack has negative weights"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Fractional knapsack doesn't need sorting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) In fractional knapsack, you can always take a partial item to exactly fill remaining capacity, so the value/weight ratio sort yields an optimal fill.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the greedy choice in Huffman coding?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Merge the two highest-frequency characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Merge the two lowest-frequency characters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Assign shortest codeword to rarest character"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Build a balanced tree"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Merge the two characters/trees with the smallest frequencies. This ensures the least frequent characters get the deepest (longest) codewords.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which proof technique is standard for proving greedy algorithm optimality?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Induction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Exchange argument"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Contradiction"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Case analysis"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Exchange argument — take any optimal solution and transform it step-by-step into the greedy solution without reducing quality.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which of the following is NOT solvable by a greedy algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Activity selection (unweighted)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Minimum spanning tree (Prim's)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 0/1 knapsack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Fractional knapsack"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) 0/1 knapsack requires DP because taking a fraction of an item is not allowed, so the greedy ratio sort can leave unusable capacity.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State the greedy-choice property. Give an example of a problem that satisfies it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why fractional knapsack admits a greedy solution but 0/1 knapsack does not."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct a set of activities where selecting the shortest-duration activity first would fail."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the exchange argument framework. Walk through its application to activity selection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between greedy and DP? Give a problem where only one works."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What makes a coin system canonical? Give an example of a non-canonical system."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Huffman coding in C++ and encode a sample string. Compute the compression ratio."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the job sequencing algorithm with union-find optimization and prove its ( O(n \\log n) ) bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine whether the coin system 1, 5, 10, 25 is canonical. Prove your answer."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given intervals with weights, find a maximum-weight non-overlapping subset. Show that the greedy earliest-finish-time-first strategy is not optimal."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement fractional knapsack and verify optimality against brute force for n=5."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that the greedy activity selection algorithm selects the maximum number of activities."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "13",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a greedy algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Minimum Spanning Tree"
        }), " problem (Prim's algorithm). Prove its optimality using a cut property. Compare with the MST presented in Chapter 12."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Huffman Decoder:"
        }), " Given the Huffman tree from Example 6.2, decode the bitstring \"100110101101\". Show each step."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meeting Rooms II:"
        }), " Given meeting times, find the minimum number of conference rooms needed. (Hint: greedy by start time with a min-heap of end times.)"]
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