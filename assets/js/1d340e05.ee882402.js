"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[80453],{

/***/ 69772
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_05_divide_conquer_md_1d3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-05-divide-conquer-md-1d3.json
const site_docs_courses_algorithms_05_divide_conquer_md_1d3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/05-divide-conquer","title":"Chapter 5: Divide and Conquer","description":"Prerequisites Fundamentals of Algorithm Analysis — Master theorem, recurrence relations | Next Greedy Algorithms — From divide-and-conquer to locally optimal choices","source":"@site/docs/courses/algorithms/05-divide-conquer.md","sourceDirName":"courses/algorithms","slug":"/algorithms/05-divide-conquer","permalink":"/ai-engineering-journey/algorithms/05-divide-conquer","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-divide-conquer","slug":"/algorithms/05-divide-conquer","title":"Chapter 5: Divide and Conquer","sidebar_label":"Chapter 5: Divide and Conquer","sidebar_position":5},"sidebar":"coursesSidebar","previous":{"title":"Chapter 4: Linear-Time Sorting","permalink":"/ai-engineering-journey/algorithms/04-sorting-linear"},"next":{"title":"Chapter 6: Greedy Algorithms","permalink":"/ai-engineering-journey/algorithms/06-greedy"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/05-divide-conquer.md


const frontMatter = {
	id: '05-divide-conquer',
	slug: '/algorithms/05-divide-conquer',
	title: 'Chapter 5: Divide and Conquer',
	sidebar_label: 'Chapter 5: Divide and Conquer',
	sidebar_position: 5
};
const contentTitle = 'Chapter 5: Divide and Conquer';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Divide and Conquer Matters",
  "id": "why-divide-and-conquer-matters",
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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "5.1 Maximum Subarray Problem",
  "id": "51-maximum-subarray-problem",
  "level": 3
}, {
  "value": "5.2 Strassen&#39;s Matrix Multiplication",
  "id": "52-strassens-matrix-multiplication",
  "level": 3
}, {
  "value": "5.3 Closest Pair of Points",
  "id": "53-closest-pair-of-points",
  "level": 3
}, {
  "value": "5.4 Karatsuba Multiplication",
  "id": "54-karatsuba-multiplication",
  "level": 3
}, {
  "value": "5.5 When Divide and Conquer Fails",
  "id": "55-when-divide-and-conquer-fails",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Closest Pair Variations",
  "id": "closest-pair-variations",
  "level": 3
}, {
  "value": "Maximum Subarray: Kadane vs. Divide-and-Conquer",
  "id": "maximum-subarray-kadane-vs-divide-and-conquer",
  "level": 3
}, {
  "value": "Strassen&#39;s Algorithm",
  "id": "strassens-algorithm",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "MapReduce (Google&#39;s Distributed Computing Framework)",
  "id": "mapreduce-googles-distributed-computing-framework",
  "level": 3
}, {
  "value": "Parallel Sorting in Databases",
  "id": "parallel-sorting-in-databases",
  "level": 3
}, {
  "value": "Fast Fourier Transform (FFT)",
  "id": "fast-fourier-transform-fft",
  "level": 3
}, {
  "value": "Merge Sort (Everywhere)",
  "id": "merge-sort-everywhere",
  "level": 3
}, {
  "value": "QuickSelect (Order Statistics)",
  "id": "quickselect-order-statistics",
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
    br: "br",
    code: "code",
    details: "details",
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
        id: "chapter-5-divide-and-conquer",
        children: "Chapter 5: Divide and Conquer"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/01-analysis",
          children: "Chapter 1: Fundamentals of Algorithm Analysis"
        }), " — Master theorem, recurrence relations | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/06-greedy",
          children: "Chapter 6: Greedy Algorithms"
        }), " — From divide-and-conquer to locally optimal choices"]
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
        href: "../../assets/images/lessons/algorithms/05-divide-conquer/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/05-divide-conquer/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/05-divide-conquer/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/05-divide-conquer/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/algorithms/05-divide-conquer/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/algorithms/05-divide-conquer/visual-explanation.png",
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
        children: "Apply the divide-and-conquer paradigm to novel problems."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve the maximum subarray problem in ( O(n \\log n) ) time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze Strassen's matrix multiplication and Karatsuba multiplication."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the closest pair of points algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Recognize when divide-and-conquer is — and is not — the right tool."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Relate divide-and-conquer to real-world distributed systems like MapReduce."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-divide-and-conquer-matters",
      children: "Why Divide and Conquer Matters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you are the project lead for a team building a 50-story skyscraper. If you try to supervise every single brick yourself, the project stalls. Instead, you split the work: one team handles the foundation, another the steel frame, another the electrical wiring. Each team works independently on their sub-problem, then you merge the results into a complete building. This is divide-and-conquer in action."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Divide-and-conquer is the most fundamental strategy for scaling solutions. Every time you use ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Merge Sort"
      }), ", execute a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary search"
      }), ", run a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "MapReduce"
      }), " job, or compute an ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "FFT"
      }), ", you are leaning on this pattern. It teaches a crucial lesson: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "a problem too big to solve is often a set of smaller problems you can solve trivially"
      }), ". The art lies in how you split and how you combine."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Why It Matters:"
        }), " Divide-and-conquer is the foundation of parallel computing. Without it, Google's PageRank, Netflix's recommendation engine, and modern weather simulation would be computationally impossible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maximum Subarray"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crossing sum requires linear scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kadane's ( O(n) ) DP beats divide-and-conquer ( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strassen's Matrix Mult"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 multiplications instead of 8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{2.807}) ) — breakthrough but high constant factor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Closest Pair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strip of width ( 2\\delta ), only 7 comparisons per point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classic ( O(n \\log n) ) geometric algorithm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Karatsuba Multiplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 multiplications instead of 4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{1.585}) ) — first fast multiplication algorithm"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Divide and Conquer] --> B[Max Subarray]\n    A --> C[Strassen's Matrix]\n    A --> D[Closest Pair]\n    A --> E[Karatsuba Mult]\n    B --> F[\"T(n)=2T(n/2)+O(n)\"]\n    C --> G[\"T(n)=7T(n/2)+O(n²)\"]\n    D --> H[\"T(n)=2T(n/2)+O(n)\"]\n    E --> I[\"T(n)=3T(n/2)+O(n)\"]\n    F --> J[Θ(n log n)]\n    G --> K[O(n^2.807)]\n    H --> L[O(n log n)]\n    I --> M[O(n^1.585)]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch05-divide-conquer.png",
        alt: "Divide and Conquer Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-maximum-subarray-problem",
      children: "5.1 Maximum Subarray Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given an array ( A ) of ( n ) integers (which may be negative), find the contiguous subarray with the largest sum."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are a stock trader analyzing price fluctuations over 30 days. You want the contiguous window where buying then selling yields the maximum profit. The \"crossing\" case corresponds to a trade that starts in the first half of the month and ends in the second half — you must consider windows that cross the midpoint."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide:"
        }), " Split the array into two halves at the midpoint."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conquer:"
        }), " Recursively find the maximum subarray in the left half and the right half."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " Find the maximum subarray that ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "crosses"
        }), " the midpoint by expanding outward from the center, then return the maximum of left, right, and crossing sums."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Base Case:"
        }), " If the subarray has one element, return that element."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-CROSSING-SUM(A, low, mid, high)\n    leftSum = -∞\n    sum = 0\n    for i = mid downto low\n        sum = sum + A[i]\n        if sum > leftSum\n            leftSum = sum\n    rightSum = -∞\n    sum = 0\n    for i = mid + 1 to high\n        sum = sum + A[i]\n        if sum > rightSum\n            rightSum = sum\n    return leftSum + rightSum\n\nMAX-SUBARRAY(A, low, high)\n    if high == low\n        return A[low]               // base case: one element\n    else\n        mid = ⌊(low + high) / 2⌋\n        leftSum = MAX-SUBARRAY(A, low, mid)\n        rightSum = MAX-SUBARRAY(A, mid + 1, high)\n        crossSum = MAX-CROSSING-SUM(A, low, mid, high)\n        return max(leftSum, rightSum, crossSum)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run with Trace Table:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Array: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [-2, 1, -3, 4, -1, 2, 1, -5, 4]"
      }), " (indices 0–8)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Call"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cross"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "level 0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left(0,4)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left(0,2)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "left(0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "base(0,0)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "base(1,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "1"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "cross(0,0,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "max(0→0: -2)= -2? Wait — let me recalculate."
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Final"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (left [4,-1,2,1]=6)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "right [4]=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cross [4,-1,2,1]=6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The crossing sum at the top level: expanding from mid=4:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Left side (i=4 down to 0): ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[4]=-1, +A[3]=3, +A[2]=0, +A[1]=1, +A[0]=-1"
        }), " → leftSum = 3 (at positions 1–4? Let me carefully trace.)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Let's trace carefully for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MAX-CROSSING-SUM(A, 0, 4, 8)"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Left sweep (i=4 down to 0):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=4: sum=-1 → leftSum=-1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=3: sum=-1+4=3 → leftSum=3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=2: sum=3+(-3)=0 → leftSum=3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=1: sum=0+1=1 → leftSum=3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=0: sum=1+(-2)=-1 → leftSum=3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Right sweep (i=5 to 8):"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=5: sum=2 → rightSum=2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=6: sum=2+1=3 → rightSum=3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=7: sum=3+(-5)=-2 → rightSum=3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "i=8: sum=-2+4=2 → rightSum=3"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "crossSum = 3 + 3 = 6"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Left recursive result (indices 0–4) = 4 (subarray [4,-1] with sum 3? No — let's trust the final: left=4 in the trace is actually... The maximum subarray entirely in left half (0–4) is [4,-1] with sum 3? Wait. Actually [4, -1, 2, 1] = 6 spans indices 3–6, which crosses. Within 0–4 only, the max is subarray [4] = 4 at index 3. So left=4. Right half (5–8) max is [2,1]=3 at indices 5–6 or [4]=4 at index 8. So right=4. Cross=6. Result = max(4,4,6) = 6. The maximum subarray is [4, -1, 2, 1] at indices 3–6 with sum 6."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "LeftSum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "RightSum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "CrossSum"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "6"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1L"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1R"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n#include <climits>\n\nint maxCrossingSum(const std::vector<int>& A, int low, int mid, int high) {\n    int leftSum = INT_MIN, sum = 0;\n    for (int i = mid; i >= low; --i) {\n        sum += A[i];\n        leftSum = std::max(leftSum, sum);\n    }\n    int rightSum = INT_MIN;\n    sum = 0;\n    for (int i = mid + 1; i <= high; ++i) {\n        sum += A[i];\n        rightSum = std::max(rightSum, sum);\n    }\n    return leftSum + rightSum;\n}\n\nint maxSubarray(const std::vector<int>& A, int low, int high) {\n    if (low == high) return A[low];\n    int mid = low + (high - low) / 2;\n    int left = maxSubarray(A, low, mid);\n    int right = maxSubarray(A, mid + 1, high);\n    int cross = maxCrossingSum(A, low, mid, high);\n    return std::max({left, right, cross});\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\n\ndef max_crossing_sum(A, low, mid, high):\n    left_sum = -sys.maxsize - 1\n    total = 0\n    for i in range(mid, low - 1, -1):\n        total += A[i]\n        left_sum = max(left_sum, total)\n    right_sum = -sys.maxsize - 1\n    total = 0\n    for i in range(mid + 1, high + 1):\n        total += A[i]\n        right_sum = max(right_sum, total)\n    return left_sum + right_sum\n\ndef max_subarray(A, low, high):\n    if low == high:\n        return A[low]\n    mid = (low + high) // 2\n    left = max_subarray(A, low, mid)\n    right = max_subarray(A, mid + 1, high)\n    cross = max_crossing_sum(A, low, mid, high)\n    return max(left, right, cross)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MaxSubarray {\n    static int maxCrossingSum(int[] A, int low, int mid, int high) {\n        int leftSum = Integer.MIN_VALUE, sum = 0;\n        for (int i = mid; i >= low; i--) {\n            sum += A[i];\n            leftSum = Math.max(leftSum, sum);\n        }\n        int rightSum = Integer.MIN_VALUE;\n        sum = 0;\n        for (int i = mid + 1; i <= high; i++) {\n            sum += A[i];\n            rightSum = Math.max(rightSum, sum);\n        }\n        return leftSum + rightSum;\n    }\n\n    static int maxSubarray(int[] A, int low, int high) {\n        if (low == high) return A[low];\n        int mid = low + (high - low) / 2;\n        int left = maxSubarray(A, low, mid);\n        int right = maxSubarray(A, mid + 1, high);\n        int cross = maxCrossingSum(A, low, mid, high);\n        return Math.max(left, Math.max(right, cross));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " ( T(n) = 2T(n/2) + O(n) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "We split into two subproblems of size ( n/2 ) (the ( 2T(n/2) ) term) and spend ( O(n) ) time computing the crossing sum by scanning from the midpoint outward."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Theorem check:"
      }), " ( a = 2, b = 2, f(n) = O(n) ). Compute ( \\log_b a = \\log_2 2 = 1 ).", (0,jsx_runtime.jsx)(_components.br, {}), "\nSince ( f(n) = O(n^1) = O(n^{\\log_b a}) ), this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 2"
      }), " of the master theorem.", (0,jsx_runtime.jsx)(_components.br, {}), "\nResult: ( T(n) = \\Theta(n^{\\log_b a} \\log n) = \\Theta(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why not faster?"
      }), " The crossing scan forces a linear pass at every level, preventing the ( O(n) ) bound that Kadane's algorithm achieves through dynamic programming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "Teaches the divide-conquer-combine pattern clearly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower than Kadane's ( O(n) ) DP approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally parallelizable (both halves computed independently)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion overhead increases memory usage (call stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Handles all-negative arrays correctly (returns max element)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crossing-sum logic is non-intuitive for beginners"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All negative numbers:"
        }), " ([-5, -2, -3, -1]) — The algorithm correctly returns (-1) (the least negative element). Each recursive call returns its single element, and crossing sums are always more negative."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " Returns that element immediately via base case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "All identical:"
        }), " If all elements are equal (e.g., all 5s), the total sum of the entire array is returned."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array:"
        }), " Not handled by this implementation — requires a wrapper check."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " For the maximum subarray problem in interviews, use Kadane's algorithm (( O(n) ) DP) instead of the divide-and-conquer version. The divide-and-conquer approach is mainly useful for understanding the paradigm."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The crossing-sum function must scan from the midpoint outward, not from the edges inward. Scanning inward from the ends would miss arrays that cross the midpoint."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The maximum subarray problem demonstrates the divide-and-conquer paradigm with an ( O(n \\log n) ) crossing-sum approach, though Kadane's ( O(n) ) DP is optimal."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-strassens-matrix-multiplication",
      children: "5.2 Strassen's Matrix Multiplication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Multiply two ( n \\times n ) matrices, where ( n ) is a power of 2. The standard algorithm requires ( O(n^3) ) time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You run a bakery that produces 4 types of pastries across 4 stores. Computing sales totals normally requires 16 separate calculations (each store × each pastry). But you notice patterns: if you combine certain stores' data and certain pastries' data first, you can compute the same totals with only 7 combined calculations — trading some addition work for fewer multiplication operations. This is exactly what Strassen does."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide:"
        }), " Split each ( n \\times n ) matrix ( A ) and ( B ) into four ( n/2 \\times n/2 ) submatrices:\n[\nA = \\begin{bmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \\end{bmatrix}, \\quad\nB = \\begin{bmatrix} B_{11} & B_{12} \\ B_{21} & B_{22} \\end{bmatrix}\n]"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute 7 products"
        }), " (instead of the naive 8) using these submatrices."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine"
        }), " the 7 products using additions/subtractions to recover the four quadrants of ( C = A \\times B )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STRASSEN(A, B, n)\n    if n == 1\n        return A[0][0] * B[0][0]\n    \n    // Divide into n/2 × n/2 submatrices\n    A11, A12, A21, A22 = split(A)\n    B11, B12, B21, B22 = split(B)\n    \n    // 7 recursive multiplications\n    P1 = STRASSEN(A11, B12 - B22, n/2)\n    P2 = STRASSEN(A11 + A12, B22, n/2)\n    P3 = STRASSEN(A21 + A22, B11, n/2)\n    P4 = STRASSEN(A22, B21 - B11, n/2)\n    P5 = STRASSEN(A11 + A22, B11 + B22, n/2)\n    P6 = STRASSEN(A12 - A22, B21 + B22, n/2)\n    P7 = STRASSEN(A11 - A21, B11 + B12, n/2)\n    \n    // Reconstruct result quadrants\n    C11 = P5 + P4 - P2 + P6\n    C12 = P1 + P2\n    C21 = P3 + P4\n    C22 = P5 + P1 - P3 - P7\n    \n    return combine(C11, C12, C21, C22)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why 7 and not 8?"
      }), " The insight is that the product quadrant formulas share many terms. By computing ( P_5 = (A_{11} + A_{22})(B_{11} + B_{22}) ), its result gets reused across multiple quadrants. The clever algebra eliminates one multiplication at the cost of extra additions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run with ( 2 \\times 2 ) Matrices:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let ( A = \\begin{bmatrix} 1 & 2 \\ 3 & 4 \\end{bmatrix}, B = \\begin{bmatrix} 5 & 6 \\ 7 & 8 \\end{bmatrix} )"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Product"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Value"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_1 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( A_{11}(B_{12} - B_{22}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 \\times (6 - 8) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-2"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (A_{11} + A_{12})B_{22} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (1 + 2) \\times 8 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "24"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_3 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (A_{21} + A_{22})B_{11} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (3 + 4) \\times 5 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "35"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_4 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( A_{22}(B_{21} - B_{11}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 4 \\times (7 - 5) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "8"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_5 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (A_{11} + A_{22})(B_{11} + B_{22}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (1 + 4) \\times (5 + 8) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "65"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_6 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (A_{12} - A_{22})(B_{21} + B_{22}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (2 - 4) \\times (7 + 8) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-30"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( P_7 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (A_{11} - A_{21})(B_{11} + B_{12}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (1 - 3) \\times (5 + 6) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "-22"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reconstruction:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Quadrant"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Computation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( C_{11} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( P_5 + P_4 - P_2 + P_6 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 65 + 8 - 24 + (-30) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "19"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( C_{12} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( P_1 + P_2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( -2 + 24 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "22"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( C_{21} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( P_3 + P_4 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 35 + 8 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "43"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( C_{22} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( P_5 + P_1 - P_3 - P_7 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 65 + (-2) - 35 - (-22) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "50"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Result: ( C = \\begin{bmatrix} 19 & 22 \\ 43 & 50 \\end{bmatrix} ) ✓ (matches standard multiplication)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n\nusing Matrix = std::vector<std::vector<int>>;\n\nMatrix add(const Matrix& A, const Matrix& B) {\n    int n = A.size();\n    Matrix C(n, std::vector<int>(n));\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < n; ++j)\n            C[i][j] = A[i][j] + B[i][j];\n    return C;\n}\n\nMatrix subtract(const Matrix& A, const Matrix& B) {\n    int n = A.size();\n    Matrix C(n, std::vector<int>(n));\n    for (int i = 0; i < n; ++i)\n        for (int j = 0; j < n; ++j)\n            C[i][j] = A[i][j] - B[i][j];\n    return C;\n}\n\nMatrix strassen(const Matrix& A, const Matrix& B) {\n    int n = A.size();\n    if (n == 1) return {{A[0][0] * B[0][0]}};\n\n    int k = n / 2;\n    Matrix A11(k, std::vector<int>(k)), A12(k, std::vector<int>(k));\n    Matrix A21(k, std::vector<int>(k)), A22(k, std::vector<int>(k));\n    Matrix B11(k, std::vector<int>(k)), B12(k, std::vector<int>(k));\n    Matrix B21(k, std::vector<int>(k)), B22(k, std::vector<int>(k));\n\n    for (int i = 0; i < k; ++i)\n        for (int j = 0; j < k; ++j) {\n            A11[i][j] = A[i][j];        A12[i][j] = A[i][j + k];\n            A21[i][j] = A[i + k][j];    A22[i][j] = A[i + k][j + k];\n            B11[i][j] = B[i][j];        B12[i][j] = B[i][j + k];\n            B21[i][j] = B[i + k][j];    B22[i][j] = B[i + k][j + k];\n        }\n\n    auto P1 = strassen(A11, subtract(B12, B22));\n    auto P2 = strassen(add(A11, A12), B22);\n    auto P3 = strassen(add(A21, A22), B11);\n    auto P4 = strassen(A22, subtract(B21, B11));\n    auto P5 = strassen(add(A11, A22), add(B11, B22));\n    auto P6 = strassen(subtract(A12, A22), add(B21, B22));\n    auto P7 = strassen(subtract(A11, A21), add(B11, B12));\n\n    Matrix C11 = add(subtract(add(P5, P4), P2), P6);\n    Matrix C12 = add(P1, P2);\n    Matrix C21 = add(P3, P4);\n    Matrix C22 = add(subtract(add(P5, P1), P3), P7);\n\n    Matrix C(n, std::vector<int>(n));\n    for (int i = 0; i < k; ++i)\n        for (int j = 0; j < k; ++j) {\n            C[i][j] = C11[i][j];        C[i][j + k] = C12[i][j];\n            C[i + k][j] = C21[i][j];    C[i + k][j + k] = C22[i][j];\n        }\n    return C;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def add(A, B):\n    n = len(A)\n    return [[A[i][j] + B[i][j] for j in range(n)] for i in range(n)]\n\ndef subtract(A, B):\n    n = len(A)\n    return [[A[i][j] - B[i][j] for j in range(n)] for i in range(n)]\n\ndef strassen(A, B):\n    n = len(A)\n    if n == 1:\n        return [[A[0][0] * B[0][0]]]\n\n    k = n // 2\n    A11 = [row[:k] for row in A[:k]]\n    A12 = [row[k:] for row in A[:k]]\n    A21 = [row[:k] for row in A[k:]]\n    A22 = [row[k:] for row in A[k:]]\n    B11 = [row[:k] for row in B[:k]]\n    B12 = [row[k:] for row in B[:k]]\n    B21 = [row[:k] for row in B[k:]]\n    B22 = [row[k:] for row in B[k:]]\n\n    P1 = strassen(A11, subtract(B12, B22))\n    P2 = strassen(add(A11, A12), B22)\n    P3 = strassen(add(A21, A22), B11)\n    P4 = strassen(A22, subtract(B21, B11))\n    P5 = strassen(add(A11, A22), add(B11, B22))\n    P6 = strassen(subtract(A12, A22), add(B21, B22))\n    P7 = strassen(subtract(A11, A21), add(B11, B12))\n\n    C11 = add(subtract(add(P5, P4), P2), P6)\n    C12 = add(P1, P2)\n    C21 = add(P3, P4)\n    C22 = add(subtract(add(P5, P1), P3), P7)\n\n    C = [[0] * n for _ in range(n)]\n    for i in range(k):\n        for j in range(k):\n            C[i][j] = C11[i][j]\n            C[i][j + k] = C12[i][j]\n            C[i + k][j] = C21[i][j]\n            C[i + k][j + k] = C22[i][j]\n    return C\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Strassen {\n    static int[][] add(int[][] A, int[][] B) {\n        int n = A.length;\n        int[][] C = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                C[i][j] = A[i][j] + B[i][j];\n        return C;\n    }\n\n    static int[][] subtract(int[][] A, int[][] B) {\n        int n = A.length;\n        int[][] C = new int[n][n];\n        for (int i = 0; i < n; i++)\n            for (int j = 0; j < n; j++)\n                C[i][j] = A[i][j] - B[i][j];\n        return C;\n    }\n\n    static int[][] strassen(int[][] A, int[][] B) {\n        int n = A.length;\n        if (n == 1) return new int[][]{{A[0][0] * B[0][0]}};\n\n        int k = n / 2;\n        int[][] A11 = new int[k][k], A12 = new int[k][k];\n        int[][] A21 = new int[k][k], A22 = new int[k][k];\n        int[][] B11 = new int[k][k], B12 = new int[k][k];\n        int[][] B21 = new int[k][k], B22 = new int[k][k];\n\n        for (int i = 0; i < k; i++)\n            for (int j = 0; j < k; j++) {\n                A11[i][j] = A[i][j];        A12[i][j] = A[i][j + k];\n                A21[i][j] = A[i + k][j];    A22[i][j] = A[i + k][j + k];\n                B11[i][j] = B[i][j];        B12[i][j] = B[i][j + k];\n                B21[i][j] = B[i + k][j];    B22[i][j] = B[i + k][j + k];\n            }\n\n        int[][] P1 = strassen(A11, subtract(B12, B22));\n        int[][] P2 = strassen(add(A11, A12), B22);\n        int[][] P3 = strassen(add(A21, A22), B11);\n        int[][] P4 = strassen(A22, subtract(B21, B11));\n        int[][] P5 = strassen(add(A11, A22), add(B11, B22));\n        int[][] P6 = strassen(subtract(A12, A22), add(B21, B22));\n        int[][] P7 = strassen(subtract(A11, A21), add(B11, B12));\n\n        int[][] C11 = add(subtract(add(P5, P4), P2), P6);\n        int[][] C12 = add(P1, P2);\n        int[][] C21 = add(P3, P4);\n        int[][] C22 = add(subtract(add(P5, P1), P3), P7);\n\n        int[][] C = new int[n][n];\n        for (int i = 0; i < k; i++)\n            for (int j = 0; j < k; j++) {\n                C[i][j] = C11[i][j];        C[i][j + k] = C12[i][j];\n                C[i + k][j] = C21[i][j];    C[i + k][j + k] = C22[i][j];\n            }\n        return C;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " ( T(n) = 7T(n/2) + O(n^2) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Seven subproblems of size ( n/2 ), plus ( O(n^2) ) additions/subtractions for matrix combination."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Theorem check:"
      }), " ( a = 7, b = 2, f(n) = O(n^2) ). Compute ( \\log_b a = \\log_2 7 \\approx 2.807 )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since ( f(n) = O(n^2) = O(n^{2.807 - \\epsilon}) ), this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 1"
      }), " of the master theorem (polynomially smaller).", (0,jsx_runtime.jsx)(_components.br, {}), "\nResult: ( T(n) = \\Theta(n^{\\log_2 7}) = \\Theta(n^{2.807}) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why this is a breakthrough:"
      }), " Standard multiplication uses 8 recursive multiplications (( T(n) = 8T(n/2) + O(n^2) )), giving ( \\Theta(n^3) ). Strassen's one-subproblem reduction ( 8 \\to 7 ) drops the exponent from 3 to 2.807. Every subsequent improvement (Coppersmith–Winograd ( O(n^{2.376}) ), Alman–Williams ( O(n^{2.372}) )) follows the same pattern: reduce subproblem count further."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "First algorithm to break ( O(n^3) ) barrier — historic milestone"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large constant factor — slower than naive for ( n < 1000 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Asymptotically faster for very large matrices (( n > 10^5 ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Numerical instability with floating-point (subtractions cause cancellation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for all subsequent matrix multiplication improvements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in-place — requires significant extra memory for submatrices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Naturally parallelizable (7 subproblems are independent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only works for square matrices; padding required for arbitrary sizes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-power-of-two sizes:"
        }), " Pad matrices with zeros to the next power of 2. For example, a ( 5 \\times 5 ) matrix is padded to ( 8 \\times 8 )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " Base case ( n = 1 ) handles this via direct multiplication."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rectangular matrices:"
        }), " Strassen's algorithm does not apply directly — use standard multiplication or pad to square."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integer overflow:"
        }), " The numerous additions and subtractions may cause overflow in languages with fixed-width integers; use Python or arbitrary-precision types."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Strassen's algorithm has a large constant factor and numerical stability issues. In practice, standard ( O(n^3) ) multiplication is faster for ( n < 1000 ). Use Strassen only for very large matrices."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Strassen was the first algorithm to break the ( O(n^3) ) barrier, but theoretical improvements now reach ( O(n^{2.372}) )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Strassen's matrix multiplication reduces subproblems from 8 to 7, achieving ( O(n^{2.807}) ) at the cost of complex recombination and numerical precision."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-closest-pair-of-points",
      children: "5.3 Closest Pair of Points"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Given ( n ) points in the plane, find the pair with the smallest Euclidean distance."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " You are an air traffic controller managing 1000 flights. You need to find which two planes are closest together to issue a warning. Checking every pair (( O(n^2) )) takes too long. Instead, you divide the airspace into east and west halves, find the closest pair in each half, then check only a narrow strip around the dividing line — knowing that only a few planes in that strip can be close enough to matter."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preprocessing:"
        }), " Sort all points by ( x )-coordinate (( O(n \\log n) )). Also maintain a second copy sorted by ( y )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide:"
        }), " Split the sorted list by ( x )-coordinate at the median into left and right halves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conquer:"
        }), " Recursively find ( \\delta_L ) (minimum distance in left half) and ( \\delta_R ) (minimum in right half). Set ( \\delta = \\min(\\delta_L, \\delta_R) )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine (Strip Check):"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Build a strip of all points whose ( x )-coordinate is within ( \\delta ) of the midline."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sort the strip by ( y )-coordinate."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For each point in the strip, compare distance with at most 7 following points (those within ( \\delta ) vertically)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Update ( \\delta ) if any pair in the strip is closer."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Return ( \\delta )."
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "CLOSEST-PAIR(Px, Py)\n    // Px = points sorted by x, Py = points sorted by y\n    if |Px| <= 3\n        return brute-force minimum distance\n    \n    mid = |Px| / 2\n    midX = Px[mid].x\n    \n    // Split Py into left and right halves based on x-coordinate\n    Ly = points in Py with x <= midX\n    Ry = points in Py with x > midX\n    \n    // Recursive calls\n    leftPx = Px[0:mid], rightPx = Px[mid:|Px|]\n    dL = CLOSEST-PAIR(leftPx, Ly)\n    dR = CLOSEST-PAIR(rightPx, Ry)\n    d = min(dL, dR)\n    \n    // Build strip\n    strip = points in Py with |x - midX| < d\n    \n    // Check strip\n    for i = 0 to |strip| - 1\n        for j = i + 1 to |strip| - 1 and (strip[j].y - strip[i].y) < d\n            d = min(d, distance(strip[i], strip[j]))\n    \n    return d\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run with Trace Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Points: ( P = {(2, 3), (12, 30), (40, 50), (5, 1), (12, 10), (3, 4)} )"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorted by ( x ): ( {(2,3), (3,4), (5,1), (12,10), (12,30), (40,50)} )"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Left Subset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Right Subset"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( \\delta_L )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( \\delta_R )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( \\delta )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strip Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strip Min"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Top"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3),(3,4),(5,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(12,10),(12,30),(40,50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3),(3,4),(5,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.414"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Left"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(2,3),(3,4),(5,1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "brute = 1.414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1.414"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Right"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(12,10),(12,30),(40,50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "brute = 20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Brute force on left half: ( \\text{dist}((2,3),(3,4)) = \\sqrt{2} \\approx 1.414 ), ( \\text{dist}((2,3),(5,1)) = \\sqrt{13} \\approx 3.606 ), ( \\text{dist}((3,4),(5,1)) = \\sqrt{13} \\approx 3.606 ). Minimum: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.414"
      }), " between (2,3) and (3,4)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Brute force on right half: ( \\text{dist}((12,10),(12,30)) = 20 ), ( \\text{dist}((12,10),(40,50)) \\approx 50.09 ), ( \\text{dist}((12,30),(40,50)) \\approx 32.06 ). Minimum: ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "20"
      }), " between (12,10) and (12,30)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Strip: midline ( x = 5 ), ( \\delta = 1.414 ). Points with ( |x - 5| < 1.414 ): (2,3), (3,4), (5,1). Already computed. Minimum remains ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1.414"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cmath>\n#include <algorithm>\n#include <limits>\n\nstruct Point { double x, y; };\n\ndouble distance(const Point& a, const Point& b) {\n    double dx = a.x - b.x, dy = a.y - b.y;\n    return std::sqrt(dx * dx + dy * dy);\n}\n\ndouble bruteForce(const std::vector<Point>& P, int l, int r) {\n    double minDist = std::numeric_limits<double>::max();\n    for (int i = l; i < r; ++i)\n        for (int j = i + 1; j < r; ++j)\n            minDist = std::min(minDist, distance(P[i], P[j]));\n    return minDist;\n}\n\ndouble stripClosest(std::vector<Point>& strip, double d) {\n    double minDist = d;\n    std::sort(strip.begin(), strip.end(),\n              [](const Point& a, const Point& b) { return a.y < b.y; });\n    for (size_t i = 0; i < strip.size(); ++i)\n        for (size_t j = i + 1; j < strip.size() && \n             (strip[j].y - strip[i].y) < minDist; ++j)\n            minDist = std::min(minDist, distance(strip[i], strip[j]));\n    return minDist;\n}\n\ndouble closestPairRec(std::vector<Point>& Px, int l, int r) {\n    if (r - l <= 3) return bruteForce(Px, l, r);\n    int mid = (l + r) / 2;\n    double midX = Px[mid].x;\n    double dl = closestPairRec(Px, l, mid);\n    double dr = closestPairRec(Px, mid, r);\n    double d = std::min(dl, dr);\n    std::vector<Point> strip;\n    for (int i = l; i < r; ++i)\n        if (std::abs(Px[i].x - midX) < d)\n            strip.push_back(Px[i]);\n    return std::min(d, stripClosest(strip, d));\n}\n\ndouble closestPair(std::vector<Point>& P) {\n    std::sort(P.begin(), P.end(),\n              [](const Point& a, const Point& b) { return a.x < b.x; });\n    return closestPairRec(P, 0, P.size());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import math\n\ndef distance(p1, p2):\n    return math.sqrt((p1[0] - p2[0])**2 + (p1[1] - p2[1])**2)\n\ndef brute_force(P):\n    min_dist = float('inf')\n    for i in range(len(P)):\n        for j in range(i + 1, len(P)):\n            min_dist = min(min_dist, distance(P[i], P[j]))\n    return min_dist\n\ndef strip_closest(strip, d):\n    min_dist = d\n    strip.sort(key=lambda p: p[1])\n    for i in range(len(strip)):\n        j = i + 1\n        while j < len(strip) and (strip[j][1] - strip[i][1]) < min_dist:\n            min_dist = min(min_dist, distance(strip[i], strip[j]))\n            j += 1\n    return min_dist\n\ndef closest_pair_rec(Px):\n    n = len(Px)\n    if n <= 3:\n        return brute_force(Px)\n    mid = n // 2\n    mid_x = Px[mid][0]\n    dl = closest_pair_rec(Px[:mid])\n    dr = closest_pair_rec(Px[mid:])\n    d = min(dl, dr)\n    strip = [p for p in Px if abs(p[0] - mid_x) < d]\n    return min(d, strip_closest(strip, d))\n\ndef closest_pair(P):\n    Px = sorted(P, key=lambda p: p[0])\n    return closest_pair_rec(Px)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class ClosestPair {\n    static class Point {\n        double x, y;\n        Point(double x, double y) { this.x = x; this.y = y; }\n    }\n\n    static double distance(Point a, Point b) {\n        double dx = a.x - b.x, dy = a.y - b.y;\n        return Math.sqrt(dx * dx + dy * dy);\n    }\n\n    static double bruteForce(List<Point> P, int l, int r) {\n        double minDist = Double.MAX_VALUE;\n        for (int i = l; i < r; i++)\n            for (int j = i + 1; j < r; j++)\n                minDist = Math.min(minDist, distance(P.get(i), P.get(j)));\n        return minDist;\n    }\n\n    static double stripClosest(List<Point> strip, double d) {\n        double minDist = d;\n        strip.sort(Comparator.comparingDouble(p -> p.y));\n        for (int i = 0; i < strip.size(); i++) {\n            for (int j = i + 1; j < strip.size() &&\n                 (strip.get(j).y - strip.get(i).y) < minDist; j++) {\n                minDist = Math.min(minDist, distance(strip.get(i), strip.get(j)));\n            }\n        }\n        return minDist;\n    }\n\n    static double closestPairRec(List<Point> Px, int l, int r) {\n        if (r - l <= 3) return bruteForce(Px, l, r);\n        int mid = (l + r) / 2;\n        double midX = Px.get(mid).x;\n        double dl = closestPairRec(Px, l, mid);\n        double dr = closestPairRec(Px, mid, r);\n        double d = Math.min(dl, dr);\n        List<Point> strip = new ArrayList<>();\n        for (int i = l; i < r; i++)\n            if (Math.abs(Px.get(i).x - midX) < d)\n                strip.add(Px.get(i));\n        return Math.min(d, stripClosest(strip, d));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " ( T(n) = 2T(n/2) + O(n) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two subproblems of size ( n/2 ), plus ( O(n) ) work to split the ( y )-sorted list and scan the strip. The strip check compares each of at most ( n ) points against at most 7 others — still ( O(n) )."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Theorem check:"
      }), " ( a = 2, b = 2, f(n) = O(n) ). ( \\log_b a = \\log_2 2 = 1 ).", (0,jsx_runtime.jsx)(_components.br, {}), "\nSince ( f(n) = O(n^1) = O(n^{\\log_b a}) ), this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 2"
      }), ".", (0,jsx_runtime.jsx)(_components.br, {}), "\nResult: ( T(n) = \\Theta(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why only 7 comparisons per point?"
      }), " In the ( \\delta \\times 2\\delta ) rectangle of the strip, at most 8 points can fit without being closer than ( \\delta ). Partition the rectangle into ( (\\delta/2) \\times (2\\delta/3) ) sub-rectangles — each can hold at most 1 point. This geometric packing lemma guarantees the constant bound."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "( O(n \\log n) ) is optimal for comparison-based approaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires careful implementation of the strip sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Elegant geometric insight — the 7-point bound is beautiful"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive depth can be large for many points"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Foundation for many spatial data structures (k-d trees)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presorting by ( x ) is a preprocessing step often forgotten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Easily extended to 3D (with ( O(n \\log^2 n) ) complexity)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Floating-point precision issues with ( \\sqrt{} )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Collinear points:"
        }), " Multiple points on the same line. The algorithm still works — distance is computed normally. If 3+ points are collinear and equally spaced, the strip logic still holds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate points:"
        }), " Distance = 0. The algorithm should return 0 immediately. If duplicates exist, the packing lemma fails (points can be arbitrarily close in the strip). Add a duplicate check at the start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fewer than 3 points:"
        }), " Handled by the brute-force base case (( n \\leq 3 ))."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Vertical/horizontal lines:"
        }), " The algorithm handles all orientations equally since it uses Euclidean distance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In the closest pair algorithm, the \"7-point check\" is critical — after sorting the strip by ( y ), each point needs checking against at most 7 following points. This guarantees the ( O(n \\log n) ) bound."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " The closest pair algorithm assumes no duplicate points. If duplicates exist, the distance becomes 0 and the strip logic changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The closest pair algorithm achieves ( O(n \\log n) ) by combining divide-and-conquer with a geometric observation that only 7 points need checking in the merge strip."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-karatsuba-multiplication",
      children: "5.4 Karatsuba Multiplication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Problem:"
      }), " Multiply two ( n )-digit integers efficiently. The grade-school algorithm takes ( O(n^2) ) time."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " To compute ( 37 \\times 53 ), you normally do ( 30 \\times 50 + 30 \\times 3 + 7 \\times 50 + 7 \\times 3 ) — four products. Karatsuba notices that ( (30+7) \\times (50+3) = 30 \\times 50 + (30 \\times 3 + 7 \\times 50) + 7 \\times 3 ), and the middle term can be derived from ( (30+7) \\times (50+3) - 30 \\times 50 - 7 \\times 3 ), requiring only three multiplications instead of four. This is your mental math shortcut: compute ( 37 \\times 53 = 37 \\times 50 + 37 \\times 3 ) — two products. Karatsuba extends this idea recursively."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm Steps:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Given two ( n )-digit numbers ( x ) and ( y ), split them at ( n/2 ):"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nx = 10^{n/2} a + b, \\quad y = 10^{n/2} c + d\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute ( z_2 = a \\times c )"
        }), " (high-half product)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute ( z_0 = b \\times d )"
        }), " (low-half product)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compute ( z_1 = (a + b) \\times (c + d) - z_2 - z_0 )"
        }), " (cross term)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " ( xy = 10^n z_2 + 10^{n/2} z_1 + z_0 )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The key insight: the middle coefficient ( ad + bc ) normally requires two multiplications, but we compute it with one multiplication ( (a+b)(c+d) ) and two subtractions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pseudocode:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "KARATSUBA(x, y, n)\n    if n == 1 or n == 0\n        return x * y\n    \n    m = ceil(n / 2)\n    \n    // Split: x = 10^m * a + b, y = 10^m * c + d\n    a = x / 10^m\n    b = x % 10^m\n    c = y / 10^m\n    d = y % 10^m\n    \n    z2 = KARATSUBA(a, c, m)\n    z0 = KARATSUBA(b, d, m)\n    z1 = KARATSUBA(a + b, c + d, m + 1) - z2 - z0\n    \n    return z2 * 10^(2*m) + z1 * 10^m + z0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run with Trace Table:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Compute ( x = 1234, y = 5678 ) (both 4-digit)."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( a )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( b )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( c )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( d )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_2 = a \\times c )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_0 = b \\times d )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_1 = (a+b)(c+d) - z_2 - z_0 )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "672"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2652"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 46 \\times 134 - 672 - 2652 = 2840 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 672\\times10^4 + 2840\\times10^2 + 2652 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1×5=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2×6=12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (3)(11) - 5 - 12 = 16 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 5\\times10^2 + 16\\times10 + 12 = 672 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×7=21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4×8=32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( (7)(15) - 21 - 32 = 52 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 21\\times10^2 + 52\\times10 + 32 = 2652 )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3+4=7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7+8=15"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( a+b=1+2=3, c+d=5+6=11 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3×11=33"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wait, the trace for level 0 needs the actual multiplication sub-calls. Let me be more precise:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level 0:"
      }), " ( x = 1234, y = 5678, m = 2 )"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( a = 12, b = 34, c = 56, d = 78 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_2 = 12 \\times 56 = 672 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_0 = 34 \\times 78 = 2652 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( (a+b) = 46, (c+d) = 134 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_1 = 46 \\times 134 - 672 - 2652 = 6164 - 3324 = 2840 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: ( 672 \\times 10^4 + 2840 \\times 10^2 + 2652 = 6,720,000 + 284,000 + 2,652 = 7,006,652 )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Verify: ( 1234 \\times 5678 = 7,006,652 ) ✓"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Level 1a:"
      }), " ( a = 1, b = 2, c = 5, d = 6 ) (computing ( 12 \\times 56 ))"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_2 = 1 \\times 5 = 5 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_0 = 2 \\times 6 = 12 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "( z_1 = (1+2)(5+6) - 5 - 12 = 33 - 17 = 16 )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Result: ( 5 \\times 100 + 16 \\times 10 + 12 = 500 + 160 + 12 = 672) ✓"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Level"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( a )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( b )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( c )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( d )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_2 )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_0 )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "( z_1 )"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "34"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "56"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "78"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "672"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2652"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2840"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "7,006,652"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "672"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "52"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2652"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1c"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6164"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2b"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "..."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "C++ Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <string>\n#include <algorithm>\n#include <cmath>\n\nlong long karatsuba(long long x, long long y) {\n    if (x < 10 || y < 10) return x * y;\n\n    int n = std::max((int)std::log10(x) + 1, (int)std::log10(y) + 1);\n    int m = n / 2;\n\n    long long pow10m = std::pow(10, m);\n    long long a = x / pow10m;\n    long long b = x % pow10m;\n    long long c = y / pow10m;\n    long long d = y % pow10m;\n\n    long long z2 = karatsuba(a, c);\n    long long z0 = karatsuba(b, d);\n    long long z1 = karatsuba(a + b, c + d) - z2 - z0;\n\n    return z2 * std::pow(10, 2 * m) + z1 * std::pow(10, m) + z0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Python Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def karatsuba(x, y):\n    if x < 10 or y < 10:\n        return x * y\n\n    n = max(len(str(x)), len(str(y)))\n    m = n // 2\n\n    a = x // 10**m\n    b = x % 10**m\n    c = y // 10**m\n    d = y % 10**m\n\n    z2 = karatsuba(a, c)\n    z0 = karatsuba(b, d)\n    z1 = karatsuba(a + b, c + d) - z2 - z0\n\n    return z2 * 10**(2*m) + z1 * 10**m + z0\n\n\n# Example\nprint(karatsuba(1234, 5678))  # 7006652\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Java Implementation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class Karatsuba {\n    static long karatsuba(long x, long y) {\n        if (x < 10 || y < 10) return x * y;\n\n        int n = Math.max(String.valueOf(x).length(), String.valueOf(y).length());\n        int m = n / 2;\n\n        long pow10m = (long) Math.pow(10, m);\n        long a = x / pow10m;\n        long b = x % pow10m;\n        long c = y / pow10m;\n        long d = y % pow10m;\n\n        long z2 = karatsuba(a, c);\n        long z0 = karatsuba(b, d);\n        long z1 = karatsuba(a + b, c + d) - z2 - z0;\n\n        return z2 * (long) Math.pow(10, 2 * m) + z1 * (long) Math.pow(10, m) + z0;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complexity Analysis:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " ( T(n) = 3T(n/2) + O(n) )"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three subproblems of size ( n/2 ) (the three multiplications) plus ( O(n) ) additions, subtractions, and shifts (multiplication by powers of 10 is just digit shifting)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Master Theorem check:"
      }), " ( a = 3, b = 2, f(n) = O(n) ). ( \\log_b a = \\log_2 3 \\approx 1.585 )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since ( f(n) = O(n^1) = O(n^{1.585 - \\epsilon}) ), this is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Case 1"
      }), " of the master theorem.", (0,jsx_runtime.jsx)(_components.br, {}), "\nResult: ( T(n) = \\Theta(n^{\\log_2 3}) = \\Theta(n^{1.585}) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why the improvement?"
      }), " The grade-school method computes ( ac, ad, bc, bd ) — four multiplications. Karatsuba computes ( ac, bd, (a+b)(c+d) ) — three. The savings at each level compound: instead of ( 4^k ) multiplications at depth ( k ), we have ( 3^k ). The ( (3/4)^k ) factor is the speedup."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Advantages & Disadvantages:"
      })
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
            children: "First sub-( O(n^2) ) multiplication algorithm large integers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive overhead for small inputs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Used in Python's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " and Java's ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BigInteger"
            }), " for large operands"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extra memory for splitting and recombination"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Generalizes to Toom-Cook (3-way split, ( O(n^{1.465}) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case tuning matters — must switch to naive at small ( n )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Relatively simple to implement correctly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works poorly for very small numbers (< 100 digits)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Edge Cases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Small numbers:"
        }), " If either number has fewer than 10 digits, fall back to direct multiplication to avoid overhead."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Uneven digit lengths:"
        }), " The algorithm handles this naturally. For ( x = 123, y = 45 ), ( n = 3 ), ( m = 1 ): ( a = 12, b = 3, c = 4, d = 5 )."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Negative numbers:"
        }), " The algorithm works if you take absolute values and track the sign separately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Zero:"
        }), " ( a + b ) or ( c + d ) can overflow — ensure the recursive base case handles this."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Karatsuba's insight — computing ( (a+b)(c+d) ) saves one multiplication — generalizes to Toom-Cook (split into 3 parts) and FFT-based methods (( O(n \\log n) )). Each reduces the subproblem count at the cost of more additions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Karatsuba multiplication reduces the naive ( O(n^2) ) integer multiplication to ( O(n^{1.585}) ) by cleverly reusing three multiplication results instead of four."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-when-divide-and-conquer-fails",
      children: "5.5 When Divide and Conquer Fails"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide-and-conquer is powerful but not universal. Here are the situations where it struggles or fails outright:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "1. Overlapping Subproblems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If the subproblems share computations, divide-and-conquer may recompute the same work repeatedly. For example, computing the ( n )-th Fibonacci number via divide-and-conquer (Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)) yields exponential ( O(2^n) ) time. Dynamic programming solves this by storing subproblem results — trading recursion for a table."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "2. Non-Independent Subproblems"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide-and-conquer assumes subproblems can be solved independently. When subproblems interact extensively (e.g., traveling salesman, graph coloring), the combination step becomes as hard as the original problem. These NP-hard problems require different strategies (backtracking, branch-and-bound, approximation algorithms)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "3. Small Input Sizes"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For ( n < 10-100 ), the recursive overhead of divide-and-conquer often exceeds the benefit. This is why practical implementations of Merge Sort, Strassen, and Karatsuba all switch to brute-force or naive methods below a threshold."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "4. Problems with No Efficient Merge"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The combination step must be cheaper than the divide step. If merging takes ( O(n^2) ) while dividing takes ( O(n) ), the recurrence becomes ( T(n) = 2T(n/2) + O(n^2) ), which solves to ( O(n^2) ) — no improvement over a naive approach."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "5. Poor Cache Locality"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Divide-and-conquer algorithms scatter memory accesses across the recursion tree, leading to cache misses. Iterative algorithms (like Kadane's) that scan linearly exploit spatial locality and often outperform their divide-and-conquer counterparts in practice despite equivalent or better asymptotic complexity."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Quick Diagnosis Table:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Issue"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Symptom"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Better Approach"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping subproblems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same value computed repeatedly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic programming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NP-hard problem"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combination step is exponential"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Backtracking / approximation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High constant overhead"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Brute force / naive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Expensive merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrence doesn't improve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterative / greedy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache thrashing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow despite good asymptotics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear scan / iterative DP"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "closest-pair-variations",
      children: "Closest Pair Variations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How would you find the closest pair in 3D space?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The algorithm extends naturally: split by ( x ), recurse on both halves, then check a 3D strip (now a slab of width ( 2\\delta )). The packing bound increases from 7 to at most 15 points to check in the slab. Complexity becomes ( O(n \\log^2 n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " How would you find the closest pair between two sets of points (( P ) and ( Q ))?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " The cross-set closest pair problem can be solved by merging both sets, sorting by ( x ), and modifying the strip check to only compare points from different sets. Complexity remains ( O(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Can we find the closest pair in ( O(n) ) expected time?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Yes — using a randomized algorithm with a grid-based approach (bucket technique). Divide the plane into a grid of ( \\delta \\times \\delta ) cells. Each point only needs checking against points in its own cell and neighboring cells. The expected number of points per cell is constant."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "maximum-subarray-kadane-vs-divide-and-conquer",
      children: "Maximum Subarray: Kadane vs. Divide-and-Conquer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Kadane's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divide-and-Conquer"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) (call stack)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic programming, single pass"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive splitting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When to use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Always in production"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Teaching the paradigm"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Track subarray indices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy — track start/end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More complex"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallelizable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (inherently sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (independent halves)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Interview Tip:"
      }), " Always start with Kadane's for maximum subarray unless the interviewer explicitly asks for a divide-and-conquer solution. Mentioning that Kadane is ( O(n) ) shows you understand the trade-offs."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " What if the array contains all negative numbers?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Kadane's returns the least negative element. The divide-and-conquer version does the same. Both handle this correctly with proper initialization."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Find the maximum subarray in a 2D matrix.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Combine Kadane's with row-boundary iteration. Fix top and bottom rows, compress columns using prefix sums, run Kadane on each column-sum row. This is ( O(n^3) ) for an ( m \\times n ) matrix."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "strassens-algorithm",
      children: "Strassen's Algorithm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Why does Strassen use exactly 7 multiplications?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Because the standard 8 multiplications have algebraic redundancy. Each quadrant of the result matrix contains overlapping terms. Strassen found a set of 7 products whose linear combinations reconstruct all 4 quadrants. The 7 is minimal for ( 2 \\times 2 ) blocking; no algorithm can reduce it below 7 without a different approach."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q:"
      }), " Can we apply Strassen to non-square matrices?\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "A:"
      }), " Yes — pad to the next power of 2 with zeros, then apply Strassen. The padding increases size but the asymptotic gain still holds."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mapreduce-googles-distributed-computing-framework",
      children: "MapReduce (Google's Distributed Computing Framework)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["MapReduce is divide-and-conquer at warehouse scale. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Map"
      }), " phase divides input data into independent chunks processed in parallel across thousands of machines. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduce"
      }), " phase combines (merges) the results. Google processes petabytes daily using this exact pattern."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide:"
        }), " Input split into 64 MB blocks across HDFS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conquer:"
        }), " Each mapper processes its block independently (word count, filtering, transformation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " Shuffle/sort groups intermediate results; reducers merge partial answers"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-text",
        children: "Map:  (key1, value1) → list(key2, value2)\nShuffle: group by key\nReduce: (key2, list(value2)) → list(key3, value3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "parallel-sorting-in-databases",
      children: "Parallel Sorting in Databases"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sorting a billion records on a single machine is impractical. Databases use external sort-merge (a divide-and-conquer approach):"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide:"
        }), " Read data in chunks that fit in memory (e.g., 100 MB each)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conquer:"
        }), " Sort each chunk independently (quicksort in memory)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine:"
        }), " Merge sorted chunks using a k-way merge"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is how PostgreSQL, MySQL, and Spark sort data beyond RAM capacity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "fast-fourier-transform-fft",
      children: "Fast Fourier Transform (FFT)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The FFT computes the discrete Fourier transform in ( O(n \\log n) ) instead of ( O(n^2) ). It divides the frequency spectrum into even and odd indexed terms:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\nF(\\omega) = F_{\\text{even}}(\\omega^2) + \\omega \\cdot F_{\\text{odd}}(\\omega^2)\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each subproblem is half the size. This same structure appears in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JPEG image compression (DCT)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "MP3 audio encoding"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "WiFi signal processing (OFDM)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Convolutional neural network optimization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Polynomial multiplication (the fastest known method)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "merge-sort-everywhere",
      children: "Merge Sort (Everywhere)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The standard sorting algorithm in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Python:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timsort"
        }), " (hybrid merge sort + insertion sort)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Java:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Arrays.sort(Object[])"
        }), " uses timsort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Android / Chrome V8:"
        }), " JavaScript ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Array.sort()"
        }), " uses timsort"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "PostgreSQL:"
        }), " External merge sort for large datasets"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "quickselect-order-statistics",
      children: "QuickSelect (Order Statistics)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Finding the ( k )-th smallest element in ( O(n) ) average time using divide-and-conquer (partition + recurse on one side). Used in:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Median-finding in streaming systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database query optimization (estimating result sizes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Machine learning feature selection"
      }), "\n"]
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
            children: "Maximum Subarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Largest sum contiguous subarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Crossing case ( O(n) ) scan"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock trading, signal analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strassen's Algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 recursive multiplications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant factor > standard for small ( n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Very large matrix multiplication"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closest Pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide plane, check strip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only 7 points checked per point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational geometry, collision detection"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karatsuba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3 recursive multiplications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "First sub-( O(n^2) ) multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big integer arithmetic (Python/Java big ints)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Master Theorem Cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compare ( f(n) ) to ( n^{\\log_b a} )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each case gives different growth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer recurrence solving"
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
              children: "Divide-and-Conquer Pattern"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide → Recurse → Combine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Recurrence of the Form"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( T(n) = aT(n/b) + O(n^k) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Strassen"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( a=7, b=2, \\log_2 7 \\approx 2.807 ), huge constant"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Closest Pair"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Presort by ( x ), strip width ( 2\\delta ), 7-point ( y )-check"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Karatsuba"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( a=3, b=2, \\log_2 3 \\approx 1.585 ), practical in big-int libs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recurrence doesn't match master theorem form"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "D&C Fails When"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overlapping subproblems, expensive merge, small ( n )"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Max Subarray D&C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conceptual — Kadane's is preferred"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variations (2D, circular)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stock/financial analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-conquer pedagogy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strassen"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely — theoretical interest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational complexity theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closest Pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally — 2D geometry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sweep-line alternative"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spatial databases, GIS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Geometric optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Karatsuba"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rarely asked"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Big integer libraries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Algebraic complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Divide-and-Conquer Thinking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extremely common — mergesort, BST, quickselect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core problem-solving paradigm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed computing, MapReduce"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational algorithm design"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Naive"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Divide-and-Conquer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimal"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Max subarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) ) (Kadane)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^3) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{2.807}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{2.372}) ) (theoretical)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closest pair"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Integer multiplication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^{1.585}) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) ) (FFT-based)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is the recurrence for Strassen's matrix multiplication?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ( T(n) = 8T(n/2) + O(n^2) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ( T(n) = 7T(n/2) + O(n^2) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ( T(n) = 4T(n/2) + O(n^2) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ( T(n) = 7T(n/3) + O(n^2) )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) \\( T(n) = 7T(n/2) + O(n^2) \\) — 7 subproblems, each half size, \\( O(n^2) \\) for additions.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " How many points in the strip need checking against each other in the closest pair algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) 3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) 5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) 7"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) 15"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) 7 — the geometric bound ensures at most 7 points can fit in a \\( \\delta \\times 2\\delta \\) rectangle without being closer than \\( \\delta \\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What is the recurrence for Karatsuba multiplication?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ( T(n) = 2T(n/2) + O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ( T(n) = 4T(n/2) + O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ( T(n) = 3T(n/2) + O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ( T(n) = 3T(n/3) + O(n) )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) \\( T(n) = 3T(n/2) + O(n) \\) — three multiplications of half-sized numbers.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " In which case does divide-and-conquer fail?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) The recurrence fits the master theorem"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Subproblems overlap and share computation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) The merge step is ( O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) The array is large"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Overlapping subproblems cause redundant recomputation — dynamic programming is better suited.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " Which real-world system directly mirrors divide-and-conquer?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) A relational database with B-tree indexes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) MapReduce — splitting data across mappers and reducing partial results"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) A load balancer distributing HTTP requests"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) A DNS resolver caching lookups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) MapReduce follows the divide-conquer-combine pattern: split input, process independently, merge results.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does Strassen's algorithm need only 7 multiplications instead of 8?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove that at most 7 points can be in the ( \\delta \\times 2\\delta ) rectangle in the closest pair algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the recurrence for Karatsuba multiplication and solve it using the master theorem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "List three scenarios where divide-and-conquer is not the right approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain how MapReduce implements the divide-and-conquer paradigm."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Kadane's algorithm and compare its performance with the divide-and-conquer maximum subarray on arrays of size ( n = 10^3, 10^4, 10^5 )."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Strassen's algorithm for matrices of size ( 2^k \\times 2^k ). Handle non-power-of-two sizes by padding with zeros."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the closest pair algorithm and run it on randomly generated points. Verify the result with brute force."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement both the naive and divide-and-conquer closest pair and compute speedup ratios."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a program to compare Karatsuba vs. naive multiplication for numbers from 10 digits to 1000 digits."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design a divide-and-conquer algorithm for the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Skyline Problem"
        }), ": given the positions and heights of buildings, compute the skyline silhouette. Analyze its complexity."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "2D closest pair variation"
        }), " where points belong to two sets (( P ) and ( Q )), and you find the closest pair with one point from each set."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a divide-and-conquer algorithm for counting inversions in an array. Use it to compute how \"unsorted\" an array is."
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