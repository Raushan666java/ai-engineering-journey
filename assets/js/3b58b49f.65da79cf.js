"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[95304],{

/***/ 93063
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_p_6_lambdas_streams_md_3b5_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-p-6-lambdas-streams-md-3b5.json
const site_docs_courses_java_p_6_lambdas_streams_md_3b5_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/p6-lambdas-streams","title":"Lambda Expressions & Functional Programming","description":"Learning Objectives","source":"@site/docs/courses/java/p6-lambdas-streams.md","sourceDirName":"courses/java","slug":"/java/p6-lambdas-streams","permalink":"/ai-engineering-journey/java/p6-lambdas-streams","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":81,"frontMatter":{"id":"p6-lambdas-streams","slug":"/java/p6-lambdas-streams","title":"Lambda Expressions & Functional Programming","sidebar_label":"Lambda Expressions & Functional Programming","sidebar_position":81},"sidebar":"course-java","previous":{"title":"Generics, Annotations & Reflection","permalink":"/ai-engineering-journey/java/p5-generics-reflection"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/p6-lambdas-streams.md


const frontMatter = {
	id: 'p6-lambdas-streams',
	slug: '/java/p6-lambdas-streams',
	title: 'Lambda Expressions & Functional Programming',
	sidebar_label: 'Lambda Expressions & Functional Programming',
	sidebar_position: 81
};
const contentTitle = 'Lambda Expressions & Functional Programming';

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
  "value": "1. Functional Interfaces",
  "id": "1-functional-interfaces",
  "level": 2
}, {
  "value": "1.1 Core Functional Interfaces in <code>java.util.function</code>",
  "id": "11-core-functional-interfaces-in-javautilfunction",
  "level": 3
}, {
  "value": "1.2 Primitive Variants",
  "id": "12-primitive-variants",
  "level": 3
}, {
  "value": "1.3 Bi-Argument Variants",
  "id": "13-bi-argument-variants",
  "level": 3
}, {
  "value": "1.4 Custom Functional Interfaces",
  "id": "14-custom-functional-interfaces",
  "level": 3
}, {
  "value": "1.5 Operator Interfaces",
  "id": "15-operator-interfaces",
  "level": 3
}, {
  "value": "2. Lambda Syntax",
  "id": "2-lambda-syntax",
  "level": 2
}, {
  "value": "2.1 The Five Forms",
  "id": "21-the-five-forms",
  "level": 3
}, {
  "value": "2.2 Explicit Types and Mixed Inference",
  "id": "22-explicit-types-and-mixed-inference",
  "level": 3
}, {
  "value": "2.3 Variable Capture (Effectively Final)",
  "id": "23-variable-capture-effectively-final",
  "level": 3
}, {
  "value": "2.4 The <code>this</code> Reference",
  "id": "24-the-this-reference",
  "level": 3
}, {
  "value": "2.5 Lambda as Expression, Not Statement",
  "id": "25-lambda-as-expression-not-statement",
  "level": 3
}, {
  "value": "3. Method References",
  "id": "3-method-references",
  "level": 2
}, {
  "value": "3.1 Static Method Reference (<code>Class::staticMethod</code>)",
  "id": "31-static-method-reference-classstaticmethod",
  "level": 3
}, {
  "value": "3.2 Bound Instance Method Reference (<code>instance::method</code>)",
  "id": "32-bound-instance-method-reference-instancemethod",
  "level": 3
}, {
  "value": "3.3 Unbound Instance Method Reference (<code>Class::instanceMethod</code>)",
  "id": "33-unbound-instance-method-reference-classinstancemethod",
  "level": 3
}, {
  "value": "3.4 Constructor Reference (<code>Class::new</code>)",
  "id": "34-constructor-reference-classnew",
  "level": 3
}, {
  "value": "3.5 Summary Table",
  "id": "35-summary-table",
  "level": 3
}, {
  "value": "4. Stream Pipeline Architecture",
  "id": "4-stream-pipeline-architecture",
  "level": 2
}, {
  "value": "4.1 Pipeline Structure",
  "id": "41-pipeline-structure",
  "level": 3
}, {
  "value": "4.2 Stream Sources",
  "id": "42-stream-sources",
  "level": 3
}, {
  "value": "4.3 Stateless vs. Stateful Intermediate Operations",
  "id": "43-stateless-vs-stateful-intermediate-operations",
  "level": 3
}, {
  "value": "4.4 Lazy Evaluation",
  "id": "44-lazy-evaluation",
  "level": 3
}, {
  "value": "4.5 Short-Circuiting",
  "id": "45-short-circuiting",
  "level": 3
}, {
  "value": "4.6 Common Terminal Operations",
  "id": "46-common-terminal-operations",
  "level": 3
}, {
  "value": "5. Map / FlatMap Patterns",
  "id": "5-map--flatmap-patterns",
  "level": 2
}, {
  "value": "5.1 One-to-One Transformation with <code>map</code>",
  "id": "51-one-to-one-transformation-with-map",
  "level": 3
}, {
  "value": "5.2 One-to-Many with <code>flatMap</code>",
  "id": "52-one-to-many-with-flatmap",
  "level": 3
}, {
  "value": "5.3 Flattening Nested Structures",
  "id": "53-flattening-nested-structures",
  "level": 3
}, {
  "value": "5.4 <code>Optional</code> Mapping with <code>flatMap</code>",
  "id": "54-optional-mapping-with-flatmap",
  "level": 3
}, {
  "value": "5.5 Stream of Optionals → <code>flatMap(Optional::stream)</code> (Java 9+)",
  "id": "55-stream-of-optionals--flatmapoptionalstream-java-9",
  "level": 3
}, {
  "value": "6. Filter / Predicate Patterns",
  "id": "6-filter--predicate-patterns",
  "level": 2
}, {
  "value": "6.1 Basic Filtering",
  "id": "61-basic-filtering",
  "level": 3
}, {
  "value": "6.2 <code>Predicate.negate()</code>, <code>.and()</code>, <code>.or()</code>",
  "id": "62-predicatenegate-and-or",
  "level": 3
}, {
  "value": "6.3 Reusable Predicates with <code>Predicate.isEqual</code>",
  "id": "63-reusable-predicates-with-predicateisequal",
  "level": 3
}, {
  "value": "6.4 Distinct Elements with <code>distinct</code>",
  "id": "64-distinct-elements-with-distinct",
  "level": 3
}, {
  "value": "6.5 Take-While / Drop-While (Java 9+)",
  "id": "65-take-while--drop-while-java-9",
  "level": 3
}, {
  "value": "7. Reduce Operations",
  "id": "7-reduce-operations",
  "level": 2
}, {
  "value": "7.1 <code>T reduce(T identity, BinaryOperator&lt;T&gt;)</code>",
  "id": "71-t-reducet-identity-binaryoperatort",
  "level": 3
}, {
  "value": "7.2 <code>Optional&lt;T&gt; reduce(BinaryOperator&lt;T&gt;)</code>",
  "id": "72-optionalt-reducebinaryoperatort",
  "level": 3
}, {
  "value": "7.3 <code>reduce(U identity, BiFunction&lt;U,T,U&gt;, BinaryOperator&lt;U&gt;)</code>",
  "id": "73-reduceu-identity-bifunctionutu-binaryoperatoru",
  "level": 3
}, {
  "value": "7.4 Mutable Reduction with <code>collect</code>",
  "id": "74-mutable-reduction-with-collect",
  "level": 3
}, {
  "value": "7.5 Custom Collector",
  "id": "75-custom-collector",
  "level": 3
}, {
  "value": "8. GroupingBy",
  "id": "8-groupingby",
  "level": 2
}, {
  "value": "8.1 Simple Grouping",
  "id": "81-simple-grouping",
  "level": 3
}, {
  "value": "8.2 Grouping with Downstream Collectors",
  "id": "82-grouping-with-downstream-collectors",
  "level": 3
}, {
  "value": "8.3 Multi-Level Grouping",
  "id": "83-multi-level-grouping",
  "level": 3
}, {
  "value": "8.4 Grouping with <code>groupingByConcurrent</code>",
  "id": "84-grouping-with-groupingbyconcurrent",
  "level": 3
}, {
  "value": "8.5 Advanced Collectors",
  "id": "85-advanced-collectors",
  "level": 3
}, {
  "value": "9. Function Composition",
  "id": "9-function-composition",
  "level": 2
}, {
  "value": "9.1 <code>andThen</code> vs <code>compose</code>",
  "id": "91-andthen-vs-compose",
  "level": 3
}, {
  "value": "9.2 Combining Functions",
  "id": "92-combining-functions",
  "level": 3
}, {
  "value": "9.3 Currying Simulation",
  "id": "93-currying-simulation",
  "level": 3
}, {
  "value": "9.4 Composing with <code>andThen</code> on Other Functional Types",
  "id": "94-composing-with-andthen-on-other-functional-types",
  "level": 3
}, {
  "value": "10. Optional in Depth",
  "id": "10-optional-in-depth",
  "level": 2
}, {
  "value": "10.1 Creation and Basic Retrieval",
  "id": "101-creation-and-basic-retrieval",
  "level": 3
}, {
  "value": "10.2 <code>map</code> vs <code>flatMap</code>",
  "id": "102-map-vs-flatmap",
  "level": 3
}, {
  "value": "10.3 <code>filter</code> on Optional",
  "id": "103-filter-on-optional",
  "level": 3
}, {
  "value": "10.4 <code>or</code> (Java 9+) → Alternative Optional",
  "id": "104-or-java-9--alternative-optional",
  "level": 3
}, {
  "value": "10.5 <code>stream()</code> on Optional (Java 9+)",
  "id": "105-stream-on-optional-java-9",
  "level": 3
}, {
  "value": "10.6 Anti-Patterns and Best Practices",
  "id": "106-anti-patterns-and-best-practices",
  "level": 3
}, {
  "value": "11. CompletableFuture",
  "id": "11-completablefuture",
  "level": 2
}, {
  "value": "11.1 Basic Creation",
  "id": "111-basic-creation",
  "level": 3
}, {
  "value": "11.2 Callback Chains",
  "id": "112-callback-chains",
  "level": 3
}, {
  "value": "11.3 Combining Multiple Futures",
  "id": "113-combining-multiple-futures",
  "level": 3
}, {
  "value": "11.4 Error Handling",
  "id": "114-error-handling",
  "level": 3
}, {
  "value": "11.5 Timeouts and Completing",
  "id": "115-timeouts-and-completing",
  "level": 3
}, {
  "value": "11.6 Real-World Pattern: Parallel API Calls",
  "id": "116-real-world-pattern-parallel-api-calls",
  "level": 3
}, {
  "value": "12. Functional Patterns in Spring Boot",
  "id": "12-functional-patterns-in-spring-boot",
  "level": 2
}, {
  "value": "12.1 Lambda-Based Route Definitions (Spring Web MVC)",
  "id": "121-lambda-based-route-definitions-spring-web-mvc",
  "level": 3
}, {
  "value": "12.2 RouterFunction with Predicates and Nested Routes",
  "id": "122-routerfunction-with-predicates-and-nested-routes",
  "level": 3
}, {
  "value": "12.3 <code>@Bean</code> Factory Methods Using Lambdas",
  "id": "123-bean-factory-methods-using-lambdas",
  "level": 3
}, {
  "value": "12.4 Using Functional Beans",
  "id": "124-using-functional-beans",
  "level": 3
}, {
  "value": "12.5 Stream-Based Repository Pattern",
  "id": "125-stream-based-repository-pattern",
  "level": 3
}, {
  "value": "12.6 CompletableFuture in Spring Service",
  "id": "126-completablefuture-in-spring-service",
  "level": 3
}, {
  "value": "13. Summary",
  "id": "13-summary",
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
  "value": "14. Exercises",
  "id": "14-exercises",
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
        id: "lambda-expressions--functional-programming",
        children: "Lambda Expressions & Functional Programming"
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
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Define and use the core functional interfaces: ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Predicate<T>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Function<T,R>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Consumer<T>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Supplier<T>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "UnaryOperator<T>"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BinaryOperator<T>"
        }), ", and their primitive variants"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write lambda expressions in all syntactic forms, including single-expression, block-bodied, single-parameter without parentheses, and type-inferred forms"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Understand variable capture rules including the effectively-final constraint and what ", (0,jsx_runtime.jsx)(_components.code, {
          children: "this"
        }), " means inside a lambda"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Replace anonymous classes and method references with lambda equivalents using four method-reference forms: static, bound-instance, unbound-instance, and constructor"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Construct stream pipelines composed of a source, zero or more intermediate operations, and a terminal operation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish stateless intermediate operations from stateful ones and understand lazy evaluation semantics including short-circuiting"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " for one-to-one element transformation and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), " for one-to-many expansion and flattening of nested or optional structures"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose and negate predicates using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Predicate.and()"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".or()"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: ".negate()"
        }), " for fine-grained filtering"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Perform reduction with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "reduce(T identity, BinaryOperator<T>)"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional<T> reduce(BinaryOperator<T>)"
        }), ", and mutable reduction with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "collect"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Collectors.groupingBy"
        }), " for single-level, multi-level, and concurrent grouping with downstream collectors such as ", (0,jsx_runtime.jsx)(_components.code, {
          children: "counting"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "summingInt"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mapping"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filtering"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose functions using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "andThen"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "compose"
        }), " and simulate currying through nested lambda returns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Optional"
        }), " patterns including ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "filter"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "or"
        }), " (Java 9+), and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap(Optional::stream)"
        }), " for streams of optionals"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Build asynchronous pipelines with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletableFuture"
        }), " using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "supplyAsync"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenApply"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenCompose"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenAccept"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenCombine"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "allOf"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "anyOf"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exceptionally"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handle"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "completeOnTimeout"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Recognize and apply functional programming patterns in Spring Boot including lambda-based route definitions, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouterFunction"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Bean"
        }), " factory methods"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-functional-interfaces",
      children: "1. Functional Interfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/p6-lambdas-streams.png",
        alt: "Lambda Expressions and Streams - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A functional interface is an interface that contains exactly one abstract method. Java 8 introduced the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@FunctionalInterface"
      }), " annotation to mark such interfaces; the compiler enforces the single-abstract-method constraint. Functional interfaces are the target type for lambda expressions and method references."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "11-core-functional-interfaces-in-javautilfunction",
      children: ["1.1 Core Functional Interfaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The JDK provides forty-three functional interfaces in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.function"
      }), ". The six most fundamental are:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class CoreFunctionalInterfaces {\n\n    public static void main(String[] args) {\n\n        // Predicate<T> → boolean test(T t)\n        Predicate<String> isEmpty = s -> s.isEmpty();\n        System.out.println(\"Predicate: \" + isEmpty.test(\"\"));       // true\n        System.out.println(\"Predicate: \" + isEmpty.test(\"hello\"));  // false\n\n        // Function<T,R> → R apply(T t)\n        Function<String, Integer> lengthFn = s -> s.length();\n        System.out.println(\"Function: \" + lengthFn.apply(\"lambda\")); // 6\n\n        // Consumer<T> → void accept(T t)\n        Consumer<String> printer = s -> System.out.println(\"Consumer: \" + s);\n        printer.accept(\"Hello from Consumer!\");\n\n        // Supplier<T> → T get()\n        Supplier<Double> randomSupplier = () -> Math.random();\n        System.out.println(\"Supplier: \" + randomSupplier.get());\n\n        // UnaryOperator<T> extends Function<T,T>\n        UnaryOperator<String> shout = s -> s.toUpperCase();\n        System.out.println(\"UnaryOperator: \" + shout.apply(\"quiet\"));\n\n        // BinaryOperator<T> extends BiFunction<T,T,T>\n        BinaryOperator<Integer> add = (a, b) -> a + b;\n        System.out.println(\"BinaryOperator: \" + add.apply(10, 20)); // 30\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-primitive-variants",
      children: "1.2 Primitive Variants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Autoboxing carries a performance cost. Specialized functional interfaces for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "int"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "long"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "double"
      }), " eliminate boxing overhead:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.stream.IntStream;\n\npublic class PrimitiveFunctionalInterfaces {\n\n    public static void main(String[] args) {\n\n        // IntPredicate → avoids boxing int -> Integer\n        IntPredicate isEven = n -> n % 2 == 0;\n        System.out.println(\"IntPredicate: \" + isEven.test(42));  // true\n\n        // IntFunction<R> → int argument, R result\n        IntFunction<String> intToString = i -> \"Number: \" + i;\n        System.out.println(intToString.apply(7));\n\n        // IntConsumer\n        IntConsumer printInt = i -> System.out.println(\"IntConsumer: \" + i);\n        printInt.accept(99);\n\n        // IntSupplier\n        IntSupplier intSupplier = () -> 42;\n        System.out.println(\"IntSupplier: \" + intSupplier.getAsInt());\n\n        // IntUnaryOperator → int -> int\n        IntUnaryOperator square = n -> n * n;\n        System.out.println(\"IntUnaryOperator: \" + square.applyAsInt(12)); // 144\n\n        // IntBinaryOperator → (int, int) -> int\n        IntBinaryOperator max = (a, b) -> a > b ? a : b;\n        System.out.println(\"IntBinaryOperator: \" + max.applyAsInt(30, 45)); // 45\n\n        // LongPredicate, LongFunction, etc. follow the same pattern\n        LongPredicate isPositive = n -> n > 0L;\n        System.out.println(\"LongPredicate: \" + isPositive.test(1_000_000L));\n\n        // Double variants\n        DoubleFunction<String> doubleFormatter = d -> String.format(\"%.2f\", d);\n        System.out.println(\"DoubleFunction: \" + doubleFormatter.apply(3.14159));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-bi-argument-variants",
      children: "1.3 Bi-Argument Variants"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When a lambda takes two arguments, use the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Bi"
      }), "-prefixed versions:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class BiFunctionalInterfaces {\n\n    public static void main(String[] args) {\n\n        // BiPredicate<T,U> → boolean test(T t, U u)\n        BiPredicate<String, Integer> lengthCheck = (s, len) -> s.length() == len;\n        System.out.println(\"BiPredicate: \" + lengthCheck.test(\"Java\", 4)); // true\n\n        // BiFunction<T,U,R> → R apply(T t, U u)\n        BiFunction<String, String, String> concat = (a, b) -> a + \" \" + b;\n        System.out.println(\"BiFunction: \" + concat.apply(\"Hello\", \"World\"));\n\n        // BiConsumer<T,U> → void accept(T t, U u)\n        BiConsumer<String, Double> report = (name, score) ->\n            System.out.println(name + \" scored \" + score);\n        report.accept(\"Alice\", 95.5);\n\n        // ToIntBiFunction<T,U>, ToLongBiFunction<T,U>, ToDoubleBiFunction<T,U>\n        ToIntBiFunction<String, String> sumLengths = (a, b) -> a.length() + b.length();\n        System.out.println(\"ToIntBiFunction: \" + sumLengths.applyAsInt(\"abc\", \"de\")); // 5\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-custom-functional-interfaces",
      children: "1.4 Custom Functional Interfaces"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "You are not limited to JDK interfaces. Any interface with a single abstract method is a functional interface:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@FunctionalInterface\ninterface Validator<T> {\n    boolean validate(T value);\n\n    // default methods are allowed → they don't count as the SAM\n    default Validator<T> and(Validator<T> other) {\n        return value -> this.validate(value) && other.validate(value);\n    }\n\n    // static methods are allowed\n    static <T> Validator<T> alwaysPass() {\n        return value -> true;\n    }\n}\n\n@FunctionalInterface\ninterface Transformer<T, R> {\n    R transform(T input);\n\n    default Transformer<T, R> andThen(Transformer<R, R> after) {\n        return input -> after.transform(this.transform(input));\n    }\n}\n\npublic class CustomFunctionalInterfaceDemo {\n\n    public static void main(String[] args) {\n\n        Validator<String> nonEmpty = value -> value != null && !value.isBlank();\n        Validator<String> maxLength = value -> value.length() <= 10;\n\n        Validator<String> combined = nonEmpty.and(maxLength);\n\n        System.out.println(\"Valid 'hello': \" + combined.validate(\"hello\"));    // true\n        System.out.println(\"Valid '': \" + combined.validate(\"\"));              // false\n        System.out.println(\"Valid null: \" + combined.validate(null));          // false\n        System.out.println(\"Valid long: \" + combined.validate(\"too long text\")); // false\n\n        Transformer<String, Integer> toLength = input -> input.length();\n        Transformer<Integer, String> toString = input -> \"Length: \" + input;\n\n        Transformer<String, String> pipeline = toLength.andThen(toString);\n        System.out.println(pipeline.transform(\"functional\")); // Length: 10\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-operator-interfaces",
      children: "1.5 Operator Interfaces"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "UnaryOperator<T>"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BinaryOperator<T>"
      }), " are specialized ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Function"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BiFunction"
      }), " respectively where the argument and result types are identical:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class OperatorInterfaces {\n\n    public static void main(String[] args) {\n\n        // UnaryOperator<T> → Function<T,T>\n        UnaryOperator<String> reverse = s -> new StringBuilder(s).reverse().toString();\n        System.out.println(reverse.apply(\"lambda\")); // adbmal\n\n        // BinaryOperator<T> → BiFunction<T,T,T>\n        BinaryOperator<Integer> gcd = (a, b) -> {\n            while (b != 0) {\n                int temp = b;\n                b = a % b;\n                a = temp;\n            }\n            return a;\n        };\n        System.out.println(\"GCD: \" + gcd.apply(48, 18)); // 6\n\n        // BinaryOperator.minBy / maxBy → use a Comparator\n        BinaryOperator<String> longest = BinaryOperator.maxBy(\n            Comparator.comparingInt(String::length)\n        );\n        System.out.println(longest.apply(\"cat\", \"elephant\")); // elephant\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-lambda-syntax",
      children: "2. Lambda Syntax"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A lambda expression is a concise anonymous function that can be treated as a value. Java's lambda syntax evolved from the ", (0,jsx_runtime.jsx)(_components.em, {
        children: "lambda calculus"
      }), " and provides five structural variations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-the-five-forms",
      children: "2.1 The Five Forms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class LambdaSyntax {\n\n    public static void main(String[] args) {\n\n        // ---- Form 1: (parameters) -> expression (single expression, no braces) ----\n        Function<Integer, String> intToString = (i) -> String.valueOf(i);\n        System.out.println(intToString.apply(42));\n\n        // ---- Form 2: (parameters) -> { statements } (block body, requires return) ----\n        Function<String, String> capitalize = (s) -> {\n            if (s == null || s.isEmpty()) {\n                return s;\n            }\n            return Character.toUpperCase(s.charAt(0)) + s.substring(1);\n        };\n        System.out.println(capitalize.apply(\"hello\")); // Hello\n\n        // ---- Form 3: single parameter without parentheses ----\n        Function<String, Integer> wordCount = s -> s.split(\"\\\\s+\").length;\n        System.out.println(wordCount.apply(\"one two three\")); // 3\n\n        // ---- Form 4: empty parameter ----\n        Supplier<Long> currentTime = () -> System.currentTimeMillis();\n        System.out.println(\"Time: \" + currentTime.get());\n\n        // ---- Form 5: type inference (parameters may omit types) ----\n        BinaryOperator<Integer> multiply = (a, b) -> a * b;\n        System.out.println(multiply.apply(6, 7)); // 42\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-explicit-types-and-mixed-inference",
      children: "2.2 Explicit Types and Mixed Inference"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["You ", (0,jsx_runtime.jsx)(_components.em, {
        children: "may"
      }), " declare types explicitly when inference is ambiguous or for readability:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class ExplicitTyping {\n\n    public static void main(String[] args) {\n\n        // All types declared → rarely necessary but legal\n        BinaryOperator<Integer> sum = (Integer a, Integer b) -> a + b;\n\n        // Mixed: type on one, inferred on another → compile error\n        // BinaryOperator<Integer> bad = (Integer a, b) -> a + b; // DOES NOT COMPILE\n\n        // When types are explicit, parentheses are always required\n        Comparator<String> byLength = (String a, String b) ->\n            Integer.compare(a.length(), b.length());\n\n        List<String> words = Arrays.asList(\"apple\", \"fig\", \"banana\");\n        words.sort(byLength);\n        System.out.println(words); // [fig, apple, banana]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-variable-capture-effectively-final",
      children: "2.3 Variable Capture (Effectively Final)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Lambdas can capture variables from the enclosing scope. Captured variables must be ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "effectively final"
      }), " → not reassigned after initialization:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class VariableCapture {\n\n    public static void main(String[] args) {\n\n        // Effectively final variable\n        String prefix = \"User: \";\n\n        Function<String, String> greet = name -> prefix + name;\n        System.out.println(greet.apply(\"Alice\")); // User: Alice\n\n        // The compiler error below demonstrates the effectively-final constraint.\n        // Uncomment to see:\n        // String changing = \"start\";\n        // Function<String, String> bad = s -> changing + s; // OK here\n        // changing = \"modified\"; // ERROR: changing is no longer effectively final\n\n        // What about object fields? Fields are fair game.\n        new VariableCapture().demoFieldCapture();\n    }\n\n    private String instanceField = \"field-\";\n\n    void demoFieldCapture() {\n        // instanceField can be reassigned → fields are not subject to\n        // effectively-final because they are stored on the heap, not the stack.\n        Function<String, String> fn = s -> instanceField + s;\n        System.out.println(fn.apply(\"hello\")); // field-hello\n        instanceField = \"new-\";\n        System.out.println(fn.apply(\"hello\")); // new-hello (reflects assignment)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "24-the-this-reference",
      children: ["2.4 The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " Reference"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Inside a lambda, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " refers to the enclosing class instance, ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "not"
      }), " the lambda itself. This differs from anonymous classes where ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " refers to the anonymous instance:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class ThisReferenceDemo {\n\n    private String name = \"OuterClass\";\n\n    public void demonstrate() {\n\n        // Lambda: 'this' refers to the enclosing ThisReferenceDemo instance\n        Supplier<String> fromLambda = () -> {\n            return this.name; // refers to ThisReferenceDemo.name\n        };\n        System.out.println(\"Lambda this: \" + fromLambda.get()); // OuterClass\n\n        // Anonymous class: 'this' refers to the anonymous Supplier instance\n        Supplier<String> fromAnonymous = new Supplier<>() {\n            private final String name = \"Anonymous\";\n            @Override\n            public String get() {\n                return this.name; // refers to the anonymous class's name\n            }\n        };\n        System.out.println(\"Anonymous this: \" + fromAnonymous.get()); // Anonymous\n    }\n\n    public static void main(String[] args) {\n        new ThisReferenceDemo().demonstrate();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "25-lambda-as-expression-not-statement",
      children: "2.5 Lambda as Expression, Not Statement"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A lambda is an expression → it produces a value. This means you can assign it, pass it as an argument, or return it from a method:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class LambdaAsValue {\n\n    public static void main(String[] args) {\n\n        // Assign to variable\n        UnaryOperator<String> exclaim = s -> s + \"!\";\n\n        // Pass as argument\n        List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\n        names.sort((a, b) -> Integer.compare(b.length(), a.length()));\n        System.out.println(\"Sorted by length desc: \" + names);\n\n        // Return from method\n        Function<Integer, Integer> multiplier = createMultiplier(3);\n        System.out.println(\"3 * 7 = \" + multiplier.apply(7));\n    }\n\n    static Function<Integer, Integer> createMultiplier(int factor) {\n        // Lambda returned from a method\n        return x -> x * factor;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-method-references",
      children: "3. Method References"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Method references are shorthand for lambdas that simply call an existing method. There are four kinds."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "31-static-method-reference-classstaticmethod",
      children: ["3.1 Static Method Reference (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::staticMethod"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class StaticMethodRef {\n\n    public static void main(String[] args) {\n\n        // Lambda form\n        Function<String, Integer> lambdaForm = s -> Integer.parseInt(s);\n        System.out.println(lambdaForm.apply(\"42\"));\n\n        // Method reference form\n        Function<String, Integer> refForm = Integer::parseInt;\n        System.out.println(refForm.apply(\"42\"));\n\n        // Another example: Comparator.naturalOrder\n        List<String> names = Arrays.asList(\"Charlie\", \"Alice\", \"Bob\");\n        names.sort(Comparator.naturalOrder());\n        System.out.println(names); // [Alice, Bob, Charlie]\n\n        // Static method: Collections.max\n        Supplier<Long> currentTime = System::currentTimeMillis;\n        System.out.println(\"Millis: \" + currentTime.get());\n    }\n\n    static boolean isPalindrome(String s) {\n        return new StringBuilder(s).reverse().toString().equals(s);\n    }\n\n    static void demoWithPredicate() {\n        Predicate<String> palindrome = StaticMethodRef::isPalindrome;\n        System.out.println(palindrome.test(\"racecar\")); // true\n        System.out.println(palindrome.test(\"hello\"));   // false\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "32-bound-instance-method-reference-instancemethod",
      children: ["3.2 Bound Instance Method Reference (", (0,jsx_runtime.jsx)(_components.code, {
        children: "instance::method"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class BoundInstanceMethodRef {\n\n    public static void main(String[] args) {\n\n        // Lambda form\n        String greeting = \"Hello\";\n        Supplier<String> lambdaForm = () -> greeting.toUpperCase();\n        System.out.println(lambdaForm.get());\n\n        // Method reference form → the instance 'greeting' is bound\n        Supplier<String> refForm = greeting::toUpperCase;\n        System.out.println(refForm.get());\n\n        // Practical example: logging\n        Logger logger = new Logger(\"AppLogger\");\n        Consumer<String> infoLog = logger::info;\n        infoLog.accept(\"Application started\");\n\n        // Predicate with bound instance\n        List<String> words = Arrays.asList(\"apple\", \"\", \"banana\", \"\", \"cherry\");\n        String empty = \"\";\n        Predicate<String> isEmpty = empty::equals;\n        words.removeIf(isEmpty);\n        System.out.println(words); // [apple, banana, cherry]\n    }\n}\n\nclass Logger {\n    private final String name;\n\n    Logger(String name) {\n        this.name = name;\n    }\n\n    void info(String message) {\n        System.out.println(\"[\" + name + \"] INFO: \" + message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "33-unbound-instance-method-reference-classinstancemethod",
      children: ["3.3 Unbound Instance Method Reference (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::instanceMethod"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The first argument becomes the target of the method:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\npublic class UnboundInstanceMethodRef {\n\n    public static void main(String[] args) {\n\n        // Lambda form: (String s) -> s.length()\n        Function<String, Integer> lambdaForm = s -> s.length();\n\n        // Method reference form: String::length\n        Function<String, Integer> refForm = String::length;\n        System.out.println(refForm.apply(\"Hello!\")); // 6\n\n        // BiFunction form: (String a, String b) -> a.compareTo(b)\n        BiFunction<String, String, Integer> compareFn = String::compareTo;\n        System.out.println(compareFn.apply(\"apple\", \"banana\")); // negative\n\n        // Sorting with unbound reference\n        List<String> words = Arrays.asList(\"dog\", \"cat\", \"elephant\", \"ant\");\n        words.sort(String::compareToIgnoreCase);\n        System.out.println(words); // [ant, cat, dog, elephant]\n\n        // Predicate with unbound instance method: (String s) -> s.isEmpty()\n        Predicate<String> isEmpty = String::isEmpty;\n        System.out.println(isEmpty.test(\"\"));  // true\n        System.out.println(isEmpty.test(\"a\")); // false\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "34-constructor-reference-classnew",
      children: ["3.4 Constructor Reference (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::new"
      }), ")"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\nimport java.util.*;\n\nclass Person {\n    private final String name;\n    private final int age;\n\n    Person() {\n        this.name = \"Unknown\";\n        this.age = 0;\n    }\n\n    Person(String name) {\n        this.name = name;\n        this.age = 0;\n    }\n\n    Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n\n    public String getName() { return name; }\n    public int getAge() { return age; }\n\n    @Override\n    public String toString() {\n        return \"Person{name='\" + name + \"', age=\" + age + \"}\";\n    }\n}\n\npublic class ConstructorReference {\n\n    public static void main(String[] args) {\n\n        // No-arg constructor\n        Supplier<Person> personFactory = Person::new;\n        Person p1 = personFactory.get();\n        System.out.println(p1); // Person{name='Unknown', age=0}\n\n        // Single-arg constructor: Function<String, Person>\n        Function<String, Person> namedFactory = Person::new;\n        Person p2 = namedFactory.apply(\"Alice\");\n        System.out.println(p2); // Person{name='Alice', age=0}\n\n        // Two-arg constructor: BiFunction<String, Integer, Person>\n        BiFunction<String, Integer, Person> fullFactory = Person::new;\n        Person p3 = fullFactory.apply(\"Bob\", 30);\n        System.out.println(p3); // Person{name='Bob', age=30}\n\n        // Array constructor reference\n        Function<Integer, String[]> arrayFactory = String[]::new;\n        String[] arr = arrayFactory.apply(5);\n        System.out.println(\"Array length: \" + arr.length); // 5\n\n        // Practical: collect to array using constructor reference\n        List<String> names = Arrays.asList(\"X\", \"Y\", \"Z\");\n        String[] nameArray = names.toArray(String[]::new);\n        System.out.println(\"Collected: \" + Arrays.toString(nameArray));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-summary-table",
      children: "3.5 Summary Table"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class MethodRefSummary {\n\n    public static void main(String[] args) {\n        System.out.println(\"\"\"\n            ┌──────────────────────────────┬────────────────────────┬──────────────────────────┐\n            │ Kind                         │ Lambda                 │ Method Reference          │\n            ├──────────────────────────────┼────────────────────────┼──────────────────────────┤\n            │ Static method                │ s -> Integer.parseInt  │ Integer::parseInt         │\n            │ Bound instance method        │ () -> greeting.trim()  │ greeting::trim            │\n            │ Unbound instance method      │ s -> s.toUpperCase()   │ String::toUpperCase       │\n            │ Constructor (no-arg)         │ () -> new Person()     │ Person::new               │\n            │ Constructor (one-arg)        │ n -> new Person(n)     │ Person::new               │\n            │ Array constructor            │ n -> new String[n]     │ String[]::new             │\n            └──────────────────────────────┴────────────────────────┴──────────────────────────┘\n        \"\"\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-stream-pipeline-architecture",
      children: "4. Stream Pipeline Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A stream pipeline consists of three phases:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Source"
        }), " → a data source (collection, array, generator function, I/O channel)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Intermediate operations"
        }), " → transform the stream (lazy, return a new stream)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Terminal operation"
        }), " → produces a result or side effect (eager, consumes the stream)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-pipeline-structure",
      children: "4.1 Pipeline Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class PipelineStructure {\n\n    public static void main(String[] args) {\n\n        List<String> words = Arrays.asList(\n            \"apple\", \"banana\", \"avocado\", \"cherry\", \"apricot\", \"blueberry\"\n        );\n\n        // Pipeline: source -> filter (intermediate) -> map (intermediate) -> collect (terminal)\n        long count = words.stream()                       // source\n            .filter(w -> w.startsWith(\"a\"))               // intermediate (stateless)\n            .map(String::toUpperCase)                     // intermediate (stateless)\n            .count();                                     // terminal\n\n        System.out.println(\"Count: \" + count); // 3\n\n        // A pipeline that produces a result\n        List<String> result = words.stream()\n            .filter(w -> w.length() > 5)\n            .sorted()                                     // intermediate (stateful)\n            .collect(Collectors.toList());                // terminal\n\n        System.out.println(result); // [avocado, banana, blueberry, cherry]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-stream-sources",
      children: "4.2 Stream Sources"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\nimport java.nio.file.*;\nimport java.io.IOException;\n\npublic class StreamSources {\n\n    public static void main(String[] args) throws IOException {\n\n        // 1. From a Collection\n        List<String> list = List.of(\"a\", \"b\", \"c\");\n        list.stream().forEach(System.out::print);\n        System.out.println();\n\n        // 2. From an array\n        int[] numbers = {1, 2, 3, 4, 5};\n        IntStream intStream = Arrays.stream(numbers);\n        System.out.println(\"Sum: \" + intStream.sum());\n\n        // 3. Stream.of (varargs)\n        Stream<String> streamOf = Stream.of(\"x\", \"y\", \"z\");\n        streamOf.map(String::toUpperCase).forEach(System.out::print);\n        System.out.println();\n\n        // 4. Stream.iterate (unbounded)\n        Stream<Integer> evens = Stream.iterate(0, n -> n + 2);\n        evens.limit(5).forEach(n -> System.out.print(n + \" \")); // 0 2 4 6 8\n        System.out.println();\n\n        // 5. Stream.iterate with hasNext predicate (Java 9+)\n        Stream<Integer> bounded = Stream.iterate(\n            1, n -> n <= 100, n -> n * 2\n        );\n        bounded.forEach(n -> System.out.print(n + \" \")); // 1 2 4 8 16 32 64\n        System.out.println();\n\n        // 6. Stream.generate (Supplier)\n        Stream.generate(() -> Math.random())\n            .limit(3)\n            .forEach(n -> System.out.printf(\"%.2f \", n));\n        System.out.println();\n\n        // 7. IntStream.range / rangeClosed\n        IntStream.range(1, 5).forEach(n -> System.out.print(n + \" \")); // 1 2 3 4\n        System.out.println();\n        IntStream.rangeClosed(1, 5).forEach(n -> System.out.print(n + \" \")); // 1 2 3 4 5\n        System.out.println();\n\n        // 8. Stream.concat\n        Stream<String> first = Stream.of(\"a\", \"b\");\n        Stream<String> second = Stream.of(\"c\", \"d\");\n        Stream.concat(first, second).forEach(System.out::print); // abcd\n        System.out.println();\n\n        // 9. From a file (lines)\n        // Path path = Paths.get(\"data.txt\");\n        // try (Stream<String> lines = Files.lines(path)) {\n        //     lines.filter(l -> !l.isBlank()).forEach(System.out::println);\n        // }\n\n        // 10. From a Pattern\n        String sentence = \"the quick brown fox\";\n        Pattern pattern = Pattern.compile(\" \");\n        pattern.splitAsStream(sentence).forEach(w -> System.out.print(w + \",\"));\n        System.out.println();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-stateless-vs-stateful-intermediate-operations",
      children: "4.3 Stateless vs. Stateful Intermediate Operations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Stateless operations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "peek"
      }), ") can process each element independently. Stateful operations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "sorted"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinct"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "skip"
      }), ") must maintain state across elements:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StatelessVsStateful {\n\n    public static void main(String[] args) {\n\n        List<Integer> data = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6, 5, 3);\n\n        // Stateless: filter and map → each element processed independently\n        List<Integer> processed = data.stream()\n            .filter(n -> n % 2 == 0)           // stateless\n            .map(n -> n * n)                    // stateless\n            .collect(Collectors.toList());\n        System.out.println(\"Stateless pipeline: \" + processed);\n\n        // Stateful: sorted and distinct → must buffer elements\n        List<Integer> sortedUnique = data.stream()\n            .distinct()                         // stateful → needs to remember seen elements\n            .sorted()                           // stateful → needs to buffer all elements\n            .collect(Collectors.toList());\n        System.out.println(\"With stateful ops: \" + sortedUnique);\n\n        // Performance note: stateful ops break parallelism efficiency\n        // because they introduce ordering dependencies.\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-lazy-evaluation",
      children: "4.4 Lazy Evaluation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Intermediate operations are ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "lazy"
      }), " → they do nothing until a terminal operation is invoked. This enables:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Short-circuiting (stop processing once the result is determined)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fusion (combine multiple operations into a single pass)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class LazyEvaluation {\n\n    public static void main(String[] args) {\n\n        List<String> names = Arrays.asList(\"Anna\", \"Bob\", \"Charlie\", \"Diana\", \"Eve\");\n\n        System.out.println(\"--- Pipeline defined (nothing happens yet) ---\");\n\n        Stream<String> stream = names.stream()\n            .filter(name -> {\n                System.out.println(\"  filtering: \" + name);\n                return name.length() >= 4;\n            })\n            .map(name -> {\n                System.out.println(\"  mapping: \" + name);\n                return name.toUpperCase();\n            });\n\n        System.out.println(\"--- Terminal operation invoked ---\");\n        List<String> result = stream.collect(Collectors.toList());\n        System.out.println(\"Result: \" + result);\n\n        // Key observation: filtering and mapping are interleaved,\n        // not done in two separate passes. Each element passes through\n        // filter -> map before the next element is processed.\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "45-short-circuiting",
      children: "4.5 Short-Circuiting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Certain operations can terminate without processing the entire stream:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ShortCircuiting {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = IntStream.rangeClosed(1, 1_000_000)\n            .boxed()\n            .collect(Collectors.toList());\n\n        // findFirst → stops at the first match\n        Optional<Integer> first = numbers.stream()\n            .filter(n -> n > 500_000)\n            .findFirst();\n        System.out.println(\"First > 500k: \" + first.orElse(-1)); // 500001\n\n        // anyMatch → stops at the first match\n        boolean hasPrime = numbers.stream()\n            .anyMatch(n -> n > 1 && isPrime(n));\n        System.out.println(\"Has prime: \" + hasPrime);\n\n        // limit → truncates the stream\n        List<Integer> sample = numbers.stream()\n            .limit(5)\n            .collect(Collectors.toList());\n        System.out.println(\"First five: \" + sample);\n    }\n\n    static boolean isPrime(int n) {\n        if (n < 2) return false;\n        if (n == 2) return true;\n        if (n % 2 == 0) return false;\n        for (int i = 3; i * i <= n; i += 2) {\n            if (n % i == 0) return false;\n        }\n        return true;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "46-common-terminal-operations",
      children: "4.6 Common Terminal Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class TerminalOperations {\n\n    public static void main(String[] args) {\n\n        List<String> words = Arrays.asList(\"apple\", \"banana\", \"cherry\", \"date\");\n\n        // forEach → side effect\n        System.out.print(\"forEach: \");\n        words.stream().forEach(w -> System.out.print(w + \" \"));\n        System.out.println();\n\n        // collect → mutable reduction\n        Set<String> wordSet = words.stream().collect(Collectors.toSet());\n        System.out.println(\"collect to Set: \" + wordSet);\n\n        // toList (Java 16+) → immutable list\n        List<String> upper = words.stream()\n            .map(String::toUpperCase)\n            .toList();\n        System.out.println(\"toList: \" + upper);\n\n        // count\n        long longWords = words.stream()\n            .filter(w -> w.length() > 5)\n            .count();\n        System.out.println(\"Words > 5 chars: \" + longWords);\n\n        // anyMatch / allMatch / noneMatch\n        boolean allLong = words.stream().allMatch(w -> w.length() >= 4);\n        System.out.println(\"All length >= 4: \" + allLong);\n\n        // findFirst / findAny\n        Optional<String> first = words.stream()\n            .filter(w -> w.startsWith(\"c\"))\n            .findFirst();\n        System.out.println(\"First starting with c: \" + first.orElse(\"none\"));\n\n        // min / max\n        Optional<String> shortest = words.stream()\n            .min(Comparator.comparingInt(String::length));\n        System.out.println(\"Shortest: \" + shortest.orElse(\"none\"));\n\n        // reduce (covered in depth in section 7)\n        Optional<String> concatenated = words.stream()\n            .reduce((a, b) -> a + \",\" + b);\n        System.out.println(\"Reduced: \" + concatenated.orElse(\"\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-map--flatmap-patterns",
      children: "5. Map / FlatMap Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " operation applies a function to each element, producing a new stream of the same cardinality. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " operation applies a function that returns a stream for each element, then flattens the results into a single stream."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "51-one-to-one-transformation-with-map",
      children: ["5.1 One-to-One Transformation with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class MapPatterns {\n\n    public static void main(String[] args) {\n\n        // Simple type transformation\n        List<String> names = List.of(\"alice\", \"bob\", \"charlie\");\n        List<String> capitalized = names.stream()\n            .map(s -> Character.toUpperCase(s.charAt(0)) + s.substring(1))\n            .collect(Collectors.toList());\n        System.out.println(\"Capitalized: \" + capitalized);\n\n        // Extracting a property\n        List<Person> people = List.of(\n            new Person(\"Alice\", 30),\n            new Person(\"Bob\", 25),\n            new Person(\"Charlie\", 35)\n        );\n        List<String> personNames = people.stream()\n            .map(Person::getName)\n            .collect(Collectors.toList());\n        System.out.println(\"Names: \" + personNames);\n\n        // Primitive stream mapping\n        int[] lengths = people.stream()\n            .mapToInt(Person::getAge)\n            .toArray();\n        System.out.println(\"Ages: \" + Arrays.toString(lengths));\n\n        // Map with index using IntStream\n        List<String> indexed = IntStream.range(0, names.size())\n            .mapToObj(i -> (i + 1) + \". \" + names.get(i))\n            .toList();\n        System.out.println(\"Indexed: \" + indexed);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "52-one-to-many-with-flatmap",
      children: ["5.2 One-to-Many with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class FlatMapOneToMany {\n\n    public static void main(String[] args) {\n\n        // Each word becomes multiple characters\n        List<String> words = List.of(\"hi\", \"ok\");\n        List<String> letters = words.stream()\n            .flatMap(word -> Arrays.stream(word.split(\"\")))\n            .collect(Collectors.toList());\n        System.out.println(\"Letters: \" + letters); // [h, i, o, k]\n\n        // Cartesian product\n        List<Integer> numbers = List.of(1, 2, 3);\n        List<Character> chars = List.of('a', 'b');\n\n        List<String> product = numbers.stream()\n            .flatMap(n -> chars.stream().map(c -> n + \"\" + c))\n            .collect(Collectors.toList());\n        System.out.println(\"Cartesian product: \" + product);\n        // [1a, 1b, 2a, 2b, 3a, 3b]\n\n        // Expanding a collection property\n        List<Team> teams = List.of(\n            new Team(\"Dev\", List.of(\"Alice\", \"Bob\")),\n            new Team(\"QA\", List.of(\"Charlie\", \"Diana\"))\n        );\n        List<String> allMembers = teams.stream()\n            .flatMap(team -> team.members().stream())\n            .collect(Collectors.toList());\n        System.out.println(\"All members: \" + allMembers);\n    }\n}\n\nrecord Team(String name, List<String> members) {}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-flattening-nested-structures",
      children: "5.3 Flattening Nested Structures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class FlattenNestedStructures {\n\n    public static void main(String[] args) {\n\n        // Nested lists\n        List<List<Integer>> matrix = List.of(\n            List.of(1, 2, 3),\n            List.of(4, 5, 6),\n            List.of(7, 8, 9)\n        );\n\n        List<Integer> flat = matrix.stream()\n            .flatMap(List::stream)\n            .collect(Collectors.toList());\n        System.out.println(\"Flattened matrix: \" + flat);\n\n        // Deeply nested → requires multiple flatMaps\n        List<List<List<String>>> deep = List.of(\n            List.of(List.of(\"a\", \"b\"), List.of(\"c\")),\n            List.of(List.of(\"d\", \"e\"))\n        );\n        List<String> deepFlat = deep.stream()\n            .flatMap(List::stream)\n            .flatMap(List::stream)\n            .collect(Collectors.toList());\n        System.out.println(\"Deep flatten: \" + deepFlat);\n\n        // Tree-like structure\n        record Node(String name, List<Node> children) {}\n\n        Node tree = new Node(\"root\", List.of(\n            new Node(\"a\", List.of(new Node(\"a1\", List.of()), new Node(\"a2\", List.of()))),\n            new Node(\"b\", List.of())\n        ));\n\n        List<String> allNames = flattenNames(tree);\n        System.out.println(\"Tree names: \" + allNames);\n    }\n\n    static List<String> flattenNames(Node node) {\n        return Stream.concat(\n            Stream.of(node.name()),\n            node.children().stream().flatMap(child -> flattenNames(child).stream())\n        ).collect(Collectors.toList());\n    }\n\n    record Node(String name, List<Node> children) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "54-optional-mapping-with-flatmap",
      children: ["5.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " Mapping with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalFlatMap {\n\n    public static void main(String[] args) {\n\n        // Nested Optional → map produces Optional<Optional<R>>\n        Optional<String> outer = Optional.of(\"hello\");\n        Optional<Optional<Integer>> mapped = outer.map(s -> Optional.of(s.length()));\n        System.out.println(\"map on Optional: \" + mapped);        // Optional[Optional[5]]\n\n        // flatMap flattens: Optional<R>\n        Optional<Integer> flat = outer.flatMap(s -> Optional.of(s.length()));\n        System.out.println(\"flatMap on Optional: \" + flat);      // Optional[5]\n\n        // Real-world: looking up a value, then looking up based on that value\n        Map<String, String> config = new HashMap<>();\n        config.put(\"db.host\", \"localhost\");\n        config.put(\"localhost\", \"127.0.0.1\");\n\n        Optional<String> resolved = Optional.ofNullable(config.get(\"db.host\"))\n            .flatMap(host -> Optional.ofNullable(config.get(host)));\n        System.out.println(\"Resolved: \" + resolved.orElse(\"not found\"));\n\n        // Avoiding nested optionals in chained lookups\n        Map<String, Integer> cityPop = Map.of(\"NYC\", 8_300_000, \"Tokyo\", 13_900_000);\n        Map<String, String> capitals = Map.of(\"USA\", \"NYC\", \"Japan\", \"Tokyo\");\n\n        Optional<Integer> population = Optional.ofNullable(capitals.get(\"USA\"))\n            .flatMap(city -> Optional.ofNullable(cityPop.get(city)));\n        System.out.println(\"Population: \" + population.orElse(0)); // 8300000\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "55-stream-of-optionals--flatmapoptionalstream-java-9",
      children: ["5.5 Stream of Optionals → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap(Optional::stream)"
      }), " (Java 9+)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class StreamOfOptionals {\n\n    public static void main(String[] args) {\n\n        List<Optional<String>> optionals = List.of(\n            Optional.of(\"apple\"),\n            Optional.empty(),\n            Optional.of(\"banana\"),\n            Optional.of(\"cherry\"),\n            Optional.empty()\n        );\n\n        // Before Java 9: filter and map\n        List<String> before = optionals.stream()\n            .filter(Optional::isPresent)\n            .map(Optional::get)\n            .collect(Collectors.toList());\n        System.out.println(\"Filter + map: \" + before);\n\n        // Java 9+: flatMap(Optional::stream)\n        List<String> after = optionals.stream()\n            .flatMap(Optional::stream)\n            .collect(Collectors.toList());\n        System.out.println(\"flatMap stream: \" + after);\n\n        // Another common pattern: mapping that returns Optional\n        List<String> raw = List.of(\"42\", \"abc\", \"100\", \"xyz\");\n        List<Integer> parsed = raw.stream()\n            .map(StreamOfOptionals::tryParseInt)\n            .flatMap(Optional::stream)\n            .collect(Collectors.toList());\n        System.out.println(\"Parsed ints: \" + parsed); // [42, 100]\n    }\n\n    static Optional<Integer> tryParseInt(String s) {\n        try {\n            return Optional.of(Integer.parseInt(s));\n        } catch (NumberFormatException e) {\n            return Optional.empty();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-filter--predicate-patterns",
      children: "6. Filter / Predicate Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-basic-filtering",
      children: "6.1 Basic Filtering"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class BasicFiltering {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = IntStream.rangeClosed(1, 20)\n            .boxed()\n            .collect(Collectors.toList());\n\n        // Simple predicate\n        List<Integer> evens = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(\"Evens: \" + evens);\n\n        // Multiple filters\n        List<Integer> filtered = numbers.stream()\n            .filter(n -> n % 2 == 0)\n            .filter(n -> n > 10)\n            .collect(Collectors.toList());\n        System.out.println(\"Evens > 10: \" + filtered);\n\n        // With method reference\n        List<String> words = List.of(\"\", \"hello\", \" \", \"world\", \"\");\n        List<String> nonBlank = words.stream()\n            .filter(s -> !s.isBlank())\n            .collect(Collectors.toList());\n        System.out.println(\"Non-blank: \" + nonBlank);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "62-predicatenegate-and-or",
      children: ["6.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Predicate.negate()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".and()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".or()"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class PredicateCombination {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\"cat\", \"dog\", \"elephant\", \"ant\", \"bear\", \"aardvark\");\n\n        // Base predicates\n        Predicate<String> startsWithA = s -> s.startsWith(\"a\");\n        Predicate<String> longerThan3 = s -> s.length() > 3;\n\n        // negate\n        List<String> notStartingWithA = words.stream()\n            .filter(startsWithA.negate())\n            .collect(Collectors.toList());\n        System.out.println(\"Not starting with 'a': \" + notStartingWithA);\n\n        // and\n        List<String> startsWithAandLong = words.stream()\n            .filter(startsWithA.and(longerThan3))\n            .collect(Collectors.toList());\n        System.out.println(\"Starts with 'a' AND length > 3: \" + startsWithAandLong);\n\n        // or\n        Predicate<String> shorterThan4 = s -> s.length() < 4;\n        List<String> startsWithAorShort = words.stream()\n            .filter(startsWithA.or(shorterThan4))\n            .collect(Collectors.toList());\n        System.out.println(\"Starts with 'a' OR length < 4: \" + startsWithAorShort);\n\n        // Complex combination\n        Predicate<String> complex = startsWithA\n            .and(longerThan3)\n            .or(s -> s.contains(\"e\"));\n        List<String> complexResult = words.stream()\n            .filter(complex)\n            .collect(Collectors.toList());\n        System.out.println(\"Complex filter: \" + complexResult);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "63-reusable-predicates-with-predicateisequal",
      children: ["6.3 Reusable Predicates with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Predicate.isEqual"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class PredicateIsEqual {\n\n    public static void main(String[] args) {\n\n        // Predicate.isEqual returns a predicate that tests for equality\n        Predicate<String> isHello = Predicate.isEqual(\"hello\");\n\n        List<String> greetings = List.of(\"hello\", \"world\", \"hello\", \"java\", \"hello\");\n        long helloCount = greetings.stream()\n            .filter(isHello)\n            .count();\n        System.out.println(\"'hello' count: \" + helloCount); // 3\n\n        // Useful for filtering by a dynamic value\n        String target = \"filterMe\";\n        List<String> items = List.of(\"keep\", \"filterMe\", \"alsoKeep\", \"filterMe\");\n        items.stream()\n            .filter(Predicate.isEqual(target).negate())\n            .forEach(s -> System.out.print(s + \" \"));\n        System.out.println();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "64-distinct-elements-with-distinct",
      children: ["6.4 Distinct Elements with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinct"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class DistinctFiltering {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = List.of(1, 2, 2, 3, 3, 3, 4, 5, 5);\n\n        List<Integer> unique = numbers.stream()\n            .distinct()\n            .collect(Collectors.toList());\n        System.out.println(\"Unique: \" + unique);\n\n        // Distinct by property using a custom collector or map trick\n        List<Person> people = List.of(\n            new Person(\"Alice\", 30),\n            new Person(\"Bob\", 25),\n            new Person(\"Alice\", 35), // duplicate name\n            new Person(\"Charlie\", 30)\n        );\n\n        // Distinct by name → use toMap and collect values\n        List<Person> uniqueByName = people.stream()\n            .collect(Collectors.toMap(\n                Person::getName,\n                p -> p,\n                (existing, replacement) -> existing // keep first\n            ))\n            .values()\n            .stream()\n            .collect(Collectors.toList());\n        System.out.println(\"Unique by name: \" + uniqueByName);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-take-while--drop-while-java-9",
      children: "6.5 Take-While / Drop-While (Java 9+)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class TakeWhileDropWhile {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = List.of(2, 4, 6, 7, 8, 10, 11, 12);\n\n        // takeWhile → take elements while the predicate is true, stop when false\n        List<Integer> evensThenStop = numbers.stream()\n            .takeWhile(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(\"Take evens: \" + evensThenStop); // [2, 4, 6]\n\n        // dropWhile → drop elements while the predicate is true, then include the rest\n        List<Integer> afterFirstOdd = numbers.stream()\n            .dropWhile(n -> n % 2 == 0)\n            .collect(Collectors.toList());\n        System.out.println(\"Drop evens: \" + afterFirstOdd); // [7, 8, 10, 11, 12]\n\n        // Useful on sorted data → operate on prefix/suffix\n        List<String> sorted = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n        List<String> beforeCherry = sorted.stream()\n            .takeWhile(s -> !s.equals(\"cherry\"))\n            .collect(Collectors.toList());\n        System.out.println(\"Before cherry: \" + beforeCherry); // [apple, banana]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-reduce-operations",
      children: "7. Reduce Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Reduction takes a stream of elements and produces a single value."
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "71-t-reducet-identity-binaryoperatort",
      children: ["7.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "T reduce(T identity, BinaryOperator<T>)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ReduceWithIdentity {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = List.of(1, 2, 3, 4, 5);\n\n        // Sum → identity value is 0\n        int sum = numbers.stream()\n            .reduce(0, (a, b) -> a + b);\n        System.out.println(\"Sum: \" + sum); // 15\n\n        // Product → identity value is 1\n        int product = numbers.stream()\n            .reduce(1, (a, b) -> a * b);\n        System.out.println(\"Product: \" + product); // 120\n\n        // String concatenation → identity is \"\"\n        List<String> words = List.of(\"Hello\", \" \", \"World\", \"!\");\n        String combined = words.stream()\n            .reduce(\"\", (a, b) -> a + b);\n        System.out.println(\"Combined: \" + combined);\n\n        // Max → identity is Integer.MIN_VALUE\n        int max = numbers.stream()\n            .reduce(Integer.MIN_VALUE, Integer::max);\n        System.out.println(\"Max: \" + max); // 5\n\n        // Min → identity is Integer.MAX_VALUE\n        int min = numbers.stream()\n            .reduce(Integer.MAX_VALUE, Integer::min);\n        System.out.println(\"Min: \" + min); // 1\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "72-optionalt-reducebinaryoperatort",
      children: ["7.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional<T> reduce(BinaryOperator<T>)"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When there is no identity value (e.g., the stream could be empty), use the variant that returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ReduceWithoutIdentity {\n\n    public static void main(String[] args) {\n\n        List<Integer> numbers = List.of(3, 7, 2, 9, 1);\n        List<Integer> empty = List.of();\n\n        // Max with no identity\n        Optional<Integer> max = numbers.stream()\n            .reduce(Integer::max);\n        System.out.println(\"Max: \" + max.orElse(-1)); // 9\n\n        // Empty stream -> Optional.empty()\n        Optional<Integer> maxEmpty = empty.stream()\n            .reduce(Integer::max);\n        System.out.println(\"Max of empty: \" + maxEmpty.orElse(-1)); // -1\n\n        // Concatenation with comma\n        List<String> items = List.of(\"A\", \"B\", \"C\");\n        Optional<String> csv = items.stream()\n            .reduce((a, b) -> a + \",\" + b);\n        System.out.println(\"CSV: \" + csv.orElse(\"\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "73-reduceu-identity-bifunctionutu-binaryoperatoru",
      children: ["7.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reduce(U identity, BiFunction<U,T,U>, BinaryOperator<U>)"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The three-argument reduce changes the result type and is used in parallel:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ReduceThreeArg {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\"apple\", \"banana\", \"cherry\");\n\n        // Accumulator type (StringBuilder) differs from element type (String)\n        StringBuilder combined = words.stream()\n            .reduce(\n                new StringBuilder(),                    // identity\n                (sb, word) -> sb.append(word).append(\" \"), // accumulator\n                (sb1, sb2) -> sb1.append(sb2)            // combiner (for parallel)\n            );\n        System.out.println(\"Reduced: '\" + combined + \"'\");\n\n        // Counting with a different accumulator type\n        int totalLength = words.stream()\n            .reduce(\n                0,                                        // identity\n                (len, word) -> len + word.length(),       // accumulator\n                Integer::sum                              // combiner\n            );\n        System.out.println(\"Total length: \" + totalLength); // 17\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "74-mutable-reduction-with-collect",
      children: ["7.4 Mutable Reduction with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collect"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "collect"
      }), " is specialized for mutable reduction → accumulating results into a mutable container:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class MutableReduction {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n        // collect to List\n        List<String> list = words.stream()\n            .filter(w -> w.length() > 4)\n            .collect(Collectors.toList());\n        System.out.println(\"List: \" + list);\n\n        // collect to Set\n        Set<Integer> lengths = words.stream()\n            .map(String::length)\n            .collect(Collectors.toSet());\n        System.out.println(\"Length set: \" + lengths);\n\n        // collect to Map\n        Map<String, Integer> wordLengthMap = words.stream()\n            .collect(Collectors.toMap(\n                w -> w,          // key mapper\n                String::length   // value mapper\n            ));\n        System.out.println(\"Word length map: \" + wordLengthMap);\n\n        // collect to specific Collection type\n        TreeSet<String> sorted = words.stream()\n            .collect(Collectors.toCollection(TreeSet::new));\n        System.out.println(\"TreeSet: \" + sorted);\n\n        // collect to unmodifiable collection (Java 16+ toList is immutable)\n        List<String> immutable = words.stream()\n            .collect(Collectors.toUnmodifiableList());\n        System.out.println(\"Immutable: \" + immutable);\n\n        // Joining strings\n        String joined = words.stream()\n            .collect(Collectors.joining(\", \", \"[\", \"]\"));\n        System.out.println(\"Joined: \" + joined);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-custom-collector",
      children: "7.5 Custom Collector"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.function.*;\nimport java.util.stream.*;\n\npublic class CustomCollector {\n\n    public static void main(String[] args) {\n\n        List<String> words = List.of(\"apple\", \"banana\", \"cherry\", \"date\");\n\n        // Collector that joins with a delimiter\n        Collector<String, ?, String> commaDelimited =\n            Collector.of(\n                StringBuilder::new,                     // supplier\n                (sb, s) -> { if (!sb.isEmpty()) sb.append(\", \"); sb.append(s); }, // accumulator\n                (sb1, sb2) -> sb1.append(sb2.length() > 0 ? \", \" : \"\").append(sb2), // combiner\n                StringBuilder::toString                 // finisher\n            );\n\n        String result = words.stream().collect(commaDelimited);\n        System.out.println(\"Custom collect: \" + result);\n\n        // Collector for computing summary statistics with custom logic\n        Collector<Integer, ?, Map<String, Integer>> statsCollector =\n            Collector.of(\n                HashMap<String, Integer>::new,\n                (map, n) -> {\n                    map.merge(\"sum\", n, Integer::sum);\n                    map.merge(\"count\", 1, Integer::sum);\n                    map.merge(\"min\", n, Math::min);\n                    map.merge(\"max\", n, Math::max);\n                },\n                (m1, m2) -> {\n                    m1.merge(\"sum\", m2.getOrDefault(\"sum\", 0), Integer::sum);\n                    m1.merge(\"count\", m2.getOrDefault(\"count\", 0), Integer::sum);\n                    m1.merge(\"min\", m2.getOrDefault(\"min\", Integer.MAX_VALUE), Math::min);\n                    m1.merge(\"max\", m2.getOrDefault(\"max\", Integer.MIN_VALUE), Math::max);\n                    return m1;\n                }\n            );\n\n        Map<String, Integer> stats = IntStream.rangeClosed(1, 10)\n            .boxed()\n            .collect(statsCollector);\n        System.out.println(\"Custom stats: \" + stats);\n        // {sum=55, count=10, min=1, max=10}\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-groupingby",
      children: "8. GroupingBy"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-simple-grouping",
      children: "8.1 Simple Grouping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class SimpleGroupingBy {\n\n    record City(String name, String country, int population) {}\n\n    public static void main(String[] args) {\n\n        List<City> cities = List.of(\n            new City(\"Tokyo\", \"Japan\", 13_900_000),\n            new City(\"Osaka\", \"Japan\", 2_700_000),\n            new City(\"Paris\", \"France\", 2_100_000),\n            new City(\"Lyon\", \"France\", 500_000),\n            new City(\"New York\", \"USA\", 8_300_000),\n            new City(\"Chicago\", \"USA\", 2_700_000)\n        );\n\n        // Simple grouping by country\n        Map<String, List<City>> byCountry = cities.stream()\n            .collect(Collectors.groupingBy(City::country));\n        System.out.println(\"By country:\");\n        byCountry.forEach((country, cityList) ->\n            System.out.println(\"  \" + country + \": \" + cityList)\n        );\n\n        // Grouping by first letter\n        Map<Character, List<City>> byFirstLetter = cities.stream()\n            .collect(Collectors.groupingBy(\n                city -> city.name().charAt(0)\n            ));\n        System.out.println(\"By first letter:\");\n        byFirstLetter.forEach((letter, cityList) ->\n            System.out.println(\"  \" + letter + \": \" + cityList)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-grouping-with-downstream-collectors",
      children: "8.2 Grouping with Downstream Collectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class GroupingDownstream {\n\n    record City(String name, String country, int population) {}\n\n    public static void main(String[] args) {\n\n        List<City> cities = List.of(\n            new City(\"Tokyo\", \"Japan\", 13_900_000),\n            new City(\"Osaka\", \"Japan\", 2_700_000),\n            new City(\"Paris\", \"France\", 2_100_000),\n            new City(\"Lyon\", \"France\", 500_000),\n            new City(\"New York\", \"USA\", 8_300_000),\n            new City(\"Chicago\", \"USA\", 2_700_000)\n        );\n\n        // counting → how many per group\n        Map<String, Long> cityCount = cities.stream()\n            .collect(Collectors.groupingBy(\n                City::country,\n                Collectors.counting()\n            ));\n        System.out.println(\"City count per country: \" + cityCount);\n\n        // summingInt → total population per country\n        Map<String, Integer> totalPop = cities.stream()\n            .collect(Collectors.groupingBy(\n                City::country,\n                Collectors.summingInt(City::population)\n            ));\n        System.out.println(\"Total population: \" + totalPop);\n\n        // mapping → extract and collect property per group\n        Map<String, List<String>> cityNames = cities.stream()\n            .collect(Collectors.groupingBy(\n                City::country,\n                Collectors.mapping(City::name, Collectors.toList())\n            ));\n        System.out.println(\"City names per country: \" + cityNames);\n\n        // filtering within groups\n        Map<String, List<City>> largeCities = cities.stream()\n            .collect(Collectors.groupingBy(\n                City::country,\n                Collectors.filtering(\n                    c -> c.population() > 2_000_000,\n                    Collectors.toList()\n                )\n            ));\n        System.out.println(\"Large cities per country: \" + largeCities);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-multi-level-grouping",
      children: "8.3 Multi-Level Grouping"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class MultiLevelGrouping {\n\n    record Sale(String product, String category, double amount) {}\n\n    public static void main(String[] args) {\n\n        List<Sale> sales = List.of(\n            new Sale(\"Laptop\", \"Electronics\", 1200.00),\n            new Sale(\"Phone\", \"Electronics\", 800.00),\n            new Sale(\"Shirt\", \"Clothing\", 40.00),\n            new Sale(\"Pants\", \"Clothing\", 80.00),\n            new Sale(\"Tablet\", \"Electronics\", 450.00),\n            new Sale(\"Jacket\", \"Clothing\", 150.00)\n        );\n\n        // Group by category, then by price tier\n        Map<String, Map<String, List<Sale>>> multiLevel = sales.stream()\n            .collect(Collectors.groupingBy(\n                Sale::category,\n                Collectors.groupingBy(sale -> {\n                    if (sale.amount() < 100) return \"Budget\";\n                    if (sale.amount() < 1000) return \"Mid-range\";\n                    return \"Premium\";\n                })\n            ));\n\n        System.out.println(\"Multi-level grouping:\");\n        multiLevel.forEach((category, byTier) -> {\n            System.out.println(\"  \" + category + \":\");\n            byTier.forEach((tier, items) ->\n                System.out.println(\"    \" + tier + \": \" + items)\n            );\n        });\n\n        // counting within a category\n        Map<String, Map<String, Long>> counted = sales.stream()\n            .collect(Collectors.groupingBy(\n                Sale::category,\n                Collectors.groupingBy(\n                    sale -> sale.amount() < 100 ? \"Budget\" : \"Standard\",\n                    Collectors.counting()\n                )\n            ));\n        System.out.println(\"Counts: \" + counted);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "84-grouping-with-groupingbyconcurrent",
      children: ["8.4 Grouping with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "groupingByConcurrent"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class ConcurrentGrouping {\n\n    record Task(String team, String status, int points) {}\n\n    public static void main(String[] args) {\n\n        List<Task> tasks = List.of(\n            new Task(\"Alpha\", \"Done\", 5),\n            new Task(\"Alpha\", \"In Progress\", 3),\n            new Task(\"Beta\", \"Done\", 8),\n            new Task(\"Beta\", \"In Progress\", 2),\n            new Task(\"Gamma\", \"To Do\", 5),\n            new Task(\"Alpha\", \"To Do\", 2)\n        );\n\n        // groupingByConcurrent → for parallel streams only, unordered\n        Map<String, Map<String, List<Task>>> concurrent = tasks\n            .parallelStream()\n            .collect(Collectors.groupingByConcurrent(\n                Task::team,\n                Collectors.groupingByConcurrent(Task::status)\n            ));\n\n        System.out.println(\"Concurrent grouping:\");\n        concurrent.forEach((team, byStatus) -> {\n            System.out.println(\"  \" + team + \":\");\n            byStatus.forEach((status, taskList) ->\n                System.out.println(\"    \" + status + \": \" + taskList)\n            );\n        });\n\n        // PartitioningBy → specialized two-group grouping\n        Map<Boolean, List<Task>> partitioned = tasks.stream()\n            .collect(Collectors.partitioningBy(\n                task -> task.points() > 4\n            ));\n        System.out.println(\"High points (>4): \" + partitioned.get(true));\n        System.out.println(\"Low points (<=4): \" + partitioned.get(false));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "85-advanced-collectors",
      children: "8.5 Advanced Collectors"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\nimport java.util.function.*;\n\npublic class AdvancedCollectors {\n\n    record Employee(String name, String department, double salary) {}\n\n    public static void main(String[] args) {\n\n        List<Employee> employees = List.of(\n            new Employee(\"Alice\", \"Engineering\", 120_000),\n            new Employee(\"Bob\", \"Engineering\", 100_000),\n            new Employee(\"Charlie\", \"Sales\", 90_000),\n            new Employee(\"Diana\", \"Sales\", 110_000),\n            new Employee(\"Eve\", \"Engineering\", 130_000)\n        );\n\n        // averagingDouble\n        Map<String, Double> avgSalary = employees.stream()\n            .collect(Collectors.groupingBy(\n                Employee::department,\n                Collectors.averagingDouble(Employee::salary)\n            ));\n        System.out.println(\"Average salary: \" + avgSalary);\n\n        // summarizingDouble\n        Map<String, DoubleSummaryStatistics> stats = employees.stream()\n            .collect(Collectors.groupingBy(\n                Employee::department,\n                Collectors.summarizingDouble(Employee::salary)\n            ));\n        stats.forEach((dept, s) ->\n            System.out.printf(\"%s: count=%d, avg=%.0f, max=%.0f%n\",\n                dept, s.getCount(), s.getAverage(), s.getMax())\n        );\n\n        // reducing downstream\n        Map<String, Optional<Employee>> highestPaid = employees.stream()\n            .collect(Collectors.groupingBy(\n                Employee::department,\n                Collectors.maxBy(Comparator.comparingDouble(Employee::salary))\n            ));\n        System.out.println(\"Highest paid: \" + highestPaid);\n\n        // collectingAndThen with upstream filtering\n        Map<String, String> deptSummary = employees.stream()\n            .collect(Collectors.groupingBy(\n                Employee::department,\n                Collectors.collectingAndThen(\n                    Collectors.toList(),\n                    list -> {\n                        double avg = list.stream()\n                            .mapToDouble(Employee::salary)\n                            .average()\n                            .orElse(0);\n                        return \"avg=\" + String.format(\"%.0f\", avg)\n                            + \", count=\" + list.size();\n                    }\n                )\n            ));\n        System.out.println(\"Department summaries: \" + deptSummary);\n\n        // teeing (Java 12+) → two collectors, one result\n        record Stats(double average, double max) {}\n\n        Stats employeeStats = employees.stream()\n            .collect(Collectors.teeing(\n                Collectors.averagingDouble(Employee::salary),\n                Collectors.maxBy(Comparator.comparingDouble(Employee::salary)),\n                (avg, maxEmp) -> new Stats(avg, maxEmp.map(Employee::salary).orElse(0.0))\n            ));\n        System.out.printf(\"Teeing: avg=%.0f, max=%.0f%n\",\n            employeeStats.average(), employeeStats.max());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-function-composition",
      children: "9. Function Composition"
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "91-andthen-vs-compose",
      children: ["9.1 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "andThen"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compose"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class FunctionComposition {\n\n    public static void main(String[] args) {\n\n        Function<String, String> trim = String::strip;\n        Function<String, String> toUpper = String::toUpperCase;\n        Function<String, String> exclaim = s -> s + \"!\";\n\n        // andThen: first this, then after\n        Function<String, String> process = trim\n            .andThen(toUpper)\n            .andThen(exclaim);\n        System.out.println(\"andThen chain: \" + process.apply(\"  hello  \"));\n        // \"  hello  \" -> \"hello\" -> \"HELLO\" -> \"HELLO!\"\n\n        // compose: first before, then this (reverse order)\n        Function<String, String> processReverse = exclaim\n            .compose(toUpper)\n            .compose(trim);\n        System.out.println(\"compose chain: \" + processReverse.apply(\"  hello  \"));\n        // \"  hello  \" -> \"hello\" -> \"HELLO\" -> \"HELLO!\" (same result, different structure)\n\n        // Practical: pipeline of transformations\n        Function<String, Integer> pipeline = trim\n            .andThen(toUpper)\n            .andThen(s -> s.replace(\" \", \"_\"))\n            .andThen(String::length);\n        System.out.println(\"Pipeline result: \" + pipeline.apply(\"  hello world  \"));\n        // \"  hello world  \" -> \"hello world\" -> \"HELLO WORLD\" -> \"HELLO_WORLD\" -> 11\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-combining-functions",
      children: "9.2 Combining Functions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class CombiningFunctions {\n\n    public static void main(String[] args) {\n\n        // Combining predicates\n        Predicate<Integer> isEven = n -> n % 2 == 0;\n        Predicate<Integer> isPositive = n -> n > 0;\n        Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);\n\n        System.out.println(\"4 is even and positive: \" + isEvenAndPositive.test(4));   // true\n        System.out.println(\"-2 is even and positive: \" + isEvenAndPositive.test(-2)); // false\n\n        // Combining consumers\n        Consumer<String> logToConsole = s -> System.out.println(\"Console: \" + s);\n        Consumer<String> logToFile = s -> System.out.println(\"File: \" + s); // simulated\n        Consumer<String> combinedLog = logToConsole.andThen(logToFile);\n        combinedLog.accept(\"Test message\");\n\n        // Combining comparators\n        record Person(String name, int age) {}\n        Comparator<Person> byName = Comparator.comparing(Person::name);\n        Comparator<Person> byAge = Comparator.comparingInt(Person::age);\n        Comparator<Person> byNameThenAge = byName.thenComparing(byAge);\n\n        var people = java.util.List.of(\n            new Person(\"Alice\", 30),\n            new Person(\"Bob\", 25),\n            new Person(\"Alice\", 25)\n        );\n        java.util.List<Person> sorted = people.stream()\n            .sorted(byNameThenAge)\n            .collect(java.util.stream.Collectors.toList());\n        System.out.println(\"Sorted: \" + sorted);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-currying-simulation",
      children: "9.3 Currying Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Currying transforms a function of multiple arguments into a chain of single-argument functions:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class CurryingSimulation {\n\n    public static void main(String[] args) {\n\n        // Standard BiFunction\n        BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;\n        System.out.println(\"BiFunction: \" + add.apply(3, 4)); // 7\n\n        // Curried form: Function<Integer, Function<Integer, Integer>>\n        Function<Integer, Function<Integer, Integer>> curriedAdd =\n            a -> b -> a + b;\n\n        Function<Integer, Integer> add5 = curriedAdd.apply(5);\n        System.out.println(\"add5(3) = \" + add5.apply(3)); // 8\n        System.out.println(\"add5(10) = \" + add5.apply(10)); // 15\n\n        // Three-argument curried function\n        Function<String, Function<String, Function<String, String>>> greeter =\n            greeting -> name -> punctuation ->\n                greeting + \" \" + name + punctuation;\n\n        String result = greeter\n            .apply(\"Hello\")\n            .apply(\"World\")\n            .apply(\"!\");\n        System.out.println(\"Three-arg curried: \" + result);\n\n        // Practical: logger with fixed prefix\n        Function<String, Function<String, String>> logFormatter =\n            level -> message -> \"[\" + level + \"] \" + message;\n\n        Function<String, String> infoLogger = logFormatter.apply(\"INFO\");\n        Function<String, String> errorLogger = logFormatter.apply(\"ERROR\");\n\n        System.out.println(infoLogger.apply(\"System started\"));\n        System.out.println(errorLogger.apply(\"Connection failed\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "94-composing-with-andthen-on-other-functional-types",
      children: ["9.4 Composing with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "andThen"
      }), " on Other Functional Types"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.function.*;\n\npublic class ComposingConsumersAndSuppliers {\n\n    public static void main(String[] args) {\n\n        // Composing consumers\n        Consumer<StringBuilder> addName = sb -> sb.append(\"Alice \");\n        Consumer<StringBuilder> addAge = sb -> sb.append(\"(30)\");\n        Consumer<StringBuilder> fullConsumer = addName.andThen(addAge);\n\n        StringBuilder sb = new StringBuilder();\n        fullConsumer.accept(sb);\n        System.out.println(\"Composed consumer: \" + sb); // Alice (30)\n\n        // Composing unary operators\n        UnaryOperator<String> removeSpaces = s -> s.replace(\" \", \"\");\n        UnaryOperator<String> toLower = String::toLowerCase;\n\n        String processed = removeSpaces\n            .andThen(toLower)\n            .apply(\"Hello World\");\n        System.out.println(\"UnaryOperator chain: \" + processed); // helloworld\n\n        // BinaryOperator andThen\n        BinaryOperator<Integer> sum = Integer::sum;\n        Function<Integer, String> format = n -> \"Result: \" + n;\n        Function<Integer, String> addThenFormat = sum.andThen(format);\n        System.out.println(addThenFormat.apply(10, 20)); // Result: 30\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-optional-in-depth",
      children: "10. Optional in Depth"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-creation-and-basic-retrieval",
      children: "10.1 Creation and Basic Retrieval"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalBasics {\n\n    public static void main(String[] args) {\n\n        // Creating Optional\n        Optional<String> full = Optional.of(\"value\");        // must be non-null\n        Optional<String> empty = Optional.empty();\n        Optional<String> nullable = Optional.ofNullable(null); // safe for null\n\n        // Check presence\n        System.out.println(\"full.isPresent(): \" + full.isPresent());   // true\n        System.out.println(\"empty.isPresent(): \" + empty.isPresent()); // false\n        System.out.println(\"nullable.isEmpty(): \" + nullable.isEmpty()); // true (Java 11+)\n\n        // Retrieval\n        System.out.println(\"full.get(): \" + full.get()); // value → throws if empty\n\n        // Safe retrieval\n        String result = empty.orElse(\"default\");\n        System.out.println(\"orElse: \" + result); // default\n\n        String fromSupplier = empty.orElseGet(() -> computeDefault());\n        System.out.println(\"orElseGet: \" + fromSupplier); // computed default\n\n        // orElseThrow\n        String mustExist = full.orElseThrow(() -> new IllegalStateException(\"Missing\"));\n        System.out.println(\"orElseThrow: \" + mustExist);\n\n        // ifPresent\n        full.ifPresent(s -> System.out.println(\"Found: \" + s));\n\n        // ifPresentOrElse (Java 9+)\n        full.ifPresentOrElse(\n            s -> System.out.println(\"Value: \" + s),\n            () -> System.out.println(\"No value\")\n        );\n    }\n\n    static String computeDefault() {\n        return \"computed default\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "102-map-vs-flatmap",
      children: ["10.2 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " vs ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalMapVsFlatMap {\n\n    public static void main(String[] args) {\n\n        // map → wraps result in Optional\n        Optional<String> name = Optional.of(\"Alice\");\n        Optional<Integer> nameLength = name.map(String::length);\n        System.out.println(\"map result: \" + nameLength); // Optional[5]\n\n        // map with method returning Optional → produces nested Optional\n        Optional<Optional<String>> nested = name.map(s -> Optional.of(s.toUpperCase()));\n        System.out.println(\"nested: \" + nested); // Optional[Optional[ALICE]]\n\n        // flatMap → flattens nested Optional\n        Optional<String> flat = name.flatMap(s -> Optional.of(s.toUpperCase()));\n        System.out.println(\"flatMap: \" + flat); // Optional[ALICE]\n\n        // Real-world: chaining lookups\n        Map<String, String> users = Map.of(\"alice\", \"alice@example.com\");\n        Map<String, String> profiles = Map.of(\"alice\", \"Alice Johnson\");\n\n        Optional<String> email = Optional.of(\"alice\")\n            .flatMap(username -> Optional.ofNullable(users.get(username)));\n        System.out.println(\"Email: \" + email); // Optional[alice@example.com]\n\n        // Chaining multiple flatMaps\n        Optional<String> profile = Optional.of(\"alice\")\n            .flatMap(u -> Optional.ofNullable(users.get(u)))\n            .flatMap(e -> Optional.ofNullable(profiles.get(\"alice\")));\n        System.out.println(\"Profile: \" + profile); // Optional[Alice Johnson]\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "103-filter-on-optional",
      children: ["10.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), " on Optional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalFilter {\n\n    public static void main(String[] args) {\n\n        Optional<String> password = Optional.of(\"securePassword123\");\n\n        // filter → keeps value if predicate matches, else empty\n        Optional<String> valid = password\n            .filter(p -> p.length() >= 8)\n            .filter(p -> p.matches(\".*\\\\d.*\")); // must contain a digit\n        System.out.println(\"Valid password: \" + valid.isPresent()); // true\n\n        Optional<String> weak = Optional.of(\"short\")\n            .filter(p -> p.length() >= 8);\n        System.out.println(\"Weak password: \" + weak.isPresent()); // false\n\n        // Combining filter with map\n        Optional<String> parsed = Optional.of(\"  hello  \")\n            .map(String::strip)\n            .filter(s -> !s.isEmpty())\n            .map(String::toUpperCase);\n        System.out.println(\"Processed: \" + parsed.orElse(\"EMPTY\")); // HELLO\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "104-or-java-9--alternative-optional",
      children: ["10.4 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " (Java 9+) → Alternative Optional"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalOr {\n\n    public static void main(String[] args) {\n\n        // or → if this Optional is empty, produce another Optional\n        Optional<String> primary = Optional.empty();\n        Optional<String> fallback = Optional.of(\"fallback value\");\n\n        Optional<String> result = primary.or(() -> fallback);\n        System.out.println(\"or: \" + result.get()); // fallback value\n\n        // Chaining fallbacks\n        Optional<String> findFromCache = Optional.empty();\n        Optional<String> findFromDb = Optional.of(\"db value\");\n        Optional<String> findFromApi = Optional.of(\"api value\");\n\n        Optional<String> found = findFromCache\n            .or(() -> findFromDb)\n            .or(() -> findFromApi);\n        System.out.println(\"Chain: \" + found.get()); // db value\n\n        // Practical: try multiple sources\n        Optional<String> config = lookupFromEnv()\n            .or(() -> lookupFromProperties())\n            .or(() -> Optional.of(\"default\"));\n        System.out.println(\"Config: \" + config.get());\n    }\n\n    static Optional<String> lookupFromEnv() {\n        return Optional.empty(); // simulate missing env var\n    }\n\n    static Optional<String> lookupFromProperties() {\n        return Optional.of(\"from-properties\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "105-stream-on-optional-java-9",
      children: ["10.5 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " on Optional (Java 9+)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\nimport java.util.stream.*;\n\npublic class OptionalStream {\n\n    public static void main(String[] args) {\n\n        List<Optional<Integer>> optionals = List.of(\n            Optional.of(10),\n            Optional.empty(),\n            Optional.of(20),\n            Optional.of(30),\n            Optional.empty()\n        );\n\n        // Traditional approach\n        List<Integer> values1 = optionals.stream()\n            .filter(Optional::isPresent)\n            .map(Optional::get)\n            .collect(Collectors.toList());\n\n        // Using Optional::stream\n        List<Integer> values2 = optionals.stream()\n            .flatMap(Optional::stream)\n            .collect(Collectors.toList());\n\n        System.out.println(\"Values: \" + values2); // [10, 20, 30]\n\n        // Practical: parsing strings\n        List<String> inputs = List.of(\"42\", \"abc\", \"100\", \"xyz\", \"55\");\n        List<Integer> parsed = inputs.stream()\n            .map(OptionalStream::tryParse)\n            .flatMap(Optional::stream)\n            .collect(Collectors.toList());\n        System.out.println(\"Parsed: \" + parsed); // [42, 100, 55]\n    }\n\n    static Optional<Integer> tryParse(String s) {\n        try {\n            return Optional.of(Integer.parseInt(s));\n        } catch (NumberFormatException e) {\n            return Optional.empty();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "106-anti-patterns-and-best-practices",
      children: "10.6 Anti-Patterns and Best Practices"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.*;\n\npublic class OptionalBestPractices {\n\n    record Address(String city, String zipCode) {}\n    record Person(String name, Address address) {}\n\n    public static void main(String[] args) {\n\n        // BAD: using get() without checking\n        // Optional<String> opt = Optional.ofNullable(getValue());\n        // String val = opt.get(); // throws if empty\n\n        // GOOD: use orElse/orElseGet\n        String val = Optional.ofNullable(getValue()).orElse(\"default\");\n\n        // BAD: nested isPresent + get\n        Optional<Person> person = findPerson();\n        if (person.isPresent()) {\n            Address addr = person.get().address();\n            if (addr != null) {\n                System.out.println(addr.city());\n            }\n        }\n\n        // GOOD: fluent flatMap + map\n        person.flatMap(p -> Optional.ofNullable(p.address()))\n            .map(Address::city)\n            .ifPresent(System.out::println);\n\n        // BAD: Optional as method parameter\n        // void setConfig(Optional<String> value) { ... }\n\n        // GOOD: method overloads\n        // void setConfig(String value) { ... }\n        // void setConfig() { ... }\n\n        // BAD: Optional as field type\n        // public class User {\n        //     private Optional<String> middleName; // DON'T\n        // }\n\n        // BAD: returning null instead of Optional\n        // public Optional<String> findName() { return null; } // DON'T\n\n        // GOOD: return empty Optional\n        // public Optional<String> findName() { return Optional.empty(); }\n    }\n\n    static String getValue() { return null; }\n    static Optional<Person> findPerson() {\n        return Optional.of(new Person(\"Alice\", new Address(\"NYC\", \"10001\")));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-completablefuture",
      children: "11. CompletableFuture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture<T>"
      }), " is a future that may be explicitly completed and supports functional composition for asynchronous programming."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-basic-creation",
      children: "11.1 Basic Creation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class CompletableFutureBasics {\n\n    public static void main(String[] args) throws Exception {\n\n        // supplyAsync → runs on ForkJoinPool.commonPool()\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            sleep(100);\n            return \"Hello from async!\";\n        });\n\n        // Block and get\n        String result = future.get();\n        System.out.println(\"Result: \" + result);\n\n        // With custom executor\n        ExecutorService executor = Executors.newFixedThreadPool(4);\n        CompletableFuture<Integer> customFuture = CompletableFuture.supplyAsync(() -> {\n            sleep(50);\n            return 42;\n        }, executor);\n\n        System.out.println(\"Custom: \" + customFuture.get());\n        executor.shutdown();\n    }\n\n    static void sleep(long millis) {\n        try { Thread.sleep(millis); } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-callback-chains",
      children: "11.2 Callback Chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class FutureCallbacks {\n\n    public static void main(String[] args) throws Exception {\n\n        ExecutorService executor = Executors.newFixedThreadPool(4);\n\n        // thenApply → transform result (like map)\n        CompletableFuture<String> greeting = CompletableFuture\n            .supplyAsync(() -> \"World\", executor)\n            .thenApply(name -> \"Hello, \" + name)\n            .thenApply(String::toUpperCase);\n        System.out.println(\"thenApply: \" + greeting.get()); // HELLO, WORLD\n\n        // thenAccept → consume result (like forEach, no return)\n        CompletableFuture\n            .supplyAsync(() -> 42, executor)\n            .thenAccept(n -> System.out.println(\"Answer: \" + n))\n            .get(); // wait for completion\n\n        // thenRun → run after completion (no result consumed)\n        CompletableFuture\n            .supplyAsync(() -> \"data\", executor)\n            .thenRun(() -> System.out.println(\"Operation complete\"))\n            .get();\n\n        // thenCompose → flatMap for futures (avoid nested CompletableFuture)\n        CompletableFuture<String> composed = CompletableFuture\n            .supplyAsync(() -> \"user/123\", executor)\n            .thenCompose(path -> fetchUserData(path, executor));\n        System.out.println(\"Composed: \" + composed.get());\n\n        executor.shutdown();\n    }\n\n    static CompletableFuture<String> fetchUserData(String path, Executor exec) {\n        return CompletableFuture.supplyAsync(() -> \"Data for \" + path, exec);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-combining-multiple-futures",
      children: "11.3 Combining Multiple Futures"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class CombiningFutures {\n\n    public static void main(String[] args) throws Exception {\n\n        ExecutorService exec = Executors.newFixedThreadPool(4);\n\n        // thenCombine → combine results of two independent futures\n        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> \"Hello\", exec);\n        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> \"World\", exec);\n\n        CompletableFuture<String> combined = future1\n            .thenCombine(future2, (a, b) -> a + \" \" + b);\n        System.out.println(\"Combined: \" + combined.get()); // Hello World\n\n        // thenAcceptBoth → consume both results\n        future1.thenAcceptBoth(future2, (a, b) ->\n            System.out.println(a + \" and \" + b)\n        ).get();\n\n        // allOf → wait for all to complete\n        CompletableFuture<Integer> f1 = CompletableFuture.supplyAsync(() -> 1, exec);\n        CompletableFuture<Integer> f2 = CompletableFuture.supplyAsync(() -> 2, exec);\n        CompletableFuture<Integer> f3 = CompletableFuture.supplyAsync(() -> 3, exec);\n\n        CompletableFuture<Void> allDone = CompletableFuture.allOf(f1, f2, f3);\n        // allOf returns Void → gather results manually\n        CompletableFuture<Integer> sum = allDone.thenApply(v ->\n            f1.join() + f2.join() + f3.join()\n        );\n        System.out.println(\"Sum: \" + sum.get()); // 6\n\n        // anyOf → completes when any completes\n        CompletableFuture<Object> first = CompletableFuture.anyOf(f1, f2, f3);\n        System.out.println(\"First completed: \" + first.get());\n\n        exec.shutdown();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "114-error-handling",
      children: "11.4 Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class FutureErrorHandling {\n\n    public static void main(String[] args) throws Exception {\n\n        ExecutorService exec = Executors.newFixedThreadPool(4);\n\n        // exceptionally → recover from a specific exception\n        CompletableFuture<Integer> safe = CompletableFuture\n            .supplyAsync(() -> {\n                if (Math.random() > 0.5) throw new RuntimeException(\"Failed\");\n                return 100;\n            }, exec)\n            .exceptionally(ex -> {\n                System.out.println(\"Recovering from: \" + ex.getMessage());\n                return -1; // fallback value\n            });\n        System.out.println(\"Safe result: \" + safe.get());\n\n        // handle → always invoked (success or failure), can transform\n        CompletableFuture<String> handled = CompletableFuture\n            .supplyAsync(() -> {\n                return \"42\"; // try changing to throw new RuntimeException(\"fail\");\n            }, exec)\n            .handle((result, ex) -> {\n                if (ex != null) {\n                    return \"Fallback: \" + ex.getMessage();\n                }\n                return \"Processed: \" + result;\n            });\n        System.out.println(\"Handled: \" + handled.get());\n\n        // whenComplete → side effect on completion (doesn't transform result)\n        CompletableFuture<String> logged = CompletableFuture\n            .supplyAsync(() -> \"test data\", exec)\n            .whenComplete((result, ex) -> {\n                if (ex != null) {\n                    System.err.println(\"Error: \" + ex.getMessage());\n                } else {\n                    System.out.println(\"Completed with: \" + result);\n                }\n            });\n        System.out.println(\"Logged result: \" + logged.get());\n\n        exec.shutdown();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "115-timeouts-and-completing",
      children: "11.5 Timeouts and Completing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\n\npublic class FutureTimeouts {\n\n    public static void main(String[] args) throws Exception {\n\n        ExecutorService exec = Executors.newFixedThreadPool(4);\n\n        // completeOnTimeout (Java 9+) → fallback value if timeout\n        CompletableFuture<String> withTimeout = CompletableFuture\n            .supplyAsync(() -> {\n                sleep(200);\n                return \"slow result\";\n            }, exec)\n            .completeOnTimeout(\"timeout fallback\", 100, TimeUnit.MILLISECONDS);\n        System.out.println(\"Timeout test: \" + withTimeout.get()); // timeout fallback\n\n        // orTimeout (Java 9+) → throws TimeoutException\n        CompletableFuture<String> throwsTimeout = CompletableFuture\n            .supplyAsync(() -> {\n                sleep(200);\n                return \"too slow\";\n            }, exec)\n            .orTimeout(50, TimeUnit.MILLISECONDS);\n\n        try {\n            throwsTimeout.get();\n        } catch (ExecutionException e) {\n            System.out.println(\"Caught: \" + e.getCause().getClass().getSimpleName());\n            // TimeoutException\n        }\n\n        // completeAsync (Java 9+)\n        CompletableFuture<String> custom = new CompletableFuture<>();\n        custom.completeAsync(() -> \"async complete\", exec);\n        System.out.println(\"completeAsync: \" + custom.get());\n\n        exec.shutdown();\n    }\n\n    static void sleep(long millis) {\n        try { Thread.sleep(millis); } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "116-real-world-pattern-parallel-api-calls",
      children: "11.6 Real-World Pattern: Parallel API Calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.util.concurrent.*;\nimport java.util.*;\n\npublic class ParallelApiPattern {\n\n    record User(int id, String name) {}\n    record Order(int id, double total) {}\n    record UserDashboard(User user, List<Order> orders, double totalSpent) {}\n\n    private static final Random RANDOM = new Random();\n\n    public static void main(String[] args) throws Exception {\n\n        ExecutorService exec = Executors.newFixedThreadPool(8);\n\n        // Simulate fetching user and orders in parallel\n        CompletableFuture<User> userFuture = CompletableFuture\n            .supplyAsync(() -> fetchUser(1), exec);\n\n        CompletableFuture<List<Order>> ordersFuture = CompletableFuture\n            .supplyAsync(() -> fetchOrders(1), exec);\n\n        // Combine results into a dashboard\n        CompletableFuture<UserDashboard> dashboard = userFuture\n            .thenCombine(ordersFuture, (user, orders) -> {\n                double total = orders.stream()\n                    .mapToDouble(Order::total)\n                    .sum();\n                return new UserDashboard(user, orders, total);\n            });\n\n        UserDashboard result = dashboard.get();\n        System.out.println(\"Dashboard: \" + result);\n\n        // Parallel calls with timeout per call\n        List<CompletableFuture<Integer>> tasks = List.of(\n            CompletableFuture.supplyAsync(() -> callService(\"A\", 100), exec)\n                .completeOnTimeout(-1, 150, TimeUnit.MILLISECONDS),\n            CompletableFuture.supplyAsync(() -> callService(\"B\", 200), exec)\n                .completeOnTimeout(-1, 150, TimeUnit.MILLISECONDS),\n            CompletableFuture.supplyAsync(() -> callService(\"C\", 50), exec)\n                .completeOnTimeout(-1, 150, TimeUnit.MILLISECONDS)\n        );\n\n        List<Integer> results = tasks.stream()\n            .map(CompletableFuture::join)\n            .collect(ArrayList::new, ArrayList::add, ArrayList::addAll);\n\n        System.out.println(\"Parallel results: \" + results);\n\n        exec.shutdown();\n    }\n\n    static User fetchUser(int id) {\n        sleep(100);\n        return new User(id, \"User\" + id);\n    }\n\n    static List<Order> fetchOrders(int userId) {\n        sleep(150);\n        return List.of(\n            new Order(1, 50.0),\n            new Order(2, 75.0),\n            new Order(3, 25.0)\n        );\n    }\n\n    static Integer callService(String name, int delay) {\n        sleep(delay);\n        return RANDOM.nextInt(100);\n    }\n\n    static void sleep(long millis) {\n        try { Thread.sleep(millis); } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-functional-patterns-in-spring-boot",
      children: "12. Functional Patterns in Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-lambda-based-route-definitions-spring-web-mvc",
      children: "12.1 Lambda-Based Route Definitions (Spring Web MVC)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.servlet.function.*;\nimport org.springframework.web.servlet.function.ServerResponse;\nimport jakarta.servlet.ServletException;\nimport java.io.IOException;\n\n@SpringBootApplication\npublic class FunctionalRoutesApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(FunctionalRoutesApplication.class, args);\n    }\n\n    @Bean\n    public RouterFunction<ServerResponse> functionalEndpoints() {\n\n        // Define handlers as lambdas\n        HandlerFunction<ServerResponse> helloHandler = request ->\n            ServerResponse.ok().body(\"Hello from functional endpoint!\");\n\n        HandlerFunction<ServerResponse> greetHandler = request -> {\n            String name = request.param(\"name\").orElse(\"Guest\");\n            return ServerResponse.ok().body(\"Hello, \" + name + \"!\");\n        };\n\n        HandlerFunction<ServerResponse> jsonHandler = request ->\n            ServerResponse.ok()\n                .header(\"Content-Type\", \"application/json\")\n                .body(\"{\\\"message\\\": \\\"JSON response\\\"}\");\n\n        // Compose routes using RouterFunctions\n        return RouterFunctions.route()\n            .GET(\"/func/hello\", helloHandler)\n            .GET(\"/func/greet\", greetHandler)\n            .GET(\"/func/json\", jsonHandler)\n            .POST(\"/func/data\", request -> {\n                String body = request.body(String.class);\n                return ServerResponse.ok().body(\"Received: \" + body);\n            })\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-routerfunction-with-predicates-and-nested-routes",
      children: "12.2 RouterFunction with Predicates and Nested Routes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.function.*;\n\nimport static org.springframework.web.servlet.function.RequestPredicates.*;\nimport static org.springframework.web.servlet.function.RouterFunctions.route;\n\n@Configuration\npublic class AdvancedRouterConfiguration {\n\n    @Bean\n    public RouterFunction<ServerResponse> advancedRoutes() {\n\n        // Nested routes with common path\n        RouterFunction<ServerResponse> userRoutes = route()\n            .GET(\"/users\", request -> {\n                // Simulated user list\n                return ServerResponse.ok().body(\"[{\\\"id\\\":1,\\\"name\\\":\\\"Alice\\\"}]\");\n            })\n            .GET(\"/users/{id}\", request -> {\n                String id = request.pathVariable(\"id\");\n                return ServerResponse.ok().body(\"{\\\"id\\\":\" + id + \",\\\"name\\\":\\\"User\" + id + \"\\\"}\");\n            })\n            .POST(\"/users\", request -> {\n                String body = request.body(String.class);\n                return ServerResponse.created(java.net.URI.create(\"/users/3\"))\n                    .body(\"Created: \" + body);\n            })\n            .build();\n\n        // Routes with content-type predicates\n        RouterFunction<ServerResponse> contentRoutes = route()\n            .GET(\"/api/data\", accept(\"application/json\"),\n                request -> ServerResponse.ok().body(\"{\\\"format\\\":\\\"json\\\"}\"))\n            .GET(\"/api/data\", accept(\"application/xml\"),\n                request -> ServerResponse.ok().body(\"<data><format>xml</format></data>\"))\n            .build();\n\n        // Combined routes with error handling\n        return route()\n            .add(userRoutes)\n            .add(contentRoutes)\n            .filter((request, next) -> {\n                // Logging filter\n                System.out.println(\"Request: \" + request.method() + \" \" + request.path());\n                return next.handle(request);\n            })\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.h3, {
      id: "123-bean-factory-methods-using-lambdas",
      children: ["12.3 ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " Factory Methods Using Lambdas"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport java.util.function.*;\nimport java.time.LocalDateTime;\nimport java.time.format.DateTimeFormatter;\nimport java.util.*;\n\n@Configuration\npublic class BeanFactoryFunctions {\n\n    @Bean\n    public Supplier<LocalDateTime> currentTimeSupplier() {\n        return LocalDateTime::now;\n    }\n\n    @Bean\n    public Function<String, String> sanitizer() {\n        return input -> input == null ? \"\" : input.strip().toLowerCase();\n    }\n\n    @Bean\n    public Predicate<String> emailValidator() {\n        return email -> email != null && email.matches(\"^[A-Za-z0-9+_.-]+@(.+)$\");\n    }\n\n    @Bean\n    public Consumer<String> auditLogger() {\n        return message ->\n            System.out.println(\"[\" + LocalDateTime.now()\n                .format(DateTimeFormatter.ISO_LOCAL_DATE_TIME) + \"] \" + message);\n    }\n\n    @Bean\n    public UnaryOperator<String> templateEngine() {\n        return template -> template.replace(\"{{date}}\", LocalDateTime.now().toString());\n    }\n\n    @Bean\n    public BinaryOperator<String> wordCombiner() {\n        return (word1, word2) -> word1 + \"-\" + word2;\n    }\n\n    @Bean\n    public Function<List<String>, Map<Integer, List<String>>> lengthGrouper() {\n        return words -> words.stream()\n            .collect(java.util.stream.Collectors.groupingBy(String::length));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-using-functional-beans",
      children: "12.4 Using Functional Beans"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Service;\nimport java.util.function.*;\nimport java.util.*;\n\n@Service\npublic class UserService {\n\n    private final Predicate<String> emailValidator;\n    private final Function<String, String> sanitizer;\n    private final Consumer<String> auditLogger;\n\n    public UserService(\n            Predicate<String> emailValidator,\n            Function<String, String> sanitizer,\n            Consumer<String> auditLogger) {\n        this.emailValidator = emailValidator;\n        this.sanitizer = sanitizer;\n        this.auditLogger = auditLogger;\n    }\n\n    private final Map<String, User> users = new HashMap<>();\n\n    public record User(String email, String displayName) {}\n\n    public Optional<User> registerUser(String rawEmail, String displayName) {\n        String sanitizedEmail = sanitizer.apply(rawEmail);\n\n        auditLogger.accept(\"Attempting registration for: \" + sanitizedEmail);\n\n        if (!emailValidator.test(sanitizedEmail)) {\n            auditLogger.accept(\"Registration failed: invalid email - \" + sanitizedEmail);\n            return Optional.empty();\n        }\n\n        User user = new User(sanitizedEmail, sanitizer.apply(displayName));\n        users.put(sanitizedEmail, user);\n        auditLogger.accept(\"User registered: \" + sanitizedEmail);\n        return Optional.of(user);\n    }\n\n    public Optional<User> findByEmail(String rawEmail) {\n        String sanitizedEmail = sanitizer.apply(rawEmail);\n        return Optional.ofNullable(users.get(sanitizedEmail));\n    }\n\n    public List<String> findInvalidEmails(List<String> emails) {\n        return emails.stream()\n            .map(sanitizer)\n            .filter(emailValidator.negate())\n            .toList();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "125-stream-based-repository-pattern",
      children: "12.5 Stream-Based Repository Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Repository;\nimport jakarta.annotation.PostConstruct;\nimport java.util.*;\nimport java.util.concurrent.CopyOnWriteArrayList;\nimport java.util.stream.*;\n\n@Repository\npublic class ProductRepository {\n\n    private final List<Product> products = new CopyOnWriteArrayList<>();\n\n    public record Product(Long id, String name, String category, double price, int stock) {}\n\n    @PostConstruct\n    public void init() {\n        products.addAll(List.of(\n            new Product(1L, \"Laptop\", \"Electronics\", 1200.00, 10),\n            new Product(2L, \"Phone\", \"Electronics\", 800.00, 25),\n            new Product(3L, \"Shirt\", \"Clothing\", 40.00, 100),\n            new Product(4L, \"Tablet\", \"Electronics\", 450.00, 15),\n            new Product(5L, \"Pants\", \"Clothing\", 80.00, 50)\n        ));\n    }\n\n    public List<Product> findByCategory(String category) {\n        return products.stream()\n            .filter(p -> p.category().equalsIgnoreCase(category))\n            .collect(Collectors.toList());\n    }\n\n    public List<Product> findInStock() {\n        return products.stream()\n            .filter(p -> p.stock() > 0)\n            .collect(Collectors.toList());\n    }\n\n    public Optional<Product> findByName(String name) {\n        return products.stream()\n            .filter(p -> p.name().equalsIgnoreCase(name))\n            .findFirst();\n    }\n\n    public Map<String, List<Product>> groupByCategory() {\n        return products.stream()\n            .collect(Collectors.groupingBy(Product::category));\n    }\n\n    public Map<String, Double> averagePriceByCategory() {\n        return products.stream()\n            .collect(Collectors.groupingBy(\n                Product::category,\n                Collectors.averagingDouble(Product::price)\n            ));\n    }\n\n    public Map<String, Long> stockCountByCategory() {\n        return products.stream()\n            .collect(Collectors.groupingBy(\n                Product::category,\n                Collectors.summingLong(Product::stock)\n            ));\n    }\n\n    public List<Product> search(String query, double maxPrice) {\n        return products.stream()\n            .filter(p -> p.name().toLowerCase().contains(query.toLowerCase()))\n            .filter(p -> p.price() <= maxPrice)\n            .sorted(Comparator.comparingDouble(Product::price))\n            .collect(Collectors.toList());\n    }\n\n    public Optional<Product> cheapest() {\n        return products.stream()\n            .min(Comparator.comparingDouble(Product::price));\n    }\n\n    public List<Product> getPage(int page, int size) {\n        return products.stream()\n            .skip((long) (page - 1) * size)\n            .limit(size)\n            .collect(Collectors.toList());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "126-completablefuture-in-spring-service",
      children: "12.6 CompletableFuture in Spring Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.stereotype.Service;\nimport org.springframework.scheduling.annotation.Async;\nimport org.springframework.scheduling.annotation.EnableAsync;\nimport org.springframework.context.annotation.Configuration;\nimport java.util.concurrent.*;\nimport java.util.*;\n\n@EnableAsync\n@Configuration\nclass AsyncConfig {}\n\n@Service\npublic class DashboardService {\n\n    private final Random random = new Random();\n\n    @Async\n    public CompletableFuture<Map<String, Object>> buildDashboard() {\n        CompletableFuture<Integer> userCount = fetchUserCount();\n        CompletableFuture<Double> revenue = fetchRevenue();\n        CompletableFuture<Integer> activeSessions = fetchActiveSessions();\n\n        return CompletableFuture\n            .allOf(userCount, revenue, activeSessions)\n            .thenApply(v -> {\n                Map<String, Object> dashboard = new LinkedHashMap<>();\n                dashboard.put(\"users\", userCount.join());\n                dashboard.put(\"revenue\", revenue.join());\n                dashboard.put(\"activeSessions\", activeSessions.join());\n                dashboard.put(\"generatedAt\", System.currentTimeMillis());\n                return dashboard;\n            })\n            .completeOnTimeout(Map.of(\"error\", \"timeout\"), 5, TimeUnit.SECONDS);\n    }\n\n    @Async\n    public CompletableFuture<Integer> fetchUserCount() {\n        simulateDelay(500);\n        return CompletableFuture.completedFuture(random.nextInt(10000));\n    }\n\n    @Async\n    public CompletableFuture<Double> fetchRevenue() {\n        simulateDelay(800);\n        return CompletableFuture.completedFuture(random.nextDouble() * 100000);\n    }\n\n    @Async\n    public CompletableFuture<Integer> fetchActiveSessions() {\n        simulateDelay(300);\n        return CompletableFuture.completedFuture(random.nextInt(5000));\n    }\n\n    private void simulateDelay(long millis) {\n        try { Thread.sleep(millis); } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-summary",
      children: "13. Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the complete landscape of Java functional programming:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Functional Interfaces"
      }), " → The six core interfaces (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Predicate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Function"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Consumer"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Supplier"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UnaryOperator"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BinaryOperator"
      }), ") and their primitive (", (0,jsx_runtime.jsx)(_components.code, {
        children: "IntPredicate"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "IntFunction"
      }), ", etc.) and bi-argument variants provide a reusable vocabulary for lambda expressions. Custom functional interfaces annotated with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@FunctionalInterface"
      }), " let you extend this vocabulary."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Lambda Syntax"
      }), " → Five syntactic forms cover every case from single-expression lambdas to multi-statement block bodies. Type inference reduces verbosity while the effectively-final capture rule ensures thread safety. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "this"
      }), " reference in a lambda refers to the enclosing instance, not the lambda itself → a critical distinction from anonymous classes."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Method References"
      }), " → Four kinds (", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::staticMethod"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "instance::method"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::instanceMethod"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Class::new"
      }), ") provide concise alternatives when a lambda merely delegates to an existing method."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Stream Pipeline"
      }), " → The three-phase architecture (source, intermediate ops, terminal op) with lazy evaluation enables efficient bulk operations. Stateful operations like ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sorted"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "distinct"
      }), " introduce ordering constraints that affect parallel performance. Short-circuiting operations (", (0,jsx_runtime.jsx)(_components.code, {
        children: "findFirst"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "anyMatch"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limit"
      }), ") can terminate early for efficiency."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Map/FlatMap"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " performs one-to-one transformation; ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " performs one-to-many expansion with flattening. Both extend to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " produces ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional<Optional<R>>"
      }), " while ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " eliminates nesting. Java 9's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional::stream"
      }), " bridges the gap between ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Stream"
      }), " of optionals."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Filter/Predicate"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Predicate.negate()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".and()"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: ".or()"
      }), " enable declarative composition of filtering logic. Java 9's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "takeWhile"
      }), "/", (0,jsx_runtime.jsx)(_components.code, {
        children: "dropWhile"
      }), " process sorted stream prefixes efficiently."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Reduce"
      }), " → Three overloads serve different scenarios: identity + accumulator for safe reduction with a default, no-identity for potentially empty streams (returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), "), and three-argument reduce for parallel-friendly reduction that changes the result type. Mutable reduction with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "collect"
      }), " handles accumulation into mutable containers."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "GroupingBy"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Collectors.groupingBy"
      }), " creates maps from streams. Multi-level grouping nests collectors. Downstream collectors (", (0,jsx_runtime.jsx)(_components.code, {
        children: "counting"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "summingInt"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mapping"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filtering"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "averagingDouble"
      }), ") compute per-group aggregates. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "groupingByConcurrent"
      }), " enables parallel-friendly grouping."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Function Composition"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "andThen"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "compose"
      }), " chain functions left-to-right and right-to-left respectively. Currying simulation via nested lambda returns enables partial application."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Optional"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "map"
      }), " transforms, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "flatMap"
      }), " chains optional-producing operations, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "filter"
      }), " conditionally retains values, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "or"
      }), " (Java 9+) provides alternative optionals, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "stream()"
      }), " converts an optional into a zero-or-one-element stream. Best practices include preferring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orElseGet"
      }), " over ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orElse"
      }), " for expensive defaults and avoiding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Optional"
      }), " as field types or method parameters."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "CompletableFuture"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "supplyAsync"
      }), " launches async tasks. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenApply"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenAccept"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenRun"
      }), " chain dependent operations. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenCompose"
      }), " avoids nested futures. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenCombine"
      }), " merges two independent futures. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "allOf"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "anyOf"
      }), " coordinate multiple futures. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "exceptionally"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "handle"
      }), " provide error recovery. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "completeOnTimeout"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "orTimeout"
      }), " (Java 9+) control timeout behavior."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring Boot Patterns"
      }), " → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RouterFunction"
      }), " replaces annotations with lambda-based route definitions. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Bean"
      }), " factory methods return functional interface implementations. ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " methods returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture<T>"
      }), " compose non-blocking service layers."]
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
      id: "14-exercises",
      children: "14. Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What constraint does the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@FunctionalInterface"
          }), " annotation enforce, and what happens if you compile a class annotated with it that has two abstract methods?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Explain the difference in behavior of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "this"
          }), " inside a lambda expression versus an anonymous class. Why does this matter for method calls?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is the \"effectively final\" rule for variable capture in lambdas? Can a lambda modify a captured local variable? Can it modify a captured field?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Describe the three-argument ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Stream.reduce(U identity, BiFunction<U,? super T,U> accumulator, BinaryOperator<U> combiner)"
          }), " → when is the combiner used, and why is it needed?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "What is lazy evaluation in the context of stream pipelines? How does it enable short-circuiting and operation fusion?"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Distinguish between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "map"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "flatMap"
          }), " on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Stream"
          }), " and on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Optional"
          }), ". Provide a signature comparison."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["What is the difference between ", (0,jsx_runtime.jsx)(_components.code, {
            children: "orTimeout"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "completeOnTimeout"
          }), " on ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture"
          }), "?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
            children: "groupingByConcurrent"
          }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
            children: "groupingBy"
          }), ", and when should you use it?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Compare the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Function.compose"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Function.andThen"
          }), " methods. Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "f.andThen(g)"
          }), ", which function executes first?"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["In Spring Boot, what is ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RouterFunction"
          }), " and how does it contrast with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@RequestMapping"
          }), " annotations?"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "11",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Word frequency counter."
          }), " Write a method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Map<String, Long> wordFrequency(List<String> lines)"
          }), " that receives a list of lines of text, splits each line into words (using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "\\\\W+"
          }), " as delimiter), converts to lowercase, and returns a map of word to count, sorted by count descending."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Prime number pipeline."
          }), " Write a method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "List<Integer> findPrimes(int limit)"
          }), " that uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "IntStream.rangeClosed"
          }), " and a filter with a primality-test predicate to return all primes up to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "limit"
          }), ". Then use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collectors.groupingBy"
          }), " to group primes by the number of digits they contain."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "User enrichment service."
          }), " Given ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture<User> findUser(int id)"
          }), " and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture<List<Order>> findOrders(int userId)"
          }), ", write a method ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture<UserWithOrders> enrich(int id)"
          }), " that fetches both in parallel and combines them."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Validation pipeline."
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Validator<String>"
          }), " functional interface with methods ", (0,jsx_runtime.jsx)(_components.code, {
            children: "and"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "or"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "negate"
          }), " (as default methods). Implement validators for: non-null, non-empty, length <= 100, matches a given regex. Then chain them together to validate a user-input field."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Optional flatMap chaining."
          }), " Given these methods:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-java",
            children: "Optional<Customer> findCustomer(int id);\nOptional<Address> getShippingAddress(Customer c);\nOptional<String> formatAddress(Address a);\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["Write a single fluent expression that retrieves a formatted shipping address for a customer by ID, returning ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Optional<String>"
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
            children: "Custom downstream collector."
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collector<Employee, ?, Map<String, DoubleSummaryStatistics>>"
          }), " that groups employees by department and computes salary statistics per department. Then use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Collectors.groupingBy"
          }), " with your custom collector."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Fork-join data pipeline."
          }), " Build a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture"
          }), "-based pipeline that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Fetches a list of product IDs (simulate 1s delay)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For each product ID, fetches product details in parallel (simulate 200ms per product)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Filters products to only those in stock"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Groups by category"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Computes average price per category\nReturn ", (0,jsx_runtime.jsx)(_components.code, {
              children: "CompletableFuture<Map<String, Double>>"
            }), ". All steps must be non-blocking."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stream-based event log analyzer."
          }), " Given a stream of ", (0,jsx_runtime.jsx)(_components.code, {
            children: "LogEvent"
          }), " records with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "timestamp"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "severity"
          }), " (INFO, WARN, ERROR), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "source"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "message"
          }), ", write a pipeline that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Filters to the last 24 hours"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Groups by severity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "For each severity, finds the top 3 most frequent source components"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Joins their messages into a summary string\nUse ", (0,jsx_runtime.jsx)(_components.code, {
              children: "groupingBy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "counting"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "sorted"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "limit"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "joining"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Monadic parser with Optional."
          }), " Implement a simple parser that takes a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "String"
          }), " and returns ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Optional<ParsedData>"
          }), ". The parser should internally chain three parsing steps using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "flatMap"
          }), ":"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract a number from position 0-4 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"12345abcde\""
            }), " -> ", (0,jsx_runtime.jsx)(_components.code, {
              children: "12345"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract a letter from position 5 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "'a'"
            }), ")"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Extract another number from position 6-9 (", (0,jsx_runtime.jsx)(_components.code, {
              children: "\"6789\""
            }), ")\nIf any step fails, the entire parse returns ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Optional.empty()"
            }), "."]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spring Boot functional CRUD."
          }), " Implement a complete Spring Boot application using only ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RouterFunction"
          }), " (no ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@RestController"
          }), "). The application should manage a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Todo"
          }), " resource with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "id"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "title"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "completed"
          }), ", and support GET all, GET by id, POST create, PUT update, DELETE. Store todos in a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CopyOnWriteArrayList"
          }), ". Test via curl commands in a main-method startup comment."]
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