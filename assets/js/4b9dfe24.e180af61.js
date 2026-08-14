"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81187],{

/***/ 96567
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_c_programming_06_arrays_md_4b9_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-c-programming-06-arrays-md-4b9.json
const site_docs_courses_c_programming_06_arrays_md_4b9_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/c-programming/06-arrays","title":"Chapter 6: Arrays","description":"Previous Strings","source":"@site/docs/courses/c-programming/06-arrays.md","sourceDirName":"courses/c-programming","slug":"/c-programming/06-arrays","permalink":"/ai-engineering-journey/c-programming/06-arrays","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"id":"06-arrays","slug":"/c-programming/06-arrays","title":"Chapter 6: Arrays","sidebar_label":"Chapter 6: Arrays","sidebar_position":6},"sidebar":"course-c-programming","previous":{"title":"Chapter 5: Loops (Comprehensive)","permalink":"/ai-engineering-journey/c-programming/05-loops"},"next":{"title":"Chapter 7: Strings","permalink":"/ai-engineering-journey/c-programming/07-strings"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/c-programming/06-arrays.md


const frontMatter = {
	id: '06-arrays',
	slug: '/c-programming/06-arrays',
	title: 'Chapter 6: Arrays',
	sidebar_label: 'Chapter 6: Arrays',
	sidebar_position: 6
};
const contentTitle = 'Chapter 6: Arrays';

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
  "value": "6.1 Array Declaration &amp; Initialization",
  "id": "61-array-declaration--initialization",
  "level": 2
}, {
  "value": "6.1.1 Declaration Syntax",
  "id": "611-declaration-syntax",
  "level": 3
}, {
  "value": "6.1.2 Initialization Forms",
  "id": "612-initialization-forms",
  "level": 3
}, {
  "value": "6.1.3 Designated Initializers (C99)",
  "id": "613-designated-initializers-c99",
  "level": 3
}, {
  "value": "6.1.4 Dry Run — Memory Layout Trace",
  "id": "614-dry-run--memory-layout-trace",
  "level": 3
}, {
  "value": "6.1.5 Complexity Analysis",
  "id": "615-complexity-analysis",
  "level": 3
}, {
  "value": "6.1.6 Edge Cases",
  "id": "616-edge-cases",
  "level": 3
}, {
  "value": "6.2 Accessing Elements (Indexing)",
  "id": "62-accessing-elements-indexing",
  "level": 2
}, {
  "value": "6.2.1 The Indexing Contract",
  "id": "621-the-indexing-contract",
  "level": 3
}, {
  "value": "6.2.2 Code Example — Read and Write",
  "id": "622-code-example--read-and-write",
  "level": 3
}, {
  "value": "6.2.3 Dry Run — Index Access Trace",
  "id": "623-dry-run--index-access-trace",
  "level": 3
}, {
  "value": "6.2.4 Complexity Analysis",
  "id": "624-complexity-analysis",
  "level": 3
}, {
  "value": "6.2.5 Edge Cases",
  "id": "625-edge-cases",
  "level": 3
}, {
  "value": "6.3 One-Dimensional Arrays",
  "id": "63-one-dimensional-arrays",
  "level": 2
}, {
  "value": "6.3.1 Declaration and Traversal",
  "id": "631-declaration-and-traversal",
  "level": 3
}, {
  "value": "6.3.2 Dry Run — Max Search",
  "id": "632-dry-run--max-search",
  "level": 3
}, {
  "value": "6.3.3 Complexity Analysis",
  "id": "633-complexity-analysis",
  "level": 3
}, {
  "value": "6.3.4 One-Sentence Takeaway",
  "id": "634-one-sentence-takeaway",
  "level": 3
}, {
  "value": "6.4 Array of Pointers",
  "id": "64-array-of-pointers",
  "level": 2
}, {
  "value": "6.4.1 Code Example — Array of String Pointers",
  "id": "641-code-example--array-of-string-pointers",
  "level": 3
}, {
  "value": "6.4.2 Array of Pointers to Integers",
  "id": "642-array-of-pointers-to-integers",
  "level": 3
}, {
  "value": "6.4.3 Memory Layout — Array of Pointers",
  "id": "643-memory-layout--array-of-pointers",
  "level": 3
}, {
  "value": "6.4.4 A&amp;D Table",
  "id": "644-ad-table",
  "level": 3
}, {
  "value": "6.4.5 Edge Cases",
  "id": "645-edge-cases",
  "level": 3
}, {
  "value": "6.5 Pointer to an Array",
  "id": "65-pointer-to-an-array",
  "level": 2
}, {
  "value": "6.5.1 Code Example",
  "id": "651-code-example",
  "level": 3
}, {
  "value": "6.5.2 Pointer to Array for 2D Access",
  "id": "652-pointer-to-array-for-2d-access",
  "level": 3
}, {
  "value": "6.5.3 Complexity Analysis",
  "id": "653-complexity-analysis",
  "level": 3
}, {
  "value": "6.5.4 Edge Cases",
  "id": "654-edge-cases",
  "level": 3
}, {
  "value": "6.6 Two-Dimensional Arrays (Row-Major vs Column-Major)",
  "id": "66-two-dimensional-arrays-row-major-vs-column-major",
  "level": 2
}, {
  "value": "6.6.1 Declaration and Initialization",
  "id": "661-declaration-and-initialization",
  "level": 3
}, {
  "value": "6.6.2 Memory Layout — Row-Major",
  "id": "662-memory-layout--row-major",
  "level": 3
}, {
  "value": "6.6.3 Row-Major Address Calculation — Dry Run",
  "id": "663-row-major-address-calculation--dry-run",
  "level": 3
}, {
  "value": "6.6.4 Column-Major Layout (for comparison)",
  "id": "664-column-major-layout-for-comparison",
  "level": 3
}, {
  "value": "6.6.5 2D Arrays as Function Parameters",
  "id": "665-2d-arrays-as-function-parameters",
  "level": 3
}, {
  "value": "6.6.6 2D Array A&amp;D Table",
  "id": "666-2d-array-ad-table",
  "level": 3
}, {
  "value": "6.6.7 Complexity Analysis",
  "id": "667-complexity-analysis",
  "level": 3
}, {
  "value": "6.6.8 Edge Cases",
  "id": "668-edge-cases",
  "level": 3
}, {
  "value": "6.6.9 Cache Performance — Row vs Column Iteration",
  "id": "669-cache-performance--row-vs-column-iteration",
  "level": 3
}, {
  "value": "6.7 Three-Dimensional Arrays (3D)",
  "id": "67-three-dimensional-arrays-3d",
  "level": 2
}, {
  "value": "6.7.1 Declaration and Access",
  "id": "671-declaration-and-access",
  "level": 3
}, {
  "value": "6.7.2 3D Address Calculation — Dry Run",
  "id": "672-3d-address-calculation--dry-run",
  "level": 3
}, {
  "value": "6.7.3 Complexity of Iteration",
  "id": "673-complexity-of-iteration",
  "level": 3
}, {
  "value": "6.7.4 A&amp;D Table",
  "id": "674-ad-table",
  "level": 3
}, {
  "value": "6.8 Arrays and Functions (Passing to Functions)",
  "id": "68-arrays-and-functions-passing-to-functions",
  "level": 2
}, {
  "value": "6.8.1 Array Decay — The Fundamental Rule",
  "id": "681-array-decay--the-fundamental-rule",
  "level": 3
}, {
  "value": "6.8.2 Modifying Arrays Through Functions",
  "id": "682-modifying-arrays-through-functions",
  "level": 3
}, {
  "value": "6.8.3 Pass by Value vs Pass by Reference for Arrays",
  "id": "683-pass-by-value-vs-pass-by-reference-for-arrays",
  "level": 3
}, {
  "value": "6.8.4 Passing 2D Arrays to Functions",
  "id": "684-passing-2d-arrays-to-functions",
  "level": 3
}, {
  "value": "6.8.5 Complexity Analysis",
  "id": "685-complexity-analysis",
  "level": 3
}, {
  "value": "6.8.6 Edge Cases",
  "id": "686-edge-cases",
  "level": 3
}, {
  "value": "6.9 Variable-Length Arrays (VLA, C99)",
  "id": "69-variable-length-arrays-vla-c99",
  "level": 2
}, {
  "value": "6.9.1 Basic VLA Usage",
  "id": "691-basic-vla-usage",
  "level": 3
}, {
  "value": "6.9.2 VLA with <code>sizeof</code>",
  "id": "692-vla-with-sizeof",
  "level": 3
}, {
  "value": "6.9.3 VLA — Pros and Cons",
  "id": "693-vla--pros-and-cons",
  "level": 3
}, {
  "value": "6.9.4 VLA Stack Overflow Example",
  "id": "694-vla-stack-overflow-example",
  "level": 3
}, {
  "value": "6.9.5 VLA for 2D Function Parameters (C99 clean style)",
  "id": "695-vla-for-2d-function-parameters-c99-clean-style",
  "level": 3
}, {
  "value": "6.9.6 Complexity Analysis",
  "id": "696-complexity-analysis",
  "level": 3
}, {
  "value": "6.9.7 Edge Cases",
  "id": "697-edge-cases",
  "level": 3
}, {
  "value": "6.10 Array Bounds and Bounds Checking",
  "id": "610-array-bounds-and-bounds-checking",
  "level": 2
}, {
  "value": "6.10.1 The Core Problem",
  "id": "6101-the-core-problem",
  "level": 3
}, {
  "value": "6.10.2 Dry Run — Buffer Overflow Trace",
  "id": "6102-dry-run--buffer-overflow-trace",
  "level": 3
}, {
  "value": "6.10.3 Safe Access Pattern",
  "id": "6103-safe-access-pattern",
  "level": 3
}, {
  "value": "6.10.4 Complexity Analysis",
  "id": "6104-complexity-analysis",
  "level": 3
}, {
  "value": "6.10.5 Historical Impact",
  "id": "6105-historical-impact",
  "level": 3
}, {
  "value": "6.11 String vs Char Array",
  "id": "611-string-vs-char-array",
  "level": 2
}, {
  "value": "6.11.1 The Fundamental Difference",
  "id": "6111-the-fundamental-difference",
  "level": 3
}, {
  "value": "6.11.2 String vs Char Array — Comparison Table",
  "id": "6112-string-vs-char-array--comparison-table",
  "level": 3
}, {
  "value": "6.11.3 Common Pitfall — Buffer Overflow with Strings",
  "id": "6113-common-pitfall--buffer-overflow-with-strings",
  "level": 3
}, {
  "value": "6.11.4 Complexity Analysis",
  "id": "6114-complexity-analysis",
  "level": 3
}, {
  "value": "6.12 Array Decay to Pointer",
  "id": "612-array-decay-to-pointer",
  "level": 2
}, {
  "value": "6.12.1 When Decay Happens",
  "id": "6121-when-decay-happens",
  "level": 3
}, {
  "value": "6.12.2 When Decay Does NOT Happen",
  "id": "6122-when-decay-does-not-happen",
  "level": 3
}, {
  "value": "6.13 Comparison Tables",
  "id": "613-comparison-tables",
  "level": 2
}, {
  "value": "6.13.1 Array vs Pointer Comparison",
  "id": "6131-array-vs-pointer-comparison",
  "level": 3
}, {
  "value": "6.13.2 Array Not Assignable",
  "id": "6132-array-not-assignable",
  "level": 3
}, {
  "value": "6.13.3 1D vs 2D vs 3D Arrays",
  "id": "6133-1d-vs-2d-vs-3d-arrays",
  "level": 3
}, {
  "value": "6.13.4 Row-major vs Column-major",
  "id": "6134-row-major-vs-column-major",
  "level": 3
}, {
  "value": "6.13.5 <code>sizeof</code> Array vs Pointer",
  "id": "6135-sizeof-array-vs-pointer",
  "level": 3
}, {
  "value": "6.13.6 VLA Pros/Cons",
  "id": "6136-vla-proscons",
  "level": 3
}, {
  "value": "6.13.7 Static 2D Array Parameter",
  "id": "6137-static-2d-array-parameter",
  "level": 3
}, {
  "value": "6.14 Interview Corner",
  "id": "614-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between an array and a pointer?",
  "id": "q1-what-is-the-difference-between-an-array-and-a-pointer",
  "level": 3
}, {
  "value": "Q2: Why can&#39;t arrays be assigned?",
  "id": "q2-why-cant-arrays-be-assigned",
  "level": 3
}, {
  "value": "Q3: What does <code>sizeof(arr) / sizeof(arr[0])</code> compute?",
  "id": "q3-what-does-sizeofarr--sizeofarr0-compute",
  "level": 3
}, {
  "value": "Q4: What are the pros and cons of VLAs?",
  "id": "q4-what-are-the-pros-and-cons-of-vlas",
  "level": 3
}, {
  "value": "Q5: How does <code>int a[][4]</code> differ from <code>int *a[4]</code> in a function parameter?",
  "id": "q5-how-does-int-a4-differ-from-int-a4-in-a-function-parameter",
  "level": 3
}, {
  "value": "Q6: What is array decay and when does it happen?",
  "id": "q6-what-is-array-decay-and-when-does-it-happen",
  "level": 3
}, {
  "value": "Q7: Can you have a negative index in C?",
  "id": "q7-can-you-have-a-negative-index-in-c",
  "level": 3
}, {
  "value": "Q8: How do you prevent buffer overflow in C?",
  "id": "q8-how-do-you-prevent-buffer-overflow-in-c",
  "level": 3
}, {
  "value": "6.15 Applications in Real Systems",
  "id": "615-applications-in-real-systems",
  "level": 2
}, {
  "value": "6.15.1 Image Processing Using 2D Arrays",
  "id": "6151-image-processing-using-2d-arrays",
  "level": 3
}, {
  "value": "6.15.2 Matrix Math (3×3 Transformations)",
  "id": "6152-matrix-math-33-transformations",
  "level": 3
}, {
  "value": "6.15.3 Real-World Array Usage Summary",
  "id": "6153-real-world-array-usage-summary",
  "level": 3
}, {
  "value": "Quick Reference",
  "id": "quick-reference",
  "level": 2
}, {
  "value": "Common Pitfalls — Checklist",
  "id": "common-pitfalls--checklist",
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
    input: "input",
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
        id: "chapter-6-arrays",
        children: "Chapter 6: Arrays"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/05-loops",
          children: "Loops"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/c-programming/07-strings",
          children: "Strings"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Declare and initialize one-dimensional arrays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Access and modify array elements using indices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Work with two-dimensional and multidimensional arrays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass arrays to functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the relationship between arrays and memory layout"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between arrays and pointers with precision"
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
        href: "../../assets/images/lessons/c-programming/06-arrays/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/06-arrays/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/06-arrays/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/06-arrays/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/c-programming/06-arrays/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/c-programming/06-arrays/visual-explanation.png",
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
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Array Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous block of elements of the same type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array indices start at 0 and go to size-1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array Initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can be fully, partially, or zero-initialized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uninitialized elements in a partial list are zero-filled"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Accessing Elements"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[index]"
            }), " which is equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(arr + index)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No bounds checking — accessing out-of-bounds is undefined behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-dimensional Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays of arrays stored in row-major order"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Access ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[row][col]"
            }), " — inner index varies fastest"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays and Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays decay to pointers when passed to functions"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Pass the size separately since ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " on a parameter gives pointer size, not array size"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array of Pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array elements are pointer values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Useful for string tables and ragged arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single pointer targeting an entire array"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Key for 2D function parameters: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[N]"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-sized stack allocation (C99)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can cause stack overflow — watch the size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array Bounds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No runtime bounds checking in C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflows are the #1 security vulnerability in C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String vs Char Array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strings are null-terminated char arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not all char arrays are strings"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[\"6.1 Declaration & Init\"] --> B[\"6.2 Accessing Elements\"]\n    B --> C[\"6.3 1D Arrays\"]\n    C --> D[\"6.4 Array of Pointers\"]\n    D --> E[\"6.5 Pointer to Array\"]\n    E --> F[\"6.6 2D Arrays (Row-major)\"]\n    F --> G[\"6.7 3D Arrays\"]\n    G --> H[\"6.8 Arrays & Functions\"]\n    H --> I[\"6.9 VLA\"]\n    I --> J[\"6.10 Array Bounds\"]\n    J --> K[\"6.11 String vs Char Array\"]\n    K --> L[\"6.12 Array Decay\"]\n    L --> M[\"6.13 Comparison Tables\"]\n    M --> N[\"6.14 Applications\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/c-programming/ch06-arrays-strings.png",
        alt: "C Arrays and Strings Memory Layout"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "61-array-declaration--initialization",
      children: "6.1 Array Declaration & Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An array is a contiguous sequence of elements of the same type, stored in consecutive memory locations."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A hotel with numbered rooms on a single hallway. Room 101 (index 0), Room 102 (index 1), etc. Each room holds one guest (value). The hotel name is the array name; the room number is the index."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "611-declaration-syntax",
      children: "6.1.1 Declaration Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "type array_name[size];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps to declare an array:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose the element ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "type"
        }), " (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Choose the array ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "name"
        }), " (identifier)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Specify the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "size"
        }), " (number of elements) in square brackets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Optionally provide an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "initializer list"
        }), " in curly braces"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "DECLARE array_name AS type[size]\n// Memory allocated: size * sizeof(type) contiguous bytes\n\nINITIALIZE array_name = {value_0, value_1, ..., value_{size-1}}\n// Element at position i receives value_i\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "612-initialization-forms",
      children: "6.1.2 Initialization Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a[5] = {1, 2, 3, 4, 5};    /* full initialization */\n    int b[5] = {1, 2};              /* partial: b = {1, 2, 0, 0, 0} */\n    int c[] = {1, 2, 3, 4, 5};      /* size inferred: 5 elements */\n    int d[5] = {0};                  /* all elements set to 0 */\n    int e[5] = {1};                  /* e = {1, 0, 0, 0, 0} */\n\n    printf(\"Full init:      \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", a[i]);\n    printf(\"\\n\");\n\n    printf(\"Partial init:   \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", b[i]);\n    printf(\"\\n\");\n\n    printf(\"Inferred size:  \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", c[i]);\n    printf(\"\\n\");\n\n    printf(\"Zero init:      \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", d[i]);\n    printf(\"\\n\");\n\n    printf(\"Single init:    \");\n    for (int i = 0; i < 5; i++) printf(\"%d \", e[i]);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Full init:      1 2 3 4 5\nPartial init:   1 2 0 0 0\nInferred size:  1 2 3 4 5\nZero init:      0 0 0 0 0\nSingle init:    1 0 0 0 0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "613-designated-initializers-c99",
      children: "6.1.3 Designated Initializers (C99)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[10] = {[0] = 5, [4] = 10, [9] = 20};\n    /* arr = {5, 0, 0, 0, 10, 0, 0, 0, 0, 20} */\n\n    printf(\"Designated init:\\n\");\n    for (int i = 0; i < 10; i++) {\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Designated init:\narr[0] = 5\narr[1] = 0\narr[2] = 0\narr[3] = 0\narr[4] = 10\narr[5] = 0\narr[6] = 0\narr[7] = 0\narr[8] = 0\narr[9] = 20\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "614-dry-run--memory-layout-trace",
      children: "6.1.4 Dry Run — Memory Layout Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Declaration:  int arr[5] = {10, 20, 30, 40, 50};\nAssume &arr[0] = 0x1000, sizeof(int) = 4\n\nStep | Index | Address   | Value | Expression\n-----|-------|-----------|-------|-------------------\n1    | 0     | 0x1000    | 10    | arr[0] = 10\n2    | 1     | 0x1004    | 20    | arr[1] = 20\n3    | 2     | 0x1008    | 30    | arr[2] = 30\n4    | 3     | 0x100C    | 40    | arr[3] = 40\n5    | 4     | 0x1010    | 50    | arr[4] = 50\n\nAddress formula: &arr[i] = base_addr + i * sizeof(type)\n                 &arr[3] = 0x1000 + 3 * 4 = 0x100C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "615-complexity-analysis",
      children: "6.1.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single instruction reserves n × sizeof(type) bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler emits n store instructions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Partial initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remaining elements zero-filled — still O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Designated init"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unspecified positions zero-filled"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "616-edge-cases",
      children: "6.1.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x[0];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-length array — compiler extension (GCC), UB in standard C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GCC allows this as a struct hack; standard C forbids zero-size objects"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x[-1];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Size must be a positive integer constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x[1000000000];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too large for stack; use malloc for huge arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x[5] = {1,2,3,4,5,6};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time warning, excess elements ignored"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More initializers than array size — compiler warns"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int x[5] = { };"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-initializes all 5 elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty initializer list = {0, 0, 0, 0, 0}"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "62-accessing-elements-indexing",
      children: "6.2 Accessing Elements (Indexing)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A post office box wall. Box #0 is the first box. The key for box #i opens the (i)th box. If you try box #100 in a 50-box wall, you open someone else's locked drawer (undefined behavior — could be anything)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "621-the-indexing-contract",
      children: "6.2.1 The Indexing Contract"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps to access an element:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write the array name: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write the index in square brackets: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[i]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The compiler computes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "*(arr + i)"
        }), " — add ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i * sizeof(type)"
        }), " to base address"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The value at that address is returned (for read) or overwritten (for write)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "FUNCTION access(arr, index):\n    address = base_address(arr) + index * sizeof(element_type)\n    RETURN value_at(address)\n\nFUNCTION modify(arr, index, new_value):\n    address = base_address(arr) + index * sizeof(element_type)\n    set_value_at(address, new_value)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "622-code-example--read-and-write",
      children: "6.2.2 Code Example — Read and Write"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[5] = {0};  /* all zero */\n\n    /* Write elements */\n    arr[0] = 100;\n    arr[1] = 200;\n    arr[2] = 300;\n    arr[3] = 400;\n    arr[4] = 500;\n\n    /* Read and print using loop */\n    printf(\"Array contents:\\n\");\n    for (int i = 0; i < 5; i++) {\n        printf(\"arr[%d] = %d\\n\", i, arr[i]);\n    }\n\n    /* Demonstrate equivalence: arr[i] == *(arr + i) */\n    printf(\"\\nPointer arithmetic demonstration:\\n\");\n    for (int i = 0; i < 5; i++) {\n        printf(\"*(arr + %d) = %d  (same as arr[%d])\\n\", i, *(arr + i), i);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Array contents:\narr[0] = 100\narr[1] = 200\narr[2] = 300\narr[3] = 400\narr[4] = 500\n\nPointer arithmetic demonstration:\n*(arr + 0) = 100  (same as arr[0])\n*(arr + 1) = 200  (same as arr[1])\n*(arr + 2) = 300  (same as arr[2])\n*(arr + 3) = 400  (same as arr[3])\n*(arr + 4) = 500  (same as arr[4])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "623-dry-run--index-access-trace",
      children: "6.2.3 Dry Run — Index Access Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int arr[4] = {7, 14, 21, 28};\nAssume base address = 0x2000, sizeof(int) = 4\n\nAccess  | Expression   | Computed Address | Value\n--------|--------------|------------------|-------\nRead i0 | arr[0]       | 0x2000 + 0*4=0x2000 | 7\nRead i2 | arr[2]       | 0x2000 + 2*4=0x2008 | 21\nWrite   | arr[1] = 99  | 0x2000 + 1*4=0x2004 | 99 (stored)\nRead i1 | arr[1]       | 0x2000 + 1*4=0x2004 | 99\nBad     | arr[4]       | 0x2000 + 4*4=0x2010 | UNDEFINED (out of bounds)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "624-complexity-analysis",
      children: "6.2.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read arr[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct address calculation: base + i × sizeof(type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write arr[i]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same direct calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must visit n elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) per element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Index gives O(1) anywhere in the array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "625-edge-cases",
      children: "6.2.5 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[size]"
            }), " (one past last)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior — might work, might crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C does no bounds checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[-1]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accesses memory before the array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative index moves backward — catastrophic UB"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            }), " where i is out of range"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffer overflow — root cause of most C CVEs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "5[arr]"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Equivalent to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr[5]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commutative property: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "a[b] == *(a + b) == *(b + a) == b[a]"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "5[arr]"
        }), " curiosity:"]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\nint main(void) {\n    int arr[] = {10, 20, 30, 40, 50};\n    printf(\"arr[3] = %d\\n\", arr[3]);   /* 40 */\n    printf(\"3[arr] = %d\\n\", 3[arr]);   /* 40 — same thing! */\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "63-one-dimensional-arrays",
      children: "6.3 One-Dimensional Arrays"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A row of lockers in a school hallway. Each locker has a number (index) and contains items (values). You can only put one type of item in each locker row (same data type)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "631-declaration-and-traversal",
      children: "6.3.1 Declaration and Traversal"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int scores[] = {88, 72, 93, 65, 80};\n    int size = sizeof(scores) / sizeof(scores[0]);\n    int sum = 0;\n\n    for (int i = 0; i < size; i++) {\n        sum += scores[i];\n    }\n\n    double average = (double)sum / size;\n    printf(\"Sum: %d\\n\", sum);\n    printf(\"Average: %.2f\\n\", average);\n\n    /* Find max */\n    int max = scores[0];\n    for (int i = 1; i < size; i++) {\n        if (scores[i] > max) max = scores[i];\n    }\n    printf(\"Max: %d\\n\", max);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Sum: 398\nAverage: 79.60\nMax: 93\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Computing array length:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[] = {10, 20, 30, 40, 50};\nint length = sizeof(arr) / sizeof(arr[0]);   /* 5 */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Caveat:"
      }), " This only works in the scope where the array was declared. Once decayed to a pointer (when passed to a function), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " returns the pointer size, not the array size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "632-dry-run--max-search",
      children: "6.3.2 Dry Run — Max Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int scores[] = {88, 72, 93, 65, 80};\nsize = 5\n\nIteration | i | scores[i] | current max | Condition (scores[i] > max)\n----------|---|-----------|-------------|----------------------------\nInit      | - | -         | 88          | (max = scores[0])\n1         | 1 | 72        | 88          | 72 > 88 ? NO → keep 88\n2         | 2 | 93        | 93          | 93 > 88 ? YES → max = 93\n3         | 3 | 65        | 93          | 65 > 93 ? NO\n4         | 4 | 80        | 93          | 80 > 93 ? NO\n\nFinal max = 93\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "633-complexity-analysis",
      children: "6.3.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) extra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must visit each element once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sum/Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Accumulator sweeps once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Find min/max"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan + 1 variable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse in-place"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-pointer swap, n/2 steps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search (unsorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear search worst case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search (sorted)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search halves each time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "634-one-sentence-takeaway",
      children: "6.3.4 One-Sentence Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Array declaration reserves contiguous memory for a fixed number of elements accessed via zero-based indices."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "64-array-of-pointers",
      children: "6.4 Array of Pointers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A phone book where each entry is a business card (pointer). The book itself is an array of pointer-sized slots, each pointing to a business card somewhere in your desk drawer."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An array of pointers stores pointer values as its elements. Each element is a pointer that can point to a variable, string, or another array."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "type *array_name[size];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "641-code-example--array-of-string-pointers",
      children: "6.4.1 Code Example — Array of String Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    /* Array of pointers to char (string table) */\n    const char *fruits[5] = {\n        \"Apple\",\n        \"Banana\",\n        \"Cherry\",\n        \"Date\",\n        \"Elderberry\"\n    };\n\n    printf(\"Fruit list:\\n\");\n    for (int i = 0; i < 5; i++) {\n        printf(\"fruits[%d] = %s  (stored at %p)\\n\",\n               i, fruits[i], (void*)fruits[i]);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Fruit list:\nfruits[0] = Apple  (stored at 0x100403000)\nfruits[1] = Banana  (stored at 0x100403008)\nfruits[2] = Cherry  (stored at 0x100403010)\nfruits[3] = Date  (stored at 0x100403018)\nfruits[4] = Elderberry  (stored at 0x100403020)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "642-array-of-pointers-to-integers",
      children: "6.4.2 Array of Pointers to Integers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int a = 10, b = 20, c = 30;\n    int *arr[3] = {&a, &b, &c};\n\n    for (int i = 0; i < 3; i++) {\n        printf(\"arr[%d] = %p  →  *arr[%d] = %d\\n\", i, (void*)arr[i], i, *arr[i]);\n    }\n\n    /* Modify through the pointer */\n    *arr[1] = 999;\n    printf(\"After modification: b = %d\\n\", b);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[0] = 0x7fff5fbff700  →  *arr[0] = 10\narr[1] = 0x7fff5fbff704  →  *arr[1] = 20\narr[2] = 0x7fff5fbff708  →  *arr[2] = 30\nAfter modification: b = 999\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "643-memory-layout--array-of-pointers",
      children: "6.4.3 Memory Layout — Array of Pointers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int *arr[3] = {&a, &b, &c};\n\nAddress     Content      Points to\n--------    -----------  ---------\narr[0]      0x7fff...00  → a (value 10)     at 0x7fff...00\narr[1]      0x7fff...04  → b (value 20)     at 0x7fff...04\narr[2]      0x7fff...08  → c (value 30)     at 0x7fff...08\n\nsizeof(arr) = 3 * sizeof(int*) = 3 * 8 = 24 bytes (on 64-bit)\nsizeof(arr[0]) = sizeof(int*) = 8 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "644-ad-table",
      children: "6.4.4 A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible sizes per pointed-to data; string tables are compact; no wasted space for variable-length strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra indirection; pointers must be managed; dangling pointer risk"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "645-edge-cases",
      children: "6.4.5 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *arr[5] = {NULL, NULL, NULL, NULL, NULL};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All pointers are NULL — safe to iterate but must check before dereferencing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "free(arr[i]); arr[i] = NULL;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proper pattern — free then NULL to prevent dangling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *arr[3]; *arr[0] = 5;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior — uninitialized pointer dereference"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "65-pointer-to-an-array",
      children: "6.5 Pointer to an Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Instead of holding individual room keys for a hotel hallway, you hold a master key ring that points to the entire hallway. With ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(*p)[N]"
      }), ", you have one pointer that points to an entire array of N elements."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "type (*pointer_name)[size];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is NOT the same as an array of pointers. The parentheses matter:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[5]"
        }), " — array of 5 pointers to int"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[5]"
        }), " — pointer to an array of 5 ints"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "651-code-example",
      children: "6.5.1 Code Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[5] = {10, 20, 30, 40, 50};\n    int (*p)[5] = &arr;  /* p points to the entire array of 5 ints */\n\n    printf(\"arr[2] via pointer to array: %d\\n\", (*p)[2]);\n\n    /* Modify through pointer */\n    (*p)[3] = 444;\n\n    printf(\"arr[3] after modification: %d\\n\", arr[3]);\n    printf(\"Sizeof p: %zu bytes\\n\", sizeof(p));       /* pointer size */\n    printf(\"Sizeof *p: %zu bytes\\n\", sizeof(*p));     /* array size: 5 * 4 = 20 */\n    printf(\"Sizeof arr: %zu bytes\\n\", sizeof(arr));   /* array size: 20 */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "arr[2] via pointer to array: 30\narr[3] after modification: 444\nSizeof p: 8 bytes\nSizeof *p: 20 bytes\nSizeof arr: 20 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "652-pointer-to-array-for-2d-access",
      children: "6.5.2 Pointer to Array for 2D Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid print_row(int (*row)[4], int r)\n{\n    for (int j = 0; j < 4; j++) {\n        printf(\"%4d\", (*row)[j]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void)\n{\n    int matrix[3][4] = {\n        {1, 2, 3, 4},\n        {5, 6, 7, 8},\n        {9, 10, 11, 12}\n    };\n\n    /* matrix[0] is int* pointing to first element of first row */\n    /* &matrix[0] is int(*)[4] pointing to entire first row */\n    int (*p)[4] = matrix;  /* decays to &matrix[0] — int(*)[4] */\n\n    printf(\"Access via pointer to array:\\n\");\n    for (int i = 0; i < 3; i++) {\n        print_row(p + i, i);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "653-complexity-analysis",
      children: "6.5.3 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Dereference and index ", (0,jsx_runtime.jsx)(_components.code, {
              children: "(*p)[i]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Deref then offset by i × sizeof(type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Advance to next array ", (0,jsx_runtime.jsx)(_components.code, {
              children: "p + 1"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler adds N × sizeof(type) bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(*p)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Known at compile time — N × sizeof(type)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "654-edge-cases",
      children: "6.5.4 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Explanation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[5] = &arr;"
            }), " but ", (0,jsx_runtime.jsx)(_components.code, {
              children: "arr"
            }), " has 10 elements"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time warning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer-to-array type must match array size exactly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*p)[0];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constraint violation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-size array not allowed in standard C"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "66-two-dimensional-arrays-row-major-vs-column-major",
      children: "6.6 Two-Dimensional Arrays (Row-Major vs Column-Major)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy (row-major):"
      }), " A movie theater. Row 0 starts at the screen-left aisle, seats 0–9. After the last seat in row 0, the very next seat is row 1, seat 0. C organizes memory exactly like this — all of row 0 first, then all of row 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "661-declaration-and-initialization",
      children: "6.6.1 Declaration and Initialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "type array_name[rows][columns];\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int matrix[3][4] = {\n        {1,  2,  3,  4},\n        {5,  6,  7,  8},\n        {9, 10, 11, 12}\n    };\n\n    /* Print the matrix */\n    printf(\"Matrix:\\n\");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 4; j++) {\n            printf(\"%4d\", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    /* Total elements */\n    printf(\"Total elements: %zu\\n\", sizeof(matrix) / sizeof(int));\n    printf(\"Rows: %zu\\n\", sizeof(matrix) / sizeof(matrix[0]));\n    printf(\"Cols: %zu\\n\", sizeof(matrix[0]) / sizeof(matrix[0][0]));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Matrix:\n   1   2   3   4\n   5   6   7   8\n   9  10  11  12\nTotal elements: 12\nRows: 3\nCols: 4\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "662-memory-layout--row-major",
      children: "6.6.2 Memory Layout — Row-Major"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps for address calculation (row-major):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Access ", (0,jsx_runtime.jsx)(_components.code, {
          children: "matrix[row][col]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute offset = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "(row * number_of_columns + col) * sizeof(type)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Address = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "base_address + offset"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int m[2][3] = {{1, 2, 3}, {4, 5, 6}};\n\n    printf(\"Memory layout (row-major):\\n\");\n    for (int i = 0; i < 2; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"&m[%d][%d] = %p  (value = %d)\\n\",\n                   i, j, (void*)&m[i][j], m[i][j]);\n        }\n    }\n\n    /* Demonstrate contiguous nature via a pointer */\n    int *p = &m[0][0];\n    printf(\"\\nLinear view:\\n\");\n    for (int k = 0; k < 6; k++) {\n        printf(\"p[%d] = %d  (at %p)\\n\", k, p[k], (void*)&p[k]);\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (addresses vary):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Memory layout (row-major):\n&m[0][0] = 0x7fff5fbff6e0  (value = 1)\n&m[0][1] = 0x7fff5fbff6e4  (value = 2)\n&m[0][2] = 0x7fff5fbff6e8  (value = 3)\n&m[1][0] = 0x7fff5fbff6ec  (value = 4)\n&m[1][1] = 0x7fff5fbff6f0  (value = 5)\n&m[1][2] = 0x7fff5fbff6f4  (value = 6)\n\nLinear view:\np[0] = 1  (at 0x7fff5fbff6e0)\np[1] = 2  (at 0x7fff5fbff6e4)\np[2] = 3  (at 0x7fff5fbff6e8)\np[3] = 4  (at 0x7fff5fbff6ec)\np[4] = 5  (at 0x7fff5fbff6f0)\np[5] = 6  (at 0x7fff5fbff6f4)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "663-row-major-address-calculation--dry-run",
      children: "6.6.3 Row-Major Address Calculation — Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int m[3][4] = {{...}}  /* 3 rows, 4 cols, sizeof(int) = 4 */\nBase address = 0x1000\n\nAccess            Formula                          Address\nm[0][0]           base + (0*4 + 0)*4               0x1000\nm[0][1]           base + (0*4 + 1)*4               0x1004\nm[0][2]           base + (0*4 + 2)*4               0x1008\nm[0][3]           base + (0*4 + 3)*4               0x100C\nm[1][0]           base + (1*4 + 0)*4               0x1010\nm[1][1]           base + (1*4 + 1)*4               0x1014\nm[2][3]           base + (2*4 + 3)*4               0x102C\n\nRow step: m[1][0] - m[0][0] = 0x1010 - 0x1000 = 16 bytes = 4 cols * 4 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "664-column-major-layout-for-comparison",
      children: "6.6.4 Column-Major Layout (for comparison)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In column-major (used by Fortran, MATLAB), the inner index varies slowest:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Column-major address formula:\n  address = base + (col * rows + row) * sizeof(type)\n\nFor m[3][4] (3 rows, 4 cols), col-major order:\n  m[0][0], m[1][0], m[2][0], m[0][1], m[1][1], m[2][1], ...\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Layout"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access Pattern"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Used By"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cache Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row-major"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "m[row][col]"
            }), " — col varies fastest"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C, C++, Java, Python (NumPy row-major by default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating rows first is cache-friendly — consecutive memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column-major"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "m[row][col]"
            }), " — row varies fastest"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fortran, MATLAB, R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating columns first is cache-friendly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "665-2d-arrays-as-function-parameters",
      children: "6.6.5 2D Arrays as Function Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The number of columns must be specified (because the compiler needs it to compute the memory offset):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "void print_matrix(int rows, int cols, int matrix[rows][cols])\n{\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            printf(\"%4d\", matrix[i][j]);\n        }\n        printf(\"\\n\");\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int matrix[][4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2D array, columns = 4, rows unknown"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*matrix)[4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to an array of 4 ints (same as above)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *matrix[4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 4 pointers to int (very different!)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "666-2d-array-ad-table",
      children: "6.6.6 2D Array A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contiguous memory — cache efficient; simple indexing; works with pointer-to-array types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Column count must be compile-time constant in traditional C; row-major vs col-major can cause cache misses if iterated in wrong order"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-size grids, matrices, images, game boards"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "667-complexity-analysis",
      children: "6.6.7 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Access ", (0,jsx_runtime.jsx)(_components.code, {
              children: "m[r][c]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct address calculation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Row-major traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential memory access — good cache behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Column-major traversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strided access — cache misses per element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix addition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must visit every element once"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m×n×p)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Triple-nested loop"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "668-edge-cases",
      children: "6.6.8 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int m[0][5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero rows — allowed by some compilers, UB in standard C"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int m[5][0]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero columns — UB, zero-size type not allowed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int m[-1][5]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Negative size — compile error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "m[row][col]"
            }), " with row/col out of range"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior — no bounds check"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "669-cache-performance--row-vs-column-iteration",
      children: "6.6.9 Cache Performance — Row vs Column Iteration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <time.h>\n\n#define SIZE 10000\n\nint main(void)\n{\n    static int matrix[SIZE][SIZE];\n    clock_t start, end;\n    long long sum = 0;\n\n    /* Row-major iteration (fast — sequential memory) */\n    start = clock();\n    for (int i = 0; i < SIZE; i++) {\n        for (int j = 0; j < SIZE; j++) {\n            sum += matrix[i][j];\n        }\n    }\n    end = clock();\n    printf(\"Row-major: %.3f seconds\\n\", (double)(end - start) / CLOCKS_PER_SEC);\n\n    sum = 0;\n\n    /* Column-major iteration (slow — strided memory) */\n    start = clock();\n    for (int j = 0; j < SIZE; j++) {\n        for (int i = 0; i < SIZE; i++) {\n            sum += matrix[i][j];\n        }\n    }\n    end = clock();\n    printf(\"Column-major: %.3f seconds\\n\", (double)(end - start) / CLOCKS_PER_SEC);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Typical output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Row-major: 0.295 seconds\nColumn-major: 1.843 seconds\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The row-major version is 6× faster because it accesses consecutive memory addresses, utilizing CPU cache lines efficiently."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "67-three-dimensional-arrays-3d",
      children: "6.7 Three-Dimensional Arrays (3D)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A parking garage with multiple floors (depth), rows per floor (height), and spots per row (width). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "garage[floor][row][spot]"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "671-declaration-and-access",
      children: "6.7.1 Declaration and Access"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int cube[3][4][5];   /* 3 layers, 4 rows, 5 columns — 60 elements total */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Numbered steps for 3D access:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Access ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cube[layer][row][col]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compute offset = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "((layer * rows * cols) + (row * cols) + col) * sizeof(type)"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Address = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "base_address + offset"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int cube[2][3][4] = {\n        {\n            {1, 2, 3, 4},\n            {5, 6, 7, 8},\n            {9, 10, 11, 12}\n        },\n        {\n            {13, 14, 15, 16},\n            {17, 18, 19, 20},\n            {21, 22, 23, 24}\n        }\n    };\n\n    printf(\"3D array access:\\n\");\n    printf(\"cube[0][1][2] = %d\\n\", cube[0][1][2]);  /* 7 */\n    printf(\"cube[1][2][3] = %d\\n\", cube[1][2][3]);  /* 24 */\n\n    /* Print all elements */\n    printf(\"\\nAll elements:\\n\");\n    for (int l = 0; l < 2; l++) {\n        printf(\"Layer %d:\\n\", l);\n        for (int r = 0; r < 3; r++) {\n            for (int c = 0; c < 4; c++) {\n                printf(\"%4d\", cube[l][r][c]);\n            }\n            printf(\"\\n\");\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "3D array access:\ncube[0][1][2] = 7\ncube[1][2][3] = 24\n\nAll elements:\nLayer 0:\n   1   2   3   4\n   5   6   7   8\n   9  10  11  12\n\nLayer 1:\n  13  14  15  16\n  17  18  19  20\n  21  22  23  24\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "672-3d-address-calculation--dry-run",
      children: "6.7.2 3D Address Calculation — Dry Run"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "int cube[2][3][4];\nBase = 0x1000, sizeof(int) = 4\n\nAccess                Formula                                   Address\ncube[0][0][0]         base + (0*3*4 + 0*4 + 0)*4               0x1000\ncube[0][0][1]         base + (0*3*4 + 0*4 + 1)*4               0x1004\ncube[0][1][0]         base + (0*3*4 + 1*4 + 0)*4               0x1010\ncube[1][0][0]         base + (1*3*4 + 0*4 + 0)*4               0x1030\ncube[1][2][3]         base + (1*3*4 + 2*4 + 3)*4               0x106C\n\nLayer stride: 3 * 4 * 4 = 48 bytes\nRow stride: 4 * 4 = 16 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "673-complexity-of-iteration",
      children: "6.7.3 Complexity of Iteration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* Best — innermost index varies fastest (row-major friendly) */\nfor (int l = 0; l < L; l++)\n    for (int r = 0; r < R; r++)\n        for (int c = 0; c < C; c++)\n            process(cube[l][r][c]);  /* sequential — cache friendly */\n\n/* Worst — innermost index varies slowest */\nfor (int c = 0; c < C; c++)\n    for (int r = 0; r < R; r++)\n        for (int l = 0; l < L; l++)\n            process(cube[l][r][c]);  /* large stride — cache misses */\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "674-ad-table",
      children: "6.7.4 A&D Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural representation for volumetric data (CT scans, voxel grids, RGB video frames)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Disadvantages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large memory usage — L × R × C × sizeof(type); deep nesting makes code harder to read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3D graphics, scientific simulations, image volumes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "68-arrays-and-functions-passing-to-functions",
      children: "6.8 Arrays and Functions (Passing to Functions)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " You hand someone a paper with your locker number written on it (the address), not your entire locker contents. They go to the locker, look inside, change things. When they give the paper back, the locker contents may have changed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "681-array-decay--the-fundamental-rule",
      children: "6.8.1 Array Decay — The Fundamental Rule"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When an array is passed to a function, it ", (0,jsx_runtime.jsx)(_components.em, {
        children: "decays"
      }), " to a pointer to its first element. The function receives the address, not a copy of the array."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* arr[] is syntactic sugar for *arr — both are pointers */\nvoid print_array(int arr[], int size)\n{\n    printf(\"Inside function: sizeof(arr) = %zu (pointer size!)\\n\", sizeof(arr));\n    for (int i = 0; i < size; i++) {\n        printf(\"%d \", arr[i]);\n    }\n    printf(\"\\n\");\n}\n\nint main(void)\n{\n    int values[] = {10, 20, 30, 40, 50};\n    int n = sizeof(values) / sizeof(values[0]);\n\n    printf(\"Inside main: sizeof(values) = %zu (array size!)\\n\", sizeof(values));\n    print_array(values, n);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Inside main: sizeof(values) = 20 (array size!)\nInside function: sizeof(arr) = 8 (pointer size!)\n10 20 30 40 50\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Critical:"
      }), " The size must be passed separately — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr)"
      }), " inside the function returns the pointer size (4 or 8 bytes), not the array size."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "682-modifying-arrays-through-functions",
      children: "6.8.2 Modifying Arrays Through Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid double_elements(int *arr, int size)\n{\n    for (int i = 0; i < size; i++) {\n        arr[i] *= 2;  /* modifies original array */\n    }\n}\n\nint main(void)\n{\n    int values[] = {1, 2, 3, 4, 5};\n    int n = sizeof(values) / sizeof(values[0]);\n\n    printf(\"Original: \");\n    for (int i = 0; i < n; i++) printf(\"%d \", values[i]);\n    printf(\"\\n\");\n\n    double_elements(values, n);\n\n    printf(\"Doubled:  \");\n    for (int i = 0; i < n; i++) printf(\"%d \", values[i]);\n    printf(\"\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original: 1 2 3 4 5\nDoubled:  2 4 6 8 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "683-pass-by-value-vs-pass-by-reference-for-arrays",
      children: "6.8.3 Pass by Value vs Pass by Reference for Arrays"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Value (scalars)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pass by Reference (arrays)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "What is passed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of the data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copy of the address (pointer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Modifications affect original?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory/time cost"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) — copies entire data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) — copies 4/8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int x)"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int arr[])"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "void f(int *arr)"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " behavior"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns size of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns pointer size (not array)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Demonstration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid pass_by_value(int x) {\n    x = 999;  /* does NOT affect caller */\n    printf(\"Inside pass_by_value: x = %d\\n\", x);\n}\n\nvoid pass_by_reference(int *arr, int size) {\n    for (int i = 0; i < size; i++) {\n        arr[i] = 999;  /* DOES affect caller */\n    }\n}\n\nint main(void)\n{\n    int val = 42;\n    int arr[3] = {1, 2, 3};\n\n    pass_by_value(val);\n    printf(\"After pass_by_value: val = %d (unchanged)\\n\", val);\n\n    pass_by_reference(arr, 3);\n    printf(\"After pass_by_reference: arr = \");\n    for (int i = 0; i < 3; i++) printf(\"%d \", arr[i]);\n    printf(\"(changed!)\\n\");\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Inside pass_by_value: x = 999\nAfter pass_by_value: val = 42 (unchanged)\nAfter pass_by_reference: arr = 999 999 999 (changed!)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "684-passing-2d-arrays-to-functions",
      children: "6.8.4 Passing 2D Arrays to Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* Standard C99 VLA notation — rows and cols are parameters */\nvoid fill_identity(int rows, int cols, int matrix[rows][cols])\n{\n    for (int i = 0; i < rows; i++) {\n        for (int j = 0; j < cols; j++) {\n            matrix[i][j] = (i == j) ? 1 : 0;\n        }\n    }\n}\n\nint main(void)\n{\n    int identity[4][4];\n\n    fill_identity(4, 4, identity);\n\n    printf(\"Identity matrix:\\n\");\n    for (int i = 0; i < 4; i++) {\n        for (int j = 0; j < 4; j++) {\n            printf(\"%4d\", identity[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Identity matrix:\n   1   0   0   0\n   0   1   0   0\n   0   0   1   0\n   0   0   0   1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "685-complexity-analysis",
      children: "6.8.5 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass array to function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) time, O(1) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only the address (4/8 bytes) is copied"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Copy array in function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) time, O(n) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must allocate and copy each element manually"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " inside function"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile-time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns pointer size, not array size — common pitfall"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "686-edge-cases",
      children: "6.8.6 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass NULL as array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior when dereferenced — always check for NULL if parameter could be null"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass array of wrong size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No compiler error — must trust the size parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return pointer to local array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dangling pointer — array goes out of scope; use static or malloc"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "69-variable-length-arrays-vla-c99",
      children: "6.9 Variable-Length Arrays (VLA, C99)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " Instead of booking a fixed-size conference room, you wait until you know how many people are coming, then book a room that fits exactly."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "C99 allows array sizes to be determined at runtime. VLAs are allocated on the stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "691-basic-vla-usage",
      children: "6.9.1 Basic VLA Usage"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid process(int n)\n{\n    int arr[n];  /* VLA — size determined at call time */\n\n    for (int i = 0; i < n; i++) {\n        arr[i] = i * i;\n    }\n\n    printf(\"Squares up to %d:\\n\", n);\n    for (int i = 0; i < n; i++) {\n        printf(\"%d² = %d\\n\", i, arr[i]);\n    }\n}\n\nint main(void)\n{\n    process(5);\n    process(10);\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Squares up to 5:\n0² = 0\n1² = 1\n2² = 4\n3² = 9\n4² = 16\nSquares up to 10:\n0² = 0\n1² = 1\n2² = 4\n3² = 9\n4² = 16\n5² = 25\n6² = 36\n7² = 49\n8² = 64\n9² = 81\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "692-vla-with-sizeof",
      children: ["6.9.2 VLA with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int n = 7;\n    int arr[n];  /* VLA */\n\n    /* sizeof evaluates at runtime for VLAs */\n    printf(\"Size of VLA: %zu bytes\\n\", sizeof(arr));\n    printf(\"Number of elements: %zu\\n\", sizeof(arr) / sizeof(arr[0]));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Size of VLA: 28 bytes\nNumber of elements: 7\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Unlike fixed-size arrays where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " is a compile-time constant, for VLAs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " is evaluated at runtime."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "693-vla--pros-and-cons",
      children: "6.9.3 VLA — Pros and Cons"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "PROS:\n  ✓ Flexible sizes — allocate exactly what you need\n  ✓ No heap allocation overhead (no malloc/free)\n  ✓ Automatic deallocation when scope exits\n  ✓ Clean syntax for variable-size 2D function parameters\n\nCONS:\n  ✗ Stack allocation — large VLAs cause stack overflow\n  ✗ Cannot be global or static\n  ✗ Cannot have initializer list\n  ✗ Optional in C11 — not guaranteed to be supported\n  ✗ sizeof evaluated at runtime (minor overhead)\n  ✗ No error reporting on allocation failure (silent crash)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "694-vla-stack-overflow-example",
      children: "6.9.4 VLA Stack Overflow Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n/* WARNING: This will likely crash */\nvoid dangerous_vla(void)\n{\n    int n = 100000000;  /* 100 million ints ~ 400 MB on stack */\n    int arr[n];         /* Stack overflow — typical stack is 1-8 MB */\n    /* Program crashes before reaching this point */\n    printf(\"Never reached\\n\");\n}\n\nint main(void)\n{\n    printf(\"About to call dangerous_vla...\\n\");\n    dangerous_vla();\n    printf(\"This never prints\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected behavior:"
      }), " Segmentation fault (stack overflow) — the program crashes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe alternative using heap:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdlib.h>\n\nvoid safe_large_array(int n)\n{\n    int *arr = malloc(n * sizeof(int));\n    if (arr == NULL) {\n        fprintf(stderr, \"Memory allocation failed\\n\");\n        return;\n    }\n    for (int i = 0; i < n; i++) arr[i] = i;\n    printf(\"Last element: %d\\n\", arr[n-1]);\n    free(arr);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "695-vla-for-2d-function-parameters-c99-clean-style",
      children: "6.9.5 VLA for 2D Function Parameters (C99 clean style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid matrix_multiply(int r1, int c1, int a[r1][c1],\n                     int r2, int c2, int b[r2][c2],\n                     int result[r1][c2])\n{\n    for (int i = 0; i < r1; i++) {\n        for (int j = 0; j < c2; j++) {\n            result[i][j] = 0;\n            for (int k = 0; k < c1; k++) {\n                result[i][j] += a[i][k] * b[k][j];\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "696-complexity-analysis",
      children: "6.9.6 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "VLA declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack pointer adjusted by n × sizeof(type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VLA sizeof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluated at runtime; not constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow for large VLA"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crash"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No way to detect or recover"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap alternative (malloc)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Malloc returns NULL on failure — detectable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "697-edge-cases",
      children: "6.9.7 Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int n = 0; int arr[n];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Zero-length array — UB in C standard"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "n > 0"
            }), " before declaration"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int n = -1; int arr[n];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure n is non-negative"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "n = 1000000; int arr[n];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow if n is too large"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use malloc for large arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "static int arr[n];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Static storage cannot be VLA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[n] = {0};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compile error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "VLAs cannot have initializer list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "610-array-bounds-and-bounds-checking",
      children: "6.10 Array Bounds and Bounds Checking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A parking lot with 50 spaces numbered 0–49. If you park in spot 50, you're on the neighbor's property. If you park in spot -1, you're on the sidewalk. C lets you do both — and crashes when the tow truck comes."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6101-the-core-problem",
      children: "6.10.1 The Core Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["C does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "no runtime bounds checking"
      }), ". Accessing any element outside the declared range is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "undefined behavior"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[5] = {10, 20, 30, 40, 50};\n\n    printf(\"arr[5] (out of bounds): %d\\n\", arr[5]);  /* UB — could crash */\n    printf(\"arr[-1] (out of bounds): %d\\n\", arr[-1]); /* UB — even worse */\n\n    /* Buffer overflow — writing past the end */\n    arr[10] = 999;  /* silently corrupts adjacent memory */\n\n    printf(\"This may or may not print...\\n\");\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      }), " Undefined — could print garbage, crash, or appear to work (the most dangerous case)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6102-dry-run--buffer-overflow-trace",
      children: "6.10.2 Dry Run — Buffer Overflow Trace"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Stack layout (approximate, compiler-dependent):\n\nAddress     Content\n0x1000      arr[0] = 10\n0x1004      arr[1] = 20\n0x1008      arr[2] = 30\n0x100C      arr[3] = 40\n0x1010      arr[4] = 50\n0x1014      [other local variable — e.g., int x]\n0x1018      [saved frame pointer]\n0x101C      [return address]   ← CRITICAL\n\nIf we write arr[7] = 999:\n  arr[7] = *(arr + 7) = address 0x101C\n  We just overwrote the RETURN ADDRESS!\n  When main tries to return → crash or hijack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6103-safe-access-pattern",
      children: "6.10.3 Safe Access Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <stdbool.h>\n\nbool safe_get(int arr[], int size, int index, int *result)\n{\n    if (index < 0 || index >= size) {\n        return false;  /* bounds check fails */\n    }\n    *result = arr[index];\n    return true;\n}\n\nint main(void)\n{\n    int data[5] = {100, 200, 300, 400, 500};\n    int val;\n\n    if (safe_get(data, 5, 3, &val)) {\n        printf(\"data[3] = %d\\n\", val);\n    }\n\n    if (!safe_get(data, 5, 10, &val)) {\n        printf(\"data[10] is out of bounds!\\n\");\n    }\n\n    if (!safe_get(data, 5, -1, &val)) {\n        printf(\"data[-1] is out of bounds!\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "data[3] = 400\ndata[10] is out of bounds!\ndata[-1] is out of bounds!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6104-complexity-analysis",
      children: "6.10.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bound check with wrapper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two comparisons: index < 0 OR index >= size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unchecked access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw pointer arithmetic — fastest but dangerous"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6105-historical-impact",
      children: "6.10.5 Historical Impact"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Buffer overflows are the single most exploited vulnerability class in C/C++ history:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Morris Worm (1988) — fingerd buffer overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Code Red (2001) — IIS buffer overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Heartbleed (2014) — bounds check missing in OpenSSL heartbeat"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "EternalBlue (2017) — Windows SMB buffer overflow (WannaCry, NotPetya)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "611-string-vs-char-array",
      children: "6.11 String vs Char Array"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A char array is a parking lot with spaces. A string is a parking lot where you know where the last car is because there's a brightly colored cone (null terminator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\\0"
      }), ") after the last car."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6111-the-fundamental-difference",
      children: "6.11.1 The Fundamental Difference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "char array"
        }), " is just a sequence of characters in memory"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "string"
        }), " is a char array that is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "null-terminated"
        }), " (ends with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\0"
        }), ")"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    char not_a_string[5] = {'H', 'e', 'l', 'l', 'o'};  /* NO null terminator */\n    char is_a_string[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};  /* null-terminated */\n    char also_a_string[] = \"Hello\";  /* string literal — auto null-terminated */\n\n    printf(\"not_a_string: \");\n    for (int i = 0; i < 5; i++) printf(\"%c\", not_a_string[i]);\n    printf(\"\\n\");\n\n    printf(\"is_a_string: %s\\n\", is_a_string);\n    printf(\"also_a_string: %s\\n\", also_a_string);\n\n    printf(\"\\nLengths:\\n\");\n    printf(\"sizeof(not_a_string) = %zu\\n\", sizeof(not_a_string));       /* 5 */\n    printf(\"sizeof(is_a_string) = %zu\\n\", sizeof(is_a_string));         /* 6 */\n    printf(\"sizeof(also_a_string) = %zu\\n\", sizeof(also_a_string));     /* 6 */\n    printf(\"strlen(is_a_string) = %zu\\n\", strlen(is_a_string));         /* 5 */\n    printf(\"strlen(also_a_string) = %zu\\n\", strlen(also_a_string));     /* 5 */\n\n    /* DANGER: printing a non-null-terminated char array with %s */\n    printf(\"\\nDANGER: %s\\n\", not_a_string);  /* prints \"Hello\" + garbage until \\0 found */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "not_a_string: Hello\nis_a_string: Hello\nalso_a_string: Hello\n\nLengths:\nsizeof(not_a_string) = 5\nsizeof(is_a_string) = 6\nsizeof(also_a_string) = 6\nstrlen(is_a_string) = 5\nstrlen(also_a_string) = 5\n\nDANGER: Hello╠╠╠╠╠╠╠╠╠╠╠╠╠╠╠╠\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6112-string-vs-char-array--comparison-table",
      children: "6.11.2 String vs Char Array — Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Char Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "String"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Null-terminated?"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", arr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Safe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen(arr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Undefined behavior"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns character count (excluding \\0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of bytes = array size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number of bytes = array size (including \\0)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char arr[] = \"abc\";"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr"
            }), " is a 4-byte string literal"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes: 'a','b','c','\\0'"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char arr[] = {'a','b','c'};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3-byte char array, NOT a string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not safe to use as string"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6113-common-pitfall--buffer-overflow-with-strings",
      children: "6.11.3 Common Pitfall — Buffer Overflow with Strings"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    char buffer[5];          /* only 5 bytes */\n    const char *msg = \"Hello, World!\";  /* 13 chars + \\0 = 14 bytes */\n\n    strcpy(buffer, msg);     /* BUFFER OVERFLOW! */\n    printf(\"%s\\n\", buffer);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Safe version:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n#include <string.h>\n\nint main(void)\n{\n    char buffer[5];\n    const char *msg = \"Hello, World!\";\n\n    strncpy(buffer, msg, sizeof(buffer) - 1);\n    buffer[sizeof(buffer) - 1] = '\\0';  /* ensure null termination */\n\n    printf(\"%s\\n\", buffer);  /* prints \"Hell\" */\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6114-complexity-analysis",
      children: "6.11.4 Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strlen(s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must scan until \\0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strcpy(d, s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies each char until \\0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "strncpy(d, s, n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Copies at most n chars"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "printf(\"%s\", s)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prints char by char until \\0"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "612-array-decay-to-pointer",
      children: "6.12 Array Decay to Pointer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-world analogy:"
      }), " A full restaurant menu (the array) is a book with many pages. When you hand the menu to the chef saying \"I want this,\" you're pointing at the whole book. But the chef sees it as \"the address of page 0\" — they need to know the page count separately."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6121-when-decay-happens",
      children: "6.12.1 When Decay Happens"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nvoid check_decay(int arr[])\n{\n    /* arr is int* here, not int[] */\n    printf(\"sizeof(arr) in function: %zu (pointer)\\n\", sizeof(arr));\n}\n\nint main(void)\n{\n    int arr[10] = {0};\n\n    printf(\"sizeof(arr) in main: %zu (array)\\n\", sizeof(arr));\n\n    check_decay(arr);       /* decay happens here */\n    int *ptr = arr;         /* decay happens here */\n    int *ptr2 = &arr[0];    /* explicit — same as decay */\n\n    printf(\"sizeof(ptr) = %zu (pointer)\\n\", sizeof(ptr));\n    printf(\"sizeof(ptr2) = %zu (pointer)\\n\", sizeof(ptr2));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr) in main: 40 (array)\nsizeof(arr) in function: 8 (pointer)\nsizeof(ptr) = 8 (pointer)\nsizeof(ptr2) = 8 (pointer)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6122-when-decay-does-not-happen",
      children: "6.12.2 When Decay Does NOT Happen"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Context"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "No Decay"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reason"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(arr)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns array size in bytes"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Special case — ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            }), " operator on the original array"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type (*)[N]"
            }), ", not ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type**"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of entire array, not first element"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "typeof(arr)"
            }), " (GCC extension)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns array type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No decay for type queries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[5] = {1, 2, 3, 4, 5};\n\n    /* These are different types: */\n    int *p1 = arr;         /* int* — pointer to first element */\n    int (*p2)[5] = &arr;   /* int(*)[5] — pointer to entire array */\n\n    printf(\"p1 + 1 = %p (advances by %zu byte(s))\\n\",\n           (void*)(p1 + 1), sizeof(int));\n    printf(\"p2 + 1 = %p (advances by %zu byte(s))\\n\",\n           (void*)(p2 + 1), sizeof(int) * 5);\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "p1 + 1 = 0x7fff...04 (advances by 4 byte(s))\np2 + 1 = 0x7fff...14 (advances by 20 byte(s))\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "613-comparison-tables",
      children: "6.13 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6131-array-vs-pointer-comparison",
      children: "6.13.1 Array vs Pointer Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[10];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *p;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Block of N × sizeof(type) bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single address (4 or 8 bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total array bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer size (4 or 8)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr = other;"
            }), " — illegal (not assignable)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p = other;"
            }), " — legal"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr++"
            }), " — illegal"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "p++"
            }), " — advances to next element"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type (*)[N]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "type**"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decay to pointer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes, in expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No — already a pointer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic/static/global"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic/static/global/heap"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "arr[i]"
            }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
              children: "*(arr + i)"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equivalent"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6132-array-not-assignable",
      children: "6.13.2 Array Not Assignable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr1[5] = {1, 2, 3, 4, 5};\nint arr2[5];\n\narr2 = arr1;  /* COMPILE ERROR: array type is not assignable */\n\n/* Correct way: copy element by element */\nfor (int i = 0; i < 5; i++) arr2[i] = arr1[i];\n\n/* Or use memcpy */\n#include <string.h>\nmemcpy(arr2, arr1, sizeof(arr1));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6133-1d-vs-2d-vs-3d-arrays",
      children: "6.13.3 1D vs 2D vs 3D Arrays"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1D Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2D Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3D Array"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a[N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a[M][N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a[L][M][N]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Logical view"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grid (rows × cols)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cube (layers × rows × cols)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Total elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M × N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L × M × N"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N × sizeof(type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "M × N × sizeof(type)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "L × M × N × sizeof(type)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i][j]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "a[i][j][k]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base + i × S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base + (i × N + j) × S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base + ((i × M × N) + (j × N) + k) × S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function param"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int a[]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int *a"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int a[][N]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*a)[N]"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int a[][M][N]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*a)[M][N]"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6134-row-major-vs-column-major",
      children: "6.13.4 Row-major vs Column-major"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Row-major"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Column-major"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Address formula"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base + (row × cols + col) × S"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "base + (col × rows + row) × S"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consecutive in memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements in same row"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elements in same column"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Used by"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C, C++, Java, Python (default), Rust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fortran, MATLAB, R, Julia"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating rows first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly (fast)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-inefficient (slow)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Iterating cols first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-inefficient (slow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly (fast)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practical difference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~6× performance difference on large matrices (as shown in 6.6.9)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "6135-sizeof-array-vs-pointer",
      children: ["6.13.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), " Array vs Pointer"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\nint main(void)\n{\n    int arr[10];\n    int *p = arr;\n\n    printf(\"sizeof(arr) = %zu  (10 × %zu)\\n\", sizeof(arr), sizeof(int));\n    printf(\"sizeof(p)   = %zu  (pointer size)\\n\", sizeof(p));\n    printf(\"Element count = %zu\\n\", sizeof(arr) / sizeof(arr[0]));\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (64-bit system):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr) = 40  (10 × 4)\nsizeof(p)   = 8  (pointer size)\nElement count = 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6136-vla-proscons",
      children: "6.13.6 VLA Pros/Cons"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime-sized stack allocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stack overflow with large sizes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No heap fragmentation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not available in C11 (optional)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic deallocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be static or global"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Clean 2D function parameter syntax"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No initializer lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "sizeof works at runtime"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime overhead for sizeof"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6137-static-2d-array-parameter",
      children: "6.13.7 Static 2D Array Parameter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "/* C99+ allows static to hint minimum size — compiler may optimize */\nvoid process(int arr[static 10])\n{\n    /* Compiler assumes arr has at least 10 elements */\n    for (int i = 0; i < 10; i++) {\n        arr[i] *= 2;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "614-interview-corner",
      children: "6.14 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-an-array-and-a-pointer",
      children: "Q1: What is the difference between an array and a pointer?"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Holds address"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Assignment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot be reassigned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Can point anywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Total array bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 or 8 bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "&arr"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of the whole array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address of the pointer variable"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-why-cant-arrays-be-assigned",
      children: "Q2: Why can't arrays be assigned?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int a[5], b[5];\na = b;  /* ERROR */\n\n/* Reason: */\n/* 1. Array name decays to non-modifiable rvalue in assignment context */\n/* 2. C language design: arrays are not first-class objects you can assign */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q3-what-does-sizeofarr--sizeofarr0-compute",
      children: ["Q3: What does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr) / sizeof(arr[0])"
      }), " compute?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Number of elements in the array. Works ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "only"
      }), " in the scope where the array was declared. Inside a function parameter, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "arr"
      }), " is a pointer, so ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(arr)"
      }), " returns 4 or 8."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-the-pros-and-cons-of-vlas",
      children: "Q4: What are the pros and cons of VLAs?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pros:"
      }), " Dynamic sizing, no heap allocation, clean parameter syntax."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cons:"
      }), " Stack overflow risk, optional in C11, no initializers, no static/global, no error reporting on failure."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-how-does-int-a4-differ-from-int-a4-in-a-function-parameter",
      children: ["Q5: How does ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int a[][4]"
      }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int *a[4]"
      }), " in a function parameter?"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Declaration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int a[][4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*)[4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to array of 4 ints — 2D array parameter"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int *a[4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int **[4]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array of 4 pointers — not a 2D array at all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-array-decay-and-when-does-it-happen",
      children: "Q6: What is array decay and when does it happen?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Array decay is the implicit conversion of an array name to a pointer to its first element. It happens in all expressions except when used with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "&"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "typeof"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-can-you-have-a-negative-index-in-c",
      children: "Q7: Can you have a negative index in C?"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "int arr[5] = {1, 2, 3, 4, 5};\nint *p = &arr[2];\nprintf(\"%d\\n\", p[-1]);  /* prints 3 — valid, same as arr[1] */\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Yes, but only when the pointer points to the middle of the array."
      }), " The expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p[-1]"
      }), " is valid as long as ", (0,jsx_runtime.jsx)(_components.code, {
        children: "p - 1"
      }), " is within the array bounds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-how-do-you-prevent-buffer-overflow-in-c",
      children: "Q8: How do you prevent buffer overflow in C?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always validate indices before access"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strncpy()"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcpy()"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pass array size along with the array"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use static analysis tools"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider safer alternatives (C11 Annex K bounds-checking functions)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "615-applications-in-real-systems",
      children: "6.15 Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6151-image-processing-using-2d-arrays",
      children: "6.15.1 Image Processing Using 2D Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Digital images are naturally represented as 2D arrays of pixels. Grayscale images use one value per pixel; color images use 3 or 4 values (RGB/RGBA)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\n#define WIDTH  4\n#define HEIGHT 4\n\n/* Grayscale image represented as 2D array */\ntypedef unsigned char Image[HEIGHT][WIDTH];\n\n/* Apply a simple edge detection filter (Sobel-like) */\nvoid edge_detect(Image src, Image dst, int h, int w)\n{\n    for (int y = 1; y < h - 1; y++) {\n        for (int x = 1; x < w - 1; x++) {\n            /* Horizontal gradient */\n            int gx =  src[y-1][x+1] + 2*src[y][x+1] + src[y+1][x+1]\n                    - src[y-1][x-1] - 2*src[y][x-1] - src[y+1][x-1];\n            /* Vertical gradient */\n            int gy =  src[y-1][x-1] + 2*src[y-1][x] + src[y-1][x+1]\n                    - src[y+1][x-1] - 2*src[y+1][x] - src[y+1][x+1];\n\n            int val = (gx < 0 ? -gx : gx) + (gy < 0 ? -gy : gy);\n            dst[y][x] = val > 255 ? 255 : val;\n        }\n    }\n}\n\nint main(void)\n{\n    Image img = {\n        {10,  10,  200, 200},\n        {10,  10,  200, 200},\n        {100, 100,  50,  50},\n        {100, 100,  50,  50}\n    };\n\n    Image result = {{0}};\n\n    edge_detect(img, result, HEIGHT, WIDTH);\n\n    printf(\"Edge-detected image:\\n\");\n    for (int y = 0; y < HEIGHT; y++) {\n        for (int x = 0; x < WIDTH; x++) {\n            printf(\"%4d\", result[y][x]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Edge-detected image:\n   0   0   0   0\n   0 360 360   0\n   0  60 120   0\n   0   0   0   0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6152-matrix-math-33-transformations",
      children: "6.15.2 Matrix Math (3×3 Transformations)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-c",
        children: "#include <stdio.h>\n\ntypedef double Matrix3x3[3][3];\ntypedef double Vector3[3];\n\n/* Multiply two 3×3 matrices */\nvoid mat_mul(Matrix3x3 a, Matrix3x3 b, Matrix3x3 result)\n{\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            result[i][j] = 0;\n            for (int k = 0; k < 3; k++) {\n                result[i][j] += a[i][k] * b[k][j];\n            }\n        }\n    }\n}\n\n/* Apply 3×3 transformation matrix to a 3D vector */\nvoid transform_point(Matrix3x3 m, Vector3 v, Vector3 result)\n{\n    for (int i = 0; i < 3; i++) {\n        result[i] = m[i][0] * v[0] + m[i][1] * v[1] + m[i][2] * v[2];\n    }\n}\n\nint main(void)\n{\n    /* Rotation matrix (90° around Z axis) */\n    Matrix3x3 rotate_z = {\n        { 0, -1, 0},\n        { 1,  0, 0},\n        { 0,  0, 1}\n    };\n\n    Vector3 point = {1.0, 0.0, 0.0};\n    Vector3 rotated;\n\n    transform_point(rotate_z, point, rotated);\n\n    printf(\"Original point: (%.1f, %.1f, %.1f)\\n\",\n           point[0], point[1], point[2]);\n    printf(\"Rotated (90°):  (%.1f, %.1f, %.1f)\\n\",\n           rotated[0], rotated[1], rotated[2]);\n\n    /* Matrix multiplication */\n    Matrix3x3 identity;\n    mat_mul(rotate_z, rotate_z, identity);\n\n    printf(\"\\nRotation² (should be identity except first two rows negated):\\n\");\n    for (int i = 0; i < 3; i++) {\n        for (int j = 0; j < 3; j++) {\n            printf(\"%6.1f\", identity[i][j]);\n        }\n        printf(\"\\n\");\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Original point: (1.0, 0.0, 0.0)\nRotated (90°):  (0.0, 1.0, 0.0)\n\nRotation² (should be identity except first two rows negated):\n  -1.0   0.0   0.0\n   0.0  -1.0   0.0\n   0.0   0.0   1.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6153-real-world-array-usage-summary",
      children: "6.15.3 Real-World Array Usage Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array Structure"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Image processing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "unsigned char img[H][W]"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "img[H][W][3]"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Grayscale or RGB pixel data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audio buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "short samples[N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "PCM audio samples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix math"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "double A[N][N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear algebra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Game boards"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "char board[8][8]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chess, checkers, tic-tac-toe"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lookup tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const int LUT[256]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast computation via precomputed values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "String tables"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char *strings[N]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Localized UI messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Frame buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "uint32_t fb[H][W]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Display pixel buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neural networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "float weights[N][M]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Layer weight matrices"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Syntax"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Declare size N"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type name[N];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int scores[100];"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Full initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type name[] = {v1, v2};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int vals[] = {1, 2, 3};"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zero initialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type name[N] = {0};"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int arr[10] = {0};"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access element i"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name[i]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "scores[5]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2D access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name[r][c]"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "matrix[2][3]"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pass to function"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "func(arr, size);"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "process(scores, 100);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Element count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(arr)/sizeof(arr[0])"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only in declaration scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Array of pointers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type *name[N];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "const char *names[10];"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer to array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "type (*name)[N];"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "int (*row)[4];"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-pitfalls--checklist",
      children: "Common Pitfalls — Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      className: "contains-task-list",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Index out of bounds — C does not check!"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " on decayed pointer instead of array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Forgetting null terminator on char arrays"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " VLA too large for stack"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Returning pointer to local array"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Confusing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[N]"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[N]"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Negative index (valid only with pointer in the middle)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        className: "task-list-item",
        children: [(0,jsx_runtime.jsx)(_components.input, {
          type: "checkbox",
          disabled: true
        }), " String buffer overflow with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "strcpy"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the value of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[2]"
        }), " after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[5] = {10, 20};"
        }), "?\nA) 0\nB) undefined\nC) 30\nD) Compiler error"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**A)** Partially initialized elements are zero-filled."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void f(int a[]) { printf(\"%zu\", sizeof(a)); }"
        }), " print the wrong size?\nA) Compiler bug\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "a"
        }), " is a pointer, not an array, in the function parameter\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof"
        }), " is out of scope\nD) Array must be global"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** Array parameters decay to pointers; `sizeof(a)` returns the pointer size (4 or 8 bytes), not the array size."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How is ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int a[2][3]"
        }), " laid out in memory?\nA) Column by column\nB) Row by row — all of row 0, then all of row 1\nC) Random order\nD) Zigzag pattern"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**B)** C uses row-major order: `a[0][0], a[0][1], a[0][2], a[1][0], a[1][1], a[1][2]`."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the output of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%zu\", sizeof(int *p[5]));"
        }), " on a 64-bit system?\nA) 4\nB) 20\nC) 40\nD) 8"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** `int *p[5]` is an array of 5 pointers, each 8 bytes → 40 bytes."
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which is a valid use of a VLA?\nA) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "static int arr[n];"
        }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[n] = {0};"
        }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[n];"
        }), " inside a function\nD) ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int arr[n];"
        }), " at file scope"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.details, {
      children: (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>**C)** VLAs are allowed in function scope only, cannot be static, and cannot have initializers."
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrays are contiguous sequences of elements of the same type; indices start at 0."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr) / sizeof(arr[0])"
        }), " computes array length in the declaration scope."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Out-of-bounds access is undefined behavior and a common source of bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrays decay to pointers when passed to functions; the size must be passed separately."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "2D arrays use row-major memory layout; the column dimension must be known at compile time for function parameters."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designated initializers (C99) allow sparse array initialization."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Array of pointers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[N]"
        }), ") stores pointer values; pointer to array (", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[N]"
        }), ") points to an entire array."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "VLAs allow runtime sizing but risk stack overflow."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "String vs char array: strings are null-terminated char arrays."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Array assignment is illegal in C — use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "memcpy"
        }), " or element-by-element copy."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int a[10] = {0};"
        }), " initialize every element to?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr) / sizeof(arr[0])"
        }), " not work inside a function that receives an array parameter?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain how a 2D array ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int m[3][4]"
        }), " is laid out in memory."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is an array decay? When does it happen?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when you access ", (0,jsx_runtime.jsx)(_components.code, {
          children: "arr[10]"
        }), " in an array of size 10?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int *p[5]"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int (*p)[5]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the risks of VLAs? When would you use malloc instead?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "printf(\"%s\", char_arr)"
        }), " produce garbage if ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char_arr"
        }), " is not null-terminated?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that reads 10 floating-point numbers into an array, then prints them in reverse order."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a program that finds the minimum, maximum, and sum of elements in an integer array of size 20. Fill the array with random numbers using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "rand()"
        }), " from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stdlib.h"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program that multiplies two 3x3 matrices. Read the elements from the user into two 2D arrays, compute the product, and display the result."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function ", (0,jsx_runtime.jsx)(_components.code, {
          children: "is_palindrome"
        }), " that takes an array of characters and its size, and returns 1 if the array is a palindrome (reads the same forward and backward) and 0 otherwise."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write a function that accepts an array of string pointers (", (0,jsx_runtime.jsx)(_components.code, {
          children: "const char *arr[], int n"
        }), ") and prints them in alphabetical order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement matrix transpose: given ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int src[M][N]"
        }), ", produce ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int dst[N][M]"
        }), " where ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dst[j][i] = src[i][j]"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that implements the Sieve of Eratosthenes to find all prime numbers up to a user-specified limit ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n"
      }), ". Use an array of booleans (or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), "). The algorithm: create an array of size ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n+1"
      }), " initialized to true. Set indices 0 and 1 to false. For each ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " from 2 to sqrt(n), if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " is prime, mark all multiples of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i"
      }), " (starting from ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i*i"
      }), ") as false. Print all remaining prime numbers. Analyze the time complexity of this approach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity:"
      }), " O(n log log n) — each composite gets marked once; the inner loop runs n/i times for each prime i. Sum of reciprocals of primes ~ log log n."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Off-by-one and buffer overflow are the most common and dangerous array errors\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "sizeof(arr)/sizeof(arr[0])"
        }), " to compute element count where the array is declared; pass size separately to functions; never trust user input as an array index without validation."]
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