"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2147],{

/***/ 67722
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_04_sorting_linear_md_020_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-04-sorting-linear-md-020.json
const site_docs_courses_algorithms_04_sorting_linear_md_020_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/04-sorting-linear","title":"Chapter 4: Linear-Time Sorting","description":"Prerequisites Comparison-Based Sorting — The Ω(n log n) lower bound for comparison sorts | Next Divide and Conquer — Beyond sorting: applying divide-and-conquer broadly","source":"@site/docs/courses/algorithms/04-sorting-linear.md","sourceDirName":"courses/algorithms","slug":"/algorithms/04-sorting-linear","permalink":"/ai-engineering-journey/algorithms/04-sorting-linear","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"04-sorting-linear","slug":"/algorithms/04-sorting-linear","title":"Chapter 4: Linear-Time Sorting","sidebar_label":"Chapter 4: Linear-Time Sorting","sidebar_position":4},"sidebar":"coursesSidebar","previous":{"title":"Chapter 3: Comparison-Based Sorting","permalink":"/ai-engineering-journey/algorithms/03-sorting-nlogn"},"next":{"title":"Chapter 5: Divide and Conquer","permalink":"/ai-engineering-journey/algorithms/05-divide-conquer"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/04-sorting-linear.md


const frontMatter = {
	id: '04-sorting-linear',
	slug: '/algorithms/04-sorting-linear',
	title: 'Chapter 4: Linear-Time Sorting',
	sidebar_label: 'Chapter 4: Linear-Time Sorting',
	sidebar_position: 4
};
const contentTitle = 'Chapter 4: Linear-Time Sorting';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Linear-Time Sorting Matters",
  "id": "why-linear-time-sorting-matters",
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
  "value": "4.1 Counting Sort",
  "id": "41-counting-sort",
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
  "value": "4.2 Radix Sort",
  "id": "42-radix-sort",
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
  "value": "4.3 Bucket Sort",
  "id": "43-bucket-sort",
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
  "value": "Linear-Time Sort Comparison Table",
  "id": "linear-time-sort-comparison-table",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "When to Use Counting Sort vs Radix Sort",
  "id": "when-to-use-counting-sort-vs-radix-sort",
  "level": 3
}, {
  "value": "Sorting with Limited Range",
  "id": "sorting-with-limited-range",
  "level": 3
}, {
  "value": "Stable vs Unstable Linear Sorts",
  "id": "stable-vs-unstable-linear-sorts",
  "level": 3
}, {
  "value": "Common Interview Questions",
  "id": "common-interview-questions",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Radix Sort in GPU Sorting",
  "id": "radix-sort-in-gpu-sorting",
  "level": 3
}, {
  "value": "Counting Sort in Suffix Arrays",
  "id": "counting-sort-in-suffix-arrays",
  "level": 3
}, {
  "value": "Bucket Sort in Histograms and Image Processing",
  "id": "bucket-sort-in-histograms-and-image-processing",
  "level": 3
}, {
  "value": "More Real-World Applications",
  "id": "more-real-world-applications",
  "level": 3
}, {
  "value": "Example 4.1: Counting Sort in C++",
  "id": "example-41-counting-sort-in-c",
  "level": 3
}, {
  "value": "Example 4.2: Radix Sort in C++",
  "id": "example-42-radix-sort-in-c",
  "level": 3
}, {
  "value": "Example 4.3: Sorting Comparison Table",
  "id": "example-43-sorting-comparison-table",
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
        id: "chapter-4-linear-time-sorting",
        children: "Chapter 4: Linear-Time Sorting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/03-sorting-nlogn",
          children: "Chapter 3: Comparison-Based Sorting"
        }), " — The Ω(n log n) lower bound for comparison sorts | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/05-divide-conquer",
          children: "Chapter 5: Divide and Conquer"
        }), " — Beyond sorting: applying divide-and-conquer broadly"]
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
        href: "../../assets/images/lessons/algorithms/04-sorting-linear/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/04-sorting-linear/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/04-sorting-linear/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/04-sorting-linear/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/04-sorting-linear/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/04-sorting-linear/visual-explanation.png",
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
        children: "Implement counting sort, radix sort, and bucket sort in C++, Python, and Java."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine when non-comparison sorting is applicable based on key properties."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the time and space trade-offs of linear-time sorting algorithms."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare all sorting algorithms across key dimensions: time, space, stability, and data assumptions."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify real-world systems that rely on linear-time sorting for performance."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-linear-time-sorting-matters",
      children: "Why Linear-Time Sorting Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are a teacher with 1,000 exam papers, each graded 0–100. You need to sort them by score so you can enter grades. You ", (0,jsx_runtime.jsx)(_components.em, {
        children: "could"
      }), " compare every pair of papers (comparison sort, O(n log n) ≈ 10,000 comparisons). Or you could make 101 piles on a table, drop each paper into its score's pile, and simply stack the piles in order. That is exactly what counting sort does — and it runs in O(n + k) time, completely bypassing the Ω(n log n) comparison barrier."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This is the central insight of this chapter: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "when keys have structure (small ranges, fixed widths, uniform distributions), you do not need comparisons."
      }), " You can sort in linear time by exploiting that structure directly. The practical impact is enormous — from GPU-accelerated radix sort in database engines to counting-sort-based suffix array construction in bioinformatics."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count frequencies, compute prefix sums, place elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k) time — blistering fast when key range k is small"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sort digit by digit using stable sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r)) — ideal for fixed-width integers and strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribute into buckets, sort individually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected O(n) — excellent on uniformly distributed data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison Bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key structure replaces comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-comparison sorts beat Ω(n log n) by exploiting key properties"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Non-Comparison Sorting] --> B[Counting Sort]\n    A --> C[Radix Sort]\n    A --> D[Bucket Sort]\n    B --> E[O(n+k), stable]\n    C --> F[O(d(n+r)), stable]\n    D --> G[Expected O(n)]\n    E --> H[Choose by key properties]\n    F --> H\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch04-sorting-linear.png",
        alt: "Linear-Time Sort Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The ( \\Omega(n \\log n) ) lower bound for comparison sorting (Theorem 3.1) applies only to algorithms that use comparisons as their sole means of gaining information about element order. By exploiting the structure of keys — their range, digit composition, or distribution — we can achieve sorting in ( O(n) ) time."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-counting-sort",
      children: "4.1 Counting Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are sorting 500 student answer sheets by roll number (1–100). Instead of comparing roll numbers pairwise, you prepare 100 slots, place each sheet into the slot matching its roll number, then collect the slots in order. No comparisons needed — just distribution and collection."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Idea:"
      }), " Counting sort assumes the input consists of integers in a known range ([0, k-1]). It counts the frequency of each distinct key, computes prefix sums to determine final positions, and places elements directly into their correct output positions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Beats Ω(n log n):"
      }), " Counting sort never compares two elements. It uses the element values as indices into a count array. The Ω(n log n) bound applies only to algorithms that rely on pairwise comparisons to determine order. By using direct array indexing, counting sort escapes this bound entirely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Create count array C[0..k-1], initialized to 0.\nStep 2: Count frequencies — for each element x in A, increment C[x].\nStep 3: Compute prefix sums — for i = 1 to k-1, set C[i] = C[i] + C[i-1].\nStep 4: Build output — for i = n-1 down to 0:\n            Place A[i] at index C[A[i]] - 1 in output.\n            Decrement C[A[i]].\nStep 5: Return output array.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "COUNTING-SORT(A, n, k)\n    let Count[0..k-1] be a new array initialized to 0\n    let Output[0..n-1] be a new array\n    // Step 2: Count frequencies\n    for i = 0 to n-1 do\n        Count[A[i]] = Count[A[i]] + 1\n    // Step 3: Compute prefix sums (cumulative counts)\n    for i = 1 to k-1 do\n        Count[i] = Count[i] + Count[i-1]\n    // Step 4: Build output array (right-to-left for stability)\n    for i = n-1 down to 0 do\n        Output[Count[A[i]] - 1] = A[i]\n        Count[A[i]] = Count[A[i]] - 1\n    return Output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [4, 2, 2, 8, 3, 3, 1]"
      }), ", Range ", (0,jsx_runtime.jsx)(_components.code, {
        children: "k = 9"
      }), " (values 0–8), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n = 7"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 2 — Frequency Count:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "8"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 3 — Prefix Sums (Cumulative Count):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "8"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each prefix value C[i] = number of elements ≤ i."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Step 4 — Placement (right-to-left traversal):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C[A[i]] Before"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output Index"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, _, _, _, _, _, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, _, _, _, 3, _, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, _, _, 3, 3, _, _]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, _, _, 3, 3, _, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, _, 2, 3, 3, _, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 2, 3, 3, _, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[1, 2, 2, 3, 3, 4, 8]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Output:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 2, 2, 3, 3, 4, 8]"
      }), " ✓"]
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
        children: "#include <vector>\n\nstd::vector<int> countingSort(const std::vector<int>& A, int k) {\n    int n = static_cast<int>(A.size());\n    std::vector<int> count(k, 0);\n    std::vector<int> output(n);\n    for (int x : A) count[x]++;\n    for (int i = 1; i < k; ++i) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; --i) {\n        output[count[A[i]] - 1] = A[i];\n        count[A[i]]--;\n    }\n    return output;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def counting_sort(arr, k):\n    n = len(arr)\n    count = [0] * k\n    output = [0] * n\n    for x in arr:\n        count[x] += 1\n    for i in range(1, k):\n        count[i] += count[i - 1]\n    for i in range(n - 1, -1, -1):\n        output[count[arr[i]] - 1] = arr[i]\n        count[arr[i]] -= 1\n    return output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static int[] countingSort(int[] arr, int k) {\n    int n = arr.length;\n    int[] count = new int[k];\n    int[] output = new int[n];\n    for (int x : arr) count[x]++;\n    for (int i = 1; i < k; i++) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; i--) {\n        output[count[arr[i]] - 1] = arr[i];\n        count[arr[i]]--;\n    }\n    return output;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Best)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One pass to count, one for prefix sums, one to place — all linear."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as best — runtime depends only on n and k, not on data order."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always runs the same three loops. No data-dependent branching."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count array of size k plus output array of size n."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right-to-left traversal preserves relative order of equal elements."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n + k) beats O(n log n):"
      }), " When k = O(n), counting sort runs in O(n) — strictly faster than any comparison sort's Ω(n log n) lower bound. The catch is that k must be small enough that the count array fits in memory."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Linear O(n + k) time when k = O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical when k is huge (e.g., sorting 10⁶ integers in range [0, 10¹²])"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable sorting algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires O(k) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement and understand"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works with integer (or integer-castable) keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No data-dependent branching — constant speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot sort by fractional keys directly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable — frequency counting is embarrassingly parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in-place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative numbers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array indices cannot be negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset: shift all values by -min(A) so range starts at 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Floating-point keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot index arrays with floats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiply + round to integer, or use bucket sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "k >> n (wide range)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Count array huge, memory wasted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch to radix sort or hash-map based counting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Duplicate-heavy data"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handled naturally — counts track multiplicity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable sort preserves original order of duplicates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loops run zero times"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output is empty — trivial base case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Correctly placed in 1 step"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always works"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Counting sort is your fastest option when keys are integers with a limited range (e.g., ages 0–150, grades 0–100, ASCII 0–255). For k ≤ n, it beats any comparison sort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The right-to-left pass is what makes counting sort stable — reversing the direction breaks stability."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Do NOT use counting sort when k is large relative to n. Sorting 10 integers in range [0, 10⁶] wastes O(10⁶) space for 10 elements."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Counting sort achieves O(n + k) by using frequencies and prefix sums instead of comparisons, perfect for small-range integer keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-radix-sort",
      children: "4.2 Radix Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " A librarian sorts books by call number. Instead of comparing full call numbers, they look at only the first digit and sort into 10 piles (0–9). Within each pile, they look at the second digit and sort further. This is MSD radix sort. A mail sorter works the other way: sort packages by the last digit of the ZIP code first, then the second-to-last, and so on — LSD radix sort. Both avoid ever comparing two full numbers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Idea:"
      }), " Radix sort processes digits from least significant to most significant (LSD-first). At each digit position, it performs a stable sort (typically counting sort) on the digit values. After processing all d digits, the array is fully sorted."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Beats Ω(n log n):"
      }), " Radix sort reduces the sorting problem to d passes of a stable sort with a small range (the digit range r). Each pass is O(n + r), and since d is a constant for fixed-width keys (e.g., d = 10 for decimal 32-bit ints when r = 10, or d = 4 when r = 256), the total is O(n) — bypassing the Ω(n log n) comparison barrier."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Find the maximum element to determine the number of digits d.\nStep 2: For each digit position exp = 1, 10, 100, ... (up to the most significant digit):\nStep 3:   Apply a stable sort (counting sort) on the digit at position exp.\nStep 4: After all d passes, the array is sorted.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "RADIX-SORT(A, n)\n    maxVal = maximum element of A\n    for exp = 1; maxVal / exp > 0; exp = exp * 10\n        COUNTING-SORT-BY-DIGIT(A, n, exp)\n\nCOUNTING-SORT-BY-DIGIT(A, n, exp)\n    let Count[0..9] be a new array initialized to 0\n    let Output[0..n-1] be a new array\n    // Count digit frequencies\n    for i = 0 to n-1 do\n        digit = (A[i] / exp) % 10\n        Count[digit] = Count[digit] + 1\n    // Prefix sums\n    for i = 1 to 9 do\n        Count[i] = Count[i] + Count[i-1]\n    // Place elements by digit (right-to-left for stability)\n    for i = n-1 down to 0 do\n        digit = (A[i] / exp) % 10\n        Output[Count[digit] - 1] = A[i]\n        Count[digit] = Count[digit] - 1\n    // Copy back to original array\n    for i = 0 to n-1 do\n        A[i] = Output[i]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-1",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [329, 457, 657, 839, 436, 720, 355]"
      }), ", Base = 10"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 1 — Sort by units digit (exp = 1):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Original"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digit (÷1 % 10)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "329"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "457"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "657"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "839"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "436"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "355"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Counting sort by digit → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[720, 355, 436, 457, 657, 329, 839]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 2 — Sort by tens digit (exp = 10):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "After Pass 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digit (÷10 % 10)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "355"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "436"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "457"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "657"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "329"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "839"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Counting sort by digit → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[720, 329, 436, 839, 355, 457, 657]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pass 3 — Sort by hundreds digit (exp = 100):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "After Pass 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Digit (÷100 % 10)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "720"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "329"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "436"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "839"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "355"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "457"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "657"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Counting sort by digit → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[329, 355, 436, 457, 657, 720, 839]"
      }), " ✓"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 4.1 (Radix sort correctness)."
      }), " Given ( d )-digit numbers where each digit is in the range ([0, r-1]), LSD-first radix sort with a stable digit sort correctly sorts the input."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof by induction."
      }), " After processing the ( i ) least significant digits, the array is sorted by those digits. The stable sort on the ((i+1))-th digit preserves the relative order of elements with equal ((i+1))-th digit, maintaining the correctness of the previously sorted lower digits."]
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
        children: "#include <vector>\n#include <algorithm>\n\nvoid countingSortForRadix(std::vector<int>& A, int exp) {\n    int n = static_cast<int>(A.size());\n    std::vector<int> output(n);\n    std::vector<int> count(10, 0);\n    for (int i = 0; i < n; ++i) count[(A[i] / exp) % 10]++;\n    for (int i = 1; i < 10; ++i) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; --i) {\n        int digit = (A[i] / exp) % 10;\n        output[count[digit] - 1] = A[i];\n        count[digit]--;\n    }\n    for (int i = 0; i < n; ++i) A[i] = output[i];\n}\n\nvoid radixSort(std::vector<int>& A) {\n    if (A.empty()) return;\n    int maxVal = *std::max_element(A.begin(), A.end());\n    for (int exp = 1; maxVal / exp > 0; exp *= 10)\n        countingSortForRadix(A, exp);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def counting_sort_for_radix(arr, exp):\n    n = len(arr)\n    output = [0] * n\n    count = [0] * 10\n    for i in range(n):\n        digit = (arr[i] // exp) % 10\n        count[digit] += 1\n    for i in range(1, 10):\n        count[i] += count[i - 1]\n    for i in range(n - 1, -1, -1):\n        digit = (arr[i] // exp) % 10\n        output[count[digit] - 1] = arr[i]\n        count[digit] -= 1\n    for i in range(n):\n        arr[i] = output[i]\n\ndef radix_sort(arr):\n    if not arr:\n        return\n    max_val = max(arr)\n    exp = 1\n    while max_val // exp > 0:\n        counting_sort_for_radix(arr, exp)\n        exp *= 10\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public static void countingSortForRadix(int[] arr, int exp) {\n    int n = arr.length;\n    int[] output = new int[n];\n    int[] count = new int[10];\n    for (int i = 0; i < n; i++) count[(arr[i] / exp) % 10]++;\n    for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; i--) {\n        int digit = (arr[i] / exp) % 10;\n        output[count[digit] - 1] = arr[i];\n        count[digit]--;\n    }\n    System.arraycopy(output, 0, arr, 0, n);\n}\n\npublic static void radixSort(int[] arr) {\n    if (arr.length == 0) return;\n    int maxVal = Arrays.stream(arr).max().getAsInt();\n    for (int exp = 1; maxVal / exp > 0; exp *= 10)\n        countingSortForRadix(arr, exp);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Best)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "d passes, each running a stable sort over n elements with digit range r."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as best — no data-dependent branches."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always d passes, regardless of input order."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + r)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output array of size n plus count array of size r per pass."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each digit-wise counting sort is stable; composition of stable sorts remains stable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why d is effectively constant:"
      }), " For 32-bit integers with base 256, d = 4 passes. For strings of fixed length L, d = L. In both cases, d is a small constant, making total time O(n)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Choosing the base r:"
      }), " Larger r means fewer passes (smaller d) but a larger count array (O(r) space). Optimal r balances d and r — typically base 256 (byte-by-byte) is the practical sweet spot for integer sorting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Linear O(d(n+r)) time for fixed-width keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires O(n + r) extra space per pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stable sorting algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works with keys that decompose into digits/fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles very large ranges efficiently (unlike counting sort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than quick sort on small arrays due to overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for string sorting (fixed-length)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSD sort needs all keys to have the same length (or padding)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Highly parallelizable — each digit pass is independent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in-place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative numbers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit extraction fails on negative values"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate negatives, sort magnitudes, reverse and append"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Floating-point keys"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit extraction undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reinterpret bytes (e.g., IEEE 754 bit pattern) and sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Variable-length strings"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shorter strings lack digits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pad with sentinel value (e.g., smallest char) or group by length first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Large base (r close to n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sort overhead high"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch to comparison sort within each digit group"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All same values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All digits equal, but passes still run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(dn) time even though input is already sorted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single digit values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only one pass needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radix collapses to counting sort"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Choose radix base wisely — base 256 (byte-by-byte) on 32-bit integers needs only 4 passes, each with r = 256 counters. This usually beats base 10's 10 passes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Radix sort only works with LSD-first for general inputs. MSD-first requires recursion and can degrade."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Radix sort is the fastest integer sorting algorithm in practice for large arrays — GPU implementations sort 10⁸ integers in under a second."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Radix sort achieves O(n) for fixed-width keys by processing digits one at a time with a stable auxiliary sort, bypassing the Ω(n log n) comparison bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-bucket-sort",
      children: "4.3 Bucket Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You need to sort 1,000 exam scores (between 0 and 100) that are uniformly distributed. You create 10 buckets labeled 0–9, 10–19, ..., 90–100. You drop each score into its bucket. Then you sort each bucket individually (with a simple sort like insertion sort) and concatenate the buckets. Since scores are uniformly distributed, each bucket has roughly 100 items, and sorting 100 items 10 times is much faster than sorting 1,000 items at once."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Idea:"
      }), " Bucket sort assumes input is uniformly distributed over an interval ([0, 1)). It partitions the interval into ( n ) equal-sized buckets, distributes the elements into buckets, sorts each bucket (typically with insertion sort), and concatenates the buckets."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why It Beats Ω(n log n):"
      }), " The expected number of elements per bucket is O(1) when the input is uniformly distributed. Sorting O(1) elements per bucket costs O(1) per bucket using insertion sort, giving O(n) total. The Ω(n log n) bound assumes pairwise comparisons across all n elements — bucket sort avoids this by restricting comparisons to within small groups."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: Create n empty buckets (lists).\nStep 2: For each element A[i], insert it into bucket floor(n * A[i]).\nStep 3: Sort each non-empty bucket using insertion sort.\nStep 4: Concatenate all buckets in order.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-2",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BUCKET-SORT(A, n)\n    let B[0..n-1] be an array of empty lists\n    // Distribute elements into buckets\n    for i = 0 to n-1 do\n        let index = floor(n * A[i])\n        insert A[i] into B[index]\n    // Sort each bucket\n    for i = 0 to n-1 do\n        sort list B[i] using insertion sort\n    // Concatenate all buckets\n    let Output be an empty list\n    for i = 0 to n-1 do\n        Output = Output + B[i]\n    return Output\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "dry-run-with-trace-table-2",
      children: "Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "n = 10"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Distribution into buckets (bucket index = floor(10 × A[i])):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket Index"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.94"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Bucket Contents (before sorting):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 6"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 7"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 8"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 9"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.17, 0.12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.26, 0.21, 0.23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.78, 0.72"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.94"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "After Insertion Sort (within each bucket):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 0"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 1"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 2"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 3"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 4"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 5"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 6"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 7"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 8"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket 9"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.12, 0.17"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.21, 0.23, 0.26"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.39"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.72, 0.78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0.94"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final Concatenated Output:"
      }), "\n", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0.12, 0.17, 0.21, 0.23, 0.26, 0.39, 0.68, 0.72, 0.78, 0.94]"
      }), " ✓"]
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
        children: "#include <vector>\n#include <algorithm>\n#include <list>\n\nvoid bucketSort(std::vector<double>& A) {\n    int n = static_cast<int>(A.size());\n    std::vector<std::list<double>> buckets(n);\n    for (double x : A) {\n        int idx = static_cast<int>(n * x);\n        buckets[idx].push_back(x);\n    }\n    for (auto& bucket : buckets)\n        bucket.sort();\n    A.clear();\n    for (auto& bucket : buckets)\n        for (double x : bucket)\n            A.push_back(x);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def bucket_sort(arr):\n    n = len(arr)\n    buckets = [[] for _ in range(n)]\n    for x in arr:\n        idx = int(n * x)\n        buckets[idx].append(x)\n    for i in range(n):\n        buckets[i].sort()\n    result = []\n    for bucket in buckets:\n        result.extend(bucket)\n    return result\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic static void bucketSort(double[] arr) {\n    int n = arr.length;\n    @SuppressWarnings(\"unchecked\")\n    List<Double>[] buckets = new ArrayList[n];\n    for (int i = 0; i < n; i++) buckets[i] = new ArrayList<>();\n    for (double x : arr) {\n        int idx = (int)(n * x);\n        buckets[idx].add(x);\n    }\n    for (List<Double> bucket : buckets)\n        Collections.sort(bucket);\n    int idx = 0;\n    for (List<Double> bucket : buckets)\n        for (double x : bucket)\n            arr[idx++] = x;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Best)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "k buckets, uniform distribution, O(1) per bucket."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All elements land in one bucket — insertion sort on n elements."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform distribution gives expected O(1) elements per bucket."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n buckets storing n elements total."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on internal sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If insertion sort is used for buckets, bucket sort is stable."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof of expected O(n) bound."
      }), " Let the random variable ( n_i ) be the number of elements in bucket ( i ). Each ( n_i ) follows a binomial distribution: ( n_i \\sim \\text{Bin}(n, 1/n) ). The expected value ( E[n_i] = 1 ). Insertion sort on ( n_i ) elements runs in ( O(n_i^2) ) time. The expected total time is:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nE\\left[\\sum_{i=0}^{n-1} O(n_i^2)\\right] = O\\left(\\sum_{i=0}^{n-1} E[n_i^2]\\right) = O\\left(\\sum_{i=0}^{n-1} (\\text{Var}(n_i) + (E[n_i])^2)\\right) = O\\left(\\sum_{i=0}^{n-1} \\left(1 - \\frac{1}{n}\\right) + 1\\right) = O(n).\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "advantages--disadvantages-2",
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
            children: "Expected O(n) time — fastest for uniformly distributed data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Worst-case O(n²) — catastrophic on non-uniform data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to understand and implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for non-uniform distributions without tuning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Works naturally with floating-point keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires prior knowledge of the distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easy to parallelize — each bucket sorts independently"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra overhead for bucket creation and concatenation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Can use different internal sort per bucket"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in-place"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Edge Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mitigation"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All elements in one bucket"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades to O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use a balanced hash function or fallback to comparison sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Non-uniform distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Some buckets crowded, some empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use adaptive bucket sizing or different algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Values outside [0, 1)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket indexing fails"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize: subtract min, divide by range"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Negative values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "floor(n × x) can be negative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shift range to [0, 1) via normalization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Very small n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overhead of bucket creation dominates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use insertion sort directly for n < threshold"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All equal values"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All go to same bucket → O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fallback to counting sort if duplicates are heavy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Bucket sort needs a good hash function that distributes elements uniformly. If your data is not uniform, use a different algorithm — bucket sort degrades to O(n²)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Bucket sort is efficient only when the number of buckets is proportional to n and the distribution is uniform."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Never assume uniform distribution without checking — test your data first or add a fallback to a comparison sort."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Bucket sort achieves expected O(n) by distributing elements into sorted buckets, relying on uniform distribution for its probabilistic guarantee."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "linear-time-sort-comparison-table",
      children: "Linear-Time Sort Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bucket Sort"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-comparison, distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-comparison, digit-wise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-comparison, distribution"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Average)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Θ(n) expected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Time (Worst)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(d(n + r))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n²)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + r) per pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer (small range)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer/string (fixed-width)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Float (uniform distribution)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on internal sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Place"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small integer ranges, k = O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-width keys, large n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniformly distributed floats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large range k >> n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable-length keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-uniform data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelizable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (frequency count)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (per digit pass)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (per bucket)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Assumption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Integer keys in [0, k-1]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Keys decompose into d digits"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniform distribution over [0, 1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-counting-sort-vs-radix-sort",
      children: "When to Use Counting Sort vs Radix Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counting Sort"
        }), " wins when the key range k is small relative to n (e.g., sorting 10⁶ people by age 0–150). If k ≤ 10n and k ≈ n, counting sort is simplest and fastest."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Radix Sort"
        }), " wins when the key range is huge but the keys have a digit structure (e.g., sorting 10⁶ 64-bit integers). Counting sort would need O(10¹⁹) space, but radix sort with base 2¹⁶ needs only 4 passes of O(n + 65536) each."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rule of thumb:"
        }), " If k ≤ 10n, use counting sort. If k is unbounded but keys are fixed-width integers, use radix sort."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sorting-with-limited-range",
      children: "Sorting with Limited Range"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When the interviewer says \"sort in O(n) time,\" they are testing whether you recognize that non-comparison sorts exist. The follow-up is always: ", (0,jsx_runtime.jsx)(_components.em, {
        children: "What assumption about the data makes this possible?"
      }), " The answer must include the key property (small range, digit structure, uniform distribution) that circumvents the Ω(n log n) bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stable-vs-unstable-linear-sorts",
      children: "Stable vs Unstable Linear Sorts"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stable?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mechanism"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Right-to-left placement preserves original order of equal keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends on stable digit-wise sort; composition of stable sorts is stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (with insertion sort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Insertion sort within buckets is stable; bucket order is maintained"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why stability matters in radix sort:"
      }), " If the per-digit sort were not stable, LSD radix sort would fail entirely. Stability ensures that earlier (less significant) digit sorts are preserved when later digits are processed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-interview-questions",
      children: "Common Interview Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"Can you sort integers in O(n) time?\""
        }), " — Yes, with counting sort (if range is small) or radix sort (if fixed-width)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"What is the space trade-off of increasing the radix base?\""
        }), " — Fewer passes (smaller d) but larger count array (larger r). Optimize for r × d."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"Why can't you use counting sort for floating-point numbers?\""
        }), " — Floating-point indices are not valid array indices. You could reinterpret the IEEE 754 bit pattern as an integer and use radix sort."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.em, {
          children: "\"Is bucket sort always O(n)?\""
        }), " — No, only in expectation under uniform distribution. Worst-case is O(n²)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "radix-sort-in-gpu-sorting",
      children: "Radix Sort in GPU Sorting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Modern GPU sorting libraries (e.g., CUB, Thrust, C++17 parallel algorithms) implement radix sort as their primary sorting primitive. NVIDIA's CUB library sorts 10⁸ 32-bit integers in ~0.3 seconds on an A100 GPU. The key insight: radix sort is embarrassingly parallel — each digit pass can compute histograms in parallel, and the scatter operation (placing elements by digit) maps perfectly to GPU thread blocks. Comparison-based sorts (quick sort, merge sort) do not parallelize nearly as well on GPU architectures."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "counting-sort-in-suffix-arrays",
      children: "Counting Sort in Suffix Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The suffix array — a sorted array of all suffixes of a string — is a fundamental data structure in stringology and bioinformatics. The SA-IS algorithm (Nong-Zhang-Chan 2009) and induced sorting use counting sort as a subroutine to sort suffixes by their first character (the LMS characters). Since the alphabet size is typically small (4 for DNA, 26 for proteins, 256 for bytes), counting sort at each induction step runs in O(n + Σ) time, contributing to the overall O(n) suffix array construction."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "bucket-sort-in-histograms-and-image-processing",
      children: "Bucket Sort in Histograms and Image Processing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Digital image processing uses bucket sort (often called ", (0,jsx_runtime.jsx)(_components.em, {
        children: "histogram equalization"
      }), ") to redistribute pixel intensities. Each pixel's intensity value (0–255) maps to a bucket, and cumulative distribution functions derived from bucket counts are used to stretch the intensity range for contrast enhancement. Database query engines also use bucket sort-like partitioning for approximate query processing — dividing data into equi-width histograms to estimate selectivity without full sorting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-real-world-applications",
      children: "More Real-World Applications"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Network packet queues (priority 0–7)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) per-packet sorting by QoS priority"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETL pipelines sorting by category ID"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small integer keys, high throughput needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database index construction (sorted runs)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-width composite keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Genomics — sorting k-mers by nucleotide order"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Alphabet size 4, very long strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate sorting in data streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded error, memory-efficient"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load balancing — partition tasks into priority buckets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) distribution, O(1) per-bucket processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-41-counting-sort-in-c",
      children: "Example 4.1: Counting Sort in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n\nstd::vector<int> countingSort(const std::vector<int>& A, int k) {\n    int n = static_cast<int>(A.size());\n    std::vector<int> count(k, 0);\n    std::vector<int> output(n);\n    for (int x : A) count[x]++;\n    for (int i = 1; i < k; ++i) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; --i) {\n        output[count[A[i]] - 1] = A[i];\n        count[A[i]]--;\n    }\n    return output;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-42-radix-sort-in-c",
      children: "Example 4.2: Radix Sort in C++"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nvoid countingSortForRadix(std::vector<int>& A, int exp) {\n    int n = static_cast<int>(A.size());\n    std::vector<int> output(n);\n    std::vector<int> count(10, 0);\n    for (int i = 0; i < n; ++i) count[(A[i] / exp) % 10]++;\n    for (int i = 1; i < 10; ++i) count[i] += count[i - 1];\n    for (int i = n - 1; i >= 0; --i) {\n        int digit = (A[i] / exp) % 10;\n        output[count[digit] - 1] = A[i];\n        count[digit]--;\n    }\n    for (int i = 0; i < n; ++i) A[i] = output[i];\n}\n\nvoid radixSort(std::vector<int>& A) {\n    if (A.empty()) return;\n    int maxVal = *std::max_element(A.begin(), A.end());\n    for (int exp = 1; maxVal / exp > 0; exp *= 10)\n        countingSortForRadix(A, exp);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-43-sorting-comparison-table",
      children: "Example 4.3: Sorting Comparison Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " 10 million 32-bit integers."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.2 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place, randomized"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~1.5 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, predictable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2.8 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place, worst-case guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.2 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n + k) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for large ( k )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.4 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent for fixed-width keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~0.3 s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires uniform distribution"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequency → prefix sum → placement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n + k) time, O(n + k) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Small integer ranges"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Digit-by-digit stable sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple passes, each a stable sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed-width integers, strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distribute → sort buckets → concatenate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expected O(n), worst O(n²)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniformly distributed floats"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LSD vs MSD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Least vs Most Significant Digit first"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LSD processes with stable sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radix sort choice matters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison Bypass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use key structure, not comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beats Ω(n log n) bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale data with structured keys"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Key Range Small"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sort — O(n + k), stable"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fixed-Width Integers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Radix sort with base 256 — best practical linear sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Uniform Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket sort — O(n) expected"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sort, radix sort (per digit)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Place"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None of these — all require extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using counting sort with huge k; using bucket sort on non-uniform data"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Counting Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally — sort by age/grade"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare — only when k constraint exists"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key-indexed counting theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Radix Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sometimes — sort strings, sort by multiple keys"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in suffix array construction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database sort optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear-time sorting theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Bucket Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally asked conceptually"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rare — needs uniform guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Approximate sorting, histogramming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average-case analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Non-Comparison Insight"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently — \"sort in O(n)\" questions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing correct algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large-scale data pipeline design"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower bound understanding"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Counting sort:"
        }), " ( O(n + k) ), stable, excellent when the key range ( k ) is ( O(n) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Radix sort:"
        }), " ( O(d(n + r)) ), stable at each digit pass, ideal for fixed-width integer keys."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bucket sort:"
        }), " Expected ( O(n) ), requires a uniform distribution and a good hash function."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-comparison sorts exploit key structure and are not subject to the ( \\Omega(n \\log n) ) lower bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The choice of sorting algorithm depends on data characteristics, memory constraints, and stability requirements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-world systems (GPU sorting, suffix arrays, image processing) rely on linear-time sorting for performance-critical paths."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which non-comparison sort has O(n + k) time complexity?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Radix sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Bucket sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Counting sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Quick sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Counting sort — O(n + k) where k is the key range.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the worst-case time complexity of bucket sort?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) O(n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) O(n log n)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) O(n²)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) O(log n)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) O(n²) — when all elements land in a single bucket.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " How many passes does radix sort need for 32-bit integers using base 256?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 8"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 32"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) 4 — each pass processes 8 bits (256 values), and 32/8 = 4.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Why does counting sort beat the Ω(n log n) lower bound?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It uses a faster comparison network"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It uses array indexing instead of comparisons"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It only works on small inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It uses randomization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Counting sort uses element values as array indices rather than pairwise comparisons, bypassing the comparison-based lower bound entirely.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which sorting algorithm is used as a subroutine in SA-IS suffix array construction?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Quick sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Radix sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Counting sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Bucket sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Counting sort — the SA-IS algorithm uses counting sort to sort LMS characters by their first character, exploiting the small alphabet size.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is counting sort stable only when scanning from right to left?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the effect of choosing base ( 2^8 ) versus base ( 2^{16} ) for radix sort on 32-bit integers?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what conditions does bucket sort degrade to ( O(n^2) )?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Can radix sort be applied to floating-point numbers? Explain."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does stability matter for the correctness of LSD radix sort?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why counting sort, radix sort, and bucket sort are not subject to the Ω(n log n) lower bound on comparison sorting."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement counting sort that handles negative integers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify radix sort to sort strings of varying lengths."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a hybrid sort that uses insertion sort when a bucket contains fewer than 16 elements."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given 1 billion 64-bit integers, design a sorting strategy that uses at most 1 GB of memory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a sorting algorithm for integers in the range ([0, n^c - 1]) that runs in ( O(n) ) expected time using ( O(n) ) space. Prove the bound."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement radix sort that sorts by IEEE 754 bit representation, correctly handling positive and negative floats. Prove correctness for all finite floating-point values."
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