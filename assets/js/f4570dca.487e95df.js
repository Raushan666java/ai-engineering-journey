"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[79317],{

/***/ 1546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_01_jvm_memory_md_f45_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-01-jvm-memory-md-f45.json
const site_docs_courses_java_01_jvm_memory_md_f45_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/01-jvm-memory","title":"JVM Architecture & Memory Management","description":"Previous Concurrency & Threading","source":"@site/docs/courses/java/01-jvm-memory.md","sourceDirName":"courses/java","slug":"/java/01-jvm-memory","permalink":"/ai-engineering-journey/java/01-jvm-memory","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"01-jvm-memory","slug":"/java/01-jvm-memory","title":"JVM Architecture & Memory Management","sidebar_label":"JVM Architecture & Memory Management","sidebar_position":1},"sidebar":"coursesSidebar","previous":{"title":"Java & Spring Boot — Complete University Textbook","permalink":"/ai-engineering-journey/java"},"next":{"title":"Multithreading & Concurrency","permalink":"/ai-engineering-journey/java/02-concurrency"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/01-jvm-memory.md


const frontMatter = {
	id: '01-jvm-memory',
	slug: '/java/01-jvm-memory',
	title: 'JVM Architecture & Memory Management',
	sidebar_label: 'JVM Architecture & Memory Management',
	sidebar_position: 1
};
const contentTitle = 'JVM Architecture & Memory Management';

const assets = {

};

/*End Image Gallery*/


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
  "value": "1. JVM Architecture Overview",
  "id": "1-jvm-architecture-overview",
  "level": 2
}, {
  "value": "2. Class Loading Mechanism",
  "id": "2-class-loading-mechanism",
  "level": 2
}, {
  "value": "2.1 Built-in Class Loaders",
  "id": "21-built-in-class-loaders",
  "level": 3
}, {
  "value": "2.2 The Class Loading Lifecycle",
  "id": "22-the-class-loading-lifecycle",
  "level": 3
}, {
  "value": "2.3 Custom Class Loader",
  "id": "23-custom-class-loader",
  "level": 3
}, {
  "value": "2.4 The Delegation Model in Practice",
  "id": "24-the-delegation-model-in-practice",
  "level": 3
}, {
  "value": "3. Runtime Data Areas",
  "id": "3-runtime-data-areas",
  "level": 2
}, {
  "value": "3.1 Overview",
  "id": "31-overview",
  "level": 3
}, {
  "value": "3.2 Method Area (Metaspace in JDK 8+)",
  "id": "32-method-area-metaspace-in-jdk-8",
  "level": 3
}, {
  "value": "3.3 The Heap",
  "id": "33-the-heap",
  "level": 3
}, {
  "value": "3.4 Stack, PC Registers, and Native Method Stack",
  "id": "34-stack-pc-registers-and-native-method-stack",
  "level": 3
}, {
  "value": "3.5 Direct Memory",
  "id": "35-direct-memory",
  "level": 3
}, {
  "value": "4. Bytecode Overview",
  "id": "4-bytecode-overview",
  "level": 2
}, {
  "value": "4.1 Examining Bytecode with javap",
  "id": "41-examining-bytecode-with-javap",
  "level": 3
}, {
  "value": "4.2 Key Bytecode Instructions",
  "id": "42-key-bytecode-instructions",
  "level": 3
}, {
  "value": "4.3 Stack Frame Walkthrough",
  "id": "43-stack-frame-walkthrough",
  "level": 3
}, {
  "value": "4.4 Invokedynamic and Lambda Bytecode",
  "id": "44-invokedynamic-and-lambda-bytecode",
  "level": 3
}, {
  "value": "5. JIT Compilation",
  "id": "5-jit-compilation",
  "level": 2
}, {
  "value": "5.1 Interpretation vs Compilation",
  "id": "51-interpretation-vs-compilation",
  "level": 3
}, {
  "value": "5.2 Tiered Compilation",
  "id": "52-tiered-compilation",
  "level": 3
}, {
  "value": "5.3 Hotspot Detection",
  "id": "53-hotspot-detection",
  "level": 3
}, {
  "value": "5.4 Inlining",
  "id": "54-inlining",
  "level": 3
}, {
  "value": "5.5 Escape Analysis",
  "id": "55-escape-analysis",
  "level": 3
}, {
  "value": "5.6 On-Stack Replacement (OSR)",
  "id": "56-on-stack-replacement-osr",
  "level": 3
}, {
  "value": "5.7 C1 vs C2 Compiler",
  "id": "57-c1-vs-c2-compiler",
  "level": 3
}, {
  "value": "5.8 Graal JIT Compiler",
  "id": "58-graal-jit-compiler",
  "level": 3
}, {
  "value": "6. Memory Areas -- Deep Dive",
  "id": "6-memory-areas----deep-dive",
  "level": 2
}, {
  "value": "6.1 Heap Layout Visualization",
  "id": "61-heap-layout-visualization",
  "level": 3
}, {
  "value": "6.2 Object Header and Memory Layout",
  "id": "62-object-header-and-memory-layout",
  "level": 3
}, {
  "value": "6.3 Metaspace",
  "id": "63-metaspace",
  "level": 3
}, {
  "value": "6.4 Thread Stack Layout",
  "id": "64-thread-stack-layout",
  "level": 3
}, {
  "value": "7. Garbage Collection",
  "id": "7-garbage-collection",
  "level": 2
}, {
  "value": "7.1 The Generational Hypothesis",
  "id": "71-the-generational-hypothesis",
  "level": 3
}, {
  "value": "7.2 Basic GC Algorithms",
  "id": "72-basic-gc-algorithms",
  "level": 3
}, {
  "value": "7.3 Identifying Liveness (GC Roots)",
  "id": "73-identifying-liveness-gc-roots",
  "level": 3
}, {
  "value": "8. GC Implementations",
  "id": "8-gc-implementations",
  "level": 2
}, {
  "value": "8.1 Serial GC",
  "id": "81-serial-gc",
  "level": 3
}, {
  "value": "8.2 Parallel GC (Throughput Collector)",
  "id": "82-parallel-gc-throughput-collector",
  "level": 3
}, {
  "value": "8.3 G1 GC",
  "id": "83-g1-gc",
  "level": 3
}, {
  "value": "8.4 ZGC",
  "id": "84-zgc",
  "level": 3
}, {
  "value": "8.5 Shenandoah GC",
  "id": "85-shenandoah-gc",
  "level": 3
}, {
  "value": "8.6 GC Comparison Summary",
  "id": "86-gc-comparison-summary",
  "level": 3
}, {
  "value": "9. GC Tuning",
  "id": "9-gc-tuning",
  "level": 2
}, {
  "value": "9.1 Essential Flags",
  "id": "91-essential-flags",
  "level": 3
}, {
  "value": "9.2 GC Logging and Analysis",
  "id": "92-gc-logging-and-analysis",
  "level": 3
}, {
  "value": "9.3 Choosing the Right GC",
  "id": "93-choosing-the-right-gc",
  "level": 3
}, {
  "value": "10. Memory Leaks in Java",
  "id": "10-memory-leaks-in-java",
  "level": 2
}, {
  "value": "10.1 Classloader Leak",
  "id": "101-classloader-leak",
  "level": 3
}, {
  "value": "10.2 ThreadLocal Leak",
  "id": "102-threadlocal-leak",
  "level": 3
}, {
  "value": "10.3 Static Collection Leak",
  "id": "103-static-collection-leak",
  "level": 3
}, {
  "value": "10.4 String.intern() Leak (Pre-JDK 8u25)",
  "id": "104-stringintern-leak-pre-jdk-8u25",
  "level": 3
}, {
  "value": "10.5 Listener and Callback Leaks",
  "id": "105-listener-and-callback-leaks",
  "level": 3
}, {
  "value": "10.6 Detecting Memory Leaks",
  "id": "106-detecting-memory-leaks",
  "level": 3
}, {
  "value": "11. StackOverflowError",
  "id": "11-stackoverflowerror",
  "level": 2
}, {
  "value": "12. String Pool",
  "id": "12-string-pool",
  "level": 2
}, {
  "value": "13. Performance Flags",
  "id": "13-performance-flags",
  "level": 2
}, {
  "value": "13.1 JIT Compilation Flags",
  "id": "131-jit-compilation-flags",
  "level": 3
}, {
  "value": "13.2 Memory Flags",
  "id": "132-memory-flags",
  "level": 3
}, {
  "value": "13.3 Complete Production JVM Flags Example",
  "id": "133-complete-production-jvm-flags-example",
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
  "value": "14. Summary",
  "id": "14-summary",
  "level": 2
}, {
  "value": "Key Concepts",
  "id": "key-concepts",
  "level": 3
}, {
  "value": "JVM Evolution",
  "id": "jvm-evolution",
  "level": 3
}, {
  "value": "15. Exercises",
  "id": "15-exercises",
  "level": 2
}, {
  "value": "Review Questions",
  "id": "review-questions",
  "level": 3
}, {
  "value": "Application Exercises",
  "id": "application-exercises",
  "level": 3
}, {
  "value": "Challenge Exercises",
  "id": "challenge-exercises",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "jvm-architecture--memory-management",
        children: "JVM Architecture & Memory Management"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " None (First Chapter) | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/02-concurrency",
          children: "Concurrency & Threading"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
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
        href: "../../assets/images/lessons/java/01-jvm-memory/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/01-jvm-memory/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/01-jvm-memory/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/01-jvm-memory/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/01-jvm-memory/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/01-jvm-memory/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the full lifecycle of a Java program from source code to execution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Describe the JVM architecture including class loading, runtime data areas, and the execution engine"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Read and interpret JVM bytecode using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "javap"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand how the JIT compiler optimizes hot code paths"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Differentiate heap, stack, metaspace, and direct memory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the generational garbage collection hypothesis"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare and contrast Serial, Parallel, G1, ZGC, and Shenandoah garbage collectors"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tune JVM memory and GC behavior using standard ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-X"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-XX"
        }), " flags"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Diagnose and fix common memory leak patterns"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Analyze stack overflow errors and configure stack sizes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use heap dump analysis tools like MAT and jhat"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure the string pool and understand ", (0,jsx_runtime.jsx)(_components.code, {
          children: "intern()"
        }), " behavior"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply JVM performance flags in production scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic Java syntax and object-oriented programming"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with the command line"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "JVM Architecture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Three subsystems: Class Loader, Runtime Data Areas, Execution Engine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform independence through bytecode abstraction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class Loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation hierarchy: Bootstrap, Platform, Application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom ClassLoaders enable framework isolation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Areas"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap (shared), Stack (per-thread), Metaspace, Direct Memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC focuses on heap; stack frames hold method state"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage Collection"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Generational hypothesis: most objects die young"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose GC based on pause time vs throughput needs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JIT Compilation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hot code paths compiled to native machine code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-XX flags control tiered compilation behavior"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[JVM Architecture] --> B[Class Loading]\n    B --> C[Runtime Data Areas]\n    C --> D[Bytecode & JIT]\n    D --> E[Memory Deep Dive]\n    E --> F[Garbage Collection]\n    F --> G[GC Tuning & Flags]\n    G --> H[Memory Leaks & Debugging]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Always start tuning with a clear goal — minimize pause time (G1/ZGC) or maximize throughput (Parallel). Guessing GC flags without metrics is cargo-cult optimization."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-jvm-architecture-overview",
      children: "1. JVM Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Java Virtual Machine is the cornerstone of Java's platform independence. It defines an abstract computing machine that executes Java bytecode regardless of the underlying hardware and operating system. Understanding the JVM is essential for writing performant, reliable Java applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM consists of three major subsystems:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class Loader Subsystem"
        }), " → loads, links, and initializes Java classes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Runtime Data Areas"
        }), " → the memory regions where the JVM stores data during execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Execution Engine"
        }), " → interprets and compiles bytecode into native machine instructions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Let us examine each subsystem in depth with complete code examples."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/01-jvm-memory.png",
        alt: "JVM Architecture & Memory Model"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-class-loading-mechanism",
      children: "2. Class Loading Mechanism"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Class loading is the process by which the JVM locates, loads, and prepares class files for execution. It follows a hierarchical, delegation-based model."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-built-in-class-loaders",
      children: "2.1 Built-in Class Loaders"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM provides three built-in class loaders arranged in a parent-child hierarchy:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Class Loader"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loads From"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Visible Classes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Bootstrap Class Loader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "rt.jar, jrt:/java.base (JDK 9+)"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Core Java APIs (java.lang.", (0,jsx_runtime.jsx)(_components.em, {
              children: ", java.util."
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "Platform Class Loader"
            }), " (JDK 9+), formerly Extension Class Loader"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jrt:/java.* modules"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform APIs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: "System Class Loader"
            }), " (also Application Class Loader)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Classpath, -cp, module path"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application classes and libraries"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The delegation model: when a class loader receives a load request, it first delegates to its parent. Only if the parent cannot find the class does the child attempt to load it."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.classloading;\n\npublic class ClassLoaderHierarchy {\n\n    public static void main(String[] args) {\n        ClassLoader appClassLoader = ClassLoaderHierarchy.class.getClassLoader();\n        System.out.println(\"Application (System) Class Loader: \" + appClassLoader);\n\n        ClassLoader platformClassLoader = appClassLoader.getParent();\n        System.out.println(\"Platform Class Loader: \" + platformClassLoader);\n\n        ClassLoader bootstrapClassLoader = platformClassLoader.getParent();\n        System.out.println(\"Bootstrap Class Loader: \" + bootstrapClassLoader);\n\n        System.out.println(\"Is Bootstrap null? \" + (bootstrapClassLoader == null));\n\n        System.out.println(\"String class loader: \" + String.class.getClassLoader());\n        System.out.println(\"ArrayList class loader: \" + java.util.ArrayList.class.getClassLoader());\n\n        System.out.println(\"Our class loader name: \" + appClassLoader.getName());\n        System.out.println(\"Platform loader name: \" + platformClassLoader.getName());\n\n        if (appClassLoader instanceof java.net.URLClassLoader urlCL) {\n            System.out.println(\"Classpath URLs:\");\n            for (java.net.URL url : urlCL.getURLs()) {\n                System.out.println(\"  \" + url);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output"
      }), " (JDK 21+):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Application (System) Class Loader: jdk.internal.loader.ClassLoaders$AppClassLoader@...\nPlatform Class Loader: jdk.internal.loader.ClassLoaders$PlatformClassLoader@...\nBootstrap Class Loader: null\nIs Bootstrap null? true\nString class loader: null\nArrayList class loader: null\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The Bootstrap class loader returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "null"
      }), " because it is implemented natively and not represented as a Java object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-the-class-loading-lifecycle",
      children: "2.2 The Class Loading Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Class loading follows three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Loading"
      }), " → The class loader reads binary data from a ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".class"
      }), " file and creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class<?>"
      }), " object. The JVM identifies the class by its fully qualified name and the defining class loader."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Linking"
      }), " → Three sub-steps:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Verification"
        }), ": The bytecode verifier checks that the class file is structurally correct, valid Java bytecode, and does not violate type safety."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preparation"
        }), ": Static fields are allocated with default values (zero, null, false). This is ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "not"
        }), " the same as initialization."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resolution"
        }), ": Symbolic references (e.g., CONSTANT_Class_info, CONSTANT_Methodref_info) are resolved to direct memory addresses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Initialization"
      }), " → Static initializer blocks and static field assignments execute. This phase is triggered when the JVM encounters ", (0,jsx_runtime.jsx)(_components.code, {
        children: "new"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getstatic"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "putstatic"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokestatic"
      }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class.forName()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following code demonstrates the precise order of class initialization:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.classloading;\n\nclass Parent {\n    static {\n        System.out.println(\"1. Parent static initializer\");\n    }\n\n    {\n        System.out.println(\"4. Parent instance initializer\");\n    }\n\n    Parent() {\n        System.out.println(\"5. Parent constructor\");\n    }\n}\n\nclass Child extends Parent {\n    static {\n        System.out.println(\"2. Child static initializer\");\n    }\n\n    static final String CONSTANT = extractConstant();\n\n    private static String extractConstant() {\n        System.out.println(\"3. Child static field initialized\");\n        return \"CONSTANT_VALUE\";\n    }\n\n    {\n        System.out.println(\"6. Child instance initializer\");\n    }\n\n    Child() {\n        System.out.println(\"7. Child constructor\");\n    }\n}\n\npublic class ClassInitializationOrder {\n\n    public static void main(String[] args) {\n        System.out.println(\"--- Creating first Child instance ---\");\n        Child first = new Child();\n\n        System.out.println();\n        System.out.println(\"--- Accessing Child.CONSTANT ---\");\n        System.out.println(Child.CONSTANT);\n\n        System.out.println();\n        System.out.println(\"--- Creating second Child instance ---\");\n        Child second = new Child();\n\n        System.out.println();\n        System.out.println(\"--- Using Class.forName ---\");\n        try {\n            Class<?> loaded = Class.forName(\"com.example.jvm.classloading.Child\");\n            System.out.println(\"Class.forName returned: \" + loaded.getName());\n        } catch (ClassNotFoundException e) {\n            e.printStackTrace();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Expected Output:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "--- Creating first Child instance ---\n1. Parent static initializer\n2. Child static initializer\n3. Child static field initialized\n4. Parent instance initializer\n5. Parent constructor\n6. Child instance initializer\n7. Child constructor\n\n--- Accessing Child.CONSTANT ---\nCONSTANT_VALUE\n\n--- Creating second Child instance ---\n4. Parent instance initializer\n5. Parent constructor\n6. Child instance initializer\n7. Child constructor\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Observe: the second instance does ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " re-run static initializers → class initialization happens exactly once per class loader."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-custom-class-loader",
      children: "2.3 Custom Class Loader"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Custom class loaders enable advanced scenarios: loading classes from encrypted bytecode, databases, networks, or implementing hot-reload. The only requirement is extending ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.lang.ClassLoader"
      }), " and overriding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "findClass()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following example implements a class loader that decrypts class files on the fly:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.classloading;\n\nimport java.io.ByteArrayOutputStream;\nimport java.io.FileInputStream;\nimport java.io.IOException;\nimport java.io.InputStream;\nimport java.nio.file.Path;\n\npublic class DecryptingClassLoader extends ClassLoader {\n\n    private static final byte XOR_KEY = 0x5A;\n    private final Path classPath;\n\n    public DecryptingClassLoader(Path classPath, ClassLoader parent) {\n        super(parent);\n        this.classPath = classPath;\n    }\n\n    @Override\n    protected Class<?> findClass(String name) throws ClassNotFoundException {\n        try {\n            String classFileName = name.replace('.', '/') + \".xor\";\n            Path filePath = classPath.resolve(classFileName);\n            byte[] encryptedBytes = readFileBytes(filePath);\n            byte[] decryptedBytes = decrypt(encryptedBytes);\n            return defineClass(name, decryptedBytes, 0, decryptedBytes.length);\n        } catch (IOException e) {\n            throw new ClassNotFoundException(\"Cannot load class: \" + name, e);\n        }\n    }\n\n    private byte[] readFileBytes(Path path) throws IOException {\n        try (InputStream is = new FileInputStream(path.toFile());\n             ByteArrayOutputStream bos = new ByteArrayOutputStream()) {\n            byte[] buffer = new byte[4096];\n            int bytesRead;\n            while ((bytesRead = is.read(buffer)) != -1) {\n                bos.write(buffer, 0, bytesRead);\n            }\n            return bos.toByteArray();\n        }\n    }\n\n    private byte[] decrypt(byte[] encrypted) {\n        byte[] decrypted = new byte[encrypted.length];\n        for (int i = 0; i < encrypted.length; i++) {\n            decrypted[i] = (byte) (encrypted[i] ^ XOR_KEY);\n        }\n        return decrypted;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A utility to encrypt class files for use with the DecryptingClassLoader:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.classloading;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\n\npublic class EncryptClassFiles {\n\n    private static final byte XOR_KEY = 0x5A;\n\n    public static void main(String[] args) throws IOException {\n        if (args.length < 2) {\n            System.err.println(\"Usage: EncryptClassFiles <input-dir> <output-dir>\");\n            System.exit(1);\n        }\n\n        Path inputDir = Paths.get(args[0]);\n        Path outputDir = Paths.get(args[1]);\n\n        Files.walk(inputDir)\n            .filter(p -> p.toString().endsWith(\".class\"))\n            .forEach(classFile -> {\n                Path relativePath = inputDir.relativize(classFile);\n                Path outputPath = outputDir.resolve(\n                    relativePath.toString().replace(\".class\", \".xor\"));\n                try {\n                    Files.createDirectories(outputPath.getParent());\n                    byte[] original = Files.readAllBytes(classFile);\n                    byte[] encrypted = xorEncrypt(original);\n                    Files.write(outputPath, encrypted);\n                    System.out.println(\"Encrypted: \" + classFile + \" -> \" + outputPath);\n                } catch (IOException e) {\n                    System.err.println(\"Failed: \" + classFile + \": \" + e.getMessage());\n                }\n            });\n    }\n\n    private static byte[] xorEncrypt(byte[] data) {\n        byte[] result = new byte[data.length];\n        for (int i = 0; i < data.length; i++) {\n            result[i] = (byte) (data[i] ^ XOR_KEY);\n        }\n        return result;\n    }\n}\n\nA practical HotSwapClassLoader that reloads classes when .class files change:\n\n```java\npackage com.example.jvm.classloading;\n\nimport java.io.IOException;\nimport java.nio.file.Files;\nimport java.nio.file.Path;\n\npublic class HotSwapClassLoader extends ClassLoader {\n\n    private final Path classRoot;\n\n    public HotSwapClassLoader(Path classRoot) {\n        super(ClassLoader.getSystemClassLoader());\n        this.classRoot = classRoot;\n    }\n\n    public Class&lt;?> loadClass(String name, boolean forceReload) throws ClassNotFoundException {\n        if (!name.startsWith(\"com.example\")) {\n            return super.loadClass(name);\n        }\n        Path classFile = classRoot.resolve(name.replace('.', '/') + \".class\");\n        if (!Files.exists(classFile)) {\n            return super.loadClass(name);\n        }\n        try {\n            byte[] bytes = Files.readAllBytes(classFile);\n            return defineClass(name, bytes, 0, bytes.length);\n        } catch (IOException e) {\n            throw new ClassNotFoundException(name, e);\n        }\n    }\n\n    public void reloadIfChanged(String className) throws ClassNotFoundException {\n        Path classFile = classRoot.resolve(className.replace('.', '/') + \".class\");\n        if (Files.exists(classFile)) {\n            loadClass(className, true);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-the-delegation-model-in-practice",
      children: "2.4 The Delegation Model in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The parent-delegation model prevents multiple copies of the same class from existing when the parent class loader can fulfill the request:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.classloading;\n\nimport java.net.URL;\nimport java.net.URLClassLoader;\n\npublic class DelegationDemo {\n\n    public static void main(String[] args) throws Exception {\n        URL classUrl = new java.io.File(\"target/classes\").toURI().toURL();\n        URL[] urls = new URL[]{classUrl};\n\n        URLClassLoader loader1 = new URLClassLoader(urls, null);\n        URLClassLoader loader2 = new URLClassLoader(urls, null);\n\n        Class&lt;?> class1 = loader1.loadClass(\"com.example.jvm.classloading.SampleClass\");\n        Class&lt;?> class2 = loader2.loadClass(\"com.example.jvm.classloading.SampleClass\");\n\n        System.out.println(\"Are they the same class? \" + (class1 == class2));\n        System.out.println(\"Loader 1: \" + class1.getClassLoader());\n        System.out.println(\"Loader 2: \" + class2.getClassLoader());\n    }\n}\n\nclass SampleClass {\n    static {\n        System.out.println(\"SampleClass initialized by: \" + SampleClass.class.getClassLoader());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-runtime-data-areas",
      children: "3. Runtime Data Areas"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM divides memory into several runtime data areas during execution. Each serves a specific purpose and has its own lifecycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-overview",
      children: "3.1 Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "                    JVM Memory Model\n\n           Thread Shared                    Thread Private\n  +-----------------------+   +----------+   +----------+   +--------------+\n  |     Method Area        |   |   Heap   |   |  Stack   |   |  PC Register |\n  |  (Class metadata,      |   | (Young + |   | (Frames, |   |              |\n  |   static vars,         |   |   Old)   |   |  locals) |   |              |\n  |   constant pool)       |   |          |   |          |   |              |\n  +-----------------------+   +----------+   +----------+   +--------------+\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-method-area-metaspace-in-jdk-8",
      children: "3.2 Method Area (Metaspace in JDK 8+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The method area stores class-level information:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Class metadata (name, modifiers, interfaces)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static variables"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Runtime constant pool"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Method bytecode"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Field information"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["In JDK 7 and earlier this was called ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PermGen"
      }), " (Permanent Generation). JDK 8 replaced it with ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Metaspace"
      }), ", which uses native memory (not heap) and grows dynamically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.runtime;\n\npublic class MethodAreaDemo {\n\n    private static int staticCounter = 0;\n    private static final String GREETING = \"Hello from Method Area\";\n\n    static {\n        System.out.println(\"Static initializer block stored in method area metadata\");\n        staticCounter = 42;\n    }\n\n    private final String instanceField = \"Per-instance data stored in heap\";\n\n    public void demoMethod() {\n        String local = \"Local variable stored in stack frame\";\n        System.out.println(local);\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Static variable staticCounter = \" + staticCounter);\n        System.out.println(\"Static final GREETING = \" + GREETING);\n\n        MethodAreaDemo demo = new MethodAreaDemo();\n        demo.demoMethod();\n\n        System.out.println(\"\\n--- Inspecting Method Area via MX Beans ---\");\n        java.lang.management.ClassLoadingMXBean clBean =\n            java.lang.management.ManagementFactory.getClassLoadingMXBean();\n        System.out.println(\"Total loaded classes: \" + clBean.getTotalLoadedClassCount());\n        System.out.println(\"Currently loaded: \" + clBean.getLoadedClassCount());\n        System.out.println(\"Unloaded classes: \" + clBean.getUnloadedClassCount());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-the-heap",
      children: "3.3 The Heap"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The heap is the largest memory area and stores all Java object instances and arrays. It is shared across all threads and is the primary focus of garbage collection."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Heap structure in HotSpot:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Heap\n+-- Young Generation (Nursery)\n|   +-- Eden Space (most objects allocated here)\n|   +-- Survivor S0 (From)\n|   +-- Survivor S1 (To)\n+-- Old Generation (Tenured)\n+-- Metaspace (JDK 8+) -- class metadata\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The following program creates objects and observes heap behavior:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.runtime;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class HeapDemo {\n\n    static class Allocation {\n        private final byte[] data;\n        Allocation(int size) { this.data = new byte[size]; }\n    }\n\n    public static void main(String[] args) throws Exception {\n        System.out.println(\"=== Heap Allocation Demo ===\");\n        Runtime rt = Runtime.getRuntime();\n        System.out.println(\"Max memory: \" + rt.maxMemory() / 1024 / 1024 + \" MB\");\n        System.out.println(\"Total memory: \" + rt.totalMemory() / 1024 / 1024 + \" MB\");\n        System.out.println(\"Free memory: \" + rt.freeMemory() / 1024 / 1024 + \" MB\");\n\n        List&lt;Allocation&gt; survivors = new ArrayList&lt;>();\n        for (int i = 0; i &lt; 1000; i++) {\n            survivors.add(new Allocation(1024 * 10));\n        }\n\n        System.out.println(\"\\nAfter allocating 1000 x 10KB objects:\");\n        System.out.println(\"Total memory: \" + rt.totalMemory() / 1024 / 1024 + \" MB\");\n        System.out.println(\"Free memory: \" + rt.freeMemory() / 1024 / 1024 + \" MB\");\n\n        System.out.println(\"\\nCalling System.gc()...\");\n        System.gc();\n        Thread.sleep(1000);\n\n        System.out.println(\"After GC:\");\n        System.out.println(\"Total memory: \" + rt.totalMemory() / 1024 / 1024 + \" MB\");\n        System.out.println(\"Free memory: \" + rt.freeMemory() / 1024 / 1024 + \" MB\");\n\n        System.out.println(\"\\n=== Allocation Failure (OOM simulation) ===\");\n        try {\n            List&lt;byte[]&gt; bigList = new ArrayList&lt;>();\n            while (true) {\n                bigList.add(new byte[1024 * 1024]);\n            }\n        } catch (OutOfMemoryError e) {\n            System.out.println(\"OutOfMemoryError caught: \" + e.getMessage());\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-stack-pc-registers-and-native-method-stack",
      children: "3.4 Stack, PC Registers, and Native Method Stack"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each thread in the JVM has its own private stack, PC register, and native method stack."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "The Stack"
      }), " stores stack frames. Each method call creates a new frame that contains:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local variables (including method parameters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Operand stack (for intermediate computation values)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Frame data (constant pool resolution, exception handlers)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.runtime;\n\npublic class StackFrameDemo {\n\n    private static int depth = 0;\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Stack Frame Inspection ===\");\n        int result = computeSum(3, 7);\n        System.out.println(\"computeSum(3, 7) = \" + result);\n\n        System.out.println(\"\\n=== Recursion to see frame growth ===\");\n        try { recurse(1); }\n        catch (StackOverflowError e) {\n            System.out.println(\"Stack overflow at depth: \" + depth);\n        }\n\n        System.out.println(\"\\n=== Stack trace of current thread ===\");\n        StackWalker walker = StackWalker.getInstance(StackWalker.Option.RETAIN_CLASS_REFERENCE);\n        walker.forEach(frame -> {\n            System.out.printf(\"  %s.%s (%s:%d)%n\",\n                frame.getClassName(), frame.getMethodName(),\n                frame.getFileName(), frame.getLineNumber());\n        });\n    }\n\n    private static int computeSum(int a, int b) {\n        int sum = a + b;\n        return sum;\n    }\n\n    private static void recurse(int n) {\n        depth = n;\n        int[] local = new int[10];\n        recurse(n + 1);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "PC Register"
      }), " stores the address of the currently executing bytecode instruction. Each thread has its own PC register. For native methods, the PC is undefined."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Native Method Stack"
      }), " supports native method execution (C/C++ code via JNI). It operates outside the Java bytecode model."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-direct-memory",
      children: "3.5 Direct Memory"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Direct memory is allocated outside the Java heap using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ByteBuffer.allocateDirect()"
      }), ". It bypasses the heap and is managed directly by the operating system. This is critical for high-performance I/O because it reduces copying between Java and native buffers."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.runtime;\n\nimport java.nio.ByteBuffer;\n\npublic class DirectMemoryDemo {\n\n    private static final int ONE_MB = 1024 * 1024;\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Direct Memory (Off-Heap) ===\");\n\n        ByteBuffer directBuf = ByteBuffer.allocateDirect(64 * ONE_MB);\n        System.out.println(\"Allocated 64 MB direct buffer\");\n        System.out.println(\"Buffer capacity: \" + directBuf.capacity() / ONE_MB + \" MB\");\n        System.out.println(\"Buffer isDirect: \" + directBuf.isDirect());\n\n        for (int i = 0; i &lt; directBuf.capacity() / 4; i++) {\n            directBuf.putInt(i);\n        }\n        directBuf.flip();\n        System.out.println(\"First int after write: \" + directBuf.getInt());\n\n        int iterations = 100_000;\n\n        ByteBuffer heapBuf = ByteBuffer.allocate(64 * ONE_MB);\n        long start = System.nanoTime();\n        for (int i = 0; i &lt; iterations; i++) {\n            heapBuf.clear();\n            heapBuf.putInt(42);\n        }\n        long end = System.nanoTime();\n        System.out.println(\"\\nHeap buffer write time: \" + (end - start) / 1_000_000 + \" ms\");\n\n        start = System.nanoTime();\n        for (int i = 0; i &lt; iterations; i++) {\n            directBuf.clear();\n            directBuf.putInt(42);\n        }\n        end = System.nanoTime();\n        System.out.println(\"Direct buffer write time: \" + (end - start) / 1_000_000 + \" ms\");\n\n        System.out.println(\"\\nMax direct memory (default): \"\n            + sun.misc.VM.maxDirectMemory() / ONE_MB + \" MB\");\n        System.out.println(\"Tune with: -XX:MaxDirectMemorySize\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-bytecode-overview",
      children: "4. Bytecode Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java bytecode is the intermediate representation of your program. The JVM's instruction set has 256 opcodes (over 200 assigned in modern JDK). Understanding bytecode helps you reason about performance, concurrency, and JIT compilation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-examining-bytecode-with-javap",
      children: "4.1 Examining Bytecode with javap"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javap"
      }), " tool disassembles class files. Consider this simple class:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.bytecode;\n\npublic class SimpleMath {\n\n    public int add(int a, int b) {\n        int result = a + b;\n        return result;\n    }\n\n    public static double calculateAverage(int[] values) {\n        int sum = 0;\n        for (int value : values) {\n            sum += value;\n        }\n        return (double) sum / values.length;\n    }\n\n    public String greet(String name) {\n        return \"Hello, \" + name;\n    }\n\n    public static void main(String[] args) {\n        SimpleMath math = new SimpleMath();\n        int sum = math.add(10, 20);\n        System.out.println(\"Sum: \" + sum);\n\n        int[] data = {1, 2, 3, 4, 5};\n        double avg = calculateAverage(data);\n        System.out.println(\"Average: \" + avg);\n\n        String greeting = math.greet(\"World\");\n        System.out.println(greeting);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Compile it then run: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javap -c -p -v com.example.jvm.bytecode.SimpleMath"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The output for the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "add"
      }), " method looks like:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "public int add(int, int);\n  Code:\n      0: iload_1\n      1: iload_2\n      2: iadd\n      3: istore_3\n      4: iload_3\n      5: ireturn\n\npublic static double calculateAverage(int[]);\n  Code:\n      0: iconst_0\n      1: istore_1\n      2: iconst_0\n      3: istore_2\n      4: iload_2\n      5: aload_0\n      6: arraylength\n      7: if_icmpge 23\n     10: iload_1\n     11: aload_0\n     12: iload_2\n     13: iaload\n     14: iadd\n     15: istore_1\n     16: iinc 2, 1\n     19: goto 4\n     23: iload_1\n     24: i2d\n     25: aload_0\n     26: arraylength\n     27: i2d\n     28: ddiv\n     29: dreturn\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-key-bytecode-instructions",
      children: "4.2 Key Bytecode Instructions"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Instructions"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load/Store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "aload_n, iload_n, astore_n, istore_n"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Move between locals and operand stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arithmetic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "iadd, isub, imul, idiv, dadd, dsub, iinc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Operate on stack values"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Object"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "new, getfield, putfield, getstatic, putstatic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create/access objects and fields"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Arrays"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "newarray, anewarray, iaload, iastore, aaload, aastore"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create/access arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "dup, dup2, swap, pop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rearrange operand stack"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Control Flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ifeq, ifne, if_icmpne, goto, tableswitch, lookupswitch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Branching and loops"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Method Invocation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "invokevirtual, invokespecial, invokestatic, invokeinterface, invokedynamic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Call methods"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ireturn, areturn, dreturn, return"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Return values from methods"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-stack-frame-walkthrough",
      children: "4.3 Stack Frame Walkthrough"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Consider the expression ", (0,jsx_runtime.jsx)(_components.code, {
        children: "result = a + b"
      }), ". The JVM executes:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Step 1: iload_1      push local var 1 (a) onto operand stack\nStep 2: iload_2      push local var 2 (b) onto operand stack\nStep 3: iadd         pop a and b, compute a+b, push result\nStep 4: istore_3     pop result into local var 3\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["After ", (0,jsx_runtime.jsx)(_components.code, {
        children: "istore_3"
      }), ", the operand stack is empty:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Local Variables: [this, a, b, result]\nOperand Stack: []\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-invokedynamic-and-lambda-bytecode",
      children: "4.4 Invokedynamic and Lambda Bytecode"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lambda expressions in Java 8+ use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokedynamic"
      }), ", which enables runtime method dispatch that was impossible with older invoke instructions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.bytecode;\n\nimport java.util.function.Function;\n\npublic class LambdaBytecode {\n\n    public static void main(String[] args) {\n        Function&lt;String, String&gt; upper = s -> s.toUpperCase();\n        System.out.println(upper.apply(\"hello\"));\n\n        Function&lt;String, Integer&gt; len = String::length;\n        System.out.println(len.apply(\"world\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Running ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javap -c -p -v LambdaBytecode"
      }), " reveals ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokedynamic"
      }), " instructions that defer method resolution to the first invocation, at which point the JVM calls a bootstrap method (BSM) to link the call site."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-jit-compilation",
      children: "5. JIT Compilation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JIT (Just-In-Time) compiler transforms bytecode into native machine code at runtime. It is the key performance enabler for the JVM."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-interpretation-vs-compilation",
      children: "5.1 Interpretation vs Compilation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a method begins execution, the JVM starts in ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "interpreted mode"
      }), " → reading bytecode instruction by instruction. This is slow but has zero startup delay. The JVM monitors which methods are called frequently (hotspot detection) and compiles those methods to native code."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\npublic class JITDemo {\n\n    public static long computeFactorial(int n) {\n        long result = 1;\n        for (int i = 2; i &lt;= n; i++) {\n            result *= i;\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== JIT Compilation Demo ===\");\n        System.out.println(\"Warm up: calling computeFactorial in a loop...\");\n\n        long start = System.nanoTime();\n        for (int i = 0; i &lt; 200_000; i++) {\n            computeFactorial(20);\n        }\n        long end = System.nanoTime();\n        System.out.println(\"Warm-up time: \" + (end - start) / 1_000_000 + \" ms\");\n\n        start = System.nanoTime();\n        for (int i = 0; i &lt; 200_000; i++) {\n            computeFactorial(20);\n        }\n        end = System.nanoTime();\n        System.out.println(\"After JIT time: \" + (end - start) / 1_000_000 + \" ms\");\n\n        var compileMXBean = java.lang.management.ManagementFactory.getCompilationMXBean();\n        System.out.println(\"JIT compiler: \" + compileMXBean.getName());\n        System.out.println(\"Total compilation time: \" + compileMXBean.getTotalCompilationTime() + \" ms\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-tiered-compilation",
      children: "5.2 Tiered Compilation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Since JDK 8 (and default since JDK 7u4), the JVM uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "tiered compilation"
      }), " with five levels:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tier"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Compiler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "0"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Interpreter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full bytecode interpretation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1 (no profiling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple C1 compilation, no profiling counters"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1 (light profiling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1 with limited profiling"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "3"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1 (full profiling)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C1 with full profiling for C2"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "4"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "C2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum optimization; all profiling data available"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM escalates methods through tiers based on invocation count and loop back-edge count. This balances startup speed (quick C1 compilation) with peak performance (C2 optimization)."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-hotspot-detection",
      children: "5.3 Hotspot Detection"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The JVM counts method invocations and loop iterations. When a threshold is crossed (default: 10,000 invocations for C1, 15,000 for C2), the method is queued for compilation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\npublic class HotspotDetection {\n\n    private static final int ITERATIONS = 50_000;\n\n    public static void main(String[] args) {\n        System.out.println(\"Run with -XX:+PrintCompilation to see hotspot compilation\\n\");\n\n        for (int i = 0; i &lt; ITERATIONS; i++) {\n            hotMethod(i);\n        }\n\n        System.out.println(\"Done. Check -XX:+PrintCompilation output above.\");\n    }\n\n    private static int hotMethod(int n) {\n        int result = 0;\n        for (int i = 0; i &lt; 100; i++) {\n            if ((n + i) % 2 == 0) {\n                result += (n * i) / (1 + (i % 10));\n            } else {\n                result -= (n - i) / (1 + (i % 5));\n            }\n        }\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-inlining",
      children: "5.4 Inlining"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Inlining replaces a method call with the method's body directly, eliminating call overhead and enabling further optimizations."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\npublic class InliningDemo {\n\n    public static void main(String[] args) {\n        System.out.println(\"Run with -XX:+PrintInlining to see inlining decisions\\n\");\n\n        int total = 0;\n        for (int i = 0; i &lt; 100_000; i++) {\n            total += processValue(i);\n        }\n        System.out.println(\"Result: \" + total);\n    }\n\n    private static int processValue(int value) {\n        return transform(value);\n    }\n\n    private static int transform(int x) {\n        return x * x + 2 * x + 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When run with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-XX:+UnlockDiagnosticVMOptions -XX:+PrintInlining"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "InliningDemo::processValue (3 bytes)\n  @ 1   InliningDemo::transform (7 bytes)   inline (hot)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-escape-analysis",
      children: "5.5 Escape Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Escape analysis determines whether an object is accessible outside the method that created it. If an object does not escape, the JIT can:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stack-allocate"
        }), " the object (no GC overhead)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scalar-replace"
        }), " the object (split into individual fields)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Eliminate synchronization"
        }), " on non-escaping objects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class EscapeAnalysisDemo {\n\n    static class Point {\n        private int x;\n        private int y;\n        Point(int x, int y) { this.x = x; this.y = y; }\n        int distanceSquared() { return x * x + y * y; }\n    }\n\n    private static long computeSum(int size) {\n        long sum = 0;\n        for (int i = 0; i &lt; size; i++) {\n            Point p = new Point(i, i + 1);\n            sum += p.distanceSquared();\n        }\n        return sum;\n    }\n\n    private static List&lt;Point&gt; collectPoints(int size) {\n        List&lt;Point&gt; points = new ArrayList&lt;>();\n        for (int i = 0; i &lt; size; i++) {\n            points.add(new Point(i, i + 1));\n        }\n        return points;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Escape Analysis Demo ===\\n\");\n\n        long sum = 0;\n        for (int i = 0; i &lt; 20_000; i++) sum += computeSum(1000);\n\n        long start = System.nanoTime();\n        for (int i = 0; i &lt; 50_000; i++) sum += computeSum(1000);\n        long eaEnabled = System.nanoTime() - start;\n        System.out.println(\"Non-escaping allocation: \" + eaEnabled / 1_000_000 + \" ms\");\n\n        start = System.nanoTime();\n        for (int i = 0; i &lt; 50_000; i++) sum += collectPoints(1000).size();\n        long escaping = System.nanoTime() - start;\n        System.out.println(\"Escaping allocation: \" + escaping / 1_000_000 + \" ms\");\n\n        System.out.println(\"\\nRatio: \" + String.format(\"%.2f\", (double) escaping / eaEnabled)\n            + \"x slower when objects escape\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "56-on-stack-replacement-osr",
      children: "5.6 On-Stack Replacement (OSR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OSR replaces interpreted code with compiled code while a method is still executing in a loop. Without OSR, a hot loop inside a method would not benefit from compilation until the method returned."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\npublic class OnStackReplacement {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== On-Stack Replacement Demo ===\\n\");\n        System.out.println(\"OSR allows the JVM to replace method bytecode\\n\"\n            + \"while the method is still running in a long loop.\\n\");\n\n        long result = 0;\n        long lastTime = System.nanoTime();\n\n        for (int i = 0; i &lt; 500_000_000; i++) {\n            result += compute(i);\n            if (i > 0 && i % 100_000_000 == 0) {\n                long now = System.nanoTime();\n                long elapsedMs = (now - lastTime) / 1_000_000;\n                System.out.println(\"  Iteration \" + i + \" completed in \" + elapsedMs + \" ms\");\n                lastTime = now;\n            }\n        }\n\n        System.out.println(\"\\nFinal result: \" + result);\n        System.out.println(\"If you saw iteration times drop, OSR worked correctly.\");\n    }\n\n    private static int compute(int n) {\n        int sum = 0;\n        for (int i = 0; i &lt; 50; i++) {\n            sum += (n * (i + 1)) / (1 + (n % 10));\n            sum ^= (sum >>> 16);\n            sum *= 0x45d9f3b;\n        }\n        return sum;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "57-c1-vs-c2-compiler",
      children: "5.7 C1 vs C2 Compiler"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C1 (Client)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "C2 (Server)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optimization Level"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggressive"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Compilation Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Quality"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Profile Required"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Light/None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full profiling (from C1)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup performance, GUI apps"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running server apps"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-client (deprecated)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-server (default since JDK 8)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Since tiered compilation is the default, you rarely choose C1 vs C2 explicitly. The JVM uses both."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "58-graal-jit-compiler",
      children: "5.8 Graal JIT Compiler"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Graal is a high-performance JIT compiler written in Java. It is available as an experimental replacement for C2 starting in JDK 16+:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.jit;\n\npublic class GraalJITDemo {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Graal JIT Compiler ===\");\n        System.out.println(\"Enable: -XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler\\n\");\n\n        String compiler = System.getProperty(\"java.vm.name\");\n        String version = System.getProperty(\"java.version\");\n        System.out.println(\"JVM: \" + compiler);\n        System.out.println(\"Version: \" + version);\n\n        long result = 0;\n        long start = System.nanoTime();\n        for (int i = 0; i &lt; 100_000; i++) {\n            result += heavyComputation(i, 200);\n        }\n        long end = System.nanoTime();\n        System.out.println(\"\\nHeavy computation result: \" + result);\n        System.out.println(\"Time: \" + (end - start) / 1_000_000 + \" ms\");\n    }\n\n    private static int heavyComputation(int seed, int iterations) {\n        int hash = seed;\n        for (int i = 0; i &lt; iterations; i++) {\n            hash = hash * 31 + i;\n            hash ^= (hash &lt;< 13);\n            hash ^= (hash >>> 17);\n            hash ^= (hash &lt;< 5);\n        }\n        return hash;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-memory-areas----deep-dive",
      children: "6. Memory Areas -- Deep Dive"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-heap-layout-visualization",
      children: "6.1 Heap Layout Visualization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.memory;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class HeapLayoutDemo {\n\n    private static final int SIZE = 1024 * 50;\n    static class MediumObject {\n        private byte[] payload = new byte[SIZE];\n        private long id;\n        MediumObject(long id) { this.id = id; }\n    }\n\n    public static void main(String[] args) throws Exception {\n        System.out.println(\"=== Heap Generation Layout ===\\n\");\n\n        List&lt;MediumObject&gt; young = new ArrayList&lt;>();\n        for (int i = 0; i &lt; 20; i++) young.add(new MediumObject(i));\n        printHeap(\"After Eden allocation\");\n\n        List&lt;MediumObject&gt; survivors = new ArrayList&lt;>();\n        for (int i = 0; i &lt; 100; i++) {\n            survivors.add(new MediumObject(i));\n            new MediumObject(i + 1000);\n        }\n        printHeap(\"After allocation + discard\");\n\n        for (int i = 0; i &lt; 5; i++) { System.gc(); Thread.sleep(200); }\n        printHeap(\"After GC cycles\");\n\n        System.out.println(\"\\n--- Pool Details ---\");\n        for (var pool : java.lang.management.ManagementFactory.getMemoryPoolMXBeans()) {\n            String name = pool.getName();\n            if (name.contains(\"Heap\") || name.contains(\"Young\")\n                || name.contains(\"Old\") || name.contains(\"Eden\")\n                || name.contains(\"Survivor\")) {\n                var usage = pool.getUsage();\n                System.out.printf(\"  %s: %d MB / %d MB%n\", name,\n                    usage.getUsed() / 1024 / 1024, usage.getMax() / 1024 / 1024);\n            }\n        }\n    }\n\n    private static void printHeap(String label) {\n        Runtime rt = Runtime.getRuntime();\n        long used = rt.totalMemory() - rt.freeMemory();\n        System.out.println(label + \": \" + used / 1024 / 1024 + \" MB\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-object-header-and-memory-layout",
      children: "6.2 Object Header and Memory Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every Java object has a header containing the mark word (for GC, locks, identity hash) and the klass pointer (class reference)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.memory;\n\nimport java.lang.reflect.Field;\n\npublic class ObjectMemoryLayout {\n\n    private static final sun.misc.Unsafe UNSAFE;\n    static {\n        try {\n            Field f = sun.misc.Unsafe.class.getDeclaredField(\"theUnsafe\");\n            f.setAccessible(true);\n            UNSAFE = (sun.misc.Unsafe) f.get(null);\n        } catch (Exception e) { throw new RuntimeException(e); }\n    }\n\n    static class Padded {\n        byte a; long b; int c;\n    }\n\n    static class Compact {\n        long b; int c; byte a;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Object Memory Layout ===\\n\");\n        System.out.println(\"--- Padded ---\");\n        System.out.println(\"  byte a offset: \" + getOffset(Padded.class, \"a\"));\n        System.out.println(\"  long b offset: \" + getOffset(Padded.class, \"b\"));\n        System.out.println(\"  int  c offset: \" + getOffset(Padded.class, \"c\"));\n\n        System.out.println(\"\\n--- Compact ---\");\n        System.out.println(\"  long b offset: \" + getOffset(Compact.class, \"b\"));\n        System.out.println(\"  int  c offset: \" + getOffset(Compact.class, \"c\"));\n        System.out.println(\"  byte a offset: \" + getOffset(Compact.class, \"a\"));\n\n        System.out.println(\"\\n--- Key Insight ---\");\n        System.out.println(\"Declare fields largest first to minimize padding:\");\n        System.out.println(\"  double/long > int/float > short/char > byte/boolean\");\n    }\n\n    private static long getOffset(Class&lt;?> clazz, String fieldName) {\n        try {\n            Field f = clazz.getDeclaredField(fieldName);\n            return UNSAFE.objectFieldOffset(f);\n        } catch (NoSuchFieldException e) { throw new RuntimeException(e); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-metaspace",
      children: "6.3 Metaspace"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Metaspace (JDK 8+) replaces PermGen and stores class metadata. Unlike PermGen, Metaspace uses native memory and grows by default."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.memory;\n\npublic class MetaspaceDemo {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Metaspace Demo ===\\n\");\n        System.out.println(\"Metaspace stores class metadata in native memory.\\n\");\n\n        System.out.println(\"--- Metaspace Usage ---\");\n        for (var pool : java.lang.management.ManagementFactory.getMemoryPoolMXBeans()) {\n            String name = pool.getName();\n            if (name.contains(\"Metaspace\") || name.contains(\"Compressed Class Space\")) {\n                var usage = pool.getUsage();\n                System.out.printf(\"  %s: %d KB / %d KB%n\", name,\n                    usage.getUsed() / 1024, usage.getMax() / 1024);\n            }\n        }\n\n        System.out.println(\"\\n--- Configuration ---\");\n        System.out.println(\"-XX:MetaspaceSize=21m\");\n        System.out.println(\"-XX:MaxMetaspaceSize=256m\");\n        System.out.println(\"-XX:MinMetaspaceFreeRatio=40\");\n        System.out.println(\"-XX:MaxMetaspaceFreeRatio=70\\n\");\n\n        System.out.println(\"WARNING: Class loader leaks keep metaspace allocated.\");\n        System.out.println(\"Set MaxMetaspaceSize as a safety bound.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-thread-stack-layout",
      children: "6.4 Thread Stack Layout"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each thread's stack contains frames, each frame holding local variables and an operand stack."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.memory;\n\npublic class StackLayoutDemo {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Thread Stack Layout ===\\n\");\n        System.out.println(\"Each frame contains:\");\n        System.out.println(\"  1. Local Variable Array (parameters + locals)\");\n        System.out.println(\"  2. Operand Stack (intermediate values)\");\n        System.out.println(\"  3. Frame Data (constant pool ref, exception table)\\n\");\n\n        int a = 10;\n        String b = \"hello\";\n        double c = 3.14;\n        long d = 100L;\n        boolean e = true;\n\n        System.out.println(\"--- Local Variable Slots in main() ---\");\n        System.out.println(\"  slot 0: args (String[])\");\n        System.out.println(\"  slot 1: a (int) = \" + a);\n        System.out.println(\"  slot 2: b (String ref) = \" + b);\n        System.out.println(\"  slot 3-4: c (double) = \" + c);\n        System.out.println(\"  slot 5-6: d (long) = \" + d);\n        System.out.println(\"  slot 7: e (boolean) = \" + e);\n\n        firstMethod();\n        System.out.println(\"\\nDefault stack size: ~1 MB per thread\");\n        System.out.println(\"Configure: -Xss256k\");\n    }\n\n    private static void firstMethod() {\n        int x = 100;\n        System.out.println(\"firstMethod frame: x = \" + x);\n        secondMethod(x);\n    }\n\n    private static void secondMethod(int input) {\n        int y = input * 2;\n        String label = \"second\";\n        System.out.println(\"secondMethod frame: y = \" + y + \", label = \" + label);\n        thirdMethod(y);\n    }\n\n    private static void thirdMethod(int value) {\n        long result = (long) value * value;\n        System.out.println(\"thirdMethod frame: result = \" + result);\n        System.out.println(\"Returning, frames pop in LIFO order\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-garbage-collection",
      children: "7. Garbage Collection"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-the-generational-hypothesis",
      children: "7.1 The Generational Hypothesis"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The generational hypothesis states that most objects die young. Empirical observation shows that ~95% of objects live for a very short time. JVM garbage collectors exploit this by dividing the heap into generations."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-basic-gc-algorithms",
      children: "7.2 Basic GC Algorithms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mark-Sweep"
      }), ": Identify live objects (mark), delete dead objects (sweep). Leaves memory fragmentation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mark-Compact"
      }), ": Mark live objects, then compact them into a contiguous block. Eliminates fragmentation but is costlier."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Copying"
      }), ": Divide space into two halves. Copy live objects from one side to the other. Used in Young Generation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Random;\n\npublic class GCAlgorithmsDemo {\n\n    static class GCObject {\n        private final byte[] payload;\n        GCObject(long id, int size) { this.payload = new byte[size]; }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== GC Algorithms Visualization ===\\n\");\n\n        System.out.println(\"--- Mark-Sweep ---\");\n        System.out.println(\"1. Mark: trace reachable objects from roots\");\n        System.out.println(\"2. Sweep: reclaim memory from unmarked objects\");\n        System.out.println(\"Result: free list of variable-size blocks\");\n        System.out.println(\"Problem: fragmentation over time\\n\");\n\n        System.out.println(\"--- Copying Collection ---\");\n        System.out.println(\"Used in Young Generation (Eden + Survivor spaces)\");\n        System.out.println(\"1. Copy live objects from Eden + From-space to To-space\");\n        System.out.println(\"2. Compact by nature (contiguous copy)\");\n        System.out.println(\"3. Swap From/To labels\\n\");\n\n        System.out.println(\"--- Mark-Compact ---\");\n        System.out.println(\"Used in Old Generation (with Serial/Old GC)\");\n        System.out.println(\"1. Mark all live objects\");\n        System.out.println(\"2. Compute new addresses (compact)\");\n        System.out.println(\"3. Update all references\\n\");\n\n        List&lt;GCObject&gt; roots = new ArrayList&lt;>();\n        Random rng = new Random(42);\n\n        for (int cycle = 0; cycle &lt; 5; cycle++) {\n            int count = 100_000 / (cycle + 1);\n            for (int i = 0; i &lt; count; i++) {\n                roots.add(new GCObject(i, 100 + rng.nextInt(900)));\n            }\n            for (int i = 0; i &lt; roots.size() / 2; i++) {\n                roots.set(rng.nextInt(roots.size()), null);\n            }\n            roots.removeIf(java.util.Objects::isNull);\n            System.out.println(\"Cycle \" + cycle + \": \" + roots.size() + \" survivors\");\n        }\n        System.out.println(\"\\nMost objects died young (generational hypothesis).\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-identifying-liveness-gc-roots",
      children: "7.3 Identifying Liveness (GC Roots)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JVM uses ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "GC roots"
      }), " as starting points for liveness analysis:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Stack frames (local variables and parameters)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Static fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JNI references"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Active threads"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.lang.ref.WeakReference;\n\npublic class GCRootsDemo {\n\n    private static GCRootsDemo staticRoot = new GCRootsDemo(\"static\");\n    private final String label;\n    private GCRootsDemo child;\n    GCRootsDemo(String label) { this.label = label; }\n    void setChild(GCRootsDemo child) { this.child = child; }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== GC Roots Analysis ===\\n\");\n\n        GCRootsDemo localRoot = new GCRootsDemo(\"local\");\n        GCRootsDemo reachable = new GCRootsDemo(\"reachable\");\n        localRoot.setChild(reachable);\n        new GCRootsDemo(\"unreachable\");\n\n        GCRootsDemo strongRef = new GCRootsDemo(\"weak-target\");\n        WeakReference&lt;GCRootsDemo&gt; weakRef = new WeakReference&lt;>(strongRef);\n        System.out.println(\"Weak ref before nulling strong: \" + weakRef.get().label);\n        strongRef = null;\n\n        System.gc();\n        System.out.println(\"Weak ref after GC: \" + weakRef.get());\n\n        System.out.println(\"\\nReachability States:\");\n        System.out.println(\"1. Strongly reachable: directly from root\");\n        System.out.println(\"2. Softly reachable: only via SoftReference\");\n        System.out.println(\"3. Weakly reachable: only via WeakReference\");\n        System.out.println(\"4. Phantom reachable: only via PhantomReference\");\n        System.out.println(\"5. Unreachable: no references at all\\n\");\n\n        System.out.println(\"Active threads are always GC roots.\");\n        System.out.println(\"That is why ThreadLocal can cause memory leaks.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-gc-implementations",
      children: "8. GC Implementations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-serial-gc",
      children: "8.1 Serial GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The simplest collector: single-threaded, stop-the-world for both minor and major collections. Best for single-threaded applications, small heaps (< ~100 MB), and client-side apps."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class SerialGCDemo {\n\n    static class Allocation { byte[] data = new byte[1024 * 10]; }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Serial GC ===\\n\");\n        System.out.println(\"Run: -XX:+UseSerialGC\\n\");\n        System.out.println(\"Use cases:\");\n        System.out.println(\"  - Single-processor machines\");\n        System.out.println(\"  - Heap &lt; ~100 MB\");\n        System.out.println(\"  - Client-side apps\\n\");\n        System.out.println(\"Characteristics:\");\n        System.out.println(\"  - Stop-the-world (all threads paused)\");\n        System.out.println(\"  - Minor GC: copying collector for Young Gen\");\n        System.out.println(\"  - Major GC: mark-compact for Old Gen\");\n        System.out.println(\"  - Single GC thread\\n\");\n\n        List&lt;Allocation&gt; list = new ArrayList&lt;>();\n        for (int i = 0; i &lt; 500; i++) list.add(new Allocation());\n        for (int i = 0; i &lt; 200; i++) list.set(i, null);\n        System.gc();\n        System.out.println(\"GC events visible in -XX:+PrintGCDetails output.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-parallel-gc-throughput-collector",
      children: "8.2 Parallel GC (Throughput Collector)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Default in JDK 8. Uses multiple threads for both minor and major collections. Optimizes for throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.concurrent.CountDownLatch;\nimport java.util.concurrent.atomic.LongAdder;\n\npublic class ParallelGCDemo {\n\n    static class Task implements Runnable {\n        private final LongAdder counter;\n        private final CountDownLatch latch;\n        Task(LongAdder c, CountDownLatch l) { counter = c; latch = l; }\n        @Override\n        public void run() {\n            double[] data = new double[100_000];\n            for (int i = 0; i &lt; data.length; i++) {\n                data[i] = Math.sin(i) * Math.cos(i) * Math.tan(i);\n                counter.increment();\n            }\n            latch.countDown();\n        }\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        System.out.println(\"=== Parallel (Throughput) GC ===\\n\");\n        System.out.println(\"Run: -XX:+UseParallelGC\\n\");\n        System.out.println(\"Use cases:\");\n        System.out.println(\"  - Batch processing\");\n        System.out.println(\"  - Science/engineering computations\");\n        System.out.println(\"  - Medium-to-large heaps (4-8 GB)\\n\");\n\n        int numThreads = Runtime.getRuntime().availableProcessors();\n        LongAdder totalOps = new LongAdder();\n        CountDownLatch latch = new CountDownLatch(numThreads);\n\n        long start = System.nanoTime();\n        for (int i = 0; i &lt; numThreads; i++) new Thread(new Task(totalOps, latch)).start();\n        latch.await();\n        long end = System.nanoTime();\n        System.out.println(\"Completed \" + totalOps.sum() + \" operations in \"\n            + (end - start) / 1_000_000 + \" ms\\n\");\n\n        System.out.println(\"Flags:\");\n        System.out.println(\"-XX:ParallelGCThreads=N\");\n        System.out.println(\"-XX:MaxGCPauseMillis=&lt;N>\");\n        System.out.println(\"-XX:GCTimeRatio=&lt;N>\");\n        System.out.println(\"-XX:+UseAdaptiveSizePolicy (ergonomics)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-g1-gc",
      children: "8.3 G1 GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "G1 (Garbage-First) is the default collector since JDK 9. It divides the heap into ~2048 fixed-size regions and collects the regions with the most garbage first."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.*;\nimport java.util.concurrent.ConcurrentHashMap;\n\npublic class G1GCDemo {\n\n    static class RegionObject {\n        private final byte[] payload;\n        RegionObject(int size) { this.payload = new byte[size]; }\n    }\n\n    static class Application {\n        private final Map&lt;String, RegionObject&gt; cache = new ConcurrentHashMap&lt;>();\n        private final Random rng = new Random(42);\n        private long opCount = 0;\n\n        void runIteration() {\n            opCount++;\n            for (int i = 0; i &lt; 100; i++) new RegionObject(100 + rng.nextInt(900));\n            if (opCount % 10 == 0) cache.put(UUID.randomUUID().toString(), new RegionObject(1024));\n            if (opCount % 100 == 0) {\n                cache.put(\"p-\" + (opCount / 100), new RegionObject(4096));\n                if (cache.size() > 100) cache.remove(cache.keySet().iterator().next());\n            }\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== G1 Garbage-First GC ===\\n\");\n        System.out.println(\"Run: -XX:+UseG1GC\\n\");\n\n        Application app = new Application();\n        for (int i = 0; i &lt; 2000; i++) app.runIteration();\n        System.out.println(\"Completed \" + app.opCount + \" operations\\n\");\n\n        System.out.println(\"G1 Key Concepts:\");\n        System.out.println(\"1. Region-based (~2048 regions, 1-32 MB each)\");\n        System.out.println(\"2. Young/Old generation boundaries are dynamic\");\n        System.out.println(\"3. Collects regions with most garbage first\");\n        System.out.println(\"4. Concurrent marking phase (SATB)\");\n        System.out.println(\"5. Remembered Sets (RSets) track cross-region refs\");\n        System.out.println(\"6. Mixed Collections: young + old regions with most garbage\");\n        System.out.println(\"7. Humongous objects (>50% region) in dedicated regions\\n\");\n\n        System.out.println(\"Flags:\");\n        System.out.println(\"-XX:MaxGCPauseMillis=200\");\n        System.out.println(\"-XX:G1HeapRegionSize=4m\");\n        System.out.println(\"-XX:InitiatingHeapOccupancyPercent=45\");\n        System.out.println(\"-XX:G1NewSizePercent=5\");\n        System.out.println(\"-XX:G1MaxNewSizePercent=60\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-zgc",
      children: "8.4 ZGC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ZGC (JDK 15+, Production) is a low-latency collector designed for huge heaps (multi-terabyte) with sub-millisecond pause times."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Objects;\n\npublic class ZGCDemo {\n\n    static class ZGCObject {\n        private final byte[] payload;\n        ZGCObject(int size) { this.payload = new byte[size]; }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Z Garbage Collector ===\\n\");\n        System.out.println(\"Enable: -XX:+UseZGC (JDK 15+)\\n\");\n\n        System.out.println(\"ZGC Design Goals:\");\n        System.out.println(\"  - < 1 ms pause times\");\n        System.out.println(\"  - Handle multi-TB heaps\");\n        System.out.println(\"  - Pause time independent of heap size\\n\");\n\n        System.out.println(\"ZGC Key Techniques:\");\n        System.out.println(\"1. Colored Pointers\");\n        System.out.println(\"   Uses unused bits in 64-bit pointers for state\");\n        System.out.println(\"   (Finalizable, Remapped, Marked0, Marked1)\\n\");\n        System.out.println(\"2. Load Barriers\");\n        System.out.println(\"   Small code injected at object reference reads\");\n        System.out.println(\"   Check and update pointer color bits\\n\");\n        System.out.println(\"3. Concurrent Relocation\");\n        System.out.println(\"   Moves objects while application runs\\n\");\n\n        List&lt;ZGCObject&gt; roots = new ArrayList&lt;>();\n        for (int i = 0; i &lt; 5000; i++) roots.add(new ZGCObject(1024 * 100));\n        for (int i = 0; i &lt; 2500; i++) roots.set(i, null);\n        roots.removeIf(Objects::isNull);\n        System.out.println(\"Survivors: \" + roots.size() + \"\\n\");\n\n        System.out.println(\"Flags:\");\n        System.out.println(\"-XX:+UseZGC\");\n        System.out.println(\"-XX:ConcGCThreads=N\");\n        System.out.println(\"-XX:SoftMaxHeapSize=&lt;size&gt;\");\n        System.out.println(\"-XX:ZAllocationSpikeTolerance=2.0\\n\");\n\n        System.out.println(\"Limitations:\");\n        System.out.println(\"  - Heap &lt; 16 TB (64-bit pointer bit limitation)\");\n        System.out.println(\"  - No compressed OOPs (always 64-bit)\");\n        System.out.println(\"  - Not for heaps &lt; 512 MB\");\n        System.out.println(\"  - Higher CPU overhead\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-shenandoah-gc",
      children: "8.5 Shenandoah GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Shenandoah (JDK 12+, OpenJDK; Oracle JDK 21+) is another low-pause collector using Brooks pointers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Random;\n\npublic class ShenandoahGCDemo {\n\n    static class Payload {\n        private final long[] data;\n        Payload(int size) { this.data = new long[size]; }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Shenandoah GC ===\\n\");\n        System.out.println(\"Run: -XX:+UseShenandoahGC (OpenJDK 12+)\\n\");\n\n        System.out.println(\"Key technique: Brooks Pointer\");\n        System.out.println(\"  Each object has a forward pointer field\");\n        System.out.println(\"  Updated atomically during relocation\\n\");\n\n        System.out.println(\"Shenandoah GC Phases:\");\n        System.out.println(\"  1. Init Mark (STW, short)\");\n        System.out.println(\"  2. Concurrent Mark\");\n        System.out.println(\"  3. Final Mark (STW, short)\");\n        System.out.println(\"  4. Concurrent Cleanup\");\n        System.out.println(\"  5. Concurrent Evacuation\");\n        System.out.println(\"  6. Init Update Refs (STW)\");\n        System.out.println(\"  7. Concurrent Update Refs\");\n        System.out.println(\"  8. Final Update Refs (STW)\\n\");\n\n        List&lt;Payload&gt; roots = new ArrayList&lt;>();\n        Random rng = new Random(42);\n        for (int cycle = 0; cycle &lt; 10; cycle++) {\n            for (int i = 0; i &lt; 2000; i++) roots.add(new Payload(100 + rng.nextInt(500)));\n            for (int i = 0; i &lt; 1000; i++) roots.set(rng.nextInt(roots.size()), null);\n            roots.removeIf(java.util.Objects::isNull);\n            System.out.println(\"Cycle \" + cycle + \": \" + roots.size() + \" survivors\");\n        }\n\n        System.out.println(\"\\nFlags:\");\n        System.out.println(\"-XX:+UseShenandoahGC\");\n        System.out.println(\"-XX:ShenandoahGCHeuristics=adaptive\");\n        System.out.println(\"-XX:ShenandoahUncommitDelay=1000\\n\");\n\n        System.out.println(\"Note: Shenandoah may not be available in all JDK distributions.\");\n        System.out.println(\"Oracle JDK requires JDK 21+; OpenJDK has it since JDK 12.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "86-gc-comparison-summary",
      children: "8.6 GC Comparison Summary"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Collector"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Throughput"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pause Time"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Heap Size"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Concurrency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Serial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 100 MB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 8 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low-Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1-64 GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 1 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB - 16 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearly all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shenandoah"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "< 10 ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "512 MB - 16 TB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Nearly all"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-gc-tuning",
      children: "9. GC Tuning"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-essential-flags",
      children: "9.1 Essential Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\npublic class GCTuningFlags {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== GC Tuning Flags ===\\n\");\n\n        System.out.println(\"--- Heap Sizing ---\");\n        System.out.println(\"-Xms&lt;size&gt;          Initial heap (e.g., -Xms512m)\");\n        System.out.println(\"-Xmx&lt;size&gt;          Maximum heap (e.g., -Xmx4g)\");\n        System.out.println(\"-Xmn&lt;size&gt;          Young generation size\");\n        System.out.println(\"-XX:NewRatio=N      Young:Old ratio (default 2)\");\n        System.out.println(\"-XX:SurvivorRatio=N Eden:S0:S1 (default 8)\\n\");\n\n        System.out.println(\"--- GC Selection ---\");\n        System.out.println(\"-XX:+UseSerialGC\");\n        System.out.println(\"-XX:+UseParallelGC (default JDK 8)\");\n        System.out.println(\"-XX:+UseG1GC (default JDK 9+)\");\n        System.out.println(\"-XX:+UseZGC\");\n        System.out.println(\"-XX:+UseShenandoahGC\\n\");\n\n        System.out.println(\"--- GC Logging ---\");\n        System.out.println(\"-XX:+PrintGCDetails\");\n        System.out.println(\"-XX:+PrintGCDateStamps\");\n        System.out.println(\"-Xloggc:gc.log\");\n        System.out.println(\"JDK 9+: -Xlog:gc*:file=gc.log\\n\");\n\n        System.out.println(\"--- G1 Specific ---\");\n        System.out.println(\"-XX:MaxGCPauseMillis=200\");\n        System.out.println(\"-XX:G1HeapRegionSize=4m\");\n        System.out.println(\"-XX:InitiatingHeapOccupancyPercent=45\\n\");\n\n        System.out.println(\"--- ZGC Specific ---\");\n        System.out.println(\"-XX:ConcGCThreads=N\");\n        System.out.println(\"-XX:SoftMaxHeapSize=&lt;size&gt;\\n\");\n\n        System.out.println(\"--- Diagnostics ---\");\n        System.out.println(\"-XX:+UnlockDiagnosticVMOptions\");\n        System.out.println(\"-XX:+PrintInlining\");\n        System.out.println(\"-XX:+PrintCompilation\");\n        System.out.println(\"-XX:+UnlockExperimentalVMOptions\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-gc-logging-and-analysis",
      children: "9.2 GC Logging and Analysis"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class GCLoggingDemo {\n\n    static class Alloc { private final byte[] data = new byte[1024 * 100]; }\n\n    public static void main(String[] args) throws InterruptedException {\n        System.out.println(\"=== GC Logging Demo ===\\n\");\n        System.out.println(\"Run: -Xlog:gc*:file=gc.log\\n\");\n\n        List&lt;Alloc&gt; roots = new ArrayList&lt;>();\n        for (int cycle = 0; cycle &lt; 10; cycle++) {\n            for (int i = 0; i &lt; 20; i++) roots.add(new Alloc());\n            for (int i = 0; i &lt; 7 && !roots.isEmpty(); i++) roots.remove(roots.size() - 1);\n            Thread.sleep(50);\n        }\n\n        System.out.println(\"Key metrics from GC logs:\");\n        System.out.println(\"  1. Pause duration (ms)\");\n        System.out.println(\"  2. Heap size before/after\");\n        System.out.println(\"  3. Young/Old generation sizes\");\n        System.out.println(\"  4. GC cause (Allocation Failure, System.gc(), etc.)\\n\");\n\n        System.out.println(\"Sample log entry:\");\n        System.out.println(\"[2026-01-15T14:30:00.123][gc,info] GC(3) \"\n            + \"Pause Young (Normal) 64M->12M(256M) 15.421ms\\n\");\n\n        System.out.println(\"Analysis tools: GCeasy, GCViewer, Censum\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-choosing-the-right-gc",
      children: "9.3 Choosing the Right GC"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.gc;\n\npublic class GCSelection {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== How to Choose a GC ===\\n\");\n\n        System.out.println(\"Step 1: Define Requirements\");\n        System.out.println(\"  - Throughput target (ops/sec)\");\n        System.out.println(\"  - Pause time target (P99 &lt; 10 ms)\");\n        System.out.println(\"  - Heap budget (max memory)\");\n        System.out.println(\"  - Allocation rate (MB/sec)\\n\");\n\n        System.out.println(\"Small Heap (< 1 GB), Single-threaded:\");\n        System.out.println(\"  -> Serial GC (-XX:+UseSerialGC)\\n\");\n\n        System.out.println(\"Medium Heap (1-4 GB), Batch/Compute:\");\n        System.out.println(\"  -> Parallel GC (-XX:+UseParallelGC)\\n\");\n\n        System.out.println(\"Large Heap (4-64 GB), General Server:\");\n        System.out.println(\"  -> G1 GC (default, -XX:+UseG1GC)\\n\");\n\n        System.out.println(\"Very Large Heap (64 GB+), Low Latency:\");\n        System.out.println(\"  -> ZGC (-XX:+UseZGC)\\n\");\n\n        System.out.println(\"Sub-10ms Pauses, Medium-Large Heap:\");\n        System.out.println(\"  -> Shenandoah (-XX:+UseShenandoahGC) or ZGC\\n\");\n\n        for (var bean : java.lang.management.ManagementFactory.getGarbageCollectorMXBeans()) {\n            System.out.println(\"Current: \" + bean.getName()\n                + \" (\" + bean.getCollectionCount() + \" collections, \"\n                + bean.getCollectionTime() + \" ms)\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-memory-leaks-in-java",
      children: "10. Memory Leaks in Java"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Java's garbage collection does not eliminate all memory leaks. A leak occurs when objects are no longer needed but remain reachable."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-classloader-leak",
      children: "10.1 Classloader Leak"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The most dangerous leak: holding references to classes prevents their ClassLoader from being GC'd."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\nimport java.net.URL;\nimport java.net.URLClassLoader;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class ClassLoaderLeak {\n\n    static class LeakedClass {}\n    private static final List&lt;Class<?&gt;> LEAKED = new ArrayList&lt;>();\n\n    public static void main(String[] args) throws Exception {\n        System.out.println(\"=== ClassLoader Leak ===\\n\");\n        System.out.println(\"Scenario: redeploying web apps in containers\\n\");\n        System.out.println(\"Root cause: external reference to class object\\n\");\n\n        for (int i = 0; i &lt; 10; i++) {\n            URLClassLoader loader = new URLClassLoader(new URL[0],\n                ClassLoader.getSystemClassLoader());\n            Class&lt;?> clazz = loader.loadClass(\n                \"com.example.jvm.leaks.ClassLoaderLeak$LeakedClass\");\n            LEAKED.add(clazz);\n            loader.close();\n            System.out.println(\"Loaded \" + clazz.getName()\n                + \" from loader #\" + i);\n        }\n        System.out.println(\"\\nPrevention:\");\n        System.out.println(\"  - Never store class objects in static collections\");\n        System.out.println(\"  - Use weak references for class metadata\");\n        System.out.println(\"  - Monitor -XX:+TraceClassLoading\");\n        System.out.println(\"  - Watch metaspace growth in monitoring tools\\n\");\n        System.out.println(\"Real-world: PermGen/Metaspace leaks in Tomcat redeploys.\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-threadlocal-leak",
      children: "10.2 ThreadLocal Leak"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ThreadLocal values are tied to thread lifecycle. In thread-pool environments, thread reuse keeps stale values alive."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\nimport java.util.concurrent.CountDownLatch;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.ThreadPoolExecutor;\n\npublic class ThreadLocalLeak {\n\n    private static final ThreadLocal&lt;byte[]&gt; TL = ThreadLocal.withInitial(\n        () -> new byte[1024 * 1024]); // 1 MB per thread\n\n    public static void main(String[] args) throws InterruptedException {\n        System.out.println(\"=== ThreadLocal Memory Leak ===\\n\");\n\n        var pool = (ThreadPoolExecutor) Executors.newFixedThreadPool(10);\n        int taskCount = 100;\n        var latch = new CountDownLatch(taskCount);\n\n        for (int i = 0; i &lt; taskCount; i++) {\n            int taskId = i;\n            pool.submit(() -> {\n                TL.set(new byte[1024 * 1024]);\n                byte[] data = TL.get();\n                System.out.println(\"Task \" + taskId\n                    + \" allocated \" + data.length + \" bytes\");\n                TL.remove(); // crucial!\n                latch.countDown();\n            });\n        }\n        latch.await();\n        pool.shutdown();\n        System.out.println(\"\\nIf TL.remove() is NOT called: \");\n        System.out.println(\"  ThreadLocal.Entry &lt;value&gt; references remain\");\n        System.out.println(\"  Thread lives in pool → 1 MB leak per thread\");\n        System.out.println(\"  Week-end: total leak = poolSize * 1 MB\\n\");\n        System.out.println(\"Root cause: ThreadLocalMap Entry extends WeakReference\");\n        System.out.println(\"  Key is weak (WeakReference&lt;ThreadLocal&gt;), value is strong\");\n        System.out.println(\"  If TL itself is GC'd, leaked values live until thread reuse\\n\");\n        System.out.println(\"Prevention:\");\n        System.out.println(\"  - Always call tl.remove() in finally block\");\n        System.out.println(\"  - Use try-with-resources pattern\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-static-collection-leak",
      children: "10.3 Static Collection Leak"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Accumulating objects in static collections is the simplest and most common leak pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.UUID;\n\npublic class StaticCollectionLeak {\n\n    private static final List&lt;String&gt; CACHE = new ArrayList&lt;>();\n    private static final List&lt;String&gt; EVENT_LOG = new ArrayList&lt;>();\n\n    static class EventProcessor {\n        void process(String event) {\n            EVENT_LOG.add(event); // unbounded growth\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Static Collection Leak ===\\n\");\n        System.out.println(\"Monitoring: jconsole / jvisualvm heap growth\\n\");\n\n        for (int i = 0; i &lt; 10_000; i++) {\n            CACHE.add(UUID.randomUUID().toString());\n        }\n        System.out.println(\"CACHE size: \" + CACHE.size() + \" (retained forever)\\n\");\n\n        var processor = new EventProcessor();\n        for (int i = 0; i &lt; 50_000; i++) {\n            processor.process(\"event-\" + i);\n        }\n        System.out.println(\"EVENT_LOG size: \" + EVENT_LOG.size() + \"\\n\");\n\n        System.out.println(\"Patterns to avoid:\");\n        System.out.println(\"  1. Unbounded static collections\");\n        System.out.println(\"  2. Growing caches without eviction policy\");\n        System.out.println(\"  3. In-memory event logs for debugging\\n\");\n        System.out.println(\"Solutions:\");\n        System.out.println(\"  - WeakHashMap or CacheBuilder\");\n        System.out.println(\"  - Bounded queues (ArrayBlockingQueue)\");\n        System.out.println(\"  - LRU caches (Caffeine, Guava)\");\n        System.out.println(\"  - Fixed-size ring buffers\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "104-stringintern-leak-pre-jdk-8u25",
      children: "10.4 String.intern() Leak (Pre-JDK 8u25)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Interned strings lived permanently in PermGen (pre-JDK 8) or the String Table."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\npublic class StringInternLeak {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== String.intern() Leak (pre-JDK 8u25) ===\\n\");\n        System.out.println(\"Before JDK 8u25, interned strings lived in PermGen.\\n\");\n\n        String heap = new String(\"heap\");\n        String interned = heap.intern();\n\n        if (heap == interned) {\n            System.out.println(\"heap == interned (same object)\");\n        } else {\n            System.out.println(\"heap != interned; interned is in the String Pool\");\n        }\n\n        System.out.println(\"\\nDemonstration:\");\n        int count = 100_000;\n        String[] base = new String[count];\n        for (int i = 0; i &lt; base.length; i++) {\n            base[i] = new String(\"value-\" + i).intern();\n        }\n        System.out.println(\"Interned \" + count + \" strings\\n\");\n\n        System.out.println(\"String Pool implementation:\");\n        System.out.println(\"  - Hash table (fixed size, default 60013 buckets)\");\n        System.out.println(\"  - No eviction: entries live forever\");\n        System.out.println(\"  - Pre-JDK 8: PermGen (permanent leak)\");\n        System.out.println(\"  - JDK 8+: heap (still leak unless reclaimed)\\n\");\n        System.out.println(\"Leak symptom: OutOfMemoryError: PermGen space\\n\");\n        System.out.println(\"Prevention:\");\n        System.out.println(\"  - Avoid String.intern() for dynamic data\");\n        System.out.println(\"  - -XX:StringTableSize=N (increase bucket count)\");\n        System.out.println(\"  - Use HashSet&lt;String&gt; with explicit eviction\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "105-listener-and-callback-leaks",
      children: "10.5 Listener and Callback Leaks"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Forgotten listener registrations hold strong references to subscribers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\nimport java.lang.ref.WeakReference;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.CopyOnWriteArrayList;\n\npublic class ListenerLeak {\n\n    interface Listener { void onEvent(String e); }\n\n    static class EventBus {\n        private final List&lt;Listener&gt; strong = new CopyOnWriteArrayList&lt;>();\n        private final List&lt;WeakReference<Listener&gt;> weak = new CopyOnWriteArrayList&lt;>();\n\n        void registerStrong(Listener l) { strong.add(l); }\n        void registerWeak(Listener l) { weak.add(new WeakReference&lt;>(l)); }\n        void fire(String event) {\n            for (Listener l : strong) l.onEvent(event);\n            weak.removeIf(w -> w.get() == null);\n            for (var w : weak) { Listener l = w.get(); if (l != null) l.onEvent(event); }\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Listener Leak ===\\n\");\n\n        EventBus bus = new EventBus();\n        registerListeners(bus);\n\n        System.gc();\n        System.out.println(\"After GC, weak listeners are cleaned.\");\n        System.out.println(\"Strong listeners remain even if no other ref exists.\\n\");\n\n        System.out.println(\"Prevention:\");\n        System.out.println(\"  1. Use WeakReference for listener lists\");\n        System.out.println(\"  2. Always unregister in cleanup() methods\");\n        System.out.println(\"  3. Use AutoCloseable pattern\");\n        System.out.println(\"  4. Consider WeakHashMap&lt;Listener, Boolean&gt;\\n\");\n        System.out.println(\"Real-world: Android Activity leaks from anonymous listener classes\");\n    }\n\n    static void registerListeners(EventBus bus) {\n        for (int i = 0; i &lt; 5; i++) {\n            int id = i;\n            bus.registerStrong(e -> System.out.println(\"Strong listener \" + id));\n            bus.registerWeak(e -> System.out.println(\"Weak listener \" + id));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-detecting-memory-leaks",
      children: "10.6 Detecting Memory Leaks"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.leaks;\n\nimport javax.management.*;\nimport java.lang.management.*;\n\npublic class LeakDetector {\n\n    public static void main(String[] args) throws Exception {\n        System.out.println(\"=== Memory Leak Detection ===\\n\");\n\n        var memMX = ManagementFactory.getMemoryMXBean();\n        var heap = memMX.getHeapMemoryUsage();\n        var nonHeap = memMX.getNonHeapMemoryUsage();\n\n        System.out.println(\"Heap:\");\n        System.out.println(\"  Used:      \" + heap.getUsed() / 1024 / 1024 + \" MB\");\n        System.out.println(\"  Committed: \" + heap.getCommitted() / 1024 / 1024 + \" MB\");\n        System.out.println(\"  Max:       \" + heap.getMax() / 1024 / 1024 + \" MB\");\n        System.out.println(\"  Init:      \" + heap.getInit() / 1024 / 1024 + \" MB\\n\");\n\n        System.out.println(\"Non-Heap (Metaspace+CodeCache+etc):\");\n        System.out.println(\"  Used:      \" + nonHeap.getUsed() / 1024 / 1024 + \" MB\\n\");\n\n        System.out.println(\"Tools:\");\n        System.out.println(\"  1. jmap -histo:live &lt;pid&gt;     (heap histo)\");\n        System.out.println(\"  2. jmap -dump:live &lt;pid&gt;      (heap dump)\");\n        System.out.println(\"  3. jstat -gcutil &lt;pid&gt; 5s     (GC stats)\");\n        System.out.println(\"  4. jconsole / visualvm       (GUI)\");\n        System.out.println(\"  5. Eclipse MAT / JProfiler    (dump analysis)\\n\");\n\n        System.out.println(\"Warning signs:\");\n        System.out.println(\"  - Increasing heap after Full GC\");\n        System.out.println(\"  - Class histogram never shrinks\");\n        System.out.println(\"  - Metaspace keeps growing\");\n        System.out.println(\"  - GC count increasing with same allocation rate\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-stackoverflowerror",
      children: "11. StackOverflowError"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stack overflows occur when a thread's call stack exceeds its allocated size."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm;\n\npublic class StackOverflowDemo {\n\n    private long depth = 0;\n\n    public void recurse() {\n        depth++;\n        int localA = 10;\n        int localB = 20;\n        int localC = localA + localB;\n        recurse();\n    }\n\n    public void tailRecurse(int n, int acc) {\n        if (n == 0) System.out.println(\"Result: \" + acc);\n        else tailRecurse(n - 1, acc + n);\n    }\n\n    public void deepRecursion() {\n        try {\n            recurse();\n        } catch (StackOverflowError e) {\n            System.out.println(\"Stack overflow at depth: \" + depth);\n        }\n    }\n\n    public static void infiniteLoop() {\n        // No recursion, but an infinite loop that allocates stack frame locals\n        for (int i = 0; ; i++) {\n            long[] data = new long[1000];\n        }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== StackOverflowError ===\\n\");\n\n        StackOverflowDemo demo = new StackOverflowDemo();\n        demo.deepRecursion();\n\n        System.out.println(\"\\nControlling stack size: -Xss&lt;size&gt;\");\n        System.out.println(\"Default: ~1 MB (platform-dependent)\\n\");\n\n        System.out.println(\"Common causes:\");\n        System.out.println(\"  1. Infinite recursion (no base case)\");\n        System.out.println(\"  2. Deep recursion (many frames)\");\n        System.out.println(\"  3. Large local variables per frame\");\n        System.out.println(\"  4. Mutual recursion (A calls B calls A)\");\n\n        int stackKB = (int) (1024 * 1024);\n        System.out.println(\"\\nExample stack analysis:\");\n        System.out.println(\"  -Xss256k → ~800 frames ~32 bytes each\");\n        System.out.println(\"  -Xss2m   → ~6500 frames\");\n        System.out.println(\"  Each local variable: 4 or 8 bytes\");\n        System.out.println(\"  Each frame overhead: ~24 bytes\\n\");\n\n        System.out.println(\"Prevention:\");\n        System.out.println(\"  - Increase -Xss (last resort)\");\n        System.out.println(\"  - Reduce local variable count\");\n        System.out.println(\"  - Convert recursion to iteration\");\n        System.out.println(\"  - Use tail recursion optimization\");\n        System.out.println(\"    (Note: Java does NOT perform tail-call optimization)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-string-pool",
      children: "12. String Pool"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The String Pool is a specialized hash table in the heap that caches string literals and interned strings."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm;\n\npublic class StringPoolDemo {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== String Pool ===\\n\");\n\n        // Literals go to pool\n        String a = \"hello\";\n        String b = \"hello\";\n        System.out.println(\"Literal comparison: \" + (a == b)); // true\n\n        // new String() creates heap object, not in pool\n        String c = new String(\"hello\");\n        System.out.println(\"new String() vs literal: \" + (a == c)); // false\n\n        // intern() returns pool reference\n        String d = c.intern();\n        System.out.println(\"intern() vs literal: \" + (a == d)); // true\n\n        // Concatenation of literals is compile-time constant\n        String e = \"hel\" + \"lo\";\n        System.out.println(\"Compile-time concat: \" + (a == e)); // true\n\n        // Concatenation with variable is NOT compile-time\n        String suffix = \"lo\";\n        String f = \"hel\" + suffix;\n        System.out.println(\"Runtime concat: \" + (a == f)); // false\n        System.out.println(\"Runtime concat interned: \" + (a == f.intern())); // true\n\n        System.out.println(\"\\nString Pool internals:\");\n        System.out.println(\"  - Hash table: default 60013 buckets\");\n        System.out.println(\"  - -XX:StringTableSize=N\");\n        System.out.println(\"  - No eviction policy\");\n        System.out.println(\"  - JDK 7+: heap (previously PermGen)\\n\");\n\n        // Pool size comparison\n        long startMem = Runtime.getRuntime().totalMemory()\n            - Runtime.getRuntime().freeMemory();\n\n        String[] poolFiller = new String[10_000];\n        for (int i = 0; i &lt; poolFiller.length; i++) {\n            poolFiller[i] = (\"key-\" + i).intern();\n        }\n\n        long endMem = Runtime.getRuntime().totalMemory()\n            - Runtime.getRuntime().freeMemory();\n\n        System.out.println(\"Memory used by 10,000 interned strings: ~\"\n            + (endMem - startMem) / 1024 + \" KB\\n\");\n\n        System.out.println(\"Best practices:\");\n        System.out.println(\"  - Use literals when possible\");\n        System.out.println(\"  - Avoid intern() on user/dynamic input\");\n        System.out.println(\"  - Increase StringTableSize if interning many strings\");\n        System.out.println(\"  - Compare with equals(), not == (unless interned)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-performance-flags",
      children: "13. Performance Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "131-jit-compilation-flags",
      children: "13.1 JIT Compilation Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.flags;\n\nimport java.lang.management.ManagementFactory;\n\npublic class JITFlags {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== JIT Compilation Flags ===\\n\");\n\n        System.out.println(\"--- Tiered Compilation ---\");\n        System.out.println(\"-XX:+TieredCompilation (default since JDK 8)\");\n        System.out.println(\"-XX:TieredStopAtLevel=N (force specific tier)\");\n        System.out.println(\"-XX:-TieredCompilation (disable, C2 only after C1)\\n\");\n\n        System.out.println(\"--- Method Inlining ---\");\n        System.out.println(\"-XX:MaxInlineSize=35 (default bytecode size ~35)\");\n        System.out.println(\"-XX:FreqInlineSize=325 (hot method size ~325)\");\n        System.out.println(\"-XX:+InlineSynchronizedMethods\\n\");\n\n        System.out.println(\"--- Compilation Thresholds ---\");\n        System.out.println(\"-XX:CompileThreshold=10000 (C1: method entry counter)\");\n        System.out.println(\"-XX:CompileThresholdScaling=&lt;float&gt;\");\n        System.out.println(\"-XX:OnStackReplacePercentage=140 (OSR ratio)\\n\");\n\n        System.out.println(\"--- ReservedCodeCacheSize ---\");\n        System.out.println(\"-XX:ReservedCodeCacheSize=240m (default)\");\n        System.out.println(\"-XX:InitialCodeCacheSize=160m\\n\");\n\n        System.out.println(\"--- Print Compilation ---\");\n        System.out.println(\"-XX:+PrintCompilation (log compiled methods)\");\n        System.out.println(\"-XX:+UnlockDiagnosticVMOptions\");\n        System.out.println(\"-XX:+PrintInlining\\n\");\n\n        for (var mx : ManagementFactory.getCompilationMXBeans()) {\n            System.out.println(\"Current JIT: \" + mx.getName()\n                + \" (\" + mx.getTotalCompilationTime() + \" ms)\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "132-memory-flags",
      children: "13.2 Memory Flags"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.flags;\n\npublic class MemoryFlags {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Memory Flags ===\\n\");\n\n        System.out.println(\"--- Heap ---\");\n        System.out.println(\"-Xms&lt;size&gt;          -Xms4g\");\n        System.out.println(\"-Xmx&lt;size&gt;          -Xmx4g\");\n        System.out.println(\"-XX:+AlwaysPreTouch\");\n        System.out.println(\"-XX:+UseNUMA\\n\");\n\n        System.out.println(\"--- Young Generation ---\");\n        System.out.println(\"-Xmn&lt;size&gt;          -Xmn2g\");\n        System.out.println(\"-XX:NewSize=&lt;size&gt;\");\n        System.out.println(\"-XX:MaxNewSize=&lt;size&gt;\");\n        System.out.println(\"-XX:NewRatio=N       NewRatio=2 → 1:2\");\n        System.out.println(\"-XX:SurvivorRatio=N  8 → eden:survivor = 8:1:1\\n\");\n\n        System.out.println(\"--- Metaspace ---\");\n        System.out.println(\"-XX:MetaspaceSize=&lt;size&gt; (initial threshold)\");\n        System.out.println(\"-XX:MaxMetaspaceSize=&lt;size&gt;\");\n        System.out.println(\"-XX:CompressedClassSpaceSize=&lt;size&gt;\");\n        System.out.println(\"-XX:+UseCompressedClassPointers (default)\\n\");\n\n        System.out.println(\"--- Direct Memory ---\");\n        System.out.println(\"-XX:MaxDirectMemorySize=&lt;size&gt;\\n\");\n\n        System.out.println(\"--- Large Pages ---\");\n        System.out.println(\"-XX:+UseLargePages (Linux only)\");\n        System.out.println(\"-XX:LargePageSizeInBytes=2m\\n\");\n\n        System.out.println(\"--- Compression ---\");\n        System.out.println(\"-XX:+UseCompressedOops (default, heap &lt; 32 GB)\");\n        System.out.println(\"-XX:ObjectAlignmentInBytes=8 (default)\");\n        System.out.println(\"Compressed OOPs convert to: heap_base + (offset &lt;< 3)\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "133-complete-production-jvm-flags-example",
      children: "13.3 Complete Production JVM Flags Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.flags;\n\npublic class ProductionFlags {\n\n    public static void main(String[] args) {\n        System.out.println(\"=== Production JVM Flags (Example) ===\\n\");\n        System.out.println(\"// --- Memory ---\");\n        System.out.println(\"-Xms4g\");\n        System.out.println(\"-Xmx4g\");\n        System.out.println(\"-Xmn2g\");\n        System.out.println(\"-XX:MetaspaceSize=256m\");\n        System.out.println(\"-XX:MaxMetaspaceSize=256m\");\n        System.out.println(\"-XX:+AlwaysPreTouch\");\n        System.out.println(\"-XX:+UseCompressedOops\");\n        System.out.println(\"-XX:+UseNUMA\");\n        System.out.println();\n        System.out.println(\"// --- GC (G1) ---\");\n        System.out.println(\"-XX:+UseG1GC\");\n        System.out.println(\"-XX:MaxGCPauseMillis=200\");\n        System.out.println(\"-XX:G1HeapRegionSize=4m\");\n        System.out.println(\"-XX:InitiatingHeapOccupancyPercent=45\");\n        System.out.println(\"-XX:G1ReservePercent=15\");\n        System.out.println(\"-XX:G1NewSizePercent=5\");\n        System.out.println(\"-XX:G1MaxNewSizePercent=60\");\n        System.out.println(\"-XX:+UnlockExperimentalVMOptions\");\n        System.out.println(\"-XX:G1MixedGCLiveThresholdPercent=85\");\n        System.out.println();\n        System.out.println(\"// --- GC Logging ---\");\n        System.out.println(\"-Xlog:gc*,gc+age=trace,safepoint:file=gc-%t.log:time,uptime\");\n        System.out.println();\n        System.out.println(\"// --- JIT ---\");\n        System.out.println(\"-XX:ReservedCodeCacheSize=512m\");\n        System.out.println(\"-XX:+PrintCompilation\");\n        System.out.println();\n        System.out.println(\"// --- Diagnostics ---\");\n        System.out.println(\"-XX:+UnlockDiagnosticVMOptions\");\n        System.out.println(\"-XX:+PrintInlining\");\n        System.out.println(\"-XX:+HeapDumpOnOutOfMemoryError\");\n        System.out.println(\"-XX:HeapDumpPath=/var/log/app/heapdump.hprof\");\n        System.out.println(\"-XX:ErrorFile=/var/log/app/hs_err_%p.log\");\n        System.out.println();\n        System.out.println(\"// --- Security ---\");\n        System.out.println(\"-Djava.security.egd=file:/dev/./urandom\");\n        System.out.println(\"-Djava.security.debug=all\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
            children: "JVM"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract computing machine executing bytecode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Platform-independent execution model"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write once, run anywhere"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Class Loader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loads .class files into memory"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Delegation hierarchy prevents duplicate loading"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Framework isolation (Tomcat, OSGi)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared runtime memory for objects"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GC-managed, divided into generations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "All object allocations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per-thread memory for method frames"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "LIFO structure, holds locals + operand stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method invocation and return"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Garbage Collector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic memory reclamation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different algorithms for different workloads"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Throughput vs latency trade-off"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Category"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Concepts"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Memory Areas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Heap, Stack, Metaspace, PC Register, Native Stack"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Only heap is GC-managed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "GC Algorithms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serial, Parallel, G1, ZGC, Shenandoah"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose by pause-time SLA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Key Flags"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-Xms, -Xmx, -Xss, -XX:MetaspaceSize, -XX:+UseG1GC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Set -Xms = -Xmx to avoid resizing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Diagnostic Tools"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "jstat, jmap, jhat, MAT, jvisualvm"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always take heap dump before restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Class Loaders"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bootstrap, Platform, Application, Custom"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom loaders need careful native memory planning"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web Apps"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Big Data"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Low-Latency Trading"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G1 GC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary choice for steady throughput"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default in containers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Too high latency"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZGC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sub-10ms pause target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good for critical services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ideal for real-time"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom ClassLoader"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "App server isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin systems"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UDF loading in Spark"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Heap Dump Analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Memory leak debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "OOM crash investigation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Large heap analysis"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JIT Tuning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Startup vs peak perf trade-off"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container warmup"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Long-running optimization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Profile-guided optimization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the correct order of the class loader delegation model?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Application → Platform → Bootstrap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Bootstrap → Platform → Application"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Application → Bootstrap → Platform"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Platform → Application → Bootstrap"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Bootstrap → Platform → Application.** The delegation model is parent-first: a class loader delegates to its parent before attempting to load a class itself.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which garbage collector is designed for sub-millisecond pause times?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Parallel GC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) G1 GC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) ZGC"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Serial GC"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**C) ZGC.** ZGC is a low-latency garbage collector designed for sub-millisecond pause times, regardless of heap size.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens when a method is called 10,000+ times in the JVM?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) It is reinterpreted each time"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) It may be JIT-compiled to native code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The JVM throws an exception"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) It gets garbage collected"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) It may be JIT-compiled to native code.** The JIT compiler monitors hot methods and compiles them to native machine code for better performance.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary difference between stack and heap memory?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Stack is slower than heap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Stack stores method frames per-thread; heap stores objects shared across threads"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Heap is per-thread; stack is shared"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Stack stores method frames per-thread; heap stores objects shared across threads.** Each thread has its own stack, while the heap is shared among all threads.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which JVM flag controls the initial heap size?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) -Xms"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) -Xmx"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) -Xss"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) -XX:MaxMetaspaceSize"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**A) -Xms.** The -Xms flag sets the initial heap size, while -Xmx sets the maximum heap size.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-summary",
      children: "14. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the JVM architecture and memory management in depth:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "key-concepts",
      children: "Key Concepts"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JVM Architecture"
      }), ": The JVM is a specification implemented by vendors (Oracle, IBM, GraalVM). It includes the class-loading subsystem (loading, linking, initialization), the runtime data areas (method area, heap, stack, PC registers, native stack), and the execution engine (interpreter, JIT compilers, GC)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Class Loading"
      }), ": Uses a hierarchical delegation model. The three built-in loaders are Bootstrap (rt.jar, JDK core), Extension/Platform (ext libraries), and Application (classpath). Custom loaders enable dynamic code loading, class reloading, and bytecode manipulation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Bytecode"
      }), ": Platform-independent intermediate representation. Tools like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "javap"
      }), " disassemble ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".class"
      }), " files. Key instructions include ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aload"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "getfield"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokevirtual"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "invokedynamic"
      }), " (for lambdas). The stack-frame architecture stores local variables, operand stack, and frame data."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "JIT Compilation"
      }), ": Hot methods transition from interpretation through profiling (tiers 0-3) to fully optimized native code (tier 4, C2). Key techniques include hot-spot detection, method inlining, escape analysis (stack allocation, lock elision, scalar replacement), on-stack replacement, and code cache management."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Areas"
      }), ": The heap (young + old generations) stores all objects. The stack holds frames with local variables and partial results. Metaspace (native memory) stores class metadata. Direct memory is allocated outside the heap for NIO operations."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Garbage Collection"
      }), ": Driven by the generational hypothesis. Major algorithms include mark-sweep, mark-compact, and copying. GC roots include stack locals, statics, and JNI handles."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GC Implementations"
      }), ": Serial (single-thread, small heaps), Parallel (high throughput), G1 (default, region-based, mixed collections), ZGC (sub-millisecond, colored pointers), and Shenandoah (Brooks pointers, concurrent evacuation)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Memory Leaks"
      }), ": Common patterns include classloader leaks, ThreadLocal values in thread pools, unbounded static collections, interned strings, and unregistered listeners. Detection requires heap dump analysis (MAT, jprofiler) and monitoring (jstat, jconsole)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stack Overflow"
      }), ": Caused by infinite or deep recursion, excessively large frames, or insufficient stack size (", (0,jsx_runtime.jsx)(_components.code, {
        children: "-Xss"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "String Pool"
      }), ": Caches string literals and interned strings in a fixed-size hash table. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals()"
      }), " for comparison unless you control interning."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "jvm-evolution",
      children: "JVM Evolution"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JDK Version"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "G1 GC (production)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Module System"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZGC (experimental)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "11"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ZGC (production)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shenandoah (production, OpenJDK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "12"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Shenandoah (Oracle JDK)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "21"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Graal JIT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "16+ (experimental)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project Lilliput (compact headers)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Project Leyden (ahead-of-time)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TBD"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-exercises",
      children: "15. Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain the three main subsystems of the JVM architecture."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the delegation model in class loading? Why does it prevent class collision?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Describe the three phases of class loading: loading, linking, and initialization."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the difference between C1 and C2 compilers? When does each run?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Explain escape analysis. What three optimizations does it enable?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the generational hypothesis? How does it influence GC design?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Compare G1, ZGC, and Shenandoah GC. When would you choose each?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is a GC root? List four types of GC roots."
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "How does ThreadLocal cause memory leaks in thread pools?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the String Pool? Why does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "intern()"
          }), " exist?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-exercises",
      children: "Application Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 1: JIT Warmup Analysis"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a program that measures throughput of a math-intensive method over 5 million calls. Run with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "-XX:+PrintCompilation"
      }), " and observe compilation events."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.exercises;\n\npublic class Exercise1_JITWarmup {\n\n    public static double compute(double x, int n) {\n        double result = 1.0;\n        for (int i = 0; i &lt; n; i++) {\n            result = result * x + Math.sin(result);\n        }\n        return result;\n    }\n\n    public static void main(String[] args) {\n        long[] timings = new long[50];\n        for (int batch = 0; batch &lt; 50; batch++) {\n            long start = System.nanoTime();\n            for (int i = 0; i &lt; 100_000; i++) {\n                compute(i * 0.01, 100);\n            }\n            timings[batch] = System.nanoTime() - start;\n        }\n        for (int i = 0; i &lt; timings.length; i++) {\n            System.out.println(\"Batch \" + i + \": \" + timings[i] / 1_000_000 + \" ms\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -XX:+PrintCompilation -cp . com.example.jvm.exercises.Exercise1_JITWarmup\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 2: GC Comparison"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a program that allocates and discards objects in a loop. Run with Serial, Parallel, G1, and ZGC. Compare pause times and throughput."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.exercises;\n\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.Random;\n\npublic class Exercise2_GCComparison {\n\n    static class Payload {\n        long[] data;\n        Payload() { data = new long[256]; }\n    }\n\n    public static void main(String[] args) {\n        List&lt;Payload&gt; roots = new ArrayList&lt;>();\n        Random rng = new Random(42);\n        long start = System.currentTimeMillis();\n        int totalAllocated = 0;\n\n        while (System.currentTimeMillis() - start &lt; 10_000) {\n            for (int i = 0; i &lt; 1000; i++) {\n                roots.add(new Payload());\n                totalAllocated++;\n            }\n            for (int i = 0; i &lt; 300; i++) {\n                if (!roots.isEmpty()) roots.remove(rng.nextInt(roots.size()));\n            }\n        }\n        System.out.println(\"Total allocated: \" + totalAllocated);\n        System.out.println(\"Survivors: \" + roots.size());\n        System.out.println(\"Run with each GC flag and compare RuntimeMXBean\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "java -XX:+UseSerialGC -Xlog:gc*:file=gc-serial.log com.example.jvm.exercises.Exercise2_GCComparison\njava -XX:+UseG1GC -Xlog:gc*:file=gc-g1.log com.example.jvm.exercises.Exercise2_GCComparison\n# Compare logs using GCViewer\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Exercise 3: Memory Leak Detector"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a class that simulates a ThreadLocal leak. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "jmap -histo:live"
      }), " to detect the leaked objects before and after GC."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.jvm.exercises;\n\nimport java.util.concurrent.*;\n\npublic class Exercise3_LeakDetector {\n\n    static final ThreadLocal&lt;byte[]&gt; TL = ThreadLocal.withInitial(() -> null);\n\n    public static void main(String[] args) throws Exception {\n        var pool = Executors.newFixedThreadPool(10);\n        for (int i = 0; i &lt; 100_000; i++) {\n            pool.submit(() -> {\n                TL.set(new byte[1024 * 100]); // 100 KB\n                // Uncomment to fix: TL.remove();\n                return null;\n            });\n        }\n        pool.shutdown();\n        pool.awaitTermination(10, TimeUnit.SECONDS);\n        System.out.println(\"Take heap dump: jmap -dump:live,format=b,file=leak.hprof &lt;pid&gt;\");\n        Thread.sleep(60_000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-exercises",
      children: "Challenge Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 1: Custom ClassLoader for Bytecode Encryption"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Build a custom ClassLoader that decrypts encrypted .class files before defining them. Include:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AES encryption utility"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom ClassLoader that decrypts bytes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple interface and implementation to demonstrate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "(Reference the implementation in Section 2.4.)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 2: GC Ergonomics Simulator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a simulator that models GC behavior:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulated heap with configurable young/old ratio"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configurable allocation rate and object survival rate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Calculates expected pause times and throughput"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Compare with real GC logs"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 3: String Pool Performance Test"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Benchmark string deduplication strategies:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "String.intern()"
        }), " with large StringTable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "HashMap<String, String>"
        }), " with periodic cleanup"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guava Interner"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "No deduplication (baseline)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Measure memory usage and throughput for 1 million strings."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Challenge 4: Stack Overflow Analyzer"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write a program that determines maximum recursion depth:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Method with 0, 5, and 10 local variables"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Vary ", (0,jsx_runtime.jsx)(_components.code, {
          children: "-Xss"
        }), " from 256k to 4m"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plot depth vs stack size"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Derive per-frame overhead formula"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.em, {
        children: "End of Chapter: JVM Architecture & Memory Management"
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