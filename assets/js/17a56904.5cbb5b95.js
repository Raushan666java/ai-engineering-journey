"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[90982],{

/***/ 63691
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_oop_cpp_11_file_io_md_17a_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-oop-cpp-11-file-io-md-17a.json
const site_docs_courses_oop_cpp_11_file_io_md_17a_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/oop-cpp/11-file-io","title":"Chapter 11: File I/O","description":"Previous 12-smart-pointers","source":"@site/docs/courses/oop-cpp/11-file-io.md","sourceDirName":"courses/oop-cpp","slug":"/oop-cpp/11-file-io","permalink":"/ai-engineering-journey/oop-cpp/11-file-io","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"id":"11-file-io","slug":"/oop-cpp/11-file-io","title":"Chapter 11: File I/O","sidebar_label":"Chapter 11: File I/O","sidebar_position":11},"sidebar":"course-oop-cpp","previous":{"title":"Chapter 10: STL Algorithms — Master the C++ Standard Template Library","permalink":"/ai-engineering-journey/oop-cpp/10-stl-algorithms"},"next":{"title":"Chapter 12: Smart Pointers","permalink":"/ai-engineering-journey/oop-cpp/12-smart-pointers"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/oop-cpp/11-file-io.md


const frontMatter = {
	id: '11-file-io',
	slug: '/oop-cpp/11-file-io',
	title: 'Chapter 11: File I/O',
	sidebar_label: 'Chapter 11: File I/O',
	sidebar_position: 11
};
const contentTitle = 'Chapter 11: File I/O';

const assets = {

};



const toc = [{
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
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
  "value": "11.1 Introduction to File I/O",
  "id": "111-introduction-to-file-io",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy",
  "level": 3
}, {
  "value": "What is File I/O?",
  "id": "what-is-file-io",
  "level": 3
}, {
  "value": "Types of Files",
  "id": "types-of-files",
  "level": 3
}, {
  "value": "11.2 File Stream Classes → ifstream, ofstream, fstream",
  "id": "112-file-stream-classes--ifstream-ofstream-fstream",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-1",
  "level": 3
}, {
  "value": "Class Hierarchy",
  "id": "class-hierarchy",
  "level": 3
}, {
  "value": "Detailed Class Reference",
  "id": "detailed-class-reference",
  "level": 3
}, {
  "value": "Steps for File I/O",
  "id": "steps-for-file-io",
  "level": 3
}, {
  "value": "Opening a File → Constructor vs open()",
  "id": "opening-a-file--constructor-vs-open",
  "level": 3
}, {
  "value": "Complete Example with Output",
  "id": "complete-example-with-output",
  "level": 3
}, {
  "value": "Dry Run Trace Table → Writing Phase",
  "id": "dry-run-trace-table--writing-phase",
  "level": 3
}, {
  "value": "Dry Run Trace Table → Reading Phase",
  "id": "dry-run-trace-table--reading-phase",
  "level": 3
}, {
  "value": "Complexity Analysis",
  "id": "complexity-analysis",
  "level": 3
}, {
  "value": "Edge Cases → Opening Files",
  "id": "edge-cases--opening-files",
  "level": 3
}, {
  "value": "11.3 File Open Modes",
  "id": "113-file-open-modes",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-2",
  "level": 3
}, {
  "value": "Complete Open Modes Table",
  "id": "complete-open-modes-table",
  "level": 3
}, {
  "value": "Combining Modes (Bitwise OR)",
  "id": "combining-modes-bitwise-or",
  "level": 3
}, {
  "value": "Default Modes by Stream Type",
  "id": "default-modes-by-stream-type",
  "level": 3
}, {
  "value": "Code Example → Different Open Modes",
  "id": "code-example--different-open-modes",
  "level": 3
}, {
  "value": "Dry Run → Append Mode",
  "id": "dry-run--append-mode",
  "level": 3
}, {
  "value": "Edge Cases → Open Modes",
  "id": "edge-cases--open-modes",
  "level": 3
}, {
  "value": "11.4 Reading Text Files",
  "id": "114-reading-text-files",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-3",
  "level": 3
}, {
  "value": "Method 1: Extraction Operator <code>&gt;&gt;</code>",
  "id": "method-1-extraction-operator-",
  "level": 3
}, {
  "value": "Method 2: getline() → Line by Line",
  "id": "method-2-getline--line-by-line",
  "level": 3
}, {
  "value": "Dry Run → getline()",
  "id": "dry-run--getline",
  "level": 3
}, {
  "value": "Method 3: Reading Entire File at Once",
  "id": "method-3-reading-entire-file-at-once",
  "level": 3
}, {
  "value": "Custom Delimiter with getline()",
  "id": "custom-delimiter-with-getline",
  "level": 3
}, {
  "value": "Complexity Analysis → Reading Text",
  "id": "complexity-analysis--reading-text",
  "level": 3
}, {
  "value": "Edge Cases → Reading Text",
  "id": "edge-cases--reading-text",
  "level": 3
}, {
  "value": "11.5 Writing Text Files",
  "id": "115-writing-text-files",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-4",
  "level": 3
}, {
  "value": "Method 1: Insertion Operator <code>&lt;&lt;</code>",
  "id": "method-1-insertion-operator-",
  "level": 3
}, {
  "value": "Method 2: put() → Write Single Character",
  "id": "method-2-put--write-single-character",
  "level": 3
}, {
  "value": "Method 3: write() → Write Raw Bytes",
  "id": "method-3-write--write-raw-bytes",
  "level": 3
}, {
  "value": "Formatting Output",
  "id": "formatting-output",
  "level": 3
}, {
  "value": "11.6 Text vs Binary Mode",
  "id": "116-text-vs-binary-mode",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-5",
  "level": 3
}, {
  "value": "Comparison Table",
  "id": "comparison-table",
  "level": 3
}, {
  "value": "The Newline Translation Problem",
  "id": "the-newline-translation-problem",
  "level": 3
}, {
  "value": "Binary I/O → read() and write()",
  "id": "binary-io--read-and-write",
  "level": 3
}, {
  "value": "Why reinterpret_cast?",
  "id": "why-reinterpret_cast",
  "level": 3
}, {
  "value": "Binary File Size Analysis",
  "id": "binary-file-size-analysis",
  "level": 3
}, {
  "value": "Portability Concerns → Binary Mode",
  "id": "portability-concerns--binary-mode",
  "level": 3
}, {
  "value": "11.7 File Positioning → tellg/tellp, seekg/seekp",
  "id": "117-file-positioning--tellgtellp-seekgseekp",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-6",
  "level": 3
}, {
  "value": "Get Pointer vs Put Pointer",
  "id": "get-pointer-vs-put-pointer",
  "level": 3
}, {
  "value": "Seeking Origins",
  "id": "seeking-origins",
  "level": 3
}, {
  "value": "Complete seekg/seekp Reference",
  "id": "complete-seekgseekp-reference",
  "level": 3
}, {
  "value": "Dry Run → File Positioning",
  "id": "dry-run--file-positioning",
  "level": 3
}, {
  "value": "Random Access Example → CSV Indexing",
  "id": "random-access-example--csv-indexing",
  "level": 3
}, {
  "value": "Complexity Analysis → File Positioning",
  "id": "complexity-analysis--file-positioning",
  "level": 3
}, {
  "value": "Edge Cases → File Positioning",
  "id": "edge-cases--file-positioning",
  "level": 3
}, {
  "value": "11.8 Error Handling",
  "id": "118-error-handling",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-7",
  "level": 3
}, {
  "value": "Stream State Flags",
  "id": "stream-state-flags",
  "level": 3
}, {
  "value": "Checking File Open",
  "id": "checking-file-open",
  "level": 3
}, {
  "value": "Checking Read Operations",
  "id": "checking-read-operations",
  "level": 3
}, {
  "value": "The clear() Function",
  "id": "the-clear-function",
  "level": 3
}, {
  "value": "Exception Handling with exceptions()",
  "id": "exception-handling-with-exceptions",
  "level": 3
}, {
  "value": "Complete Error Handling Checklist",
  "id": "complete-error-handling-checklist",
  "level": 3
}, {
  "value": "Complexity Analysis → Error Handling",
  "id": "complexity-analysis--error-handling",
  "level": 3
}, {
  "value": "Common Mistakes",
  "id": "common-mistakes",
  "level": 3
}, {
  "value": "11.9 String Streams → istringstream, ostringstream, stringstream",
  "id": "119-string-streams--istringstream-ostringstream-stringstream",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-8",
  "level": 3
}, {
  "value": "Class Hierarchy",
  "id": "class-hierarchy-1",
  "level": 3
}, {
  "value": "Header: <code>&lt;sstream&gt;</code>",
  "id": "header-sstream",
  "level": 3
}, {
  "value": "When to Use String Streams",
  "id": "when-to-use-string-streams",
  "level": 3
}, {
  "value": "istringstream → Reading from a String",
  "id": "istringstream--reading-from-a-string",
  "level": 3
}, {
  "value": "ostringstream → Writing to a String",
  "id": "ostringstream--writing-to-a-string",
  "level": 3
}, {
  "value": "stringstream → Bidirectional",
  "id": "stringstream--bidirectional",
  "level": 3
}, {
  "value": "Application 1: Type Conversion (C++ Style)",
  "id": "application-1-type-conversion-c-style",
  "level": 3
}, {
  "value": "Application 2: Parsing CSV Line",
  "id": "application-2-parsing-csv-line",
  "level": 3
}, {
  "value": "Application 3: Building SQL Queries",
  "id": "application-3-building-sql-queries",
  "level": 3
}, {
  "value": "Application 4: Log Message Builder",
  "id": "application-4-log-message-builder",
  "level": 3
}, {
  "value": "Complexity Analysis → String Streams",
  "id": "complexity-analysis--string-streams",
  "level": 3
}, {
  "value": "Edge Cases → String Streams",
  "id": "edge-cases--string-streams",
  "level": 3
}, {
  "value": "11.10 Serialization",
  "id": "1110-serialization",
  "level": 2
}, {
  "value": "Real-World Analogy",
  "id": "real-world-analogy-9",
  "level": 3
}, {
  "value": "What is Serialization?",
  "id": "what-is-serialization",
  "level": 3
}, {
  "value": "Binary Serialization → POD Types",
  "id": "binary-serialization--pod-types",
  "level": 3
}, {
  "value": "Binary Serialization → Handling std::string",
  "id": "binary-serialization--handling-stdstring",
  "level": 3
}, {
  "value": "Dry Run → Serializing Student",
  "id": "dry-run--serializing-student",
  "level": 3
}, {
  "value": "Text Serialization (CSV)",
  "id": "text-serialization-csv",
  "level": 3
}, {
  "value": "Serialization → Handling Containers",
  "id": "serialization--handling-containers",
  "level": 3
}, {
  "value": "Serialization Versioning",
  "id": "serialization-versioning",
  "level": 3
}, {
  "value": "Serialization Methods Comparison",
  "id": "serialization-methods-comparison",
  "level": 3
}, {
  "value": "Complexity Analysis → Serialization",
  "id": "complexity-analysis--serialization",
  "level": 3
}, {
  "value": "Edge Cases → Serialization",
  "id": "edge-cases--serialization",
  "level": 3
}, {
  "value": "11.11 Interview Corner",
  "id": "1111-interview-corner",
  "level": 2
}, {
  "value": "Q1: What is the difference between ifstream, ofstream, and fstream?",
  "id": "q1-what-is-the-difference-between-ifstream-ofstream-and-fstream",
  "level": 3
}, {
  "value": "Q2: How do you check if a file opened successfully?",
  "id": "q2-how-do-you-check-if-a-file-opened-successfully",
  "level": 3
}, {
  "value": "Q3: What happens if you try to open a non-existent file with ofstream?",
  "id": "q3-what-happens-if-you-try-to-open-a-non-existent-file-with-ofstream",
  "level": 3
}, {
  "value": "Q4: What is the difference between text mode and binary mode on Windows?",
  "id": "q4-what-is-the-difference-between-text-mode-and-binary-mode-on-windows",
  "level": 3
}, {
  "value": "Q5: Why is <code>while (!file.eof())</code> wrong?",
  "id": "q5-why-is-while-fileeof-wrong",
  "level": 3
}, {
  "value": "Q6: How do you read an entire file into a string?",
  "id": "q6-how-do-you-read-an-entire-file-into-a-string",
  "level": 3
}, {
  "value": "Q7: How do you read a file backwards (last line first)?",
  "id": "q7-how-do-you-read-a-file-backwards-last-line-first",
  "level": 3
}, {
  "value": "Q8: What is the purpose of tellg() and tellp()?",
  "id": "q8-what-is-the-purpose-of-tellg-and-tellp",
  "level": 3
}, {
  "value": "Q9: How do string streams differ from file streams?",
  "id": "q9-how-do-string-streams-differ-from-file-streams",
  "level": 3
}, {
  "value": "Q10: How do you serialize a class with virtual functions?",
  "id": "q10-how-do-you-serialize-a-class-with-virtual-functions",
  "level": 3
}, {
  "value": "Q11: What is the difference between <code>read()</code>/<code>write()</code> and <code>&lt;&lt;</code>/<code>&gt;&gt;</code>?",
  "id": "q11-what-is-the-difference-between-readwrite-and-",
  "level": 3
}, {
  "value": "Q12: What happens if you don&#39;t close a file?",
  "id": "q12-what-happens-if-you-dont-close-a-file",
  "level": 3
}, {
  "value": "11.12 Real Systems Applications",
  "id": "1112-real-systems-applications",
  "level": 2
}, {
  "value": "1. Configuration File Parser (INI format)",
  "id": "1-configuration-file-parser-ini-format",
  "level": 3
}, {
  "value": "2. Game Save System",
  "id": "2-game-save-system",
  "level": 3
}, {
  "value": "3. Database Page Storage",
  "id": "3-database-page-storage",
  "level": 3
}, {
  "value": "4. Log Rotation System",
  "id": "4-log-rotation-system",
  "level": 3
}, {
  "value": "11.13 Comparison Tables",
  "id": "1113-comparison-tables",
  "level": 2
}, {
  "value": "File I/O Operations Summary",
  "id": "file-io-operations-summary",
  "level": 3
}, {
  "value": "Stream State After Common Operations",
  "id": "stream-state-after-common-operations",
  "level": 3
}, {
  "value": "Error Handling Methods Comparison",
  "id": "error-handling-methods-comparison",
  "level": 3
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
}, {
  "value": "Multiple Choice",
  "id": "multiple-choice",
  "level": 3
}, {
  "value": "True or False",
  "id": "true-or-false",
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
  "value": "Challenge Problems",
  "id": "challenge-problems",
  "level": 3
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    blockquote: "blockquote",
    code: "code",
    details: "details",
    fstream: "fstream",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
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
        id: "chapter-11-file-io",
        children: "Chapter 11: File I/O"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/10-stl-algorithms",
          children: "10-stl-algorithms"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/12-smart-pointers",
          children: "12-smart-pointers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After studying this chapter, students will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the C++ file stream hierarchy (ifstream, ofstream, fstream)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open files in various modes (in, out, app, binary, trunc, ate)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and write text files using extraction/insertion operators and getline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Read and write binary files using read()/write() member functions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between text and binary mode and choose appropriately"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Position the file pointer for random access using seekg/seekp and tellg/tellp"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle file I/O errors using stream state flags and exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use string streams (istringstream, ostringstream, stringstream) for in-memory I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialize and deserialize C++ objects for persistent storage"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Answer interview questions on file I/O confidently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required Knowledge"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "C++ Streams"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Basic understanding of cin/cout from ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<iostream>"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Classes & Objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Chapter 2 → member functions, access specifiers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pointers & References"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Address-of operator, reinterpret_cast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "std::string class basics"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays & Structs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "POD types, fixed-size buffers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "File Stream Classes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifstream, ofstream, fstream with RAII cleanup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File closes automatically when stream goes out of scope"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Opening Modes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append, binary, truncate modes compose with bitwise OR"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check stream state after opening"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reading Text"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "getline reads until delimiter; >> tokenizes on whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Prefer getline over >> for line-oriented input"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text vs Binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary preserves raw bytes; text transforms newlines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use binary mode for non-text data to avoid corruption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Positioning"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "seekg/seekp reposition; tellg/tellp query position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify position before and after seeks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Error Handling"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good/fail/bad/eof flags detect I/O problems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check stream state after every read operation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String Streams"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-memory I/O using same interface as file streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parse strings, format output, convert types without files"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object-to-stream conversion for persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write size-prefixed data for portable formats"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[File Stream Classes] --> B[Open Modes]\n    B --> C[Read Text]\n    B --> D[Write Text]\n    C --> E[Text vs Binary]\n    D --> E\n    E --> F[File Positioning]\n    F --> G[Error Handling]\n    G --> H[String Streams]\n    H --> I[Serialization]\n    I --> J[Interview Corner]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "111-introduction-to-file-io",
      children: "11.1 Introduction to File I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Think of file I/O like a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "filing cabinet"
      }), " in an office:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Filing Cabinet Analogy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Opening a file"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pulling open a drawer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Looking at documents inside"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Writing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Placing new documents in the drawer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File position"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Your finger marking where you stopped reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading the raw ink patterns on paper"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text mode"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading the interpreted words on the page"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "String stream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading a sticky note without putting it in the cabinet"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taking a whole folder and photocopying it exactly"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-file-io",
      children: "What is File I/O?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "File I/O (Input/Output) is the mechanism by which a program reads data from or writes data to files on persistent storage (hard drive, SSD, etc.). Unlike console I/O (cin/cout), file I/O persists across program executions."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Why File I/O Matters:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Persistence"
        }), " → Data survives program termination"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sharing"
        }), " → Multiple programs can exchange data via files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Configuration"
        }), " → Programs read settings from config files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Data Processing"
        }), " → Batch process large datasets stored in files"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Logging"
        }), " → Record program activity for debugging and auditing"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-files",
      children: "Types of Files"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "File Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Content"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Readability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text File"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable characters (ASCII/UTF-8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Readable in any text editor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Configs, logs, CSV, JSON, XML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary File"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw bytes matching memory representation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not human-readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Images, executables, serialized objects, databases"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "112-file-stream-classes--ifstream-ofstream-fstream",
      children: "11.2 File Stream Classes → ifstream, ofstream, fstream"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-1",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File streams are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "different types of doors"
      }), " to a room:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stream Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Door Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What You Can Do"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way window (look only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read the file, cannot modify"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "One-way mail slot (send only)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to the file, cannot read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Revolving door (both ways)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read and write the same file"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class-hierarchy",
      children: "Class Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<iostream>\n  |\n  +-- istream (input stream)    -----> ifstream (input file stream)\n  |\n  +-- ostream (output stream)   -----> ofstream (output file stream)\n  |\n  +-- iostream (bidirectional)  -----> fstream (file stream)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "detailed-class-reference",
      children: "Detailed Class Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Header"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Base Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<fstream>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you only need to read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<fstream>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ostream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::out | ios::trunc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you only need to write"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<fstream>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "iostream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read and write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::in | ios::out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When you need both read and write"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "steps-for-file-io",
      children: "Steps for File I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "STEP 1: Include the header (#include <fstream>)\nSTEP 2: Create a stream object (ifstream, ofstream, or fstream)\nSTEP 3: Open the file (constructor or open() member function)\nSTEP 4: Check if the file opened successfully\nSTEP 5: Perform read/write operations\nSTEP 6: Close the file (close() or let destructor handle it)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "opening-a-file--constructor-vs-open",
      children: "Opening a File → Constructor vs open()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Method 1: Constructor (preferred → RAII)\nstd::ifstream file1(\"data.txt\");\n\n// Method 2: Default constructor + open()\nstd::ifstream file2;\nfile2.open(\"data.txt\");\n\n// Method 3: Constructor with mode flags\nstd::ofstream file3(\"log.txt\", std::ios::app);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-example-with-output",
      children: "Complete Example with Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Program:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    // --- WRITING ---\n    std::ofstream out(\"example.txt\");\n    if (!out) {\n        std::cerr << \"ERROR: Could not open file for writing.\\n\";\n        return 1;\n    }\n\n    out << \"Hello, File I/O!\\n\";\n    out << \"Line 2: The answer is \" << 42 << \"\\n\";\n    out << \"Line 3: Pi ≈ \" << 3.14159 << \"\\n\";\n    out.close();   // explicit close (optional)\n\n    // --- READING ---\n    std::ifstream in(\"example.txt\");\n    if (!in) {\n        std::cerr << \"ERROR: Could not open file for reading.\\n\";\n        return 1;\n    }\n\n    std::string line;\n    while (std::getline(in, line)) {\n        std::cout << \"Read: \" << line << \"\\n\";\n    }\n    // in closes automatically when it goes out of scope (RAII)\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read: Hello, File I/O!\nRead: Line 2: The answer is 42\nRead: Line 3: Pi ≈ 3.14159\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table--writing-phase",
      children: "Dry Run Trace Table → Writing Phase"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "out Stream State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File on Disk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream out(\"example.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true, is_open=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty, truncated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File created/truncated"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out << \"Hello, File I/O!\\n\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Hello, File I/O!\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "String written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out << \"Line 2: ...\" << 42"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Hello...\\nLine 2: The answer is 42\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out << \"Line 3: ...\" << 3.14159"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All three lines written"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Number formatted"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out.close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true, is_open=false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File finalized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Resources released"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run-trace-table--reading-phase",
      children: "Dry Run Trace Table → Reading Phase"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Line"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "in Stream State"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "line"
            }), " Value"]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "std::cout"
            }), " Output"]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream in(\"example.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true, eof=false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline(in, line)"
            }), " → call 1"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Hello, File I/O!\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Read: Hello, File I/O!"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline(in, line)"
            }), " → call 2"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Line 2: The answer is 42\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Read: Line 2: The answer is 42"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline(in, line)"
            }), " → call 3"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Line 3: Pi ≈ 3.14159\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Read: Line 3: Pi ≈ 3.14159"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline(in, line)"
            }), " → call 4"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eof=true, fail=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop exits (no output)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis",
      children: "Complexity Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Time Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Space Complexity"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Opening a file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System call to open file descriptor; constant overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading one character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffered I/O reads a block; subsequent chars from buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reading N characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) (if storing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each character must be copied from kernel to user space"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Writing one character"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) amortized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffered; actual disk write deferred"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Writing N characters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) (if buffered)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Buffered writes grouped into fewer disk operations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Closing a file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flushes buffers and releases file descriptor"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why Not O(1) for N characters?"
      }), " The disk is a mechanical device (HDD) or has limited write cycles (SSD). Each byte must physically alter the storage medium. The OS buffers writes to amortize this cost, but over N bytes, the total work is proportional to N."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--opening-files",
      children: "Edge Cases → Opening Files"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How to Handle"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File does not exist (reading)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifstream constructor fails; stream state = fail"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!file)"
            }), " before reading"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File does not exist (writing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ofstream creates a new file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!file)"
            }), " anyway"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File is read-only (writing)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ofstream fails; stream state = fail"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check stream state or use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::filesystem::permissions"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File path contains spaces"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works if path is properly quoted in string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use raw string literals or escape spaces"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File path too long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor throws (implementation-dependent)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use relative paths under 260 chars (Windows)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open file that is already open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream state = fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Close first or use different stream object"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "113-file-open-modes",
      children: "11.3 File Open Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-2",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Open modes are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "instructions you give a librarian"
      }), " about how you want to use a book:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Librarian Instruction"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I want to read this book\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I want to write in this book (erase what's there first)\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "app"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"I want to add notes at the end only\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Take me to the last page, but I can still flip anywhere\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "trunc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Clear the entire book before I start\""
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Don't translate anything → give me the raw pages\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-open-modes-table",
      children: "Complete Open Modes Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Full Name"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Effect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default for ifstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default for ofstream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Default for fstream"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open for reading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Open for writing (implies trunc unless combined with in, app, or ate)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::app"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always write at the end; file created if it doesn't exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::ate"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "At End"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seek to end immediately after opening"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::trunc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Truncate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "If file exists, discard its contents"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✅ Yes (with out)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::binary"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No newline translation; raw byte I/O"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ No"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "combining-modes-bitwise-or",
      children: "Combining Modes (Bitwise OR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Read and write, no truncation (random access)\nstd::fstream rw(\"data.bin\", std::ios::in | std::ios::out | std::ios::binary);\n\n// Append mode for logs\nstd::ofstream log(\"server.log\", std::ios::app);\n\n// Write only, no truncation (rare)\nstd::ofstream edit(\"config.ini\", std::ios::out | std::ios::in);\n\n// Read from end (ate) in binary\nstd::ifstream tail(\"large.bin\", std::ios::ate | std::ios::binary);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "default-modes-by-stream-type",
      children: "Default Modes by Stream Type"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Stream Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Constructor"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Equivalent Mode Flags"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream fin(\"f.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::in"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream fout(\"f.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out | trunc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::out | ios::trunc"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fstream f(\"f.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in | out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::in | ios::out"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ofstream"
      }), " truncates by default! If you want to append, specify ", (0,jsx_runtime.jsx)(_components.code, {
        children: "app"
      }), " explicitly:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ofstream log(\"log.txt\");          // TRUNCATES the file!\nstd::ofstream log(\"log.txt\", ios::app); // Appends safely\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "code-example--different-open-modes",
      children: "Code Example → Different Open Modes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nint main() {\n    // 1. Write mode (truncates)\n    {\n        std::ofstream f1(\"test.txt\");\n        f1 << \"First write\\n\";\n    }\n\n    // 2. Append mode\n    {\n        std::ofstream f2(\"test.txt\", std::ios::app);\n        f2 << \"Appended line\\n\";\n    }\n\n    // 3. Read the result\n    {\n        std::ifstream f3(\"test.txt\");\n        std::string line;\n        while (std::getline(f3, line))\n            std::cout << line << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "First write\nAppended line\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--append-mode",
      children: "Dry Run → Append Mode"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Content After"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Comment"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream f1(\"test.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File truncated/created"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f1 << \"First write\\n\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "First write\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Destructor closes f1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "First write\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File flushed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream f2(..., app)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "First write\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File NOT truncated (append mode)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "f2 << \"Appended line\\n\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "First write\\nAppended line\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "New content at end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read via ifstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both lines visible"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--open-modes",
      children: "Edge Cases → Open Modes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mode Combination"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out | trunc"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out"
            }), " alone for ofstream → truncates"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "out | app"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write at end only; seekp() has no effect"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in | out"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fstream default; does NOT truncate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "in | out | trunc"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Opens for read/write but truncates first"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "app"
            }), " without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "out"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compiler error (app requires out on non-fstream)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "114-reading-text-files",
      children: "11.4 Reading Text Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-3",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reading a text file is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "eating a sandwich"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "How You Eat"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " (extraction)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taking one bite at a time, chewing each piece separately"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getline()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eating the whole sandwich in one continuous bite per line"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Blending the sandwich and drinking it as a smoothie"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "method-1-extraction-operator-",
      children: ["Method 1: Extraction Operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reads ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "token by token"
      }), " (whitespace-delimited)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::ifstream file(\"scores.txt\");\n    // Assume scores.txt contains: \"Alice 95 Bob 87 Charlie 92\"\n\n    std::string name;\n    int score;\n\n    while (file >> name >> score) {\n        std::cout << name << \" scored \" << score << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice scored 95\nBob scored 87\nCharlie scored 92\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Dry Run:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "score"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "What Happens"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Alice\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "95"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read name then score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Bob\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "87"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read name then score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Charlie\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "92"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read name then score"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eof=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction fails; loop exits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-2-getline--line-by-line",
      children: "Method 2: getline() → Line by Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reads until newline (or custom delimiter)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::ifstream file(\"poem.txt\");\n    // poem.txt:\n    //   Roses are red,\n    //   Violets are blue,\n    //   C++ is powerful,\n    //   And so are you.\n\n    std::string line;\n    int line_num = 1;\n\n    while (std::getline(file, line)) {\n        std::cout << line_num++ << \": \" << line << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "1: Roses are red,\n2: Violets are blue,\n3: C++ is powerful,\n4: And so are you.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--getline",
      children: "Dry Run → getline()"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Iteration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Buffer Before"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "line"
            }), " After"]
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Stream State"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Output"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Roses are red,\\nViolets..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Roses are red,\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "1: Roses are red,"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Violets are blue,\\nC++..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Violets are blue,\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "2: Violets are blue,"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "C++ is powerful,\\nAnd..."
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"C++ is powerful,\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "3: C++ is powerful,"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "And so are you.\\n"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"And so are you.\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "good=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "4: And so are you."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(empty)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "\"\""
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "eof=true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loop exits"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-3-reading-entire-file-at-once",
      children: "Method 3: Reading Entire File at Once"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n#include <sstream>\n\nint main() {\n    // Method 3a: Using istreambuf_iterator\n    {\n        std::ifstream file(\"data.txt\");\n        std::string content(\n            std::istreambuf_iterator<char>(file),\n            std::istreambuf_iterator<char>()\n        );\n        std::cout << \"File size: \" << content.size() << \" chars\\n\";\n    }\n\n    // Method 3b: Using stringstream\n    {\n        std::ifstream file(\"data.txt\");\n        std::stringstream buffer;\n        buffer << file.rdbuf();\n        std::string content = buffer.str();\n        std::cout << \"File size: \" << content.size() << \" chars\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-delimiter-with-getline",
      children: "Custom Delimiter with getline()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::string token;\nwhile (std::getline(file, token, ',')) {   // comma-separated values\n    std::cout << \"Token: \" << token << \"\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--reading-text",
      children: "Complexity Analysis → Reading Text"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " token by token"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(max token)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each token read, converted, and stored"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            }), " line by line"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(longest line)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads to newline, stores in string"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "rdbuf()"
            }), " to stringstream"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads entire file into memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "istreambuf_iterator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads entire file in one shot"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Space Complexity Note:"
      }), " Reading the entire file at once requires O(N) memory. For large files (gigabytes), line-by-line or token-by-token reading is preferred to avoid exhausting RAM."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--reading-text",
      children: "Edge Cases → Reading Text"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Empty file"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            }), " returns false immediately; loop body never executes"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always check return value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File with no trailing newline"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Last line still read correctly by ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Works correctly"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very long line (10 MB)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            }), " allocates a huge string"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set a max length or read in chunks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data in text mode"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "\\r\\n"
            }), " translated to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\n"
            }), " on Windows; binary data corrupted"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use binary mode for non-text"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Whitespace-only lines"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            }), " returns an empty string (not false)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "line.length() > 0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " on empty file"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction fails immediately; stream state = eof"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check state before using values"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "115-writing-text-files",
      children: "11.5 Writing Text Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-4",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Writing to a text file is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "recording a voice memo"
      }), " → everything you say (write) gets captured in order."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "method-1-insertion-operator-",
      children: ["Method 1: Insertion Operator ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nint main() {\n    std::ofstream out(\"report.txt\");\n\n    if (!out) {\n        std::cerr << \"Failed to open report.txt\\n\";\n        return 1;\n    }\n\n    out << \"=== Monthly Report ===\\n\";\n    out << \"Date: 2024-01-15\\n\";\n    out << \"Revenue: $\" << 45230.50 << \"\\n\";\n    out << \"Expenses: $\" << 31200.00 << \"\\n\";\n    out << \"Net Profit: $\" << 14030.50 << \"\\n\";\n\n    out.close();\n    std::cout << \"Report written successfully.\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (console):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Report written successfully.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (report.txt):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "=== Monthly Report ===\nDate: 2024-01-15\nRevenue: $45230.5\nExpenses: $31200\nNet Profit: $14030.5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-2-put--write-single-character",
      children: "Method 2: put() → Write Single Character"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ofstream out(\"letters.txt\");\nout.put('H');\nout.put('e');\nout.put('l');\nout.put('l');\nout.put('o');\nout.put('\\n');\n// File content: \"Hello\\n\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "method-3-write--write-raw-bytes",
      children: "Method 3: write() → Write Raw Bytes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ofstream out(\"data.bin\", std::ios::binary);\nint numbers[] = {1, 2, 3, 4, 5};\nout.write(reinterpret_cast<const char*>(numbers), sizeof(numbers));\n// Writes 20 bytes (5 ints × 4 bytes each)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "formatting-output",
      children: "Formatting Output"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iomanip>   // for setw, setprecision, fixed\n\nint main() {\n    std::ofstream out(\"formatted.txt\");\n\n    double pi = 3.14159265358979;\n\n    out << \"Default:       \" << pi << \"\\n\";\n    out << std::fixed << std::setprecision(2);\n    out << \"Fixed 2 dec:   \" << pi << \"\\n\";\n    out << std::setprecision(6);\n    out << \"Fixed 6 dec:   \" << pi << \"\\n\";\n    out << std::scientific;\n    out << \"Scientific:    \" << pi << \"\\n\";\n\n    // Table formatting\n    out << \"\\n\" << std::left;\n    out << std::setw(10) << \"Name\" << std::setw(10) << \"Score\" << \"\\n\";\n    out << std::setw(10) << \"Alice\" << std::setw(10) << 95 << \"\\n\";\n    out << std::setw(10) << \"Bob\"   << std::setw(10) << 87 << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (formatted.txt):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Default:       3.14159\nFixed 2 dec:   3.14\nFixed 6 dec:   3.141593\nScientific:    3.141593e+00\n\nName      Score\nAlice     95\nBob       87\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "116-text-vs-binary-mode",
      children: "11.6 Text vs Binary Mode"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-5",
      children: "Real-World Analogy"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Like"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Writing a letter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Taking a photocopy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reading"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreting the handwriting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scanning the exact ink pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Translation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Best regards\" → \"Sincerely\" (interpretation)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exact pixel-for-pixel copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Result"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable, may lose some formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not readable, but 100% accurate"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "comparison-table",
      children: "Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Criterion"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text Mode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Mode"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Flag"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default (no flag needed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "std::ios::binary"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Newline Handling"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Translates ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\n"
            }), " ↔ ", (0,jsx_runtime.jsx)(_components.code, {
              children: "\\r\\n"
            }), " on Windows"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No translation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "EOF Marker"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+Z"
            }), " (0x1A) treated as EOF on some systems"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every byte is data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Representation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Characters (ASCII/UTF-8)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw memory bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Human Readable"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Portability"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (text is universal)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (endianness, padding, sizeof)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Precision"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "May lose precision on floating-point formatting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full precision preserved"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (formatting/conversion overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (raw memory copy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "File Size"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Larger (number-to-text conversion expands data)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Smaller (binary representation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Ideal For"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config files, logs, CSV, source code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Images, executables, serialized data, databases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "read()/write()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Possible but not recommended"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The standard approach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsxs)(_components.strong, {
              children: [(0,jsx_runtime.jsx)(_components.code, {
                children: "<<"
              }), " / ", (0,jsx_runtime.jsx)(_components.code, {
                children: ">>"
              })]
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The standard approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not meaningful"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-newline-translation-problem",
      children: "The Newline Translation Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "On Windows, text mode transforms:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " (LF, 0x0A) → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " (CRLF, 0x0D 0x0A)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Read:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This means: writing 100 bytes with 10 newlines in text mode produces 110 bytes on disk."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Demonstration of the difference\n#include <fstream>\n#include <iostream>\n\nint main() {\n    // Text mode write\n    {\n        std::ofstream out(\"text_mode.txt\");   // text mode\n        out << \"Line 1\\nLine 2\\n\";             // \\n → \\r\\n on Windows\n    }\n\n    // Binary mode write (same data)\n    {\n        std::ofstream out(\"binary_mode.txt\", std::ios::binary);\n        out << \"Line 1\\nLine 2\\n\";             // \\n stays \\n\n    }\n\n    // Compare sizes\n    std::ifstream t(\"text_mode.txt\", std::ios::ate | std::ios::binary);\n    std::ifstream b(\"binary_mode.txt\", std::ios::ate | std::ios::binary);\n    std::cout << \"Text mode size:   \" << t.tellg() << \" bytes\\n\";\n    std::cout << \"Binary mode size: \" << b.tellg() << \" bytes\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (Windows):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Text mode size:   16 bytes\nBinary mode size: 14 bytes\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why?"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Line 1\\nLine 2\\n"
      }), " = 14 chars. Text mode writes ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Line 1\\r\\nLine 2\\r\\n"
      }), " = 16 chars."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-io--read-and-write",
      children: "Binary I/O → read() and write()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <cstring>\n\nint main() {\n    // --- Binary Write ---\n    std::ofstream out(\"data.bin\", std::ios::binary);\n\n    int num = 12345;\n    double pi = 3.14159265358979;\n    char text[32] = \"Hello Binary!\";\n\n    out.write(reinterpret_cast<const char*>(&num), sizeof(num));\n    out.write(reinterpret_cast<const char*>(&pi), sizeof(pi));\n    out.write(reinterpret_cast<const char*>(text), sizeof(text));\n    out.close();\n\n    std::cout << \"Written \" << sizeof(num) + sizeof(pi) + sizeof(text)\n              << \" bytes\\n\";\n\n    // --- Binary Read ---\n    std::ifstream in(\"data.bin\", std::ios::binary);\n\n    int num_in;\n    double pi_in;\n    char text_in[32];\n\n    in.read(reinterpret_cast<char*>(&num_in), sizeof(num_in));\n    in.read(reinterpret_cast<char*>(&pi_in), sizeof(pi_in));\n    in.read(reinterpret_cast<char*>(text_in), sizeof(text_in));\n\n    std::cout << \"Read back: num=\" << num_in\n              << \", pi=\" << pi_in\n              << \", text=\" << text_in << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Written 44 bytes\nRead back: num=12345, pi=3.14159, text=Hello Binary!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "why-reinterpret_cast",
      children: "Why reinterpret_cast?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "write()"
      }), " expect ", (0,jsx_runtime.jsx)(_components.code, {
        children: "char*"
      }), " pointers (raw byte views). ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reinterpret_cast"
      }), " tells the compiler:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["\"Treat this ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int*"
        }), " / ", (0,jsx_runtime.jsx)(_components.code, {
          children: "double*"
        }), " as a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char*"
        }), " for byte-level access.\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Without reinterpret_cast:"
      }), " Compiler error (type mismatch).\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Better than C-style cast:"
      }), " More explicit intention; harder to misuse accidentally."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-file-size-analysis",
      children: "Binary File Size Analysis"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Data Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary Representation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Savings"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (42)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["2 bytes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"42\""
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes (0x2A000000)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text wins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "int"
            }), " (1234567)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["7 bytes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"1234567\""
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary wins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (3.14159)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["8 bytes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"3.14159\""
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Equal"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "double"
            }), " (0.0000001)"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["10+ bytes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"1e-07\""
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary wins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "char[100]"
            }), " (\"Hello\")"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["5 bytes (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"Hello\""
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "100 bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Text wins"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "portability-concerns--binary-mode",
      children: "Portability Concerns → Binary Mode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Binary files are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not portable"
      }), " across platforms because:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Endianness:"
        }), " Intel = little-endian; PowerPC/SPARC = big-endian"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "sizeof:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "int"
        }), " is 4 bytes on most but 2 or 8 on some systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Struct padding:"
        }), " Compilers may add different padding between members"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "char signedness:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "char"
        }), " may be signed or unsigned by default"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Endianness example\nint x = 0x01020304;\n// Little-endian memory: 04 03 02 01\n// Big-endian memory:    01 02 03 04\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Solution:"
      }), " Use a serialization library (Protocol Buffers, Boost.Serialization, etc.) or define a portable format with fixed-width types."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "117-file-positioning--tellgtellp-seekgseekp",
      children: "11.7 File Positioning → tellg/tellp, seekg/seekp"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-6",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File positioning is like using a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bookmark"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Function"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bookmark Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What page number am I on?\" (reading)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tellp()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"What page number am I on?\" (writing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Jump to page X\" (reading)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekp(pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Jump to page X\" (writing)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(offset, dir)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "\"Move N pages forward/backward from where I am\""
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "get-pointer-vs-put-pointer",
      children: "Get Pointer vs Put Pointer"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Associated With"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Access via"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "get pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Input operations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracks next byte to read"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "put pointer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Output operations"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tellp()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "seekp()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tracks where next write goes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Both (fstream)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bidirectional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Independent (usually)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "seeking-origins",
      children: "Seeking Origins"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Origin"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Typical Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::beg"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Beginning of file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to absolute position from start"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::cur"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Current position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Relative forward/backward movement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::end"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to position relative to end"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-seekgseekp-reference",
      children: "Complete seekg/seekp Reference"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nint main() {\n    std::fstream file(\"numbers.bin\",\n                      std::ios::in | std::ios::out | std::ios::binary);\n\n    // Prepare data: write 10 integers\n    for (int i = 0; i < 10; ++i) {\n        file.write(reinterpret_cast<const char*>(&i), sizeof(i));\n    }\n\n    // --- Absolute seeking (from beginning) ---\n    file.seekg(0, std::ios::beg);        // Go to byte 0\n    int first;\n    file.read(reinterpret_cast<char*>(&first), sizeof(first));\n    std::cout << \"First: \" << first << \"\\n\";  // 0\n\n    // --- Absolute seeking (from end) ---\n    file.seekg(-sizeof(int), std::ios::end);  // Go to last int\n    int last;\n    file.read(reinterpret_cast<char*>(&last), sizeof(last));\n    std::cout << \"Last: \" << last << \"\\n\";    // 9\n\n    // --- Relative seeking (from current) ---\n    file.seekg(-3 * sizeof(int), std::ios::cur); // Back 3 ints\n    int middle;\n    file.read(reinterpret_cast<char*>(&middle), sizeof(middle));\n    std::cout << \"Three back from end: \" << middle << \"\\n\"; // 7\n\n    // --- Using tellg to get position ---\n    file.seekg(5 * sizeof(int), std::ios::beg);  // Go to int at index 5\n    std::streampos pos = file.tellg();\n    std::cout << \"Current get position: \" << pos << \" bytes\\n\"; // 20\n\n    int value_at_5;\n    file.read(reinterpret_cast<char*>(&value_at_5), sizeof(value_at_5));\n    std::cout << \"Value at position \" << pos << \": \" << value_at_5 << \"\\n\"; // 5\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "First: 0\nLast: 9\nThree back from end: 7\nCurrent get position: 20 bytes\nValue at position 20: 5\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--file-positioning",
      children: "Dry Run → File Positioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Assume file initially contains: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "[0][1][2][3][4][5][6][7][8][9]"
      }), " (40 bytes, 4 bytes per int)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "get Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "put Pointer"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Action"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Initial (after write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 (EOF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40 (EOF)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File written"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(0, beg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to start for reading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(&first, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read int 0 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "first=0"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(-4, end)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "36"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to last int"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(&last, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read int 9 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "last=9"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(-12, cur)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "28"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Back 3 ints from 40"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(&middle, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "32"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read int 7 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "middle=7"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "7"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(20, beg)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jump to byte 20"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "20 → returned"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "20"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read(&v, 4)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "24"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "40"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Read int 5 → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "v=5"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "random-access-example--csv-indexing",
      children: "Random Access Example → CSV Indexing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <vector>\n\nstruct Employee {\n    int id;\n    char name[48];\n    double salary;\n};\n\nint main() {\n    // Write employees\n    std::ofstream out(\"employees.bin\", std::ios::binary);\n    std::vector<Employee> employees = {\n        {101, \"Alice\",   75000.0},\n        {102, \"Bob\",     68000.0},\n        {103, \"Charlie\", 82000.0},\n        {104, \"Diana\",   95000.0}\n    };\n    for (const auto& emp : employees)\n        out.write(reinterpret_cast<const char*>(&emp), sizeof(emp));\n    out.close();\n\n    // Read employee at index 2 (Charlie) without reading all\n    std::ifstream in(\"employees.bin\", std::ios::binary);\n    int index = 2;\n    in.seekg(index * sizeof(Employee), std::ios::beg);\n\n    Employee target;\n    in.read(reinterpret_cast<char*>(&target), sizeof(target));\n\n    std::cout << \"Employee at index \" << index << \": \"\n              << target.name << \" (ID: \" << target.id\n              << \", Salary: $\" << target.salary << \")\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Employee at index 2: Charlie (ID: 103, Salary: $82000)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--file-positioning",
      children: "Complexity Analysis → File Positioning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just moves a file offset number in the OS file table"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns stored file offset value"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Random access read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk can seek to any position (HDD ≈ 10ms, SSD ≈ 0.1ms)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must transfer N bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "seekg"
            }), " past EOF"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation-defined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On read: sets failbit. On write: creates a \"sparse\" file (or extends)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Why is seeking O(1)?"
      }), " The OS maintains a file offset (a single 64-bit integer) for each open file descriptor. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "seekg()"
      }), " simply changes this number. No data is read during the seek → the actual I/O happens on the next ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "write()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--file-positioning",
      children: "Edge Cases → File Positioning"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Prevention"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek past EOF (read)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream state = fail; subsequent read fails"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check file size with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(0, end)"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek past EOF (write)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "File grows; gap bytes are undefined"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not necessarily an error"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Negative seek from beginning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation fails; stream may set failbit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate position >= 0"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek beyond file on read"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial read; stream state = fail"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read in bounded chunks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Mixed get/put on fstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "On some C++98 implementations, need flush/seek between"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In C++11+, simultaneous get/put works safely"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            }), " after failed read"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns -1 (indicator of error)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check stream state before using result"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "118-error-handling",
      children: "11.8 Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-7",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stream state flags are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "dashboard warning lights"
      }), " in a car:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dashboard Light"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Meaning"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "good()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Everything is fine"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fail()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check Engine light"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Something went wrong (recoverable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bad()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Red Temperature light"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serious problem (irrecoverable)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eof()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fuel gauge empty"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reached the end of available data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reset button"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Turn off all warning lights"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stream-state-flags",
      children: "Stream State Flags"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Set When"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Recoverable?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "goodbit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No error flags set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operation succeeds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eofbit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "End of file reached"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read past EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "failbit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Logical error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Format error, non-existent file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "badbit"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read/write error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware failure, disk full"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (usually)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "good()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns true if NO flags set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fail()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns true if failbit OR badbit set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "bad()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns true if badbit set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "eof()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns true if eofbit set"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checking-file-open",
      children: "Checking File Open"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ifstream file(\"data.txt\");\n\n// Method 1: Operator ! (most common)\nif (!file) {\n    std::cerr << \"Failed to open file\\n\";\n    return 1;\n}\n\n// Method 2: fail() member function\nif (file.fail()) {\n    std::cerr << \"Failed to open file\\n\";\n    return 1;\n}\n\n// Method 3: is_open() (different from state)\nif (!file.is_open()) {\n    std::cerr << \"File is not open\\n\";\n    return 1;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsxs)(_components.strong, {
        children: ["Difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!file"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "!file.is_open()"
        }), ":"]
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!file"
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "!file.is_open()"
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File opened successfully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File does not exist"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File opened, then read hits EOF"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["true (", (0,jsx_runtime.jsx)(_components.code, {
              children: "eofbit"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "failbit"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false (still open)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "checking-read-operations",
      children: "Checking Read Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nint main() {\n    std::ifstream file(\"numbers.txt\");\n    // numbers.txt: \"10 20 abc 40\"\n\n    int value;\n    int count = 0;\n\n    while (file >> value) {\n        std::cout << \"Read: \" << value << \"\\n\";\n        count++;\n    }\n\n    if (file.eof()) {\n        std::cout << \"End of file reached after \" << count << \" values.\\n\";\n    } else if (file.fail()) {\n        std::cout << \"Format error at value #\" << (count + 1) << \"\\n\";\n        // Clear error for potential recovery\n        file.clear();\n        std::string junk;\n        file >> junk;\n        std::cout << \"Skipped bad token: '\" << junk << \"'\\n\";\n        // Could continue reading here if needed\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Read: 10\nRead: 20\nFormat error at value #3\nSkipped bad token: 'abc'\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "the-clear-function",
      children: "The clear() Function"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// After a failure, clear() resets the error flags\nfile.clear();            // Clear all error flags\nfile.clear(std::ios::failbit);  // Set specific flag, clear others\nfile.setstate(std::ios::failbit);  // Set flag, keep others\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exception-handling-with-exceptions",
      children: "Exception Handling with exceptions()"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nint main() {\n    std::ifstream file;\n\n    // Enable exceptions on failbit and badbit\n    file.exceptions(std::ios::failbit | std::ios::badbit);\n\n    try {\n        file.open(\"nonexistent.txt\");  // Will throw on failure\n    } catch (const std::ios::failure& e) {\n        std::cerr << \"Exception caught: \" << e.what() << \"\\n\";\n        std::cerr << \"Error code: \" << e.code() << \"\\n\";\n        return 1;\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Exception caught: ios_base::failbit set: iostream stream error\nError code: generic:2\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complete-error-handling-checklist",
      children: "Complete Error Handling Checklist"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "✓ Check if file opened (!file or file.fail())\n✓ Check is_open() for open-status (separate from state)\n✓ Check reads in loop condition (while (file >> x))\n✓ Distinguish EOF from format error (eof() vs fail())\n✓ Use clear() to recover from non-fatal errors\n✓ Use exceptions() for exception-based error handling (optional)\n✓ Check after every read/write in critical code\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--error-handling",
      children: "Complexity Analysis → Error Handling"
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
            children: "Checking stream state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reading a bitmask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Setting a bitmask"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing exception"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) + unwind"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throwing an exception object, stack unwinding (potentially O(stack depth))"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "common-mistakes",
      children: "Common Mistakes"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Mistake"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Wrong Code"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Correct Code"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not checking open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file >> x;"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!file) return; file >> x;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "eof()"
            }), " as loop condition"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (!file.eof())"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "while (file >> x)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Forgetting ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            }), " after EOF"]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reuse stream without ", (0,jsx_runtime.jsx)(_components.code, {
              children: "clear()"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.clear(); file.seekg(0);"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Not distinguishing EOF vs failure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All errors treated as EOF"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Check ", (0,jsx_runtime.jsx)(_components.code, {
              children: "eof()"
            }), " after loop"]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "119-string-streams--istringstream-ostringstream-stringstream",
      children: "11.9 String Streams → istringstream, ostringstream, stringstream"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-8",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["String streams are like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "using a whiteboard"
      }), " instead of writing in a notebook:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notebook (File)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Whiteboard (String Stream)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persists on disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exists only in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Sharing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other programs can read it"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only this program can access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (disk I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast (RAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Purpose"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-term storage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporary data processing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "class-hierarchy-1",
      children: "Class Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<iostream>\n  |\n  +-- istream    -----> istringstream (input string stream)\n  +-- ostream    -----> ostringstream (output string stream)\n  +-- iostream   -----> stringstream (bidirectional string stream)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "header-sstream",
      children: ["Header: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<sstream>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "when-to-use-string-streams",
      children: "When to Use String Streams"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Why String Stream?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parsing strings"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Same ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " interface as files, but data comes from a string"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Formatting output"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Build a complex string using ", (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), ", then extract ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".str()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type conversion"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert between strings and numbers (C++-style)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Tokenization"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Split a string using ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            }), " or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            }), " with delimiter"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Building SQL queries"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Construct dynamic queries with proper formatting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log message formatting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build log entries with timestamps, levels, and variables"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "istringstream--reading-from-a-string",
      children: "istringstream → Reading from a String"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::string data = \"Alice 95 Bob 87 Charlie 92\";\n    std::istringstream iss(data);\n\n    std::string name;\n    int score;\n\n    while (iss >> name >> score) {\n        std::cout << name << \" → \" << score << \"\\n\";\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice → 95\nBob → 87\nCharlie → 92\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ostringstream--writing-to-a-string",
      children: "ostringstream → Writing to a String"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n#include <iomanip>\n\nint main() {\n    std::ostringstream oss;\n\n    std::string name = \"Alice\";\n    int age = 30;\n    double salary = 75000.50;\n\n    oss << \"Employee: \" << name << \"\\n\";\n    oss << \"Age: \" << age << \"\\n\";\n    oss << std::fixed << std::setprecision(2);\n    oss << \"Salary: $\" << salary << \"\\n\";\n\n    std::string report = oss.str();  // Extract the string\n    std::cout << report;\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Employee: Alice\nAge: 30\nSalary: $75000.50\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stringstream--bidirectional",
      children: "stringstream → Bidirectional"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    std::stringstream ss;\n\n    // Write to stringstream\n    ss << \"42 3.14 Hello\";\n\n    // Read from stringstream\n    int num;\n    double pi;\n    std::string word;\n\n    ss >> num >> pi >> word;\n\n    std::cout << \"int:    \" << num << \"\\n\";     // 42\n    std::cout << \"double: \" << pi << \"\\n\";      // 3.14\n    std::cout << \"string: \" << word << \"\\n\";    // Hello\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-1-type-conversion-c-style",
      children: "Application 1: Type Conversion (C++ Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n\ntemplate <typename T>\nstd::string to_string(const T& value) {\n    std::ostringstream oss;\n    oss << value;\n    return oss.str();\n}\n\ntemplate <typename T>\nT from_string(const std::string& str) {\n    T value;\n    std::istringstream iss(str);\n    iss >> value;\n    return value;\n}\n\nint main() {\n    // int to string\n    std::string s1 = to_string(12345);\n    std::cout << \"String: \" << s1 << \" (length: \" << s1.size() << \")\\n\";\n\n    // double to string\n    std::string s2 = to_string(3.14159);\n    std::cout << \"String: \" << s2 << \"\\n\";\n\n    // string to int\n    int n = from_string<int>(\"500\");\n    std::cout << \"Int: \" << n << \"\\n\";\n\n    // string to double\n    double d = from_string<double>(\"2.71828\");\n    std::cout << \"Double: \" << d << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "String: 12345 (length: 5)\nString: 3.14159\nInt: 500\nDouble: 2.71828\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-2-parsing-csv-line",
      children: "Application 2: Parsing CSV Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n#include <vector>\n\nstruct Person {\n    std::string name;\n    int age;\n    double height;\n};\n\nint main() {\n    std::string csv_line = \"Alice,30,5.7\";\n    std::istringstream iss(csv_line);\n\n    Person p;\n    std::string temp;\n\n    std::getline(iss, p.name, ',');\n    std::getline(iss, temp, ',');\n    p.age = std::stoi(temp);\n    std::getline(iss, temp, ',');\n    p.height = std::stod(temp);\n\n    std::cout << p.name << \" | Age: \" << p.age\n              << \" | Height: \" << p.height << \"\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Alice | Age: 30 | Height: 5.7\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-3-building-sql-queries",
      children: "Application 3: Building SQL Queries"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n\nclass QueryBuilder {\n    std::ostringstream oss;\npublic:\n    QueryBuilder& select(const std::string& cols) {\n        oss << \"SELECT \" << cols;\n        return *this;\n    }\n    QueryBuilder& from(const std::string& table) {\n        oss << \" FROM \" << table;\n        return *this;\n    }\n    QueryBuilder& where(const std::string& condition) {\n        oss << \" WHERE \" << condition;\n        return *this;\n    }\n    QueryBuilder& orderBy(const std::string& col, bool asc = true) {\n        oss << \" ORDER BY \" << col << (asc ? \" ASC\" : \" DESC\");\n        return *this;\n    }\n    std::string build() const {\n        return oss.str() + \";\";\n    }\n};\n\nint main() {\n    std::string query = QueryBuilder()\n        .select(\"name, salary\")\n        .from(\"employees\")\n        .where(\"salary > 50000\")\n        .orderBy(\"salary\", false)\n        .build();\n\n    std::cout << query << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "SELECT name, salary FROM employees WHERE salary > 50000 ORDER BY salary DESC;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-4-log-message-builder",
      children: "Application 4: Log Message Builder"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <sstream>\n#include <iostream>\n#include <string>\n#include <chrono>\n#include <ctime>\n\nclass Logger {\npublic:\n    static std::string log(const std::string& level, const std::string& msg) {\n        std::ostringstream oss;\n        auto now = std::chrono::system_clock::now();\n        auto time = std::chrono::system_clock::to_time_t(now);\n        oss << \"[\" << std::ctime(&time);\n        oss.seekp(-1, std::ios::cur);  // remove trailing newline from ctime\n        oss << \"] [\" << level << \"] \" << msg;\n        return oss.str();\n    }\n};\n\nint main() {\n    std::cout << Logger::log(\"INFO\", \"Server started on port 8080\") << \"\\n\";\n    std::cout << Logger::log(\"ERROR\", \"Connection timeout\") << \"\\n\";\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output (approximate):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "[Tue Jan 15 10:30:45 2024] [INFO] Server started on port 8080\n[Tue Jan 15 10:30:45 2024] [ERROR] Connection timeout\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--string-streams",
      children: "Complexity Analysis → String Streams"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Create stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Just initializes a buffer (no allocation yet)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write to stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Appends to internal string; may reallocate"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read from stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Iterates over internal buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".str()"
            }), " extraction"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(1) (C++11 move) or O(N) (copy)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move returns without copying; copy duplicates buffer"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parse CSV line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N) for tokens"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each character examined once"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--string-streams",
      children: "Edge Cases → String Streams"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extraction returns false immediately"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Check stream state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".str()"
            }), " after write"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Returns the current buffered string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".str()"
            }), " to get result"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reusing stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream may be at EOF; state flags set"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: ".clear()"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: ".str(\"\")"
            }), " to reset"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Large string in stringstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory usage increases"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use line-by-line parsing for huge strings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Formatting persisted between writes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Precision/width flags remain"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Reset with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::setprecision(default)"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1110-serialization",
      children: "11.10 Serialization"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "real-world-analogy-9",
      children: "Real-World Analogy"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Serialization is like ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "freezing food"
      }), ":"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Freezing Food"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Serialization"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Original"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fresh ingredients"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Live objects in memory"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freeze and vacuum-pack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Convert object to byte stream"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Put in freezer"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write to file"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Deserialize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thaw and cook"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read bytes and reconstruct object"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Corruption"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Freezer burn"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data format mismatch"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cooking"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microwaving a TV dinner"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Frameworks that automate it"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "what-is-serialization",
      children: "What is Serialization?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Serialization is the process of converting an object's state into a format that can be stored or transmitted and later reconstructed. Deserialization is the reverse process."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Two main approaches:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pros"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cons"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binary Serialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, compact, exact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not portable, not human-readable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical, internal storage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Text Serialization"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Portable, human-readable, debuggable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower, larger file size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config files, data exchange, human inspection"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-serialization--pod-types",
      children: "Binary Serialization → POD Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "POD (Plain Old Data) types can be serialized directly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n\nstruct Point {\n    int x;\n    int y;\n    int z;\n};\n\nint main() {\n    // Serialize\n    Point p1 = {10, 20, 30};\n\n    std::ofstream out(\"point.bin\", std::ios::binary);\n    out.write(reinterpret_cast<const char*>(&p1), sizeof(p1));\n    out.close();\n\n    // Deserialize\n    Point p2 = {};\n\n    std::ifstream in(\"point.bin\", std::ios::binary);\n    in.read(reinterpret_cast<char*>(&p2), sizeof(p2));\n\n    std::cout << \"Deserialized point: (\"\n              << p2.x << \", \" << p2.y << \", \" << p2.z << \")\\n\";\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Deserialized point: (10, 20, 30)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Warning:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sizeof(Point)"
      }), " may be 12 or 16 depending on alignment/padding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "binary-serialization--handling-stdstring",
      children: "Binary Serialization → Handling std::string"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n#include <cstring>\n\nclass Student {\n    std::string name_;\n    int id_;\n    double gpa_;\n\npublic:\n    Student() = default;\n    Student(const std::string& name, int id, double gpa)\n        : name_(name), id_(id), gpa_(gpa) {}\n\n    void save(std::ofstream& out) const {\n        // Write length-prefixed string\n        size_t len = name_.size();\n        out.write(reinterpret_cast<const char*>(&len), sizeof(len));\n        out.write(name_.data(), len);\n\n        // Write POD members\n        out.write(reinterpret_cast<const char*>(&id_), sizeof(id_));\n        out.write(reinterpret_cast<const char*>(&gpa_), sizeof(gpa_));\n    }\n\n    void load(std::ifstream& in) {\n        // Read string length and data\n        size_t len = 0;\n        in.read(reinterpret_cast<char*>(&len), sizeof(len));\n        name_.resize(len);\n        in.read(&name_[0], len);\n\n        // Read POD members\n        in.read(reinterpret_cast<char*>(&id_), sizeof(id_));\n        in.read(reinterpret_cast<char*>(&gpa_), sizeof(gpa_));\n    }\n\n    void print() const {\n        std::cout << \"Student: \" << name_\n                  << \" (ID: \" << id_\n                  << \", GPA: \" << gpa_ << \")\\n\";\n    }\n};\n\nint main() {\n    // Write\n    {\n        std::ofstream out(\"students.bin\", std::ios::binary);\n        Student s1(\"Alice\", 101, 3.9);\n        Student s2(\"Bob\", 102, 3.5);\n        s1.save(out);\n        s2.save(out);\n    }\n\n    // Read\n    {\n        std::ifstream in(\"students.bin\", std::ios::binary);\n        Student s1, s2;\n        s1.load(in);\n        s2.load(in);\n        s1.print();\n        s2.print();\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Student: Alice (ID: 101, GPA: 3.9)\nStudent: Bob (ID: 102, GPA: 3.5)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dry-run--serializing-student",
      children: "Dry Run → Serializing Student"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Write Phase:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Position"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes Written"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Content"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save name \"Alice\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4 (length=5)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "05 00 00 00"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save name data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4→9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5 (\"Alice\")"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "05 00 00 00 41 6C 69 63 65"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save id (101)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9→13"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "... 65 00 00 00"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Save gpa (3.9)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13→21"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "... 66 66 66 66 66 66 0F 40"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Read Phase:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Step"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Bytes Read"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Result"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Position"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read length"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "len=5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "0→4"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read name data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "name_=\"Alice\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4→9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read id"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "id_=101"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9→13"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read gpa"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "gpa_=3.9"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "13→21"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "text-serialization-csv",
      children: "Text Serialization (CSV)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <sstream>\n#include <iostream>\n#include <string>\n#include <vector>\n\nclass Product {\n    std::string name_;\n    double price_;\n    int quantity_;\n\npublic:\n    Product() = default;\n    Product(const std::string& name, double price, int quantity)\n        : name_(name), price_(price), quantity_(quantity) {}\n\n    // CSV serialize → one line per product\n    std::string toCSV() const {\n        std::ostringstream oss;\n        oss << name_ << \",\" << price_ << \",\" << quantity_;\n        return oss.str();\n    }\n\n    static Product fromCSV(const std::string& line) {\n        std::istringstream iss(line);\n        std::string name, priceStr, qtyStr;\n\n        std::getline(iss, name, ',');\n        std::getline(iss, priceStr, ',');\n        std::getline(iss, qtyStr, ',');\n\n        return Product(name,\n                       std::stod(priceStr),\n                       std::stoi(qtyStr));\n    }\n\n    void print() const {\n        std::cout << name_ << \" | $\" << price_\n                  << \" | Qty: \" << quantity_ << \"\\n\";\n    }\n};\n\nint main() {\n    std::vector<Product> products = {\n        {\"Widget\",   19.99, 100},\n        {\"Gadget\",   39.99, 50},\n        {\"Doohickey\", 9.99, 200}\n    };\n\n    // Write CSV\n    {\n        std::ofstream out(\"products.csv\");\n        for (const auto& p : products)\n            out << p.toCSV() << \"\\n\";\n    }\n\n    // Read CSV\n    {\n        std::ifstream in(\"products.csv\");\n        std::string line;\n        while (std::getline(in, line)) {\n            Product p = Product::fromCSV(line);\n            p.print();\n        }\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Widget | $19.99 | Qty: 100\nGadget | $39.99 | Qty: 50\nDoohickey | $9.99 | Qty: 200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "products.csv content:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Widget,19.99,100\nGadget,39.99,50\nDoohickey,9.99,200\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serialization--handling-containers",
      children: "Serialization → Handling Containers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <vector>\n#include <string>\n\nclass Department {\n    std::string name_;\n    std::vector<int> employeeIds_;\n\npublic:\n    void save(std::ofstream& out) const {\n        // Save name (length-prefixed)\n        size_t nameLen = name_.size();\n        out.write(reinterpret_cast<const char*>(&nameLen), sizeof(nameLen));\n        out.write(name_.data(), nameLen);\n\n        // Save vector (count + elements)\n        size_t count = employeeIds_.size();\n        out.write(reinterpret_cast<const char*>(&count), sizeof(count));\n        out.write(reinterpret_cast<const char*>(employeeIds_.data()),\n                  count * sizeof(int));\n    }\n\n    void load(std::ifstream& in) {\n        // Load name\n        size_t nameLen = 0;\n        in.read(reinterpret_cast<char*>(&nameLen), sizeof(nameLen));\n        name_.resize(nameLen);\n        in.read(&name_[0], nameLen);\n\n        // Load vector\n        size_t count = 0;\n        in.read(reinterpret_cast<char*>(&count), sizeof(count));\n        employeeIds_.resize(count);\n        in.read(reinterpret_cast<char*>(employeeIds_.data()),\n                count * sizeof(int));\n    }\n\n    void setData(const std::string& name, const std::vector<int>& ids) {\n        name_ = name;\n        employeeIds_ = ids;\n    }\n\n    void print() const {\n        std::cout << \"Department: \" << name_ << \"\\n\";\n        std::cout << \"Employees: \";\n        for (int id : employeeIds_)\n            std::cout << id << \" \";\n        std::cout << \"\\n\";\n    }\n};\n\nint main() {\n    Department dept;\n    dept.setData(\"Engineering\", {101, 102, 103, 104, 105});\n\n    // Save\n    {\n        std::ofstream out(\"dept.bin\", std::ios::binary);\n        dept.save(out);\n    }\n\n    // Load\n    {\n        Department loaded;\n        std::ifstream in(\"dept.bin\", std::ios::binary);\n        loaded.load(in);\n        loaded.print();\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Department: Engineering\nEmployees: 101 102 103 104 105\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serialization-versioning",
      children: "Serialization Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Always include a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "version number"
      }), " at the start of serialized data:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n\nclass VersionedData {\n    std::string payload_;\npublic:\n    static const uint32_t FORMAT_VERSION = 2;\n\n    void save(std::ofstream& out) const {\n        // Version header → allows future format changes\n        out.write(reinterpret_cast<const char*>(&FORMAT_VERSION),\n                  sizeof(FORMAT_VERSION));\n\n        // Actual data\n        size_t len = payload_.size();\n        out.write(reinterpret_cast<const char*>(&len), sizeof(len));\n        out.write(payload_.data(), len);\n    }\n\n    bool load(std::ifstream& in) {\n        uint32_t version;\n        in.read(reinterpret_cast<char*>(&version), sizeof(version));\n\n        if (version > FORMAT_VERSION) {\n            std::cerr << \"Unsupported format version: \" << version << \"\\n\";\n            return false;\n        }\n\n        size_t len;\n        in.read(reinterpret_cast<char*>(&len), sizeof(len));\n        payload_.resize(len);\n        in.read(&payload_[0], len);\n        return true;\n    }\n\n    void setPayload(const std::string& p) { payload_ = p; }\n    void print() const { std::cout << \"Payload: \" << payload_ << \"\\n\"; }\n};\n\nint main() {\n    VersionedData v1;\n    v1.setPayload(\"Hello, Future!\");\n\n    {\n        std::ofstream out(\"versioned.bin\", std::ios::binary);\n        v1.save(out);\n    }\n\n    {\n        VersionedData v2;\n        std::ifstream in(\"versioned.bin\", std::ios::binary);\n        if (v2.load(in))\n            v2.print();\n    }\n\n    return 0;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Payload: Hello, Future!\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "serialization-methods-comparison",
      children: "Serialization Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Size (N bytes)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Portability"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Raw struct dump"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fastest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "sizeof(T)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (same compiler/hardware)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Trivial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Length-prefixed fields"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good (readable with spec)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSV/JSON text"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "~2x-3x"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (CSV) / Medium (JSON)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Protocol Buffers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (library)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Boost.Serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (template-heavy)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "std::variant approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optimized"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "complexity-analysis--serialization",
      children: "Complexity Analysis → Serialization"
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
            children: "Serialize POD (N bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw memory copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deserialize POD (N bytes)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raw memory copy"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize string (L chars)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(L)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Must write length + characters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serialize vector of M ints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(M)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write count + M elements"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CSV serialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character conversion + text output"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Text deserialization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "O(N)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Character parsing + conversion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "edge-cases--serialization",
      children: "Edge Cases → Serialization"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Problem"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Solution"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Different compilers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different padding/alignment"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "#pragma pack"
            }), " or fixed-width serialization"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Different architectures"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Endianness differences"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use network byte order (", (0,jsx_runtime.jsx)(_components.code, {
              children: "htonl"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "ntohl"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pointer values are meaningless"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Don't serialize pointers; serialize pointed-to data instead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Version mismatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Older code can't read newer format"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Include format version number"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Empty strings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Length = 0, no character data needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Handle len=0 case gracefully"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Very large containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory/time blowup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream, don't buffer; chunk the data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Corrupted data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Invalid sizes, wrong version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate sizes; use checksums (CRC)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1111-interview-corner",
      children: "11.11 Interview Corner"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-the-difference-between-ifstream-ofstream-and-fstream",
      children: "Q1: What is the difference between ifstream, ofstream, and fstream?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Direction"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config readers, log analyzers"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write-only"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log writers, report generators"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "fstream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Read and write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database files, editor buffers"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Key Point:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ofstream"
      }), " truncates by default; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fstream"
      }), " does not."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-you-check-if-a-file-opened-successfully",
      children: "Q2: How do you check if a file opened successfully?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ifstream file(\"data.txt\");\nif (!file) {  // or file.fail()\n    std::cerr << \"Failed to open\\n\";\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "!"
      }), " operator returns true if ", (0,jsx_runtime.jsx)(_components.code, {
        children: "failbit"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "badbit"
      }), " is set. This catches both \"file not found\" and permission errors."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-what-happens-if-you-try-to-open-a-non-existent-file-with-ofstream",
      children: "Q3: What happens if you try to open a non-existent file with ofstream?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ofstream"
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "creates"
      }), " the file if it doesn't exist. If it does exist, it truncates (clears) it by default. To append instead:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ofstream file(\"log.txt\", std::ios::app);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-is-the-difference-between-text-mode-and-binary-mode-on-windows",
      children: "Q4: What is the difference between text mode and binary mode on Windows?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " In text mode:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Writing ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        }), " (0x0A) produces ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " (0x0D 0x0A) on disk"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Reading ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\r\\n"
        }), " converts back to ", (0,jsx_runtime.jsx)(_components.code, {
          children: "\\n"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Binary mode suppresses all translation. This is why binary files (images, executables) must be opened in binary mode → any byte with value 0x0A or 0x0D would be corrupted in text mode."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q5-why-is-while-fileeof-wrong",
      children: ["Q5: Why is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "while (!file.eof())"
      }), " wrong?"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "eof()"
      }), " returns true only AFTER a read attempt fails due to EOF. This means:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The last successful read appears to fail (one extra iteration)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the file has format errors, you get an infinite loop"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Correct:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "while (file >> value) {    // fails at EOF OR format error\n    process(value);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-read-an-entire-file-into-a-string",
      children: "Q6: How do you read an entire file into a string?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "// Method 1: istreambuf_iterator\nstd::ifstream file(\"data.txt\");\nstd::string content(\n    std::istreambuf_iterator<char>(file),\n    std::istreambuf_iterator<char>()\n);\n\n// Method 2: stringstream + rdbuf\nstd::ifstream file2(\"data.txt\");\nstd::stringstream buffer;\nbuffer << file2.rdbuf();\nstd::string content2 = buffer.str();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Method 1 is more idiomatic; Method 2 is more readable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-read-a-file-backwards-last-line-first",
      children: "Q7: How do you read a file backwards (last line first)?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "std::ifstream file(\"log.txt\", std::ios::ate | std::ios::binary);\nif (!file) return;\n\n// Get file size\nstd::streampos size = file.tellg();\n\n// Read backwards in chunks\nstd::streampos pos = size;\nwhile (pos > 0) {\n    file.seekg(--pos);\n    char c;\n    file.get(c);\n    if (c == '\\n') {\n        // Process line (not shown)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or read all lines into a vector and reverse."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-the-purpose-of-tellg-and-tellp",
      children: "Q8: What is the purpose of tellg() and tellp()?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " They return the current position of the get pointer (for reading) and put pointer (for writing) as a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "std::streampos"
      }), " value. Used to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Remember a position for later seeking"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Determine file size: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "seekg(0, end); auto size = tellg();"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Verify positioning after seeks"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-how-do-string-streams-differ-from-file-streams",
      children: "Q9: How do string streams differ from file streams?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File Stream"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "String Stream"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory (RAM)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Speed"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow (I/O)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Persistence"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No (lost when object destroyed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Header"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<fstream>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<sstream>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class names"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifstream/ofstream/fstream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "istringstream/ostringstream/stringstream"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Core insight:"
      }), " String streams use the same interface as file streams, making them interchangeable for testing or when data sources change."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-serialize-a-class-with-virtual-functions",
      children: "Q10: How do you serialize a class with virtual functions?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " Classes with virtual functions have a ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "vtable pointer"
      }), " as an implicit member. Serializing the raw memory includes this pointer, which is meaningless in a new process. Instead:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serialize only the data members (not the vtable)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write a type identifier (e.g., an enum) before the data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "During deserialization, read the type ID and construct the appropriate derived type"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "enum class Type { BASE = 1, DERIVED = 2 };\n\nvoid serialize(std::ofstream& out, const Base& b) {\n    Type t = Type::BASE;\n    out.write(reinterpret_cast<const char*>(&t), sizeof(t));\n    b.save(out);  // virtual save() that writes only data\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "q11-what-is-the-difference-between-readwrite-and-",
      children: ["Q11: What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "read()"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "write()"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<<"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: ">>"
      }), "?"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })]
          }), (0,jsx_runtime.jsxs)(_components.th, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            }), " / ", (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })]
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Format"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Formatted (text)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unformatted (raw bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Whitespace"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Skips whitespace by default"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes everything"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Delimiter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stops at whitespace"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reads exactly N bytes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Type Safety"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-aware (converts)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Not type-aware (raw bytes)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Use Case"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Human-readable data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary data, fixed-size records"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-what-happens-if-you-dont-close-a-file",
      children: "Q12: What happens if you don't close a file?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      }), " The destructor calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "close()"
      }), " automatically (RAII). However:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If the program crashes before destruction, buffered data may be lost"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "On some systems, there's a limit on open file descriptors (ulimit)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "close()"
        }), " allows detecting write errors via the return value:\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-cpp",
            children: "file.close();\nif (file.fail()) { /* flush or disk-full error */ }\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1112-real-systems-applications",
      children: "11.12 Real Systems Applications"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-configuration-file-parser-ini-format",
      children: "1. Configuration File Parser (INI format)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <sstream>\n#include <iostream>\n#include <string>\n#include <map>\n\nclass ConfigParser {\n    std::map<std::string, std::map<std::string, std::string>> data_;\npublic:\n    bool load(const std::string& path) {\n        std::ifstream file(path);\n        if (!file) return false;\n\n        std::string line, currentSection;\n        while (std::getline(file, line)) {\n            // Skip comments and empty lines\n            if (line.empty() || line[0] == ';' || line[0] == '#') continue;\n\n            // Section header [SectionName]\n            if (line[0] == '[') {\n                currentSection = line.substr(1, line.find(']') - 1);\n                continue;\n            }\n\n            // Key=Value\n            auto eq = line.find('=');\n            if (eq != std::string::npos) {\n                std::string key = line.substr(0, eq);\n                std::string val = line.substr(eq + 1);\n                data_[currentSection][key] = val;\n            }\n        }\n        return true;\n    }\n\n    std::string get(const std::string& section,\n                    const std::string& key,\n                    const std::string& def = \"\") const {\n        auto sit = data_.find(section);\n        if (sit == data_.end()) return def;\n        auto kit = sit->second.find(key);\n        return kit == sit->second.end() ? def : kit->second;\n    }\n};\n\n// Usage → reads config files like database servers do\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-game-save-system",
      children: "2. Game Save System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <string>\n#include <vector>\n#include <cstring>\n\nclass Player {\n    char name_[32];\n    int level_;\n    int hp_;\n    int maxHp_;\n    float x_, y_, z_;\n    std::vector<int> inventory_;\n\npublic:\n    Player() = default;\n    Player(const std::string& name, int lvl, int hp, int mx,\n           float x, float y, float z)\n        : level_(lvl), hp_(hp), maxHp_(mx), x_(x), y_(y), z_(z) {\n        std::strncpy(name_, name.c_str(), 31);\n        name_[31] = '\\0';\n    }\n\n    void addItem(int itemId) { inventory_.push_back(itemId); }\n\n    void save(const std::string& path) {\n        std::ofstream out(path, std::ios::binary);\n        if (!out) { std::cerr << \"Save failed!\\n\"; return; }\n\n        // Player struct data\n        out.write(reinterpret_cast<const char*>(this),\n                  sizeof(name_) + sizeof(level_) + sizeof(hp_) +\n                  sizeof(maxHp_) + sizeof(x_) + sizeof(y_) + sizeof(z_));\n\n        // Inventory (size + elements)\n        size_t invSize = inventory_.size();\n        out.write(reinterpret_cast<const char*>(&invSize), sizeof(invSize));\n        out.write(reinterpret_cast<const char*>(inventory_.data()),\n                  invSize * sizeof(int));\n\n        std::cout << \"Game saved to \" << path << \"\\n\";\n    }\n\n    void load(const std::string& path) {\n        std::ifstream in(path, std::ios::binary);\n        if (!in) { std::cerr << \"Load failed!\\n\"; return; }\n\n        in.read(reinterpret_cast<char*>(this),\n                sizeof(name_) + sizeof(level_) + sizeof(hp_) +\n                sizeof(maxHp_) + sizeof(x_) + sizeof(y_) + sizeof(z_));\n\n        size_t invSize;\n        in.read(reinterpret_cast<char*>(&invSize), sizeof(invSize));\n        inventory_.resize(invSize);\n        in.read(reinterpret_cast<char*>(inventory_.data()),\n                invSize * sizeof(int));\n\n        std::cout << \"Game loaded from \" << path << \"\\n\";\n        std::cout << \"Player: \" << name_ << \", Level \"\n                  << level_ << \", HP: \" << hp_ << \"/\" << maxHp_ << \"\\n\";\n    }\n};\n\n// Usage:\n// Player hero(\"Archer\", 5, 75, 100, 10.5f, 20.3f, 0.0f);\n// hero.addItem(101); // Sword of Awesomeness\n// hero.addItem(205); // Health Potion\n// hero.save(\"savegame.sav\");\n// Player restored;\n// restored.load(\"savegame.sav\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-database-page-storage",
      children: "3. Database Page Storage"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Real databases (SQLite, MySQL) use file I/O for persistent page storage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <iostream>\n#include <vector>\n#include <cstring>\n\nconstexpr int PAGE_SIZE = 4096;\nconstexpr int MAGIC = 0xDB1234;\n\nstruct Page {\n    int pageId;\n    char data[PAGE_SIZE - sizeof(int)];\n};\n\nclass SimpleDB {\n    std::fstream file_;\n    int numPages_;\n\npublic:\n    bool open(const std::string& path) {\n        file_.open(path,\n                   std::ios::in | std::ios::out | std::ios::binary);\n        if (!file_) {\n            // Create new database file\n            file_.clear();\n            file_.open(path,\n                       std::ios::in | std::ios::out\n                       | std::ios::trunc | std::ios::binary);\n            if (!file_) return false;\n            // Write header\n            int magic = MAGIC;\n            file_.write(reinterpret_cast<const char*>(&magic), sizeof(magic));\n            numPages_ = 0;\n        } else {\n            int magic;\n            file_.read(reinterpret_cast<char*>(&magic), sizeof(magic));\n            if (magic != MAGIC) return false;\n            // Calculate number of pages from file size\n            file_.seekg(0, std::ios::end);\n            int fileSize = file_.tellg();\n            numPages_ = (fileSize - sizeof(magic)) / sizeof(Page);\n        }\n        return true;\n    }\n\n    bool readPage(int pageId, Page& page) {\n        if (pageId >= numPages_) return false;\n        int offset = sizeof(int) + pageId * sizeof(Page);\n        file_.seekg(offset, std::ios::beg);\n        file_.read(reinterpret_cast<char*>(&page), sizeof(Page));\n        return !file_.fail();\n    }\n\n    bool writePage(int pageId, const Page& page) {\n        int offset = sizeof(int) + pageId * sizeof(Page);\n        file_.seekp(offset, std::ios::beg);\n        file_.write(reinterpret_cast<const char*>(&page), sizeof(Page));\n        file_.flush();\n        if (pageId >= numPages_) numPages_ = pageId + 1;\n        return !file_.fail();\n    }\n\n    void close() { file_.close(); }\n};\n\n// Usage pattern matches how SQLite manages its B-tree pages on disk\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-log-rotation-system",
      children: "4. Log Rotation System"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <fstream>\n#include <sstream>\n#include <iostream>\n#include <string>\n#include <ctime>\n\nclass RotatingLogger {\n    std::string baseName_;\n    int maxSize_;      // max bytes per file\n    int maxFiles_;     // max rotated files to keep\n    std::ofstream current_;\n    int currentSize_;\n\npublic:\n    RotatingLogger(const std::string& baseName,\n                   int maxSize = 1024 * 1024,  // 1 MB\n                   int maxFiles = 5)\n        : baseName_(baseName), maxSize_(maxSize), maxFiles_(maxFiles) {\n        openNewFile();\n    }\n\n    void log(const std::string& level, const std::string& message) {\n        std::ostringstream entry;\n        std::time_t now = std::time(nullptr);\n        entry << \"[\" << std::ctime(&now);\n        entry.seekp(-1, std::ios::cur); // remove trailing \\n\n        entry << \"] [\" << level << \"] \" << message << \"\\n\";\n\n        std::string formatted = entry.str();\n        current_ << formatted;\n        current_.flush();\n        currentSize_ += formatted.size();\n\n        if (currentSize_ >= maxSize_) {\n            current_.close();\n            rotate();\n            openNewFile();\n        }\n    }\n\nprivate:\n    void rotate() {\n        // Delete oldest if maxFiles reached\n        std::string oldest = baseName_ + \".\" + std::to_string(maxFiles_);\n        std::ifstream check(oldest);\n        if (check) {\n            check.close();\n            std::remove(oldest.c_str());\n        }\n\n        // Shift files: .2 -> .3, .1 -> .2\n        for (int i = maxFiles_ - 1; i >= 1; --i) {\n            std::string from = baseName_ + \".\" + std::to_string(i);\n            std::string to = baseName_ + \".\" + std::to_string(i + 1);\n            std::ifstream exists(from);\n            if (exists) {\n                exists.close();\n                std::rename(from.c_str(), to.c_str());\n            }\n        }\n\n        // Rename current log -> .1\n        std::rename(baseName_.c_str(),\n                    (baseName_ + \".1\").c_str());\n    }\n\n    void openNewFile() {\n        current_.open(baseName_, std::ios::app);\n        currentSize_ = 0;\n    }\n};\n\n// Usage:\n// RotatingLogger logger(\"server\", 1048576, 5);\n// logger.log(\"INFO\", \"Server started\");\n// logger.log(\"ERROR\", \"Connection refused: 192.168.1.1\");\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1113-comparison-tables",
      children: "11.13 Comparison Tables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "file-io-operations-summary",
      children: "File I/O Operations Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Text File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Binary File"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for reading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream f(\"f.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ifstream f(\"f.bin\", ios::binary)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for writing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream f(\"f.txt\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream f(\"f.bin\", ios::binary)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Constructor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Open for append"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ofstream f(\"f.txt\", ios::app)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "`ofstream f(\"f.bin\", ios::app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ios::binary)`"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read one word"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file >> word"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ">>"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read one line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getline(file, line)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "getline"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read N bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.read(buf, N)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "read()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write formatted"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file << \"Text\" << num"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "<<"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Write N bytes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "→"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.write(data, N)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "write()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Check position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "tellg()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Seek to position"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.seekg(pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.seekg(pos)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg()"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File size"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg(0, end); size = tellg()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "tellg trick"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Close file"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.close()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "close()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "stream-state-after-common-operations",
      children: "Stream State After Common Operations"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Operation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "good()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "eof()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "fail()"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "bad()"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File opened successfully"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "File failed to open"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Read hit EOF"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Format error (e.g., \"abc\" for int)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware error"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "After clear()"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "true"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "false"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "error-handling-methods-comparison",
      children: "Error Handling Methods Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Best For"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Boolean conversion (", (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!file)"
            }), ")"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Quick open/read check"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (!file) return;"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "State member functions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Detailed diagnostics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "if (file.eof()) ..."
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exception mode (exceptions())"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Clean error propagation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.exceptions(ios::failbit)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return value of read/write"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Checking exact byte count"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "file.read(buf, N); gcount()"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multiple-choice",
      children: "Multiple Choice"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Which header must be included to use file streams?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<iostream>"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<fstream>"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<sstream>"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<filesystem>"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsxs)(_components.summary, {
            children: ["Answer</summary>**B)** `", (0,jsx_runtime.jsx)(_components.fstream, {
              children: "` provides ifstream, ofstream, and fstream."
            })]
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "What is the default mode when opening an ofstream?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::in"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::out | ios::trunc"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::out | ios::app"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::binary"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** ofstream opens in `out | trunc` mode, which truncates (clears) the file."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Which function reads a line from a file into std::string?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file >> line"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.read(line)"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getline(file, line)"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.getline(line)"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `std::getline(file, line)` reads until the delimiter (newline by default)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Which seek direction allows negative offsets?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::beg"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::cur"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ios::end"
          }), "\nD) Both B and C"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**D)** `ios::cur` and `ios::end` both support negative offsets (move backward). `ios::beg` does not."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ios::binary"
            }), " mode prevent on Windows?"]
          }), "\nA) Opening the file\nB) Newline translation (CRLF ↔ LF)\nC) Writing to the file\nD) Reading from the file"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** Binary mode disables newline translation between `\\n` and `\\r\\n`, which is essential for non-text data."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "How do you get the current read position in a file?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.tellp()"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.tellg()"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.position()"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "file.curpos()"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** `tellg()` returns the get (read) position; `tellp()` returns the put (write) position."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Which stream state flag indicates a hardware error?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eofbit"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "failbit"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "badbit"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "goodbit"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `badbit` indicates an irrecoverable I/O error, typically hardware-related."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsxs)(_components.strong, {
            children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
              children: "str()"
            }), " return for a stringstream?"]
          }), "\nA) The character at position 0\nB) The size of the buffer\nC) The underlying string\nD) The error state"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**C)** `.str()` returns a copy (C++11: move) of the underlying string object."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Which class should you use for in-memory output formatting?"
          }), "\nA) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "istringstream"
          }), "\nB) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ostringstream"
          }), "\nC) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ifstream"
          }), "\nD) ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ofstream"
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** `ostringstream` writes to a string buffer that can be extracted via `.str()`."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Why should you include a version number in serialized data?"
          }), "\nA) It makes the file smaller\nB) It allows future format changes while maintaining backward compatibility\nC) It's required by the C++ standard\nD) It prevents file corruption"]
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**B)** A version number lets your code detect and handle different formats as the serialization evolves."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "true-or-false",
      children: "True or False"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary mode files are always smaller than text mode files."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** Small integers (0-9) take 1 byte in text but 4 bytes in binary. Text representation of small values may be smaller."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "seekg and seekp positions are independent on an fstream."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True.** The get pointer and put pointer are separate and can be positioned independently (in C++11+)."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "getline reads the delimiter character and includes it in the string."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** `getline` reads up to and discards the delimiter. The delimiter is NOT included in the result string."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "String streams can be used as function arguments where file streams are expected."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**True (with exceptions).** Since both derive from `istream`/`ostream`, functions taking `istream&` can accept either file or string streams."
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Calling close() on an already-closed file stream causes undefined behavior."
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.details, {
          children: (0,jsx_runtime.jsx)(_components.summary, {
            children: "Answer</summary>**False.** Calling `close()` on a closed stream is safe and does nothing."
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["File I/O in C++ extends the stream model of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cin"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "cout"
      }), " to persistent storage. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "<fstream>"
      }), " library provides three primary classes: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ifstream"
      }), " (input file stream), ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ofstream"
      }), " (output file stream), and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fstream"
      }), " (bidirectional file stream). Each RAII-based class automatically manages file resources via the destructor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key takeaways:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File Stream Classes:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ifstream"
          }), " reads, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ofstream"
          }), " writes, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fstream"
          }), " does both. All follow RAII → resources are released when the object goes out of scope."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Open Modes:"
          }), " Six mode flags (", (0,jsx_runtime.jsx)(_components.code, {
            children: "in"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "out"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "app"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ate"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "trunc"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "binary"
          }), ") combine via bitwise OR to control file access. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ofstream"
          }), " truncates by default; use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "app"
          }), " to preserve existing content."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Text I/O:"
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "getline()"
          }), " for line-oriented reading, ", (0,jsx_runtime.jsx)(_components.code, {
            children: ">>"
          }), " for tokenized reading, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<<"
          }), " for formatted writing."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary I/O:"
          }), " Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "read()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "write()"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "reinterpret_cast<char*>()"
          }), ". Fast and precise but not portable without care → endianness, padding, and type sizes differ across platforms."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "File Positioning:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "seekg"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "seekp"
          }), " reposition the read/write cursor; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tellg"
          }), "/", (0,jsx_runtime.jsx)(_components.code, {
            children: "tellp"
          }), " query the current position. Supports absolute (beg, end) and relative (cur) movement."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Error Handling:"
          }), " Four state flags (", (0,jsx_runtime.jsx)(_components.code, {
            children: "good"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "eof"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fail"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "bad"
          }), ") track stream health. Always check stream state after I/O operations → never ignore failure."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "String Streams:"
          }), " ", (0,jsx_runtime.jsx)(_components.code, {
            children: "<sstream>"
          }), " provides the same interface for in-memory I/O. Use for string parsing, type conversion, and output formatting without touching the disk."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Serialization:"
          }), " Convert objects to byte streams for storage. Use length-prefixed strings, include version numbers, and avoid serializing pointer values. Consider libraries (Protocol Buffers, JSON) for complex or cross-platform needs."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between text mode and binary mode on Windows? Give a concrete example of data corruption that would occur."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the default behavior when opening an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ofstream"
          }), " to an existing file? How would you change it?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Why should you check ", (0,jsx_runtime.jsx)(_components.code, {
            children: "if (!file.eof())"
          }), " after a read loop that terminates on failure?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the four stream state flags and what does each indicate?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tellg"
          }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "tellp"
          }), "? Can they return different values for the same file?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["When would you use a stringstream instead of concatenating strings with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "+"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What are the portability issues with binary file serialization?"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word Frequency Counter:"
          }), " Write a program that reads a text file, counts the frequency of each word (case-insensitive), and writes the results to another file sorted by frequency (descending). Use stringstream to tokenize each line."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Binary Record Manager:"
          }), " Design a binary file format for storing ", (0,jsx_runtime.jsx)(_components.code, {
            children: "struct Employee { int id; char name[64]; double salary; };"
          }), ". Write functions to:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "addEmployee(filename, employee)"
            }), " → append at end"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "getEmployee(filename, id)"
            }), " → search and read by ID"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "listEmployees(filename)"
            }), " → display all records"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "updateSalary(filename, id, newSalary)"
            }), " → random-access update"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Log Analyzer:"
          }), " Write a program that parses a log file format: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "[2024-01-15 10:30:45] [ERROR] Message here"
          }), ". Count errors per hour and output a summary table."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Simple Indexed Database:"
          }), " Implement a file-based key-value store. Design a format with:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A fixed-size header containing a table of offsets"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Support ", (0,jsx_runtime.jsx)(_components.code, {
              children: "insert(key, data)"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "find(key)"
            }), " operations"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Variable-length string values"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "seekg"
            }), "/", (0,jsx_runtime.jsx)(_components.code, {
              children: "seekp"
            }), " for random access"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["An in-memory index (", (0,jsx_runtime.jsx)(_components.code, {
              children: "std::map<std::string, long>"
            }), ") synced to the file header on close"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Serialization Framework:"
          }), " Design a minimal serialization system that can handle ", (0,jsx_runtime.jsx)(_components.code, {
            children: "int"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "double"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::string"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "std::vector<T>"
          }), ". Use a tag byte to identify each type:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x01"
            }), " = int (followed by 4 bytes)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x02"
            }), " = double (followed by 8 bytes)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x03"
            }), " = string (followed by 4-byte length + data)"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "0x04"
            }), " = vector (followed by 4-byte count + elements)"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Archive"
          }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "save()"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "load()"
          }), " overloads for each type."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "File I/O Application"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Config Files"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifstream reads INI/JSON/YAML text configs; stringstream for line parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Game Development"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary serialization of player state, world data, inventory; seekg for level-of-detail loading"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Database Engines"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "fstream for low-level page storage with random access via seekg/seekp"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Logging Systems"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ofstream in append mode; rotating file strategy for multi-file logs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Data Processing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sequential read, transform, write pipeline; stringstream for line-level parsing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Serialization Frameworks"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary serialization with versioning; length-prefixed dynamic data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compilers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifstream reads source code; ofstream writes object/assembly output; file positioning for error reporting"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network Servers"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ofstream for access/error logs; configuration file readers; PID file management"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Proceed to:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp/12-smart-pointers",
          children: "12-smart-pointers"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Return to:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/oop-cpp",
          children: "Course Index"
        })]
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