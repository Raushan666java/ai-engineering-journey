"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[68655],{

/***/ 42787
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_03_sorting_nlogn_md_bd7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-03-sorting-nlogn-md-bd7.json
const site_docs_courses_algorithms_03_sorting_nlogn_md_bd7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/03-sorting-nlogn","title":"Chapter 3: Comparison-Based Sorting","description":"Prerequisites Fundamentals of Algorithm Analysis — Asymptotic notation and recurrence analysis | Next Linear-Time Sorting — Breaking the \\\\( \\\\Omega(n \\\\log n) \\\\) barrier","source":"@site/docs/courses/algorithms/03-sorting-nlogn.md","sourceDirName":"courses/algorithms","slug":"/algorithms/03-sorting-nlogn","permalink":"/ai-engineering-journey/algorithms/03-sorting-nlogn","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"03-sorting-nlogn","slug":"/algorithms/03-sorting-nlogn","title":"Chapter 3: Comparison-Based Sorting","sidebar_label":"Chapter 3: Comparison-Based Sorting","sidebar_position":3},"sidebar":"course-algorithms","previous":{"title":"Chapter 2: Searching","permalink":"/ai-engineering-journey/algorithms/02-searching"},"next":{"title":"Chapter 4: Linear-Time Sorting","permalink":"/ai-engineering-journey/algorithms/04-sorting-linear"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/algorithms/03-sorting-nlogn.md


const frontMatter = {
	id: '03-sorting-nlogn',
	slug: '/algorithms/03-sorting-nlogn',
	title: 'Chapter 3: Comparison-Based Sorting',
	sidebar_label: 'Chapter 3: Comparison-Based Sorting',
	sidebar_position: 3
};
const contentTitle = 'Chapter 3: Comparison-Based Sorting';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Comparison Sorting Matters",
  "id": "why-comparison-sorting-matters",
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
  "value": "3.1 Lower Bound for Comparison Sorting",
  "id": "31-lower-bound-for-comparison-sorting",
  "level": 3
}, {
  "value": "3.2 Merge Sort",
  "id": "32-merge-sort",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 4
}, {
  "value": "Algorithm Description",
  "id": "algorithm-description",
  "level": 4
}, {
  "value": "Algorithm Steps (Numbered)",
  "id": "algorithm-steps-numbered",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run with Trace Table",
  "id": "step-by-step-dry-run-with-trace-table",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages",
  "level": 4
}, {
  "value": "3.3 Quick Sort",
  "id": "33-quick-sort",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 4
}, {
  "value": "Algorithm Description",
  "id": "algorithm-description-1",
  "level": 4
}, {
  "value": "Algorithm Steps (Numbered)",
  "id": "algorithm-steps-numbered-1",
  "level": 4
}, {
  "value": "Pseudocode (Lomuto Partition)",
  "id": "pseudocode-lomuto-partition",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run with Trace Table",
  "id": "step-by-step-dry-run-with-trace-table-1",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-1",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-1",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-1",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-1",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-1",
  "level": 4
}, {
  "value": "3.4 Heap Sort",
  "id": "34-heap-sort",
  "level": 3
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 4
}, {
  "value": "Algorithm Description",
  "id": "algorithm-description-2",
  "level": 4
}, {
  "value": "Algorithm Steps (Numbered)",
  "id": "algorithm-steps-numbered-2",
  "level": 4
}, {
  "value": "Pseudocode",
  "id": "pseudocode-1",
  "level": 4
}, {
  "value": "Step-by-Step Dry Run with Trace Table",
  "id": "step-by-step-dry-run-with-trace-table-2",
  "level": 4
}, {
  "value": "C++ Implementation",
  "id": "c-implementation-2",
  "level": 4
}, {
  "value": "Python Implementation",
  "id": "python-implementation-2",
  "level": 4
}, {
  "value": "Java Implementation",
  "id": "java-implementation-2",
  "level": 4
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 4
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 4
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 4
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 2
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "1. Quick Sort Partition Schemes",
  "id": "1-quick-sort-partition-schemes",
  "level": 3
}, {
  "value": "2. Kth Largest Element (Quickselect)",
  "id": "2-kth-largest-element-quickselect",
  "level": 3
}, {
  "value": "3. Merge Sort for Linked Lists",
  "id": "3-merge-sort-for-linked-lists",
  "level": 3
}, {
  "value": "4. Heap Sort for K-Way Merge",
  "id": "4-heap-sort-for-k-way-merge",
  "level": 3
}, {
  "value": "5. Counting Inversions with Merge Sort",
  "id": "5-counting-inversions-with-merge-sort",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
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
        id: "chapter-3-comparison-based-sorting",
        children: "Chapter 3: Comparison-Based Sorting"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerequisites:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/01-analysis",
          children: "Chapter 1: Fundamentals of Algorithm Analysis"
        }), " — Asymptotic notation and recurrence analysis | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/algorithms/04-sorting-linear",
          children: "Chapter 4: Linear-Time Sorting"
        }), " — Breaking the ( \\Omega(n \\log n) ) barrier"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement merge sort, quick sort, and heap sort in C++, Python, and Java."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze the best-case, worst-case, and average-case complexity of each algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the ( \\Omega(n \\log n) ) lower bound for comparison-based sorting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Select an appropriate sorting algorithm given constraints on memory, stability, and input characteristics."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Solve common interview problems involving sorting techniques."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-comparison-sorting-matters",
      children: "Why Comparison Sorting Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you have a deck of 52 playing cards scattered across a table. You need to organize them into ascending order — first by suit, then by rank. Without any shortcuts (you cannot \"magically know\" where the Ace of Spades belongs), you must compare cards one pair at a time. Every time you pick up two cards and decide which is larger, you have performed one ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comparison"
      }), ". This fundamental operation — comparing two elements — is the only tool available to ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "comparison-based sorting algorithms"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The problem of sorting is universal: databases sort query results, search engines rank pages, spreadsheets order rows, operating systems schedule tasks by priority. Every sorting algorithm that works by comparing elements (as opposed to exploiting properties like digit structure) must obey the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "( \\Omega(n \\log n) ) lower bound"
      }), " — a mathematical ceiling on how fast any comparison sort can go."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This chapter covers three of the most important ( O(n \\log n) ) comparison sorts — ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "merge sort"
      }), ", ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "quick sort"
      }), ", and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "heap sort"
      }), " — each with different trade-offs in speed, memory usage, stability, and real-world suitability."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The ( \\Omega(n \\log n) ) bound applies ONLY to comparison-based sorting. Non-comparison sorts (counting, radix, bucket) can beat it by exploiting key structure."]
      }), "\n"]
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
            children: "Lower Bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision trees prove ( \\Omega(n \\log n) ) comparisons needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No comparison sort can beat ( n \\log n ) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide, sort halves, merge in linear time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, guaranteed ( O(n \\log n) ), needs ( O(n) ) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition around pivot, recurse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest in practice, ( O(n^2) ) worst-case mitigated by randomization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build max-heap, extract repeatedly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place ( O(n \\log n) ), not stable, excellent for embedded systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Lower Bound Ωn log n] --> B[Merge Sort]\n    A --> C[Quick Sort]\n    A --> D[Heap Sort]\n    B --> E[Stable, O(n) space]\n    C --> F[In-place avg O(n log n)]\n    D --> G[In-place O(1) space]\n    E --> H[Choose by constraints]\n    F --> H\n    G --> H\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch03-sorting-nlogn.png",
        alt: "Comparison Sort Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-lower-bound-for-comparison-sorting",
      children: "3.1 Lower Bound for Comparison Sorting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Theorem 3.1."
      }), " Any comparison-based sorting algorithm requires ( \\Omega(n \\log n) ) comparisons in the worst case."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Proof."
      }), " A comparison-based sorting algorithm can be modeled as a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "decision tree"
      }), ". There are ( n! ) possible permutations of the input. Each leaf of the decision tree corresponds to a distinct permutation. A binary tree of height ( h ) has at most ( 2^h ) leaves. Therefore:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\n2^h \\ge n! \\implies h \\ge \\lg(n!) \\ge \\lg((n/2)^{n/2}) = (n/2)\\lg(n/2) = \\Omega(n \\log n).\n]"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The decision tree model proves that any comparison-based sorting algorithm must make at least ( \\Omega(n \\log n) ) comparisons in the worst case. This is a mathematical guarantee, not a practical observation."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " The decision tree model proves that any comparison-based sorting algorithm must make at least ( \\Omega(n \\log n) ) comparisons in the worst case."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-merge-sort",
      children: "3.2 Merge Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Imagine you are the captain of a sports team tasked with sorting 100 player cards by height. You divide the stack among your assistant coaches, telling each to sort their pile. Once every pile comes back sorted, you merge them pairwise — comparing the shortest player from each pile and picking the smaller one, just like merging two sorted lanes on a highway."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-description",
      children: "Algorithm Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Merge sort uses the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "divide-and-conquer"
      }), " paradigm:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Divide"
        }), " the array into two halves."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Conquer"
        }), " — recursively sort each half."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Combine"
        }), " — merge the two sorted halves into one sorted array."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-numbered",
      children: "Algorithm Steps (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the array has 0 or 1 elements, it is already sorted (base case)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Find the middle index: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mid = low + (high - low) / 2"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MergeSort"
        }), " on the left half ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[low, mid]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MergeSort"
        }), " on the right half ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[mid + 1, high]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Merge the two sorted halves:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Create temporary arrays ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), " holding each half."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Compare elements from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), ", placing the smaller into the original array."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Copy any remaining elements from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "MergeSort(A, low, high):\n    if low < high:\n        mid = low + (high - low) / 2\n        MergeSort(A, low, mid)\n        MergeSort(A, mid + 1, high)\n        Merge(A, low, mid, high)\n\nMerge(A, low, mid, high):\n    L = A[low .. mid], R = A[mid+1 .. high]\n    i = j = 0, k = low\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]: A[k++] = L[i++]\n        else: A[k++] = R[j++]\n    while i < len(L): A[k++] = L[i++]\n    while j < len(R): A[k++] = R[j++]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-with-trace-table",
      children: "Step-by-Step Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[38, 27, 43, 3, 9, 82, 10]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Trace (showing key merge steps):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array State"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [38, 27, 43, 3, 9, 82, 10] at mid=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[38, 27, 43, 3] [9, 82, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [38, 27, 43, 3] at mid=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[38, 27] [43, 3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [38, 27] at mid=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[38] [27]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [38] and [27] → compare 38 ≤ 27? No → [27, 38]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[27, 38, 43, 3, 9, 82, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [43, 3] at mid=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[43] [3]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [43] and [3] → compare 43 ≤ 3? No → [3, 43]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[27, 38, 3, 43, 9, 82, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [27, 38] and [3, 43]: 27≤3? No → pick 3; 27≤43? Yes → pick 27; 38≤43? Yes → pick 38; pick 43"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 27, 38, 43, 9, 82, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [9, 82, 10] at mid=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9, 82] [10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide [9, 82] at mid=0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[9] [82]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [9] and [82] → [9, 82]"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 27, 38, 43, 9, 82, 10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [9, 82] and [10]: compare 9≤10? Yes → pick 9; 82≤10? No → pick 10; pick 82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[3, 27, 38, 43, 9, 10, 82]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge [3, 27, 38, 43] and [9, 10, 82]: 3≤9→3, 27≤9→9, 27≤10→10, 27≤82→27, 38≤82→38, 43≤82→43, 82"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "[3, 9, 10, 27, 38, 43, 82]"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison count:"
      }), " This run makes 14 comparisons. In general, ( O(n \\log n) ) comparisons are needed."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n\nvoid merge(std::vector<int>& A, int low, int mid, int high) {\n    std::vector<int> L(A.begin() + low, A.begin() + mid + 1);\n    std::vector<int> R(A.begin() + mid + 1, A.begin() + high + 1);\n    int i = 0, j = 0, k = low;\n    while (i < (int)L.size() && j < (int)R.size()) {\n        if (L[i] <= R[j]) A[k++] = L[i++];\n        else A[k++] = R[j++];\n    }\n    while (i < (int)L.size()) A[k++] = L[i++];\n    while (j < (int)R.size()) A[k++] = R[j++];\n}\n\nvoid mergeSort(std::vector<int>& A, int low, int high) {\n    if (low < high) {\n        int mid = low + (high - low) / 2;\n        mergeSort(A, low, mid);\n        mergeSort(A, mid + 1, high);\n        merge(A, low, mid, high);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def merge_sort(A, low, high):\n    if low < high:\n        mid = low + (high - low) // 2\n        merge_sort(A, low, mid)\n        merge_sort(A, mid + 1, high)\n        merge(A, low, mid, high)\n\ndef merge(A, low, mid, high):\n    L = A[low:mid + 1]\n    R = A[mid + 1:high + 1]\n    i = j = 0\n    k = low\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]:\n            A[k] = L[i]; i += 1\n        else:\n            A[k] = R[j]; j += 1\n        k += 1\n    while i < len(L):\n        A[k] = L[i]; i += 1; k += 1\n    while j < len(R):\n        A[k] = R[j]; j += 1; k += 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MergeSort {\n    public static void mergeSort(int[] A, int low, int high) {\n        if (low < high) {\n            int mid = low + (high - low) / 2;\n            mergeSort(A, low, mid);\n            mergeSort(A, mid + 1, high);\n            merge(A, low, mid, high);\n        }\n    }\n\n    private static void merge(int[] A, int low, int mid, int high) {\n        int[] L = java.util.Arrays.copyOfRange(A, low, mid + 1);\n        int[] R = java.util.Arrays.copyOfRange(A, mid + 1, high + 1);\n        int i = 0, j = 0, k = low;\n        while (i < L.length && j < R.length) {\n            if (L[i] <= R[j]) A[k++] = L[i++];\n            else A[k++] = R[j++];\n        }\n        while (i < L.length) A[k++] = L[i++];\n        while (j < R.length) A[k++] = R[j++];\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Even if already sorted, merge sort still divides and merges ( \\log n ) levels, performing ( O(n) ) work at each level."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The recurrence ( T(n) = 2T(n/2) + O(n) ) solves to ( \\Theta(n \\log n) ) by the Master Theorem."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same recurrence regardless of input — no worst-case input exists."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Temporary arrays ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "R"
            }), " of total size ( n ) are allocated at each recursive level (or globally reused)."]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is merge sort always ( O(n \\log n) )?"
      }), " The array is always split exactly in half, producing ( \\log_2 n ) levels. At each level, every element participates in exactly one comparison during the merge step, giving ( O(n) ) work per level. Hence ( n \\times \\log n = O(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case triggers immediately; no operations."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case; array is already sorted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Already sorted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Still divides and merges — no shortcut, still ( O(n \\log n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse sorted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as any other input — ( O(n \\log n) ), no degradation."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All duplicates"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Comparison ", (0,jsx_runtime.jsx)(_components.code, {
              children: "L[i] <= R[j]"
            }), " picks from left half, preserving stability."]
          })]
        })]
      })]
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
            children: "Guaranteed ( O(n \\log n) ) in all cases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires ( O(n) ) auxiliary space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            }), " — preserves relative order of equal elements"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not in-place; memory overhead on large arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Excellent for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "linked lists"
            }), " (no random access needed)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursive overhead (can be mitigated by iterative bottom-up version)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Naturally ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "parallelizable"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower constant factor than quick sort for small arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Ideal for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "external sorting"
            }), " (large data on disk)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge step requires copying"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Merge sort is the go-to when stability matters (e.g., sorting by multiple keys like last name then first name) and memory is available."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Merge sort's ( O(n) ) space can be prohibitive in memory-constrained environments like embedded systems. Use heap sort instead."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Merge sort provides guaranteed ( O(n \\log n) ) with stability, at the cost of ( O(n) ) auxiliary space."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-quick-sort",
      children: "3.3 Quick Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine organizing a group of students by height. You pick one student (the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pivot"
      }), ") and tell everyone shorter than the pivot to stand on the left, and everyone taller to stand on the right. Now the pivot is in its final position. Recursively repeat the process on the left group and the right group. This is exactly what quick sort does — and it's incredibly fast."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-description-1",
      children: "Algorithm Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Quick sort selects a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pivot"
      }), " element and ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "partitions"
      }), " the array so that all elements less than the pivot come before it and all greater elements come after. The pivot is now in its correct sorted position. The algorithm then recursively sorts the two subarrays on either side of the pivot."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-numbered-1",
      children: "Algorithm Steps (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose a pivot element (last element, random element, or median-of-three)."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Partition the array around the pivot:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Rearrange elements so smaller elements come before the pivot, larger after."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Return the final index of the pivot."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QuickSort"
        }), " on the left subarray ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[low, p - 1]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recursively call ", (0,jsx_runtime.jsx)(_components.code, {
          children: "QuickSort"
        }), " on the right subarray ", (0,jsx_runtime.jsx)(_components.code, {
          children: "[p + 1, high]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Base case: subarray has 0 or 1 elements (already sorted)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-lomuto-partition",
      children: "Pseudocode (Lomuto Partition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "QuickSort(A, low, high):\n    if low < high:\n        p = Partition(A, low, high)\n        QuickSort(A, low, p - 1)\n        QuickSort(A, p + 1, high)\n\nPartition(A, low, high):\n    pivot = A[high]      // choose last element as pivot\n    i = low - 1          // boundary of elements < pivot\n    for j = low to high - 1:\n        if A[j] <= pivot:\n            i = i + 1\n            swap(A[i], A[j])\n    swap(A[i+1], A[high])\n    return i + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-with-trace-table-1",
      children: "Step-by-Step Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 80, 30, 90, 40, 50, 70]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "First call — Partition with pivot = 70 (last element):"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "j"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[j]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[j] ≤ 70?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(10,10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 80, 30, 90, 40, 50, 70]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 80, 30, 90, 40, 50, 70]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(80,30)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 80, 90, 40, 50, 70]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 80, 90, 40, 50, 70]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(80,40)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 90, 80, 50, 70]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "50"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(90,50)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 30, 40, 50, 80, 90, 70]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Finally: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "swap(A[4], A[6])"
      }), " → swap(80, 70) → ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "[10, 30, 40, 50, 70, 90, 80]"
      }), ". Pivot index = 4."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurse left"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 30, 40, 50]"
      }), " — pivot=50 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 30, 40, 50]"
      }), ", pivot at 3.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurse right"
      }), " on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[90, 80]"
      }), " — pivot=80 → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 30, 40, 50, 70, 80, 90]"
      }), ". Done after 3 recursive calls."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Worst-case input"
      }), " (already sorted, first-element pivot): ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 2, 3, 4, 5]"
      }), ". Each partition splits off one element — ( n ) levels, each doing ( O(n) ) work → ( O(n^2) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-1",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <cstdlib>\n\nint partition(std::vector<int>& A, int low, int high) {\n    int pivot = A[high];\n    int i = low - 1;\n    for (int j = low; j < high; ++j) {\n        if (A[j] <= pivot) {\n            ++i;\n            std::swap(A[i], A[j]);\n        }\n    }\n    std::swap(A[i + 1], A[high]);\n    return i + 1;\n}\n\nint randomPartition(std::vector<int>& A, int low, int high) {\n    int r = low + std::rand() % (high - low + 1);\n    std::swap(A[r], A[high]);\n    return partition(A, low, high);\n}\n\nvoid quickSort(std::vector<int>& A, int low, int high) {\n    if (low < high) {\n        int p = randomPartition(A, low, high);\n        quickSort(A, low, p - 1);\n        quickSort(A, p + 1, high);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-1",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\n\ndef quick_sort(A, low, high):\n    if low < high:\n        p = partition(A, low, high)\n        quick_sort(A, low, p - 1)\n        quick_sort(A, p + 1, high)\n\ndef partition(A, low, high):\n    r = random.randint(low, high)\n    A[r], A[high] = A[high], A[r]\n    pivot = A[high]\n    i = low - 1\n    for j in range(low, high):\n        if A[j] <= pivot:\n            i += 1\n            A[i], A[j] = A[j], A[i]\n    A[i + 1], A[high] = A[high], A[i + 1]\n    return i + 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-1",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.Random;\n\npublic class QuickSort {\n    private static final Random rand = new Random();\n\n    public static void quickSort(int[] A, int low, int high) {\n        if (low < high) {\n            int p = randomPartition(A, low, high);\n            quickSort(A, low, p - 1);\n            quickSort(A, p + 1, high);\n        }\n    }\n\n    private static int randomPartition(int[] A, int low, int high) {\n        int r = low + rand.nextInt(high - low + 1);\n        int temp = A[r]; A[r] = A[high]; A[high] = temp;\n        return partition(A, low, high);\n    }\n\n    private static int partition(int[] A, int low, int high) {\n        int pivot = A[high];\n        int i = low - 1;\n        for (int j = low; j < high; ++j) {\n            if (A[j] <= pivot) {\n                ++i;\n                int t = A[i]; A[i] = A[j]; A[j] = t;\n            }\n        }\n        int t = A[i + 1]; A[i + 1] = A[high]; A[high] = t;\n        return i + 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pivot always divides the array into two equal halves — ( T(n) = 2T(n/2) + O(n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random pivot makes any split ratio produce ( O(n \\log n) ) expected time."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pivot is always smallest or largest element — ( T(n) = T(0) + T(n-1) + O(n) = O(n^2) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Recursion stack depth (average case). Worst case ( O(n) ) without tail-call optimization."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why quick sort is ( O(n \\log n) ) on average:"
      }), " Even a lopsided 1:9 split produces ( T(n) = T(n/10) + T(9n/10) + O(n) ), which still solves to ( \\Theta(n \\log n) ). Only the pathological 0:( n-1 ) split causes ( O(n^2) ). Randomization makes the 0:( n-1 ) split astronomically unlikely."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case; returns immediately."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Base case; already sorted."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Already sorted"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst case"
            }), " if pivot is first/last element — ( O(n^2) ). Random pivot mitigates this."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse sorted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as already sorted — triggers ( O(n^2) ) without randomization."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All duplicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lomuto partition produces worst-case split (all elements equal triggers ( O(n^2) )). Use Hoare partition for better behavior."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
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
            children: "Fastest in practice — small constant factors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) ) worst case without randomization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "In-place sorting (only stack space for recursion)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Not stable"
            }), " — equal elements may change order"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache-friendly — sequential memory access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vulnerable to DoS attacks with malicious input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient tail recursion optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Degrades on small arrays (switch to insertion sort)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always randomize pivot selection in production quick sort. Using the first/last element makes sorted or reverse-sorted inputs hit the ( O(n^2) ) worst case trivially."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Quick sort is NOT stable — equal elements may change relative order. Use merge sort if stability is required."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Quick sort's ( O(n \\log n) ) average case and in-place partition make it the fastest general-purpose sort in practice, though randomized pivot selection is essential to avoid ( O(n^2) )."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-heap-sort",
      children: "3.4 Heap Sort"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Imagine you are in charge of a fruit stall and need to display fruits in ascending order of weight. You arrange all fruits into a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "max-heap"
      }), " — a pyramid where the heaviest fruit sits at the top. You then repeatedly take the heaviest fruit (the top), put it at the end of your display row, and rearrange the pyramid so the next heaviest rises to the top. This process — heapify, extract, heapify, extract — is exactly how heap sort works."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-description-2",
      children: "Algorithm Description"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Heap sort uses a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "binary heap"
      }), " data structure. It operates in two phases:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Build a max-heap"
        }), " from the input array — the largest element is at the root."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repeatedly extract"
        }), " the maximum element:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Swap the root with the last element of the unsorted portion."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reduce the heap size."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sift down the new root to restore the heap property."
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "algorithm-steps-numbered-2",
      children: "Algorithm Steps (Numbered)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build a max-heap from the array using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BuildMaxHeap"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["For ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i = n-1"
        }), " down to 1:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Swap ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A[0]"
            }), " (root = maximum) with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A[i]"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["The element at ", (0,jsx_runtime.jsx)(_components.code, {
              children: "A[i]"
            }), " is now in its final sorted position."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reduce heap size to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "i"
            }), "."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "SiftDown"
            }), " on the new root to restore the heap property."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "After the loop, the array is sorted in ascending order."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pseudocode-1",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "HeapSort(A, n):\n    BuildMaxHeap(A, n)\n    for i = n - 1 down to 1:\n        swap(A[0], A[i])\n        SiftDown(A, 0, i - 1)\n\nBuildMaxHeap(A, n):\n    for i = (n - 2) / 2 down to 0:\n        SiftDown(A, i, n - 1)\n\nSiftDown(A, i, last):\n    largest = i\n    left = 2*i + 1\n    right = 2*i + 2\n    if left <= last and A[left] > A[largest]:\n        largest = left\n    if right <= last and A[right] > A[largest]:\n        largest = right\n    if largest != i:\n        swap(A[i], A[largest])\n        SiftDown(A, largest, last)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "step-by-step-dry-run-with-trace-table-2",
      children: "Step-by-Step Dry Run with Trace Table"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Input:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[4, 10, 3, 5, 1]"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 1: Build Max-Heap (start from i = (5-2)/2 = 1)"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Subtree Root"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Children"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array After"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[1]=10"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[3]=5, A[4]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10≥5, 10≥1 — no swap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[4, 10, 3, 5, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[0]=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[1]=10, A[2]=3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10>4 → swap(4,10)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 4, 3, 5, 1]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "siftDown A[1]=4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A[3]=5, A[4]=1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5>4 → swap(4,5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "[10, 5, 3, 4, 1]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Heap built:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[10, 5, 3, 4, 1]"
      }), " ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Phase 2: Extract Repeatedly"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Array After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "SiftDown"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(10,1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[1, 5, 3, 4, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "10"
            }), "]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1↔5→[5,1,3,4,10]; 1↔4→[5,4,3,1,10]"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(5,1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[1, 4, 3, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "5"
            }), ", 10]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1↔4→[4,1,3,5,10]; 1 stays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(4,3)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[3, 1, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "4"
            }), ", 5, 10]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3↔1→[3,1,4,5,10]; 1 stays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "swap(3,1)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["[1, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "3"
            }), ", 4, 5, 10]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 stays (single element)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Final sorted array:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[1, 3, 4, 5, 10]"
      }), " ✅"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "c-implementation-2",
      children: "C++ Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <vector>\n#include <algorithm>\n\nvoid siftDown(std::vector<int>& A, int i, int last) {\n    int largest = i;\n    int left = 2 * i + 1;\n    int right = 2 * i + 2;\n    if (left <= last && A[left] > A[largest])\n        largest = left;\n    if (right <= last && A[right] > A[largest])\n        largest = right;\n    if (largest != i) {\n        std::swap(A[i], A[largest]);\n        siftDown(A, largest, last);\n    }\n}\n\nvoid buildMaxHeap(std::vector<int>& A, int n) {\n    for (int i = (n - 2) / 2; i >= 0; --i)\n        siftDown(A, i, n - 1);\n}\n\nvoid heapSort(std::vector<int>& A, int n) {\n    buildMaxHeap(A, n);\n    for (int i = n - 1; i > 0; --i) {\n        std::swap(A[0], A[i]);\n        siftDown(A, 0, i - 1);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "python-implementation-2",
      children: "Python Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sift_down(A, i, last):\n    largest = i\n    left = 2 * i + 1\n    right = 2 * i + 2\n    if left <= last and A[left] > A[largest]:\n        largest = left\n    if right <= last and A[right] > A[largest]:\n        largest = right\n    if largest != i:\n        A[i], A[largest] = A[largest], A[i]\n        sift_down(A, largest, last)\n\ndef build_max_heap(A, n):\n    for i in range((n - 2) // 2, -1, -1):\n        sift_down(A, i, n - 1)\n\ndef heap_sort(A, n):\n    build_max_heap(A, n)\n    for i in range(n - 1, 0, -1):\n        A[0], A[i] = A[i], A[0]\n        sift_down(A, 0, i - 1)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "java-implementation-2",
      children: "Java Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class HeapSort {\n    public static void heapSort(int[] A, int n) {\n        buildMaxHeap(A, n);\n        for (int i = n - 1; i > 0; --i) {\n            int t = A[0]; A[0] = A[i]; A[i] = t;\n            siftDown(A, 0, i - 1);\n        }\n    }\n\n    private static void buildMaxHeap(int[] A, int n) {\n        for (int i = (n - 2) / 2; i >= 0; --i)\n            siftDown(A, i, n - 1);\n    }\n\n    private static void siftDown(int[] A, int i, int last) {\n        int largest = i;\n        int left = 2 * i + 1;\n        int right = 2 * i + 2;\n        if (left <= last && A[left] > A[largest])\n            largest = left;\n        if (right <= last && A[right] > A[largest])\n            largest = right;\n        if (largest != i) {\n            int t = A[i]; A[i] = A[largest]; A[largest] = t;\n            siftDown(A, largest, last);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap property must be restored after every extraction regardless of input."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each sift-down takes ( O(\\log n) ), executed ( n ) times."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same as average — heap sort has no worst-case input."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Entirely in-place; only a few variables for indices."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is heapify ( O(n) ) and not ( O(n \\log n) )?"
      }), " The heapify loop runs ( n/2 ) times, but the sift-down depth is not uniform. Lower nodes start closer to leaves. The total work sum is ( \\sum_{h=0}^{\\log n} \\frac{n}{2^{h+1}} \\cdot O(h) = O(n) ). Only the extraction phase is ( O(n \\log n) )."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " The heapify phase runs in ( O(n) ), not ( O(n \\log n) ) — a common misconception. Only the extraction phase is ( O(n \\log n) )."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Input Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Empty array"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No operations; returns immediately."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Single element"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Already a heap; no operations needed."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Already sorted (ascending)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Builds heap in ( O(n) ), then extractions proceed — still ( O(n \\log n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reverse sorted"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best-case for heap building (already a valid heap), but extraction still takes ( O(n \\log n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All duplicates"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sift-down comparisons find no larger child; minimal swaps."
          })]
        })]
      })]
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
            children: "Guaranteed ( O(n \\log n) ) in all cases"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Not stable"
            }), " — equal elements can be reordered"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "In-place"
            }), " — uses ( O(1) ) extra space"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constant factor is higher than quick sort (≈2-3× slower)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No worst-case input (unlike quick sort)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor cache locality — jumps across array indices"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Excellent for ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "real-time systems"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot exploit partially sorted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement iteratively"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not suitable for linked lists (requires random access)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Heap sort is ideal when memory is tight (embedded systems, kernel code) since it uses ( O(1) ) extra space. Its ( O(n \\log n) ) worst-case guarantee makes it suitable for real-time systems."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-Sentence Takeaway:"
      }), " Heap sort offers guaranteed ( O(n \\log n) ) in-place sorting with ( O(1) ) extra space, making it the safe choice for memory-constrained environments."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Merge Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Quick Sort"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Sort"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes ✅"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ❌"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No ❌"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Place"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (needs ( O(n) ))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (( O(\\log n) ) stack)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (( O(1) ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n^2) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n \\log n) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(n) )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(\\log n) ) (avg)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) )"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cache Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent (sequential)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor (random access)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linked List Friendly"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parallelizable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partially"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-World Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slowest among three"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptivity"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-quick-sort-partition-schemes",
      children: "1. Quick Sort Partition Schemes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lomuto Partition"
      }), " (simpler, fewer swaps):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pivot = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[high]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Single scan: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "i"
        }), " tracks boundary of elements ≤ pivot."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weakness:"
        }), " Degrades on all-duplicates (all equal elements produce worst-case split)."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Used in most textbooks for clarity."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Hoare Partition"
      }), " (more efficient, more swaps):"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pivot = ", (0,jsx_runtime.jsx)(_components.code, {
          children: "A[low]"
        }), "."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two pointers scan from both ends toward the middle."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strength:"
        }), " Performs 3× fewer swaps on average. Handles duplicates well."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Weakness:"
        }), " Pivot not in final position after partition — need to recurse on both halves."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int hoarePartition(std::vector<int>& A, int low, int high) {\n    int pivot = A[low];\n    int i = low - 1, j = high + 1;\n    while (true) {\n        do { i++; } while (A[i] < pivot);\n        do { j--; } while (A[j] > pivot);\n        if (i >= j) return j;\n        std::swap(A[i], A[j]);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-kth-largest-element-quickselect",
      children: "2. Kth Largest Element (Quickselect)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Find the ( k )-th largest element in an unsorted array in ( O(n) ) average time."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Algorithm:"
      }), " Use the partition logic from quick sort, but only recurse on the half containing the ( k )-th element."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "int quickSelect(std::vector<int>& A, int low, int high, int k) {\n    if (low == high) return A[low];\n    int p = randomPartition(A, low, high);\n    int count = p - low + 1;   // number of elements in left partition + pivot\n    if (count == k) return A[p];\n    if (count > k) return quickSelect(A, low, p - 1, k);\n    return quickSelect(A, p + 1, high, k - count);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-merge-sort-for-linked-lists",
      children: "3. Merge Sort for Linked Lists"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merge sort is the sorting algorithm of choice for linked lists because it requires no random access."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "struct ListNode { int val; ListNode* next; };\n\nListNode* merge(ListNode* l1, ListNode* l2) {\n    ListNode dummy, *tail = &dummy;\n    while (l1 && l2) {\n        if (l1->val <= l2->val) { tail->next = l1; l1 = l1->next; }\n        else { tail->next = l2; l2 = l2->next; }\n        tail = tail->next;\n    }\n    tail->next = l1 ? l1 : l2;\n    return dummy.next;\n}\n\nListNode* mergeSortList(ListNode* head) {\n    if (!head || !head->next) return head;\n    ListNode *slow = head, *fast = head->next;\n    while (fast && fast->next) {\n        slow = slow->next; fast = fast->next->next;\n    }\n    ListNode* mid = slow->next;\n    slow->next = nullptr;\n    return merge(mergeSortList(head), mergeSortList(mid));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-heap-sort-for-k-way-merge",
      children: "4. Heap Sort for K-Way Merge"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Merge ( k ) sorted arrays of total size ( n ) in ( O(n \\log k) ) time. This is a core technique in external sorting and big data pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <queue>\n#include <vector>\n\nstruct HeapNode {\n    int value, arrayIndex, elementIndex;\n    bool operator>(const HeapNode& o) const { return value > o.value; }\n};\n\nstd::vector<int> kWayMerge(std::vector<std::vector<int>>& arrays) {\n    std::priority_queue<HeapNode, std::vector<HeapNode>, std::greater<>> minHeap;\n    std::vector<int> result;\n    for (int i = 0; i < (int)arrays.size(); ++i) {\n        if (!arrays[i].empty())\n            minHeap.push({arrays[i][0], i, 0});\n    }\n    while (!minHeap.empty()) {\n        auto node = minHeap.top(); minHeap.pop();\n        result.push_back(node.value);\n        if (node.elementIndex + 1 < (int)arrays[node.arrayIndex].size())\n            minHeap.push({arrays[node.arrayIndex][node.elementIndex + 1],\n                          node.arrayIndex, node.elementIndex + 1});\n    }\n    return result;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-counting-inversions-with-merge-sort",
      children: "5. Counting Inversions with Merge Sort"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Count the number of pairs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "(i, j)"
      }), " where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "i < j"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A[i] > A[j]"
      }), " in ( O(n \\log n) ) time. The count of inversions measures how far an array is from being sorted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "long long mergeAndCount(std::vector<int>& A, int low, int mid, int high) {\n    std::vector<int> L(A.begin() + low, A.begin() + mid + 1);\n    std::vector<int> R(A.begin() + mid + 1, A.begin() + high + 1);\n    int i = 0, j = 0, k = low;\n    long long inversions = 0;\n    while (i < (int)L.size() && j < (int)R.size()) {\n        if (L[i] <= R[j]) A[k++] = L[i++];\n        else { A[k++] = R[j++]; inversions += L.size() - i; }\n    }\n    while (i < (int)L.size()) A[k++] = L[i++];\n    while (j < (int)R.size()) A[k++] = R[j++];\n    return inversions;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Sorting Algorithm Used"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Python"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "list.sort()"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timsort"
            }), " (hybrid merge + insertion sort)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive: ( O(n) ) on nearly-sorted data, stable."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Java"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Arrays.sort()"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Dual-Pivot QuickSort"
            }), " (objects & primitives)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster than single-pivot: ~20% fewer comparisons."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "C++"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::sort()"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Introsort"
            }), " (quick sort → heap sort → insertion sort)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detects pathological cases and switches to heap sort."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Rust"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "slice::sort()"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Adaptive merge sort (TimSort derivative)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, adaptive, ( O(n) ) on pre-sorted data."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Go"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "sort.Slice()"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern-defeating QuickSort (pdqsort)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching-optimized; handles sorted/reverse sorted in ( O(n) )."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "JavaScript"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Array.sort()"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Timsort"
            }), " (V8) / ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Introsort"
            }), " (SpiderMonkey)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable since ES2019; adaptive with fallback strategies."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Linux Kernel"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Heap sort"
            }), " (lib/sort.c)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) extra space; breakable loops for real-time preemption."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Hadoop MapReduce"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Merge sort"
            }), " (shuffle phase)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, handles massive data on disk via external sorting."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "PostgreSQL"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Quick sort / Heap sort / Merge sort"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adaptive: chooses based on cost estimates and memory budget."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: ".NET"
            }), " (", (0,jsx_runtime.jsx)(_components.code, {
              children: "Array.Sort()"
            }), ")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Introsort"
            }), " (up to .NET 4.5), ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Timsort"
            }), " (.NET Core 2.1+)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Improved stability and adaptivity in modern versions."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " If you are implementing a sort in production, do not write your own — use the language's built-in sort. It is likely an adaptive hybrid that has been battle-tested on billions of inputs."]
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
            children: "Merge Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Divide, sort, merge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stable, ( O(n) ) space"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sorting, stable multi-key sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition + recurse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-place, not stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "General-purpose, fastest in practice"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heapify + extract"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( O(1) ) space, not stable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded, real-time, memory-constrained"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "( \\Omega(n \\log n) ) Bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decision tree limit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Comparison-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Proves optimality, non-comparison exceptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Decision Tree"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model of all comparison paths"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Height = worst-case comparisons"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower bound proofs"
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
              children: "Stable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort only (quick sort and heap sort are not)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "In-Place"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick sort (( O(\\log n) ) stack), heap sort (( O(1) ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Guaranteed ( O(n \\log n) )"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort, heap sort"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Fastest in Practice"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick sort (with randomized pivot)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Space Efficient"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap sort (( O(1) )), quick sort (( O(\\log n) ))"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Common Pitfall"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Forgetting that quick sort reaches ( O(n^2) ) without randomization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interview Favorite"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quickselect, merge sort for linked lists, k-way merge"
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
            children: "Merge Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frequently — merge K sorted lists, inversion count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used in divide-and-conquer problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "External sort, distributed sort (MapReduce)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal comparison sort proof"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partition logic, quickselect, nth element"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Most common sort for CP"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory database sorting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Randomized analysis"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "K largest/smallest, priority queue use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap problems, median maintenance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time system guarantees"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue theory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Lower Bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Occasionally — prove optimality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing non-comparison sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choosing database sort algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Computational complexity"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Average"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stable"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Merge sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Quick sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n^2 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap sort"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( n \\log n )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "( 1 )"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Merge sort"
        }), " is the algorithm of choice when stability is required and memory is available."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Quick sort"
        }), " is typically the fastest in practice despite the quadratic worst case; randomization mitigates worst-case inputs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Heap sort"
        }), " is optimal for in-place sorting with guaranteed ( O(n \\log n) ) time."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The ( \\Omega(n \\log n) ) lower bound applies to all comparison-based sorts."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Modern language runtimes use ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "hybrid sorts"
        }), " (Timsort, Introsort, pdqsort) that combine multiple strategies adaptively."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Which sorting algorithm is guaranteed ( O(n \\log n) ) time and uses ( O(1) ) extra space?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Merge sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Quick sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Heap sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) All of the above"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Heap sort. Merge sort uses \\( O(n) \\) space, quick sort uses \\( O(\\log n) \\) stack space and can degrade to \\( O(n^2) \\).\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the lower bound for comparison-based sorting?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) ( O(n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) ( \\Omega(n \\log n) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) ( O(n^2) )"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) ( \\Theta(n) )"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) \\( \\Omega(n \\log n) \\) — proven by the decision tree model: there are \\( n! \\) permutations and a binary tree of height \\( h \\) has at most \\( 2^h \\) leaves.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " Which pivot selection strategy avoids the ( O(n^2) ) worst case for quick sort on sorted input?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) First element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Last element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Random element"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Both A and B"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Random element. First and last element pivots cause \\( O(n^2) \\) on already-sorted or reverse-sorted arrays.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which of the following is NOT a stable sorting algorithm?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Merge sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Quick sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Timsort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Bubble sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nB) Quick sort. During partitioning, equal elements can be swapped across each other, breaking stability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " If you need to sort a linked list, which algorithm is most suitable?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Quick sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Heap sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Merge sort"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Shell sort"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\nC) Merge sort. It requires only sequential access and works naturally with linked list structure. Quick sort and heap sort rely on random access.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain why quick sort's worst case is ( O(n^2) ). Give an input that triggers this."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How does heap sort achieve ( O(1) ) auxiliary space?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is merge sort stable but heap sort is not?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prove the ( \\Omega(n \\log n) ) lower bound using Stirling's approximation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is heapify ( O(n) ) and not ( O(n \\log n) )? Derive the sum."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement merge sort using an iterative (bottom-up) approach instead of recursion."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare Lomuto partition and Hoare partition experimentally. Which performs fewer swaps on random data?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify quick sort to use median-of-three pivot selection. Does it eliminate the worst case?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Given an almost-sorted array (each element at most ( k ) positions from its final position), design an ( O(n \\log k) ) sorting algorithm."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a stable version of quick sort using extra memory."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement an ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "adaptive"
        }), " sorting algorithm that detects whether the input is nearly sorted and switches between insertion sort (for small subarrays) and merge sort (for large subarrays). Prove that the hybrid runs in ( O(n \\log n) ) worst-case and ( O(n) ) best-case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design an algorithm to find the ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "median of a stream"
        }), " of integers using two heaps (a max-heap and a min-heap). What is the time complexity per insertion?"]
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