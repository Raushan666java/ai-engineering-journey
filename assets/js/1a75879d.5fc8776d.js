"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[2369],{

/***/ 18284
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_ai_engineering_placement_01_python_programming_07_file_io_and_exceptions_md_1a7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-ai-engineering-placement-01-python-programming-07-file-io-and-exceptions-md-1a7.json
const site_docs_courses_ai_engineering_placement_01_python_programming_07_file_io_and_exceptions_md_1a7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/ai-engineering-placement/python-programming/07-file-io-and-exceptions","title":"File I/O & Exceptions — Reading, Writing, Error Handling","description":"Learning Objectives","source":"@site/docs/courses/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions.md","sourceDirName":"courses/ai-engineering-placement/01-python-programming","slug":"/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"id":"07-file-io-and-exceptions","slug":"/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions","title":"File I/O & Exceptions — Reading, Writing, Error Handling","sidebar_label":"File I/O & Exceptions — Reading, Writing, Error Handling","sidebar_position":16},"sidebar":"placementSidebar","previous":{"title":"Modules & Packages — Import System, Namespaces, and Packaging","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/06-modules-and-packages"},"next":{"title":"OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods","permalink":"/ai-engineering-journey/ai-engineering-placement/01-python-programming/08-oop-in-python"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions.md


const frontMatter = {
	id: '07-file-io-and-exceptions',
	slug: '/ai-engineering-placement/01-python-programming/07-file-io-and-exceptions',
	title: 'File I/O & Exceptions — Reading, Writing, Error Handling',
	sidebar_label: 'File I/O & Exceptions — Reading, Writing, Error Handling',
	sidebar_position: 16
};
const contentTitle = 'File I/O & Exceptions — Reading, Writing, Error Handling';

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
  "value": "7.1 File Basics",
  "id": "71-file-basics",
  "level": 2
}, {
  "value": "7.2 Context Managers",
  "id": "72-context-managers",
  "level": 2
}, {
  "value": "7.3 Text vs Binary",
  "id": "73-text-vs-binary",
  "level": 2
}, {
  "value": "7.4 Exception Handling",
  "id": "74-exception-handling",
  "level": 2
}, {
  "value": "7.5 Custom Exceptions",
  "id": "75-custom-exceptions",
  "level": 2
}, {
  "value": "7.6 pathlib",
  "id": "76-pathlib",
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
  "value": "7.7 Working with Temporary Files",
  "id": "77-working-with-temporary-files",
  "level": 2
}, {
  "value": "7.8 Advanced Exception Patterns",
  "id": "78-advanced-exception-patterns",
  "level": 2
}, {
  "value": "7.9 File Locking and Concurrency",
  "id": "79-file-locking-and-concurrency",
  "level": 2
}, {
  "value": "7.10 Real-World File Processing",
  "id": "710-real-world-file-processing",
  "level": 2
}, {
  "value": "7.11 Common Pitfalls",
  "id": "711-common-pitfalls",
  "level": 2
}, {
  "value": "7.12 Structured Serialization Formats",
  "id": "712-structured-serialization-formats",
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
        id: "file-io--exceptions--reading-writing-error-handling",
        children: "File I/O & Exceptions — Reading, Writing, Error Handling"
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
            children: "Read/write text files using open() and context managers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle multiple file modes: r, w, a, r+, binary modes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use try/except/else/finally for robust error handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raise and chain custom exceptions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Work with binary files, pickle, and JSON serialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LO6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use pathlib for modern file path management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction",
      children: "Introduction"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "key-terminology",
      children: "Key Terminology"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding file io and exceptions is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how file io and exceptions works in practice."
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
            children: "7.1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File Basics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open(), modes, read/write, close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Context Managers"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["with, ", (0,jsx_runtime.jsx)(_components.strong, {
              children: "enter"
            }), "/", (0,jsx_runtime.jsx)(_components.strong, {
              children: "exit"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text vs Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "encoding, pickle, struct"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exception Handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "try/except/else/finally"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Exceptions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "raise, chaining, assert"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7.6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pathlib"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path, read_text, write_text"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\r\n    A[File Operations] --> B[open/modes]\r\n    B --> C[with Context Manager]\r\n    C --> D[Text vs Binary]\r\n    A --> E[Exceptions]\r\n    E --> F[try/except/else/finally]\r\n    E --> G[Custom Exceptions]\r\n    H[pathlib] --> I[Path methods]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "71-file-basics",
      children: "7.1 File Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "file = open(\"hello.txt\", \"w\", encoding=\"utf-8\")\r\nfile.write(\"Hello, World!\\n\")\r\nfile.write(\"Second line\\n\")\r\nfile.close()\r\n\r\nfile = open(\"hello.txt\", \"r\", encoding=\"utf-8\")\r\ncontent = file.read()\r\nprint(content)  # Hello, World!\\nSecond line\\n\r\nfile.close()\r\n\r\nfile = open(\"hello.txt\", \"r\", encoding=\"utf-8\")\r\nfor line in file:\r\n    print(line.rstrip())\r\nfile.close()\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Position"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read (default)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "w"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write (truncates)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "a"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "r+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read + Write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "rb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "wb"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Start"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "72-context-managers",
      children: "7.2 Context Managers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "with open(\"hello.txt\", \"r\", encoding=\"utf-8\") as f:\r\n    content = f.read()\r\n\r\nwith open(\"output.txt\", \"w\", encoding=\"utf-8\") as f:\r\n    f.write(\"Line 1\\n\")\r\n    f.write(\"Line 2\\n\")\r\n\r\nwith open(\"input.txt\") as fin, open(\"output.txt\", \"w\") as fout:\r\n    for line in fin:\r\n        fout.write(line.upper())\r\n\r\nfrom contextlib import contextmanager\r\n\r\n@contextmanager\r\ndef open_file(name, mode=\"r\"):\r\n    f = open(name, mode, encoding=\"utf-8\")\r\n    try:\r\n        yield f\r\n    finally:\r\n        f.close()\r\n\r\nwith open_file(\"hello.txt\") as f:\r\n    print(f.read())\r\n\r\nfrom contextlib import suppress\r\nwith suppress(FileNotFoundError):\r\n    os.remove(\"temp.txt\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "73-text-vs-binary",
      children: "7.3 Text vs Binary"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "with open(\"image.jpg\", \"rb\") as f:\r\n    raw_bytes = f.read()\r\n    print(f\"Read {len(raw_bytes)} bytes\")\r\n\r\nimport pickle\r\ndata = {\"name\": \"Alice\", \"scores\": [95, 87]}\r\nwith open(\"data.pkl\", \"wb\") as f:\r\n    pickle.dump(data, f)\r\nwith open(\"data.pkl\", \"rb\") as f:\r\n    loaded = pickle.load(f)\r\n\r\nimport json\r\nwith open(\"data.json\", \"w\", encoding=\"utf-8\") as f:\r\n    json.dump(data, f, indent=2)\r\nwith open(\"data.json\", \"r\", encoding=\"utf-8\") as f:\r\n    loaded_json = json.load(f)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "74-exception-handling",
      children: "7.4 Exception Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "def safe_divide(a: float, b: float) -> float:\r\n    try:\r\n        result = a / b\r\n    except ZeroDivisionError:\r\n        print(\"Cannot divide by zero\")\r\n        return float(\"inf\")\r\n    except TypeError as e:\r\n        print(f\"Type error: {e}\")\r\n        raise\r\n    else:\r\n        print(\"Division successful\")\r\n        return result\r\n    finally:\r\n        print(\"Cleanup always runs\")\r\n\r\ntry:\r\n    value = int(input(\"Enter a number: \"))\r\n    result = 100 / value\r\nexcept (ValueError, ZeroDivisionError) as e:\r\n    print(f\"Error: {e}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "75-custom-exceptions",
      children: "7.5 Custom Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "class ValidationError(Exception):\r\n    pass\r\n\r\nclass DatabaseError(Exception):\r\n    def __init__(self, message, query=None):\r\n        self.message = message\r\n        self.query = query\r\n        super().__init__(self.message)\r\n\r\ndef validate_age(age: int):\r\n    if age < 0:\r\n        raise ValidationError(f\"Negative age: {age}\")\r\n    return True\r\n\r\ndef process_file(path):\r\n    try:\r\n        with open(path) as f:\r\n            return f.read()\r\n    except OSError as e:\r\n        raise RuntimeError(f\"Failed: {path}\") from e\r\n\r\nassert 5 > 0, \"Assertion message\"  # disabled with -O flag\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "76-pathlib",
      children: "7.6 pathlib"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from pathlib import Path\r\n\r\np = Path(\"data\") / \"subdir\" / \"file.txt\"\r\nprint(p.suffix)     # .txt\r\nprint(p.stem)       # file\r\nprint(p.name)       # file.txt\r\nprint(p.parent)     # Path(\"data/subdir\")\r\n\r\np2 = Path(\"example.txt\")\r\np2.write_text(\"Hello from pathlib!\", encoding=\"utf-8\")\r\ncontent = p2.read_text(encoding=\"utf-8\")\r\n\r\nfor f in Path(\".\").glob(\"**/*.py\"):\r\n    print(f.name)\r\n\r\nPath(\"output/data\").mkdir(parents=True, exist_ok=True)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-parallel",
      children: "TypeScript Parallel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "import * as fs from \"fs/promises\";\r\n\r\nasync function readFile(path: string): Promise<string> {\r\n    try {\r\n        return await fs.readFile(path, \"utf-8\");\r\n    } catch (error) {\r\n        console.error(\"Error:\", error);\r\n        throw error;\r\n    } finally {\r\n        console.log(\"Cleanup\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always use with statements for file operations (automatic cleanup)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File modes: r (read), w (truncate-write), a (append), b (binary)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JSON for human-readable serialization; pickle for Python objects"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "try/except/else/finally: except handles errors, else runs on success, finally always runs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Exception chaining with raise ... from e preserves original traceback"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom exceptions inherit from Exception (not BaseException)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "pathlib provides OOP file paths (read_text, write_text, glob)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always specify encoding=\"utf-8\" for text files"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use suppress() to ignore expected exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "assert statements for debugging (disabled with -O)"
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
            children: "Read text file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "with open(f) as f: f.read()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "open() without close"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "json.dump for readability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pickle for untrusted data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Class inheriting Exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generic raise Exception"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File existence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path.exists()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "os.path.exists"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Walk directory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path.glob(\"**/*.py\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual os.walk"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Ignore error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "contextlib.suppress()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Empty except: pass"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Chain errors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "raise from e"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Losing original traceback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "interview-qa",
      children: "Interview Q&A"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-q1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q1: r+ vs w+ modes?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "r+: read+write without truncating. w+: truncates file first. Both allow reading and writing."
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
      "data-qid": "p02-s07-q2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q2: How do context managers work?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "__enter__() runs at entry, returns resource. __exit__() runs at exit (even on exception). with statement ensures cleanup."
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
      "data-qid": "p02-s07-q3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q3: Purpose of else in try/except?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Executes only if no exception occurred. Separates success-path code from code that always runs (finally). Prevents accidentally catching exceptions from the success path."
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
      "data-qid": "p02-s07-q4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q4: Create a custom exception?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Inherit from Exception: class MyError(Exception): pass. Add custom fields. Raise with raise MyError(\"msg\"). Catch with except MyError as e."
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
      "data-qid": "p02-s07-q5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q5: What is exception chaining?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "raise ... from e chains exceptions. e.__cause__ holds the original. Useful when low-level error causes high-level error."
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
      "data-qid": "p02-s07-q6",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q6: Why pathlib over os.path?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "OOP: Path objects with methods (read_text, write_text, glob). Cross-platform, composable, more readable than os.path."
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
      "data-qid": "p02-s07-q7",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q7: pickle vs JSON?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "JSON: human-readable, cross-language, limited types. Pickle: Python-only, binary, any object. Pickle unsafe with untrusted data."
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
      "data-qid": "p02-s07-q8",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q8: Read large file without loading entirely?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Iterate line by line: for line in file. Use read(size) for chunks. file.seek() to skip positions. mmap for very large files."
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
      "data-qid": "p02-s07-q9",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q9: What happens if forget to close file?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "File handle stays open, consuming OS resources. GC eventually closes it but timing unpredictable. Using with guarantees immediate cleanup."
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
      "data-qid": "p02-s07-q10",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: [(0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "Q10: Binary vs text modes?"]
      }), "\n  ", (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: "Text: \\n translated to OS line endings, needs encoding. Binary: no translation, returns bytes. Text for .txt/.csv, binary for .jpg/.mp3."
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
      }), ": Which block runs whether or not exception occurred? a) try b) except c) else d) finally"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-quiz1",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: d) finally"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q2"
      }), ": What exception for file not found in r mode? a) FileNotFoundError b) IOError c) OSError d) ValueError"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-quiz2",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: c) OSError (FileNotFoundError is a subclass)"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q3"
      }), ": Path method for file extension? a) .suffix b) .ext c) .extension d) .parts"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-quiz3",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: a) .suffix"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q4"
      }), ": What does assert do on False? a) returns False b) raises AssertionError c) prints warning d) skips"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-quiz4",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) raises AssertionError"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Q5"
      }), ": Which is true about binary mode? a) needs encoding b) returns bytes c) translates \\n d) default mode"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "p02-s07-quiz5",
      children: [(0,jsx_runtime.jsx)(_components.summary, {
        children: "Show Answer"
      }), (0,jsx_runtime.jsx)(_components.div, {
        className: "tp-qa-answer",
        children: (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Answer: b) binary mode returns bytes"
          })
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Read a text file, count lines/words/characters.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Easy"
      }), " — Save dict to JSON, read it back.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Context manager that measures execution time.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Medium"
      }), " — Exception hierarchy for a banking app (InsufficientFunds, AccountNotFound, TransferError).\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Safe file updater writing to temp then atomic rename.\r\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Hard"
      }), " — Recursive directory tree printer using pathlib."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "77-working-with-temporary-files",
      children: "7.7 Working with Temporary Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import tempfile\r\nimport os\r\n\r\n## Temporary file (auto-deleted on close)\r\nwith tempfile.TemporaryFile(mode=\"w+t\", encoding=\"utf-8\") as tf:\r\n    tf.write(\"Temporary data\\n\")\r\n    tf.seek(0)\r\n    print(tf.read())  # Temporary data\r\n\r\n## Named temporary file\r\nwith tempfile.NamedTemporaryFile(delete=False, suffix=\".txt\") as ntf:\r\n    ntf.write(b\"Named temp file\")\r\n    temp_path = ntf.name\r\n\r\nprint(f\"Temp file at: {temp_path}\")\r\nos.unlink(temp_path)  # manually delete\r\n\r\n## Temporary directory\r\nwith tempfile.TemporaryDirectory() as tmpdir:\r\n    file_path = os.path.join(tmpdir, \"test.txt\")\r\n    with open(file_path, \"w\") as f:\r\n        f.write(\"Hello from temp dir\")\r\n    print(os.listdir(tmpdir))  # ['test.txt']\r\n\r\n## Directory auto-deleted after context\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "78-advanced-exception-patterns",
      children: "7.8 Advanced Exception Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## try-except-else-finally complete example\r\ndef process_config(path: str) -> dict:\r\n    try:\r\n        file = open(path, \"r\", encoding=\"utf-8\")\r\n    except FileNotFoundError:\r\n        print(f\"Config not found: {path}\")\r\n        return {}\r\n    except PermissionError:\r\n        print(f\"Permission denied: {path}\")\r\n        return {}\r\n    else:\r\n        with file:\r\n            import json\r\n            try:\r\n                return json.load(file)\r\n            except json.JSONDecodeError as e:\r\n                print(f\"Invalid JSON: {e}\")\r\n                return {}\r\n    finally:\r\n        print(\"Config loading attempt complete\")\r\n\r\n## Exception groups (Python 3.11+)\r\ntry:\r\n    raise ExceptionGroup(\"Multiple errors\", [\r\n        ValueError(\"Invalid value\"),\r\n        TypeError(\"Invalid type\"),\r\n    ])\r\nexcept* ValueError as e:\r\n    print(f\"Value errors: {e.exceptions}\")\r\nexcept* TypeError as e:\r\n    print(f\"Type errors: {e.exceptions}\")\r\n\r\n## Context managers for resource management\r\nclass ManagedDatabase:\r\n    def __init__(self, connection_string: str):\r\n        self.conn = connection_string\r\n\r\n    def __enter__(self):\r\n        print(f\"Connecting to {self.conn}\")\r\n        self.connection = {\"connected\": True}\r\n        return self.connection\r\n\r\n    def __exit__(self, exc_type, exc_val, exc_tb):\r\n        print(\"Closing connection\")\r\n        self.connection[\"connected\"] = False\r\n        if exc_type is not None:\r\n            print(f\"Exception occurred: {exc_val}\")\r\n        return False  # don't suppress exceptions\r\n\r\nwith ManagedDatabase(\"db://localhost\") as db:\r\n    print(db)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "79-file-locking-and-concurrency",
      children: "7.9 File Locking and Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import fcntl  # Unix only; Windows uses msvcrt\r\nimport os\r\n\r\n## Advisory file locking\r\ndef write_with_lock(filepath: str, data: str):\r\n    with open(filepath, \"a\", encoding=\"utf-8\") as f:\r\n        try:\r\n            fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)\r\n            f.write(data + \"\\n\")\r\n        except BlockingIOError:\r\n            print(\"File is locked by another process\")\r\n        finally:\r\n            fcntl.flock(f, fcntl.LOCK_UN)\r\n\r\n## Atomic file write (write to temp, then rename)\r\nimport tempfile\r\ndef atomic_write(filepath: str, data: str):\r\n    dirpath = os.path.dirname(filepath) or \".\"\r\n    with tempfile.NamedTemporaryFile(\r\n        mode=\"w\", dir=dirpath, delete=False, encoding=\"utf-8\"\r\n    ) as tf:\r\n        tf.write(data)\r\n        temp_path = tf.name\r\n    os.replace(temp_path, filepath)  # atomic on POSIX\r\n\r\n## Concurrent logging with Queue\r\nimport threading\r\nfrom queue import Queue\r\n\r\nclass AsyncLogger:\r\n    def __init__(self, filepath: str):\r\n        self.queue: Queue[str] = Queue()\r\n        self.thread = threading.Thread(target=self._writer, daemon=True)\r\n        self.filepath = filepath\r\n        self.thread.start()\r\n\r\n    def _writer(self):\r\n        with open(self.filepath, \"a\", encoding=\"utf-8\") as f:\r\n            while True:\r\n                msg = self.queue.get()\r\n                if msg is None:\r\n                    break\r\n                f.write(msg + \"\\n\")\r\n                f.flush()\r\n\r\n    def log(self, msg: str):\r\n        self.queue.put(msg)\r\n\r\n    def stop(self):\r\n        self.queue.put(None)\r\n        self.thread.join()\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "710-real-world-file-processing",
      children: "7.10 Real-World File Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import csv\r\nimport json\r\nfrom pathlib import Path\r\nfrom typing import Iterator\r\n\r\n## CSV processing pipeline\r\ndef read_csv(path: Path) -> Iterator[dict]:\r\n    with path.open(\"r\", newline=\"\", encoding=\"utf-8\") as f:\r\n        reader = csv.DictReader(f)\r\n        yield from reader\r\n\r\ndef filter_by_column(rows: Iterator[dict], column: str, value: str):\r\n    for row in rows:\r\n        if row.get(column) == value:\r\n            yield row\r\n\r\ndef write_jsonl(rows: Iterator[dict], path: Path):\r\n    with path.open(\"w\", encoding=\"utf-8\") as f:\r\n        for row in rows:\r\n            f.write(json.dumps(row) + \"\\n\")\r\n\r\n## Pipeline usage\r\ninput_path = Path(\"data/sales.csv\")\r\noutput_path = Path(\"data/processed.jsonl\")\r\nrows = read_csv(input_path)\r\nfiltered = filter_by_column(rows, \"status\", \"completed\")\r\nwrite_jsonl(filtered, output_path)\r\n\r\n## Config file handling with fallback\r\nimport configparser\r\n\r\nconfig = configparser.ConfigParser()\r\nconfig.read([\r\n    \"config.default.ini\",\r\n    \"config.local.ini\",\r\n    Path.home() / \".myapp/config.ini\"\r\n])\r\n\r\n## Log file rotation\r\nimport logging\r\nfrom logging.handlers import RotatingFileHandler\r\n\r\nhandler = RotatingFileHandler(\r\n    \"app.log\", maxBytes=1024 * 1024, backupCount=3\r\n)\r\nlogging.basicConfig(\r\n    level=logging.INFO,\r\n    handlers=[handler],\r\n    format=\"%(asctime)s - %(levelname)s - %(message)s\"\r\n)\r\n\r\nlogging.info(\"Application started\")\r\nlogging.error(\"An error occurred\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "711-common-pitfalls",
      children: "7.11 Common Pitfalls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "\r\n## Pitfall 1: Not closing files manually (use with!)\r\nf = open(\"file.txt\", \"r\", encoding=\"utf-8\")\r\ndata = f.read()\r\n\r\n## f.close() forgotten -- resource leak!\r\n\r\n## Solution: with open(\"file.txt\") as f: data = f.read()\r\n\r\n## Pitfall 2: Ignoring encoding\r\nwith open(\"file.txt\", \"r\") as f:  # BAD: platform-dependent encoding\r\n    data = f.read()\r\n\r\n## Always specify: encoding=\"utf-8\"\r\n\r\n## Pitfall 3: Bare except clauses\r\ntry:\r\n    result = risky_operation()\r\nexcept:  # BAD: catches KeyboardInterrupt, SystemExit too\r\n    print(\"Error occurred\")\r\n\r\n## Use: except Exception as e:\r\n\r\n## Pitfall 4: Suppressing exceptions silently\r\ntry:\r\n    func()\r\nexcept Exception:\r\n    pass  # BAD: errors are hidden\r\n\r\n## At least log: except Exception as e: logging.error(e)\r\n\r\n## Pitfall 5: Not handling file modes correctly\r\nwith open(\"file.txt\", \"w\") as f:  # TRUNCATES existing content!\r\n    f.write(\"new content\")\r\n\r\n## Use \"a\" for append, \"r+\" for read/write\r\n\r\n## Pitfall 6: Pickle with untrusted data\r\nimport pickle\r\ndata = pickle.loads(untrusted_bytes)  # BAD: arbitrary code execution\r\n\r\n## Use JSON or other safe formats for untrusted data\r\n\r\n## Pitfall 7: Line ending issues between platforms\r\nwith open(\"file.txt\", \"w\") as f:  # Windows: \\r\\n, Unix: \\n\r\n    f.write(\"line1\\n\")  # might get \\r\\n on Windows\r\n\r\n## Use newline=\"\" parameter for binary compatibility\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "712-structured-serialization-formats",
      children: "7.12 Structured Serialization Formats"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import yaml  # pip install pyyaml\r\n\r\n## YAML configuration\r\nconfig_yaml = \"\"\"\r\nserver:\r\n  host: localhost\r\n  port: 8080\r\ndatabase:\r\n  url: postgresql://localhost/db\r\n  pool_size: 10\r\n\"\"\"\r\nconfig = yaml.safe_load(config_yaml)\r\nprint(config[\"server\"][\"host\"])  # localhost\r\n\r\n## MessagePack (binary JSON alternative)\r\nimport msgpack  # pip install msgpack\r\n\r\ndata = {\"compact\": True, \"values\": [1, 2, 3]}\r\npacked = msgpack.packb(data)\r\nprint(f\"Size: {len(packed)} bytes\")  # smaller than JSON\r\nunpacked = msgpack.unpackb(packed)\r\nprint(unpacked == data)  # True\r\n\r\n## Protocol Buffers (via protobuf library)\r\n\r\n## message.proto:\r\n\r\n## message Person {\r\n\r\n##   string name = 1;\r\n\r\n##   int32 age = 2;\r\n\r\n## }\n"
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
            children: "Explain the core idea of File I/O & Exceptions — Reading, Writing, Error Handling in under 60 seconds, then give a real-world analogy."
          }), " — Structure: definition, how it works in one sentence, why it matters, analogy. Follow-up: what would break if you removed this from a production system?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Design a minimal, well-typed function in this chapter — Reading, Writing, Error Handling."
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
            children: "Describe a production bug caused by misunderstanding this technique — Reading, Writing, Error Handling. How did you diagnose and fix it?"
          }), " — STAR format: situation, task, action, result. Mention logs, reproduction, root-cause analysis, and the regression test you added."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you scale a system using this technique — Reading, Writing, Error Handling from 10 users to 10 million?"
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
            children: "Compare File I/O & Exceptions — Reading, Writing, Error Handling with the closest alternative approach. When would you choose each?"
          }), " — Make a decision matrix: performance, maintainability, ecosystem, learning curve. Follow-up: what would change your decision?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Walk through how you would test a component built on this — Reading, Writing, Error Handling."
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
            children: "How does File I/O & Exceptions — Reading, Writing, Error Handling behave differently at scale — memory, throughput, or precision-wise?"
          }), " — Connect to data pipelines and model training if applicable. Follow-up: what happens to latency as input grows?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How would you make an implementation of this technique — Reading, Writing, Error Handling run faster on GPU hardware?"
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
          children: "Write the smallest possible implementation of this technique — Reading, Writing, Error Handling that is production-quality."
        }), " — Include error handling, type hints, and a one-line docstring. Follow-up: what would you refactor first when it grows?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "resume-tips",
      children: "Resume Tips"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Name File I/O & Exceptions — Reading, Writing, Error Handling explicitly in your skills section, paired with a measurable achievement (\"Reduced X by 40% using File I/O & Exceptions — Reading, Writing, Error Handling\")."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Add a bullet describing a project that applies File I/O & Exceptions — Reading, Writing, Error Handling to real data, with numbers."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mention the tools and libraries you used alongside File I/O & Exceptions — Reading, Writing, Error Handling (linters, test frameworks, profiling tools)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep resume bullets under 15 words and start each with an action verb."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "interview-day-checklist",
      children: "Interview Day Checklist"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Rehearse a 60-second explanation of File I/O & Exceptions — Reading, Writing, Error Handling and one real-world analogy."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare one STAR story about debugging a File I/O & Exceptions — Reading, Writing, Error Handling-related production issue."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Review complexity and edge cases for the classic File I/O & Exceptions — Reading, Writing, Error Handling interview problem."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Have questions ready: how does the team apply File I/O & Exceptions — Reading, Writing, Error Handling in production today?"
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
        }), " File I/O & Exceptions — Reading, Writing, Error Handling builds directly on the fundamentals covered in the earlier chapters of this module. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Every advanced topic in this module assumes the core concepts from the previous chapters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should write at least one code example for File I/O & Exceptions — Reading, Writing, Error Handling before moving to the next chapter. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Active recall with hands-on code beats passive reading for retention."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " The complexity analysis for File I/O & Exceptions — Reading, Writing, Error Handling is the same regardless of input size. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Complexity grows with input size; always state best, average, and worst case."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " Edge cases (empty input, invalid input, boundary values) matter for File I/O & Exceptions — Reading, Writing, Error Handling in production. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "True."
        }), " Most production bugs come from unhandled edge cases."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "True or False:"
        }), " You should memorize the File I/O & Exceptions — Reading, Writing, Error Handling chapter content once and never review it again. — ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "False."
        }), " Spaced repetition (24h, 3 days, 1 week) dramatically improves long-term recall."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "fill-in-the-blank",
      children: "Fill in the Blank"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The chapter that covers File I/O & Exceptions — Reading, Writing, Error Handling is Chapter ___ of this module. — Answer: check the module's table of contents."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The time complexity of the standard approach to 07 File Io And Exceptions is ___. — Answer: O(n) for iteration, O(1) for dict lookup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The main edge case to handle when implementing 07 File Io And Exceptions is ___. — Answer: empty input, None values, type mismatches"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools commonly used to debug File I/O & Exceptions — Reading, Writing, Error Handling issues are ___ and ___. — Answer: refer to the Debugging Guide section of this chapter."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The related topic that connects to File I/O & Exceptions — Reading, Writing, Error Handling in the next chapter is ___. — Answer: see the Next Topic section."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "scenario-questions",
      children: "Scenario Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A teammate ships a change involving File I/O & Exceptions — Reading, Writing, Error Handling that breaks production at 3 AM. — Diagnosis: check the recent diff, reproduce locally with the failing input, check logs. Fix: revert, add a regression test, and review the root cause. Prevention: CI tests on edge cases and code review checklist."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your implementation of this technique — Reading, Writing, Error Handling is correct but too slow for the required latency. — Measure first with a profiler. Common fixes: reduce redundant work, use built-in optimized functions, batch operations, or add caching. Only then consider algorithmic changes."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " A new hire asks you to explain File I/O & Exceptions — Reading, Writing, Error Handling in five minutes before a customer demo. — Use the 3-part answer: what it is (one sentence), how it works (one example), why it matters (one business impact). Then offer to go deeper after the demo."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Scenario:"
          }), " Your team's codebase has three different patterns for File I/O & Exceptions — Reading, Writing, Error Handling and you must standardize. — Write a short ADR (architecture decision record), pick the pattern with best maintainability, migrate incrementally, and add a linter rule to enforce it."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "output-questions",
      children: "Output Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What is the output of the simplest correct implementation of this technique — Reading, Writing, Error Handling on an empty input?"
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
            children: "Complete Medium exercises, explain File I/O & Exceptions — Reading, Writing, Error Handling to someone else"
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
        children: "Always write a one-line example of File I/O & Exceptions — Reading, Writing, Error Handling from memory before opening the chapter — active recall first."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use the chapter's Revision Notes as a checklist: you have mastered File I/O & Exceptions — Reading, Writing, Error Handling when you can explain each bullet."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pair the chapter quiz with the Flashcards: wrong answers become your next study session's focus."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "For interviews, practice explaining File I/O & Exceptions — Reading, Writing, Error Handling twice: once with a technical audience, once with a non-technical audience."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Keep a personal examples file where you collect your own File I/O & Exceptions — Reading, Writing, Error Handling snippets; interviewers love original examples."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "memory-tricks",
      children: "Memory Tricks"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Acronym"
        }), ": build a mnemonic from the 5 key concepts of File I/O & Exceptions — Reading, Writing, Error Handling listed in the Chapter at a Glance table."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Story"
        }), ": link File I/O & Exceptions — Reading, Writing, Error Handling to a familiar story — the analogy in the Visual Analogy section is designed to stick."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Number anchor"
        }), ": remember the complexity of File I/O & Exceptions — Reading, Writing, Error Handling by connecting it to a known algorithm of the same class."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Color code"
        }), ": highlight the Theory, Examples, and Common Mistakes sections in different colors when reviewing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Teach-back"
        }), ": explain File I/O & Exceptions — Reading, Writing, Error Handling to an imaginary junior engineer for 2 minutes — gaps in your explanation are gaps in memory."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "further-reading",
      children: "Further Reading"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Fluent Python' by Luciano Ramalho — the definitive advanced Python book"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "'Python Cookbook' by David Beazley — practical recipes for real problems"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Real Python tutorials: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://realpython.com",
          children: "https://realpython.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Python official docs: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.python.org/3",
          children: "https://docs.python.org/3"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["PEP 8 style guide: ", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://peps.python.org/pep-0008",
          children: "https://peps.python.org/pep-0008"
        }), " I/O & Exceptions — Reading, Writing, Error Handling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "related-topics",
      children: "Related Topics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous chapter"
        }), " in Module 01 — builds the foundation for 07 File Io And Exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Next chapter"
        }), " — extends 07 File Io And Exceptions with advanced techniques"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 07 System Design"
        }), " — how 07 File Io And Exceptions fits into scalable production architectures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 21 Interview Preparation"
        }), " — FAANG-style questions on 07 File Io And Exceptions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Module 19 Capstone Projects"
        }), " — end-to-end application of 07 File Io And Exceptions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "faqs",
      children: "FAQs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Do I need to memorize all of 07 File Io And Exceptions?"
        }), " — Understand the big picture first. Memorize the key patterns via flashcards. Interviewers test understanding, not recitation."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What if I get stuck on an exercise?"
        }), " — Re-read the theory, run the example code, then attempt again. If stuck after 20 minutes, move on and return the next day with fresh eyes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "How much time should I spend on 07 File Io And Exceptions?"
        }), " — 2-3 hours for theory + examples, 3-5 hours for exercises. Total: one focused weekend session."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Is 07 File Io And Exceptions asked in FAANG interviews?"
        }), " — Yes. Check the Interview Q&A section for exact question styles used by Google, Amazon, Microsoft, and AI startups."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "What's the fastest way to master 07 File Io And Exceptions?"
        }), " — Write the core implementation from memory, explain it to someone else, then solve one Hard exercise. Teaching reveals gaps faster than re-reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "important-notes",
      children: "Important Notes"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File I/O & Exceptions — Reading, Writing, Error Handling is a core requirement for the rest of this module — do not skip the examples."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Always analyze complexity (time and space) when working with File I/O & Exceptions — Reading, Writing, Error Handling."
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
        children: "File I/O & Exceptions — Reading, Writing, Error Handling emerged as a standard practice because early systems failed without it — understanding why helps you explain it in interviews."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The tools used for File I/O & Exceptions — Reading, Writing, Error Handling today evolved from simpler versions; the chapter covers the modern, recommended approach."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Interviewers value knowing one historical fact about File I/O & Exceptions — Reading, Writing, Error Handling — it shows genuine interest, not just cramming."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The library/tooling ecosystem around File I/O & Exceptions — Reading, Writing, Error Handling changes quickly; focus on fundamentals that remain stable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "security-considerations",
      children: "Security Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "secrets"
        }), " module instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "random"
        }), " for cryptographic operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate all external inputs with Pydantic before processing"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subprocess.run()"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "shell=False"
        }), " to prevent shell injection"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Store secrets in environment variables or secret managers, never in source code"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Pin dependency versions in requirements.txt and scan with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pip-audit"
        }), " for vulnerabilities"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ml-intuition",
      children: "ML Intuition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python's GIL limits CPU parallelism — use multiprocessing for CPU-bound ML preprocessing, asyncio for I/O-bound API calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NumPy vectorization replaces Python loops with C-level operations — 100-1000x speedup for array operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generators enable processing datasets larger than RAM by yielding one batch at a time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Type hints with mypy catch shape mismatches in tensor operations before runtime"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profiling with cProfile identifies bottlenecks before optimizing — never optimize without measuring first"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "analogies",
      children: "Analogies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "07 File Io And Exceptions is like a GPS navigation system"
          }), ": you define the destination (goal), the system plans the route (algorithm), and recalculates when you take a wrong turn (error handling)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Complexity is like a restaurant kitchen"
          }), ": a single chef (O(n)) handles small orders fine, but 1000 simultaneous orders need parallel chefs (O(log n) with proper indexing)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Edge cases are like stress tests"
          }), ": the happy path is a calm day, but production is Black Friday — design for the worst case."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "The chapter roadmap is a subway map"
          }), ": each section is a station, and skipping one means you miss the connection to the next destination.## Capstone Project Link"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "https://github.com/Raushan666java/ai-engineering-journey",
            children: "Module Capstone: End-to-End Project"
          }), " — this chapter contributes the File I/O & Exceptions — Reading, Writing, Error Handling skills used in the module's capstone project. Complete the exercises here before starting the capstone."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flashcards",
      children: "Flashcards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-07fileioandexceptions-flash1",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the core concept of File I/O & Exceptions — Reading, Writing, Error Handling in one sentence?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is a high-level, dynamically-typed, interpreted language known for its readable syntax, extensive standard library, and dominant position in data science, ML, and backend development."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-07fileioandexceptions-flash2",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the most common mistake engineers make with \n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Most common Python mistake: mutable default arguments. `def f(x=[])` shares the list across all calls. Use `def f(x=None): x = x or []` instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-07fileioandexceptions-flash3",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    What is the time and space complexity of the standard File I/O & Exceptions — Reading, Writing, Error Handling approach?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "List comprehension: O(n). Dict lookup: O(1) average. Sorting: O(n log n). Generator: O(1) memory vs O(n) for list. String concatenation in loop: O(n^2) — use join() instead."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-07fileioandexceptions-flash4",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    When is File I/O & Exceptions — Reading, Writing, Error Handling NOT the right choice?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Python is NOT the right choice when: (1) you need bare-metal performance (use C/Rust), (2) mobile app development, (3) real-time systems requiring microsecond latency."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      className: "tp-qa-card",
      "data-qid": "01pythonprogramming-07fileioandexceptions-flash5",
      children: ["\n  ", (0,jsx_runtime.jsxs)(_components.summary, {
        className: "tp-qa-question",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.span, {
          className: "tp-qa-status"
        }), "\n    How is File I/O & Exceptions — Reading, Writing, Error Handling applied in a real production system?\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.div, {
        className: "tp-qa-answer",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.p, {
          children: "Production Python stack: FastAPI for APIs, Pydantic for validation, SQLAlchemy for ORM, Celery for task queues, pytest for testing, ruff+black for linting, uv for package management."
        }), "\n  "]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "research-references",
      children: "Research References"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Official documentation of the primary library for File I/O & Exceptions — Reading, Writing, Error Handling (linked in Further Reading)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The classic paper or textbook chapter introducing File I/O & Exceptions — Reading, Writing, Error Handling (see References below)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The standard library reference for File I/O & Exceptions — Reading, Writing, Error Handling-related functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Engineering blog posts from companies running File I/O & Exceptions — Reading, Writing, Error Handling in production at scale"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "PEPs and RFCs where applicable (Python and networking standards)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "open-source-tools",
      children: "Open-Source Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ruff"
        }), " — extremely fast Python linter (replaces flake8, isort, pyupgrade)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "black"
        }), " — opinionated code formatter"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "mypy"
        }), " — static type checker"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "pytest"
        }), " — testing framework with fixtures and parametrize"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "uv"
        }), " — fast Python package installer and resolver I/O & Exceptions — Reading, Writing, Error Handling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "debugging-guide",
      children: "Debugging Guide"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 1"
        }), ": Reproduce the failure with the smallest possible input — isolate the bug before changing any code."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 2"
        }), ": Add structured logging at each stage of the 07 File Io And Exceptions pipeline to identify exactly where the failure occurs."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 3"
        }), ": Check the Common Mistakes section — 80% of bugs match one of those patterns."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 4"
        }), ": Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pdb.set_trace()"
        }), " or your IDE debugger to inspect intermediate values at the failure point."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 5"
        }), ": For performance issues, profile with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "cProfile"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "py-spy"
        }), " before optimizing — never guess at bottlenecks."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Step 6"
        }), ": Write a regression test that reproduces the bug before fixing it — this prevents recurrence."]
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
        children: "Explain File I/O & Exceptions — Reading, Writing, Error Handling in 60 seconds."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a minimal working example of File I/O & Exceptions — Reading, Writing, Error Handling."
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
        children: "Tell me about a time you debugged a File I/O & Exceptions — Reading, Writing, Error Handling problem in a project."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How would you design a system where File I/O & Exceptions — Reading, Writing, Error Handling is used at scale?"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from typing import Any, Optional\r\n\r\ndef demonstrate_07_file_io_and_exceptions(input_data: list[Any]) -> Optional[Any]:\r\n    \"\"\"Minimal production scaffold for 07 File Io And Exceptions.\r\n\r\n    Key concepts: variables, functions, OOP, modules\r\n    Complexity: O(n) for iteration, O(1) for dict lookup\r\n    \"\"\"\r\n    if not input_data:\r\n        return None\r\n    # Validate input\r\n    if not isinstance(input_data, (list, tuple)):\r\n        raise TypeError(f\"Expected list, got {type(input_data).__name__}\")\r\n    # Core logic: implement 07 File Io And Exceptions here\r\n    result = input_data[0] if input_data else None\r\n    return result\n"
      })
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
            children: "Explain File I/O & Exceptions — Reading, Writing, Error Handling without notes"
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
          children: "Instagram"
        }), " serves 2B users with a Python/Django backend, proving Python scales with the right architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Dropbox"
        }), " uses Python for their desktop client and backend services"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NASA"
        }), " uses Python for scientific computing and mission analysis"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Google"
        }), " uses Python extensively for internal tooling, ML pipelines, and YouTube's backend"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interview insight"
        }), ": demonstrate Pythonic code — list comprehensions, context managers, generators, and dataclasses show senior-level fluency"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-topic",
      children: "Next Topic"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.a, {
        href: "/ai-engineering-journey/ai-engineering-placement/01-python-programming/08-oop-in-python",
        children: "OOP in Python — Classes, Inheritance, Polymorphism, Dunder Methods"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "limitations",
      children: "Limitations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "File I/O & Exceptions — Reading, Writing, Error Handling, like any technique, is not a silver bullet — it has specific cases where it fits best (covered in the theory)."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The examples in this chapter are simplified for learning; production systems add validation, monitoring, and error handling."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance of File I/O & Exceptions — Reading, Writing, Error Handling depends on input size and distribution — always benchmark for your own data."
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