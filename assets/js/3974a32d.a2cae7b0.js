"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[44432],{

/***/ 86388
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_01_time_and_space_complexity_md_397_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-01-time-and-space-complexity-md-397.json
const site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_01_time_and_space_complexity_md_397_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/01-time-and-space-complexity","title":"Time and Space Complexity","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":38,"frontMatter":{"id":"01-time-and-space-complexity","slug":"/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity","title":"Time and Space Complexity","sidebar_label":"Time and Space Complexity","sidebar_position":38},"sidebar":"placementSidebar","previous":{"title":"03 — Data Structures & Algorithms","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms"},"next":{"title":"Arrays","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/02-arrays"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity.md


const frontMatter = {
	id: '01-time-and-space-complexity',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity',
	title: 'Time and Space Complexity',
	sidebar_label: 'Time and Space Complexity',
	sidebar_position: 38
};
const contentTitle = 'Time and Space Complexity';

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
  "value": "Introduction",
  "id": "introduction",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 2
}, {
  "value": "Key Terminology",
  "id": "key-terminology",
  "level": 2
}, {
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1.1 Asymptotic Notations",
  "id": "11-asymptotic-notations",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "1.2 Complexity Classes",
  "id": "12-complexity-classes",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-1",
  "level": 2
}, {
  "value": "1.3 Analyzing Iterative Algorithms",
  "id": "13-analyzing-iterative-algorithms",
  "level": 3
}, {
  "value": "1.4 Analyzing Recursive Algorithms",
  "id": "14-analyzing-recursive-algorithms",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-2",
  "level": 2
}, {
  "value": "1.5 Space Complexity",
  "id": "15-space-complexity",
  "level": 3
}, {
  "value": "Overview",
  "id": "overview-3",
  "level": 2
}, {
  "value": "1.6 Amortized Analysis",
  "id": "16-amortized-analysis",
  "level": 3
}, {
  "value": "Visual Analogy",
  "id": "visual-analogy",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
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
  "value": "Interview Q&amp;A",
  "id": "interview-qa",
  "level": 2
}, {
  "value": "No T bound because best ? worst</code></pre>",
  "id": "no-t-bound-because-best--worst",
  "level": 2
}, {
  "value": "This gives O(2ⁿ) — exponential",
  "id": "this-gives-o2ⁿ--exponential",
  "level": 2
}, {
  "value": "Binary search recurrence: T(n) = T(n/2) + O(1)",
  "id": "binary-search-recurrence-tn--tn2--o1",
  "level": 2
}, {
  "value": "Using Master Theorem: a=1, b=2, f(n)=O(1)",
  "id": "using-master-theorem-a1-b2-fno1",
  "level": 2
}, {
  "value": "log_b(a) = 0, f(n) = Θ(n⁰) → T(n) = Θ(log n)",
  "id": "log_ba--0-fn--θn--tn--θlog-n",
  "level": 2
}, {
  "value": "Merge sort recurrence: T(n) = 2T(n/2) + O(n)",
  "id": "merge-sort-recurrence-tn--2tn2--on",
  "level": 2
}, {
  "value": "Using Master Theorem: a=2, b=2, f(n)=O(n)",
  "id": "using-master-theorem-a2-b2-fnon",
  "level": 2
}, {
  "value": "log_b(a) = 1, f(n) = Θ(n¹) → T(n) = Θ(n log n)</code></pre>",
  "id": "log_ba--1-fn--θn--tn--θn-log-n",
  "level": 2
}, {
  "value": "Time: O(n), Space: O(n)</code></pre>",
  "id": "time-on-space-on",
  "level": 2
}, {
  "value": "Binary search",
  "id": "binary-search",
  "level": 2
}, {
  "value": "Counting bits",
  "id": "counting-bits",
  "level": 2
}, {
  "value": "Exponentiation by squaring",
  "id": "exponentiation-by-squaring",
  "level": 2
}, {
  "value": "Not in-place — O(n) auxiliary space",
  "id": "not-in-place--on-auxiliary-space",
  "level": 2
}, {
  "value": "Best: O(n log n) — pivot always median",
  "id": "best-on-log-n--pivot-always-median",
  "level": 2
}, {
  "value": "Average: O(n log n) — random pivot",
  "id": "average-on-log-n--random-pivot",
  "level": 2
}, {
  "value": "Worst: O(n²) — pivot always min/max (sorted input, bad pivot selection)",
  "id": "worst-on--pivot-always-minmax-sorted-input-bad-pivot-selection",
  "level": 2
}, {
  "value": "Linear search complexity",
  "id": "linear-search-complexity",
  "level": 2
}, {
  "value": "Best: Ω(1) — target is first element",
  "id": "best-ω1--target-is-first-element",
  "level": 2
}, {
  "value": "Average: Θ(n) — target is somewhere in middle",
  "id": "average-θn--target-is-somewhere-in-middle",
  "level": 2
}, {
  "value": "Worst: O(n) — target is last or not present</code></pre>",
  "id": "worst-on--target-is-last-or-not-present",
  "level": 2
}, {
  "value": "n=100: 10000 ops",
  "id": "n100-10000-ops",
  "level": 2
}, {
  "value": "n=200: 40000 ops (4x)",
  "id": "n200-40000-ops-4x",
  "level": 2
}, {
  "value": "Exponential: 2ⁿ — adding 1 doubles work",
  "id": "exponential-2ⁿ--adding-1-doubles-work",
  "level": 2
}, {
  "value": "n=10: 1024 ops",
  "id": "n10-1024-ops",
  "level": 2
}, {
  "value": "n=11: 2048 ops (2x)",
  "id": "n11-2048-ops-2x",
  "level": 2
}, {
  "value": "n=20: 1,048,576 ops",
  "id": "n20-1048576-ops",
  "level": 2
}, {
  "value": "n=30: 1,073,741,824 ops</code></pre>",
  "id": "n30-1073741824-ops",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 2
}, {
  "value": "Revision Notes",
  "id": "revision-notes",
  "level": 2
}, {
  "value": "Placement Section",
  "id": "placement-section",
  "level": 2
}, {
  "value": "Top 10 Interview Questions",
  "id": "top-10-interview-questions",
  "level": 3
}, {
  "value": "Google Style",
  "id": "google-style",
  "level": 4
}, {
  "value": "Amazon Style",
  "id": "amazon-style",
  "level": 4
}, {
  "value": "Microsoft Style",
  "id": "microsoft-style",
  "level": 4
}, {
  "value": "NVIDIA Style",
  "id": "nvidia-style",
  "level": 4
}, {
  "value": "AI Startup Style",
  "id": "ai-startup-style",
  "level": 4
}, {
  "value": "Resume Tips",
  "id": "resume-tips",
  "level": 3
}, {
  "value": "Interview Day Checklist",
  "id": "interview-day-checklist",
  "level": 3
}, {
  "value": "True/False",
  "id": "truefalse",
  "level": 2
}, {
  "value": "Fill in the Blank",
  "id": "fill-in-the-blank",
  "level": 2
}, {
  "value": "Scenario Questions",
  "id": "scenario-questions",
  "level": 2
}, {
  "value": "Output Questions",
  "id": "output-questions",
  "level": 2
}, {
  "value": "Difficulty Level",
  "id": "difficulty-level",
  "level": 2
}, {
  "value": "Tips &amp; Tricks",
  "id": "tips--tricks",
  "level": 2
}, {
  "value": "Memory Tricks",
  "id": "memory-tricks",
  "level": 2
}, {
  "value": "Further Reading",
  "id": "further-reading",
  "level": 2
}, {
  "value": "Related Topics",
  "id": "related-topics",
  "level": 2
}, {
  "value": "FAQs",
  "id": "faqs",
  "level": 2
}, {
  "value": "Important Notes",
  "id": "important-notes",
  "level": 2
}, {
  "value": "Historical Context",
  "id": "historical-context",
  "level": 2
}, {
  "value": "Security Considerations",
  "id": "security-considerations",
  "level": 2
}, {
  "value": "ML Intuition",
  "id": "ml-intuition",
  "level": 2
}, {
  "value": "Analogies",
  "id": "analogies",
  "level": 2
}, {
  "value": "Capstone Project Link",
  "id": "capstone-project-link",
  "level": 2
}, {
  "value": "Flashcards",
  "id": "flashcards",
  "level": 2
}, {
  "value": "Research References",
  "id": "research-references",
  "level": 2
}, {
  "value": "Open-Source Tools",
  "id": "open-source-tools",
  "level": 2
}, {
  "value": "Debugging Guide",
  "id": "debugging-guide",
  "level": 2
}, {
  "value": "Mock Interview Section",
  "id": "mock-interview-section",
  "level": 2
}, {
  "value": "Optimized Implementation",
  "id": "optimized-implementation",
  "level": 2
}, {
  "value": "Evaluation Metrics",
  "id": "evaluation-metrics",
  "level": 2
}, {
  "value": "Real-World Examples",
  "id": "real-world-examples",
  "level": 2
}, {
  "value": "Next Topic",
  "id": "next-topic",
  "level": 2
}, {
  "value": "Limitations",
  "id": "limitations",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "time-and-space-complexity",
        children: "Time and Space Complexity"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand Big-O, Big-Theta, and Big-Omega notations and their mathematical definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyze time complexity of iterative and recursive algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Derive space complexity including auxiliary and input space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify best, average, and worst-case scenarios for common algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply asymptotic analysis to compare algorithm efficiency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recognize common complexity classes: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotic Notations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big-O, Big-O, Big-T definitions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity Classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyzing Iterative Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop analysis, nested loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Analyzing Recursive Algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrence relations, Master theorem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack space, heap space, auxiliary space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Amortized Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregate method, accounting method"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Asymptotic Notations] --> B[Complexity Classes]\n    B --> C[Iterative Analysis]\n    B --> D[Recursive Analysis]\n    C --> E[Space Complexity]\n    D --> E\n    E --> F[Amortized Analysis]\n    F --> G[Practice Problems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding time and space complexity is the foundation of every technical interview and the first step toward building efficient AI systems. When an ML training loop takes 10 hours instead of 2,.\nor a vector search query times out at scale, the root cause almost always traces back to algorithmic complexity. This chapter teaches you how to analyze any algorithm's performance before writing a single line of code,.\na skill that separates senior engineers from beginners."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of Python or TypeScript loops, recursion, and functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with arrays and basic data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No prior algorithms course required — this is the starting point"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Terms"
      }), ": Core vocabulary and concepts for this topic."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Definition"
      }), ": Essential terms you must know for interviews and production work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-asymptotic-notations",
      children: "1.1 Asymptotic Notations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asymptotic notations describe the limiting behavior of a function as the input size approaches infinity. They provide a mathematical framework for comparing algorithm efficiency independent of hardware and implementation details."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-O (O)"
      }), " — Upper bound: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(n) = O(g(n))"
      }), " if there exist positive constants ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n₀"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0 ≤ f(n) ≤ c·g(n)"
      }), " for all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n ≥ n₀"
      }), ". This describes the worst-case scenario."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-Omega (Ω)"
      }), " — Lower bound: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(n) = Ω(g(n))"
      }), " if there exist positive constants ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n₀"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0 ≤ c·g(n) ≤ f(n)"
      }), " for all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n ≥ n₀"
      }), ". This describes the best-case scenario."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Big-Theta (Θ)"
      }), " — Tight bound: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(n) = Θ(g(n))"
      }), " if there exist positive constants ", (0,jsx_runtime.jsx)(_components.code, {
        children: "c₁, c₂, n₀"
      }), " such that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0 ≤ c₁·g(n) ≤ f(n) ≤ c₂·g(n)"
      }), " for all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n ≥ n₀"
      }), ". This describes the average-case scenario when both bounds match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Demonstrating growth rates\nimport time\nimport math\n\ndef measure_time(func, n):\n    start = time.perf_counter()\n    func(n)\n    return time.perf_counter() - start\n\n## O(1) — Constant\ndef constant(n):\n    return n * (n + 1) // 2\n\n## O(n) — Linear\ndef linear(n):\n    total = 0\n    for i in range(n):\n        total += i\n    return total\n\n## O(n²) — Quadratic\ndef quadratic(n):\n    total = 0\n    for i in range(n):\n        for j in range(n):\n            total += 1\n    return total\n\nfor n in [10, 100, 1000]:\n    print(f\"n={n}: O(1)={measure_time(constant, n):.6f}s, \"\n          f\"O(n)={measure_time(linear, n):.6f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Growth rate hierarchy"
      }), " (slowest to fastest):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(1) — Constant"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(log n) — Logarithmic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n) — Linear"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n log n) — Linearithmic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n²) — Quadratic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n³) — Cubic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(2ⁿ) — Exponential"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "O(n!) — Factorial"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-complexity-classes",
      children: "1.2 Complexity Classes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(1) — Constant Time"
      }), ": Execution time does not depend on input size. Array access by index, hash table lookup, arithmetic operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def get_first_element(arr):\n    return arr[0]  # Always takes the same time\n\n## Constant time operations\ndef swap(a, b):\n    return b, a\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(log n) — Logarithmic Time"
      }), ": Input size halves each step. Binary search, balanced BST operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n) — Linear Time"
      }), ": Single pass through data. Linear search, array sum, finding max/min."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target:\n            return i\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n log n) — Linearithmic Time"
      }), ": Efficient sorting algorithms. Merge sort, heap sort, divide-and-conquer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def merge_sort(arr):\n    if len(arr) <= 1:\n        return arr\n    mid = len(arr) // 2\n    left = merge_sort(arr[:mid])\n    right = merge_sort(arr[mid:])\n    return merge(left, right)\n\ndef merge(left, right):\n    result = []\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i] <= right[j]:\n            result.append(left[i])\n            i += 1\n        else:\n            result.append(right[j])\n            j += 1\n    result.extend(left[i:])\n    result.extend(right[j:])\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(n²) — Quadratic Time"
      }), ": Nested iterations over data. Bubble sort, insertion sort, naive matrix multiplication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "O(2ⁿ) — Exponential Time"
      }), ": Recursive without memoization. Naive Fibonacci, subset generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def fibonacci_naive(n):\n    if n <= 1:\n        return n\n    return fibonacci_naive(n - 1) + fibonacci_naive(n - 2)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=10"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=100"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n=1000"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~664"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~9966"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10⁶"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(2ⁿ)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10³⁰"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~10³⁰¹"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-1",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-analyzing-iterative-algorithms",
      children: "1.3 Analyzing Iterative Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Single loop"
      }), ": Multiply iterations by constant work inside."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sum_array(arr):\n    total = 0          # O(1)\n    for x in arr:      # n iterations\n        total += x     # O(1) per iteration\n    return total       # O(1) total: O(n)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Nested loops"
      }), ": Multiply iteration counts."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def nested_sum(arr):\n    total = 0\n    for i in range(len(arr)):       # n iterations\n        for j in range(len(arr)):   # n iterations per outer\n            total += arr[i] + arr[j]  # O(1)\n    return total  # Total: O(n²)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dependent nested loops"
      }), ": Summation formula."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def triangular_sum(arr):\n    total = 0\n    for i in range(len(arr)):       # n iterations\n        for j in range(i, len(arr)): # n-i iterations\n            total += arr[j]         # O(1)\n    return total  # n + (n-1) + ... + 1 = n(n+1)/2 = O(n²)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loop with constant stride"
      }), ": Only the number of iterations matters."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def halving_loop(n):\n    i = n\n    count = 0\n    while i > 0:\n        count += 1\n        i //= 2          # halves each step ? O(log n)\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loop with varying increment"
      }), ": Analyze how the counter changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def varying_increment(n):\n    i = 1\n    count = 0\n    while i < n:\n        count += 1\n        i *= 2           # doubles each step ? O(log n)\n    return count\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Loop Analysis Rules\"\n        A[Single Loop] -->|\"O(n)\"| B[Linear]\n        C[Nested Loops] -->|\"O(n*m)\"| D[Quadratic/Poly]\n        E[Divide each step] -->|\"O(log n)\"| F[Logarithmic]\n        G[Divide + process each half] -->|\"O(n log n)\"| H[Linearithmic]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-analyzing-recursive-algorithms",
      children: "1.4 Analyzing Recursive Algorithms"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recursive algorithms are analyzed using recurrence relations. A recurrence expresses the total work in terms of work done on smaller inputs."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence for binary search"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T(n) = T(n/2) + O(1)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def binary_search_recursive(arr, target, left, right):\n    if left > right:\n        return -1\n    mid = (left + right) // 2\n    if arr[mid] == target:\n        return mid\n    elif arr[mid] < target:\n        return binary_search_recursive(arr, target, mid + 1, right)\n    else:\n        return binary_search_recursive(arr, target, left, mid - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence for merge sort"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T(n) = 2T(n/2) + O(n)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence for naive Fibonacci"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T(n) = T(n-1) + T(n-2) + O(1) = O(2n)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Theorem"
      }), ": For recurrences of form ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T(n) = aT(n/b) + f(n)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(n) = O(n^{log_b(a) - e})"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T(n) = T(n^{log_b(a)})"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(n) = T(n^{log_b(a)})"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T(n) = T(n^{log_b(a)} log n)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(n) = Ω(n^{log_b(a) + ε})"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a·f(n/b) ≤ c·f(n)"
        }), " for some ", (0,jsx_runtime.jsx)(_components.code, {
          children: "c < 1"
        }), ", then ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T(n) = Θ(f(n))"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Count recursive calls to understand complexity\ncall_count = 0\n\ndef count_calls_fib(n):\n    global call_count\n    call_count += 1\n    if n <= 1:\n        return n\n    return count_calls_fib(n - 1) + count_calls_fib(n - 2)\n\n## n=10 ? 177 calls\n\n## n=20 ? 21891 calls\n\n## n=30 ? 2692537 calls\n\n## Demonstrates exponential growth\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recurrence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(n/2) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = 2T(n/2) + O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick Sort (avg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(k) + T(n-k-1) + O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci (naive)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(n-1) + T(n-2) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(2n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fibonacci (memoized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "T(n) = T(n-1) + O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-2",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-space-complexity",
      children: "1.5 Space Complexity"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Space complexity measures total memory used by an algorithm: input space + auxiliary space + stack space."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## O(1) space — constant extra memory\ndef sum_const_space(arr):\n    total = 0           # single variable\n    for x in arr:\n        total += x\n    return total\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## O(n) space — creating new array of size n\ndef double_array(arr):\n    result = [0] * len(arr)   # O(n) space\n    for i, val in enumerate(arr):\n        result[i] = val * 2\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## O(n) stack space — recursion depth\ndef factorial_recursive(n):\n    if n <= 1:\n        return 1\n    return n * factorial_recursive(n - 1)\n\n## Call stack grows to n frames ? O(n) stack space\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## O(n²) space — 2D matrix\ndef create_matrix(n):\n    matrix = [[0] * n for _ in range(n)]   # n * n elements\n    return matrix\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input space vs auxiliary space"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Input space: memory used by the input data (typically not counted in complexity analysis)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Auxiliary space: extra memory used by the algorithm beyond input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack space: memory used by recursive call frames"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## In-place algorithm — O(1) auxiliary space\ndef reverse_array_in_place(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    # No extra array created\n\n## Out-of-place — O(n) auxiliary space\ndef reverse_array_copy(arr):\n    return arr[::-1]   # Creates new array\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview-3",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-amortized-analysis",
      children: "1.6 Amortized Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Amortized analysis averages the cost of expensive operations over a sequence. A single operation may be costly, but the average per operation is bounded."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic array resizing"
      }), ": When a dynamic array (Python list) grows beyond capacity, it allocates a new array (typically 2x size) and copies elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Simulating dynamic array resizing\nclass DynamicArray:\n    def __init__(self):\n        self.data = [None] * 1\n        self.size = 0\n        self.capacity = 1\n\n    def append(self, value):\n        if self.size == self.capacity:\n            self._resize(2 * self.capacity)\n        self.data[self.size] = value\n        self.size += 1\n\n    def _resize(self, new_cap):\n        new_data = [None] * new_cap\n        for i in range(self.size):\n            new_data[i] = self.data[i]\n        self.data = new_data\n        self.capacity = new_cap\n        print(f\"Resized to {new_cap}\")\n\n## Analysis: n appends cost O(n) total, so O(1) amortized per append\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate method"
      }), ": Sum the cost of all operations and divide by n."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Cost of n dynamic array appends\n\n## Resize happens at capacities: 1, 2, 4, 8, ...\n\n## Total copies = 1 + 2 + 4 + ... + n/2 + n = O(n)\n\n## Amortized cost = O(n)/n = O(1)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Potential method"
      }), ": Define a potential function that captures the \"debt\" of the data structure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Accounting method"
      }), ": Charge extra for cheap operations; use credits to pay for expensive ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Banker's view: charge 3 coins per append\n\n## 1 coin pays for the immediate insert\n\n## 2 coins saved for future resizing\n\n## When resizing occurs, saved coins pay for copying\nclass AmortizedArray:\n    def __init__(self):\n        self.data = [None] * 1\n        self.size = 0\n        self.capacity = 1\n        self.bank = 0\n\n    def append_with_accounting(self, value):\n        self.bank += 2  # charge 2 extra coins\n        if self.size == self.capacity:\n            self._resize(2 * self.capacity)\n        self.data[self.size] = value\n        self.size += 1\n        self.bank -= 0 if self.size < self.capacity else self.size // 2\n\n    def _resize(self, new_cap):\n        self.bank -= self.size  # use saved coins\n        new_data = [None] * new_cap\n        for i in range(self.size):\n            new_data[i] = self.data[i]\n        self.data = new_data\n        self.capacity = new_cap\n\ndyn = DynamicArray()\nfor i in range(1000):\n    dyn.append(i)\nprint(f\"Final capacity: {dyn.capacity}, size: {dyn.size}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Amortized Analysis Methods\"\n        A[Aggregate] -->|\"Sum all costs / n\"| D[Average Cost]\n        B[Accounting] -->|\"Assign different charges\"| D\n        C[Potential] -->|\"Use potential function F\"| D\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "visual-analogy",
      children: "Visual Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of algorithm complexity like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "grocery shopping time"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(1) — Constant"
        }), " = Grabbing milk from your fridge. Same time no matter how big your house is."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(log n) — Logarithmic"
        }), " = Finding a word in a dictionary. You open to the middle, eliminate half, repeat. Very fast even for huge dictionaries."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n) — Linear"
        }), " = Checking every aisle in the grocery store for peanut butter. Twice the aisles = twice the time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n log n) — Linearithmic"
        }), " = Sorting your grocery list by aisle before shopping. The sorting takes a bit more than a single pass, but then shopping is efficient."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(n²) — Quadratic"
        }), " = Comparing every item in your cart with every other item to find duplicates. Ten items = 100 comparisons, a hundred items = 10,000 comparisons."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "O(2ⁿ) — Exponential"
        }), " = Trying every possible combination of items to pack in your bag. Adding one item doubles the time."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This helps because you can instantly estimate whether an algorithm will be fast enough for your data size. An O(n²) approach that works for 100 items will crawl for 1 million items — knowing this before you code saves hours of debugging."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript implements similar complexity analysis. The same algorithms can be written with explicit type annotations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binarySearch<T>(arr: T[], target: T): number {\n    let left = 0, right = arr.length - 1;\n    while (left <= right) {\n        const mid = Math.floor((left + right) / 2);\n        if (arr[mid] === target) return mid;\n        if (arr[mid] < target) left = mid + 1;\n        else right = mid - 1;\n    }\n    return -1;\n} // O(log n)\n\nfunction mergeSort<T>(arr: T[]): T[] {\n    if (arr.length <= 1) return arr;\n    const mid = Math.floor(arr.length / 2);\n    const left = mergeSort(arr.slice(0, mid));\n    const right = mergeSort(arr.slice(mid));\n    return merge(left, right);\n} // O(n log n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Big-O provides an upper bound on algorithm growth rate; Big-O provides a lower bound; Big-T provides a tight bound"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Common complexity classes ranked: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Single loops typically yield O(n); nested loops yield O(n²) or higher depending on depth"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recursive algorithms are analyzed via recurrence relations and the Master Theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Space complexity includes auxiliary space (extra memory) and stack space (recursion depth)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-place algorithms use O(1) auxiliary space; algorithms creating copies use O(n) or more"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amortized analysis provides a realistic average cost across a sequence of operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic array append operations have O(1) amortized cost despite O(n) worst-case resizing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Master Theorem solves recurrences of form T(n) = aT(n/b) + f(n) for common cases"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always consider both time and space complexity when choosing an algorithm for a given constraint"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing two sorting algorithms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare using Big-O and test on actual data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assuming lower Big-O always means faster for small n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space-constrained environment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer in-place algorithms with O(1) auxiliary space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creating unnecessary copies of large arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Analyzing recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write recurrence relation first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Guessing complexity without recurrence"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic array usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trust amortized O(1) append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-allocating size unless performance-critical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interview preparation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State best, average, and worst-case separately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only mentioning the best case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimizing nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Look for opportunities to restructure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adding more nested loops without analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Explain the difference between Big-O, Big-Omega, and Big-Theta with examples.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Big-O (O)"
          }), " — Upper bound: Algorithm will not perform worse than this. Example: Linear search is O(n) because in worst case we check all n elements."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Big-Omega (Ω)"
          }), " — Lower bound: Algorithm will not perform better than this. Example: Linear search is Ω(1) because the target could be the first element."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Big-Theta (Θ)"
          }), " — Tight bound: When upper and lower bounds match. Example: Merge sort is Θ(n log n) because both best and worst cases are n log n."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "# Linear search example\ndef linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target:\n            return i       # Ω(1) — best case\n    return -1               # O(n) — worst case\n"
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "no-t-bound-because-best--worst",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "No T bound because best ? worst"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<p><strong>Interview insight</strong>: Use Big-O for worst-case guarantees; use Big-Theta only when best and worst cases match.</p>\n"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: How do you analyze the time complexity of a recursive algorithm?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Recursive algorithms are analyzed using ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "recurrence relations"
          }), ". Steps:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the base case complexity"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the recursive case — how many subproblems (a), of what size (n/b)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Identify the cost of combining results (f(n))"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Form recurrence: T(n) = aT(n/b) + f(n)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Apply Master Theorem or solve via recurrence tree"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Fibonacci recurrence: T(n) = T(n-1) + T(n-2) + O(1)\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "this-gives-o2ⁿ--exponential",
              children: "This gives O(2ⁿ) — exponential"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "binary-search-recurrence-tn--tn2--o1",
              children: "Binary search recurrence: T(n) = T(n/2) + O(1)"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "using-master-theorem-a1-b2-fno1",
              children: "Using Master Theorem: a=1, b=2, f(n)=O(1)"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "log_ba--0-fn--θn--tn--θlog-n",
              children: "log_b(a) = 0, f(n) = Θ(n⁰) → T(n) = Θ(log n)"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "merge-sort-recurrence-tn--2tn2--on",
              children: "Merge sort recurrence: T(n) = 2T(n/2) + O(n)"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "using-master-theorem-a2-b2-fnon",
              children: "Using Master Theorem: a=2, b=2, f(n)=O(n)"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "log_ba--1-fn--θn--tn--θn-log-n",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "log_b(a) = 1, f(n) = Θ(n¹) → T(n) = Θ(n log n)"
            })
          })]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: What is the difference between time complexity and space complexity? Why do we analyze both?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time complexity"
          }), " measures how runtime scales with input size. ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Space complexity"
          }), " measures how memory usage scales with input size."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "We analyze both because:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "You can trade space for time (memoization, caching)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "You can trade time for space (streaming algorithms, in-place operations)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Different environments have different constraints (embedded systems care more about space)"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Example trade-off"
          }), ": Fibonacci with memoization uses O(n) space but O(n) time vs naive O(2n) time with O(n) stack space."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "def fib_memo(n, memo={}):\n    if n in memo:\n        return memo[n]\n    if n <= 1:\n        return n\n    memo[n] = fib_memo(n-1, memo) + fib_memo(n-2, memo)\n    return memo[n]\n"
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "time-on-space-on",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Time: O(n), Space: O(n)"
            })
          })]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain the Master Theorem and when it applies.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["The Master Theorem solves recurrences of the form ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "T(n) = aT(n/b) + f(n)"
          }), " where:"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "a ≥ 1 — number of subproblems"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "b > 1 — factor by which input size shrinks"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "f(n) — cost of dividing and combining"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Three cases"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "If f(n) = O(n^{log_b(a) - e}) then T(n) = T(n^{log_b(a)})"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "If f(n) = T(n^{log_b(a)} log^k n) then T(n) = T(n^{log_b(a)} log^{k+1} n)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "If f(n) = O(n^{log_b(a) + e}) and af(n/b) = cf(n) then T(n) = T(f(n))"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Examples"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Binary search: a=1, b=2, f(n)=1 ? T(n) = T(log n)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge sort: a=2, b=2, f(n)=n ? T(n) = T(n log n)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Strassen's matrix: a=7, b=2, f(n)=n² → T(n) = Θ(n^{log₂7})"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "The theorem does NOT apply when f(n) is not a polynomial, or does not satisfy regularity condition."
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: What is amortized analysis? Give an example.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Amortized analysis computes the average cost of an operation over a sequence, even if individual operations are expensive. It gives a realistic bound for data structures where occasional expensive operations are balanced by many cheap ones."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Classic example"
          }), ": Dynamic array (Python list) append."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Most appends: O(1) — just place element"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Occasional append: O(n) — resize and copy all elements"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Over n appends: O(n) total ? O(1) amortized per append"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Three methods"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Aggregate"
            }), ": Sum total cost / n"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Accounting"
            }), ": Overcharge cheap ops, use credits for expensive ones"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Potential"
            }), ": Use potential function — high potential before expensive op"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Other examples"
          }), ": Splay tree operations, union-find with path compression, binary counter increment."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you determine if an algorithm is O(log n)?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An algorithm is O(log n) when it ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "reduces the problem size by a constant factor"
          }), " at each step, while doing constant work per step."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Patterns that indicate O(log n)"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Divide by 2 each iteration: while loop with `i = i // 2` or `i = i * 2`"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Binary search style: eliminate half the input each step"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Balanced BST operations: height is O(log n)"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Divide and conquer where one subproblem dominates"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# O(log n) examples\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "binary-search",
              children: "Binary search"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "while left <= right:\nmid = (left + right) // 2\n# eliminate half"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "counting-bits",
              children: "Counting bits"
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "def count_bits(n):\ncount = 0\nwhile n:\ncount += n & 1\nn >>= 1  # divide by 2\nreturn count"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "exponentiation-by-squaring",
              children: "Exponentiation by squaring"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def power(x, n):\nif n == 0:\nreturn 1\nif n % 2 == 0:\nreturn power(x * x, n // 2)\nreturn x * power(x * x, n // 2)"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key insight"
          }), ": If the problem is halved (or reduced by factor b) at each step, and each step is O(1), the total is O(log_b n) = O(log n)."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q7: What is the complexity of accessing elements in different data structures?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.table, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
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
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Array"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Linked List"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Hash Table"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "N/A"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1) avg"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1) avg"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1) avg"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "BST (balanced)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Heap"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1) min/max"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(log n)"
              })]
            }), "\n      ", (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "Stack/Queue"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(n)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1)"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "O(1)"
              })]
            }), "\n    "]
          })]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key insight"
          }), ": Understanding these complexities is essential for choosing the right data structure. Hash tables give fastest search but no ordering; BSTs give ordered data with logarithmic ops."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q8: What does it mean for an algorithm to be \"in-place\"? Give examples.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["An in-place algorithm uses ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "O(1) auxiliary space"
          }), " — it modifies the input data structure directly rather than creating a copy. It may still use O(log n) stack space for recursion."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "In-place examples"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Bubble sort — swaps adjacent elements"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Insertion sort — shifts elements in the array"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Quick sort (recursive) — partitions in place"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Heap sort — builds heap in the array"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Array reversal with two pointers"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Not in-place examples"
          }), ":"]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Merge sort — needs O(n) auxiliary array"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Counting sort — needs extra count arrays"
          }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
            children: "Most functional algorithms that create new data structures"
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# In-place — O(1) auxiliary space\ndef reverse_array(arr):\n    i, j = 0, len(arr) - 1\n    while i < j:\n        arr[i], arr[j] = arr[j], arr[i]\n        i += 1\n        j -= 1\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "not-in-place--on-auxiliary-space",
              children: "Not in-place — O(n) auxiliary space"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def reverse_array_copy(arr):\nreturn arr[::-1]  # Creates new list"
            })
          })]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q9: Explain the difference between best, average, and worst-case complexity.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Best case"
          }), ": Minimum time required for any input of size n. Often unrealistic but useful for understanding lower bounds."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Average case"
          }), ": Expected time over all possible inputs of size n. Requires knowing input distribution."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Worst case"
          }), ": Maximum time required for any input of size n. Most commonly used because it provides a guarantee."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsxs)(_components.code, {
            children: ["# Quick sort complexity\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "best-on-log-n--pivot-always-median",
              children: "Best: O(n log n) — pivot always median"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "average-on-log-n--random-pivot",
              children: "Average: O(n log n) — random pivot"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "worst-on--pivot-always-minmax-sorted-input-bad-pivot-selection",
              children: "Worst: O(n²) — pivot always min/max (sorted input, bad pivot selection)"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "linear-search-complexity",
              children: "Linear search complexity"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "best-ω1--target-is-first-element",
              children: "Best: Ω(1) — target is first element"
            }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
              id: "average-θn--target-is-somewhere-in-middle",
              children: "Average: Θ(n) — target is somewhere in middle"
            }), "\n"]
          }), (0,jsx_runtime.jsx)(_components.h2, {
            id: "worst-on--target-is-last-or-not-present",
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Worst: O(n) — target is last or not present"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<p><strong>Interview insight</strong>: When comparing algorithms, always compare worst-case guarantees. Quick sort's O(n²) worst case can be mitigated with random pivot selection.</p>\n"
          })
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa01-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q10: How do you compare two algorithms with different complexities for practical use?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Big-O comparison is asymptotic but practical considerations include:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Constant factors"
            }), ": An O(n²) algorithm with small constant can beat O(n log n) for small n"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Input size"
            }), ": For n < 100, O(n²) may be faster than O(n log n) due to overhead"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory constraints"
            }), ": An O(n) space algorithm may be unusable with limited memory"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache behavior"
            }), ": Sequential access patterns (arrays) are faster than random access (linked lists)"]
          }), "\n      ", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation complexity"
            }), ": Simple algorithms are easier to maintain and debug"]
          }), "\n    "]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["import time\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "def compare_sorting(n=1000):\nimport random\ndata1 = [random.randint(0, 10000) for _ in range(n)]\ndata2 = data1.copy()"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "# O(n²) insertion sort vs O(n log n) Timsort\n# For small n, insertion sort may be competitive\nstart = time.perf_counter()\ninsertion_sort(data1)\nt1 = time.perf_counter() - start\n\nstart = time.perf_counter()\nsorted(data2)  # Python's Timsort\nt2 = time.perf_counter() - start\n\nprint(f\"Insertion sort: {t1:.4f}s, Timsort: {t2:.4f}s\")</code></pre>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "? Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "?? Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-q11",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q11: What is the significance of log n in complexity analysis?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["log n appears when an algorithm ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "reduces the problem size by a constant factor"
            }), " at each step. It represents the number of times you can divide n by a constant before reaching 1."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why log n matters"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "log₂ 1,000,000 ≈ 20 — very efficient even for huge inputs"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "log₂ 1,000,000,000 ≈ 30 — barely grows with input size"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "It represents the depth of balanced trees, binary search iterations, divide-and-conquer recursion depth"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "# Number of times you can divide n by 2 before reaching = 1\ndef log_n_steps(n):\n    steps = 0\n    while n > 1:\n        n //= 2\n        steps += 1\n    return steps\n"
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "print(log_n_steps(1000000))  # 20\nprint(log_n_steps(10**12))   # 40"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Base of log doesn't matter"
            }), " for Big-O because log_a n = log_b n / log_b a, a constant factor."]
          }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "? Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "?? Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-q12",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q12: Explain why `2ⁿ` is considered intractable while `n²⁰⁰` is polynomial.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["For exponential growth (2n), each increment of n ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "doubles"
            }), " the work. For polynomial growth (n^k), each increment of n adds a fraction proportional to the previous work."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Comparison at n=1000"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "n² = 1,000,000 operations — feasible"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "n²⁰⁰ = 1000²⁰⁰ operations — astronomical but still polynomial"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "2ⁿ = 2¹⁰⁰⁰ operations — more than atoms in the universe"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["The key distinction is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "how complexity scales"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
            children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Polynomial: doubling n multiplies work by constant factor"
            }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
              children: "Exponential: adding 1 to n multiplies work by constant factor"
            }), "\n    "]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "This is why P ≠ NP matters — exponential algorithms are effectively unsolvable for any significant n."
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
            children: [(0,jsx_runtime.jsxs)(_components.code, {
              children: ["# Polynomial: n² — doubling n quadruples work\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "n100-10000-ops",
                children: "n=100: 10000 ops"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "n200-40000-ops-4x",
                children: "n=200: 40000 ops (4x)"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "exponential-2ⁿ--adding-1-doubles-work",
                children: "Exponential: 2ⁿ — adding 1 doubles work"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "n10-1024-ops",
                children: "n=10: 1024 ops"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "n11-2048-ops-2x",
                children: "n=11: 2048 ops (2x)"
              }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                id: "n20-1048576-ops",
                children: "n=20: 1,048,576 ops"
              }), "\n"]
            }), (0,jsx_runtime.jsx)(_components.h2, {
              id: "n30-1073741824-ops",
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "n=30: 1,073,741,824 ops"
              })
            })]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "? Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "?? Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "chapter-quiz",
        children: "Chapter Quiz"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q1"
        }), ": What is the time complexity of accessing the 5th element in an array?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-quiz1",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: a) O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Array access by index is always O(1) — direct memory addressing."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q2"
        }), ": What is the recurrence relation for merge sort?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) T(n) = T(n-1) + O(1)\nb) T(n) = 2T(n/2) + O(n)\nc) T(n) = 2T(n-1) + O(n)\nd) T(n) = T(n/2) + O(n)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-quiz2",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: b) T(n) = 2T(n/2) + O(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Merge sort divides into two equal halves (2T(n/2)) and merges in O(n) time."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q3"
        }), ": Which of these is NOT O(n²)?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) Nested loops where both go to n\nb) Matrix multiplication of n—n matrices\nc) Binary search on sorted array\nd) Bubble sort"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-quiz3",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: c) Binary search on sorted array"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "Binary search is O(log n), not O(n²)."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q4"
        }), ": What is the space complexity of an in-place algorithm?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) O(1) auxiliary space\nb) O(n) auxiliary space\nc) O(n²) auxiliary space\nd) O(log n) auxiliary space"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-quiz4",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: a) O(1) auxiliary space"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "In-place algorithms modify the input directly using only O(1) extra memory (discounting recursion stack)."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Q5"
        }), ": What is the amortized time complexity of appending to a dynamic array?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "a) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa01-quiz5",
        children: [(0,jsx_runtime.jsx)(_components.summary, {
          children: "Show Answer"
        }), (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: [(0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Answer: a) O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: "While individual appends may be O(n) during resize, the amortized cost across n appends is O(1)."
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "exercises",
        children: "Exercises"
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Easy"
        }), " — Write a function that takes a list of integers and returns its time complexity analysis (best, worst, average) for finding the maximum element."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium"
        }), " — Implement a function to find the kth smallest element in an unsorted array using quickselect. Analyze its time complexity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Medium"
        }), " — Write recurrence relations for the following functions and solve them using the Master Theorem: (a) T(n) = 3T(n/3) + n, (b) T(n) = 4T(n/2) + n², (c) T(n) = 2T(n/2) + √n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard"
        }), " — Implement a custom data structure that supports O(1) amortized append and O(1) pop from either end (deque). Prove the amortized bounds using the accounting method."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hard"
        }), " — Given an array of n integers, find the majority element (appears more than n/2 times) in O(n) time and O(1) space using Boyer-Moore voting algorithm. Explain why the algorithm works."]
      }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "common-mistakes",
        children: "Common Mistakes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Confusing Big-O with Big-Theta — Big-O is an upper bound, not an exact count; saying \"bubble sort is O(n)\" is wrong"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Ignoring constant factors for small inputs — O(n log n) is not always faster than O(n^2) for n < 50 due to overhead"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Forgetting to count auxiliary space — an algorithm creating a copy of the input uses O(n) space even if the loop is O(n)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Assuming all recursive algorithms are O(2^n) — binary search recurses but is O(log n) because it halves the problem"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mixing up amortized and worst-case — dynamic array append is O(1) amortized but O(n) worst-case; interviewers ask for both"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "revision-notes",
        children: "Revision Notes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Big-O = upper bound (worst case), Big-Omega = lower bound (best case), Big-Theta = tight bound (average when bounds match)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Growth rate hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(n^3) < O(2^n) < O(n!)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Single loop = O(n), nested loops = O(n^2), divide-by-2 loop = O(log n)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Recurrence relations solved with Master Theorem: T(n) = aT(n/b) + f(n)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Space complexity = auxiliary space + stack space (recursion depth)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In-place algorithms use O(1) auxiliary space; out-of-place create copies"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Amortized analysis averages expensive operations over sequences — dynamic array append = O(1) amortized"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "placement-section",
        children: "Placement Section"
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "top-10-interview-questions",
        children: "Top 10 Interview Questions"
      }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
        id: "google-style",
        children: "Google Style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Explain the core idea of Time and Space Complexity in under 60 seconds, then give a real-world analogy."
            }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Design a minimal, well-typed function that demonstrates Time and Space Complexity."
            }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
            children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
        id: "amazon-style",
        children: "Amazon Style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "4",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Describe a production bug caused by misunderstanding Time and Space Complexity. How did you diagnose and fix it?"
            }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How would you scale a system that relies on Time and Space Complexity from 10 users to 10 million?"
            }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
        id: "microsoft-style",
        children: "Microsoft Style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "6",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compare Time and Space Complexity with the closest alternative approach. When would you choose each?"
            }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Walk through how you would test a component that depends on Time and Space Complexity."
            }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
        id: "nvidia-style",
        children: "NVIDIA Style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "8",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How does Time and Space Complexity behave differently at scale — memory, throughput, or precision-wise?"
            }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "How would you make an implementation of Time and Space Complexity run faster on GPU hardware?"
            }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
        id: "ai-startup-style",
        children: "AI Startup Style"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        start: "10",
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Write the smallest possible implementation of Time and Space Complexity that is production-quality."
          }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "resume-tips",
        children: "Resume Tips"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Name Time and Space Complexity explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Time and Space Complexity\")."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add a bullet describing a project that applies Time and Space Complexity to real data, with numbers."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Mention the tools and libraries you used alongside Time and Space Complexity (linters, test frameworks, profiling tools)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep resume bullets under 15 words and start each with an action verb."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
        id: "interview-day-checklist",
        children: "Interview Day Checklist"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Rehearse a 60-second explanation of Time and Space Complexity and one real-world analogy."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Prepare one STAR story about debugging a Time and Space Complexity-related production issue."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Review complexity and edge cases for the classic Time and Space Complexity interview problem."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Have questions ready: how does the team apply Time and Space Complexity in production today?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "truefalse",
        children: "True/False"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " Time and Space Complexity builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " You should write at least one code example for Time and Space Complexity before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Active recall with hands-on code beats passive reading for retention."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " The complexity analysis for Time and Space Complexity is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False."
          }), " Complexity grows with input size; always state best, average, and worst case."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " Edge cases (empty input, invalid input, boundary values) matter for Time and Space Complexity in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "True."
          }), " Most production bugs come from unhandled edge cases."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "True or False:"
          }), " You should memorize the Time and Space Complexity chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "False."
          }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "fill-in-the-blank",
        children: "Fill in the Blank"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The chapter that covers Time and Space Complexity is Chapter ___ of this module. — Answer: check the module's table of contents."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The time complexity of the standard approach to Time and Space Complexity is ___. — Answer: review the theory section and state big-O notation."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The main edge case to handle when implementing Time and Space Complexity is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools commonly used to debug Time and Space Complexity issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The related topic that connects to Time and Space Complexity in the next chapter is ___. — Answer: see the Next Topic section."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "scenario-questions",
        children: "Scenario Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " A teammate ships a change involving Time and Space Complexity that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " Your implementation of Time and Space Complexity is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " A new hire asks you to explain Time and Space Complexity in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Scenario:"
            }), " Your team's codebase has three different patterns for Time and Space Complexity and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "output-questions",
        children: "Output Questions"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output of the simplest correct implementation of Time and Space Complexity on an empty input?"
          }), " — Trace through the code: it should return the documented default (None, 0, empty collection) without raising."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output when the input is at the boundary value?"
          }), " — Check off-by-one errors and inclusive/exclusive bounds in the chapter's examples."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What does the implementation return when given invalid input types?"
          }), " — With type hints and validation, it raises a clear error; without, it may fail silently."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the output for the sample input given in the chapter's Examples section?"
          }), " — Re-run the chapter's example code and compare against the documented output."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the time complexity output when you profile the implementation at 10x input size?"
          }), " — Expect the curve matching the chapter's complexity analysis (linear, quadratic, log-linear)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "difficulty-level",
        children: "Difficulty Level"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Level"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Time"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "What It Takes"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Beginner"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1-2 sessions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Read theory, run the chapter examples, solve the Easy exercises"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Intermediate"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "3-5 sessions"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Complete Medium exercises, explain Time and Space Complexity to someone else"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Advanced"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "1+ week"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "tips--tricks",
        children: "Tips & Tricks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Always write a one-line example of Time and Space Complexity from memory before opening the chapter — active recall first."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Use the chapter's Revision Notes as a checklist: you have mastered Time and Space Complexity when you can explain each bullet."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For interviews, practice explaining Time and Space Complexity twice: once with a technical audience, once with a non-technical audience."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keep a personal examples file where you collect your own Time and Space Complexity snippets; interviewers love original examples."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "memory-tricks",
        children: "Memory Tricks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Acronym"
          }), ": build a mnemonic from the 5 key concepts of Time and Space Complexity listed in the Chapter at a Glance table."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Story"
          }), ": link Time and Space Complexity to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Number anchor"
          }), ": remember the complexity of Time and Space Complexity by connecting it to a known algorithm of the same class."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Color code"
          }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Teach-back"
          }), ": explain Time and Space Complexity to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "further-reading",
        children: "Further Reading"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Official documentation for the primary tool or library used in this chapter"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The chapter referenced in Related Topics for the next-level treatment of Time and Space Complexity"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The classic textbook chapter on Time and Space Complexity (check the Research References below)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Two blog posts from engineers who debugged real Time and Space Complexity problems in production"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The repository of the open-source project that implements Time and Space Complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "related-topics",
        children: "Related Topics"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The previous chapter in this module (see table of contents) — foundational for Time and Space Complexity"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The next chapter (see Next Topic below) — builds on Time and Space Complexity"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The system design chapters in Module 07 — how Time and Space Complexity fits into production architectures"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The interview preparation module — how Time and Space Complexity is asked in screening rounds"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The capstone project — where Time and Space Complexity is applied end-to-end"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "faqs",
        children: "FAQs"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Do I need to memorize all of Time and Space Complexity, or understand the big picture?"
          }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What if I get stuck on an exercise?"
          }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Is Time and Space Complexity asked in interviews?"
          }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "important-notes",
        children: "Important Notes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Time and Space Complexity is a core requirement for the rest of this module — do not skip the examples."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Always analyze complexity (time and space) when working with Time and Space Complexity."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Production correctness means handling edge cases, not just the happy path."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interview answers should start with the definition, then the example, then the trade-offs."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "historical-context",
        children: "Historical Context"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Time and Space Complexity emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The tools used for Time and Space Complexity today evolved from simpler versions; the chapter covers the modern, recommended approach."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interviewers value knowing one historical fact about Time and Space Complexity — it shows genuine interest, not just cramming."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The library/tooling ecosystem around Time and Space Complexity changes quickly; focus on fundamentals that remain stable."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "security-considerations",
        children: "Security Considerations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Never trust external input: validate and sanitize data before processing Time and Space Complexity."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eval()"
          }), " and dynamic code execution on untrusted strings."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For API contexts, add rate limiting and input size limits."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "ml-intuition",
        children: "ML Intuition"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Time and Space Complexity appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Understanding Time and Space Complexity helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "In production ML, the Time and Space Complexity concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When optimizing ML systems, Time and Space Complexity skills let you profile and fix the data path, not just the training loop."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Interview follow-up: how would you apply Time and Space Complexity to a dataset of 10 million records? — Batching and vectorization."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "analogies",
        children: "Analogies"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time and Space Complexity is like a recipe"
          }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a delivery route"
          }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like weather"
          }), ": the happy path is a sunny day; production is the storm — build for the storm."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a journey map"
          }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "capstone-project-link",
        children: "Capstone Project Link"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the Time and Space Complexity skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "flashcards",
        children: "Flashcards"
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "03datastructuresalgorithms-01timeandspacecomplexity-flash1",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the time complexity of accessing the 5th element in an array?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) O(1)"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "03datastructuresalgorithms-01timeandspacecomplexity-flash2",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the recurrence relation for merge sort?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "b) T(n) = 2T(n/2) + O(n)"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "03datastructuresalgorithms-01timeandspacecomplexity-flash3",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Which of these is NOT O(n²)?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "c) Binary search on sorted array"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "03datastructuresalgorithms-01timeandspacecomplexity-flash4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the space complexity of an in-place algorithm?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) O(1) auxiliary space"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "03datastructuresalgorithms-01timeandspacecomplexity-flash5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    What is the amortized time complexity of appending to a dynamic array?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
            children: "a) O(1)"
          }), "\n  "]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "research-references",
        children: "Research References"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Official documentation of the primary library for Time and Space Complexity (linked in Further Reading)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The classic paper or textbook chapter introducing Time and Space Complexity (see References below)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The standard library reference for Time and Space Complexity-related functions"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Engineering blog posts from companies running Time and Space Complexity in production at scale"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "PEPs and RFCs where applicable (Python and networking standards)"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "open-source-tools",
        children: "Open-Source Tools"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The primary library used in this chapter (see the code examples)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Python standard library modules used in the examples (check the imports)"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Testing: pytest for unit tests of Time and Space Complexity code"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Linting and formatting: ruff + black"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Profiling: cProfile or py-spy for performance work on Time and Space Complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "debugging-guide",
        children: "Debugging Guide"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "print()"
          }), " or a debugger to inspect intermediate values in Time and Space Complexity code."]
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Reproduce the failure with the smallest possible input before changing code."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "For performance problems, profile before optimizing: measure, then fix."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "pdb"
          }), " or your IDE's debugger to step through the Time and Space Complexity example code."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "mock-interview-section",
        children: "Mock Interview Section"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Round 1 — Screening (15 min)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Explain Time and Space Complexity in 60 seconds."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Write a minimal working example of Time and Space Complexity."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What is the complexity of your example?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Round 2 — Coding (45 min)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Solve the Medium exercise from this chapter under time pressure."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "State your assumptions, then implement with type hints."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Test with edge cases: empty input, boundary values, invalid input."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Round 3 — Behavioral + System (30 min)"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Tell me about a time you debugged a Time and Space Complexity problem in a project."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "How would you design a system where Time and Space Complexity is used at scale?"
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "What metrics would you monitor?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluation rubric"
        }), ": correctness (40%), communication (25%), edge cases (20%), complexity analysis (15%)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "optimized-implementation",
        children: "Optimized Implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`python\nfrom typing import Any, Optional"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Time and Space Complexity."
      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Time and Space Complexity logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "`"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Keeps the function signature stable so tests written against it stay valid."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Handles the empty-input contract explicitly."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Add unit tests for the edge cases before implementing the logic (test-first)."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "evaluation-metrics",
        children: "Evaluation Metrics"
      }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
        children: [(0,jsx_runtime.jsx)(_components.thead, {
          children: (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.th, {
              children: "Skill"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Test"
            }), (0,jsx_runtime.jsx)(_components.th, {
              children: "Target"
            })]
          })
        }), (0,jsx_runtime.jsxs)(_components.tbody, {
          children: [(0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Concept recall"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Explain Time and Space Complexity without notes"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "60-second explanation"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Code fluency"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Write the chapter example from memory"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "No syntax errors"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Edge cases"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Handle empty/invalid input in exercises"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "All cases pass"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Complexity"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "State time/space for the standard approach"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Correct big-O"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Interview readiness"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Answer 5 Interview Q&A questions out loud"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Fluent, structured answers"
            })]
          }), (0,jsx_runtime.jsxs)(_components.tr, {
            children: [(0,jsx_runtime.jsx)(_components.td, {
              children: "Retention"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "Chapter quiz score after 3 days"
            }), (0,jsx_runtime.jsx)(_components.td, {
              children: "80%+"
            })]
          })]
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "real-world-examples",
        children: "Real-World Examples"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Startup"
          }), ": a small team uses Time and Space Complexity daily in their data pipeline — the chapter's examples mirror their code."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "E-commerce"
          }), ": Time and Space Complexity patterns appear in order processing, inventory checks, and recommendation feeds."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fintech"
          }), ": Time and Space Complexity principles apply to transaction validation and fraud detection flows."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "ML platform"
          }), ": Time and Space Complexity shows up in feature engineering and model-serving infrastructure."]
        }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview insight"
          }), ": recruiters look for engineers who can connect Time and Space Complexity to the business outcome, not just the code."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "next-topic",
        children: "Next Topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.p, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/02-arrays",
          children: "Arrays"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
        id: "limitations",
        children: "Limitations"
      }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Time and Space Complexity, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "Performance of Time and Space Complexity depends on input size and distribution — always benchmark for your own data."
        }), "\n", (0,jsx_runtime.jsx)(_components.li, {
          children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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