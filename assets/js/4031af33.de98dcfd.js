"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[14572],{

/***/ 14287
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_44_reactor_md_403_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-44-reactor-md-403.json
const site_docs_courses_java_44_reactor_md_403_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/44-reactor","title":"Chapter 44: Project Reactor & Reactive Streams","description":"Previous Spring WebFlux","source":"@site/docs/courses/java/44-reactor.md","sourceDirName":"courses/java","slug":"/java/44-reactor","permalink":"/ai-engineering-journey/java/44-reactor","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":44,"frontMatter":{"id":"44-reactor","slug":"/java/44-reactor","title":"Chapter 44: Project Reactor & Reactive Streams","sidebar_label":"Chapter 44: Project Reactor & Reactive Streams","sidebar_position":44},"sidebar":"course-java","previous":{"title":"Distributed Tracing & Observability","permalink":"/ai-engineering-journey/java/43-tracing"},"next":{"title":"Chapter 45: Spring WebFlux","permalink":"/ai-engineering-journey/java/45-webflux"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/44-reactor.md


const frontMatter = {
	id: '44-reactor',
	slug: '/java/44-reactor',
	title: 'Chapter 44: Project Reactor & Reactive Streams',
	sidebar_label: 'Chapter 44: Project Reactor & Reactive Streams',
	sidebar_position: 44
};
const contentTitle = 'Chapter 44: Project Reactor & Reactive Streams';

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
  "value": "1. The Reactive Manifesto and Why Reactive Matters",
  "id": "1-the-reactive-manifesto-and-why-reactive-matters",
  "level": 2
}, {
  "value": "1.1 The Problem with Blocking I/O",
  "id": "11-the-problem-with-blocking-io",
  "level": 3
}, {
  "value": "1.2 The Reactive Streams Specification",
  "id": "12-the-reactive-streams-specification",
  "level": 3
}, {
  "value": "1.3 Project Reactor",
  "id": "13-project-reactor",
  "level": 3
}, {
  "value": "2. Creating Publishers",
  "id": "2-creating-publishers",
  "level": 2
}, {
  "value": "2.1 Creating Flux Instances",
  "id": "21-creating-flux-instances",
  "level": 3
}, {
  "value": "2.2 Understanding Subscription Lifecycle",
  "id": "22-understanding-subscription-lifecycle",
  "level": 3
}, {
  "value": "2.3 Lambda-Based Subscribers",
  "id": "23-lambda-based-subscribers",
  "level": 3
}, {
  "value": "2.4 Disposable and Lifecycle Management",
  "id": "24-disposable-and-lifecycle-management",
  "level": 3
}, {
  "value": "3. Core Operators",
  "id": "3-core-operators",
  "level": 2
}, {
  "value": "3.1 Transformation Operators",
  "id": "31-transformation-operators",
  "level": 3
}, {
  "value": "3.2 Filtering Operators",
  "id": "32-filtering-operators",
  "level": 3
}, {
  "value": "3.3 Combination Operators",
  "id": "33-combination-operators",
  "level": 3
}, {
  "value": "3.4 Conditional Operators",
  "id": "34-conditional-operators",
  "level": 3
}, {
  "value": "3.5 Mathematical and Aggregating Operators",
  "id": "35-mathematical-and-aggregating-operators",
  "level": 3
}, {
  "value": "4. Backpressure",
  "id": "4-backpressure",
  "level": 2
}, {
  "value": "4.1 What Is Backpressure?",
  "id": "41-what-is-backpressure",
  "level": 3
}, {
  "value": "4.2 Backpressure Strategies",
  "id": "42-backpressure-strategies",
  "level": 3
}, {
  "value": "4.3 Manual Request Control",
  "id": "43-manual-request-control",
  "level": 3
}, {
  "value": "5. Schedulers and Concurrency",
  "id": "5-schedulers-and-concurrency",
  "level": 2
}, {
  "value": "5.1 The Schedulers Abstraction",
  "id": "51-the-schedulers-abstraction",
  "level": 3
}, {
  "value": "5.2 publishOn vs subscribeOn",
  "id": "52-publishon-vs-subscribeon",
  "level": 3
}, {
  "value": "5.3 Parallel and FlatMap with Concurrency",
  "id": "53-parallel-and-flatmap-with-concurrency",
  "level": 3
}, {
  "value": "6. Error Handling",
  "id": "6-error-handling",
  "level": 2
}, {
  "value": "6.1 Fallback Patterns for Mono",
  "id": "61-fallback-patterns-for-mono",
  "level": 3
}, {
  "value": "7. Hooks and Side Effects",
  "id": "7-hooks-and-side-effects",
  "level": 2
}, {
  "value": "8. Context Propagation",
  "id": "8-context-propagation",
  "level": 2
}, {
  "value": "9. Testing Reactive Streams",
  "id": "9-testing-reactive-streams",
  "level": 2
}, {
  "value": "9.1 StepVerifier",
  "id": "91-stepverifier",
  "level": 3
}, {
  "value": "9.2 TestPublisher",
  "id": "92-testpublisher",
  "level": 3
}, {
  "value": "9.3 Virtual Time Scheduler",
  "id": "93-virtual-time-scheduler",
  "level": 3
}, {
  "value": "10. Real-World Reactive Pipeline",
  "id": "10-real-world-reactive-pipeline",
  "level": 2
}, {
  "value": "11. Hot vs Cold Publishers",
  "id": "11-hot-vs-cold-publishers",
  "level": 2
}, {
  "value": "12. Batching and Windowing",
  "id": "12-batching-and-windowing",
  "level": 2
}, {
  "value": "13. Converting Between Reactive and Blocking",
  "id": "13-converting-between-reactive-and-blocking",
  "level": 2
}, {
  "value": "14. Performance Considerations",
  "id": "14-performance-considerations",
  "level": 2
}, {
  "value": "15. Common Pitfalls and Anti-Patterns",
  "id": "15-common-pitfalls-and-anti-patterns",
  "level": 2
}, {
  "value": "16. StepVerifier Comprehensive Testing",
  "id": "16-stepverifier-comprehensive-testing",
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
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
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
        id: "chapter-44-project-reactor--reactive-streams",
        children: "Chapter 44: Project Reactor & Reactive Streams"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/43-tracing",
          children: "Distributed Tracing & Observability"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/45-webflux",
          children: "Spring WebFlux"
        })]
      }), "\n"]
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
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-world application"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first approach"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Working examples"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Avoid common pitfalls"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Concepts] --> B[Setup/Configuration]\n    B --> C[Implementation]\n    C --> D[Testing]\n    D --> E[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explain the Reactive Streams specification and its four core interfaces"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Distinguish between imperative, reactive, and reactive-streams programming models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and subscribe to Flux and Mono publishers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply backpressure strategies to control data flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use common operators for transformation, filtering, combination, and error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Schedule work on appropriate thread pools with Schedulers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Handle errors gracefully with fallbacks, retries, and error recovery operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test reactive streams using StepVerifier, TestPublisher, and virtual time"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build a complete reactive data pipeline integrating multiple operators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify when reactive programming adds value vs. unnecessary complexity"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-the-reactive-manifesto-and-why-reactive-matters",
      children: "1. The Reactive Manifesto and Why Reactive Matters"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " Test with production-like configurations → dev setups often hide issues that surface under real load."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Start simple. Add complexity only when proven necessary. Premature abstraction creates maintenance burden."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/44-reactor.png",
        alt: "Reactive Streams Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-the-problem-with-blocking-io",
      children: "1.1 The Problem with Blocking I/O"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Traditional servlet-based applications dedicate one thread per request. When that thread reads from a database, calls a remote API, or writes to a file, it blocks → waiting idle while the underlying I/O completes. Under moderate load, thread pools saturate, new requests queue, and latency spirals."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider a typical Spring MVC endpoint that calls three downstream services:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestController\npublic class OrderController {\n    private final InventoryClient inventoryClient;\n    private final PricingClient pricingClient;\n    private final ShippingClient shippingClient;\n\n    @GetMapping(\"/order/{id}/summary\")\n    public OrderSummary getOrderSummary(@PathVariable String id) {\n        // Each call blocks the Tomcat thread\n        InventoryInfo inv = inventoryClient.getInventory(id);    // 200ms\n        PricingInfo prc = pricingClient.getPricing(id);          // 300ms\n        ShippingInfo shp = shippingClient.getShipping(id);       // 150ms\n        // Total: ~650ms sequential, thread blocked entire time\n        return new OrderSummary(inv, prc, shp);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Even with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), ", the thread-pool management and error handling become unwieldy at scale. Reactive programming offers a different model: declarative, asynchronous, non-blocking, and backpressure-aware."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-the-reactive-streams-specification",
      children: "1.2 The Reactive Streams Specification"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactive Streams (", (0,jsx_runtime.jsx)(_components.a, {
        href: "http://www.reactive-streams.org",
        children: "www.reactive-streams.org"
      }), ") is a specification for asynchronous stream processing with non-blocking backpressure. It defines four interfaces:"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Publisher<T>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Produces data items. Has a single method: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "subscribe(Subscriber)"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Subscriber<T>"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consumes data items. Receives ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onSubscribe"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onNext"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onError"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "onComplete"
            }), " callbacks."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Subscription"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Links a Publisher to a Subscriber. Allows the subscriber to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "request(n)"
            }), " items and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "cancel()"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Processor<T,R>"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Both a Publisher and Subscriber. Used for transformation stages in a chain."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The contract is strict:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "onNext"
        }), " is never called after ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onError"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "onComplete"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "onSubscribe"
        }), " is always called first and exactly once"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "request(n)"
        }), " must be honored → the publisher sends at most n items before the next request"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The subscriber signals demand; the publisher never pushes without demand"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-project-reactor",
      children: "1.3 Project Reactor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Project Reactor is the reactive library underpinning Spring WebFlux, R2DBC, and Spring Cloud Gateway. It implements the Reactive Streams specification and adds:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Flux<T>"
        }), " → a publisher of 0..N items (potentially infinite)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mono<T>"
        }), " → a publisher of 0..1 items (completion or empty)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rich operator set"
        }), " → 500+ operators for transformation, filtering, combination, error handling, scheduling"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Backpressure-aware"
        }), " → all operators respect downstream demand"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testability"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StepVerifier"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TestPublisher"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "virtualTimeScheduler"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Context propagation"
        }), " → ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Context"
        }), " API for threading metadata through operator chains"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Both ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Flux"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Mono"
      }), " implement ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Publisher<T>"
      }), " and are lazy → nothing happens until you subscribe."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-creating-publishers",
      children: "2. Creating Publishers"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-creating-flux-instances",
      children: "2.1 Creating Flux Instances"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.creating;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\nimport java.util.Arrays;\nimport java.util.List;\n\npublic class CreatingPublishers {\n\n    // ---- Flux factories ----\n\n    public static Flux<String> just() {\n        return Flux.just(\"alpha\", \"beta\", \"gamma\");\n    }\n\n    public static Flux<Integer> fromArray() {\n        return Flux.fromArray(new Integer[]{1, 2, 3, 4, 5});\n    }\n\n    public static Flux<String> fromIterable() {\n        List<String> list = Arrays.asList(\"a\", \"b\", \"c\", \"d\", \"e\");\n        return Flux.fromIterable(list);\n    }\n\n    public static Flux<Integer> range() {\n        return Flux.range(1, 10);\n    }\n\n    public static Flux<Long> interval() {\n        return Flux.interval(Duration.ofMillis(500)).take(5);\n    }\n\n    public static Flux<String> empty() {\n        return Flux.empty();\n    }\n\n    public static Flux<String> error() {\n        return Flux.error(new RuntimeException(\"Something went wrong\"));\n    }\n\n    public static Flux<Integer> never() {\n        return Flux.never();\n    }\n\n    public static Flux<Integer> generate() {\n        return Flux.generate(\n            () -> 0,\n            (state, sink) -> {\n                sink.next(state);\n                if (state == 5) sink.complete();\n                return state + 1;\n            }\n        );\n    }\n\n    public static Flux<String> create() {\n        return Flux.create(sink -> {\n            sink.next(\"request-1\");\n            sink.next(\"request-2\");\n            sink.next(\"request-3\");\n            sink.complete();\n        });\n    }\n\n    public static Flux<String> defer() {\n        return Flux.defer(() -> Flux.just(\"deferred-\" + System.currentTimeMillis()));\n    }\n\n    // ---- Mono factories ----\n\n    public static Mono<String> justMono() {\n        return Mono.just(\"single value\");\n    }\n\n    public static Mono<String> emptyMono() {\n        return Mono.empty();\n    }\n\n    public static Mono<String> errorMono() {\n        return Mono.error(new IllegalStateException(\"State invalid\"));\n    }\n\n    public static Mono<String> fromCallable() {\n        return Mono.fromCallable(() -> {\n            Thread.sleep(100);\n            return \"from callable\";\n        });\n    }\n\n    public static Mono<String> fromSupplier() {\n        return Mono.fromSupplier(() -> {\n            double r = Math.random();\n            return r > 0.5 ? \"high\" : \"low\";\n        });\n    }\n\n    public static Mono<String> fromRunnable() {\n        return Mono.fromRunnable(() -> {\n            System.out.println(\"Side effect executed\");\n        }).then(Mono.just(\"done\"));\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"=== just ===\");\n        just().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== fromArray ===\");\n        fromArray().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== fromIterable ===\");\n        fromIterable().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== range ===\");\n        range().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== generate (stateful) ===\");\n        generate().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== create ===\");\n        create().subscribe(v -> System.out.println(\"  \" + v));\n\n        System.out.println(\"=== defer (each subscribe gets fresh value) ===\");\n        Flux<String> deferred = defer();\n        deferred.subscribe(v -> System.out.println(\"  sub1: \" + v));\n        deferred.subscribe(v -> System.out.println(\"  sub2: \" + v));\n\n        System.out.println(\"=== Mono ===\");\n        justMono().subscribe(v -> System.out.println(\"  \" + v));\n        emptyMono().subscribe(v -> System.out.println(\"  seen\"), e -> {},\n            () -> System.out.println(\"  completed empty\"));\n        fromSupplier().subscribe(v -> System.out.println(\"  \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-understanding-subscription-lifecycle",
      children: "2.2 Understanding Subscription Lifecycle"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Every subscription follows this lifecycle:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "subscribe()\n    → onSubscribe(Subscription)\n        → request(n)\n            → onNext(item1)   (repeated n times or until complete/error)\n            → onNext(item2)\n            → ...\n            → onComplete()  or  onError(Throwable)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here is a low-level subscriber implementation that lets you control demand:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.subscription;\n\nimport org.reactivestreams.Subscriber;\nimport org.reactivestreams.Subscription;\nimport reactor.core.publisher.Flux;\n\npublic class ManualSubscriberDemo {\n\n    public static void main(String[] args) {\n        Flux<Integer> publisher = Flux.range(1, 10);\n\n        publisher.subscribe(new Subscriber<Integer>() {\n            private Subscription subscription;\n            private int requested = 0;\n            private final int BATCH = 3;\n\n            @Override\n            public void onSubscribe(Subscription s) {\n                this.subscription = s;\n                System.out.println(\"Subscribed, requesting \" + BATCH);\n                subscription.request(BATCH);\n            }\n\n            @Override\n            public void onNext(Integer item) {\n                System.out.println(\"Received: \" + item);\n                requested++;\n                if (requested >= BATCH) {\n                    requested = 0;\n                    System.out.println(\"Requesting next \" + BATCH);\n                    subscription.request(BATCH);\n                }\n            }\n\n            @Override\n            public void onError(Throwable t) {\n                System.err.println(\"Error: \" + t.getMessage());\n            }\n\n            @Override\n            public void onComplete() {\n                System.out.println(\"All items received\");\n            }\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Output:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Subscribed, requesting 3\nReceived: 1\nReceived: 2\nReceived: 3\nRequesting next 3\nReceived: 4\nReceived: 5\nReceived: 6\nRequesting next 3\nReceived: 7\nReceived: 8\nReceived: 9\nRequesting next 3\nReceived: 10\nAll items received\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-lambda-based-subscribers",
      children: "2.3 Lambda-Based Subscribers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactor provides overloaded ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subscribe"
      }), " methods that accept lambdas:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Flux<Integer> flux = Flux.range(1, 5);\n\n// Only consumer (no error or completion handling)\nflux.subscribe(v -> System.out.println(\"Value: \" + v));\n\n// Consumer + error handler\nflux.subscribe(\n    v -> System.out.println(\"Value: \" + v),\n    e -> System.err.println(\"Error: \" + e)\n);\n\n// Consumer + error + completion handler\nflux.subscribe(\n    v -> System.out.println(\"Value: \" + v),\n    e -> System.err.println(\"Error: \" + e),\n    () -> System.out.println(\"Done\")\n);\n\n// Consumer + error + completion + subscription consumer\nflux.subscribe(\n    v -> System.out.println(\"Value: \" + v),\n    e -> System.err.println(\"Error: \" + e),\n    () -> System.out.println(\"Done\"),\n    s -> s.request(2)  // Only request 2 items\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-disposable-and-lifecycle-management",
      children: "2.4 Disposable and Lifecycle Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.lifecycle;\n\nimport reactor.core.Disposable;\nimport reactor.core.publisher.Flux;\nimport java.time.Duration;\nimport java.util.concurrent.atomic.AtomicBoolean;\n\npublic class DisposableDemo {\n\n    public static void main(String[] args) throws InterruptedException {\n        // subscribe() returns a Disposable\n        Disposable disposable = Flux.interval(Duration.ofMillis(200))\n            .subscribe(v -> System.out.println(\"Tick: \" + v));\n\n        Thread.sleep(700);\n\n        // Cancel the subscription\n        disposable.dispose();\n        System.out.println(\"Disposed: \" + disposable.isDisposed());\n\n        // Composite disposable for multiple subscriptions\n        Disposable.Composite composite = Disposable.composite();\n\n        composite.add(Flux.interval(Duration.ofMillis(300))\n            .subscribe(v -> System.out.println(\"A: \" + v)));\n        composite.add(Flux.interval(Duration.ofMillis(400))\n            .subscribe(v -> System.out.println(\"B: \" + v)));\n\n        Thread.sleep(900);\n        composite.dispose();\n        System.out.println(\"All disposed: \" + composite.isDisposed());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-core-operators",
      children: "3. Core Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-transformation-operators",
      children: "3.1 Transformation Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.operators.transform;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class TransformationOperators {\n\n    public static void main(String[] args) {\n        Flux<Integer> flux = Flux.range(1, 5);\n\n        // map: 1-to-1 synchronous transformation\n        flux.map(i -> i * 10)\n            .subscribe(v -> System.out.println(\"map: \" + v));\n\n        // map with type change\n        flux.map(i -> \"Number-\" + i)\n            .subscribe(v -> System.out.println(\"map string: \" + v));\n\n        // flatMap: 1-to-N asynchronous transformation (inner publishers)\n        flux.flatMap(i -> Flux.just(i, -i))\n            .subscribe(v -> System.out.println(\"flatMap: \" + v));\n\n        // concatMap: like flatMap but preserves order (sequential)\n        Flux.just(\"a\", \"b\", \"c\")\n            .concatMap(s -> Flux.just(s.toUpperCase(), s.toUpperCase() + s.toUpperCase()))\n            .subscribe(v -> System.out.println(\"concatMap: \" + v));\n\n        // flatMapSequential: like flatMap but reorders results back to source order\n        Flux.just(300, 100, 200)\n            .flatMapSequential(delay -> Flux.just(delay)\n                .delayElements(java.time.Duration.ofMillis(delay)))\n            .subscribe(v -> System.out.println(\"flatMapSequential: \" + v));\n\n        // index: attach zero-based index to each element\n        flux.index()\n            .subscribe(t -> System.out.println(\"index: \" + t.getT1() + \" -> \" + t.getT2()));\n\n        // cast: cast each element to a target type\n        Flux<Object> objects = Flux.just(\"a\", \"b\", \"c\");\n        objects.cast(String.class)\n            .subscribe(v -> System.out.println(\"cast: \" + v));\n\n        // timestamp: attach current timestamp\n        flux.timestamp()\n            .subscribe(t -> System.out.println(\"timestamp: \" + t.getT1() + \" -> \" + t.getT2()));\n\n        // reduce: aggregate values to a single result\n        flux.reduce(0, Integer::sum)\n            .subscribe(v -> System.out.println(\"reduce sum: \" + v));\n\n        // scan: progressive accumulation (emit each intermediate value)\n        flux.scan(0, (acc, next) -> acc + next)\n            .subscribe(v -> System.out.println(\"scan: \" + v));\n\n        // collectList: collect all items into List\n        flux.collectList()\n            .subscribe(list -> System.out.println(\"collectList: \" + list));\n\n        // collectMap: collect into Map\n        flux.collectMap(i -> \"key-\" + i)\n            .subscribe(map -> System.out.println(\"collectMap: \" + map));\n\n        // then: ignore all items and emit after completion\n        flux.then(Mono.just(\"done\"))\n            .subscribe(v -> System.out.println(\"then: \" + v));\n\n        // transform: compose operators on the generic flux\n        flux.transform(f -> f.filter(i -> i % 2 == 0).map(i -> i * 100))\n            .subscribe(v -> System.out.println(\"transform: \" + v));\n    }\n\n    // ---- Realistic example ----\n\n    record Order(String id, double amount) {}\n\n    public static Flux<String> orderProcessingExample() {\n        Flux<Order> orders = Flux.just(\n            new Order(\"O001\", 150.0),\n            new Order(\"O002\", 250.0),\n            new Order(\"O003\", 75.0)\n        );\n\n        return orders\n            .filter(o -> o.amount() >= 100.0)\n            .map(o -> new Order(o.id(), o.amount() * 1.1)) // 10% tax\n            .sort((a, b) -> Double.compare(b.amount(), a.amount()))\n            .map(o -> o.id() + \" -> $\" + String.format(\"%.2f\", o.amount()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-filtering-operators",
      children: "3.2 Filtering Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.operators.filtering;\n\nimport reactor.core.publisher.Flux;\nimport java.time.Duration;\n\npublic class FilteringOperators {\n\n    public static void main(String[] args) throws InterruptedException {\n        Flux<Integer> flux = Flux.range(1, 20);\n\n        // filter: keep matching items\n        flux.filter(i -> i % 2 == 0)\n            .subscribe(v -> System.out.println(\"filter even: \" + v));\n\n        // distinct: remove duplicates\n        Flux.just(1, 2, 2, 3, 1, 4, 3, 5)\n            .distinct()\n            .subscribe(v -> System.out.println(\"distinct: \" + v));\n\n        // distinctUntilChanged: remove consecutive duplicates\n        Flux.just(1, 1, 2, 2, 2, 3, 3, 1, 1)\n            .distinctUntilChanged()\n            .subscribe(v -> System.out.println(\"distinctUntilChanged: \" + v));\n\n        // take: take first N items\n        flux.take(5)\n            .subscribe(v -> System.out.println(\"take 5: \" + v));\n\n        // takeLast: take last N items\n        flux.takeLast(3)\n            .subscribe(v -> System.out.println(\"takeLast 3: \" + v));\n\n        // takeWhile: take while predicate is true\n        flux.takeWhile(i -> i < 7)\n            .subscribe(v -> System.out.println(\"takeWhile <7: \" + v));\n\n        // takeUntil: take until predicate is true (includes the matching item)\n        flux.takeUntil(i -> i == 7)\n            .subscribe(v -> System.out.println(\"takeUntil 7: \" + v));\n\n        // skip: skip first N items\n        flux.skip(15)\n            .subscribe(v -> System.out.println(\"skip 15: \" + v));\n\n        // skipLast: skip last N items\n        flux.skipLast(5)\n            .subscribe(v -> System.out.println(\"skipLast 5: \" + v));\n\n        // skipWhile: skip while predicate is true\n        flux.skipWhile(i -> i < 10)\n            .subscribe(v -> System.out.println(\"skipWhile <10: \" + v));\n\n        // elementAt: get element at index\n        flux.elementAt(3)\n            .subscribe(v -> System.out.println(\"elementAt 3: \" + v));\n\n        // single: expect exactly one item (error if 0 or >1)\n        Flux.just(42)\n            .single()\n            .subscribe(v -> System.out.println(\"single: \" + v));\n\n        // next: take first item as Mono\n        flux.next()\n            .subscribe(v -> System.out.println(\"next: \" + v));\n\n        // ignoreElements: drop all items, emit completion\n        flux.ignoreElements()\n            .subscribe(v -> {}, e -> {}, () -> System.out.println(\"ignoreElements done\"));\n\n        // sample: emit the most recent item at periodic intervals\n        Flux.interval(Duration.ofMillis(150))\n            .sample(Duration.ofMillis(400))\n            .take(3)\n            .subscribe(v -> System.out.println(\"sample: \" + v));\n\n        Thread.sleep(2000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-combination-operators",
      children: "3.3 Combination Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.operators.combination;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\n\npublic class CombinationOperators {\n\n    public static void main(String[] args) throws InterruptedException {\n        Flux<Integer> f1 = Flux.just(1, 2, 3);\n        Flux<Integer> f2 = Flux.just(4, 5, 6);\n        Flux<Integer> f3 = Flux.just(7, 8, 9);\n\n        // concat: sequential subscription (one after another)\n        Flux.concat(f1, f2, f3)\n            .subscribe(v -> System.out.println(\"concat: \" + v));\n\n        // concatWith: instance method version\n        f1.concatWith(f2)\n            .subscribe(v -> System.out.println(\"concatWith: \" + v));\n\n        // merge: interleaved subscription (all at once)\n        Flux<Long> slow = Flux.interval(Duration.ofMillis(300)).take(3);\n        Flux<Long> fast = Flux.interval(Duration.ofMillis(100)).take(5);\n\n        Flux.merge(slow, fast)\n            .subscribe(v -> System.out.println(\"merge: \" + v));\n\n        Thread.sleep(2000);\n\n        // mergeSequential: merge but buffer and preserve source order\n        Flux.mergeSequential(slow, fast)\n            .subscribe(v -> System.out.println(\"mergeSequential: \" + v));\n\n        Thread.sleep(3000);\n\n        // mergeDelayError: merge but delay errors until all sources complete\n        Flux<Integer> err1 = Flux.just(1, 2, 3);\n        Flux<Integer> err2 = Flux.just(4, 5, 6)\n            .concatWith(Flux.error(new RuntimeException(\"boom\")));\n        Flux<Integer> err3 = Flux.just(7, 8, 9);\n\n        Flux.mergeDelayError(2, err1, err2, err3)\n            .subscribe(\n                v -> System.out.println(\"mergeDelayError: \" + v),\n                e -> System.err.println(\"Final error: \" + e.getMessage()),\n                () -> System.out.println(\"Done (should not reach here)\")\n            );\n\n        // zip: combine items pairwise (waits for all publishers)\n        Flux<String> names = Flux.just(\"Alice\", \"Bob\", \"Charlie\");\n        Flux<Integer> ages = Flux.just(30, 25, 35);\n        Flux<String> cities = Flux.just(\"NYC\", \"LA\", \"Chicago\");\n\n        Flux.zip(names, ages, cities)\n            .map(t -> t.getT1() + \" is \" + t.getT2() + \" from \" + t.getT3())\n            .subscribe(v -> System.out.println(\"zip: \" + v));\n\n        // zipWith: instance method version\n        names.zipWith(ages, (name, age) -> name + \" (\" + age + \")\")\n            .subscribe(v -> System.out.println(\"zipWith: \" + v));\n\n        // combineLatest: emit when any source emits the latest from each\n        Flux.combineLatest(\n            Flux.interval(Duration.ofMillis(200)).map(i -> \"A\" + i),\n            Flux.interval(Duration.ofMillis(300)).map(i -> \"B\" + i),\n            (a, b) -> a + \"+\" + b\n        ).take(5)\n        .subscribe(v -> System.out.println(\"combineLatest: \" + v));\n\n        Thread.sleep(2000);\n\n        // firstWithValue: emit from the first publisher that produces a value\n        Flux.firstWithValue(\n            Flux.just(1, 2, 3).delayElements(Duration.ofMillis(300)),\n            Flux.just(10, 20).delayElements(Duration.ofMillis(100))\n        ).subscribe(v -> System.out.println(\"firstWithValue: \" + v));\n\n        Thread.sleep(500);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-conditional-operators",
      children: "3.4 Conditional Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.operators.conditional;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\n\npublic class ConditionalOperators {\n\n    public static void main(String[] args) {\n        Flux<Integer> flux = Flux.range(1, 10);\n\n        // all: check if all items match predicate\n        flux.all(i -> i > 0)\n            .subscribe(v -> System.out.println(\"all > 0: \" + v));\n\n        flux.all(i -> i > 5)\n            .subscribe(v -> System.out.println(\"all > 5: \" + v));\n\n        // any: check if any item matches predicate\n        flux.any(i -> i == 7)\n            .subscribe(v -> System.out.println(\"any == 7: \" + v));\n\n        flux.any(i -> i == 99)\n            .subscribe(v -> System.out.println(\"any == 99: \" + v));\n\n        // hasElements: check if flux has at least one element\n        flux.hasElements()\n            .subscribe(v -> System.out.println(\"hasElements: \" + v));\n\n        Flux.empty()\n            .hasElements()\n            .subscribe(v -> System.out.println(\"empty hasElements: \" + v));\n\n        // hasElement: check for specific element\n        flux.hasElement(5)\n            .subscribe(v -> System.out.println(\"hasElement 5: \" + v));\n\n        // defaultIfEmpty: provide fallback if flux is empty\n        Flux.empty()\n            .defaultIfEmpty(\"fallback\")\n            .subscribe(v -> System.out.println(\"defaultIfEmpty: \" + v));\n\n        // switchIfEmpty: switch to another publisher if empty\n        Flux.empty()\n            .switchIfEmpty(Flux.just(\"switch-1\", \"switch-2\"))\n            .subscribe(v -> System.out.println(\"switchIfEmpty: \" + v));\n\n        // sequenceEqual: check if two publishers emit identical sequences\n        Flux.sequenceEqual(Flux.just(1, 2, 3), Flux.just(1, 2, 3))\n            .subscribe(v -> System.out.println(\"sequenceEqual equal: \" + v));\n\n        Flux.sequenceEqual(Flux.just(1, 2, 3), Flux.just(1, 4, 3))\n            .subscribe(v -> System.out.println(\"sequenceEqual diff: \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-mathematical-and-aggregating-operators",
      children: "3.5 Mathematical and Aggregating Operators"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.operators.math;\n\nimport reactor.core.publisher.Flux;\nimport java.util.Comparator;\n\npublic class AggregatingOperators {\n\n    public static void main(String[] args) {\n        Flux<Integer> flux = Flux.range(1, 10);\n\n        // count: count items\n        flux.count()\n            .subscribe(v -> System.out.println(\"count: \" + v));\n\n        // sum (via reduce)\n        flux.reduce(0, Integer::sum)\n            .subscribe(v -> System.out.println(\"sum: \" + v));\n\n        // average (via collectAndMap or custom reduce)\n        flux.collectAndMap(\n            () -> new int[]{0, 0},\n            (acc, val) -> { acc[0] += val; acc[1]++; return acc; },\n            acc -> (double) acc[0] / acc[1]\n        ).subscribe(v -> System.out.println(\"average: \" + v));\n\n        // min\n        flux.collectList()\n            .map(list -> list.stream().min(Comparator.naturalOrder()).orElse(0))\n            .subscribe(v -> System.out.println(\"min: \" + v));\n\n        // max\n        flux.collectList()\n            .map(list -> list.stream().max(Comparator.naturalOrder()).orElse(0))\n            .subscribe(v -> System.out.println(\"max: \" + v));\n\n        // sort: sort items and emit\n        Flux.just(5, 3, 1, 4, 2)\n            .sort()\n            .subscribe(v -> System.out.println(\"sorted: \" + v));\n\n        // sort with comparator\n        Flux.just(\"aaa\", \"b\", \"ccccc\", \"dd\")\n            .sort(Comparator.comparingInt(String::length))\n            .subscribe(v -> System.out.println(\"sorted by length: \" + v));\n\n        // groupBy: group items by key\n        Flux.range(1, 10)\n            .groupBy(i -> i % 2 == 0 ? \"even\" : \"odd\")\n            .flatMap(group -> group.collectList().map(list -> group.key() + \": \" + list))\n            .subscribe(v -> System.out.println(\"groupBy: \" + v));\n\n        // buffer: collect items into batches\n        Flux.range(1, 10)\n            .buffer(3)\n            .subscribe(v -> System.out.println(\"buffer(3): \" + v));\n\n        // buffer with duration\n        // window: like buffer but emits Fluxes instead of Lists\n        Flux.range(1, 10)\n            .window(3)\n            .flatMap(window -> window.collectList())\n            .subscribe(v -> System.out.println(\"window(3): \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-backpressure",
      children: "4. Backpressure"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-what-is-backpressure",
      children: "4.1 What Is Backpressure?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Backpressure is the mechanism by which a downstream subscriber signals to an upstream publisher how much data it can handle. Without backpressure, a fast publisher can overwhelm a slow subscriber, causing unbounded memory growth and eventual OutOfMemoryError."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactor's backpressure model is ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "pull-based"
      }), ": the subscriber controls the pace by calling ", (0,jsx_runtime.jsx)(_components.code, {
        children: "request(n)"
      }), ". Every operator in the chain respects this protocol."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.backpressure;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\n\npublic class BackpressureDemo {\n\n    public static void main(String[] args) throws InterruptedException {\n        // Fast publisher, slow subscriber → demonstrates backpressure\n        Flux.range(1, 1_000_000)\n            .log()\n            .subscribeOn(Schedulers.parallel())\n            .publishOn(Schedulers.boundedElastic())\n            .map(i -> {\n                // Simulate processing work\n                try { Thread.sleep(1); } catch (InterruptedException e) {}\n                return \"Processed: \" + i;\n            })\n            .subscribe(\n                v -> System.out.println(v),\n                e -> System.err.println(\"Error: \" + e),\n                () -> System.out.println(\"Done\")\n            );\n\n        Thread.sleep(5000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-backpressure-strategies",
      children: "4.2 Backpressure Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactor provides several strategies via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Flux.onBackpressureXxx()"
      }), " operators:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.backpressure.strategies;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\n\npublic class BackpressureStrategies {\n\n    public static void main(String[] args) throws InterruptedException {\n        // Strategy 1: BUFFER → buffer unbounded (default, can cause OOM)\n        Flux.interval(Duration.ofMillis(1))\n            .onBackpressureBuffer(1000, v -> System.out.println(\"Dropped: \" + v))\n            .publishOn(Schedulers.boundedElastic())\n            .subscribe(v -> {\n                Thread.sleep(10);\n                System.out.println(\"BUFFER consumed: \" + v);\n            });\n\n        Thread.sleep(3000);\n\n        // Strategy 2: DROP → drop items when downstream can't keep up\n        Flux.interval(Duration.ofMillis(1))\n            .onBackpressureDrop(v -> System.out.println(\"DROP: \" + v))\n            .publishOn(Schedulers.boundedElastic())\n            .subscribe(v -> {\n                Thread.sleep(10);\n                System.out.println(\"DROP consumed: \" + v);\n            });\n\n        Thread.sleep(3000);\n\n        // Strategy 3: LATEST → keep only the latest value\n        Flux.interval(Duration.ofMillis(1))\n            .onBackpressureLatest()\n            .publishOn(Schedulers.boundedElastic())\n            .subscribe(v -> {\n                Thread.sleep(10);\n                System.out.println(\"LATEST consumed: \" + v);\n            });\n\n        Thread.sleep(3000);\n\n        // Strategy 4: ERROR → throw OverflowException if downstream can't keep up\n        Flux.interval(Duration.ofMillis(1))\n            .onBackpressureError()\n            .publishOn(Schedulers.boundedElastic())\n            .subscribe(\n                v -> {\n                    Thread.sleep(10);\n                    System.out.println(\"ERROR consumed: \" + v);\n                },\n                e -> System.err.println(\"ERROR strategy triggered: \" + e.getMessage())\n            );\n\n        Thread.sleep(3000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-manual-request-control",
      children: "4.3 Manual Request Control"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For fine-grained control, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "limitRate"
      }), " to chunk upstream demand:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.backpressure.manual;\n\nimport reactor.core.publisher.Flux;\n\npublic class LimitRateDemo {\n\n    public static void main(String[] args) {\n        // limitRate: request in batches of N, with a \"replenish\" threshold\n        Flux.range(1, 100)\n            .log(\"limitRate\")\n            .limitRate(10, 8)  // request 10, re-request when 8 have been consumed\n            .subscribe(v -> {\n                System.out.println(\"Value: \" + v);\n                // Simulate slow processing\n                try { Thread.sleep(50); } catch (InterruptedException e) {}\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-schedulers-and-concurrency",
      children: "5. Schedulers and Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-the-schedulers-abstraction",
      children: "5.1 The Schedulers Abstraction"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactor operators execute on the calling thread by default. To shift work to different thread pools, use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "publishOn"
      }), " (for downstream operators) and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "subscribeOn"
      }), " (for upstream operators including the source)."]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scheduler"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.immediate()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Execute on the current thread (no context switch)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.single()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single reusable thread"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.parallel()"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Fixed pool sized to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Runtime.availableProcessors()"
            }), " for CPU-bound work"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.boundedElastic()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elastic pool for blocking I/O (bounded to avoid thread starvation)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.newParallel(\"custom\", n)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create a custom scheduler with N threads"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "Schedulers.fromExecutorService(exec)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Wrap an existing ExecutorService"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-publishon-vs-subscribeon",
      children: "5.2 publishOn vs subscribeOn"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.schedulers;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\n\npublic class PublishOnSubscribeOn {\n\n    public static void main(String[] args) throws InterruptedException {\n        System.out.println(\"Main thread: \" + Thread.currentThread().getName());\n\n        // subscribeOn affects the source subscription thread\n        // publishOn affects all downstream operators from that point\n\n        Flux.range(1, 5)\n            .map(i -> {\n                System.out.println(\"map1 on: \" + Thread.currentThread().getName());\n                return i * 10;\n            })\n            .publishOn(Schedulers.boundedElastic())\n            .map(i -> {\n                System.out.println(\"map2 on: \" + Thread.currentThread().getName());\n                return \"Value: \" + i;\n            })\n            .publishOn(Schedulers.parallel())\n            .map(s -> {\n                System.out.println(\"map3 on: \" + Thread.currentThread().getName());\n                return s + \"!\";\n            })\n            .subscribeOn(Schedulers.single())\n            .subscribe(v -> System.out.println(\"Received on: \" + Thread.currentThread().getName() + \" -> \" + v));\n\n        Thread.sleep(1000);\n\n        // Example: using boudedElastic for blocking operations\n        System.out.println(\"\\n--- Blocking I/O example ---\");\n        Flux.range(1, 3)\n            .subscribeOn(Schedulers.boundedElastic())\n            .flatMap(i -> Flux.just(blockingDatabaseCall(i)))\n            .subscribe(v -> System.out.println(\"DB result: \" + v));\n\n        Thread.sleep(1000);\n\n        // Example: parallel for CPU-bound work\n        System.out.println(\"\\n--- CPU-bound parallel example ---\");\n        Flux.range(1, 10)\n            .parallel()\n            .runOn(Schedulers.parallel())\n            .map(i -> heavyComputation(i))\n            .sequential()\n            .subscribe(v -> System.out.println(\"Computed: \" + v));\n\n        Thread.sleep(2000);\n    }\n\n    private static String blockingDatabaseCall(int id) {\n        try { Thread.sleep(200); } catch (InterruptedException e) {}\n        return \"Result for id=\" + id + \" on \" + Thread.currentThread().getName();\n    }\n\n    private static int heavyComputation(int input) {\n        // Simulate CPU-bound work\n        double result = 0;\n        for (int i = 0; i < 1_000_000; i++) {\n            result += Math.sin(input * Math.PI / 180.0);\n        }\n        return (int) result;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-parallel-and-flatmap-with-concurrency",
      children: "5.3 Parallel and FlatMap with Concurrency"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.schedulers.parallel;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\nimport java.time.Instant;\n\npublic class ParallelExecution {\n\n    public static void main(String[] args) throws InterruptedException {\n        // Sequential flatMap → one at a time\n        Instant start = Instant.now();\n        Flux.range(1, 5)\n            .flatMap(i -> simulateExternalCall(i, 200))\n            .subscribe(v -> System.out.println(\"Sequential: \" + v));\n        Thread.sleep(2000);\n        System.out.println(\"Sequential took: \" +\n            Duration.between(start, Instant.now()).toMillis() + \"ms\\n\");\n\n        // Parallel flatMap → up to 4 concurrent\n        start = Instant.now();\n        Flux.range(1, 12)\n            .flatMap(i -> simulateExternalCall(i, 200)\n                .subscribeOn(Schedulers.boundedElastic()), 4) // concurrency = 4\n            .subscribe(v -> System.out.println(\"Parallel(4): \" + v));\n        Thread.sleep(3000);\n        System.out.println(\"Parallel(4) took: \" +\n            Duration.between(start, Instant.now()).toMillis() + \"ms\\n\");\n\n        // Parallel flatMap → unlimited concurrency\n        start = Instant.now();\n        Flux.range(1, 12)\n            .flatMap(i -> simulateExternalCall(i, 200)\n                .subscribeOn(Schedulers.boundedElastic()))\n            .subscribe(v -> System.out.println(\"Parallel(unbounded): \" + v));\n        Thread.sleep(2000);\n        System.out.println(\"Parallel(unbounded) took: \" +\n            Duration.between(start, Instant.now()).toMillis() + \"ms\\n\");\n\n        // ParallelFlux → for CPU-bound parallel processing\n        start = Instant.now();\n        Flux.range(1, 1_000_000)\n            .parallel(4)\n            .runOn(Schedulers.parallel())\n            .map(i -> i * 2)\n            .sequential()\n            .count()\n            .subscribe(count -> System.out.println(\"ParallelFlux processed: \" + count));\n    }\n\n    private static Flux<String> simulateExternalCall(int id, int delayMs) {\n        return Flux.just(\"Response-\" + id + \" on \" + Thread.currentThread().getName())\n            .delayElements(Duration.ofMillis(delayMs));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-error-handling",
      children: "6. Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactive error handling uses operators rather than try-catch. Errors flow through the operator chain via the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onError"
      }), " signal, terminating the stream unless intercepted."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.errors;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\n\npublic class ErrorHandlingOperators {\n\n    public static void main(String[] args) throws InterruptedException {\n        Flux<Integer> failingFlux = Flux.just(1, 2, 3, 0, 5)\n            .map(i -> 100 / i);  // ArithmeticException on 0\n\n        // onErrorReturn: return a fallback value on error\n        failingFlux\n            .onErrorReturn(-1)\n            .subscribe(v -> System.out.println(\"onErrorReturn: \" + v));\n\n        // onErrorResume: switch to a fallback publisher on error\n        failingFlux\n            .onErrorResume(e -> Flux.just(10, 20, 30))\n            .subscribe(v -> System.out.println(\"onErrorResume: \" + v));\n\n        // onErrorComplete: swallow error and complete\n        failingFlux\n            .onErrorComplete()\n            .subscribe(v -> System.out.println(\"onErrorComplete: \" + v),\n                e -> {},\n                () -> System.out.println(\"onErrorComplete done\"));\n\n        // onErrorContinue: skip the errored item and continue with the next\n        Flux.just(1, 2, 3, 0, 5, 0, 7)\n            .map(i -> 100 / i)\n            .onErrorContinue((error, item) ->\n                System.err.println(\"Skipping item \" + item + \": \" + error.getMessage()))\n            .subscribe(v -> System.out.println(\"onErrorContinue: \" + v));\n\n        // retry: retry the entire sequence on error\n        Flux.just(\"valid\", \"valid\", \"invalid\")\n            .flatMap(s -> validateAndProcess(s)\n                .retry(2)  // retry on error up to 2 additional attempts\n                .onErrorReturn(\"fallback\"))\n            .subscribe(v -> System.out.println(\"retry: \" + v));\n\n        // retryWhen: retry with backoff\n        Flux.just(\"data\")\n            .flatMap(s -> failingServiceCall(s)\n                .retryWhen(reactor.util.retry.Retry.backoff(3, Duration.ofMillis(100))\n                    .maxBackoff(Duration.ofSeconds(2))\n                    .jitter(0.5))\n                .onErrorReturn(\"ultimate fallback\"))\n            .subscribe(v -> System.out.println(\"retryWhen: \" + v));\n\n        Thread.sleep(2000);\n\n        // doOnError: side effect on error without catching\n        Flux.just(1, 0)\n            .map(i -> 10 / i)\n            .doOnError(e -> System.err.println(\"Logging error: \" + e.getMessage()))\n            .onErrorReturn(-1)\n            .subscribe(v -> System.out.println(\"doOnError example: \" + v));\n\n        // timeout: error if no signal within duration\n        Flux.interval(Duration.ofSeconds(2))\n            .timeout(Duration.ofSeconds(1))\n            .onErrorResume(e -> Flux.just(-999L))\n            .subscribe(v -> System.out.println(\"timeout: \" + v));\n\n        Thread.sleep(3000);\n    }\n\n    private static Flux<String> validateAndProcess(String input) {\n        if (\"invalid\".equals(input)) {\n            return Flux.error(new IllegalArgumentException(\"Invalid input\"));\n        }\n        return Flux.just(\"Processed: \" + input);\n    }\n\n    private static int attempt = 0;\n\n    private static Flux<String> failingServiceCall(String input) {\n        attempt++;\n        System.out.println(\"  Attempt #\" + attempt);\n        if (attempt < 4) {\n            return Flux.error(new RuntimeException(\"Service unavailable\"));\n        }\n        return Flux.just(\"Success after \" + attempt + \" attempts\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-fallback-patterns-for-mono",
      children: "6.1 Fallback Patterns for Mono"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.errors.fallback;\n\nimport reactor.core.publisher.Mono;\n\npublic class MonoFallbackPatterns {\n\n    public static void main(String[] args) {\n        Mono<String> riskyCall = Mono.error(new RuntimeException(\"DB timeout\"));\n\n        // Pattern 1: Fallback value\n        String result1 = riskyCall\n            .onErrorReturn(\"cached-value\")\n            .block();\n        System.out.println(\"Pattern 1: \" + result1);\n\n        // Pattern 2: Fallback from another source\n        String result2 = riskyCall\n            .onErrorResume(e -> Mono.just(\"from-secondary-db\"))\n            .block();\n        System.out.println(\"Pattern 2: \" + result2);\n\n        // Pattern 3: Empty on error\n        String result3 = riskyCall\n            .onErrorResume(e -> Mono.empty())\n            .defaultIfEmpty(\"default-empty\")\n            .block();\n        System.out.println(\"Pattern 3: \" + result3);\n\n        // Pattern 4: Recover and transform error\n        String result4 = riskyCall\n            .onErrorMap(e -> new BusinessException(\"Recoverable\", e))\n            .onErrorReturn(\"after-mapping\")\n            .block();\n        System.out.println(\"Pattern 4: \" + result4);\n\n        // Pattern 5: Retry with exponential backoff\n        String result5 = callThatFailsFirstTwoTimes()\n            .retry(3)\n            .onErrorReturn(\"still-failed-after-retry\")\n            .block();\n        System.out.println(\"Pattern 5: \" + result5);\n    }\n\n    private static int counter = 0;\n\n    private static Mono<String> callThatFailsFirstTwoTimes() {\n        return Mono.fromCallable(() -> {\n            counter++;\n            if (counter <= 2) {\n                throw new RuntimeException(\"Attempt \" + counter + \" failed\");\n            }\n            return \"success-on-attempt-\" + counter;\n        });\n    }\n\n    static class BusinessException extends RuntimeException {\n        public BusinessException(String message, Throwable cause) {\n            super(message, cause);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-hooks-and-side-effects",
      children: "7. Hooks and Side Effects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.sideeffects;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.util.concurrent.atomic.AtomicInteger;\n\npublic class SideEffectOperators {\n\n    public static void main(String[] args) {\n        Flux<Integer> flux = Flux.range(1, 5);\n        AtomicInteger counter = new AtomicInteger();\n\n        // doOnSubscribe: called when subscription happens\n        // doOnRequest: called when demand is signaled\n        // doOnNext: called for each item before downstream\n        // doOnError: called on error\n        // doOnComplete: called on successful completion\n        // doOnCancel: called on cancellation\n        // doOnTerminate: called on error or completion\n        // doAfterTerminate: called after terminal signal is delivered\n        // doFinally: called regardless (terminal or cancel)\n        // doOnEach: called for each signal (onNext, onError, onComplete)\n        // doOnDiscard: called for items that are dropped\n\n        flux\n            .doOnSubscribe(s -> System.out.println(\"doOnSubscribe\"))\n            .doOnRequest(n -> System.out.println(\"doOnRequest: \" + n))\n            .doOnNext(v -> System.out.println(\"doOnNext: \" + v))\n            .doOnError(e -> System.out.println(\"doOnError: \" + e.getMessage()))\n            .doOnComplete(() -> System.out.println(\"doOnComplete\"))\n            .doOnTerminate(() -> System.out.println(\"doOnTerminate\"))\n            .doAfterTerminate(() -> System.out.println(\"doAfterTerminate\"))\n            .doFinally(signalType -> System.out.println(\"doFinally: \" + signalType))\n            .doOnEach(signal -> {\n                if (signal.isOnNext()) {\n                    counter.incrementAndGet();\n                }\n            })\n            .subscribe(v -> System.out.println(\"  received: \" + v));\n\n        System.out.println(\"\\nTotal onNext signals: \" + counter.get());\n\n        // log: comprehensive logging of all signals\n        System.out.println(\"\\n--- log() example ---\");\n        Flux.range(1, 3)\n            .log(\"my.flux.logger\")\n            .subscribe(v -> System.out.println(\"  got: \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-context-propagation",
      children: "8. Context Propagation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reactor's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Context"
      }), " is an immutable map that propagates through the operator chain, similar to a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThreadLocal"
      }), " but safe in reactive pipelines where work can hop between threads."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.context;\n\nimport reactor.core.publisher.Mono;\nimport reactor.util.context.Context;\nimport java.util.UUID;\n\npublic class ContextPropagation {\n\n    public static void main(String[] args) {\n        // contextWrite: write values into the context\n        // deferContext: read values from the context\n\n        Mono<String> withContext = Mono.deferContextual(ctx -> {\n            String correlationId = ctx.getOrDefault(\"correlationId\", \"unknown\");\n            String userId = ctx.getOrDefault(\"userId\", \"anonymous\");\n            return Mono.just(\"Processing request \" + correlationId + \" for user \" + userId);\n        });\n\n        // Attach context - note: contextWrite is evaluated upstream (bottom-first)\n        withContext\n            .contextWrite(Context.of(\"correlationId\", UUID.randomUUID().toString()))\n            .contextWrite(Context.of(\"userId\", \"user-42\"))\n            .subscribe(v -> System.out.println(\"Result: \" + v));\n\n        // Realistic example: trace ID propagation through service calls\n        Mono<String> serviceCall = Mono.deferContextual(ctx -> {\n            String traceId = ctx.get(\"traceId\");\n            System.out.println(\"[Service] Using traceId: \" + traceId);\n            return Mono.just(\"Service response with traceId=\" + traceId);\n        });\n\n        Mono<String> controller = Mono.deferContextual(ctx -> {\n            String traceId = ctx.get(\"traceId\");\n            System.out.println(\"[Controller] traceId: \" + traceId);\n            return serviceCall;\n        });\n\n        controller\n            .contextWrite(Context.of(\"traceId\", \"trace-\" + System.currentTimeMillis()))\n            .subscribe(v -> System.out.println(\"Final: \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-testing-reactive-streams",
      children: "9. Testing Reactive Streams"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-stepverifier",
      children: "9.1 StepVerifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.testing;\n\nimport org.junit.jupiter.api.Test;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.test.StepVerifier;\nimport reactor.test.publisher.TestPublisher;\nimport java.time.Duration;\n\nclass StepVerifierTests {\n\n    @Test\n    void testSimpleFlux() {\n        Flux<String> flux = Flux.just(\"alpha\", \"beta\", \"gamma\");\n\n        StepVerifier.create(flux)\n            .expectNext(\"alpha\")\n            .expectNext(\"beta\")\n            .expectNext(\"gamma\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testFluxWithCount() {\n        Flux<Integer> flux = Flux.range(1, 100);\n\n        StepVerifier.create(flux)\n            .expectNextCount(100)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testErrorScenario() {\n        Flux<Integer> flux = Flux.just(1, 2, 3)\n            .concatWith(Flux.error(new RuntimeException(\"Boom\")));\n\n        StepVerifier.create(flux)\n            .expectNext(1, 2, 3)\n            .expectErrorMessage(\"Boom\")\n            .verify();\n    }\n\n    @Test\n    void testErrorWithType() {\n        Flux<Integer> flux = Flux.just(10, 20)\n            .map(i -> 100 / (i - 10));  // Division by zero on second\n\n        StepVerifier.create(flux)\n            .expectNext(10)\n            .expectError(ArithmeticException.class)\n            .verify();\n    }\n\n    @Test\n    void testThenAssert() {\n        Flux<Integer> flux = Flux.range(1, 5)\n            .map(i -> i * 2);\n\n        StepVerifier.create(flux)\n            .expectNext(2, 4, 6)\n            .expectNextMatches(v -> v == 8 || v == 10)\n            .consumeNextWith(v -> {\n                assert v == 10 : \"Expected 10 but got \" + v;\n            })\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testVirtualTime() {\n        // Virtual time allows testing time-based operators without real delays\n        StepVerifier.withVirtualTime(() ->\n                Flux.interval(Duration.ofDays(1)).take(3))\n            .expectSubscription()\n            .thenAwait(Duration.ofDays(3))\n            .expectNext(0L, 1L, 2L)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testVirtualTimeWithAdvance() {\n        StepVerifier.withVirtualTime(() ->\n                Flux.interval(Duration.ofHours(1)).take(5))\n            .expectSubscription()\n            .expectNoEvent(Duration.ofHours(1))\n            .thenAwait(Duration.ofHours(4))\n            .expectNext(0L, 1L, 2L, 3L, 4L)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testRecordedAssertions() {\n        Flux<String> flux = Flux.just(\"apple\", \"banana\", \"avocado\", \"cherry\", \"apricot\");\n\n        StepVerifier.create(flux)\n            .recordWith(java.util.ArrayList::new)\n            .expectNextCount(5)\n            .consumeRecordedWith(list -> {\n                assert list.size() == 5;\n                assert list.stream().allMatch(s -> s.length() > 3);\n                assert list.stream().filter(s -> s.startsWith(\"a\")).count() == 3;\n            })\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testThenCancel() {\n        Flux<Long> infinite = Flux.interval(Duration.ofMillis(100));\n\n        StepVerifier.create(infinite)\n            .expectNext(0L)\n            .expectNext(1L)\n            .thenCancel()\n            .verify();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-testpublisher",
      children: "9.2 TestPublisher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.testing.publisher;\n\nimport org.junit.jupiter.api.Test;\nimport reactor.core.publisher.Flux;\nimport reactor.test.StepVerifier;\nimport reactor.test.publisher.TestPublisher;\n\nclass TestPublisherTests {\n\n    @Test\n    void testCompliantPublisher() {\n        TestPublisher<String> publisher = TestPublisher.create();\n\n        // Probe that the publisher is well-behaved\n        publisher.assertWasNotCancelled();\n        publisher.assertNoRequestOverflow();\n\n        publisher.next(\"a\", \"b\");\n        publisher.next(\"c\");\n        publisher.complete();\n\n        StepVerifier.create(publisher.flux())\n            .expectNext(\"a\", \"b\", \"c\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testNonCompliantPublisher() {\n        // Create a publisher that allows violating the reactive streams spec\n        TestPublisher<String> publisher = TestPublisher.createNoncompliant(\n            TestPublisher.Violation.ALLOW_NULL\n        );\n\n        publisher.next(\"valid\");\n        publisher.next(null);  // Would fail with compliant publisher\n        publisher.complete();\n\n        StepVerifier.create(publisher.flux())\n            .expectNext(\"valid\")\n            .expectNext((String) null)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testConditionalEmission() {\n        TestPublisher<Integer> publisher = TestPublisher.create();\n\n        Flux<Integer> processed = publisher.flux()\n            .filter(i -> i > 0)\n            .map(i -> i * 10);\n\n        StepVerifier.create(processed)\n            .then(() -> publisher.next(5))\n            .expectNext(50)\n            .then(() -> publisher.next(-1))  // filtered out\n            .then(() -> publisher.next(3))\n            .expectNext(30)\n            .then(publisher::complete)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testErrorEmission() {\n        TestPublisher<String> publisher = TestPublisher.create();\n\n        StepVerifier.create(publisher.flux()\n                .map(String::toUpperCase))\n            .then(() -> publisher.next(\"hello\"))\n            .expectNext(\"HELLO\")\n            .then(() -> publisher.error(new RuntimeException(\"network error\")))\n            .expectError(RuntimeException.class)\n            .verify();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-virtual-time-scheduler",
      children: "9.3 Virtual Time Scheduler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.testing.virtualtime;\n\nimport org.junit.jupiter.api.Test;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.test.StepVerifier;\nimport reactor.test.scheduler.VirtualTimeScheduler;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\n\nclass VirtualTimeSchedulerTests {\n\n    @Test\n    void testIntervalWithVirtualTime() {\n        VirtualTimeScheduler.getOrSet();\n\n        Flux<Long> interval = Flux.interval(Duration.ofSeconds(1)).take(5);\n\n        StepVerifier.withVirtualTime(() -> interval)\n            .expectSubscription()\n            .thenAwait(Duration.ofSeconds(5))\n            .expectNext(0L, 1L, 2L, 3L, 4L)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testTimeoutWithVirtualTime() {\n        VirtualTimeScheduler.getOrSet();\n\n        Mono<String> slow = Mono.delay(Duration.ofSeconds(5))\n            .map(i -> \"done\");\n\n        StepVerifier.create(slow.timeout(Duration.ofSeconds(3)))\n            .expectError(java.util.concurrent.TimeoutException.class)\n            .verify(Duration.ofSeconds(1));  // Real timeout for the test itself\n    }\n\n    @Test\n    void testRetryBackoffWithVirtualTime() {\n        VirtualTimeScheduler scheduler = VirtualTimeScheduler.getOrSet();\n\n        Mono<String> failing = Mono.error(new RuntimeException(\"fail\"));\n        Mono<String> result = failing\n            .retryWhen(reactor.util.retry.Retry.backoff(2, Duration.ofMillis(100))\n                .scheduler(scheduler));\n\n        StepVerifier.create(result)\n            .expectError(RuntimeException.class)\n            .verify(Duration.ofSeconds(1));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-real-world-reactive-pipeline",
      children: "10. Real-World Reactive Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.pipeline;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.core.scheduler.Schedulers;\nimport reactor.util.retry.Retry;\nimport java.time.Duration;\nimport java.time.Instant;\nimport java.util.*;\n\npublic class ReactiveOrderPipeline {\n\n    // ---- Domain objects ----\n\n    record Order(String id, String customerId, double amount) {}\n    record Customer(String id, String name, String tier) {}\n    record Product(String id, String name, double price) {}\n    record OrderSummary(String orderId, String customerName, double total, String status) {}\n\n    // ---- Data sources (simulated) ----\n\n    private static final Map<String, Customer> CUSTOMERS = Map.of(\n        \"C001\", new Customer(\"C001\", \"Alice\", \"GOLD\"),\n        \"C002\", new Customer(\"C002\", \"Bob\", \"SILVER\"),\n        \"C003\", new Customer(\"C003\", \"Charlie\", \"REGULAR\")\n    );\n\n    // ---- Service methods returning Mono/Flux ----\n\n    private Mono<Customer> getCustomer(String customerId) {\n        return Mono.fromCallable(() -> {\n            Thread.sleep(100); // Simulate DB call\n            Customer c = CUSTOMERS.get(customerId);\n            if (c == null) throw new RuntimeException(\"Customer not found: \" + customerId);\n            return c;\n        }).subscribeOn(Schedulers.boundedElastic());\n    }\n\n    private Mono<Double> applyDiscount(Customer customer, double amount) {\n        return Mono.fromCallable(() -> {\n            Thread.sleep(50); // Simulate rules engine\n            return switch (customer.tier()) {\n                case \"GOLD\" -> amount * 0.85;\n                case \"SILVER\" -> amount * 0.95;\n                default -> amount;\n            };\n        }).subscribeOn(Schedulers.boundedElastic());\n    }\n\n    private Mono<Boolean> validateFraud(String customerId, double amount) {\n        return Mono.fromCallable(() -> {\n            Thread.sleep(80); // Simulate fraud check\n            if (amount > 10_000) {\n                System.out.println(\"  [FRAUD] Flagged: \" + customerId + \" amount=\" + amount);\n                return false;\n            }\n            return true;\n        }).subscribeOn(Schedulers.boundedElastic());\n    }\n\n    private Mono<String> submitToERP(String orderId, double finalAmount) {\n        return Mono.fromCallable(() -> {\n            Thread.sleep(150); // Simulate ERP integration\n            return \"ERP_CONFIRMED_\" + orderId;\n        }).subscribeOn(Schedulers.boundedElastic())\n        .retryWhen(Retry.backoff(2, Duration.ofMillis(100))\n            .maxBackoff(Duration.ofMillis(500)));\n    }\n\n    private Mono<Void> sendNotification(String customerId, String message) {\n        return Mono.fromRunnable(() -> {\n            System.out.println(\"  [NOTIFICATION] To \" + customerId + \": \" + message);\n        }).subscribeOn(Schedulers.boundedElastic())\n        .then();\n    }\n\n    // ---- Composed pipeline ----\n\n    public Mono<OrderSummary> processOrder(Order order) {\n        Instant start = Instant.now();\n\n        return Mono.just(order)\n            .flatMap(o ->\n                // Parallel: fetch customer and check fraud simultaneously\n                Mono.zip(\n                    getCustomer(o.customerId()),\n                    applyDiscount(null, o.amount()), // We'll replace this\n                    validateFraud(o.customerId(), o.amount())\n                )\n            )\n            .flatMap(tuple -> {\n                // For discount we need the actual customer, not null\n                return getCustomer(order.customerId())\n                    .flatMap(customer -> applyDiscount(customer, order.amount())\n                        .map(discounted -> new Object[]{customer, discounted, tuple.getT3()}));\n            })\n            .flatMap(data -> {\n                Customer customer = (Customer) data[0];\n                Double discounted = (Double) data[1];\n                Boolean fraudOk = (Boolean) data[2];\n\n                if (!fraudOk) {\n                    return Mono.error(new RuntimeException(\"Fraud check failed for order \" + order.id()));\n                }\n\n                return submitToERP(order.id(), discounted)\n                    .flatMap(erpRef -> sendNotification(order.customerId(),\n                            \"Order \" + order.id() + \" confirmed. Total: $\" + String.format(\"%.2f\", discounted))\n                        .thenReturn(new OrderSummary(order.id(), customer.name(), discounted, erpRef)));\n            })\n            .doOnSuccess(summary -> {\n                long elapsed = Duration.between(start, Instant.now()).toMillis();\n                System.out.println(\"  [Pipeline] Order \" + order.id() + \" processed in \" + elapsed + \"ms\");\n            })\n            .doOnError(e -> System.err.println(\"  [Pipeline] Order \" + order.id() + \" failed: \" + e.getMessage()))\n            .timeout(Duration.ofSeconds(10));\n    }\n\n    // ---- Batch processing ----\n\n    public Flux<OrderSummary> processOrders(List<Order> orders) {\n        return Flux.fromIterable(orders)\n            .flatMap(this::processOrder, 5) // Max 5 concurrent\n            .onErrorContinue((e, order) ->\n                System.err.println(\"Skipping failed order \" + ((Order) order).id()));\n    }\n\n    // ---- Main ----\n\n    public static void main(String[] args) throws InterruptedException {\n        ReactiveOrderPipeline pipeline = new ReactiveOrderPipeline();\n\n        List<Order> orders = Arrays.asList(\n            new Order(\"ORD-001\", \"C001\", 250.00),\n            new Order(\"ORD-002\", \"C002\", 5000.00),\n            new Order(\"ORD-003\", \"C003\", 150.00),\n            new Order(\"ORD-004\", \"C001\", 12000.00), // Fraud trigger\n            new Order(\"ORD-005\", \"C002\", 750.00)\n        );\n\n        System.out.println(\"=== Processing orders reactively ===\\n\");\n\n        pipeline.processOrders(orders)\n            .doOnComplete(() -> System.out.println(\"\\n=== All orders processed ===\"))\n            .subscribe(\n                summary -> System.out.println(\"Completed: \" + summary),\n                e -> System.err.println(\"Fatal: \" + e.getMessage())\n            );\n\n        Thread.sleep(5000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-hot-vs-cold-publishers",
      children: "11. Hot vs Cold Publishers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.hotcold;\n\nimport reactor.core.publisher.ConnectableFlux;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Sinks;\nimport java.time.Duration;\n\npublic class HotVsCold {\n\n    public static void main(String[] args) throws InterruptedException {\n        // ---- Cold Publisher: each subscriber gets its own stream ----\n        System.out.println(\"=== Cold Publisher ===\");\n        Flux<Integer> coldFlux = Flux.range(1, 5)\n            .delayElements(Duration.ofMillis(200))\n            .map(i -> {\n                System.out.println(\"  Generating: \" + i);\n                return i;\n            });\n\n        coldFlux.subscribe(v -> System.out.println(\"  Subscriber A: \" + v));\n        Thread.sleep(300);\n        coldFlux.subscribe(v -> System.out.println(\"  Subscriber B: \" + v));\n\n        Thread.sleep(2000);\n\n        // ---- Hot Publisher: all subscribers share the same stream ----\n        System.out.println(\"\\n=== Hot Publisher (ConnectableFlux) ===\");\n        Flux<Integer> hotSource = Flux.range(1, 10)\n            .delayElements(Duration.ofMillis(100))\n            .map(i -> {\n                System.out.println(\"  Hot source: \" + i);\n                return i;\n            });\n\n        ConnectableFlux<Integer> hot = hotSource.publish();\n        hot.connect(); // Start emitting\n\n        Thread.sleep(250);\n        System.out.println(\"  Subscriber C joins:\");\n        hot.subscribe(v -> System.out.println(\"  Subscriber C: \" + v));\n\n        Thread.sleep(300);\n        System.out.println(\"  Subscriber D joins:\");\n        hot.subscribe(v -> System.out.println(\"  Subscriber D: \" + v));\n\n        Thread.sleep(1000);\n\n        // ---- Sinks: programmatic hot publisher ----\n        System.out.println(\"\\n=== Sinks.Many (programmatic hot) ===\");\n        Sinks.Many<String> sink = Sinks.many().multicast().onBackpressureBuffer();\n\n        Flux<String> sinkFlux = sink.asFlux();\n        sinkFlux.subscribe(v -> System.out.println(\"  SinkSub A: \" + v));\n        sinkFlux.subscribe(v -> System.out.println(\"  SinkSub B: \" + v));\n\n        sink.tryEmitNext(\"event-1\");\n        sink.tryEmitNext(\"event-2\");\n\n        System.out.println(\"  Late subscriber joins:\");\n        sinkFlux.subscribe(v -> System.out.println(\"  SinkSub C (late): \" + v));\n\n        sink.tryEmitNext(\"event-3\");\n        sink.tryEmitComplete();\n\n        // ---- Sinks.One: emit a single value (Mono) ----\n        System.out.println(\"\\n=== Sinks.One ===\");\n        Sinks.One<String> sinkOne = Sinks.one();\n        sinkOne.asMono().subscribe(v -> System.out.println(\"  SinkOne: \" + v));\n        sinkOne.tryEmitValue(\"singleton\");\n\n        // ---- autoConnect: hot publisher that starts on first subscription ----\n        System.out.println(\"\\n=== autoConnect ===\");\n        Flux<String> autoHot = Flux.interval(Duration.ofMillis(100))\n            .map(i -> \"tick-\" + i)\n            .publish()\n            .autoConnect(2); // Start when 2 subscribers have subscribed\n\n        autoHot.subscribe(v -> System.out.println(\"  Auto A: \" + v));\n        Thread.sleep(150);\n        autoHot.subscribe(v -> System.out.println(\"  Auto B: \" + v)); // Now both subscribed\n\n        Thread.sleep(500);\n\n        // ---- Replay: cache and replay last N items ----\n        System.out.println(\"\\n=== Replay ===\");\n        Flux<String> replaySource = Flux.just(\"a\", \"b\", \"c\", \"d\", \"e\");\n        Flux<String> cached = replaySource.cache(3); // Replay last 3\n\n        cached.subscribe(v -> System.out.println(\"  Replay A: \" + v));\n        System.out.println(\"  Replay late subscriber:\");\n        cached.subscribe(v -> System.out.println(\"  Replay B: \" + v));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-batching-and-windowing",
      children: "12. Batching and Windowing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.batching;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\nimport java.util.List;\n\npublic class BatchingAndWindowing {\n\n    public static void main(String[] args) throws InterruptedException {\n        Flux<Integer> source = Flux.range(1, 20);\n\n        // buffer: collect into lists\n        System.out.println(\"=== buffer(5) ===\");\n        source.buffer(5)\n            .subscribe(list -> System.out.println(\"  Batch: \" + list));\n\n        // buffer with skip: overlapping windows\n        System.out.println(\"\\n=== buffer(3, 2) [size=3, skip=2] ===\");\n        source.buffer(3, 2)\n            .subscribe(list -> System.out.println(\"  Overlap: \" + list));\n\n        // buffer with duration\n        System.out.println(\"\\n=== buffer(Duration) ===\");\n        Flux.interval(Duration.ofMillis(100))\n            .buffer(Duration.ofMillis(500))\n            .take(4)\n            .subscribe(list -> System.out.println(\"  Time batch: \" + list));\n\n        Thread.sleep(2500);\n\n        // window: like buffer but emits Flux<List<T>> vs Flux<Flux<T>>\n        System.out.println(\"\\n=== window(3) ===\");\n        source.window(3)\n            .flatMap(window -> window.collectList())\n            .subscribe(list -> System.out.println(\"  Window: \" + list));\n\n        // groupBy: partition items\n        System.out.println(\"\\n=== groupBy ===\");\n        Flux.range(1, 10)\n            .groupBy(i -> i % 3)\n            .flatMap(group -> group.collectList()\n                .map(list -> \"Group \" + group.key() + \": \" + list))\n            .subscribe(v -> System.out.println(\"  \" + v));\n\n        // Practical example: batch DB inserts\n        System.out.println(\"\\n=== Batch DB Insert ===\");\n        Flux.range(1, 100)\n            .buffer(10)\n            .flatMap(batch -> batchInsert(batch))\n            .subscribe(count -> System.out.println(\"Inserted batch of \" + count));\n\n        Thread.sleep(1000);\n    }\n\n    private static Mono<Integer> batchInsert(List<Integer> items) {\n        return Mono.fromCallable(() -> {\n            System.out.println(\"  [DB] Inserting batch of \" + items.size() + \" items: \" + items);\n            Thread.sleep(200);\n            return items.size();\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "13-converting-between-reactive-and-blocking",
      children: "13. Converting Between Reactive and Blocking"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.conversion;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.core.scheduler.Schedulers;\nimport java.util.List;\nimport java.util.Optional;\n\npublic class BlockingConversion {\n\n    public static void main(String[] args) {\n        // ---- Reactive to Blocking ----\n\n        // block(): block until Mono emits\n        String value = Mono.just(\"hello\").block();\n        System.out.println(\"block(): \" + value);\n\n        // block() with timeout\n        String timed = Mono.just(\"world\")\n            .block(Duration.ofSeconds(5));\n        System.out.println(\"block(Duration): \" + timed);\n\n        // blockFirst(): block until first Flux item\n        Integer first = Flux.range(1, 100)\n            .blockFirst();\n        System.out.println(\"blockFirst(): \" + first);\n\n        // blockLast(): block until Flux completes\n        Integer last = Flux.range(1, 100)\n            .blockLast();\n        System.out.println(\"blockLast(): \" + last);\n\n        // toIterable(): convert Flux to Iterable\n        Iterable<Integer> iterable = Flux.range(1, 5)\n            .toIterable();\n        System.out.print(\"toIterable(): \");\n        for (Integer i : iterable) {\n            System.out.print(i + \" \");\n        }\n        System.out.println();\n\n        // toStream(): convert Flux to Stream\n        List<Integer> list = Flux.range(1, 5)\n            .toStream()\n            .toList();\n        System.out.println(\"toStream(): \" + list);\n\n        // ---- Blocking to Reactive ----\n\n        // Mono.fromCallable: wrap blocking code\n        Mono<String> fromBlocking = Mono.fromCallable(() -> {\n            Thread.sleep(100);\n            return \"from blocking\";\n        }).subscribeOn(Schedulers.boundedElastic());\n        fromBlocking.subscribe(v -> System.out.println(\"fromCallable: \" + v));\n\n        // Mono.fromSupplier: like fromCallable but no checked exception\n        Mono<String> fromSupplier = Mono.fromSupplier(() -> {\n            return \"supplied on \" + Thread.currentThread().getName();\n        }).subscribeOn(Schedulers.boundedElastic());\n        fromSupplier.subscribe(v -> System.out.println(\"fromSupplier: \" + v));\n\n        // Mono.fromFuture: wrap CompletableFuture\n        Mono<String> fromFuture = Mono.fromFuture(\n            java.util.concurrent.CompletableFuture.supplyAsync(() -> \"from future\")\n        );\n        fromFuture.subscribe(v -> System.out.println(\"fromFuture: \" + v));\n\n        // Flux.fromStream: wrap Stream\n        Flux<Integer> fromStream = Flux.fromStream(\n            java.util.stream.Stream.of(10, 20, 30, 40, 50)\n        );\n        fromStream.subscribe(v -> System.out.println(\"fromStream: \" + v));\n\n        // Mono.fromOptional\n        Mono<String> fromOptional = Mono.fromOptional(Optional.of(\"optional value\"));\n        fromOptional.subscribe(v -> System.out.println(\"fromOptional: \" + v));\n\n        // Wait for async subscribe to complete\n        try { Thread.sleep(500); } catch (InterruptedException e) {}\n    }\n\n    private static Duration ofSeconds(int i) {\n        return Duration.ofSeconds(i);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "14-performance-considerations",
      children: "14. Performance Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.performance;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\nimport java.time.Instant;\n\npublic class PerformanceDemo {\n\n    public static void main(String[] args) throws InterruptedException {\n        int size = 1_000_000;\n\n        // Sequential processing\n        Instant start = Instant.now();\n        Flux.range(1, size)\n            .map(i -> i * 2)\n            .filter(i -> i % 3 == 0)\n            .count()\n            .subscribe(count -> {\n                long elapsed = Duration.between(start, Instant.now()).toMillis();\n                System.out.println(\"Sequential: \" + count + \" items in \" + elapsed + \"ms\");\n            });\n\n        Thread.sleep(5000);\n\n        // Parallel processing\n        start = Instant.now();\n        Flux.range(1, size)\n            .parallel(4)\n            .runOn(Schedulers.parallel())\n            .map(i -> i * 2)\n            .filter(i -> i % 3 == 0)\n            .sequential()\n            .count()\n            .subscribe(count -> {\n                long elapsed = Duration.between(start, Instant.now()).toMillis();\n                System.out.println(\"Parallel(4): \" + count + \" items in \" + elapsed + \"ms\");\n            });\n\n        Thread.sleep(5000);\n\n        // Fusion optimization: Flux.range has built-in fusion optimizations\n        // Use .checkpoint() for debugging heavy operators\n        // Avoid .log() in production (it's slow)\n\n        // Buffer vs Window performance\n        System.out.println(\"\\n--- Buffer vs Window ---\");\n        start = Instant.now();\n        Flux.range(1, 100_000)\n            .buffer(1000)\n            .count()\n            .subscribe(c -> System.out.println(\"Buffer: \" + c + \" batches in \" +\n                Duration.between(start, Instant.now()).toMillis() + \"ms\"));\n\n        start = Instant.now();\n        Flux.range(1, 100_000)\n            .window(1000)\n            .flatMap(Flux::count)\n            .count()\n            .subscribe(c -> System.out.println(\"Window: \" + c + \" windows in \" +\n                Duration.between(start, Instant.now()).toMillis() + \"ms\"));\n\n        // Scheduler overhead: don't use publishOn/subscribeOn unnecessarily\n        // Each scheduler change introduces a context switch overhead\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "15-common-pitfalls-and-anti-patterns",
      children: "15. Common Pitfalls and Anti-Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.pitfalls;\n\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.core.scheduler.Schedulers;\nimport java.time.Duration;\n\npublic class CommonPitfalls {\n\n    public static void main(String[] args) throws InterruptedException {\n        // Pitfall 1: blocking inside reactive pipeline\n        System.out.println(\"=== Pitfall 1: Blocking in pipeline ===\");\n        Flux.range(1, 5)\n            .map(i -> {\n                try { Thread.sleep(100); } catch (InterruptedException e) {} // WRONG\n                return i * 2;\n            })\n            .subscribe(v -> System.out.println(\"  \" + v));\n\n        // Fix: wrap blocking in Mono.fromCallable + subscribeOn\n        System.out.println(\"\\n=== Fix: Use subscribeOn for blocking ===\");\n        Flux.range(1, 5)\n            .flatMap(i -> Mono.fromCallable(() -> {\n                    Thread.sleep(100);\n                    return i * 2;\n                }).subscribeOn(Schedulers.boundedElastic()))\n            .subscribe(v -> System.out.println(\"  \" + v));\n\n        Thread.sleep(1500);\n\n        // Pitfall 2: shared mutable state\n        System.out.println(\"\\n=== Pitfall 2: Shared mutable state ===\");\n        int[] counter = {0}; // WRONG: not thread-safe\n        Flux.range(1, 1000)\n            .parallel(4)\n            .runOn(Schedulers.parallel())\n            .map(i -> counter[0]++) // Race condition!\n            .sequential()\n            .count()\n            .subscribe(c -> System.out.println(\"  Counter should be 1000 but is \" + counter[0]));\n\n        Thread.sleep(500);\n\n        // Pitfall 3: missing error handling\n        System.out.println(\"\\n=== Pitfall 3: Missing error handling ===\");\n        Flux.just(1, 0, 2)\n            .map(i -> 10 / i)\n            .subscribe(\n                v -> System.out.println(\"  \" + v),\n                e -> System.err.println(\"  Error caught: \" + e.getMessage())\n            );\n\n        // Pitfall 4: no backpressure handling\n        System.out.println(\"\\n=== Pitfall 4: Backpressure ===\");\n        Flux.interval(Duration.ofMillis(1))\n            .onBackpressureDrop() // Must specify strategy\n            .take(100)\n            .subscribe(v -> {});\n\n        Thread.sleep(500);\n\n        // Pitfall 5: creating resources inside flatMap without cleanup\n        // Use using() or usingWhen() for resource management\n\n        // Pitfall 6: subscribing multiple times to a cold publisher with side effects\n        System.out.println(\"\\n=== Pitfall 6: Multiple subscription side effects ===\");\n        Flux<String> cold = Flux.just(\"a\", \"b\", \"c\")\n            .doOnNext(v -> System.out.println(\"  Side effect: \" + v));\n        cold.subscribe(); // Side effect runs\n        cold.subscribe(); // Side effect runs AGAIN\n\n        // Pitfall 7: ignoring Mono.empty() vs Mono.error()\n        // Empty completes silently, error propagates → choose deliberately\n\n        // Pitfall 8: subscribe() without consumer → errors are silently swallowed!\n        System.out.println(\"\\n=== Pitfall 8: Silent error ===\");\n        Flux.error(new RuntimeException(\"Silent error\"))\n            .subscribe(); // No output → error is lost\n            // Always log errors in subscribe\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "16-stepverifier-comprehensive-testing",
      children: "16. StepVerifier Comprehensive Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.reactor.testing.comprehensive;\n\nimport org.junit.jupiter.api.Test;\nimport reactor.core.publisher.Flux;\nimport reactor.core.publisher.Mono;\nimport reactor.test.StepVerifier;\nimport reactor.test.StepVerifierOptions;\nimport reactor.test.publisher.TestPublisher;\nimport java.time.Duration;\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\n\nclass ComprehensiveStepVerifierTests {\n\n    @Test\n    void testWithScenarioName() {\n        StepVerifier.create(Mono.just(\"data\"),\n                StepVerifierOptions.create().scenarioName(\"Single value test\"))\n            .expectNext(\"data\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testWithInitialRequest() {\n        Flux<Integer> flux = Flux.range(1, 10);\n\n        StepVerifier.create(flux, StepVerifierOptions.create().initialRequest(3))\n            .expectNext(1, 2, 3)\n            .thenRequest(2)\n            .expectNext(4, 5)\n            .thenRequest(5)\n            .expectNext(6, 7, 8, 9, 10)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testWithVirtualTimeCheck() {\n        StepVerifier.withVirtualTime(() ->\n                Flux.interval(Duration.ofSeconds(1)).take(3))\n            .expectSubscription()\n            .expectNoEvent(Duration.ofSeconds(1))\n            .thenAwait(Duration.ofSeconds(2))\n            .expectNext(0L, 1L, 2L)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testOnErrorResume() {\n        Flux<Integer> flux = Flux.just(1, 2, 0, 3)\n            .map(i -> 10 / i)\n            .onErrorResume(e -> Flux.just(-1));\n\n        StepVerifier.create(flux)\n            .expectNext(10, 5)\n            .expectNext(-1)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testRetry() {\n        Mono<String> failing = Mono.error(new RuntimeException(\"fail\"));\n        Mono<String> retried = failing.retry(2)\n            .onErrorReturn(\"fallback\");\n\n        StepVerifier.create(retried)\n            .expectNext(\"fallback\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testZip() {\n        Flux<String> names = Flux.just(\"A\", \"B\", \"C\");\n        Flux<Integer> scores = Flux.just(90, 85, 95);\n        Flux<String> grades = Flux.just(\"A\", \"B\", \"A\");\n\n        StepVerifier.create(\n                Flux.zip(names, scores, grades)\n                    .map(t -> t.getT1() + \": \" + t.getT2() + \" (\" + t.getT3() + \")\")\n            )\n            .expectNext(\"A: 90 (A)\", \"B: 85 (B)\", \"C: 95 (A)\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testConcatMapOrder() {\n        Flux<Integer> flux = Flux.just(3, 1, 2)\n            .concatMap(i -> Flux.just(i, i * 10));\n\n        StepVerifier.create(flux)\n            .expectNext(3, 30, 1, 10, 2, 20)\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testThenMany() {\n        Mono<String> first = Mono.just(\"first\");\n        Mono<String> second = Mono.just(\"second\");\n\n        StepVerifier.create(first.thenMany(second))\n            .expectNext(\"second\")\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testWhen() {\n        Mono<String> a = Mono.just(\"A\");\n        Mono<String> b = Mono.just(\"B\");\n\n        StepVerifier.create(a.when(b))\n            .expectComplete()\n            .verify();\n    }\n\n    @Test\n    void testContextPropagation() {\n        Mono<String> withCtx = Mono.deferContextual(ctx ->\n            Mono.just(\"user: \" + ctx.get(\"userId\"))\n        );\n\n        StepVerifier.create(withCtx)\n            .expectError(IllegalArgumentException.class)\n            .verify();\n    }\n}\n"
      })
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
            children: "Approach A"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach B"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Approach C"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core description"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Primary differentiator"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "When to use this"
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
            children: "Key Commands/APIs"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Notes"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Setup"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Required dependencies and configuration"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify versions match"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Implementation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Core code patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test edge cases"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Testing"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verification methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cover success and failure paths"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Scenario"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern A"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern B"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Pattern C"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Small application"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Enterprise system"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "High-throughput API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✗"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "✓"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary benefit of this chapter's main topic?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improved performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Better developer productivity"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Enhanced reliability"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) All of the above"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) Enhanced reliability.** While all are benefits, the core value proposition is reliability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which approach is recommended for production deployments?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) The simplest solution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The most feature-rich option"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The one with best operational characteristics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Whatever the team knows best"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) The one with best operational characteristics.** Production choices should prioritize observability, maintainability, and operability.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["When should you consider this pattern?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) For every project regardless of size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) When complexity justifies the overhead"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Only in legacy systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Never → it is outdated"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) When complexity justifies the overhead.** Apply patterns when the problem complexity warrants the additional abstraction.\n"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covered the full scope of Project Reactor and the Reactive Streams specification:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Streams"
          }), " defines four interfaces: Publisher, Subscriber, Subscription, and Processor with a strict signaling protocol and mandatory backpressure support."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Flux"
          }), " (0..N items) and ", (0,jsx_runtime.jsx)(_components.strong, {
            children: "Mono"
          }), " (0..1 item) are the two primary publisher types in Reactor. They are lazy → nothing executes until a subscription is made."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Creating publishers"
          }), " uses factories like ", (0,jsx_runtime.jsx)(_components.code, {
            children: "just()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "fromIterable()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "range()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "interval()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "generate()"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "create()"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "defer()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Operators"
          }), " are the building blocks: transformation (", (0,jsx_runtime.jsx)(_components.code, {
            children: "map"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "flatMap"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "concatMap"
          }), "), filtering (", (0,jsx_runtime.jsx)(_components.code, {
            children: "filter"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "distinct"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "take"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "skip"
          }), "), combination (", (0,jsx_runtime.jsx)(_components.code, {
            children: "concat"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "merge"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "zip"
          }), "), aggregation (", (0,jsx_runtime.jsx)(_components.code, {
            children: "reduce"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "scan"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "buffer"
          }), "), and error handling (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorReturn"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorResume"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "retry"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Backpressure"
          }), " is the demand-driven protocol that prevents downstream overwhelm. Strategies include ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onBackpressureBuffer"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onBackpressureDrop"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onBackpressureLatest"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onBackpressureError"
          }), ". Manual control uses ", (0,jsx_runtime.jsx)(_components.code, {
            children: "limitRate()"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Schedulers"
          }), " control thread execution. ", (0,jsx_runtime.jsx)(_components.code, {
            children: "publishOn"
          }), " shifts downstream operators to a scheduler; ", (0,jsx_runtime.jsx)(_components.code, {
            children: "subscribeOn"
          }), " shifts upstream operators including the source. Key schedulers: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "parallel"
          }), " (CPU-bound), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "boundedElastic"
          }), " (blocking I/O), ", (0,jsx_runtime.jsx)(_components.code, {
            children: "single"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "immediate"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Error handling"
          }), " uses operators rather than try-catch. Patterns include fallback values (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorReturn"
          }), "), fallback publishers (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorResume"
          }), "), recovery (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorContinue"
          }), "), error mapping (", (0,jsx_runtime.jsx)(_components.code, {
            children: "onErrorMap"
          }), "), and retry with backoff (", (0,jsx_runtime.jsx)(_components.code, {
            children: "retryWhen"
          }), ")."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context"
          }), " provides thread-safe metadata propagation through reactive chains, replacing ThreadLocal for correlation IDs, trace IDs, and user identities."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "StepVerifier"
          }), " provides declarative assertion over reactive sequences, including virtual time for time-based operators and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "TestPublisher"
          }), " for controlled emission."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Publishers"
          }), " can be cold (each subscriber gets its own stream) or hot (subscribers share the same stream). ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ConnectableFlux"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Sinks"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "cache()"
          }), " provide hot behavior."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "review-questions",
      children: "Review Questions"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What are the four interfaces of the Reactive Streams specification and what role does each play?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Explain the difference between ", (0,jsx_runtime.jsx)(_components.code, {
          children: "map"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), ". When would you use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "concatMap"
        }), " instead of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "flatMap"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is backpressure and why is it important in reactive systems?"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["How does ", (0,jsx_runtime.jsx)(_components.code, {
          children: "publishOn"
        }), " differ from ", (0,jsx_runtime.jsx)(_components.code, {
          children: "subscribeOn"
        }), "?"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "What is the difference between a hot and a cold publisher? Give an example of each."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-problems",
      children: "Application Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Parallel API Calls"
          }), ": Write a method that takes a list of user IDs and fetches user profiles concurrently (max 5 at a time), collecting results into a single List. Handle individual failures by returning a default profile for failed fetches."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Retry with Backoff"
          }), ": Create a reactive pipeline that reads from an unreliable data source (simulated by failing on odd-numbered attempts). Implement retry with exponential backoff (base delay 100ms, max 3 retries) and return a cached fallback if all retries fail."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Time-based Batching"
          }), ": Build a pipeline that batches incoming events (simulate with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Flux.interval"
          }), ") into groups of at most 10 items or within 1-second windows, whichever comes first. Log each batch."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Context Propagation"
          }), ": Create a reactive pipeline that passes a correlation ID through the context from a controller through a service to a repository mock. Log the correlation ID at each layer."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Backpressure"
          }), ": Implement a subscriber that requests items at a rate of 1 per second. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "onBackpressureDrop"
          }), " to handle overflow, and log all dropped items."]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "challenge-problems",
      children: "Challenge Problems"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Order Processing System"
          }), ": Build a complete order processing pipeline that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Validates the order (simulated delay 50ms)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Checks inventory (simulated delay 100ms, occasionally fails)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Processes payment (simulated delay 200ms, with retry on failure)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sends confirmation (simulated delay 50ms)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Uses parallel execution for independent steps"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles failures gracefully with fallbacks"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Times out individual steps if they take too long"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Logs execution time for each step"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Rate Limiter"
          }), ": Implement a token bucket rate limiter as a reactive operator. The limiter should:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allow N requests per second (configurable)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Buffer excess requests up to a max queue size"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Drop requests beyond the queue with an error signal"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emit metrics on accepted/dropped/buffered counts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use virtual time in tests to verify correctness"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive File Processor"
          }), ": Build a pipeline that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Reads lines from a large text file reactively (use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Flux.using"
            }), " for resource management)"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Groups lines by a key (e.g., date prefix)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Processes each group in parallel"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Aggregates results into a report"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles encoding errors gracefully by skipping malformed lines"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "StepVerifier"
            }), " with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TestPublisher"
            }), " to simulate file content"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Event Bus"
          }), ": Implement a lightweight event bus using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Sinks.Many"
          }), " that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Supports typed events with a ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Event<T>"
            }), " wrapper containing type, payload, timestamp"]
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Allows consumers to subscribe to specific event types via filtering"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implements at-least-once delivery with acknowledgement"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Handles backpressure by switching to latest mode for slow consumers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Provides metrics on event throughput and consumer lag"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Reactive Circuit Breaker"
          }), ": Implement a reactive circuit breaker operator (without using Resilience4j) that:"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Tracks failure rate over a sliding window of the last N calls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Opens the circuit when failure rate exceeds a threshold"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Half-opens after a configurable cool-down period"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Probes with a single request in half-open state"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Closes or re-opens based on probe result"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Emits a fallback value when the circuit is open"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Test with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "StepVerifier"
            }), " and virtual time"]
          }), "\n"]
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