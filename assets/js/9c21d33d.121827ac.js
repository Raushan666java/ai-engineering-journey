"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3410],{

/***/ 3314
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_17_standard_library_md_9c2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-17-standard-library-md-9c2.json
const site_docs_courses_c_programming_17_standard_library_md_9c2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/17-standard-library","title":"Chapter 17: The C Standard Library","description":"Previous Advanced C","source":"@site/docs/courses/c-programming/17-standard-library.md","sourceDirName":"courses/c-programming","slug":"/c-programming/17-standard-library","permalink":"/ai-engineering-journey/c-programming/17-standard-library","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":17,"frontMatter":{"id":"17-standard-library","slug":"/c-programming/17-standard-library","title":"Chapter 17: The C Standard Library","sidebar_label":"Chapter 17: The C Standard Library","sidebar_position":17},"sidebar":"course-c-programming","previous":{"title":"Chapter 16: Stacks and Queues","permalink":"/ai-engineering-journey/c-programming/16-stacks-queues"},"next":{"title":"Chapter 18: Advanced C","permalink":"/ai-engineering-journey/c-programming/18-advanced-c"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/17-standard-library.md


const frontMatter = {
	id: '17-standard-library',
	slug: '/c-programming/17-standard-library',
	title: 'Chapter 17: The C Standard Library',
	sidebar_label: 'Chapter 17: The C Standard Library',
	sidebar_position: 17
};
const contentTitle = 'Chapter 17: The C Standard Library';

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
  "value": "17.1 <code>&lt;stdio.h&gt;</code> — Input and Output",
  "id": "171-stdioh--input-and-output",
  "level": 2
}, {
  "value": "Real-World Analogy: Office Mailroom",
  "id": "real-world-analogy-office-mailroom",
  "level": 3
}, {
  "value": "Numbered Steps for File I/O",
  "id": "numbered-steps-for-file-io",
  "level": 3
}, {
  "value": "Key Functions Reference",
  "id": "key-functions-reference",
  "level": 3
}, {
  "value": "Code: snprintf, sscanf, and File Copy",
  "id": "code-snprintf-sscanf-and-file-copy",
  "level": 3
}, {
  "value": "Dry Run: fread/fwrite Copy Loop",
  "id": "dry-run-freadfwrite-copy-loop",
  "level": 3
}, {
  "value": "Pseudocode for snprintf Safety",
  "id": "pseudocode-for-snprintf-safety",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Advantages and Disadvantages",
  "id": "advantages-and-disadvantages",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 3
}, {
  "value": "errno with stdio",
  "id": "errno-with-stdio",
  "level": 3
}, {
  "value": "17.2 <code>&lt;stdlib.h&gt;</code> — General Utilities",
  "id": "172-stdlibh--general-utilities",
  "level": 2
}, {
  "value": "Real-World Analogy: Hardware Store",
  "id": "real-world-analogy-hardware-store",
  "level": 3
}, {
  "value": "Numbered Steps for Safe String-to-Integer Conversion",
  "id": "numbered-steps-for-safe-string-to-integer-conversion",
  "level": 3
}, {
  "value": "17.2.1 Memory Allocation",
  "id": "1721-memory-allocation",
  "level": 3
}, {
  "value": "17.2.2 Numeric Conversion",
  "id": "1722-numeric-conversion",
  "level": 3
}, {
  "value": "Dry Run: strtol Parsing &quot;42abc&quot;",
  "id": "dry-run-strtol-parsing-42abc",
  "level": 3
}, {
  "value": "Comparison: atoi vs strtol vs sscanf",
  "id": "comparison-atoi-vs-strtol-vs-sscanf",
  "level": 3
}, {
  "value": "Complexity Analysis — Numeric Conversion",
  "id": "complexity-analysis--numeric-conversion",
  "level": 3
}, {
  "value": "17.2.3 Pseudo-Random Numbers",
  "id": "1723-pseudo-random-numbers",
  "level": 3
}, {
  "value": "17.2.4 Sorting and Searching",
  "id": "1724-sorting-and-searching",
  "level": 3
}, {
  "value": "Dry Run: qsort on [42, 7, 15, 8, 23, 3, 11]",
  "id": "dry-run-qsort-on-42-7-15-8-23-3-11",
  "level": 3
}, {
  "value": "Complexity Analysis — qsort and bsearch",
  "id": "complexity-analysis--qsort-and-bsearch",
  "level": 3
}, {
  "value": "17.2.5 Process Control",
  "id": "1725-process-control",
  "level": 3
}, {
  "value": "17.2.6 Integer Arithmetic",
  "id": "1726-integer-arithmetic",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of stdlib.h",
  "id": "advantages-and-disadvantages-of-stdlibh",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 3
}, {
  "value": "17.3 <code>&lt;string.h&gt;</code> — String and Memory Functions",
  "id": "173-stringh--string-and-memory-functions",
  "level": 2
}, {
  "value": "Real-World Analogy: Library Card Catalog",
  "id": "real-world-analogy-library-card-catalog",
  "level": 3
}, {
  "value": "Numbered Steps for Safe String Copy",
  "id": "numbered-steps-for-safe-string-copy",
  "level": 3
}, {
  "value": "Key Functions Reference",
  "id": "key-functions-reference-1",
  "level": 3
}, {
  "value": "Code: memcpy vs memmove and memset",
  "id": "code-memcpy-vs-memmove-and-memset",
  "level": 3
}, {
  "value": "Dry Run: memmove Overlap",
  "id": "dry-run-memmove-overlap",
  "level": 3
}, {
  "value": "Pseudocode for memmove Overlap Handling",
  "id": "pseudocode-for-memmove-overlap-handling",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "string.h vs stdlib.h String Functions",
  "id": "stringh-vs-stdlibh-string-functions",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of string.h",
  "id": "advantages-and-disadvantages-of-stringh",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "17.4 <code>&lt;math.h&gt;</code> — Mathematics",
  "id": "174-mathh--mathematics",
  "level": 2
}, {
  "value": "Real-World Analogy: Pocket Calculator",
  "id": "real-world-analogy-pocket-calculator",
  "level": 3
}, {
  "value": "Numbered Steps for Safe Math Computation",
  "id": "numbered-steps-for-safe-math-computation",
  "level": 3
}, {
  "value": "Code: Comprehensive Math Example",
  "id": "code-comprehensive-math-example",
  "level": 3
}, {
  "value": "Pseudocode: hypot Implementation",
  "id": "pseudocode-hypot-implementation",
  "level": 3
}, {
  "value": "Dry Run: hypot(3.0, 4.0)",
  "id": "dry-run-hypot30-40",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of math.h",
  "id": "advantages-and-disadvantages-of-mathh",
  "level": 3
}, {
  "value": "Header Groups: Standard Math Functions",
  "id": "header-groups-standard-math-functions",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-3",
  "level": 3
}, {
  "value": "17.5 <code>&lt;ctype.h&gt;</code> — Character Handling",
  "id": "175-ctypeh--character-handling",
  "level": 2
}, {
  "value": "Real-World Analogy: Airport Security Checkpoint",
  "id": "real-world-analogy-airport-security-checkpoint",
  "level": 3
}, {
  "value": "Numbered Steps for Character Classification",
  "id": "numbered-steps-for-character-classification",
  "level": 3
}, {
  "value": "Dry Run: Character Classification of &#39;9&#39;",
  "id": "dry-run-character-classification-of-9",
  "level": 3
}, {
  "value": "Pseudocode: isdigit and tolower",
  "id": "pseudocode-isdigit-and-tolower",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of ctype.h",
  "id": "advantages-and-disadvantages-of-ctypeh",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-4",
  "level": 3
}, {
  "value": "17.6 <code>&lt;time.h&gt;</code> — Date and Time",
  "id": "176-timeh--date-and-time",
  "level": 2
}, {
  "value": "Real-World Analogy: Wall Clock and Stopwatch",
  "id": "real-world-analogy-wall-clock-and-stopwatch",
  "level": 3
}, {
  "value": "Numbered Steps for Timing Code",
  "id": "numbered-steps-for-timing-code",
  "level": 3
}, {
  "value": "Time Structures",
  "id": "time-structures",
  "level": 3
}, {
  "value": "Dry Run: strftime with &quot;%Y-%m-%d %H:%M:%S&quot;",
  "id": "dry-run-strftime-with-y-m-d-hms",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of time.h",
  "id": "advantages-and-disadvantages-of-timeh",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-5",
  "level": 3
}, {
  "value": "17.7 <code>&lt;errno.h&gt;</code> and <code>&lt;assert.h&gt;</code> — Diagnostics",
  "id": "177-errnoh-and-asserth--diagnostics",
  "level": 2
}, {
  "value": "17.7.1 <code>&lt;errno.h&gt;</code> — Error Numbers",
  "id": "1771-errnoh--error-numbers",
  "level": 3
}, {
  "value": "Real-World Analogy: Train Station Announcement Board",
  "id": "real-world-analogy-train-station-announcement-board",
  "level": 3
}, {
  "value": "Numbered Steps for errno Usage",
  "id": "numbered-steps-for-errno-usage",
  "level": 3
}, {
  "value": "Common errno Values",
  "id": "common-errno-values",
  "level": 3
}, {
  "value": "17.7.2 <code>&lt;assert.h&gt;</code> — Runtime Assertions",
  "id": "1772-asserth--runtime-assertions",
  "level": 3
}, {
  "value": "Real-World Analogy: Building Inspector",
  "id": "real-world-analogy-building-inspector",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-5",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of assert.h",
  "id": "advantages-and-disadvantages-of-asserth",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-6",
  "level": 3
}, {
  "value": "17.8 <code>&lt;setjmp.h&gt;</code> — Non-Local Jumps",
  "id": "178-setjmph--non-local-jumps",
  "level": 2
}, {
  "value": "Real-World Analogy: Emergency Eject Button",
  "id": "real-world-analogy-emergency-eject-button",
  "level": 3
}, {
  "value": "How It Works",
  "id": "how-it-works",
  "level": 3
}, {
  "value": "Dry Run: setjmp/longjmp",
  "id": "dry-run-setjmplongjmp",
  "level": 3
}, {
  "value": "Numbered Steps for Safe longjmp Use",
  "id": "numbered-steps-for-safe-longjmp-use",
  "level": 3
}, {
  "value": "Limitations and Dangers",
  "id": "limitations-and-dangers",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-6",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of setjmp.h",
  "id": "advantages-and-disadvantages-of-setjmph",
  "level": 3
}, {
  "value": "Comparison: longjmp vs Alternatives",
  "id": "comparison-longjmp-vs-alternatives",
  "level": 3
}, {
  "value": "17.9 <code>&lt;signal.h&gt;</code> — Signal Handling",
  "id": "179-signalh--signal-handling",
  "level": 2
}, {
  "value": "Real-World Analogy: Fire Alarm",
  "id": "real-world-analogy-fire-alarm",
  "level": 3
}, {
  "value": "Numbered Steps for Signal Handling",
  "id": "numbered-steps-for-signal-handling",
  "level": 3
}, {
  "value": "Async-Signal-Safe Functions",
  "id": "async-signal-safe-functions",
  "level": 3
}, {
  "value": "Signal Table",
  "id": "signal-table",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-7",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of signal.h",
  "id": "advantages-and-disadvantages-of-signalh",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-7",
  "level": 3
}, {
  "value": "17.10 <code>&lt;stdarg.h&gt;</code> — Variable Arguments",
  "id": "1710-stdargh--variable-arguments",
  "level": 2
}, {
  "value": "Real-World Analogy: Pizza Order",
  "id": "real-world-analogy-pizza-order",
  "level": 3
}, {
  "value": "Numbered Steps for Variadic Functions",
  "id": "numbered-steps-for-variadic-functions",
  "level": 3
}, {
  "value": "How printf Uses stdarg",
  "id": "how-printf-uses-stdarg",
  "level": 3
}, {
  "value": "Safety Rules for Variadic Functions",
  "id": "safety-rules-for-variadic-functions",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-8",
  "level": 3
}, {
  "value": "Advantages and Disadvantages of stdarg.h",
  "id": "advantages-and-disadvantages-of-stdargh",
  "level": 3
}, {
  "value": "17.11 Other Important Headers",
  "id": "1711-other-important-headers",
  "level": 2
}, {
  "value": "17.11.1 <code>&lt;stdint.h&gt;</code> — Fixed-Width Integer Types",
  "id": "17111-stdinth--fixed-width-integer-types",
  "level": 3
}, {
  "value": "17.11.2 <code>&lt;limits.h&gt;</code> and <code>&lt;float.h&gt;</code> — Platform Limits",
  "id": "17112-limitsh-and-floath--platform-limits",
  "level": 3
}, {
  "value": "17.11.3 <code>&lt;inttypes.h&gt;</code> — Format Specifiers for Fixed Types",
  "id": "17113-inttypesh--format-specifiers-for-fixed-types",
  "level": 3
}, {
  "value": "17.11.4 <code>&lt;stddef.h&gt;</code> — Common Definitions",
  "id": "17114-stddefh--common-definitions",
  "level": 3
}, {
  "value": "Header Groups Comparison Table",
  "id": "header-groups-comparison-table",
  "level": 3
}, {
  "value": "17.12 Interview Corner",
  "id": "1712-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between atoi and strtol? When would you use each?",
  "id": "q1-what-is-the-difference-between-atoi-and-strtol-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q2: How does qsort&#39;s comparison function work? Provide a correct implementation for descending integers and for sorting strings.",
  "id": "q2-how-does-qsorts-comparison-function-work-provide-a-correct-implementation-for-descending-integers-and-for-sorting-strings",
  "level": 3
}, {
  "value": "Q3: What does &quot;async-signal-safe&quot; mean? Which standard library functions are safe to call from a signal handler?",
  "id": "q3-what-does-async-signal-safe-mean-which-standard-library-functions-are-safe-to-call-from-a-signal-handler",
  "level": 3
}, {
  "value": "Q4: What is the difference between memcpy and memmove?",
  "id": "q4-what-is-the-difference-between-memcpy-and-memmove",
  "level": 3
}, {
  "value": "Q5: What is the 2038 problem, and how does it relate to time.h?",
  "id": "q5-what-is-the-2038-problem-and-how-does-it-relate-to-timeh",
  "level": 3
}, {
  "value": "Q6: What does <code>assert</code> compile to when NDEBUG is defined? What happens if you put a side effect inside assert?",
  "id": "q6-what-does-assert-compile-to-when-ndebug-is-defined-what-happens-if-you-put-a-side-effect-inside-assert",
  "level": 3
}, {
  "value": "Q7: How does printf know how many arguments were passed? What happens if the format string and arguments don&#39;t match?",
  "id": "q7-how-does-printf-know-how-many-arguments-were-passed-what-happens-if-the-format-string-and-arguments-dont-match",
  "level": 3
}, {
  "value": "Q8: Explain the difference between <code>fmod</code> and <code>remainder</code>.",
  "id": "q8-explain-the-difference-between-fmod-and-remainder",
  "level": 3
}, {
  "value": "17.13 Applications in Real Systems",
  "id": "1713-applications-in-real-systems",
  "level": 2
}, {
  "value": "Application 1: Shell/Terminal Emulator",
  "id": "application-1-shellterminal-emulator",
  "level": 3
}, {
  "value": "Application 2: Scientific Data Processing",
  "id": "application-2-scientific-data-processing",
  "level": 3
}, {
  "value": "Application 3: Embedded Sensor Logger",
  "id": "application-3-embedded-sensor-logger",
  "level": 3
}, {
  "value": "Application 4: Memory Pool Allocator",
  "id": "application-4-memory-pool-allocator",
  "level": 3
}, {
  "value": "Application 5: HTTP Server",
  "id": "application-5-http-server",
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
    em: "em",
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
        id: "chapter-17-the-c-standard-library",
        children: "Chapter 17: The C Standard Library"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/16-stacks-queues",
          children: "Stacks and Queues"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/18-advanced-c",
          children: "Advanced C"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify the 15+ major headers in the C standard library"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdlib.h"
        }), " for memory allocation, numeric conversion, sorting, and process control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdio.h"
        }), " for console and file input/output operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "string.h"
        }), " for string manipulation and memory copying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math.h"
        }), " for floating-point trigonometric, exponential, and rounding functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ctype.h"
        }), " for character classification and case conversion"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "time.h"
        }), " for date/time retrieval and formatting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp.h"
        }), " for non-local jumps — use cases and dangers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recognize ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdarg.h"
        }), " for variadic functions and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signal.h"
        }), " for signal handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply errno-based error detection with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "math.h"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdlib.h"
        }), " functions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compare ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atoi"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtol"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sscanf"
        }), " for production-safe parsing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdio.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input/output: printf, scanf, fopen, fclose, fread, fwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles all console, file, and string I/O — most-used header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory allocation, random numbers, sorting, atoi"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contains malloc, free, qsort, rand, and strtol for safe parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<string.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String manipulation: strlen, strcpy, strcmp, memcpy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All functions operate on null-terminated arrays; watch for overlap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<math.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point math: sin, cos, sqrt, pow, fabs"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Link with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-lm"
            }), " on Unix; check errno for domain/range errors"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<ctype.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character classification: isalpha, isdigit, tolower, toupper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handles locale-specific character tests via current locale"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<time.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Time functions: time, clock, difftime, strftime"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "time()"
            }), " returns seconds since epoch; 32-bit time_t overflows in 2038"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<assert.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime diagnostics with assertion macros"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Disable with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "NDEBUG"
            }), " for release builds"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<setjmp.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-local jumps across function call boundaries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use only for deep error recovery; resource leaks are your risk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdarg.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length argument lists (printf-family)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Mandates at least one named parameter before ", (0,jsx_runtime.jsx)(_components.code, {
              children: "..."
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"17.1 <stdio.h>\"] --> B[\"17.2 <stdlib.h>\"]\n    B --> C[\"17.3 <string.h>\"]\n    C --> D[\"17.4 <math.h>\"]\n    D --> E[\"17.5 <ctype.h>\"]\n    E --> F[\"17.6 <time.h>\"]\n    F --> G[\"17.7 <errno.h> & <assert.h>\"]\n    G --> H[\"17.8 <setjmp.h>\"]\n    H --> I[\"17.9 <signal.h>\"]\n    I --> J[\"17.10 <stdarg.h>\"]\n    J --> K[\"17.11 Other Headers\"]\n    K --> L[\"17.12 Interview Corner\"]\n    L --> M[\"17.13 Applications in Real Systems\"]\n    M --> N[\"Summary & Exercises\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "171-stdioh--input-and-output",
      children: ["17.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdio.h>"
      }), " — Input and Output"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-office-mailroom",
      children: "Real-World Analogy: Office Mailroom"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "office mailroom"
      }), ". You have:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "desk"
        }), " (stdin) where you read incoming memos."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "printer"
        }), " (stdout) where you send outgoing letters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["An ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "error bin"
        }), " (stderr) for urgent alerts."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File cabinets"
        }), " (FILE*) that you must ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "open"
        }), " before reading/writing and ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "close"
        }), " when done."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Each cabinet has a ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "drawer position"
        }), " (file position indicator) that you can move with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fseek"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-file-io",
      children: "Numbered Steps for File I/O"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Declare a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "FILE*"
      }), " pointer.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fopen(path, mode)"
      }), " to open the file — check for NULL return.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Read or write data using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fprintf"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fscanf"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fread"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fwrite"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fgets"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " When done, call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fclose(fp)"
      }), " to flush buffers and release resources.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Check the return value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fclose"
      }), " — it can fail on some systems (e.g., NFS)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-functions-reference",
      children: "Key Functions Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe Variant"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sprintf"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted output to stdout, file, string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "snprintf"
            }), " (bounded)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "scanf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sscanf"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted input from stdin, file, string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use width limits: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "scanf(\"%19s\", buf)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fclose"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File open/close"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fopen_s"
            }), " (C11 Annex K, optional)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check return count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fputs"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets(buf, size, stream)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fgetc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fputc"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fseek"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ftell"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rewind"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File positioning"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fseeko"
            }), " on POSIX for large files"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "perror"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Print strerror to stderr"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "remove"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "rename"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check return value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tmpfile"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tmpnam"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary files"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "mkstemp"
            }), " preferred (POSIX)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setvbuf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set buffering mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call before any I/O on the stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "feof"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ferror"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream status checking"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ferror"
            }), " — never ", (0,jsx_runtime.jsx)(_components.code, {
              children: "feof"
            }), " alone"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-snprintf-sscanf-and-file-copy",
      children: "Code: snprintf, sscanf, and File Copy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n\nint main(void)\n{\n    /* snprintf — safe string formatting */\n    char buf[50];\n    int written = snprintf(buf, sizeof(buf), \"The answer is %d\", 42);\n    printf(\"Buffer: '%s' (%d chars written, would have been %d)\\n\",\n           buf, written, (written >= (int)sizeof(buf)) ? (int)sizeof(buf) - 1 : written);\n\n    /* sscanf — parsing from string */\n    int id;\n    char name[50];\n    float gpa;\n    const char *line = \"101 Alice 3.85\";\n    int count = sscanf(line, \"%d %49s %f\", &id, name, &gpa);\n    printf(\"Parsed %d items: %d %s %.2f\\n\", count, id, name, gpa);\n\n    /* File copy using fread/fwrite */\n    FILE *src = fopen(\"input.txt\", \"rb\");\n    if (!src) { perror(\"fopen input\"); return 1; }\n    FILE *dst = fopen(\"output.bak\", \"wb\");\n    if (!dst) { perror(\"fopen output\"); fclose(src); return 1; }\n\n    unsigned char block[4096];\n    size_t n;\n    while ((n = fread(block, 1, sizeof(block), src)) > 0) {\n        if (fwrite(block, 1, n, dst) != n) {\n            fprintf(stderr, \"Write error\\n\");\n            break;\n        }\n    }\n    fclose(src);\n    fclose(dst);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (input.txt exists):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Buffer: 'The answer is 42' (16 chars written, would have been 16)\nParsed 3 items: 101 Alice 3.85\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-freadfwrite-copy-loop",
      children: "Dry Run: fread/fwrite Copy Loop"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume ", (0,jsx_runtime.jsx)(_components.code, {
        children: "input.txt"
      }), " contains exactly 5000 bytes."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "n = fread(...)"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "EOF?"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            }), " writes"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cumulative"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4096"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "904"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "904"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (EOF after)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "904"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5000"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " All 5000 bytes copied. The third ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fread"
      }), " returns 0, loop exits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-snprintf-safety",
      children: "Pseudocode for snprintf Safety"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION safe_format(buf, bufsize, fmt, ...):\n    n <- vsnprintf(buf, bufsize, fmt, args)\n    IF n >= bufsize:\n        // Output was truncated — buf is null-terminated at bufsize-1\n        RETURN n  // caller can detect truncation\n    END IF\n    RETURN n\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fprintf"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f = format complexity plus arguments; buffered writes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fread"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "fwrite"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = bytes; block transfer, minimal overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fgets"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = characters read until newline or buffer full"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fseek"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct repositioning of file offset pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = characters scanned; format parsing overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "snprintf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f = format + arguments; bounded output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setvbuf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(b)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "b = buffer size; allocates internal buffer"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages",
      children: "Advantages and Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Buffering"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic buffering improves throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setvbuf must be called before any I/O"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Part of ISO C standard — available everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No raw OS features (async I/O, memory-mapped files)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "snprintf, fgets with size limits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sprintf and gets are dangerous — avoid entirely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block I/O via fread/fwrite is near OS speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line I/O is slower per-character than raw read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "perror and errno give diagnostic info"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return values must be checked — easy to ignore"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fopen(NULL, \"r\")"
        }), ": Undefined behavior — always check pointer."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fclose after failed fopen"
        }), ": Undefined behavior — double-close also undefined."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ftell after fwrite on text mode"
        }), ": Return value may not be byte offset (implementation-defined)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "snprintf(buf, 0, ...)"
        }), ": Returns number of characters that ", (0,jsx_runtime.jsx)(_components.em, {
          children: "would have"
        }), " been written (C99). Buf is untouched."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "feof()"
        }), ": Only set ", (0,jsx_runtime.jsx)(_components.em, {
          children: "after"
        }), " a read attempt fails. Never use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "feof"
        }), " before reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "errno-with-stdio",
      children: "errno with stdio"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <errno.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"/nonexistent/file.txt\", \"r\");\n    if (!fp) {\n        perror(\"fopen\");                /* prints \"fopen: No such file or directory\" */\n        fprintf(stderr, \"errno = %d\\n\", errno);  /* errno = 2 (ENOENT) */\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "172-stdlibh--general-utilities",
      children: ["17.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdlib.h>"
      }), " — General Utilities"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-hardware-store",
      children: "Real-World Analogy: Hardware Store"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<stdlib.h>"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "hardware store"
      }), " with different departments:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Memory aisle"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "calloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "realloc"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "free"
        }), " — like renting storage units."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sorting bench"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "bsearch"
        }), " — like organizing tools by size."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conversion counter"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atoi"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtol"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atof"
        }), " — like converting imperial to metric."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Random bin"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rand"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "srand"
        }), " — like pulling numbered balls from a lottery machine."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Process desk"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atexit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getenv"
        }), " — like store management."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-safe-string-to-integer-conversion",
      children: "Numbered Steps for Safe String-to-Integer Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdlib.h>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<errno.h>"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno = 0"
      }), " before the call.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strtol(str, &end, base)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "end == str"
      }), " — no digits parsed (error).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*end != '\\0'"
      }), " — trailing characters (partial parse, may be acceptable).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno == ERANGE"
      }), " — overflow/underflow.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 7:"
      }), " Cast result cautiously, check against ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INT_MIN"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "INT_MAX"
      }), " if going to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1721-memory-allocation",
      children: "17.2.1 Memory Allocation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void *malloc(size_t size);\nvoid *calloc(size_t count, size_t size);\nvoid *realloc(void *ptr, size_t new_size);\nvoid free(void *ptr);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Detailed in Chapter 11.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1722-numeric-conversion",
      children: "17.2.2 Numeric Conversion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <errno.h>\n#include <limits.h>\n\nint main(void)\n{\n    const char *int_str  = \"1234\";\n    const char *dbl_str  = \"3.14159\";\n    const char *bad_str  = \"42abc\";\n    const char *overflow = \"999999999999999999999\";\n\n    /* atoi — simple but no error detection */\n    int naive = atoi(int_str);\n    printf(\"atoi: %d\\n\", naive);\n\n    /* strtol — full error detection */\n    errno = 0;\n    char *end;\n    long val = strtol(bad_str, &end, 10);\n    if (end == bad_str) {\n        printf(\"No digits found\\n\");\n    } else if (errno == ERANGE) {\n        printf(\"Overflow/underflow\\n\");\n    } else if (*end != '\\0') {\n        printf(\"Partial parse: %ld, trailing: '%s'\\n\", val, end);\n    } else {\n        printf(\"Full parse: %ld\\n\", val);\n    }\n\n    /* Overflow detection */\n    errno = 0;\n    long big = strtol(overflow, &end, 10);\n    if (errno == ERANGE)\n        printf(\"Overflow detected! errno=%d\\n\", errno);\n\n    /* strtod for doubles */\n    errno = 0;\n    double d = strtod(dbl_str, &end);\n    if (errno == ERANGE)\n        printf(\"Double overflow/underflow\\n\");\n    printf(\"strtod: %.5f\\n\", d);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "atoi: 1234\nPartial parse: 42, trailing: 'abc'\nOverflow detected! errno=34\nstrtod: 3.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-strtol-parsing-42abc",
      children: "Dry Run: strtol Parsing \"42abc\""
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "end pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "*end"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "val"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Condition"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&str[0]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'4'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Leading whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skip"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "&str[2]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'a'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isdigit? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop, return 42"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "end != str? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial parse detected"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "val = 42"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*end = 'a'"
      }), ", trailing content ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abc\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-atoi-vs-strtol-vs-sscanf",
      children: "Comparison: atoi vs strtol vs sscanf"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "atoi"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtol"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sscanf"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (errno, end pointer)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via return value (matched count)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Base selection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decimal only (10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Any base 2–36, auto-detect (0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via format specifier (%i = auto)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Overflow behavior"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns LONG_MIN/LONG_MAX, sets ERANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trailing chars"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignored silently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Report via end pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignored silently"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (format parsing overhead)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type returned"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long / long long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Via pointer argument"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Locale support"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (%'d for thousands separator)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrant"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Standard"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C89"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recommendation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never use in production"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always prefer for integers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Acceptable for complex multi-value parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--numeric-conversion",
      children: "Complexity Analysis — Numeric Conversion"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "atoi"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan n digits, no error checking overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtol"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same scan, plus overflow checks on each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parses mantissa, exponent, sign — more stages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sscanf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n+f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = input scan, f = format string parsing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1723-pseudo-random-numbers",
      children: "17.2.3 Pseudo-Random Numbers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <time.h>\n\nint main(void)\n{\n    srand((unsigned)time(NULL));\n\n    printf(\"Five dice rolls:\\n\");\n    for (int i = 0; i < 5; i++) {\n        int dice = (rand() % 6) + 1;\n        printf(\"  Roll %d: %d\\n\", i + 1, dice);\n    }\n\n    /* rand() returns 0 to RAND_MAX (at least 32767) */\n    printf(\"RAND_MAX = %d\\n\", RAND_MAX);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (varies):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Five dice rolls:\n  Roll 1: 4\n  Roll 2: 1\n  Roll 3: 6\n  Roll 4: 3\n  Roll 5: 5\nRAND_MAX = 32767\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Limitation:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rand() % N"
      }), " is biased when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RAND_MAX + 1"
      }), " is not divisible by ", (0,jsx_runtime.jsx)(_components.code, {
        children: "N"
      }), ". For a fair dice roll (1–6), the bias is small but measurable. Use rejection sampling for fairness:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int fair_rand(int n) {\n    int max = RAND_MAX - (RAND_MAX % n) - 1;\n    int r;\n    do { r = rand(); } while (r > max);\n    return r % n + 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1724-sorting-and-searching",
      children: "17.2.4 Sorting and Searching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nint compare_int(const void *a, const void *b)\n{\n    int ia = *(const int*)a;\n    int ib = *(const int*)b;\n    return (ia > ib) - (ia < ib);   /* -1, 0, or 1 */\n}\n\nint main(void)\n{\n    int arr[] = {42, 7, 15, 8, 23, 3, 11};\n    int n = sizeof(arr) / sizeof(arr[0]);\n\n    qsort(arr, n, sizeof(int), compare_int);\n\n    printf(\"Sorted: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    /* bsearch — requires sorted array */\n    int key = 15;\n    int *found = bsearch(&key, arr, n, sizeof(int), compare_int);\n    if (found)\n        printf(\"Found %d at index %td\\n\", key, found - arr);\n\n    key = 99;\n    found = bsearch(&key, arr, n, sizeof(int), compare_int);\n    if (!found)\n        printf(\"%d not found\\n\", key);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sorted: 3 7 8 11 15 23 42\nFound 15 at index 4\n99 not found\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-qsort-on-42-7-15-8-23-3-11",
      children: "Dry Run: qsort on [42, 7, 15, 8, 23, 3, 11]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compare_int"
      }), " (ascending). The exact steps depend on the implementation (usually QuickSort or Introsort), but the comparison function determines the order:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pass"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Swap?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[42, 7, 15, 8, 23, 3, 11]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After partition (pivot ~ middle)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[7, 3, 15, 8, 11, 42, 23]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pivot=15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After recursive calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 7, 8, 11, 15, 23, 42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Final"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 7, 8, 11, 15, 23, 42]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--qsort-and-bsearch",
      children: "Complexity Analysis — qsort and bsearch"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (avg)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time (worst)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n^2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "QuickSort average; worst-case on already-sorted with bad pivot selection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bsearch"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search halves the range each iteration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Called O(n log n) times by qsort"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1725-process-control",
      children: "17.2.5 Process Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid cleanup(void)\n{\n    printf(\"Cleanup function called\\n\");\n}\n\nint main(void)\n{\n    atexit(cleanup);\n\n    char *path = getenv(\"PATH\");\n    if (path) printf(\"PATH: %s\\n\", path);\n\n    int ret = system(\"echo Hello from shell\");\n    printf(\"Shell returned: %d\\n\", ret);\n\n    printf(\"Exiting...\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PATH: C:\\Windows\\system32;...\nHello from shell\nShell returned: 0\nExiting...\nCleanup function called\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atexit"
      }), " registers functions in LIFO order. Maximum registration count is implementation-defined (usually 32). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "_Exit"
      }), " bypasses atexit handlers — use only in signal handlers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1726-integer-arithmetic",
      children: "17.2.6 Integer Arithmetic"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Returns"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "abs(int)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Undefined behavior for ", (0,jsx_runtime.jsx)(_components.code, {
              children: "abs(INT_MIN)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "labs(long)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same overflow risk at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "LONG_MIN"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "div(int, int)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "div_t"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Struct with ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".quot"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".rem"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ldiv(long, long)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ldiv_t"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same for long"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <limits.h>\n\nint main(void)\n{\n    div_t result = div(42, 5);\n    printf(\"42 / 5 = %d remainder %d\\n\", result.quot, result.rem);\n\n    /* abs(INT_MIN) is undefined — will overflow on two's complement */\n    // int danger = abs(INT_MIN);  // UB!\n    printf(\"INT_MIN = %d, -INT_MIN = %d (overflow!)\\n\",\n           INT_MIN, -INT_MIN);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "42 / 5 = 8 remainder 2\nINT_MIN = -2147483648, -INT_MIN = -2147483648 (overflow!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-stdlibh",
      children: "Advantages and Disadvantages of stdlib.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "qsort and bsearch work with any data type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Void-pointer callback interface is error-prone"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic allocation for unknown sizes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leaks, double-free, use-after-free"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Conversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strtol provides full error detection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "atoi has no error reporting — never use for user input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sorting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic — works on any array via callback"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function pointer call overhead per comparison"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "RNG"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, portable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low quality (linear congruential), biased modulo"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "realloc(NULL, n)"
        }), ": Equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc(n)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "realloc(ptr, 0)"
        }), ": Implementation-defined — may free or return NULL. Avoid."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "malloc(0)"
        }), ": May return NULL or a unique non-NULL pointer. Dereferencing is UB."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "free(NULL)"
        }), ": Legal — no-op (required by standard)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "abs(INT_MIN)"
        }), ": Undefined behavior on two's complement systems (value cannot be represented)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "atof(\"\")"
        }), ": Returns 0.0 with no error indication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strtol with base 0"
        }), ": Auto-detects: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0x"
        }), " = hex, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "0"
        }), " = octal, else decimal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "173-stringh--string-and-memory-functions",
      children: ["17.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<string.h>"
      }), " — String and Memory Functions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-library-card-catalog",
      children: "Real-World Analogy: Library Card Catalog"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<string.h>"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "librarian"
      }), " who can:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Count cards"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strlen"
        }), "): \"How many books are on this shelf?\" (walks until the end marker)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Copy cards"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcpy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), "): \"Make a duplicate of this entire shelf.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compare shelves"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcmp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcmp"
        }), "): \"Are these two shelves identical?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find a book"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strchr"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strstr"
        }), "): \"Where is 'Hamlet' on this shelf?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fill a shelf"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "memset"
        }), "): \"Put blank cards on every spot on this shelf.\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge shelves"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcat"
        }), "): \"Append shelf B to the end of shelf A.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-safe-string-copy",
      children: "Numbered Steps for Safe String Copy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Determine the source string length with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strlen(src)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Allocate a buffer of size ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strlen(src) + 1"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strcpy(dst, src)"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memcpy(dst, src, len + 1)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Verify the destination is null-terminated.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " For bounded copy, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strncpy"
      }), " — but remember ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strncpy"
      }), " does NOT null-terminate if the source fits exactly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-functions-reference-1",
      children: "Key Functions Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bounds-Checked Variant"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String length (O(n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy"
            }), " pads with zeros; may not null-terminate"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcat"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strncat"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concatenate strings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strncat"
            }), " always null-terminates"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcmp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strncmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare strings"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strncmp"
            }), " limits comparison to n chars"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strchr"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strrchr"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find character leftmost/rightmost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strstr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find substring"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strtok"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strtok_r"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tokenize string (modifies input!)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strtok_r"
            }), " is reentrant (POSIX)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strspn"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strcspn"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Span character sets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strpbrk"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find any of a set of characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fill memory with byte value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy memory (may not overlap)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memmove"
            }), " if src and dst overlap"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memmove"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy memory (handles overlap)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatically detects direction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare memory buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memchr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Find byte in memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-memcpy-vs-memmove-and-memset",
      children: "Code: memcpy vs memmove and memset"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    /* memcpy vs memmove — overlap matters */\n    char str[] = \"Hello, World!\";\n    memmove(str + 7, str, 6);   /* overlap: src and dst overlap */\n    printf(\"memmove: %s\\n\", str);\n\n    /* Reset and try with memcpy — overlapping memcpy is UB */\n    char str2[] = \"Hello, World!\";\n    /* memcpy(str2 + 7, str2, 6);  // UNDEFINED BEHAVIOR — do not do this */\n\n    /* memset */\n    int arr[5];\n    memset(arr, 0, sizeof(arr));         /* zero out — arr = {0,0,0,0,0} */\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    memset(arr, 0xFF, sizeof(arr));      /* all bits = 1 = arr = {-1,-1,-1,-1,-1} */\n    for (int i = 0; i < 5; i++) printf(\"%d \", arr[i]);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "memmove: Hello, Hello!\n0 0 0 0 0\n-1 -1 -1 -1 -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-memmove-overlap",
      children: "Dry Run: memmove Overlap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Initial: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "str = \"Hello, World!\""
      }), " (indices 0..13, null at 14).\nOperation: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memmove(str + 7, str, 6)"
      }), " — copy 6 bytes from index 0 to index 7."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Byte Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Copy Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'H'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Src start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'H'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'e'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'e'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'o'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'o'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "','"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "','"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "' '"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "' '"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'W'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dst start = copied before overwrite"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'H'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'o'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'e'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'r'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'l'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'d'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "'o'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'!'"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "','"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'\\0'"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unaffected"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'\\0'"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"Hello, Hello!\""
      }), " — memmove detects overlap and copies backward if needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-for-memmove-overlap-handling",
      children: "Pseudocode for memmove Overlap Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION memmove(dst, src, n):\n    IF dst == src:\n        RETURN dst\n    IF dst < src:\n        // No overlap danger: copy forward\n        FOR i = 0 TO n-1:\n            dst[i] = src[i]\n    ELSE:\n        // Overlap possible: copy backward\n        FOR i = n-1 DOWN TO 0:\n            dst[i] = src[i]\n    RETURN dst\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan until null terminator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies n+1 bytes (including null)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies up to n bytes, then pads with zeros"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strcmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(min(m,n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops at first difference or null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strcat"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m+n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scans to end of dst (O(m)), then copies (O(n))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strstr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m*n) worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Naive: O(m*n); glibc uses two-way: O(m+n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strchr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan until match or null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtok"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan, modifies input string in-place"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte-by-byte or word-aligned fill"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block memory transfer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memmove"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as memcpy, plus overlap detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memcmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Byte-by-byte comparison until mismatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stringh-vs-stdlibh-string-functions",
      children: "string.h vs stdlib.h String Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<string.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Copy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memcpy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memmove"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compare"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strcmp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strncmp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "memcmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Search"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "strchr"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strstr"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strpbrk"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "bsearch"
            }), " (on sorted arrays)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "qsort"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokenize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtok"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convert to number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "atoi"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strtol"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "strtod"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "atof"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Convert from number"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "itoa"
            }), " (non-standard)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory allocation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "calloc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "realloc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory fill"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "memset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Random"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rand"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "srand"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Process"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "exit"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "system"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getenv"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " String content manipulation → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<string.h>"
      }), ". String-to-number conversion, memory management, sorting, process control → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdlib.h>"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-stringh",
      children: "Advantages and Disadvantages of string.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memcpy is highly optimized (may use SIMD)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "str functions are all O(n) — no O(1) length access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No Unicode support (not UTF-8 aware)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "memmove handles overlap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strncpy doesn't null-terminate on truncation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Modification"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place operations save memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strtok destroys the input string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strlen(\"\")"
        }), ": Returns 0."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strcpy with overlapping buffers"
        }), ": Undefined behavior (use memmove)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strncpy(dst, \"hello\", 3)"
        }), ": Copies \"hel\", then pads with zeros — NOT null-terminated."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strncat(dst, src, n)"
        }), ": Always null-terminates but n limits the ", (0,jsx_runtime.jsx)(_components.em, {
          children: "copied"
        }), " characters, not the total."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strtok thread safety"
        }), ": Not reentrant — uses static internal state. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtok_r"
        }), " on POSIX."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "memset(ptr, 0, 0)"
        }), ": Legal — no-op."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "memcmp with different-length buffers"
        }), ": Compares only the first n bytes; caller must handle lengths."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "174-mathh--mathematics",
      children: ["17.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<math.h>"
      }), " — Mathematics"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-pocket-calculator",
      children: "Real-World Analogy: Pocket Calculator"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<math.h>"
      }), " functions are like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "scientific calculator"
      }), " with dedicated buttons:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Trigonometric"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sin"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cos"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tan"
        }), " — like angle calculations for construction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential/Log"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exp"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "log10"
        }), " — like calculating compound interest or pH."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power/Root"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sqrt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pow"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "hypot"
        }), " — like the Pythagorean theorem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rounding"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ceil"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "floor"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "round"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "trunc"
        }), " — like rounding currency."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Absolute"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fabs"
        }), " — like distance regardless of direction."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remainder"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fmod"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remainder"
        }), " — like distributing items evenly."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-safe-math-computation",
      children: "Numbered Steps for Safe Math Computation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<math.h>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<errno.h>"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno = 0"
      }), " before the call.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Check domain — e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sqrt(x)"
      }), " requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x >= 0"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "log(x)"
      }), " requires ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x > 0"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Call the function and check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno == EDOM"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno == ERANGE"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " For NaN results, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isnan()"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<math.h>"
      }), " (C99) or check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x != x"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-comprehensive-math-example",
      children: "Code: Comprehensive Math Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <math.h>\n#include <errno.h>\n\nint main(void)\n{\n    printf(\"sqrt(2.0)       = %.6f\\n\", sqrt(2.0));\n    printf(\"exp(1.0)        = %.6f\\n\", exp(1.0));\n    printf(\"log(2.71828)    = %.6f\\n\", log(2.71828));\n    printf(\"log10(100.0)    = %.2f\\n\", log10(100.0));\n    printf(\"pow(2.0, 10.0)  = %.0f\\n\", pow(2.0, 10.0));\n    printf(\"sin(PI/2)       = %.6f\\n\", sin(3.14159265 / 2));\n    printf(\"cos(0)          = %.6f\\n\", cos(0.0));\n    printf(\"ceil(3.14)      = %.0f\\n\", ceil(3.14));\n    printf(\"floor(3.14)     = %.0f\\n\", floor(3.14));\n    printf(\"round(3.64)     = %.0f\\n\", round(3.64));\n    printf(\"trunc(3.64)     = %.0f\\n\", trunc(3.64));\n    printf(\"fabs(-5.0)      = %.0f\\n\", fabs(-5.0));\n    printf(\"remainder(10,3) = %.1f\\n\", remainder(10.0, 3.0));\n    printf(\"fmod(10,3)      = %.1f\\n\", fmod(10.0, 3.0));\n    printf(\"hypot(3,4)      = %.0f\\n\", hypot(3.0, 4.0));\n\n    /* Error handling: domain error */\n    errno = 0;\n    double bad = sqrt(-1.0);\n    if (errno == EDOM)\n        printf(\"sqrt(-1): Domain error (EDOM), result = %f\\n\", bad);\n\n    /* Error handling: range error */\n    errno = 0;\n    double huge = exp(1000.0);\n    if (errno == ERANGE)\n        printf(\"exp(1000): Range error (ERANGE), result = %f\\n\", huge);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sqrt(2.0)       = 1.414214\nexp(1.0)        = 2.718282\nlog(2.71828)    = 1.000000\nlog10(100.0)    = 2.00\npow(2.0, 10.0)  = 1024\nsin(PI/2)       = 1.000000\ncos(0)          = 1.000000\nceil(3.14)      = 4\nfloor(3.14)     = 3\nround(3.64)     = 4\ntrunc(3.64)     = 3\nfabs(-5.0)      = 5\nremainder(10,3) = 1.0\nfmod(10,3)      = 1.0\nhypot(3,4)      = 5\nsqrt(-1): Domain error (EDOM), result = -nan\nexp(1000): Range error (ERANGE), result = inf\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-hypot-implementation",
      children: "Pseudocode: hypot Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION hypot(x, y):\n    // Avoid overflow: compute sqrt(x^2 + y^2) safely\n    x <- fabs(x)\n    y <- fabs(y)\n    IF x < y:\n        SWAP x, y    // x is the larger\n    IF x == 0:\n        RETURN 0.0\n    t <- y / x\n    RETURN x * sqrt(1 + t*t)\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-hypot30-40",
      children: "Dry Run: hypot(3.0, 4.0)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "x"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "y"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fabs both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=3.0, y=4.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x < y? Yes: swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x=4.0, y=3.0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "x == 0? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t = 3.0 / 4.0 = 0.75"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "t = 0.75"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqrt(1 + 0.75^2) = sqrt(1.5625)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.25"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3.0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4.0 * 1.25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "5.0"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sqrt"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware instruction or iterative approx, constant iterations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cos"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Polynomial approximation (CORDIC or Taylor series, fixed iterations)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "exp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Argument reduction + polynomial expansion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "pow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Computed as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exp(y * log(x))"
            }), " — two O(1) calls"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ceil"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "floor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple bit manipulation on IEEE 754 representation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fmod"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point division and remainder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "hypot"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scaled arithmetic to avoid overflow, one sqrt call"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-mathh",
      children: "Advantages and Disadvantages of math.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double precision (~15-17 decimal digits)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point rounding errors are inherent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Functions are heavily optimized (may use CPU intrinsics)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher cost than basic arithmetic — sin is ~20-50 cycles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation varies: sin(1e22) quality differs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno reports domain/range errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must set errno=0 before each call — easy to forget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Constants"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M_PI, M_E widely available"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Not part of ISO C standard — use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#define _USE_MATH_DEFINES"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "header-groups-standard-math-functions",
      children: "Header Groups: Standard Math Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Group"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Functions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Trigonometric"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cos"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tan"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "asin"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "acos"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "atan"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "atan2"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Angles in radians"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hyperbolic"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sinh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cosh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tanh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "asinh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "acosh"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "atanh"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hyperbolic angles"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exponential/Log"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "exp"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "exp2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "expm1"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log2"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log10"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "log1p"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "logb"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Growth/decay"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Power/Root"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "pow"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sqrt"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cbrt"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "hypot"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponentiation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Rounding"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ceil"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "floor"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "trunc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "round"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lround"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "llround"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer nearest"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Remainder"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fmod"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remainder"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "remquo"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Division remainder"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Absolute/Distance"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "fabs"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fdim"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fmax"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fmin"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Values and differences"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error/Gamma"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "erf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "erfc"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tgamma"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lgamma"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Classification"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "isfinite"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isinf"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "isnan"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "signbit"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float inspection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-3",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sqrt(-0.0)"
        }), ": Returns -0.0 (valid)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pow(0.0, 0.0)"
        }), ": Returns 1.0 (by convention)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pow(0.0, negative)"
        }), ": Domain error (or +/-inf depending on implementation)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "log(0.0)"
        }), ": Returns -inf, ERANGE."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "fmod(x, 0.0)"
        }), ": Domain error (EDOM)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sin(inf)"
        }), ": Returns NaN, no errno (implementation-defined)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "remainder vs fmod"
        }), ": remainder returns IEEE 754 remainder (symmetric); fmod truncates toward zero."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "printf(\"remainder(5, 2) = %.0f\\n\", remainder(5.0, 2.0));   /* 1 */\nprintf(\"fmod(5, 2)      = %.0f\\n\", fmod(5.0, 2.0));        /* 1 */\n/* These differ for negative dividends: */\nprintf(\"remainder(-5,2) = %.0f\\n\", remainder(-5.0, 2.0));  /* -1 */\nprintf(\"fmod(-5, 2)     = %.0f\\n\", fmod(-5.0, 2.0));       /* -1 */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "175-ctypeh--character-handling",
      children: ["17.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<ctype.h>"
      }), " — Character Handling"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-airport-security-checkpoint",
      children: "Real-World Analogy: Airport Security Checkpoint"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<ctype.h>"
      }), " functions are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "airport security scanners"
      }), " that classify every passenger (character):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isalpha"
        }), ": \"Is this a letter passenger?\" Checks passport type."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isdigit"
        }), ": \"Is this a numeric passenger?\" Like a boarding pass barcode."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isspace"
        }), ": \"Is this a blank passenger?\" Like empty space in the queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isupper"
        }), ": \"Is this passenger a VIP (uppercase)?\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "tolower"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "toupper"
        }), ": \"Change this passenger's class.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-character-classification",
      children: "Numbered Steps for Character Classification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Read a character from input.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Pass it (cast to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "unsigned char"
      }), ") to the classification function.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Interpret return: nonzero (true) or zero (false).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " For case conversion, assign the return value of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "toupper"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "tolower"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Handle EOF separately — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isalpha(EOF)"
      }), " is undefined behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <ctype.h>\n\nint main(void)\n{\n    char ch;\n\n    printf(\"Enter a character: \");\n    scanf(\"%c\", &ch);\n\n    printf(\"isalnum('%c') = %d\\n\", ch, isalnum((unsigned char)ch));\n    printf(\"isalpha('%c') = %d\\n\", ch, isalpha((unsigned char)ch));\n    printf(\"isdigit('%c') = %d\\n\", ch, isdigit((unsigned char)ch));\n    printf(\"islower('%c') = %d\\n\", ch, islower((unsigned char)ch));\n    printf(\"isupper('%c') = %d\\n\", ch, isupper((unsigned char)ch));\n    printf(\"isspace('%c') = %d\\n\", ch, isspace((unsigned char)ch));\n    printf(\"ispunct('%c') = %d\\n\", ch, ispunct((unsigned char)ch));\n    printf(\"isgraph('%c') = %d\\n\", ch, isgraph((unsigned char)ch));\n    printf(\"isprint('%c') = %d\\n\", ch, isprint((unsigned char)ch));\n    printf(\"iscntrl('%c') = %d\\n\", ch, iscntrl((unsigned char)ch));\n    printf(\"isxdigit('%c')= %d\\n\", ch, isxdigit((unsigned char)ch));\n    printf(\"tolower('%c') = '%c'\\n\", ch, tolower((unsigned char)ch));\n    printf(\"toupper('%c') = '%c'\\n\", ch, toupper((unsigned char)ch));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (input: 'A'):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "isalnum('A') = 1\nisalpha('A') = 1\nisdigit('A') = 0\nislower('A') = 0\nisupper('A') = 1\nisspace('A') = 0\nispunct('A') = 0\nisgraph('A') = 1\nisprint('A') = 1\niscntrl('A') = 0\nisxdigit('A')= 1\ntolower('A') = 'a'\ntoupper('A') = 'A'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-character-classification-of-9",
      children: "Dry Run: Character Classification of '9'"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Internal check"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isalnum('9')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9' (57)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is digit? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isdigit('9')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9' (57)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0x30 <= 57 <= 0x39? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isalpha('9')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9' (57)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is letter? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isxdigit('9')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9' (57)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is 0-9 or A-F? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "isspace('9')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "'9' (57)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Is space/tab/newline? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-isdigit-and-tolower",
      children: "Pseudocode: isdigit and tolower"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION isdigit(ch):\n    RETURN ch >= '0' AND ch <= '9'\nEND FUNCTION\n\nFUNCTION tolower(ch):\n    IF ch >= 'A' AND ch <= 'Z':\n        RETURN ch + ('a' - 'A')   // +32 in ASCII\n    RETURN ch\nEND FUNCTION\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["All ", (0,jsx_runtime.jsx)(_components.code, {
              children: "is*"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "to*"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple range checks or lookup table access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tolower"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "toupper"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic offset (+/- 32) on ASCII range"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-ctypeh",
      children: "Advantages and Disadvantages of ctype.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single lookup or comparison — extremely fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Locale"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Respects current locale for non-English characters"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Behavior changes with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "setlocale"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C — available on all platforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does not handle Unicode (only char/byte)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Well-defined for all unsigned char values + EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Passing signed char < 0 (but not EOF) is UB"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-4",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isalpha(EOF)"
        }), ": Undefined behavior — EOF is -1, not representable as unsigned char. Check for EOF first."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "isalpha(0x80)"
        }), ": Undefined behavior if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), " is signed. Always cast: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "isalpha((unsigned char)ch)"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "tolower('A')"
        }), ": Returns 'a'. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tolower('a')"
        }), " returns 'a' unchanged."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "toupper('7')"
        }), ": Returns '7' unchanged (no error)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Locale dependence"
        }), ": In the \"C\" locale, only A-Z and a-z are letters. With ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setlocale(LC_ALL, \"tr_TR\")"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "toupper('i')"
        }), " returns 'I' (dotted uppercase I), not 'I'."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "176-timeh--date-and-time",
      children: ["17.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<time.h>"
      }), " — Date and Time"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-wall-clock-and-stopwatch",
      children: "Real-World Analogy: Wall Clock and Stopwatch"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<time.h>"
      }), " provides:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "wall clock"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "time()"
        }), ") — tells you the current date and time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "calendar"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "struct tm"
        }), ") — breaks the wall clock into components (year, month, day, hour...)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "stopwatch"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "clock()"
        }), ") — measures CPU time used by your program."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "date formatter"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "strftime"
        }), ") — prints dates in any format (ISO 8601, US-style, etc.)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "time difference calculator"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "difftime"
        }), ") — measures elapsed seconds between two time points."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-timing-code",
      children: "Numbered Steps for Timing Code"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clock_t start = clock()"
      }), " before the code to measure.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Execute the code to measure.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "clock_t end = clock()"
      }), " after the code.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Compute ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(double)(end - start) / CLOCKS_PER_SEC"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Report the elapsed seconds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <time.h>\n\nint main(void)\n{\n    /* Current time */\n    time_t now = time(NULL);\n    printf(\"Seconds since epoch: %lld\\n\", (long long)now);\n\n    /* Format to string */\n    char time_str[100];\n    struct tm *local = localtime(&now);\n    if (local) {\n        strftime(time_str, sizeof(time_str),\n                 \"%Y-%m-%d %H:%M:%S (%A)\", local);\n        printf(\"Local time: %s\\n\", time_str);\n\n        /* Also get UTC */\n        struct tm *gmt = gmtime(&now);\n        strftime(time_str, sizeof(time_str),\n                 \"%Y-%m-%dT%H:%M:%SZ\", gmt);\n        printf(\"UTC (ISO 8601): %s\\n\", time_str);\n    }\n\n    /* Measure elapsed CPU time */\n    clock_t start = clock();\n    volatile double sum = 0;\n    for (long i = 0; i < 100000000L; i++) {\n        sum += 0.0001;\n    }\n    clock_t end = clock();\n\n    double elapsed = (double)(end - start) / CLOCKS_PER_SEC;\n    printf(\"Elapsed: %.4f seconds\\n\", elapsed);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (varies):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Seconds since epoch: 1838500000\nLocal time: 2026-06-09 16:20:00 (Tuesday)\nUTC (ISO 8601): 2026-06-09T16:20:00Z\nElapsed: 0.2340 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "time-structures",
      children: "Time Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "struct tm {\n    int tm_sec;    /* seconds (0-60, 60 = leap second) */\n    int tm_min;    /* minutes (0-59) */\n    int tm_hour;   /* hours (0-23) */\n    int tm_mday;   /* day of month (1-31) */\n    int tm_mon;    /* month (0-11) — WARNING: January = 0! */\n    int tm_year;   /* year (years since 1900) — WARNING: 2026 = 126 */\n    int tm_wday;   /* day of week (0-6, Sunday=0) */\n    int tm_yday;   /* day of year (0-365) */\n    int tm_isdst;  /* daylight saving time: >0 = DST, 0 = not, <0 = unknown */\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Watch out:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tm_mon"
      }), " is 0-based (0 = January) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "tm_year"
      }), " is years since 1900. Always adjust:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "printf(\"Date: %04d-%02d-%02d\\n\",\n       local->tm_year + 1900,\n       local->tm_mon + 1,\n       local->tm_mday);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-strftime-with-y-m-d-hms",
      children: "Dry Run: strftime with \"%Y-%m-%d %H:%M:%S\""
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Given: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "now = 1838500000"
      }), " (approx June 9, 2026, 16:20:00 UTC)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Format Spec"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Expansion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%Y"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"2026\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full year"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"-\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%m"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"06\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Month (01-12)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"-\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%d"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"09\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Day of month"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%H"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"16\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hour (00-23)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\":\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%M"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"20\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minute (00-59)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: ":"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\":\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Literal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"00\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Second (00-60)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "%A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Tuesday\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full weekday name"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Result:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"2026-06-09 16:20:00 (Tuesday)\""
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "time(NULL)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call, returns seconds from epoch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "localtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Converts epoch seconds to broken-down time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gmtime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same conversion, no DST/zone adjustment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "mktime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Inverse: struct tm to epoch seconds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "difftime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple double subtraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clock"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Query process CPU time from kernel"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strftime"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n = output length; scans format string and fills"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-timeh",
      children: "Advantages and Disadvantages of time.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Available everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited to seconds resolution (POSIX has nanoseconds)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "localtime/gmtime return pointer to static buffer (not thread-safe!)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "localtime_r"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gmtime_r"
            }), " on POSIX"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "2038 problem"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32-bit time_t overflows on Jan 19, 2038"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "clock() measures CPU time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wall-clock time requires clock_gettime on POSIX"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-5",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "time_t overflow"
        }), ": On 32-bit systems, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "time_t"
        }), " is signed 32-bit. Overflow on January 19, 2038 (03:14:07 UTC). Use 64-bit time_t."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "localtime(NULL)"
        }), ": Undefined behavior — NULL pointer argument."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "localtime return"
        }), ": Returns pointer to static data — not thread-safe. Overwritten by subsequent ", (0,jsx_runtime.jsx)(_components.code, {
          children: "gmtime"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "localtime"
        }), " calls."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mktime with invalid tm"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mktime"
        }), " normalizes the struct. For example, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "tm_mday = 32"
        }), " in January becomes February 1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "clock() overflow"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clock_t"
        }), " may wrap after ~2147 seconds (32-bit) or ~2.48 million hours (64-bit)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "strftime with insufficient buffer"
        }), ": Returns 0 if output exceeds buffer size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "177-errnoh-and-asserth--diagnostics",
      children: ["17.7 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<errno.h>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<assert.h>"
      }), " — Diagnostics"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1771-errnoh--error-numbers",
      children: ["17.7.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<errno.h>"
      }), " — Error Numbers"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-train-station-announcement-board",
      children: "Real-World Analogy: Train Station Announcement Board"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "errno"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "train station announcement board"
      }), ". When something goes wrong (a train is delayed), the station updates the board with a specific code (errno) and a human-readable message. The board only shows the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "last"
      }), " error — it resets before each operation. You must check it after each operation before it gets overwritten."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-errno-usage",
      children: "Numbered Steps for errno Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<errno.h>"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno = 0"
      }), " before the library call.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Call the library function.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Check ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno"
      }), " for nonzero values.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "perror()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strerror()"
      }), " to convert to human-readable text."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <errno.h>\n#include <string.h>\n#include <math.h>\n\nint main(void)\n{\n    errno = 0;\n    double result = sqrt(-1.0);\n    if (errno == EDOM) {\n        printf(\"Domain error: %s\\n\", strerror(errno));\n    }\n\n    errno = 0;\n    FILE *fp = fopen(\"/nonexistent\", \"r\");\n    if (!fp) {\n        perror(\"fopen\");\n        printf(\"errno = %d: %s\\n\", errno, strerror(errno));\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Domain error: Domain error\nfopen: No such file or directory\nerrno = 2: No such file or directory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-errno-values",
      children: "Common errno Values"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value (typical)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Where Set"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EPERM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation not permitted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Permission related"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ENOENT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No such file or directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fopen, remove, rename"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EINTR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupted function call"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O operations, sleep"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EIO"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "I/O error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fread, fwrite, fclose"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EINVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "22"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid argument"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fseek, strtol (invalid base)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "EDOM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Domain error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqrt(-1), log(0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ERANGE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range error (overflow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strtol, strtod, exp(1000)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Important:"
      }), " Many library functions do NOT set errno to 0 on success. Always set ", (0,jsx_runtime.jsx)(_components.code, {
        children: "errno = 0"
      }), " before the call."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "1772-asserth--runtime-assertions",
      children: ["17.7.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<assert.h>"
      }), " — Runtime Assertions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-building-inspector",
      children: "Real-World Analogy: Building Inspector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "assert"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building inspector"
      }), " who randomly checks key measurements during construction. If a wall is off by more than the tolerance, the inspector halts everything with a red tag. In production (release build), the inspector is off-duty — the checks disappear."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <assert.h>\n\nint divide(int a, int b)\n{\n    assert(b != 0);\n    return a / b;\n}\n\nint main(void)\n{\n    printf(\"10 / 2 = %d\\n\", divide(10, 2));\n    printf(\"10 / 0 = %d\\n\", divide(10, 0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "10 / 2 = 5\nAssertion failed: b != 0, file test.c, line 7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To disable assertions in release builds:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#define NDEBUG          /* must come BEFORE #include <assert.h> */\n#include <assert.h>\n/* assert() now expands to nothing */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-5",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "assert(cond)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single comparison; abort if false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "errno"
            }), " check"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read global or thread-local integer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "perror"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints message + strerror; n = string length"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-asserth",
      children: "Advantages and Disadvantages of assert.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Early detection"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Catches bugs at runtime with context"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only fires in debug builds (if NDEBUG)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Zero overhead"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expands to nothing with NDEBUG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot use expressions with side effects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Clarity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Documents invariants in code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abrupt abort — no cleanup opportunity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-6",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "assert with side effects"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assert(++x > 0)"
        }), " — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "++x"
        }), " disappears with NDEBUG! Never use expressions with side effects."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NDEBUG location"
        }), ": Must be defined ", (0,jsx_runtime.jsx)(_components.em, {
          children: "before"
        }), " including assert.h. Defining it later has no effect."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "assert(ptr != NULL)"
        }), ": Common pattern, but the error message shows the condition text only."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "static_assert"
        }), " (C11): Compile-time assertions — use for type-size checks, struct alignment."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "178-setjmph--non-local-jumps",
      children: ["17.8 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<setjmp.h>"
      }), " — Non-Local Jumps"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-emergency-eject-button",
      children: "Real-World Analogy: Emergency Eject Button"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " is like an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "emergency eject button"
      }), " on a rocket:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp(env)"
        }), " sets up the eject seat at a control room. Returns 0 on first call."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp(env, val)"
        }), " is the eject button — it instantly returns to the control room, bypassing normal control flow."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "val"
        }), " parameter tells the control room why you ejected."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-it-works",
      children: "How It Works"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <setjmp.h>\n\njmp_buf env;\n\nvoid second(void)\n{\n    printf(\"In second()\\n\");\n    longjmp(env, 42);   /* jump back — returns 42 from setjmp */\n}\n\nvoid first(void)\n{\n    printf(\"In first()\\n\");\n    second();\n    printf(\"This line never executes\\n\");\n}\n\nint main(void)\n{\n    int ret = setjmp(env);\n    if (ret == 0) {\n        printf(\"Calling first() (ret = %d)\\n\", ret);\n        first();\n    } else {\n        printf(\"Back in main() via longjmp (ret = %d)\\n\", ret);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Calling first() (ret = 0)\nIn first()\nIn second()\nBack in main() via longjmp (ret = 42)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-setjmplongjmp",
      children: "Dry Run: setjmp/longjmp"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ret"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp(env)"
            }), " saved context"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First return — normal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ret == 0"
            }), ", call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "first()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main->first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal function call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "first()"
            }), " calls ", (0,jsx_runtime.jsx)(_components.code, {
              children: "second()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main->first->second"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normal function call"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp(env, 42)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwinds stack to setjmp point"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "ret == 42"
            }), ", print message"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "main"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"first()\" and \"second()\" stack frames destroyed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key insight:"
      }), " The stack frames for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "first()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "second()"
      }), " are gone. Any local variables in those functions that were modified after ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), " have indeterminate values (unless they are ", (0,jsx_runtime.jsx)(_components.code, {
        children: "volatile"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-safe-longjmp-use",
      children: "Numbered Steps for Safe longjmp Use"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Declare a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jmp_buf"
      }), " with file scope or pass as parameter.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp(env)"
      }), " — check return value to distinguish first call (0) from longjmp return (nonzero).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Only use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " for exceptional conditions (fatal errors, deep unwinding).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Do NOT ", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " from a signal handler unless the signal is SIGABRT or similar.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Ensure any allocated resources between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "setjmp"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " are freed before the jump."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "limitations-and-dangers",
      children: "Limitations and Dangers"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Danger"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Resource leaks"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            }), " unwinds the stack without calling destructors, without freeing malloc'd memory"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Volatile variables"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-volatile local variables modified between setjmp and longjmp have indeterminate values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal context"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "longjmp from a signal handler is only safe if setjmp was called in the signal handler"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No destructors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C++ objects, cleanup code are skipped — use only in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reentrancy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jmp_buf saved by setjmp is invalid after the calling function returns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <setjmp.h>\n#include <stdlib.h>\n\njmp_buf env;\n\nvoid risky(void)\n{\n    int *p = malloc(100 * sizeof(int));   /* LEAKS if longjmp before free */\n    /* ... do work that may longjmp ... */\n    if (/* error */ 1) {\n        longjmp(env, 1);   /* p is never freed! */\n    }\n    free(p);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Free resources before longjmp, or use a design pattern where cleanup happens before the jump."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-6",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "s = register state + stack pointer — saves CPU context"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(f)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "f = number of stack frames unwound — restores saved context"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-setjmph",
      children: "Advantages and Disadvantages of setjmp.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error recovery"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwinds N frames in one step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resource leaks are easy to create"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than N-level return value propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pollutes control flow — hard to reason about"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C standard"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Does NOT work with C++ exceptions (unwind incompatibility)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-longjmp-vs-alternatives",
      children: "Comparison: longjmp vs Alternatives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "setjmp"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Return values"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goto"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Exceptions (C++)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Crosses function boundaries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (same function only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unwinds N frames"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (one call)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (N returns)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Calls destructors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (normal return)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Thread-safe"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-thread jmp_buf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast unwinding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow with deep nesting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "C compatibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (C++ only)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "179-signalh--signal-handling",
      children: ["17.9 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<signal.h>"
      }), " — Signal Handling"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-fire-alarm",
      children: "Real-World Analogy: Fire Alarm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Signals are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "building alarms"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIGINT"
        }), " (Ctrl+C) = Fire alarm — you may interrupt the program."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIGSEGV"
        }), " = Structural collapse (segfault) — program accessed invalid memory."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIGTERM"
        }), " = Evacuation order — polite request to terminate."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SIGKILL"
        }), " = Demolition — cannot be caught, ignored, or blocked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "signal(SIGINT, handler)"
        }), " = Assign someone to respond when the fire alarm rings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "raise(SIGINT)"
        }), " = Manually pull the fire alarm."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-signal-handling",
      children: "Numbered Steps for Signal Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<signal.h>"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Define a signal handler function with signature ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void handler(int signum)"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "signal(sig, handler)"
      }), " to register it.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Inside the handler, only call async-signal-safe functions.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Restore the signal handler if you need default behavior later."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <signal.h>\n#include <stdlib.h>\n\nstatic volatile sig_atomic_t got_interrupt = 0;\n\nvoid handle_sigint(int sig)\n{\n    got_interrupt = 1;   /* safe: sig_atomic_t */\n}\n\nint main(void)\n{\n    /* Register handler */\n    signal(SIGINT, handle_sigint);\n\n    printf(\"Press Ctrl+C within 5 seconds...\\n\");\n\n    /* Busy-wait — not ideal, but demonstrates the pattern */\n    volatile int count = 0;\n    for (int i = 0; i < 100000000; i++) {\n        count++;\n        if (got_interrupt) {\n            printf(\"\\nInterrupted after %d iterations!\\n\", i);\n            got_interrupt = 0;\n            break;\n        }\n    }\n\n    if (!got_interrupt)\n        printf(\"Completed %d iterations without interruption\\n\", count);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (if Ctrl+C pressed):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Press Ctrl+C within 5 seconds...\n^C\nInterrupted after 4234567 iterations!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "async-signal-safe-functions",
      children: "Async-Signal-Safe Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Only these functions are guaranteed safe to call from a signal handler:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "signal()"
        }), " (to reset to SIG_DFL)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "raise()"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "_Exit()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_exit()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.code, {
          children: "abort()"
        })
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), " (POSIX — write to pipe or file descriptor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reading/writing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile sig_atomic_t"
        }), " variables"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Never call"
      }), " from a signal handler: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "free"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fopen"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strtok"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "rand"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "longjmp"
      }), " (unless setjmp was in the handler)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "signal-table",
      children: "Signal Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Signal"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGABRT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abort (from abort())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate with core dump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGFPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate with core dump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGILL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Illegal instruction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate with core dump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGINT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interactive interrupt (Ctrl+C)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGSEGV"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Segmentation violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate with core dump"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGTERM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Termination request (kill default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGALRM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "14"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Timer alarm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SIGPIPE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to broken pipe"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Terminate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-7",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "signal(sig, handler)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kernel call, sets handler table entry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "raise(sig)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send signal to current process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handler dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(s)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context switch to handler, s = signal stack size"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-signalh",
      children: "Advantages and Disadvantages of signal.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Responsiveness"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interrupt-driven, immediate response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only async-signal-safe functions callable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C standard — available everywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POSIX adds sigaction with better control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Simplicity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two functions: signal, raise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No data passing, no queuing, no blocking control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signal loss"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Standard signals are not queued — two SIGINT in a row may be merged"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-7",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "signal(SIGKILL, handler)"
        }), ": SIGKILL and SIGSTOP cannot be caught — the call is ignored."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "signal(SIGSEGV, handler)"
        }), ": If the handler causes another SIGSEGV, the program loops infinitely (or terminates). Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sigaction"
        }), " with SA_SIGINFO on POSIX for better control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Handler reentrancy"
        }), ": If a signal arrives while the handler is executing, the handler may be reentered. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile sig_atomic_t"
        }), " for shared state."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Restoring default"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signal(sig, SIG_DFL)"
        }), " restores the default behavior; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "signal(sig, SIG_IGN)"
        }), " ignores the signal."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.h2, {
      id: "1710-stdargh--variable-arguments",
      children: ["17.10 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdarg.h>"
      }), " — Variable Arguments"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-pizza-order",
      children: "Real-World Analogy: Pizza Order"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "<stdarg.h>"
      }), " is like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pizza ordering system"
      }), " where:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The first parameter is always known: \"1 pizza\" (the named parameter)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After that, you can have any number of toppings: pepperoni, mushrooms, olives, etc."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "va_list"
        }), " is the shopping list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "va_start"
        }), " begins reading the list."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "va_arg"
        }), " reads each item one by one."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "va_end"
        }), " completes the order."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "numbered-steps-for-variadic-functions",
      children: "Numbered Steps for Variadic Functions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 1:"
      }), " Include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdarg.h>"
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2:"
      }), " Declare at least one named parameter before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "..."
      }), ".\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3:"
      }), " Declare ", (0,jsx_runtime.jsx)(_components.code, {
        children: "va_list ap"
      }), " in the function body.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "va_start(ap, last_named)"
      }), " to initialize.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 5:"
      }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "va_arg(ap, type)"
      }), " for each argument.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 6:"
      }), " Call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "va_end(ap)"
      }), " before returning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\ndouble average(int count, ...)\n{\n    va_list ap;\n    double sum = 0.0;\n\n    va_start(ap, count);\n    for (int i = 0; i < count; i++) {\n        sum += va_arg(ap, double);\n    }\n    va_end(ap);\n\n    return count > 0 ? sum / count : 0.0;\n}\n\nint main(void)\n{\n    printf(\"Average of 1, 2, 3 = %.2f\\n\", average(3, 1.0, 2.0, 3.0));\n    printf(\"Average of 5 numbers = %.2f\\n\", average(5, 10.0, 20.0, 30.0, 40.0, 50.0));\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Average of 1, 2, 3 = 2.00\nAverage of 5 numbers = 30.00\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-printf-uses-stdarg",
      children: "How printf Uses stdarg"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdarg.h>\n\nvoid my_printf(const char *format, ...)\n{\n    va_list ap;\n    va_start(ap, format);\n    vprintf(format, ap);   /* vprintf accepts va_list */\n    va_end(ap);\n}\n\nint main(void)\n{\n    my_printf(\"Hello %s, you are %d years old\\n\", \"Alice\", 30);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "safety-rules-for-variadic-functions",
      children: "Safety Rules for Variadic Functions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Rule"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "At least one named parameter"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "..."
            }), " alone is not allowed by the standard"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type consistency"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            }), " uses the ", (0,jsx_runtime.jsx)(_components.em, {
              children: "default argument promotions"
            }), " for integers (char->int, short->int, float->double)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "No way to check count"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The callee cannot know how many arguments were passed — count must be communicated separately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "va_list is single-pass"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Once consumed, cannot be re-read without va_copy (C99)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "va_end must be called"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Failure may cause resource leaks on some platforms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-8",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_start"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sets up pointer to stack frame"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_arg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read next argument, advance pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "va_end"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cleanup (may be a no-op)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages-and-disadvantages-of-stdargh",
      children: "Advantages and Disadvantages of stdarg.h"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Advantage"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Disadvantage"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flexibility"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable arguments for generic printing, summing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No type safety — wrong type = undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimal overhead (pointer arithmetic on stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No runtime checking of argument count"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ISO C, available on all platforms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default argument promotions can be surprising (float->double)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1711-other-important-headers",
      children: "17.11 Other Important Headers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "17111-stdinth--fixed-width-integer-types",
      children: ["17.11.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stdint.h>"
      }), " — Fixed-Width Integer Types"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Provides exact-width, minimum-width, and fastest-width integer types:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdint.h>\n\nint main(void)\n{\n    int32_t  i32 = -100;          /* exactly 32 bits, signed */\n    uint64_t u64 = 18446744073709551615ULL;  /* exactly 64 bits, unsigned */\n    int_least16_t min16;           /* at least 16 bits */\n    int_fast32_t fast32;           /* fastest for 32-bit ops */\n\n    printf(\"int32_t:  %d\\n\", i32);\n    printf(\"uint64_t: %llu\\n\", u64);\n    printf(\"INT32_MIN: %d\\n\", INT32_MIN);\n    printf(\"INT32_MAX: %d\\n\", INT32_MAX);\n    printf(\"UINT64_MAX: %llu\\n\", UINT64_MAX);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int32_t:  -100\nuint64_t: 18446744073709551615\nINT32_MIN: -2147483648\nINT32_MAX: 2147483647\nUINT64_MAX: 18446744073709551615\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "17112-limitsh-and-floath--platform-limits",
      children: ["17.11.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<limits.h>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<float.h>"
      }), " — Platform Limits"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <limits.h>\n#include <float.h>\n\nint main(void)\n{\n    /* Integer limits */\n    printf(\"CHAR_BIT  = %d\\n\", CHAR_BIT);\n    printf(\"SCHAR_MIN = %d\\n\", SCHAR_MIN);\n    printf(\"SCHAR_MAX = %d\\n\", SCHAR_MAX);\n    printf(\"INT_MIN   = %d\\n\", INT_MIN);\n    printf(\"INT_MAX   = %d\\n\", INT_MAX);\n    printf(\"LONG_MIN  = %ld\\n\", LONG_MIN);\n    printf(\"LONG_MAX  = %ld\\n\", LONG_MAX);\n    printf(\"LLONG_MAX = %lld\\n\", LLONG_MAX);\n\n    /* Floating-point limits */\n    printf(\"\\nFLT_RADIX    = %d\\n\", FLT_RADIX);\n    printf(\"FLT_DIG      = %d\\n\", FLT_DIG);       /* decimal digits precision */\n    printf(\"DBL_DIG      = %d\\n\", DBL_DIG);\n    printf(\"FLT_EPSILON  = %e\\n\", FLT_EPSILON);   /* 1.192093e-07 */\n    printf(\"DBL_EPSILON  = %e\\n\", DBL_EPSILON);   /* 2.220446e-16 */\n    printf(\"FLT_MAX      = %e\\n\", FLT_MAX);\n    printf(\"FLT_MIN      = %e\\n\", FLT_MIN);\n    printf(\"DBL_MAX      = %e\\n\", DBL_MAX);\n    printf(\"DBL_MIN      = %e\\n\", DBL_MIN);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CHAR_BIT  = 8\nSCHAR_MIN = -128\nSCHAR_MAX = 127\nINT_MIN   = -2147483648\nINT_MAX   = 2147483647\nLONG_MIN  = -2147483648\nLONG_MAX  = 2147483647\nLLONG_MAX = 9223372036854775807\n\nFLT_RADIX    = 2\nFLT_DIG      = 6\nDBL_DIG      = 15\nFLT_EPSILON  = 1.192093e-07\nDBL_EPSILON  = 2.220446e-16\nFLT_MAX      = 3.402823e+38\nFLT_MIN      = 1.175494e-38\nDBL_MAX      = 1.797693e+308\nDBL_MIN      = 2.225074e-308\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "17113-inttypesh--format-specifiers-for-fixed-types",
      children: ["17.11.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<inttypes.h>"
      }), " — Format Specifiers for Fixed Types"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <inttypes.h>\n\nint main(void)\n{\n    int32_t  i = -100;\n    uint64_t u = 123456789012345ULL;\n\n    printf(\"i = %\" PRId32 \"\\n\", i);      /* PRId32 expands to \"d\" or \"ld\" */\n    printf(\"u = %\" PRIu64 \"\\n\", u);      /* PRIu64 expands to \"llu\" or \"lu\" */\n    printf(\"i (hex) = %\" PRIx32 \"\\n\", i);\n\n    /* Scanning macros */\n    int32_t  scanned;\n    sscanf(\"42\", \"%\" SCNd32, &scanned);\n    printf(\"Scanned: %\" PRId32 \"\\n\", scanned);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "17114-stddefh--common-definitions",
      children: ["17.11.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<stddef.h>"
      }), " — Common Definitions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stddef.h>\n\nstruct point { int x; int y; int z; };\n\nint main(void)\n{\n    printf(\"NULL pointer: %p\\n\", (void*)NULL);\n    printf(\"size_t is %zu bytes\\n\", sizeof(size_t));\n    printf(\"ptrdiff_t example: %td\\n\", &((struct point*)0)->z - &((struct point*)0)->x);\n\n    /* offsetof — offset of a member in a struct */\n    printf(\"Offset of x: %zu\\n\", offsetof(struct point, x));\n    printf(\"Offset of y: %zu\\n\", offsetof(struct point, y));\n    printf(\"Offset of z: %zu\\n\", offsetof(struct point, z));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "NULL pointer: 0000000000000000\nsize_t is 8 bytes\nptrdiff_t example: 2\nOffset of x: 0\nOffset of y: 4\nOffset of z: 8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "header-groups-comparison-table",
      children: "Header Groups Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Group"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Headers"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Types/Macros"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "I/O"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdio.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console, file, string I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FILE, fpos_t, size_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "General"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory, sorting, conversion, process"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_t, div_t, ldiv_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<string.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String + memory manipulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "size_t (as return)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Math"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<math.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FP math, trig, log, rounding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "double, float, long double"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Character"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<ctype.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Char classification/conversion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int return (nonzero/zero)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<time.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar and clock"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "time_t, clock_t, struct tm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagnostics"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<assert.h>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<errno.h>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime checks, error codes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "assert macro, errno"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-local jumps"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<setjmp.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross-function branching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jmp_buf"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Signals"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<signal.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async event handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sig_atomic_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable args"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdarg.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic function support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_list, va_arg"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fixed-width ints"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdint.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact/min/fast integer types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t, uint64_t, etc."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format macros"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<inttypes.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRI/SCN format specifiers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRId32, PRIu64"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Limits"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<limits.h>"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<float.h>"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform min/max values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT_MAX, DBL_EPSILON"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stddef.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL, size_t, ptrdiff_t, offsetof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NULL, size_t, ptrdiff_t"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Boolean"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdbool.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean type and macros (C99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "bool, true, false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1712-interview-corner",
      children: "17.12 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-atoi-and-strtol-when-would-you-use-each",
      children: "Q1: What is the difference between atoi and strtol? When would you use each?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atoi"
      }), " converts string to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "zero error detection"
      }), ". If the input is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abc\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atoi"
      }), " returns 0 with no way to distinguish from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atoi(\"0\")"
      }), ". If the input overflows ", (0,jsx_runtime.jsx)(_components.code, {
        children: "INT_MAX"
      }), ", behavior is undefined. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "strtol"
      }), " provides complete error detection:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LONG_MIN"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "LONG_MAX"
        }), " on overflow and sets ", (0,jsx_runtime.jsx)(_components.code, {
          children: "errno = ERANGE"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Sets end pointer — you can check if any digits were parsed."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Supports any base from 2 to 36."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtol"
        }), " always for production code."]
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "atoi"
      }), " is only acceptable for quick-and-dirty scripts or fully validated input."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <errno.h>\n\nint safe_atoi(const char *str, int *out)\n{\n    char *end;\n    errno = 0;\n    long val = strtol(str, &end, 10);\n\n    if (end == str)           return -1;  /* no digits */\n    if (*end != '\\0')         return -2;  /* trailing chars */\n    if (errno == ERANGE)      return -3;  /* overflow */\n    if (val < INT_MIN || val > INT_MAX) return -4;  /* fits long but not int */\n\n    *out = (int)val;\n    return 0;  /* success */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-does-qsorts-comparison-function-work-provide-a-correct-implementation-for-descending-integers-and-for-sorting-strings",
      children: "Q2: How does qsort's comparison function work? Provide a correct implementation for descending integers and for sorting strings."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The comparison function receives pointers to two elements. It must return:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative"
        }), ": first element should come before second."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero"
        }), ": elements are equal."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Positive"
        }), ": first element should come after second."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\n/* Descending int comparison */\nint cmp_desc(const void *a, const void *b)\n{\n    int ia = *(const int*)a;\n    int ib = *(const int*)b;\n    return (ia < ib) - (ia > ib);   /* neg when ia<ib -> ascending, so swap */\n}\n\n/* String comparison (ascending) */\nint cmp_str(const void *a, const void *b)\n{\n    /* a and b are pointers to char* elements */\n    const char **sa = (const char**)a;\n    const char **sb = (const char**)b;\n    return strcmp(*sa, *sb);\n}\n\nint main(void)\n{\n    int nums[] = {5, 2, 9, 1, 7};\n    qsort(nums, 5, sizeof(int), cmp_desc);\n    for (int i = 0; i < 5; i++) printf(\"%d \", nums[i]);\n    printf(\"\\n\");   /* 9 7 5 2 1 */\n\n    const char *words[] = {\"banana\", \"apple\", \"cherry\", \"date\"};\n    qsort(words, 4, sizeof(char*), cmp_str);\n    for (int i = 0; i < 4; i++) printf(\"%s \", words[i]);\n    printf(\"\\n\");   /* apple banana cherry date */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-does-async-signal-safe-mean-which-standard-library-functions-are-safe-to-call-from-a-signal-handler",
      children: "Q3: What does \"async-signal-safe\" mean? Which standard library functions are safe to call from a signal handler?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Async-signal-safe functions are safe to call from within a signal handler. They are reentrant — they don't use global state, don't call ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), ", don't use locks that might already be held by the interrupted code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe to call from signal handler:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "signal()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "raise()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "_Exit()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "abort()"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "write()"
        }), " (POSIX — low-level, unbuffered)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reading/writing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "volatile sig_atomic_t"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "NOT safe (and commonly mistaken):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why not safe"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses stdio buffers, may hold internal locks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "malloc"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "free"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses heap lock, not reentrant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strtok"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses static buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rand"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses static state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "longjmp"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unwinding while signal interrupted malloc can deadlock"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fopen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May allocate memory, hold file system locks"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-memcpy-and-memmove",
      children: "Q4: What is the difference between memcpy and memmove?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memcpy"
      }), " is faster but requires that source and destination buffers do ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " overlap. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memmove"
      }), " handles overlap correctly — it detects the overlap direction and copies forward or backward accordingly. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "memmove"
      }), " when in doubt. Both have the same complexity (O(n)) and same signature."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "char buf[] = \"abcdefghij\";\n/* memcpy(buf + 2, buf, 6);  // UB — overlapping */\nmemmove(buf + 2, buf, 6);     /* OK — result: \"ababcdefgh\" */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-what-is-the-2038-problem-and-how-does-it-relate-to-timeh",
      children: "Q5: What is the 2038 problem, and how does it relate to time.h?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " On 32-bit systems, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time_t"
      }), " is a signed 32-bit integer. It overflows on January 19, 2038, at 03:14:07 UTC — the maximum positive value (2^31-1 = 2,147,483,647 seconds from epoch). After that, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time_t"
      }), " wraps to a negative value, representing dates in 1901. The fix is to use 64-bit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time_t"
      }), " (compile with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-D_TIME_BITS=64"
      }), " on modern Linux, or use 64-bit systems where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "time_t"
      }), " is already 64 bits)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q6-what-does-assert-compile-to-when-ndebug-is-defined-what-happens-if-you-put-a-side-effect-inside-assert",
      children: ["Q6: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assert"
      }), " compile to when NDEBUG is defined? What happens if you put a side effect inside assert?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " When ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NDEBUG"
      }), " is defined, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assert(expr)"
      }), " expands to nothing — the expression is removed entirely. If the expression has side effects (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assert(++count < 10)"
      }), "), those side effects ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "disappear"
      }), " in release builds, causing bugs. Never put expressions with side effects inside ", (0,jsx_runtime.jsx)(_components.code, {
        children: "assert"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-does-printf-know-how-many-arguments-were-passed-what-happens-if-the-format-string-and-arguments-dont-match",
      children: "Q7: How does printf know how many arguments were passed? What happens if the format string and arguments don't match?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " does NOT know how many arguments were passed. It relies entirely on the format string to determine how many arguments to read from the stack. If the format says ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"%d %d\""
      }), " but only one ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), " argument is provided, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "printf"
      }), " reads past the provided arguments into undefined memory — undefined behavior. Modern compilers warn about mismatches with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-Wformat"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q8-explain-the-difference-between-fmod-and-remainder",
      children: ["Q8: Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fmod"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "remainder"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Both compute remainder, but the rounding differs:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fmod(x, y)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x - trunc(x / y) * y"
        }), " — truncates toward zero."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "remainder(x, y)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "x - round(x / y) * y"
        }), " — rounds to nearest integer (IEEE 754 remainder)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fmod(7, 3)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remainder(7, 3)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0"
        }), " — same for positive aligned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fmod(-7, 3)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-1.0"
        }), " while ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remainder(-7, 3)"
        }), " = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "1.0"
        }), " — different for negative!"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1713-applications-in-real-systems",
      children: "17.13 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-1-shellterminal-emulator",
      children: "Application 1: Shell/Terminal Emulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A Unix shell uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdio.h>"
        }), " for reading commands, printing output, piping between processes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<string.h>"
        }), " for parsing command lines with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtok"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getenv"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "system"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exit"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setenv"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<signal.h>"
        }), " for handling SIGINT (Ctrl+C), SIGTSTP (Ctrl+Z)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<time.h>"
        }), " for timing command execution."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Simplified shell prompt loop */\n#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <signal.h>\n\nvolatile sig_atomic_t got_sigint = 0;\n\nvoid handle_sigint(int sig) { (void)sig; got_sigint = 1; }\n\nint main(void)\n{\n    signal(SIGINT, handle_sigint);\n    char line[1024];\n\n    while (1) {\n        printf(\"$ \");\n        fflush(stdout);\n\n        if (!fgets(line, sizeof(line), stdin)) break;\n\n        got_sigint = 0;\n        line[strcspn(line, \"\\n\")] = '\\0';\n\n        if (strcmp(line, \"exit\") == 0) break;\n        if (line[0] != '\\0') system(line);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-2-scientific-data-processing",
      children: "Application 2: Scientific Data Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A data analysis tool uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<math.h>"
        }), " for statistical computations (mean, std dev, regression)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdio.h>"
        }), " for reading CSV files with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fscanf"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<time.h>"
        }), " for benchmarking."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<string.h>"
        }), " for parsing column headers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n#include <math.h>\n#include <string.h>\n\nint main(void)\n{\n    FILE *fp = fopen(\"data.csv\", \"r\");\n    if (!fp) { perror(\"fopen\"); return 1; }\n\n    double *values = NULL;\n    size_t capacity = 1000, count = 0;\n    values = malloc(capacity * sizeof(double));\n    if (!values) { fclose(fp); return 1; }\n\n    char line[256];\n    fgets(line, sizeof(line), fp); /* skip header */\n    while (fgets(line, sizeof(line), fp)) {\n        if (count >= capacity) {\n            capacity *= 2;\n            values = realloc(values, capacity * sizeof(double));\n        }\n        values[count++] = strtod(line, NULL);\n    }\n    fclose(fp);\n\n    /* Compute statistics */\n    double sum = 0.0, sum_sq = 0.0;\n    for (size_t i = 0; i < count; i++) {\n        sum += values[i];\n        sum_sq += values[i] * values[i];\n    }\n    double mean = sum / count;\n    double variance = (sum_sq - sum * sum / count) / (count - 1);\n    double stddev = sqrt(variance);\n\n    printf(\"N = %zu\\n\", count);\n    printf(\"Mean = %.4f\\n\", mean);\n    printf(\"Std Dev = %.4f\\n\", stddev);\n\n    free(values);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-3-embedded-sensor-logger",
      children: "Application 3: Embedded Sensor Logger"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A weather station data logger uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<time.h>"
        }), " for timestamping readings."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdio.h>"
        }), " for logging to SD card."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), " for numeric conversion of sensor values."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<math.h>"
        }), " for unit conversion (C to F, hPa to inHg)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<signal.h>"
        }), " for graceful shutdown on power loss."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-4-memory-pool-allocator",
      children: "Application 4: Memory Pool Allocator"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A custom allocator uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), " for initial ", (0,jsx_runtime.jsx)(_components.code, {
          children: "malloc"
        }), " of the pool."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<string.h>"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memset"
        }), " zeroing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdint.h>"
        }), " for exact-size pointer manipulation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<assert.h>"
        }), " for debugging boundary checks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<errno.h>"
        }), " for out-of-memory reporting."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-5-http-server",
      children: "Application 5: HTTP Server"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A simple HTTP server uses:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdio.h>"
        }), " for logging requests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<string.h>"
        }), " for parsing HTTP headers with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strstr"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtok"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<stdlib.h>"
        }), " for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getenv"
        }), " to read config, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atoi"
        }), " for port."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<signal.h>"
        }), " for graceful shutdown (SIGINT, SIGTERM)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<time.h>"
        }), " for Date headers, Last-Modified."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "<math.h>"
        }), " rarely, but ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ceil"
        }), " for content-length rounding."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Contribution"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "One-Sentence Takeaway"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdio.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "printf, fopen, fread, snprintf"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All I/O — console, file, and string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdlib.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "malloc, qsort, strtol, rand, exit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General utilities — memory, sorting, conversion, process"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<string.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "strlen, strcpy, strcmp, memcpy, memmove"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String and memory manipulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<math.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "sqrt, sin, log, pow, floor, ceil"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Floating-point math — link with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "-lm"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<ctype.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "isalpha, isdigit, toupper, tolower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character classification and case conversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<time.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "time, clock, strftime, localtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Calendar time and CPU time measurement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<errno.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "errno, EDOM, ERANGE, EINVAL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error code reporting for library functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<assert.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "assert()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime invariant checking — disabled with NDEBUG"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<setjmp.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "setjmp, longjmp"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-local jumps — deep error recovery only"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<signal.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "signal, raise, sig_atomic_t"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async event handling — very limited safe functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdarg.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "va_list, va_start, va_arg, va_end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variadic function support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<stdint.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int32_t, uint64_t, INT32_MAX"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact-width and minimum-width integer types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<limits.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "INT_MAX, LONG_MIN, CHAR_BIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-specific integer range limits"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<float.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DBL_EPSILON, FLT_MAX, DBL_DIG"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point characteristics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<inttypes.h>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PRId32, PRIu64, SCNd32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format specifier macros for fixed-width types"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "atoi"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strtol"
        }), "? When should each be used?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "snprintf"
        }), " preferred over ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sprintf"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memmove"
        }), "? Show with overlapping buffers."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "assert"
        }), " do? How is it disabled for production code?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the purpose of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), "? Why are they considered dangerous for resource management?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["List three functions that are ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " safe to call from a signal handler. Explain why."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(rand() % N)"
        }), " biased? How do you correct it?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the year 2038 problem? Which header does it affect?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fmod"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "remainder"
        }), " with negative arguments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default argument promotion for ", (0,jsx_runtime.jsx)(_components.code, {
          children: "float"
        }), " in a variadic function?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that generates 100 random integers between 1 and 1000, sorts them using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "qsort"
        }), ", and prints the sorted list. Find the median and quartiles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that measures and prints the execution time of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sqrt(2.0)"
        }), " called 10 million times. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "clock()"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CLOCKS_PER_SEC"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that reads a text file, removes all punctuation (using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ispunct"
        }), "), converts everything to lowercase, and prints the 10 most common words."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strftime"
        }), " to display the current time in these formats:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"2026-06-09 16:20:00\""
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Tuesday, June 9, 2026\""
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"06/09/26\""
            })
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"16:20\""
            })
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["ISO 8601: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"2026-06-09T16:20:00\""
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a safe wrapper function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int safe_atoi(const char *str, int *out)"
        }), " that returns 0 on success and a negative error code on failure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "setjmp"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "longjmp"
        }), " to handle a parsing error that occurs 3 function calls deep. Demonstrate a memory leak and fix it."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that implements ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "polynomial regression"
      }), " using the normal equation. Read x,y data points from a file (CSV format). Compute the coefficients of best-fit polynomial of degree ", (0,jsx_runtime.jsx)(_components.code, {
        children: "m"
      }), " (user-specified) using least squares. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "malloc"
      }), " for matrices, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "qsort"
      }), " for sorting data by x, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sqrt"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "pow"
      }), " from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<math.h>"
      }), ", and print the resulting polynomial with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fprintf"
      }), ". Test with synthetic data ", (0,jsx_runtime.jsx)(_components.code, {
        children: "y = 2x^2 - 3x + 5 + noise"
      }), " and verify the recovered coefficients are approximately correct."]
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