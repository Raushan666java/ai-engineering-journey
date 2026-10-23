"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2931],{

/***/ 7340
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_algorithms_02_searching_md_b00_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-algorithms-02-searching-md-b00.json
const site_docs_courses_algorithms_02_searching_md_b00_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/algorithms/02-searching","title":"Chapter 2: Searching","description":"Prerequisites Fundamentals of Algorithm Analysis — Asymptotic notation and recurrence analysis | Next Comparison-Based Sorting — From finding elements to ordering them","source":"@site/docs/courses/algorithms/02-searching.md","sourceDirName":"courses/algorithms","slug":"/algorithms/02-searching","permalink":"/ai-engineering-journey/algorithms/02-searching","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"02-searching","slug":"/algorithms/02-searching","title":"Chapter 2: Searching","sidebar_label":"Chapter 2: Searching","sidebar_position":2},"sidebar":"course-algorithms","previous":{"title":"Chapter 1: Fundamentals of Algorithm Analysis","permalink":"/ai-engineering-journey/algorithms/01-analysis"},"next":{"title":"Chapter 3: Comparison-Based Sorting","permalink":"/ai-engineering-journey/algorithms/03-sorting-nlogn"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/algorithms/02-searching.md


const frontMatter = {
	id: '02-searching',
	slug: '/algorithms/02-searching',
	title: 'Chapter 2: Searching',
	sidebar_label: 'Chapter 2: Searching',
	sidebar_position: 2
};
const contentTitle = 'Chapter 2: Searching';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Why Searching Matters",
  "id": "why-searching-matters",
  "level": 2
}, {
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 3
}, {
  "value": "2.1 Linear Search",
  "id": "21-linear-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps",
  "level": 3
}, {
  "value": "Pseudocode",
  "id": "pseudocode",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations",
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
  "value": "2.2 Binary Search",
  "id": "22-binary-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-1",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-1",
  "level": 3
}, {
  "value": "Pseudocode (Recursive)",
  "id": "pseudocode-recursive",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-1",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-1",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-1",
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
  "value": "Variations",
  "id": "variations",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications",
  "level": 3
}, {
  "value": "2.3 Interpolation Search",
  "id": "23-interpolation-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-2",
  "level": 3
}, {
  "value": "Probe Formula",
  "id": "probe-formula",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-2",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-2",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-2",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-2",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-2",
  "level": 3
}, {
  "value": "2.4 Exponential Search",
  "id": "24-exponential-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-3",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-3",
  "level": 3
}, {
  "value": "Step-by-Step Dry Run",
  "id": "step-by-step-dry-run-3",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-3",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-3",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-3",
  "level": 3
}, {
  "value": "Edge Cases",
  "id": "edge-cases-2",
  "level": 3
}, {
  "value": "Applications",
  "id": "applications-1",
  "level": 3
}, {
  "value": "2.5 Ternary Search",
  "id": "25-ternary-search",
  "level": 2
}, {
  "value": "Definition",
  "id": "definition-4",
  "level": 3
}, {
  "value": "Algorithm Steps",
  "id": "algorithm-steps-4",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis-4",
  "level": 3
}, {
  "value": "Implementations",
  "id": "implementations-4",
  "level": 3
}, {
  "value": "Advantages &amp; Disadvantages",
  "id": "advantages--disadvantages-4",
  "level": 3
}, {
  "value": "Comparative Analysis",
  "id": "comparative-analysis",
  "level": 2
}, {
  "value": "Performance Comparison (n = 1,000,000)",
  "id": "performance-comparison-n--1000000",
  "level": 3
}, {
  "value": "When to Choose What",
  "id": "when-to-choose-what",
  "level": 3
}, {
  "value": "Interview Corner",
  "id": "interview-corner",
  "level": 2
}, {
  "value": "Common Questions",
  "id": "common-questions",
  "level": 3
}, {
  "value": "Common Pitfalls",
  "id": "common-pitfalls",
  "level": 3
}, {
  "value": "Applications in Real Systems",
  "id": "applications-in-real-systems",
  "level": 2
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Key Takeaway",
  "id": "key-takeaway",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
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
        id: "chapter-2-searching",
        children: "Chapter 2: Searching"
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
          href: "/ai-engineering-journey/algorithms/03-sorting-nlogn",
          children: "Chapter 3: Comparison-Based Sorting"
        }), " — From finding elements to ordering them"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement and analyze linear search, binary search, interpolation search, exponential search, and ternary search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determine the appropriate search algorithm given data distribution and access patterns."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive the time complexity of each algorithm using recurrence relations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify edge cases and choose the right variant for real-world constraints."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "why-searching-matters",
      children: "Why Searching Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Imagine looking for a contact in your phone. If your contacts are listed randomly, you scan from top to bottom (linear search). If they're alphabetical, you jump to the middle letter and narrow down (binary search). If you know \"Smith\" is near the end, you skip directly toward the S section (interpolation search). Each approach has a time and place — and the wrong choice can cost you seconds, or in computing, millions of operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Linear Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scan sequentially until found"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only option for unsorted data; optimal for small arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repeatedly halve the search range"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The gold standard for sorted arrays — O(log n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpolation Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Probe position using linear interpolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log log n) on uniform data, O(n) worst-case"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling bound + binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for unbounded/infinite arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two midpoints, three partitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More comparisons than binary — slower in practice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart LR\r\n    A[\"Linear Search O(n)\"] --> B[Sorted Array?]\r\n    B -->|Yes| C[\"Binary Search O(log n)\"]\r\n    B -->|Yes| D[\"Interpolation Search O(log log n)\"]\r\n    B -->|Yes| E[\"Exponential Search O(log n)\"]\r\n    B -->|Yes| F[\"Ternary Search O(log3 n)\"]\r\n    C --> G[Choose by Data Distribution]\r\n    D --> G\r\n    E --> G\r\n    F --> G"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/algorithms/ch02-searching.png",
        alt: "Searching Diagram"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-linear-search",
      children: "2.1 Linear Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Looking for a specific book on an unsorted shelf — you check each book one by one from left to right until you find it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest searching algorithm: traverse the array sequentially until the target is found or the array ends."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start at index 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the element at the current index with the target."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If they match, return the current index."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If they don't match, move to the next index."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the end of the array is reached, return -1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode",
      children: "Pseudocode"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "LinearSearch(A, n, key):\r\n    for i = 0 to n-1:\r\n        if A[i] == key:\r\n            return i\r\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [4, 2, 9, 7, 5]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key = 7"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 == 7? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 == 7? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9 == 7? No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Continue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 == 7? Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return 3"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparisons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target at index 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target at last index or absent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target at position n/2 on average"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(n)?"
      }), " In the worst case, every element must be examined once. For an array of size n, that's n comparisons."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nint linearSearch(const vector<int>& arr, int key) {\r\n    for (int i = 0; i < arr.size(); i++)\r\n        if (arr[i] == key) return i;\r\n    return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef linear_search(arr, key):\r\n    for i, val in enumerate(arr):\r\n        if val == key:\r\n            return i\r\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java\r\npublic static int linearSearch(int[] arr, int key) {\r\n    for (int i = 0; i < arr.length; i++)\r\n        if (arr[i] == key) return i;\r\n    return -1;\r\n}\n"
      })
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
            children: "Works on unsorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for large arrays — O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "No preprocessing needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every element may need checking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple to implement"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Impractical for n > 10⁶"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimal for small n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ignores ordering information"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array:"
        }), " Loop doesn't execute, returns -1 immediately."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate elements:"
        }), " Returns the first occurrence (leftmost)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " One comparison, O(1)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Never sort an array purely to use binary search for a single query — sorting costs O(n log n) which is worse than linear search's O(n). Sort only if you have multiple queries."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Linear search is optimal for unsorted arrays — there's no faster algorithm without preprocessing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-binary-search",
      children: "2.2 Binary Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Looking up a word in a dictionary. You open to the middle, check if your word comes before or after, then discard the irrelevant half and repeat."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-1",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary search operates on a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "sorted"
      }), " array by repeatedly dividing the search interval in half. At each step, compare the target with the middle element. If the target matches, return the index. If the target is smaller, search the left half; otherwise, search the right half."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-1",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set low = 0, high = n - 1."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While low <= high:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute mid = low + (high - low) / 2."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A[mid] == key, return mid."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If key < A[mid], set high = mid - 1."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If key > A[mid], set low = mid + 1."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return -1 (key not found)."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pseudocode-recursive",
      children: "Pseudocode (Recursive)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "BinarySearch(A, low, high, key):\r\n    if low > high:\r\n        return -1\r\n    mid = low + (high - low) / 2\r\n    if A[mid] == key:\r\n        return mid\r\n    else if key < A[mid]:\r\n        return BinarySearch(A, low, mid - 1, key)\r\n    else:\r\n        return BinarySearch(A, mid + 1, high, key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-1",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key = 23"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[mid]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23 > 16"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "low = 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23 < 45"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "high = 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "23 == 23"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return 5"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "3 comparisons to find 23 in an array of 10 elements. Linear search would have taken 6 comparisons."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-1",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " T(n) = T(n/2) + O(1)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the master theorem (case 2): T(n) = O(log n)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparisons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target at the middle"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Target at leaf level or absent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why log n?"
      }), " Each step discards half the remaining elements. From n to n/2 to n/4 to ... to 1 takes log₂(n) steps. For n = 1,000,000, that's at most 20 comparisons vs 1,000,000 for linear search."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-1",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++ — Iterative\r\nint binarySearch(const vector<int>& arr, int key) {\r\n    int low = 0, high = arr.size() - 1;\r\n    while (low <= high) {\r\n        int mid = low + (high - low) / 2;  // Avoids overflow\r\n        if (arr[mid] == key) return mid;\r\n        if (arr[mid] < key)\r\n            low = mid + 1;\r\n        else\r\n            high = mid - 1;\r\n    }\r\n    return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Iterative\r\ndef binary_search(arr, key):\r\n    low, high = 0, len(arr) - 1\r\n    while low <= high:\r\n        mid = low + (high - low) // 2\r\n        if arr[mid] == key:\r\n            return mid\r\n        elif arr[mid] < key:\r\n            low = mid + 1\r\n        else:\r\n            high = mid - 1\r\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python — Recursive\r\ndef binary_search_recursive(arr, low, high, key):\r\n    if low > high:\r\n        return -1\r\n    mid = low + (high - low) // 2\r\n    if arr[mid] == key:\r\n        return mid\r\n    elif arr[mid] < key:\r\n        return binary_search_recursive(arr, mid + 1, high, key)\r\n    else:\r\n        return binary_search_recursive(arr, low, mid - 1, key)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Java — Iterative\r\npublic static int binarySearch(int[] arr, int key) {\r\n    int low = 0, high = arr.length - 1;\r\n    while (low <= high) {\r\n        int mid = low + (high - low) / 2;\r\n        if (arr[mid] == key) return mid;\r\n        if (arr[mid] < key) low = mid + 1;\r\n        else high = mid - 1;\r\n    }\r\n    return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mid = low + (high - low) / 2"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mid = (low + high) / 2"
        }), ". The latter can overflow when low + high exceeds Integer.MAX_VALUE — a classic bug in real systems."]
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
            children: "Blazing fast — O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires sorted input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, elegant recursion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow for frequent insert/delete"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Low constant factors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Poor cache locality vs linear (linked lists)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deterministic performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) sorting preprocessing needed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-1",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Empty array:"
        }), " low (0) > high (-1), immediately returns -1."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Single element:"
        }), " One comparison, O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Duplicate elements:"
        }), " Returns any occurrence, not necessarily the first/last."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Finding first/last occurrence:"
        }), " Use lower_bound / upper_bound variants (see Interview Corner)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "variations",
      children: "Variations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Lower bound (first >= key):"
        }), " Keep searching left when A[mid] == key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Upper bound (first > key):"
        }), " Keep searching right when A[mid] == key."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary search on answer:"
        }), " Used when the search space is a range of values, not array indices — e.g., find square root, aggressive cows problem."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search in rotated sorted array:"
        }), " Modified binary search that checks which half is sorted."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database indexing (B-tree search)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Debugging — git bisect uses binary search to find the first broken commit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dictionary / symbol table lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Numerical methods — root finding (bisection method)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Binary search is just a divide-and-conquer algorithm where one half is always discarded. If your problem can be modeled as \"find the point where a condition flips from false to true,\" binary search on the answer probably works."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-interpolation-search",
      children: "2.3 Interpolation Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Looking up a name in a phone book. If you're looking for \"Smith,\" you don't open to the middle — you open closer to the end because you know S is in the latter part of the alphabet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-2",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interpolation search improves on binary search when the data is uniformly distributed. Instead of always using the midpoint, it estimates the position using a linear interpolation formula."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "probe-formula",
      children: "Probe Formula"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "[\r\n\\text{pos} = \\text{low} + \\frac{(\\text{key} - A[\\text{low}]) \\cdot (\\text{high} - \\text{low})}{A[\\text{high}] - A[\\text{low}]}\r\n]"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This is the equation of a line through (low, A[low]) and (high, A[high]), evaluated at y = key."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-2",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["While low <= high and key is within range:\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute probe position using interpolation."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A[pos] == key, return pos."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A[pos] < key, search right (low = pos + 1)."
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "If A[pos] > key, search left (high = pos - 1)."
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Return -1."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-2",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key = 85"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pos = 0 + ((85 - 10) * (9 - 0)) / (100 - 10)\r\n    = 0 + (75 * 9) / 90\r\n    = 0 + 675 / 90\r\n    = 7.5 → 7\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "pos"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[pos]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "80"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85 > 80, low = 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "90"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "85 < 90, high = 7"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "—"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["low > high, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return -1"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key 85 not found — algorithm correctly determined it's between 80 and 90 (would be index 8.5, which rounds to either side showing absence)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-2",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key at first probe position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uniformly distributed data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skewed distribution (exponential, power law)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log log n)?"
      }), " On uniform data, the probe position converges to the target exponentially fast — each iteration roughly squares the precision of the estimate."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-2",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nint interpolationSearch(const vector<int>& arr, int key) {\r\n    int low = 0, high = arr.size() - 1;\r\n    while (low <= high && key >= arr[low] && key <= arr[high]) {\r\n        if (low == high) return (arr[low] == key) ? low : -1;\r\n        int pos = low + (key - arr[low]) * (high - low) / (arr[high] - arr[low]);\r\n        if (arr[pos] == key) return pos;\r\n        if (arr[pos] < key) low = pos + 1;\r\n        else high = pos - 1;\r\n    }\r\n    return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef interpolation_search(arr, key):\r\n    low, high = 0, len(arr) - 1\r\n    while low <= high and arr[low] <= key <= arr[high]:\r\n        if low == high:\r\n            return low if arr[low] == key else -1\r\n        pos = low + (key - arr[low]) * (high - low) // (arr[high] - arr[low])\r\n        if arr[pos] == key:\r\n            return pos\r\n        if arr[pos] < key:\r\n            low = pos + 1\r\n        else:\r\n            high = pos - 1\r\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-2",
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
            children: "O(log log n) on uniform data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n) worst-case on skewed data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer comparisons than binary on large uniform datasets"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex probe calculation with division"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Adapts to data distribution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Assumes numeric keys with meaningful ordering"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Warning:"
        }), " Interpolation search degrades to O(n) on exponentially distributed data. Always verify your data distribution before choosing it over binary search. For real-world systems, binary search's predictable O(log n) is often preferred over interpolation's variable performance."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-exponential-search",
      children: "2.4 Exponential Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Searching for a parking spot in an unfamiliar lot. You don't know how big the lot is, so you walk 10 steps, then 20, then 40, 80... until you either find a spot or realize you've passed the end."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-3",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Exponential search finds the range containing the target by doubling the search window, then performs binary search within that range."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-3",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If A[0] == key, return 0."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Start with i = 1. While i < n and A[i] <= key, double i."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform binary search on the range [i/2, min(i, n-1)]."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "step-by-step-dry-run-3",
      children: "Step-by-Step Dry Run"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Input: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A = [3, 7, 11, 19, 25, 31, 42, 56, 68, 79]"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "key = 42"
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "i"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[i]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparison"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7 <= 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11 <= 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "25 <= 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "i = 8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Doubling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "68 > 42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stop. Range: [4, 7]"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary search on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "A[4..7] = [25, 31, 42, 56]"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "low"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "high"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "mid"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "A[mid]"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "31"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42 > 31, low = 6"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "42"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Return 6"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Total comparisons for doubling + binary search: 4 + 2 = 6. Binary search alone would need 4 comparisons."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-3",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key at index 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Worst"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Key at last position"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Average"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(log i) where i is target position"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why O(log i)?"
      }), " The doubling phase takes log₂(i) steps to reach position i, then binary search takes O(log i) on the range [i/2, i]. Combined: 2 log₂(i) = O(log i)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-3",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nint exponentialSearch(const vector<int>& arr, int key) {\r\n    int n = arr.size();\r\n    if (arr[0] == key) return 0;\r\n    int i = 1;\r\n    while (i < n && arr[i] <= key) i *= 2;\r\n    int low = i / 2;\r\n    int high = min(i, n - 1);\r\n    // Binary search on [low, high]\r\n    while (low <= high) {\r\n        int mid = low + (high - low) / 2;\r\n        if (arr[mid] == key) return mid;\r\n        if (arr[mid] < key) low = mid + 1;\r\n        else high = mid - 1;\r\n    }\r\n    return -1;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Python\r\ndef exponential_search(arr, key):\r\n    if arr[0] == key:\r\n        return 0\r\n    i = 1\r\n    n = len(arr)\r\n    while i < n and arr[i] <= key:\r\n        i *= 2\r\n    return binary_search(arr, key, i // 2, min(i, n - 1))\n"
      })
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
            children: "Works on unbounded arrays (streaming)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Overkill for small arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Efficient when target is near the start"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-phase algorithm adds complexity"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "O(log n) worst-case guarantee"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Uses binary search as subroutine"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases-2",
      children: "Edge Cases"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target at index 0:"
        }), " Caught immediately — O(1)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Target absent:"
        }), " Binary search will determine this in O(log bound)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Infinite/unbounded array:"
        }), " Exponential search is the natural solution — no need to know the size."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applications-1",
      children: "Applications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timsort merge"
        }), " — Galloping mode uses exponential search to find merge positions efficiently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cursor-based pagination"
        }), " — Finding a page by ID in an API response."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Streaming data"
        }), " — Searching in data streams where total size is unknown."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Exponential search shines in exactly two scenarios: unbounded arrays and when the target is likely near the start. For general sorted arrays, binary search is simpler and equally fast asymptotically."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-ternary-search",
      children: "2.5 Ternary Search"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Real-World Analogy:"
      }), " Searching a sorted deck of cards by splitting into three piles instead of two — sounds thorough but requires two comparisons per step instead of one."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "definition-4",
      children: "Definition"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Ternary search divides the array into three equal parts using two midpoints."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "algorithm-steps-4",
      children: "Algorithm Steps"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute mid1 = low + (high - low) / 3, mid2 = high - (high - low) / 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Check both midpoints against the key."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key matches either, return it."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key < A[mid1], search left third."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key > A[mid2], search right third."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If key is between mid1 and mid2, search middle third."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis-4",
      children: "Complexity Analysis"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Recurrence:"
      }), " T(n) = T(n/3) + O(1) → O(log₃ n)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["But each step does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "2 comparisons"
      }), " vs binary search's ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "1 comparison"
      }), "."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comparisons per step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Steps for n = 10⁶"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log₂(10⁶) ≈ 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "log₃(10⁶) ≈ 12 × 2 = 24"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Ternary search does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "more total comparisons"
      }), " despite fewer steps."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "implementations-4",
      children: "Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// C++\r\nint ternarySearch(const vector<int>& arr, int low, int high, int key) {\r\n    if (low > high) return -1;\r\n    int mid1 = low + (high - low) / 3;\r\n    int mid2 = high - (high - low) / 3;\r\n    if (arr[mid1] == key) return mid1;\r\n    if (arr[mid2] == key) return mid2;\r\n    if (key < arr[mid1])\r\n        return ternarySearch(arr, low, mid1 - 1, key);\r\n    else if (key > arr[mid2])\r\n        return ternarySearch(arr, mid2 + 1, high, key);\r\n    else\r\n        return ternarySearch(arr, mid1 + 1, mid2 - 1, key);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advantages--disadvantages-4",
      children: "Advantages & Disadvantages"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Useful for unimodal function optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "More comparisons per step than binary search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fewer recursion depth steps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Never faster than binary in practice"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Ternary search does 2 comparisons per step. Despite log₃ n < log₂ n, the constant factor (2× comparisons) makes it strictly slower than binary search for searching in arrays. Its real use is finding the maximum of a unimodal function where you can't directly compare with a target value."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "comparative-analysis",
      children: "Comparative Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "performance-comparison-n--1000000",
      children: "Performance Comparison (n = 1,000,000)"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Algorithm"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Worst-case comparisons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Formula"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "⌈log₂(n+1)⌉"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Interpolation search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1,000,000"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "n (worst case)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 log₂ i"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ternary search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "38"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 log₃ n"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-choose-what",
      children: "When to Choose What"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Unsorted?              → Linear Search\r\nSorted, general:       → Binary Search\r\nSorted, uniform data:  → Interpolation Search  \r\nUnbounded array:       → Exponential Search\r\nFinding max of unimodal f(x): → Ternary Search\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-corner",
      children: "Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-questions",
      children: "Common Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Search in a rotated sorted array"
          }), " — Modified binary search. Find the pivot by comparing A[mid] with A[low], then determine which half is sorted and search accordingly."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Find first/last occurrence of a target"
          }), " — Standard binary search variant. For first occurrence, don't stop when A[mid] == key; continue searching left (high = mid - 1). For last, continue right (low = mid + 1)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Peak element in a mountain array"
          }), " — Binary search on the condition A[mid] < A[mid + 1]. If true, peak is on the right; otherwise, peak is on the left."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Count occurrences in sorted array"
          }), " — Find first and last occurrence with binary search, then last - first + 1."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-pitfalls",
      children: "Common Pitfalls"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pitfall"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "mid overflow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use low + (high - low) / 2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Infinite loop (low == mid)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ensure low = mid + 1, high = mid - 1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on unsorted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always sort first (or use linear)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Off-by-one errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop condition: low <= high, not low < high"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "applications-in-real-systems",
      children: "Applications in Real Systems"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Search Algorithm Used"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database B-Tree indexes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search within each node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Git bisect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on commit history"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Timsort (Python, Java, Android)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exponential search for galloping mode"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Google Search Index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpolation-inspired partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DNS resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on sorted domain tiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugger call stack navigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary search on frame list"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear search"
        }), " — Simple, works on anything, O(n). Use for unsorted data or tiny arrays."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Binary search"
        }), " — The workhorse. O(log n) on sorted arrays. Know it, love it, handle its edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interpolation search"
        }), " — Faster on uniform data (O(log log n)), but risky on skewed distributions."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exponential search"
        }), " — Best for unbounded arrays and targets near the start."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ternary search"
        }), " — Interesting theoretically, but binary search beats it in practice."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-takeaway",
      children: "Key Takeaway"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binary search is the most important algorithm in this chapter — master its standard form, its first/last-occurrence variants, and its \"binary search on answer\" pattern. These appear in nearly every technical interview and real-world system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " Binary search has what recurrence relation?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) T(n) = T(n-1) + O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) T(n) = 2T(n/2) + O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) T(n) = T(n/2) + O(1)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) T(n) = T(n/3) + O(1)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** T(n) = T(n/2) + O(1) — each step halves the search space with constant work.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " Which search algorithm is best for an unbounded (infinite) sorted array?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Linear search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Binary search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Exponential search"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Interpolation search"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C)** Exponential search — it doesn't need to know the array length and probes outward in exponentially growing steps.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " When does interpolation search degrade to O(n)?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) When the array is small"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) When data is exponentially distributed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) When the array is sorted"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) When using integer keys"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Interpolation search assumes uniform distribution. On skewed data like exponential distributions, it can make O(n) probes.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Why is ternary search slower than binary search despite taking fewer steps?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) Ternary search uses more memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) Ternary search does 2 comparisons per step vs binary's 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) Ternary search requires floating-point division"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) Ternary search can't handle duplicates"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** Ternary search does 2 comparisons per step while binary search does 1. The total comparisons are 2·log₃(n) > log₂(n) for all practical n.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What is the advantage of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mid = low + (high - low) / 2"
      }), " over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mid = (low + high) / 2"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A) It's faster"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "B) It avoids integer overflow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "C) It produces more accurate midpoints"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "D) It works on unsorted arrays"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B)** The expression `low + (high - low) / 2` avoids integer overflow when low + high exceeds the maximum integer value.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why does binary search require a sorted array?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the advantage of exponential search over binary search?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Under what distribution does interpolation search achieve O(log log n) performance?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the midpoint computations for binary search and interpolation search."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement binary search with recursion in C++. Compare its performance with the iterative version."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "An array of 100 elements is uniformly distributed. Estimate the average number of comparisons for binary search and interpolation search."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a function that performs ternary search and empirically compare it to binary search on arrays of size 10³, 10⁵, 10⁷."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Find in rotated sorted array:"
        }), " Design a search algorithm for a sorted, rotated array (e.g., [13, 14, 15, 1, 2, 3]). The algorithm should run in O(log n) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Median of two sorted arrays:"
        }), " Given two sorted arrays of size m and n, find the median in O(log(min(m, n))) time."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Search in a nearly sorted array:"
        }), " An array where each element is at most k positions away from its sorted position — search for a target efficiently."]
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



/***/ }

}]);