"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[36534],{

/***/ 65519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_02_arrays_md_cd3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-03-data-structures-algorithms-02-arrays-md-cd3.json
const site_docs_courses_ai_engineering_placement_03_data_structures_algorithms_02_arrays_md_cd3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/data-structures-algorithms/02-arrays","title":"Arrays","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/03-data-structures-algorithms/02-arrays.md","sourceDirName":"courses/ai-engineering-placement/03-data-structures-algorithms","slug":"/ai-engineering-placement/03-data-structures-algorithms/02-arrays","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/02-arrays","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":36,"frontMatter":{"id":"02-arrays","slug":"/ai-engineering-placement/03-data-structures-algorithms/02-arrays","title":"Arrays","sidebar_label":"Arrays","sidebar_position":36},"sidebar":"placementSidebar","previous":{"title":"Time and Space Complexity","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/01-time-and-space-complexity"},"next":{"title":"Strings","permalink":"/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/03-strings"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/03-data-structures-algorithms/02-arrays.md


const frontMatter = {
	id: '02-arrays',
	slug: '/ai-engineering-placement/03-data-structures-algorithms/02-arrays',
	title: 'Arrays',
	sidebar_label: 'Arrays',
	sidebar_position: 36
};
const contentTitle = 'Arrays';

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
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "2.1 Array Fundamentals",
  "id": "21-array-fundamentals",
  "level": 2
}, {
  "value": "2.2 Basic Operations",
  "id": "22-basic-operations",
  "level": 2
}, {
  "value": "2.3 Prefix Sum Technique",
  "id": "23-prefix-sum-technique",
  "level": 2
}, {
  "value": "2.4 Two-Pointer Technique",
  "id": "24-two-pointer-technique",
  "level": 2
}, {
  "value": "2.5 In-Place Manipulations",
  "id": "25-in-place-manipulations",
  "level": 2
}, {
  "value": "2.6 Multi-dimensional Arrays",
  "id": "26-multi-dimensional-arrays",
  "level": 2
}, {
  "value": "TypeScript Parallel",
  "id": "typescript-parallel",
  "level": 2
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
  "value": "&#39;i&#39; = signed int, &#39;d&#39; = double, &#39;f&#39; = float",
  "id": "i--signed-int-d--double-f--float",
  "level": 2
}, {
  "value": "List is more flexible for most use cases",
  "id": "list-is-more-flexible-for-most-use-cases",
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
    a: "a",
    button: "button",
    code: "code",
    details: "details",
    div: "div",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "arrays",
        children: "Arrays"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Objective"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand array memory layout and indexing fundamentals"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement static and dynamic array operations in Python"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Solve problems using the two-pointer and sliding window techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master in-place array manipulation and rotation algorithms"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implement prefix sum and difference array techniques"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identify and solve common array interview patterns"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Arrays are the most fundamental data structure, providing O(1) random access. Understanding array operations, their memory layout, and common patterns like sliding window is essential for coding interviews and building efficient data pipelines."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Time and space complexity basics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding arrays is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how arrays works in practice."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Section"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concept"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array Fundamentals"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory layout, indexing, static vs dynamic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Traversal, insertion, deletion, searching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefix Sum Technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Range sum queries, cumulative arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Two-Pointer Technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted arrays, pair sums, partitioning"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-Place Manipulations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reversal, rotation, shifting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-dimensional Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix operations, transpose, spiral traversal"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Array Fundamentals] --> B[Basic Operations]\n    B --> C[Prefix Sum]\n    B --> D[Two-Pointer]\n    B --> E[In-Place Ops]\n    C --> F[Matrix Arrays]\n    D --> F\n    E --> F\n    F --> G[Practice Problems]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "21-array-fundamentals",
      children: "2.1 Array Fundamentals"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["An array is a contiguous block of memory storing elements of the same type. Each element is accessed via an offset from the base address: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "address = base + index — element_size"
      }), "."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Static arrays"
      }), " have fixed size determined at creation. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic arrays"
      }), " (Python lists) automatically resize when capacity is exceeded."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Python lists"
      }), " are dynamic arrays that store references to objects, allowing heterogeneous elements. Internally, they use overallocation for amortized O(1) append."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Static array using array module (typed)\nfrom array import array\nstatic_arr = array('i', [1, 2, 3, 4, 5])  # 'i' = signed int\nprint(static_arr[0])  # 1\n\n## Dynamic array — Python list\ndynamic_arr = [1, 2, 3]  # Initial capacity > 3\ndynamic_arr.append(4)     # Amortized O(1)\ndynamic_arr.extend([5, 6, 7])  # May trigger resize\nprint(len(dynamic_arr))   # 7\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory layout comparison"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Array of 5 integers\narr = [10, 20, 30, 40, 50]\n\n## Memory: [10][20][30][40][50] — contiguous\n\n## Address: base + 0, base + 8, base + 16, ... (on 64-bit)\n\n## Access arr[3]: base + 3*8 = address of 40 — O(1)\n\n## Linked list — nodes scattered in memory\n\n## Access by index: must traverse nodes — O(n)\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Static Array"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Array (amortized)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Linked List"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Access by index"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Insert at middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from end"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Delete from middle"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A (full)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(n)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "22-basic-operations",
      children: "2.2 Basic Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Array traversal"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def traverse(arr):\n    for i in range(len(arr)):\n        print(f\"Index {i}: {arr[i]}\")\n\n## Two-direction traversal\ndef traverse_bidirectional(arr):\n    for i in range(len(arr) // 2):\n        print(arr[i], arr[-(i + 1)])\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linear search"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def linear_search(arr, target):\n    for i, val in enumerate(arr):\n        if val == target:\n            return i\n    return -1\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Insertion at position"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def insert_at(arr, index, value):\n    # Shift elements right from index\n    arr.append(None)  # Extend array by 1\n    for i in range(len(arr) - 1, index, -1):\n        arr[i] = arr[i - 1]\n    arr[index] = value\n    return arr\n\n## Better: use list.insert\narr = [1, 2, 4, 5]\narr.insert(2, 3)  # [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Deletion at position"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def delete_at(arr, index):\n    # Shift elements left\n    for i in range(index, len(arr) - 1):\n        arr[i] = arr[i + 1]\n    arr.pop()  # Remove last element\n    return arr\n\n## Better: use list.pop\narr = [1, 2, 3, 4, 5]\narr.pop(2)  # [1, 2, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reverse an array"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def reverse_array(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n    return arr\n\n## Pythonic way\narr = [1, 2, 3, 4, 5]\nreversed_arr = arr[::-1]  # Creates new array\narr.reverse()             # In-place\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "23-prefix-sum-technique",
      children: "2.3 Prefix Sum Technique"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Prefix sum precomputes cumulative sums for efficient range queries."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "One-dimensional prefix sum"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def prefix_sum(arr):\n    prefix = [0] * (len(arr) + 1)\n    for i in range(len(arr)):\n        prefix[i + 1] = prefix[i] + arr[i]\n    return prefix\n\n## Range sum query: sum(L, R) = prefix[R+1] - prefix[L]\narr = [3, 1, 4, 1, 5, 9, 2, 6]\npref = prefix_sum(arr)\n\ndef range_sum(pref, L, R):\n    return pref[R + 1] - pref[L]\n\nprint(range_sum(pref, 2, 5))  # 4 + 1 + 5 + 9 = 19\nprint(range_sum(pref, 0, 3))  # 3 + 1 + 4 + 1 = 9\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Subarray sum equals k"
      }), ": Count subarrays whose sum equals k."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from collections import defaultdict\n\ndef subarray_sum_equals_k(arr, k):\n    prefix_map = defaultdict(int)\n    prefix_map[0] = 1\n    count = 0\n    curr_sum = 0\n\n    for num in arr:\n        curr_sum += num\n        count += prefix_map[curr_sum - k]\n        prefix_map[curr_sum] += 1\n\n    return count\n\n## Example: [1, 1, 1], k=2 → 2\nprint(subarray_sum_equals_k([1, 1, 1], 2))  # 2\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two-dimensional prefix sum"
      }), ": Efficient rectangle sum queries."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def prefix_sum_2d(matrix):\n    if not matrix or not matrix[0]:\n        return []\n    m, n = len(matrix), len(matrix[0])\n    pref = [[0] * (n + 1) for _ in range(m + 1)]\n\n    for i in range(m):\n        for j in range(n):\n            pref[i + 1][j + 1] = (matrix[i][j] +\n                                  pref[i][j + 1] +\n                                  pref[i + 1][j] -\n                                  pref[i][j])\n    return pref\n\ndef rectangle_sum(pref, r1, c1, r2, c2):\n    return (pref[r2 + 1][c2 + 1] -\n            pref[r1][c2 + 1] -\n            pref[r2 + 1][c1] +\n            pref[r1][c1])\n\nmatrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\npref = prefix_sum_2d(matrix)\nprint(rectangle_sum(pref, 1, 1, 2, 2))  # 5+6+8+9 = 28\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "24-two-pointer-technique",
      children: "2.4 Two-Pointer Technique"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Two pointers traverse an array from different positions, often opposite ends or different speeds."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Two-sum in sorted array"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def two_sum_sorted(arr, target):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        curr = arr[left] + arr[right]\n        if curr == target:\n            return [left, right]\n        elif curr < target:\n            left += 1\n        else:\n            right -= 1\n    return [-1, -1]\n\nprint(two_sum_sorted([2, 7, 11, 15], 9))  # [0, 1]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Remove duplicates from sorted array"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def remove_duplicates(arr):\n    if not arr:\n        return 0\n    write_pos = 1\n    for read_pos in range(1, len(arr)):\n        if arr[read_pos] != arr[write_pos - 1]:\n            arr[write_pos] = arr[read_pos]\n            write_pos += 1\n    return write_pos  # New length\n\narr = [1, 1, 2, 2, 3, 4, 4, 5]\nnew_len = remove_duplicates(arr)\nprint(arr[:new_len])  # [1, 2, 3, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Container with most water"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def max_area(heights):\n    left, right = 0, len(heights) - 1\n    max_water = 0\n    while left < right:\n        width = right - left\n        height = min(heights[left], heights[right])\n        max_water = max(max_water, width * height)\n        if heights[left] < heights[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water\n\nprint(max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]))  # 49\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Trapping rain water"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def trap_rain_water(heights):\n    if not heights:\n        return 0\n    left, right = 0, len(heights) - 1\n    left_max, right_max = 0, 0\n    water = 0\n\n    while left < right:\n        if heights[left] < heights[right]:\n            if heights[left] >= left_max:\n                left_max = heights[left]\n            else:\n                water += left_max - heights[left]\n            left += 1\n        else:\n            if heights[right] >= right_max:\n                right_max = heights[right]\n            else:\n                water += right_max - heights[right]\n            right -= 1\n    return water\n\nprint(trap_rain_water([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))  # 6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Two-Pointer Variants\"\n        A[Opposite Ends] -->|\"Two Sum, Reverse\"| D[Sorted Array]\n        B[Same Direction] -->|\"Remove Duplicates\"| E[Fast & Slow]\n        C[Fast & Slow] -->|\"Cycle Detection\"| F[Linked List]\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "25-in-place-manipulations",
      children: "2.5 In-Place Manipulations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Array rotation by k positions"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rotate_right(arr, k):\n    n = len(arr)\n    k %= n\n    # Reverse entire array\n    reverse(arr, 0, n - 1)\n    # Reverse first k\n    reverse(arr, 0, k - 1)\n    # Reverse rest\n    reverse(arr, k, n - 1)\n    return arr\n\ndef reverse(arr, left, right):\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1\n\nprint(rotate_right([1, 2, 3, 4, 5], 2))  # [4, 5, 1, 2, 3]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Move zeros to end"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def move_zeros(arr):\n    write_pos = 0\n    for read_pos in range(len(arr)):\n        if arr[read_pos] != 0:\n            arr[write_pos], arr[read_pos] = arr[read_pos], arr[write_pos]\n            write_pos += 1\n    return arr\n\nprint(move_zeros([0, 1, 0, 3, 12]))  # [1, 3, 12, 0, 0]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dutch national flag problem"
      }), " (sort 0, 1, 2):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def sort_colors(arr):\n    low, mid, high = 0, 0, len(arr) - 1\n    while mid <= high:\n        if arr[mid] == 0:\n            arr[low], arr[mid] = arr[mid], arr[low]\n            low += 1\n            mid += 1\n        elif arr[mid] == 1:\n            mid += 1\n        else:  # arr[mid] == 2\n            arr[mid], arr[high] = arr[high], arr[mid]\n            high -= 1\n    return arr\n\nprint(sort_colors([2, 0, 2, 1, 1, 0]))  # [0, 0, 1, 1, 2, 2]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Find the first missing positive integer"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def first_missing_positive(arr):\n    n = len(arr)\n    # Place each number in its correct position\n    for i in range(n):\n        while 1 <= arr[i] <= n and arr[arr[i] - 1] != arr[i]:\n            correct_pos = arr[i] - 1\n            arr[i], arr[correct_pos] = arr[correct_pos], arr[i]\n\n    # Find first missing\n    for i in range(n):\n        if arr[i] != i + 1:\n            return i + 1\n    return n + 1\n\nprint(first_missing_positive([3, 4, -1, 1]))  # 2\nprint(first_missing_positive([7, 8, 9, 11, 12]))  # 1\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "26-multi-dimensional-arrays",
      children: "2.6 Multi-dimensional Arrays"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Matrix transpose"
      }), ": Convert rows to columns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def transpose(matrix):\n    m, n = len(matrix), len(matrix[0])\n    result = [[0] * m for _ in range(n)]\n    for i in range(m):\n        for j in range(n):\n            result[j][i] = matrix[i][j]\n    return result\n\nmatrix = [[1, 2, 3], [4, 5, 6]]\nprint(transpose(matrix))  # [[1, 4], [2, 5], [3, 6]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spiral matrix traversal"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def spiral_order(matrix):\n    if not matrix:\n        return []\n    result = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n\n    while top <= bottom and left <= right:\n        # Traverse right\n        for j in range(left, right + 1):\n            result.append(matrix[top][j])\n        top += 1\n        # Traverse down\n        for i in range(top, bottom + 1):\n            result.append(matrix[i][right])\n        right -= 1\n        # Traverse left\n        if top <= bottom:\n            for j in range(right, left - 1, -1):\n                result.append(matrix[bottom][j])\n            bottom -= 1\n        # Traverse up\n        if left <= right:\n            for i in range(bottom, top - 1, -1):\n                result.append(matrix[i][left])\n            left += 1\n    return result\n\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(spiral_order(matrix))  # [1, 2, 3, 6, 9, 8, 7, 4, 5]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rotate image"
      }), " (90 degrees clockwise):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def rotate_image(matrix):\n    n = len(matrix)\n    # Transpose\n    for i in range(n):\n        for j in range(i, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    # Reverse each row\n    for i in range(n):\n        matrix[i].reverse()\n    return matrix\n\nmatrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nprint(rotate_image(matrix))  # [[7, 4, 1], [8, 5, 2], [9, 6, 3]]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Set matrix zeros"
      }), ": If an element is 0, set its entire row and column to 0."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def set_zeroes(matrix):\n    m, n = len(matrix), len(matrix[0])\n    first_row_zero = any(matrix[0][j] == 0 for j in range(n))\n    first_col_zero = any(matrix[i][0] == 0 for i in range(m))\n\n    # Mark zeros using first row/col as markers\n    for i in range(1, m):\n        for j in range(1, n):\n            if matrix[i][j] == 0:\n                matrix[i][0] = 0\n                matrix[0][j] = 0\n\n    # Set rows to zero based on markers\n    for i in range(1, m):\n        if matrix[i][0] == 0:\n            for j in range(n):\n                matrix[i][j] = 0\n\n    # Set cols to zero based on markers\n    for j in range(1, n):\n        if matrix[0][j] == 0:\n            for i in range(m):\n                matrix[i][j] = 0\n\n    if first_row_zero:\n        for j in range(n):\n            matrix[0][j] = 0\n    if first_col_zero:\n        for i in range(m):\n            matrix[i][0] = 0\n\n    return matrix\n\nmatrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]\nprint(set_zeroes(matrix))  # [[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph \"Matrix Traversal Patterns\"\n        A[Row-wise] --> D[Standard]\n        B[Spiral] --> E[Clockwise]\n        C[Diagonal] --> F[Anti-Diagonal]\n        D --> G[Operations]\n        E --> G\n        F --> G\n    end\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "TypeScript arrays provide similar functionality with type safety:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript arrays — type-safe dynamic arrays\nlet arr: number[] = [1, 2, 3];\narr.push(4);  // O(1) amortized\n\n// Two-pointer reverse\nfunction reverse<T>(arr: T[]): void {\n    let left = 0, right = arr.length - 1;\n    while (left < right) {\n        [arr[left], arr[right]] = [arr[right], arr[left]];\n        left++;\n        right--;\n    }\n}\n\n// Prefix sum\nfunction prefixSum(arr: number[]): number[] {\n    const pref: number[] = new Array(arr.length + 1).fill(0);\n    for (let i = 0; i < arr.length; i++) {\n        pref[i + 1] = pref[i] + arr[i];\n    }\n    return pref;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Arrays are contiguous memory blocks providing O(1) random access by index, the fundamental building block for most data structures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python lists are dynamic arrays with amortized O(1) append, achieved via geometric resizing (typically 1.125x or 2x)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prefix sum enables O(1) range sum queries after O(n) preprocessing, critical for subarray problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The two-pointer technique solves pair problems (two sum, container with most water) in O(n) time with O(1) space"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The sliding window is a special two-pointer technique for contiguous subarray problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In-place array manipulation uses O(1) extra space by rearranging elements directly (reversal, rotation, partitioning)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Dutch national flag algorithm sorts three distinct values in O(n) with a single pass"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Matrix traversal patterns include row-wise, spiral, diagonal, and transpose — each with distinct index manipulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Using first row/col as markers enables O(1) space for certain matrix transformation problems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding array complexity trade-offs (access vs insertion vs deletion) is essential for choosing the right data structure"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Do This"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid This"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Range sum queries"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use prefix sum (O(1) query)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Summing each range in O(n)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorted array search"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use binary search (O(log n))"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear search"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Remove duplicates"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use two-pointer write technique"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Using set and converting back"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rotate array"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use triple reversal"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shifting one by one"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Matrix edit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use first row/col as markers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(m+n) extra space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sorting 0,1,2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dutch national flag algorithm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Counting sort with extra array"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa02-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q1: Implement an in-place array reversal and analyze its complexity.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "def reverse(arr):\n    left, right = 0, len(arr) - 1\n    while left < right:\n        arr[left], arr[right] = arr[right], arr[left]\n        left += 1\n        right -= 1"
          })
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time complexity"
          }), ": O(n) — each element is swapped once."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Space complexity"
          }), ": O(1) — only two pointers, no extra memory."]
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Key insight"
          }), ": The triple reversal technique extends this for array rotation: reverse all, reverse first k, reverse rest."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa02-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q2: Explain the prefix sum technique. How is it used for 2D range sum queries?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Prefix sum precomputes cumulative sums so any subarray sum can be computed in O(1) time. For 1D: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "sum(L,R) = prefix[R+1] - prefix[L]"
          }), "."]
        }), "\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "For 2D, the formula uses inclusion-exclusion:"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
          children: [(0,jsx_runtime.jsx)(_components.code, {
            children: "pref[i+1][j+1] = matrix[i][j]\n                + pref[i][j+1]\n                + pref[i+1][j]\n                - pref[i][j]\n"
          }), (0,jsx_runtime.jsx)(_components.p, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rect_sum(r1,c1,r2,c2) = pref[r2+1][c2+1]\n- pref[r1][c2+1]\n- pref[r2+1][c1]\n+ pref[r1][c1]"
            })
          })]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Applications"
          }), ": Subarray sum equals k (using hash map), matrix rectangle sums, image processing (box blur)."]
        }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "✅ Mark Reviewed"
      }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "🔖 Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "dsa02-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    Q3: Implement the Dutch national flag algorithm for sorting 0s, 1s, and 2s.\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsxs)(_components.code, {
            children: ["def sort_colors(arr):\n    low = mid = 0\n    high = len(arr) - 1\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "while mid &lt;= high:\n    if arr[mid] == 0:\n        arr[low], arr[mid] = arr[mid], arr[low]\n        low += 1\n        mid += 1\n    elif arr[mid] == 1:\n        mid += 1\n    else:  # arr[mid] == 2\n        arr[mid], arr[high] = arr[high], arr[mid]\n        high -= 1</code></pre>\n<p><strong>Key insight</strong>: Three pointers maintain three regions: [0..low-1] = 0s, [low..mid-1] = 1s, [high+1..end] = 2s.</p>\n<p><strong>Time</strong>: O(n) single pass. <strong>Space</strong>: O(1).</p>\n"
              })
            }), "\n  "]
          })
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      })]
    }), (0,jsx_runtime.jsxs)(_components.code, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa02-q4",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q4: Explain the \"container with most water\" problem and its solution.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem"
            }), ": Given n vertical lines on a coordinate plane representing walls, find two lines that together with the x-axis form a container holding the most water."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Solution"
            }), ": Two pointers from both ends. Calculate area = width — min(height_left, height_right). Move the pointer with smaller height inward."]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "def max_area(heights):\n    left, right = 0, len(heights) - 1\n    max_water = 0\n    while left < right:\n        water = (right - left) * min(heights[left], heights[right])\n        max_water = max(max_water, water)\n        if heights[left] < heights[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water"
            })
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Why it works"
            }), ": Moving the taller pointer inward can never increase area (width decreases, height capped by shorter line). So we always move the shorter pointer."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            }), ": O(n) time, O(1) space."]
          }), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa02-q5",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q5: How do you rotate an array by k positions without using extra space?\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: ["Use the ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "triple reversal"
            }), " technique:"]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "def rotate(arr, k):\n    n = len(arr)\n    k %= n\n    reverse(arr, 0, n - 1)    # Reverse all\n    reverse(arr, 0, k - 1)    # Reverse first k\n    reverse(arr, k, n - 1)    # Reverse the rest\n"
            }), (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "def reverse(arr, left, right):\nwhile left < right:\narr[left], arr[right] = arr[right], arr[left]\nleft += 1\nright -= 1"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Example"
            }), ": [1,2,3,4,5], k=2 → reverse all: [5,4,3,2,1] → reverse first 2: [4,5,3,2,1] → reverse last 3: [4,5,1,2,3]"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Complexity"
            }), ": O(n) time, O(1) extra space."]
          }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Alternative"
            }), ": Use cyclic replacements (juggle algorithm) which is more complex but same complexity."]
          }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-mark-btn",
          children: "✅ Mark Reviewed"
        }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
          className: "tp-qa-bookmark-btn",
          children: "🔖 Bookmark"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
        className: "tp-qa-card",
        "data-qid": "dsa02-q6",
        children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
          className: "tp-qa-question",
          children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
            className: "tp-qa-status"
          }), "\n    Q6: Explain the \"trapping rain water\" problem and its two-pointer solution.\n  "]
        }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
          className: "tp-qa-answer",
          children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Problem"
            }), ": Given an array of non-negative integers representing elevation heights, compute how much water can be trapped after rain."]
          }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Two-pointer solution"
            }), ":"]
          }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
            children: (0,jsx_runtime.jsxs)(_components.code, {
              children: ["def trap(heights):\n    left, right = 0, len(heights) - 1\n    left_max = right_max = 0\n    water = 0\n", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsx)(_components.code, {
                  children: "while left &lt; right:\n    if heights[left] &lt; heights[right]:\n        if heights[left] &gt;= left_max:\n            left_max = heights[left]\n        else:\n            water += left_max - heights[left]\n        left += 1\n    else:\n        if heights[right] &gt;= right_max:\n            right_max = heights[right]\n        else:\n            water += right_max - heights[right]\n        right -= 1\nreturn water</code></pre>\n<p><strong>Key insight</strong>: Water trapped at position i = min(max_left, max_right) - height[i]. The two-pointer approach tracks left_max and right_max as we converge from both ends.</p>\n<p><strong>Complexity</strong>: O(n) time, O(1) space.</p>\n"
                })
              }), "\n  "]
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-mark-btn",
            children: "✅ Mark Reviewed"
          }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
            className: "tp-qa-bookmark-btn",
            children: "🔖 Bookmark"
          }), "\n"]
        })]
      }), (0,jsx_runtime.jsxs)(_components.code, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
          className: "tp-qa-card",
          "data-qid": "dsa02-q7",
          children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
            className: "tp-qa-question",
            children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
              className: "tp-qa-status"
            }), "\n    Q7: How do you find the first missing positive integer in an array?\n  "]
          }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
            className: "tp-qa-answer",
            children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Problem"
              }), ": Given unsorted integers (including negatives), find the smallest missing positive integer in O(n) time and O(1) space."]
            }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
              children: [(0,jsx_runtime.jsx)(_components.strong, {
                children: "Solution using cyclic sort"
              }), ":"]
            }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsxs)(_components.code, {
                children: ["def first_missing_positive(arr):\n    n = len(arr)\n    # Place each number at its correct index\n    for i in range(n):\n        while 1 <= arr[i] <= n and arr[arr[i] - 1] != arr[i]:\n            correct = arr[i] - 1\n            arr[i], arr[correct] = arr[correct], arr[i]\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "# Find first index where value is wrong\nfor i in range(n):\n    if arr[i] != i + 1:\n        return i + 1\nreturn n + 1</code></pre>\n<p><strong>Key insight</strong>: Numbers 1 to n should be placed at indices 0 to n-1. After placing them correctly, the first mismatch tells us the answer.</p>\n<p><strong>Complexity</strong>: O(n) time (each element is swapped at most n times), O(1) space.</p>\n"
                  })
                }), "\n  "]
              })
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-mark-btn",
              children: "✅ Mark Reviewed"
            }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
              className: "tp-qa-bookmark-btn",
              children: "🔖 Bookmark"
            }), "\n"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.code, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
            className: "tp-qa-card",
            "data-qid": "dsa02-q8",
            children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
              className: "tp-qa-question",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                className: "tp-qa-status"
              }), "\n    Q8: Implement the spiral matrix traversal algorithm.\n  "]
            }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
              className: "tp-qa-answer",
              children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                children: (0,jsx_runtime.jsxs)(_components.code, {
                  children: ["def spiral_order(matrix):\n    if not matrix:\n        return []\n    result = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsx)(_components.code, {
                      children: "while top &lt;= bottom and left &lt;= right:\n    # Left to right on top row\n    for j in range(left, right + 1):\n        result.append(matrix[top][j])\n    top += 1\n\n    # Top to bottom on right column\n    for i in range(top, bottom + 1):\n        result.append(matrix[i][right])\n    right -= 1\n\n    # Right to left on bottom row\n    if top &lt;= bottom:\n        for j in range(right, left - 1, -1):\n            result.append(matrix[bottom][j])\n        bottom -= 1\n\n    # Bottom to top on left column\n    if left &lt;= right:\n        for i in range(bottom, top - 1, -1):\n            result.append(matrix[i][left])\n        left += 1\nreturn result</code></pre>\n<p><strong>Key insight</strong>: Contract the boundaries after each direction traversal. Check bounds before the left and up traversals to avoid duplicating elements in single-row/column cases.</p>\n<p><strong>Complexity</strong>: O(m—n) time, O(1) space excluding output.</p>\n"
                    })
                  }), "\n  "]
                })
              })]
            }), (0,jsx_runtime.jsxs)(_components.code, {
              children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-mark-btn",
                children: "✅ Mark Reviewed"
              }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                className: "tp-qa-bookmark-btn",
                children: "🔖 Bookmark"
              }), "\n"]
            })]
          }), (0,jsx_runtime.jsxs)(_components.code, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
              className: "tp-qa-card",
              "data-qid": "dsa02-q9",
              children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                className: "tp-qa-question",
                children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                  className: "tp-qa-status"
                }), "\n    Q9: Explain how to set matrix rows and columns to zero in O(1) space.\n  "]
              }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                className: "tp-qa-answer",
                children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Problem"
                  }), ": If any element is 0, set its entire row and column to 0. Must do this in-place."]
                }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Approach"
                  }), ": Use the first row and first column as markers instead of extra arrays."]
                }), "\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsxs)(_components.code, {
                    children: ["def set_zeroes(matrix):\n    m, n = len(matrix), len(matrix[0])\n    # Check if first row/col need zeroing\n    first_row_zero = any(matrix[0][j] == 0 for j in range(n))\n    first_col_zero = any(matrix[i][0] == 0 for i in range(m))\n", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "# Use first row/col as markers\nfor i in range(1, m):\n    for j in range(1, n):\n        if matrix[i][j] == 0:\n            matrix[i][0] = 0\n            matrix[0][j] = 0\n\n# Zero out based on markers\nfor i in range(1, m):\n    if matrix[i][0] == 0:\n        for j in range(n):\n            matrix[i][j] = 0\nfor j in range(1, n):\n    if matrix[0][j] == 0:\n        for i in range(m):\n            matrix[i][j] = 0\n\n# Handle first row/col\nif first_row_zero:\n    for j in range(n):\n        matrix[0][j] = 0\nif first_col_zero:\n    for i in range(m):\n        matrix[i][0] = 0</code></pre>\n<p><strong>Complexity</strong>: O(m—n) time, O(1) space.</p>\n"
                      })
                    }), "\n  "]
                  })
                })]
              }), (0,jsx_runtime.jsxs)(_components.code, {
                children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                  className: "tp-qa-mark-btn",
                  children: "✅ Mark Reviewed"
                }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                  className: "tp-qa-bookmark-btn",
                  children: "🔖 Bookmark"
                }), "\n"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.code, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                className: "tp-qa-card",
                "data-qid": "dsa02-q10",
                children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                  className: "tp-qa-question",
                  children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                    className: "tp-qa-status"
                  }), "\n    Q10: How do you find subarray sum equals k? Explain the hash map approach.\n  "]
                }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                  className: "tp-qa-answer",
                  children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                    children: (0,jsx_runtime.jsxs)(_components.code, {
                      children: ["from collections import defaultdict\n", (0,jsx_runtime.jsx)(_components.p, {
                        children: "def subarray_sum(arr, k):\nprefix_counts = defaultdict(int)\nprefix_counts[0] = 1\ncurr_sum = count = 0"
                      }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "for num in arr:\n    curr_sum += num\n    # If curr_sum - k was seen before,\n    # subarray from that point to current has sum k\n    count += prefix_counts[curr_sum - k]\n    prefix_counts[curr_sum] += 1\n\nreturn count</code></pre>\n<p><strong>Intuition</strong>: If prefix sums at indices i and j differ by k, then subarray (i+1..j) sums to k. The hash map stores how many times each prefix sum has occurred.</p>\n<p><strong>Complexity</strong>: O(n) time, O(n) space.</p>\n<p><strong>Variations</strong>: Subarray sum divisible by k (use modulo), subarray with k ones (use running count).</p>\n"
                        })
                      }), "\n  "]
                    })
                  })]
                }), (0,jsx_runtime.jsxs)(_components.code, {
                  children: ["\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                })]
              }), (0,jsx_runtime.jsxs)(_components.code, {
                children: ["\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-q11",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q11: What is the difference between Python lists and arrays from the `array` module?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Python lists"
                      }), ":"]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Dynamic arrays storing references to Python objects"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Can hold heterogeneous types"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Overallocate for amortized O(1) append"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "More memory overhead per element (8 bytes for pointer + object overhead)"
                      }), "\n    "]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "array.array"
                      }), ":"]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.ul, {
                      children: ["\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Stores C-style primitive values directly (not objects)"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Homogeneous type only"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "More memory efficient (1-8 bytes per element depending on type)"
                      }), "\n      ", (0,jsx_runtime.jsx)(_components.li, {
                        children: "Supports buffer protocol for zero-copy operations"
                      }), "\n    "]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.pre, {
                      children: [(0,jsx_runtime.jsxs)(_components.code, {
                        children: ["from array import array\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "i--signed-int-d--double-f--float",
                          children: "'i' = signed int, 'd' = double, 'f' = float"
                        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                          children: "int_arr = array('i', [1, 2, 3, 4, 5])\nfloat_arr = array('d', [1.0, 2.0, 3.0])"
                        }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                          id: "list-is-more-flexible-for-most-use-cases",
                          children: "List is more flexible for most use cases"
                        }), "\n"]
                      }), (0,jsx_runtime.jsx)(_components.p, {
                        children: (0,jsx_runtime.jsx)(_components.code, {
                          children: "list_arr = [1, \"hello\", 3.14, None]"
                        })
                      })]
                    }), (0,jsx_runtime.jsx)(_components.p, {}), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-q12",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    Q12: How do you efficiently merge two sorted arrays into a single sorted array?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.pre, {
                      children: (0,jsx_runtime.jsx)(_components.code, {
                        children: "def merge_sorted(arr1, arr2):\n    result = []\n    i = j = 0\n    while i < len(arr1) and j < len(arr2):\n        if arr1[i] <= arr2[j]:\n            result.append(arr1[i])\n            i += 1\n        else:\n            result.append(arr2[j])\n            j += 1\n    # Append remaining elements\n    result.extend(arr1[i:])\n    result.extend(arr2[j:])\n    return result"
                      })
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Key insight"
                      }), ": Compare from the front, always take the smaller element. After one array is exhausted, append the rest of the other array."]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Complexity"
                      }), ": O(m+n) time, O(m+n) space (or O(1) if merging into first array from the end)."]
                    }), "\n    ", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "In-place variant"
                      }), ": Merge into the first array which has extra space at the end. Start filling from the last position by comparing the last elements of both arrays."]
                    }), "\n  "]
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-mark-btn",
                    children: "✅ Mark Reviewed"
                  }), "\n  ", (0,jsx_runtime.jsx)(_components.button, {
                    className: "tp-qa-bookmark-btn",
                    children: "🔖 Bookmark"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "chapter-quiz",
                  children: "Chapter Quiz"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q1"
                  }), ": What is the time complexity of accessing arr[42] in a Python list?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "a) O(1)\nb) O(n)\nc) O(log n)\nd) O(42)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-quiz1",
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Show Answer"
                  }), (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: [(0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Answer: a) O(1)"
                      })
                    }), (0,jsx_runtime.jsx)(_components.p, {
                      children: "Array access by index is O(1) — direct memory address computation."
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q2"
                  }), ": What does the two-pointer approach for \"two sum in sorted array\" return?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "a) The two values that sum to target\nb) The indices of the two values\nc) Whether such a pair exists\nd) The count of pairs"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-quiz2",
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Show Answer"
                  }), (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: [(0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Answer: b) The indices of the two values"
                      })
                    }), (0,jsx_runtime.jsx)(_components.p, {
                      children: "The classic solution returns the indices (1-indexed or 0-indexed depending on the problem variant)."
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q3"
                  }), ": What is the space complexity of the prefix sum technique?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "a) O(1)\nb) O(n)\nc) O(log n)\nd) O(n²)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-quiz3",
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Show Answer"
                  }), (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: [(0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Answer: b) O(n)"
                      })
                    }), (0,jsx_runtime.jsx)(_components.p, {
                      children: "Prefix sum requires an extra array of size n+1 (or n for 1-based)."
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q4"
                  }), ": In the spiral matrix traversal, how are the boundaries adjusted?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "a) All four boundaries shrink after each direction\nb) Only top and left shrink\nc) Only bottom and right shrink\nd) Top shrinks after right traversal, right shrinks after down, etc."
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-quiz4",
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Show Answer"
                  }), (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: [(0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Answer: d) Top shrinks after right traversal, right shrinks after down, etc."
                      })
                    }), (0,jsx_runtime.jsx)(_components.p, {
                      children: "Each boundary is adjusted immediately after its direction traversal, keeping the boundary box intact for subsequent directions."
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Q5"
                  }), ": What is the minimum time complexity to rotate an array by k positions?"]
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: "a) O(1)\nb) O(k)\nc) O(n)\nd) O(n²)"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "dsa02-quiz5",
                  children: [(0,jsx_runtime.jsx)(_components.summary, {
                    children: "Show Answer"
                  }), (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: [(0,jsx_runtime.jsx)(_components.p, {
                      children: (0,jsx_runtime.jsx)(_components.strong, {
                        children: "Answer: c) O(n)"
                      })
                    }), (0,jsx_runtime.jsx)(_components.p, {
                      children: "All elements must move at least once, so O(n) is optimal. The triple reversal achieves this with O(1) extra space."
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "exercises",
                  children: "Exercises"
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Easy"
                  }), " — Write a function that removes all occurrences of a specific value from an array in-place and returns the new length."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Medium"
                  }), " — Implement the \"next permutation\" algorithm that rearranges numbers into the lexicographically next greater permutation."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Medium"
                  }), " — Given an array of n integers where every element appears twice except one, find the single element in O(n) time and O(1) space using XOR."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Hard"
                  }), " — Implement the \"skyline problem\" — given building coordinates (left, right, height), return the skyline formed by their outlines."]
                }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
                  children: [(0,jsx_runtime.jsx)(_components.strong, {
                    children: "Hard"
                  }), " — Given an array of integers, find the longest subarray with sum equal to 0 (not just contiguous). Use prefix sum and hash map."]
                }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "common-mistakes",
                  children: "Common Mistakes"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Not considering edge cases (empty array, single element)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Off-by-one errors in index calculations"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Forgetting that array insertion/deletion is O(n)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Not using two-pointer technique when applicable"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Ignoring cache locality benefits of arrays"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "revision-notes",
                  children: "Revision Notes"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Arrays: O(1) access, O(n) insert/delete"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Cache-friendly due to contiguous memory"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Two-pointer technique for sorted arrays"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Sliding window for subarray problems"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Prefix sums for range queries"
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
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Explain the core idea of Arrays in under 60 seconds, then give a real-world analogy."
                      }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Design a minimal, well-typed function that demonstrates Arrays."
                      }), " — Interviewer checks: signature with type hints, edge cases, complexity, and a clean docstring. Follow-up: how does your design behave with empty or malformed input?"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
                      children: "**What are the common pitfalls when engineers first learn ** — List 3-4, then explain how you would prevent each in a code review."
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                  id: "amazon-style",
                  children: "Amazon Style"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  start: "4",
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Describe a production bug caused by misunderstanding Arrays. How did you diagnose and fix it?"
                      }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "How would you scale a system that relies on Arrays from 10 users to 10 million?"
                      }), " — Discuss bottlenecks, caching, monitoring, and when to redesign. Follow-up: what metrics would you track?"]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                  id: "microsoft-style",
                  children: "Microsoft Style"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  start: "6",
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Compare Arrays with the closest alternative approach. When would you choose each?"
                      }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Walk through how you would test a component that depends on Arrays."
                      }), " — Unit, integration, property-based tests; mocking boundaries; golden files for outputs."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                  id: "nvidia-style",
                  children: "NVIDIA Style"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  start: "8",
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "How does Arrays behave differently at scale — memory, throughput, or precision-wise?"
                      }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "How would you make an implementation of Arrays run faster on GPU hardware?"
                      }), " — Batch operations, vectorization, avoiding Python loops, reducing data movement."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
                  id: "ai-startup-style",
                  children: "AI Startup Style"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  start: "10",
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Write the smallest possible implementation of Arrays that is production-quality."
                    }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "resume-tips",
                  children: "Resume Tips"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Name Arrays explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using Arrays\")."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Add a bullet describing a project that applies Arrays to real data, with numbers."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Mention the tools and libraries you used alongside Arrays (linters, test frameworks, profiling tools)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Keep resume bullets under 15 words and start each with an action verb."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
                  id: "interview-day-checklist",
                  children: "Interview Day Checklist"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Rehearse a 60-second explanation of Arrays and one real-world analogy."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Prepare one STAR story about debugging a Arrays-related production issue."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Review complexity and edge cases for the classic Arrays interview problem."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Have questions ready: how does the team apply Arrays in production today?"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Test your environment (Python, editor, internet) 15 minutes before the interview."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "truefalse",
                  children: "True/False"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "True or False:"
                    }), " Arrays builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "True."
                    }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "True or False:"
                    }), " You should write at least one code example for Arrays before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "True."
                    }), " Active recall with hands-on code beats passive reading for retention."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "True or False:"
                    }), " The complexity analysis for Arrays is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "False."
                    }), " Complexity grows with input size; always state best, average, and worst case."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "True or False:"
                    }), " Edge cases (empty input, invalid input, boundary values) matter for Arrays in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "True."
                    }), " Most production bugs come from unhandled edge cases."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "True or False:"
                    }), " You should memorize the Arrays chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
                      children: "False."
                    }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "fill-in-the-blank",
                  children: "Fill in the Blank"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The chapter that covers Arrays is Chapter ___ of this module. — Answer: check the module's table of contents."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The time complexity of the standard approach to Arrays is ___. — Answer: review the theory section and state big-O notation."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The main edge case to handle when implementing Arrays is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The tools commonly used to debug Arrays issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The related topic that connects to Arrays in the next chapter is ___. — Answer: see the Next Topic section."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "scenario-questions",
                  children: "Scenario Questions"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Scenario:"
                      }), " A teammate ships a change involving Arrays that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Scenario:"
                      }), " Your implementation of Arrays is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Scenario:"
                      }), " A new hire asks you to explain Arrays in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
                    }), "\n"]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
                      children: [(0,jsx_runtime.jsx)(_components.strong, {
                        children: "Scenario:"
                      }), " Your team's codebase has three different patterns for Arrays and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
                    }), "\n"]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "output-questions",
                  children: "Output Questions"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "What is the output of the simplest correct implementation of Arrays on an empty input?"
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
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "Level"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Time"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "What It Takes"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Beginner"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "1-2 sessions"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Read theory, run the chapter examples, solve the Easy exercises"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Intermediate"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "3-5 sessions"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Complete Medium exercises, explain Arrays to someone else"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Advanced"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "1+ week"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Solve Hard exercises, optimize for real datasets, answer interview follow-ups"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "tips--tricks",
                  children: "Tips & Tricks"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Always write a one-line example of Arrays from memory before opening the chapter — active recall first."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Use the chapter's Revision Notes as a checklist: you have mastered Arrays when you can explain each bullet."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "For interviews, practice explaining Arrays twice: once with a technical audience, once with a non-technical audience."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Keep a personal examples file where you collect your own Arrays snippets; interviewers love original examples."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "memory-tricks",
                  children: "Memory Tricks"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Acronym"
                    }), ": build a mnemonic from the 5 key concepts of Arrays listed in the Chapter at a Glance table."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Story"
                    }), ": link Arrays to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Number anchor"
                    }), ": remember the complexity of Arrays by connecting it to a known algorithm of the same class."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Color code"
                    }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Teach-back"
                    }), ": explain Arrays to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "further-reading",
                  children: "Further Reading"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Official documentation for the primary tool or library used in this chapter"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The chapter referenced in Related Topics for the next-level treatment of Arrays"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The classic textbook chapter on Arrays (check the Research References below)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Two blog posts from engineers who debugged real Arrays problems in production"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The repository of the open-source project that implements Arrays"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "related-topics",
                  children: "Related Topics"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The previous chapter in this module (see table of contents) — foundational for Arrays"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The next chapter (see Next Topic below) — builds on Arrays"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The system design chapters in Module 07 — how Arrays fits into production architectures"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The interview preparation module — how Arrays is asked in screening rounds"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The capstone project — where Arrays is applied end-to-end"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "faqs",
                  children: "FAQs"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Do I need to memorize all of Arrays, or understand the big picture?"
                    }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "What if I get stuck on an exercise?"
                    }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Is Arrays asked in interviews?"
                    }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "important-notes",
                  children: "Important Notes"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Arrays is a core requirement for the rest of this module — do not skip the examples."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Always analyze complexity (time and space) when working with Arrays."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Production correctness means handling edge cases, not just the happy path."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Interview answers should start with the definition, then the example, then the trade-offs."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Revisit this chapter after finishing the module; the context from later chapters deepens understanding."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "historical-context",
                  children: "Historical Context"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Arrays emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The tools used for Arrays today evolved from simpler versions; the chapter covers the modern, recommended approach."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Interviewers value knowing one historical fact about Arrays — it shows genuine interest, not just cramming."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The library/tooling ecosystem around Arrays changes quickly; focus on fundamentals that remain stable."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "security-considerations",
                  children: "Security Considerations"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Never trust external input: validate and sanitize data before processing Arrays."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Avoid ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "eval()"
                    }), " and dynamic code execution on untrusted strings."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Log errors without leaking sensitive data (keys, PII, internal paths)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "For API contexts, add rate limiting and input size limits."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Review the chapter's code examples for injection or overflow risks before using them verbatim."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "ml-intuition",
                  children: "ML Intuition"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Arrays appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Understanding Arrays helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "In production ML, the Arrays concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "When optimizing ML systems, Arrays skills let you profile and fix the data path, not just the training loop."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Interview follow-up: how would you apply Arrays to a dataset of 10 million records? — Batching and vectorization."
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "analogies",
                  children: "Analogies"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Arrays is like a recipe"
                    }), ": the theory is the ingredients, the examples are the cooking steps, and the exercises are your own kitchen practice."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Complexity is like a delivery route"
                    }), ": a linear route visits each stop once; a nested route revisits stops, and you feel it at scale."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Edge cases are like weather"
                    }), ": the happy path is a sunny day; production is the storm — build for the storm."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "The chapter roadmap is a journey map"
                    }), ": each section is a checkpoint; skipping one means getting lost later in the module."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "capstone-project-link",
                  children: "Capstone Project Link"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.a, {
                      href: "https://github.com/Raushan666java/ai-engineering-journey",
                      children: "Module Capstone: End-to-End Project"
                    }), " — this chapter contributes the Arrays skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "flashcards",
                  children: "Flashcards"
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "03datastructuresalgorithms-02arrays-flash1",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    What is the time complexity of accessing arr[42] in a Python list?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "a) O(1)"
                    }), "\n  "]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "03datastructuresalgorithms-02arrays-flash2",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    What does the two-pointer approach for \"two sum in sorted array\" return?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "b) The indices of the two values"
                    }), "\n  "]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "03datastructuresalgorithms-02arrays-flash3",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    What is the space complexity of the prefix sum technique?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "b) O(n)"
                    }), "\n  "]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "03datastructuresalgorithms-02arrays-flash4",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    In the spiral matrix traversal, how are the boundaries adjusted?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "d) Top shrinks after right traversal, right shrinks after down, etc."
                    }), "\n  "]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
                  className: "tp-qa-card",
                  "data-qid": "03datastructuresalgorithms-02arrays-flash5",
                  children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
                    className: "tp-qa-question",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
                      className: "tp-qa-status"
                    }), "\n    What is the minimum time complexity to rotate an array by k positions?\n  "]
                  }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
                    className: "tp-qa-answer",
                    children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
                      children: "c) O(n)"
                    }), "\n  "]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "research-references",
                  children: "Research References"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Official documentation of the primary library for Arrays (linked in Further Reading)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The classic paper or textbook chapter introducing Arrays (see References below)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The standard library reference for Arrays-related functions"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Engineering blog posts from companies running Arrays in production at scale"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "PEPs and RFCs where applicable (Python and networking standards)"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "open-source-tools",
                  children: "Open-Source Tools"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The primary library used in this chapter (see the code examples)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Python standard library modules used in the examples (check the imports)"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Testing: pytest for unit tests of Arrays code"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Linting and formatting: ruff + black"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Profiling: cProfile or py-spy for performance work on Arrays"
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "debugging-guide",
                  children: "Debugging Guide"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "print()"
                    }), " or a debugger to inspect intermediate values in Arrays code."]
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Reproduce the failure with the smallest possible input before changing code."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Check the common failure modes listed in Common Mistakes — most bugs are listed there."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "For performance problems, profile before optimizing: measure, then fix."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "When stuck, re-read the chapter's Examples and compare line by line with your code."
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
                      children: "pdb"
                    }), " or your IDE's debugger to step through the Arrays example code."]
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
                    children: "Explain Arrays in 60 seconds."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Write a minimal working example of Arrays."
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
                    children: "Tell me about a time you debugged a Arrays problem in a project."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "How would you design a system where Arrays is used at scale?"
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
                  children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for Arrays."
                }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
                  children: (0,jsx_runtime.jsx)(_components.code, {
                    children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core Arrays logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
                }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
                  children: [(0,jsx_runtime.jsx)(_components.thead, {
                    children: (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.th, {
                        children: "Skill"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Test"
                      }), (0,jsx_runtime.jsx)(_components.th, {
                        children: "Target"
                      })]
                    })
                  }), (0,jsx_runtime.jsxs)(_components.tbody, {
                    children: [(0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Concept recall"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Explain Arrays without notes"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "60-second explanation"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Code fluency"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Write the chapter example from memory"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "No syntax errors"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Edge cases"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Handle empty/invalid input in exercises"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "All cases pass"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Complexity"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "State time/space for the standard approach"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Correct big-O"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Interview readiness"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Answer 5 Interview Q&A questions out loud"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Fluent, structured answers"
                      })]
                    }), (0,jsx_runtime.jsxs)(_components.tr, {
                      children: [(0,jsx_runtime.jsx)(_components.td, {
                        children: "Retention"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "Chapter quiz score after 3 days"
                      }), (0,jsx_runtime.jsx)(_components.td, {
                        children: "80%+"
                      })]
                    })]
                  })]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "real-world-examples",
                  children: "Real-World Examples"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Startup"
                    }), ": a small team uses Arrays daily in their data pipeline — the chapter's examples mirror their code."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "E-commerce"
                    }), ": Arrays patterns appear in order processing, inventory checks, and recommendation feeds."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Fintech"
                    }), ": Arrays principles apply to transaction validation and fraud detection flows."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "ML platform"
                    }), ": Arrays shows up in feature engineering and model-serving infrastructure."]
                  }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                    children: [(0,jsx_runtime.jsx)(_components.strong, {
                      children: "Interview insight"
                    }), ": recruiters look for engineers who can connect Arrays to the business outcome, not just the code."]
                  }), "\n"]
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "next-topic",
                  children: "Next Topic"
                }), "\n", (0,jsx_runtime.jsx)(_components.p, {
                  children: (0,jsx_runtime.jsx)(_components.a, {
                    href: "/ai-engineering-journey/ai-engineering-placement/03-data-structures-algorithms/03-strings",
                    children: "Strings"
                  })
                }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
                  id: "limitations",
                  children: "Limitations"
                }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Arrays, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "Performance of Arrays depends on input size and distribution — always benchmark for your own data."
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
                  }), "\n"]
                }), "\n"]
              })]
            })]
          })]
        })]
      })]
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