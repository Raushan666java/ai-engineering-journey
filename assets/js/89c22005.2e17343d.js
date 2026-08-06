"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[40454],{

/***/ 46614
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_21_interview_preparation_18_debugging_code_review_md_89c_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-21-interview-preparation-18-debugging-code-review-md-89c.json
const site_docs_courses_ai_engineering_placement_21_interview_preparation_18_debugging_code_review_md_89c_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/interview-preparation/18-debugging-code-review","title":"Debugging and Code Review","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/21-interview-preparation/18-debugging-code-review.md","sourceDirName":"courses/ai-engineering-placement/21-interview-preparation","slug":"/ai-engineering-placement/21-interview-preparation/18-debugging-code-review","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/18-debugging-code-review","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":246,"frontMatter":{"id":"18-debugging-code-review","slug":"/ai-engineering-placement/21-interview-preparation/18-debugging-code-review","title":"Debugging and Code Review","sidebar_label":"Debugging and Code Review","sidebar_position":246},"sidebar":"coursesSidebar","previous":{"title":"Low-Level and OOD Design","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/17-ood-design"},"next":{"title":"AI-Assisted Coding Interviews","permalink":"/ai-engineering-journey/ai-engineering-placement/21-interview-preparation/19-ai-assisted-coding"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/21-interview-preparation/18-debugging-code-review.md


const frontMatter = {
	id: '18-debugging-code-review',
	slug: '/ai-engineering-placement/21-interview-preparation/18-debugging-code-review',
	title: 'Debugging and Code Review',
	sidebar_label: 'Debugging and Code Review',
	sidebar_position: 246
};
const contentTitle = 'Debugging and Code Review';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
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
  "value": "Debugging Interview Format",
  "id": "debugging-interview-format",
  "level": 3
}, {
  "value": "The Debugging Checklist",
  "id": "the-debugging-checklist",
  "level": 3
}, {
  "value": "Code Review Checklist",
  "id": "code-review-checklist",
  "level": 3
}, {
  "value": "How to Communicate Findings",
  "id": "how-to-communicate-findings",
  "level": 3
}, {
  "value": "Examples",
  "id": "examples",
  "level": 2
}, {
  "value": "Buggy Code Examples",
  "id": "buggy-code-examples",
  "level": 3
}, {
  "value": "Example 1: Array Index Bug",
  "id": "example-1-array-index-bug",
  "level": 3
}, {
  "value": "Example 2: Null Reference",
  "id": "example-2-null-reference",
  "level": 3
}, {
  "value": "Example 3: Mutation Bug",
  "id": "example-3-mutation-bug",
  "level": 3
}, {
  "value": "Example 4: Floating Point Precision",
  "id": "example-4-floating-point-precision",
  "level": 3
}, {
  "value": "Example 5: Async Timing Bug",
  "id": "example-5-async-timing-bug",
  "level": 3
}, {
  "value": "Example 6: Type Coercion",
  "id": "example-6-type-coercion",
  "level": 3
}, {
  "value": "Example 7: Closure in Loop",
  "id": "example-7-closure-in-loop",
  "level": 3
}, {
  "value": "Example 8: Off-by-One in Binary Search",
  "id": "example-8-off-by-one-in-binary-search",
  "level": 3
}, {
  "value": "Example 9: Shared Mutable State",
  "id": "example-9-shared-mutable-state",
  "level": 3
}, {
  "value": "Example 10: Deep Equality",
  "id": "example-10-deep-equality",
  "level": 3
}, {
  "value": "Code Review Simulation",
  "id": "code-review-simulation",
  "level": 2
}, {
  "value": "Review 1: API Endpoint",
  "id": "review-1-api-endpoint",
  "level": 3
}, {
  "value": "Review 2: File Processing",
  "id": "review-2-file-processing",
  "level": 3
}, {
  "value": "Review 3: Database Query",
  "id": "review-3-database-query",
  "level": 3
}, {
  "value": "Advanced Debugging Techniques",
  "id": "advanced-debugging-techniques",
  "level": 3
}, {
  "value": "Common TypeScript Pitfalls",
  "id": "common-typescript-pitfalls",
  "level": 3
}, {
  "value": "Debugging Async Code",
  "id": "debugging-async-code",
  "level": 3
}, {
  "value": "Code Review Anti-Patterns",
  "id": "code-review-anti-patterns",
  "level": 3
}, {
  "value": "Real-World Code Review Example",
  "id": "real-world-code-review-example",
  "level": 3
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
    blockquote: "blockquote",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    input: "input",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    summary: "summary",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "debugging-and-code-review",
        children: "Debugging and Code Review"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After this chapter you will be able to identify common bugs in TypeScript and Python code under time pressure, systematically approach debugging without a debugger, review code for correctness, performance, and style, and communicate your findings clearly during code review rounds."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interviews test both technical skill and communication. DSA patterns, system design, behavioral questions, and mock interviews prepare you for the full interview loop. This module is your final prep before offers."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming knowledge"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of data structures"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Reproduce Bug] --> B[Read Error/Trace]\n    B --> C[Form Hypothesis]\n    C --> D[Isolate via Logs]\n    D --> E{Found?}\n    E -->|No| C\n    E -->|Yes| F[Fix]\n    F --> G[Verify Tests Pass]\n    G --> H[Check Edge Cases]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging-interview-format",
      children: "Debugging Interview Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two common formats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given buggy code, find and fix all bugs (10-20 min). Often includes compilation errors, logic errors, and edge cases."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given a failing test, debug the production code and fix it. Tests provide the expected behavior."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-debugging-checklist",
      children: "The Debugging Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Systematically check these categories:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Off-by-one errors"
        }), ": loop indices (<= vs <), array bounds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Null/undefined references"
        }), ": accessing properties on null, uninitialized variables"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type errors"
        }), ": implicit type coercion, mixed types in operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mutation bugs"
        }), ": modifying input data, shared state across calls"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Asynchronous timing"
        }), ": race conditions, missing awaits, promise handling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Edge cases"
        }), ": empty input, single element, negative numbers, large values"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integer overflow"
        }), ": JavaScript safe integer (2^53), bitwise operations truncate to 32-bit"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Floating point precision"
        }), ": 0.1 + 0.2 !== 0.3, use epsilon comparison"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-review-checklist",
      children: "Code Review Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When reviewing code, evaluate:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Correctness"
        }), ": does it handle all edge cases? Any silent failures?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance"
        }), ": time/space complexity, unnecessary allocations, nested loops"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Readability"
        }), ": clear naming, appropriate abstraction level, comments for why not what"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testability"
        }), ": pure functions, dependency injection, mock boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), ": input validation, injection risks, data exposure"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error handling"
        }), ": exceptions caught at right level, meaningful error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Concurrency"
        }), ": race conditions, deadlocks, atomicity"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "how-to-communicate-findings",
      children: "How to Communicate Findings"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In code review rounds, your tone matters as much as your findings:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with positive observations (\"the overall structure is clean\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "State what you found with evidence (\"line 12 has a potential null reference when input is empty\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Suggest specific fixes (\"we can add a guard clause here\")"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ask questions rather than dictate (\"does this handle the case where x is null?\")"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "examples",
      children: "Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "buggy-code-examples",
      children: "Buggy Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-1-array-index-bug",
      children: "Example 1: Array Index Bug"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function findMissingNumber(nums: number[], n: number): number {\n    let total = 0\n    for (let i = 0; i <= n; i++) {  // Bug: i < n, not i <= n. Total will include an extra number\n        total += i\n    }\n    for (let i = 0; i < nums.length; i++) {\n        total -= nums[i]\n    }\n    return total\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bug: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i <= n"
      }), " includes n, but the range should be 1 to n. Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i < n"
      }), " or start at 1: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for (let i = 1; i <= n; i++)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-2-null-reference",
      children: "Example 2: Null Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function getFirstCharacter(str: string | null): string {\n    return str.charAt(0)  // Bug: str could be null, calling charAt on null throws\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return str?.charAt(0) ?? ''"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (!str) return ''; return str.charAt(0);"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-3-mutation-bug",
      children: "Example 3: Mutation Bug"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function sortAndReverse(arr: number[]): number[] {\n    arr.sort((a, b) => a - b)  // Bug: sort mutates the original array\n    return arr.reverse()  // Bug: also mutates\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "const copy = [...arr]; copy.sort(...); return copy.reverse();"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-4-floating-point-precision",
      children: "Example 4: Floating Point Precision"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function calculateTotal(prices: number[]): number {\n    let total = 0\n    for (const price of prices) {\n        total += price  // Bug: 0.1 + 0.2 = 0.30000000000000004\n    }\n    return total  // Should round to 2 decimal places\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "return Math.round(total * 100) / 100;"
      }), " or use integer arithmetic (cents)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-5-async-timing-bug",
      children: "Example 5: Async Timing Bug"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function processItems(items: string[]): Promise<void> {\n    let results: string[] = []\n    items.forEach(async (item) => {  // Bug: async callback in forEach, results not awaited\n        const processed = await processItem(item)\n        results.push(processed)\n    })\n    // Bug: at this point, results is still empty\n    saveResults(results)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "for...of"
      }), " with await, or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Promise.all"
      }), " with map:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function processItems(items: string[]): Promise<void> {\n    const results = await Promise.all(items.map((item) => processItem(item)))\n    saveResults(results)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-6-type-coercion",
      children: "Example 6: Type Coercion"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function countOccurrences(arr: any[]): Record<string, number> {\n    const counts: Record<string, number> = {}\n    for (const item of arr) {\n        if (counts[item]) {  // Bug: if counts[item] is 0, this is falsy\n            counts[item]++\n        } else {\n            counts[item] = 1\n        }\n    }\n    return counts\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Bug: when ", (0,jsx_runtime.jsx)(_components.code, {
        children: "counts[item]"
      }), " is 0 (falsy), it incorrectly sets to 1 instead of incrementing. Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "if (counts[item] !== undefined)"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-7-closure-in-loop",
      children: "Example 7: Closure in Loop"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function createCallbacks(): (() => void)[] {\n    const callbacks: (() => void)[] = []\n    for (var i = 0; i < 5; i++) {  // Bug: var has function scope, not block scope\n        callbacks.push(() => console.log(i))  // All log 5 (the final value of i)\n    }\n    return callbacks\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "let i = 0"
      }), " (block scope) or an IIFE closure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-8-off-by-one-in-binary-search",
      children: "Example 8: Off-by-One in Binary Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function binarySearch(arr: number[], target: number): number {\n    let left = 0\n    let right = arr.length - 1\n    while (left < right) {  // Bug: should be left <= right, misses when target is at mid and left===right\n        const mid = Math.floor((left + right) / 2)\n        if (arr[mid] === target) return mid\n        if (arr[mid] < target) left = mid + 1\n        else right = mid - 1\n    }\n    return -1  // Bug: never checks if arr[left] === target when left === right\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while (left <= right)"
      }), " or add a check after the loop for arr[left] === target."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-9-shared-mutable-state",
      children: "Example 9: Shared Mutable State"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const cache: Map<string, number> = new Map()\n\nfunction expensiveComputation(key: string): number {\n    if (cache.has(key)) return cache.get(key)!\n    const result = doHeavyWork(key)  // Bug: async operation not awaited\n    cache.set(key, result)\n    return result\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fix: Use async/await properly and handle concurrent requests for the same key with a pending promise map."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-10-deep-equality",
      children: "Example 10: Deep Equality"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function areEqual(a: object, b: object): boolean {\n    return a === b  // Bug: checks reference equality, not deep equality\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Fix: Implement recursive deep equality or use JSON.stringify for simple cases: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JSON.stringify(a) === JSON.stringify(b)"
      }), " (does not handle all types)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "code-review-simulation",
      children: "Code Review Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-1-api-endpoint",
      children: "Review 1: API Endpoint"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "app.post('/api/users', async (req, res) => {\n    const user = req.body\n    const saved = await db.save(user)\n    res.status(201).json(saved)\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Issues found:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Missing input validation (", (0,jsx_runtime.jsx)(_components.code, {
          children: "req.body"
        }), " could be malformed)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No error handling (if db.save throws, the endpoint crashes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Missing rate limiting (no protection against abuse)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No logging of the request"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No idempotency check (repeated requests create duplicate users)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No response type specification"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fixed version:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "app.post('/api/users', rateLimit(100, 60000), async (req, res, next) => {\n    try {\n        const validation = validateUserSchema(req.body)\n        if (!validation.valid) {\n            return res.status(400).json({ error: validation.errors })\n        }\n        const existing = await db.findByEmail(req.body.email)\n        if (existing) return res.status(409).json({ error: 'User exists' })\n        const saved = await db.save(req.body)\n        logger.info(`User created: ${saved.id}`)\n        res.status(201).json(saved)\n    } catch (error) {\n        next(error)\n    }\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-2-file-processing",
      children: "Review 2: File Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "function processFile(filename: string): string[] {\n    const data = fs.readFileSync(filename)\n    const lines = data.split('\\\\n')\n    return lines.filter((l) => l.trim() !== '')\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Issues found:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synchronous file reading blocks event loop for large files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No error handling for missing file or permissions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assumes UTF-8 encoding (does not specify)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Memory-inefficient for large files (loads entire file)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Does not trim whitespace from individual lines"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Recommended fix: use streaming or async read with encoding specified."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-3-database-query",
      children: "Review 3: Database Query"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function getOrders(userId: string): Promise<Order[]> {\n    const result = await db.query(\n        `SELECT * FROM orders WHERE user_id = ${userId}`  // SQL injection vulnerability\n    )\n    return result.rows\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fix: Use parameterized queries:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "async function getOrders(userId: string): Promise<Order[]> {\n    const result = await db.query(\n        'SELECT * FROM orders WHERE user_id = $1', [userId]\n    )\n    return result.rows\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-debugging-techniques",
      children: "Advanced Debugging Techniques"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rubber duck debugging"
      }), ": explain the code line by line to an imaginary listener. The act of verbalizing often reveals the bug."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Binary search debugging"
      }), ": comment out half the code. If the bug persists, it is in the other half. Repeat to isolate."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Print statement strategy"
      }), ": add console.log at each step showing input, output, and intermediate values. Compare against expectations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Invariant checking"
      }), ": assert conditions that must be true at each step (e.g., 'stack is non-empty before pop'). If an assertion fails, you found the bug."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Diff debugging"
      }), ": compare broken code with a known working version. The difference is likely the bug."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-typescript-pitfalls",
      children: "Common TypeScript Pitfalls"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "== vs ===: always use === (strict equality). == coerces types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Array.sort() sorts in-place as strings by default: [1, 2, 10].sort() returns [1, 10, 2]"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ypeof null === 'object': check === null explicitly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NaN !== NaN: use Number.isNaN() to check"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Floating point: \toFixed(2) returns a string, use Math.round(n * 100) / 100"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "map without return: arr.map(x => x * 2) returns a new array, but if you forget the return in {}, it returns undefined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "filter(Boolean) removes falsy values including 0 and empty strings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {}), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "educe without initial value: errors on empty arrays\n9. const does not make objects/arrays immutable\n10. Promise.all fails fast: one rejection rejects the entire promise"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "debugging-async-code",
      children: "Debugging Async Code"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Async bugs are the hardest to find because they are non-deterministic. Patterns to watch for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Race condition"
      }), ": two operations depend on shared state and can interleave.\nFix: use locks, transactions, or deterministic ordering."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Missing await"
      }), ": function returns a Promise instead of the resolved value.\nFix: ensure all async functions are awaited. Use TypeScript compiler to catch unhandled promises."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stale closure"
      }), ": async callback captures a variable that changes before the callback runs.\nFix: copy the variable into the closure scope or use let (block scope)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Promise.all error swallowing"
      }), ": unhandled promise rejections are silently ignored in older Node versions.\nFix: always add .catch to promises or use try/catch with await."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-review-anti-patterns",
      children: "Code Review Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "What NOT to do in a code review:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Nitpicking style: focus on logic bugs, not formatting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Assuming intent: ask clarifying questions instead of assuming the author meant something else"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reviewing too fast: take at least 5-10 minutes per 100 lines of complex code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ignoring tests: if there are no tests, that is the first issue to raise"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rubber stamping: approving without reading is worse than being strict"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal attacks: review the code, not the person"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-code-review-example",
      children: "Real-World Code Review Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reviewing a caching function:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "const cache: { [key: string]: any } = {}\n\nasync function getData(url: string): Promise<any> {\n    if (cache[url]) {\n        return cache[url]\n    }\n    const response = await fetch(url)\n    const data = await response.json()\n    cache[url] = data\n    return data\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Issues:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "cache[url] could be a falsy value (0, false, empty string) that gets incorrectly treated as a cache miss. Use url in cache or cache.hasOwnProperty(url)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Concurrent requests for the same URL both miss the cache and fire duplicate fetches. Use a pending promise map."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No error handling: if fetch fails, the cache is not populated, but the error is returned anyway."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No cache invalidation: data is cached forever. Add TTL."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No types: using any loses type safety."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cache is global and persists for the lifetime of the process. Could cause memory leaks."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Fixed version:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CacheEntry<T> {\n    data: T\n    expiresAt: number\n}\n\nconst cache: Map<string, CacheEntry<any>> = new Map()\nconst pendingRequests: Map<string, Promise<any>> = new Map()\nconst TTL_MS = 5 * 60 * 1000\n\nasync function getData<T = any>(url: string): Promise<T> {\n    const cached = cache.get(url)\n    if (cached && cached.expiresAt > Date.now()) {\n        return cached.data\n    }\n\n    if (pendingRequests.has(url)) {\n        return pendingRequests.get(url)!\n    }\n\n    const promise = (async () => {\n        try {\n            const response = await fetch(url)\n            if (!response.ok) throw new Error('HTTP ' + response.status)\n            const data = await response.json()\n            cache.set(url, { data, expiresAt: Date.now() + TTL_MS })\n            return data\n        } finally {\n            pendingRequests.delete(url)\n        }\n    })()\n\n    pendingRequests.set(url, promise)\n    return promise\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Debugging and code review rounds test your ability to read code critically under time pressure. Use a systematic checklist: off-by-one errors,.\nnull references, mutation, async timing, type coercion, edge cases. In code reviews, evaluate correctness, performance, readability, testability, security, and error handling. Communicate findings constructively: start positive,.\nstate evidence, suggest specific fixes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Practice reading code without running it. Find bugs by tracing execution in your head"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For every loop, check the boundary conditions: empty, single element, two elements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Every null check is a potential bug if missing. Be paranoid about null/undefined"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Async code is the most common source of bugs in modern TypeScript: always check if a function is async and whether await is used"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mutation bugs are subtle: when a function takes an array/object, ask \"does it modify the input?\""
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In code reviews, look for SQL injection, unsanitized user input, hardcoded secrets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always check error handling: what happens when a database call fails? When a file is missing? When an API returns 500?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: What systematic checklist do you apply when debugging buggy code in an interview?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Work through categories in order: off-by-one errors (loop bounds ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<="
          }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<"
          }), "), null/undefined references, type coercion, mutation of input data, async timing (missing awaits, races), edge cases (empty, single element, negatives), integer overflow (JavaScript safe integer 2^53, bitwise 32-bit truncation), and floating point precision (0.1 + 0.2 != 0.3, use epsilon)."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Process-wise: reproduce the bug, read the error trace, form a hypothesis, isolate with logs, then fix and verify tests plus edge cases. When no debugger is available, trace execution by hand — the chapter's 10 buggy examples (array index, null reference, mutation, closure-in-loop, binary search off-by-one) are the exact patterns interviewers plant."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Which two bug classes do you check first in async TypeScript code?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Find the bugs in this code: a missing-number function and a string charAt call.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["First example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for (let i = 0; i <= n; i++)"
          }), " sums through n instead of 1..n, so the total includes an extra number — the fix is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "i < n"
          }), " or ", (0,jsx_runtime.jsx)(_components.code, {
            children: "i = 1; i <= n"
          }), ". Second example: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str.charAt(0)"
          }), " throws when ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str"
          }), " is null — fix with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "str?.charAt(0) ?? ''"
          }), " or an explicit guard."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "These are the two most common planted bugs: boundary conditions and null dereferences. The pattern: for every loop ask \"what happens at the first and last iteration?\", and for every value that can be null ask \"what happens when it is?\" The chapter's debugging checklist encodes both."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr[arr.length]"
          }), " ever valid, and what does it return?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "items.forEach(async ...)"
        }), " fail, and what is the correct pattern?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "forEach"
          }), " does not await its callbacks — it fires them and returns immediately, so the code after the loop runs before any processing finishes, and the results array is still empty. The chapter's Example 5 shows ", (0,jsx_runtime.jsx)(_components.code, {
            children: "saveResults(results)"
          }), " running with an empty array."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Correct patterns: sequential execution with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "for...of"
          }), " plus ", (0,jsx_runtime.jsx)(_components.code, {
            children: "await"
          }), " when order matters, or parallel with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise.all(items.map(...))"
          }), " when it does not. Related async bugs to hunt: missing await on an async function, stale closures capturing loop variables (fix with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "let"
          }), "), and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise.all"
          }), " failing fast on the first rejection."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": When would you choose ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise.allSettled"
          }), " over ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Promise.all"
          }), "?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q4: Explain mutation and floating point bugs, with fixes.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Mutation: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr.sort()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr.reverse()"
          }), " modify the input array in place, so a function that sorts-and-reverses silently corrupts the caller's data. Fix: copy first — ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[...arr].sort()"
          }), ". Shared mutable state is the same class of bug: a module-level cache mutated from async code creates races."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Floating point: 0.1 + 0.2 === 0.30000000000000004, never exactly 0.3, because binary fractions cannot represent decimal tenths. Money must use integer cents or round with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Math.round(total * 100) / 100"
          }), "; comparisons use an epsilon. The chapter's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "calculateTotal"
          }), " example demonstrates the exact failure."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": When is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JSON.stringify"
          }), " deep equality wrong for object comparison?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q5: Spot the issue in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SELECT * FROM orders WHERE user_id = ${userId}"
        }), " and explain the fix.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["String-interpolating ", (0,jsx_runtime.jsx)(_components.code, {
            children: "userId"
          }), " into SQL creates an injection vulnerability: input like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "1; DROP TABLE orders; --"
          }), " executes arbitrary SQL. The chapter's Review 3 flags this as the top security finding."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Fix with parameterized queries: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "db.query('SELECT * FROM orders WHERE user_id = $1', [userId])"
          }), ". Parameterized statements separate data from structure, so input can never be parsed as SQL. The same review checklist catches unsanitized user input and hardcoded secrets as adjacent findings."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": Does escaping quotes fully protect against SQL injection? Why not?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "m21-s18-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q6: How do you communicate code review findings so the author listens?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Tone matters as much as findings. The chapter prescribes: start with positive observations (\"the overall structure is clean\"), state each finding with evidence and location (\"line 12 has a potential null reference when input is empty\"), suggest specific fixes (\"a guard clause here\"), and ask questions rather than dictate (\"does this handle x being null?\")."
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Anti-patterns to avoid: nitpicking style instead of logic bugs, assuming intent, reviewing too fast (5-10 minutes per 100 lines), ignoring the absence of tests, rubber-stamping, and personal attacks — review the code, not the person."
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Interview follow-up"
          }), ": How do you escalate when the author disagrees with a critical security finding?"]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "📝 Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In TypeScript, what does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "arr.sort()"
          }), " return?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) A new sorted array"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The same array sorted in place"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) undefined"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) void\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the result of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "0.1 + 0.2 === 0.3"
          }), " in JavaScript?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) true"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) false"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) undefined"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) NaN\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Which loop construct correctly handles async operations sequentially?"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) arr.forEach(async (item) => ...)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) for (const item of arr) { await process(item) }"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) arr.map(async (item) => ...)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) setTimeout(async () => ..., 0)\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "A SQL injection vulnerability occurs when:"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The database is not indexed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) User input is concatenated directly into SQL queries"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The database connection pool is too small"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Queries use parameterized statements\n// correct: B"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "typeof null"
          }), " return in JavaScript?"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) null"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) undefined"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) object"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) boolean\n// correct: C"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h1, {
      id: ""
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Implement a basic debugging code review example that demonstrates the core concept."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Create a more complex implementation that handles edge cases."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Design an optimized solution for large-scale debugging code review scenarios."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not understanding the fundamental concepts before applying them"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Skipping edge cases in implementation"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not analyzing time/space complexity"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Forgetting to handle null/empty inputs"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Not practicing enough problems to build pattern recognition# Exercises"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Find the bug in this function: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "function sumEven(arr: number[]): number { return arr.filter(n => n % 2 === 0).reduce((a, b) => a + b) }"
          }), " (Hint: what happens with an empty array after filtering?)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Review this code and list 5 issues: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "app.get('/data', async (req, res) => { const data = await fetch(req.query.url); res.send(data) })"
          })]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Debug this async function: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "async function getFirst(items: string[]): string { items.forEach(async i => { const r = await fetch(i); return r }) }"
          }), " (There are 3 bugs.)"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Write a function that deep clones an object without using JSON.parse(JSON.stringify(obj)) and identify what edge cases your implementation does not"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "revision-notes",
      children: "Revision Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Core principle: Understand the fundamental concepts thoroughly"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implementation pattern: Practice with real code examples"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complexity: Know the time and space complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Application: Know when to use this in production systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Interview: Frequently asked in technical interviews"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Edge cases: Consider common failure scenarios"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Related concepts: Connect to broader system design"
          }), "\n"]
        }), "\n"]
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
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the time and space trade-offs of 21-interview-preparation. When would you choose one approach over another?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a system that efficiently handles 21-interview-preparation at scale (millions of requests/second)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "amazon-style",
      children: "Amazon Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tell me about a time you had to optimize a system related to 21-interview-preparation. What was your approach and what was the result?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you explain 21-interview-preparation to a non-technical stakeholder?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "microsoft-style",
      children: "Microsoft Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does 21-interview-preparation integrate with enterprise systems and cloud architectures?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the security implications of 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "nvidia-style",
      children: "NVIDIA Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you optimize 21-interview-preparation for GPU-accelerated computing?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What parallel processing patterns apply to 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "ai-startup-style",
      children: "AI Startup Style"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you implement 21-interview-preparation in a cost-effective, scalable way for a startup?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What's the fastest way to prototype a solution using 21-interview-preparation?"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Skills"
        }), ": List 21-interview-preparation under relevant technical skills"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Project Description"
        }), ": \"Implemented 21-interview-preparation to [specific outcome], reducing [metric] by [X]%\""]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Keywords"
        }), ": Include 21-interview-preparation in your skills section for ATS optimization"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Review core concepts of 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Practice 3-5 problems related to 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Prepare 2 real-world examples of using 21-interview-preparation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Know the time/space complexity of common 21-interview-preparation operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Have questions ready about how the company uses 21-interview-preparation handle."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "truefalse",
      children: "True/False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Debugging and Code Review builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for Debugging and Code Review before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for Debugging and Code Review is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for Debugging and Code Review in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the Debugging and Code Review chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers Debugging and Code Review is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to Debugging and Code Review is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing Debugging and Code Review is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug Debugging and Code Review issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to Debugging and Code Review in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving Debugging and Code Review that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of Debugging and Code Review is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain Debugging and Code Review in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for Debugging and Code Review and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of Debugging and Code Review on an empty input?"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level"
      }), ": Intermediate\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Estimated Study Time"
      }), ": 30-45 minutes\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisites"
      }), ": Complete understanding of previous modules recommended"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "tips--tricks",
      children: "Tips & Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Start with the basics — understand the fundamental concepts before moving to advanced topics."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Practice actively — don't just read, implement the code examples yourself."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Tip"
      }), ": Connect to prior knowledge — relate new concepts to what you learned in previous modules."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Focus on understanding, not memorizing — understand why things work, not just how."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pro Tip"
      }), ": Review regularly — revisit key concepts after a few days to reinforce learning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym Method"
        }), ": Create acronyms for lists of concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visualization"
        }), ": Draw diagrams to visualize abstract concepts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach someone else"
        }), ": Explaining concepts to others reinforces your understanding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Connect to real-world"
        }), ": Relate technical concepts to everyday experiences"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chunking"
        }), ": Break complex topics into smaller, manageable pieces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation and language specifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"Designing Data-Intensive Applications\" by Martin Kleppmann"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"System Design Interview\" by Alex Xu"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "\"AI Engineering\" by Chip Huyen"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers and blog posts from leading AI labs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How this connects to Interview Preparation fundamentals"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prerequisites for advanced topics in this module"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world applications in AI engineering systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview questions that test deep understanding"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How long does it take to master debugging code review?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: Do I need to memorize all the details?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Focus on understanding the core principles. Details can be looked up, but understanding cannot."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: What's the best way to practice?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Implement the code examples, then modify them to solve different problems. Build small projects."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["**Q: How often should I review this material?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A"
      }), ": Review after 1 day, 3 days, 1 week, and 1 month for long-term retention."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Understanding the fundamentals is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": Don't skip the exercises — they reinforce critical concepts."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": This topic frequently appears in technical interviews at top companies."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Note"
        }), ": In real systems, these concepts are used daily by AI engineers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "historical-context",
      children: "Historical Context"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Evolution of this technology reflects decades of research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding the evolution of debugging code review helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Input Validation"
        }), ": Always validate and sanitize inputs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Don't expose internal details in error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource Limits"
        }), ": Set appropriate limits to prevent denial of service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Authentication"
        }), ": Ensure proper authentication and authorization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Protection"
        }), ": Handle sensitive data according to security best practices"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For AI engineering, understanding debugging code review at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Think of debugging code review like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "capstone-project-link",
      children: "Capstone Project Link"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Project"
      }), ": Apply debugging code review concepts in a mini-project\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Goal"
      }), ": Build a small application that demonstrates understanding of core principles\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Duration"
      }), ": 2-4 hours\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Outcome"
      }), ": Working implementation with documentation"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 1"
      }), ": What is the core concept of debugging code review?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": The fundamental principle that enables efficient and scalable systems."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 2"
      }), ": When would you apply debugging code review in real systems?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": When building production AI systems that require reliability, scalability, and maintainability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Card 3"
      }), ": What are the common pitfalls to avoid?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer"
      }), ": Over-engineering, ignoring edge cases, and not considering production requirements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Academic papers and conference proceedings (NeurIPS, ICML, ICLR)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Industry whitepapers from leading AI companies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Technical blogs from Google, Meta, OpenAI, Anthropic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source implementations and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LangChain"
        }), ": Framework for building LLM-powered applications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LlamaIndex"
        }), ": Data framework for connecting LLMs with external data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hugging Face Transformers"
        }), ": State-of-the-art ML models and datasets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weights & Biases"
        }), ": Experiment tracking and model evaluation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "MLflow"
        }), ": Open-source platform for ML lifecycle management"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prometheus + Grafana"
        }), ": Monitoring and observability stack"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Common Issues"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check input validation and data types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify API keys and authentication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor resource usage (CPU, memory, GPU)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review error logs for stack traces"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Debugging Steps"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce the issue with minimal input"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add logging at key points"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check external dependencies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify configuration settings"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test with known-good inputs"
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
        children: "Explain Debugging and Code Review in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of Debugging and Code Review."
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
        children: "Tell me about a time you debugged a Debugging and Code Review problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where Debugging and Code Review is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Debugging and Code Review."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Debugging and Code Review logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Model Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accuracy, Precision, Recall, F1-Score"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLEU, ROUGE for text generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency, Throughput, Cost per inference"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "System Evaluation"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "End-to-end latency (p50, p95, p99)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate and availability"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resource utilization (CPU, memory, GPU)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "real-world-examples",
      children: "Real-World Examples"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Industry Applications"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Google: Search ranking, translation, autocomplete"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon: Product recommendations, Alexa, fraud detection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Netflix: Content recommendations, personalization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tesla: Autonomous driving, computer vision"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "OpenAI: ChatGPT, DALL-E, Codex"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After mastering Interview Preparation, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every approach has trade-offs. Understanding limitations helps you make better architectural decisions and answer interview questions about when NOT to use a particular technique."
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