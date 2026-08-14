"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[10994],{

/***/ 52318
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_python_programming_21_concurrency_multiprocessing_md_c23_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-python-programming-21-concurrency-multiprocessing-md-c23.json
const site_docs_courses_python_programming_21_concurrency_multiprocessing_md_c23_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/python-programming/21-concurrency-multiprocessing","title":"Chapter 21: Concurrency, Multiprocessing & Parallelism","description":"Previous None","source":"@site/docs/courses/python-programming/21-concurrency-multiprocessing.md","sourceDirName":"courses/python-programming","slug":"/python-programming/21-concurrency-multiprocessing","permalink":"/ai-engineering-journey/python-programming/21-concurrency-multiprocessing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":21,"frontMatter":{"id":"21-concurrency-multiprocessing","slug":"/python-programming/21-concurrency-multiprocessing","title":"Chapter 21: Concurrency, Multiprocessing & Parallelism","sidebar_label":"Chapter 21: Concurrency, Multiprocessing & Parallelism","sidebar_position":21},"sidebar":"course-python-programming","previous":{"title":"Chapter 20: NumPy and pandas","permalink":"/ai-engineering-journey/python-programming/20-numpy-pandas"},"next":{"title":"Python Programming — A Comprehensive University Textbook","permalink":"/ai-engineering-journey/python-programming"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/python-programming/21-concurrency-multiprocessing.md


const frontMatter = {
	id: '21-concurrency-multiprocessing',
	slug: '/python-programming/21-concurrency-multiprocessing',
	title: 'Chapter 21: Concurrency, Multiprocessing & Parallelism',
	sidebar_label: 'Chapter 21: Concurrency, Multiprocessing & Parallelism',
	sidebar_position: 21
};
const contentTitle = 'Chapter 21: Concurrency, Multiprocessing & Parallelism';

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
  "value": "21.1 The GIL Problem",
  "id": "211-the-gil-problem",
  "level": 2
}, {
  "value": "21.1.1 Why the GIL Exists",
  "id": "2111-why-the-gil-exists",
  "level": 3
}, {
  "value": "21.1.2 I/O-bound vs CPU-bound",
  "id": "2112-io-bound-vs-cpu-bound",
  "level": 3
}, {
  "value": "21.2 Threading for I/O-bound Work",
  "id": "212-threading-for-io-bound-work",
  "level": 2
}, {
  "value": "21.2.1 ThreadPoolExecutor",
  "id": "2121-threadpoolexecutor",
  "level": 3
}, {
  "value": "21.2.2 Thread Safety with Locks",
  "id": "2122-thread-safety-with-locks",
  "level": 3
}, {
  "value": "21.2.3 Queue-Based Worker Pattern",
  "id": "2123-queue-based-worker-pattern",
  "level": 3
}, {
  "value": "21.3 Multiprocessing for CPU-bound Work",
  "id": "213-multiprocessing-for-cpu-bound-work",
  "level": 2
}, {
  "value": "21.3.1 ProcessPoolExecutor",
  "id": "2131-processpoolexecutor",
  "level": 3
}, {
  "value": "21.3.2 Manual Process Pool with Pool",
  "id": "2132-manual-process-pool-with-pool",
  "level": 3
}, {
  "value": "21.3.3 When to Use Pool.map vs Pool.starmap vs Pool.imap",
  "id": "2133-when-to-use-poolmap-vs-poolstarmap-vs-poolimap",
  "level": 3
}, {
  "value": "21.4 concurrent.futures High-Level API",
  "id": "214-concurrentfutures-high-level-api",
  "level": 2
}, {
  "value": "21.4.1 Choosing the Right Executor",
  "id": "2141-choosing-the-right-executor",
  "level": 3
}, {
  "value": "21.4.2 Callbacks and Timeouts",
  "id": "2142-callbacks-and-timeouts",
  "level": 3
}, {
  "value": "21.4.3 Exception Handling",
  "id": "2143-exception-handling",
  "level": 3
}, {
  "value": "21.5 joblib for ML Parallelism",
  "id": "215-joblib-for-ml-parallelism",
  "level": 2
}, {
  "value": "21.5.1 Parallel and delayed",
  "id": "2151-parallel-and-delayed",
  "level": 3
}, {
  "value": "21.5.2 Automatic Batching",
  "id": "2152-automatic-batching",
  "level": 3
}, {
  "value": "21.5.3 Memory Mapping for Large Arrays",
  "id": "2153-memory-mapping-for-large-arrays",
  "level": 3
}, {
  "value": "21.6 Shared Memory vs Serialization",
  "id": "216-shared-memory-vs-serialization",
  "level": 2
}, {
  "value": "21.6.1 multiprocessing.shared_memory (Python 3.8+)",
  "id": "2161-multiprocessingshared_memory-python-38",
  "level": 3
}, {
  "value": "21.6.2 Serialization Overhead",
  "id": "2162-serialization-overhead",
  "level": 3
}, {
  "value": "21.7 NumPy/Pandas Parallelism",
  "id": "217-numpypandas-parallelism",
  "level": 2
}, {
  "value": "21.7.1 BLAS Threading",
  "id": "2171-blas-threading",
  "level": 3
}, {
  "value": "21.7.2 Pandas Groupby with Parallel Backend",
  "id": "2172-pandas-groupby-with-parallel-backend",
  "level": 3
}, {
  "value": "21.8 Practical ML Patterns",
  "id": "218-practical-ml-patterns",
  "level": 2
}, {
  "value": "21.8.1 Hyperparameter Tuning with Grid Search",
  "id": "2181-hyperparameter-tuning-with-grid-search",
  "level": 3
}, {
  "value": "21.8.2 Batch Inference",
  "id": "2182-batch-inference",
  "level": 3
}, {
  "value": "21.8.3 Ensemble Evaluation",
  "id": "2183-ensemble-evaluation",
  "level": 3
}, {
  "value": "21.8.4 Chunked Data Processing Pipeline",
  "id": "2184-chunked-data-processing-pipeline",
  "level": 3
}, {
  "value": "21.9 AsyncIO vs Threading vs Multiprocessing",
  "id": "219-asyncio-vs-threading-vs-multiprocessing",
  "level": 2
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
  "value": "TypeScript Utilities",
  "id": "typescript-utilities",
  "level": 3
}, {
  "value": "TypeScript Async &amp; Concurrency Patterns",
  "id": "typescript-async--concurrency-patterns",
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
  "value": "Basic",
  "id": "basic",
  "level": 3
}, {
  "value": "Intermediate",
  "id": "intermediate",
  "level": 3
}, {
  "value": "Advanced",
  "id": "advanced",
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
        id: "chapter-21-concurrency-multiprocessing--parallelism",
        children: "Chapter 21: Concurrency, Multiprocessing & Parallelism"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/python-programming/20-numpy-pandas",
          children: "NumPy and pandas"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " None"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the Python GIL and its impact on different workload types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use threading for I/O-bound tasks safely"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use multiprocessing for CPU-bound tasks efficiently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between concurrent.futures, multiprocessing, and joblib"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Parallelize ML workflows: hyperparameter tuning, batch inference, ensemble evaluation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid shared-state pitfalls and serialization bottlenecks"
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
        href: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/python-programming/21-concurrency-multiprocessing/visual-explanation.png",
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
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/21-concurrency-multiprocessing.png",
        alt: "Concurrency and Multiprocessing"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "21.1 The GIL Problem"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "The GIL prevents multiple threads from executing Python bytecode simultaneously on one core."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.2 Threading for I/O-bound Work"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threading works for I/O-bound tasks; multiprocessing is needed for CPU-bound work in pure Python."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.3 Multiprocessing for CPU-bound Work"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "concurrent.futures"
            }), " provides a uniform API: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ThreadPoolExecutor"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ProcessPoolExecutor"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.4 concurrent.futures High-Level API"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "joblib is optimised for ML parallelism with transparent batching and memmap for large arrays."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.5 joblib for ML Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "NumPy releases the GIL for C-level operations; BLAS environment variables control CPU threading."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.6 Shared Memory vs Serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.7 NumPy/Pandas Parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.8 Practical ML Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {}), (0,jsx_runtime.jsx)(_components.td, {
            children: "undefined"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "21.9 AsyncIO vs Threading vs Multiprocessing"
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
        children: "flowchart LR\n    S0[The GIL Problem]\n    S1[Threading for I/O-bound Work]\n    S2[Multiprocessing for CPU-bound Work]\n    S3[concurrent.futures High-Level API]\n    S4[joblib for ML Parallelism]\n    S5[Shared Memory vs Serialization]\n    S6[NumPy/Pandas Parallelism]\n    S7[Practical ML Patterns]\n    S8[AsyncIO vs Threading vs Multiprocessing]\n    S0 --> S1\n    S1 --> S2\n    S2 --> S3\n    S3 --> S4\n    S4 --> S5\n    S5 --> S6\n    S6 --> S7\n    S7 --> S8\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "211-the-gil-problem",
      children: "21.1 The GIL Problem"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " The GIL prevents multiple threads from executing Python bytecode simultaneously on one core."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Global Interpreter Lock (GIL) is a mutex in CPython that prevents multiple threads from executing Python bytecode simultaneously. It exists because CPython's memory management (reference counting) is not thread-safe."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import sys\nprint(sys._is_gil_enabled())  # True on CPython\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2111-why-the-gil-exists",
      children: "21.1.1 Why the GIL Exists"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every Python object has a reference count. Without the GIL, two threads incrementing/decrementing counts simultaneously would corrupt memory. The GIL guarantees that only one thread runs Python code at a time."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\ncounter = 0\n\ndef increment():\n    global counter\n    for _ in range(1_000_000):\n        counter += 1  # Actually 4 bytecode operations: LOAD, LOAD, ADD, STORE\n\nthreads = [threading.Thread(target=increment) for _ in range(10)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nprint(counter)  # Almost never 10_000_000 due to GIL interleaving\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The GIL ensures safe memory access by serializing bytecode execution. The trade-off is that pure Python CPU-bound code can never use more than one core."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2112-io-bound-vs-cpu-bound",
      children: "21.1.2 I/O-bound vs CPU-bound"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import time\n\ndef cpu_bound(n):\n    \"\"\"Heavy computation -- GIL limits this to 1 core.\"\"\"\n    return sum(i * i for i in range(n))\n\ndef io_bound():\n    \"\"\"Waiting on I/O -- GIL is released during sleep/blocking calls.\"\"\"\n    time.sleep(1)\n\n# I/O-bound: threading helps (GIL released during blocking I/O)\n# CPU-bound: threading hurts (contention adds overhead)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Many blocking operations release the GIL internally: time.sleep(), read/write on sockets, file I/O, database drivers, NumPy C extensions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "212-threading-for-io-bound-work",
      children: "21.2 Threading for I/O-bound Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " Threading works for I/O-bound tasks; multiprocessing is needed for CPU-bound work in pure Python."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Threading excels when the program spends most of its time waiting on external resources."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2121-threadpoolexecutor",
      children: "21.2.1 ThreadPoolExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, as_completed\nimport urllib.request\n\nurls = [\n    \"https://api.example.com/data/1\",\n    \"https://api.example.com/data/2\",\n    \"https://api.example.com/data/3\",\n]\n\ndef fetch(url: str) -> tuple[str, int]:\n    with urllib.request.urlopen(url, timeout=5) as resp:\n        return url, resp.status\n\nwith ThreadPoolExecutor(max_workers=10) as executor:\n    futures = {executor.submit(fetch, url): url for url in urls}\n    for future in as_completed(futures):\n        url, status = future.result()\n        print(f\"{url}: {status}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2122-thread-safety-with-locks",
      children: "21.2.2 Thread Safety with Locks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import threading\n\nclass SafeCounter:\n    def __init__(self):\n        self._value = 0\n        self._lock = threading.Lock()\n\n    def increment(self) -> int:\n        with self._lock:\n            self._value += 1\n            return self._value\n\n    @property\n    def value(self) -> int:\n        with self._lock:\n            return self._value\n\ncounter = SafeCounter()\n\ndef worker(n):\n    for _ in range(n):\n        counter.increment()\n\nthreads = [threading.Thread(target=worker, args=(1_000,)) for _ in range(10)]\nfor t in threads: t.start()\nfor t in threads: t.join()\nassert counter.value == 10_000\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2123-queue-based-worker-pattern",
      children: "21.2.3 Queue-Based Worker Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import queue\nimport threading\nimport time\n\ndef producer(q: queue.Queue, n: int):\n    for i in range(n):\n        q.put(f\"task-{i}\")\n        time.sleep(0.01)\n    q.put(None)  # Sentinel\n\ndef consumer(q: queue.Queue, results: list):\n    while True:\n        item = q.get()\n        if item is None:\n            q.task_done()\n            break\n        results.append(f\"processed-{item}\")\n        q.task_done()\n\nq = queue.Queue(maxsize=20)\nresults = []\nthreads = [\n    threading.Thread(target=producer, args=(q, 50)),\n    threading.Thread(target=consumer, args=(q, results)),\n    threading.Thread(target=consumer, args=(q, results)),\n]\nfor t in threads: t.start()\nfor t in threads: t.join()\nassert len(results) == 50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "213-multiprocessing-for-cpu-bound-work",
      children: "21.3 Multiprocessing for CPU-bound Work"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "concurrent.futures"
        }), " provides a uniform API: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ThreadPoolExecutor"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ProcessPoolExecutor"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Multiprocessing bypasses the GIL by spawning separate Python processes, each with its own interpreter and memory space."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2131-processpoolexecutor",
      children: "21.3.1 ProcessPoolExecutor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ProcessPoolExecutor\nimport math\n\ndef is_prime(n: int) -> bool:\n    if n < 2:\n        return False\n    for i in range(2, int(math.isqrt(n)) + 1):\n        if n % i == 0:\n            return False\n    return True\n\nnumbers = [104395301, 104395303, 104395309, 104395313, 104395337]\n\nwith ProcessPoolExecutor(max_workers=4) as executor:\n    results = list(executor.map(is_prime, numbers))\n\nfor n, prime in zip(numbers, results):\n    print(f\"{n}: {'prime' if prime else 'composite'}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2132-manual-process-pool-with-pool",
      children: "21.3.2 Manual Process Pool with Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from multiprocessing import Pool, cpu_count\nimport time\n\ndef compute(x: float) -> float:\n    for _ in range(10_000_000):\n        x = (x * 1.0001) - 0.0001\n    return x\n\nvalues = [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0]\n\nstart = time.perf_counter()\nwith Pool(processes=cpu_count()) as pool:\n    results = pool.map(compute, values)\nelapsed = time.perf_counter() - start\nprint(f\"{cpu_count()} cores: {elapsed:.2f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2133-when-to-use-poolmap-vs-poolstarmap-vs-poolimap",
      children: "21.3.3 When to Use Pool.map vs Pool.starmap vs Pool.imap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from multiprocessing import Pool\n\n# pool.map: single iterable\ndef square(x): return x * x\nwith Pool() as p:\n    print(p.map(square, [1, 2, 3, 4]))\n\n# pool.starmap: multiple arguments per call\ndef add(a, b, c): return a + b + c\nwith Pool() as p:\n    print(p.starmap(add, [(1, 2, 3), (4, 5, 6)]))\n\n# pool.imap: lazy iterator (memory efficient)\nwith Pool() as p:\n    for result in p.imap(square, range(1000), chunksize=100):\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "214-concurrentfutures-high-level-api",
      children: "21.4 concurrent.futures High-Level API"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " joblib is optimised for ML parallelism with transparent batching and memmap for large arrays."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The concurrent.futures module provides a uniform interface for both threading and multiprocessing."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2141-choosing-the-right-executor",
      children: "21.4.1 Choosing the Right Executor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor, Future\nimport time\n\ndef io_task(url: str) -> str:\n    time.sleep(1)  # Simulate HTTP request\n    return f\"fetched {url}\"\n\ndef cpu_task(n: int) -> int:\n    return sum(i * i for i in range(n))\n\n# ThreadPoolExecutor for I/O-bound\nwith ThreadPoolExecutor(max_workers=5) as ex:\n    futures = [ex.submit(io_task, f\"url-{i}\") for i in range(5)]\n    for f in futures:\n        print(f.result())\n\n# ProcessPoolExecutor for CPU-bound\nwith ProcessPoolExecutor(max_workers=4) as ex:\n    futures = [ex.submit(cpu_task, 5_000_000) for i in range(4)]\n    for f in futures:\n        print(f.result())\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2142-callbacks-and-timeouts",
      children: "21.4.2 Callbacks and Timeouts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, TimeoutError\n\ndef slow_task(n: int) -> int:\n    import time\n    time.sleep(n)\n    return n\n\nwith ThreadPoolExecutor() as ex:\n    future = ex.submit(slow_task, 5)\n    try:\n        result = future.result(timeout=2)\n    except TimeoutError:\n        print(\"Task timed out, cancelling...\")\n        cancelled = future.cancel()\n        print(f\"Cancelled: {cancelled}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2143-exception-handling",
      children: "21.4.3 Exception Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor\n\ndef risky_division(x: float, y: float) -> float:\n    if y == 0:\n        raise ValueError(\"Division by zero\")\n    return x / y\n\nwith ThreadPoolExecutor() as ex:\n    futures = [ex.submit(risky_division, 10, i) for i in [2, 0, 5]]\n    for f in futures:\n        try:\n            print(f.result())\n        except ValueError as e:\n            print(f\"Error: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "215-joblib-for-ml-parallelism",
      children: "21.5 joblib for ML Parallelism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " NumPy releases the GIL for C-level operations; BLAS environment variables control CPU threading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "joblib is the standard parallelism library in the scikit-learn ecosystem. It handles transparent process pooling, efficient data serialization (memmap), and caching."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2151-parallel-and-delayed",
      children: "21.5.1 Parallel and delayed"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from joblib import Parallel, delayed\nimport time\n\ndef train_model(params: dict) -> dict:\n    time.sleep(1)  # Simulated training\n    return {\"params\": params, \"score\": 0.95}\n\nparam_grid = [\n    {\"lr\": 0.01, \"depth\": 3},\n    {\"lr\": 0.01, \"depth\": 5},\n    {\"lr\": 0.001, \"depth\": 3},\n    {\"lr\": 0.001, \"depth\": 5},\n]\n\nresults = Parallel(n_jobs=-1, verbose=10)(\n    delayed(train_model)(params) for params in param_grid\n)\n\nfor r in results:\n    print(f\"{r['params']} -> score: {r['score']}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2152-automatic-batching",
      children: "21.5.2 Automatic Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "joblib automatically batches tasks for efficiency. The batch_size parameter controls how many tasks are sent to each worker at once."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from joblib import Parallel, delayed\n\n# Small tasks: larger batches reduce serialization overhead\ndef process_row(row: int) -> int:\n    return row * row\n\nresults = Parallel(n_jobs=4, batch_size=100)(\n    delayed(process_row)(i) for i in range(10_000)\n)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2153-memory-mapping-for-large-arrays",
      children: "21.5.3 Memory Mapping for Large Arrays"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom joblib import Parallel, delayed, dump, load\n\n# Create a large array and memory-map it\nbig_data = np.random.rand(100_000, 100)\ndump(big_data, \"big_data.npy\")\nbig_data_mmap = load(\"big_data.npy\", mmap_mode=\"r\")\n\ndef process_chunk(start: int, end: int) -> float:\n    chunk = big_data_mmap[start:end]\n    return chunk.mean()\n\nchunk_size = 10_000\nchunks = [(i, i + chunk_size) for i in range(0, 100_000, chunk_size)]\n\nresults = Parallel(n_jobs=4)(delayed(process_chunk)(s, e) for s, e in chunks)\nprint(f\"Global mean: {np.mean(results):.4f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "216-shared-memory-vs-serialization",
      children: "21.6 Shared Memory vs Serialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2161-multiprocessingshared_memory-python-38",
      children: "21.6.1 multiprocessing.shared_memory (Python 3.8+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from multiprocessing import shared_memory, Process\nimport numpy as np\n\ndef worker(shm_name: str, shape: tuple, dtype: type):\n    shm = shared_memory.SharedMemory(name=shm_name)\n    arr = np.ndarray(shape, dtype=dtype, buffer=shm.buf)\n    arr[:] = arr * 2\n    shm.close()\n\narr = np.array([1, 2, 3, 4, 5], dtype=np.float64)\nshm = shared_memory.SharedMemory(create=True, size=arr.nbytes)\nshared_arr = np.ndarray(arr.shape, dtype=arr.dtype, buffer=shm.buf)\nshared_arr[:] = arr[:]\n\np = Process(target=worker, args=(shm.name, arr.shape, arr.dtype))\np.start()\np.join()\n\nprint(shared_arr)  # [2, 4, 6, 8, 10]\nshm.close()\nshm.unlink()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2162-serialization-overhead",
      children: "21.6.2 Serialization Overhead"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pickle\nimport numpy as np\nfrom time import perf_counter\n\n# Pickle serialization is expensive for large objects\nbig_dict = {str(i): np.random.rand(1000) for i in range(1000)}\n\nstart = perf_counter()\ndata = pickle.dumps(big_dict)\ndeserialized = pickle.loads(data)\nprint(f\"Serialization: {perf_counter() - start:.2f}s, size: {len(data) / 1e6:.1f}MB\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each call to ProcessPoolExecutor.map serializes arguments and return values via pickle. This is why small, frequent tasks are inefficient -- the serialization overhead dominates."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "217-numpypandas-parallelism",
      children: "21.7 NumPy/Pandas Parallelism"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NumPy and many pandas operations release the GIL because they are implemented in C. This means they can benefit from threading -- but only if the underlying BLAS library is multi-threaded."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2171-blas-threading",
      children: "21.7.1 BLAS Threading"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import os\nos.environ[\"OMP_NUM_THREADS\"] = \"4\"\nos.environ[\"MKL_NUM_THREADS\"] = \"4\"\nos.environ[\"OPENBLAS_NUM_THREADS\"] = \"4\"\n\nimport numpy as np\n\n# Matrix multiplication uses multi-threaded BLAS automatically\na = np.random.rand(2000, 2000)\nb = np.random.rand(2000, 2000)\nc = a @ b  # Uses multiple cores internally\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2172-pandas-groupby-with-parallel-backend",
      children: "21.7.2 Pandas Groupby with Parallel Backend"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom multiprocessing import cpu_count\n\ndef parallel_groupby(df: pd.DataFrame, by: str, func: str, column: str) -> pd.Series:\n    groups = [group for _, group in df.groupby(by)]\n    from concurrent.futures import ProcessPoolExecutor\n    with ProcessPoolExecutor(max_workers=cpu_count()) as ex:\n        results = list(ex.map(lambda g: getattr(g[column], func)(), groups))\n    return pd.Series(results, index=df[by].unique())\n\ndf = pd.DataFrame({\n    \"group\": np.random.choice(list(\"ABCDEFGH\"), 100_000),\n    \"value\": np.random.rand(100_000),\n})\n\nresult = parallel_groupby(df, \"group\", \"mean\", \"value\")\nprint(result)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "218-practical-ml-patterns",
      children: "21.8 Practical ML Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2181-hyperparameter-tuning-with-grid-search",
      children: "21.8.1 Hyperparameter Tuning with Grid Search"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from joblib import Parallel, delayed\nfrom sklearn.base import BaseEstimator\nimport numpy as np\nimport time\n\nclass DummyModel(BaseEstimator):\n    def __init__(self, lr=0.01, depth=3):\n        self.lr = lr\n        self.depth = depth\n    def fit(self, X, y):\n        time.sleep(0.5)\n        self.score_ = np.random.rand()\n        return self\n    def score(self, X, y):\n        return self.score_\n\ndef evaluate(params: dict, X, y) -> dict:\n    model = DummyModel(**params)\n    model.fit(X, y)\n    return {**params, \"score\": model.score(X, y)}\n\nX = np.random.rand(100, 10)\ny = np.random.randint(0, 2, 100)\n\nparam_grid = [\n    {\"lr\": lr, \"depth\": d}\n    for lr in [0.001, 0.01, 0.1]\n    for d in [3, 5, 7, 10]\n]\n\nresults = Parallel(n_jobs=-1, verbose=5)(\n    delayed(evaluate)(params, X, y) for params in param_grid\n)\n\nbest = max(results, key=lambda r: r[\"score\"])\nprint(f\"Best: {best}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2182-batch-inference",
      children: "21.8.2 Batch Inference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom joblib import Parallel, delayed\n\nclass Model:\n    def predict(self, batch: np.ndarray) -> np.ndarray:\n        return batch.sum(axis=1)\n\nmodel = Model()\ndata = np.random.rand(100_000, 256)\nbatch_size = 1000\n\nbatches = [data[i:i + batch_size] for i in range(0, len(data), batch_size)]\npredictions = Parallel(n_jobs=4)(delayed(model.predict)(b) for b in batches)\n\nresult = np.concatenate(predictions)\nprint(f\"Predictions: {result.shape}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2183-ensemble-evaluation",
      children: "21.8.3 Ensemble Evaluation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\nfrom joblib import Parallel, delayed\n\ndef train_and_evaluate(seed: int, X_train, y_train, X_test, y_test) -> float:\n    np.random.seed(seed)\n    from sklearn.ensemble import RandomForestClassifier\n    model = RandomForestClassifier(n_estimators=50, n_jobs=1)\n    model.fit(X_train, y_train)\n    return model.score(X_test, y_test)\n\nX_train = np.random.rand(1000, 20)\ny_train = np.random.randint(0, 2, 1000)\nX_test = np.random.rand(200, 20)\ny_test = np.random.randint(0, 2, 200)\n\n# Train 10 independent models in parallel\nscores = Parallel(n_jobs=4)(\n    delayed(train_and_evaluate)(s, X_train, y_train, X_test, y_test)\n    for s in range(10)\n)\n\nprint(f\"Mean accuracy: {np.mean(scores):.3f} +/- {np.std(scores):.3f}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2184-chunked-data-processing-pipeline",
      children: "21.8.4 Chunked Data Processing Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import pandas as pd\nimport numpy as np\nfrom joblib import Parallel, delayed\n\ndef process_chunk(chunk: pd.DataFrame) -> pd.DataFrame:\n    chunk[\"rolling_mean\"] = chunk[\"value\"].rolling(10).mean()\n    chunk[\"feature\"] = chunk[\"value\"] / chunk[\"value\"].shift(1)\n    return chunk.dropna()\n\ndf = pd.DataFrame({\n    \"group\": np.repeat(range(20), 1000),\n    \"value\": np.random.rand(20000),\n})\n\ngroups = [group for _, group in df.groupby(\"group\")]\nresults = Parallel(n_jobs=4)(delayed(process_chunk)(g) for g in groups)\n\nfinal_df = pd.concat(results)\nprint(f\"Processed {len(final_df)} rows\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "219-asyncio-vs-threading-vs-multiprocessing",
      children: "21.9 AsyncIO vs Threading vs Multiprocessing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "One-Sentence Takeaway:"
        }), " undefined"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python offers three concurrency models for different problems:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import asyncio\nimport time\n\n# async/await: cooperative multitasking (single thread)\nasync def fetch_data(url: str) -> str:\n    await asyncio.sleep(1)  # Non-blocking wait\n    return f\"data from {url}\"\n\nasync def main():\n    tasks = [fetch_data(f\"url-{i}\") for i in range(5)]\n    results = await asyncio.gather(*tasks)\n    return results\n\nstart = time.perf_counter()\nresults = asyncio.run(main())\nprint(f\"Async: {time.perf_counter() - start:.2f}s\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use each:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "GIL Impact"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asyncio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many concurrent I/O connections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIL-free (no Python code during await)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "threading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate I/O, blocking calls"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GIL released during blocking ops"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiprocessing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-bound computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No GIL (separate processes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "joblib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML/NumPy parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines all approaches"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Model"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Memory"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asyncio"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Many concurrent I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "threading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate I/O, blocking"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiprocessing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CPU-bound"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "joblib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ML/NumPy parallelism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor\n\n# I/O-bound\nwith ThreadPoolExecutor(max_workers=10) as ex:\n    futures = [ex.submit(fetch, url) for url in urls]\n\n# CPU-bound\nwith ProcessPoolExecutor(max_workers=4) as ex:\n    results = list(ex.map(is_prime, numbers))\n"
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
            children: "Hyperparameter tuning with joblib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.8"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Web Dev"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async fetch with ThreadPoolExecutor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DevOps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel log processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.3"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Automation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch inference pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21.8"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q1."
      }), " What does the GIL prevent?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multi-threading entirely"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["parallel bytecode execution on one core ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "multiprocessing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "file I/O"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2."
      }), " When does threading help in Python?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CPU-bound tasks"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["I/O-bound tasks ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "both"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "neither"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3."
      }), " What does ProcessPoolExecutor use?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "threads"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["separate processes ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "coroutines"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "lightweight threads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4."
      }), " What is joblib optimised for?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "web scraping"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["ML parallelism ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "file I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GUI apps"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5."
      }), " What does BLAS_NUM_THREADS control?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "thread pool size"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["BLAS CPU core count ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "<-- Correct"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "memory limit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "process count"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// Chapter 21: TypeScript Concurrency Equivalents\n// Python: threading → TypeScript: Worker threads\nimport { Worker, isMainThread, parentPort, workerData } from \"node:worker_threads\";\n\n// Python: ThreadPoolExecutor → TypeScript: Worker pool pattern\nfunction runInWorker(data: number): Promise<number> {\n  return new Promise((resolve, reject) => {\n    const worker = new Worker(new URL(import.meta.url), {\n      workerData: data,\n    });\n    worker.on(\"message\", resolve);\n    worker.on(\"error\", reject);\n  });\n}\n\nif (!isMainThread) {\n  // Worker code (Python equivalent: def worker(x): return x * x)\n  const result = (workerData as number) ** 2;\n  parentPort!.postMessage(result);\n}\n\n// Python: asyncio → TypeScript: async/await (first-class)\nasync function fetchMultiple(urls: string[]): Promise<unknown[]> {\n  const results = await Promise.all(\n    urls.map(async (url) => {\n      const res = await fetch(url);\n      return res.json();\n    })\n  );\n  return results;\n}\n// Python equivalent: asyncio.gather(*[fetch(url) for url in urls])\n\n// Python: concurrent.futures.ProcessPoolExecutor\n// TypeScript: child_process.fork() for CPU-bound work\nimport { fork } from \"node:child_process\";\n\nfunction runInProcess(script: string, data: unknown): Promise<unknown> {\n  return new Promise((resolve, reject) => {\n    const child = fork(script);\n    child.send(data);\n    child.on(\"message\", resolve);\n    child.on(\"error\", reject);\n  });\n}\n\n// Python: multiprocessing.Queue → TypeScript: MessageChannel\nconst { MessageChannel } = require(\"node:worker_threads\");\nconst channel = new MessageChannel();\n\n// Python: GIL has no TypeScript equivalent\n// Node.js uses a single thread for JavaScript but offloads I/O to libuv\n// CPU-bound work blocks the event loop — use Worker threads or child processes\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-utilities",
      children: "TypeScript Utilities"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Thread Pool Executor (simulated) ===\nclass ThreadPool {\n  private workers: Array<() => Promise<void>> = [];\n  private results: unknown[] = [];\n  constructor(private concurrency: number) {}\n  async submit<T>(fn: () => Promise<T>): Promise<void> {\n    this.workers.push(async () => { this.results.push(await fn()); });\n  }\n  async execute<T>(): Promise<T[]> {\n    this.results = [];\n    for (let i = 0; i < this.workers.length; i += this.concurrency) {\n      const batch = this.workers.slice(i, i + this.concurrency);\n      await Promise.all(batch.map((w) => w()));\n    }\n    this.workers = [];\n    return this.results as T[];\n  }\n}\nasync function demoPool(): Promise<void> {\n  const pool = new ThreadPool(3);\n  for (let i = 0; i < 6; i++) {\n    const n = i;\n    pool.submit(async () => { await new Promise((r) => setTimeout(r, 50)); return n * 2; });\n  }\n  const results = await pool.execute<number>();\n  console.log(results); // [0,2,4,6,8,10]\n}\ndemoPool();\n\n// === Promise Pool (concurrency-limited) ===\nasync function promisePool<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {\n  const results: T[] = [];\n  const executing: Promise<void>[] = [];\n  for (const task of tasks) {\n    const p = task().then((r) => { results.push(r); });\n    executing.push(p);\n    if (executing.length >= limit) await Promise.race(executing);\n  }\n  await Promise.all(executing);\n  return results;\n}\n// const urls = [\"url1\", \"url2\", \"url3\"];\n// const fetchers = urls.map((u) => () => fetch(u).then((r) => r.text()));\n// const pages = await promisePool(fetchers, 2);\n\n// === Async Queue with Concurrency ===\nclass AsyncQueue<T> {\n  private queue: T[] = [];\n  private consumers: Array<(x: T) => void> = [];\n  push(item: T): void {\n    if (this.consumers.length > 0) this.consumers.shift()!(item);\n    else this.queue.push(item);\n  }\n  async pop(): Promise<T> {\n    if (this.queue.length > 0) return this.queue.shift()!;\n    return new Promise((r) => this.consumers.push(r));\n  }\n}\nasync function queueDemo(): Promise<void> {\n  const q = new AsyncQueue<number>();\n  setTimeout(() => { q.push(1); q.push(2); q.push(3); }, 10);\n  console.log(await q.pop()); // 1\n  console.log(await q.pop()); // 2\n  console.log(await q.pop()); // 3\n}\nqueueDemo();\n\n// === Parallel Map (Python Pool.map equivalent) ===\nasync function parallelMap<T, U>(arr: T[], fn: (x: T) => Promise<U>, concurrency = 4): Promise<U[]> {\n  return promisePool(arr.map((x) => () => fn(x)), concurrency);\n}\n// const doubled = await parallelMap([1,2,3,4,5], async (x) => x * 2, 3);\n// console.log(doubled); // [2,4,6,8,10]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "typescript-async--concurrency-patterns",
      children: "TypeScript Async & Concurrency Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "// === Promise-based async (Python: asyncio) ===\nasync function fetchData(url: string): Promise<string> {\n  const response = await fetch(url);\n  return response.text();\n}\n\n// === Parallel execution (Python: asyncio.gather) ===\nasync function parallel<T>(tasks: (() => Promise<T>)[]): Promise<T[]> {\n  return Promise.all(tasks.map(t => t()));\n}\nconst urls = [\"https://api.example.com/1\", \"https://api.example.com/2\", \"https://api.example.com/3\"];\nconst results = await parallel(urls.map(url => () => fetchData(url)));\n\n// === Thread pool equivalent (Python: concurrent.futures) ===\nasync function mapParallel<T, R>(items: T[], fn: (item: T) => Promise<R>, concurrency = 4): Promise<R[]> {\n  const results: R[] = [];\n  const executing = new Set<Promise<void>>();\n  const queue = [...items];\n  while (queue.length > 0 || executing.size > 0) {\n    while (queue.length > 0 && executing.size < concurrency) {\n      const item = queue.shift()!;\n      const prom = fn(item).then(r => { results.push(r); });\n      executing.add(prom);\n      prom.finally(() => executing.delete(prom));\n    }\n    if (executing.size > 0) await Promise.race(executing);\n  }\n  return results;\n}\nconst squares = await mapParallel([1, 2, 3, 4, 5], async (n) => {\n  await new Promise(r => setTimeout(r, 10));\n  return n * n;\n});\nconsole.log(squares); // [1, 4, 9, 16, 25]\n\n// === Async Queue (Python: asyncio.Queue) ===\nclass AsyncQueue<T> {\n  private items: T[] = [];\n  private resolvers: ((value: T) => void)[] = [];\n  async push(item: T): Promise<void> {\n    if (this.resolvers.length > 0) this.resolvers.shift()!(item);\n    else this.items.push(item);\n  }\n  async pop(): Promise<T> {\n    if (this.items.length > 0) return this.items.shift()!;\n    return new Promise(resolve => this.resolvers.push(resolve));\n  }\n  get length(): number { return this.items.length - this.resolvers.length; }\n}\n\n// === Async Event Emitter ===\nclass AsyncEventEmitter {\n  private listeners = new Map<string, ((...args: unknown[]) => void)[]>();\n  on(event: string, listener: (...args: unknown[]) => void): void {\n    if (!this.listeners.has(event)) this.listeners.set(event, []);\n    this.listeners.get(event)!.push(listener);\n  }\n  emit(event: string, ...args: unknown[]): void {\n    this.listeners.get(event)?.forEach(l => l(...args));\n  }\n  async emitAsync(event: string, ...args: unknown[]): Promise<void> {\n    await Promise.all(this.listeners.get(event)?.map(l => Promise.resolve(l(...args))) ?? []);\n  }\n}\n\n// === Worker Pool ===\nclass WorkerPool {\n  private queue: (() => Promise<void>)[] = [];\n  private active = 0;\n  constructor(private size: number) {}\n  async run<T>(fn: () => Promise<T>): Promise<T> {\n    return new Promise((resolve, reject) => {\n      const task = async () => { try { resolve(await fn()); } catch (e) { reject(e); } };\n      this.queue.push(task);\n      this.processNext();\n    });\n  }\n  private async processNext(): Promise<void> {\n    if (this.active >= this.size || this.queue.length === 0) return;\n    this.active++;\n    const task = this.queue.shift()!;\n    await task();\n    this.active--;\n    this.processNext();\n  }\n}\nconst pool = new WorkerPool(2);\nconst outputs = await Promise.all([1, 2, 3, 4].map(n => pool.run(async () => {\n  await new Promise(r => setTimeout(r, 100));\n  return n * 2;\n})));\nconsole.log(outputs);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The GIL limits pure Python CPU-bound code to one core. Threading only helps I/O-bound tasks."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ThreadPoolExecutor for network calls, file I/O, and database queries."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ProcessPoolExecutor or multiprocessing.Pool for CPU-intensive computations."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "joblib provides a high-level API optimized for ML workflows with transparent batching and memmap support."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Shared memory (shared_memory module) avoids serialization overhead for large NumPy arrays."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "BLAS-level parallelism (OMP_NUM_THREADS) makes NumPy operations multi-core without Python-level parallelism."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose asyncio for very high connection counts, threading for moderate I/O, and multiprocessing for CPU work."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "basic",
      children: "Basic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a script that downloads 10 URLs using ThreadPoolExecutor and measures the total time vs sequential download."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modify the SafeCounter example to use multiprocessing instead of threading. What happens and why?"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use ProcessPoolExecutor to compute the sum of squares for numbers 0-10_000_000 in parallel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate",
      children: "Intermediate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare the performance of ThreadPoolExecutor vs ProcessPoolExecutor for a function that alternates between CPU computation and time.sleep. Explain the results."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a producer-consumer pattern where a producer generates 1000 random arrays and multiple worker processes compute their means, using multiprocessing.Queue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a grid search for a RandomForestClassifier with 3 parameters (n_estimators, max_depth, min_samples_split) using joblib.Parallel."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced",
      children: "Advanced"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "7",
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a parallel data processing pipeline that reads a large CSV file (100M rows), splits it by a categorical column, applies rolling window statistics to each group, and writes results. Use chunked processing and joblib."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Benchmark the serialization overhead of passing a 100MB NumPy array to ProcessPoolExecutor workers. Implement a shared_memory alternative and compare wall-clock time."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement an ensemble of 20 XGBoost classifiers trained in parallel, with results aggregated via majority voting. Handle partial failures gracefully (one model may fail to converge)."
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