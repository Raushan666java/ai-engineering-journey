"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[12741],{

/***/ 52976
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_05_loops_md_12a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-05-loops-md-12a.json
const site_docs_courses_c_programming_05_loops_md_12a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/05-loops","title":"Chapter 5: Loops (Comprehensive)","description":"Previous Arrays","source":"@site/docs/courses/c-programming/05-loops.md","sourceDirName":"courses/c-programming","slug":"/c-programming/05-loops","permalink":"/ai-engineering-journey/c-programming/05-loops","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-loops","slug":"/c-programming/05-loops","title":"Chapter 5: Loops (Comprehensive)","sidebar_label":"Chapter 5: Loops (Comprehensive)","sidebar_position":5},"sidebar":"course-c-programming","previous":{"title":"Chapter 4: Control Flow","permalink":"/ai-engineering-journey/c-programming/04-control-flow"},"next":{"title":"Chapter 6: Arrays","permalink":"/ai-engineering-journey/c-programming/06-arrays"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/05-loops.md


const frontMatter = {
	id: '05-loops',
	slug: '/c-programming/05-loops',
	title: 'Chapter 5: Loops (Comprehensive)',
	sidebar_label: 'Chapter 5: Loops (Comprehensive)',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Loops (Comprehensive)';

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
  "level": 3
}, {
  "value": "5.1 The <code>for</code> Loop",
  "id": "51-the-for-loop",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "5.2 The <code>while</code> Loop",
  "id": "52-the-while-loop",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-1",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-1",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-1",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "5.3 The <code>do-while</code> Loop",
  "id": "53-the-do-while-loop",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-2",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-2",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-2",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "5.4 Loop Control: <code>break</code>, <code>continue</code>, and <code>goto</code>",
  "id": "54-loop-control-break-continue-and-goto",
  "level": 2
}, {
  "value": "5.4.1 <code>break</code>",
  "id": "541-break",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-3",
  "level": 4
}, {
  "value": "C Examples",
  "id": "c-examples",
  "level": 4
}, {
  "value": "5.4.2 <code>continue</code>",
  "id": "542-continue",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-4",
  "level": 4
}, {
  "value": "C Examples",
  "id": "c-examples-1",
  "level": 4
}, {
  "value": "continue in for vs while",
  "id": "continue-in-for-vs-while",
  "level": 4
}, {
  "value": "5.4.3 <code>goto</code>",
  "id": "543-goto",
  "level": 3
}, {
  "value": "C Example: Breaking out of nested loops",
  "id": "c-example-breaking-out-of-nested-loops",
  "level": 4
}, {
  "value": "5.4.4 <code>break</code> vs <code>continue</code> vs <code>goto</code> Comparison",
  "id": "544-break-vs-continue-vs-goto-comparison",
  "level": 3
}, {
  "value": "5.5 Nested Loops",
  "id": "55-nested-loops",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Syntax Pattern",
  "id": "syntax-pattern",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run Trace Table",
  "id": "dry-run-trace-table-5",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-3",
  "level": 3
}, {
  "value": "Complexity Analysis of Nested Loops",
  "id": "complexity-analysis-of-nested-loops",
  "level": 3
}, {
  "value": "Why Dependent Inner Loops Are Still O(n²)",
  "id": "why-dependent-inner-loops-are-still-on",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "5.6 Infinite Loops",
  "id": "56-infinite-loops",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Intentional Infinite Loops",
  "id": "intentional-infinite-loops",
  "level": 3
}, {
  "value": "Unintentional Infinite Loops (Bugs)",
  "id": "unintentional-infinite-loops-bugs",
  "level": 3
}, {
  "value": "Infinite Loop Use Cases",
  "id": "infinite-loop-use-cases",
  "level": 3
}, {
  "value": "How to Stop Infinite Loops",
  "id": "how-to-stop-infinite-loops",
  "level": 3
}, {
  "value": "Well-Designed Infinite Loop with Exit Path",
  "id": "well-designed-infinite-loop-with-exit-path",
  "level": 3
}, {
  "value": "5.7 Loop Comparison",
  "id": "57-loop-comparison",
  "level": 2
}, {
  "value": "5.7.1 <code>for</code> vs <code>while</code> vs <code>do-while</code> Comparison",
  "id": "571-for-vs-while-vs-do-while-comparison",
  "level": 3
}, {
  "value": "5.7.2 Entry-Controlled vs Exit-Controlled",
  "id": "572-entry-controlled-vs-exit-controlled",
  "level": 3
}, {
  "value": "5.7.3 Loop Selection Guide",
  "id": "573-loop-selection-guide",
  "level": 3
}, {
  "value": "5.7.4 Complexity Comparison",
  "id": "574-complexity-comparison",
  "level": 3
}, {
  "value": "5.8 Common Loop Patterns",
  "id": "58-common-loop-patterns",
  "level": 2
}, {
  "value": "Summation",
  "id": "summation",
  "level": 3
}, {
  "value": "Factorial",
  "id": "factorial",
  "level": 3
}, {
  "value": "Counting",
  "id": "counting",
  "level": 3
}, {
  "value": "Searching (linear search)",
  "id": "searching-linear-search",
  "level": 3
}, {
  "value": "Finding maximum",
  "id": "finding-maximum",
  "level": 3
}, {
  "value": "Input Validation Loop",
  "id": "input-validation-loop",
  "level": 3
}, {
  "value": "Sentinel-controlled loop",
  "id": "sentinel-controlled-loop",
  "level": 3
}, {
  "value": "Flag-controlled loop",
  "id": "flag-controlled-loop",
  "level": 3
}, {
  "value": "Pointer iteration",
  "id": "pointer-iteration",
  "level": 3
}, {
  "value": "Fibonacci sequence",
  "id": "fibonacci-sequence",
  "level": 3
}, {
  "value": "GCD using Euclid&#39;s algorithm",
  "id": "gcd-using-euclids-algorithm",
  "level": 3
}, {
  "value": "5.9 Interview Corner",
  "id": "59-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between <code>for</code> and <code>while</code> in C?",
  "id": "q1-what-is-the-difference-between-for-and-while-in-c",
  "level": 3
}, {
  "value": "Q2: Which loop should you use when?",
  "id": "q2-which-loop-should-you-use-when",
  "level": 3
}, {
  "value": "Q3: How do you write an idiomatic infinite loop in C?",
  "id": "q3-how-do-you-write-an-idiomatic-infinite-loop-in-c",
  "level": 3
}, {
  "value": "Q4: How can you optimize nested loops?",
  "id": "q4-how-can-you-optimize-nested-loops",
  "level": 3
}, {
  "value": "Q5: What is loop unrolling?",
  "id": "q5-what-is-loop-unrolling",
  "level": 3
}, {
  "value": "Q6: How do you break out of multiple nested loops?",
  "id": "q6-how-do-you-break-out-of-multiple-nested-loops",
  "level": 3
}, {
  "value": "Q7: What is the time complexity of three nested loops each running n times? Why O(n³)?",
  "id": "q7-what-is-the-time-complexity-of-three-nested-loops-each-running-n-times-why-on",
  "level": 3
}, {
  "value": "5.10 Applications in Real Systems",
  "id": "510-applications-in-real-systems",
  "level": 2
}, {
  "value": "Embedded Microcontroller Main Loop (Super Loop)",
  "id": "embedded-microcontroller-main-loop-super-loop",
  "level": 3
}, {
  "value": "Event-Driven System",
  "id": "event-driven-system",
  "level": 3
}, {
  "value": "Finite State Machine Loop",
  "id": "finite-state-machine-loop",
  "level": 3
}, {
  "value": "Producer-Consumer Loop",
  "id": "producer-consumer-loop",
  "level": 3
}, {
  "value": "Network Server Accept Loop",
  "id": "network-server-accept-loop",
  "level": 3
}, {
  "value": "5.11 Common Mistakes and Debugging Tips",
  "id": "511-common-mistakes-and-debugging-tips",
  "level": 2
}, {
  "value": "5.12 Concept Comparison Tables",
  "id": "512-concept-comparison-tables",
  "level": 2
}, {
  "value": "Loop Type Overview",
  "id": "loop-type-overview",
  "level": 3
}, {
  "value": "break vs continue vs goto",
  "id": "break-vs-continue-vs-goto",
  "level": 3
}, {
  "value": "Entry-Controlled vs Exit-Controlled",
  "id": "entry-controlled-vs-exit-controlled",
  "level": 3
}, {
  "value": "Infinite Loop Patterns",
  "id": "infinite-loop-patterns",
  "level": 3
}, {
  "value": "Edge Cases Summary",
  "id": "edge-cases-summary",
  "level": 3
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
  "value": "Summary",
  "id": "summary",
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
        id: "chapter-5-loops-comprehensive",
        children: "Chapter 5: Loops (Comprehensive)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/04-control-flow",
          children: "Control Flow"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/06-arrays",
          children: "Arrays"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write iterative code using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), " loops"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose the appropriate loop construct for a given problem"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control loop execution with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct nested loops and analyze their complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid common loop errors including off-by-one and infinite loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand infinite loop use cases in embedded and event-driven systems"
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
        href: "../../assets/images/lessons/c-programming/05-loops/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/05-loops/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/05-loops/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/05-loops/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/05-loops/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/05-loops/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "for Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterate with init, condition, and increment in one line"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), " when the number of iterations is known"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "while Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeat while a condition holds"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), " when iterating until a condition changes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "do-while Loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executes body at least once before checking condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use when the body must run before the first check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "break, continue, goto"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " exits the loop; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            }), " skips an iteration; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            }), " jumps anywhere"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " exits the innermost loop only"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loops inside loops for multi-dimensional traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner loops reset completely on each outer iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite Loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loops that run indefinitely"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while(1)"
            }), " is idiomatic for embedded event loops"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"5.1 for Loop\"] --> B[\"5.2 while Loop\"]\n    B --> C[\"5.3 do-while Loop\"]\n    C --> D[\"5.4 Loop Control\"]\n    D --> E[\"5.5 Nested Loops\"]\n    E --> F[\"5.6 Infinite Loops\"]\n    F --> G[\"5.7 Loop Comparison\"]\n    G --> H[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "51-the-for-loop",
      children: ["5.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " Loop"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop is like running laps around a track: you know exactly how many laps you need to run before you start. The coach says \"run 5 laps\" — you initialize your lap counter to 0, check if you've reached 5, run one lap, increment the counter, and repeat until done."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Track Analogy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code Equivalent"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start at lap counter = 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int lap = 0;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check if lap count < 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lap < 5"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run one lap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Lap %d\\n\", lap);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment lap counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "lap++"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Go back to step 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(automatic in for loop)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (initialization; condition; update) {\n    /* loop body */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Initialization"
        }), " runs once before the loop begins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Condition"
        }), " is evaluated ", (0,jsx_runtime.jsx)(_components.em, {
          children: "before"
        }), " each iteration. If false (zero), the loop exits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Loop body"
        }), " executes if the condition is true (non-zero)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Update"
        }), " runs ", (0,jsx_runtime.jsx)(_components.em, {
          children: "after"
        }), " each iteration, then go to step 2."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INPUT n\nSET i = 0\nWHILE i < n:\n    PRINT i\n    i = i + 1\nEND WHILE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int sum = 0;\nfor (int i = 1; i <= 3; i++) {\n    sum = sum + i;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i (before check)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i <= 3"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum (after body)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i++ (after update)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (init)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(init: i = 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum = 0 + 1 = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i becomes 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum = 1 + 2 = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i becomes 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sum = 3 + 3 = 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i becomes 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false (exit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " sum = 6, loop executed 3 times."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Counting 1 to 5"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 5; i++) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Decrementing loop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 10; i >= 1; i--) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 9 8 7 6 5 4 3 2 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Stepping by 2"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 0; i <= 10; i += 2) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 2 4 6 8 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4: Multiple variables"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 0, j = 10; i < j; i++, j--) {\n        printf(\"i=%d j=%d\\n\", i, j);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "i=0 j=10\ni=1 j=9\ni=2 j=8\ni=3 j=7\ni=4 j=6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5: Empty initialization (variable already set)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int i = 5;\n    for (; i > 0; i--) {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5 4 3 2 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 6: Empty condition (infinite loop with break)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int i = 0;\n    for (;;) {\n        if (i >= 5) break;\n        printf(\"%d \", i);\n        i++;\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 1 2 3 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) — the loop body executes n times. Each iteration does O(1) work."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — only a single loop counter variable is needed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " The number of iterations is directly proportional to the loop bound. If the bound doubles, runtime doubles. This is linear time because each iteration introduces constant overhead (condition check, update, body execution). The total work = n × (cost of condition + cost of body + cost of update)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages",
      children: "Advantages & Disadvantages"
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
            children: "Compact — init, condition, update in one line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be overkill for simple conditions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Self-documenting iteration count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex expressions hurt readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Loop variable scoped to loop (C99+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot easily skip or rearrange clauses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for array traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for unknown iteration counts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple variables supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero iterations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i < 0; i++)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body never executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition false on first check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Off-by-one (too few)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i < n; i++)"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i <= n-1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs n times"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "< n"
            }), " gives n iterations starting from 0"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Off-by-one (too many)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i <= n; i++)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs n+1 times"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<= n"
            }), " gives one extra iteration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite (wrong direction)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i < 10; i--)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never terminates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decrementing when condition expects increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i < 5; i++);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs 5 times with no work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon creates empty statement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Condition side effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i++ < 5;)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs 6 times?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-increment in condition modifies i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Float counter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (float f = 0; f != 1.0; f += 0.1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May never terminate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point precision causes drift"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "52-the-while-loop",
      children: ["5.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " Loop"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop is like checking your phone for a ride arrival: \"While the Uber has not arrived, keep checking.\" You don't know how many times you'll check — you keep doing it until the condition (arrival) changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-1",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "while (condition) {\n    /* loop body */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-1",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the condition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the condition is true (non-zero), execute the loop body."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After the body, go back to step 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the condition is false (zero), exit the loop."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INPUT n\nWHILE n > 0:\n    PRINT n\n    n = n - 1\nEND WHILE\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-1",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int n = 3;\nwhile (n > 0) {\n    printf(\"%d \", n);\n    n--;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n (before check)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n > 0"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "body executes?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n (after n--)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(exit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "no"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " Output: \"3 2 1 \", 3 iterations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-1",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Countdown"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int count = 5;\n    while (count >= 1) {\n        printf(\"%d \", count);\n        count--;\n    }\n    printf(\"Liftoff!\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "5 4 3 2 1 Liftoff!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Reading until EOF"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int ch;\n    int line_count = 0;\n    while ((ch = getchar()) != EOF) {\n        if (ch == '\\n') line_count++;\n    }\n    printf(\"Line count: %d\\n\", line_count);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Sum of digits"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int num = 1234;\n    int sum = 0;\n    while (num > 0) {\n        sum += num % 10;\n        num /= 10;\n    }\n    printf(\"Sum of digits: %d\\n\", sum);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum of digits: 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4: Linked list traversal"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nstruct Node {\n    int data;\n    struct Node *next;\n};\n\nvoid printList(struct Node *head) {\n    while (head != NULL) {\n        printf(\"%d -> \", head->data);\n        head = head->next;\n    }\n    printf(\"NULL\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 5: Power calculation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int base = 2, exp = 5;\n    int result = 1;\n    while (exp > 0) {\n        result *= base;\n        exp--;\n    }\n    printf(\"2^5 = %d\\n\", result);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "2^5 = 32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) — the loop runs as many times as the condition allows, typically proportional to input size n."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — no extra space proportional to input."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " Each iteration processes one element of input (one digit, one character, one node). The number of iterations equals the number of elements to process. The condition evaluation and body together do constant work per iteration."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-1",
      children: "Advantages & Disadvantages"
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
            children: "Best for unknown iteration counts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier to create infinite loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clean for I/O and sentinel patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update variable can be forgotten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "One condition, no boilerplate"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["More verbose than ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), " for counted loops"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for pointer/iterator traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update logic can be scattered in body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easier to read for state-driven loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Condition false initially"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (0) { ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body never executes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition checked before first iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing update"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int i = 0; while (i < 5) { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i never changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semicolon after condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (i < 5); { i++; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty body infinite loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Loop body is ", (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            }), ", block is outside"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side-effect condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (i++ < 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Post-increment in condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition uses and then increments i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment vs equality"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (x = 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always true (non-zero)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assignment ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " instead of comparison ", (0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty body style"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (*p++ != '\\0');"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Advances pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful idiom for finding string end"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "53-the-do-while-loop",
      children: ["5.3 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do-while"
      }), " Loop"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do-while"
      }), " loop is like ordering at a restaurant: \"Here is the menu — order your food, then we'll ask if you want to order more.\" You always order at least once, then decide if you want more after each order."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-2",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "do {\n    /* loop body */\n} while (condition);   /* <-- note the semicolon! */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-2",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute the loop body once."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After the body, evaluate the condition."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the condition is true (non-zero), go back to step 1."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If false (zero), exit."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "REPEAT:\n    PROMPT user for input\n    PROCESS input\nUNTIL input == quit_signal\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-2",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int num;\nint sum = 0;\ndo {\n    printf(\"Enter number (0 to quit): \");\n    scanf(\"%d\", &num);\n    sum += num;\n} while (num != 0);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (user enters 5, 3, 0):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "num (before body)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "sum (after body)"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "num != 0"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(uninitialized)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 + 5 = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (5 != 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 + 3 = 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (3 != 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 + 0 = 8"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (0 == 0, exit)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final:"
      }), " sum = 8, 3 iterations. Note: the 0 is still added to sum before the condition rejects it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-2",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Menu-driven program"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int choice;\n    do {\n        printf(\"\\nMenu:\\n\");\n        printf(\"1. Add\\n\");\n        printf(\"2. Subtract\\n\");\n        printf(\"3. Quit\\n\");\n        printf(\"Enter choice: \");\n        scanf(\"%d\", &choice);\n\n        switch (choice) {\n            case 1: printf(\"Adding...\\n\"); break;\n            case 2: printf(\"Subtracting...\\n\"); break;\n            case 3: printf(\"Goodbye!\\n\"); break;\n            default: printf(\"Invalid choice.\\n\");\n        }\n    } while (choice != 3);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Number guessing game"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int secret = 42;\n    int guess;\n    do {\n        printf(\"Guess the number: \");\n        scanf(\"%d\", &guess);\n        if (guess < secret)\n            printf(\"Too low!\\n\");\n        else if (guess > secret)\n            printf(\"Too high!\\n\");\n    } while (guess != secret);\n    printf(\"Correct!\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Input validation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int age;\n    do {\n        printf(\"Enter your age (0-150): \");\n        scanf(\"%d\", &age);\n    } while (age < 0 || age > 150);\n    printf(\"Age %d accepted.\\n\", age);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (user enters -5, 200, 25):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Enter your age (0-150): -5\nEnter your age (0-150): 200\nEnter your age (0-150): 25\nAge 25 accepted.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4: Reversing digits of a number"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int num = 1234;\n    int reversed = 0;\n    do {\n        reversed = reversed * 10 + num % 10;\n        num /= 10;\n    } while (num > 0);\n    printf(\"Reversed: %d\\n\", reversed);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Reversed: 4321\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time:"
        }), " O(n) — the body executes n times (at least once). Each iteration is O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space:"
        }), " O(1) — only loop variables and input."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do-while"
      }), " has the same time complexity class as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), ". The \"at least once\" guarantee does not change the asymptotic behavior — it only shifts the minimum from 0 to 1. For large n, the +1 is negligible."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Guarantees at least one execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less common, can confuse readers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural for menu/input validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition at bottom is less visible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaner than flag-then-while patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body always runs even if condition would be false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Avoids duplicate code before loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon required after condition (easy to forget)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Condition always false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { ... } while (0);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body executes exactly once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition checked after body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing semicolon"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { ... } while (cond)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while(cond);"
            }), " requires trailing semicolon"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero iterations"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum is 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            }), " always runs at least once"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side-effect condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (x++ < 5);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x increments in condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated after each body execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Infinite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (1);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never terminates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition always true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "54-loop-control-break-continue-and-goto",
      children: ["5.4 Loop Control: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "541-break",
      children: ["5.4.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're searching a bookshelf for a specific book. \"Break\" means you stop searching as soon as you find it — no need to check the remaining books."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      }), " Exits the innermost loop (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), ") immediately. Control transfers to the statement after the loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-3",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (int i = 1; i <= 10; i++) {\n    if (i == 5) break;\n    printf(\"%d \", i);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["condition ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i == 5"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Print"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"1 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"2 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"3 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"4 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "break (exit loop)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3 4 "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-examples",
      children: "C Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Early exit on found"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int arr[] = {3, 7, 1, 9, 4, 6, 8};\n    int target = 9;\n    int found = -1;\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    for (int i = 0; i < n; i++) {\n        if (arr[i] == target) {\n            found = i;\n            break;\n        }\n    }\n\n    if (found != -1)\n        printf(\"Found %d at index %d\\n\", target, found);\n    else\n        printf(\"Not found\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Found 9 at index 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: break in nested loops (breaks only innermost)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 3; i++) {\n        for (int j = 1; j <= 3; j++) {\n            if (i == 2 && j == 2) break;\n            printf(\"(%d,%d) \", i, j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(1,1) (1,2) (1,3)\n(2,1)\n(3,1) (3,2) (3,3)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Only the inner loop breaks when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i==2 && j==2"
      }), ". The outer loop continues normally."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "542-continue",
      children: ["5.4.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You're checking items off a shopping list. If an item is out of stock, you skip it and move to the next item — you don't abandon the entire trip."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      }), " Skips the rest of the current iteration and proceeds to the next iteration (condition check for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "do-while"
      }), ", update step for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-trace-table-4",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) continue;\n    printf(\"%d \", i);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (for loop behavior):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i (before check)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i % 2 == 0?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i++ after"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"1 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue (skip print, go to i++)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"3 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"5 \""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(exit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false (6 <= 5 false)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 3 5 "
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-examples-1",
      children: "C Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Skip multiples of 3"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 10; i++) {\n        if (i % 3 == 0) continue;\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 4 5 7 8 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: continue in while loop — update BEFORE continue"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int i = 0;\n    while (i < 10) {\n        if (i % 2 == 0) {\n            i++;       /* update BEFORE continue! */\n            continue;\n        }\n        printf(\"%d \", i);\n        i++;\n    }\n    printf(\"\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1 3 5 7 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " In ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loops, if you skip the update with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), ", you get an infinite loop."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "continue-in-for-vs-while",
      children: "continue in for vs while"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "for loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "while loop"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update clause runs automatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must manually update before continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (update in header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (update can be skipped)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Idiomatic use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip values freely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update before continue is a pattern"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "543-goto",
      children: ["5.4.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " An emergency exit in a building — you use it only in exceptional circumstances to get out immediately, not for normal traffic flow."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      }), " Unconditionally jumps to a labeled statement in the same function."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "goto label;\n...\nlabel:\n    /* code */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-example-breaking-out-of-nested-loops",
      children: "C Example: Breaking out of nested loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int target = 5;\n    int found_i = -1, found_j = -1;\n\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            if (matrix[i][j] == target) {\n                found_i = i;\n                found_j = j;\n                goto found;   /* exits ALL loops at once */\n            }\n        }\n    }\n\nfound:\n    if (found_i != -1)\n        printf(\"Found %d at [%d][%d]\\n\", target, found_i, found_j);\n    else\n        printf(\"Not found\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Found 5 at [1][1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " only exits the innermost loop. To exit multiple levels of nesting, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " is the cleanest C solution (other options are flags or refactoring into a function)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "544-break-vs-continue-vs-goto-comparison",
      children: ["5.4.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits innermost loop/switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips to next iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to arbitrary label"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current loop only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current iteration only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anywhere in function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits only innermost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips only innermost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can exit ALL levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (spaghetti code risk)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit on found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skipping values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaking deep nesting, error cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can jump into loop?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (dangerous)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can jump out of loop?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (one level)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (any depth)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Recommended?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely (only for deep break or cleanup)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Effect on update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (exit immediately)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs update (for) or checks condition (while)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (jump bypasses everything)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "55-nested-loops",
      children: "5.5 Nested Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A clock: the minute hand (inner loop) completes 60 ticks for each tick of the hour hand (outer loop). If you print a schedule, for each student (outer) you print all their courses (inner)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-pattern",
      children: "Syntax Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (outer initialization; outer condition; outer update) {\n    for (inner initialization; inner condition; inner update) {\n        /* inner body */\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-3",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer loop initialization (once)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer condition check — if false, exit entirely."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inner loop initialization."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inner condition check — if false, go to step 7."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute inner body."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Inner update, go to step 4."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Outer update, go to step 2."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FOR i = 1 TO n:\n    FOR j = 1 TO m:\n        PRINT i, j\n    NEXT j\n    PRINT newline\nNEXT i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table-5",
      children: "Dry Run Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (int i = 1; i <= 3; i++) {\n    for (int j = 1; j <= 2; j++) {\n        printf(\"(%d,%d) \", i, j);\n    }\n    printf(\"\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Outer i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Inner j init"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i loop condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "j loop condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Print"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After inner update"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After outer update"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(1,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (exit inner)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (exit inner)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true (enter)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(3,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "j = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (exit inner)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(exit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (i=4, 4 <= 3 false)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(1,1) (1,2)\n(2,1) (2,2)\n(3,1) (3,2)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total iterations: 3 (outer) x 2 (inner) = 6."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-3",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Multiplication table"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 10; i++) {\n        for (int j = 1; j <= 10; j++) {\n            printf(\"%4d\", i * j);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (first few rows):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   1   2   3   4   5   6   7   8   9  10\n   2   4   6   8  10  12  14  16  18  20\n   3   6   9  12  15  18  21  24  27  30\n...\n  10  20  30  40  50  60  70  80  90 100\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Triangle pattern (dependent inner bound)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"* \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "*\n* *\n* * *\n* * * *\n* * * * *\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Matrix addition (parallel nested loops)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int a[2][2] = {{1,2},{3,4}};\n    int b[2][2] = {{5,6},{7,8}};\n    int c[2][2];\n\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 2; j++) {\n            c[i][j] = a[i][j] + b[i][j];\n            printf(\"%4d\", c[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "   6   8\n  10  12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 4: Printing a rectangle"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int rows = 4, cols = 6;\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            printf(\"# \");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "# # # # # #\n# # # # # #\n# # # # # #\n# # # # # #\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-nested-loops",
      children: "Complexity Analysis of Nested Loops"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Nesting Depth"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 levels, independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for i in 0..n: for j in 0..m:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × m)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix traversal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 levels, dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for i in 0..n: for j in 0..i:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 levels, equal bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for i in 0..n: for j in 0..n:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3 levels, equal bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for i in 0..n: for j in 0..n: for k in 0..n:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n³)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2 levels, data-dependent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for each node: for each neighbor:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n × d)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Graph adjacency"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n²) for double nested?"
      }), " If outer runs n times and inner runs m times, total operations = n × m. When n == m, this is n². Doubling n quadruples the work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-dependent-inner-loops-are-still-on",
      children: "Why Dependent Inner Loops Are Still O(n²)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (i=0; i<n; i++) for (j=0; j<i; j++)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Total iterations = 0 + 1 + 2 + ... + (n-1) = n(n-1)/2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This is (n² - n)/2 → O(n²)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The constant factor (×½) doesn't change the complexity class. For n = 1000, n²/2 = 500,000 vs n² = 1,000,000 — both are O(n²)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Natural for multi-dimensional data processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity grows multiplicatively"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Powerful for patterns and geometric output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard to debug (many iterations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaner than flattening into single loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " only exits one level"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible inner loop bounds (can depend on outer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache performance issues (row vs column access)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty outer loop body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner loop never runs (outer condition false from start)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty inner loop bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner loop never runs (e.g., j < 0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Break inside inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits only inner; outer continues unaffected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continue inside inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips to next inner iteration (not outer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Outer i, inner uses i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner loop depends on outer value — dynamic bound"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifying outer variable inside inner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Changes outer loop behavior (usually a bug)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "56-infinite-loops",
      children: "5.6 Infinite Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A traffic light controller in an intersection runs forever: \"While the system is powered on, cycle through red → green → yellow.\" The loop never stops because the system must never stop."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intentional-infinite-loops",
      children: "Intentional Infinite Loops"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Embedded systems main loop:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid read_sensors(void) { /* ... */ }\nvoid process_data(void) { /* ... */ }\nvoid send_output(void) { /* ... */ }\nvoid delay(int ms) { /* ... */ }\n\nint main(void) {\n    while (1) {\n        read_sensors();\n        process_data();\n        send_output();\n        delay(100);   /* prevent 100% CPU */\n    }\n    return 0;  /* never reached */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event-driven server:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef void (*handler_t)(void);\n\nint main(void) {\n    for (;;) {\n        int event = wait_for_event();\n        handler_t h = get_handler(event);\n        h();\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Polling loop (hardware register):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Wait until hardware sets READY bit */\n#define REGISTER   (*(volatile int *)0x40001000)\n#define READY_MASK 0x01\n\nvoid wait_ready(void) {\n    while (!(REGISTER & READY_MASK))\n        ;   /* spin */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "OS idle loop:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void idle_task(void) {\n    while (1) {\n        halt_cpu();   /* put CPU to sleep until interrupt */\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unintentional-infinite-loops-bugs",
      children: "Unintentional Infinite Loops (Bugs)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 1: Semicolon after condition"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 0;\nwhile (i < 10);   /* <-- empty body loop */\n{\n    printf(\"%d\\n\", i);\n    i++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The block ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{...}"
      }), " is not part of the loop. The loop body is the empty statement ", (0,jsx_runtime.jsx)(_components.code, {
        children: ";"
      }), ". This runs forever because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " never changes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 2: Missing update"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 0;\nwhile (i < 10) {\n    printf(\"%d\\n\", i);\n    /* forgot i++; */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 3: Wrong update direction"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 10;\nwhile (i > 0) {\n    printf(\"%d\\n\", i);\n    i++;   /* should be i-- */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 4: Assignment instead of comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int done = 0;\nwhile (done = 0) {   /* assigns 0, which is false — loop NEVER runs */\n    /* ... */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is actually the opposite problem: the loop never runs because ", (0,jsx_runtime.jsx)(_components.code, {
        children: "done = 0"
      }), " evaluates to 0 (false). The intended code was ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while (done == 0)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 5: Float comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (float f = 0.0; f != 1.0; f += 0.1) {\n    /* may never exit due to floating-point precision */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["0.1 cannot be represented exactly in binary floating-point. After many additions, the accumulated error may cause ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f"
      }), " to skip past 1.0, or never land exactly on it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bug 6: continue before update in while"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 0;\nwhile (i < 10) {\n    if (i % 2 == 0) continue;  /* skips i++ */\n    i++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "infinite-loop-use-cases",
      children: "Infinite Loop Use Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded firmware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (1) { ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microcontroller main loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Server event loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (;;) { accept(); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web server, game server"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polling hardware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (!(reg & FLAG));"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for DMA completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS idle loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (1) { halt_cpu(); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU idle task"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive shell (REPL)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { read(); eval(); } while (1);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python shell, CLI"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Animation loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (1) { render(); sleep(16); }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game loop (60 FPS)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-stop-infinite-loops",
      children: "How to Stop Infinite Loops"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit loop from inside"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit the entire function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate the program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ctrl+C (SIGINT)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kill process from terminal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Guard variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (!quit) { if (input == 'q') quit = 1; }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "well-designed-infinite-loop-with-exit-path",
      children: "Well-Designed Infinite Loop with Exit Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdbool.h>\n\nint main(void) {\n    bool running = true;\n    while (running) {\n        char cmd = getchar();\n        switch (cmd) {\n            case 'q':\n            case 'Q':\n                running = false;\n                break;\n            case 'h':\n                printf(\"Help: press q to quit\\n\");\n                break;\n            default:\n                printf(\"You pressed: %c\\n\", cmd);\n        }\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "57-loop-comparison",
      children: "5.7 Loop Comparison"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "571-for-vs-while-vs-do-while-comparison",
      children: ["5.7.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do-while"
      }), " Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criteria"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit-controlled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum executions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Known iteration count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best suited"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely used"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awkward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sentinel loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Awkward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single line header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (init, cond, update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (cond only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (cond only at bottom)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Update visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top (in header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anywhere in body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Anywhere in body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope of counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop-local (C99+)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop idiom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (;;)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (1);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Break behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works as expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works as expected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works as expected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Continue behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs update, then checks condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to condition check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to condition check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "572-entry-controlled-vs-exit-controlled",
      children: "5.7.2 Entry-Controlled vs Exit-Controlled"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Entry-Controlled (", (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: ["Exit-Controlled (", (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            }), ")"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before each iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "If condition is false initially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body runs 0 times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body runs 1 time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Typical use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pre-check necessary before work"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Body must execute before check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May skip body when it shouldn't"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May run body when it shouldn't"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating arrays, reading formatted files"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Menu display, input validation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "573-loop-selection-guide",
      children: "5.7.3 Loop Selection Guide"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Known number of iterations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown iterations, condition before"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Must execute at least once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating over an array by index"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), " with index"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating over a linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (ptr != NULL)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading until EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while ((c = getchar()) != EOF)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded event loop"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while (1)"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for (;;)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Menu-driven program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Need to exit deep nesting"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            }), " (only for this case)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "574-complexity-comparison",
      children: "5.7.4 Complexity Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i=0; i<n; i++)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 iteration (with break)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (p != NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n iterations (list length)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (cond)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested (2-level equal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n² iterations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why space is O(1) for all:"
      }), " No auxiliary data structure grows with input size. Only scalar variables (counters, accumulators) are allocated on the stack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "58-common-loop-patterns",
      children: "5.8 Common Loop Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "summation",
      children: "Summation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int sum = 0;\nfor (int i = 1; i <= n; i++) {\n    sum += i;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "factorial",
      children: "Factorial"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fact = 1;\nfor (int i = 1; i <= n; i++) {\n    fact *= i;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "counting",
      children: "Counting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int positive_count = 0;\nfor (int i = 0; i < size; i++) {\n    if (arr[i] > 0) {\n        positive_count++;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "searching-linear-search",
      children: "Searching (linear search)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int found_index = -1;\nfor (int i = 0; i < size; i++) {\n    if (arr[i] == target) {\n        found_index = i;\n        break;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finding-maximum",
      children: "Finding maximum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int max = arr[0];\nfor (int i = 1; i < size; i++) {\n    if (arr[i] > max) {\n        max = arr[i];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "input-validation-loop",
      children: "Input Validation Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int age;\ndo {\n    printf(\"Enter age (0-150): \");\n    scanf(\"%d\", &age);\n} while (age < 0 || age > 150);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sentinel-controlled-loop",
      children: "Sentinel-controlled loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int sum = 0;\nint val;\nwhile (1) {\n    printf(\"Enter value (-1 to quit): \");\n    scanf(\"%d\", &val);\n    if (val == -1) break;\n    sum += val;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flag-controlled-loop",
      children: "Flag-controlled loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int found = 0;\nint i = 0;\nwhile (!found && i < n) {\n    if (arr[i] == target) found = 1;\n    else i++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pointer-iteration",
      children: "Pointer iteration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *p = str;\nwhile (*p != '\\0') {\n    *p = toupper(*p);\n    p++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fibonacci-sequence",
      children: "Fibonacci sequence"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 0, b = 1, next;\nfor (int i = 0; i < n; i++) {\n    printf(\"%d \", a);\n    next = a + b;\n    a = b;\n    b = next;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gcd-using-euclids-algorithm",
      children: "GCD using Euclid's algorithm"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 48, b = 18;\nwhile (b != 0) {\n    int temp = b;\n    b = a % b;\n    a = temp;\n}\nprintf(\"GCD = %d\\n\", a);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GCD = 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "59-interview-corner",
      children: "5.9 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q1-what-is-the-difference-between-for-and-while-in-c",
      children: ["Q1: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " in C?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loop consolidates initialization, condition, and update into a single line, making it ideal for counted iteration where the number of iterations is known. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop separates the condition from the update logic, making it better for state-driven loops (reading input, waiting for a condition, traversing linked lists). Both are entry-controlled and can be used interchangeably with a flag variable, but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " is more readable for index-based iteration and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " is more readable for condition-only repetition."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-which-loop-should-you-use-when",
      children: "Q2: Which loop should you use when?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Print numbers 1 to 100"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known iteration count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read file until EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unknown iterations, condition-driven"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Display menu once, then loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must display at least once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Traverse a linked list"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Until NULL pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Wait for hardware interrupt"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "while(1)"
            }), " (or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for(;;)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must never stop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process array of fixed size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index with known bound"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-do-you-write-an-idiomatic-infinite-loop-in-c",
      children: "Q3: How do you write an idiomatic infinite loop in C?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Most common */\nwhile (1) {\n    /* ... */\n}\n\n/* Also valid, less common */\nfor (;;) {\n    /* ... */\n}\n\n/* Rare — do-while infinite */\ndo {\n    /* ... */\n} while (1);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "while (1)"
      }), " is the most idiomatic. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (;;)"
      }), " is semantically identical. The compiler generates the same code for both."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-can-you-optimize-nested-loops",
      children: "Q4: How can you optimize nested loops?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Move invariant code out:"
          }), " If an expression doesn't depend on the inner loop variable, hoist it to the outer loop."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "/* Before */\nfor (int i = 0; i < n; i++) {\n    int factor = complex_calculation(); /* same every time */\n    for (int j = 0; j < m; j++) {\n        arr[i][j] *= factor;\n    }\n}\n\n/* After */\nint factor = complex_calculation();\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < m; j++) {\n        arr[i][j] *= factor;\n    }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Minimize inner loop work:"
          }), " Move as much computation as possible to the outer loop."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Use local variables:"
          }), " Store frequently accessed values in local variables to reduce memory access."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Switch loop order for cache efficiency:"
          }), " Loop over arrays in memory order (row-major in C)."]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "/* Cache-friendly: row-major access */\nfor (int i = 0; i < n; i++)\n    for (int j = 0; j < m; j++)\n        sum += arr[i][j];   /* good */\n\n/* Cache-unfriendly: column-major access */\nfor (int j = 0; j < m; j++)\n    for (int i = 0; i < n; i++)\n        sum += arr[i][j];   /* bad — striding over rows */\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Loop unrolling"
          }), " (manual or compiler):"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "/* Instead of */\nfor (int i = 0; i < 100; i++) {\n    sum += arr[i];\n}\n\n/* Manual unrolling (factor of 4) */\nfor (int i = 0; i < 100; i += 4) {\n    sum += arr[i] + arr[i+1] + arr[i+2] + arr[i+3];\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-loop-unrolling",
      children: "Q5: What is loop unrolling?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Loop unrolling is a compiler optimization (or manual technique) that reduces the overhead of loop control by executing multiple iterations' worth of work in a single pass. This reduces the number of condition checks and increment operations. The trade-off is larger code size. Modern compilers often do this automatically with optimization flags like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-O2"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-O3"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Original */\nfor (int i = 0; i < 8; i++) {\n    a[i] = b[i] * c[i];\n}\n\n/* Unrolled by 2 */\nfor (int i = 0; i < 8; i += 2) {\n    a[i]   = b[i]   * c[i];\n    a[i+1] = b[i+1] * c[i+1];\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-break-out-of-multiple-nested-loops",
      children: "Q6: How do you break out of multiple nested loops?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "goto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto exit;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean, single exit point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"goto considered harmful\" stigma"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flag variable"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int done = 0;"
            }), " then check in outer"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Structured programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra checks per iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function return"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            }), " from helper function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Restructuring needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Longjmp"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits any depth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very rarely appropriate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recommendation:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " for breaking deep nesting — it's the cleanest solution for this specific, well-understood case in C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-the-time-complexity-of-three-nested-loops-each-running-n-times-why-on",
      children: "Q7: What is the time complexity of three nested loops each running n times? Why O(n³)?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Three nested loops with equal bounds produce O(n³) complexity. Each level multiplies: outer runs n, middle runs n, inner runs n. Total iterations = n × n × n = n³. If n doubles, work increases 8×. This is cubic time."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "510-applications-in-real-systems",
      children: "5.10 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedded-microcontroller-main-loop-super-loop",
      children: "Embedded Microcontroller Main Loop (Super Loop)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid init_hardware(void) { /* ... */ }\nvoid read_sensors(void) { /* ... */ }\nvoid process_data(void) { /* ... */ }\nvoid update_actuators(void) { /* ... */ }\nvoid software_delay(int ms) { /* ... */ }\n\nint main(void) {\n    init_hardware();\n\n    while (1) {               /* Super Loop pattern */\n        read_sensors();       /* Read all inputs */\n        process_data();       /* Process and decide */\n        update_actuators();   /* Write all outputs */\n        software_delay(10);   /* 10ms delay */\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This \"super loop\" architecture is the foundation of countless embedded systems — microwaves, washing machines, thermostats, automotive controllers, IoT devices. The infinite ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while(1)"
      }), " is the core idiom."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "event-driven-system",
      children: "Event-Driven System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef enum {\n    EV_NONE,\n    EV_KEYPRESS,\n    EV_TIMER,\n    EV_MOUSE\n} Event;\n\nEvent get_event(void) { return EV_NONE; }\nvoid handle_keypress(void) { /* ... */ }\nvoid handle_timer(void) { /* ... */ }\nvoid handle_mouse(void) { /* ... */ }\nvoid idle_sleep(void) { /* ... */ }\n\nint main(void) {\n    while (1) {\n        Event e = get_event();\n        switch (e) {\n            case EV_KEYPRESS: handle_keypress(); break;\n            case EV_TIMER:    handle_timer();    break;\n            case EV_MOUSE:    handle_mouse();    break;\n            default:          idle_sleep();      break;\n        }\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Used in GUI frameworks, game engines, network servers — any system where actions are triggered by external events."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "finite-state-machine-loop",
      children: "Finite State Machine Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef enum { IDLE, ACTIVE, ERROR } State;\n\nint input_available(void) { return 0; }\nvoid process(void) { /* ... */ }\nint error_detected(void) { return 0; }\n\nint main(void) {\n    State state = IDLE;\n\n    while (state != ERROR) {\n        switch (state) {\n            case IDLE:\n                printf(\"Idle...\\n\");\n                if (input_available()) state = ACTIVE;\n                break;\n            case ACTIVE:\n                printf(\"Processing...\\n\");\n                process();\n                if (error_detected()) state = ERROR;\n                else state = IDLE;\n                break;\n            case ERROR:\n                printf(\"Error state — exiting\\n\");\n                break;\n        }\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "producer-consumer-loop",
      children: "Producer-Consumer Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define BUFFER_SIZE 10\n\nint buffer[BUFFER_SIZE];\nint count = 0;\n\nvoid producer(void) {\n    int data = 0;\n    while (1) {\n        while (count == BUFFER_SIZE);   /* busy-wait for space */\n        buffer[count++] = data++;\n        if (data > 100) break;\n    }\n}\n\nvoid consumer(void) {\n    while (1) {\n        while (count == 0);             /* busy-wait for data */\n        int data = buffer[--count];\n        printf(\"Consumed: %d\\n\", data);\n        if (count == 0) break;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "network-server-accept-loop",
      children: "Network Server Accept Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef int socket_t;\nsocket_t accept_connection(socket_t srv) { return 0; }\nvoid handle_client(socket_t client) { /* ... */ }\n\nint main(void) {\n    socket_t server_socket = create_server(8080);\n\n    for (;;) {\n        socket_t client = accept_connection(server_socket);\n        handle_client(client);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "511-common-mistakes-and-debugging-tips",
      children: "5.11 Common Mistakes and Debugging Tips"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wrong Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i <= n; i++)"
            }), " with array of size n"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i < n; i++)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<="
            }), " gives n+1 iterations"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment in condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (x = 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (x == 5)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " is assignment (always true if non-zero)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon after for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i < n; i++);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i < n; i++)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon creates empty body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolon after while"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (i < n); { ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (i < n) { ... }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty loop body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (i < n) { sum += i; }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i++;"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i never changes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Float loop counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (f = 0.0; f != 1.0; f += 0.1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use integer counter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point precision"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scoping issues"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; ...)"
            }), " in C89"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; ...)"
            }), " in C99+"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89 leaks counter to outer scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Misplaced update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (cond) continue; i++;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "i++; if (cond) continue;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update after continue is unreachable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging tip:"
      }), " When a loop misbehaves, add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " at the start of each iteration showing the loop variable and condition:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 0;\nwhile (i < n) {\n    printf(\"DEBUG: i=%d, n=%d, condition=%d\\n\", i, n, i < n);\n    /* rest of body */\n    i++;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "512-concept-comparison-tables",
      children: "5.12 Concept Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "loop-type-overview",
      children: "Loop Type Overview"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition Check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Min Executions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Abbreviation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Idiom"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before each iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (i = 0; i < n; i++)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before each iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entry-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (cond)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After each iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit-controlled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (cond);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(;;)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event loops, servers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded main loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "break-vs-continue-vs-goto",
      children: "break vs continue vs goto"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip to next iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to label"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scope"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Innermost loop/switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested loops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit one level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip one inner iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit all levels"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use wisely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Filter values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deep break, cleanup"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Update step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label location"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry-controlled-vs-exit-controlled",
      children: "Entry-Controlled vs Exit-Controlled"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Entry-Controlled"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exit-Controlled"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When condition is checked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before loop body"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After loop body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum body executions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C constructs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Condition visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Top of loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bottom of loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Do while condition holds\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Do at least once, then continue if condition holds\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "infinite-loop-patterns",
      children: "Infinite Loop Patterns"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (1) { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded systems (most common)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(;;)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (;;) { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servers, event loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while (1);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare, unconventional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(true)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (true) { }"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["C99+ with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdbool.h>"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-summary",
      children: "Edge Cases Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Zero Iterations"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Off-by-One"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Infinite (bug)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Semicolon Trap"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Empty Body"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition false initially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong comparison operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing/wrong update"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
              children: ")"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(...);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition false initially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrong comparison"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing update"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(cond);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do-while"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (min 1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition logic error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always-true condition"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            }), " after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do{ }while();"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Loop"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax Snippet"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(int i=0; i<n; i++) { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(int i=0; i<5; i++) printf(\"%d\", i);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "while"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(cond) { }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(n > 0) { sum += n--; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "do-while"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { } while(cond);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { c=getchar(); } while(c != '\\n');"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if(cond) break;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits loop when condition is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if(cond) continue;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips to next iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "goto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto label;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to labeled statement"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Real-World Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loop Pattern"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sum array elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for (int i = 0; i < len; i++)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read file until EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while ((c = fgetc(f)) != EOF)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Process command input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { prompt(); get_input(); } while (cmd != 'q');"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "for(i...) for(j...) for(k...)"
            }), " (triple nested)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network server accept loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(;;) { client = accept(srv); handle(client); }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linked list traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (ptr != NULL)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Polling hardware register"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (!(REG & FLAG));"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Triangle pattern printing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["nested loops with dynamic bound (", (0,jsx_runtime.jsx)(_components.code, {
              children: "j <= i"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Menu-driven calculator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "do { show_menu(); process(); } while(choice != 0);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "System initialization checks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (!system_ready()) { wait(); }"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How many times does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for(int i=0; i<0; i++)"
        }), " execute?\nA) 0\nB) 1\nC) Infinite\nD) Compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** The condition `i < 0` is false immediately, so the body never executes (entry-controlled)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while (1) { break; }"
        }), " do?\nA) Runs forever\nB) Runs once, then breaks\nC) Compiler error\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The `while (1)` creates an infinite loop, but `break` immediately exits on the first iteration."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which loop guarantees at least one execution of the body?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), "\nD) All of the above"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `do-while` checks the condition after the body runs, guaranteeing at least one execution. `for` and `while` are entry-controlled (may execute 0 times)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the following code print?\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        printf(\"%d\", i + j);\n    }\n}\n"
          })
        }), "\nA) 012123\nB) 012012\nC) 012234\nD) 012345"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** i=0: j=0→0, j=1→1. i=1: j=0→1, j=1→2. i=2: j=0→2, j=1→3. Output: \"0 1 1 2 2 3\" = 012234."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of these is NOT an entry-controlled loop?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), "\nD) Both A and B"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `do-while` is exit-controlled — the condition is checked after the body executes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the time complexity of this code?\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "for (int i = 0; i < n; i++)\n    for (int j = 0; j < n; j++)\n        printf(\"*\");\n"
          })
        }), "\nA) O(n)\nB) O(n²)\nC) O(log n)\nD) O(1)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** O(n²) — the inner loop runs n times for each of the n outer iterations, giving n × n = n² total iterations."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How do you write an infinite loop in C?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while (1)"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for (;;)"
        }), "\nC) Both A and B\nD) Neither"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Both `while (1)` and `for (;;)` create infinite loops. `while (1)` is more idiomatic for event loops."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " executes inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loop?\nA) The loop terminates immediately\nB) The update statement runs, then the condition is checked\nC) The loop body restarts from the top without running the update\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** In a `for` loop, `continue` jumps to the update statement, then the condition is checked. In a `while` loop, it jumps directly to the condition check (hence why update must appear before `continue` in `while` loops)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is wrong with this code?\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-c",
            children: "int i = 0;\nwhile (i < 10);\n{\n    printf(\"%d\", i);\n    i++;\n}\n"
          })
        }), "\nA) Missing include\nB) Semicolon creates an empty infinite loop\nC) Variable should be declared in loop\nD) Nothing, it works correctly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The semicolon after `while (i < 10);` creates an empty loop body. The block with `printf` and `i++` is outside the loop, which runs forever because i never changes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which loop construct is best for a menu-driven program that must display the menu at least once?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `do-while` guarantees the menu is displayed at least once before checking if the user wants to quit."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " loops check the condition before each iteration; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), " checks after, guaranteeing at least one execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loops consolidate initialization, condition, and update in one line — ideal for counted iteration (O(n) time, O(1) space)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " exits the innermost loop immediately; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " skips to the next iteration (update step in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), ", condition in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " provides unstructured jumps; best reserved for breaking out of deeply nested loops."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nested loops multiply iterations: an outer loop of n and inner of m yields O(n × m) total work. Dependent inner loops still yield O(n²) but with a smaller constant factor."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Infinite loops are written with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while (1)"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for (;;)"
        }), "; they are standard in embedded firmware, server event loops, and animation frames."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Off-by-one errors occur when using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<="
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "<"
        }), " in zero-based iteration."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Loop optimization techniques include hoisting invariant code, cache-friendly access patterns, and (rarely) manual loop unrolling."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Describe the execution order of the three clauses in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loop: initialization, condition, update. When does each run relative to the loop body?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), "? Give an example where each is appropriate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why might you choose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), "? Why might you choose ", (0,jsx_runtime.jsx)(_components.code, {
          children: "do-while"
        }), " over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens if you accidentally place a semicolon after the condition in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "while"
        }), " loop? What about after a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " header?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How many times does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), " execute in: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for (int i = 0; i < 5; i++) for (int j = 0; j < 3; j++) printf(\"*\");"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the difference between entry-controlled and exit-controlled loops. Which C loop types fall into each category?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the time complexity of three nested loops each running n times? Why?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How can you break out of multiple nested loops at once without using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " make a poor loop counter? Give an example."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the minimum number of iterations for each loop type in C?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sum of first n natural numbers:"
          }), " Write a program that reads n and computes 1 + 2 + ... + n using each of the three loop types (for, while, do-while)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prime numbers:"
          }), " Write a program that prints all prime numbers between 2 and 100. Use nested loops."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Input statistics:"
          }), " Write a program that reads integers from the user until a negative number is entered, then prints the sum, count, and average of the positive numbers entered."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Diamond pattern:"
          }), " Write a program that prints the following diamond pattern for a user-specified size ", (0,jsx_runtime.jsx)(_components.code, {
            children: "n"
          }), ":"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Linear search:"
          }), " Write a program that reads 10 integers into an array, then reads a target value and prints its index (or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-1"
          }), " if not found). Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "break"
          }), " when found."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Guess the number:"
          }), " Write a number guessing game using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "do-while"
          }), ". The program picks a random number between 1 and 100, and the user guesses until they get it right. Print \"Too high\" or \"Too low\" after each guess."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Matrix addition:"
          }), " Write a program that reads two 3×3 matrices and prints their sum using nested loops."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Palindrome check:"
          }), " Write a program that checks if a given integer is a palindrome (reads the same forwards and backwards) using a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "while"
          }), " loop to reverse the digits."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Collatz Conjecture:"
      }), " Write a program that implements the Collatz conjecture. Read a positive integer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " from the user. For each step: if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " is even, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n = n / 2"
      }), "; if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " is odd, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n = 3 * n + 1"
      }), ". Print each value until ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), " reaches 1. Count and display the number of steps taken. The program should use a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), " loop and handle any starting value up to 2,000,000."]
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