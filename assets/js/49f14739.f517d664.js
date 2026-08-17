"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[18270],{

/***/ 15353
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_01_introduction_md_49f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-01-introduction-md-49f.json
const site_docs_courses_c_programming_01_introduction_md_49f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/01-introduction","title":"Chapter 1: Introduction to C","description":"Next: Variables and Data Types","source":"@site/docs/courses/c-programming/01-introduction.md","sourceDirName":"courses/c-programming","slug":"/c-programming/01-introduction","permalink":"/ai-engineering-journey/c-programming/01-introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-introduction","slug":"/c-programming/01-introduction","title":"Chapter 1: Introduction to C","sidebar_label":"Chapter 1: Introduction to C","sidebar_position":1},"sidebar":"course-c-programming","next":{"title":"Chapter 2: Variables and Data Types","permalink":"/ai-engineering-journey/c-programming/02-variables-datatypes"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/01-introduction.md


const frontMatter = {
	id: '01-introduction',
	slug: '/c-programming/01-introduction',
	title: 'Chapter 1: Introduction to C',
	sidebar_label: 'Chapter 1: Introduction to C',
	sidebar_position: 1
};
const contentTitle = 'Chapter 1: Introduction to C';

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
  "value": "1.1 History and Features of C",
  "id": "11-history-and-features-of-c",
  "level": 2
}, {
  "value": "1.1.1 The History of C",
  "id": "111-the-history-of-c",
  "level": 3
}, {
  "value": "1.1.2 Features of C",
  "id": "112-features-of-c",
  "level": 3
}, {
  "value": "1.1.3 Why C is Still Relevant in 2024+",
  "id": "113-why-c-is-still-relevant-in-2024",
  "level": 3
}, {
  "value": "1.2 Setting Up a C Development Environment",
  "id": "12-setting-up-a-c-development-environment",
  "level": 2
}, {
  "value": "GCC (GNU Compiler Collection)",
  "id": "gcc-gnu-compiler-collection",
  "level": 3
}, {
  "value": "Clang",
  "id": "clang",
  "level": 3
}, {
  "value": "Verify Installation",
  "id": "verify-installation",
  "level": 3
}, {
  "value": "1.3 Structure of a C Program",
  "id": "13-structure-of-a-c-program",
  "level": 2
}, {
  "value": "Real-World Analogy: House Blueprint",
  "id": "real-world-analogy-house-blueprint",
  "level": 3
}, {
  "value": "Anatomy of a C Program",
  "id": "anatomy-of-a-c-program",
  "level": 3
}, {
  "value": "Complete Example",
  "id": "complete-example",
  "level": 3
}, {
  "value": "Edge Cases: Structure Violations",
  "id": "edge-cases-structure-violations",
  "level": 3
}, {
  "value": "1.4 Writing Your First C Program: Hello, World!",
  "id": "14-writing-your-first-c-program-hello-world",
  "level": 2
}, {
  "value": "Step-by-Step: Creating and Running hello.c",
  "id": "step-by-step-creating-and-running-helloc",
  "level": 3
}, {
  "value": "Dry Run: What Happens Inside the Computer",
  "id": "dry-run-what-happens-inside-the-computer",
  "level": 3
}, {
  "value": "Explanation of Each Line",
  "id": "explanation-of-each-line",
  "level": 3
}, {
  "value": "Common Compilation and Edge Cases",
  "id": "common-compilation-and-edge-cases",
  "level": 3
}, {
  "value": "1.5 The Compilation Process",
  "id": "15-the-compilation-process",
  "level": 2
}, {
  "value": "Real-World Analogy: Building a House",
  "id": "real-world-analogy-building-a-house",
  "level": 3
}, {
  "value": "Stage-by-Stage Breakdown",
  "id": "stage-by-stage-breakdown",
  "level": 3
}, {
  "value": "Stage 1: Preprocessing (<code>.c</code> → <code>.i</code>)",
  "id": "stage-1-preprocessing-c--i",
  "level": 4
}, {
  "value": "Stage 2: Compilation (<code>.i</code> → <code>.s</code>)",
  "id": "stage-2-compilation-i--s",
  "level": 4
}, {
  "value": "Stage 3: Assembly (<code>.s</code> → <code>.o</code>)",
  "id": "stage-3-assembly-s--o",
  "level": 4
}, {
  "value": "Stage 4: Linking (<code>.o</code> → executable)",
  "id": "stage-4-linking-o--executable",
  "level": 4
}, {
  "value": "Stage 5: Loading (post-compilation)",
  "id": "stage-5-loading-post-compilation",
  "level": 4
}, {
  "value": "Dry Run: Compilation of <code>hello.c</code> with Trace Table",
  "id": "dry-run-compilation-of-helloc-with-trace-table",
  "level": 3
}, {
  "value": "Pseudocode: The Compiler&#39;s Internal Phases",
  "id": "pseudocode-the-compilers-internal-phases",
  "level": 3
}, {
  "value": "Complexity Analysis of Compilation Stages",
  "id": "complexity-analysis-of-compilation-stages",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of the Compilation Process",
  "id": "advantages-and-disadvantages-of-the-compilation-process",
  "level": 3
}, {
  "value": "Common Compilation Errors and What They Mean",
  "id": "common-compilation-errors-and-what-they-mean",
  "level": 3
}, {
  "value": "1.6 Compilation vs Interpretation: A Detailed Comparison",
  "id": "16-compilation-vs-interpretation-a-detailed-comparison",
  "level": 2
}, {
  "value": "Hybrid Approaches",
  "id": "hybrid-approaches",
  "level": 3
}, {
  "value": "1.7 Comments in C",
  "id": "17-comments-in-c",
  "level": 2
}, {
  "value": "Types of Comments",
  "id": "types-of-comments",
  "level": 3
}, {
  "value": "Rules and Important Notes",
  "id": "rules-and-important-notes",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "Best Practices",
  "id": "best-practices",
  "level": 3
}, {
  "value": "1.8 Tokens in C",
  "id": "18-tokens-in-c",
  "level": 2
}, {
  "value": "Real-World Analogy: A Library",
  "id": "real-world-analogy-a-library",
  "level": 3
}, {
  "value": "Classification of Tokens",
  "id": "classification-of-tokens",
  "level": 3
}, {
  "value": "Example: Tokenizing a Line of Code",
  "id": "example-tokenizing-a-line-of-code",
  "level": 3
}, {
  "value": "1.8.1 Keywords",
  "id": "181-keywords",
  "level": 3
}, {
  "value": "1.8.2 Identifiers",
  "id": "182-identifiers",
  "level": 3
}, {
  "value": "1.8.3 Constants",
  "id": "183-constants",
  "level": 3
}, {
  "value": "1.8.4 String Literals",
  "id": "184-string-literals",
  "level": 3
}, {
  "value": "1.8.5 Operators",
  "id": "185-operators",
  "level": 3
}, {
  "value": "1.9 Identifiers —” Naming Conventions",
  "id": "19-identifiers--naming-conventions",
  "level": 2
}, {
  "value": "Identifier Length and Scope",
  "id": "identifier-length-and-scope",
  "level": 3
}, {
  "value": "Naming Conventions",
  "id": "naming-conventions",
  "level": 3
}, {
  "value": "1.10 Keywords —” Complete Reference",
  "id": "110-keywords--complete-reference",
  "level": 2
}, {
  "value": "All 32 C89/C90 Keywords",
  "id": "all-32-c89c90-keywords",
  "level": 3
}, {
  "value": "1.11 Constants in C",
  "id": "111-constants-in-c",
  "level": 2
}, {
  "value": "Types of Constants",
  "id": "types-of-constants",
  "level": 3
}, {
  "value": "1.11.1 Integer Constants",
  "id": "1111-integer-constants",
  "level": 3
}, {
  "value": "1.11.2 Floating-Point Constants",
  "id": "1112-floating-point-constants",
  "level": 3
}, {
  "value": "1.11.3 Character Constants",
  "id": "1113-character-constants",
  "level": 3
}, {
  "value": "1.11.4 String Constants (String Literals)",
  "id": "1114-string-constants-string-literals",
  "level": 3
}, {
  "value": "1.11.5 Symbolic Constants (<code>#define</code>)",
  "id": "1115-symbolic-constants-define",
  "level": 3
}, {
  "value": "1.11.6 The <code>const</code> Keyword",
  "id": "1116-the-const-keyword",
  "level": 3
}, {
  "value": "Difference: <code>#define</code> vs <code>const</code>",
  "id": "difference-define-vs-const",
  "level": 3
}, {
  "value": "Edge Cases with Constants",
  "id": "edge-cases-with-constants",
  "level": 3
}, {
  "value": "1.12 Basic Input and Output",
  "id": "112-basic-input-and-output",
  "level": 2
}, {
  "value": "1.12.1 <code>printf()</code> —” Formatted Output",
  "id": "1121-printf--formatted-output",
  "level": 3
}, {
  "value": "Complete Format Specifier Table",
  "id": "complete-format-specifier-table",
  "level": 3
}, {
  "value": "Width and Precision Specifiers",
  "id": "width-and-precision-specifiers",
  "level": 3
}, {
  "value": "1.12.2 <code>scanf()</code> —” Formatted Input",
  "id": "1122-scanf--formatted-input",
  "level": 3
}, {
  "value": "Scanf Format Specifiers",
  "id": "scanf-format-specifiers",
  "level": 3
}, {
  "value": "Escape Sequences Table",
  "id": "escape-sequences-table",
  "level": 3
}, {
  "value": "Complete I/O Examples",
  "id": "complete-io-examples",
  "level": 3
}, {
  "value": "Common scanf Pitfalls",
  "id": "common-scanf-pitfalls",
  "level": 3
}, {
  "value": "1.13 C Standards: From K&amp;R to C23",
  "id": "113-c-standards-from-kr-to-c23",
  "level": 2
}, {
  "value": "Timeline and Feature Comparison",
  "id": "timeline-and-feature-comparison",
  "level": 3
}, {
  "value": "Why C Standards Matter",
  "id": "why-c-standards-matter",
  "level": 3
}, {
  "value": "1.14 Interview Corner",
  "id": "114-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between C and C++?",
  "id": "q1-what-is-the-difference-between-c-and-c",
  "level": 3
}, {
  "value": "Q2: Explain the four stages of compilation in detail.",
  "id": "q2-explain-the-four-stages-of-compilation-in-detail",
  "level": 3
}, {
  "value": "Q3: What does <code>printf()</code> return?",
  "id": "q3-what-does-printf-return",
  "level": 3
}, {
  "value": "Q4: What does <code>main()</code> return and why?",
  "id": "q4-what-does-main-return-and-why",
  "level": 3
}, {
  "value": "Q5: What is the difference between <code>int main()</code> and <code>int main(void)</code>?",
  "id": "q5-what-is-the-difference-between-int-main-and-int-mainvoid",
  "level": 3
}, {
  "value": "Q6: Is <code>sizeof</code> a function or an operator?",
  "id": "q6-is-sizeof-a-function-or-an-operator",
  "level": 3
}, {
  "value": "Q7: What is undefined behavior (UB) in C?",
  "id": "q7-what-is-undefined-behavior-ub-in-c",
  "level": 3
}, {
  "value": "Q8: Explain sequence points in C.",
  "id": "q8-explain-sequence-points-in-c",
  "level": 3
}, {
  "value": "Q9: Can you compile a C program without <code>main()</code>?",
  "id": "q9-can-you-compile-a-c-program-without-main",
  "level": 3
}, {
  "value": "Q10: What is the difference between <code>#include &quot;file&quot;</code> and <code>#include &lt;file&gt;</code>?",
  "id": "q10-what-is-the-difference-between-include-file-and-include-file",
  "level": 3
}, {
  "value": "1.15 Applications of C in Real Systems",
  "id": "115-applications-of-c-in-real-systems",
  "level": 2
}, {
  "value": "Operating Systems",
  "id": "operating-systems",
  "level": 3
}, {
  "value": "Embedded Systems",
  "id": "embedded-systems",
  "level": 3
}, {
  "value": "Databases",
  "id": "databases",
  "level": 3
}, {
  "value": "Compilers and Interpreters",
  "id": "compilers-and-interpreters",
  "level": 3
}, {
  "value": "Game Engines",
  "id": "game-engines",
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
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    stdbool: "stdbool",
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
        id: "chapter-1-introduction-to-c",
        children: "Chapter 1: Introduction to C"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/02-variables-datatypes",
          children: "Variables and Data Types"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trace the historical evolution of C from BCPL to C23"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List and explain 10+ features that make C a unique systems programming language"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up a C development environment with GCC or Clang"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write, compile, and execute a first C program"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the four stages of compilation with a real-world analogy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify tokens, identifiers, keywords, and constants"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between C standards (C89 through C23)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use printf and scanf for basic I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer common interview questions about C fundamentals"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Insight"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Practical Takeaway"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Weight"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "History of C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Created by Dennis Ritchie (1972) for Unix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understanding C's origins explains its design philosophy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Features of C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mid-level, procedural, portable, efficient"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C gives you power and control —” use it wisely"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure of a C Program"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Every program needs a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master this skeleton —” it is the foundation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hello, World"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First program teaches you the toolchain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write, compile, run —” the developer's loop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilation Pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor → Compiler → Assembler → Linker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use -E, -S, -c flags to inspect each stage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comments"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/* */"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "//"
            }), " —” ignored by compiler"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comments are for humans, not machines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tokens in C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smallest meaningful units: keywords, identifiers, constants, strings, operators"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything in C is built from tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Identifiers & Keywords"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32 reserved keywords, user-defined names"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "You cannot use keywords as identifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Constants"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed values: integer, float, char, string, symbolic (#define)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants make code readable and maintainable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Basic I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf outputs, scanf inputs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format specifiers match types —” mismatch causes UB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★★"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C Standards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89 → C99 → C11 → C17 → C23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newer standards add safety and features"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "★★★"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"1.1 History & Features\"] --> B[\"1.2 Setup Environment\"]\n    B --> C[\"1.3 Structure of C Program\"]\n    C --> D[\"1.4 Hello, World\"]\n    D --> E[\"1.5 Compilation Process\"]\n    E --> F[\"1.6 Compilation vs Interpretation\"]\n    F --> G[\"1.7 Comments\"]\n    G --> H[\"1.8 Tokens\"]\n    H --> I[\"1.9 Identifiers & 1.10 Keywords\"]\n    I --> J[\"1.11 Constants\"]\n    J --> K[\"1.12 Basic I/O\"]\n    K --> L[\"1.13 C Standards\"]\n    L --> M[\"1.14 Interview Corner\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-history-and-features-of-c",
      children: "1.1 History and Features of C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-the-history-of-c",
      children: "1.1.1 The History of C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C was developed between 1969 and 1973 by ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dennis Ritchie"
      }), " at Bell Telephone Laboratories. It evolved from an earlier language called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "B"
      }), " (created by Ken Thompson), which itself was derived from ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "BCPL"
      }), " (Basic Combined Programming Language, by Martin Richards). Ritchie designed C to implement the Unix operating system kernel, which had previously been written in assembly language."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Milestones:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Year"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Significance"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1969"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ken Thompson creates B language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precursor to C, used for early Unix"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1972"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dennis Ritchie creates C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Designed for systems programming on PDP-11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1973"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unix rewritten in C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First OS written in a high-level language —” portability breakthrough"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1978"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kernighan & Ritchie publish ", (0,jsx_runtime.jsx)(_components.em, {
              children: "The C Programming Language"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"K&R C\" becomes the informal standard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1989"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ANSI standardizes C (C89 / ANSI X3.159-1989)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["First official standard —” function prototypes, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1990"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO adopts as ISO/IEC 9899:1990 (C90)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minor editorial changes from C89"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C99 standard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Inline functions, variable-length arrays, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "//"
            }), " comments, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long long"
            }), ", designated initializers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C11 standard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Multithreading (", (0,jsx_runtime.jsx)(_components.code, {
              children: "<thread.h>"
            }), "), anonymous structs/unions, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_Static_assert"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_Generic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "noreturn"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C17 / C18"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bug-fix release —” no new language features, just defect fixes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C23 standard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bool"
            }), " becomes a keyword, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typeof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elifdef"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#elifndef"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "constexpr"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "nullptr"
            }), ", improved Unicode support"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Evolution of Transportation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Just as transportation evolved from walking (assembly) → horse (BCPL) → steam engine (B) → modern car (C), the C language inherited the best ideas from its predecessors while adding new capabilities. BCPL was typeless like a horse-drawn cart —” functional but limited. B added some structure like early automobiles. C became the \"modern sedan\" —” powerful, reliable, and still the standard for getting real work done."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-features-of-c",
      children: "1.1.2 Features of C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C is often called a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "mid-level language"
      }), " because it combines high-level language features (functions, loops, structures) with low-level capabilities (pointers, bit manipulation, memory addresses)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Benefit"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Procedural"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programs are organized as functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modular, reusable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast & Efficient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled to native machine code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Near-assembly performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C compilers exist for virtually every platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write once, compile anywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rich Set of Operators"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45+ operators: arithmetic, logical, bitwise, assignment, ternary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expressive, concise code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pointer Support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct memory access via addresses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Systems programming, dynamic memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Management"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Manual control with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predictable performance, no GC pauses"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Statically Typed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Types checked at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Early error detection, optimized code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Structured Programming"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Functions, blocks, control flow (", (0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            }), ", loops)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clear, maintainable code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Extensive Library"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard library: I/O, string, math, time, memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich built-in functionality"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Low-Level Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bit manipulation, register hints, inline assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware control, OS development"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recursion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions can call themselves"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant solutions for divide-and-conquer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preprocessor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text processing before compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional compilation, macros, file inclusion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy: Swiss Army Knife"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C is the Swiss Army Knife of programming languages. Other languages are like specialized tools —” Java is a power drill (great for large construction projects), Python is a paintbrush (perfect for quick artistic work). But C is the knife you carry everywhere: it cuts (low-level), it screws (pointers), it files (bit manipulation), it opens bottles (I/O). It does everything adequately and some things exceptionally well. Every programmer should own one."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-why-c-is-still-relevant-in-2024",
      children: "1.1.3 Why C is Still Relevant in 2024+"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operating Systems"
        }), ": Linux (≈95% C), Windows kernel, macOS kernel (XNU)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Embedded Systems"
        }), ": Microcontrollers, firmware, IoT —” billions of devices run C"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Language Foundation"
        }), ": C syntax influenced C++, C#, Java, JavaScript, Go, Rust, Swift"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance-Critical Code"
        }), ": Game engines, databases, compilers, real-time systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Portability"
        }), ": The C standard library is available everywhere"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Career Demand"
        }), ": Embedded, automotive, aerospace, and IoT engineers are in high demand"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-setting-up-a-c-development-environment",
      children: "1.2 Setting Up a C Development Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gcc-gnu-compiler-collection",
      children: "GCC (GNU Compiler Collection)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Linux:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install build-essential    # Debian/Ubuntu\nsudo dnf install gcc                # Fedora\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "macOS:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "xcode-select --install              # installs Clang\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Windows (MinGW-w64):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Using Scoop\nscoop install gcc\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "clang",
      children: "Clang"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Linux\nsudo apt install clang              # Debian/Ubuntu\n\n# macOS —” already installed via Xcode Command Line Tools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verify-installation",
      children: "Verify Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc --version\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A successful installation displays version information. If the command is not found, ensure the compiler's bin directory is in your system PATH."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-structure-of-a-c-program",
      children: "1.3 Structure of a C Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-house-blueprint",
      children: "Real-World Analogy: House Blueprint"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A C program is like a house blueprint:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comments = Annotations on the blueprint"
        }), ": Notes for the builder, ignored by the construction crew"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preprocessor Directives = Building permits and material lists"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include <stdio.h>"
        }), " is like ordering standard materials (windows, doors) from a catalog"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Declarations = Foundation and framing specifications"
        }), ": These define the overall structure accessible to every room"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "main() Function = The front door"
        }), ": Every house needs an entrance —” every C program needs a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main()"
        }), " entry point"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Function Definitions = Individual rooms"
        }), ": Each room (function) has a specific purpose and can be reused"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "anatomy-of-a-c-program",
      children: "Anatomy of a C Program"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────────┐\n│  /* File: program.c                                             │  ← Comments (annotations)\n│   * Purpose: Demonstrate C program structure                    │\n│   */                                                            │\n├─────────────────────────────────────────────────────────────────┤\n│  #include <stdio.h>    /* Standard I/O header */                │  ← Preprocessor Directives\n│  #include <stdlib.h>   /* Standard library header */            │     (permits & materials)\n│  #define PI 3.14159    /* Macro constant */                     │\n├─────────────────────────────────────────────────────────────────┤\n│  double area_of_circle(double radius);  /* Function prototype */│  ← Global Declarations\n├─────────────────────────────────────────────────────────────────┤\n│  int main(void)                                                 │  ← main() —” entry point\n│  {                                                              │     (front door)\n│      double r = 5.0;                                            │\n│      double a = area_of_circle(r);                              │\n│      printf(\"Area: %.2f\\n\", a);                                 │\n│      return 0;                                                  │\n│  }                                                              │\n├─────────────────────────────────────────────────────────────────┤\n│  double area_of_circle(double radius)  /* Function definition */│  ← Other Functions\n│  {                                                              │     (rooms)\n│      return PI * radius * radius;                               │\n│  }                                                              │\n└─────────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-example",
      children: "Complete Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/*\n * File:   structure.c\n * Author: Demo\n * Description: Shows the complete structure of a C program\n */\n\n#include <stdio.h>    /* Standard I/O —” for printf */\n#include <stdlib.h>   /* Standard library —” for EXIT_SUCCESS */\n\n#define GREETING \"Welcome to C Programming!\"\n\n/* Function prototype */\nvoid print_greeting(void);\n\n/* Main function —” entry point */\nint main(void)\n{\n    print_greeting();\n    printf(\"PI = %.4f\\n\", 3.14159);\n    return 0;\n}\n\n/* Function definition */\nvoid print_greeting(void)\n{\n    printf(\"%s\\n\", GREETING);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Welcome to C Programming!\nPI = 3.1416\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Mandatory Elements of a Valid C Program:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["At least one function named ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " must return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Either no parameters: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int main(void)"
        }), " —” or two parameters: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int main(int argc, char *argv[])"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-structure-violations",
      children: "Edge Cases: Structure Violations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Violation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Error Message"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(no main function)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined reference to 'main'"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void main()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "'main' must return 'int'"
            }), " (warning in C89, error in C99+)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Missing semicolon"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected ';' before '}' token"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unmatched brace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int main() {"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected declaration specifiers before '}'"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-writing-your-first-c-program-hello-world",
      children: "1.4 Writing Your First C Program: Hello, World!"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-creating-and-running-helloc",
      children: "Step-by-Step: Creating and Running hello.c"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "File: hello.c"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered Steps:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create source file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.c"
            }), " with the code above"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text file with .c extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -E hello.c -o hello.i"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#include"
            }), " expanded, comments stripped"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile to assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -S hello.c -o hello.s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C → assembly language"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assemble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -c hello.c -o hello.o"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assembly → machine code (object file)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc hello.o -o hello"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object + libraries → executable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Run"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "./hello"
            }), " (Linux/macOS) or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.exe"
            }), " (Windows)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute the program"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-what-happens-inside-the-computer",
      children: "Dry Run: What Happens Inside the Computer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Process"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Edit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideas in your head"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type code in editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save with .c extension"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preprocess"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expand ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            }), " → ~800 lines of stdio declarations + your 5 lines"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hello.i"
            }), " (~805 lines)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "#include"
            }), " replaced by actual header content"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compile"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.i"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse C syntax → generate assembly for your CPU"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hello.s"
            }), " (~50 lines)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf(...)"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "call printf"
            }), " (assembly)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assemble"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert mnemonics to binary opcodes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hello.o"
            }), " (binary)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mov"
            }), " → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "b8 04 00 00 00"
            }), " (x86-64)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Link"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hello.o"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "libc.a"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " → link to libc's implementation"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "hello"
            }), " (executable)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "call printf"
            }), " now points to actual code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OS loads binary into memory, starts execution"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "\"Hello, World!\""
            }), " on screen"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " writes to stdout"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "explanation-of-each-line",
      children: "Explanation of Each Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>      // Line 1: Preprocessor directive —” includes Standard I/O header\n                        //         Without this, printf() would be undeclared (compiler warning/error)\n\nint main(void)          // Line 3: Entry point. 'int' = returns integer. 'void' = no parameters\n{                       // Line 4: Opening brace marks start of function body\n    printf(\"Hello, World!\\n\");  // Line 5: Calls printf with format string. \\n = newline\n    return 0;           // Line 6: Returns 0 to OS —” convention for success\n}                       // Line 7: Closing brace marks end of function body\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-compilation-and-edge-cases",
      children: "Common Compilation and Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 1: Missing semicolon"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main(void)\n{\n    printf(\"Hello, World!\\n\")  // ← missing semicolon!\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Compiler Error:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "error: expected ';' before 'return'\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution:"
      }), " Every statement in C must end with ", (0,jsx_runtime.jsx)(_components.code, {
        children: ";"
      }), ". Think of it like a period ending a sentence."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Edge Case 2: Missing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return 0"
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main(void)\n{\n    printf(\"Hello, World!\\n\");\n    // No return statement\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Behavior:"
      }), " In C99+, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), " implicitly returns 0 if control reaches the closing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "}"
      }), ". In C89, this causes undefined behavior (garbage return value)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 3: Wrong parameter list"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main()          // ← '()' means \"unspecified parameters\" in C, NOT \"no parameters\"\n{\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main(void)"
      }), " to explicitly say \"takes no arguments.\""]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Case 4: Missing newline"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "printf(\"Hello, World!\");  // No \\n\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " The output might not appear immediately (buffered stdout), or the shell prompt may appear on the same line."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-the-compilation-process",
      children: "1.5 The Compilation Process"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-building-a-house",
      children: "Real-World Analogy: Building a House"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The C compilation process is like building a house from an architectural plan:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Compilation Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "House Construction Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Source Code (.c)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw architectural blueprint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Preprocessor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Surveyor interprets the blueprint: marks where doors (headers) go, adds standard specifications (macros), removes notes (comments)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compiler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Architect converts the marked-up blueprint into detailed construction drawings (assembly language) —” specific to the building style"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Assembler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construction crew turns drawings into physical components —” bricks, beams, pipes (machine code object file)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General contractor combines all components: your house frame + pre-built windows (libraries) + plumbing modules → finished house (executable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Loader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real estate agent places the family (program) in the house (memory) and opens the front door (starts execution)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stage-by-stage-breakdown",
      children: "Stage-by-Stage Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "stage-1-preprocessing-c--i",
      children: ["Stage 1: Preprocessing (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".c"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".i"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The preprocessor (", (0,jsx_runtime.jsx)(_components.code, {
        children: "cpp"
      }), " —” C Preprocessor) handles all directives starting with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removes all comments (replaces them with a single space)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expands ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), " —” pastes the entire contents of the referenced file"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expands ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), " macros —” replaces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "PI"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "3.14159"
        }), " everywhere"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Processes conditional compilation —” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifdef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#ifndef"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#if"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#endif"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Expands ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Pragma"
        }), " operators"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "View it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -E hello.c -o hello.i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example: Before and After Preprocessing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before (", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.c"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#define MSG \"Hello\"\n\nint main(void) {\n    printf(\"%s, World!\\n\", MSG);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After (", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.i"
      }), " —” showing just the expansion of our lines, actual file contains hundreds more from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdio.h>"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "# 1 \"hello.c\"\n# 1 \"<built-in>\"\n# 1 \"<command-line>\"\n# 1 \"hello.c\"\n# 1 \"c:\\\\mingw\\\\include\\\\stdio.h\" 1 3\n// ... ~800 lines of stdio.h declarations ...\n# 4 \"hello.c\" 2\n\nint main(void) {\n    printf(\"%s, World!\\n\", \"Hello\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <stdio.h>"
      }), " is gone (replaced by its content), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MSG"
      }), " is replaced by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Hello\""
      }), ", and comments are removed."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "stage-2-compilation-i--s",
      children: ["Stage 2: Compilation (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".i"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".s"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The compiler translates preprocessed C code into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "assembly language"
      }), " for the target CPU architecture."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lexical analysis —” tokenizes the input (breaks into tokens)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Syntax analysis —” builds an Abstract Syntax Tree (AST)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Semantic analysis —” checks type correctness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Intermediate code generation —” produces a platform-independent representation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Optimization —” applies transformations for speed, size, or power"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code generation —” produces assembly instructions specific to the target CPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "View it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -S hello.c -o hello.s\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "stage-3-assembly-s--o",
      children: ["Stage 3: Assembly (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".s"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".o"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The assembler (", (0,jsx_runtime.jsx)(_components.code, {
        children: "as"
      }), ") converts human-readable assembly mnemonics into ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "machine code"
      }), " (binary) and produces a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "relocatable object file"
      }), " (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".o"
      }), " on Linux, ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".obj"
      }), " on Windows)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Parses assembly instructions (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mov"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "add"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "call"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Converts each mnemonic to its binary opcode (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mov"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0xB8"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resolves labels within the file (jump targets, variable addresses)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produces an object file containing machine code + symbol table + relocation entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "View it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -c hello.c -o hello.o\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "objdump -d hello.o"
      }), " to see the machine code:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "objdump -d hello.o\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.o:     file format elf64-x86-64\n\nDisassembly of section .text:\n\n0000000000000000 <main>:\n   0:   55                      push   %rbp\n   1:   48 89 e5                mov    %rsp,%rbp\n   4:   bf 00 00 00 00          mov    $0x0,%edi\n   9:   b8 00 00 00 00          mov    $0x0,%eax\n   e:   e8 00 00 00 00          callq  13 <main+0x13>\n  13:   b8 00 00 00 00          mov    $0x0,%eax\n  18:   5d                      pop    %rbp\n  19:   c3                      retq\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Notice the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "callq"
      }), " at address ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0xe"
      }), " —” the target address is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0x00000000"
      }), " (placeholder). The linker will fill this in."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h4, {
      id: "stage-4-linking-o--executable",
      children: ["Stage 4: Linking (", (0,jsx_runtime.jsx)(_components.code, {
        children: ".o"
      }), " → executable)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The linker (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ld"
      }), ") combines one or more object files with libraries to produce a single executable."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "What it does:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Resolves external references —” finds ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf"
        }), " in the C standard library (", (0,jsx_runtime.jsx)(_components.code, {
          children: "libc.a"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relocates code —” adjusts addresses in each object file so they don't overlap"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Combines sections —” merges ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".text"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".data"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".bss"
        }), " sections from all inputs"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Produces the final executable format (ELF on Linux, PE on Windows, Mach-O on macOS)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "View it:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc hello.o -o hello\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "stage-5-loading-post-compilation",
      children: "Stage 5: Loading (post-compilation)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you run ", (0,jsx_runtime.jsx)(_components.code, {
        children: "./hello"
      }), ", the OS ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "loader"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reads the executable file from disk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allocates memory for code, data, stack, and heap"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Copies the program into memory"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Performs any final relocations (dynamic linking if using ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".so"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dll"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sets up the stack, initializes registers"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Jumps to the entry point (", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "dry-run-compilation-of-helloc-with-trace-table",
      children: ["Dry Run: Compilation of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.c"
      }), " with Trace Table"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's trace a minimal ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.c"
      }), " through all four stages:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "hello.c"
      }), " (6 lines)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\nint main(void) {\n    printf(\"Hello, World!\\n\");\n    return 0;\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Actions Performed"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1. Preprocess"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "94 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cpp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.i"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~28 KB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Expand ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            }), " (~800 lines), strip comments"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2. Compile"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~28 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cc1"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenize, parse, generate assembly (x86-64: ~35 instructions)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3. Assemble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "as"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello.o"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2 KB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert mnemonics to binary, create relocation table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4. Link"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 KB + libc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~16 KB"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Resolve ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), ", set entry point, create executable header"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-the-compilers-internal-phases",
      children: "Pseudocode: The Compiler's Internal Phases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PHASE 1: Lexical Analysis (Scanning)\n    INPUT:  stream of characters\n    OUTPUT: stream of tokens\n    ALGORITHM:\n        while (not end of file):\n            if char is letter or underscore:\n                read identifier/keyword → emit IDENTIFIER or KEYWORD token\n            if char is digit:\n                read number → emit CONSTANT token\n            if char is '\"':\n                read string literal → emit STRING_LITERAL token\n            if char is one of { }, ;, (, ), etc:\n                emit appropriate PUNCTUATOR token\n            if char is '+' or '-' or '*' or '/' etc:\n                emit appropriate OPERATOR token\n            skip whitespace and comments\n\nPHASE 2: Syntax Analysis (Parsing)\n    INPUT:  stream of tokens\n    OUTPUT: Abstract Syntax Tree (AST)\n    ALGORITHM:\n        root = translation_unit()\n        function translation_unit():\n            while (token != EOF):\n                external_declaration()\n        function external_declaration():\n            if token is KEYWORD(int|void|char|...):\n                return function_definition() or declaration()\n            else:\n                error(\"expected declaration specifiers\")\n\nPHASE 3: Semantic Analysis\n    INPUT:  AST\n    OUTPUT: Annotated AST (with types)\n    ALGORITHM:\n        walk AST:\n            for each expression node:\n                check types of operands match operator expectations\n                insert implicit type conversions if needed\n                error on type mismatch (e.g., assigning float* to int*)\n            for each function call:\n                verify number and types of arguments match prototype\n\nPHASE 4: Intermediate Code Generation\n    INPUT:  Annotated AST\n    OUTPUT: Three-Address Code (TAC)\n    EXAMPLE:   printf(\"Hello\\n\") → t1 = &\"Hello\\n\"; call printf(t1)\n               return 0        → ret 0\n\nPHASE 5: Optimization\n    INPUT:  TAC\n    OUTPUT: Optimized TAC\n    EXAMPLE:   constant folding: 2 + 3 → 5\n               dead code elimination: remove unreachable code\n               loop unrolling, inlining, etc.\n\nPHASE 6: Code Generation\n    INPUT:  Optimized TAC\n    OUTPUT: Assembly code\n    EXAMPLE:   call printf → mov edi, offset .LC0; xor eax, eax; call printf\n               ret 0       → xor eax, eax; ret\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-of-compilation-stages",
      children: "Complexity Analysis of Compilation Stages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lexical Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans each character exactly once; stores tokens linearly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive descent parsers run in linear time for LL(k) grammars; AST size is proportional to token count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Semantic Analysis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Walks the AST once; symbol table size proportional to declarations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) to O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some optimizations (register allocation) use graph coloring —” NP-hard in general, but heuristics run near-linear"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Generation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear traversal of optimized IR; instruction selection is pattern matching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n) typical"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Modern compilers use multi-pass architecture where each pass is linear or near-linear"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n log n) overall?"
      }), " The \"log n\" comes from table lookups (balanced BST or hash-table operations) during symbol resolution and optimization passes. In practice, for typical programs, compilation time scales linearly with source size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-the-compilation-process",
      children: "Advantages and Disadvantages of the Compilation Process"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Fast execution"
            }), " —” compiled code runs directly on hardware"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Longer edit-compile-debug cycle"
            }), " —” must recompile after every change"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Early error detection"
            }), " —” syntax and type errors caught at compile time"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform-specific"
            }), " —” executables don't cross OS/CPU boundaries"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization opportunities"
            }), " —” compiler can optimize across the entire program"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Takes more disk space"
            }), " —” executables are larger than source code"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "No runtime dependency"
            }), " —” no interpreter or VM needed"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complex build process"
            }), " —” multi-stage pipeline, Makefiles required for large projects"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Full hardware access"
            }), " —” can generate any CPU instruction"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Less portable source"
            }), " —” some features are platform-dependent (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Smaller memory footprint"
            }), " —” no VM overhead"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Harder debugging"
            }), " —” need debug info (-g flag) to map binary back to source"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-compilation-errors-and-what-they-mean",
      children: "Common Compilation Errors and What They Mean"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Error"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cause"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Fix"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "undefined reference to 'main'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linker"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["No main function, or misspelled ", (0,jsx_runtime.jsx)(_components.code, {
              children: "mian"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Create ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(void)"
            }), " or check spelling"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "expected ';' before '...'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing semicolon"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            }), " at end of statement"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "implicit declaration of function 'printf'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler (C89)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Missing ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "conflicting types for '...'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function defined twice with different signatures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check function declarations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "segmentation fault"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null pointer dereference, buffer overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check pointers, array bounds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "multiple definition of '...'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same function defined in multiple source files"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), " or header guards"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-compilation-vs-interpretation-a-detailed-comparison",
      children: "1.6 Compilation vs Interpretation: A Detailed Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compiled Languages (C, C++, Rust, Go)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interpreted Languages (Python, JavaScript, Ruby, PHP)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source → Compiler → Machine code → Execute"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source → Interpreter → Execute (line by line)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Translation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entire program translated at once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Translated line by line at runtime"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Execution Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (native machine code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (translation overhead at runtime)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Startup Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (binary is ready)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (interpreter must initialize)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Usage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower (binary is direct machine code)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (interpreter + runtime objects)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error Detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All errors at compile time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error at first offending line during execution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability of Source"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recompile for each platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source runs anywhere with interpreter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary executables (platform-specific)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source code (must have interpreter)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Dynamic Features"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (static typing, fixed at compile time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensive (eval, dynamic typing, runtime code gen)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder (machine code is far from source)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (interpreter provides rich tracebacks)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optimization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensive (whole-program optimization)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (just-in-time compilation helps)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder to reverse-engineer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Source visible to user"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Examples"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C, C++, Rust, Go, Fortran"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python, JavaScript, Ruby, Perl, PHP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "hybrid-approaches",
      children: "Hybrid Approaches"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How It Works"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Examples"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Just-In-Time Compilation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interprets initially, then compiles hot paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java (JIT), JavaScript (V8), C#"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bytecode Compilation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiles to platform-independent bytecode, then interprets/JIT-compiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java (JVM bytecode), Python (.pyc)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Transpilation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiles one high-level language to another"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TypeScript → JavaScript, C → WebAssembly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "17-comments-in-c",
      children: "1.7 Comments in C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-comments",
      children: "Types of Comments"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* This is a multi-line comment.\n   It can span several lines.\n   Everything between /* and */ is ignored. */\n\n// This is a single-line comment (introduced in C99).\n// Everything from // to the end of the line is ignored.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rules-and-important-notes",
      children: "Rules and Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Comments are removed by the preprocessor"
        }), " —” replaced with a single space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-line comments do NOT nest"
        }), " —” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/* outer /* inner */ outer */"
        }), " causes an error"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Single-line comments (", (0,jsx_runtime.jsx)(_components.code, {
            children: "//"
          }), ") require C99 or later"]
        }), " —” use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-std=c99"
        }), " or higher"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Comments can appear anywhere whitespace is allowed"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do not put comments inside strings"
        }), " —” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"/* not a comment */\\n\");"
        }), " prints the text"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Valid: comment between tokens */\nint x /* counter */ = 5;\n\n/* Valid: comment inside a macro */\n#define MAX(a, b) /* find max */ ((a) > (b) ? (a) : (b))\n\n/* INVALID: nested comments */\n/* outer /* inner */ ← this */  /* ← ERROR: this \"ends\" a comment that wasn't opened */\n\n/* Tricky: trigraph issue (C89 only —” removed in C23) */\n// ??/    ← trigraph for backslash, continues comment to next line!\n\n/* The single-line comment // can contain multi-line comment delimiters: */\n// /* this is just text inside a single-line comment */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "best-practices",
      children: "Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Use block comments for:\n *   1. File headers (author, date, purpose)\n *   2. Function descriptions\n *   3. Complex algorithm explanations\n */\n\n// Use single-line comments for:\n//   1. Short explanations of a single line\n//   2. Inline code annotations\n//   3. TODO and FIXME notes: // TODO: optimize this loop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "18-tokens-in-c",
      children: "1.8 Tokens in C"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-a-library",
      children: "Real-World Analogy: A Library"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A C program is like a library:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), " = Library rules (no food, quiet hours) —” fixed, unchangeable, predefined"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Identifiers"
        }), " = Book titles —” you choose them, but they must follow naming conventions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Constants"
        }), " = Static exhibits (the displayed artifacts) —” their values don't change"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "String Literals"
        }), " = Quoted text in books —” sequences of characters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Operators"
        }), " = Library equipment (scanners, carts) —” they perform actions on objects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Punctuators/Separators"
        }), " = Shelf dividers, catalog cards —” they organize and separate items"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "token"
      }), " is the smallest individual element of a C program that has meaning to the compiler. The compiler breaks your source code into tokens during the lexical analysis phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "classification-of-tokens",
      children: "Classification of Tokens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                          ┌─────────────────────────┐\n                          │       TOKENS             │\n                          └─────────────────────────┘\n                                   │\n            ┌──────────────────────┼──────────────────────┐\n            │              │               │              │\n     ┌──────┴──────┐ ┌─────┴──────┐ ┌──────┴───────┐ ┌───┴────┐\n     │  Keywords   │ │ Identifiers│ │  Constants   │ │String  │\n     │ (32 total)  │ │ (names)    │ │  (literals)  │ │Literals│\n     └─────────────┘ └────────────┘ └──────────────┘ └────────┘\n            │\n     ┌──────┴──────┐\n     │  Operators  │\n     │ (45+ total) │\n     └─────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-tokenizing-a-line-of-code",
      children: "Example: Tokenizing a Line of Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Code:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int count = 10 + 2 * 3;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Tokenization (what the compiler sees):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "#"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Token"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Lexeme"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keyword"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identifier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "="
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Addition"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "*"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ";"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Punctuator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statement terminator"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "181-keywords",
      children: "1.8.1 Keywords"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Keywords"
      }), " are reserved words that have special meaning to the C compiler. They cannot be used as identifiers (variable names, function names, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C89/C90 Keywords (32 total):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Keywords"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Types"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "struct"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "union"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "enum"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type Modifiers"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "short"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "long"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signed"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage Classes"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "auto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "static"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "extern"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "register"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type Qualifiers"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "volatile"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control Flow"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "if"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "else"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "switch"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "case"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "default"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "for"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "while"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "do"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "break"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "continue"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "return"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Other"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "typedef"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C99 added (5):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "inline"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "restrict"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Complex"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Imaginary"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C11 added (7):"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Alignas"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Alignof"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Atomic"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Static_assert"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Noreturn"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Thread_local"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Generic"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "C23 added:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bool"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "true"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "false"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "static_assert"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thread_local"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alignas"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "alignof"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeof"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeof_unqual"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "nullptr"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "constexpr"
      }), " (some were macros in C23, promoted to keywords)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "182-identifiers",
      children: "1.8.2 Identifiers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Identifiers"
      }), " are names given to variables, functions, structures, unions, and labels."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rules for Identifiers:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Must begin with a letter (a-z, A-Z) or underscore (_)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Subsequent characters may be letters, digits (0-9), or underscores"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Case-sensitive: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "count"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Count"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "COUNT"
        }), " are three different identifiers"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keywords cannot be used as identifiers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Length: C99 guarantees 63 significant characters for internal identifiers, 31 for external"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Valid identifiers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "x              // single letter\ncount          // descriptive name\ntotal_sum      // underscore separator\nnode1          // letter + digit\n_private       // underscore prefix (reserved for implementation)\ncamelCaseVar   // camelCase convention\nMAX_SIZE       // UPPER_CASE convention for constants\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Invalid identifiers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "1st            // starts with digit\nmy-var         // hyphen is not allowed\nint            // keyword —” reserved\nfloat value    // space is not allowed in identifiers\n$money         // $ is not allowed (allowed in C23 via <cuchar> but not in identifiers)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "183-constants",
      children: "1.8.3 Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Constants are fixed values that do not change during program execution. (Covered in detail in Section 1.11.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "184-string-literals",
      children: "1.8.4 String Literals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "string literal"
      }), " is a sequence of characters enclosed in double quotes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "\"Hello, World!\"   // string literal\n\"\"                // empty string\n\"Line 1\\nLine 2\"  // string with escape sequence\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " String literals are automatically terminated with a null character (", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\0"
      }), "). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Hello\""
      }), " is actually stored as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{'H','e','l','l','o','\\0'}"
      }), " —” 6 bytes, not 5."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "185-operators",
      children: "1.8.5 Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Operators are symbols that perform operations on operands. (45+ operators in C.)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Categories:"
      }), " Arithmetic, Relational, Logical, Bitwise, Assignment, Increment/Decrement, Conditional, Pointer, Cast, sizeof, Comma"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "+  -  *  /  %        // Arithmetic\n==  !=  <  >  <=  >=  // Relational\n&&  ||  !             // Logical\n&  |  ^  ~  <<  >>   // Bitwise\n=  +=  -=  *=  ...    // Assignment\n++  --                // Increment/Decrement\n? :                   // Ternary/Conditional\n*  &  ->  .           // Pointer/Structure\nsizeof                // Size-of operator\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "19-identifiers--naming-conventions",
      children: "1.9 Identifiers —” Naming Conventions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "identifier-length-and-scope",
      children: "Identifier Length and Scope"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint global_count = 0;       // Global identifier —” visible everywhere\n\nvoid process_data(void) {\n    int local_temp = 5;     // Local identifier —” visible only inside this function\n    {\n        int block_var = 10; // Block scope —” visible only inside this block\n        printf(\"%d\\n\", block_var);\n    }\n    // printf(\"%d\\n\", block_var);  // ERROR: block_var not in scope\n}\n\nint main(void) {\n    process_data();\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "naming-conventions",
      children: "Naming Conventions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Convention"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "snake_case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "total_sum"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variables, functions —” most common in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "UPPER_CASE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MAX_BUFFER_SIZE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constants (#define macros)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CamelCase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "LinkedListNode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Struct types (used in some projects)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "_leading_underscore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_internal"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reserved for implementation —” DO NOT USE"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "trailing_underscore_"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name_"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes used to avoid conflicts"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "110-keywords--complete-reference",
      children: "1.10 Keywords —” Complete Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "all-32-c89c90-keywords",
      children: "All 32 C89/C90 Keywords"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Data Types\nint       // integer type (at least 16 bits)\nchar      // character type (1 byte)\nfloat     // floating-point type (single precision)\ndouble    // floating-point type (double precision)\nvoid      // no type / empty parameter list\nstruct    // structure (aggregate type)\nunion     // union (overlapping type)\nenum      // enumeration (named integer constants)\n\n// Type Modifiers\nshort     // short integer (at least 16 bits, may be smaller than int)\nlong      // long integer (at least 32 bits, may be larger than int)\nsigned    // signed integer (default for int and char)\nunsigned  // unsigned integer (no negative values)\n\n// Storage Classes\nauto      // automatic storage duration (default for local variables)\nstatic    // static storage duration / internal linkage\nextern    // external linkage (declared but defined elsewhere)\nregister  // hint to store variable in CPU register (deprecated)\n\n// Type Qualifiers\nconst     // read-only —” value cannot be modified\nvolatile  // may change unexpectedly (for hardware registers, signal handlers)\n\n// Control Flow\nif        // conditional execution\nelse      // alternative branch\nswitch    // multi-way branch\ncase      // branch label in switch\ndefault   // default branch in switch\nfor       // counted loop\nwhile     // entry-controlled loop\ndo        // exit-controlled loop (used with while)\nbreak     // exit loop or switch\ncontinue  // skip to next iteration\ngoto      // unconditional jump (avoid in modern code)\nreturn    // return from function with optional value\n\n// Other\nsizeof    // compile-time unary operator returning size in bytes\ntypedef   // create type aliases\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-constants-in-c",
      children: "1.11 Constants in C"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "constant"
      }), " is a fixed value that does not change during program execution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-constants",
      children: "Types of Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    ┌──────────────────────┐\n                    │     CONSTANTS          │\n                    └──────────────────────┘\n                           │\n         ┌─────────────────┼─────────────────┐\n         │                 │                 │\n   ┌─────┴─────┐   ┌──────┴──────┐   ┌──────┴──────┐\n   │  Numeric  │   │ Character  │   │  Symbolic   │\n   │ Constants │   │ Constants  │   │  Constants  │\n   └───────────┘   └────────────┘   └─────────────┘\n         │                │\n   ┌─────┴─────┐    ┌─────┴──────┐\n   │ Integer   │    │ Single     │\n   │ Constants │    │ Character  │\n   │ Float/Dbl │    │ String     │\n   └───────────┘    └────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1111-integer-constants",
      children: "1.11.1 Integer Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "42          // Decimal (base 10)\n052         // Octal (base 8) —” starts with 0 —” value is 42 in decimal\n0x2A        // Hexadecimal (base 16) —” starts with 0x or 0X —” value is 42\n0b101010    // Binary (C23) —” starts with 0b or 0B —” value is 42\n42U         // Unsigned suffix\n42L         // Long suffix\n42LL        // Long long suffix (C99)\n42UL        // Unsigned long\n42ULL       // Unsigned long long\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1112-floating-point-constants",
      children: "1.11.2 Floating-Point Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "3.14159     // Double (default)\n3.14F       // Float suffix\n3.14L       // Long double suffix\n2.5e-3      // Scientific notation = 0.0025\n1.6E+10     // Scientific notation = 16,000,000,000\n.5          // = 0.5\n5.          // = 5.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1113-character-constants",
      children: "1.11.3 Character Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "'A'         // Character constant —” value 65 in ASCII\n'a'         // Character constant —” value 97 in ASCII\n'0'         // Character constant —” value 48 in ASCII\n'\\n'        // Escape sequence —” newline (value 10)\n'\\t'        // Escape sequence —” tab (value 9)\n'\\''        // Escape sequence —” single quote (value 39)\n'\\\\'        // Escape sequence —” backslash (value 92)\n'\\x41'      // Hexadecimal escape —” character 'A' (ASCII 0x41)\n'\\101'      // Octal escape —” character 'A' (ASCII 101 octal = 65 decimal)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1114-string-constants-string-literals",
      children: "1.11.4 String Constants (String Literals)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "\"Hello\"         // String of 5 characters + null terminator = 6 bytes\n\"\"              // Empty string = 1 byte (just null terminator)\n\"Line 1\\nLine 2\"  // String with embedded newline\n\"c:\\\\path\\\\file\" // String with escaped backslashes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1115-symbolic-constants-define",
      children: ["1.11.5 Symbolic Constants (", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define PI 3.14159\n#define MAX_SIZE 100\n#define GREETING \"Welcome!\"\n#define AREA(r) (PI * (r) * (r))  // Macro with parameter\n\nint main(void) {\n    printf(\"PI = %f\\n\", PI);\n    printf(\"Area = %f\\n\", AREA(5));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1116-the-const-keyword",
      children: ["1.11.6 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      }), " Keyword"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "const int DAYS_IN_WEEK = 7;      // Read-only variable\nconst float GRAVITY = 9.81;      // Cannot be modified after initialization\n\n// DAYS_IN_WEEK = 8;    // ERROR: assignment of read-only variable\n\nconst int *ptr;                  // Pointer to a const int (data is const)\nint * const ptr2;                // Const pointer to int (address is const)\nconst int * const ptr3;          // Both pointer and data are const\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "difference-define-vs-const",
      children: ["Difference: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#define"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Handled by"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocessor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (text replacement)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full type checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No memory allocated"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scope"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File scope from point of definition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block scope (follows normal scoping)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Debugging"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be inspected in debugger"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Visible in debugger"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pointer to"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not applicable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can have const pointers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-with-constants",
      children: "Edge Cases with Constants"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Integer literal overflow */\nint x = 2147483648;       // UB if INT_MAX = 2147483647\n\n/* Octal misinterpretation */\nint y = 010;              // This is 8 in decimal, NOT 10!\n\n/* String literal modification —” UB! */\nchar *s = \"hello\";\ns[0] = 'H';               // Undefined behavior —” modifying string literal\n\n/* const-qualified through a pointer —” UB! */\nconst int c = 10;\nint *p = (int *)&c;       // Casting away const\n*p = 20;                  // Undefined behavior\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-basic-input-and-output",
      children: "1.12 Basic Input and Output"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1121-printf--formatted-output",
      children: ["1.12.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf()"
      }), " —” Formatted Output"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int printf(const char *format, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "printf()"
      }), " writes a formatted string to the standard output (stdout). It returns the number of characters printed on success, or a negative value on error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-format-specifier-table",
      children: "Complete Format Specifier Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%i"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (signed decimal)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%u\", 42U)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (decimal)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%f\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lf"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (scanf) / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (printf, C99)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%lf\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%.2f"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " with 2 decimal places"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%.2f\", 3.14159)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%e"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%E"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (scientific)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%e\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.140000e+00"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%g"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%G"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (shortest of %f/%e)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%g\", 3.14)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3.14"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char"
            }), " (single character)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%c\", 'A')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "A"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%s"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char*"
            }), " (string)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", \"hello\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hello"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%p"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void*"
            }), " (pointer address)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%p\", &x)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "0x7ffeea3b4c"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "%x"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%X"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            }), " (hex)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%x\", 255)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ff"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "FF"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%o"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned int"
            }), " (octal)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%o\", 8)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "10"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%%"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal percent sign"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%%\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%ld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%ld\", 100000L)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100000"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lld"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "long long int"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%lld\", 100LL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned long"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%lu\", 100UL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "100"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%zu"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "size_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%zu\", sizeof(int))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "width-and-precision-specifiers",
      children: "Width and Precision Specifiers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "printf(\"%10d\", 42);       // Right-justified in field width 10: \"        42\"\nprintf(\"%-10d\", 42);      // Left-justified in field width 10: \"42        \"\nprintf(\"%010d\", 42);      // Zero-padded width 10: \"0000000042\"\nprintf(\"%.5d\", 42);       // Minimum 5 digits: \"00042\"\nprintf(\"%10.3f\", 3.14);   // Width 10, precision 3: \"     3.140\"\nprintf(\"%-10.3f\", 3.14);  // Left-justified, width 10, precision 3: \"3.140     \"\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1122-scanf--formatted-input",
      children: ["1.12.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scanf()"
      }), " —” Formatted Input"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int scanf(const char *format, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "scanf()"
      }), " reads formatted input from the standard input (stdin). It returns the number of input items successfully matched and assigned, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EOF"
      }), " on failure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CRITICAL:"
      }), " Always pass the ADDRESS of variables (using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ") to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "scanf"
      }), ", not the variables themselves."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    int age;\n    double salary;\n    char name[50];\n\n    printf(\"Enter your name: \");\n    scanf(\"%49s\", name);          // No & for arrays —” name decays to pointer\n\n    printf(\"Enter your age: \");\n    scanf(\"%d\", &age);            // &age —” address of age\n\n    printf(\"Enter your salary: \");\n    scanf(\"%lf\", &salary);        // &salary —” address of salary\n\n    printf(\"Name: %s, Age: %d, Salary: %.2f\\n\", name, age, salary);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "scanf-format-specifiers",
      children: "Scanf Format Specifiers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Specifier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed decimal integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%d\", &x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%i"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Signed integer (auto-detect octal/hex)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%i\", &x)"
            }), " —” ", (0,jsx_runtime.jsx)(_components.code, {
              children: "010"
            }), " reads as 8"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%u"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unsigned decimal integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%u\", &x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%f\", &f)"
            }), " —” for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "float"
            }), " (not double!)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%lf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%lf\", &d)"
            }), " —” for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single character"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\" %c\", &ch)"
            }), " —” note space before %c to skip whitespace"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String (whitespace-terminated)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%49s\", buffer)"
            }), " —” no & needed for arrays"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%x"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hexadecimal integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%x\", &x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%o"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Octal integer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%o\", &x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%[...]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scanset"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%[a-zA-Z]\", str)"
            }), " —” read only letters"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "%*d"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Suppress assignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%*d %d\", &x)"
            }), " —” read and discard first integer"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "escape-sequences-table",
      children: "Escape Sequences Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sequence"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ASCII Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10 (0x0A)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Newline / Line Feed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 (0x09)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Horizontal Tab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\r"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13 (0x0D)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Carriage Return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\\\"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "92 (0x5C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backslash"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\'"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "39 (0x27)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single Quote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34 (0x22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Double Quote"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\0"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0 (0x00)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null (string terminator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\a"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 (0x07)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bell / Alert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\b"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 (0x08)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backspace"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\f"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12 (0x0C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Form Feed / Page Break"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\v"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 (0x0B)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vertical Tab"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\xHH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0xHH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hexadecimal character"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\\OOO"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOO (octal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Octal character"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-io-examples",
      children: "Complete I/O Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void) {\n    /* Example 1: Basic output */\n    printf(\"Hello, World!\\n\");\n\n    /* Example 2: Multiple format specifiers */\n    int age = 25;\n    double height = 5.9;\n    printf(\"Age: %d, Height: %.1f feet\\n\", age, height);\n\n    /* Example 3: Field width and alignment */\n    printf(\"|%10s|%10s|\\n\", \"Name\", \"Score\");\n    printf(\"|%10s|%10d|\\n\", \"Alice\", 95);\n    printf(\"|%10s|%10d|\\n\", \"Bob\", 87);\n\n    /* Example 4: scanf with validation */\n    int num;\n    printf(\"Enter a number: \");\n    if (scanf(\"%d\", &num) == 1) {\n        printf(\"You entered: %d\\n\", num);\n    } else {\n        printf(\"Invalid input!\\n\");\n    }\n\n    /* Example 5: Printf returns character count */\n    int chars = printf(\"Test\\n\");\n    printf(\"Previous printf printed %d characters\\n\", chars);  // 5 (T,e,s,t,\\n)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Hello, World!\nAge: 25, Height: 5.9 feet\n|      Name|     Score|\n|     Alice|        95|\n|       Bob|        87|\nEnter a number: 42\nYou entered: 42\nTest\nPrevious printf printed 5 characters\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-scanf-pitfalls",
      children: "Common scanf Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Pitfall 1: Trailing newline */\nint x;\nchar ch;\nscanf(\"%d\", &x);           // User types 42 and presses Enter —” \"42\\n\" in buffer\nscanf(\"%c\", &ch);          // Reads '\\n' (leftover), not the next character!\n/* Fix: Add space before %c */\nscanf(\" %c\", &ch);         // Space skips whitespace before %c\n\n/* Pitfall 2: Buffer overflow with %s */\nchar buf[5];\nscanf(\"%s\", buf);          // If user types \"HelloWorld\", buffer overflow!\n/* Fix: Use field width */\nscanf(\"%4s\", buf);         // Reads at most 4 chars + null terminator\n\n/* Pitfall 3: %f vs %lf in scanf */\nfloat f;\ndouble d;\nscanf(\"%f\", &f);           // %f for float —” CORRECT\nscanf(\"%lf\", &d);          // %lf for double —” CORRECT (NOT %f!)\n/* Note: In printf, %f works for BOTH float and double (float promotes to double) */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-c-standards-from-kr-to-c23",
      children: "1.13 C Standards: From K&R to C23"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "timeline-and-feature-comparison",
      children: "Timeline and Feature Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "K&R (1978)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C89/C90"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C99"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C11"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C17"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C23"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Year"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1978"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1989/1990"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1999"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2011"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2018"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2024"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function prototypes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "//"
              }), " comments"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "long long"
              }), " type"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "_Bool"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "bool"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Bool"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ keyword"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Inline functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable-length arrays"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (mandatory)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Designated initializers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compound literals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "restrict"
              }), " keyword"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Anonymous structs/unions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "_Static_assert"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ (keyword)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "_Generic"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Multithreading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_Thread_local"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<threads.h>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "enhanced"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "noreturn"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Noreturn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "_Noreturn"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "[[noreturn]]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "alignas"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "alignof"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "_Alignas"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_Alignof"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "keywords"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "constexpr"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "typeof"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "nullptr"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "#elifdef"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: "#elifndef"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "bool"
              }), " as keyword"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "True/false as keywords"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary literals (0b...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "memset_s"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Digit separators (", (0,jsx_runtime.jsx)(_components.code, {
                children: "'"
              }), ")"]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "[[deprecated]]"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigraphs"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ removed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-c-standards-matter",
      children: "Why C Standards Matter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// This code compiles in C99+ but NOT in C89:\n#include <stdio.h>\nint main(void) {\n    // Single-line comment —” C99 feature\n    for (int i = 0; i < 5; i++) {  // Declare in for —” C99 feature\n        printf(\"%d\\n\", i);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// This code compiles in C11+ but NOT in C99:\n#include <stdio.h>\n#include <threads.h>  // C11 threading\n\nint main(void) {\n    printf(\"C11 or later required\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// C23 features:\n#include <stdio.h>\nint main(void) {\n    bool flag = true;               // bool is now a keyword (was _Bool in C99/C11/C17)\n    int x = 0b101010;               // Binary literal —” C23 only\n    typeof(x) y = 42;               // typeof operator —” C23 only\n    int arr[3] = { [0] = 1, [1] = 2, [2] = 3 };  // Designated initializers\n    nullptr_t n = nullptr;          // nullptr —” C23 only\n\n    printf(\"flag = %d, x = %d, y = %d\\n\", flag, x, y);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-interview-corner",
      children: "1.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-c-and-c",
      children: "Q1: What is the difference between C and C++?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paradigm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural (structured)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-paradigm: OOP, procedural, generic, functional"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Classes & Objects"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No classes (structs only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full OOP with classes, inheritance, polymorphism"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exception Handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No built-in exceptions (errno, longjmp)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "try"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "catch"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "throw"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Function Overloading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Operator Overloading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Templates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported (macros instead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full template support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "References"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No references (pointers only)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["References (", (0,jsx_runtime.jsx)(_components.code, {
              children: "&"
            }), ") in addition to pointers"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "new"
              }), "/", (0,jsx_runtime.jsx)(_components.code, {
                children: "delete"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc()"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "free()"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "new"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            }), " operators"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtual Functions"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not supported"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Virtual function tables (vtables)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard Library"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small (stdio, stdlib, string, math)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large (STL: containers, algorithms, iterators)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C++ Compatibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—”"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ is (mostly) a superset of C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Cases"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded, OS kernels, firmware"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Game engines, GUI applications, systems software"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-explain-the-four-stages-of-compilation-in-detail",
      children: "Q2: Explain the four stages of compilation in detail."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " See Section 1.5. Key interview points:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preprocessor"
        }), ": Text processing —” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#include"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "#define"
        }), ", conditional compilation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compiler"
        }), ": C → assembly —” lexical analysis, parsing, optimization, code generation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assembler"
        }), ": Assembly → machine code (relocatable object file)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linker"
        }), ": Object files + libraries → executable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Follow-up:"
      }), " \"What is the difference between static and dynamic linking?\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Static linking"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "-static"
        }), "): Library code is copied into the executable at link time. Larger binary, but no runtime dependency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dynamic linking"
        }), " (default on most systems): References to shared libraries (", (0,jsx_runtime.jsx)(_components.code, {
          children: ".so"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dll"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".dylib"
        }), ") are resolved at load time. Smaller binary, but requires libraries present at runtime."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-what-does-printf-return",
      children: ["Q3: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf()"
      }), " return?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int printf(const char *format, ...);\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "printf()"
      }), " returns the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "number of characters printed"
      }), " (including newlines, spaces, etc.) on success, or a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "negative value"
      }), " on error."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\nint main(void) {\n    int n = printf(\"Hello\\n\");   // Prints \"Hello\\n\" (6 characters)\n    printf(\"%d\\n\", n);           // Output: 6\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview tip:"
      }), " Many developers don't realize ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " has a return value. Mentioning it shows deep understanding."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q4-what-does-main-return-and-why",
      children: ["Q4: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), " return and why?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main(void)       // Returns int —” conventional\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), " returns an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "integer status code"
      }), " to the operating system:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXIT_SUCCESS"
        }), " —” program succeeded"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Non-zero or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EXIT_FAILURE"
        }), " —” program failed"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The return value is captured by the shell:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "./myprogram\necho $?    # On Linux/macOS —” prints the return value\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Why ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "?"]
      }), " Historical convention from Unix: every process has an exit status. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "0"
      }), " = success, non-zero = error code. This allows shell scripts to chain commands with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&&"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "||"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-what-is-the-difference-between-int-main-and-int-mainvoid",
      children: ["Q5: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main(void)"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int main()       // In C: accepts any number of arguments (unspecified)\nint main(void)   // In C: accepts exactly zero arguments\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practice:"
      }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int main(void)"
      }), " in C. In C++, both mean \"no parameters.\""]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-is-sizeof-a-function-or-an-operator",
      children: ["Q6: Is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " a function or an operator?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " is a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "compile-time unary operator"
      }), ", not a function. Parentheses are only needed when the operand is a type name:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "sizeof(int)       // ✔ Parentheses required for types\nsizeof x          // ✔ Parentheses optional for expressions\nsizeof(x + y)     // ✔ Parentheses optional but common\nsizeof int        // ❌ Syntax error: parentheses required for type names\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-what-is-undefined-behavior-ub-in-c",
      children: "Q7: What is undefined behavior (UB) in C?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Undefined behavior"
      }), " means the C standard imposes no requirements on what happens. The program may crash, produce wrong results, or appear to work correctly —” until it doesn't."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Common UB examples:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a = 5 / 0;          // UB: integer division by zero\nint arr[5]; arr[10] = 3; // UB: array index out of bounds\nint *p = NULL; *p = 5;  // UB: dereferencing NULL pointer\nint x = x;              // UB: using uninitialized variable\nint y = 5; y = y++;     // UB: multiple side effects on same variable between sequence points\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-sequence-points-in-c",
      children: "Q8: Explain sequence points in C."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sequence point"
      }), " is a point in the execution where all side effects of previous evaluations are complete. Between sequence points, you can modify a variable at most once."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int i = 0;\ni = i++;        // UB: i is modified twice between sequence points\nprintf(\"%d %d\", ++i, ++i);  // UB: parameters evaluated in unspecified order\ni = ++i + 1;    // UB in C (ok in C++11+)\n\n// Sequence points occur at:\n// 1. Semicolons (end of full expression)\n// 2. Short-circuit operators: && ||\n// 3. Ternary operator: ? :\n// 4. Comma operator: ,\n// 5. Function call (after arguments are evaluated, before function body)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q9-can-you-compile-a-c-program-without-main",
      children: ["Q9: Can you compile a C program without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "No"
      }), " for executables —” the linker will report ", (0,jsx_runtime.jsx)(_components.code, {
        children: "undefined reference to 'main'"
      }), ". ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes"
      }), " for libraries, kernel modules, and object files:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "gcc -c library.c -o library.o    # Compiles without main\ngcc -shared library.c -o lib.so   # Shared library —” no main needed\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q10-what-is-the-difference-between-include-file-and-include-file",
      children: ["Q10: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include \"file\""
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <file>"
      }), "?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Form"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Path"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Usage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <file>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System include directories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard library headers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "#include \"file\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current directory first, then system paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "User-defined headers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-applications-of-c-in-real-systems",
      children: "1.15 Applications of C in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operating-systems",
      children: "Operating Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Written In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C's Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~95% C, ~3% assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process scheduler, memory manager, device drivers, file systems"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Windows NT kernel"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C (primarily)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Executive, HAL, kernel, drivers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "macOS / iOS (XNU)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C + C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mach microkernel, BSD subsystem"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "FreeBSD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full kernel and userland"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified example: kernel memory allocation\n// Linux kernel source: mm/slab.c (simplified)\nstruct kmem_cache {\n    unsigned int size;         // Object size\n    unsigned int align;        // Alignment\n    unsigned long flags;       // Allocation flags\n    const char *name;          // Cache name for debugging\n    void (*ctor)(void *);      // Constructor\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "embedded-systems",
      children: "Embedded Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C dominates embedded programming due to its efficiency, low memory footprint, and direct hardware access:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Embedded example: blinking an LED on a microcontroller (AVR)\n#include <avr/io.h>\n#include <util/delay.h>\n\nint main(void) {\n    DDRB |= (1 << PB0);        // Set PB0 as output\n    while (1) {\n        PORTB |= (1 << PB0);   // LED on\n        _delay_ms(500);        // Wait 500ms\n        PORTB &= ~(1 << PB0);  // LED off\n        _delay_ms(500);        // Wait 500ms\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "databases",
      children: "Databases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C Usage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Component"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "SQLite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entirely in C (~150K lines)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "B-tree storage engine, virtual machine for bytecode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Storage engine, query executor, buffer manager"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Redis"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory data store, event loop, network layer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "compilers-and-interpreters",
      children: "Compilers and Interpreters"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Written In"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GCC"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C (originally) + C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C frontend, code generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CPython"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python interpreter, standard library"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Lua"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full interpreter and bytecode VM (~25K lines)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Node.js (V8)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript engine (core data structures)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "game-engines",
      children: "Game Engines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "// Simplified game loop in C\n#include <stdio.h>\n#include <stdbool.h>\n\nint main(void) {\n    bool running = true;\n    double delta_time = 0.016;     // ~60 FPS\n\n    printf(\"Game initialized\\n\");\n\n    while (running) {\n        // 1. Process input\n        printf(\"Processing input...\\n\");\n\n        // 2. Update game state\n        printf(\"Updating (dt=%.3f)...\\n\", delta_time);\n\n        // 3. Render frame\n        printf(\"Rendering...\\n\");\n\n        // 4. Check exit condition (simplified)\n        static int frames = 0;\n        if (++frames >= 3) running = false;\n    }\n\n    printf(\"Game shutdown\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Game initialized\nProcessing input...\nUpdating (dt=0.016)...\nRendering...\nProcessing input...\nUpdating (dt=0.016)...\nRendering...\nProcessing input...\nUpdating (dt=0.016)...\nRendering...\nGame shutdown\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C++"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Python"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled to machine code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled to machine code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiled to bytecode (JVM)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreted (or JIT-compiled, CPython)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory management"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (malloc/free)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (new/delete)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (GC)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic (GC)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Paradigm"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Procedural"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOP-centric"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-paradigm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pointers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No raw pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No raw pointers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type system"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static, weak"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static, strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static, strong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic, strong"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C (C17/C23)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C++ (C++20)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JLS (Java 22)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PEP (Python 3.x)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Highest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Task"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Command / Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile with warnings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -std=c17 -Wall -Wextra -o prog prog.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard compilation with diagnostics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strict C11 compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -std=c11 -Wall -Wextra -Werror -pedantic -o prog prog.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catch every non-standard construct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Preprocess only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -E prog.c -o prog.i"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "View macro expansions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile to assembly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -S prog.c -o prog.s"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read human-readable assembly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compile only (no link)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -c prog.c -o prog.o"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Produce object file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generate debug symbols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -g -o prog prog.c"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enable debugging with GDB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc --version"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify compiler installation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "List include paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`echo 'main(){}'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gcc -E -v -x c -`"
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
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application of C"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operating systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux kernel, Windows kernel components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux ~28M lines of C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microcontrollers, firmware, IoT devices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arduino, ESP32, ARM Cortex-M"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Databases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite, PostgreSQL (storage engine)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "SQLite ~150K lines of C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCC, Clang, LLVM core"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCC ~15M lines (C/C++)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game engines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unreal Engine, Godot (core runtime)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Id Tech engines (Doom, Quake)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Networking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network drivers, TCP/IP stacks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linux networking stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automotive"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ECU firmware, CAN bus controllers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "AUTOSAR standard —” C-based"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Aerospace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flight control systems, avionics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DO-178C certifiable code written in C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Who created the C language and for what purpose?\nA) Bjarne Stroustrup, for OOP\nB) Dennis Ritchie, for writing Unix\nC) Ken Thompson, for writing B\nD) Martin Richards, for writing BCPL"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Dennis Ritchie created C at Bell Labs (1972) to implement the Unix operating system."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What does the linker do in the compilation process?\nA) Expands #include directives\nB) Converts assembly to machine code\nC) Combines object files and resolves library references\nD) Optimizes the code for performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** The linker combines object files with libraries to produce the final executable."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is NOT a valid C comment style?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/* comment */"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "// comment"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "# comment"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "/* multi-line /* nested */ comment */"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `#` starts a preprocessor directive, not a comment. **D)** is invalid because comments do not nest."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gcc -c hello.c"
        }), " produce?\nA) Preprocessed source (.i)\nB) Assembly code (.s)\nC) Object code (.o)\nD) Executable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** The `-c` flag compiles and assembles but does not link, producing an object file."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which C standard introduced ", (0,jsx_runtime.jsx)(_components.code, {
          children: "//"
        }), " comments and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "long long"
        }), "?\nA) K&R C\nB) C89\nC) C99\nD) C11"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** C99 added single-line comments (`//`), `long long`, inline functions, and variable-length arrays."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%d\", printf(\"Hi\"))"
        }), "?\nA) Hi\nB) Hi2\nC) 2\nD) Compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Inner `printf(\"Hi\")` prints \"Hi\" and returns 2 (two characters). Outer `printf` takes this 2 and prints it with `%d`. Result: \"Hi2\"."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " a function or an operator?\nA) Function\nB) Operator\nC) Macro\nD) It depends on the context"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `sizeof` is a compile-time unary operator. Parentheses are only required for type names (e.g., `sizeof(int)`), not expressions (`sizeof x`)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which of the following is NOT a valid identifier in C?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_count"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "myVar"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1stPlace"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MAX_SIZE"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** Identifiers cannot start with a digit."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "9",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In the compilation pipeline, which stage converts assembly to machine code?\nA) Preprocessor\nB) Compiler\nC) Assembler\nD) Linker"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** The assembler converts assembly language mnemonics into binary machine code (object file)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "10",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the correct format specifier to read a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "scanf"
        }), "?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%f"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%lf"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%d"
        }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "%Lf"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** `%lf` is used for `double` in `scanf`. `%f` is for `float` in `scanf` (though both work for `printf` due to default promotion)."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when you compile ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void main() { }"
        }), " in C99 or later?\nA) It compiles without errors\nB) It produces a warning or error —” ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), " must return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), "\nC) It prints \"Hello\"\nD) It causes a segmentation fault"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** In C99+, `main` must return `int`. `void main()` is non-standard and produces a warning or error."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "12",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does the following program print? ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"Hello\\n\"); printf(\"World\");"
        }), "\nA) HelloWorld\nB) Hello\\nWorld\nC) Hello World\nD) Hello (newline) World"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsxs)(_components.summary, {
        children: ["Answer</summary>**D)** The `\\n` creates a newline after \"Hello\", so output is:\n    Hello\n    World</details>\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "13",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Which of the following causes undefined behavior?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 5; x = x + 1;"
            }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[5]; arr[0] = 1;"
            }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int x = 5 / 0;"
            }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"Hello\");"
            })]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** Integer division by zero is undefined behavior. The program may crash or produce unexpected results."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "14",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the minimum number of elements required for a valid C program?\nA) A function called ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " that returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int main(void)"
            }), "\nC) A variable declaration\nD) A comment"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**A)** The minimum valid C program is a function named `main` that returns `int`. `#include` and header files are not strictly required if you don't use library functions."
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          start: "15",
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["In which C standard was ", (0,jsx_runtime.jsx)(_components.code, {
              children: "_Bool"
            }), " introduced?\nA) C89\nB) C99\nC) C11\nD) C17"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>**B)** `_Bool` was introduced in C99. The `bool` macro is defined in `", (0,jsx_runtime.jsx)(_components.stdbool, {
              className: "h",
              children: "`. In C23, `bool` became a keyword."
            })]
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "summary",
          children: "Summary"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C was created by Dennis Ritchie at Bell Labs (1969—“1973)"
            }), " and remains foundational to modern systems programming"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C is a mid-level language"
            }), " —” combines high-level constructs with low-level memory access"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "GCC and Clang"
            }), " are the two primary C compilers; use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-std=c11 -Wall -Wextra"
            }), " for robust compilation"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The compilation pipeline"
            }), " consists of preprocessing (handles directives), compilation (C → assembly), assembly (→ machine code), and linking (resolves library references)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilation differs from interpretation"
            }), " —” C is fully compiled to native code for speed and efficiency, while interpreted languages trade speed for portability and dynamic features"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C programs follow a consistent structure"
            }), ": comments → preprocessor directives → global declarations → main function → other function definitions"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsxs)(_components.strong, {
              children: ["Every C program must contain exactly one ", (0,jsx_runtime.jsx)(_components.code, {
                children: "main"
              }), " function"]
            }), ", which returns an integer status code"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokens are the building blocks"
            }), " of C programs: keywords (32 reserved words), identifiers (user-defined names), constants (fixed values), string literals, and operators (45+)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "The C language has evolved through multiple standards"
            }), ": K&R → C89 → C99 → C11 → C17 → C23, each adding features while maintaining backward compatibility"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "printf and scanf"
            }), " are the primary I/O functions —” format specifiers must match the variable types or undefined behavior occurs"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Undefined behavior (UB)"
            }), " is a critical concept in C —” operations like division by zero, buffer overflow, and uninitialized variable access have no guaranteed outcome"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C powers most of the digital world"
            }), " —” from operating systems (Linux, Windows) to databases (SQLite, PostgreSQL) to embedded systems (Arduino, automotive ECUs)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
          id: "exercises",
          children: "Exercises"
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "review-questions",
          children: "Review Questions"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the purpose of the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#include <stdio.h>"
            }), " directive at the top of most C programs?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "List the four stages of compilation and briefly describe what happens at each stage."
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Why does the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "main"
            }), " function return an integer? What does the return value signify?"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Explain the difference between a comment and a preprocessor directive."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What is the minimum set of elements required for a valid C program?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "List five C keywords and explain what each one does."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What is a token? Give three examples of different token types."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What is undefined behavior and why is it dangerous?"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "const"
            }), " —” which one should you use and when?"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%f"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "%lf"
            }), " in ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf"
            }), "?"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "application-problems",
          children: "Application Problems"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Hello, Yourself:"
            }), " Write a program that prints your name, your birth year, and your favorite color on three separate lines using a single ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " call."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Macro Greeting:"
            }), " Modify the hello world program to use a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define"
            }), " for the greeting message: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define GREETING \"Hello, C!\""
            }), ". Print the constant."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "ASCII Art:"
            }), " Write a program that displays the ASCII art of a simple shape (e.g., a rectangle made of asterisks). Compile it with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-Wall -Wextra"
            }), " and fix any warnings."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Printf Return Value:"
            }), " Write a program that stores the return value of ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " and prints it. Explain what the number represents."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Input and Output:"
            }), " Write a program that asks for the user's name and age using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf"
            }), ", then prints a personalized greeting. Handle the trailing newline issue."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilation Stage Inspector:"
            }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -E"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -S"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gcc -c"
            }), " to generate ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".i"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".s"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".o"
            }), " files for a simple program. Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "file"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ls -la"
            }), " to compare the sizes."]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
          id: "challenge-problems",
          children: "Challenge Problems"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Printf Chain:"
            }), " Write a program that uses nested ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), " calls to print a number. Example: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%d\", printf(\"Test\"))"
            }), ". Predict the output before running."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Mini Preprocessor:"
            }), " Write a C program (without using the standard preprocessor) that reads a C source file, strips all ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/* */"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "//"
            }), " comments, and outputs the result. This simulates what the preprocessor's comment removal phase does. (Hint: Handle both comment styles, including strings that contain comment-like text.)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard Detector:"
            }), " Write a program that detects at compile time which C standard is being used (C89, C99, C11, C17, or C23) using the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__STDC_VERSION__"
            }), " macro, and prints the detected standard."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Token Counter:"
            }), " Write a program that reads a C source file and counts how many tokens it contains. At minimum, count identifiers, keywords, constants, and operators. (You don't need a full parser —” simple heuristics are sufficient.)"]
          }), "\n"]
        }), "\n"]
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