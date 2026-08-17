"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[9501],{

/***/ 70473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_03_operators_md_a15_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-03-operators-md-a15.json
const site_docs_courses_c_programming_03_operators_md_a15_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/03-operators","title":"Chapter 3: Operators in C --- In-Depth Reference","description":"Previous Control Flow","source":"@site/docs/courses/c-programming/03-operators.md","sourceDirName":"courses/c-programming","slug":"/c-programming/03-operators","permalink":"/ai-engineering-journey/c-programming/03-operators","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-operators","slug":"/c-programming/03-operators","title":"Chapter 3: Operators in C --- In-Depth Reference","sidebar_label":"Chapter 3: Operators in C --- In-Depth Reference","sidebar_position":3},"sidebar":"course-c-programming","previous":{"title":"Chapter 2: Variables and Data Types","permalink":"/ai-engineering-journey/c-programming/02-variables-datatypes"},"next":{"title":"Chapter 4: Control Flow","permalink":"/ai-engineering-journey/c-programming/04-control-flow"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/03-operators.md


const frontMatter = {
	id: '03-operators',
	slug: '/c-programming/03-operators',
	title: 'Chapter 3: Operators in C --- In-Depth Reference',
	sidebar_label: 'Chapter 3: Operators in C --- In-Depth Reference',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Operators in C --- In-Depth Reference';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 3
}, {
  "value": "3.1 Operator Categories --- Comparison Table",
  "id": "31-operator-categories-----comparison-table",
  "level": 2
}, {
  "value": "3.2 Arithmetic Operators",
  "id": "32-arithmetic-operators",
  "level": 2
}, {
  "value": "3.2.1 Real-World Analogy",
  "id": "321-real-world-analogy",
  "level": 3
}, {
  "value": "3.2.2 Syntax and Numbered Steps",
  "id": "322-syntax-and-numbered-steps",
  "level": 3
}, {
  "value": "3.2.3 Pseudocode",
  "id": "323-pseudocode",
  "level": 3
}, {
  "value": "3.2.4 Dry Run --- Integer Division and Modulus",
  "id": "324-dry-run-----integer-division-and-modulus",
  "level": 3
}, {
  "value": "3.2.5 C Code Examples",
  "id": "325-c-code-examples",
  "level": 3
}, {
  "value": "3.2.6 Complexity Analysis",
  "id": "326-complexity-analysis",
  "level": 3
}, {
  "value": "3.2.7 Advantages and Disadvantages",
  "id": "327-advantages-and-disadvantages",
  "level": 3
}, {
  "value": "3.2.8 Edge Cases",
  "id": "328-edge-cases",
  "level": 3
}, {
  "value": "3.3 Relational Operators",
  "id": "33-relational-operators",
  "level": 2
}, {
  "value": "3.3.1 Real-World Analogy",
  "id": "331-real-world-analogy",
  "level": 3
}, {
  "value": "3.3.2 Numbered Steps",
  "id": "332-numbered-steps",
  "level": 3
}, {
  "value": "3.3.3 Pseudocode",
  "id": "333-pseudocode",
  "level": 3
}, {
  "value": "3.3.4 Dry Run --- Trace Table",
  "id": "334-dry-run-----trace-table",
  "level": 3
}, {
  "value": "3.3.5 C Code Examples",
  "id": "335-c-code-examples",
  "level": 3
}, {
  "value": "3.3.6 Complexity",
  "id": "336-complexity",
  "level": 3
}, {
  "value": "3.3.7 A&amp;D Table",
  "id": "337-ad-table",
  "level": 3
}, {
  "value": "3.3.8 Edge Cases",
  "id": "338-edge-cases",
  "level": 3
}, {
  "value": "3.4 Logical Operators",
  "id": "34-logical-operators",
  "level": 2
}, {
  "value": "3.4.1 Real-World Analogy",
  "id": "341-real-world-analogy",
  "level": 3
}, {
  "value": "3.4.2 Syntax and Truth Table",
  "id": "342-syntax-and-truth-table",
  "level": 3
}, {
  "value": "3.4.3 Short-Circuit Evaluation --- Dry Run",
  "id": "343-short-circuit-evaluation-----dry-run",
  "level": 3
}, {
  "value": "3.4.4 C Code Examples",
  "id": "344-c-code-examples",
  "level": 3
}, {
  "value": "3.4.5 Complexity",
  "id": "345-complexity",
  "level": 3
}, {
  "value": "3.4.6 A&amp;D Table",
  "id": "346-ad-table",
  "level": 3
}, {
  "value": "3.4.7 Edge Cases",
  "id": "347-edge-cases",
  "level": 3
}, {
  "value": "3.5 Bitwise Operators",
  "id": "35-bitwise-operators",
  "level": 2
}, {
  "value": "3.5.1 Real-World Analogy",
  "id": "351-real-world-analogy",
  "level": 3
}, {
  "value": "3.5.2 Truth Tables for All Bitwise Operators",
  "id": "352-truth-tables-for-all-bitwise-operators",
  "level": 3
}, {
  "value": "3.5.3 Dry Run --- Bitwise on 8-bit Values",
  "id": "353-dry-run-----bitwise-on-8-bit-values",
  "level": 3
}, {
  "value": "3.5.4 C Code Examples",
  "id": "354-c-code-examples",
  "level": 3
}, {
  "value": "3.5.5 Complexity",
  "id": "355-complexity",
  "level": 3
}, {
  "value": "3.5.6 A&amp;D Table",
  "id": "356-ad-table",
  "level": 3
}, {
  "value": "3.5.7 Edge Cases",
  "id": "357-edge-cases",
  "level": 3
}, {
  "value": "3.6 Assignment Operators",
  "id": "36-assignment-operators",
  "level": 2
}, {
  "value": "3.6.1 Real-World Analogy",
  "id": "361-real-world-analogy",
  "level": 3
}, {
  "value": "3.6.2 Numbered Steps",
  "id": "362-numbered-steps",
  "level": 3
}, {
  "value": "3.6.3 Dry Run --- Compound Assignment Chain",
  "id": "363-dry-run-----compound-assignment-chain",
  "level": 3
}, {
  "value": "3.6.4 C Code Examples",
  "id": "364-c-code-examples",
  "level": 3
}, {
  "value": "3.6.5 Complexity",
  "id": "365-complexity",
  "level": 3
}, {
  "value": "3.6.6 A&amp;D Table",
  "id": "366-ad-table",
  "level": 3
}, {
  "value": "3.6.7 Edge Cases",
  "id": "367-edge-cases",
  "level": 3
}, {
  "value": "3.7 Increment and Decrement (Prefix vs Postfix)",
  "id": "37-increment-and-decrement-prefix-vs-postfix",
  "level": 2
}, {
  "value": "3.7.1 Real-World Analogy",
  "id": "371-real-world-analogy",
  "level": 3
}, {
  "value": "3.7.2 Numbered Steps",
  "id": "372-numbered-steps",
  "level": 3
}, {
  "value": "3.7.3 Dry Run --- Postfix vs Prefix",
  "id": "373-dry-run-----postfix-vs-prefix",
  "level": 3
}, {
  "value": "3.7.4 C Code Examples",
  "id": "374-c-code-examples",
  "level": 3
}, {
  "value": "3.7.5 Complexity",
  "id": "375-complexity",
  "level": 3
}, {
  "value": "3.7.6 A&amp;D Table",
  "id": "376-ad-table",
  "level": 3
}, {
  "value": "3.7.7 Edge Cases --- Sequence Points",
  "id": "377-edge-cases-----sequence-points",
  "level": 3
}, {
  "value": "3.8 Conditional (Ternary) Operator",
  "id": "38-conditional-ternary-operator",
  "level": 2
}, {
  "value": "3.8.1 Real-World Analogy",
  "id": "381-real-world-analogy",
  "level": 3
}, {
  "value": "3.8.2 Syntax",
  "id": "382-syntax",
  "level": 3
}, {
  "value": "3.8.3 Numbered Steps",
  "id": "383-numbered-steps",
  "level": 3
}, {
  "value": "3.8.4 Dry Run",
  "id": "384-dry-run",
  "level": 3
}, {
  "value": "3.8.5 C Code Examples",
  "id": "385-c-code-examples",
  "level": 3
}, {
  "value": "3.8.6 Complexity",
  "id": "386-complexity",
  "level": 3
}, {
  "value": "3.8.7 A&amp;D Table",
  "id": "387-ad-table",
  "level": 3
}, {
  "value": "3.8.8 Edge Cases",
  "id": "388-edge-cases",
  "level": 3
}, {
  "value": "3.9 Comma Operator",
  "id": "39-comma-operator",
  "level": 2
}, {
  "value": "3.9.1 Real-World Analogy",
  "id": "391-real-world-analogy",
  "level": 3
}, {
  "value": "3.9.2 Numbered Steps",
  "id": "392-numbered-steps",
  "level": 3
}, {
  "value": "3.9.3 Dry Run",
  "id": "393-dry-run",
  "level": 3
}, {
  "value": "3.9.4 C Code Examples",
  "id": "394-c-code-examples",
  "level": 3
}, {
  "value": "3.9.5 Complexity",
  "id": "395-complexity",
  "level": 3
}, {
  "value": "3.9.6 A&amp;D Table",
  "id": "396-ad-table",
  "level": 3
}, {
  "value": "3.9.7 Edge Cases",
  "id": "397-edge-cases",
  "level": 3
}, {
  "value": "3.10 <code>sizeof</code> Operator",
  "id": "310-sizeof-operator",
  "level": 2
}, {
  "value": "3.10.1 Real-World Analogy",
  "id": "3101-real-world-analogy",
  "level": 3
}, {
  "value": "3.10.2 Syntax",
  "id": "3102-syntax",
  "level": 3
}, {
  "value": "3.10.3 Numbered Steps",
  "id": "3103-numbered-steps",
  "level": 3
}, {
  "value": "3.10.4 C Code Examples",
  "id": "3104-c-code-examples",
  "level": 3
}, {
  "value": "3.10.5 Complexity",
  "id": "3105-complexity",
  "level": 3
}, {
  "value": "3.10.6 A&amp;D Table",
  "id": "3106-ad-table",
  "level": 3
}, {
  "value": "3.10.7 Edge Cases",
  "id": "3107-edge-cases",
  "level": 3
}, {
  "value": "3.11 Pointer Operators (<code>&amp;</code> and <code>*</code>)",
  "id": "311-pointer-operators--and-",
  "level": 2
}, {
  "value": "3.11.1 Real-World Analogy",
  "id": "3111-real-world-analogy",
  "level": 3
}, {
  "value": "3.11.2 Numbered Steps",
  "id": "3112-numbered-steps",
  "level": 3
}, {
  "value": "3.11.3 C Code Examples",
  "id": "3113-c-code-examples",
  "level": 3
}, {
  "value": "3.11.4 Complexity",
  "id": "3114-complexity",
  "level": 3
}, {
  "value": "3.11.5 A&amp;D Table",
  "id": "3115-ad-table",
  "level": 3
}, {
  "value": "3.11.6 Edge Cases",
  "id": "3116-edge-cases",
  "level": 3
}, {
  "value": "3.12 Member Access Operators (<code>.</code> and <code>-&gt;</code>)",
  "id": "312-member-access-operators--and--",
  "level": 2
}, {
  "value": "3.12.1 Real-World Analogy",
  "id": "3121-real-world-analogy",
  "level": 3
}, {
  "value": "3.12.2 C Code Examples",
  "id": "3122-c-code-examples",
  "level": 3
}, {
  "value": "3.12.3 Complexity",
  "id": "3123-complexity",
  "level": 3
}, {
  "value": "3.12.4 A&amp;D Table",
  "id": "3124-ad-table",
  "level": 3
}, {
  "value": "3.12.5 Edge Cases",
  "id": "3125-edge-cases",
  "level": 3
}, {
  "value": "3.13 Cast Operator",
  "id": "313-cast-operator",
  "level": 2
}, {
  "value": "3.13.1 Real-World Analogy",
  "id": "3131-real-world-analogy",
  "level": 3
}, {
  "value": "3.13.2 C Code Examples",
  "id": "3132-c-code-examples",
  "level": 3
}, {
  "value": "3.13.3 Complexity",
  "id": "3133-complexity",
  "level": 3
}, {
  "value": "3.13.4 A&amp;D Table",
  "id": "3134-ad-table",
  "level": 3
}, {
  "value": "3.13.5 Edge Cases",
  "id": "3135-edge-cases",
  "level": 3
}, {
  "value": "3.14 Operator Precedence and Associativity",
  "id": "314-operator-precedence-and-associativity",
  "level": 2
}, {
  "value": "3.14.1 Real-World Analogy",
  "id": "3141-real-world-analogy",
  "level": 3
}, {
  "value": "3.14.2 Full 15-Level Precedence Table",
  "id": "3142-full-15-level-precedence-table",
  "level": 3
}, {
  "value": "3.14.3 Dry Run --- Complex Expression Evaluation",
  "id": "3143-dry-run-----complex-expression-evaluation",
  "level": 3
}, {
  "value": "3.14.4 Common Precedence Traps",
  "id": "3144-common-precedence-traps",
  "level": 3
}, {
  "value": "3.14.5 Golden Rule",
  "id": "3145-golden-rule",
  "level": 3
}, {
  "value": "3.15 Short-Circuit Evaluation --- In Depth",
  "id": "315-short-circuit-evaluation-----in-depth",
  "level": 2
}, {
  "value": "3.15.1 Definition",
  "id": "3151-definition",
  "level": 3
}, {
  "value": "3.15.2 Dry Run --- Short-Circuit Scenarios",
  "id": "3152-dry-run-----short-circuit-scenarios",
  "level": 3
}, {
  "value": "3.15.3 Common Short-Circuit Patterns",
  "id": "3153-common-short-circuit-patterns",
  "level": 3
}, {
  "value": "3.16 Interview Corner",
  "id": "316-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between <code>++i</code> and <code>i++</code>? Which is faster?",
  "id": "q1-what-is-the-difference-between-i-and-i-which-is-faster",
  "level": 3
}, {
  "value": "Q2: What are sequence points? Give examples of undefined behavior.",
  "id": "q2-what-are-sequence-points-give-examples-of-undefined-behavior",
  "level": 3
}, {
  "value": "Q3: When would you use bitwise AND (<code>&amp;</code>) vs logical AND (<code>&amp;&amp;</code>)?",
  "id": "q3-when-would-you-use-bitwise-and--vs-logical-and-",
  "level": 3
}, {
  "value": "Q4: Explain <code>sizeof</code> on an array vs a pointer.",
  "id": "q4-explain-sizeof-on-an-array-vs-a-pointer",
  "level": 3
}, {
  "value": "Q5: What is the comma operator and when is it useful?",
  "id": "q5-what-is-the-comma-operator-and-when-is-it-useful",
  "level": 3
}, {
  "value": "Q6: Explain the ternary operator. Can it replace <code>if-else</code>?",
  "id": "q6-explain-the-ternary-operator-can-it-replace-if-else",
  "level": 3
}, {
  "value": "Q7: What happens when you shift by a negative count or by the bit width?",
  "id": "q7-what-happens-when-you-shift-by-a-negative-count-or-by-the-bit-width",
  "level": 3
}, {
  "value": "Q8: Signed vs unsigned right shift --- what&#39;s the difference?",
  "id": "q8-signed-vs-unsigned-right-shift-----whats-the-difference",
  "level": 3
}, {
  "value": "Q9: How do you swap two integers without a temporary variable?",
  "id": "q9-how-do-you-swap-two-integers-without-a-temporary-variable",
  "level": 3
}, {
  "value": "Q10: What is operator precedence? Give an example where it matters.",
  "id": "q10-what-is-operator-precedence-give-an-example-where-it-matters",
  "level": 3
}, {
  "value": "3.17 Applications in Real Systems",
  "id": "317-applications-in-real-systems",
  "level": 2
}, {
  "value": "3.17.1 Embedded Systems / GPIO",
  "id": "3171-embedded-systems--gpio",
  "level": 3
}, {
  "value": "3.17.2 Linux Kernel Macros",
  "id": "3172-linux-kernel-macros",
  "level": 3
}, {
  "value": "3.17.3 Graphics / Color Packing",
  "id": "3173-graphics--color-packing",
  "level": 3
}, {
  "value": "3.17.4 Networking / Checksum",
  "id": "3174-networking--checksum",
  "level": 3
}, {
  "value": "3.17.5 Permission Masks (Unix-style)",
  "id": "3175-permission-masks-unix-style",
  "level": 3
}, {
  "value": "3.17.6 Game Development / Collision Detection",
  "id": "3176-game-development--collision-detection",
  "level": 3
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
}, {
  "value": "Additional Interview Questions",
  "id": "additional-interview-questions",
  "level": 3
}, {
  "value": "Common Mistakes and Anti-Patterns",
  "id": "common-mistakes-and-anti-patterns",
  "level": 3
}, {
  "value": "Advanced Topics",
  "id": "advanced-topics",
  "level": 3
}, {
  "value": "Operator Overloading (not in C)",
  "id": "operator-overloading-not-in-c",
  "level": 3
}, {
  "value": "Memory-Mapped Register Access (Real-World Embedded)",
  "id": "memory-mapped-register-access-real-world-embedded",
  "level": 3
}, {
  "value": "XOR Linked List (Memory-Efficient Data Structure)",
  "id": "xor-linked-list-memory-efficient-data-structure",
  "level": 3
}, {
  "value": "Compiler Built-ins for Bit Operations",
  "id": "compiler-built-ins-for-bit-operations",
  "level": 3
}, {
  "value": "Cheat Sheet Quick Reference",
  "id": "cheat-sheet-quick-reference",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 3
}, {
  "value": "Additional Quiz Questions",
  "id": "additional-quiz-questions",
  "level": 3
}, {
  "value": "Complete Mini-Reference: Operator Precedence Hand-Rule",
  "id": "complete-mini-reference-operator-precedence-hand-rule",
  "level": 3
}, {
  "value": "Quick Memory Aid: <code>++*p++</code>",
  "id": "quick-memory-aid-p",
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
    header: "header",
    hr: "hr",
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
        id: "chapter-3-operators-in-c-----in-depth-reference",
        children: "Chapter 3: Operators in C --- In-Depth Reference"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/01-introduction",
          children: "Introduction to C"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/04-control-flow",
          children: "Control Flow"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply arithmetic, relational, logical, and bitwise operators correctly in any expression"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand operator precedence (15 levels) and associativity (L-to-R / R-to-L)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish prefix vs. postfix increment/decrement with sequence-point awareness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ternary, comma, sizeof, pointer, member-access, and cast operators fluently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Predict short-circuit evaluation, overflow, and signed/unsigned shift behavior"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize real-world applications: embedded GPIO, kernel macros, networking, graphics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Arithmetic Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "+ - * / %"
            }), " for numeric computation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Integer division truncates; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), " requires integers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relational Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "< > <= >= == !="
            }), " compare values"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Result is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ": 1 (true) or 0 (false)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`&&"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise Operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "^ ~ << >>` operate on bits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "="
            }), " and compound forms (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+="
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compound forms read, compute, and write in one op"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Increment / Decrement"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x++"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix returns new value; postfix returns old value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary / Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "? :"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact inline if-else that yields a value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comma Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluates both operands, returns rightmost"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time operator"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "size_t"
            }), " byte count; expression not evaluated"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer Operators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), " (address-of), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " (dereference)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core of C memory model"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Member Access"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " (direct), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " (indirect)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access struct/union members"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cast Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit type conversion; may lose data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Precedence & Associativity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-level table"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When in doubt: use parentheses"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"3.1 Operator Categories\"] --> B[\"3.2 Arithmetic\"]\n    B --> C[\"3.3 Relational\"]\n    C --> D[\"3.4 Logical & Short-Circuit\"]\n    D --> E[\"3.5 Bitwise\"]\n    E --> F[\"3.6 Assignment\"]\n    F --> G[\"3.7 Inc/Dec (Prefix vs Postfix)\"]\n    G --> H[\"3.8 Ternary\"]\n    H --> I[\"3.9 Comma\"]\n    I --> J[\"3.10 sizeof\"]\n    J --> K[\"3.11 Pointer (&, *)\"]\n    K --> L[\"3.12 Member Access (., ->)\"]\n    L --> M[\"3.13 Cast\"]\n    M --> N[\"3.14 Precedence & Associativity\"]\n    N --> O[\"3.15 Interview Corner & Applications\"]\n    O --> P[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "31-operator-categories-----comparison-table",
      children: "3.1 Operator Categories --- Comparison Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C operators fall into distinct categories. This table shows every category, its operators, associativity, operand count, and a quick example."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operands"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Associativity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic (binary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+ - * / %"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic (unary)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+ -"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment / Decrement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++ --"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (prefix/postfix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RL (prefix), LR (postfix)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x--"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "< > <= >= == !="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a < b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`&&"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "!`"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2 (except ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), ": 1)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "^ ~ << >>`"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2 (except ", (0,jsx_runtime.jsx)(_components.code, {
              children: "~"
            }), ": 1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`= += -= *= /= %= &="
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= ^= <<= >>=`"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R L"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary / Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "? :"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a ? b : c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a, b"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (type or expr)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(int)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer (address-of)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&x"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer (dereference)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member access (direct)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "s.field"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Member access (indirect)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "p->field"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "R L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(double)a"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "varies"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f(a,b)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Takeaway:"
        }), " Know the category to predict behavior. Assignment and ternary are the only right-to-left binary categories."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "32-arithmetic-operators",
      children: "3.2 Arithmetic Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "321-real-world-analogy",
      children: "3.2.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of arithmetic operators like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cash register"
      }), ". You put in two numbers (operands), press an operation button (operator), and the register displays a result. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " button adds item prices, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " button calculates 3 items x 4 each = 12, the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "%"
      }), " button gives the remainder when splitting a bill unevenly."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " --- combining two piles of coins"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "-"
        }), " --- removing coins from a pile"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), " --- repeated addition (3 rows of 5 chairs = 15 chairs)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "/"
        }), " --- splitting a pizza into equal slices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), " --- what's left after splitting evenly"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "322-syntax-and-numbered-steps",
      children: "3.2.2 Syntax and Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "result = operand1  operator  operand2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Execution steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operand1"
        }), " to its numeric value (left-to-right evaluation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operand2"
        }), " to its numeric value"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply the operator"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If both operands are ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", perform ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "integer arithmetic"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If either operand is floating-point, perform ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "floating-point arithmetic"
        }), " (usual arithmetic conversion)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store or use the result"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "323-pseudocode",
      children: "3.2.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION apply_arithmetic(op1, op2, operator):\n    IF operator IS '+': RETURN op1 + op2\n    IF operator IS '-': RETURN op1 - op2\n    IF operator IS '*': RETURN op1 * op2\n    IF operator IS '/':\n        IF op2 == 0: SIGNAL \"division by zero\" (undefined behavior)\n        IF both operands are integers: RETURN op1 / op2\n        ELSE: RETURN op1 / op2\n    IF operator IS '%':\n        IF op2 == 0: SIGNAL \"division by zero\" (undefined behavior)\n        IF op1 or op2 is negative: implementation-defined before C99, defined in C99+\n        RETURN op1 % op2\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "324-dry-run-----integer-division-and-modulus",
      children: "3.2.4 Dry Run --- Integer Division and Modulus"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intermediate"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Final Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a = 15, b = 4;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=15, b=4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "15 + 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "19"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a - b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "15 - 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a * b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "15 * 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a / b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "15 / 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 (truncated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a % b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "15 % 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15 - (3x4) = 3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-7 / 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "integer division"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "floor toward zero = -2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "7.0 / 3.0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "float division"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.333..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.333333"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "7 / 3"
            }), " (both int)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int division first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2, then if assigned to double -> 2.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2.0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "325-c-code-examples",
      children: "3.2.5 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 15, b = 4;\n\n    printf(\"a + b = %d\\n\", a + b);   /* 19 */\n    printf(\"a - b = %d\\n\", a - b);   /* 11 */\n    printf(\"a * b = %d\\n\", a * b);   /* 60 */\n    printf(\"a / b = %d\\n\", a / b);   /* 3  (integer division truncates) */\n    printf(\"a %% b = %d\\n\", a % b);  /* 3  (modulus = remainder) */\n\n    double x = 7.0 / 3.0;\n    double y = 7 / 3;\n    double z = (double)7 / 3;\n    printf(\"x = %f, y = %f, z = %f\\n\", x, y, z);\n\n    printf(\"-7 %% 3 = %d\\n\", -7 % 3);\n    printf(\"7 %% -3 = %d\\n\",  7 % -3);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a + b = 19\na - b = 11\na * b = 60\na / b = 3\na % b = 3\nx = 2.333333, y = 2.000000, z = 2.333333\n-7 % 3 = -1\n7 % -3 = 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "326-complexity-analysis",
      children: "3.2.6 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All arithmetic operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single CPU instruction (or a few)"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "327-advantages-and-disadvantages",
      children: "3.2.7 Advantages and Disadvantages"
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
            children: "Directly maps to CPU instructions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer division truncates silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), " useful for cyclic behavior (wrap-around)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), " doesn't work on floats"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed-type arithmetic via implicit conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implicit conversion can lose precision (double to int)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fast --- single cycle on modern CPUs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division and modulus are slower (10-30 cycles)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "328-edge-cases",
      children: "3.2.8 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Division by zero"
        }), " -> undefined behavior (program may crash or produce garbage)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INT_MIN / -1"
        }), " -> undefined behavior (two's complement overflow)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "INT_MIN % -1"
        }), " -> undefined behavior in C99+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Overflow in signed addition/multiplication"
        }), " -> undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsigned overflow"
        }), " -> wraps around (well-defined modulo 2^n)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative modulus before C99"
        }), " -> implementation-defined; C99+ specifies remainder follows dividend sign"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating-point division by 0.0"
        }), " -> yields ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+inf"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-inf"
        }), " (well-defined in IEEE 754)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "33-relational-operators",
      children: "3.3 Relational Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "331-real-world-analogy",
      children: "3.3.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Relational operators are like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "height comparison at a theme park"
      }), ". You compare two heights: \"Is the child tall enough for this ride?\" ( ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">="
      }), " ), \"Is this person shorter than that one?\" ( ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<"
      }), " ). The answer is always a clear ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "yes"
      }), " (1) or ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no"
      }), " (0)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "332-numbered-steps",
      children: "3.3.2 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operand1"
        }), " to its value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "operand2"
        }), " to its value"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform the comparison"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1"
        }), " if true, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " if false"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "333-pseudocode",
      children: "3.3.3 Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION compare(op1, op2, operator):\n    IF operator IS '<': RETURN op1 < op2 ? 1 : 0\n    IF operator IS '>': RETURN op1 > op2 ? 1 : 0\n    IF operator IS '<=': RETURN op1 <= op2 ? 1 : 0\n    IF operator IS '>=': RETURN op1 >= op2 ? 1 : 0\n    IF operator IS '==': RETURN op1 == op2 ? 1 : 0\n    IF operator IS '!=': RETURN op1 != op2 ? 1 : 0\nEND\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "334-dry-run-----trace-table",
      children: "3.3.4 Dry Run --- Trace Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "b"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "c"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a == c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 == 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a == b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 == 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a < b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 < 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a != b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 != 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b < a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 < 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b >= c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10 >= 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "335-c-code-examples",
      children: "3.3.5 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 5, b = 10, c = 5;\n\n    printf(\"a == c : %d\\n\", a == c);   /* 1 */\n    printf(\"a == b : %d\\n\", a == b);   /* 0 */\n    printf(\"a < b  : %d\\n\", a < b);    /* 1 */\n    printf(\"a != b : %d\\n\", a != b);   /* 1 */\n    printf(\"b < a  : %d\\n\", b < a);    /* 0 */\n    printf(\"b >= c : %d\\n\", b >= c);   /* 1 */\n\n    /* Chained comparison trap: a < b < c */\n    /* Evaluates as: (a < b) < c => (1) < c => 1 < 5 => 1 */\n    printf(\"a < b < c : %d (WRONG for math comparison!)\\n\", a < b < c);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a == c : 1\na == b : 0\na < b  : 1\na != b : 1\nb < a  : 0\nb >= c : 1\na < b < c : 1 (WRONG for math comparison!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "336-complexity",
      children: "3.3.6 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All relational operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "337-ad-table",
      children: "3.3.7 A&D Table"
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
            children: "Simple, compile to single CMP instruction"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Chaining ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a < b < c"
            }), " doesn't work as expected"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (0/1) for easy use in conditions"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparing floating-point for equality is unreliable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Work with any arithmetic type"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "=="
            }), " on structs is not allowed (must compare field-by-field)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "338-edge-cases",
      children: "3.3.8 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "="
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "=="
          })]
        }), " --- most common C bug: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x = 5)"
        }), " assigns 5, always true"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chained comparisons"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a < b < c"
        }), " evaluates left-to-right: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a < b) < c"
        }), " (compares 0/1 to c)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating-point equality"
        }), " --- avoid ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f1 == f2"
        }), " due to rounding; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fabs(f1 - f2) < EPSILON"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NaN comparisons"
        }), " --- every comparison with NaN returns false (including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "NaN == NaN"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "34-logical-operators",
      children: "3.4 Logical Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "341-real-world-analogy",
      children: "3.4.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Logical operators are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "security checkpoint gates"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), " (AND) --- Two guards must both approve entry; if the first says \"no\", the second never speaks (short-circuit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " (OR) --- Either guard can approve entry; if the first says \"yes\", the second never speaks (short-circuit)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "!"
        }), " (NOT) --- A gate that opens when the guard is NOT present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "342-syntax-and-truth-table",
      children: "3.4.2 Syntax and Truth Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| A | B | A && B | A || B | !A |\n|---|---|--------|---------|-----|\n| 0 (false) | 0 (false) | 0 | 0 | 1 |\n| 0 (false) | 1 (true)  | 0 | 1 | 1 |\n| 1 (true)  | 0 (false) | 0 | 1 | 0 |\n| 1 (true)  | 1 (true)  | 1 | 1 | 0 |"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "343-short-circuit-evaluation-----dry-run",
      children: "3.4.3 Short-Circuit Evaluation --- Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Short-circuit means: for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A && B"
      }), ", if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " is false, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " is never evaluated. For ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A || B"
      }), ", if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A"
      }), " is true, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "B"
      }), " is never evaluated."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a != 0 && b / a > 1"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = 0"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a != 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0 != 0"
            }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0 (false)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuit: skip RHS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b / a > 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "NOT EVALUATED"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero avoided"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dry run: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a != 0 && b / a > 1"
        }), " when ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = 2, b = 10"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Next Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a != 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "2 != 0"
            }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 (true)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue evaluating RHS"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b / a > 1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "10 / 2 = 5 > 1"
            }), " -> ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1 (true)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire expression is true"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "344-c-code-examples",
      children: "3.4.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 0, b = 5;\n    int side_effect = 0;\n\n    /* Short-circuit prevents division by zero */\n    if (a != 0 && b / a > 1)\n        printf(\"This won't print\\n\");\n    else\n        printf(\"Short-circuit saved us from division by zero\\n\");\n\n    /* Side-effect demonstration */\n    int x = 1;\n    if (x == 1 || (side_effect = 99))\n        printf(\"Side-effect variable: %d (NOT 99 --- short-circuited!)\\n\", side_effect);\n\n    /* Logical NOT */\n    int flag = 0;\n    if (!flag)\n        printf(\"flag is false (zero), so !flag is true\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Short-circuit saved us from division by zero\nSide-effect variable: 0 (NOT 99 --- short-circuited!)\nflag is false (zero), so !flag is true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "345-complexity",
      children: "3.4.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            }), ", `"]
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ", "
            }), "!`"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "346-ad-table",
      children: "3.4.6 A&D Table"
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
            children: "Short-circuit avoids expensive/complex side computations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can skip side-effects you intended (subtle bugs)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Natural boolean algebra for conditions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Result is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (0/1), not a distinct bool type (C89)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "!"
            }), " works on any scalar: zero = false, non-zero = true"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Double ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!!"
            }), " idiom needed to normalize to 0/1"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "347-edge-cases",
      children: "3.4.7 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side effects in RHS"
        }), " --- code in the right operand may never execute"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "!"
          }), " on non-boolean"]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!100"
        }), " = 0 (any non-zero is truthy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "&&"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&"
          })]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        }), " short-circuits, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " always evaluates both"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "||"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "|"
          })]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " short-circuits, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " always evaluates both"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short-circuit in function call arguments"
        }), " --- NOT guaranteed (argument evaluation order is unspecified)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "35-bitwise-operators",
      children: "3.5 Bitwise Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "351-real-world-analogy",
      children: "3.5.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bitwise operators are like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bank of light switches"
      }), ". Each bit is one switch:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " (AND) --- Two switches in series; current flows only if BOTH are on"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " (OR) --- Two switches in parallel; current flows if AT LEAST one is on"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "^"
        }), " (XOR) --- A 3-way switch; current flows if the switches are in DIFFERENT positions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "~"
        }), " (NOT) --- Flips every switch in the panel"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<<"
        }), " (LEFT SHIFT) --- Moving every switch one position to the left, discarding the leftmost"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: ">>"
        }), " (RIGHT SHIFT) --- Moving every switch one position to the right"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "352-truth-tables-for-all-bitwise-operators",
      children: "3.5.2 Truth Tables for All Bitwise Operators"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["AND (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), "):"]
      }), " Result bit is 1 only if BOTH operand bits are 1"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A & B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["OR (", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), "):"]
      }), " Result bit is 1 if AT LEAST ONE operand bit is 1"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "| A | B | A | B |\n|---|---|--------|\n| 0 | 0 | 0 |\n| 0 | 1 | 1 |\n| 1 | 0 | 1 |\n| 1 | 1 | 1 |"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["XOR (", (0,jsx_runtime.jsx)(_components.code, {
          children: "^"
        }), "):"]
      }), " Result bit is 1 if operand bits are DIFFERENT"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A ^ B"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["NOT (", (0,jsx_runtime.jsx)(_components.code, {
          children: "~"
        }), "):"]
      }), " Flips every bit (ones' complement)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "~A"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Left Shift (", (0,jsx_runtime.jsx)(_components.code, {
          children: "<<"
        }), "):"]
      }), " Shifts bits left, fills right with 0, discards left overflow; equivalent to multiply by 2^n (for values that don't overflow)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary (8-bit)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decimal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3 << 1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0011"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0110"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3 << 2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0011"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0000 1100"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3 << 4"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0011"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0011 0000"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "48"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "128 << 1"
            }), " (unsigned)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1000 0000"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0000"
            }), " (overflow)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Right Shift (", (0,jsx_runtime.jsx)(_components.code, {
          children: ">>"
        }), "):"]
      }), " Shifts bits right. For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "unsigned"
      }), " types: logical shift (fills with 0). For ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "signed"
      }), " types: implementation-defined (usually arithmetic shift --- fills with sign bit)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary (8-bit signed)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Decimal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "16 >> 1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0001 0000"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0000 1000"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "16 >> 3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0001 0000"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0000 0010"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-16 >> 1"
            }), " (arithmetic)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1111 0000"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1111 1000"
            }), " (sign-extended)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "-16 >> 1"
            }), " (logical)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "1111 0000"
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "0111 1000"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "120"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "353-dry-run-----bitwise-on-8-bit-values",
      children: "3.5.3 Dry Run --- Bitwise on 8-bit Values"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Operands: a = 0x6D (0110 1101), b = 0xB7 (1011 0111)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Calculation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result (Hex)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result (Decimal)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a & b"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0110 1101 & 1011 0111 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0010 0101"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "37"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "`a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b`"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0110 1101"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1011 0111 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1111 1111"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a ^ b"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0110 1101 ^ 1011 0111 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1101 1010"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xDA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "218"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~a"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["~0110 1101 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1001 0010"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x92"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "146"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a << 2"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0110 1101 << 2 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "1011 0100"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xB4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "180"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a >> 3"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["0110 1101 >> 3 = ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "0000 1101"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x0D"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "354-c-code-examples",
      children: "3.5.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    unsigned char a = 0x6D;   /* 0110 1101 */\n    unsigned char b = 0xB7;   /* 1011 0111 */\n\n    printf(\"a & b  = 0x%02X  (binary: 0010 0101)\\n\", a & b);\n    printf(\"a | b  = 0x%02X  (binary: 1111 1111)\\n\", a | b);\n    printf(\"a ^ b  = 0x%02X  (binary: 1101 1010)\\n\", a ^ b);\n    printf(\"~a     = 0x%02X  (binary: 1001 0010)\\n\", (unsigned char)~a);\n    printf(\"a << 2 = 0x%02X  (binary: 1011 0100)\\n\", a << 2);\n    printf(\"a >> 3 = 0x%02X  (binary: 0000 1101)\\n\", a >> 3);\n\n    unsigned char flags = 0x00;\n    flags |= (1 << 3);\n    printf(\"After setting bit 3: 0x%02X\\n\", flags);\n    flags &= ~(1 << 3);\n    printf(\"After clearing bit 3: 0x%02X\\n\", flags);\n    flags ^= (1 << 5);\n    printf(\"After toggling bit 5: 0x%02X\\n\", flags);\n    if (flags & (1 << 5))\n        printf(\"Bit 5 is SET\\n\");\n\n    signed char s = -16;\n    unsigned char u = 240;\n    printf(\"signed   -16 >> 1 = %d\\n\", s >> 1);\n    printf(\"unsigned 240 >> 1 = %u\\n\", u >> 1);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "a & b  = 0x25  (binary: 0010 0101)\na | b  = 0xFF  (binary: 1111 1111)\na ^ b  = 0xDA  (binary: 1101 1010)\n~a     = 0x92  (binary: 1001 0010)\na << 2 = 0xB4  (binary: 1011 0100)\na >> 3 = 0x0D  (binary: 0000 1101)\nAfter setting bit 3: 0x08\nAfter clearing bit 3: 0x00\nAfter toggling bit 5: 0x20\nBit 5 is SET\nsigned   -16 >> 1 = -8\nunsigned 240 >> 1 = 120\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "355-complexity",
      children: "3.5.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All bitwise operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "356-ad-table",
      children: "3.5.6 A&D Table"
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
            children: "Extremely fast (single CPU cycle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability suffers --- code looks cryptic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Essential for hardware/embedded programming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed right shift is implementation-defined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compact flags/masks (one int = 32 flags)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can't operate on floats/doubles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "XOR swap trick avoids temporary variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift count >= width is undefined behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "357-edge-cases",
      children: "3.5.7 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shift count >= type width"
        }), " -> undefined behavior (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 << 32"
        }), " on 32-bit int)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative shift count"
        }), " -> undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signed right shift"
        }), " -> implementation-defined (arithmetic on most compilers)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Left shift of signed negative value"
        }), " -> undefined behavior (before C99)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "~"
          }), " on a small integer"]
        }), " -> integer promotion applies: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "~0x6D"
        }), " promotes to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " first"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "&"
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "&&"
          }), " confusion"]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 & 3"
        }), " = 1 (bitwise), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 && 3"
        }), " = 1 (logical) --- same result here, but different operations"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "36-assignment-operators",
      children: "3.6 Assignment Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "361-real-world-analogy",
      children: "3.6.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assignment is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "labeling a storage box"
      }), ": ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 5"
      }), " means \"take the number 5 and put it in the box labeled x\". Compound assignment ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x += 3"
      }), " means \"open box x, add 3 to what's inside, put the result back in box x\"."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "362-numbered-steps",
      children: "3.6.2 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Simple assignment (", (0,jsx_runtime.jsx)(_components.code, {
          children: "x = expr"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate the right-hand side ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expr"
        }), " to a value"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Store that value into the memory location of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The expression yields the assigned value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Compound assignment (", (0,jsx_runtime.jsx)(_components.code, {
          children: "x += expr"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the current value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expr"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply operator (", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+="
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Store result back into ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The expression yields the new value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "363-dry-run-----compound-assignment-chain",
      children: "3.6.3 Dry Run --- Compound Assignment Chain"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(uninit)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x += 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 10 + 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x -= 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 15 - 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x *= 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 12 * 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x /= 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 24 / 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x %= 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 6 % 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x <<= 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 2 << 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x &= 0xF"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x = 4 & 15"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "364-c-code-examples",
      children: "3.6.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 10;\n    printf(\"Initial x = %d\\n\", x);\n\n    x += 5;      printf(\"After += 5:  x = %d\\n\", x);   /* 15 */\n    x -= 3;      printf(\"After -= 3:  x = %d\\n\", x);   /* 12 */\n    x *= 2;      printf(\"After *= 2:  x = %d\\n\", x);   /* 24 */\n    x /= 4;      printf(\"After /= 4:  x = %d\\n\", x);   /* 6  */\n    x %= 4;      printf(\"After %%= 4:  x = %d\\n\", x);  /* 2  */\n\n    unsigned int f = 0x0F;\n    f &= 0xAA;   printf(\"After &= 0xAA: 0x%X\\n\", f);   /* 0x0A */\n    f |= 0x50;   printf(\"After |= 0x50: 0x%X\\n\", f);   /* 0x5A */\n    f ^= 0xFF;   printf(\"After ^= 0xFF: 0x%X\\n\", f);   /* 0xA5 */\n    f <<= 2;     printf(\"After <<= 2:   0x%X\\n\", f);   /* 0x94 */\n\n    int y;\n    printf(\"Value of (y = 42) is: %d\\n\", y = 42);\n\n    int a, b, c;\n    a = b = c = 10;\n    printf(\"a=%d, b=%d, c=%d\\n\", a, b, c);             /* 10, 10, 10 */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Initial x = 10\nAfter += 5:  x = 15\nAfter -= 3:  x = 12\nAfter *= 2:  x = 24\nAfter /= 4:  x = 6\nAfter %= 4:  x = 2\nAfter &= 0xAA: 0x0A\nAfter |= 0x50: 0x5A\nAfter ^= 0xFF: 0xA5\nAfter <<= 2:   0x94\nValue of (y = 42) is: 42\na=10, b=10, c=10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "365-complexity",
      children: "3.6.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "All assignment operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "366-ad-table",
      children: "3.6.6 A&D Table"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Concise: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x += 2"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x = x + 2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can hide intent if overused"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x = y = z = 0"
            }), " chains naturally"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assignment inside condition (", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (x = 5)"
            }), ") is usually a bug"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compound forms reduce redundancy"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x = x + y"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x += y"
            }), " --- identical after optimization"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right-to-left associativity enables useful patterns"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Prevents ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a = (b = 4) + 2"
            }), " style (works but odd)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "367-edge-cases",
      children: "3.6.7 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Assignment in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if"
          }), " condition"]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x = 5)"
        }), " is always true; use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Wparentheses"
        }), " in GCC to warn"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unsigned underflow"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "unsigned u = 0; u -= 1;"
        }), " wraps to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UINT_MAX"
        }), " (well-defined)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signed overflow"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = INT_MAX; x += 1;"
        }), " is undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assignment returns value"
        }), " --- enables chaining, but also enables ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x = func())"
        }), " patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "37-increment-and-decrement-prefix-vs-postfix",
      children: "3.7 Increment and Decrement (Prefix vs Postfix)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "371-real-world-analogy",
      children: "3.7.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Prefix (", (0,jsx_runtime.jsx)(_components.code, {
          children: "++x"
        }), ")"]
      }), " --- \"Eat your dinner, then go outside.\" Action first, then the result is available."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Postfix (", (0,jsx_runtime.jsx)(_components.code, {
          children: "x++"
        }), ")"]
      }), " --- \"Go outside, then do your homework.\" The current value is used first, then the change happens."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "372-numbered-steps",
      children: "3.7.2 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Postfix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x++"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the current value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Save this current value as the result of the expression"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " by 1"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return the saved (old) value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Prefix ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++x"
        }), ":"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the current value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Increment ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " by 1"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return the new value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "373-dry-run-----postfix-vs-prefix",
      children: "3.7.3 Dry Run --- Postfix vs Prefix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x (before)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x (after)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "y = x++"
            }), " where x=5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save current value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "y = saved = 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "x++"
            }), " (increment)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "y = ++x"
            }), " where x=5"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Increment x to 6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "y = new = 6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "374-c-code-examples",
      children: "3.7.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 5;\n    int y = x++;       /* y = 5, x = 6 */\n    printf(\"Postfix: x = %d, y = %d\\n\", x, y);\n\n    x = 5;\n    y = ++x;           /* y = 6, x = 6 */\n    printf(\"Prefix:  x = %d, y = %d\\n\", x, y);\n\n    x = 5;\n    printf(\"x++ = %d, now x = %d\\n\", x++, x);\n\n    x = 5;\n    printf(\"++x = %d, now x = %d\\n\", ++x, x);\n\n    printf(\"For loop with i++: \");\n    for (int i = 0; i < 3; i++)\n        printf(\"%d \", i);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Postfix: x = 6, y = 5\nPrefix:  x = 6, y = 6\nx++ = 5, now x = 6\n++x = 6, now x = 6\nFor loop with i++: 0 1 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "375-complexity",
      children: "3.7.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x++"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "--x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x--"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "376-ad-table",
      children: "3.7.6 A&D Table"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Compact loop control (", (0,jsx_runtime.jsx)(_components.code, {
              children: "for(i=0;i<n;i++)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix may create a temporary (pre-C optimizers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Elegant pointer traversal (", (0,jsx_runtime.jsx)(_components.code, {
              children: "*p++"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overuse in expressions creates unreadable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Two forms give precise control of timing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x++"
            }), " in same expression -> undefined behavior"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "377-edge-cases-----sequence-points",
      children: "3.7.7 Edge Cases --- Sequence Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Between two sequence points, a variable may be modified at most once. Violating this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 5;\ni = i++;               /* UB: i modified twice between sequence points */\ni++ + i++;             /* UB: i modified twice */\nprintf(\"%d %d\", ++i, i++);   /* UB: no sequence point between arguments */\n*(p++) = *(p++);       /* UB: p modified twice */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Well-defined examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (int i = 0; i < 10; i++)   /* OK: i++ at end of each iteration */\nwhile (*p++ = *q++);           /* OK: each ++ on different variable */\nif (a[i++] > 5) continue;     /* OK if i not used elsewhere in same statement */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "38-conditional-ternary-operator",
      children: "3.8 Conditional (Ternary) Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "381-real-world-analogy",
      children: "3.8.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ternary operator is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vending machine"
      }), " that asks one question: \"Do you have enough money?\" If yes -> dispense soda. If no -> show \"insufficient funds\". The result is whatever was produced (the soda or the message)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "382-syntax",
      children: "3.8.2 Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "condition ? expression_if_true : expression_if_false\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "383-numbered-steps",
      children: "3.8.3 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "condition"
        }), " (which must be scalar --- any non-zero is true)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If condition is true (non-zero), evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expression_if_true"
        }), "; skip the false branch"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If condition is false (zero), evaluate ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expression_if_false"
        }), "; skip the true branch"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The result of whichever branch was evaluated becomes the value of the whole expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "384-dry-run",
      children: "3.8.4 Dry Run"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "True Expr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "False Expr"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Evaluates"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a > b"
            }), " (10 > 20 -> 0)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " (10)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " (20)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["False branch: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a > b"
            }), " (20 > 10 -> 1)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " (20)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            }), " (10)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["True branch: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "385-c-code-examples",
      children: "3.8.5 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 10, b = 20;\n    int max = (a > b) ? a : b;\n    printf(\"Max of %d and %d is %d\\n\", a, b, max);\n\n    int c = 15;\n    int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf(\"Largest of %d, %d, %d is %d\\n\", a, b, c, largest);\n\n    int temperature = 30;\n    printf(\"Weather: %s\\n\", (temperature > 25) ? \"Hot\" : \"Cool\");\n\n    int x = 0;\n    int result = (x != 0) ? (100 / x) : 0;  /* Safe: 100/x never evaluated */\n    printf(\"Result: %d\\n\", result);\n\n    int side = 0;\n    int val = (side == 0) ? (side = 99) : (side = -1);\n    printf(\"side = %d, val = %d\\n\", side, val);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Max of 10 and 20 is 20\nLargest of 10, 20, 15 is 20\nWeather: Hot\nResult: 0\nside = 99, val = 99\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "386-complexity",
      children: "3.8.6 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "387-ad-table",
      children: "3.8.7 A&D Table"
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
            children: "Concise inline conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readability suffers when nested"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Can be used inside expressions (", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", cond ? \"A\" : \"B\")"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both branches must have compatible types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Only evaluates chosen branch (short-circuit like `"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "388-edge-cases",
      children: "3.8.8 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type compatibility"
        }), " --- both branches must have compatible types (or one is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Nesting reduces readability"
        }), " --- avoid more than one level deep"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Ternary is not a full ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if-else"
          })]
        }), " --- it's an expression, not a statement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Side effects in unselected branch"
        }), " --- never execute, making them safe for division-by-zero guards"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "39-comma-operator",
      children: "3.9 Comma Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "391-real-world-analogy",
      children: "3.9.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The comma operator is like an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assembly line with two stations"
      }), ": the product passes through station 1 (first expression), then station 2 (second expression). The final product is whatever came out of station 2. What happened at station 1 is a side effect."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "392-numbered-steps",
      children: "3.9.2 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the left operand (including all side effects)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Discard the left operand's value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluate the right operand"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The value of the right operand becomes the result of the comma expression"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "393-dry-run",
      children: "3.9.3 Dry Run"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates To"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Side Effects"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Final Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(5, 10, 15)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "5"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "15"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "none"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "15"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(a += 2, b += 3, a + b)"
            }), " where a=1,b=2"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["1: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a += 2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b += 3"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "(cont)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["3: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b = 3 + 5"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "394-c-code-examples",
      children: "3.9.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = (5, 10, 15);\n    printf(\"x = %d\\n\", x);           /* 15 */\n\n    for (int i = 0, j = 10; i < j; i++, j--)\n        printf(\"i=%d, j=%d\\n\", i, j);\n\n    int a = 1, b = 2;\n    int result = (a += 2, b += 3, a + b);\n    printf(\"result = %d (a=%d, b=%d)\\n\", result, a, b);\n\n    printf(\"Without parens: %d\\n\", (1, 2, 3));\n    printf(\"With parens:    %d %d %d\\n\", 1, 2, 3);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "x = 15\ni=0, j=10\ni=1, j=9\ni=2, j=8\ni=3, j=7\ni=4, j=6\nresult = 8 (a=3, b=5)\nWithout parens: 3\nWith parens:    1 2 3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "395-complexity",
      children: "3.9.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "396-ad-table",
      children: "3.9.6 A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Multiple expressions in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), " loop headers"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overused, reduces readability"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequence point: left operand fully evaluated before right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to confuse with function argument separator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "397-edge-cases",
      children: "3.9.7 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comma vs argument separator"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f((1, 2))"
        }), " passes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "2"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "f(1, 2)"
        }), " passes two arguments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Comma operator in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "return"
          })]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return x++, x + 5;"
        }), " increments x then returns x+5 (not x++)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lowest precedence"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = b, c"
        }), " means ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(a = b), c"
        }), " (not ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a = (b, c)"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "310-sizeof-operator",
      children: ["3.10 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " Operator"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3101-real-world-analogy",
      children: "3.10.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tape measure for data types"
      }), ". Ask \"how long is this couch?\" and it tells you in feet (bytes). Importantly, measuring doesn't change the couch --- the couch stays exactly where it is. Similarly, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(expr)"
      }), " never evaluates ", (0,jsx_runtime.jsx)(_components.code, {
        children: "expr"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3102-syntax",
      children: "3.10.2 Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "sizeof(type)         /* parentheses required with type */\nsizeof expression    /* parentheses optional with expression */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3103-numbered-steps",
      children: "3.10.3 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the type of the operand (at compile time)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return the size in bytes as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "size_t"
        }), " (an unsigned integer type)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the operand is an expression, it is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not evaluated"
        }), " at runtime"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3104-c-code-examples",
      children: "3.10.4 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"sizeof(char)      = %zu byte(s)\\n\", sizeof(char));\n    printf(\"sizeof(short)     = %zu byte(s)\\n\", sizeof(short));\n    printf(\"sizeof(int)       = %zu byte(s)\\n\", sizeof(int));\n    printf(\"sizeof(long)      = %zu byte(s)\\n\", sizeof(long));\n    printf(\"sizeof(float)     = %zu byte(s)\\n\", sizeof(float));\n    printf(\"sizeof(double)    = %zu byte(s)\\n\", sizeof(double));\n    printf(\"sizeof(void*)     = %zu byte(s)\\n\", sizeof(void*));\n    printf(\"sizeof(size_t)    = %zu byte(s)\\n\", sizeof(size_t));\n\n    int x = 5;\n    size_t s = sizeof(x++);     /* x++ is NOT executed */\n    printf(\"sizeof(x++) = %zu, x = %d (x was NOT incremented!)\\n\", s, x);\n\n    int arr[10];\n    int *ptr = arr;\n    printf(\"sizeof(arr)  = %zu bytes (%d elements)\\n\", sizeof(arr),\n           (int)(sizeof(arr)/sizeof(arr[0])));\n    printf(\"sizeof(ptr)  = %zu bytes (just the pointer)\\n\", sizeof(ptr));\n\n    struct Packed { char c; int i; };\n    printf(\"sizeof(struct Packed) = %zu (includes padding)\\n\", sizeof(struct Packed));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (64-bit system):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(char)      = 1 byte(s)\nsizeof(short)     = 2 byte(s)\nsizeof(int)       = 4 byte(s)\nsizeof(long)      = 8 byte(s)\nsizeof(float)     = 4 byte(s)\nsizeof(double)    = 8 byte(s)\nsizeof(void*)     = 8 byte(s)\nsizeof(size_t)    = 8 byte(s)\nsizeof(x++) = 4, x = 5 (x was NOT incremented!)\nsizeof(arr)  = 40 bytes (10 elements)\nsizeof(ptr)  = 8 bytes (just the pointer)\nsizeof(struct Packed) = 8 (includes padding)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3105-complexity",
      children: "3.10.5 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile-time O(1)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            }), " --- no runtime cost"]
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3106-ad-table",
      children: "3.10.6 A&D Table"
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
            children: "Compile-time, zero runtime cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result depends on platform (32-bit vs 64-bit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works on types, variables, expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On arrays passed to functions, decays to pointer size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Essential for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc(sizeof(T))"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struct size includes padding --- may be larger than field sum"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3107-edge-cases",
      children: "3.10.7 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Array vs pointer decay"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr)"
        }), " in the declaring scope gives total array size; after decay to pointer parameter, gives pointer size"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Expression not evaluated"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(*NULL)"
        }), " is well-defined (no dereference happens); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(1/0)"
        }), " compiles fine"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VLA (variable-length arrays)"
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " on a VLA is evaluated at runtime"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty struct"
        }), " --- C doesn't allow zero-sized structs (GCC extension may produce 0)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "311-pointer-operators--and-",
      children: ["3.11 Pointer Operators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3111-real-world-analogy",
      children: "3.11.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "&x"
        }), " (address-of) --- Like getting the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "street address"
        }), " of a house. Instead of the contents, you get the location."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " (dereference) --- Like going to that street address and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "opening the front door"
        }), " to see what's inside."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3112-numbered-steps",
      children: "3.11.2 Numbered Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Address-of (", (0,jsx_runtime.jsx)(_components.code, {
          children: "&x"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine the memory address where variable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x"
        }), " is stored"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return that address as a pointer value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Dereference (", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), "):"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read the address stored in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ptr"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access the memory at that address"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The expression ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*ptr"
        }), " acts as an lvalue --- you can read or write through it"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3113-c-code-examples",
      children: "3.11.3 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int x = 42;\n    int *ptr = &x;\n\n    printf(\"Value of x:        %d\\n\", x);\n    printf(\"Address of x:      %p\\n\", (void*)&x);\n    printf(\"Value of ptr:      %p\\n\", (void*)ptr);\n    printf(\"Dereferenced ptr:  %d\\n\", *ptr);\n\n    *ptr = 100;\n    printf(\"After *ptr = 100, x = %d\\n\", x);\n\n    int arr[3] = {10, 20, 30};\n    printf(\"arr = %p, &arr[0] = %p (same address)\\n\",\n           (void*)arr, (void*)&arr[0]);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary by run):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Value of x:        42\nAddress of x:      0x7ffd12345678\nValue of ptr:      0x7ffd12345678\nDereferenced ptr:  42\nAfter *ptr = 100, x = 100\narr = 0x7ffd12345690, &arr[0] = 0x7ffd12345690 (same address)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3114-complexity",
      children: "3.11.4 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*ptr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3115-ad-table",
      children: "3.11.5 A&D Table"
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
            children: "Enables direct memory access and modification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing NULL or invalid pointer crashes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for dynamic allocation, arrays, strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer arithmetic is error-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Allows pass-by-reference semantics in C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful initialization and bounds checking"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3116-edge-cases",
      children: "3.11.6 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereferencing NULL pointer"
        }), " -> undefined behavior (segmentation fault on most systems)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dereferencing uninitialized pointer"
        }), " -> undefined behavior"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "&"
          }), " on register-stored variable"]
        }), " -> not allowed (C forbids ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&"
        }), " on register variables)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "&"
          }), " on bit-field"]
        }), " -> not allowed (bit-fields don't have individual addresses)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "void*"
          }), " dereference"]
        }), " -> must cast to complete type first"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "312-member-access-operators--and--",
      children: ["3.12 Member Access Operators (", (0,jsx_runtime.jsx)(_components.code, {
        children: "."
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "->"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3121-real-world-analogy",
      children: "3.12.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), " (dot) --- Direct access: like opening a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "person's file folder"
        }), " that's right in front of you"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "->"
        }), " (arrow) --- Indirect access: like following a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "reference number"
        }), " to a filing cabinet, then opening the folder"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3122-c-code-examples",
      children: "3.12.2 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nstruct Point { int x; int y; };\n\nint main(void)\n{\n    struct Point p1;\n    p1.x = 10;\n    p1.y = 20;\n    printf(\"p1: (%d, %d)\\n\", p1.x, p1.y);\n\n    struct Point p2;\n    struct Point *ptr = &p2;\n    ptr->x = 30;\n    ptr->y = 40;\n    printf(\"p2 via ptr: (%d, %d)\\n\", ptr->x, ptr->y);\n\n    /* Arrow is syntactic sugar: ptr->x is same as (*ptr).x */\n    printf(\"p2 via deref: (%d, %d)\\n\", (*ptr).x, (*ptr).y);\n\n    struct Rectangle {\n        struct Point top_left;\n        struct Point bottom_right;\n    };\n    struct Rectangle rect = {{0, 0}, {100, 80}};\n    struct Rectangle *rptr = &rect;\n    printf(\"Area: %d\\n\", (rptr->bottom_right.x - rptr->top_left.x) *\n                         (rptr->bottom_right.y - rptr->top_left.y));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p1: (10, 20)\np2 via ptr: (30, 40)\np2 via deref: (30, 40)\nArea: 8000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3123-complexity",
      children: "3.12.3 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            }), " --- compile-time offset"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            }), " --- pointer + offset"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3124-ad-table",
      children: "3.12.4 A&D Table"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " provides direct, readable field access"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " on pointer causes compilation error"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " cleanly accesses struct members through pointer"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " with NULL pointer crashes"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both are compile-time resolved, zero overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested access chains can be verbose"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3125-edge-cases",
      children: "3.12.5 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "->"
          }), " with NULL pointer"]
        }), " -> undefined behavior (dereferences NULL)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "."
          }), " precedence"]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "."
        }), " has higher precedence than ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*sp.x"
        }), " means ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(sp.x)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "->"
          }), " self-cancellation"]
        }), " --- ", (0,jsx_runtime.jsx)(_components.code, {
          children: "p->x"
        }), " is exactly equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(*p).x"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "313-cast-operator",
      children: "3.13 Cast Operator"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3131-real-world-analogy",
      children: "3.13.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Casting is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "repurposing a container"
      }), ". You have a large box (double) and you need to fit its contents into a small box (int). You can force it, but you might lose some packing material (precision). Or you have a signed container and need to view its contents as unsigned --- the bits don't change, just how you interpret them."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3132-c-code-examples",
      children: "3.13.2 C Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    double pi = 3.14159;\n    int approx = (int)pi;\n    printf(\"(int)%.5f = %d\\n\", pi, approx);\n\n    int a = 7, b = 3;\n    double result1 = a / b;\n    double result2 = (double)a / b;\n    printf(\"Without cast: %f, With cast: %f\\n\", result1, result2);\n\n    int val = 0x12345678;\n    unsigned char *bytes = (unsigned char*)&val;\n    printf(\"Bytes of 0x%X (little-endian): \", val);\n    for (int i = 0; i < (int)sizeof(val); i++)\n        printf(\"%02X \", bytes[i]);\n    printf(\"\\n\");\n\n    signed char s = -1;\n    unsigned char u = (unsigned char)s;\n    printf(\"(unsigned char)(-1) = %u\\n\", u);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "(int)3.14159 = 3\nWithout cast: 2.000000, With cast: 2.333333\nBytes of 0x12345678 (little-endian): 78 56 34 12\n(unsigned char)(-1) = 255\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3133-complexity",
      children: "3.13.3 Complexity"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer cast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "O(1)"
            }), " --- no bits change"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3134-ad-table",
      children: "3.13.4 A&D Table"
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
            children: "Explicit type conversion when needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrowing cast may lose data silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer reinterpretation for low-level access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Casting away const/volatile is dangerous"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enables mixed-type arithmetic safely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Incorrect pointer casts break aliasing rules (strict aliasing)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3135-edge-cases",
      children: "3.13.5 Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Narrowing cast"
        }), " --- converting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " loses fractional part; undefined if value out of range"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pointer cast and alignment"
        }), " --- casting ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char*"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        }), " on misaligned address may cause bus error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Signed <-> unsigned cast"
        }), " --- bits are preserved, interpretation changes (e.g., -1 becomes UINT_MAX)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "void*"
          }), " cast"]
        }), " --- implicit conversion to/from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void*"
        }), " is allowed in C (no cast needed)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "314-operator-precedence-and-associativity",
      children: "3.14 Operator Precedence and Associativity"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3141-real-world-analogy",
      children: "3.14.1 Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Precedence is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "order of operations in math"
      }), " (PEMDAS/BODMAS): multiplication before addition. Associativity is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tiebreaker"
      }), " --- when two operators have equal precedence, do we go left-to-right (addition and subtraction) or right-to-left (assignment)?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3142-full-15-level-precedence-table",
      children: "3.14.2 Full 15-Level Precedence Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operators"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Associativity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Highest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Postfix"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "() [] . -> ++ --"
            }), " (postfix)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "L -> R"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a[3]"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "f(x)"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "s.m"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p->m"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unary (prefix)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++ -- + - ! ~ * & sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R -> L"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "&x"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-a"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "!flag"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplicative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "* / %"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a * b / c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Additive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+ -"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a + b - c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<< >>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a << 2 >> 1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relational (lt, leq, gt, geq)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "< <= > >="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a < b <= c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "== !="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a == b != c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise AND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a & b & c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise XOR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "^"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a ^ b ^ c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise OR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical AND"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a && b && c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical OR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R -> L"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a ? b : c ? d : e"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "= += -= *= /= %= ..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "R -> L"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a = b = c"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "x += 5"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "15 (Lowest)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comma"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L -> R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a, b, c"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3143-dry-run-----complex-expression-evaluation",
      children: "3.14.3 Dry Run --- Complex Expression Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Expression: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int result = ++x * 3 + (y = 5) > 10 ? a : b;"
        })]
      }), "\nAssume: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int x = 2, y = 0, a = 1, b = 0;"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Intermediate"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "++x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix ++ has level 2, R->L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=3, value=3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3 * 3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "* has level 3, L->R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "y = 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parentheses + assignment level 14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "y=5, value=5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "9 + 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "+ has level 4, L->R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "14 > 10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "> has level 6, L->R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (true)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1 ? a : b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "?: level 13, R->L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "a=1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "result = 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "= level 14, R->L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "result=1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3144-common-precedence-traps",
      children: "3.14.4 Common Precedence Traps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[] = {10, 20, 30};\n    int *p = arr;\n    int v = *p++;       /* *(p++) --- dereferences old p, then increments */\n    printf(\"*p++ = %d, now points to %d\\n\", v, *p);\n\n    struct S { int x; } s = {42};\n    int *ptr = &s.x;        /* . binds tighter than & */\n\n    int r = 1 << 2 + 3;     /* 1 << (2+3) = 1 << 5 = 32 */\n    printf(\"1 << 2 + 3 = %d (+ binds tighter than <<)\\n\", r);\n\n    int flag = 0;\n    if (flag = 1)\n        printf(\"BUG: assignment inside if is always true!\\n\");\n\n    int a = 5, b = 5;\n    int cmp = a & b == 5;     /* a & (b == 5) = 5 & 1 = 1 */\n    printf(\"a & b == 5 = %d (== binds tighter than &!)\\n\", cmp);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "*p++ = 10, now points to 20\n1 << 2 + 3 = 32 (+ binds tighter than <<)\nBUG: assignment inside if is always true!\na & b == 5 = 1 (== binds tighter than &!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3145-golden-rule",
      children: "3.14.5 Golden Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When in doubt, use parentheses."
      }), " They are free (zero runtime cost) and make intent explicit:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Unclear:\nif (a & b == c) ...\n\n// Clear:\nif ((a & b) == c) ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "315-short-circuit-evaluation-----in-depth",
      children: "3.15 Short-Circuit Evaluation --- In Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3151-definition",
      children: "3.15.1 Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Short-circuit evaluation means the second operand of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), " is evaluated only if necessary to determine the overall result."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Evaluates RHS When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Short-circuits When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&&"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LHS is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "true"
            }), " (non-zero)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["LHS is ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "false"
            }), " (zero)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "`"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3152-dry-run-----short-circuit-scenarios",
      children: "3.15.2 Dry Run --- Short-Circuit Scenarios"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Scenario 1: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int a = 0, b = 5; if (a != 0 && b / a > 1)"
        })]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a != 0"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            }), " (0)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuit: RHS NOT evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "b / a > 1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero AVOIDED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Whole expression"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "false"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe!"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Scenario 2: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int a = 1, b = 5; if (a == 1 || (b = 0))"
        })]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a == 1"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "true"
            }), " (1)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Short-circuit: RHS NOT evaluated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "(b = 0)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "---"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Side effect AVOIDED"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b remains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surprising if you expected b=0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3153-common-short-circuit-patterns",
      children: "3.15.3 Common Short-Circuit Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Guard against NULL pointer dereference */\nif (ptr != NULL && ptr->value > 0)  /* safe */\n\n/* Guard against division by zero */\nif (denominator != 0 && numerator / denominator > threshold)  /* safe */\n\n/* Default value with short-circuit */\nint value = (pointer) ? *pointer : 0;  /* ternary also short-circuits! */\n\n/* Lazy initialization (avoid expensive computation if not needed) */\nint compute_expensive(void);\nint result = (cache_valid) ? cache : compute_expensive();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "316-interview-corner",
      children: "3.16 Interview Corner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q1-what-is-the-difference-between-i-and-i-which-is-faster",
      children: ["Q1: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++i"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i++"
      }), "? Which is faster?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++i"
      }), " (prefix) increments and returns the new value. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i++"
      }), " (postfix) saves the old value, increments, and returns the old value. For built-in types, modern compilers optimize both identically. For user-defined types (C++ iterators), prefix is faster because postfix needs to make a copy. In C with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", they are equivalent after optimization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-sequence-points-give-examples-of-undefined-behavior",
      children: "Q2: What are sequence points? Give examples of undefined behavior."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " A sequence point is a point in execution where all side effects of previous evaluations are guaranteed to be complete. Between two sequence points, a variable may be modified at most once. Violations:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "i = i++;              /* UB: i modified twice */\na[i++] = i++;         /* UB: i modified twice */\nprintf(\"%d %d\", ++i, i++);  /* UB: no sequence point between args */\nf(i++, i++);          /* UB: i modified twice */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Sequence points occur at: ", (0,jsx_runtime.jsx)(_components.code, {
        children: ";"
      }), " end of statement, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ","
      }), " operator, and function call (after all arguments evaluated, before the function body)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-when-would-you-use-bitwise-and--vs-logical-and-",
      children: ["Q3: When would you use bitwise AND (", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ") vs logical AND (", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), ")?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " when you need to operate on individual bits (mask testing, flag extraction). Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " for boolean logic with short-circuit. Example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "unsigned int flags = 0x0F;\nif (flags & 0x01)           /* bitwise: check if bit 0 is set */\nif (is_ready() && can_write())  /* logical: both must be true, short-circuit safe */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical difference:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), " always evaluates both operands; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " may skip the second."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-explain-sizeof-on-an-array-vs-a-pointer",
      children: ["Q4: Explain ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " on an array vs a pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[10];          /* array of 10 ints */\nint *ptr = arr;       /* pointer to int */\n\nsizeof(arr);   /* = 10 * sizeof(int) = 40 (on 32-bit int system) */\nsizeof(ptr);   /* = sizeof(int*) = 8 (on 64-bit system) */\n\nvoid func(int param[]) {\n    sizeof(param);    /* = sizeof(int*) --- param decayed to pointer! */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " Arrays are not pointers, but they decay to pointers when passed to functions. This is why you must pass the size separately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-comma-operator-and-when-is-it-useful",
      children: "Q5: What is the comma operator and when is it useful?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The comma operator evaluates both operands left-to-right, has a sequence point between them, and yields the value of the right operand. Useful in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for"
      }), " loops and macros:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "for (int i = 0, j = 10; i < j; i++, j--)   /* comma to update both */\n\n#define SWAP(a, b)  ((a) ^= (b), (b) ^= (a), (a) ^= (b))\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But beware: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f((a, b))"
      }), " passes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), "; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "f(a, b)"
      }), " passes two arguments."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-explain-the-ternary-operator-can-it-replace-if-else",
      children: ["Q6: Explain the ternary operator. Can it replace ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The ternary operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      }), " is an expression that yields a value, while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if-else"
      }), " is a statement. Ternary can be used inside larger expressions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int max = (a > b) ? a : b;\nprintf(\"Status: %s\", (err) ? \"ERROR\" : \"OK\");\n\nconst char *grade = (score >= 90) ? \"A\" :\n                    (score >= 80) ? \"B\" :\n                    (score >= 70) ? \"C\" : \"F\";\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Do NOT use ternary for complex branching --- readability suffers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-happens-when-you-shift-by-a-negative-count-or-by-the-bit-width",
      children: "Q7: What happens when you shift by a negative count or by the bit width?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both are undefined behavior:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 5;\nx << -1;              /* UB: negative shift count */\nx << 32;              /* UB: shift >= width of int (on 32-bit system) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-signed-vs-unsigned-right-shift-----whats-the-difference",
      children: "Q8: Signed vs unsigned right shift --- what's the difference?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For unsigned types, right shift is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "logical"
      }), " (fills with 0). For signed types, right shift is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation-defined"
      }), " but almost always ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "arithmetic"
      }), " (fills with sign bit)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "signed char s = -16;       /* 1111 0000 */\ns >> 1;                    /* 1111 1000 = -8 (arithmetic) */\n\nunsigned char u = 240;     /* 1111 0000 */\nu >> 1;                    /* 0111 1000 = 120 (logical) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-you-swap-two-integers-without-a-temporary-variable",
      children: "Q9: How do you swap two integers without a temporary variable?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Using XOR swap (works with integers only):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 5, b = 10;\na = a ^ b;    /* a = 5 ^ 10 = 15 */\nb = a ^ b;    /* b = 15 ^ 10 = 5 */\na = a ^ b;    /* a = 15 ^ 5 = 10 */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " Fails if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "a"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "b"
      }), " refer to the same memory location (both become 0). Also slower than temp-variable swap on modern CPUs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-what-is-operator-precedence-give-an-example-where-it-matters",
      children: "Q10: What is operator precedence? Give an example where it matters."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Precedence determines which operator is evaluated first in an expression without parentheses. Example:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 1 << 2 + 3;     /* 1 << (2+3) = 1 << 5 = 32 (addition binds tighter) */\nint y = (1 << 2) + 3;   /* 4 + 3 = 7 */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Without knowing that ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " has higher precedence than ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), ", you'd guess ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x = (1 << 2) + 3 = 7"
      }), ". The actual result is 32. Always parenthesize when mixing different operator categories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "317-applications-in-real-systems",
      children: "3.17 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3171-embedded-systems--gpio",
      children: "3.17.1 Embedded Systems / GPIO"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Set pin 3 high on a microcontroller port */\n#define SET_PIN(port, pin)   ((port) |= (1 << (pin)))\n#define CLEAR_PIN(port, pin) ((port) &= ~(1 << (pin)))\n#define TOGGLE_PIN(port, pin) ((port) ^= (1 << (pin)))\n#define READ_PIN(port, pin)  (((port) >> (pin)) & 1)\n\n/* Usage: Set bit 3 on PORTB */\n/* SET_PIN(PORTB, 3); */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3172-linux-kernel-macros",
      children: "3.17.2 Linux Kernel Macros"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Container_of --- get enclosing struct from member pointer */\n#define container_of(ptr, type, member) ({                      \\\n    const typeof(((type *)0)->member) *__mptr = (ptr);          \\\n    (type *)((char *)__mptr - offsetof(type, member)); })\n\n/* ARRAY_SIZE --- get element count of static array */\n#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))\n\n/* Round up to nearest power of 2 */\n#define ROUND_UP_POW2(x) (--(x), (x) |= (x) >> 1, (x) |= (x) >> 2, \\\n                          (x) |= (x) >> 4, (x) |= (x) >> 8, \\\n                          (x) |= (x) >> 16, ++(x))\n\n/* Bit manipulation in kernel */\n#define BIT(n)       (1UL << (n))\n#define BIT_MASK(n)  (BIT(n) - 1UL)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3173-graphics--color-packing",
      children: "3.17.3 Graphics / Color Packing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Pack RGBA into a 32-bit integer */\n#define RGBA(r, g, b, a) (((r) << 24) | ((g) << 16) | ((b) << 8) | (a))\n\n/* Extract channels */\n#define GET_RED(pixel)   ((pixel) >> 24 & 0xFF)\n#define GET_GREEN(pixel) ((pixel) >> 16 & 0xFF)\n#define GET_BLUE(pixel)  ((pixel) >> 8  & 0xFF)\n#define GET_ALPHA(pixel) ((pixel)       & 0xFF)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3174-networking--checksum",
      children: "3.17.4 Networking / Checksum"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* IP header checksum computation */\nunsigned short ip_checksum(unsigned short *buf, int len)\n{\n    unsigned long sum = 0;\n    while (len > 1) {\n        sum += *buf++;\n        len -= 2;\n    }\n    if (len) sum += *(unsigned char*)buf;\n    while (sum >> 16)\n        sum = (sum & 0xFFFF) + (sum >> 16);\n    return (unsigned short)~sum;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3175-permission-masks-unix-style",
      children: "3.17.5 Permission Masks (Unix-style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define IS_READABLE(mode)  ((mode) & S_IRUSR)\n#define IS_WRITABLE(mode)  ((mode) & S_IWUSR)\n#define ADD_READ(mode)     ((mode) | S_IRUSR)\n#define REMOVE_READ(mode)  ((mode) & ~S_IRUSR)\n\nunsigned int mode = 0644;  /* rw-r--r-- */\nif (IS_READABLE(mode)) printf(\"Owner can read\\n\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3176-game-development--collision-detection",
      children: "3.17.6 Game Development / Collision Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* AABB collision test using relational operators */\nint aabb_collide(int ax, int ay, int aw, int ah,\n                 int bx, int by, int bw, int bh)\n{\n    return !(ax > bx + bw || ax + aw < bx ||\n             ay > by + bh || ay + ah < by);\n}\n\n/* Flag-based entity state using bitwise */\nenum {\n    ENTITY_ALIVE   = 1 << 0,\n    ENTITY_VISIBLE = 1 << 1,\n    ENTITY_SOLID   = 1 << 2,\n    ENTITY_MOVING  = 1 << 3\n};\n\nunsigned int state = ENTITY_ALIVE | ENTITY_VISIBLE;\nstate |= ENTITY_MOVING;      /* set moving */\nstate &= ~ENTITY_VISIBLE;    /* make invisible */\nif (state & ENTITY_ALIVE)    /* check alive */\n    update(entity);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "10 & 6"
          }), "?"]
        }), "\nA) 0   B) 2   C) 6   D) 10"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** 10 decimal = 1010 binary, 6 = 0110 binary. 1010 & 0110 = 0010 = 2 decimal."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if (x = 5)"
          }), " compile without error but behave unexpectedly?"]
        }), "\nA) It is a syntax error in C\nB) Assignment returns the assigned value, which is nonzero (truthy)\nC) The compiler automatically converts to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x == 5"
        }), "\nD) It causes undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `x = 5` assigns 5 to x and returns 5, which is truthy. This is a common typo for `x == 5`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Which operator has the highest precedence?"
        }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "+"
        }), "   B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*"
        }), "   C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "()"
        }), "   D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "&&"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Parentheses `()` have the highest precedence, followed by postfix operators."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1 << 2 + 3"
          }), " evaluate to?"]
        }), "\nA) 7   B) 10   C) 32   D) Undefined behavior"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `+` has higher precedence than `<<`, so it's `1 << 5 = 32`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "-7 % 3"
          }), " in C99+?"]
        }), "\nA) -1   B) 1   C) -2   D) Undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** In C99+, the remainder sign follows the dividend, so `-7 % 3 = -1`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int a = 0, b = 5;"
          }), ", what does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "a && (b = 99)"
          }), " do to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "b"
          }), "?"]
        }), "\nA) Sets b to 99   B) Leaves b as 5   C) Undefined   D) Compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Short-circuit: since `a` is 0 (false), `b = 99` is never evaluated."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["What is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sizeof(arr)"
          }), " for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int arr[10];"
          }), " on a 64-bit system with 4-byte ints?"]
        }), "\nA) 8   B) 10   C) 40   D) 80"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `sizeof(arr) = 10 * sizeof(int) = 10 * 4 = 40`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Which of these is undefined behavior?"
        }), " (Select all that apply.)\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = i++"
        }), "   B) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i++ + ++i"
        }), "   C) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = 5, i = 10"
        }), "   D) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a[i++] = i"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A, B, D.** A and B modify `i` twice between sequence points. D violates the same rule. C is fine (comma creates a sequence point)."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operator Group"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Point"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Pitfall"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Arithmetic (", (0,jsx_runtime.jsx)(_components.code, {
              children: "+ - * / %"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Integer division truncates; ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            }), " on ints only"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division by zero = UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Relational (", (0,jsx_runtime.jsx)(_components.code, {
              children: "< > <= >= == !="
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Result is 0 or 1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a < b < c"
            }), " is ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(a < b) < c"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical (`&&"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "!`)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise (`&"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "^ ~ << >>`)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each bit independent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Assignment (", (0,jsx_runtime.jsx)(_components.code, {
              children: "= += -= ..."
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right-to-left associativity"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if (x = 5)"
            }), " bug"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inc/Dec (", (0,jsx_runtime.jsx)(_components.code, {
              children: "++ --"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix: new value; Postfix: old value"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "i++ + i++"
            }), " = UB (sequence point)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ternary (", (0,jsx_runtime.jsx)(_components.code, {
              children: "?:"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expression, not statement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nested ternaries are unreadable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Comma (", (0,jsx_runtime.jsx)(_components.code, {
              children: ","
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left-to-right, returns rightmost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Confused with argument separator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time (VLA excepted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array-to-pointer decay in functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pointer (", (0,jsx_runtime.jsx)(_components.code, {
              children: "& *"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), " = address, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            }), " = dereference"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dereferencing NULL = UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Member (", (0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "."
            }), " direct, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "->"
            }), " indirect"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "*s.x"
            }), " = ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(s.x)"
            }), " (precedence trap)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Cast (", (0,jsx_runtime.jsx)(_components.code, {
              children: "(type)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Explicit conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Narrowing may lose data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7 / 2"
        }), " in C? What about ", (0,jsx_runtime.jsx)(_components.code, {
          children: "7.0 / 2"
        }), "? Explain the difference."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x++"
        }), " do differently from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++x"
        }), "? Give an example where the distinction matters."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain short-circuit evaluation. Why is it useful in practice?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 & 3"
        }), "? Of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 | 3"
        }), "? Of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5 ^ 3"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if (x = 0)"
        }), " always evaluate to false, and why is this considered a common bug?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between the bitwise ", (0,jsx_runtime.jsx)(_components.code, {
          children: "|"
        }), " and the logical ", (0,jsx_runtime.jsx)(_components.code, {
          children: "||"
        }), " operators?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List all 15 levels of operator precedence. Which operators have right-to-left associativity?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1 << 2 + 3 * 2"
        }), " evaluate to? Show your reasoning with precedence."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is a sequence point? Give three examples of undefined behavior involving sequence points."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain array-to-pointer decay. What is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr)"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(ptr)"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Even or odd (bitwise):"
        }), " Write a program that reads an integer and prints whether it is even or odd using only bitwise operators (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Maximum of three (ternary):"
        }), " Write a program that reads three integers and prints the largest using only the ternary operator (no ", (0,jsx_runtime.jsx)(_components.code, {
          children: "if"
        }), " statements)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary printer:"
        }), " Write a program that takes an unsigned integer and prints its binary representation (32 bits) using bitwise operators and shifts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Short-circuit demo:"
        }), " Write a program that demonstrates short-circuit evaluation by attempting a division by zero inside a logical expression and proving it never executes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "XOR encryption:"
        }), " Write a program that XOR-encrypts a small string with a key byte and decrypts it back. Print both states."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bit reversal:"
      }), " Write a program that reverses the bits of an 8-bit unsigned integer. For example, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0b11001010"
      }), " (202) becomes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0b01010011"
      }), " (83). Do not use arrays --- use only bitwise operators and loops. Print both the original and reversed values in hexadecimal and binary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Advanced challenge --- implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "container_of"
        }), ":"]
      }), " Reimplement the Linux kernel ", (0,jsx_runtime.jsx)(_components.code, {
        children: "container_of"
      }), " macro in standard C. Create a struct with two fields, get a pointer to the second field, and use your macro to recover a pointer to the enclosing struct. Verify you can access the first field through the recovered pointer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " C operators range from arithmetic to pointer access; knowing precedence, associativity, sequence points, and short-circuit evaluation separates competent C programmers from experts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-interview-questions",
      children: "Additional Interview Questions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q11: What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%d\", (1, 2, 3));"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%d %d %d\", 1, 2, 3);"
        }), "?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf(\"%d\", (1, 2, 3));"
      }), " prints ", (0,jsx_runtime.jsx)(_components.code, {
        children: "3"
      }), " (the comma operator returns the rightmost value). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf(\"%d %d %d\", 1, 2, 3);"
      }), " prints ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1 2 3"
      }), " (commas separate function arguments, not the comma operator). The parentheses make all the difference."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q12: Explain how ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*p++"
        }), " is parsed according to precedence rules."]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Postfix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " has higher precedence (level 1) than dereference ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " (level 2). So ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*p++"
      }), " is parsed as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*(p++)"
      }), ". The expression:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Saves the current pointer value"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Increments the pointer (now points to next element)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dereferences the saved (old) pointer value"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the idiomatic way to traverse an array: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while (*p++ = *q++);"
      }), " copies strings."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q13: What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1 >> 1"
        }), " produce? Why does it matter?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " For signed ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-1"
      }), " (binary ", (0,jsx_runtime.jsx)(_components.code, {
        children: "1111...1111"
      }), "), right shift is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "implementation-defined"
      }), ". On nearly all compilers, it's arithmetic shift: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-1 >> 1 = -1"
      }), " (the sign bit propagates, keeping the value negative). This is why unsigned types should be used for bit manipulation --- they always use logical shift (fill with 0)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "signed int:   -1 >> 1 = -1   (arithmetic: fills with sign bit)\nunsigned int: UINT_MAX >> 1 = 2147483647 (logical: fills with 0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Q14: Can the ternary operator be used as an lvalue? Explain."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In C, the ternary operator ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "cannot"
      }), " be used as an lvalue directly (C++ allows this). However, both branches must yield compatible types. You can use it in an assignment context:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 10, b = 20;\n/* This compiles: */\nint result = (a > b) ? a : b;\n/* This does NOT compile in C (but works in C++): */\n/* (a > b) ? a : b = 30;  // ERROR in C */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You must assign through a pointer or use an if-else for lvalue behavior in C."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Q15: What is the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!!"
        }), " idiom in C?"]
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Double negation ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!!expr"
      }), " normalizes any scalar value to exactly 0 or 1:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expr"
        }), " is 0: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!0"
        }), " = 1, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!1"
        }), " = 0 -> result: 0"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If ", (0,jsx_runtime.jsx)(_components.code, {
          children: "expr"
        }), " is non-zero: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!expr"
        }), " = 0, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!0"
        }), " = 1 -> result: 1"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nint normalized = !!x;   /* 1 */\n\nint flags = 0x0F;\nint has_bits = !!flags; /* 1 */\n\nint zero = 0;\nint is_zero = !!zero;   /* 0 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is useful when you need to guarantee a 0 or 1 result (e.g., for mathematical operations or strict boolean contexts)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes-and-anti-patterns",
      children: "Common Mistakes and Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mistake 1: Assignment in conditions"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (x = 5) { /* always true --- meant x == 5 */ }\n// Fix: compile with -Wall to get warnings, or use:\nif (5 == x) { /* if you accidentally write 5 = x, compiler errors */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mistake 2: Confusing bitwise and logical operators"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (flags & MASK && condition)  /* Danger: & and && have different precedence! */\n// This is parsed as: if (flags & (MASK && condition))\n// Intended: if ((flags & MASK) && condition)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mistake 3: Assuming chained comparisons work mathematically"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "if (10 < x < 20) { /* always true for any x! */ }\n// This is (10 < x) which is 0 or 1, then < 20 which is always true\n// Fix: if (x > 10 && x < 20)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mistake 4: Not accounting for integer division"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int half = 1/2;  /* 0, not 0.5 */\ndouble avg = (a + b) / 2;  /* integer division if a and b are ints */\n// Fix: double avg = (a + b) / 2.0;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mistake 5: side effects in macro arguments"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define SQUARE(x) ((x) * (x))\nint y = SQUARE(++x);  /* expands to ((++x) * (++x)) --- UB! */\n// Fix: don't pass expressions with side effects to macros\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-topics",
      children: "Advanced Topics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strict Aliasing Rule"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The strict aliasing rule says you cannot access an object through an incompatible pointer type (with exceptions for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char*"
      }), "). Violating this is undefined behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int x = 42;\nfloat *p = (float*)&x;   /* violates strict aliasing --- UB */\nfloat val = *p;          /* undefined behavior! */\n\n// Exception: char* can alias anything\nchar *c = (char*)&x;     /* OK */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Integer Promotion in Expressions"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a smaller integer type (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "short"
      }), ") is used in an expression, it's promoted to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " before the operation:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "unsigned char a = 0xFF;\nunsigned char b = 0x01;\nint result = (a + b);     /* a and b promoted to int, result = 256 */\n\n/* The ~ operator promotes first: */\nunsigned char c = 0x6D;\nunsigned int d = ~c;      /* ~0x0000006D = 0xFFFFFF92, NOT 0x92 */\nunsigned char e = (unsigned char)~c;  /* 0x92 --- cast back */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Volatile and Side Effects"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), " keyword tells the compiler that a variable may change outside the normal flow (hardware register, signal handler). It prevents the compiler from optimizing away reads:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "volatile int *status_reg = (volatile int*)0x40001000;\nwhile (!(*status_reg & 0x80));   /* compiler must re-read each time */\n// Without volatile, the compiler might read once and loop forever\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operator-overloading-not-in-c",
      children: "Operator Overloading (not in C)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike C++, C does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " support operator overloading. In C, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " always means addition --- you cannot define ", (0,jsx_runtime.jsx)(_components.code, {
        children: "+"
      }), " for struct types. All operators in C work only on built-in types (integers, floats, pointers). This is a key difference from C++ where operator overloading is a central feature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-mapped-register-access-real-world-embedded",
      children: "Memory-Mapped Register Access (Real-World Embedded)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* STM32 microcontroller GPIO register layout */\ntypedef struct {\n    volatile uint32_t MODER;    /* 0x00 */\n    volatile uint32_t OTYPER;   /* 0x04 */\n    volatile uint32_t OSPEEDR;  /* 0x08 */\n    volatile uint32_t PUPDR;    /* 0x0C */\n    volatile uint32_t IDR;      /* 0x10 */\n    volatile uint32_t ODR;      /* 0x14 */\n    volatile uint32_t BSRR;     /* 0x18 */\n    volatile uint32_t LCKR;     /* 0x1C */\n    volatile uint32_t AFR[2];   /* 0x20, 0x24 */\n} GPIO_TypeDef;\n\n#define GPIOA ((GPIO_TypeDef*)0x40020000)\n\n/* Set PA5 as output (MODER bits 10:11 = 01) */\nGPIOA->MODER &= ~(3 << 10);\nGPIOA->MODER |= (1 << 10);\n\n/* Set PA5 high */\nGPIOA->ODR |= (1 << 5);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "xor-linked-list-memory-efficient-data-structure",
      children: "XOR Linked List (Memory-Efficient Data Structure)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* XOR linked list uses ^ to store prev^next in one pointer */\n#include <stdio.h>\n#include <stdlib.h>\n#include <inttypes.h>\n\nstruct XOR_Node {\n    int data;\n    uintptr_t xor_ptr;  /* XOR of prev and next addresses */\n};\n\nstruct XOR_Node* xor_add(struct XOR_Node *prev, struct XOR_Node *next) {\n    return (struct XOR_Node*)((uintptr_t)prev ^ (uintptr_t)next);\n}\n\nvoid traverse(struct XOR_Node *head) {\n    struct XOR_Node *curr = head;\n    struct XOR_Node *prev = NULL;\n    struct XOR_Node *next;\n\n    while (curr) {\n        printf(\"%d \", curr->data);\n        next = xor_add(prev, curr->xor_ptr);\n        prev = curr;\n        curr = next;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compiler-built-ins-for-bit-operations",
      children: "Compiler Built-ins for Bit Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern compilers provide built-in functions for efficient bit manipulation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    unsigned int x = 0x0F00;\n\n    /* GCC/Clang built-ins (if available): */\n    /* int count = __builtin_popcount(x);     // count set bits */\n    /* int leading = __builtin_clz(x);        // count leading zeros */\n    /* int trailing = __builtin_ctz(x);       // count trailing zeros */\n\n    /* Manual popcount (Kernighan's method): */\n    int count = 0;\n    unsigned int y = x;\n    while (y) { y &= y - 1; count++; }\n    printf(\"Popcount of 0x%X = %d\\n\", x, count);\n\n    /* Check if power of 2 */\n    unsigned int n = 256;\n    int is_pow2 = (n & (n - 1)) == 0;\n    printf(\"%u is %s power of 2\\n\", n, is_pow2 ? \"a\" : \"not a\");\n\n    /* Round up to next power of 2 */\n    unsigned int v = 300;\n    v--;\n    v |= v >> 1; v |= v >> 2;\n    v |= v >> 4; v |= v >> 8; v |= v >> 16;\n    v++;\n    printf(\"Next power of 2 after 300 is %u\\n\", v);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cheat-sheet-quick-reference",
      children: "Cheat Sheet Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Expression"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 / 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer division truncates toward zero"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5.0 / 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2.5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float promotion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5 % 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modulus (remainder)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1 << 4"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "16"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Left-shift = multiply by 2^4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0xFF >> 2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x3F"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right-shift divide by 4 (unsigned)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "~0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "-1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bitwise NOT (two's complement)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3 ^ 5"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "6"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "XOR: 011 ^ 101 = 110"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x ? a : b"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "a"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary expression value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(int)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "4"
            }), " (usually)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-dependent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*&x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address-of then dereference = identity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!!x"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize to boolean"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operator Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded GPIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`PORT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graphics/color"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`(r << 16)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Permission masks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "(mode & 0444) != 0"
            }), " to check read permission"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking checksum"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sum = (sum >> 16) + (sum & 0xFFFF)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game collision"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`!(a.x > b.x + b.w"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OS kernel"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "container_of"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ARRAY_SIZE"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BIT()"
            }), " macros"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cryptography"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["XOR cipher: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "plain ^ key = cipher"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cipher ^ key = plain"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`val = (b0 << 24)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocators"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "size = (size + align - 1) & ~(align - 1)"
            }), " to align"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Checksum/CRC"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "byte ^= byte << 4; byte ^= byte >> 5;"
            }), " (simple CRC step)"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "additional-quiz-questions",
      children: "Additional Quiz Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["9. What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int x = 5; printf(\"%d\", x++ + ++x);"
        }), "?"]
      }), "\nA) 10   B) 11   C) 12   D) Undefined behavior"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**D)** This is undefined behavior because `x` is modified twice between sequence points (both `x++` and `++x` modify `x`). The compiler may produce any result."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "10. Which operators have right-to-left associativity?"
      }), "\nA) Assignment, ternary, unary   B) Arithmetic, relational   C) Bitwise, logical   D) Comma, postfix"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** Assignment (`=`, `+=`, etc.), ternary (`?:`), and unary operators (`++`, `--`, `!`, `~`, `*`, `&`, `sizeof`, `+`, `-`) have right-to-left associativity."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["11. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(x += 2) += 3"
        }), " do?"]
      }), "\nA) Adds 5 to x   B) Adds 2 then 3 to x   C) Compiler error   D) Undefined behavior"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `(x += 2)` is not an lvalue in C (it yields an rvalue). You cannot chain compound assignments this way. `x += 2; x += 3;` or `x += 5;` would work."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["12. On a 64-bit system with 4-byte ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", what is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(\"Hello\")"
        }), "?"]
      }), "\nA) 5   B) 6   C) 8   D) 4"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `\"Hello\"` is a `char[6]` array (5 characters + null terminator). `sizeof(\"Hello\")` returns `6`, regardless of pointer size. This is a common interview question about arrays vs pointers."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["13. What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(unsigned)(-1)"
        }), "?"]
      }), "\nA) -1   B) 1   C) UINT_MAX   D) Implementation-defined"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Converting `-1` (all bits set in two's complement) to unsigned gives the maximum unsigned value (`UINT_MAX`). For a 32-bit `unsigned int`, this is `4294967295` (0xFFFFFFFF)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["14. What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3 * 4 + 5 * 6"
        }), " evaluate to after operator precedence?"]
      }), "\nA) 42   B) 120   C) 102   D) 57"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** Multiplication has higher precedence than addition: `(3 * 4) + (5 * 6) = 12 + 30 = 42`. This is the \"Answer to the Ultimate Question of Life, the Universe, and Everything\" according to Douglas Adams."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "15. Which is guaranteed to be a sequence point?"
      }), "\nA) Between the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++"
      }), " and the value in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x++"
      }), "   B) After the first operand of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), "\nC) Between the arguments of a function call   D) Before the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?"
      }), " in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "?:"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** The `&&` operator is a sequence point: the left operand is fully evaluated before the right operand. C is wrong --- argument evaluation order is unspecified and there's no sequence point between arguments. A is wrong --- the increment happens sometime before the next sequence point, not immediately."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-mini-reference-operator-precedence-hand-rule",
      children: "Complete Mini-Reference: Operator Precedence Hand-Rule"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Postfix:       () [] . -> ++ --\nUnary:         ++ -- + - ! ~ * & sizeof  (R-to-L)\nMultiplicative: * / %\nAdditive:       + -\nShift:          << >>\nRelational:     < <= > >=\nEquality:       == !=\nBitwise AND:    &\nBitwise XOR:    ^\nBitwise OR:     |\nLogical AND:    &&\nLogical OR:     ||\nTernary:        ?: (R-to-L)\nAssignment:     = += -= ... (R-to-L)\nComma:          ,\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Remember: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PUMARSEBLATAC"
      }), " (Postfix, Unary, Mult, Add, Rel/Shift, Equality, Bitwise/Logical, Assignment, Ternary, Comma). Or just remember that only assignment and ternary go right-to-left."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "quick-memory-aid-p",
      children: ["Quick Memory Aid: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "++*p++"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[] = {10, 20, 30};\nint *p = arr;\nint val = ++*p++;  /* What does this do? */\n\n/* Parsed as: ++(*(p++))\n * Step 1: p++ returns p, then p advances (postfix ++ has highest precedence)\n * Step 2: *(p_old) dereferences arr[0] = 10\n * Step 3: ++10 increments to 11\n * Result: val = 11, arr = {11, 20, 30}, p points to arr[1]\n */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "val = 11, arr[0] = 11, p points to arr[1]\n"
      })
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