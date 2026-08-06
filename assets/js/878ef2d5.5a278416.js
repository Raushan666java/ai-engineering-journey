"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[67536],{

/***/ 59884
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_04_control_flow_md_878_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-04-control-flow-md-878.json
const site_docs_courses_c_programming_04_control_flow_md_878_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/04-control-flow","title":"Chapter 4: Control Flow","description":"Previous Loops","source":"@site/docs/courses/c-programming/04-control-flow.md","sourceDirName":"courses/c-programming","slug":"/c-programming/04-control-flow","permalink":"/ai-engineering-journey/c-programming/04-control-flow","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-control-flow","slug":"/c-programming/04-control-flow","title":"Chapter 4: Control Flow","sidebar_label":"Chapter 4: Control Flow","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Operators in C --- In-Depth Reference","permalink":"/ai-engineering-journey/c-programming/03-operators"},"next":{"title":"Chapter 5: Loops (Comprehensive)","permalink":"/ai-engineering-journey/c-programming/05-loops"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/04-control-flow.md


const frontMatter = {
	id: '04-control-flow',
	slug: '/c-programming/04-control-flow',
	title: 'Chapter 4: Control Flow',
	sidebar_label: 'Chapter 4: Control Flow',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Control Flow';

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
  "value": "Decision Making in C",
  "id": "decision-making-in-c",
  "level": 2
}, {
  "value": "Numbered Steps of Decision Making",
  "id": "numbered-steps-of-decision-making",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Decision Making Constructs in C",
  "id": "decision-making-constructs-in-c",
  "level": 3
}, {
  "value": "4.1 The <code>if</code> Statement",
  "id": "41-the-if-statement",
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
  "id": "pseudocode-1",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table",
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
  "value": "4.2 The <code>if-else</code> Statement",
  "id": "42-the-if-else-statement",
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
  "id": "pseudocode-2",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-1",
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
  "value": "4.3 The <code>if-else if</code> Ladder",
  "id": "43-the-if-else-if-ladder",
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
  "id": "pseudocode-3",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-2",
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
  "value": "Important Rule: Order Matters",
  "id": "important-rule-order-matters",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "4.4 Nested <code>if-else</code> Statements",
  "id": "44-nested-if-else-statements",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-3",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-3",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
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
  "value": "4.5 Dangling Else",
  "id": "45-dangling-else",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "The Problem",
  "id": "the-problem",
  "level": 3
}, {
  "value": "The Fix",
  "id": "the-fix",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-4",
  "level": 3
}, {
  "value": "Code Example",
  "id": "code-example-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "4.6 The <code>switch</code> Statement",
  "id": "46-the-switch-statement",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-4",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-3",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-4",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-5",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Switch Rules and Limitations",
  "id": "switch-rules-and-limitations",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "4.6.1 Intentional Fall-Through",
  "id": "461-intentional-fall-through",
  "level": 3
}, {
  "value": "4.7 Conditional Expression (Ternary Operator)",
  "id": "47-conditional-expression-ternary-operator",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-5",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-4",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-5",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-6",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-5",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "4.8 The <code>goto</code> Statement",
  "id": "48-the-goto-statement",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-6",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-5",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-6",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-7",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-5",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-6",
  "level": 3
}, {
  "value": "Legitimate Uses of <code>goto</code>",
  "id": "legitimate-uses-of-goto",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "4.9 <code>break</code> vs <code>continue</code>",
  "id": "49-break-vs-continue",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-7",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-6",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode-7",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-8",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-6",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 3
}, {
  "value": "break vs continue → Comparison Table",
  "id": "break-vs-continue--comparison-table",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-8",
  "level": 3
}, {
  "value": "4.10 The <code>return</code> Statement",
  "id": "410-the-return-statement",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-8",
  "level": 3
}, {
  "value": "Numbered Execution Steps",
  "id": "numbered-execution-steps-7",
  "level": 3
}, {
  "value": "Dry Run / Trace Table",
  "id": "dry-run--trace-table-9",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-7",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-9",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-7",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-9",
  "level": 3
}, {
  "value": "4.11 The <code>exit()</code> Function",
  "id": "411-the-exit-function",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-10",
  "level": 3
}, {
  "value": "Syntax",
  "id": "syntax-9",
  "level": 3
}, {
  "value": "C Code Examples",
  "id": "c-code-examples-8",
  "level": 3
}, {
  "value": "<code>return</code> vs <code>exit()</code> → Comparison",
  "id": "return-vs-exit--comparison",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-10",
  "level": 3
}, {
  "value": "4.12 Boolean Values in C",
  "id": "412-boolean-values-in-c",
  "level": 2
}, {
  "value": "Truthiness Rules",
  "id": "truthiness-rules",
  "level": 3
}, {
  "value": "C99 Boolean Type",
  "id": "c99-boolean-type",
  "level": 3
}, {
  "value": "Integer to Boolean Conversion",
  "id": "integer-to-boolean-conversion",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-11",
  "level": 3
}, {
  "value": "Comparison Tables",
  "id": "comparison-tables",
  "level": 2
}, {
  "value": "4.13.1 <code>if</code> vs <code>switch</code>",
  "id": "4131-if-vs-switch",
  "level": 3
}, {
  "value": "4.13.2 <code>break</code> vs <code>continue</code>",
  "id": "4132-break-vs-continue",
  "level": 3
}, {
  "value": "4.13.3 <code>goto</code> vs Structured Jumps",
  "id": "4133-goto-vs-structured-jumps",
  "level": 3
}, {
  "value": "4.13.4 Conditional Control Constructs",
  "id": "4134-conditional-control-constructs",
  "level": 3
}, {
  "value": "4.14 Interview Corner",
  "id": "414-interview-corner",
  "level": 2
}, {
  "value": "4.14.1 Dangling Else Ambiguity",
  "id": "4141-dangling-else-ambiguity",
  "level": 3
}, {
  "value": "4.14.2 switch vs if-else Chain Performance",
  "id": "4142-switch-vs-if-else-chain-performance",
  "level": 3
}, {
  "value": "4.14.3 Duff&#39;s Device",
  "id": "4143-duffs-device",
  "level": 3
}, {
  "value": "4.14.4 goto in the Linux Kernel",
  "id": "4144-goto-in-the-linux-kernel",
  "level": 3
}, {
  "value": "4.14.5 Comma Operator in Conditions",
  "id": "4145-comma-operator-in-conditions",
  "level": 3
}, {
  "value": "4.14.6 Short-Circuit Evaluation Trick",
  "id": "4146-short-circuit-evaluation-trick",
  "level": 3
}, {
  "value": "4.14.7 The <code>==</code> vs <code>=</code> Trap",
  "id": "4147-the--vs--trap",
  "level": 3
}, {
  "value": "4.14.8 Nested switch",
  "id": "4148-nested-switch",
  "level": 3
}, {
  "value": "4.15 Applications in Real Systems",
  "id": "415-applications-in-real-systems",
  "level": 2
}, {
  "value": "4.15.1 Linux Kernel: goto for Error Handling",
  "id": "4151-linux-kernel-goto-for-error-handling",
  "level": 3
}, {
  "value": "4.15.2 Embedded Systems: switch-case State Machines",
  "id": "4152-embedded-systems-switch-case-state-machines",
  "level": 3
}, {
  "value": "4.15.3 Network Protocol Parsing",
  "id": "4153-network-protocol-parsing",
  "level": 3
}, {
  "value": "4.15.4 Compiler Optimizations: Jump Tables",
  "id": "4154-compiler-optimizations-jump-tables",
  "level": 3
}, {
  "value": "4.15.5 Flight Control Systems",
  "id": "4155-flight-control-systems",
  "level": 3
}, {
  "value": "4.15.6 Database Query Execution",
  "id": "4156-database-query-execution",
  "level": 3
}, {
  "value": "4.16 Common Patterns",
  "id": "416-common-patterns",
  "level": 2
}, {
  "value": "Guard Clause Pattern",
  "id": "guard-clause-pattern",
  "level": 3
}, {
  "value": "Range Checking",
  "id": "range-checking",
  "level": 3
}, {
  "value": "Short-Circuit Safe Access",
  "id": "short-circuit-safe-access",
  "level": 3
}, {
  "value": "Chained Ternary for Simple Mapping",
  "id": "chained-ternary-for-simple-mapping",
  "level": 3
}, {
  "value": "Flag-based Control",
  "id": "flag-based-control",
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
        id: "chapter-4-control-flow",
        children: "Chapter 4: Control Flow"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/03-operators",
          children: "Operators"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/05-loops",
          children: "Loops"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the decision-making process in C programming"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Make decisions using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else if"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " statements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " for multi-way branching"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the ternary operator as a compact conditional"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand when and why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " is used"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Distinguish ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write decision-making code that is clear and maintainable"
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
        href: "../../assets/images/lessons/c-programming/04-control-flow/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/04-control-flow/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/04-control-flow/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/04-control-flow/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/04-control-flow/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/04-control-flow/visual-explanation.png",
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
            children: "if-else Statements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional branching based on boolean expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always use braces even for single-line bodies to avoid bugs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch-case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way branch on integer expressions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every non-empty case needs a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " or explicit fall-through comment"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary Operator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inline conditional expression ", (0,jsx_runtime.jsx)(_components.code, {
              children: "condition ? true : false"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use for simple assignments, not complex logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "goto Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional jump to a labeled statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use sparingly — typically only for error cleanup in nested contexts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "break vs continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop control vs skip iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "break exits the loop; continue skips to next iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "return vs exit()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function return vs program termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "return cleans up local scope; exit() terminates immediately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Short-Circuit Evaluation"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), " and `"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"4.1 if\"] --> B[\"4.2 if-else\"]\n    B --> C[\"4.3 if-else-if Ladder\"]\n    C --> D[\"4.4 Nested if-else\"]\n    D --> E[\"4.5 Dangling Else\"]\n    E --> F[\"4.6 switch-case\"]\n    F --> G[\"4.7 Ternary\"]\n    G --> H[\"4.8 goto\"]\n    H --> I[\"4.9 break vs continue\"]\n    I --> J[\"4.10 return\"]\n    J --> K[\"4.11 exit()\"]\n    K --> L[\"4.12 Boolean\"]\n    L --> M[\"Comparisons & Interview Corner\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch04-control-flow.png",
        alt: "C Control Flow: if-else if-else and switch-case"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "decision-making-in-c",
      children: "Decision Making in C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Decision-making in C is like a traffic light controller at a busy intersection. The controller evaluates conditions (is it red? green? yellow? pedestrian crossing?) and directs traffic down the appropriate path. Just as a traffic light prevents collisions by enforcing which path gets the green signal, control flow statements direct program execution down the correct code path based on evaluated conditions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-of-decision-making",
      children: "Numbered Steps of Decision Making"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Evaluate condition"
        }), " — The program evaluates a boolean expression (any expression yielding zero/non-zero)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch selection"
        }), " — Based on the truth value, the corresponding code block is selected for execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execute selected block"
        }), " — The statements inside the selected branch run"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resume sequential flow"
        }), " — After the branch completes, execution continues with the next statement after the construct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "INPUT decision_expression\nIF expression IS non-zero THEN\n    EXECUTE true_block\nELSE IF another_expression IS non-zero THEN\n    EXECUTE second_block\nELSE\n    EXECUTE default_block\nEND IF\nCONTINUE with rest of program\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "decision-making-constructs-in-c",
      children: "Decision Making Constructs in C"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if-else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-way branch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if-else if-else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way branch (range-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch-case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Selection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integral expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way branch (value-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            }), " (ternary)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single condition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inline conditional value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary transfer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "41-the-if-statement",
      children: ["4.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " statement executes a block of code only when a condition evaluates to true (non-zero). It is the simplest form of control flow — a single gate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " statement works like a security turnstile at a subway station. The turnstile checks: \"Do you have a valid ticket?\" If yes (condition is true), it rotates and lets you through (executes the block). If no (condition is false), it stays locked and you skip the gate entirely. The program continues walking after the turnstile either way."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (condition) {\n    /* executed when condition is non-zero (true) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The condition expression inside parentheses is evaluated"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the result is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-zero"
        }), " (true), the body (block or single statement) executes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the result is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zero"
        }), " (false), the body is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skipped"
        }), " entirely"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execution resumes at the first statement after the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " construct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IF condition THEN\n    execute statement(s)\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Check if temperature indicates a warm day"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int temperature = 30;\n\n    if (temperature > 25) {\n        printf(\"It is a warm day.\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (temperature = 30):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "temperature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (temp > 25)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int temperature = 30;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (temperature > 25)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "30 > 25"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            }), " (1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter if block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: \"It is a warm day.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program ends"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (temperature = 10):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "temperature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (temp > 25)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int temperature = 10;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (temperature > 25)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "10 > 25"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip if block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program ends"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Basic if"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int temperature = 30;\n\n    if (temperature > 25) {\n        printf(\"It is a warm day.\\n\");\n    }\n\n    if (temperature < 10) {\n        printf(\"It is a cold day.\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "It is a warm day.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: if with assignment bug (common trap)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 0;\n\n    /* BUG: assignment instead of comparison — always true */\n    if (x = 5) {\n        printf(\"This ALWAYS prints because x = 5 evaluates to 5 (true)\\n\");\n    }\n\n    /* CORRECT: comparison */\n    if (x == 5) {\n        printf(\"x is 5\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "This ALWAYS prints because x = 5 evaluates to 5 (true)\nx is 5\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compiler Warning:"
        }), " Modern compilers warn on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x = 5)"
        }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (5 == x)"
        }), " (Yoda condition) to catch accidental assignment because ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (5 = x)"
        }), " is a compile error."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) — The condition expression is evaluated once in constant time regardless of input size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) — No additional memory is allocated beyond the condition evaluation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Simplest control flow construct"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only handles a single condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to read and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No else path for false case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast — single branch prediction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can lead to many separate if statements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No fall-through issues (unlike switch)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeated condition evaluation if naive"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
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
              children: "Empty body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x > 0);"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Semicolon immediately after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), " creates an empty body; the next statement always executes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assignment trap"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x = 5)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assignment expression ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 5"
            }), " yields 5 (true); almost always a bug"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Float comparison"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (f == 0.1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point precision may cause unexpected false; use epsilon comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Null pointer dereference"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (ptr->field)"
            }), " when ptr is NULL"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereference before check causes undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side effects in condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x++ > 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition has side effect; x changes regardless of truth value"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "42-the-if-else-statement",
      children: ["4.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " statement provides two mutually exclusive code paths — one for when the condition is true, another for when it is false."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " is like a fork in a hiking trail. A signpost asks: \"Is the bridge ahead safe?\" If yes (true), take the short path across the bridge. If no (false), take the longer detour around the ravine. You must take exactly one path — never both, never neither."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-1",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (condition) {\n    /* executed when condition is true (non-zero) */\n} else {\n    /* executed when condition is false (zero) */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-1",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the condition expression"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the result is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-zero"
        }), " (true), execute the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " block, then skip the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the result is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zero"
        }), " (false), ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skip"
        }), " the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " block and execute the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " block"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resume execution at the statement after the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if-else"
        }), " construct"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IF condition THEN\n    execute true_block\nELSE\n    execute false_block\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-1",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Check if a number is even or odd"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int number = 7;\n\n    if (number % 2 == 0) {\n        printf(\"%d is even.\\n\", number);\n    } else {\n        printf(\"%d is odd.\\n\", number);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (number = 7):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "number % 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (== 0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int number = 7;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (number % 2 == 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1 == 0"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip if block, enter else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: \"7 is odd.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program ends"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (number = 8):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "number"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "number % 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (== 0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int number = 8;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (number % 2 == 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0 == 0"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            }), " (1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter if block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: \"8 is even.\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program ends"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-1",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Even or Odd"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int number = 7;\n\n    if (number % 2 == 0) {\n        printf(\"%d is even.\\n\", number);\n    } else {\n        printf(\"%d is odd.\\n\", number);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "7 is odd.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Pass or Fail"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int marks = 65;\n\n    if (marks >= 40) {\n        printf(\"Result: PASS\\n\");\n        printf(\"Marks: %d\\n\", marks);\n    } else {\n        printf(\"Result: FAIL\\n\");\n        printf(\"Marks: %d — Need %d more\\n\", marks, 40 - marks);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Result: PASS\nMarks: 65\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Single statement without braces (risky)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 0;\n\n    /* Without braces — only first statement is in the else branch */\n    if (x > 0)\n        printf(\"Positive\\n\");\n    else\n        printf(\"Non-positive\\n\");\n        printf(\"This ALWAYS prints — not part of else!\\n\");\n\n    /* Same logic WITH braces — correct */\n    if (x > 0) {\n        printf(\"Positive\\n\");\n    } else {\n        printf(\"Non-positive\\n\");\n        printf(\"This prints only when x <= 0\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Non-positive\nThis ALWAYS prints — not part of else!\nNon-positive\nThis prints only when x <= 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) — The condition is evaluated once; exactly one branch executes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) — No additional memory allocation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: "Covers both true and false paths explicitly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only two possible outcomes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mutually exclusive — guarantees exactly one path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot express multi-way branching directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clear, readable logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested if-else reduces readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler optimizes with conditional jumps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression evaluated even when false branch is trivial"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
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
              children: "Empty else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x) doThis(); else ;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty else statement (semicolon) is legal but pointless"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dangling else ambiguity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested if without braces"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), " binds to the nearest ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single statement illusion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing braces with multiple statements"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only the first statement after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), " belongs to the branch"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Nested if-else deep"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4+ levels of nesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability suffers; consider refactoring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Side effects in condition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (scanf(\"%d\", &n) == 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Condition has side effect of reading input"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "43-the-if-else-if-ladder",
      children: ["4.3 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " Ladder"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " ladder tests multiple conditions in sequence and executes the block belonging to the first true condition. If none match, an optional final ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " block runs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " ladder is like a medical triage system in an emergency room. A nurse evaluates patients one at a time: \"Is this patient critical?\" → \"Is this patient serious?\" → \"Is this patient stable?\" → \"Is this patient minor?\" The first category that matches determines the treatment path. Once a patient is categorized, no further checks occur."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-2",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (condition1) {\n    /* executed when condition1 is true */\n} else if (condition2) {\n    /* executed when condition1 is false AND condition2 is true */\n} else if (condition3) {\n    /* executed when condition1, condition2 are false AND condition3 is true */\n} else {\n    /* executed when ALL conditions are false */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-2",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "condition1"
        }), " — if true, execute block 1 and jump to step 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "condition2"
        }), " — if true, execute block 2 and jump to step 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "condition3"
        }), " — if true, execute block 3 and jump to step 5"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "no"
        }), " condition was true, execute the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "else"
        }), " block (if present)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Continue with the next statement after the ladder"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-3",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "IF condition1 THEN\n    execute block1\nELSE IF condition2 THEN\n    execute block2\nELSE IF condition3 THEN\n    execute block3\nELSE\n    execute default_block\nEND IF\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-2",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Grade assignment based on score"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int score = 85;\n\n    if (score >= 90) {\n        printf(\"Grade: A\\n\");\n    } else if (score >= 80) {\n        printf(\"Grade: B\\n\");\n    } else if (score >= 70) {\n        printf(\"Grade: C\\n\");\n    } else if (score >= 60) {\n        printf(\"Grade: D\\n\");\n    } else {\n        printf(\"Grade: F\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (score = 85):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int score = 85;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (score >= 90)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "85 >= 90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move to next else-if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "else if (score >= 80)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "85 >= 80"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter this block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Grade: B\\n\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " Grade: B"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of this else-if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip remaining else-if/else"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (score = 45):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "score"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int score = 45;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (score >= 90)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "45 >= 90"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "else if (score >= 80)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "45 >= 80"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "else if (score >= 70)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "45 >= 70"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "else if (score >= 60)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "45 >= 60"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Next"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter default else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Grade: F\\n\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " Grade: F"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-2",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Grade calculator (above)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Number classification"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int num = 0;\n\n    if (num > 0) {\n        printf(\"%d is positive\\n\", num);\n    } else if (num < 0) {\n        printf(\"%d is negative\\n\", num);\n    } else {\n        printf(\"%d is zero\\n\", num);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "0 is zero\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(n) where n is the number of conditions — in the worst case, all conditions are evaluated before finding a match (or reaching the else)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) — No additional memory allocation"]
      }), "\n"]
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
            children: "Handles multiple mutually exclusive conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst case evaluates all conditions (O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditions can be arbitrary boolean expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Less readable than switch for value-based dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Conditions checked top-down (priority order)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for value-based dispatch (use switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible — each condition can test different variables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can encourage deeply nested logic"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "important-rule-order-matters",
      children: "Important Rule: Order Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Conditions are evaluated ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "top-down"
      }), ". Once a condition is true, the rest are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "skipped"
      }), ". Order conditions from most specific (or most restrictive) to least."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* WRONG — the >= 60 condition catches everything >= 60,\n   so the >= 70, >= 80, >= 90 branches NEVER execute */\nif (score >= 60) {\n    printf(\"Grade D\");\n} else if (score >= 70) {\n    printf(\"Grade C\");  /* NEVER REACHED */\n} else if (score >= 80) {\n    printf(\"Grade B\");  /* NEVER REACHED */\n} else if (score >= 90) {\n    printf(\"Grade A\");  /* NEVER REACHED */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Overlapping conditions"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (x > 0)"
            }), " then ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else if (x > 10)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second condition never true if first is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing final else"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Omission of final ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), " block"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No action taken when all conditions are false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty condition body"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x > 0); else if (y > 0);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Semicolons create empty bodies — no code runs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep ladder (8+ conditions)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10+ else-if branches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consider switch-case or function pointer array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "44-nested-if-else-statements",
      children: ["4.4 Nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " Statements"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " is an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " statement placed inside another ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " block. This allows testing multiple conditions in a hierarchical manner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " is like airport security screening. First check: \"Do you have a boarding pass?\" (outer if). If yes, then check: \"Does your ID match the pass?\" (inner if). If yes, then check: \"Do you have any liquids over 100ml?\" (deeper inner if). Each level adds more granularity."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-3",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (outer_condition) {\n    if (inner_condition1) {\n        /* both outer and inner1 are true */\n    } else {\n        /* outer true, inner1 false */\n    }\n} else {\n    if (inner_condition2) {\n        /* outer false, inner2 true */\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-3",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Find the largest of three numbers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 10, b = 25, c = 15;\n\n    if (a >= b) {\n        if (a >= c) {\n            printf(\"Largest: %d\\n\", a);\n        } else {\n            printf(\"Largest: %d\\n\", c);\n        }\n    } else {\n        if (b >= c) {\n            printf(\"Largest: %d\\n\", b);\n        } else {\n            printf(\"Largest: %d\\n\", c);\n        }\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (a=10, b=25, c=15):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a=10, b=25, c=15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (a >= b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 >= 25"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter outer else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (b >= c)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "25 >= 15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter inner if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Largest: %d\", b)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " Largest: 25"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 10, b = 25, c = 15;\n\n    if (a >= b) {\n        if (a >= c) {\n            printf(\"Largest: %d\\n\", a);\n        } else {\n            printf(\"Largest: %d\\n\", c);\n        }\n    } else {\n        if (b >= c) {\n            printf(\"Largest: %d\\n\", b);\n        } else {\n            printf(\"Largest: %d\\n\", c);\n        }\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Largest: 25\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(d) where d is the nesting depth — at most d comparisons in the worst case"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) — No additional memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-3",
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
            children: "Models hierarchical decision logic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduced readability at depth ≥ 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All conditions available at each level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increased cyclomatic complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No redundant condition re-evaluation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to introduce logic errors"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep nesting (4+ levels)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code becomes pyramid of doom — refactor into functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Missing braces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inner else binds ambiguously to nearest unmatched if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Incomplete branch coverage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting to handle all combinations"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Guideline:"
      }), " If nesting exceeds 3 levels, extract inner logic into a separate function or restructure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "45-dangling-else",
      children: "4.5 Dangling Else"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dangling else is a classic ambiguity in C: when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " statements are nested without braces, an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " binds to the ", (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["nearest preceding unmatched ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        })]
      }), ", regardless of indentation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The dangling else is like a sign in a building that says \"If you see the reception desk, turn left. If you see the elevator, turn right. Else go straight.\" The \"else\" is ambiguous — does it attach to the first \"if\" or the second? In C, it always attaches to the nearest ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-problem",
      children: "The Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* BAD — misleading indentation */\nif (x > 0)\n    if (y > 0)\n        printf(\"both positive\\n\");\nelse\n    printf(\"x is not positive\\n\");   /* binds to inner if! */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Despite the indentation suggesting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " belongs to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (x > 0)"
      }), ", the compiler binds it to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (y > 0)"
      }), ". So \"x is not positive\" prints when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x > 0"
      }), " AND ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y <= 0"
      }), " — the opposite of what the indentation suggests."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-fix",
      children: "The Fix"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* CORRECT — braces clarify intent */\nif (x > 0) {\n    if (y > 0) {\n        printf(\"both positive\\n\");\n    }\n} else {\n    printf(\"x is not positive\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-4",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Buggy version:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 5, y = -1"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x > 0"
            }), " (5 > 0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter outer if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "y > 0"
            }), " (-1 > 0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip inner if body"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), " clause"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Executes!"
            }), " \"x is not positive\" printed — WRONG!"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example-1",
      children: "Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 5, y = -1;\n\n    /* MISLEADING INDENTATION — buggy */\n    if (x > 0)\n        if (y > 0)\n            printf(\"both positive\\n\");\n    else\n        printf(\"x is not positive\\n\");  /* This prints incorrectly! */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (x=5, y=-1):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x is not positive\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule:"
      }), " Always use braces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{}"
      }), " for all ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "do"
      }), " bodies, even single-statement ones."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) — No additional overhead for using braces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) — Braces do not affect memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep nesting without braces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each additional level doubles ambiguity potential"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Mixed bracing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some if blocks braced, others not — inconsistent and error-prone"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "46-the-switch-statement",
      children: ["4.6 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " provides a multi-way branch based on an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integral expression"
      }), ". It is often more efficient and readable than long ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " chains when dispatching on a single integer/character value."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " statement is like a vending machine. You press a button (the expression). The machine checks: \"Is button 1 pressed? 2? 3? ...\" Instead of asking each question sequentially, the vending machine directly routes to the correct column based on the button number. This is exactly how ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " works — it jumps directly to the matching case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-4",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "switch (expression) {\n    case constant1:\n        statements;\n        break;\n    case constant2:\n        statements;\n        break;\n    default:\n        statements;\n        break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-3",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate the controlling expression (must yield an integer type: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enum"
        }), ", etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare the value against each ", (0,jsx_runtime.jsx)(_components.code, {
          children: "case"
        }), " label (compile-time constants)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If a match is found, execution ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jumps"
        }), " to that case label"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Execution continues sequentially through subsequent cases unless a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " is encountered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no case matches and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " is present, execution jumps to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If no case matches and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " is absent, the entire switch body is skipped"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-4",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SWITCH expression\n    CASE value1:\n        execute block1\n        BREAK\n    CASE value2:\n        execute block2\n        BREAK\n    CASE value3:\n        execute block3\n        BREAK\n    DEFAULT:\n        execute default_block\n        BREAK\nEND SWITCH\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-5",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Print day name from number"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int day = 3;\n\n    switch (day) {\n        case 1: printf(\"Monday\\n\"); break;\n        case 2: printf(\"Tuesday\\n\"); break;\n        case 3: printf(\"Wednesday\\n\"); break;\n        case 4: printf(\"Thursday\\n\"); break;\n        case 5: printf(\"Friday\\n\"); break;\n        case 6: printf(\"Saturday\\n\"); break;\n        case 7: printf(\"Sunday\\n\"); break;\n        default: printf(\"Invalid day\\n\"); break;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (day = 3):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "day"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int day = 3;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch (day)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate expression → value is 3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 1:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match — skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 2:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match — skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 3:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Match!"
            }), " Jump to this case"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Wednesday\\n\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Output:"
            }), " Wednesday"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit switch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue after switch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table (day = 9, with fall-through detail for case 2):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "day = 2"
      }), " and we artificially remove ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " from case 2:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch (day)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "value = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 1:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 2:"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Match!"
            }), " Jump here"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Tuesday\\n\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: Tuesday"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.em, {
              children: "(no break)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls through to case 3!"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "case 3: printf(\"Wednesday\\n\"); break;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: Wednesday, then break exits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-3",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Day of week (above)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Fall-through for shared logic"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    char grade = 'B';\n\n    switch (grade) {\n        case 'A':\n            printf(\"Excellent!\\n\");\n            break;\n        case 'B':\n        case 'C':\n            printf(\"Good\\n\");\n            break;\n        case 'D':\n            printf(\"Passing\\n\");\n            break;\n        case 'F':\n            printf(\"Failing\\n\");\n            break;\n        default:\n            printf(\"Invalid grade\\n\");\n            break;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Good\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Calculator using switch"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    char op = '+';\n    int a = 10, b = 3;\n\n    switch (op) {\n        case '+':\n            printf(\"%d + %d = %d\\n\", a, b, a + b);\n            break;\n        case '-':\n            printf(\"%d - %d = %d\\n\", a, b, a - b);\n            break;\n        case '*':\n            printf(\"%d * %d = %d\\n\", a, b, a * b);\n            break;\n        case '/':\n            if (b != 0)\n                printf(\"%d / %d = %d\\n\", a, b, a / b);\n            else\n                printf(\"Division by zero!\\n\");\n            break;\n        default:\n            printf(\"Invalid operator\\n\");\n            break;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 + 3 = 13\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Without jump table:"
            }), " O(n) — linear search through cases (compiler falls back to if-else chain)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "With jump table:"
            }), " O(1) — direct jump to the matching case (typical for compact range of values)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compiler typically implements ", (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            }), " as a ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "jump table"
            }), " (lookup table of addresses) for compact case ranges, making it faster than an ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if-else if"
            }), " chain"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(k) where k is the number of cases (for the jump table)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
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
            children: "More efficient than if-else for many cases (jump table)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Only works with ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "integral types"
            }), " (no float/string)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cleaner readability for value-based dispatch"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Case labels must be ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "compile-time constants"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fall-through enables shared logic across cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing break causes unintended fall-through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Single expression evaluated once"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No range checking (", (0,jsx_runtime.jsx)(_components.code, {
              children: "case 1..5:"
            }), " not allowed in C)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Default case handles unexpected values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot declare variables inside case without braces"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "switch-rules-and-limitations",
      children: "Switch Rules and Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The controlling expression must be integer type (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enum"
        }), ", etc.) — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", or string"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Case labels must be ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "compile-time constants"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "const int"
        }), " variables not allowed in C89/C99; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " or literals)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No two case labels may have the same value"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " case is optional; if present, it can be placed anywhere in the switch body"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Variables declared inside a case require braces to limit scope"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Missing break (unintended fall-through)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No ", (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " at end of case"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execution continues into next case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No default case"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Omit ", (0,jsx_runtime.jsx)(_components.code, {
              children: "default:"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unmatched values silently skip switch entirely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate case values"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "case 1:"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "case 1:"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-integral expression"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "switch (f)"
            }), " where f is float"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty case"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "case 5:"
            }), " with no body"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal: does nothing and falls through"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "default not last"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "default:"
            }), " in middle"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal but unusual; explicit break still needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "461-intentional-fall-through",
      children: "4.6.1 Intentional Fall-Through"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Omitting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " causes execution to \"fall through\" to the next case. This is sometimes intentional:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int month = 2;\n    int year = 2024;\n    int days;\n\n    switch (month) {\n        case 1: case 3: case 5: case 7:\n        case 8: case 10: case 12:\n            days = 31;\n            break;\n        case 4: case 6: case 9: case 11:\n            days = 30;\n            break;\n        case 2:\n            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))\n                days = 29;\n            else\n                days = 28;\n            break;\n        default:\n            days = -1; /* invalid month */\n            break;\n    }\n\n    if (days > 0)\n        printf(\"Month %d has %d days\\n\", month, days);\n    else\n        printf(\"Invalid month\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Month 2 has 29 days\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Practice:"
        }), " When using intentional fall-through, add a comment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/* fall through */"
        }), " to document intent and suppress compiler warnings."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "47-conditional-expression-ternary-operator",
      children: "4.7 Conditional Expression (Ternary Operator)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ternary operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      }), " is an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "expression"
      }), " (it yields a value). It is the only C operator that takes three operands, making it useful inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), ", assignments, and initializations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ternary operator is like a coin flip decision at a crossroads: \"Heads? Go left. Tails? Go right.\" The coin flip (condition) immediately determines the outcome with no further branching. You get a value directly → left path or right path → and continue moving."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-5",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "condition ? value_if_true : value_if_false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-4",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The condition expression is evaluated"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the condition is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "non-zero"
        }), " (true), the entire expression evaluates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value_if_true"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the condition is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "zero"
        }), " (false), the entire expression evaluates to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "value_if_false"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The result is used as a value in the surrounding expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-5",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "result = IF condition THEN true_value ELSE false_value\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-6",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 10, y = 20;\n    int max = (x > y) ? x : y;\n\n    printf(\"The maximum is %d\\n\", max);\n\n    printf(\"%d is %s\\n\", x, (x % 2 == 0) ? \"even\" : \"odd\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (x > y)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x=10, y=20"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vars initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x > y) ? x : y"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "10 > 20"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max = 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"The maximum is %d\", max)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: The maximum is 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x % 2 == 0) ? \"even\" : \"odd\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "10 % 2 == 0"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"even\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: 10 is even"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-4",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Maximum of two values"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 10, y = 20;\n    int max = (x > y) ? x : y;\n\n    printf(\"The maximum is %d\\n\", max);\n\n    /* Embedded in printf */\n    printf(\"%d is %s\\n\", x, (x % 2 == 0) ? \"even\" : \"odd\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "The maximum is 20\n10 is even\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Nested ternary (use sparingly)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int score = 75;\n    char *grade = (score >= 90) ? \"A\" :\n                  (score >= 80) ? \"B\" :\n                  (score >= 70) ? \"C\" :\n                  (score >= 60) ? \"D\" : \"F\";\n\n    printf(\"Grade: %s\\n\", grade);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Grade: C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Ternary vs if-else"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Ternary: concise, use for simple assignment */\nint max = (a > b) ? a : b;\n\n/* Equivalent if-else: clearer for complex logic */\nint max;\nif (a > b) {\n    max = a;\n} else {\n    max = b;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) → Condition evaluated once; one of two values is selected"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) → No additional memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-5",
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
            children: "Concise for simple conditional assignments"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reduces readability when nested or complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can be embedded inside expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot contain statements (only expressions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Useful in function arguments and printf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overuse creates hard-to-read code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler optimizes to conditional move instruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging is harder than equivalent if-else"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Side effects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(a > b) ? a++ : b++"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the selected branch evaluates; other side effect is lost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type mismatch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x) ? 1 : \"two\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both branches must have compatible types (or results are coerced)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deep nesting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a ? b ? c ? d : e : f : g"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely hard to read; use if-else"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Void expressions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(x) ? printf(\"A\") : printf(\"B\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works with void functions but confusing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best Practice:"
        }), " Use ternary for simple conditional assignments only. If logic spans multiple lines or has side effects beyond assignment, use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if-else"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "48-the-goto-statement",
      children: ["4.8 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " transfers control unconditionally to a labeled statement. It is widely criticized for creating \"spaghetti code\" but has legitimate uses in kernel-style error cleanup and breaking out of deeply nested loops."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " is like an emergency exit slide on an airplane. Under normal operation, you follow the structured flow (boarding, taxiing, flying). But in an emergency, you pull the handle and go directly to the exit → bypassing all normal procedure. You use it rarely, only when the structured path would be slower or unsafe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-6",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "label_name:\n    statement;\n\ngoto label_name;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-5",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " statement is encountered"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Control ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "immediately"
        }), " transfers to the statement marked by the matching label"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The label must be in the same function"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution continues from the label"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-6",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "GOTO label_name\n...\nlabel_name:\n    statement\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-7",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int i = 0;\n\nstart:\n    printf(\"i = %d\\n\", i);\n    i++;\n\n    if (i < 5) {\n        goto start;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (i < 5)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int i = 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Var initialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "start:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Label reached"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"i = %d\", i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: i = 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "i++"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (i < 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1 < 5"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "goto start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "start:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"i = %d\", i)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output: i = 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "... iterates until i = 5"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (i < 5)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "5 < 5"
            }), " → ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip goto"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program ends"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-5",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Emulating a loop with goto (not recommended for real code)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int i = 0;\n\nstart:\n    printf(\"i = %d\\n\", i);\n    i++;\n\n    if (i < 5) {\n        goto start;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "i = 0\ni = 1\ni = 2\ni = 3\ni = 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: Breaking out of deeply nested loops"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int matrix[3][3] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int target = 5;\n    int i, j;\n\n    for (i = 0; i < 3; i++) {\n        for (j = 0; j < 3; j++) {\n            if (matrix[i][j] == target) {\n                goto found;\n            }\n        }\n    }\n\nfound:\n    printf(\"Found %d at [%d][%d]\\n\", target, i, j);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Found 5 at [1][1]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: Centralized error cleanup (kernel pattern)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    char *buffer = NULL;\n    FILE *fp = NULL;\n    int err = 0;\n\n    buffer = (char *)malloc(1024);\n    if (!buffer) {\n        err = 1;\n        goto cleanup;\n    }\n\n    fp = fopen(\"file.txt\", \"r\");\n    if (!fp) {\n        err = 2;\n        goto cleanup_buffer;\n    }\n\n    /* ... use resources ... */\n\ncleanup_file:\n    fclose(fp);\ncleanup_buffer:\n    free(buffer);\ncleanup:\n    return err;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) → Single unconditional jump"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) → No additional memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-6",
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
            children: "Cleanly exits deeply nested structures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates spaghetti code when overused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Centralizes error cleanup (kernel pattern)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips destructor/cleanup code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Makes control flow hard to trace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Often most readable for error handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can jump over variable initializations (UB)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "legitimate-uses-of-goto",
      children: ["Legitimate Uses of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Breaking out of deeply nested loops"
        }), " → when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " cannot reach all levels:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (i = 0; i < N; i++) {\n    for (j = 0; j < M; j++) {\n        for (k = 0; k < L; k++) {\n            if (condition) {\n                goto exit_all;\n            }\n        }\n    }\n}\nexit_all:\n    /* clean up */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single-point cleanup in functions"
        }), " → the classic Linux kernel pattern:"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char *buffer = malloc(1024);\nFILE *fp = fopen(\"file.txt\", \"r\");\nif (!fp) goto cleanup_buffer;\n/* ... use resources ... */\n\ncleanup_buffer:\n    free(buffer);\n    return;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Jumping over initialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto skip; int x = 5; skip: printf(\"%d\", x);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior → x is uninitialized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Jumping into a block"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto inside; { inside: ; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legal but confusing → avoid"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "goto out of scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot jump between functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labels are function-scoped"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "goto in macros"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Macros containing goto"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates confusing control flow"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Goto should be reserved for error cleanup in deeply nested code"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "49-break-vs-continue",
      children: ["4.9 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " are loop control statements. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "terminates"
      }), " the loop entirely; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "skips the rest"
      }), " of the current iteration and proceeds to the next."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "break"
        }), " is like a fire alarm in a movie theater. No matter what scene is playing, everyone exits immediately → the \"loop\" of watching the movie terminates entirely."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "continue"
        }), " is like skipping a song on a playlist. You don't stop listening to music; you just skip to the next song, continuing the overall listening experience."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-7",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* break → exit the loop */\nwhile (condition) {\n    if (exit_early) {\n        break;\n    }\n}\n\n/* continue → skip to next iteration */\nfor (int i = 0; i < 10; i++) {\n    if (should_skip) {\n        continue;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-6",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "break:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " statement is encountered inside a loop or switch"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control immediately exits the innermost enclosing loop or switch"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execution resumes at the first statement after the loop/switch"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "continue:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " statement is encountered inside a loop"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control jumps to the loop's update expression (for) or condition check (while/do-while)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The remainder of the current iteration is skipped"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-7",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FOR each iteration:\n    IF exit_condition THEN\n        BREAK    → exit loop entirely\n    END IF\n    IF skip_condition THEN\n        CONTINUE → skip to next iteration\n    END IF\n    normal_processing()\nEND FOR\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-8",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      }), " Demonstrate break and continue"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"--- break example ---\\n\");\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            break;\n        }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    printf(\"--- continue example ---\\n\");\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            continue;\n        }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--- break example ---\n1 2\n--- continue example ---\n1 2 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → break (i == 3 triggers break):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i <= 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i == 3"
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
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"1 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"2 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "break"
            }), " → exit loop"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop terminated, continue after loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → continue (i == 3 triggers continue):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i <= 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i == 3"
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
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"1 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"2 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "continue"
            }), " → skip to i++"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"4 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print \"5 \""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop ends naturally"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-6",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: break vs continue"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"break:  \");\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) { break; }\n        printf(\"%d \", i);\n    }\n\n    printf(\"\\ncontinue: \");\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) { continue; }\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "break:  1 2\ncontinue: 1 2 4 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: break in switch vs break in loop"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    /* break in switch */\n    int x = 2;\n    switch (x) {\n        case 1: printf(\"One\\n\"); break;\n        case 2: printf(\"Two\\n\"); break;  /* break exits switch, not loop */\n        case 3: printf(\"Three\\n\"); break;\n    }\n\n    /* break in loop */\n    for (int i = 0; i < 10; i++) {\n        if (i == 4) break;\n        printf(\"%d \", i);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Two\n0 1 2 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 3: continue with while loop (caution!)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int i = 0;\n\n    while (i < 10) {\n        if (i == 5) {\n            continue;  /* BUG: loops forever! i never incremented */\n        }\n        printf(\"%d \", i);\n        i++;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In this example, when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i == 5"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      }), " jumps to the condition check without incrementing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), ". The loop runs forever printing \"0 1 2 3 4 \"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) → Single branch instruction for both break and continue"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) → No additional memory"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "break-vs-continue--comparison-table",
      children: "break vs continue → Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates loop entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips remaining body of current iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In for loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps past loop end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to increment + condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In while loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps past loop end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to condition check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits switch block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In nested loops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks only innermost loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continues only innermost loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit when goal is found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip invalid items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire alarm → everyone leaves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip song → playlist continues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-8",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Nested loops"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " inside inner loop"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only exits the inner loop, not outer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "continue in while with increment after"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(i<10){if(i==5)continue; i++;}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop → i never reaches 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "break in switch inside loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(...){switch(x){case 1: break;}}"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "break exits switch, not the loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "continue not in switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "continue is not used within switch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "410-the-return-statement",
      children: ["4.10 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " Statement"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " statement terminates the current function and optionally returns a value to the caller."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " statement is like a cashier handing you your change and receipt after a purchase. The transaction (function) is complete, and you walk away with the result (return value). If the function is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), ", it is like a doorman saying \"have a nice day\" with nothing in hand → the interaction is simply over."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-8",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "return;           /* void function → no value */\nreturn expression; /* returns the value of expression */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-execution-steps-7",
      children: "Numbered Execution Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The return statement is encountered"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The expression (if any) is evaluated"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The result is placed in the return register (EAX/RAX on x86)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local variables are destroyed (stack is cleaned)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Control returns to the caller at the point after the function call"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--trace-table-9",
      children: "Dry Run / Trace Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint is_even(int n)\n{\n    if (n % 2 == 0) {\n        return 1;   /* early return: even */\n    }\n    return 0;       /* odd */\n}\n\nint main(void)\n{\n    printf(\"%d\\n\", is_even(4));\n    printf(\"%d\\n\", is_even(7));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → is_even(4):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n % 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (== 0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "is_even(4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function called"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n % 2 == 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0 == 0"
            }), " → true"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enter if block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 1;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Returns 1"
            }), ", function exits"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace Table → is_even(7):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "n % 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition (== 0)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "is_even(7)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function called"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (n % 2 == 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1 == 0"
            }), " → false"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip if block"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return 0;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Returns 0"
            }), ", function exits"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-7",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Early return for validation (guard clause)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ndouble divide(int a, int b)\n{\n    if (b == 0) {\n        return 0.0;   /* early return on error */\n    }\n    return (double)a / b;\n}\n\nint main(void)\n{\n    printf(\"%.2f\\n\", divide(10, 3));\n    printf(\"%.2f\\n\", divide(10, 0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3.33\n0.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: return in void functions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid greet(const char *name)\n{\n    if (name == NULL) {\n        return;  /* early exit, no value returned */\n    }\n    printf(\"Hello, %s!\\n\", name);\n}\n\nint main(void)\n{\n    greet(\"Alice\");\n    greet(NULL);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hello, Alice!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-9",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Time Complexity:"
        }), " O(1) → Single jump instruction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Space Complexity:"
        }), " O(1) → Return value passed in register"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-7",
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
            children: "Cleanly exits function from anywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple return points reduce readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables guard clause pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips cleanup code if not careful"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Returns computed value to caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires caller to check for error returns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-9",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Missing return in non-void"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int f(){ /* no return */ }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior if caller uses return value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "return in void function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(){ return 5; }"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multiple return paths"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Several ", (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            }), " statements"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure all paths return a value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "return with expression"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return x++;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns value of x, then increments (postfix)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "411-the-exit-function",
      children: ["4.11 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), " Function"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), " is a standard library function that terminates the program immediately, performing cleanup (flushing buffers, closing files) before exiting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-10",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), " is like pulling the master emergency stop in a factory. Everything stops immediately → all machines (buffers) are safely powered down, all processes are recorded, and the facility shuts down in a controlled manner."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "syntax-9",
      children: "Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdlib.h>\n\nexit(int status);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EXIT_SUCCESS"
        }), " (0) → normal termination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "EXIT_FAILURE"
        }), " (1) → abnormal termination"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c-code-examples-8",
      children: "C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 1: Exit on fatal error"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"nonexistent.txt\", \"r\");\n\n    if (fp == NULL) {\n        printf(\"Fatal error: file not found\\n\");\n        exit(EXIT_FAILURE);\n    }\n\n    /* ... process file ... */\n    fclose(fp);\n    return EXIT_SUCCESS;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fatal error: file not found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example 2: exit() vs return in main()"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid cleanup_func(void)\n{\n    printf(\"Cleanup: atexit handler called\\n\");\n}\n\nint main(void)\n{\n    atexit(cleanup_func);\n\n    printf(\"Program starting...\\n\");\n\n    exit(0);  /* calls atexit handlers, then terminates */\n\n    printf(\"This will never print\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Program starting...\nCleanup: atexit handler called\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "return-vs-exit--comparison",
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "return"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exit()"
      }), " → Comparison"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits current function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates entire program"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stack unwinding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local variables destroyed normally"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All memory reclaimed by OS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "atexit handlers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Called only when return in main()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always called"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffers flushed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (on return from main)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (before termination)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "From any function"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits only that function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates entire program from anywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header needed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (built-in keyword)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdlib.h>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal function completion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fatal error, abnormal termination"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-10",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit() from deep in call stack"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Program terminates immediately; no unwind of local frames"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit(0) vs return 0 in main()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both return 0 to OS; exit() is called implicitly on return from main"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit() without stdlib.h"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler warning; implicit declaration may cause UB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "412-boolean-values-in-c",
      children: "4.12 Boolean Values in C"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C does not have a native boolean type (before C99). Any non-zero value is truthy; zero is falsy."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "truthiness-rules",
      children: "Truthiness Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int done = 0;\n\nif (!done) {      /* equivalent to if (done == 0) */\n    /* executes when done is 0 */\n}\n\nif (done) {       /* equivalent to if (done != 0) */\n    /* executes when done is non-zero */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "c99-boolean-type",
      children: "C99 Boolean Type"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C99 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Bool"
      }), " and the header ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stdbool.h"
      }), " which defines ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdbool.h>\n\nbool is_valid = true;\n\nif (is_valid) {\n    printf(\"Valid\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integer-to-boolean-conversion",
      children: "Integer to Boolean Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int count = 5;\nif (count) {      /* true because count != 0 */\n    printf(\"Count is non-zero\\n\");\n}\n\n/* Explicit comparison (preferred for readability) */\nif (count != 0) {\n    printf(\"Count is non-zero\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-11",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Truth Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero is the only false integer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any non-zero integer is true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "NULL"
            }), " (0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null pointer is zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "'\\0'"
            }), " (null char)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null character has ASCII value 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"false\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String pointer is non-NULL, so true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-tables",
      children: "Comparison Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4131-if-vs-switch",
      children: ["4.13.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if-else if"
            }), " chain"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch-case"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Expression type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any boolean expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only integral types (int, char, enum)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Case values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arbitrary conditions (ranges, comparisons)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time integral constants only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Range checking"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x >= 10 && x <= 20)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No: cannot express ranges (use if)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String comparison"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Yes: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strcmp(a, b) == 0"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Float comparison"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with epsilon)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential checks O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump table O(1) possible"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Default behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Last else (optional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "default case (optional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better for complex conditions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Better for value-based dispatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fall-through"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cases fall through without break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "When to use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range checks, complex conditions, floats, strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single integer/char value, 3+ discrete values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4132-break-vs-continue",
      children: ["4.13.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "break"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "continue"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Effect"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminates loop entirely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips remaining body of current iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In for loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps past loop end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to increment + condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In while loop"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps past loop end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to condition check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits switch block"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In nested loops"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Breaks only innermost loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continues only innermost loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early exit when goal is found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip invalid items"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analogy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fire alarm → everyone leaves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip song → playlist continues"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4133-goto-vs-structured-jumps",
      children: ["4.13.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " vs Structured Jumps"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
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
              children: "return"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Direction"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward or backward"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forward only (out of loop)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backward (to loop top)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Out of function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function-wide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Innermost loop only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Innermost loop only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Abuse potential"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (spaghetti code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Legitimate use"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error cleanup, deep exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal loop termination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function completion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Readability impact"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Severe if overused"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate if many paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4134-conditional-control-constructs",
      children: "4.13.4 Conditional Control Constructs"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns Value?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Can Nest?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Performance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per condition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (limited)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High for value dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) jump table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            }), " (ternary)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Yes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes but risky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low when nested"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "414-interview-corner",
      children: "4.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Common interview questions and tricky concepts related to C control flow."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4141-dangling-else-ambiguity",
      children: "4.14.1 Dangling Else Ambiguity"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " What does the following code print?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 0, y = 1;\nif (x)\n    if (y)\n        printf(\"A\");\n    else\n        printf(\"B\");\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Nothing. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " binds to the inner ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (y)"
      }), ". Since ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x"
      }), " is 0, the outer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (x)"
      }), " is false, so the entire inner ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " is skipped. Nothing prints."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " How to make the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " bind to the outer ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if"
      }), "? Use braces:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (x) {\n    if (y) {\n        printf(\"A\");\n    }\n} else {\n    printf(\"B\");  /* Now binds to outer if */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4142-switch-vs-if-else-chain-performance",
      children: "4.14.2 switch vs if-else Chain Performance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " When should you use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The condition is a single integral expression (int, char, enum)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "There are 3 or more discrete constant values to match"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Performance matters → compilers can implement switch as a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jump table"
        }), " (O(1)) while if-else if chains are O(n)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " when:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Conditions involve ranges, comparisons, or complex boolean logic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The expression is a float, double, or string"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Case values are not compile-time constants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4143-duffs-device",
      children: "4.14.3 Duff's Device"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " What is Duff's Device and how does it work?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Duff's Device is a famous optimized loop-unrolling technique using intentional switch fall-through. It interleaves a switch statement with a do-while loop:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void send(char *to, char *from, int count)\n{\n    int n = (count + 7) / 8;\n    switch (count % 8) {\n        case 0: do { *to++ = *from++;\n        case 7:      *to++ = *from++;\n        case 6:      *to++ = *from++;\n        case 5:      *to++ = *from++;\n        case 4:      *to++ = *from++;\n        case 3:      *to++ = *from++;\n        case 2:      *to++ = *from++;\n        case 1:      *to++ = *from++;\n                } while (--n > 0);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "How it works:"
      }), " The switch jumps into the middle of the loop based on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "count % 8"
      }), ". Each case falls through to execute 8 copies of the transfer, reducing loop overhead by 87.5%. Modern compilers auto-unroll, so this is now mostly of historical interest."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4144-goto-in-the-linux-kernel",
      children: "4.14.4 goto in the Linux Kernel"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Why does the Linux kernel use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " extensively?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The Linux kernel uses a specific ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " pattern for centralized error cleanup. This is considered best practice in C (kernel coding style):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "static int __init some_init_function(void)\n{\n    int ret = 0;\n\n    ret = allocate_resource_a();\n    if (ret)\n        goto out;\n\n    ret = allocate_resource_b();\n    if (ret)\n        goto err_a;\n\n    ret = register_handler();\n    if (ret)\n        goto err_b;\n\n    return 0;  /* success */\n\nerr_b:\n    free_resource_b();\nerr_a:\n    free_resource_a();\nout:\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This pattern avoids deeply nested error handling and ensures cleanup happens exactly once per allocated resource. Without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), ", the same code would require nested ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " pyramids or duplicated cleanup calls."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4145-comma-operator-in-conditions",
      children: "4.14.5 Comma Operator in Conditions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " What prints?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 0;\nif (x = 1, 0) printf(\"A\"); else printf(\"B\");\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " B. The comma operator evaluates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 1"
      }), " (assigns 1 to x) then yields ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " (the rightmost operand). The condition is 0 (false), so the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "else"
      }), " branch executes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4146-short-circuit-evaluation-trick",
      children: "4.14.6 Short-Circuit Evaluation Trick"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[5] = {1, 2, 3, 4, 5};\nint i = 0;\n\n/* Safe: short-circuit prevents out-of-bounds access */\nwhile (i < 5 && arr[i] > 0) {\n    printf(\"%d \", arr[i++]);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " reaches 5, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i < 5"
      }), " is false and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[i]"
      }), " is never evaluated → preventing undefined behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "4147-the--vs--trap",
      children: ["4.14.7 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "=="
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "="
      }), " Trap"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " What does this code do?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 0;\nif (x = 0) {\n    printf(\"Never prints\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 0"
      }), " is an assignment, not comparison. It assigns 0 to x and the expression evaluates to 0 (false). The printf never executes. Modern compilers warn: \"suggest parentheses around assignment used as truth value.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Defense:"
      }), " Write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (0 == x)"
      }), " → Yoda conditions. If you accidentally write ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (0 = x)"
      }), ", the compiler gives an error because you cannot assign to a literal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4148-nested-switch",
      children: "4.14.8 Nested switch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Question:"
      }), " Can you nest switch statements?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Yes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "switch (outer) {\n    case 1:\n        switch (inner) {\n            case 'a': break;\n            case 'b': break;\n        }\n        break;\n    case 2:\n        /* ... */\n        break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use with caution → deeply nested switches are hard to read."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "415-applications-in-real-systems",
      children: "4.15 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4151-linux-kernel-goto-for-error-handling",
      children: "4.15.1 Linux Kernel: goto for Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Linux kernel uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "goto"
      }), " for centralized cleanup in ~95% of functions that allocate multiple resources. This is a deliberate design decision documented in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Documentation/process/coding-style.rst"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* From kernel/sched/core.c (simplified) */\nstatic int sched_cpu_activate(unsigned int cpu)\n{\n    struct rq *rq = cpu_rq(cpu);\n    int ret;\n\n    ret = sched_domain_debug_one();\n    if (ret)\n        goto out;\n\n    ret = update_runtime_enabled();\n    if (ret)\n        goto out;\n\n    set_cpu_active(cpu, true);\n    return 0;\n\nout:\n    /* cleanup */\n    return ret;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4152-embedded-systems-switch-case-state-machines",
      children: "4.15.2 Embedded Systems: switch-case State Machines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Embedded systems use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " inside a loop to implement finite state machines (FSMs):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef enum {\n    STATE_IDLE,\n    STATE_RUNNING,\n    STATE_PAUSED,\n    STATE_ERROR,\n    STATE_COUNT\n} state_t;\n\nint main(void)\n{\n    state_t state = STATE_IDLE;\n    int command = 0;\n\n    printf(\"State Machine Demo\\n\");\n    printf(\"Commands: 0=start, 1=pause, 2=resume, 3=stop, 4=error\\n\\n\");\n\n    while (state != STATE_COUNT) {\n        switch (state) {\n            case STATE_IDLE:\n                printf(\"[IDLE] Waiting for start...\\n\");\n                if (command == 0) state = STATE_RUNNING;\n                break;\n\n            case STATE_RUNNING:\n                printf(\"[RUNNING] Processing...\\n\");\n                if (command == 1) state = STATE_PAUSED;\n                if (command == 3) state = STATE_IDLE;\n                if (command == 4) state = STATE_ERROR;\n                break;\n\n            case STATE_PAUSED:\n                printf(\"[PAUSED] Suspended\\n\");\n                if (command == 2) state = STATE_RUNNING;\n                if (command == 3) state = STATE_IDLE;\n                break;\n\n            case STATE_ERROR:\n                printf(\"[ERROR] Fault detected!\\n\");\n                state = STATE_COUNT;  /* exit */\n                break;\n\n            default:\n                break;\n        }\n        command = 0;\n        break; /* single iteration for demo */\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "State Machine Demo\nCommands: 0=start, 1=pause, 2=resume, 3=stop, 4=error\n\n[IDLE] Waiting for start...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4153-network-protocol-parsing",
      children: "4.15.3 Network Protocol Parsing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Network parsers use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " to decode protocol fields:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void parse_packet(unsigned char *packet)\n{\n    unsigned char version = (packet[0] >> 4) & 0x0F;\n    unsigned char type = packet[1];\n\n    switch (version) {\n        case 4:\n            /* IPv4 handling */\n            switch (type) {\n                case 1:  /* ICMP */ break;\n                case 6:  /* TCP */  break;\n                case 17: /* UDP */  break;\n            }\n            break;\n        case 6:\n            /* IPv6 handling */\n            break;\n        default:\n            /* Unknown version */\n            break;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4154-compiler-optimizations-jump-tables",
      children: "4.15.4 Compiler Optimizations: Jump Tables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For a compact range of case values (e.g., 0–255), compilers generate a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "jump table"
      }), " → an array of code addresses indexed by the switch expression:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-asm",
        children: "; Pseudocode for switch(x) with cases 0-3\n; Jump table at address JUMP_TABLE\n    mov eax, x\n    jmp [JUMP_TABLE + eax*4]  ; Direct jump → O(1)\n\nJUMP_TABLE:\n    dd case0_addr\n    dd case1_addr\n    dd case2_addr\n    dd case3_addr\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is why ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " with many cases can be faster than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else if"
      }), " chains."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4155-flight-control-systems",
      children: "4.15.5 Flight Control Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Safety-critical avionics software uses if-else chains with rigorous verification:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "switch (flight_phase) {\n    case PREFLIGHT:\n        run_system_checks();\n        if (all_checks_pass) {\n            flight_phase = TAKEOFF;\n        } else {\n            flight_phase = ABORT;\n        }\n        break;\n\n    case TAKEOFF:\n        /* ... */\n        break;\n\n    case CRUISE:\n        /* ... */\n        break;\n\n    case LANDING:\n        /* ... */\n        break;\n\n    case ABORT:\n        /* ... */\n        break;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4156-database-query-execution",
      children: "4.15.6 Database Query Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Query planners use switch for operator dispatch:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "typedef enum {\n    OP_SCAN, OP_FILTER, OP_JOIN, OP_SORT, OP_AGGREGATE\n} op_type_t;\n\nvoid execute_operator(plan_node_t *node)\n{\n    switch (node->type) {\n        case OP_SCAN:\n            if (node->has_index) {\n                /* index scan path */\n            } else {\n                /* full table scan path */\n            }\n            break;\n        case OP_FILTER:\n            evaluate_predicate(node->predicate);\n            break;\n        case OP_JOIN:\n            if (node->join_type == HASH_JOIN) {\n                build_hash_table(node->left);\n            }\n            break;\n        /* ... */\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "416-common-patterns",
      children: "4.16 Common Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "guard-clause-pattern",
      children: "Guard Clause Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Check error conditions early and exit:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (ptr == NULL) {\n    return -1;\n}\nif (count <= 0) {\n    return -1;\n}\n/* main logic follows */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "range-checking",
      children: "Range Checking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (x >= 0 && x <= 100) {\n    printf(\"In range\\n\");\n}\n\nint c = getchar();\nif (c == 'y' || c == 'Y') {\n    printf(\"Confirmed\\n\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "short-circuit-safe-access",
      children: "Short-Circuit Safe Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Safe: short-circuit prevents dereferencing NULL */\nint *ptr = NULL;\nif (ptr && *ptr == 42) {\n    /* ptr is NULL, so *ptr is never evaluated */\n    /* ... */\n}\n\n/* Multi-resource allocation with short-circuit */\nFILE *f1 = fopen(\"a.txt\", \"r\");\nFILE *f2 = fopen(\"b.txt\", \"r\");\nif (f1 && f2) {\n    /* both opened successfully → use them */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chained-ternary-for-simple-mapping",
      children: "Chained Ternary for Simple Mapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Map integer to string → concise alternative to switch for simple cases */\nconst char *name = (n == 1) ? \"One\" :\n                   (n == 2) ? \"Two\" :\n                   (n == 3) ? \"Three\" : \"Unknown\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "flag-based-control",
      children: "Flag-based Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int done = 0;\nint error = 0;\n\nwhile (!done && !error) {\n    /* ... process ... */\n    if (fatal) error = 1;\n    if (complete) done = 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Pitfall"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if-else"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary / multi-condition branching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip else if condition is false"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dangling else binds to nearest ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-way branch on integral value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Falls through to next case"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " causes unintended fall-through"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple inline conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns one of two values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nesting reduces readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deeply nested error cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unconditional jump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can create spaghetti code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit loop or switch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exits innermost loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting it breaks only inner loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip to next iteration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jumps to loop condition/test"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop if increment is after continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exit function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns to caller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing return in non-void function"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "exit()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate program"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleans up and exits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No stack unwinding for local variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple if"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x > 0) { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "if-else"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (cond) { ... } else { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "else-if chain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (a) { ... } else if (b) { ... } else { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "switch with defaults"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch(x) { case 1: ... break; default: ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int max = a > b ? a : b;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "goto cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (error) goto cleanup; ... cleanup: free(p); return err;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "break"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while(1) { if(done) break; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "for(...) { if(skip) continue; ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "return early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!valid) return -1;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "exit on fatal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!fp) exit(EXIT_FAILURE);"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Construct"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Input validation guard clause"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!valid) return -1;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-option command parser"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "switch (cmd) { case 'a': ... break; }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clamp value to range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "val = val < 0 ? 0 : val > 255 ? 255 : val;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Resource cleanup on error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (err) goto cleanup;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Safe pointer access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (ptr && ptr->active) { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Skip invalid array elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!valid) continue;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search and exit early"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (found) break;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fatal unrecoverable error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (critical) exit(EXIT_FAILURE);"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What prints? ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x=0; if(x=1) printf(\"A\"); else printf(\"B\");"
        }), "\nA) A\nB) B\nC) Compiler error\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** `x=1` assigns 1 (truthy), so the `if` branch executes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch(x)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " must be which type?\nA) Any type including float\nB) Integer type only (char, short, int, long, enum)\nC) String\nD) Pointer"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `switch` works only with integral types and enums."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (a && b++)"
        }), " guarantee?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b"
        }), " is always incremented\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b++"
        }), " executes only if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " is truthy\nC) Compiler error\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "b"
        }), " is incremented before ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " is evaluated"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Short-circuit `&&` stops if `a` is false, so `b++` never runs."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " in a loop?\nA) break continues, continue stops\nB) break exits the loop, continue skips to next iteration\nC) Both do the same thing\nD) Neither works inside for loops"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `break` terminates the loop; `continue` skips to the next iteration."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does Duff's Device demonstrate?\nA) How to use goto safely\nB) Optimized loop unrolling via switch fall-through\nC) How to implement recursion\nD) String manipulation in C"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Duff's Device uses switch with intentional fall-through for loop unrolling."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the Linux kernel, where is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " commonly used?\nA) Loop constructs\nB) Centralized error cleanup after resource allocation\nC) String processing\nD) Function declarations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The kernel uses goto for single-point cleanup after multiple resource allocations."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x=0)"
        }), " evaluate to?\nA) true\nB) false\nC) Compiler error\nD) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `x=0` assigns 0 (falsy), so the condition is false. Most compilers warn about this."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " be preferred over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if-else if"
        }), "?\nA) When comparing floating-point values\nB) When dispatching on a single integral expression with 3+ constant values\nC) When comparing strings\nD) When conditions involve ranges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Use switch for integer/enum value dispatch; compilers can generate O(1) jump tables."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " statement do in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "for"
        }), " loop?\nA) Exits the loop\nB) Jumps to the increment expression, then checks the condition\nC) Restarts the loop from the beginning\nD) Causes a compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `continue` jumps to the increment expression (step 3 of for loop), then the condition is rechecked."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), "?\nA) They are identical\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " exits the function; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " terminates the whole program\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " terminates the program; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " exits the function\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " is only used in loops"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `return` returns control to the caller; `exit()` terminates the entire process."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decision making"
        }), " in C uses conditions evaluated as zero (false) or non-zero (true)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "if-else"
        }), " chains evaluate conditions top-down; only the first true branch executes"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use braces for control structures to avoid dangling-else ambiguity"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " selects among multiple integer constant cases; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " prevents fall-through"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nested if-else"
        }), " models hierarchical decisions but depth beyond 3 hurts readability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ternary operator ", (0,jsx_runtime.jsx)(_components.code, {
          children: "?:"
        }), " is a conditional expression that yields a value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " is rarely used but valuable for breaking from deep nesting and for cleanup patterns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "exits"
        }), " a loop; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "skips"
        }), " to the next iteration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " exits the current function; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " terminates the entire program"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["C treats zero as false and any non-zero as true; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdbool.h"
        }), " provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bool"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "true"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "false"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duff's Device"
        }), " and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "jump tables"
        }), " are advanced switch optimizations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The Linux kernel uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " for centralized error handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["State machines in embedded systems rely on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " inside loops"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview topics:"
        }), " dangling else, switch vs if-else, Duff's Device, kernel goto patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the dangling-else problem and how does proper brace usage solve it?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What types can a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " expression have? Why can you not use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " on a string?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when you omit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " in a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "switch"
        }), " case? Give an intentional use of fall-through."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " considered harmful in most situations? When is it acceptable?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does C represent boolean values? What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdbool.h"
        }), " provide?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "break"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "continue"
        }), " in loops?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit()"
        }), " in terms of program termination?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does the Linux kernel style favor ", (0,jsx_runtime.jsx)(_components.code, {
          children: "goto"
        }), " for error cleanup?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the advantage of a jump table over an if-else chain?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is Duff's Device and why was it important?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Days in Month:"
          }), " Write a program that reads an integer month number (1–12) and prints the number of days in that month. Use a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), " statement. Account for February having 28 days (ignore leap years)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Triangle Type:"
          }), " Write a program that reads three sides of a triangle and determines whether it is equilateral, isosceles, or scalene. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if-else"
          }), " chains."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Character Classifier:"
          }), " Write a program that reads a character and determines whether it is a vowel, consonant, digit, or other. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), " with fall-through for the vowels (both uppercase and lowercase)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Simple Calculator:"
          }), " Write a program that reads two numbers and an operator (", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "*"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/"
          }), ") and displays the result. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), " for the operator selection. Handle division by zero."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Leap Year Checker:"
          }), " Write a program using nested if-else to determine if a given year is a leap year. A year is a leap year if divisible by 400, or divisible by 4 but not by 100."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Break vs Continue:"
          }), " Write a program that prints numbers from 1 to 20 but:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), " to stop at 15"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            }), " to skip multiples of 3"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "State Machine:"
          }), " Implement a traffic light state machine using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), " with states: RED, GREEN, YELLOW. Each state transitions to the next on a timer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Cleanup Pattern:"
          }), " Write a function that allocates three resources (using malloc) and uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "goto"
          }), " for centralized cleanup if any allocation fails."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Menu System:"
          }), " Write a program that displays a text menu (1. Add, 2. Delete, 3. Search, 4. Quit) and uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), " to handle each option. Loop until the user chooses Quit."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Digit to Word:"
          }), " Write a program that reads a digit (0-9) and prints its word form using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "switch"
          }), ". Handle invalid input with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "default"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Calendar Printer:"
      }), " Write a program that reads a year and a month (1–12) and prints the calendar for that month. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "switch"
      }), " to determine the number of days. To determine the starting day of the month, use Zeller's congruence (research the formula). Print the calendar in the format:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "     March 2025\nSu Mo Tu We Th Fr Sa\n                    1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Recognizing common control flow patterns helps write cleaner more maintainable code"]
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