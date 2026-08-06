"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92588],{

/***/ 29396
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_11_numpy_fundamentals_md_f32_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-11-numpy-fundamentals-md-f32.json
const site_docs_courses_ai_engineering_placement_01_python_programming_11_numpy_fundamentals_md_f32_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/11-numpy-fundamentals","title":"NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/11-numpy-fundamentals.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/11-numpy-fundamentals","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/11-numpy-fundamentals","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":18,"frontMatter":{"id":"11-numpy-fundamentals","slug":"/ai-engineering-placement/01-python-programming/11-numpy-fundamentals","title":"NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra","sidebar_label":"NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra","sidebar_position":18},"sidebar":"coursesSidebar","previous":{"title":"Concurrency — Threading, Multiprocessing, and Async","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/10-concurrency"},"next":{"title":"Pandas Basics — Series, DataFrame, Indexing, GroupBy, Merge","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/12-pandas-basics"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/11-numpy-fundamentals.md


const frontMatter = {
	id: '11-numpy-fundamentals',
	slug: '/ai-engineering-placement/01-python-programming/11-numpy-fundamentals',
	title: 'NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra',
	sidebar_label: 'NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra',
	sidebar_position: 18
};
const contentTitle = 'NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra';

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
  "value": "11.1 Array Creation",
  "id": "111-array-creation",
  "level": 2
}, {
  "value": "11.2 Indexing &amp; Slicing",
  "id": "112-indexing--slicing",
  "level": 2
}, {
  "value": "11.3 Universal Functions &amp; Vectorization",
  "id": "113-universal-functions--vectorization",
  "level": 2
}, {
  "value": "11.4 Broadcasting",
  "id": "114-broadcasting",
  "level": 2
}, {
  "value": "11.5 Linear Algebra",
  "id": "115-linear-algebra",
  "level": 2
}, {
  "value": "11.6 Random &amp; Statistics",
  "id": "116-random--statistics",
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
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "11.7 Array Manipulation &amp; Reshaping",
  "id": "117-array-manipulation--reshaping",
  "level": 2
}, {
  "value": "11.8 File I/O with NumPy",
  "id": "118-file-io-with-numpy",
  "level": 2
}, {
  "value": "11.9 Structured Arrays",
  "id": "119-structured-arrays",
  "level": 2
}, {
  "value": "11.10 Advanced Linear Algebra",
  "id": "1110-advanced-linear-algebra",
  "level": 2
}, {
  "value": "11.11 Common Pitfalls",
  "id": "1111-common-pitfalls",
  "level": 2
}, {
  "value": "11.12 Performance Optimization Tips",
  "id": "1112-performance-optimization-tips",
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
        id: "numpy-fundamentals--arrays-broadcasting-linear-algebra",
        children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
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
            children: "Create and manipulate NumPy arrays with various data types"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use array indexing, slicing, and boolean masking"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply vectorized operations and broadcasting rules"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Perform linear algebra operations: dot, matmul, eig, SVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use random number generation for simulations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Understand performance benefits over Python lists"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
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
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding numpy fundamentals is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how numpy fundamentals works in practice."
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
            children: "11.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Array Creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "np.array, np.zeros, np.ones, np.arange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Indexing & Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fancy indexing, boolean masks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Universal Functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ufuncs, vectorization, aggregations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rules, dimensions, strides"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Linear Algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dot, matmul, inv, eig, SVD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "11.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Random & Stats"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "np.random, seeding, distributions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[NumPy Arrays] --> B[Creation]\n    A --> C[Indexing/Masking]\n    A --> D[Vectorization]\n    D --> E[Broadcasting]\n    D --> F[Universal Functions]\n    G[Linear Algebra] --> H[dot, inv, eig, SVD]\n    I[Random] --> J[distributions, seeding]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-array-creation",
      children: "11.1 Array Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n## From list\narr = np.array([1, 2, 3, 4, 5])\nprint(arr)           # [1 2 3 4 5]\nprint(arr.shape)     # (5,)\nprint(arr.dtype)     # int64\n\n## 2D array\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nprint(matrix.shape)  # (2, 3)\n\n## Special arrays\nzeros = np.zeros((3, 4))\nones = np.ones((2, 3))\nfull = np.full((2, 2), 7)\neye = np.eye(4)                # identity matrix\nempty = np.empty((3, 3))       # uninitialized values\n\n## Ranges\narange = np.arange(0, 10, 2)   # [0, 2, 4, 6, 8]\nlinspace = np.linspace(0, 1, 5)  # [0.0, 0.25, 0.5, 0.75, 1.0]\n\n## Data types\narr_int = np.array([1, 2, 3], dtype=np.int32)\narr_float = np.array([1, 2, 3], dtype=np.float64)\narr_bool = np.array([True, False, True])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-indexing--slicing",
      children: "11.2 Indexing & Slicing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arr = np.arange(10)\nprint(arr[5])        # 5\nprint(arr[2:7])      # [2 3 4 5 6]\nprint(arr[::-1])     # [9 8 7 6 5 4 3 2 1 0]\n\nmatrix = np.arange(12).reshape(3, 4)\nprint(matrix)\n\n## [[ 0  1  2  3]\n\n##  [ 4  5  6  7]\n\n##  [ 8  9 10 11]]\n\nprint(matrix[1, 2])     # 6 (row 1, col 2)\nprint(matrix[0:2, 1:3])\n\n## [[1 2]\n\n##  [5 6]]\n\n## Fancy indexing\nindices = [0, 2, 4]\nprint(arr[indices])  # [0 2 4]\n\n## Boolean masking\nmask = arr > 5\nprint(mask)             # [False False ... True True]\nprint(arr[mask])        # [6 7 8 9]\nprint(arr[arr % 2 == 0])  # even numbers\n\n## Where\nprint(np.where(arr > 5, arr, -1))  # threshold\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-universal-functions--vectorization",
      children: "11.3 Universal Functions & Vectorization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## ufuncs operate element-wise (fast C loops)\narr = np.array([1, 2, 3, 4, 5])\n\nprint(np.sqrt(arr))     # [1.0 1.41 1.73 2.0 2.24]\nprint(np.exp(arr))      # [2.72 7.39 20.09 54.6 148.4]\nprint(np.log(arr))      # [0.0 0.69 1.10 1.39 1.61]\nprint(np.sin(arr))      # trigonometric\nprint(np.abs([-1, 0, 1]))  # [1 0 1]\n\n## Vectorization — no explicit loops\narr1 = np.array([1, 2, 3])\narr2 = np.array([10, 20, 30])\nprint(arr1 + arr2)   # [11 22 33]\nprint(arr1 * arr2)   # [10 40 90]\nprint(arr1 ** 2)     # [1 4 9]\n\n## Aggregation\nprint(arr.sum())     # 15\nprint(arr.mean())    # 3.0\nprint(arr.std())     # 1.414\nprint(arr.min())     # 1\nprint(arr.max())     # 5\nprint(arr.argmax())  # 4 (index of max)\nprint(arr.cumsum())  # [1 3 6 10 15]\n\n## Axis-specific aggregation\nm = np.array([[1, 2], [3, 4]])\nprint(m.sum(axis=0))  # [4 6] (sum columns)\nprint(m.sum(axis=1))  # [3 7] (sum rows)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-broadcasting",
      children: "11.4 Broadcasting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Broadcasting allows arithmetic between arrays of different shapes."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Scalar + array\narr = np.array([1, 2, 3])\nprint(arr + 10)        # [11 12 13]\n\n## Different dimensions\nmatrix = np.arange(12).reshape(3, 4)\nrow = np.array([10, 20, 30, 40])\nprint(matrix + row)    # broadcast row across all rows\n\n## Broadcasting rules:\n\n## 1. If dimensions differ, prepend 1s to smaller shape\n\n## 2. Arrays with size 1 in a dimension are stretched to match\n\n## 3. Sizes must match or be 1, else error\n\na = np.ones((3, 1))   # shape (3, 1)\nb = np.ones((1, 4))   # shape (1, 4)\nc = a + b             # shape (3, 4) — both broadcast\n\n## Normalization example\ndata = np.random.randn(100, 5)\nmean = data.mean(axis=0)     # shape (5,)\nstd = data.std(axis=0)       # shape (5,)\nnormalized = (data - mean) / std  # broadcasts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-linear-algebra",
      children: "11.5 Linear Algebra"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Dot product\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.dot(a, b))       # 32  (1*4 + 2*5 + 3*6)\nprint(a @ b)              # 32 (same, @ operator)\n\n## Matrix multiplication\nA = np.array([[1, 2], [3, 4]])\nB = np.array([[5, 6], [7, 8]])\nprint(A @ B)\n\n## [[19 22]\n\n##  [43 50]]\n\n## Matrix inverse\nA = np.array([[1, 2], [3, 4]])\nA_inv = np.linalg.inv(A)\nprint(A @ A_inv)  # ~identity\n\n## Solve linear equations: Ax = b\nA = np.array([[3, 1], [1, 2]])\nb = np.array([9, 8])\nx = np.linalg.solve(A, b)\nprint(x)  # [2. 3.]  (3*2 + 1*3 = 9, 2 + 2*3 = 8)\n\n## Eigenvalues and eigenvectors\neigvals, eigvecs = np.linalg.eig(A)\n\n## SVD decomposition\nU, S, Vt = np.linalg.svd(np.random.randn(5, 3))\n\n## Norms\nprint(np.linalg.norm([3, 4]))  # 5.0\nprint(np.linalg.norm([3, 4], ord=1))  # 7.0\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-random--statistics",
      children: "11.6 Random & Statistics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Random seed for reproducibility\nnp.random.seed(42)\n\n## Distributions\nuniform = np.random.rand(3, 4)           # uniform [0, 1)\nnormal = np.random.randn(1000)           # standard normal\nintegers = np.random.randint(0, 100, 10)  # random ints\nbeta = np.random.beta(2, 5, 100)         # Beta distribution\n\n## Shuffle and choice\narr = np.arange(10)\nnp.random.shuffle(arr)\nprint(arr)\n\nsample = np.random.choice(arr, size=3, replace=False)\n\n## Statistics\ndata = np.random.randn(10000)\nprint(f\"Mean: {data.mean():.3f}, Std: {data.std():.3f}\")\nprint(f\"Median: {np.median(data):.3f}\")\nprint(f\"Percentile 95: {np.percentile(data, 95):.3f}\")\nprint(f\"Min: {data.min():.3f}, Max: {data.max():.3f}\")\n\n## Correlation matrix\nX = np.random.randn(100, 5)\ncorr = np.corrcoef(X.T)\nprint(corr.shape)  # (5, 5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// TypeScript lacks built-in ndarray. Use libraries.\n// npm install numjs\nimport nj from \"numjs\";\n\nconst arr = nj.array([1, 2, 3, 4, 5]);\nconsole.log(arr.mean());        // 3\nconsole.log(arr.reshape(1, 5)); // 2D array\n\nconst A = nj.array([[1, 2], [3, 4]]);\nconst B = nj.array([[5, 6], [7, 8]]);\nconsole.log(A.dot(B));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy arrays are homogeneous, fixed-type, and memory-efficient"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Vectorized operations (no Python loops) give 10-100x speedup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Broadcasting aligns arrays of different shapes automatically"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Boolean masking provides concise filtering without loops"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ufuncs (sqrt, exp, log, sin) operate element-wise at C speed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linear algebra via np.linalg: dot, solve, inv, eig, svd"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Aggregation with axis parameter (0 = columns, 1 = rows)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Random module supports many distributions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always set seed (np.random.seed) for reproducibility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reshape, transpose, and stacking (vstack, hstack) for array manipulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "practical-takeaways",
      children: "Practical Takeaways"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Avoid"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Numeric computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "NumPy arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python lists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Element-wise"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Vectorized ops + ufuncs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "for loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Different shapes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting rules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual reshaping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Filter data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean masks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loops with if"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Linear equations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "np.linalg.solve"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual inversion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Normalize data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(data - mean) / std"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual loop"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reproducible random"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "np.random.seed(42)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No seed"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: What is broadcasting in NumPy?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Broadcasting allows arithmetic between arrays of different shapes by stretching dimensions of size 1. Rules: align from right, sizes must match or be 1. Example: (3,1) + (1,4) -> (3,4). Saves memory by not actually replicating data."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How are NumPy arrays different from Python lists?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "NumPy arrays: fixed type, contiguous memory, vectorized operations, broadcasting, less memory overhead, support for high-dimensional data. Lists: heterogeneous, dynamic, Python object overhead, slower for numeric operations."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: How does axis parameter work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "axis=0 operates along rows (vertically) — collapses rows. axis=1 operates along columns (horizontally). For 2D: sum(axis=0) sums each column; sum(axis=1) sums each row. Higher dimensions follow the same pattern."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: What is a universal function (ufunc)?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "ufuncs operate element-wise on ndarrays, implemented in C for speed. Examples: np.add, np.multiply, np.sqrt, np.exp, np.sin. They support broadcasting, accumulate, reduce, and outer operations. Much faster than Python for loops."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: How do you handle missing values in NumPy?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "NumPy uses np.nan (float) for missing values. Functions like np.nansum, np.nanmean, np.nanstd ignore NaN. Use np.isnan() to detect NaN. For integer arrays, use masked arrays (np.ma.MaskedArray) or nullable integer dtype (Int64)."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: How does view vs copy work in NumPy?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Slicing returns a view (shares data, no copy). Fancy indexing and boolean masking return a copy. Use .copy() to explicitly copy. Changes to a view affect the original array. Reshape usually returns a view (contiguous data permitting)."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: How to stack arrays?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "np.vstack((a, b)) — stack vertically (row-wise). np.hstack((a, b)) — horizontally. np.concatenate((a, b), axis=0/1). np.stack((a, b), axis=0) — new dimension. Respect shapes for successful stacking."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Difference between np.dot and @?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Both compute matrix multiplication. @ (Python 3.5+) calls __matmul__ and is preferred for readability. np.dot handles more cases (scalar, 1D dot product). For 2D arrays, both are equivalent. For higher dimensions, @ uses last 2 dimensions."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: How to compute pairwise distances efficiently?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Use broadcasting: (X[:, None, :] - X[None, :, :])**2 -> sum along last axis -> sqrt. Or use scipy.spatial.distance.pdist. For large datasets, use np.linalg.norm with broadcasting or specialized libraries."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: What is the memory layout of NumPy arrays?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "NumPy arrays are stored in contiguous C-order (row-major) by default. shape, strides, dtype describe the layout. Strides are bytes to step in each dimension. Fortran-order (column-major) available via order='F'. Transpose changes strides, not data."
        })
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-mark-btn",
        children: "? Mark Reviewed"
      }), (0,jsx_runtime.jsx)(_components.button, {
        className: "tp-qa-bookmark-btn",
        children: "?? Bookmark"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1"
      }), ": What is shape of np.array([[1,2],[3,4]])? a) (2,) b) (2,2) c) (4,) d) (1,4)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) (2, 2)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What does arr[arr > 3] return? a) boolean b) values c) indices d) shape"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) array of values where condition is True"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Shape of eye(3)? a) (3,) b) (3,3) c) (1,3) d) (3,1)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) (3,3) identity matrix"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What does sum(axis=0) do for 2D? a) sum rows b) sum columns c) sum all d) nothing"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) sum along rows (collapses rows, sums each column)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": What solves Ax = b? a) dot(A, b) b) solve(A, b) c) inv(b) @ A d) A @ b"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s11-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) np.linalg.solve(A, b)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Create a 5x5 identity matrix, then change the center 3x3 to random values.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Compute mean, std, min, max for np.random.randn(1000).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Implement min-max normalization: (x - min) / (max - min) using broadcasting.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Solve the linear system: 2x + y = 5, x - 3y = -8 using np.linalg.solve.\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Implement K-means clustering from scratch using NumPy (no sklearn).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Compute pairwise Euclidean distances for a 1000x50 matrix using broadcasting."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-array-manipulation--reshaping",
      children: "11.7 Array Manipulation & Reshaping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n## Reshape\narr = np.arange(12)\nreshaped = arr.reshape(3, 4)\nprint(reshaped.shape)  # (3, 4)\n\n## -1 for automatic dimension\nauto = arr.reshape(2, -1)  # (2, 6)\nprint(auto.shape)\n\n## Flatten and ravel\nflat = reshaped.flatten()  # returns copy\nravel = reshaped.ravel()    # returns view (if possible)\n\n## Transpose\nmatrix = np.array([[1, 2], [3, 4]])\nprint(matrix.T)  # [[1, 3], [2, 4]]\n\n## Stacking\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(np.vstack((a, b)))  # [[1,2,3],[4,5,6]]\nprint(np.hstack((a, b)))  # [1,2,3,4,5,6]\nprint(np.column_stack((a, b)))  # [[1,4],[2,5],[3,6]]\n\n## Splitting\narr = np.arange(12).reshape(3, 4)\nprint(np.split(arr, 3))          # split into 3 row groups\nprint(np.hsplit(arr, 2))         # split into 2 column groups\nprint(np.vsplit(arr, 3))         # split into 3 row groups\n\n## Adding/removing dimensions\nvector = np.array([1, 2, 3])\ncol_vector = vector[:, np.newaxis]  # (3, 1)\nrow_vector = vector[np.newaxis, :]  # (1, 3)\nsqueezed = np.squeeze(col_vector)   # back to (3,)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-file-io-with-numpy",
      children: "11.8 File I/O with NumPy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Binary format (.npy)\narr = np.random.randn(100, 50)\nnp.save(\"array.npy\", arr)\nloaded = np.load(\"array.npy\")\nprint(np.allclose(arr, loaded))  # True\n\n## Multiple arrays (.npz)\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nnp.savez(\"arrays.npz\", a=a, b=b)\ndata = np.load(\"arrays.npz\")\nprint(data[\"a\"])  # [1 2 3]\n\n## Compressed\nnp.savez_compressed(\"arrays_compressed.npz\", a=a, b=b)\n\n## Text format\narr = np.array([[1.5, 2.5], [3.5, 4.5]])\nnp.savetxt(\"data.csv\", arr, delimiter=\",\", header=\"x,y\", comments=\"\")\nloaded_csv = np.loadtxt(\"data.csv\", delimiter=\",\")\nprint(loaded_csv)\n\n## Genfromtxt for missing data\ndata = np.genfromtxt(\"messy.csv\", delimiter=\",\", dtype=float, filling_values=0.0)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-structured-arrays",
      children: "11.9 Structured Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Structured arrays with mixed types\ndtype = [(\"name\", \"U10\"), (\"age\", \"i4\"), (\"salary\", \"f8\")]\ndata = np.array([\n    (\"Alice\", 30, 75000.0),\n    (\"Bob\", 25, 68000.0),\n    (\"Charlie\", 35, 82000.0)\n], dtype=dtype)\n\n## Access fields\nprint(data[\"name\"])    # ['Alice' 'Bob' 'Charlie']\nprint(data[\"age\"])     # [30 25 35]\nprint(data[0])         # ('Alice', 30, 75000.)\n\n## Field filtering\nhigh_earners = data[data[\"salary\"] > 70000]\nprint(high_earners[\"name\"])  # ['Alice' 'Charlie']\n\n## Record arrays (attribute access)\ndata_rec = data.view(np.recarray)\nprint(data_rec.name)    # ['Alice' 'Bob' 'Charlie']\nprint(data_rec.age)     # [30 25 35]\n\n## Multi-field indexing\nprint(data[[\"name\", \"salary\"]])\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1110-advanced-linear-algebra",
      children: "11.10 Advanced Linear Algebra"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Matrix decompositions\nA = np.random.randn(5, 5)\n\n## LU decomposition\nimport scipy.linalg\nP, L, U = scipy.linalg.lu(A) if False else (None, None, None)\n\n## In pure numpy, use np.linalg\n\n## QR decomposition\nQ, R = np.linalg.qr(A)\nprint(f\"Q @ Q.T = I? {np.allclose(Q @ Q.T, np.eye(5))}\")\n\n## Cholesky decomposition (positive definite required)\nA_pos = A.T @ A + np.eye(5) * 0.1\nL = np.linalg.cholesky(A_pos)\nprint(f\"L @ L.T = A? {np.allclose(L @ L.T, A_pos)}\")\n\n## Determinant and trace\nprint(f\"det(A) = {np.linalg.det(A):.4f}\")\nprint(f\"trace(A) = {np.trace(A):.4f}\")\n\n## Matrix rank\nprint(f\"rank(A) = {np.linalg.matrix_rank(A)}\")\n\n## Condition number\nprint(f\"cond(A) = {np.linalg.cond(A):.4f}\")\n\n## Outer product\nx = np.array([1, 2, 3])\ny = np.array([4, 5, 6])\nouter = np.outer(x, y)\nprint(outer)\n\n## [[ 4  5  6]\n\n##  [ 8 10 12]\n\n##  [12 15 18]]\n\n## Einsum for complex operations\na = np.random.randn(3, 4)\nb = np.random.randn(4, 5)\nresult = np.einsum(\"ij,jk->ik\", a, b)  # equivalent to a @ b\nprint(np.allclose(result, a @ b))  # True\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1111-common-pitfalls",
      children: "11.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\n## Pitfall 1: View vs Copy confusion\narr = np.array([1, 2, 3, 4, 5])\nslice_view = arr[0:3]    # view - modifications reflect in original\nslice_copy = arr[[0, 1, 2]]  # fancy indexing - copy\nslice_view[0] = 99\nprint(arr[0])  # 99 (view modified original)\nslice_copy[0] = 100\nprint(arr[0])  # 99 (copy did NOT modify original)\n\n## Pitfall 2: In-place vs out-of-place operations\narr = np.array([1, 2, 3])\narr2 = arr.sort()   # sort() is in-place, returns None\nprint(arr2)  # None!\n\n## Use np.sort(arr) for out-of-place\n\n## Pitfall 3: Broadcasting errors\na = np.ones((3, 2))\nb = np.ones((2, 3))\n\n## a + b  # ValueError: shapes (3,2) and (2,3) not aligned\n\n## Pitfall 4: Integer overflow\narr = np.array([100], dtype=np.int8)\n\n## arr[0] += 100  # overflow! int8 max is 127\n\n## Use dtype=np.int64 or np.float64\n\n## Pitfall 5: Comparing floats\na = np.array([0.1 + 0.2])\nprint(a == 0.3)  # [False] due to floating point\nprint(np.allclose(a, 0.3))  # True - use allclose\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1112-performance-optimization-tips",
      children: "11.12 Performance Optimization Tips"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import timeit\n\n## 1. Pre-allocate arrays instead of appending\ndef bad_approach():\n    result = np.array([])\n    for i in range(1000):\n        result = np.append(result, i)  # O(n^2)!\n    return result\n\ndef good_approach():\n    result = np.zeros(1000)\n    for i in range(1000):\n        result[i] = i\n    return result\n\n## 2. Use in-place operations\narr = np.random.randn(1000)\narr += 1  # in-place, no copy\n\n## vs arr = arr + 1  # creates new array\n\n## 3. Use vectorized operations over loops\ndef loop_sum(x, y):\n    result = np.zeros_like(x)\n    for i in range(len(x)):\n        result[i] = x[i] + y[i]\n    return result\n\ndef vectorized_sum(x, y):\n    return x + y  # 10-100x faster\n\n## 4. Specify dtype for memory efficiency\narr_int8 = np.zeros(1000000, dtype=np.int8)   # 1 MB\narr_int64 = np.zeros(1000000, dtype=np.int64)  # 8 MB\n\n## 5. Use NumPy's own functions over Python's\narr = np.random.randn(1000)\n\n## Slow: sum(arr)  # Python's built-in\n\n## Fast: arr.sum()  # NumPy's method\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not understanding the fundamental concepts before applying them"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Skipping edge cases in implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not analyzing time/space complexity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forgetting to handle null/empty inputs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Not practicing enough problems to build pattern recognition"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Explain the core idea of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function that demonstrates NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
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
            children: "Describe a production bug caused by misunderstanding NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system that relies on NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra from 10 users to 10 million?"
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
            children: "Compare NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component that depends on NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
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
            children: "How does NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in production today?"
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
        }), " NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is ___. — Answer: review the theory section and state big-O notation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is ___. — Answer: empty or invalid input handling, as discussed in the chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra on an empty input?"
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
            children: "Complete Medium exercises, explain NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to someone else"
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
        children: "Always write a one-line example of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation for the primary tool or library used in this chapter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter referenced in Related Topics for the next-level treatment of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic textbook chapter on NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra (check the Research References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Two blog posts from engineers who debugged real NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra problems in production"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The repository of the open-source project that implements NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The previous chapter in this module (see table of contents) — foundational for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The next chapter (see Next Topic below) — builds on NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The system design chapters in Module 07 — how NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra fits into production architectures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The interview preparation module — how NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is asked in screening rounds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The capstone project — where NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is applied end-to-end"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra, or understand the big picture?"
        }), " — Understand the big picture first, then memorize the key facts via flashcards and spaced repetition. Interviewers reward depth over breadth."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory section, run the example code, then attempt again. If still stuck after 20 minutes, move on and return the next day."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**How much time should I spend on ** — Follow the Study Plan below: 1-2 weeks at 30-60 minutes daily is typical for placement preparation."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra asked in interviews?"
        }), " — Yes — the Interview Q&A and Placement Section list the exact question styles used by top companies."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "**What's the fastest way to master ** — Explain it out loud, write code without looking, and review the flashcards within 24 hours and again after 3 days."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
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
        children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never trust external input: validate and sanitize data before processing NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
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
        children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra appears in ML pipelines at the data-processing layer: feature preparation, batching, and validation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra helps you debug why a model misbehaves — most ML bugs are data bugs, not model bugs."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "In production ML, the NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra concepts from this chapter map directly to NumPy/PyTorch operations on tensors."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "When optimizing ML systems, NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra skills let you profile and fix the data path, not just the training loop."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interview follow-up: how would you apply NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to a dataset of 10 million records? — Batching and vectorization."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is like a recipe"
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
        }), " — this chapter contributes the NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-11numpyfundamentals-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Review the first paragraph of the Theory section and condense it to one sentence."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-11numpyfundamentals-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Common Mistakes section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-11numpyfundamentals-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Refer to the theory and complexity analysis in this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-11numpyfundamentals-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Limitations section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-11numpyfundamentals-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Check the Real-World Examples section of this chapter."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in production at scale"
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
        children: "Testing: pytest for unit tests of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra code"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Linting and formatting: ruff + black"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling: cProfile or py-spy for performance work on NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Start with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "print()"
        }), " or a debugger to inspect intermediate values in NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra code."]
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
        }), " or your IDE's debugger to step through the NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra example code."]
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
        children: "Explain NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
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
        children: "Tell me about a time you debugged a NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra is used at scale?"
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
      children: "def demonstrate_topic(input_data: list[Any]) -> Optional[float]:\n\"\"\"Runnable scaffold for NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Replace the body with the optimized implementation from the chapter,\nkeeping type hints, docstring, and edge-case handling.\n\"\"\"\nif not input_data:\n    return None\n# Step 1: validate input types\n# Step 2: apply the core NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra logic from the Examples section\n# Step 3: return the result with the documented default\nreturn 0.0\n"
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
            children: "Explain NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra without notes"
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
        }), ": a small team uses NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra daily in their data pipeline — the chapter's examples mirror their code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "E-commerce"
        }), ": NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra patterns appear in order processing, inventory checks, and recommendation feeds."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Fintech"
        }), ": NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra principles apply to transaction validation and fraud detection flows."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ML platform"
        }), ": NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra shows up in feature engineering and model-serving infrastructure."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": recruiters look for engineers who can connect NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra to the business outcome, not just the code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/12-pandas-basics",
        children: "Pandas Basics — Series, DataFrame, Indexing, GroupBy, Merge"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of NumPy Fundamentals — Arrays, Broadcasting, Linear Algebra depends on input size and distribution — always benchmark for your own data."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "This chapter covers fundamentals; specialized edge cases are explored in later chapters and the capstone."
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