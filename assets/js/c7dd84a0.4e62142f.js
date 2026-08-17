"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[63414],{

/***/ 55235
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_05_functional_deep_md_c7d_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-05-functional-deep-md-c7d.json
const site_docs_courses_java_05_functional_deep_md_c7d_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/05-functional-deep","title":"Functional Programming in Practice","description":"Previous Performance Tuning & Profiling","source":"@site/docs/courses/java/05-functional-deep.md","sourceDirName":"courses/java","slug":"/java/05-functional-deep","permalink":"/ai-engineering-journey/java/05-functional-deep","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"05-functional-deep","slug":"/java/05-functional-deep","title":"Functional Programming in Practice","sidebar_label":"Functional Programming in Practice","sidebar_position":5},"sidebar":"course-java","previous":{"title":"Java Modules (JPMS) & Packaging","permalink":"/ai-engineering-journey/java/04-jpms-packaging"},"next":{"title":"Performance Tuning & Profiling","permalink":"/ai-engineering-journey/java/06-performance"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/05-functional-deep.md


const frontMatter = {
	id: '05-functional-deep',
	slug: '/java/05-functional-deep',
	title: 'Functional Programming in Practice',
	sidebar_label: 'Functional Programming in Practice',
	sidebar_position: 5
};
const contentTitle = 'Functional Programming in Practice';

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
  "value": "1. Advanced Stream Operations",
  "id": "1-advanced-stream-operations",
  "level": 2
}, {
  "value": "1.1 <code>mapMulti</code> (Java 16+)",
  "id": "11-mapmulti-java-16",
  "level": 3
}, {
  "value": "1.2 Custom <code>distinctBy</code>",
  "id": "12-custom-distinctby",
  "level": 3
}, {
  "value": "1.3 <code>Stream.iterate</code> with Predicate (Java 9+)",
  "id": "13-streamiterate-with-predicate-java-9",
  "level": 3
}, {
  "value": "1.4 Custom <code>zip</code>",
  "id": "14-custom-zip",
  "level": 3
}, {
  "value": "1.5 <code>flatMap</code> Deep Patterns",
  "id": "15-flatmap-deep-patterns",
  "level": 3
}, {
  "value": "1.6 <code>Stream.concat</code> and Interleave",
  "id": "16-streamconcat-and-interleave",
  "level": 3
}, {
  "value": "2. Custom Collectors in Depth",
  "id": "2-custom-collectors-in-depth",
  "level": 2
}, {
  "value": "2.1 The <code>Collector&lt;T, A, R&gt;</code> Interface",
  "id": "21-the-collectort-a-r-interface",
  "level": 3
}, {
  "value": "2.2 Custom Downstream Collector",
  "id": "22-custom-downstream-collector",
  "level": 3
}, {
  "value": "2.3 <code>Collector.of</code> with Complex Finisher",
  "id": "23-collectorof-with-complex-finisher",
  "level": 3
}, {
  "value": "3. Monad Patterns in Java",
  "id": "3-monad-patterns-in-java",
  "level": 2
}, {
  "value": "3.1 <code>Optional</code> as a Monad",
  "id": "31-optional-as-a-monad",
  "level": 3
}, {
  "value": "3.2 <code>CompletableFuture</code> as a Monad",
  "id": "32-completablefuture-as-a-monad",
  "level": 3
}, {
  "value": "3.3 Custom Monad-Like: <code>Box&lt;T&gt;</code>",
  "id": "33-custom-monad-like-boxt",
  "level": 3
}, {
  "value": "3.4 Validation Monad",
  "id": "34-validation-monad",
  "level": 3
}, {
  "value": "4. Functional Interfaces → Beyond Basics",
  "id": "4-functional-interfaces--beyond-basics",
  "level": 2
}, {
  "value": "4.1 Specialization Reference",
  "id": "41-specialization-reference",
  "level": 3
}, {
  "value": "4.2 Consumer Chaining",
  "id": "42-consumer-chaining",
  "level": 3
}, {
  "value": "4.3 Predicate Composition Factories",
  "id": "43-predicate-composition-factories",
  "level": 3
}, {
  "value": "4.4 Function Arity: TriFunction and Beyond",
  "id": "44-function-arity-trifunction-and-beyond",
  "level": 3
}, {
  "value": "5. Function Composition Pipelines",
  "id": "5-function-composition-pipelines",
  "level": 2
}, {
  "value": "5.1 <code>andThen</code> and <code>compose</code> Deep Dive",
  "id": "51-andthen-and-compose-deep-dive",
  "level": 3
}, {
  "value": "5.2 Pipeline Construction",
  "id": "52-pipeline-construction",
  "level": 3
}, {
  "value": "5.3 Partial Application",
  "id": "53-partial-application",
  "level": 3
}, {
  "value": "5.4 Currying Simulation Revisited",
  "id": "54-currying-simulation-revisited",
  "level": 3
}, {
  "value": "6. Lazy Evaluation Patterns",
  "id": "6-lazy-evaluation-patterns",
  "level": 2
}, {
  "value": "6.1 Stream Laziness Revisited",
  "id": "61-stream-laziness-revisited",
  "level": 3
}, {
  "value": "6.2 <code>Supplier</code> for Lazy Initialization",
  "id": "62-supplier-for-lazy-initialization",
  "level": 3
}, {
  "value": "6.3 Custom <code>Lazy&lt;T&gt;</code> Structure",
  "id": "63-custom-lazyt-structure",
  "level": 3
}, {
  "value": "6.4 Infinite Streams in Practice",
  "id": "64-infinite-streams-in-practice",
  "level": 3
}, {
  "value": "7. Immutable Data in Functional Style",
  "id": "7-immutable-data-in-functional-style",
  "level": 2
}, {
  "value": "7.1 Records as Functional Data Carriers",
  "id": "71-records-as-functional-data-carriers",
  "level": 3
}, {
  "value": "7.2 The <code>@With</code> / Wither Pattern",
  "id": "72-the-with--wither-pattern",
  "level": 3
}, {
  "value": "7.3 Unmodifiable Collections",
  "id": "73-unmodifiable-collections",
  "level": 3
}, {
  "value": "7.4 Defensive Copying",
  "id": "74-defensive-copying",
  "level": 3
}, {
  "value": "8. Pattern Matching (Java 21+)",
  "id": "8-pattern-matching-java-21",
  "level": 2
}, {
  "value": "8.1 Switch Expression &amp; Pattern Matching",
  "id": "81-switch-expression--pattern-matching",
  "level": 3
}, {
  "value": "8.2 Record Patterns",
  "id": "82-record-patterns",
  "level": 3
}, {
  "value": "8.3 Guarded Patterns",
  "id": "83-guarded-patterns",
  "level": 3
}, {
  "value": "8.4 Sealed Class Exhaustive Matching",
  "id": "84-sealed-class-exhaustive-matching",
  "level": 3
}, {
  "value": "9. Optionals → Beyond the Basics",
  "id": "9-optionals--beyond-the-basics",
  "level": 2
}, {
  "value": "9.1 <code>or</code>, <code>ifPresentOrElse</code>, <code>stream()</code> → Deep Patterns",
  "id": "91-or-ifpresentorelse-stream--deep-patterns",
  "level": 3
}, {
  "value": "9.2 <code>OptionalInt</code>, <code>OptionalLong</code>, <code>OptionalDouble</code>",
  "id": "92-optionalint-optionallong-optionaldouble",
  "level": 3
}, {
  "value": "9.3 Combining Multiple Optionals",
  "id": "93-combining-multiple-optionals",
  "level": 3
}, {
  "value": "9.4 Result Pattern (Custom <code>Either</code>)",
  "id": "94-result-pattern-custom-either",
  "level": 3
}, {
  "value": "10. Functional Error Handling",
  "id": "10-functional-error-handling",
  "level": 2
}, {
  "value": "10.1 <code>Try</code> Monad Pattern",
  "id": "101-try-monad-pattern",
  "level": 3
}, {
  "value": "10.2 Application <code>Result</code> Pattern",
  "id": "102-application-result-pattern",
  "level": 3
}, {
  "value": "10.3 Validation Aggregation",
  "id": "103-validation-aggregation",
  "level": 3
}, {
  "value": "11. Spring Boot Functional Programming",
  "id": "11-spring-boot-functional-programming",
  "level": 2
}, {
  "value": "11.1 <code>RouterFunction</code> Deep",
  "id": "111-routerfunction-deep",
  "level": 3
}, {
  "value": "11.2 <code>StreamResponseBody</code>",
  "id": "112-streamresponsebody",
  "level": 3
}, {
  "value": "11.3 Lambda-Based <code>@Bean</code> Definitions",
  "id": "113-lambda-based-bean-definitions",
  "level": 3
}, {
  "value": "11.4 Functional Property Binding",
  "id": "114-functional-property-binding",
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
        id: "functional-programming-in-practice",
        children: "Functional Programming in Practice"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/04-jpms-packaging",
          children: "Java Modules & Packaging"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/06-performance",
          children: "Performance Tuning & Profiling"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply advanced stream operations including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapMulti"
        }), ", custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "distinctBy"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "zip"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Stream.iterate"
        }), " with predicates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Design custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collector"
        }), " implementations using all five components of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collector"
        }), " interface"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recognize and construct monad patterns with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletableFuture"
        }), ", and custom monad-like types including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validation"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use specialized functional interfaces (", (0,jsx_runtime.jsx)(_components.code, {
          children: "IntFunction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LongBinaryOperator"
        }), ", etc.) and compose functions at higher arities"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build composed function pipelines using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "andThen"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compose"
        }), ", partial application, and currying"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply lazy evaluation effectively with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Supplier"
        }), ", custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Lazy<T>"
        }), ", and infinite streams"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design immutable data carriers using records, withers, unmodifiable collections, and defensive copying"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write exhaustive pattern matching with switch expressions, record patterns, guarded patterns, and sealed classes"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Flatten, combine, and transform ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), " values using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "stream"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ifPresentOrElse"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "OptionalInt"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement functional error handling with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Try"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Either"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Result"
        }), " patterns with validation aggregation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build functional Spring Boot endpoints with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouterFunction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HandlerFunction"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StreamResponseBody"
        }), ", and lambda-based ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Bean"
        }), " definitions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Prerequisite:"
      }), " Chapter P6 (Lambda Expressions & Functional Programming) covers the fundamentals this chapter builds on. You should be comfortable with basic lambda syntax, method references, core functional interfaces, basic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " pipelines, and the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), " APIs before proceeding."]
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
            children: "Advanced Streams"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mapMulti, custom distinctBy, zip"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid intermediate collections for performance"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Collectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collector interface with five components"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reusable aggregation logic beyond built-in collectors"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Monad Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional, CompletableFuture, Validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compose operations without nested null/error checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Function Composition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "andThen, compose, partial application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Build pipelines from small reusable functions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch expressions, record patterns, sealed classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive, compiler-verified type dispatch"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Advanced Streams] --> B[Custom Collectors]\n    B --> C[Monad Patterns]\n    C --> D[Function Composition]\n    D --> E[Lazy Evaluation]\n    E --> F[Immutable Data]\n    F --> G[Pattern Matching]\n    G --> H[Functional Error Handling]\n    H --> I[Spring Boot Functional]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " The most impactful functional technique for reducing bugs is making illegal states unrepresentable — use sealed classes for domain states and records for immutable data carriers."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-advanced-stream-operations",
      children: "1. Advanced Stream Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/05-functional-deep.png",
        alt: "Functional Programming Concepts"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chapter P6 covered the fundamentals: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collect"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sorted"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinct"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "takeWhile"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "dropWhile"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "skip"
      }), ", and basic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional::stream"
      }), ". This section deepens those patterns and introduces operations not covered there."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11-mapmulti-java-16",
      children: ["1.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mapMulti"
      }), " (Java 16+)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "mapMulti"
      }), " is a hybrid between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), ". Instead of returning a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " for each element (like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), "), it pushes zero or more results into a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Consumer"
      }), "-based buffer. This avoids creating intermediate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " objects and can improve performance."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class MapMultiExamples {\n\n    public static void main(String[] args) {\n\n        // ---- 1. mapMulti replacing flatMap for one-to-many ----\n        List<String> words = List.of(\"Hello\", \"Java\");\n        List<String> letters = words.stream()\n            .<String>mapMulti((word, buffer) -> {\n                for (char c : word.toCharArray()) {\n                    buffer.accept(String.valueOf(c));\n                }\n            })\n            .toList();\n        System.out.println(\"Letters via mapMulti: \" + letters);\n\n        // ---- 2. Filter + map in one pass ----\n        List<String> raw = List.of(\"42\", \"abc\", \"100\", \"xyz\", \"55\");\n        List<Integer> parsed = raw.stream()\n            .<Integer>mapMulti((s, buffer) -> {\n                try {\n                    buffer.accept(Integer.parseInt(s));\n                } catch (NumberFormatException ignored) { }\n            })\n            .toList();\n        System.out.println(\"Parsed ints: \" + parsed);\n\n        // ---- 3. mapMulti with type-specific variant ----\n        List<Object> mixed = List.of(\"text\", 42, 3.14, \"more\", 99L);\n        List<String> stringsOnly = mixed.stream()\n            .<String>mapMulti((obj, buffer) -> {\n                if (obj instanceof String s) {\n                    buffer.accept(s);\n                }\n            })\n            .toList();\n        System.out.println(\"Strings only: \" + stringsOnly);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "12-custom-distinctby",
      children: ["1.2 Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinctBy"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.distinct()"
      }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "hashCode"
      }), ". When you need distinct by a ", (0,jsx_runtime.jsx)(_components.em, {
        children: "property"
      }), ", there is no built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinctBy"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class DistinctByExamples {\n\n    record Person(String name, String email, int age) {}\n\n    public static void main(String[] args) {\n\n        List<Person> people = List.of(\n            new Person(\"Alice\",   \"alice@a.com\", 30),\n            new Person(\"Bob\",     \"bob@b.com\",   25),\n            new Person(\"Alice\",   \"alice@a.com\", 35),\n            new Person(\"Charlie\", \"charlie@c.com\", 30),\n            new Person(\"Diana\",   \"alice@a.com\", 28)\n        );\n\n        List<Person> distinctByEmail = people.stream()\n            .filter(distinctBy(Person::email))\n            .toList();\n        System.out.println(\"Distinct by email: \" + distinctByEmail);\n\n        List<Person> parallelSafe = people.parallelStream()\n            .filter(distinctByParallel(Person::email))\n            .toList();\n        System.out.println(\"Distinct parallel-safe: \" + parallelSafe);\n\n        List<String> names = List.of(\"Alice\", \"Bob\", \"alice\", \"CHARLIE\", \"bob\");\n        List<String> caseInsensitive = names.stream()\n            .filter(distinctBy(String::toLowerCase))\n            .toList();\n        System.out.println(\"Case-insensitive distinct: \" + caseInsensitive);\n    }\n\n    static <T> Predicate<T> distinctBy(Function<? super T, ?> keyExtractor) {\n        Set<Object> seen = new HashSet<>();\n        return t -> seen.add(keyExtractor.apply(t));\n    }\n\n    static <T> Predicate<T> distinctByParallel(Function<? super T, ?> keyExtractor) {\n        Set<Object> seen = ConcurrentHashMap.newKeySet();\n        return t -> seen.add(keyExtractor.apply(t));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "13-streamiterate-with-predicate-java-9",
      children: ["1.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.iterate"
      }), " with Predicate (Java 9+)"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.iterate(T seed, Predicate<T> hasNext, UnaryOperator<T> next)"
      }), " creates a bounded stream without ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit()"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.stream.*;\n\npublic class StreamIterateWithPredicate {\n\n    public static void main(String[] args) {\n\n        Stream.iterate(1, n -> n <= 1000, n -> n * 2)\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        Stream.iterate(\n                new long[]{0, 1},\n                pair -> pair[1] <= 1000,\n                pair -> new long[]{pair[1], pair[0] + pair[1]}\n            )\n            .map(pair -> pair[0])\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        Stream.iterate(\n                27L,\n                n -> n != 1,\n                n -> n % 2 == 0 ? n / 2 : 3 * n + 1\n            )\n            .limit(20)\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        Stream.iterate(\n                java.time.LocalDate.of(2026, 1, 1),\n                d -> d.isBefore(java.time.LocalDate.of(2026, 1, 10)),\n                d -> d.plusDays(1)\n            )\n            .forEach(d -> System.out.print(d + \" \"));\n        System.out.println();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "14-custom-zip",
      children: ["1.4 Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zip"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " API lacks a built-in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zip"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\nimport java.util.Spliterator;\nimport java.util.Spliterators;\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class ZipExamples {\n\n    public static void main(String[] args) {\n\n        List<String> names = List.of(\"Alice\", \"Bob\", \"Charlie\", \"Diana\");\n        List<Integer> ages = List.of(30, 25, 35, 28);\n\n        List<String> zipped = zip(\n            names.stream(),\n            ages.stream(),\n            (name, age) -> name + \" is \" + age + \" years old\"\n        ).toList();\n        zipped.forEach(System.out::println);\n\n        List<String> indexed = zipWithIndex(names.stream())\n            .map(pair -> (pair.getKey() + 1) + \". \" + pair.getValue())\n            .toList();\n        System.out.println(\"Indexed: \" + indexed);\n\n        List<String> biZipped = BiZip.zip(\n            List.of(\"A\", \"B\", \"C\"),\n            List.of(1, 2, 3),\n            (s, i) -> s + i\n        );\n        System.out.println(\"BiZip: \" + biZipped);\n    }\n\n    static <A, B, C> Stream<C> zip(\n            Stream<A> streamA,\n            Stream<B> streamB,\n            BiFunction<? super A, ? super B, ? extends C> zipper) {\n\n        Iterator<A> itA = Spliterators.iterator(streamA.spliterator());\n        Iterator<B> itB = Spliterators.iterator(streamB.spliterator());\n\n        Iterator<C> combined = new Iterator<>() {\n            @Override\n            public boolean hasNext() { return itA.hasNext() && itB.hasNext(); }\n            @Override\n            public C next() { return zipper.apply(itA.next(), itB.next()); }\n        };\n\n        long estimatedSize = Math.min(\n            streamA.spliterator().estimateSize(),\n            streamB.spliterator().estimateSize()\n        );\n\n        return StreamSupport.stream(\n            Spliterators.spliteratorUnknownSize(combined, Spliterator.ORDERED),\n            streamA.isParallel() || streamB.isParallel()\n        );\n    }\n\n    static <T> Stream<Map.Entry<Integer, T>> zipWithIndex(Stream<T> stream) {\n        AtomicInteger index = new AtomicInteger(0);\n        return stream.map(t -> Map.entry(index.getAndIncrement(), t));\n    }\n}\n\nclass BiZip {\n    static <A, B, C> List<C> zip(\n            List<? extends A> listA,\n            List<? extends B> listB,\n            BiFunction<? super A, ? super B, ? extends C> zipper) {\n        int size = Math.min(listA.size(), listB.size());\n        return IntStream.range(0, size)\n            .mapToObj(i -> zipper.apply(listA.get(i), listB.get(i)))\n            .toList();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "15-flatmap-deep-patterns",
      children: ["1.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " Deep Patterns"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced patterns used in production:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class FlatMapDeep {\n\n    record Order(int id, List<String> items) {}\n    record Customer(String name, List<Order> orders) {}\n    record Department(String name, List<Customer> customers) {}\n\n    public static void main(String[] args) {\n\n        Department dept = new Department(\"Sales\", List.of(\n            new Customer(\"Alice\", List.of(\n                new Order(1, List.of(\"Laptop\", \"Mouse\")),\n                new Order(2, List.of(\"Keyboard\"))\n            )),\n            new Customer(\"Bob\", List.of(\n                new Order(3, List.of(\"Monitor\", \"Cable\", \"Mouse\"))\n            ))\n        ));\n\n        List<String> allItems = dept.customers().stream()\n            .flatMap(c -> c.orders().stream())\n            .flatMap(o -> o.items().stream())\n            .distinct()\n            .toList();\n        System.out.println(\"All items: \" + allItems);\n\n        record Address(String city, String zip) {}\n        record User(String name, Address address) {}\n\n        List<User> users = Arrays.asList(\n            new User(\"Alice\", new Address(\"NYC\", \"10001\")),\n            new User(\"Bob\", null),\n            new User(\"Charlie\", new Address(\"LA\", \"90001\"))\n        );\n\n        List<String> cities = users.stream()\n            .flatMap(u -> u.address() != null\n                ? Stream.of(u.address().city())\n                : Stream.empty())\n            .toList();\n        System.out.println(\"Cities: \" + cities);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "16-streamconcat-and-interleave",
      children: ["1.6 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.concat"
      }), " and Interleave"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.stream.*;\nimport java.util.*;\n\npublic class ConcatAndInterleave {\n\n    public static void main(String[] args) {\n\n        Stream.concat(\n            Stream.of(\"a\", \"b\", \"c\"),\n            Stream.of(\"d\", \"e\", \"f\")\n        ).forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n\n        @SuppressWarnings(\"unchecked\")\n        Stream<String> combined = Stream.of(\n                Stream.of(\"x\", \"y\"),\n                Stream.of(\"z\"),\n                Stream.of(\"w\")\n            )\n            .reduce(Stream::concat)\n            .orElse(Stream.empty());\n        combined.forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n\n        List<String> interleaved = interleave(\n            List.of(\"A\", \"B\", \"C\"),\n            List.of(\"1\", \"2\", \"3\", \"4\")\n        );\n        System.out.println(\"Interleaved: \" + interleaved);\n    }\n\n    static <T> List<T> interleave(List<? extends T> listA, List<? extends T> listB) {\n        int max = Math.max(listA.size(), listB.size());\n        List<T> result = new ArrayList<>(listA.size() + listB.size());\n        for (int i = 0; i < max; i++) {\n            if (i < listA.size()) result.add(listA.get(i));\n            if (i < listB.size()) result.add(listB.get(i));\n        }\n        return result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-custom-collectors-in-depth",
      children: "2. Custom Collectors in Depth"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chapter P6 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector.of"
      }), " for custom collectors. Here we dissect the full ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector"
      }), " interface and build sophisticated collectors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "21-the-collectort-a-r-interface",
      children: ["2.1 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector<T, A, R>"
      }), " Interface"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector"
      }), " has five components:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Type"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "supplier"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Supplier<A>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates a mutable accumulator container"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "accumulator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BiConsumer<A, T>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Adds an element to the accumulator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "combiner"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BinaryOperator<A>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Merges two accumulators (parallel)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "finisher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Function<A, R>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transforms accumulator to final result"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "characteristics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Set<Characteristics>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Hints: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CONCURRENT"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UNORDERED"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "IDENTITY_FINISH"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class CollectorInterfaceDeep {\n\n    record Employee(String name, String dept, double salary) {}\n\n    public static void main(String[] args) {\n\n        List<Employee> employees = List.of(\n            new Employee(\"Alice\",   \"Engineering\", 120_000),\n            new Employee(\"Bob\",     \"Engineering\", 100_000),\n            new Employee(\"Charlie\", \"Sales\",        90_000),\n            new Employee(\"Diana\",   \"Sales\",       110_000),\n            new Employee(\"Eve\",     \"Engineering\", 130_000)\n        );\n\n        record DeptStats(String dept, long count, double avg, double min, double max) {}\n\n        Collector<Employee, Map<String, List<Employee>>, List<DeptStats>> groupingStats =\n            Collector.of(\n                HashMap::new,\n                (map, emp) -> map.computeIfAbsent(\n                    emp.dept(), k -> new ArrayList<>()).add(emp),\n                (m1, m2) -> {\n                    m2.forEach((k, v) -> m1.merge(k, v,\n                        (a, b) -> { a.addAll(b); return a; }));\n                    return m1;\n                },\n                map -> {\n                    List<DeptStats> stats = new ArrayList<>();\n                    map.forEach((dept, emps) -> {\n                        DoubleSummaryStatistics dss = emps.stream()\n                            .mapToDouble(Employee::salary)\n                            .summaryStatistics();\n                        stats.add(new DeptStats(\n                            dept, dss.getCount(), dss.getAverage(),\n                            dss.getMin(), dss.getMax()));\n                    });\n                    stats.sort(Comparator.comparing(DeptStats::dept));\n                    return stats;\n                }\n            );\n\n        List<DeptStats> stats = employees.stream().collect(groupingStats);\n        stats.forEach(s -> System.out.printf(\"%s: count=%d avg=%.0f min=%.0f max=%.0f%n\",\n            s.dept(), s.count(), s.avg(), s.min(), s.max()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-custom-downstream-collector",
      children: "2.2 Custom Downstream Collector"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A downstream collector is one passed to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "groupingBy"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "partitioningBy"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class DownstreamCollector {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\n            \"apple\", \"banana\", \"cherry\", \"date\", \"elderberry\",\n            \"fig\", \"grape\", \"honeydew\"\n        );\n\n        Map<Character, List<String>> topByLetter = words.stream()\n            .collect(Collectors.groupingBy(\n                w -> w.charAt(0),\n                topN(3, Comparator.comparingInt(String::length).reversed())\n            ));\n\n        System.out.println(\"Top 3 by length per letter:\");\n        topByLetter.forEach((letter, list) ->\n            System.out.println(\"  \" + letter + \": \" + list));\n\n        List<String> last3 = words.stream()\n            .collect(lastN(3));\n        System.out.println(\"Last 3: \" + last3);\n    }\n\n    static <T> Collector<T, ?, List<T>> topN(\n            int n, Comparator<? super T> comparator) {\n        return Collector.of(\n            () -> new TreeSet<>(comparator),\n            TreeSet::add,\n            (left, right) -> { left.addAll(right); return left; },\n            set -> set.stream().limit(n).toList(),\n            Collector.Characteristics.UNORDERED\n        );\n    }\n\n    static <T> Collector<T, ?, List<T>> lastN(int n) {\n        return Collector.<T, Deque<T>, List<T>>of(\n            ArrayDeque::new,\n            (deque, element) -> {\n                if (deque.size() == n) deque.removeFirst();\n                deque.addLast(element);\n            },\n            (left, right) -> {\n                right.forEach(e -> {\n                    if (left.size() == n) left.removeFirst();\n                    left.addLast(e);\n                });\n                return left;\n            },\n            ArrayList::new\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "23-collectorof-with-complex-finisher",
      children: ["2.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector.of"
      }), " with Complex Finisher"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class CollectorOfAdvanced {\n\n    record Sale(String product, String category, double amount) {}\n\n    public static void main(String[] args) {\n\n        List<Sale> sales = List.of(\n            new Sale(\"Laptop\",  \"Electronics\", 1200),\n            new Sale(\"Phone\",   \"Electronics\",  800),\n            new Sale(\"Shirt\",   \"Clothing\",      40),\n            new Sale(\"Tablet\",  \"Electronics\",  450),\n            new Sale(\"Pants\",   \"Clothing\",      80),\n            new Sale(\"Monitor\", \"Electronics\",  300)\n        );\n\n        Collector<Sale, ?, Map<String, List<Sale>>> sortedGrouped =\n            Collector.of(\n                TreeMap<String, List<Sale>>::new,\n                (map, sale) -> map.computeIfAbsent(\n                    sale.category(), k -> new ArrayList<>()).add(sale),\n                (m1, m2) -> {\n                    m2.forEach((k, v) -> m1.merge(k, v,\n                        (a, b) -> { a.addAll(b); return a; }));\n                    return m1;\n                },\n                map -> {\n                    Map<String, List<Sale>> immutable = new TreeMap<>();\n                    map.forEach((k, v) -> immutable.put(k, List.copyOf(v)));\n                    return Collections.unmodifiableMap(immutable);\n                }\n            );\n\n        Map<String, List<Sale>> result = sales.stream().collect(sortedGrouped);\n        System.out.println(\"Sorted and immutable:\");\n        result.forEach((cat, items) ->\n            System.out.println(\"  \" + cat + \": \" + items));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-monad-patterns-in-java",
      children: "3. Monad Patterns in Java"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "monad"
      }), " is a design pattern that wraps a value and provides two operations:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "unit"
        }), " (also called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "of"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "pure"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "return"
        }), "): wraps a value into the monad"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "bind"
        }), " (also called ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "chain"
        }), "): applies a function that returns a monad, flattening the nesting"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-optional-as-a-monad",
      children: ["3.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " as a Monad"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class OptionalAsMonad {\n\n    public static void main(String[] args) {\n\n        Optional<String> unit = Optional.of(\"hello\");\n\n        Function<String, Optional<Integer>> parseLen = s ->\n            s != null ? Optional.of(s.length()) : Optional.empty();\n\n        Optional<Integer> bound = unit.flatMap(parseLen);\n        System.out.println(\"Bind result: \" + bound);\n\n        // Monad first law: left identity\n        // unit(a).flatMap(f) == f.apply(a)\n        String a = \"hello\";\n        Optional<String> left = Optional.of(a).flatMap(\n            s -> Optional.of(\"Length: \" + s.length()));\n        Optional<String> right = Optional.of(\"Length: \" + a.length());\n        System.out.println(\"Left identity: \" + left.equals(right));\n\n        // Monad second law: right identity\n        // m.flatMap(x -> unit(x)) == m\n        System.out.println(\"Right identity: \" +\n            unit.flatMap(Optional::of).equals(unit));\n\n        // Monad third law: associativity\n        // m.flatMap(f).flatMap(g) == m.flatMap(x -> f.apply(x).flatMap(g))\n        Function<String, Optional<Integer>> f = s -> Optional.of(s.length());\n        Function<Integer, Optional<String>> g = i -> Optional.of(\"n=\" + i);\n\n        System.out.println(\"Associativity: \" +\n            unit.flatMap(f).flatMap(g)\n                .equals(unit.flatMap(x -> f.apply(x).flatMap(g))));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-completablefuture-as-a-monad",
      children: ["3.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), " as a Monad"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.function.*;\n\npublic class CompletableFutureAsMonad {\n\n    public static void main(String[] args) throws Exception {\n\n        CompletableFuture<String> unit = CompletableFuture.completedFuture(\"hello\");\n\n        CompletableFuture<Integer> bound = unit.thenCompose(\n            s -> CompletableFuture.supplyAsync(() -> s.length()));\n        System.out.println(\"Bound: \" + bound.get());\n\n        CompletableFuture<String> pipeline = CompletableFuture\n            .supplyAsync(() -> \"user/42\")\n            .thenCompose(path -> CompletableFuture\n                .supplyAsync(() -> \"Data for \" + path))\n            .thenApply(String::toUpperCase);\n        System.out.println(\"Pipeline: \" + pipeline.get());\n\n        CompletableFuture<Integer> combined =\n            CompletableFuture.supplyAsync(() -> 10)\n                .thenCombine(\n                    CompletableFuture.supplyAsync(() -> 20),\n                    Integer::sum);\n        System.out.println(\"Combined: \" + combined.get());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "33-custom-monad-like-boxt",
      children: ["3.3 Custom Monad-Like: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Box<T>"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\nfinal class Box<T> {\n\n    private final T value;\n\n    private Box(T value) { this.value = Objects.requireNonNull(value); }\n\n    static <T> Box<T> of(T value) { return new Box<>(value); }\n\n    <R> Box<R> map(Function<? super T, ? extends R> fn) {\n        return new Box<>(fn.apply(value));\n    }\n\n    <R> Box<R> flatMap(Function<? super T, Box<? extends R>> fn) {\n        @SuppressWarnings(\"unchecked\")\n        Box<R> result = (Box<R>) fn.apply(value);\n        return result;\n    }\n\n    T get() { return value; }\n\n    @Override\n    public String toString() { return \"Box{\" + value + \"}\"; }\n\n    @Override\n    public boolean equals(Object o) {\n        return this == o || (o instanceof Box<?> b && Objects.equals(value, b.value));\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(value); }\n}\n\npublic class CustomMonadDemo {\n\n    public static void main(String[] args) {\n\n        Box<String> result = Box.of(\" functional \")\n            .map(String::trim)\n            .flatMap(s -> Box.of(s.toUpperCase()))\n            .map(s -> s + \"!\");\n        System.out.println(\"Pipeline: \" + result);\n\n        Box<String> m = Box.of(\"test\");\n        Function<String, Box<Integer>> f = s -> Box.of(s.length());\n        Function<Integer, Box<String>> g = i -> Box.of(\"len=\" + i);\n\n        System.out.println(\"Left identity: \" +\n            Box.of(\"x\").flatMap(f).equals(f.apply(\"x\")));\n        System.out.println(\"Right identity: \" +\n            m.flatMap(Box::of).equals(m));\n        System.out.println(\"Associativity: \" +\n            m.flatMap(f).flatMap(g)\n                .equals(m.flatMap(x -> f.apply(x).flatMap(g))));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-validation-monad",
      children: "3.4 Validation Monad"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validation"
      }), " pattern accumulates errors rather than short-circuiting:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\nfinal class Validation<E, T> {\n\n    private final Optional<T> success;\n    private final List<E> errors;\n\n    private Validation(T value) {\n        this.success = Optional.of(value);\n        this.errors = List.of();\n    }\n\n    @SafeVarargs\n    private Validation(E... errors) {\n        this.success = Optional.empty();\n        this.errors = List.of(errors);\n    }\n\n    private Validation(List<E> errors) {\n        this.success = Optional.empty();\n        this.errors = List.copyOf(errors);\n    }\n\n    static <E, T> Validation<E, T> valid(T value) { return new Validation<>(value); }\n\n    @SafeVarargs\n    static <E, T> Validation<E, T> invalid(E... errors) { return new Validation<>(errors); }\n\n    static <E, T> Validation<E, T> invalid(List<E> errors) { return new Validation<>(errors); }\n\n    boolean isValid() { return success.isPresent(); }\n    T get() { return success.orElseThrow(); }\n    List<E> getErrors() { return errors; }\n\n    <R> Validation<E, R> map(Function<? super T, ? extends R> fn) {\n        if (isValid()) return valid(fn.apply(get()));\n        @SuppressWarnings(\"unchecked\")\n        Validation<E, R> self = (Validation<E, R>) this;\n        return self;\n    }\n\n    <R> Validation<E, R> flatMap(Function<? super T, Validation<E, R>> fn) {\n        if (isValid()) return fn.apply(get());\n        @SuppressWarnings(\"unchecked\")\n        Validation<E, R> self = (Validation<E, R>) this;\n        return self;\n    }\n\n    <R> Validation<E, R> accumulate(\n            Validation<E, T> other,\n            BiFunction<? super T, ? super T, ? extends R> combiner) {\n        if (this.isValid() && other.isValid())\n            return valid(combiner.apply(this.get(), other.get()));\n        List<E> allErrors = new ArrayList<>();\n        if (!this.isValid()) allErrors.addAll(this.errors);\n        if (!other.isValid()) allErrors.addAll(other.errors);\n        return invalid(allErrors);\n    }\n\n    @Override\n    public String toString() {\n        return isValid() ? \"Valid{\" + get() + \"}\" : \"Invalid{errors=\" + errors + \"}\";\n    }\n}\n\npublic class ValidationMonadDemo {\n\n    record User(String name, String email, int age) {}\n\n    public static void main(String[] args) {\n\n        Function<String, Validation<String, String>> nonEmpty = value ->\n            value != null && !value.isBlank()\n                ? Validation.valid(value)\n                : Validation.invalid(\"Value must not be blank\");\n\n        Function<String, Validation<String, String>> validEmail = value ->\n            value != null && value.matches(\"^[^@\\\\s]+@[^@\\\\s]+\\\\.[^@\\\\s]+$\")\n                ? Validation.valid(value)\n                : Validation.invalid(\"Invalid email format\");\n\n        Function<Integer, Validation<String, Integer>> minAge = value ->\n            value >= 18 ? Validation.valid(value)\n                : Validation.invalid(\"Must be at least 18\");\n\n        List<String> allErrors = new ArrayList<>();\n        Validation<String, String> nameResult = nonEmpty.apply(\"\");\n        Validation<String, String> emailResult = validEmail.apply(\"bad-email\");\n        Validation<String, Integer> ageResult = minAge.apply(15);\n\n        if (!nameResult.isValid()) allErrors.addAll(nameResult.getErrors());\n        if (!emailResult.isValid()) allErrors.addAll(emailResult.getErrors());\n        if (!ageResult.isValid()) allErrors.addAll(ageResult.getErrors());\n\n        System.out.println(\"Errors: \" + allErrors);\n\n        Validation<String, User> user = nonEmpty.apply(\"Alice\")\n            .flatMap(name -> validEmail.apply(\"alice@example.com\")\n                .flatMap(email -> minAge.apply(25)\n                    .map(age -> new User(name, email, age))));\n        System.out.println(\"User: \" + user);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-functional-interfaces--beyond-basics",
      children: "4. Functional Interfaces → Beyond Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chapter P6 covered the six core interfaces and their primitive variants. Here we focus on composition, chaining, and extending arity."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-specialization-reference",
      children: "4.1 Specialization Reference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JDK provides 43 functional interfaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class SpecializationReference {\n\n    public static void main(String[] args) {\n\n        IntFunction<String> intFmt = i -> \"int: \" + i;\n        LongFunction<String> longFmt = l -> \"long: \" + l;\n        DoubleFunction<String> doubleFmt = d -> String.format(\"%.2f\", d);\n\n        System.out.println(intFmt.apply(42));\n        System.out.println(longFmt.apply(99L));\n        System.out.println(doubleFmt.apply(3.14159));\n\n        IntUnaryOperator square = n -> n * n;\n        LongBinaryOperator sum = (a, b) -> a + b;\n        DoubleUnaryOperator negate = d -> -d;\n\n        System.out.println(\"Square: \" + square.applyAsInt(12));\n        System.out.println(\"Long sum: \" + sum.applyAsLong(1_000_000_000L, 2_000_000_000L));\n        System.out.println(\"Negate: \" + negate.applyAsDouble(5.5));\n\n        ToIntFunction<String> strLen = String::length;\n        System.out.println(\"ToInt: \" + strLen.applyAsInt(\"hello\"));\n\n        ObjIntConsumer<String> printWithIndex = (s, i) ->\n            System.out.println(i + \": \" + s);\n        printWithIndex.accept(\"Java\", 1);\n\n        int[] values = {10, 20, 30, 40, 50};\n        IntPredicate big = n -> n > 25;\n        Arrays.stream(values)\n            .filter(big)\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-consumer-chaining",
      children: "4.2 Consumer Chaining"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class ConsumerChaining {\n\n    public static void main(String[] args) {\n\n        Consumer<String> log = s -> System.out.print(\"[LOG] \" + s);\n        Consumer<String> persist = s -> System.out.print(\" [SAVED]\");\n        Consumer<String> combined = log.andThen(persist);\n        combined.accept(\"event\");\n        System.out.println();\n\n        List<Consumer<String>> pipeline = List.of(\n            s -> System.out.print(\"Upper: \" + s.toUpperCase() + \" \"),\n            s -> System.out.print(\"Lower: \" + s.toLowerCase() + \" \"),\n            s -> System.out.print(\"Len: \" + s.length())\n        );\n        Consumer<String> all = chain(pipeline);\n        all.accept(\"Hello\");\n        System.out.println();\n\n        Consumer<String> conditional = conditionalConsumer(\n            s -> s.length() > 5,\n            s -> System.out.println(\"  Long: \" + s),\n            s -> System.out.println(\"  Short: \" + s));\n        conditional.accept(\"short\");\n        conditional.accept(\"longer text\");\n    }\n\n    @SafeVarargs\n    static <T> Consumer<T> chain(Consumer<? super T>... consumers) {\n        return t -> { for (Consumer<? super T> c : consumers) c.accept(t); };\n    }\n\n    static <T> Consumer<T> chain(List<Consumer<T>> consumers) {\n        return t -> consumers.forEach(c -> c.accept(t));\n    }\n\n    static <T> Consumer<T> conditionalConsumer(\n            Predicate<T> condition, Consumer<T> ifTrue, Consumer<T> ifFalse) {\n        return t -> { if (condition.test(t)) ifTrue.accept(t); else ifFalse.accept(t); };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-predicate-composition-factories",
      children: "4.3 Predicate Composition Factories"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class PredicateComposition {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\"cat\", \"dog\", \"elephant\", \"\", \"ant\", null, \"bear\");\n\n        Predicate<String> nonNull = Objects::nonNull;\n        Predicate<String> nonEmpty = s -> !s.isEmpty();\n        Predicate<String> shortWord = s -> s.length() <= 4;\n\n        Predicate<String> validShort = allOf(nonNull, nonEmpty, shortWord);\n        words.stream().filter(validShort)\n            .forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n\n        Predicate<String> startsA = s -> s != null && s.startsWith(\"a\");\n        Predicate<String> startsB = s -> s != null && s.startsWith(\"b\");\n        Predicate<String> startsABC = anyOf(startsA, startsB);\n        words.stream().filter(startsABC)\n            .forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n\n        Predicate<String> notABC = noneOf(startsA, startsB);\n        words.stream().filter(notABC)\n            .filter(Objects::nonNull)\n            .forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n    }\n\n    @SafeVarargs\n    static <T> Predicate<T> allOf(Predicate<? super T>... predicates) {\n        return t -> {\n            for (Predicate<? super T> p : predicates)\n                if (!p.test(t)) return false;\n            return true;\n        };\n    }\n\n    @SafeVarargs\n    static <T> Predicate<T> anyOf(Predicate<? super T>... predicates) {\n        return t -> {\n            for (Predicate<? super T> p : predicates)\n                if (p.test(t)) return true;\n            return false;\n        };\n    }\n\n    @SafeVarargs\n    static <T> Predicate<T> noneOf(Predicate<? super T>... predicates) {\n        return anyOf(predicates).negate();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-function-arity-trifunction-and-beyond",
      children: "4.4 Function Arity: TriFunction and Beyond"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Java's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      }), " provides only ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Function"
      }), " (arity 1) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BiFunction"
      }), " (arity 2):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\n@FunctionalInterface\ninterface TriFunction<A, B, C, R> {\n    R apply(A a, B b, C c);\n\n    default <V> TriFunction<A, B, C, V> andThen(\n            Function<? super R, ? extends V> after) {\n        return (a, b, c) -> after.apply(apply(a, b, c));\n    }\n}\n\n@FunctionalInterface\ninterface QuadFunction<A, B, C, D, R> {\n    R apply(A a, B b, C c, D d);\n}\n\n@FunctionalInterface\ninterface TriConsumer<A, B, C> {\n    void accept(A a, B b, C c);\n}\n\npublic class FunctionArity {\n\n    public static void main(String[] args) {\n\n        TriFunction<Integer, Integer, Integer, String> format3 =\n            (a, b, c) -> String.format(\"(%d, %d, %d)\", a, b, c);\n        System.out.println(format3.apply(1, 2, 3));\n\n        TriFunction<Double, Double, Double, Double> volume = (w, h, d) -> w * h * d;\n        Function<Double, String> display = v -> \"Volume: \" + v;\n        System.out.println(volume.andThen(display).apply(2.0, 3.0, 4.0));\n\n        record Point3D(double x, double y, double z) {}\n        TriFunction<Double, Double, Double, Point3D> pointFactory = Point3D::new;\n        System.out.println(pointFactory.apply(1.0, 2.0, 3.0));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-function-composition-pipelines",
      children: "5. Function Composition Pipelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "51-andthen-and-compose-deep-dive",
      children: ["5.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "andThen"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compose"
      }), " Deep Dive"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class CompositionDeep {\n\n    public static void main(String[] args) {\n\n        Function<String, String> trim = String::strip;\n        Function<String, String> toUpper = String::toUpperCase;\n        Function<String, String> exclaim = s -> s + \"!\";\n\n        Function<String, String> shout = trim.andThen(toUpper).andThen(exclaim);\n        System.out.println(shout.apply(\"  hello  \"));\n\n        Function<String, Integer> pipeline = trim\n            .andThen(String::length)\n            .andThen(n -> n * 2);\n        System.out.println(\"Pipeline: \" + pipeline.apply(\"  abc  \"));\n\n        Function<String, Optional<String>> wrap =\n            s -> s == null ? Optional.empty() : Optional.of(s);\n        Function<Optional<String>, String> unwrap =\n            opt -> opt.orElse(\"default\");\n        Function<String, String> safeOp = wrap.andThen(unwrap);\n        System.out.println(safeOp.apply(null));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-pipeline-construction",
      children: "5.2 Pipeline Construction"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class PipelineConstruction {\n\n    record ProcessContext(String input, long timestamp, int version) {}\n\n    public static void main(String[] args) {\n\n        List<UnaryOperator<String>> steps = List.of(\n            String::strip,\n            String::toLowerCase,\n            s -> s.replaceAll(\"\\\\s+\", \"_\"),\n            s -> s.substring(0, Math.min(s.length(), 10))\n        );\n\n        UnaryOperator<String> pipeline = steps.stream()\n            .reduce(UnaryOperator.identity(), UnaryOperator::andThen);\n        System.out.println(pipeline.apply(\"  Hello World  \"));\n\n        Function<ProcessContext, ProcessContext> processor =\n            ((Function<ProcessContext, ProcessContext>) ctx ->\n                new ProcessContext(ctx.input().strip(),\n                    ctx.timestamp(), ctx.version()))\n            .andThen(ctx -> new ProcessContext(\n                ctx.input().toLowerCase(),\n                ctx.timestamp(), ctx.version()))\n            .andThen(ctx -> new ProcessContext(\n                ctx.input().replaceAll(\"\\\\s+\", \"-\"),\n                ctx.timestamp(), ctx.version() + 1));\n\n        ProcessContext result = processor.apply(\n            new ProcessContext(\"  Hello World  \", System.currentTimeMillis(), 1));\n        System.out.printf(\"input='%s', version=%d%n\",\n            result.input(), result.version());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-partial-application",
      children: "5.3 Partial Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class PartialApplication {\n\n    public static void main(String[] args) {\n\n        TriFunction<Integer, Integer, Integer, Integer> addAll =\n            (a, b, c) -> a + b + c;\n\n        BiFunction<Integer, Integer, Integer> add5 =\n            partialFirst(addAll, 5);\n        System.out.println(\"add5: \" + add5.apply(10, 20));\n\n        Function<String, Function<String, Function<Integer, String>>> validateAndFormat =\n            rule -> value -> maxLen -> {\n                if (value == null || value.isBlank())\n                    return rule + \": value is blank\";\n                if (value.length() > maxLen)\n                    return rule + \": value exceeds \" + maxLen;\n                return rule + \": \" + value.toUpperCase();\n            };\n\n        Function<Integer, String> validateEmail =\n            validateAndFormat.apply(\"EMAIL\").apply(\"test@example.com\");\n        System.out.println(validateEmail.apply(20));\n    }\n\n    static <A, B, C, R> BiFunction<B, C, R> partialFirst(\n            TriFunction<A, B, C, R> fn, A first) {\n        return (b, c) -> fn.apply(first, b, c);\n    }\n\n    static <A, B, C, R> BiFunction<A, C, R> partialSecond(\n            TriFunction<A, B, C, R> fn, B second) {\n        return (a, c) -> fn.apply(a, second, c);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-currying-simulation-revisited",
      children: "5.4 Currying Simulation Revisited"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class CurryingSimulationDeep {\n\n    public static void main(String[] args) {\n\n        Function<String, Function<String, Function<String, String>>> greeter =\n            greeting -> name -> punctuation ->\n                greeting + \" \" + name + punctuation;\n        System.out.println(\n            greeter.apply(\"Hello\").apply(\"World\").apply(\"!\"));\n\n        Function<String, Function<String, Consumer<String>>> logger =\n            level -> format -> message ->\n                System.out.printf(\"[%s] %s: %s%n\", level, format, message);\n\n        Consumer<String> infoJson = logger.apply(\"INFO\").apply(\"JSON\");\n        Consumer<String> errorPlain = logger.apply(\"ERROR\").apply(\"PLAIN\");\n\n        infoJson.accept(\"{\\\"event\\\": \\\"start\\\"}\");\n        errorPlain.accept(\"Connection refused\");\n\n        Function<String, Function<Integer, Function<Double, String>>> formatPerson =\n            name -> age -> salary ->\n                String.format(\"%s (%d) earns $%.2f\", name, age, salary);\n\n        System.out.println(formatPerson\n            .apply(\"Alice\").apply(30).apply(120_000.0));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-lazy-evaluation-patterns",
      children: "6. Lazy Evaluation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-stream-laziness-revisited",
      children: "6.1 Stream Laziness Revisited"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamLazinessDeep {\n\n    public static void main(String[] args) {\n\n        List<String> data = List.of(\"one\", \"two\", \"three\", \"four\", \"five\");\n\n        List<String> result = data.stream()\n            .peek(s -> System.out.println(\"  source: \" + s))\n            .filter(s -> s.length() > 3)\n            .peek(s -> System.out.println(\"  filtered: \" + s))\n            .map(String::toUpperCase)\n            .peek(s -> System.out.println(\"  mapped: \" + s))\n            .toList();\n        System.out.println(\"Result: \" + result);\n\n        Optional<String> found = data.stream()\n            .peek(s -> System.out.println(\"  visiting: \" + s))\n            .filter(s -> s.startsWith(\"t\"))\n            .findFirst();\n        System.out.println(\"Found: \" + found);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "62-supplier-for-lazy-initialization",
      children: ["6.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Supplier"
      }), " for Lazy Initialization"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\nclass Memoizer<T> {\n\n    static <T> Supplier<T> memoize(Supplier<T> delegate) {\n        return new Supplier<T>() {\n            private volatile T value;\n\n            @Override\n            public T get() {\n                T result = value;\n                if (result == null) {\n                    synchronized (this) {\n                        result = value;\n                        if (result == null) {\n                            result = Objects.requireNonNull(delegate.get());\n                            value = result;\n                        }\n                    }\n                }\n                return result;\n            }\n        };\n    }\n}\n\npublic class SupplierLazyInit {\n\n    static class HeavyResource {\n        private final String name;\n        HeavyResource(String name) {\n            System.out.println(\"  Creating HeavyResource: \" + name);\n            this.name = name;\n        }\n        String getName() { return name; }\n    }\n\n    static class Config {\n        private final Supplier<HeavyResource> db =\n            Memoizer.memoize(() -> new HeavyResource(\"Database\"));\n        private final Supplier<HeavyResource> cache =\n            Memoizer.memoize(() -> new HeavyResource(\"Cache\"));\n\n        HeavyResource getDb() { return db.get(); }\n        HeavyResource getCache() { return cache.get(); }\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"Creating config (no resources initialized)...\");\n        Config config = new Config();\n        System.out.println(\"Accessing DB...\");\n        config.getDb();\n        System.out.println(\"Accessing DB again (cached)...\");\n        config.getDb();\n        System.out.println(\"Cache never accessed → not created\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "63-custom-lazyt-structure",
      children: ["6.3 Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Lazy<T>"
      }), " Structure"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\nfinal class Lazy<T> {\n\n    private volatile T value;\n    private Supplier<? extends T> supplier;\n\n    private Lazy(Supplier<? extends T> supplier) {\n        this.supplier = Objects.requireNonNull(supplier);\n    }\n\n    static <T> Lazy<T> of(Supplier<? extends T> supplier) {\n        return new Lazy<>(supplier);\n    }\n\n    static <T> Lazy<T> ofValue(T value) {\n        Lazy<T> lazy = new Lazy<>(() -> value);\n        lazy.value = value;\n        return lazy;\n    }\n\n    T get() {\n        if (supplier != null) {\n            synchronized (this) {\n                if (supplier != null) {\n                    value = Objects.requireNonNull(supplier.get());\n                    supplier = null;\n                }\n            }\n        }\n        return value;\n    }\n\n    boolean isEvaluated() { return supplier == null; }\n\n    <R> Lazy<R> map(Function<? super T, ? extends R> fn) {\n        return Lazy.of(() -> fn.apply(get()));\n    }\n\n    <R> Lazy<R> flatMap(Function<? super T, Lazy<? extends R>> fn) {\n        return Lazy.of(() -> {\n            @SuppressWarnings(\"unchecked\")\n            R result = (R) fn.apply(get()).get();\n            return result;\n        });\n    }\n\n    @Override\n    public String toString() {\n        return isEvaluated() ? \"Lazy{evaluated=\" + value + \"}\" : \"Lazy{unevaluated}\";\n    }\n}\n\npublic class CustomLazyDemo {\n\n    public static void main(String[] args) {\n\n        Lazy<Double> expensive = Lazy.of(() -> {\n            System.out.println(\"  Computing expensive value...\");\n            return Math.pow(2, 100);\n        });\n\n        System.out.println(\"Created: \" + expensive);\n        System.out.println(\"First: \" + expensive.get());\n        System.out.println(\"Cached: \" + expensive.get());\n        System.out.println(\"Evaluated: \" + expensive.isEvaluated());\n\n        Lazy<Integer> chained = Lazy.of(() -> {\n            System.out.println(\"  Step 1\"); return 5;\n        }).flatMap(n -> Lazy.of(() -> {\n            System.out.println(\"  Step 2\"); return n * 2;\n        })).flatMap(n -> Lazy.of(() -> {\n            System.out.println(\"  Step 3\"); return n + 1;\n        }));\n\n        System.out.println(\"Chain defined, not evaluated\");\n        System.out.println(\"Result: \" + chained.get());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-infinite-streams-in-practice",
      children: "6.4 Infinite Streams in Practice"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class InfiniteStreamsInPractice {\n\n    public static void main(String[] args) {\n\n        Stream.iterate(new int[]{0, 1},\n                pair -> new int[]{pair[1], pair[0] + pair[1]})\n            .limit(10).map(pair -> pair[0])\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        Stream.iterate(2, n -> n + 1)\n            .filter(InfiniteStreamsInPractice::isPrime)\n            .limit(15)\n            .forEach(n -> System.out.print(n + \" \"));\n        System.out.println();\n\n        List<String> colors = List.of(\"red\", \"green\", \"blue\");\n        Stream.generate(() -> colors)\n            .flatMap(Collection::stream)\n            .limit(8)\n            .forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n    }\n\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        if (n == 2) return true;\n        if (n % 2 == 0) return false;\n        for (int i = 3; i * i <= n; i += 2)\n            if (n % i == 0) return false;\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-immutable-data-in-functional-style",
      children: "7. Immutable Data in Functional Style"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-records-as-functional-data-carriers",
      children: "7.1 Records as Functional Data Carriers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class RecordsAsFunctionalData {\n\n    record Address(String street, String city, String zip) {}\n    record Person(String name, int age, Address address) {}\n\n    public static void main(String[] args) {\n\n        Person p1 = new Person(\"Alice\", 30,\n            new Address(\"123 Main\", \"NYC\", \"10001\"));\n        System.out.println(p1.name() + \" lives in \" + p1.address().city());\n\n        List<Person> people = List.of(\n            new Person(\"Alice\", 30,\n                new Address(\"123 Main\", \"NYC\", \"10001\")),\n            new Person(\"Bob\", 25,\n                new Address(\"456 Oak\", \"LA\", \"90001\")),\n            new Person(\"Charlie\", 35,\n                new Address(\"789 Pine\", \"NYC\", \"10002\"))\n        );\n\n        Map<String, List<Person>> byCity = people.stream()\n            .collect(Collectors.groupingBy(p -> p.address().city()));\n        System.out.println(\"By city: \" + byCity);\n\n        record Circle(double radius) {\n            double area() { return Math.PI * radius * radius; }\n        }\n        System.out.printf(\"Area: %.2f%n\", new Circle(5).area());\n\n        record TempConversion(double celsius, double fahrenheit) {\n            TempConversion(double celsius) {\n                this(celsius, celsius * 9 / 5 + 32);\n            }\n        }\n\n        List.of(0.0, 10.0, 20.0, 30.0, 100.0).stream()\n            .map(TempConversion::new)\n            .forEach(tc -> System.out.printf(\"%.0fC = %.0fF%n\",\n                tc.celsius(), tc.fahrenheit()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "72-the-with--wither-pattern",
      children: ["7.2 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@With"
      }), " / Wither Pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class WitherPattern {\n\n    record Point(int x, int y) {\n        Point withX(int x) { return new Point(x, this.y()); }\n        Point withY(int y) { return new Point(this.x(), y); }\n    }\n\n    record Employee(String name, String department, double salary) {\n        Employee withDepartment(String dept) {\n            return new Employee(name(), dept, salary());\n        }\n        Employee withSalary(double salary) {\n            return new Employee(name(), department(), salary);\n        }\n        Employee withRaise(double percent) {\n            return new Employee(name(), department(),\n                salary() * (1 + percent / 100));\n        }\n    }\n\n    public static void main(String[] args) {\n\n        Point p1 = new Point(3, 4);\n        Point p2 = p1.withX(10);\n        System.out.println(\"p1: \" + p1);\n        System.out.println(\"p2: \" + p2);\n\n        Employee emp = new Employee(\"Alice\", \"Engineering\", 100_000);\n        Employee promoted = emp.withDepartment(\"Senior Eng\").withRaise(15);\n        System.out.println(\"Promoted: \" + promoted);\n\n        List<Employee> team = List.of(\n            new Employee(\"Alice\", \"Engineering\", 100_000),\n            new Employee(\"Bob\", \"Engineering\", 90_000)\n        );\n        List<Employee> raised = team.stream()\n            .map(e -> e.withRaise(10).withDepartment(\"Eng v2\"))\n            .toList();\n        raised.forEach(e -> System.out.println(\"  \" + e));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-unmodifiable-collections",
      children: "7.3 Unmodifiable Collections"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class UnmodifiableCollections {\n\n    public static void main(String[] args) {\n\n        List.of(\"a\", \"b\", \"c\");              // already immutable\n        Set.of(1, 2, 3);                      // already immutable\n        Map.of(\"a\", 1, \"b\", 2);               // already immutable\n\n        List<String> fromStream = Stream.of(\"x\", \"y\", \"z\").toList();\n\n        List<String> collected = Stream.of(\"p\", \"q\", \"r\")\n            .collect(Collectors.toUnmodifiableList());\n\n        List<String> modifiable = new ArrayList<>(List.of(\"a\", \"b\"));\n        List<String> defensive = List.copyOf(modifiable);\n        modifiable.add(\"c\"); // does NOT affect defensive\n        System.out.println(\"Defensive: \" + defensive);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-defensive-copying",
      children: "7.4 Defensive Copying"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class DefensiveCopying {\n\n    record Team(String name, List<String> members) {\n        Team { members = List.copyOf(members); }\n    }\n\n    public static void main(String[] args) {\n\n        List<String> mutableMembers = new ArrayList<>(List.of(\"Alice\", \"Bob\"));\n        Team team = new Team(\"Dev\", mutableMembers);\n        mutableMembers.add(\"Charlie\");\n        System.out.println(\"Team members: \" + team.members());\n\n        record Employee(String name) {}\n        List<Employee> mutableEmps = new ArrayList<>(\n            List.of(new Employee(\"Alice\"), new Employee(\"Bob\")));\n\n        List<Employee> safe = List.copyOf(mutableEmps);\n        mutableEmps.add(new Employee(\"Charlie\"));\n        System.out.println(\"Safe size: \" + safe.size());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-pattern-matching-java-21",
      children: "8. Pattern Matching (Java 21+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-switch-expression--pattern-matching",
      children: "8.1 Switch Expression & Pattern Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class SwitchPatternMatching {\n\n    sealed interface Shape permits Circle, Rectangle, Triangle {}\n    record Circle(double radius) implements Shape {}\n    record Rectangle(double width, double height) implements Shape {}\n    record Triangle(double base, double height) implements Shape {}\n\n    public static void main(String[] args) {\n\n        Object obj = \"Hello, Java 21!\";\n        String result = switch (obj) {\n            case String s -> \"String of length \" + s.length();\n            case Integer i -> \"Integer with value \" + i;\n            case null      -> \"Null value\";\n            default        -> \"Unknown: \" + obj.getClass().getSimpleName();\n        };\n        System.out.println(result);\n\n        Shape shape = new Circle(5.0);\n        String description = switch (shape) {\n            case Circle c    -> \"Circle with radius \" + c.radius();\n            case Rectangle r -> \"Rectangle \" + r.width() + \"x\" + r.height();\n            case Triangle t  -> \"Triangle with base \" + t.base();\n        };\n        System.out.println(description);\n\n        Object value = 42;\n        String classified = switch (value) {\n            case String s when s.length() > 10 -> \"Long string: \" + s;\n            case String s                      -> \"Short string: \" + s;\n            case Integer i when i > 0          -> \"Positive: \" + i;\n            case Integer i                     -> \"Non-positive: \" + i;\n            case null                          -> \"null\";\n            default                            -> \"Other\";\n        };\n        System.out.println(classified);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-record-patterns",
      children: "8.2 Record Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class RecordPatterns {\n\n    record Point(int x, int y) {}\n    record Line(Point start, Point end) {}\n    record Circle(Point center, double radius) {}\n\n    public static void main(String[] args) {\n\n        Point p = new Point(3, 4);\n        if (p instanceof Point(int x, int y)) {\n            System.out.println(\"Point at (\" + x + \", \" + y + \")\");\n        }\n\n        Line line = new Line(new Point(0, 0), new Point(10, 20));\n        if (line instanceof Line(Point(int x1, int y1), Point(int x2, int y2))) {\n            double dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));\n            System.out.printf(\"Line length: %.2f%n\", dist);\n        }\n\n        Object shape = new Circle(new Point(0, 0), 5);\n        String info = switch (shape) {\n            case Circle(Point(int x, int y), double r) ->\n                \"Circle at (\" + x + \",\" + y + \") radius \" + r;\n            case Line(Point(int x1, int y1), Point(int x2, int y2)) ->\n                \"Line from (\" + x1 + \",\" + y1 + \") to (\" + x2 + \",\" + y2 + \")\";\n            case null -> \"null\";\n            default -> \"Unknown shape\";\n        };\n        System.out.println(info);\n\n        List<Object> items = List.of(\n            new Point(1, 2), \"text\",\n            new Circle(new Point(0, 0), 3.0), 42);\n\n        for (Object item : items) {\n            switch (item) {\n                case Point(int x, int y) ->\n                    System.out.println(\"Point: \" + x + \",\" + y);\n                case Circle(Point(int cx, int cy), double r) ->\n                    System.out.println(\"Circle at \" + cx + \",\" + cy + \" r=\" + r);\n                case String s -> System.out.println(\"String: \" + s);\n                case Integer i -> System.out.println(\"Int: \" + i);\n                default -> System.out.println(\"Unknown: \" + item);\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-guarded-patterns",
      children: "8.3 Guarded Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class GuardedPatterns {\n\n    sealed interface Animal permits Dog, Cat, Bird {}\n    record Dog(String name, int barkVolume) implements Animal {}\n    record Cat(String name, boolean indoor) implements Animal {}\n    record Bird(String name, double wingSpan) implements Animal {}\n\n    public static void main(String[] args) {\n\n        List<Animal> animals = List.of(\n            new Dog(\"Rex\", 8), new Dog(\"Bella\", 3),\n            new Cat(\"Whiskers\", true), new Cat(\"Tom\", false),\n            new Bird(\"Tweety\", 0.25));\n\n        for (Animal animal : animals) {\n            String desc = switch (animal) {\n                case Dog(var name, int vol) when vol > 5 ->\n                    name + \" is loud!\";\n                case Dog(var name, int vol) ->\n                    name + \" is quiet\";\n                case Cat(var name, boolean indoor) when indoor ->\n                    name + \" is indoor\";\n                case Cat(var name, boolean indoor) ->\n                    name + \" is outdoor\";\n                case Bird(var name, double ws) when ws > 1.0 ->\n                    name + \" is large\";\n                case Bird(var name, double ws) ->\n                    name + \" is small\";\n            };\n            System.out.println(\"  \" + desc);\n        }\n\n        record Transaction(String userId, double amount, boolean flagged) {}\n        Transaction txn = new Transaction(\"u1\", 9500.00, false);\n        String risk = switch (txn) {\n            case Transaction(var uid, double amt, boolean flagged)\n                when flagged || amt > 10000 -> \"HIGH: \" + uid;\n            case Transaction(var uid, double amt, boolean flagged)\n                when amt > 5000 -> \"MEDIUM: \" + uid;\n            case Transaction(var uid, double amt, boolean flagged) ->\n                \"LOW: \" + uid;\n        };\n        System.out.println(\"Risk: \" + risk);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "84-sealed-class-exhaustive-matching",
      children: "8.4 Sealed Class Exhaustive Matching"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class SealedExhaustiveMatching {\n\n    sealed interface Expression permits Constant, Add, Multiply, Negate {}\n    record Constant(int value) implements Expression {}\n    record Add(Expression left, Expression right) implements Expression {}\n    record Multiply(Expression left, Expression right) implements Expression {}\n    record Negate(Expression expr) implements Expression {}\n\n    static int evaluate(Expression expr) {\n        return switch (expr) {\n            case Constant(var v)        -> v;\n            case Add(var l, var r)      -> evaluate(l) + evaluate(r);\n            case Multiply(var l, var r) -> evaluate(l) * evaluate(r);\n            case Negate(var e)          -> -evaluate(e);\n        };\n    }\n\n    sealed interface PaymentMethod permits CreditCard, PayPal, Crypto {}\n    record CreditCard(String last4, String expiry) implements PaymentMethod {}\n    record PayPal(String email) implements PaymentMethod {}\n    record Crypto(String walletAddress, String currency) implements PaymentMethod {}\n\n    static String processPayment(PaymentMethod method, double amount) {\n        return switch (method) {\n            case CreditCard(var last4, var expiry) ->\n                \"Charge $\" + amount + \" to card ending \" + last4;\n            case PayPal(var email) ->\n                \"PayPal payment of $\" + amount + \" from \" + email;\n            case Crypto(var addr, var currency) ->\n                \"Send \" + amount + \" USD in \" + currency;\n        };\n    }\n\n    public static void main(String[] args) {\n\n        Expression expr = new Add(\n            new Multiply(new Constant(3), new Constant(4)),\n            new Negate(new Constant(2)));\n        System.out.println(\"Result: \" + evaluate(expr));\n\n        System.out.println(processPayment(\n            new CreditCard(\"1234\", \"12/28\"), 99.99));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-optionals--beyond-the-basics",
      children: "9. Optionals → Beyond the Basics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "91-or-ifpresentorelse-stream--deep-patterns",
      children: ["9.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ifPresentOrElse"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " → Deep Patterns"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class OptionalAdvancedPatterns {\n\n    public static void main(String[] args) {\n\n        Optional<String> config = Optional.<String>empty()\n            .or(() -> Optional.ofNullable(System.getenv(\"MY_CONFIG\")))\n            .or(() -> Optional.of(\"default-config\"));\n        System.out.println(\"Config: \" + config.get());\n\n        Optional<String> value = Optional.of(\"data\");\n        value.ifPresentOrElse(\n            v -> System.out.println(\"  Processed: \" + v),\n            () -> System.out.println(\"  No data\"));\n\n        record User(String name, String email) {}\n        List<Optional<User>> users = List.of(\n            Optional.of(new User(\"Alice\", \"alice@x.com\")),\n            Optional.empty(),\n            Optional.of(new User(\"Bob\", \"bob@x.com\")));\n\n        List<String> emails = users.stream()\n            .flatMap(Optional::stream)\n            .map(User::email)\n            .toList();\n        System.out.println(\"Emails: \" + emails);\n\n        record Product(int id, String name, double price) {}\n        List<Product> products = List.of(\n            new Product(1, \"Laptop\", 1200),\n            new Product(2, \"Mouse\", 25),\n            new Product(3, \"Monitor\", 300));\n\n        Optional<Product> cheapest = products.stream()\n            .min(Comparator.comparingDouble(Product::price));\n        Optional<Product> mostExpensive = products.stream()\n            .max(Comparator.comparingDouble(Product::price));\n\n        String summary = cheapest.stream()\n            .flatMap(c -> mostExpensive.stream()\n                .map(m -> String.format(\"Range: $%.0f - $%.0f\",\n                    c.price(), m.price())))\n            .findFirst()\n            .orElse(\"No products\");\n        System.out.println(summary);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "92-optionalint-optionallong-optionaldouble",
      children: ["9.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptionalInt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptionalLong"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OptionalDouble"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class PrimitiveOptionals {\n\n    public static void main(String[] args) {\n\n        OptionalInt max = IntStream.of(3, 7, 1, 9, 4).max();\n        System.out.println(\"Max: \" + max.orElse(-1));\n\n        OptionalDouble avg = DoubleStream.of(2.5, 3.5, 4.0).average();\n        System.out.printf(\"Average: %.2f%n\", avg.orElse(0.0));\n\n        OptionalInt o1 = OptionalInt.of(10);\n        OptionalInt o2 = OptionalInt.of(20);\n        OptionalInt o3 = OptionalInt.empty();\n\n        int sum = List.of(o1, o2, o3).stream()\n            .flatMapToInt(OptionalInt::stream)\n            .sum();\n        System.out.println(\"Sum of present: \" + sum);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-combining-multiple-optionals",
      children: "9.3 Combining Multiple Optionals"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class CombiningOptionals {\n\n    public static void main(String[] args) {\n\n        Optional<String> first = Optional.of(\"Alice\");\n        Optional<String> last = Optional.of(\"Smith\");\n\n        Optional<String> fullName = first.flatMap(f ->\n            last.map(l -> f + \" \" + l));\n        System.out.println(\"Full: \" + fullName.orElse(\"N/A\"));\n\n        Optional<Integer> a = Optional.of(10);\n        Optional<Integer> b = Optional.of(20);\n        Optional<Integer> c = Optional.of(30);\n\n        Optional<Integer> sum3 = combine3(\n            a, b, c, (x, y, z) -> x + y + z);\n        System.out.println(\"Sum: \" + sum3.orElse(0));\n\n        BiFunction<Integer, Integer, Integer> add = Integer::sum;\n        BiFunction<Optional<Integer>, Optional<Integer>, Optional<Integer>> lifted =\n            lift(add);\n        System.out.println(\"Lifted: \" +\n            lifted.apply(Optional.of(5), Optional.of(7)));\n        System.out.println(\"Lifted empty: \" +\n            lifted.apply(Optional.of(5), Optional.empty()));\n    }\n\n    static <A, B, R> Optional<R> combine2(\n            Optional<A> a, Optional<B> b, BiFunction<A, B, R> fn) {\n        return a.flatMap(av -> b.map(bv -> fn.apply(av, bv)));\n    }\n\n    static <A, B, C, R> Optional<R> combine3(\n            Optional<A> a, Optional<B> b, Optional<C> c,\n            TriFunction<A, B, C, R> fn) {\n        return a.flatMap(av ->\n            b.flatMap(bv ->\n                c.map(cv -> fn.apply(av, bv, cv))));\n    }\n\n    static <A, B, R> BiFunction<Optional<A>, Optional<B>, Optional<R>> lift(\n            BiFunction<A, B, R> fn) {\n        return (oa, ob) -> oa.flatMap(a -> ob.map(b -> fn.apply(a, b)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "94-result-pattern-custom-either",
      children: ["9.4 Result Pattern (Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Either"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\nsealed interface Either<L, R> permits Either.Left, Either.Right {\n\n    record Left<L, R>(L value) implements Either<L, R> {}\n    record Right<L, R>(R value) implements Either<L, R> {}\n\n    static <L, R> Either<L, R> left(L value) { return new Left<>(value); }\n    static <L, R> Either<L, R> right(R value) { return new Right<>(value); }\n\n    default boolean isLeft() { return this instanceof Left; }\n    default boolean isRight() { return this instanceof Right; }\n\n    default <T> T fold(Function<? super L, ? extends T> leftFn,\n                       Function<? super R, ? extends T> rightFn) {\n        return switch (this) {\n            case Left(var l)  -> leftFn.apply(l);\n            case Right(var r) -> rightFn.apply(r);\n        };\n    }\n\n    default <RR> Either<L, RR> map(Function<? super R, ? extends RR> fn) {\n        return switch (this) {\n            case Left(var l)  -> new Left<>(l);\n            case Right(var r) -> new Right<>(fn.apply(r));\n        };\n    }\n\n    default <RR> Either<L, RR> flatMap(Function<? super R, Either<L, RR>> fn) {\n        return switch (this) {\n            case Left(var l)  -> new Left<>(l);\n            case Right(var r) -> fn.apply(r);\n        };\n    }\n\n    default R orElse(R defaultValue) {\n        return switch (this) {\n            case Left<?, ?> _  -> defaultValue;\n            case Right(var r)  -> r;\n        };\n    }\n}\n\npublic class EitherPattern {\n\n    record ValidationError(String field, String message) {}\n    record User(String name, String email) {}\n\n    public static void main(String[] args) {\n\n        Either<String, Integer> success = Either.right(42);\n        Either<String, Integer> failure = Either.left(\"Not found\");\n\n        String msg = success.fold(\n            err -> \"Error: \" + err,\n            val -> \"Value: \" + val);\n        System.out.println(msg);\n\n        Either<String, Integer> doubled = success.map(n -> n * 2);\n        System.out.println(\"Doubled: \" +\n            doubled.fold(e -> e, Object::toString));\n\n        Either<List<String>, User> validated = validateUser(\"\", \"invalid\");\n        validated.fold(\n            errors -> System.out.println(\"Errors: \" + errors),\n            user -> System.out.println(\"Created: \" + user));\n    }\n\n    static Either<List<String>, User> validateUser(String name, String email) {\n        List<String> errors = new ArrayList<>();\n        if (name == null || name.isBlank()) errors.add(\"Name required\");\n        if (email == null || !email.contains(\"@\")) errors.add(\"Invalid email\");\n        if (!errors.isEmpty()) return Either.left(errors);\n        return Either.right(new User(name, email));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-functional-error-handling",
      children: "10. Functional Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "101-try-monad-pattern",
      children: ["10.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Try"
      }), " Monad Pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\n@FunctionalInterface\ninterface Callable<T> {\n    T call() throws Exception;\n}\n\nsealed interface Try<T> permits Try.Success, Try.Failure {\n\n    record Success<T>(T value) implements Try<T> {}\n    record Failure<T>(Throwable cause) implements Try<T> {}\n\n    static <T> Try<T> of(Callable<? extends T> callable) {\n        try { return new Success<>(callable.call()); }\n        catch (Exception e) { return new Failure<>(e); }\n    }\n\n    static <T> Try<T> success(T value) { return new Success<>(value); }\n    static <T> Try<T> failure(Throwable cause) { return new Failure<>(cause); }\n\n    default boolean isSuccess() { return this instanceof Success; }\n    default boolean isFailure() { return this instanceof Failure; }\n\n    default T orElse(T defaultValue) {\n        return switch (this) {\n            case Success(var v) -> v;\n            case Failure<?> _   -> defaultValue;\n        };\n    }\n\n    default T orElseGet(Function<? super Throwable, ? extends T> fn) {\n        return switch (this) {\n            case Success(var v) -> v;\n            case Failure(var e) -> fn.apply(e);\n        };\n    }\n\n    default <R> Try<R> map(Function<? super T, ? extends R> fn) {\n        return switch (this) {\n            case Success(var v) -> Try.of(() -> fn.apply(v));\n            case Failure(var e) -> new Failure<>(e);\n        };\n    }\n\n    default <R> Try<R> flatMap(Function<? super T, Try<R>> fn) {\n        return switch (this) {\n            case Success(var v) -> {\n                try { yield fn.apply(v); }\n                catch (Exception e) { yield new Failure<>(e); }\n            }\n            case Failure(var e) -> new Failure<>(e);\n        };\n    }\n\n    default Try<T> recover(Function<? super Throwable, ? extends T> fn) {\n        return switch (this) {\n            case Success(var v) -> this;\n            case Failure(var e) -> {\n                try { yield new Success<>(fn.apply(e)); }\n                catch (Exception ex) { yield new Failure<>(ex); }\n            }\n        };\n    }\n}\n\npublic class TryMonadDemo {\n\n    public static void main(String[] args) {\n\n        Try<Integer> success = Try.of(() -> Integer.parseInt(\"42\"));\n        System.out.println(\"Success: \" + success);\n\n        Try<Integer> failure = Try.of(() -> Integer.parseInt(\"bad\"));\n        System.out.println(\"Failure: \" + failure);\n\n        int value = Try.of(() -> Integer.parseInt(\"bad\"))\n            .orElse(-1);\n        System.out.println(\"With default: \" + value);\n\n        Try<String> pipeline = Try.of(() -> \" 123 \")\n            .map(String::trim)\n            .flatMap(s -> Try.of(() -> Integer.parseInt(s)))\n            .map(n -> n * 2)\n            .map(n -> \"Result: \" + n);\n        System.out.println(\"Pipeline: \" + pipeline);\n\n        Try<Integer> recovered = Try.of(() -> Integer.parseInt(\"bad\"))\n            .recover(ex -> -1);\n        System.out.println(\"Recovered: \" + recovered);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "102-application-result-pattern",
      children: ["10.2 Application ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Result"
      }), " Pattern"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class ApplicationResult {\n\n    public sealed interface Result<T> permits Success, Failure {\n        record Success<T>(T data) implements Result<T> {}\n        record Failure<T>(String code, String message,\n                          List<String> details) implements Result<T> {\n            public Failure(String code, String message) {\n                this(code, message, List.of());\n            }\n        }\n\n        static <T> Result<T> ok(T data) { return new Success<>(data); }\n        static <T> Result<T> fail(String code, String message) {\n            return new Failure<>(code, message);\n        }\n\n        default boolean isSuccess() { return this instanceof Success; }\n        default boolean isFailure() { return this instanceof Failure; }\n\n        default <R> Result<R> map(Function<? super T, ? extends R> fn) {\n            return switch (this) {\n                case Success(var d) -> ok(fn.apply(d));\n                case Failure(var c, var m, var det) ->\n                    new Failure<>(c, m, det);\n            };\n        }\n\n        default <R> Result<R> flatMap(Function<? super T, Result<R>> fn) {\n            return switch (this) {\n                case Success(var d) -> fn.apply(d);\n                case Failure(var c, var m, var det) ->\n                    new Failure<>(c, m, det);\n            };\n        }\n    }\n\n    record Order(String id, String product, int quantity, double price) {}\n    record OrderRequest(String product, int quantity, double price) {}\n\n    static class OrderService {\n        Result<Order> createOrder(OrderRequest req) {\n            if (req.product() == null || req.product().isBlank())\n                return Result.fail(\"VALIDATION\", \"Product is required\");\n            if (req.quantity() <= 0)\n                return Result.fail(\"VALIDATION\", \"Quantity must be positive\");\n            return Result.ok(new Order(\n                UUID.randomUUID().toString(),\n                req.product(), req.quantity(), req.price()));\n        }\n    }\n\n    public static void main(String[] args) {\n\n        OrderService service = new OrderService();\n\n        Result<Order> result = service.createOrder(\n            new OrderRequest(\"Laptop\", 2, 1200.00));\n\n        Result<Double> totalResult = result\n            .map(o -> o.quantity() * o.price())\n            .map(total -> total * 1.08);\n\n        totalResult.ifSuccessOrElse(\n            total -> System.out.printf(\"Total: $%.2f%n\", total),\n            failure -> System.out.printf(\"Error: %s - %s%n\",\n                failure.code(), failure.message()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-validation-aggregation",
      children: "10.3 Validation Aggregation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\n\npublic class ValidationAggregation {\n\n    record ValidationResult<T>(Optional<T> value, List<String> errors) {\n\n        static <T> ValidationResult<T> valid(T value) {\n            return new ValidationResult<>(Optional.of(value), List.of());\n        }\n\n        static <T> ValidationResult<T> invalid(List<String> errors) {\n            return new ValidationResult<>(Optional.empty(), List.copyOf(errors));\n        }\n\n        static <T> ValidationResult<T> invalid(String error) {\n            return new ValidationResult<>(Optional.empty(), List.of(error));\n        }\n\n        boolean isValid() { return value.isPresent(); }\n\n        <U> ValidationResult<U> combine(\n                ValidationResult<?> other,\n                BiFunction<T, ?, U> combiner) {\n            if (this.isValid() && other.isValid()) {\n                @SuppressWarnings(\"unchecked\")\n                U combined = (U) combiner.apply(\n                    this.value.get(), other.value.get());\n                return ValidationResult.valid(combined);\n            }\n            List<String> allErrors = new ArrayList<>();\n            if (!this.isValid()) allErrors.addAll(this.errors);\n            if (!other.isValid()) allErrors.addAll(other.errors);\n            return ValidationResult.invalid(allErrors);\n        }\n    }\n\n    record Registration(String username, String email, String password, int age) {}\n\n    static class RegistrationValidator {\n\n        ValidationResult<String> validateUsername(String username) {\n            if (username == null || username.isBlank())\n                return ValidationResult.invalid(\"Username required\");\n            if (username.length() < 3)\n                return ValidationResult.invalid(\"Username must be 3+ chars\");\n            return ValidationResult.valid(username);\n        }\n\n        ValidationResult<String> validateEmail(String email) {\n            if (email == null || !email.matches(\"^[^@\\\\s]+@[^@\\\\s]+\\\\.[^@\\\\s]+$\"))\n                return ValidationResult.invalid(\"Invalid email\");\n            return ValidationResult.valid(email);\n        }\n\n        ValidationResult<Registration> validate(\n                String username, String email, String password, int age) {\n\n            ValidationResult<String> uResult = validateUsername(username);\n            ValidationResult<String> eResult = validateEmail(email);\n\n            List<String> allErrors = new ArrayList<>();\n            if (!uResult.isValid()) allErrors.addAll(uResult.errors());\n            if (!eResult.isValid()) allErrors.addAll(eResult.errors());\n\n            if (!allErrors.isEmpty())\n                return ValidationResult.invalid(allErrors);\n\n            return ValidationResult.valid(\n                new Registration(username, email, password, age));\n        }\n    }\n\n    public static void main(String[] args) {\n\n        RegistrationValidator validator = new RegistrationValidator();\n\n        ValidationResult<Registration> result = validator.validate(\n            \"\", \"bad\", \"weak\", 10);\n\n        System.out.println(\"Errors:\");\n        result.errors().forEach(e -> System.out.println(\"  - \" + e));\n        System.out.println(\"Valid: \" + result.isValid());\n\n        ValidationResult<Registration> success = validator.validate(\n            \"alice\", \"alice@x.com\", \"Strong1\", 25);\n        success.value().ifPresent(reg ->\n            System.out.println(\"Registered: \" + reg.username()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-spring-boot-functional-programming",
      children: "11. Spring Boot Functional Programming"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Chapter P6 introduced ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterFunction"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HandlerFunction"
      }), ", and lambda-based ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " definitions. Here we go deeper with production patterns."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "111-routerfunction-deep",
      children: ["11.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterFunction"
      }), " Deep"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.servlet.function.*;\nimport org.springframework.web.servlet.function.ServerResponse;\n\nimport java.util.*;\n\n@SpringBootApplication\npublic class RouterFunctionDeepApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(RouterFunctionDeepApplication.class, args);\n    }\n\n    @Bean\n    RouterFunction<ServerResponse> apiRoutes() {\n\n        return RouterFunctions.route()\n            .GET(\"/api/users/{id}\", this::getUser)\n            .GET(\"/api/users\", this::listUsers)\n            .POST(\"/api/users\", this::createUser)\n            .PUT(\"/api/users/{id}\", this::updateUser)\n            .DELETE(\"/api/users/{id}\", this::deleteUser)\n            .add(RouterFunctions.route()\n                .path(\"/api/orders\", builder -> builder\n                    .GET(\"/{id}\", this::getOrder)\n                    .GET(\"\", this::listOrders)\n                    .POST(\"\", this::createOrder))\n                .build())\n            .filter((request, next) -> {\n                String apiKey = request.headers()\n                    .firstHeader(\"X-API-Key\");\n                if (apiKey == null || !apiKey.equals(\"valid-key\")) {\n                    return ServerResponse.status(401)\n                        .body(\"Unauthorized\");\n                }\n                return next.handle(request);\n            })\n            .filter((request, next) -> {\n                long start = System.currentTimeMillis();\n                ServerResponse response = next.handle(request);\n                long elapsed = System.currentTimeMillis() - start;\n                System.out.printf(\"%s %s -> %d (%dms)%n\",\n                    request.method(), request.path(),\n                    response.statusCode().value(), elapsed);\n                return response;\n            })\n            .onError(IllegalArgumentException.class,\n                (ex, request) -> ServerResponse.badRequest()\n                    .body(ex.getMessage()))\n            .onError(RuntimeException.class,\n                (ex, request) -> ServerResponse.status(500)\n                    .body(\"Internal error\"))\n            .build();\n    }\n\n    ServerResponse getUser(ServerRequest request) {\n        return ServerResponse.ok()\n            .body(\"User \" + request.pathVariable(\"id\"));\n    }\n\n    ServerResponse listUsers(ServerRequest request) {\n        return ServerResponse.ok()\n            .body(\"Users page=\" + request.param(\"page\").orElse(\"1\"));\n    }\n\n    ServerResponse createUser(ServerRequest request) {\n        try {\n            @SuppressWarnings(\"unchecked\")\n            Map<String, Object> body =\n                (Map<String, Object>) request.body(Map.class);\n            return ServerResponse.status(201)\n                .body(\"Created: \" + body.get(\"name\"));\n        } catch (Exception e) {\n            return ServerResponse.badRequest().body(\"Invalid body\");\n        }\n    }\n\n    ServerResponse updateUser(ServerRequest request) {\n        return ServerResponse.ok()\n            .body(\"Updated \" + request.pathVariable(\"id\"));\n    }\n\n    ServerResponse deleteUser(ServerRequest request) {\n        return ServerResponse.ok()\n            .body(\"Deleted \" + request.pathVariable(\"id\"));\n    }\n\n    ServerResponse getOrder(ServerRequest request) {\n        return ServerResponse.ok()\n            .body(\"Order \" + request.pathVariable(\"id\"));\n    }\n\n    ServerResponse listOrders(ServerRequest request) {\n        return ServerResponse.ok().body(\"All orders\");\n    }\n\n    ServerResponse createOrder(ServerRequest request) {\n        return ServerResponse.status(201).body(\"Order created\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "112-streamresponsebody",
      children: ["11.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamResponseBody"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Streaming responses for large datasets:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.servlet.function.*;\nimport org.springframework.web.servlet.function.ServerResponse;\n\nimport java.io.*;\nimport java.time.LocalDateTime;\nimport java.util.*;\nimport java.util.stream.*;\n\n@SpringBootApplication\npublic class StreamingEndpointApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(StreamingEndpointApplication.class, args);\n    }\n\n    record StockPrice(String symbol, double price, LocalDateTime timestamp) {}\n\n    static class StockService {\n        Stream<StockPrice> streamPrices() {\n            Random rnd = new Random();\n            List<String> symbols = List.of(\"AAPL\", \"GOOGL\", \"MSFT\");\n            return Stream.generate(() -> new StockPrice(\n                symbols.get(rnd.nextInt(3)),\n                100 + rnd.nextDouble() * 200,\n                LocalDateTime.now()));\n        }\n    }\n\n    @Bean\n    RouterFunction<ServerResponse> streamingRoutes(StockService stockService) {\n\n        return RouterFunctions.route()\n            .GET(\"/api/stocks/stream\", request ->\n                ServerResponse.ok()\n                    .header(\"Content-Type\", \"text/event-stream\")\n                    .header(\"Cache-Control\", \"no-cache\")\n                    .body((OutputStream outputStream) -> {\n                        try (PrintWriter writer = new PrintWriter(\n                                new OutputStreamWriter(outputStream, \"UTF-8\"))) {\n                            stockService.streamPrices()\n                                .limit(100)\n                                .forEach(price -> {\n                                    writer.write(\"data: \" + price.symbol()\n                                        + \" @ $\" + String.format(\"%.2f\",\n                                            price.price()) + \"\\n\\n\");\n                                    writer.flush();\n                                    try { Thread.sleep(50); }\n                                    catch (InterruptedException e) {\n                                        Thread.currentThread().interrupt();\n                                    }\n                                });\n                            writer.write(\"event: complete\\ndata: done\\n\\n\");\n                            writer.flush();\n                        }\n                    }))\n            .GET(\"/api/report.csv\", request ->\n                ServerResponse.ok()\n                    .header(\"Content-Type\", \"text/csv\")\n                    .header(\"Content-Disposition\",\n                        \"attachment; filename=\\\"prices.csv\\\"\")\n                    .body((OutputStream outputStream) -> {\n                        try (PrintWriter writer = new PrintWriter(\n                                new OutputStreamWriter(outputStream, \"UTF-8\"))) {\n                            writer.write(\"Symbol,Price,Time\\n\");\n                            stockService.streamPrices()\n                                .limit(1000)\n                                .forEach(price -> writer.printf(\n                                    \"%s,%.2f,%s%n\", price.symbol(),\n                                    price.price(), price.timestamp()));\n                            writer.flush();\n                        }\n                    }))\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "113-lambda-based-bean-definitions",
      children: ["11.3 Lambda-Based ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " Definitions"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\nimport java.util.*;\nimport java.util.function.*;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\n\n@Configuration\npublic class FunctionalBeanConfiguration {\n\n    @Bean\n    @Profile(\"dev\")\n    Consumer<String> devLogger() {\n        return msg -> System.out.println(\n            \"[DEV] \" + LocalDateTime.now()\n                .format(DateTimeFormatter.ISO_LOCAL_DATE_TIME) + \" \" + msg);\n    }\n\n    @Bean\n    @Profile(\"prod\")\n    Consumer<String> prodLogger() {\n        return msg -> System.out.println(\"[PROD] \" + msg);\n    }\n\n    @Bean\n    Consumer<String> logger(List<Consumer<String>> loggers) {\n        return msg -> loggers.forEach(l -> l.accept(msg));\n    }\n\n    @Bean\n    UnaryOperator<String> sanitizer() {\n        return input -> input == null ? \"\" : input.strip().toLowerCase();\n    }\n\n    @Bean\n    Function<List<String>, Map<Integer, List<String>>> lengthGrouper() {\n        return words -> words.stream()\n            .collect(Collectors.groupingBy(String::length));\n    }\n\n    @Bean\n    Predicate<String> emailValidator() {\n        return email -> email != null\n            && email.matches(\"^[A-Za-z0-9+_.-]+@(.+)$\");\n    }\n\n    @Bean\n    Function<String, Optional<Integer>> parseIntFn() {\n        return s -> {\n            try { return Optional.of(Integer.parseInt(s)); }\n            catch (NumberFormatException e) { return Optional.empty(); }\n        };\n    }\n\n    @Bean\n    Supplier<LocalDateTime> currentTime() {\n        return LocalDateTime::now;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-functional-property-binding",
      children: "11.4 Functional Property Binding"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.boot.context.properties.ConfigurationProperties;\nimport org.springframework.boot.context.properties.EnableConfigurationProperties;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.stereotype.Component;\n\nimport java.util.*;\nimport java.util.function.*;\n\n@Configuration\n@EnableConfigurationProperties(AppProperties.class)\npublic class FunctionalPropertyBinding {\n\n    private final AppProperties props;\n    private final Map<String, Function<String, String>> formatters = new HashMap<>();\n\n    public FunctionalPropertyBinding(AppProperties props) {\n        this.props = props;\n\n        formatters.put(\"upper\", String::toUpperCase);\n        formatters.put(\"lower\", String::toLowerCase);\n        formatters.put(\"trim\", String::strip);\n        formatters.put(\"reverse\", s -> new StringBuilder(s).reverse().toString());\n    }\n\n    public String format(String value, String style) {\n        return formatters.getOrDefault(style, Function.identity()).apply(value);\n    }\n\n    public List<String> getActiveFeatures() {\n        return props.getFeatures().stream()\n            .filter(f -> f.active())\n            .map(Feature::name)\n            .toList();\n    }\n\n    public Map<String, Integer> thresholdMap() {\n        return props.getThresholds();\n    }\n\n    public Predicate<String> allowlistPredicate() {\n        return props.getAllowedDomains().stream()\n            .map(domain -> (Predicate<String>)\n                (email -> email.endsWith(\"@\" + domain)))\n            .reduce(Predicate::or)\n            .orElse(email -> false);\n    }\n}\n\n@ConfigurationProperties(prefix = \"app\")\nrecord AppProperties(\n    String name,\n    String version,\n    List<String> allowedDomains,\n    Map<String, Integer> thresholds,\n    List<Feature> features\n) {}\n\nrecord Feature(String name, boolean active) {}\n"
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
            children: "Stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lazy sequence of elements"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Internal iteration, pipeline of operations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bulk data processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Optional"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Container for present/absent value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Monad-like chaining with map/flatMap"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Null-safe value access"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async computation pipeline"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking chaining"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async service orchestration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collector"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mutable reduction protocol"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Five components: supplier, accumulator, combiner, finisher, characteristics"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom aggregation logic"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Immutable data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generates equals, hashCode, toString"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
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
            children: "Key Interfaces"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stream"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Stream, IntStream, LongStream, DoubleStream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "mapMulti for one-to-many without flatMap overhead"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Optional"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Optional, OptionalInt, OptionalLong, OptionalDouble"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "or() for fallback Optional, stream() to flatten"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Functional Interfaces"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Function, BiFunction, Predicate, Consumer, Supplier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@FunctionalInterface annotation validates"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collectors"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collector, Collectors utility class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Use Collectors.teeing() to branch streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Pattern Matching"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "switch expressions, record patterns, sealed classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exhaustive matching verified at compile time"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Technique"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Data Processing"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Web APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event-Driven"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Configuration"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ETL transformations"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Response mapping"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event filtering"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Custom Collectors"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Aggregation reports"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Batch accumulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parallel computation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async endpoints"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event processing chains"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Pattern Matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Request type dispatch"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event type routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Config case analysis"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the key difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), " in Stream?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) map is faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) flatMap returns a Stream of Streams"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) flatMap flattens nested streams into a single stream; map transforms each element"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) There is no difference"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) flatMap flattens nested streams into a single stream; map transforms each element.** map applies a one-to-one transformation, while flatMap applies a one-to-many transformation and flattens the result.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collectors.teeing()"
        }), " do?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Merges two collectors into one by branching a stream and combining their results"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Splits a stream into two separate streams"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Converts a stream to a string"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Groups elements by a classifier function"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) Merges two collectors into one by branching a stream and combining their results.** teeing() is useful for computing multiple aggregations (e.g., sum and count) in a single pass.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which feature guarantees exhaustive pattern matching at compile time?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Optional"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Sealed classes combined with switch expressions"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Records"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Method references"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) Sealed classes combined with switch expressions.** Sealed classes define a fixed set of subtypes, and the compiler verifies that all subtypes are covered in switch patterns.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional.or()"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional.orElse()"
        }), "?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) or() accepts a Supplier<Optional> for fallback Optional chaining"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) orElse() is faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) or() throws an exception"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**A) or() accepts a Supplier<Optional> for fallback Optional chaining.** or() allows chaining Optional-producing fallbacks, while orElse() returns a direct value.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter deepens the functional programming foundation established in Chapter P6 with production-grade patterns:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Advanced Stream Operations"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mapMulti"
      }), " (Java 16+) avoids intermediate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " objects for small expansions. Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinctBy"
      }), " using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Predicate"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "HashSet"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConcurrentHashMap"
      }), " fills a gap in the JDK. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.iterate"
      }), " with a predicate creates bounded sequences elegantly. Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zip"
      }), " implementations via iterators or index-based merging cover the missing ", (0,jsx_runtime.jsx)(_components.code, {
        children: "zip"
      }), " operation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom Collectors"
      }), " → The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector<T,A,R>"
      }), " interface's five components (supplier, accumulator, combiner, finisher, characteristics) enable arbitrary mutable reductions. Custom downstream collectors for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "groupingBy"
      }), " support top-N selection and sliding windows. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collector.of"
      }), " with complex finishers transforms intermediate state into immutable results."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Monad Patterns"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), " exemplify monad-like types with unit, bind, and map operations satisfying the three monad laws. Custom monads (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Box"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Validation"
      }), ") extend the pattern. Validation distinguishes itself by accumulating errors rather than short-circuiting."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Interfaces Deep"
      }), " → The 43 specialized interfaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      }), " eliminate boxing overhead. Consumer chaining, predicate composition factories, and custom higher-arity interfaces (", (0,jsx_runtime.jsx)(_components.code, {
        children: "TriFunction"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "QuadFunction"
      }), ") extend Java's functional vocabulary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function Composition"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "andThen"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compose"
      }), " build pipelines of any length. Partial application and currying create reusable, specialized functions from general ones."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lazy Evaluation"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Supplier"
      }), " enables deferred computation and memoization. Custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Lazy<T>"
      }), " structures cache results while supporting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), ". Infinite streams with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.iterate"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream.generate"
      }), " provide unbounded data sources."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Immutable Data"
      }), " → Records transparently carry data with automatic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "equals"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "hashCode"
      }), ". Withers enable immutable updates. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List.copyOf"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collectors.toUnmodifiableList()"
      }), " guard against mutation."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Pattern Matching"
      }), " → Switch expressions with type patterns, record patterns, guarded patterns (", (0,jsx_runtime.jsx)(_components.code, {
        children: "when"
      }), "), and sealed class exhaustive matching transform Java's conditional logic into concise, compiler-verified expressions."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optionals in Depth"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or()"
      }), " chains fallback sources, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " bridges Optional and Stream, primitive optionals avoid boxing, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "combine"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "lift"
      }), " patterns handle multiple optionals. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Either"
      }), " provides Left/Right error handling."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Error Handling"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Try"
      }), " captures exceptions in a monadic wrapper supporting ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "recover"
      }), ". ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Result"
      }), " provides application-level success/failure with codes. Validation aggregation accumulates all errors."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot Functional"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterFunction"
      }), " with filters, error handlers, and nested routes. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamResponseBody"
      }), " writes large datasets incrementally. Lambda-based ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " definitions compose functional beans. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ConfigurationProperties"
      }), " with records enables functional property binding."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the five components of the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collector<T,A,R>"
        }), " interface and what does each do?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapMulti"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), " in both semantics and performance characteristics?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the three monad laws? Demonstrate each with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Validation"
        }), " monad differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Either"
        }), " in error handling strategy?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "andThen"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compose"
        }), " in ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Function"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Lazy<T>"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Supplier<T>"
        }), " in terms of caching?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What makes sealed class pattern matching exhaustive without a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "default"
        }), " branch?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How do you reliably make records with collection fields immutable?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ifPresentOrElse"
        }), " provide that ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ifPresent"
        }), " alone cannot?"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StreamResponseBody"
        }), " differ from returning a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collection"
        }), " directly in Spring Boot?"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "distinctBy"
          }), " collector using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collector.of"
          }), " that returns a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "List<T>"
          }), " (instead of using the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Predicate"
          }), "-based approach). Test it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Employee"
          }), " records."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a generic ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Validator<T>"
          }), " interface with methods ", (0,jsx_runtime.jsx)(_components.code, {
            children: "validate(T value)"
          }), " returning ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Validation<List<String>, T>"
          }), ", a static ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Validator<T> from(Predicate<T>, String errorMsg)"
          }), ", and a default ", (0,jsx_runtime.jsx)(_components.code, {
            children: "and(Validator<T>)"
          }), " that combines validators. Test with a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "User"
          }), " registration."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "FunctionPipeline"
          }), " utility class with a static method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "of(List<UnaryOperator<T>>)"
          }), " that returns a single composed ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UnaryOperator<T>"
          }), ". Add a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "measure"
          }), " method that wraps each step with timing. Test with string transformations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Build a custom ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GroupingCollector"
          }), " that collects ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Stream<T>"
          }), " into ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Map<K, List<V>>"
          }), " where ", (0,jsx_runtime.jsx)(_components.code, {
            children: "V"
          }), " is a transformed value (like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "groupingBy"
          }), " + ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mapping"
          }), " in one pass)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Result.flatMap"
          }), " method that works for both ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Success"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Failure"
          }), " cases. Then implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "traverse"
          }), " static method that converts ", (0,jsx_runtime.jsx)(_components.code, {
            children: "List<Result<T>>"
          }), " into ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Result<List<T>>"
          }), "."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "16",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monadic Parser Combinator"
          }), ": Implement a minimal parser combinator library using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Parser<T>"
          }), " as a monad. Include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Parser.of(T)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Parser.flatMap"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "char(char c)"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "digit()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "many(Parser<T>)"
          }), ". Parse a simple arithmetic expression ", (0,jsx_runtime.jsx)(_components.code, {
            children: "3+5*2"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Lazy Stream with Backpressure"
          }), ": Extend ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Lazy<T>"
          }), " to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LazyStream<T>"
          }), " supporting ", (0,jsx_runtime.jsx)(_components.code, {
            children: "map"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "filter"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "take(n)"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "toList()"
          }), ". Values should only be computed when consumed, and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "take(n)"
          }), " should short-circuit. This simulates how Java's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Stream"
          }), " laziness works internally."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Functional CQRS with Either"
          }), ": Build a functional command handler that takes a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Command"
          }), ", validates it returning ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Either<List<String>, Event>"
          }), ", then applies the event to an aggregate root returning ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Either<String, Aggregate>"
          }), ". Wire it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RouterFunction"
          }), " in Spring Boot. Commands: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CreateUserCommand(name, email)"
          }), ", events: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserCreated(id, name, email)"
          }), "."]
        }), "\n"]
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