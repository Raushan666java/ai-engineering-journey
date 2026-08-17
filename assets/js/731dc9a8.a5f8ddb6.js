"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[92229],{

/***/ 19861
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_p_4_exceptions_io_md_731_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-p-4-exceptions-io-md-731.json
const site_docs_courses_java_p_4_exceptions_io_md_731_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/p4-exceptions-io","title":"Exception Handling & I/O","description":"Learning Objectives","source":"@site/docs/courses/java/p4-exceptions-io.md","sourceDirName":"courses/java","slug":"/java/p4-exceptions-io","permalink":"/ai-engineering-journey/java/p4-exceptions-io","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":79,"frontMatter":{"id":"p4-exceptions-io","slug":"/java/p4-exceptions-io","title":"Exception Handling & I/O","sidebar_label":"Exception Handling & I/O","sidebar_position":79},"sidebar":"course-java","previous":{"title":"Java Collections Framework","permalink":"/ai-engineering-journey/java/p3-java-collections"},"next":{"title":"Generics, Annotations & Reflection","permalink":"/ai-engineering-journey/java/p5-generics-reflection"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/p4-exceptions-io.md


const frontMatter = {
	id: 'p4-exceptions-io',
	slug: '/java/p4-exceptions-io',
	title: 'Exception Handling & I/O',
	sidebar_label: 'Exception Handling & I/O',
	sidebar_position: 79
};
const contentTitle = 'Exception Handling & I/O';

const assets = {

};



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
  "value": "1. The Java Exception Hierarchy",
  "id": "1-the-java-exception-hierarchy",
  "level": 2
}, {
  "value": "1.1 Hierarchy Overview",
  "id": "11-hierarchy-overview",
  "level": 3
}, {
  "value": "1.2 Checked vs. Unchecked Exceptions",
  "id": "12-checked-vs-unchecked-exceptions",
  "level": 3
}, {
  "value": "1.3 Common Runtime Exceptions",
  "id": "13-common-runtime-exceptions",
  "level": 3
}, {
  "value": "2. try/catch/finally",
  "id": "2-trycatchfinally",
  "level": 2
}, {
  "value": "2.1 Basic Syntax",
  "id": "21-basic-syntax",
  "level": 3
}, {
  "value": "2.2 Multi-Catch",
  "id": "22-multi-catch",
  "level": 3
}, {
  "value": "2.3 try-with-resources (Java 7+)",
  "id": "23-try-with-resources-java-7",
  "level": 3
}, {
  "value": "2.4 AutoCloseable Interface",
  "id": "24-autocloseable-interface",
  "level": 3
}, {
  "value": "2.5 Suppressed Exceptions",
  "id": "25-suppressed-exceptions",
  "level": 3
}, {
  "value": "2.6 try-with-resources via Reflection (Java 9+)",
  "id": "26-try-with-resources-via-reflection-java-9",
  "level": 3
}, {
  "value": "3. Custom Exceptions",
  "id": "3-custom-exceptions",
  "level": 2
}, {
  "value": "3.1 Extending Exception (Checked)",
  "id": "31-extending-exception-checked",
  "level": 3
}, {
  "value": "3.2 Extending RuntimeException (Unchecked)",
  "id": "32-extending-runtimeexception-unchecked",
  "level": 3
}, {
  "value": "3.3 Using Custom Exceptions",
  "id": "33-using-custom-exceptions",
  "level": 3
}, {
  "value": "3.4 Exception Chaining",
  "id": "34-exception-chaining",
  "level": 3
}, {
  "value": "4. Best Practices",
  "id": "4-best-practices",
  "level": 2
}, {
  "value": "4.1 Fail-Fast",
  "id": "41-fail-fast",
  "level": 3
}, {
  "value": "4.2 Exception Wrapping",
  "id": "42-exception-wrapping",
  "level": 3
}, {
  "value": "4.3 Logging Exceptions",
  "id": "43-logging-exceptions",
  "level": 3
}, {
  "value": "4.4 Never Swallow Exceptions",
  "id": "44-never-swallow-exceptions",
  "level": 3
}, {
  "value": "4.5 API Design with Exceptions",
  "id": "45-api-design-with-exceptions",
  "level": 3
}, {
  "value": "5. The java.io Package",
  "id": "5-the-javaio-package",
  "level": 2
}, {
  "value": "5.1 The File Class",
  "id": "51-the-file-class",
  "level": 3
}, {
  "value": "5.2 Byte Streams: FileInputStream / FileOutputStream",
  "id": "52-byte-streams-fileinputstream--fileoutputstream",
  "level": 3
}, {
  "value": "5.3 Buffered Streams",
  "id": "53-buffered-streams",
  "level": 3
}, {
  "value": "5.4 Character Streams: Reader / Writer",
  "id": "54-character-streams-reader--writer",
  "level": 3
}, {
  "value": "5.5 InputStreamReader / OutputStreamWriter (Bridges)",
  "id": "55-inputstreamreader--outputstreamwriter-bridges",
  "level": 3
}, {
  "value": "5.6 BufferedReader / BufferedWriter",
  "id": "56-bufferedreader--bufferedwriter",
  "level": 3
}, {
  "value": "5.7 PrintWriter",
  "id": "57-printwriter",
  "level": 3
}, {
  "value": "5.8 DataInputStream / DataOutputStream",
  "id": "58-datainputstream--dataoutputstream",
  "level": 3
}, {
  "value": "5.9 ObjectInputStream / ObjectOutputStream (Serialization)",
  "id": "59-objectinputstream--objectoutputstream-serialization",
  "level": 3
}, {
  "value": "6. The java.nio.file Package (NIO.2)",
  "id": "6-the-javaniofile-package-nio2",
  "level": 2
}, {
  "value": "6.1 Path",
  "id": "61-path",
  "level": 3
}, {
  "value": "6.2 The Files Utility Class",
  "id": "62-the-files-utility-class",
  "level": 3
}, {
  "value": "6.3 Walking the File Tree",
  "id": "63-walking-the-file-tree",
  "level": 3
}, {
  "value": "6.4 Directory Stream and Find",
  "id": "64-directory-stream-and-find",
  "level": 3
}, {
  "value": "6.5 WatchService → File Change Monitoring",
  "id": "65-watchservice--file-change-monitoring",
  "level": 3
}, {
  "value": "6.6 FileChannel and Memory-Mapped Files",
  "id": "66-filechannel-and-memory-mapped-files",
  "level": 3
}, {
  "value": "6.7 Scatter / Gather I/O",
  "id": "67-scatter--gather-io",
  "level": 3
}, {
  "value": "6.8 FileChannel Transfer (Zero-Copy)",
  "id": "68-filechannel-transfer-zero-copy",
  "level": 3
}, {
  "value": "7. Serialization Deep Dive",
  "id": "7-serialization-deep-dive",
  "level": 2
}, {
  "value": "7.1 Serializable Interface and serialVersionUID",
  "id": "71-serializable-interface-and-serialversionuid",
  "level": 3
}, {
  "value": "7.2 The transient Keyword",
  "id": "72-the-transient-keyword",
  "level": 3
}, {
  "value": "7.3 Custom readObject / writeObject",
  "id": "73-custom-readobject--writeobject",
  "level": 3
}, {
  "value": "7.4 Externalizable Interface",
  "id": "74-externalizable-interface",
  "level": 3
}, {
  "value": "7.5 Serialization Proxy Pattern",
  "id": "75-serialization-proxy-pattern",
  "level": 3
}, {
  "value": "8. NIO Channels and Buffers",
  "id": "8-nio-channels-and-buffers",
  "level": 2
}, {
  "value": "8.1 ByteBuffer → Heap vs. Direct",
  "id": "81-bytebuffer--heap-vs-direct",
  "level": 3
}, {
  "value": "8.2 SocketChannel and ServerSocketChannel",
  "id": "82-socketchannel-and-serversocketchannel",
  "level": 3
}, {
  "value": "8.3 Non-Blocking Mode with Selector",
  "id": "83-non-blocking-mode-with-selector",
  "level": 3
}, {
  "value": "9. File Handling Patterns",
  "id": "9-file-handling-patterns",
  "level": 2
}, {
  "value": "9.1 Reading Large Files",
  "id": "91-reading-large-files",
  "level": 3
}, {
  "value": "9.2 Temporary Files",
  "id": "92-temporary-files",
  "level": 3
}, {
  "value": "9.3 File Attributes",
  "id": "93-file-attributes",
  "level": 3
}, {
  "value": "9.4 Symbolic Links",
  "id": "94-symbolic-links",
  "level": 3
}, {
  "value": "10. Compression",
  "id": "10-compression",
  "level": 2
}, {
  "value": "10.1 GZIP Compression",
  "id": "101-gzip-compression",
  "level": 3
}, {
  "value": "10.2 ZIP File Handling",
  "id": "102-zip-file-handling",
  "level": 3
}, {
  "value": "10.3 ZipInputStream with Directories",
  "id": "103-zipinputstream-with-directories",
  "level": 3
}, {
  "value": "11. Resource File Reading Patterns",
  "id": "11-resource-file-reading-patterns",
  "level": 2
}, {
  "value": "11.1 Reading from the Classpath",
  "id": "111-reading-from-the-classpath",
  "level": 3
}, {
  "value": "11.2 Spring Boot ResourceLoader",
  "id": "112-spring-boot-resourceloader",
  "level": 3
}, {
  "value": "12. Error Handling Patterns for I/O",
  "id": "12-error-handling-patterns-for-io",
  "level": 2
}, {
  "value": "12.1 Retry Pattern",
  "id": "121-retry-pattern",
  "level": 3
}, {
  "value": "12.2 Fallback Pattern",
  "id": "122-fallback-pattern",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
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
  "value": "Exercises",
  "id": "exercises",
  "level": 2
}, {
  "value": "Exercise 1: Exception Handling",
  "id": "exercise-1-exception-handling",
  "level": 3
}, {
  "value": "Exercise 2: Custom Exception",
  "id": "exercise-2-custom-exception",
  "level": 3
}, {
  "value": "Exercise 3: File Copy with Buffered Streams",
  "id": "exercise-3-file-copy-with-buffered-streams",
  "level": 3
}, {
  "value": "Exercise 4: try-with-resources Reflection (Java 9+)",
  "id": "exercise-4-try-with-resources-reflection-java-9",
  "level": 3
}, {
  "value": "Exercise 5: Serialization and Deserialization",
  "id": "exercise-5-serialization-and-deserialization",
  "level": 3
}, {
  "value": "Exercise 6: FileVisitor",
  "id": "exercise-6-filevisitor",
  "level": 3
}, {
  "value": "Exercise 7: WatchService",
  "id": "exercise-7-watchservice",
  "level": 3
}, {
  "value": "Exercise 8: Memory-Mapped File",
  "id": "exercise-8-memory-mapped-file",
  "level": 3
}, {
  "value": "Exercise 9: ZIP Archiver",
  "id": "exercise-9-zip-archiver",
  "level": 3
}, {
  "value": "Exercise 10: Serialization Proxy Pattern",
  "id": "exercise-10-serialization-proxy-pattern",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    blockquote: "blockquote",
    code: "code",
    details: "details",
    em: "em",
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
        id: "exception-handling--io",
        children: "Exception Handling & I/O"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding for Java development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Master these before Spring"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runnable, compilable examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type, compile, run, refactor"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Practice Exercises"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hands-on skill building"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply what you learn"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Fundamentals] --> B[Core Concepts]\n    B --> C[Code Examples]\n    C --> D[Practice Exercises]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Java exception hierarchy and distinguish checked from unchecked exceptions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write robust code using try/catch/finally and try-with-resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and use custom exception types following industry best practices"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply exception-handling best practices including fail-fast, wrapping, and logging"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.io"
        }), " package for byte- and character-oriented stream I/O"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Leverage the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "java.nio.file"
        }), " package for modern filesystem operations"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement Java serialization correctly with security considerations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use NIO channels, buffers, and memory-mapped files for high-performance I/O"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle file compression with GZIP and ZIP formats"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-the-java-exception-hierarchy",
      children: "1. The Java Exception Hierarchy"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p4-exceptions-io.png",
        alt: "Exception Handling and I/O - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java exceptions are objects representing abnormal conditions. The root class is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.Throwable"
      }), ", with two major branches: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Error"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Exception"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-hierarchy-overview",
      children: "1.1 Hierarchy Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Throwable\n├── Error         (unchecked → JVM-level failures)\n│   ├── OutOfMemoryError\n│   ├── StackOverflowError\n│   ├── NoClassDefFoundError\n│   └── ...\n└── Exception     (program-level conditions)\n    ├── RuntimeException   (unchecked → programming bugs)\n    │   ├── NullPointerException\n    │   ├── IllegalArgumentException\n    │   ├── IndexOutOfBoundsException\n    │   └── ...\n    └── (checked exceptions)\n        ├── IOException\n        ├── SQLException\n        ├── ClassNotFoundException\n        └── ...\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Error"
      }), " → serious JVM-level problems that applications should not attempt to catch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Exception"
      }), " → conditions a reasonable application may want to catch."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "RuntimeException"
      }), " → unchecked; indicates a programming mistake (null check, bounds check, etc.)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-checked-vs-unchecked-exceptions",
      children: "1.2 Checked vs. Unchecked Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\n\n/**\n * Demonstrates the distinction between checked and unchecked exceptions.\n */\npublic class CheckedVsUnchecked {\n\n    // Checked: the compiler forces you to handle or declare it.\n    public static void readFile(String path) throws IOException {\n        // FileNotFoundException extends IOException, which is checked.\n        FileInputStream fis = new FileInputStream(path);\n        int data = fis.read();\n        while (data != -1) {\n            System.out.print((char) data);\n            data = fis.read();\n        }\n        fis.close();\n    }\n\n    // Unchecked: the compiler does not require handling.\n    public static int divide(int a, int b) {\n        // ArithmeticException extends RuntimeException → unchecked.\n        return a / b;\n    }\n\n    public static void main(String[] args) {\n        // Unchecked → compiler does not force try/catch.\n        int result = divide(10, 2);\n        System.out.println(\"Result: \" + result);\n\n        // Checked → must handle or declare.\n        try {\n            readFile(\"nonexistent.txt\");\n        } catch (IOException e) {\n            System.err.println(\"Caught checked exception: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-common-runtime-exceptions",
      children: "1.3 Common Runtime Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\n/**\n * Illustrates common unchecked runtime exceptions.\n */\npublic class CommonRuntimeExceptions {\n\n    public static void main(String[] args) {\n        // NullPointerException\n        String s = null;\n        try {\n            s.length();\n        } catch (NullPointerException e) {\n            System.out.println(\"NPE caught: \" + e.getMessage());\n        }\n\n        // IllegalArgumentException\n        try {\n            setAge(-5);\n        } catch (IllegalArgumentException e) {\n            System.out.println(\"Illegal argument: \" + e.getMessage());\n        }\n\n        // IndexOutOfBoundsException\n        List<String> list = new ArrayList<>();\n        try {\n            list.get(0);\n        } catch (IndexOutOfBoundsException e) {\n            System.out.println(\"Index out of bounds: \" + e.getMessage());\n        }\n\n        // ArithmeticException\n        try {\n            int x = 1 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println(\"Arithmetic: \" + e.getMessage());\n        }\n\n        // ClassCastException\n        try {\n            Object obj = \"hello\";\n            Integer num = (Integer) obj;\n        } catch (ClassCastException e) {\n            System.out.println(\"Class cast: \" + e.getMessage());\n        }\n\n        // NumberFormatException\n        try {\n            int val = Integer.parseInt(\"not-a-number\");\n        } catch (NumberFormatException e) {\n            System.out.println(\"Number format: \" + e.getMessage());\n        }\n    }\n\n    public static void setAge(int age) {\n        if (age < 0) {\n            throw new IllegalArgumentException(\"Age must be non-negative, got: \" + age);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-trycatchfinally",
      children: "2. try/catch/finally"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-basic-syntax",
      children: "2.1 Basic Syntax"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\n/**\n * Demonstrates basic try-catch-finally syntax.\n */\npublic class TryCatchFinallyBasics {\n\n    public static void main(String[] args) {\n        BufferedReader reader = null;\n        try {\n            reader = new BufferedReader(new FileReader(\"hello.txt\"));\n            String line = reader.readLine();\n            System.out.println(\"First line: \" + line);\n        } catch (IOException e) {\n            System.err.println(\"Error reading file: \" + e.getMessage());\n        } finally {\n            // Always executes → used for cleanup.\n            if (reader != null) {\n                try {\n                    reader.close();\n                } catch (IOException e) {\n                    System.err.println(\"Error closing reader: \" + e.getMessage());\n                }\n            }\n            System.out.println(\"Finally block executed.\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-multi-catch",
      children: "2.2 Multi-Catch"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileNotFoundException;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n/**\n * Multi-catch: handle multiple exception types in one block (Java 7+).\n */\npublic class MultiCatchExample {\n\n    public static void main(String[] args) {\n        Path p = Paths.get(\"data.txt\");\n\n        try {\n            byte[] bytes = Files.readAllBytes(p);\n            System.out.println(\"Read \" + bytes.length + \" bytes\");\n            int result = 100 / 0; // will throw ArithmeticException\n            System.out.println(result);\n        } catch (FileNotFoundException | ArithmeticException e) {\n            // Multi-catch → the variable is implicitly final.\n            System.err.println(\"Caught in multi-catch: \" + e.getClass().getSimpleName()\n                + \" → \" + e.getMessage());\n        } catch (IOException e) {\n            System.err.println(\"IO error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-try-with-resources-java-7",
      children: "2.3 try-with-resources (Java 7+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Resources that implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoCloseable"
      }), " are closed automatically at the end of the try block."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.io.PrintWriter;\n\n/**\n * try-with-resources: automatic resource management.\n */\npublic class TryWithResourcesExample {\n\n    public static void main(String[] args) {\n        // Single resource.\n        try (BufferedReader reader = new BufferedReader(new FileReader(\"input.txt\"))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n\n        // Multiple resources → closed in reverse order.\n        try (BufferedReader reader = new BufferedReader(new FileReader(\"input.txt\"));\n             PrintWriter writer = new PrintWriter(new FileWriter(\"output.txt\"))) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                writer.println(line);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Error during copy: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-autocloseable-interface",
      children: "2.4 AutoCloseable Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\n/**\n * A custom resource implementing AutoCloseable.\n */\npublic class CustomResource implements AutoCloseable {\n\n    private final String name;\n    private boolean closed = false;\n\n    public CustomResource(String name) {\n        this.name = name;\n        System.out.println(\"Opened resource: \" + name);\n    }\n\n    public void doWork() {\n        if (closed) {\n            throw new IllegalStateException(\"Resource \" + name + \" is closed\");\n        }\n        System.out.println(\"Working with: \" + name);\n    }\n\n    @Override\n    public void close() {\n        if (!closed) {\n            closed = true;\n            System.out.println(\"Closed resource: \" + name);\n        }\n    }\n\n    // --- Demonstration ---\n    public static void main(String[] args) {\n        // Resources are closed in reverse order of declaration.\n        try (CustomResource db = new CustomResource(\"Database\");\n             CustomResource file = new CustomResource(\"FileHandle\")) {\n            db.doWork();\n            file.doWork();\n        } catch (Exception e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n        // Output order: Open DB, Open File, Working, Working, Close File, Close DB\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-suppressed-exceptions",
      children: "2.5 Suppressed Exceptions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When both the try block and the close() method throw exceptions, the close exception is ", (0,jsx_runtime.jsx)(_components.em, {
        children: "suppressed"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\n\n/**\n * A resource whose close() also throws.\n */\nclass FlakyResource implements AutoCloseable {\n    private final String name;\n\n    FlakyResource(String name) { this.name = name; }\n\n    void use() throws IOException {\n        throw new IOException(\"Failure using \" + name);\n    }\n\n    @Override\n    public void close() throws IOException {\n        throw new IOException(\"Failure closing \" + name);\n    }\n}\n\n/**\n * Demonstrates suppressed exceptions in try-with-resources.\n */\npublic class SuppressedExceptionDemo {\n\n    public static void main(String[] args) {\n        try (FlakyResource r = new FlakyResource(\"db\")) {\n            r.use();\n        } catch (IOException e) {\n            System.out.println(\"Primary exception: \" + e.getMessage());\n            Throwable[] suppressed = e.getSuppressed();\n            for (Throwable s : suppressed) {\n                System.out.println(\"  Suppressed: \" + s.getMessage());\n            }\n        }\n\n        // Manually adding suppressed exceptions.\n        IOException primary = new IOException(\"Network failure\");\n        IOException secondary = new IOException(\"Timeout\");\n        primary.addSuppressed(secondary);\n        System.out.println(\"Primary: \" + primary.getMessage());\n        for (Throwable s : primary.getSuppressed()) {\n            System.out.println(\"  Suppressed: \" + s.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "26-try-with-resources-via-reflection-java-9",
      children: "2.6 try-with-resources via Reflection (Java 9+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With Java 9, you can use a resource variable declared outside the try block as long as it is effectively final."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.FileReader;\nimport java.io.IOException;\n\n/**\n * Java 9+: using effectively-final variables in try-with-resources.\n */\npublic class TryWithResourcesJava9 {\n\n    public static void main(String[] args) throws IOException {\n        // Effectively final → not reassigned after initialization.\n        BufferedReader reader = new BufferedReader(new FileReader(\"input.txt\"));\n\n        // Java 9+: reference the variable directly.\n        try (reader) {\n            String line;\n            while ((line = reader.readLine()) != null) {\n                System.out.println(line);\n            }\n        }\n        // reader is closed here.\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-custom-exceptions",
      children: "3. Custom Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-extending-exception-checked",
      children: "3.1 Extending Exception (Checked)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\n/**\n * Checked custom exception for user-related errors.\n */\npublic class UserNotFoundException extends Exception {\n\n    // Unique identifier for serialization.\n    private static final long serialVersionUID = 1L;\n\n    private final String userId;\n\n    public UserNotFoundException(String userId) {\n        super(\"User not found: \" + userId);\n        this.userId = userId;\n    }\n\n    public UserNotFoundException(String userId, Throwable cause) {\n        super(\"User not found: \" + userId, cause);\n        this.userId = userId;\n    }\n\n    public String getUserId() {\n        return userId;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-extending-runtimeexception-unchecked",
      children: "3.2 Extending RuntimeException (Unchecked)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\n/**\n * Unchecked custom exception for validation errors.\n */\npublic class ValidationException extends RuntimeException {\n\n    private static final long serialVersionUID = 1L;\n\n    private final String fieldName;\n    private final Object rejectedValue;\n\n    public ValidationException(String fieldName, Object rejectedValue, String message) {\n        super(message);\n        this.fieldName = fieldName;\n        this.rejectedValue = rejectedValue;\n    }\n\n    public ValidationException(String fieldName, Object rejectedValue, String message, Throwable cause) {\n        super(message, cause);\n        this.fieldName = fieldName;\n        this.rejectedValue = rejectedValue;\n    }\n\n    public String getFieldName() {\n        return fieldName;\n    }\n\n    public Object getRejectedValue() {\n        return rejectedValue;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-using-custom-exceptions",
      children: "3.3 Using Custom Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.Objects;\n\n/**\n * Service that uses custom exceptions.\n */\nclass User {\n    private final String id;\n    private final String email;\n\n    public User(String id, String email) {\n        this.id = id;\n        this.email = email;\n    }\n\n    public String getId() { return id; }\n    public String getEmail() { return email; }\n}\n\n/**\n * Repository that throws custom exceptions.\n */\nclass UserRepository {\n    private final Map<String, User> store = new HashMap<>();\n\n    public User findById(String id) throws UserNotFoundException {\n        User user = store.get(id);\n        if (user == null) {\n            throw new UserNotFoundException(id);\n        }\n        return user;\n    }\n\n    public void save(User user) {\n        Objects.requireNonNull(user, \"User must not be null\");\n        if (user.getId() == null || user.getId().isBlank()) {\n            throw new ValidationException(\"id\", user.getId(), \"User ID must not be blank\");\n        }\n        if (user.getEmail() == null || !user.getEmail().contains(\"@\")) {\n            throw new ValidationException(\"email\", user.getEmail(), \"Invalid email address\");\n        }\n        store.put(user.getId(), user);\n    }\n}\n\n/**\n * Demonstrates custom exceptions in action.\n */\npublic class CustomExceptionDemo {\n\n    public static void main(String[] args) {\n        UserRepository repo = new UserRepository();\n\n        // Unchecked → compiler does not force handling.\n        try {\n            repo.save(new User(\"\", \"bad-email\"));\n        } catch (ValidationException e) {\n            System.err.println(\"Validation failed on field '\" + e.getFieldName()\n                + \"' with value '\" + e.getRejectedValue() + \"': \" + e.getMessage());\n        }\n\n        // Checked → must handle.\n        try {\n            repo.findById(\"nonexistent\");\n        } catch (UserNotFoundException e) {\n            System.err.println(e.getMessage() + \" (userId=\" + e.getUserId() + \")\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-exception-chaining",
      children: "3.4 Exception Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\n/**\n * Wraps a low-level IOException into a business-level exception with the cause chain preserved.\n */\nclass DataAccessException extends RuntimeException {\n    private static final long serialVersionUID = 1L;\n\n    public DataAccessException(String message, Throwable cause) {\n        super(message, cause);\n    }\n}\n\nclass FileDataStore {\n    public String load(String path) {\n        try {\n            return Files.readString(Path.of(path));\n        } catch (IOException e) {\n            // Wrap checked IOException into unchecked DataAccessException\n            // preserving the original cause for debugging.\n            throw new DataAccessException(\"Failed to load data from \" + path, e);\n        }\n    }\n}\n\n/**\n * Demonstrates exception chaining → cause chain is preserved.\n */\npublic class ExceptionChainingDemo {\n\n    public static void main(String[] args) {\n        FileDataStore store = new FileDataStore();\n        try {\n            String data = store.load(\"nonexistent.json\");\n            System.out.println(data);\n        } catch (DataAccessException e) {\n            System.err.println(\"Business error: \" + e.getMessage());\n            System.err.println(\"Root cause: \" + e.getCause().getMessage());\n            // Full stack trace still shows the IOException at the root.\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-best-practices",
      children: "4. Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-fail-fast",
      children: "4.1 Fail-Fast"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Validate inputs early and throw exceptions at the point of failure, not later."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.math.BigDecimal;\nimport java.util.Objects;\n\n/**\n * Demonstrates fail-fast validation.\n */\npublic class OrderService {\n\n    public void placeOrder(String userId, BigDecimal amount) {\n        // Fail-fast: validate immediately.\n        Objects.requireNonNull(userId, \"userId must not be null\");\n        if (userId.isBlank()) {\n            throw new IllegalArgumentException(\"userId must not be blank\");\n        }\n        Objects.requireNonNull(amount, \"amount must not be null\");\n        if (amount.compareTo(BigDecimal.ZERO) <= 0) {\n            throw new IllegalArgumentException(\"amount must be positive, got: \" + amount);\n        }\n\n        // Business logic only runs when inputs are valid.\n        System.out.println(\"Order placed for user \" + userId + \" amount \" + amount);\n    }\n\n    public static void main(String[] args) {\n        OrderService svc = new OrderService();\n        try {\n            svc.placeOrder(\"\", BigDecimal.TEN);\n        } catch (IllegalArgumentException e) {\n            System.err.println(\"Fail-fast prevented invalid order: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-exception-wrapping",
      children: "4.2 Exception Wrapping"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Wrap low-level exceptions into meaningful higher-level exceptions."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.List;\n\n/**\n * Wraps IOException into a domain-specific exception.\n */\nclass ConfigurationLoadException extends RuntimeException {\n    private static final long serialVersionUID = 1L;\n    public ConfigurationLoadException(String message, Throwable cause) {\n        super(message, cause);\n    }\n}\n\nclass ConfigService {\n\n    public List<String> loadConfig(String path) {\n        try {\n            return Files.readAllLines(Path.of(path));\n        } catch (IOException e) {\n            throw new ConfigurationLoadException(\n                \"Unable to load configuration from \" + path, e);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-logging-exceptions",
      children: "4.3 Logging Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Always log exceptions at the appropriate level. Never silently swallow."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.time.LocalDateTime;\nimport java.util.logging.Level;\nimport java.util.logging.Logger;\n\n/**\n * Demonstrates proper exception logging with java.util.logging.\n * In Spring Boot, you would use SLF4J + Logback instead.\n */\npublic class LoggingExceptions {\n\n    private static final Logger LOG = Logger.getLogger(LoggingExceptions.class.getName());\n\n    public String readImportantFile() {\n        try {\n            return Files.readString(Path.of(\"important.dat\"));\n        } catch (IOException e) {\n            LOG.log(Level.SEVERE, \"Failed to read important file important.dat\", e);\n            throw new RuntimeException(\"Data unavailable\", e);\n        }\n    }\n\n    public void logWarningOnly() {\n        try {\n            Files.readString(Path.of(\"optional-cache.txt\"));\n        } catch (IOException e) {\n            // This is acceptable → the cache is optional.\n            LOG.log(Level.FINE, \"Cache file not found, proceeding without cache\", e);\n        }\n    }\n\n    public static void main(String[] args) {\n        LoggingExceptions app = new LoggingExceptions();\n        try {\n            app.readImportantFile();\n        } catch (RuntimeException e) {\n            LOG.log(Level.INFO, \"Application caught top-level exception\", e);\n        }\n    }\n\n    // --- In Spring Boot, prefer SLF4J ---\n    /*\n    import org.slf4j.Logger;\n    import org.slf4j.LoggerFactory;\n\n    public class SpringStyleService {\n        private static final Logger log = LoggerFactory.getLogger(SpringStyleService.class);\n\n        public void doSomething() {\n            try {\n                riskyOperation();\n            } catch (Exception e) {\n                log.error(\"Operation failed for reason={}\", e.getMessage(), e);\n                throw new ServiceException(\"Operation failed\", e);\n            }\n        }\n    }\n    */\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-never-swallow-exceptions",
      children: "4.4 Never Swallow Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\n/**\n * Anti-patterns: what NOT to do with exceptions.\n */\npublic class ExceptionAntiPatterns {\n\n    // ANTI-PATTERN #1: Empty catch block → swallows the exception entirely.\n    public void antiPattern1() {\n        try {\n            riskyOperation();\n        } catch (Exception e) {\n            // BAD: nothing here. The error disappears.\n        }\n    }\n\n    // ANTI-PATTERN #2: Catching and returning null.\n    public String antiPattern2() {\n        try {\n            return riskyOperation();\n        } catch (Exception e) {\n            return null; // BAD: caller cannot distinguish \"not found\" from \"error\".\n        }\n    }\n\n    // ANTI-PATTERN #3: Catching Throwable.\n    public void antiPattern3() {\n        try {\n            riskyOperation();\n        } catch (Throwable t) { // BAD: catches Errors like OutOfMemoryError.\n            System.err.println(\"Something went wrong\");\n        }\n    }\n\n    // ANTI-PATTERN #4: Log and rethrow without context.\n    public void antiPattern4() {\n        try {\n            riskyOperation();\n        } catch (Exception e) {\n            e.printStackTrace();    // BAD: use a logger instead.\n            throw e;                // BAD: rethrows without wrapping.\n        }\n    }\n\n    // CORRECT approach:\n    public String correctPattern() {\n        try {\n            return riskyOperation();\n        } catch (RuntimeException e) {\n            // Log with context, wrap in meaningful exception.\n            throw new ServiceException(\"Failed to execute risky operation\", e);\n        }\n    }\n\n    private static String riskyOperation() {\n        if (Math.random() > 0.5) {\n            throw new RuntimeException(\"Something broke\");\n        }\n        return \"success\";\n    }\n}\n\n/**\n * Custom exception for correct-pattern demonstration.\n */\nclass ServiceException extends RuntimeException {\n    private static final long serialVersionUID = 1L;\n    public ServiceException(String message, Throwable cause) {\n        super(message, cause);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-api-design-with-exceptions",
      children: "4.5 API Design with Exceptions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.util.Optional;\n\n/**\n * Guidelines for designing APIs with exceptions.\n */\npublic class ApiDesignWithExceptions {\n\n    // GOOD: throw specific, meaningful exceptions.\n    public User findByIdOrThrow(String id) {\n        if (id == null) {\n            throw new IllegalArgumentException(\"id must not be null\");\n        }\n        // ... lookup ...\n        throw new UserNotFoundException(id);\n    }\n\n    // GOOD: offer Optional alternatives for \"expected absence\".\n    public Optional<User> findByIdOptional(String id) {\n        if (id == null) {\n            return Optional.empty();\n        }\n        // ... lookup ...\n        return Optional.empty();\n    }\n\n    // GOOD: return a result type for expected failures.\n    public Result<User> findByIdResult(String id) {\n        if (id == null) {\n            return Result.failure(new IllegalArgumentException(\"id must not be null\"));\n        }\n        // ... lookup ...\n        return Result.failure(new UserNotFoundException(id));\n    }\n\n    public static void main(String[] args) {\n        ApiDesignWithExceptions api = new ApiDesignWithExceptions();\n\n        // Optional approach → caller decides.\n        Optional<User> user = api.findByIdOptional(\"nonexistent\");\n        User resolved = user.orElseThrow(() -> new UserNotFoundException(\"nonexistent\"));\n\n        // Result approach → caller pattern-matches.\n        Result<User> result = api.findByIdResult(\"nonexistent\");\n        // result.isSuccess() / result.getError() ...\n    }\n}\n\n// Simple Result type (simplified → real libraries use dedicated types).\nclass Result<T> {\n    private final T value;\n    private final Throwable error;\n\n    private Result(T value, Throwable error) {\n        this.value = value;\n        this.error = error;\n    }\n\n    public static <T> Result<T> success(T value) {\n        return new Result<>(value, null);\n    }\n\n    public static <T> Result<T> failure(Throwable error) {\n        return new Result<>(null, error);\n    }\n\n    public boolean isSuccess() { return error == null; }\n    public Throwable getError() { return error; }\n    public T getValue() { return value; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-the-javaio-package",
      children: "5. The java.io Package"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-the-file-class",
      children: "5.1 The File Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.File;\nimport java.io.IOException;\nimport java.util.Date;\n\n/**\n * Demonstrates the legacy java.io.File class.\n */\npublic class FileClassDemo {\n\n    public static void main(String[] args) throws IOException {\n        // Creating File instances.\n        File f1 = new File(\"example.txt\");\n        File f2 = new File(\"docs\", \"notes.txt\");\n        File f3 = new File(new File(\"docs\"), \"data.csv\");\n\n        // File operations.\n        if (!f1.exists()) {\n            f1.createNewFile();\n            System.out.println(\"Created: \" + f1.getAbsolutePath());\n        }\n\n        System.out.println(\"Name: \" + f1.getName());\n        System.out.println(\"Path: \" + f1.getPath());\n        System.out.println(\"Absolute path: \" + f1.getAbsolutePath());\n        System.out.println(\"Parent: \" + f1.getParent());\n        System.out.println(\"Is file: \" + f1.isFile());\n        System.out.println(\"Is directory: \" + f1.isDirectory());\n        System.out.println(\"Can read: \" + f1.canRead());\n        System.out.println(\"Can write: \" + f1.canWrite());\n        System.out.println(\"Length: \" + f1.length() + \" bytes\");\n        System.out.println(\"Last modified: \" + new Date(f1.lastModified()));\n\n        // Directory listing.\n        File tmp = new File(System.getProperty(\"java.io.tmpdir\"));\n        System.out.println(\"Temp dir contents (first 5):\");\n        File[] files = tmp.listFiles();\n        if (files != null) {\n            for (int i = 0; i < Math.min(5, files.length); i++) {\n                System.out.println(\"  \" + (files[i].isDirectory() ? \"[DIR] \" : \"[FILE] \")\n                    + files[i].getName());\n            }\n        }\n\n        // Cleanup.\n        f1.delete();\n        System.out.println(\"Deleted: \" + f1.getName());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-byte-streams-fileinputstream--fileoutputstream",
      children: "5.2 Byte Streams: FileInputStream / FileOutputStream"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\n/**\n * Byte-oriented I/O with FileInputStream and FileOutputStream.\n */\npublic class ByteStreamDemo {\n\n    public static void main(String[] args) {\n        String source = \"Hello, Java I/O!\";\n        String filename = \"byte-demo.dat\";\n\n        // Write bytes.\n        try (FileOutputStream fos = new FileOutputStream(filename)) {\n            fos.write(source.getBytes());\n            fos.flush();\n            System.out.println(\"Written \" + source.length() + \" bytes\");\n        } catch (IOException e) {\n            System.err.println(\"Write error: \" + e.getMessage());\n        }\n\n        // Read bytes.\n        try (FileInputStream fis = new FileInputStream(filename)) {\n            int data;\n            StringBuilder sb = new StringBuilder();\n            while ((data = fis.read()) != -1) {\n                sb.append((char) data);\n            }\n            System.out.println(\"Read back: \" + sb);\n        } catch (IOException e) {\n            System.err.println(\"Read error: \" + e.getMessage());\n        }\n\n        // Efficient buffered copy.\n        copyFile(\"byte-demo.dat\", \"byte-demo-copy.dat\");\n    }\n\n    /**\n     * Copies a file using byte-array reads for efficiency.\n     */\n    public static void copyFile(String src, String dst) {\n        byte[] buffer = new byte[8192];\n        try (FileInputStream fis = new FileInputStream(src);\n             FileOutputStream fos = new FileOutputStream(dst)) {\n            int bytesRead;\n            while ((bytesRead = fis.read(buffer)) != -1) {\n                fos.write(buffer, 0, bytesRead);\n            }\n            System.out.println(\"Copied \" + src + \" to \" + dst);\n        } catch (IOException e) {\n            System.err.println(\"Copy error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-buffered-streams",
      children: "5.3 Buffered Streams"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedInputStream;\nimport java.io.BufferedOutputStream;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\n/**\n * Buffered streams reduce system calls by wrapping unbuffered streams.\n */\npublic class BufferedStreamDemo {\n\n    private static final int MEGA = 1024 * 1024;\n\n    public static void main(String[] args) throws IOException {\n        // Generate test data.\n        try (FileOutputStream fos = new FileOutputStream(\"unbuffered.dat\")) {\n            for (int i = 0; i < 10 * MEGA; i++) {\n                fos.write((byte) 'A');\n            }\n        }\n\n        // Time unbuffered write (re-using same file).\n        long t1 = System.nanoTime();\n        try (FileOutputStream fos = new FileOutputStream(\"unbuffered.dat\")) {\n            for (int i = 0; i < 10 * MEGA; i++) {\n                fos.write((byte) 'B');\n            }\n        }\n        long t2 = System.nanoTime();\n        System.out.println(\"Unbuffered write: \" + ((t2 - t1) / 1_000_000) + \" ms\");\n\n        // Time buffered write.\n        t1 = System.nanoTime();\n        try (BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(\"buffered.dat\"))) {\n            for (int i = 0; i < 10 * MEGA; i++) {\n                bos.write((byte) 'B');\n            }\n        }\n        t2 = System.nanoTime();\n        System.out.println(\"Buffered write:   \" + ((t2 - t1) / 1_000_000) + \" ms\");\n\n        // Buffered read.\n        t1 = System.nanoTime();\n        try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream(\"buffered.dat\"))) {\n            while (bis.read() != -1) {\n                // consume\n            }\n        }\n        t2 = System.nanoTime();\n        System.out.println(\"Buffered read:    \" + ((t2 - t1) / 1_000_000) + \" ms\");\n\n        // Cleanup.\n        new java.io.File(\"unbuffered.dat\").delete();\n        new java.io.File(\"buffered.dat\").delete();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-character-streams-reader--writer",
      children: "5.4 Character Streams: Reader / Writer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\n\n/**\n * Character-oriented I/O handles Unicode correctly.\n */\npublic class CharacterStreamDemo {\n\n    public static void main(String[] args) {\n        String text = \"Hello, ä¸–ç•Œ! Java I/O handles Unicode.\\nLine 2: Ã±oÃ±o.\";\n\n        // Write characters.\n        try (FileWriter fw = new FileWriter(\"char-demo.txt\")) {\n            fw.write(text);\n            fw.flush();\n            System.out.println(\"Written \" + text.length() + \" chars\");\n        } catch (IOException e) {\n            System.err.println(\"Write error: \" + e.getMessage());\n        }\n\n        // Read characters.\n        try (FileReader fr = new FileReader(\"char-demo.txt\")) {\n            int data;\n            StringBuilder sb = new StringBuilder();\n            while ((data = fr.read()) != -1) {\n                sb.append((char) data);\n            }\n            System.out.println(\"Read back: \" + sb);\n        } catch (IOException e) {\n            System.err.println(\"Read error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-inputstreamreader--outputstreamwriter-bridges",
      children: "5.5 InputStreamReader / OutputStreamWriter (Bridges)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.InputStreamReader;\nimport java.io.OutputStreamWriter;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * Bridges between byte streams and character streams with charset control.\n */\npublic class StreamBridgeDemo {\n\n    public static void main(String[] args) {\n        String data = \"UTF-8 encoded: æ—¥æœ¬ã¸ã‚ˆã†ã“ã\";\n\n        // Write with explicit charset.\n        try (OutputStreamWriter osw = new OutputStreamWriter(\n                new FileOutputStream(\"bridge-utf8.txt\"), StandardCharsets.UTF_8)) {\n            osw.write(data);\n        } catch (IOException e) {\n            System.err.println(\"Write error: \" + e.getMessage());\n        }\n\n        // Read with explicit charset.\n        try (InputStreamReader isr = new InputStreamReader(\n                new FileInputStream(\"bridge-utf8.txt\"), StandardCharsets.UTF_8)) {\n            int ch;\n            StringBuilder sb = new StringBuilder();\n            while ((ch = isr.read()) != -1) {\n                sb.append((char) ch);\n            }\n            System.out.println(\"Read: \" + sb);\n        } catch (IOException e) {\n            System.err.println(\"Read error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-bufferedreader--bufferedwriter",
      children: "5.6 BufferedReader / BufferedWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.BufferedWriter;\nimport java.io.FileReader;\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.util.ArrayList;\nimport java.util.List;\n\n/**\n * BufferedReader: readLine() for efficient line-by-line processing.\n * BufferedWriter: newLine() for platform-independent line separators.\n */\npublic class BufferedReadWriteDemo {\n\n    public static void main(String[] args) {\n        String filename = \"lines.txt\";\n        List<String> lines = List.of(\n            \"First line\",\n            \"Second line with æ—¥æœ¬èªž\",\n            \"Third line: Ã±oÃ±o\",\n            \"Fourth line\"\n        );\n\n        // Write lines.\n        try (BufferedWriter bw = new BufferedWriter(new FileWriter(filename))) {\n            for (String line : lines) {\n                bw.write(line);\n                bw.newLine(); // platform-independent\n            }\n            System.out.println(\"Wrote \" + lines.size() + \" lines\");\n        } catch (IOException e) {\n            System.err.println(\"Write error: \" + e.getMessage());\n        }\n\n        // Read lines.\n        List<String> readBack = new ArrayList<>();\n        try (BufferedReader br = new BufferedReader(new FileReader(filename))) {\n            String line;\n            while ((line = br.readLine()) != null) {\n                readBack.add(line);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Read error: \" + e.getMessage());\n        }\n\n        System.out.println(\"Read \" + readBack.size() + \" lines back\");\n        readBack.forEach(l -> System.out.println(\"  > \" + l));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-printwriter",
      children: "5.7 PrintWriter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileWriter;\nimport java.io.IOException;\nimport java.io.PrintWriter;\n\n/**\n * PrintWriter provides convenient formatting methods: print(), println(), printf().\n */\npublic class PrintWriterDemo {\n\n    public static void main(String[] args) {\n        try (PrintWriter pw = new PrintWriter(new FileWriter(\"formatted.txt\"))) {\n            pw.println(\"=== Invoice ===\");\n            pw.printf(\"Item: %-20s Qty: %3d  Price: $%6.2f%n\", \"Widget A\", 5, 12.99);\n            pw.printf(\"Item: %-20s Qty: %3d  Price: $%6.2f%n\", \"Gadget B\", 2, 49.95);\n            pw.printf(\"Item: %-20s Qty: %3d  Price: $%6.2f%n\", \"Doohickey\", 10, 3.49);\n            pw.println(\"----------------------------------------\");\n            pw.printf(\"%30s: $%8.2f%n\", \"Subtotal\", 12.99 * 5 + 49.95 * 2 + 3.49 * 10);\n            pw.printf(\"%30s: $%8.2f%n\", \"Total\", 192.20);\n\n            // PrintWriter does NOT throw IOException from these methods.\n            // Check error status instead.\n            boolean error = pw.checkError();\n            System.out.println(\"No error: \" + !error);\n        } catch (IOException e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-datainputstream--dataoutputstream",
      children: "5.8 DataInputStream / DataOutputStream"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.DataInputStream;\nimport java.io.DataOutputStream;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\n\n/**\n * Data streams read/write Java primitives in a portable binary format.\n */\npublic class DataStreamDemo {\n\n    public static void main(String[] args) {\n        String filename = \"primitives.dat\";\n\n        // Write primitives.\n        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(filename))) {\n            dos.writeInt(42);\n            dos.writeDouble(3.14159);\n            dos.writeBoolean(true);\n            dos.writeUTF(\"Hello, DataStream!\"); // modified UTF-8\n            dos.writeLong(1_000_000_000_000L);\n            System.out.println(\"Primitives written\");\n        } catch (IOException e) {\n            System.err.println(\"Write error: \" + e.getMessage());\n        }\n\n        // Read primitives (MUST read in the same order).\n        try (DataInputStream dis = new DataInputStream(new FileInputStream(filename))) {\n            int i = dis.readInt();\n            double d = dis.readDouble();\n            boolean b = dis.readBoolean();\n            String s = dis.readUTF();\n            long l = dis.readLong();\n            System.out.printf(\"Read: int=%d, double=%.5f, boolean=%b, string=%s, long=%d%n\",\n                i, d, b, s, l);\n        } catch (IOException e) {\n            System.err.println(\"Read error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "59-objectinputstream--objectoutputstream-serialization",
      children: "5.9 ObjectInputStream / ObjectOutputStream (Serialization)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\nimport java.util.Objects;\n\n/**\n * A simple Serializable class.\n */\nclass Person implements Serializable {\n    private static final long serialVersionUID = 20240101L;\n\n    private String name;\n    private int age;\n    // transient fields are NOT serialized.\n    private transient String password;\n\n    public Person(String name, int age, String password) {\n        this.name = name;\n        this.age = age;\n        this.password = password;\n    }\n\n    public String getName() { return name; }\n    public int getAge() { return age; }\n\n    @Override\n    public String toString() {\n        return \"Person{name='\" + name + \"', age=\" + age + \", password='[REDACTED]'}\";\n    }\n}\n\n/**\n * Serialization and deserialization with ObjectOutputStream/ObjectInputStream.\n */\npublic class ObjectStreamDemo {\n\n    public static void main(String[] args) {\n        String filename = \"person.ser\";\n        Person original = new Person(\"Alice\", 30, \"secret123\");\n\n        // Serialize.\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {\n            oos.writeObject(original);\n            System.out.println(\"Serialized: \" + original);\n        } catch (IOException e) {\n            System.err.println(\"Serialization error: \" + e.getMessage());\n        }\n\n        // Deserialize.\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {\n            Person restored = (Person) ois.readObject();\n            System.out.println(\"Deserialized: \" + restored);\n            System.out.println(\"Same object? \" + (original == restored));\n            System.out.println(\"Equal? \" + Objects.equals(original.getName(), restored.getName()));\n        } catch (IOException | ClassNotFoundException e) {\n            System.err.println(\"Deserialization error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-the-javaniofile-package-nio2",
      children: "6. The java.nio.file Package (NIO.2)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-path",
      children: "6.1 Path"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n/**\n * Path is the modern replacement for java.io.File.\n */\npublic class PathDemo {\n\n    public static void main(String[] args) {\n        // Creating paths.\n        Path p1 = Path.of(\"docs\", \"notes.txt\");\n        Path p2 = Paths.get(\"docs/notes.txt\");\n        Path p3 = Path.of(\"/absolute/path/to/file.txt\");\n        Path p4 = Path.of(\"data\", \"2024\", \"report.csv\");\n\n        System.out.println(\"p1: \" + p1);\n        System.out.println(\"p2: \" + p2);\n        System.out.println(\"p3: \" + p3);\n        System.out.println(\"p4: \" + p4);\n\n        // Path components.\n        System.out.println(\"\\nPath components of \" + p4 + \":\");\n        System.out.println(\"  File name: \" + p4.getFileName());\n        System.out.println(\"  Parent: \" + p4.getParent());\n        System.out.println(\"  Root: \" + p4.getRoot());\n        System.out.println(\"  Name count: \" + p4.getNameCount());\n        for (int i = 0; i < p4.getNameCount(); i++) {\n            System.out.println(\"  [\" + i + \"]: \" + p4.getName(i));\n        }\n\n        // Path operations.\n        Path relative = Path.of(\"data\").resolve(\"2024\").resolve(\"report.csv\");\n        System.out.println(\"\\nResolved: \" + relative);\n\n        Path base = Path.of(\"/home/user/project\");\n        Path target = Path.of(\"/home/user/project/src/main/Main.java\");\n        Path relativized = base.relativize(target);\n        System.out.println(\"Relativized: \" + relativized);\n\n        Path normalized = Path.of(\"/home/../home/user/./project/file.txt\").normalize();\n        System.out.println(\"Normalized: \" + normalized);\n\n        Path absolute = Path.of(\"relative.txt\").toAbsolutePath();\n        System.out.println(\"To absolute: \" + absolute);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-the-files-utility-class",
      children: "6.2 The Files Utility Class"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardCopyOption;\nimport java.nio.file.StandardOpenOption;\nimport java.util.List;\n\n/**\n * Files provides static methods for common file operations.\n */\npublic class FilesUtilityDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path dir = Files.createTempDirectory(\"nio-demo-\");\n        Path file = dir.resolve(\"demo.txt\");\n        System.out.println(\"Working in: \" + dir);\n\n        // Write a file.\n        List<String> lines = List.of(\"Line 1\", \"Line 2\", \"Line 3\");\n        Files.write(file, lines, StandardCharsets.UTF_8);\n\n        // Read all lines.\n        List<String> readBack = Files.readAllLines(file, StandardCharsets.UTF_8);\n        System.out.println(\"Read lines: \" + readBack);\n\n        // Read entire file as String.\n        String content = Files.readString(file);\n        System.out.println(\"Content: \" + content);\n\n        // Write string.\n        Files.writeString(file, \"Overwritten content\\n\",\n            StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);\n\n        // Copy.\n        Path copy = dir.resolve(\"copy.txt\");\n        Files.copy(file, copy, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"Copied to: \" + copy);\n\n        // Move.\n        Path moved = dir.resolve(\"moved.txt\");\n        Files.move(copy, moved, StandardCopyOption.REPLACE_EXISTING);\n        System.out.println(\"Moved to: \" + moved);\n\n        // File attributes.\n        System.out.println(\"Size: \" + Files.size(file));\n        System.out.println(\"Is regular file: \" + Files.isRegularFile(file));\n        System.out.println(\"Is directory: \" + Files.isDirectory(file));\n        System.out.println(\"Is readable: \" + Files.isReadable(file));\n        System.out.println(\"Is writable: \" + Files.isWritable(file));\n        System.out.println(\"Last modified: \" + Files.getLastModifiedTime(file));\n\n        // Check existence.\n        System.out.println(\"Exists: \" + Files.exists(file));\n        System.out.println(\"Not exists: \" + Files.notExists(file));\n\n        // Delete.\n        Files.delete(moved);\n        System.out.println(\"Deleted: \" + moved);\n        Files.deleteIfExists(copy);\n\n        // Create directories.\n        Path nested = dir.resolve(\"a/b/c\");\n        Files.createDirectories(nested);\n        System.out.println(\"Created directories: \" + nested);\n\n        // Cleanup.\n        try (var stream = Files.walk(dir)) {\n            stream.sorted(java.util.Comparator.reverseOrder())\n                .forEach(p -> {\n                    try { Files.deleteIfExists(p); } catch (IOException ignored) {}\n                });\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-walking-the-file-tree",
      children: "6.3 Walking the File Tree"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.FileVisitResult;\nimport java.nio.file.FileVisitor;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.SimpleFileVisitor;\nimport java.nio.file.attribute.BasicFileAttributes;\n\n/**\n * Two approaches to traversing a file tree: Files.walk() (stream) and Files.walkFileTree() (visitor).\n */\npublic class FileTreeWalkDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path start = Path.of(System.getProperty(\"java.io.tmpdir\"));\n\n        System.out.println(\"=== Files.walk() stream approach ===\");\n        Files.walk(start, 2)\n            .limit(10)\n            .forEach(p -> System.out.println(\"  \" + p));\n\n        System.out.println(\"\\n=== Files.walkFileTree() with FileVisitor ===\");\n        Files.walkFileTree(start, new SimpleFileVisitor<>() {\n            private int depth = 0;\n\n            @Override\n            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {\n                if (depth > 2) return FileVisitResult.SKIP_SUBTREE;\n                System.out.println(\"  \".repeat(depth) + \"[DIR] \" + dir.getFileName());\n                depth++;\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {\n                System.out.println(\"  \".repeat(depth) + \"[FILE] \" + file.getFileName()\n                    + \" (\" + attrs.size() + \" bytes)\");\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFileFailed(Path file, IOException exc) {\n                System.err.println(\"  Error accessing: \" + file);\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult postVisitDirectory(Path dir, IOException exc) {\n                depth--;\n                return FileVisitResult.CONTINUE;\n            }\n        });\n\n        // Using FileVisitor interface directly (not SimpleFileVisitor).\n        System.out.println(\"\\n=== Custom FileVisitor implementation ===\");\n        Files.walkFileTree(start, new FileVisitor<>() {\n            private int depth = 0;\n\n            @Override\n            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {\n                if (dir.getFileName() != null\n                    && dir.getFileName().toString().startsWith(\".\")) {\n                    return FileVisitResult.SKIP_SUBTREE;\n                }\n                if (depth <= 1) {\n                    System.out.println(\"  \".repeat(depth) + \"D: \" + dir.getFileName());\n                }\n                depth++;\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {\n                if (depth <= 2) {\n                    System.out.println(\"  \".repeat(depth) + \"F: \" + file.getFileName());\n                }\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult visitFileFailed(Path file, IOException exc) {\n                return FileVisitResult.CONTINUE;\n            }\n\n            @Override\n            public FileVisitResult postVisitDirectory(Path dir, IOException exc) {\n                depth--;\n                return FileVisitResult.CONTINUE;\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-directory-stream-and-find",
      children: "6.4 Directory Stream and Find"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.DirectoryStream;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n/**\n * DirectoryStream for lightweight directory listing; Files.find() for filtered recursive search.\n */\npublic class DirectoryStreamDemo {\n\n    public static void main(String[] args) {\n        Path tmp = Paths.get(System.getProperty(\"java.io.tmpdir\"));\n\n        // DirectoryStream (globbing).\n        System.out.println(\"=== DirectoryStream (filtered) ===\");\n        try (DirectoryStream<Path> stream = Files.newDirectoryStream(tmp, \"*.{tmp,log}\")) {\n            int count = 0;\n            for (Path entry : stream) {\n                System.out.println(\"  \" + entry.getFileName());\n                if (++count >= 10) break;\n            }\n        } catch (IOException e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n\n        // DirectoryStream with custom filter.\n        System.out.println(\"\\n=== DirectoryStream (custom filter, large files) ===\");\n        try (DirectoryStream<Path> stream = Files.newDirectoryStream(tmp, entry -> {\n            try { return Files.size(entry) > 10_000_000; } // >10MB\n            catch (IOException e) { return false; }\n        })) {\n            int count = 0;\n            for (Path entry : stream) {\n                System.out.println(\"  \" + entry.getFileName());\n                if (++count >= 5) break;\n            }\n        } catch (IOException e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n\n        // Files.find() → filtered recursive search.\n        System.out.println(\"\\n=== Files.find() (recursive .txt files) ===\");\n        try (var stream = Files.find(tmp, 3,\n                (path, attrs) -> path.toString().endsWith(\".txt\") && attrs.size() > 0)) {\n            stream.limit(5).forEach(p ->\n                System.out.println(\"  \" + p.getFileName() + \" (\" + tmp.relativize(p) + \")\"));\n        } catch (IOException e) {\n            System.err.println(\"Error: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-watchservice--file-change-monitoring",
      children: "6.5 WatchService → File Change Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.FileSystems;\nimport java.nio.file.Path;\nimport java.nio.file.StandardWatchEventKinds;\nimport java.nio.file.WatchEvent;\nimport java.nio.file.WatchKey;\nimport java.nio.file.WatchService;\n\n/**\n * WatchService monitors a directory for file system events.\n */\npublic class WatchServiceDemo {\n\n    public static void main(String[] args) throws IOException, InterruptedException {\n        Path dir = FilesUtilityDemo.createTempDir(); // A small helper inline below.\n        if (dir == null) {\n            dir = Files.createTempDirectory(\"watch-\");\n        }\n        System.out.println(\"Watching: \" + dir);\n        System.out.println(\"Create/modify/delete files in that dir to see events.\");\n        System.out.println(\"(Press Ctrl+C to stop)\");\n\n        try (WatchService watcher = FileSystems.getDefault().newWatchService()) {\n            // Register for events.\n            dir.register(watcher,\n                StandardWatchEventKinds.ENTRY_CREATE,\n                StandardWatchEventKinds.ENTRY_MODIFY,\n                StandardWatchEventKinds.ENTRY_DELETE);\n\n            // Event loop.\n            WatchKey key;\n            while ((key = watcher.take()) != null) {\n                for (WatchEvent<?> event : key.pollEvents()) {\n                    WatchEvent.Kind<?> kind = event.kind();\n                    Path filename = (Path) event.context();\n                    long count = event.count();\n\n                    System.out.printf(\"Event: %s → %s (count=%d)%n\",\n                        kind.name(), filename, count);\n                }\n                key.reset();\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "66-filechannel-and-memory-mapped-files",
      children: "6.6 FileChannel and Memory-Mapped Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.io.RandomAccessFile;\nimport java.nio.ByteBuffer;\nimport java.nio.MappedByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.channels.FileChannel.MapMode;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\n/**\n * FileChannel for high-performance file I/O; MappedByteBuffer for memory-mapped files.\n */\npublic class FileChannelDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"channel-\", \".dat\");\n        System.out.println(\"File: \" + file);\n\n        // Write via FileChannel.\n        try (FileChannel channel = FileChannel.open(file,\n                StandardOpenOption.WRITE, StandardOpenOption.READ,\n                StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING)) {\n            ByteBuffer buffer = ByteBuffer.allocate(1024);\n            buffer.put(\"Hello from FileChannel!\\n\".getBytes());\n            buffer.put(\"Second line.\\n\".getBytes());\n            buffer.put(\"UTF-8 works: æ—¥æœ¬èªž\\n\".getBytes());\n            buffer.flip();\n            int written = channel.write(buffer);\n            System.out.println(\"Written \" + written + \" bytes via FileChannel\");\n        }\n\n        // Read via FileChannel with explicit position.\n        try (FileChannel channel = FileChannel.open(file, StandardOpenOption.READ)) {\n            ByteBuffer buffer = ByteBuffer.allocate(512);\n            int bytesRead = channel.read(buffer, 0);\n            buffer.flip();\n            byte[] data = new byte[buffer.remaining()];\n            buffer.get(data);\n            System.out.println(\"Read via FileChannel: \" + new String(data));\n        }\n\n        // Memory-mapped file (zero-copy for large files).\n        try (RandomAccessFile raf = new RandomAccessFile(file.toFile(), \"rw\");\n             FileChannel channel = raf.getChannel()) {\n\n            MappedByteBuffer mapped = channel.map(MapMode.READ_WRITE, 0, channel.size());\n            // Read from mapped buffer.\n            byte[] header = new byte[10];\n            mapped.get(header);\n            System.out.println(\"First 10 bytes via MappedByteBuffer: \"\n                + new String(header));\n\n            // Write through mapped buffer (changes go directly to file).\n            mapped.position(0);\n            mapped.put(\"MAPPED   \".getBytes());\n            System.out.println(\"Overwritten via memory-mapped I/O\");\n        }\n\n        // Verify the overwrite.\n        String content = Files.readString(file);\n        System.out.println(\"Final content: \" + content);\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "67-scatter--gather-io",
      children: "6.7 Scatter / Gather I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.FileChannel;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\n/**\n * Scattering read: read into multiple buffers.\n * Gathering write: write from multiple buffers.\n */\npublic class ScatterGatherDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"scatter-\", \".dat\");\n\n        // Gather: write from multiple buffers into one channel.\n        ByteBuffer header = ByteBuffer.wrap(\"HEADER\\n\".getBytes());\n        ByteBuffer body = ByteBuffer.wrap(\"BODY DATA\\n\".getBytes());\n        ByteBuffer footer = ByteBuffer.wrap(\"FOOTER\\n\".getBytes());\n\n        try (FileChannel channel = FileChannel.open(file,\n                StandardOpenOption.WRITE, StandardOpenOption.CREATE,\n                StandardOpenOption.TRUNCATE_EXISTING)) {\n            ByteBuffer[] buffers = {header, body, footer};\n            long bytesWritten = channel.write(buffers);\n            System.out.println(\"Gather: wrote \" + bytesWritten + \" bytes from \"\n                + buffers.length + \" buffers\");\n        }\n\n        // Scatter: read from one channel into multiple buffers.\n        ByteBuffer buf1 = ByteBuffer.allocate(10);\n        ByteBuffer buf2 = ByteBuffer.allocate(20);\n        ByteBuffer buf3 = ByteBuffer.allocate(10);\n\n        try (FileChannel channel = FileChannel.open(file, StandardOpenOption.READ)) {\n            ByteBuffer[] readBuffers = {buf1, buf2, buf3};\n            long bytesRead = channel.read(readBuffers);\n            System.out.println(\"Scatter: read \" + bytesRead + \" bytes into \"\n                + readBuffers.length + \" buffers\");\n\n            // Flip all buffers.\n            for (ByteBuffer b : readBuffers) {\n                b.flip();\n                byte[] data = new byte[b.remaining()];\n                b.get(data);\n                System.out.print(\"  Buffer content: \" + new String(data));\n            }\n            System.out.println();\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "68-filechannel-transfer-zero-copy",
      children: "6.8 FileChannel Transfer (Zero-Copy)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.channels.FileChannel;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.StandardOpenOption;\n\n/**\n * transferTo / transferFrom: zero-copy file transfer (the kernel moves data\n * between file descriptors without copying through userspace).\n */\npublic class FileTransferDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path source = Files.createTempFile(\"source-\", \".dat\");\n        Path dest = Files.createTempFile(\"dest-\", \".dat\");\n\n        // Prepare source.\n        Files.writeString(source, \"A\".repeat(1_000_000));\n\n        // Zero-copy transfer.\n        long t1 = System.nanoTime();\n        try (FileChannel srcChannel = FileChannel.open(source, StandardOpenOption.READ);\n             FileChannel dstChannel = FileChannel.open(dest,\n                 StandardOpenOption.WRITE, StandardOpenOption.CREATE,\n                 StandardOpenOption.TRUNCATE_EXISTING)) {\n            long position = 0;\n            long size = srcChannel.size();\n            long transferred = srcChannel.transferTo(position, size, dstChannel);\n            System.out.println(\"TransferTo: \" + transferred + \" bytes\");\n        }\n        long t2 = System.nanoTime();\n        System.out.println(\"Zero-copy took: \" + ((t2 - t1) / 1_000_000) + \" ms\");\n\n        System.out.println(\"Source size: \" + Files.size(source));\n        System.out.println(\"Dest size: \" + Files.size(dest));\n\n        Files.deleteIfExists(source);\n        Files.deleteIfExists(dest);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-serialization-deep-dive",
      children: "7. Serialization Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-serializable-interface-and-serialversionuid",
      children: "7.1 Serializable Interface and serialVersionUID"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\nimport java.util.Objects;\n\n/**\n * Demonstrates serialVersionUID: a version ID used during deserialization\n * to verify that the sender and receiver have compatible classes.\n */\nclass Employee implements Serializable {\n    // MUST be declared: if absent, JVM computes one at runtime (class-specific).\n    // Declare explicitly to avoid InvalidClassException after minor changes.\n    private static final long serialVersionUID = 20240101L;\n\n    private String name;\n    private int id;\n    private String department;\n\n    // transient → not serialized.\n    private transient String loginToken;\n\n    public Employee(String name, int id, String department, String loginToken) {\n        this.name = name;\n        this.id = id;\n        this.department = department;\n        this.loginToken = loginToken;\n    }\n\n    @Override\n    public String toString() {\n        return \"Employee{name='\" + name + \"', id=\" + id\n            + \", dept='\" + department + \"', token='[REDACTED]'}\";\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (!(o instanceof Employee e)) return false;\n        return id == e.id && Objects.equals(name, e.name);\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(name, id); }\n}\n\n/**\n * Full serialization roundtrip with serialVersionUID demonstration.\n */\npublic class SerialVersionUIDDemo {\n\n    public static void main(String[] args) throws Exception {\n        Path path = Files.createTempFile(null, null);\n        String filename = path.toFile().getAbsolutePath();\n        path.toFile().deleteOnExit();\n\n        Employee e1 = new Employee(\"Alice\", 1001, \"Engineering\", \"tok_abc123\");\n\n        // Serialize.\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {\n            oos.writeObject(e1);\n            System.out.println(\"Serialized: \" + e1);\n        }\n\n        // Deserialize.\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {\n            Employee restored = (Employee) ois.readObject();\n            System.out.println(\"Deserialized: \" + restored);\n            System.out.println(\"Equal: \" + e1.equals(restored));\n        }\n    }\n}\n\n// Helper to avoid circular dependency on NIO Path files.\nclass Files {\n    static Path createTempFile(String prefix, String suffix) throws IOException {\n        return java.nio.file.Files.createTempFile(\n            prefix != null ? prefix : \"ser-\",\n            suffix != null ? suffix : \".ser\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-the-transient-keyword",
      children: "7.2 The transient Keyword"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\n\n/**\n * transient fields are excluded from serialization.\n * Common uses: passwords, secrets, cached data, derived values.\n */\nclass UserProfile implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private String username;\n    private String email;\n    private transient String password;         // NEVER serialize passwords.\n    private transient java.util.Date loginTime; // derived/reconstructible.\n    private transient StringBuilder cache;     // runtime-only cache.\n\n    public UserProfile(String username, String email, String password) {\n        this.username = username;\n        this.email = email;\n        this.password = password;\n        this.loginTime = new java.util.Date();\n        this.cache = new StringBuilder();\n    }\n\n    @Override\n    public String toString() {\n        return \"UserProfile{user='\" + username + \"', email='\" + email\n            + \"', password='[PROTECTED]', loginTime=\" + loginTime + \"}\";\n    }\n}\n\npublic class TransientFieldDemo {\n\n    public static void main(String[] args) throws Exception {\n        String file = java.nio.file.Files.createTempFile(\"user-\", \".ser\").toString();\n        java.nio.file.Path.of(file).toFile().deleteOnExit();\n\n        UserProfile original = new UserProfile(\"jdoe\", \"jdoe@example.com\", \"P@ssw0rd\");\n        System.out.println(\"Before serialization: \" + original);\n\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {\n            oos.writeObject(original);\n        }\n\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {\n            UserProfile restored = (UserProfile) ois.readObject();\n            System.out.println(\"After deserialization: \" + restored);\n            // Note: password and loginTime will be null/default after deserialization.\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-custom-readobject--writeobject",
      children: "7.3 Custom readObject / writeObject"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.Serializable;\n\n/**\n * Custom serialization methods for validation and encryption.\n */\nclass SecuredDocument implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private String title;\n    private String content;\n    // Store checksum to detect tampering.\n    private transient int checksum;\n\n    public SecuredDocument(String title, String content) {\n        this.title = title;\n        this.content = content;\n        this.checksum = computeChecksum();\n    }\n\n    /**\n     * Custom serialization: called by ObjectOutputStream.\n     */\n    private void writeObject(ObjectOutputStream out) throws IOException {\n        out.defaultWriteObject(); // serialize the normal fields.\n        // Write the checksum after the default fields.\n        out.writeInt(computeChecksum());\n    }\n\n    /**\n     * Custom deserialization: called by ObjectInputStream.\n     */\n    private void readObject(ObjectInputStream in) throws IOException, ClassNotFoundException {\n        in.defaultReadObject(); // restore normal fields.\n        // Read the checksum and validate.\n        this.checksum = in.readInt();\n        if (this.checksum != computeChecksum()) {\n            throw new IOException(\"Document checksum mismatch → possible corruption\");\n        }\n    }\n\n    private int computeChecksum() {\n        int hash = title != null ? title.hashCode() : 0;\n        hash = 31 * hash + (content != null ? content.hashCode() : 0);\n        return hash;\n    }\n\n    @Override\n    public String toString() {\n        return \"Document{title='\" + title + \"', content='\" + content\n            + \"', checksum=\" + checksum + \"}\";\n    }\n\n    // --- Demonstration ---\n    public static void main(String[] args) throws Exception {\n        String file = java.nio.file.Files.createTempFile(\"doc-\", \".ser\").toString();\n        java.nio.file.Path.of(file).toFile().deleteOnExit();\n\n        SecuredDocument doc = new SecuredDocument(\"Secret Plan\", \"Launch phase 1\");\n        System.out.println(\"Original: \" + doc);\n\n        // Serialize.\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {\n            oos.writeObject(doc);\n        }\n\n        // Deserialize.\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {\n            SecuredDocument restored = (SecuredDocument) ois.readObject();\n            System.out.println(\"Restored: \" + restored);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-externalizable-interface",
      children: "7.4 Externalizable Interface"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.Externalizable;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.ObjectInput;\nimport java.io.ObjectOutput;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\n\n/**\n * Externalizable gives complete control over serialization format.\n * Unlike Serializable, you must implement writeExternal/readExternal.\n */\nclass CompactPoint implements Externalizable {\n    // Externalizable classes MUST have a public no-arg constructor.\n    public CompactPoint() {}\n\n    private int x;\n    private int y;\n\n    public CompactPoint(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n\n    @Override\n    public void writeExternal(ObjectOutput out) throws IOException {\n        // Custom compact format: write both ints in 3 bytes instead of 8.\n        // Uses a scheme: first 12 bits = x, next 12 bits = y.\n        int packed = (x & 0xFFF) << 12 | (y & 0xFFF);\n        out.write((packed >>> 16) & 0xFF);\n        out.write((packed >>> 8) & 0xFF);\n        out.write(packed & 0xFF);\n    }\n\n    @Override\n    public void readExternal(ObjectInput in) throws IOException {\n        int b1 = in.readUnsignedByte();\n        int b2 = in.readUnsignedByte();\n        int b3 = in.readUnsignedByte();\n        int packed = (b1 << 16) | (b2 << 8) | b3;\n        x = (packed >>> 12) & 0xFFF;\n        y = packed & 0xFFF;\n    }\n\n    @Override\n    public String toString() {\n        return \"CompactPoint{x=\" + x + \", y=\" + y + \"}\";\n    }\n\n    // --- Demonstration ---\n    public static void main(String[] args) throws Exception {\n        String file = java.nio.file.Files.createTempFile(\"ext-\", \".ser\").toString();\n        java.nio.file.Path.of(file).toFile().deleteOnExit();\n\n        CompactPoint pt = new CompactPoint(100, 200);\n        System.out.println(\"Original: \" + pt);\n\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {\n            oos.writeObject(pt);\n        }\n\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {\n            CompactPoint restored = (CompactPoint) ois.readObject();\n            System.out.println(\"Restored: \" + restored);\n        }\n\n        java.io.File f = new java.io.File(file);\n        System.out.println(\"Serialized size: \" + f.length() + \" bytes\");\n        f.delete();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-serialization-proxy-pattern",
      children: "7.5 Serialization Proxy Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.io.InvalidObjectException;\nimport java.io.ObjectInputStream;\nimport java.io.ObjectOutputStream;\nimport java.io.ObjectStreamException;\nimport java.io.Serializable;\n\n/**\n * Serialization Proxy Pattern (Joshua Bloch, Effective Java).\n * The proxy is a private inner class that represents the logical state.\n * This provides immunity to attackers who craft malicious byte streams.\n */\nfinal class Period implements Serializable {\n    private static final long serialVersionUID = 1L;\n\n    private final java.util.Date start;\n    private final java.util.Date end;\n\n    public Period(java.util.Date start, java.util.Date end) {\n        // Defensive copies in constructor.\n        this.start = new java.util.Date(start.getTime());\n        this.end = new java.util.Date(end.getTime());\n\n        if (this.start.after(this.end)) {\n            throw new IllegalArgumentException(\"Start must be before end\");\n        }\n    }\n\n    public java.util.Date getStart() { return new java.util.Date(start.getTime()); }\n    public java.util.Date getEnd() { return new java.util.Date(end.getTime()); }\n\n    /**\n     * Instead of serializing Period, serialize the proxy.\n     */\n    private Object writeReplace() {\n        return new SerializationProxy(this);\n    }\n\n    /**\n     * Prevent deserialization of the real Period class.\n     */\n    private void readObject(ObjectInputStream in) throws InvalidObjectException {\n        throw new InvalidObjectException(\"Proxy required\");\n    }\n\n    // The proxy → private and static.\n    private static class SerializationProxy implements Serializable {\n        private static final long serialVersionUID = 1L;\n\n        private final long startMillis;\n        private final long endMillis;\n\n        SerializationProxy(Period p) {\n            this.startMillis = p.start.getTime();\n            this.endMillis = p.end.getTime();\n        }\n\n        /**\n         * On deserialization of the proxy, reconstruct the real Period.\n         * This runs validation, so malicious byte streams are caught.\n         */\n        private Object readResolve() throws ObjectStreamException {\n            java.util.Date start = new java.util.Date(startMillis);\n            java.util.Date end = new java.util.Date(endMillis);\n            // Validation runs here → same as constructor.\n            if (start.after(end)) {\n                throw new InvalidObjectException(\"Start must be before end\");\n            }\n            return new Period(start, end);\n        }\n    }\n\n    @Override\n    public String toString() {\n        return \"Period[\" + start + \" -> \" + end + \"]\";\n    }\n\n    // --- Demonstration ---\n    public static void main(String[] args) throws Exception {\n        String file = java.nio.file.Files.createTempFile(\"period-\", \".ser\").toString();\n        java.nio.file.Path.of(file).toFile().deleteOnExit();\n\n        java.util.Calendar cal = java.util.Calendar.getInstance();\n        cal.set(2024, java.util.Calendar.JANUARY, 1);\n        java.util.Date start = cal.getTime();\n        cal.set(2024, java.util.Calendar.DECEMBER, 31);\n        java.util.Date end = cal.getTime();\n\n        Period p = new Period(start, end);\n        System.out.println(\"Original: \" + p);\n\n        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(file))) {\n            oos.writeObject(p);\n        }\n\n        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(file))) {\n            Period restored = (Period) ois.readObject();\n            System.out.println(\"Restored: \" + restored);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-nio-channels-and-buffers",
      children: "8. NIO Channels and Buffers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-bytebuffer--heap-vs-direct",
      children: "8.1 ByteBuffer → Heap vs. Direct"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.nio.ByteBuffer;\nimport java.nio.CharBuffer;\nimport java.nio.charset.StandardCharsets;\n\n/**\n * ByteBuffer fundamentals: allocation, read/write, direct vs heap.\n */\npublic class ByteBufferDemo {\n\n    public static void main(String[] args) {\n        // Heap buffer: allocated on the JVM heap.\n        ByteBuffer heapBuf = ByteBuffer.allocate(256);\n        System.out.println(\"Heap buffer: \" + heapBuf);\n        System.out.println(\"  isDirect: \" + heapBuf.isDirect());\n        System.out.println(\"  hasArray: \" + heapBuf.hasArray());\n\n        // Direct buffer: native memory, potentially faster for I/O.\n        ByteBuffer directBuf = ByteBuffer.allocateDirect(256);\n        System.out.println(\"Direct buffer: \" + directBuf);\n        System.out.println(\"  isDirect: \" + directBuf.isDirect());\n        System.out.println(\"  hasArray: \" + directBuf.hasArray()); // false for direct\n\n        // Writing to a buffer.\n        heapBuf.put((byte) 'H');\n        heapBuf.put((byte) 'e');\n        heapBuf.put((byte) 'l');\n        heapBuf.put((byte) 'l');\n        heapBuf.put((byte) 'o');\n        heapBuf.put((byte) '!');\n\n        // Bulk put.\n        heapBuf.put(\" World\".getBytes(StandardCharsets.UTF_8));\n\n        System.out.println(\"\\nAfter writing: position=\" + heapBuf.position()\n            + \", limit=\" + heapBuf.limit() + \", capacity=\" + heapBuf.capacity());\n\n        // Flip → prepare for reading.\n        heapBuf.flip();\n        System.out.println(\"After flip: position=\" + heapBuf.position()\n            + \", limit=\" + heapBuf.limit());\n\n        // Reading.\n        byte[] dest = new byte[heapBuf.remaining()];\n        heapBuf.get(dest);\n        System.out.println(\"Read: \" + new String(dest, StandardCharsets.UTF_8));\n\n        // Compact → move remaining data to front.\n        heapBuf.compact();\n        System.out.println(\"After compact: position=\" + heapBuf.position()\n            + \", limit=\" + heapBuf.limit());\n\n        // Wrapping an existing byte array.\n        byte[] data = \"Hello from wrapped array\".getBytes(StandardCharsets.UTF_8);\n        ByteBuffer wrapped = ByteBuffer.wrap(data);\n        System.out.println(\"\\nWrapped buffer: \" + wrapped);\n        System.out.println(\"  backed by array: \" + wrapped.array().length + \" bytes\");\n\n        // CharBuffer view.\n        CharBuffer charBuf = StandardCharsets.UTF_8.decode(wrapped);\n        System.out.println(\"Decoded: \" + charBuf);\n\n        // Slice → shares data with the original.\n        heapBuf.clear();\n        heapBuf.put(\"0123456789\".getBytes());\n        heapBuf.flip();\n        ByteBuffer slice = heapBuf.slice(3, 4); // bytes at index 3-6.\n        byte[] sliceData = new byte[slice.remaining()];\n        slice.get(sliceData);\n        System.out.println(\"Slice (3,4): \" + new String(sliceData));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-socketchannel-and-serversocketchannel",
      children: "8.2 SocketChannel and ServerSocketChannel"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.ServerSocketChannel;\nimport java.nio.channels.SocketChannel;\nimport java.util.concurrent.ExecutorService;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.TimeUnit;\n\n/**\n * Non-blocking TCP echo server/client using SocketChannel and ServerSocketChannel.\n */\npublic class SocketChannelDemo {\n\n    private static final int PORT = 9876;\n    private static final String HOST = \"localhost\";\n\n    public static void main(String[] args) throws Exception {\n        ExecutorService executor = Executors.newFixedThreadPool(2);\n\n        // Start server.\n        executor.submit(() -> {\n            try { runServer(); } catch (IOException e) {\n                System.err.println(\"Server error: \" + e.getMessage());\n            }\n        });\n\n        // Give server time to start.\n        Thread.sleep(500);\n\n        // Start client.\n        executor.submit(() -> {\n            try { runClient(); } catch (IOException e) {\n                System.err.println(\"Client error: \" + e.getMessage());\n            }\n        });\n\n        executor.shutdown();\n        executor.awaitTermination(5, TimeUnit.SECONDS);\n    }\n\n    static void runServer() throws IOException {\n        try (ServerSocketChannel serverChannel = ServerSocketChannel.open()) {\n            serverChannel.bind(new InetSocketAddress(PORT));\n            System.out.println(\"Server listening on port \" + PORT);\n\n            try (SocketChannel clientChannel = serverChannel.accept()) {\n                System.out.println(\"Client connected: \" + clientChannel.getRemoteAddress());\n                ByteBuffer buffer = ByteBuffer.allocate(512);\n\n                while (clientChannel.read(buffer) > 0) {\n                    buffer.flip();\n                    // Echo the data back.\n                    clientChannel.write(buffer);\n                    buffer.clear();\n                }\n                System.out.println(\"Server done\");\n            }\n        }\n    }\n\n    static void runClient() throws IOException {\n        try (SocketChannel channel = SocketChannel.open()) {\n            channel.connect(new InetSocketAddress(HOST, PORT));\n            System.out.println(\"Connected to server\");\n\n            String message = \"Hello from NIO SocketChannel!\";\n            ByteBuffer buffer = ByteBuffer.wrap(message.getBytes());\n            channel.write(buffer);\n\n            // Read echo.\n            buffer.clear();\n            channel.read(buffer);\n            buffer.flip();\n            byte[] response = new byte[buffer.remaining()];\n            buffer.get(response);\n            System.out.println(\"Received echo: \" + new String(response));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-non-blocking-mode-with-selector",
      children: "8.3 Non-Blocking Mode with Selector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.net.InetSocketAddress;\nimport java.nio.ByteBuffer;\nimport java.nio.channels.SelectionKey;\nimport java.nio.channels.Selector;\nimport java.nio.channels.ServerSocketChannel;\nimport java.nio.channels.SocketChannel;\nimport java.util.Iterator;\nimport java.util.Set;\n\n/**\n * Non-blocking I/O with Selector: a single thread manages multiple channels.\n */\npublic class NonBlockingSelectorDemo {\n\n    public static void main(String[] args) throws IOException {\n        int port = 9875;\n\n        try (Selector selector = Selector.open();\n             ServerSocketChannel serverChannel = ServerSocketChannel.open()) {\n\n            serverChannel.configureBlocking(false);\n            serverChannel.bind(new InetSocketAddress(port));\n            serverChannel.register(selector, SelectionKey.OP_ACCEPT);\n            System.out.println(\"Non-blocking server on port \" + port + \" (runs 5s)\");\n\n            long deadline = System.currentTimeMillis() + 5000;\n\n            while (System.currentTimeMillis() < deadline) {\n                int readyChannels = selector.select(1000);\n                if (readyChannels == 0) continue;\n\n                Set<SelectionKey> selectedKeys = selector.selectedKeys();\n                Iterator<SelectionKey> keyIterator = selectedKeys.iterator();\n\n                while (keyIterator.hasNext()) {\n                    SelectionKey key = keyIterator.next();\n\n                    if (key.isAcceptable()) {\n                        // Accept a new connection.\n                        ServerSocketChannel ssc = (ServerSocketChannel) key.channel();\n                        SocketChannel client = ssc.accept();\n                        client.configureBlocking(false);\n                        client.register(selector, SelectionKey.OP_READ);\n                        System.out.println(\"Accepted: \" + client.getRemoteAddress());\n                    } else if (key.isReadable()) {\n                        // Read from a client.\n                        SocketChannel client = (SocketChannel) key.channel();\n                        ByteBuffer buffer = ByteBuffer.allocate(256);\n                        int bytesRead = client.read(buffer);\n                        if (bytesRead == -1) {\n                            key.cancel();\n                            client.close();\n                            System.out.println(\"Client disconnected\");\n                        } else {\n                            buffer.flip();\n                            // Echo back.\n                            client.write(buffer);\n                        }\n                    }\n                    keyIterator.remove();\n                }\n            }\n            System.out.println(\"Server stopped\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-file-handling-patterns",
      children: "9. File Handling Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-reading-large-files",
      children: "9.1 Reading Large Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.nio.charset.StandardCharsets;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.stream.Stream;\n\n/**\n * Strategies for reading large files without OutOfMemoryError.\n */\npublic class LargeFileReadingDemo {\n\n    public static void main(String[] args) throws IOException {\n        // Create a moderately large test file.\n        Path largeFile = java.nio.file.Files.createTempFile(\"large-\", \".txt\");\n        try (var bw = java.nio.file.Files.newBufferedWriter(largeFile, StandardCharsets.UTF_8)) {\n            for (int i = 0; i < 100_000; i++) {\n                bw.write(\"Line \" + i + \": \" + \"A\".repeat(100));\n                bw.newLine();\n            }\n        }\n        System.out.println(\"Created large file: \" + Files.size(largeFile) + \" bytes\");\n\n        // Strategy 1: Files.lines() → lazy stream (preferred for large files).\n        long start = System.currentTimeMillis();\n        try (Stream<String> lines = Files.lines(largeFile, StandardCharsets.UTF_8)) {\n            long count = lines\n                .filter(l -> l.contains(\"Line 500\"))\n                .count();\n            System.out.println(\"Strategy 1 (lines()): found \" + count + \" matches in \"\n                + (System.currentTimeMillis() - start) + \"ms\");\n        }\n\n        // Strategy 2: BufferedReader → manual line-by-line.\n        start = System.currentTimeMillis();\n        try (BufferedReader br = Files.newBufferedReader(largeFile, StandardCharsets.UTF_8)) {\n            String line;\n            long count = 0;\n            while ((line = br.readLine()) != null) {\n                if (line.contains(\"Line 500\")) count++;\n            }\n            System.out.println(\"Strategy 2 (BufferedReader): found \" + count + \" matches in \"\n                + (System.currentTimeMillis() - start) + \"ms\");\n        }\n\n        // Strategy 3: Fixed-size buffer for binary data.\n        start = System.currentTimeMillis();\n        byte[] buffer = new byte[8192];\n        try (var is = java.nio.file.Files.newInputStream(largeFile)) {\n            int bytesRead;\n            long total = 0;\n            while ((bytesRead = is.read(buffer)) != -1) {\n                total += bytesRead;\n            }\n            System.out.println(\"Strategy 3 (buffer): read \" + total + \" bytes in \"\n                + (System.currentTimeMillis() - start) + \"ms\");\n        }\n\n        // Strategy 4: FileChannel with ByteBuffer.\n        start = System.currentTimeMillis();\n        try (var channel = java.nio.channels.FileChannel.open(largeFile,\n                java.nio.file.StandardOpenOption.READ)) {\n            ByteBuffer buf = ByteBuffer.allocate(8192);\n            long total = 0;\n            while (channel.read(buf) > 0) {\n                total += buf.position();\n                buf.clear();\n            }\n            System.out.println(\"Strategy 4 (FileChannel): read \" + total + \" bytes in \"\n                + (System.currentTimeMillis() - start) + \"ms\");\n        }\n\n        java.nio.file.Files.deleteIfExists(largeFile);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-temporary-files",
      children: "9.2 Temporary Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.attribute.FileAttribute;\nimport java.nio.file.attribute.PosixFilePermission;\nimport java.nio.file.attribute.PosixFilePermissions;\nimport java.util.Set;\n\n/**\n * Creating and managing temporary files.\n */\npublic class TempFileDemo {\n\n    public static void main(String[] args) throws IOException {\n        // Basic temp file in default temp directory.\n        Path tmp1 = Files.createTempFile(\"app-\", \".tmp\");\n        System.out.println(\"Temp file 1: \" + tmp1);\n        Files.writeString(tmp1, \"Temporary content\");\n        System.out.println(\"  Content: \" + Files.readString(tmp1));\n        Files.delete(tmp1); // Clean up immediately.\n\n        // Temp file in a specific directory.\n        Path customDir = Files.createTempDirectory(\"myapp-\");\n        Path tmp2 = Files.createTempFile(customDir, \"upload-\", \".tmp\");\n        System.out.println(\"Temp file 2: \" + tmp2);\n\n        // Temp directory.\n        Path tmpDir = Files.createTempDirectory(\"session-\");\n        System.out.println(\"Temp dir: \" + tmpDir);\n\n        // Register delete-on-exit hook (not transitive for directories).\n        tmp2.toFile().deleteOnExit();\n        tmpDir.toFile().deleteOnExit();\n\n        // Using deleteOnExit recursively.\n        Runtime.getRuntime().addShutdownHook(new Thread(() -> {\n            try (var stream = Files.walk(tmpDir)) {\n                stream.sorted((a, b) -> b.toString().length() - a.toString().length())\n                    .forEach(p -> {\n                        try { Files.deleteIfExists(p); } catch (IOException ignored) {}\n                    });\n            } catch (IOException ignored) {}\n            try { Files.deleteIfExists(tmpDir); } catch (IOException ignored) {}\n            try { Files.deleteIfExists(customDir); } catch (IOException ignored) {}\n        }));\n\n        System.out.println(\"Cleanup registered. Temp files will be removed on JVM exit.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-file-attributes",
      children: "9.3 File Attributes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.attribute.BasicFileAttributes;\nimport java.nio.file.attribute.DosFileAttributes;\nimport java.nio.file.attribute.FileTime;\nimport java.nio.file.attribute.PosixFileAttributes;\nimport java.nio.file.attribute.PosixFilePermission;\nimport java.nio.file.attribute.PosixFilePermissions;\nimport java.util.Set;\n\n/**\n * Reading and setting file attributes.\n */\npublic class FileAttributesDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path file = Files.createTempFile(\"attr-\", \".txt\");\n        Files.writeString(file, \"Attributes demo\");\n\n        // Basic file attributes (cross-platform).\n        BasicFileAttributes basic = Files.readAttributes(file, BasicFileAttributes.class);\n        System.out.println(\"=== Basic Attributes ===\");\n        System.out.println(\"Creation time: \" + basic.creationTime());\n        System.out.println(\"Last access time: \" + basic.lastAccessTime());\n        System.out.println(\"Last modified time: \" + basic.lastModifiedTime());\n        System.out.println(\"Size: \" + basic.size());\n        System.out.println(\"Is regular file: \" + basic.isRegularFile());\n        System.out.println(\"Is directory: \" + basic.isDirectory());\n        System.out.println(\"Is symbolic link: \" + basic.isSymbolicLink());\n        System.out.println(\"File key: \" + basic.fileKey());\n\n        // Setting timestamps.\n        FileTime newTime = FileTime.fromMillis(System.currentTimeMillis() - 86400000); // 1 day ago\n        Files.setLastModifiedTime(file, newTime);\n        System.out.println(\"\\nUpdated last modified: \" + Files.getLastModifiedTime(file));\n\n        // Map view of attributes.\n        System.out.println(\"\\n=== Attribute Map View ===\");\n        var attrs = Files.readAttributes(file, \"basic:*\");\n        attrs.forEach((key, val) -> System.out.println(\"  \" + key + \" = \" + val));\n\n        // DOS attributes (Windows-specific).\n        if (System.getProperty(\"os.name\").toLowerCase().contains(\"win\")) {\n            DosFileAttributes dos = Files.readAttributes(file, DosFileAttributes.class);\n            System.out.println(\"\\n=== DOS Attributes ===\");\n            System.out.println(\"Read only: \" + dos.isReadOnly());\n            System.out.println(\"Hidden: \" + dos.isHidden());\n            System.out.println(\"Archive: \" + dos.isArchive());\n            System.out.println(\"System: \" + dos.isSystem());\n        }\n\n        // POSIX attributes (Unix-specific).\n        if (!System.getProperty(\"os.name\").toLowerCase().contains(\"win\")) {\n            PosixFileAttributes posix = Files.readAttributes(file, PosixFileAttributes.class);\n            System.out.println(\"\\n=== POSIX Attributes ===\");\n            System.out.println(\"Owner: \" + posix.owner().getName());\n            System.out.println(\"Group: \" + posix.group().getName());\n            System.out.println(\"Permissions: \" + PosixFilePermissions.toString(posix.permissions()));\n\n            // Set permissions.\n            Set<PosixFilePermission> perms = PosixFilePermissions.fromString(\"rw-r-----\");\n            Files.setPosixFilePermissions(file, perms);\n            System.out.println(\"Updated permissions: \"\n                + PosixFilePermissions.toString(Files.getPosixFilePermissions(file)));\n        }\n\n        Files.deleteIfExists(file);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "94-symbolic-links",
      children: "9.4 Symbolic Links"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\n/**\n * Working with symbolic links (requires appropriate OS permissions).\n */\npublic class SymbolicLinkDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path target = Files.createTempFile(\"target-\", \".txt\");\n        Files.writeString(target, \"This is the target file\");\n\n        Path link = target.resolveSibling(\"link-to-target.txt\");\n\n        try {\n            Files.createSymbolicLink(link, target);\n            System.out.println(\"Created symbolic link: \" + link);\n            System.out.println(\"  -> \" + Files.readSymbolicLink(link));\n\n            // isSymbolicLink().\n            System.out.println(\"Is symbolic link: \" + Files.isSymbolicLink(link));\n            System.out.println(\"Target is regular file: \" + Files.isRegularFile(link));\n            System.out.println(\"Link is regular file: \" + Files.isRegularFile(target));\n\n            // Reading through the link.\n            String content = Files.readString(link);\n            System.out.println(\"Read through link: \" + content);\n\n            // Deleting the link (does NOT delete the target).\n            Files.delete(link);\n            System.out.println(\"Link deleted, target still exists: \" + Files.exists(target));\n        } catch (UnsupportedOperationException | SecurityException e) {\n            System.out.println(\"Symbolic links not supported in this environment: \" + e.getMessage());\n        }\n\n        Files.deleteIfExists(target);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-compression",
      children: "10. Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-gzip-compression",
      children: "10.1 GZIP Compression"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.InputStreamReader;\nimport java.io.OutputStreamWriter;\nimport java.io.PrintWriter;\nimport java.nio.charset.StandardCharsets;\nimport java.util.zip.GZIPInputStream;\nimport java.util.zip.GZIPOutputStream;\n\n/**\n * GZIP compression for individual files.\n */\npublic class GzipDemo {\n\n    public static void main(String[] args) throws Exception {\n        String original = \"hello.txt\";\n        String compressed = \"hello.txt.gz\";\n        String decompressed = \"hello-decompressed.txt\";\n\n        // Create test data.\n        try (PrintWriter pw = new PrintWriter(original, \"UTF-8\")) {\n            for (int i = 0; i < 1000; i++) {\n                pw.println(\"Line \" + i + \": The quick brown fox jumps over the lazy dog.\");\n            }\n        }\n\n        // Compress to GZIP.\n        try (GZIPOutputStream gzos = new GZIPOutputStream(new FileOutputStream(compressed));\n             FileInputStream fis = new FileInputStream(original)) {\n            byte[] buffer = new byte[8192];\n            int bytesRead;\n            while ((bytesRead = fis.read(buffer)) != -1) {\n                gzos.write(buffer, 0, bytesRead);\n            }\n            gzos.finish();\n        }\n        System.out.println(\"Compressed: \" + new java.io.File(original).length()\n            + \" -> \" + new java.io.File(compressed).length() + \" bytes\");\n\n        // Decompress.\n        try (GZIPInputStream gzis = new GZIPInputStream(new FileInputStream(compressed));\n             FileOutputStream fos = new FileOutputStream(decompressed)) {\n            byte[] buffer = new byte[8192];\n            int bytesRead;\n            while ((bytesRead = gzis.read(buffer)) != -1) {\n                fos.write(buffer, 0, bytesRead);\n            }\n        }\n        System.out.println(\"Decompressed to: \" + decompressed);\n\n        // Read GZIP file directly with text reader.\n        System.out.println(\"\\nReading GZIP file directly (first 3 lines):\");\n        try (BufferedReader br = new BufferedReader(\n                new InputStreamReader(new GZIPInputStream(new FileInputStream(compressed)),\n                    StandardCharsets.UTF_8))) {\n            String line;\n            int count = 0;\n            while ((line = br.readLine()) != null && count < 3) {\n                System.out.println(\"  \" + line);\n                count++;\n            }\n        }\n\n        // Cleanup.\n        for (String f : new String[]{original, compressed, decompressed}) {\n            new java.io.File(f).delete();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-zip-file-handling",
      children: "10.2 ZIP File Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.zip.ZipEntry;\nimport java.util.zip.ZipInputStream;\nimport java.util.zip.ZipOutputStream;\n\n/**\n * Creating and reading ZIP archives with multiple entries.\n */\npublic class ZipFileDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path tempDir = Files.createTempDirectory(\"zip-demo-\");\n        Path zipFile = tempDir.resolve(\"archive.zip\");\n        System.out.println(\"Working in: \" + tempDir);\n\n        // Create some test files.\n        Path file1 = tempDir.resolve(\"document.txt\");\n        Files.writeString(file1, \"This is the content of document.txt\");\n\n        Path file2 = tempDir.resolve(\"data.csv\");\n        Files.writeString(file2, \"id,name,value\\n1,Alice,100\\n2,Bob,200\");\n\n        Path file3 = tempDir.resolve(\"notes.md\");\n        Files.writeString(file3, \"# Notes\\n\\nThis is a markdown file.\");\n\n        // --- CREATE ZIP ---\n        try (ZipOutputStream zos = new ZipOutputStream(new FileOutputStream(zipFile.toFile()))) {\n            addToZip(zos, file1, \"documents/document.txt\");\n            addToZip(zos, file2, \"data/data.csv\");\n            addToZip(zos, file3, \"notes/notes.md\");\n\n            // Add an entry with a comment and custom time.\n            ZipEntry extra = new ZipEntry(\"readme.txt\");\n            extra.setComment(\"This is an extra readme file\");\n            extra.setTime(System.currentTimeMillis());\n            zos.putNextEntry(extra);\n            zos.write(\"This file was added programmatically.\".getBytes());\n            zos.closeEntry();\n        }\n        System.out.println(\"Created ZIP: \" + Files.size(zipFile) + \" bytes\");\n\n        // --- READ ZIP ---\n        System.out.println(\"\\n=== Reading ZIP ===\");\n        try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile.toFile()))) {\n            ZipEntry entry;\n            while ((entry = zis.getNextEntry()) != null) {\n                System.out.println(\"Entry: \" + entry.getName());\n                System.out.println(\"  Size: \" + entry.getSize() + \" bytes\");\n                System.out.println(\"  Compressed: \" + entry.getCompressedSize() + \" bytes\");\n                System.out.println(\"  Method: \" + (entry.getMethod() == ZipEntry.DEFLATED ?\n                    \"DEFLATED\" : \"STORED\"));\n                System.out.println(\"  Comment: \" + (entry.getComment() != null ?\n                    entry.getComment() : \"(none)\"));\n\n                // Read content.\n                byte[] content = zis.readAllBytes();\n                System.out.println(\"  Content (\" + content.length + \" bytes): \"\n                    + new String(content, 0, Math.min(80, content.length)) + \"...\");\n                System.out.println();\n                zis.closeEntry();\n            }\n        }\n\n        // Cleanup.\n        try (var stream = Files.walk(tempDir)) {\n            stream.sorted((a, b) -> b.toString().length() - a.toString().length())\n                .forEach(p -> {\n                    try { Files.deleteIfExists(p); } catch (IOException ignored) {}\n                });\n        }\n    }\n\n    private static void addToZip(ZipOutputStream zos, Path file, String entryName)\n            throws IOException {\n        ZipEntry entry = new ZipEntry(entryName);\n        entry.setTime(Files.getLastModifiedTime(file).toMillis());\n        zos.putNextEntry(entry);\n        Files.copy(file, zos);\n        zos.closeEntry();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-zipinputstream-with-directories",
      children: "10.3 ZipInputStream with Directories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.FileInputStream;\nimport java.io.FileOutputStream;\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.zip.ZipEntry;\nimport java.util.zip.ZipOutputStream;\n\n/**\n * Advanced ZIP handling: directories in ZIP, recursive compression.\n */\npublic class ZipDirectoryDemo {\n\n    public static void main(String[] args) throws IOException {\n        Path tempDir = Files.createTempDirectory(\"ziptree-\");\n        Path zipFile = tempDir.resolve(\"tree.zip\");\n\n        // Create a directory tree.\n        Path sub1 = Files.createDirectories(tempDir.resolve(\"a/b\"));\n        Path sub2 = Files.createDirectories(tempDir.resolve(\"c\"));\n        Files.writeString(sub1.resolve(\"f1.txt\"), \"File 1 in a/b\");\n        Files.writeString(sub1.resolve(\"f2.txt\"), \"File 2 in a/b\");\n        Files.writeString(sub2.resolve(\"f3.txt\"), \"File 3 in c\");\n\n        // Recursively compress.\n        try (ZipOutputStream zos = new ZipOutputStream(new FileOutputStream(zipFile.toFile()))) {\n            Files.walk(tempDir)\n                .filter(p -> !p.equals(tempDir) && !p.equals(zipFile))\n                .forEach(p -> {\n                    try {\n                        if (Files.isDirectory(p)) {\n                            // Add directory entry (name ends with /).\n                            String entryName = tempDir.relativize(p).toString().replace(\"\\\\\", \"/\") + \"/\";\n                            ZipEntry entry = new ZipEntry(entryName);\n                            entry.setTime(Files.getLastModifiedTime(p).toMillis());\n                            zos.putNextEntry(entry);\n                            zos.closeEntry();\n                        } else {\n                            String entryName = tempDir.relativize(p).toString().replace(\"\\\\\", \"/\");\n                            ZipEntry entry = new ZipEntry(entryName);\n                            entry.setTime(Files.getLastModifiedTime(p).toMillis());\n                            entry.setSize(Files.size(p));\n                            zos.putNextEntry(entry);\n                            Files.copy(p, zos);\n                            zos.closeEntry();\n                        }\n                    } catch (IOException e) {\n                        System.err.println(\"Error adding \" + p + \": \" + e.getMessage());\n                    }\n                });\n        }\n        System.out.println(\"Created recursive ZIP: \" + Files.size(zipFile) + \" bytes\");\n\n        // Read directory entries.\n        System.out.println(\"\\n=== ZIP entries ===\");\n        try (ZipInputStream zis = new ZipInputStream(new FileInputStream(zipFile.toFile()))) {\n            ZipEntry entry;\n            while ((entry = zis.getNextEntry()) != null) {\n                System.out.println(\"  \" + (entry.isDirectory() ? \"[DIR] \" : \"[FILE] \")\n                    + entry.getName() + \" (\" + entry.getCompressedSize() + \" bytes)\");\n                zis.closeEntry();\n            }\n        }\n\n        // Cleanup.\n        try (var stream = Files.walk(tempDir)) {\n            stream.sorted((a, b) -> b.toString().length() - a.toString().length())\n                .forEach(p -> {\n                    try { Files.deleteIfExists(p); } catch (IOException ignored) {}\n                });\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-resource-file-reading-patterns",
      children: "11. Resource File Reading Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-reading-from-the-classpath",
      children: "11.1 Reading from the Classpath"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.io.InputStreamReader;\nimport java.nio.charset.StandardCharsets;\nimport java.util.stream.Collectors;\n\n/**\n * Reading resources from the classpath (inside JAR files or classpath directories).\n * These resources are NOT regular files → use getResourceAsStream().\n */\npublic class ClasspathResourceDemo {\n\n    /**\n     * Reads a resource from the classpath.\n     */\n    public static String readResource(String resourcePath) {\n        // Use the class loader to get an InputStream.\n        try (InputStream is = ClasspathResourceDemo.class.getResourceAsStream(resourcePath)) {\n            if (is == null) {\n                throw new IllegalArgumentException(\"Resource not found: \" + resourcePath);\n            }\n            try (BufferedReader reader = new BufferedReader(\n                    new InputStreamReader(is, StandardCharsets.UTF_8))) {\n                return reader.lines().collect(Collectors.joining(\"\\n\"));\n            }\n        } catch (IOException e) {\n            throw new RuntimeException(\"Failed to read resource: \" + resourcePath, e);\n        }\n    }\n\n    public static void main(String[] args) {\n        // This reads a resource relative to the classpath root.\n        // Place a file at src/main/resources/config.properties (Maven) or classpath root.\n        // For this demo, we create a resource in the same package.\n        String content = readResource(\"/chapter4/sample-resource.txt\");\n        System.out.println(\"Resource content:\\n\" + content);\n    }\n\n    // Helper: create sample resource for demonstration.\n    public static void createSampleResource() throws IOException {\n        // In a real build, this file would exist in src/main/resources/.\n        // For standalone execution, we create it programmatically.\n        var url = ClasspathResourceDemo.class.getResource(\"/chapter4/\");\n        if (url == null) {\n            System.out.println(\"Note: Place sample-resource.txt on your classpath to test.\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-spring-boot-resourceloader",
      children: "11.2 Spring Boot ResourceLoader"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\n// This is a conceptual example showing Spring Boot's ResourceLoader.\n// It requires Spring Framework on the classpath.\n/*\nimport org.springframework.core.io.Resource;\nimport org.springframework.core.io.ResourceLoader;\nimport org.springframework.stereotype.Service;\nimport java.io.BufferedReader;\nimport java.io.InputStreamReader;\nimport java.nio.charset.StandardCharsets;\nimport java.util.stream.Collectors;\n\n@Service\npublic class SpringResourceService {\n\n    private final ResourceLoader resourceLoader;\n\n    public SpringResourceService(ResourceLoader resourceLoader) {\n        this.resourceLoader = resourceLoader;\n    }\n\n    public String loadClasspathFile(String path) {\n        // Supports: classpath:, file:, https: prefixes.\n        Resource resource = resourceLoader.getResource(\"classpath:\" + path);\n        try (BufferedReader reader = new BufferedReader(\n                new InputStreamReader(resource.getInputStream(), StandardCharsets.UTF_8))) {\n            return reader.lines().collect(Collectors.joining(\"\\n\"));\n        } catch (IOException e) {\n            throw new RuntimeException(\"Failed to load resource: \" + path, e);\n        }\n    }\n\n    public String loadFileSystemPath(String absolutePath) {\n        Resource resource = resourceLoader.getResource(\"file:\" + absolutePath);\n        // ... same pattern\n        return \"\";\n    }\n}\n*/\npublic class SpringResourceDemo {\n    public static void main(String[] args) {\n        System.out.println(\"See the commented Spring Boot example above.\");\n        System.out.println(\"In Spring Boot, inject ResourceLoader and use\");\n        System.out.println(\"resourceLoader.getResource(\\\"classpath:data.json\\\")\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-error-handling-patterns-for-io",
      children: "12. Error Handling Patterns for I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-retry-pattern",
      children: "12.1 Retry Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.util.concurrent.ThreadLocalRandom;\n\n/**\n * Retry pattern for transient I/O failures.\n */\npublic class RetryPatternDemo {\n\n    @FunctionalInterface\n    interface IORunnable {\n        void run() throws IOException;\n    }\n\n    /**\n     * Retries an I/O operation with exponential backoff.\n     */\n    public static void retryIO(IORunnable operation, int maxRetries) throws IOException {\n        IOException lastException = null;\n        for (int attempt = 1; attempt <= maxRetries; attempt++) {\n            try {\n                operation.run();\n                return; // success\n            } catch (IOException e) {\n                lastException = e;\n                if (attempt == maxRetries) {\n                    throw e; // final attempt failed\n                }\n                long waitMs = (long) Math.pow(2, attempt) * 100\n                    + ThreadLocalRandom.current().nextInt(100);\n                System.err.println(\"Attempt \" + attempt + \" failed, retrying in \"\n                    + waitMs + \"ms: \" + e.getMessage());\n                try {\n                    Thread.sleep(waitMs);\n                } catch (InterruptedException ie) {\n                    Thread.currentThread().interrupt();\n                    throw new IOException(\"Interrupted during retry\", ie);\n                }\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        Path tempFile;\n        try {\n            tempFile = Files.createTempFile(\"retry-\", \".txt\");\n            Files.writeString(tempFile, \"Retry demo\");\n\n            // Simulate flaky operation.\n            retryIO(() -> {\n                if (ThreadLocalRandom.current().nextDouble() < 0.6) {\n                    throw new IOException(\"Simulated transient failure\");\n                }\n                String content = Files.readString(tempFile);\n                System.out.println(\"Successfully read: \" + content);\n            }, 5);\n\n            Files.deleteIfExists(tempFile);\n        } catch (IOException e) {\n            System.err.println(\"Operation failed after retries: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-fallback-pattern",
      children: "12.2 Fallback Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\n/**\n * Fallback pattern: try resource A, if unavailable use resource B.\n */\npublic class FallbackPatternDemo {\n\n    public static String loadConfiguration() {\n        // Try primary location.\n        Path primary = Paths.get(\"/etc/app/config.properties\");\n        try {\n            if (Files.exists(primary)) {\n                return Files.readString(primary);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Primary config failed: \" + e.getMessage());\n        }\n\n        // Fallback to user home.\n        Path secondary = Paths.get(System.getProperty(\"user.home\"), \".app\", \"config.properties\");\n        try {\n            if (Files.exists(secondary)) {\n                return Files.readString(secondary);\n            }\n        } catch (IOException e) {\n            System.err.println(\"Secondary config failed: \" + e.getMessage());\n        }\n\n        // Final fallback: classpath default.\n        try (var is = FallbackPatternDemo.class.getResourceAsStream(\"/default-config.properties\")) {\n            if (is != null) {\n                return new String(is.readAllBytes());\n            }\n        } catch (IOException e) {\n            throw new RuntimeException(\"All configuration sources failed\", e);\n        }\n\n        throw new RuntimeException(\"No configuration source found\");\n    }\n\n    public static void main(String[] args) {\n        try {\n            String config = loadConfiguration();\n            System.out.println(\"Loaded config (\" + config.length() + \" chars)\");\n        } catch (RuntimeException e) {\n            System.err.println(\"Config load failed: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exception hierarchy"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Throwable"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Error"
        }), " (JVM failures) and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exception"
        }), " (program conditions); ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RuntimeException"
        }), " is unchecked; all others are checked."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "try/catch/finally"
        }), ": Basic exception handling; finally always runs (for cleanup)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-catch"
        }), ": Catch multiple unrelated exception types in one block (Java 7+)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "try-with-resources"
        }), ": Auto-closes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AutoCloseable"
        }), " resources; resources closed in reverse order; suppressed exceptions for close-time failures."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom exceptions"
        }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Exception"
        }), " for checked, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RuntimeException"
        }), " for unchecked; include meaningful fields; chain causes properly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Best practices"
        }), ": Fail fast, wrap low-level exceptions, log at appropriate levels, never swallow, design APIs that communicate error conditions clearly."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java.io"
          })
        }), ": Provides stream-based I/O: byte streams (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileInputStream/OutputStream"
        }), "), character streams (", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileReader/Writer"
        }), "), buffered variants, bridges (", (0,jsx_runtime.jsx)(_components.code, {
          children: "InputStreamReader/OutputStreamWriter"
        }), "), formatted output (", (0,jsx_runtime.jsx)(_components.code, {
          children: "PrintWriter"
        }), "), primitive data (", (0,jsx_runtime.jsx)(_components.code, {
          children: "DataInputStream/OutputStream"
        }), "), and object serialization (", (0,jsx_runtime.jsx)(_components.code, {
          children: "ObjectInputStream/OutputStream"
        }), ")."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "java.nio.file"
          })
        }), ": Modern filesystem API with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Path"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Files"
        }), " utility, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileVisitor"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "WatchService"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DirectoryStream"
        }), ", and powerful stream-based operations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serialization"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Serializable"
        }), " with explicit ", (0,jsx_runtime.jsx)(_components.code, {
          children: "serialVersionUID"
        }), "; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transient"
        }), " for sensitive fields; custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "readObject"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "writeObject"
        }), " for validation; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Externalizable"
        }), " for full control; serialization proxy pattern for security."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NIO channels & buffers"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ByteBuffer"
        }), " (heap/direct), ", (0,jsx_runtime.jsx)(_components.code, {
          children: "FileChannel"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SocketChannel"
        }), "/", (0,jsx_runtime.jsx)(_components.code, {
          children: "ServerSocketChannel"
        }), ", scatter/gather, zero-copy ", (0,jsx_runtime.jsx)(_components.code, {
          children: "transferTo"
        }), ", non-blocking I/O with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Selector"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "File patterns"
        }), ": Streaming large files, temporary files, file attributes, symbolic links."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Compression"
        }), ": ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GZIPInputStream/OutputStream"
        }), " for single-file compression; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ZipInputStream/OutputStream"
        }), " for multi-entry archives."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource loading"
        }), ": Classpath resources via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "getResourceAsStream()"
        }), "; Spring Boot ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ResourceLoader"
        }), "."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Type every code example yourself → muscle memory for Java syntax is built through active practice, not passive reading."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Understanding the \"why\" behind Java language features is more important than memorizing syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "Primitives"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Value types stored on stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed size, pass by value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance-critical code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reference Types"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object instances on heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Variable size, pass by reference"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex data structures"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cannot change after creation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Thread-safe, cacheable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, keys, configuration"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Common Pitfalls"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Syntax"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java is case-sensitive, class-based, statically typed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Missing semicolons, case errors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Types"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8 primitives, object wrappers, String"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Autoboxing overhead in loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Control Flow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "if/else, switch (arrow/yield), loops, break/continue"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch fall-through without break"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Batch"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mobile"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Data classes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Type-safe visitors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event classification"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State handling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Switch Expressions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Error code mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Status transitions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Navigation"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which is NOT a valid Java primitive type?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) int"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) boolean"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) string"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) char"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) string.** String is a reference type (java.lang.String), not a primitive.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default value of a boolean field in a class?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) true"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) false"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) null"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) undefined"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) false.** Class fields are initialized to default values.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) static"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) final"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) private"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) abstract"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) final.** A final method cannot be overridden by subclasses.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-exception-handling",
      children: "Exercise 1: Exception Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that reads two integers from the user and divides them. Handle ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ArithmeticException"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InputMismatchException"
      }), ", and any other checked exceptions. Use try-with-resources for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Scanner"
      }), ". Print appropriate error messages for each exception type."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Solution outline\npackage chapter4.exercises;\n\nimport java.util.InputMismatchException;\nimport java.util.Scanner;\n\npublic class Exercise1 {\n    public static void main(String[] args) {\n        // TODO: Implement division with exception handling\n        // 1. Use try-with-resources with Scanner(System.in)\n        // 2. Read two integers\n        // 3. Handle ArithmeticException for division by zero\n        // 4. Handle InputMismatchException for non-integer input\n        // 5. Print a clear error message for each case\n        // 6. If successful, print \"Result: X\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-custom-exception",
      children: "Exercise 2: Custom Exception"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a checked exception ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InsufficientFundsException"
      }), " with fields for the account ID, requested amount, and current balance. Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BankAccount"
      }), " class with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "withdraw(double amount)"
      }), " that throws this exception when the balance is insufficient. Demonstrate in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "main()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-file-copy-with-buffered-streams",
      children: "Exercise 3: File Copy with Buffered Streams"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that copies a file using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BufferedInputStream"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BufferedOutputStream"
      }), " with an 8192-byte buffer. The program should accept source and destination paths as command-line arguments. Measure and print the time taken. Handle all I/O exceptions."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-try-with-resources-reflection-java-9",
      children: "Exercise 4: try-with-resources Reflection (Java 9+)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a class with two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AutoCloseable"
      }), " resources. Open them outside the try block using Java 9's effectively-final variable feature. Demonstrate that resources are closed even when an exception occurs in the try block, and verify suppressed exceptions work."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-serialization-and-deserialization",
      children: "Exercise 5: Serialization and Deserialization"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Student"
      }), " class with fields: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "name"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "id"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "gpa"
      }), ", and a transient ", (0,jsx_runtime.jsx)(_components.code, {
        children: "password"
      }), " field. Serialize an instance to a file, then deserialize it. Show that the transient field is ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " after deserialization. Add a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "writeObject"
      }), " method that encrypts (simple XOR) the GPA before serialization and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "readObject"
      }), " that decrypts it."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-filevisitor",
      children: "Exercise 6: FileVisitor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Files.walkFileTree()"
      }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimpleFileVisitor"
      }), " to find all ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".java"
      }), " files in a directory tree. Print the absolute path and size of each file. Count the total number of ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".java"
      }), " files found."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-watchservice",
      children: "Exercise 7: WatchService"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a directory monitoring tool using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "WatchService"
      }), " that watches a directory for new ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".txt"
      }), " files. When a new ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".txt"
      }), " file appears, read its content and print it to the console. The program should run until the user presses Ctrl+C."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-memory-mapped-file",
      children: "Exercise 8: Memory-Mapped File"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that creates a 100 MB file and uses a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MappedByteBuffer"
      }), " to write sequential integers to it. Then read the file back using a second ", (0,jsx_runtime.jsx)(_components.code, {
        children: "MappedByteBuffer"
      }), " and verify the values. Measure the time for both operations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-zip-archiver",
      children: "Exercise 9: ZIP Archiver"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a program that:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creates a ZIP file containing at least three entries with different content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lists all entries with their compressed/uncompressed sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extracts a specific entry by name and prints its content"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adds a comment to one of the entries"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-serialization-proxy-pattern",
      children: "Exercise 10: Serialization Proxy Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Take the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Period"
      }), " class from Section 7.5 and attempt to \"break\" it by constructing a malicious byte stream that would create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Period"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "start > end"
      }), ". Verify that the serialization proxy pattern prevents this attack."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package chapter4.exercises;\n\nimport java.io.*;\nimport java.util.Date;\n\npublic class Exercise10 {\n    public static void main(String[] args) throws Exception {\n        // TODO: Demonstrate serialization proxy protection\n        // 1. Create a byte array with an invalid Period (start after end)\n        // 2. Wrap it in ObjectInputStream\n        // 3. Verify that readObject() throws InvalidObjectException\n        // 4. Show that a valid Period works correctly\n\n        // HINT: Use ByteArrayOutputStream + ObjectOutputStream to\n        // serialize a valid Period, then modify the bytes in the\n        // stream to swap start and end, then deserialize.\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter 4: Exception Handling & I/O"
      })
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