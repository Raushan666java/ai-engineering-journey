"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[82856],{

/***/ 69777
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_20_numpy_pandas_md_c38_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-20-numpy-pandas-md-c38.json
const site_docs_courses_python_programming_20_numpy_pandas_md_c38_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/20-numpy-pandas","title":"Chapter 20: NumPy and pandas","description":"Previous Concurrency, Multiprocessing & Parallelism","source":"@site/docs/courses/python-programming/20-numpy-pandas.md","sourceDirName":"courses/python-programming","slug":"/python-programming/20-numpy-pandas","permalink":"/ai-engineering-journey/python-programming/20-numpy-pandas","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"id":"20-numpy-pandas","slug":"/python-programming/20-numpy-pandas","title":"Chapter 20: NumPy and pandas","sidebar_label":"Chapter 20: NumPy and pandas","sidebar_position":20},"sidebar":"course-python-programming","previous":{"title":"Chapter 19: APIs and Testing","permalink":"/ai-engineering-journey/python-programming/19-apis-testing"},"next":{"title":"Chapter 21: Concurrency, Multiprocessing & Parallelism","permalink":"/ai-engineering-journey/python-programming/21-concurrency-multiprocessing"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/20-numpy-pandas.md


const frontMatter = {
	id: '20-numpy-pandas',
	slug: '/python-programming/20-numpy-pandas',
	title: 'Chapter 20: NumPy and pandas',
	sidebar_label: 'Chapter 20: NumPy and pandas',
	sidebar_position: 20
};
const contentTitle = 'Chapter 20: NumPy and pandas';

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
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "20.1 NumPy Arrays",
  "id": "201-numpy-arrays",
  "level": 2
}, {
  "value": "20.1.1 Creating Arrays",
  "id": "2011-creating-arrays",
  "level": 3
}, {
  "value": "20.1.2 Array Attributes",
  "id": "2012-array-attributes",
  "level": 3
}, {
  "value": "20.2 Indexing and Slicing",
  "id": "202-indexing-and-slicing",
  "level": 2
}, {
  "value": "20.3 Vectorised Operations",
  "id": "203-vectorised-operations",
  "level": 2
}, {
  "value": "20.4 Broadcasting",
  "id": "204-broadcasting",
  "level": 2
}, {
  "value": "20.5 Reshaping and Transposing",
  "id": "205-reshaping-and-transposing",
  "level": 2
}, {
  "value": "20.6 Linear Algebra",
  "id": "206-linear-algebra",
  "level": 2
}, {
  "value": "20.7 pandas Series",
  "id": "207-pandas-series",
  "level": 2
}, {
  "value": "20.8 pandas DataFrames",
  "id": "208-pandas-dataframes",
  "level": 2
}, {
  "value": "20.8.1 DataFrame Inspection",
  "id": "2081-dataframe-inspection",
  "level": 3
}, {
  "value": "20.8.2 Selecting Data",
  "id": "2082-selecting-data",
  "level": 3
}, {
  "value": "20.8.3 Adding and Removing Columns",
  "id": "2083-adding-and-removing-columns",
  "level": 3
}, {
  "value": "20.9 Data Cleaning",
  "id": "209-data-cleaning",
  "level": 2
}, {
  "value": "20.10 GroupBy and Aggregation",
  "id": "2010-groupby-and-aggregation",
  "level": 2
}, {
  "value": "20.11 Merging and Joining",
  "id": "2011-merging-and-joining",
  "level": 2
}, {
  "value": "20.12 Time Series",
  "id": "2012-time-series",
  "level": 2
}, {
  "value": "20.13 Basic Visualisation",
  "id": "2013-basic-visualisation",
  "level": 2
}, {
  "value": "20.13.1 matplotlib",
  "id": "20131-matplotlib",
  "level": 3
}, {
  "value": "20.13.2 seaborn",
  "id": "20132-seaborn",
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
  "value": "More TypeScript Data Processing Patterns",
  "id": "more-typescript-data-processing-patterns",
  "level": 3
}, {
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Data Processing Patterns",
  "id": "typescript-data-processing-patterns",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    section: "section",
    span: "span",
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
        id: "chapter-20-numpy-and-pandas",
        children: "Chapter 20: NumPy and pandas"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/19-apis-testing",
          children: "APIs and Testing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/21-concurrency-multiprocessing",
          children: "Concurrency, Multiprocessing & Parallelism"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manipulate NumPy arrays"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Perform vectorised computations and broadcasting"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply linear algebra operations with NumPy"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and manipulate pandas Series and DataFrames"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and write data from CSV, Excel, and other formats"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Filter, group, aggregate, and merge datasets"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create basic visualisations with matplotlib and seaborn"
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
        href: "../../assets/images/lessons/python-programming/20-numpy-pandas/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/20-numpy-pandas/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/20-numpy-pandas/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/20-numpy-pandas/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/20-numpy-pandas/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/20-numpy-pandas/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/20-numpy-pandas.png",
        alt: "Data Science Stack"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "20.1 NumPy Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "NumPy arrays enable vectorised computation — operations apply to all elements without explicit loops."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.2 Indexing and Slicing"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcasting performs operations on arrays of different shapes by stretching size-1 dimensions."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.3 Vectorised Operations"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Boolean indexing and fancy indexing select rows/columns based on conditions or index arrays."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.4 Broadcasting"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["pandas Series and DataFrame provide labelled, columnar data with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groupby"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "merge"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "pivot"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.5 Reshaping and Transposing"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Data cleaning with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "fillna"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "dropna"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "apply"
            }), " is essential before analysis or modelling."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.6 Linear Algebra"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.7 pandas Series"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.8 pandas DataFrames"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.9 Data Cleaning"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.10 GroupBy and Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.11 Merging and Joining"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.12 Time Series"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "20.13 Basic Visualisation"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    S0[NumPy Arrays]\n    S1[Indexing and Slicing]\n    S2[Vectorised Operations]\n    S3[Broadcasting]\n    S4[Reshaping and Transposing]\n    S5[Linear Algebra]\n    S6[pandas Series]\n    S7[pandas DataFrames]\n    S8[Data Cleaning]\n    S9[GroupBy and Aggregation]\n    S10[Merging and Joining]\n    S11[Time Series]\n    S12[Basic Visualisation]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n    S7 --> S8\n    S8 --> S9\n    S9 --> S10\n    S10 --> S11\n    S11 --> S12\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "201-numpy-arrays",
      children: "20.1 NumPy Arrays"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " NumPy arrays enable vectorised computation — operations apply to all elements without explicit loops."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2011-creating-arrays",
      children: "20.1.1 Creating Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n# From lists\narr = np.array([1, 2, 3, 4, 5])\nprint(arr)          # [1 2 3 4 5]\nprint(arr.shape)    # (5,)\nprint(arr.dtype)    # int64\n\n# Multi-dimensional\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nprint(matrix.shape)  # (2, 3)\nprint(matrix.ndim)   # 2\n\n# Special arrays\nzeros = np.zeros((3, 4))\nones = np.ones((2, 3))\nfull = np.full((2, 2), 7)\neye = np.eye(3)            # identity matrix\nempty = np.empty((2, 2))   # uninitialized (fast)\n\n# Sequences\nlinear = np.linspace(0, 1, 5)   # [0.   0.25 0.5  0.75 1.  ]\narange = np.arange(0, 10, 2)    # [0 2 4 6 8]\n\n# Random\nrand = np.random.random((3, 3))         # uniform [0, 1)\nnormal = np.random.normal(0, 1, (3, 3)) # standard normal\nrandint = np.random.randint(0, 100, 10) # random integers\nseed = np.random.seed(42)               # reproducibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2012-array-attributes",
      children: "20.1.2 Array Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arr = np.array([[1, 2, 3], [4, 5, 6]])\nprint(arr.shape)      # (2, 3)\nprint(arr.size)       # 6 (total elements)\nprint(arr.ndim)       # 2 (dimensions)\nprint(arr.dtype)      # int64\nprint(arr.itemsize)   # 8 (bytes per element)\nprint(arr.nbytes)     # 48 (total bytes)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "202-indexing-and-slicing",
      children: "20.2 Indexing and Slicing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Broadcasting performs operations on arrays of different shapes by stretching size-1 dimensions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arr = np.array([10, 20, 30, 40, 50])\n\n# Basic indexing\nprint(arr[0])     # 10\nprint(arr[-1])    # 50\n\n# Slicing (returns view, not copy)\nprint(arr[1:4])   # [20 30 40]\nprint(arr[:3])    # [10 20 30]\nprint(arr[::2])   # [10 30 50]\n\n# 2D indexing\nmatrix = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])\nprint(matrix[0, 1])      # 2\nprint(matrix[1, :])      # row 1: [4 5 6]\nprint(matrix[:, -1])     # last column: [3 6 9]\nprint(matrix[0:2, 1:3])  # submatrix: [[2 3] [5 6]]\n\n# Boolean indexing\narr = np.array([1, 2, 3, 4, 5, 6])\nmask = arr > 3\nprint(mask)           # [False False False  True  True  True]\nprint(arr[mask])      # [4 5 6]\nprint(arr[arr % 2 == 0])  # [2 4 6]\n\n# Fancy indexing (integer arrays)\narr = np.array([10, 20, 30, 40, 50])\nindices = np.array([0, 2, 4])\nprint(arr[indices])   # [10 30 50]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "203-vectorised-operations",
      children: "20.3 Vectorised Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Boolean indexing and fancy indexing select rows/columns based on conditions or index arrays.\n", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Vectorised NumPy operations are 10-100x faster than Python for-loops — avoid iterating when possible."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Vectorised operations apply to every element without explicit loops:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arr = np.array([1, 2, 3, 4, 5])\n\n# Arithmetic\nprint(arr + 10)    # [11 12 13 14 15]\nprint(arr * 2)     # [ 2  4  6  8 10]\nprint(arr ** 2)    # [ 1  4  9 16 25]\n\n# Universal functions (ufuncs)\nprint(np.sqrt(arr))    # [1.    1.414 1.732 2.    2.236]\nprint(np.exp(arr))     # [  2.718   7.389  20.086  54.598 148.413]\nprint(np.log(arr))     # [0.    0.693 1.099 1.386 1.609]\nprint(np.sin(arr))     # [ 0.841  0.909  0.141 -0.757 -0.959]\n\n# Aggregation\nprint(np.sum(arr))      # 15\nprint(np.mean(arr))     # 3.0\nprint(np.std(arr))      # 1.414...\nprint(np.min(arr))      # 1\nprint(np.max(arr))      # 5\nprint(np.argmax(arr))   # 4 (index of max)\nprint(np.cumsum(arr))   # [ 1  3  6 10 15]\n\n# Along axes\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nprint(np.sum(matrix, axis=0))  # [5 7 9]   column sums\nprint(np.sum(matrix, axis=1))  # [6 15]    row sums\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "204-broadcasting",
      children: "20.4 Broadcasting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " pandas Series and DataFrame provide labelled, columnar data with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupby"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merge"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pivot"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Broadcasting performs operations on arrays of different shapes:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Scalar broadcasting\narr = np.array([1, 2, 3])\nprint(arr * 10)  # [10 20 30] → scalar stretched to match shape\n\n# Vector broadcasting\nmatrix = np.array([[1, 2, 3], [4, 5, 6]])\nrow = np.array([10, 20, 30])\nprint(matrix + row)\n# [[11 22 33]\n#  [24 35 36]]\n\n# Column broadcasting\ncol = np.array([[10], [20]])\nprint(matrix + col)\n# [[11 12 13]\n#  [24 25 26]]\n\n# Broadcasting rules:\n# 1. If shapes differ, prepend 1s to the shorter shape\n# 2. Arrays are compatible if dimensions are equal or one is 1\n# 3. Size-1 dimensions are stretched to match\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "205-reshaping-and-transposing",
      children: "20.5 Reshaping and Transposing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Data cleaning with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillna"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "dropna"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply"
        }), " is essential before analysis or modelling."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "arr = np.arange(12)\n\n# Reshape\nmatrix = arr.reshape(3, 4)\nprint(matrix.shape)  # (3, 4)\nprint(matrix)\n# [[ 0  1  2  3]\n#  [ 4  5  6  7]\n#  [ 8  9 10 11]]\n\n# Flatten\nflat = matrix.flatten()  # returns copy\nflat2 = matrix.ravel()   # returns view (if possible)\n\n# Transpose\nprint(matrix.T)\n# [[ 0  4  8]\n#  [ 1  5  9]\n#  [ 2  6 10]\n#  [ 3  7 11]]\n\n# Resize (modifies in-place)\narr = np.array([1, 2, 3, 4, 5, 6])\narr.resize(2, 3)\n\n# New axis\narr = np.array([1, 2, 3])\ncol = arr[:, np.newaxis]  # (3, 1)\nrow = arr[np.newaxis, :]  # (1, 3)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "206-linear-algebra",
      children: "20.6 Linear Algebra"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\na = np.array([[1, 2], [3, 4]])\nb = np.array([[5, 6], [7, 8]])\n\n# Matrix multiplication (use @ or dot)\nprint(a @ b)\n# [[19 22]\n#  [43 50]]\nprint(np.dot(a, b))  # same\n\n# Element-wise multiplication\nprint(a * b)\n# [[ 5 12]\n#  [21 32]]\n\n# Determinant\nprint(np.linalg.det(a))  # -2.0\n\n# Inverse\nprint(np.linalg.inv(a))\n# [[-2.   1. ]\n#  [ 1.5 -0.5]]\n\n# Eigenvalues and eigenvectors\neigvals, eigvecs = np.linalg.eig(a)\n\n# Solving linear systems Ax = b\nA = np.array([[3, 1], [1, 2]])\nb = np.array([9, 8])\nx = np.linalg.solve(A, b)\nprint(x)  # [2. 3.] → solution to 3x + y = 9, x + 2y = 8\n\n# Norms\nvector = np.array([3, 4])\nprint(np.linalg.norm(vector))          # 5.0 (L2 norm)\nprint(np.linalg.norm(vector, ord=1))   # 7.0 (L1 norm)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "207-pandas-series",
      children: "20.7 pandas Series"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\n\n# Creating a Series\ns = pd.Series([10, 20, 30, 40, 50])\nprint(s)\n\n# With custom index\ns = pd.Series([10, 20, 30], index=[\"a\", \"b\", \"c\"])\nprint(s[\"b\"])       # 20\nprint(s[[\"a\", \"c\"]])  # a    10, c    30\n\n# From dictionary\ndata = {\"Alice\": 85, \"Bob\": 92, \"Charlie\": 78}\ns = pd.Series(data)\nprint(s)\n\n# Series attributes\nprint(s.values)  # numpy array\nprint(s.index)\nprint(s.dtype)   # int64\nprint(s.shape)   # (3,)\n\n# Vectorised operations\nprint(s + 5)\nprint(s.mean())   # 85.0\nprint(s.std())    # 7.0\nprint(s.min())    # 78\nprint(s.max())    # 92\n\n# Filtering\nprint(s[s > 80])  # Alice 85, Bob 92\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "208-pandas-dataframes",
      children: "20.8 pandas DataFrames"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\n\n# Creating from dictionary\ndata = {\n    \"Name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"Age\": [25, 30, 35, 28],\n    \"Salary\": [60000, 75000, 90000, 65000],\n    \"Department\": [\"Engineering\", \"Sales\", \"Engineering\", \"HR\"],\n}\ndf = pd.DataFrame(data)\nprint(df)\n\n# From list of dictionaries\nrecords = [\n    {\"Name\": \"Alice\", \"Age\": 25},\n    {\"Name\": \"Bob\", \"Age\": 30},\n]\ndf2 = pd.DataFrame(records)\n\n# Reading from CSV\ndf = pd.read_csv(\"employees.csv\")\n\n# Writing to CSV\ndf.to_csv(\"output.csv\", index=False)\n\n# Reading common formats\ndf_excel = pd.read_excel(\"data.xlsx\", sheet_name=\"Sheet1\")\ndf_json = pd.read_json(\"data.json\")\ndf_html = pd.read_html(\"page.html\")  # returns list of DataFrames\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2081-dataframe-inspection",
      children: "20.8.1 DataFrame Inspection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "print(df.head(3))       # first 3 rows\nprint(df.tail(2))       # last 2 rows\nprint(df.info())        # column types, non-null count\nprint(df.describe())    # summary statistics (numeric columns only)\nprint(df.shape)         # (4, 4)\nprint(df.columns)       # Index(['Name', 'Age', 'Salary', 'Department'], dtype='object')\nprint(df.dtypes)        # column data types\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2082-selecting-data",
      children: "20.8.2 Selecting Data"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Column selection\nprint(df[\"Name\"])        # Series\nprint(df[[\"Name\", \"Age\"]])  # DataFrame\n\n# Row selection by label (.loc)\nprint(df.loc[1])         # row with index label 1\nprint(df.loc[0:2])       # rows 0 through 2 (inclusive)\n\n# Row selection by position (.iloc)\nprint(df.iloc[0])        # first row\nprint(df.iloc[0:2])      # rows 0, 1\nprint(df.iloc[:, 0:2])   # first 2 columns\n\n# Conditional filtering\nengineers = df[df[\"Department\"] == \"Engineering\"]\nhigh_earners = df[df[\"Salary\"] > 70000]\ncombined = df[(df[\"Age\"] > 25) & (df[\"Salary\"] < 80000)]\n\n# Query method\nresult = df.query(\"Age > 25 and Department == 'Engineering'\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2083-adding-and-removing-columns",
      children: "20.8.3 Adding and Removing Columns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# New column\ndf[\"Bonus\"] = df[\"Salary\"] * 0.1\ndf[\"Total\"] = df[\"Salary\"] + df[\"Bonus\"]\n\n# Column based on condition\ndf[\"Level\"] = df[\"Salary\"].apply(lambda x: \"Senior\" if x > 70000 else \"Junior\")\n\n# Renaming\ndf = df.rename(columns={\"Name\": \"Employee Name\", \"Salary\": \"Base Salary\"})\n\n# Dropping\ndf = df.drop(columns=[\"Bonus\", \"Total\"])\ndf = df.drop(index=[2])  # drop row with index 2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "209-data-cleaning",
      children: "20.9 Data Cleaning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n# Detecting missing values\ndf = pd.DataFrame({\n    \"A\": [1, 2, np.nan, 4],\n    \"B\": [5, np.nan, np.nan, 8],\n    \"C\": [9, 10, 11, 12],\n})\nprint(df.isnull())\nprint(df.isnull().sum())\n\n# Dropping missing values\ndf_clean = df.dropna()              # drop any row with NaN\ndf_clean = df.dropna(axis=1)        # drop any column with NaN\ndf_clean = df.dropna(thresh=2)      # keep rows with at least 2 non-NaN values\n\n# Filling missing values\ndf_filled = df.fillna(0)\ndf_filled = df.fillna(df.mean())    # fill with column mean\ndf_filled = df.fillna(method=\"ffill\")  # forward fill\ndf_filled = df.fillna(method=\"bfill\")  # backward fill\n\n# Duplicates\ndf = pd.DataFrame({\"A\": [1, 2, 2, 3, 3, 3]})\nprint(df.duplicated())     # boolean mask\ndf_unique = df.drop_duplicates()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2010-groupby-and-aggregation",
      children: "20.10 GroupBy and Aggregation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "df = pd.DataFrame({\n    \"Department\": [\"Engineering\", \"Sales\", \"Engineering\", \"HR\", \"Sales\"],\n    \"Employee\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\", \"Eve\"],\n    \"Salary\": [90000, 75000, 95000, 65000, 80000],\n    \"Experience\": [5, 3, 7, 2, 4],\n})\n\n# Group by single column\ndept_group = df.groupby(\"Department\")\nprint(dept_group[\"Salary\"].mean())\n# Department\n# Engineering    92500\n# HR             65000\n# Sales          77500\n\n# Multiple aggregations\nprint(dept_group[\"Salary\"].agg([\"mean\", \"std\", \"min\", \"max\", \"count\"]))\n\n# Multiple columns\nprint(dept_group[[\"Salary\", \"Experience\"]].mean())\n\n# Named aggregations (pandas 0.25+)\nprint(df.groupby(\"Department\").agg(\n    avg_salary=(\"Salary\", \"mean\"),\n    max_salary=(\"Salary\", \"max\"),\n    avg_exp=(\"Experience\", \"mean\"),\n    count=(\"Employee\", \"count\"),\n))\n\n# Applying custom functions\nprint(dept_group[\"Salary\"].apply(lambda x: x.max() - x.min()))\n\n# Grouping by multiple columns\ndf[\"Year\"] = [2023, 2023, 2024, 2023, 2024]\nprint(df.groupby([\"Department\", \"Year\"])[\"Salary\"].mean())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2011-merging-and-joining",
      children: "20.11 Merging and Joining"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "employees = pd.DataFrame({\n    \"emp_id\": [1, 2, 3, 4],\n    \"name\": [\"Alice\", \"Bob\", \"Charlie\", \"Diana\"],\n    \"dept_id\": [101, 102, 101, 103],\n})\n\ndepartments = pd.DataFrame({\n    \"dept_id\": [101, 102, 103],\n    \"dept_name\": [\"Engineering\", \"Sales\", \"HR\"],\n})\n\n# Inner join\nmerged = pd.merge(employees, departments, on=\"dept_id\")\nprint(merged)\n#    emp_id     name  dept_id    dept_name\n# 0       1    Alice      101  Engineering\n# 1       3  Charlie      101  Engineering\n# 2       2      Bob      102        Sales\n# 3       4    Diana      103           HR\n\n# Other join types\nleft_join = pd.merge(employees, departments, on=\"dept_id\", how=\"left\")\nright_join = pd.merge(employees, departments, on=\"dept_id\", how=\"right\")\nouter_join = pd.merge(employees, departments, on=\"dept_id\", how=\"outer\")\n\n# Joining on index\ndf1 = pd.DataFrame({\"A\": [1, 2]}, index=[\"a\", \"b\"])\ndf2 = pd.DataFrame({\"B\": [3, 4]}, index=[\"a\", \"c\"])\nprint(df1.join(df2, how=\"inner\"))\n\n# Concatenation\ndf_a = pd.DataFrame({\"A\": [1, 2]})  # index [0, 1]\ndf_b = pd.DataFrame({\"A\": [3, 4]})  # index [0, 1]\nconcat_rows = pd.concat([df_a, df_b], axis=0)     # vertical stack\nconcat_cols = pd.concat([df_a, df_b], axis=1)     # horizontal stack\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2012-time-series",
      children: "20.12 Time Series"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Creating date ranges\ndates = pd.date_range(\"2025-01-01\", periods=5, freq=\"D\")\nprint(dates)\n\n# Using dates as index\nts = pd.Series([100, 110, 105, 120, 115], index=dates)\nprint(ts)\n\n# Resampling\nts_daily = pd.Series(\n    [1, 2, 3, 4, 5, 6, 7],\n    index=pd.date_range(\"2025-01-01\", periods=7, freq=\"D\"),\n)\nprint(ts_daily.resample(\"W\").mean())  # weekly average\n\n# Rolling windows\nprint(ts_daily.rolling(window=3).mean())\n# 2025-01-01    NaN\n# 2025-01-02    NaN\n# 2025-01-03    2.0\n# 2025-01-04    3.0\n# ...\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2013-basic-visualisation",
      children: "20.13 Basic Visualisation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20131-matplotlib",
      children: "20.13.1 matplotlib"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import matplotlib.pyplot as plt\n\n# Line plot\nx = [1, 2, 3, 4, 5]\ny = [2, 4, 6, 8, 10]\nplt.plot(x, y, marker=\"o\", linestyle=\"--\", color=\"b\", label=\"y = 2x\")\nplt.xlabel(\"X Axis\")\nplt.ylabel(\"Y Axis\")\nplt.title(\"Line Plot\")\nplt.legend()\nplt.grid(True)\nplt.show()\n\n# Bar plot\ncategories = [\"A\", \"B\", \"C\", \"D\"]\nvalues = [5, 7, 3, 8]\nplt.bar(categories, values, color=\"skyblue\")\nplt.title(\"Bar Chart\")\nplt.show()\n\n# Scatter plot\nx = np.random.randn(100)\ny = 2 * x + np.random.randn(100)\nplt.scatter(x, y, alpha=0.5)\nplt.title(\"Scatter Plot\")\nplt.xlabel(\"X\")\nplt.ylabel(\"Y\")\nplt.show()\n\n# Histogram\ndata = np.random.randn(1000)\nplt.hist(data, bins=30, alpha=0.7, edgecolor=\"black\")\nplt.title(\"Histogram\")\nplt.show()\n\n# Subplots\nfig, axes = plt.subplots(2, 2, figsize=(10, 8))\naxes[0, 0].plot(x, y)\naxes[0, 1].hist(data, bins=30)\naxes[1, 0].scatter(x, y)\naxes[1, 1].bar(categories, values)\nplt.tight_layout()\nplt.show()\n\n# Saving\nplt.savefig(\"plot.png\", dpi=300, bbox_inches=\"tight\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20132-seaborn",
      children: "20.13.2 seaborn"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import seaborn as sns\n\n# Built-in datasets\ntips = sns.load_dataset(\"tips\")\nprint(tips.head())\n\n# Statistical plots\nsns.scatterplot(data=tips, x=\"total_bill\", y=\"tip\", hue=\"time\")\nplt.title(\"Tips by Time of Day\")\nplt.show()\n\nsns.boxplot(data=tips, x=\"day\", y=\"total_bill\")\nplt.show()\n\nsns.barplot(data=tips, x=\"day\", y=\"tip\", estimator=\"mean\")\nplt.show()\n\n# Pair plot\nsns.pairplot(tips, hue=\"sex\")\nplt.show()\n\n# Heatmap (correlation)\nnumeric_cols = tips.select_dtypes(include=[np.number])\nsns.heatmap(numeric_cols.corr(), annot=True, cmap=\"coolwarm\")\nplt.title(\"Correlation Heatmap\")\nplt.show()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Library"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Primary Object"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Strengths"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "NumPy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ndarray"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speed, broadcasting, linear algebra"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "pandas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Series/DataFrame"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Labels, missing data, I/O, groupby"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "matplotlib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Figure/Axes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every plot type, fine-grained control"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "seaborn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Axes-level functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Statistical plots, built-in themes"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\narr = np.array([1, 2, 3, 4, 5])\nprint(arr * 2)  # [2 4 6 8 10]\nprint(arr[arr > 2])  # [3 4 5]\n\nimport pandas as pd\ndf = pd.DataFrame({\"Name\": [\"A\",\"B\"], \"Age\": [25,30]})\nprint(df.groupby(\"Age\").mean())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Area"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Relevant Section"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data Science"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core data manipulation tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All sections"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not primary use"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N/A"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log analysis with pandas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data pipeline transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20.10"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What is broadcasting in NumPy?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sending data over network"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["operating on different-shaped arrays ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "converting to boolean"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "sorting arrays"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " What is the difference between iloc and loc?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "iloc uses labels, loc uses position"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["iloc uses position, loc uses labels ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "no difference"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "both use position"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does groupby().agg() return?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a DataFrame"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["a Series or DataFrame with aggregated values ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a list of groups"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "a dict of groups"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " Which method fills missing values?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "dropna"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["fillna ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "isnull"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "astype"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does pd.merge do?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "concatenates rows"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["combines DataFrames on a key column ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "reshapes data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "plots data"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 20: TypeScript Numerical Computing Equivalents\n// Python: numpy.array() → TypeScript: Typed arrays\nconst arr: Float64Array = new Float64Array([1, 2, 3, 4, 5]);\n\n// Element-wise operations (Python: arr * 2)\nconst doubled = arr.map((x) => x * 2);\nconsole.log(Array.from(doubled));  // [2, 4, 6, 8, 10]\n\n// Python: np.mean(), np.std()\nconst values: number[] = [1, 2, 3, 4, 5];\nconst mean = values.reduce((a, b) => a + b) / values.length;\nconst std = Math.sqrt(\n  values.reduce((acc, v) => acc + (v - mean) ** 2, 0) / values.length\n);\nconsole.log(`Mean: ${mean}, Std: ${std}`);\n\n// Python: pandas DataFrame → TypeScript: array of objects\ninterface Row {\n  name: string;\n  age: number;\n  salary: number;\n}\n\nconst df: Row[] = [\n  { name: \"Alice\", age: 30, salary: 70000 },\n  { name: \"Bob\", age: 25, salary: 55000 },\n  { name: \"Charlie\", age: 35, salary: 90000 },\n];\n\n// Python: df.groupby().mean() → TypeScript: reduce\nconst avgSalary = df.reduce((acc, row) => acc + row.salary, 0) / df.length;\nconsole.log(`Average salary: ${avgSalary}`);\n\n// Python: df[df.age > 30] → TypeScript: filter\nconst filtered = df.filter((row) => row.age > 30);\nconsole.log(filtered);  // [{ name: \"Charlie\", age: 35, salary: 90000 }]\n\n// Python: df.sort_values(by=\"salary\") → TypeScript: sort\ndf.sort((a, b) => b.salary - a.salary);\nconsole.log(df);  // Charlie, Alice, Bob (by salary descending)\n\n// Python: np.dot() / @ → TypeScript: manual\nfunction dot(a: number[], b: number[]): number {\n  return a.reduce((sum, val, i) => sum + val * b[i], 0);\n}\nconsole.log(dot([1, 2, 3], [4, 5, 6]));  // 32\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "more-typescript-data-processing-patterns",
      children: "More TypeScript Data Processing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Python: pandas groupby + agg → TypeScript: reduce with grouping\ninterface Sale {\n  product: string; region: string; amount: number;\n}\nconst sales: Sale[] = [\n  { product: \"A\", region: \"US\", amount: 100 },\n  { product: \"B\", region: \"EU\", amount: 200 },\n  { product: \"A\", region: \"EU\", amount: 150 },\n  { product: \"B\", region: \"US\", amount: 250 },\n];\n\n// Group by region, sum amounts\nconst byRegion: Record<string, number> = sales.reduce((acc, s) => {\n  acc[s.region] = (acc[s.region] ?? 0) + s.amount;\n  return acc;\n}, {} as Record<string, number>);\nconsole.log(byRegion);  // { US: 350, EU: 350 }\n\n// Python: df.sort_values() → TypeScript: sort\nconst sorted = [...sales].sort((a, b) => b.amount - a.amount);\n\n// Python: df.head(n) → TypeScript: slice\nconst top2 = sorted.slice(0, 2);\n\n// Python: rolling window → TypeScript: map with window\nfunction rollingAverage(data: number[], window: number): number[] {\n  const result: number[] = [];\n  for (let i = window - 1; i < data.length; i++) {\n    const sum = data.slice(i - window + 1, i + 1).reduce((a, b) => a + b, 0);\n    result.push(sum / window);\n  }\n  return result;\n}\nconst temps = [20, 22, 21, 25, 28, 26, 23];\nconsole.log(rollingAverage(temps, 3));  // [21, 22.67, 24.67, 26.33, 25.67]\n\n// Python: np.where → TypeScript: ternary map\nconst threshold = 25;\nconst flags = temps.map((t) => (t > threshold ? \"Hot\" : \"Normal\"));\n\n// Python: pd.merge → TypeScript: Map join\ntype Employee = { empId: number; name: string; deptId: number };\ntype Dept = { deptId: number; name: string };\nconst deptMap = new Map(depts.map((d) => [d.deptId, d.name]));\nconst enriched = employees.map((e) => ({\n  ...e,\n  deptName: deptMap.get(e.deptId) ?? \"Unknown\",\n}));\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === TypedArray Operations (NumPy ndarray equivalent) ===\nclass TypedArrayOps {\n  static zeros(n: number): Float64Array { return new Float64Array(n); }\n  static ones(n: number): Float64Array { const a = new Float64Array(n); a.fill(1); return a; }\n  static arange(start: number, end: number, step = 1): Float64Array {\n    const len = Math.ceil((end - start) / step);\n    const a = new Float64Array(len);\n    for (let i = 0; i < len; i++) a[i] = start + i * step;\n    return a;\n  }\n  static add(a: Float64Array, b: Float64Array): Float64Array {\n    const r = new Float64Array(a.length);\n    for (let i = 0; i < a.length; i++) r[i] = a[i] + b[i];\n    return r;\n  }\n  static multiply(a: Float64Array, b: Float64Array): Float64Array {\n    const r = new Float64Array(a.length);\n    for (let i = 0; i < a.length; i++) r[i] = a[i] * b[i];\n    return r;\n  }\n  static sum(a: Float64Array): number { return Array.from(a).reduce((s, v) => s + v, 0); }\n  static mean(a: Float64Array): number { return TypedArrayOps.sum(a) / a.length; }\n  static max(a: Float64Array): number { return Math.max(...a); }\n  static min(a: Float64Array): number { return Math.min(...a); }\n}\nconst arr1 = TypedArrayOps.arange(0, 5);\nconst arr2 = TypedArrayOps.ones(5);\nconsole.log([...TypedArrayOps.add(arr1, arr2)]); // [1,2,3,4,5]\n\n// === Matrix Operations ===\nclass MatrixOps {\n  static dot(a: number[][], b: number[][]): number[][] {\n    const result: number[][] = Array.from({ length: a.length }, () => Array(b[0].length).fill(0));\n    for (let i = 0; i < a.length; i++)\n      for (let j = 0; j < b[0].length; j++)\n        for (let k = 0; k < b.length; k++)\n          result[i][j] += a[i][k] * b[k][j];\n    return result;\n  }\n  static transpose(m: number[][]): number[][] {\n    return m[0].map((_, i) => m.map((r) => r[i]));\n  }\n  static identity(n: number): number[][] {\n    return Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => i === j ? 1 : 0));\n  }\n}\nconst m1 = [[1, 2], [3, 4]];\nconst m2 = [[5, 6], [7, 8]];\nconsole.log(MatrixOps.dot(m1, m2)); // [[19,22],[43,50]]\nconsole.log(MatrixOps.transpose(m1)); // [[1,3],[2,4]]\n\n// === Statistics Helper ===\nclass StatsHelper {\n  static mean(arr: number[]): number { return arr.reduce((s, v) => s + v, 0) / arr.length; }\n  static median(arr: number[]): number {\n    const sorted = [...arr].sort((a, b) => a - b);\n    const mid = Math.floor(sorted.length / 2);\n    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];\n  }\n  static std(arr: number[]): number {\n    const m = StatsHelper.mean(arr);\n    return Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);\n  }\n  static percentile(arr: number[], p: number): number {\n    const sorted = [...arr].sort((a, b) => a - b);\n    const idx = (p / 100) * (sorted.length - 1);\n    const lo = Math.floor(idx);\n    const hi = Math.ceil(idx);\n    return lo === hi ? sorted[lo] : sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);\n  }\n}\nconsole.log(StatsHelper.mean([1, 2, 3, 4, 5]));  // 3\nconsole.log(StatsHelper.median([1, 2, 3, 4, 5])); // 3\nconsole.log(StatsHelper.percentile([1, 2, 3, 4, 5], 90)); // 4.6\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-data-processing-patterns",
      children: "TypeScript Data Processing Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Python NumPy array operations in TypeScript ===\ninterface TypedArray { data: number[]; shape: number[]; }\nfunction array(data: number[], shape?: number[]): TypedArray {\n  return { data, shape: shape ?? [data.length] };\n}\nfunction reshape(arr: TypedArray, ...shape: number[]): TypedArray {\n  const total = shape.reduce((a, b) => a * b, 1);\n  if (total !== arr.data.length) throw new Error(\"Shape mismatch\");\n  return { data: [...arr.data], shape };\n}\nfunction zeros(...shape: number[]): TypedArray {\n  const total = shape.reduce((a, b) => a * b, 1);\n  return { data: Array(total).fill(0), shape };\n}\nfunction ones(...shape: number[]): TypedArray {\n  const total = shape.reduce((a, b) => a * b, 1);\n  return { data: Array(total).fill(1), shape };\n}\nfunction arange(stop: number): TypedArray {\n  return { data: Array.from({ length: stop }, (_, i) => i), shape: [stop] };\n}\nfunction add(a: TypedArray, b: TypedArray): TypedArray {\n  return { data: a.data.map((v, i) => v + b.data[i % b.data.length]), shape: a.shape };\n}\nfunction mult(a: TypedArray, b: TypedArray): TypedArray {\n  return { data: a.data.map((v, i) => v * b.data[i % b.data.length]), shape: a.shape };\n}\nconst a = arange(12);\nconst b = ones(2, 6);\nconsole.log(a.data);\nconsole.log(mult(a, array([2, 3])));\n\n// === DataFrame Operations (Python: pandas) ===\ninterface DataFrame { columns: string[]; rows: Record<string, unknown>[]; }\nfunction DataFrame(columns: string[], data: unknown[][]): DataFrame {\n  return { columns, rows: data.map(row => Object.fromEntries(columns.map((c, i) => [c, row[i]]))) };\n}\nfunction head(df: DataFrame, n = 5): DataFrame {\n  return { columns: df.columns, rows: df.rows.slice(0, n) };\n}\nfunction filterRows(df: DataFrame, pred: (row: Record<string, unknown>) => boolean): DataFrame {\n  return { columns: df.columns, rows: df.rows.filter(pred) };\n}\nfunction select(df: DataFrame, ...cols: string[]): DataFrame {\n  return { columns: cols, rows: df.rows.map(r => Object.fromEntries(cols.map(c => [c, r[c]]))) };\n}\nfunction sortBy(df: DataFrame, col: string, desc = false): DataFrame {\n  return { columns: df.columns, rows: [...df.rows].sort((a, b) => {\n    const ca = a[col] as number, cb = b[col] as number;\n    return desc ? cb - ca : ca - cb;\n  })};\n}\nfunction groupBy(df: DataFrame, col: string): Map<string, DataFrame> {\n  const groups = new Map<string, typeof df.rows>();\n  for (const row of df.rows) {\n    const key = String(row[col]);\n    if (!groups.has(key)) groups.set(key, []);\n    groups.get(key)!.push(row);\n  }\n  const result = new Map<string, DataFrame>();\n  for (const [key, rows] of groups) result.set(key, { columns: df.columns, rows });\n  return result;\n}\nconst df = DataFrame([\"name\", \"age\", \"city\"], [\n  [\"Alice\", 30, \"NYC\"], [\"Bob\", 25, \"London\"], [\"Carol\", 35, \"Tokyo\"], [\"Dave\", 28, \"NYC\"]\n]);\nconsole.log(filterRows(df, r => (r.age as number) > 28));\nconsole.log(select(df, \"name\", \"city\"));\n\n// === Statistics helpers ===\nfunction mean(arr: number[]): number { return arr.reduce((s, v) => s + v, 0) / arr.length; }\nfunction std(arr: number[]): number {\n  const m = mean(arr);\n  return Math.sqrt(arr.reduce((s, v) => s + (v - m) ** 2, 0) / arr.length);\n}\nconst nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nconsole.log({ mean: mean(nums), std: std(nums) });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy arrays enable efficient vectorised computation with broadcasting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Universal functions (ufuncs) apply element-wise operations without loops."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "reshape"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatten"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "T"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@"
        }), " handle shape manipulation and linear algebra."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pandas Series and DataFrame provide labelled, columnar data structures."
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "groupby"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "merge"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "fillna"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "apply"
        }), " are core data-wrangling operations."]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "matplotlib and seaborn provide basic and statistical visualisation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is broadcasting and when would it fail?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "iloc"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "loc"
        }), " in pandas?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Why is vectorised NumPy faster than Python for loops?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupby().agg()"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "groupby().apply()"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pd.merge"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pd.concat"
        }), "?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Load the Iris dataset from seaborn (", (0,jsx_runtime.jsx)(_components.code, {
            children: "sns.load_dataset(\"iris\")"
          }), "). Compute the mean, standard deviation, and 25th/75th percentiles for each species. Create a scatter plot matrix coloured by species. Save the summary statistics to a CSV file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Create a NumPy array of daily temperatures (365 random normal values with mean 20, std 5). Compute a 7-day rolling average. Find the hottest and coldest 3-day streaks. Normalise the data to zero mean and unit variance. Plot the original data and the rolling average."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Merge the following two DataFrames: employees (emp_id, name, dept_id, salary) and departments (dept_id, dept_name). Find the highest-paid employee in each department. Compute the salary difference between each employee and their department average. Flag employees earning less than 80% of their department average as \"Underpaid\"."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problem",
      children: "Challenge Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a sales analysis pipeline:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate synthetic sales data for one year (1000+ transactions) with columns: date, product, category, quantity, unit_price, region, salesperson."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Load into a DataFrame and clean missing values."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compute monthly revenue by category and region."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Find the top 5 products by revenue and the bottom 3."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify salespeople who met/exceeded a monthly quota of $10,000."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detect seasonal trends (month-over-month growth rates)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Export results to an Excel workbook with multiple sheets: \"Monthly Summary\", \"Top Products\", \"Salesperson Performance\". Format with appropriate number formatting."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create a dashboard-style figure with 4 subplots: monthly revenue line, top products bar, revenue by region pie, and a correlation heatmap."
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