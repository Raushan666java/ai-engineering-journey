"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5517],{

/***/ 9146
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_34_async_events_md_259_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-34-async-events-md-259.json
const site_docs_courses_java_34_async_events_md_259_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/34-async-events","title":"Async Processing & Spring Events","description":"Previous RabbitMQ","source":"@site/docs/courses/java/34-async-events.md","sourceDirName":"courses/java","slug":"/java/34-async-events","permalink":"/ai-engineering-journey/java/34-async-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":34,"frontMatter":{"id":"34-async-events","slug":"/java/34-async-events","title":"Async Processing & Spring Events","sidebar_label":"Async Processing & Spring Events","sidebar_position":34},"sidebar":"course-java","previous":{"title":"Security Testing & Performance Testing","permalink":"/ai-engineering-journey/java/33-security-perf-test"},"next":{"title":"RabbitMQ","permalink":"/ai-engineering-journey/java/35-rabbitmq"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/34-async-events.md


const frontMatter = {
	id: '34-async-events',
	slug: '/java/34-async-events',
	title: 'Async Processing & Spring Events',
	sidebar_label: 'Async Processing & Spring Events',
	sidebar_position: 34
};
const contentTitle = 'Async Processing & Spring Events';

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
  "value": "Theory",
  "id": "theory",
  "level": 2
}, {
  "value": "1. The Synchronous Problem",
  "id": "1-the-synchronous-problem",
  "level": 3
}, {
  "value": "2. Enabling Async Support",
  "id": "2-enabling-async-support",
  "level": 3
}, {
  "value": "3. Thread Pool Configuration with ThreadPoolTaskExecutor",
  "id": "3-thread-pool-configuration-with-threadpooltaskexecutor",
  "level": 3
}, {
  "value": "4. @Async with void Methods",
  "id": "4-async-with-void-methods",
  "level": 3
}, {
  "value": "5. @Async with CompletableFuture",
  "id": "5-async-with-completablefuture",
  "level": 3
}, {
  "value": "6. @Async with ListenableFuture (Legacy)",
  "id": "6-async-with-listenablefuture-legacy",
  "level": 3
}, {
  "value": "7. Async Exception Handling",
  "id": "7-async-exception-handling",
  "level": 3
}, {
  "value": "8. Custom Thread Pool with Named Qualifier",
  "id": "8-custom-thread-pool-with-named-qualifier",
  "level": 3
}, {
  "value": "9. Application Events — The Traditional Way",
  "id": "9-application-events--the-traditional-way",
  "level": 3
}, {
  "value": "10. Annotation-Based @EventListener",
  "id": "10-annotation-based-eventlistener",
  "level": 3
}, {
  "value": "11. @TransactionalEventListener",
  "id": "11-transactionaleventlistener",
  "level": 3
}, {
  "value": "12. Making Event Listeners Async",
  "id": "12-making-event-listeners-async",
  "level": 3
}, {
  "value": "13. Generic Events",
  "id": "13-generic-events",
  "level": 3
}, {
  "value": "14. Event Payload Design",
  "id": "14-event-payload-design",
  "level": 3
}, {
  "value": "15. Event Batching",
  "id": "15-event-batching",
  "level": 3
}, {
  "value": "16. Event Priority",
  "id": "16-event-priority",
  "level": 3
}, {
  "value": "17. Event Sourcing Basics",
  "id": "17-event-sourcing-basics",
  "level": 3
}, {
  "value": "18. Full Asynchronous Event Pipeline",
  "id": "18-full-asynchronous-event-pipeline",
  "level": 3
}, {
  "value": "19. Unit Testing Async Methods",
  "id": "19-unit-testing-async-methods",
  "level": 3
}, {
  "value": "20. Monitoring Async Execution",
  "id": "20-monitoring-async-execution",
  "level": 3
}, {
  "value": "21. Advanced ThreadPoolTaskExecutor Configuration",
  "id": "21-advanced-threadpooltaskexecutor-configuration",
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
  "value": "Exercise 1: Configure a Thread Pool",
  "id": "exercise-1-configure-a-thread-pool",
  "level": 3
}, {
  "value": "Exercise 2: Async Report Generation",
  "id": "exercise-2-async-report-generation",
  "level": 3
}, {
  "value": "Exercise 3: Compose Async Results",
  "id": "exercise-3-compose-async-results",
  "level": 3
}, {
  "value": "Exercise 4: Async Error Handling",
  "id": "exercise-4-async-error-handling",
  "level": 3
}, {
  "value": "Exercise 5: Publish Custom Event",
  "id": "exercise-5-publish-custom-event",
  "level": 3
}, {
  "value": "Exercise 6: Conditional Event Listener",
  "id": "exercise-6-conditional-event-listener",
  "level": 3
}, {
  "value": "Exercise 7: Transaction-Bound Event",
  "id": "exercise-7-transaction-bound-event",
  "level": 3
}, {
  "value": "Exercise 8: Async Event Listener",
  "id": "exercise-8-async-event-listener",
  "level": 3
}, {
  "value": "Exercise 9: Event Store Implementation",
  "id": "exercise-9-event-store-implementation",
  "level": 3
}, {
  "value": "Exercise 10: Comprehensive Async Pipeline",
  "id": "exercise-10-comprehensive-async-pipeline",
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
    hr: "hr",
    img: "img",
    li: "li",
    mermaid: "mermaid",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "async-processing--spring-events",
        children: "Async Processing & Spring Events"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/33-security-perf-test",
          children: "Security and Performance Testing"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/35-rabbitmq",
          children: "RabbitMQ"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure and use Spring's ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Async"
        }), " annotation for asynchronous method execution"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Tune thread pools with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ThreadPoolTaskExecutor"
        }), " including core/max pool sizes, queue capacity, keep-alive, and rejection policies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Return ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletableFuture"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ListenableFuture"
        }), " from async methods and compose results"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle async method exceptions with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsyncUncaughtExceptionHandler"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletableFuture"
        }), " error recovery"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Publish and listen to Spring ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ApplicationEvent"
        }), " objects using both programmatic and annotation-based approaches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EventListener"
        }), " with SpEL expressions, ordering, and conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Apply ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TransactionalEventListener"
        }), " for transaction-bound event handling with phase control"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Combine ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Async"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EventListener"
        }), " for fully asynchronous event processing"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design effective event payloads, implement event batching, and evaluate event sourcing basics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Async in Spring → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableAsync"
            }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TaskExecutor"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decouple method execution from caller thread"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Spring Events → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationEventPublisher"
            }), " and ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-process pub/sub for loose coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Transaction-Bound Events → ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@TransactionalEventListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "React to events after transaction commit or rollback"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Async and Events] --> B[\"@Async\"]\r\n    A --> C[Application Events]\r\n    A --> D[Transactional Events]\r\n    B --> B1[TaskExecutor config]\r\n    B --> B2[Future / CompletableFuture]\r\n    C --> C1[ApplicationEventPublisher]\r\n    C --> C2[\"@EventListener\"]\r\n    D --> D1[\"@TransactionalEventListener\"]\r\n    D --> D2[\"Phase: AFTER_COMMIT / AFTER_ROLLBACK\"]"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Difference"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Runs method in separate thread"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Requires ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableAsync"
            }), ", uses ", (0,jsx_runtime.jsx)(_components.code, {
              children: "TaskExecutor"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationEventPublisher"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishes application events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous by default"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listens for application events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional with SpEL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@TransactionalEventListener"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Listens after transaction phase"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "phase = TransactionPhase.AFTER_COMMIT"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Element"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Example"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EnableAsync"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Enables Spring async support"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Add to ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Configuration"
            }), " class"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Marks method for async execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async void sendNotification(User user)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "ApplicationEventPublisher.publishEvent()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishes an event"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "publisher.publishEvent(new OrderCreatedEvent(order))"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener(condition = ...)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Conditional event listener"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@EventListener(condition = \"#event.success\")"
            })
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "cross-application-matrix",
      children: "Cross-Application Matrix"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Domain"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Application"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Email Notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Async"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Send welcome emails without blocking the HTTP response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audit Logging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@TransactionalEventListener(afterCommit)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Log after DB transaction succeeds"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Cache Eviction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Application Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publish cache clear event on data update"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation enables async processing in Spring? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EnableAsync"
        }), " on a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Configuration"
        }), " class"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the default behavior of ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ApplicationEventPublisher.publishEvent()"
        }), "? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Synchronous → the publisher blocks until all listeners finish"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which event listener annotation reacts only after a successful transaction? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/34-async-events.png",
        alt: "Async Processing & Events Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-the-synchronous-problem",
      children: "1. The Synchronous Problem"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Most Spring beans execute synchronously by default. When a method does I/O, calls a remote API, or performs a CPU-intensive computation, the caller's thread blocks. In a web application, this means one of the container's request-handling threads is stuck waiting. Under load, the thread pool saturates, requests queue up, and latency spikes."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Asynchronous processing decouples the caller from the callee's execution. The caller fires a task and continues immediately; a separate thread — managed by a thread pool — executes the task later."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-enabling-async-support",
      children: "2. Enabling Async Support"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's async support requires the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EnableAsync"
      }), " annotation. It is an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Configuration"
      }), "-level annotation that tells Spring to scan for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " on beans and to create proxies (either JDK dynamic proxies or CGLIB proxies) that intercept calls and dispatch them to a task executor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableAsync\r\npublic class AsyncConfig {\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, Spring uses a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SimpleAsyncTaskExecutor"
      }), " which creates a new thread per task. ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "This is not suitable for production"
      }), " because it does not reuse threads. You must override the executor strategy."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-thread-pool-configuration-with-threadpooltaskexecutor",
      children: "3. Thread Pool Configuration with ThreadPoolTaskExecutor"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "ThreadPoolTaskExecutor"
      }), " wraps ", (0,jsx_runtime.jsx)(_components.code, {
        children: "java.util.concurrent.ThreadPoolExecutor"
      }), " and exposes Spring-friendly bean properties. It is the standard production choice."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableAsync\r\npublic class ThreadPoolConfig {\r\n\r\n    @Bean(name = \"taskExecutor\")\r\n    public Executor taskExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(5);\r\n        executor.setMaxPoolSize(25);\r\n        executor.setQueueCapacity(100);\r\n        executor.setKeepAliveSeconds(120);\r\n        executor.setThreadNamePrefix(\"async-worker-\");\r\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\r\n        executor.setWaitForTasksToCompleteOnShutdown(true);\r\n        executor.setAwaitTerminationSeconds(30);\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key properties explained:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Purpose"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "corePoolSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Threads kept alive even when idle. Initial pool size."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "maxPoolSize"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum threads if queue fills up."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "queueCapacity"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["The number of tasks that can sit in the ", (0,jsx_runtime.jsx)(_components.code, {
              children: "BlockingQueue"
            }), " before new threads are created beyond ", (0,jsx_runtime.jsx)(_components.code, {
              children: "corePoolSize"
            }), "."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "keepAliveSeconds"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Idle threads beyond ", (0,jsx_runtime.jsx)(_components.code, {
              children: "corePoolSize"
            }), " are terminated after this time."]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "threadNamePrefix"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for naming threads in logs and monitoring."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rejectedExecutionHandler"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Policy when both pool and queue are saturated."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Rejection Policy comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Policy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AbortPolicy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Throws ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RejectedExecutionException"
            }), " (default, dangerous)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "CallerRunsPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The calling thread executes the task. Back-pressure."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DiscardPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Silently drops the task."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "DiscardOldestPolicy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Drops the oldest queued task, then retries."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Pool scaling behavior:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If running threads < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "corePoolSize"
        }), ", a new thread is created."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If running threads >= ", (0,jsx_runtime.jsx)(_components.code, {
          children: "corePoolSize"
        }), ", the task is queued."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the queue is full and running threads < ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxPoolSize"
        }), ", a new thread is created."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["If the queue is full and running threads >= ", (0,jsx_runtime.jsx)(_components.code, {
          children: "maxPoolSize"
        }), ", the rejection policy kicks in."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-async-with-void-methods",
      children: "4. @Async with void Methods"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The simplest use of ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " is on a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " method. The caller returns immediately; the method runs on a pool thread."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class EmailService {\r\n\r\n    @Async\r\n    public void sendWelcomeEmail(String email) {\r\n        // Simulate email sending\r\n        try {\r\n            Thread.sleep(2000);\r\n        } catch (InterruptedException e) {\r\n            Thread.currentThread().interrupt();\r\n        }\r\n        System.out.printf(\"Welcome email sent to %s on thread %s%n\",\r\n            email, Thread.currentThread().getName());\r\n    }\r\n\r\n    @Async(\"customExecutor\")\r\n    public void sendPasswordReset(String email) {\r\n        // Uses the bean named \"customExecutor\"\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Important caveats:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The caller must invoke the method ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "from outside the class"
        }), ". Self-invocation bypasses the proxy."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
          children: "void"
        }), " return means the caller cannot know if the method failed. Exceptions are silently lost unless a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsyncUncaughtExceptionHandler"
        }), " is installed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-async-with-completablefuture",
      children: "5. @Async with CompletableFuture"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture<T>"
      }), " from an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " method gives the caller a handle to:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get the result or timeout"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Compose with other futures (", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenApply"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenCompose"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "thenCombine"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle errors with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "exceptionally()"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "handle()"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class ReportService {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(ReportService.class);\r\n\r\n    @Async\r\n    public CompletableFuture<Report> generateReport(String reportId) {\r\n        log.info(\"Generating report {} on thread {}\", reportId,\r\n            Thread.currentThread().getName());\r\n        try {\r\n            Thread.sleep(1500);\r\n        } catch (InterruptedException e) {\r\n            Thread.currentThread().interrupt();\r\n        }\r\n        Report report = new Report(reportId, \"Q4 Results\", \"PDF\");\r\n        return CompletableFuture.completedFuture(report);\r\n    }\r\n\r\n    @Async\r\n    public CompletableFuture<List<String>> fetchDataSources(String reportId) {\r\n        log.info(\"Fetching data sources for {} on thread {}\", reportId,\r\n            Thread.currentThread().getName());\r\n        return CompletableFuture.completedFuture(List.of(\"sales_db\", \"inventory_api\"));\r\n    }\r\n\r\n    @Async\r\n    public CompletableFuture<Void> cacheReport(Report report) {\r\n        log.info(\"Caching report {} on thread {}\", report.getId(),\r\n            Thread.currentThread().getName());\r\n        return CompletableFuture.allOf();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Composing async results:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class ReportCoordinator {\r\n\r\n    private final ReportService reportService;\r\n\r\n    public ReportCoordinator(ReportService reportService) {\r\n        this.reportService = reportService;\r\n    }\r\n\r\n    public CompletableFuture<Report> buildReport(String reportId) {\r\n        CompletableFuture<Report> reportFuture = reportService.generateReport(reportId);\r\n        CompletableFuture<List<String>> dataFuture = reportService.fetchDataSources(reportId);\r\n\r\n        return reportFuture.thenCombine(dataFuture, (report, sources) -> {\r\n            report.setDataSources(sources);\r\n            return report;\r\n        }).thenCompose(report ->\r\n            reportService.cacheReport(report)\r\n                .thenApply(v -> report)\r\n        );\r\n    }\r\n\r\n    public Report buildReportSync(String reportId) {\r\n        return buildReport(reportId)\r\n            .completeOnTimeout(null, 10, TimeUnit.SECONDS)\r\n            .exceptionally(ex -> {\r\n                log.error(\"Report generation failed\", ex);\r\n                return null;\r\n            })\r\n            .join();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error recovery with CompletableFuture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "reportService.generateReport(\"R-001\")\r\n    .thenApply(Report::getId)\r\n    .handle((id, ex) -> {\r\n        if (ex != null) {\r\n            log.error(\"Failed to generate report\", ex);\r\n            return null;\r\n        }\r\n        return id;\r\n    });\r\n\r\nreportService.generateReport(\"R-002\")\r\n    .exceptionally(ex -> {\r\n        log.warn(\"Recovering from error\", ex);\r\n        return Report.errorReport(\"R-002\", ex.getMessage());\r\n    })\r\n    .thenAccept(report -> log.info(\"Recovered report: {}\", report));\r\n\r\nreportService.generateReport(\"R-003\")\r\n    .whenComplete((report, ex) -> {\r\n        if (ex == null) {\r\n            log.info(\"Success: {}\", report);\r\n        } else {\r\n            log.error(\"Failure\", ex);\r\n        }\r\n    });\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-async-with-listenablefuture-legacy",
      children: "6. @Async with ListenableFuture (Legacy)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Before ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), ", Spring provided ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ListenableFuture"
      }), ". It is still supported but ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture"
      }), " is preferred."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Async\r\npublic ListenableFuture<String> processOrder(Long orderId) {\r\n    return AsyncResult.forValue(\"Processed order \" + orderId);\r\n}\r\n\r\n@Async\r\npublic ListenableFuture<String> processOrderWithCallback(Long orderId) {\r\n    ListenableFuture<String> future = AsyncResult.forValue(\"Processed \" + orderId);\r\n    future.addCallback(\r\n        result -> log.info(\"Success: {}\", result),\r\n        ex -> log.error(\"Failure\", ex)\r\n    );\r\n    return future;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-async-exception-handling",
      children: "7. Async Exception Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Uncaught exceptions in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "void"
      }), " async methods are invisible by default. Spring provides two ways to handle them:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.1 Implement AsyncConfigurer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableAsync\r\npublic class AsyncExceptionConfig implements AsyncConfigurer {\r\n\r\n    @Override\r\n    public Executor getAsyncExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(5);\r\n        executor.setMaxPoolSize(10);\r\n        executor.setQueueCapacity(50);\r\n        executor.setThreadNamePrefix(\"async-\");\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n\r\n    @Override\r\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\r\n        return new SimpleAsyncExceptionHandler();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.2 Custom AsyncUncaughtExceptionHandler:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SimpleAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(SimpleAsyncExceptionHandler.class);\r\n\r\n    @Override\r\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\r\n        log.error(\"Async method {} threw exception\", method.getName(), ex);\r\n        log.warn(\"Method parameters: {}\", Arrays.toString(params));\r\n        // Send alert, write to dead-letter queue, etc.\r\n        if (ex instanceof DataAccessException) {\r\n            // Retry logic could go here\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.3 Multiple Handlers via Delegation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DelegatingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\r\n\r\n    private final List<AsyncUncaughtExceptionHandler> handlers;\r\n\r\n    public DelegatingAsyncExceptionHandler(List<AsyncUncaughtExceptionHandler> handlers) {\r\n        this.handlers = handlers;\r\n    }\r\n\r\n    @Override\r\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\r\n        for (AsyncUncaughtExceptionHandler handler : handlers) {\r\n            try {\r\n                handler.handleUncaughtException(ex, method, params);\r\n            } catch (Exception e) {\r\n                // Log and continue – never let one handler break the chain\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.4 Logging Async Failures with AOP:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Aspect\r\n@Component\r\npublic class AsyncLoggingAspect {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(AsyncLoggingAspect.class);\r\n\r\n    @Around(\"@annotation(org.springframework.scheduling.annotation.Async)\")\r\n    public Object logAsyncExecution(ProceedingJoinPoint pjp) throws Throwable {\r\n        String methodName = pjp.getSignature().toShortString();\r\n        log.info(\"Entering async method: {}\", methodName);\r\n        long start = System.currentTimeMillis();\r\n        try {\r\n            Object result = pjp.proceed();\r\n            long elapsed = System.currentTimeMillis() - start;\r\n            log.info(\"Completed async method: {} in {}ms\", methodName, elapsed);\r\n            return result;\r\n        } catch (Exception ex) {\r\n            log.error(\"Async method {} failed after {}ms\", methodName,\r\n                System.currentTimeMillis() - start, ex);\r\n            throw ex;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-custom-thread-pool-with-named-qualifier",
      children: "8. Custom Thread Pool with Named Qualifier"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When you need multiple pools for different workloads (I/O vs CPU), use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Qualifier"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class MultiPoolConfig {\r\n\r\n    @Bean(name = \"ioTaskExecutor\")\r\n    public Executor ioTaskExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(10);\r\n        executor.setMaxPoolSize(50);\r\n        executor.setQueueCapacity(200);\r\n        executor.setThreadNamePrefix(\"io-\");\r\n        executor.setKeepAliveSeconds(60);\r\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n\r\n    @Bean(name = \"cpuTaskExecutor\")\r\n    public Executor cpuTaskExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        int cores = Runtime.getRuntime().availableProcessors();\r\n        executor.setCorePoolSize(cores);\r\n        executor.setMaxPoolSize(cores * 2);\r\n        executor.setQueueCapacity(50);\r\n        executor.setThreadNamePrefix(\"cpu-\");\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n\r\n    @Bean(name = \"eventTaskExecutor\")\r\n    public Executor eventTaskExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(4);\r\n        executor.setMaxPoolSize(10);\r\n        executor.setQueueCapacity(500);\r\n        executor.setThreadNamePrefix(\"event-\");\r\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.DiscardPolicy());\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class HybridService {\r\n\r\n    @Async(\"ioTaskExecutor\")\r\n    public CompletableFuture<String> callExternalApi(String url) {\r\n        return CompletableFuture.completedFuture(\"response from \" + url);\r\n    }\r\n\r\n    @Async(\"cpuTaskExecutor\")\r\n    public CompletableFuture<BigDecimal> calculateRisk(DataPoint dp) {\r\n        return CompletableFuture.completedFuture(dp.calculateRiskScore());\r\n    }\r\n\r\n    @Async(\"eventTaskExecutor\")\r\n    public void fireNotification(String userId) {\r\n        // fast fire-and-forget\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-application-events--the-traditional-way",
      children: "9. Application Events — The Traditional Way"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationEvent"
      }), " class and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationEventPublisher"
      }), " provide a publish-subscribe mechanism within the same Spring ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationContext"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderCreatedEvent extends ApplicationEvent {\r\n\r\n    private final Long orderId;\r\n    private final String customerEmail;\r\n    private final BigDecimal total;\r\n    private final LocalDateTime createdAt;\r\n\r\n    public OrderCreatedEvent(Object source, Long orderId, String customerEmail,\r\n                             BigDecimal total, LocalDateTime createdAt) {\r\n        super(source);\r\n        this.orderId = orderId;\r\n        this.customerEmail = customerEmail;\r\n        this.total = total;\r\n        this.createdAt = createdAt;\r\n    }\r\n\r\n    public Long getOrderId() { return orderId; }\r\n    public String getCustomerEmail() { return customerEmail; }\r\n    public BigDecimal getTotal() { return total; }\r\n    public LocalDateTime getCreatedAt() { return createdAt; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publisher:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class OrderEventPublisher {\r\n\r\n    private final ApplicationEventPublisher publisher;\r\n\r\n    public OrderEventPublisher(ApplicationEventPublisher publisher) {\r\n        this.publisher = publisher;\r\n    }\r\n\r\n    public void publishOrderCreated(Order order) {\r\n        OrderCreatedEvent event = new OrderCreatedEvent(\r\n            this,\r\n            order.getId(),\r\n            order.getCustomerEmail(),\r\n            order.getTotal(),\r\n            order.getCreatedAt()\r\n        );\r\n        publisher.publishEvent(event);\r\n    }\r\n\r\n    public void publishOrderCancelled(Order order, String reason) {\r\n        OrderCancelledEvent event = new OrderCancelledEvent(\r\n            this,\r\n            order.getId(),\r\n            reason\r\n        );\r\n        publisher.publishEvent(event);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener (classic):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class InventoryUpdateListener implements ApplicationListener<OrderCreatedEvent> {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(InventoryUpdateListener.class);\r\n\r\n    @Override\r\n    public void onApplicationEvent(OrderCreatedEvent event) {\r\n        log.info(\"Reserving inventory for order {}\", event.getOrderId());\r\n        // Inventory reservation logic\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple listeners receive the same event synchronously by default."
      }), " The publisher thread blocks until all listeners finish."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-annotation-based-eventlistener",
      children: "10. Annotation-Based @EventListener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Modern code should use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " on any bean method:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class EmailNotificationListener {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(EmailNotificationListener.class);\r\n\r\n    @EventListener\r\n    public void handleOrderCreated(OrderCreatedEvent event) {\r\n        log.info(\"Sending confirmation email for order {} to {}\",\r\n            event.getOrderId(), event.getCustomerEmail());\r\n    }\r\n\r\n    @EventListener\r\n    public void handleOrderCancelled(OrderCancelledEvent event) {\r\n        log.info(\"Notifying customer about cancelled order {}\", event.getOrderId());\r\n    }\r\n\r\n    @EventListener\r\n    public void handleAllOrders(Object event) {\r\n        if (event instanceof OrderCreatedEvent || event instanceof OrderCancelledEvent) {\r\n            log.trace(\"Order-related event: {}\", event);\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SpEL conditions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class HighValueOrderHandler {\r\n\r\n    @EventListener(condition = \"#event.total > 1000\")\r\n    public void handleHighValueOrder(OrderCreatedEvent event) {\r\n        log.info(\"High-value order {} for {}. Flagging for review.\",\r\n            event.getOrderId(), event.getTotal());\r\n    }\r\n\r\n    @EventListener(condition = \"#event.total > 5000\")\r\n    public void handleVipOrder(OrderCreatedEvent event) {\r\n        log.info(\"VIP order {} – assigning dedicated support.\", event.getOrderId());\r\n    }\r\n\r\n    @EventListener(condition = \"#event.customerEmail.contains('wholesale')\")\r\n    public void handleWholesaleOrder(OrderCreatedEvent event) {\r\n        log.info(\"Wholesale order {} – applying bulk discount.\", event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordering listeners:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class FraudDetectionListener {\r\n\r\n    @EventListener\r\n    @Order(1)\r\n    public void checkFraud(OrderCreatedEvent event) {\r\n        log.info(\"Fraud check for order {}\", event.getOrderId());\r\n    }\r\n}\r\n\r\n@Component\r\npublic class InventoryReservationListener {\r\n\r\n    @EventListener\r\n    @Order(2)\r\n    public void reserveInventory(OrderCreatedEvent event) {\r\n        log.info(\"Reserve inventory for order {}\", event.getOrderId());\r\n    }\r\n}\r\n\r\n@Component\r\npublic class ShippingSchedulerListener {\r\n\r\n    @EventListener\r\n    @Order(3)\r\n    public void scheduleShipping(OrderCreatedEvent event) {\r\n        log.info(\"Schedule shipping for order {}\", event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event listener with id (for programmatic removal):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class ConditionalEventListener {\r\n\r\n    @EventListener(id = \"audit-log-listener\")\r\n    public void auditLog(OrderCreatedEvent event) {\r\n        log.info(\"Audit: order {} created\", event.getOrderId());\r\n    }\r\n\r\n    @EventListener(id = \"metrics-listener\", condition = \"#event.total > 0\")\r\n    public void metrics(OrderCreatedEvent event) {\r\n        log.info(\"Metrics: order total {}\", event.getTotal());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-transactionaleventlistener",
      children: "11. @TransactionalEventListener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), " binds an event listener to a transaction phase. The event is only delivered when the publishing method's transaction reaches the specified phase."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class TransactionBoundEventHandlers {\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)\r\n    public void beforeCommit(OrderCreatedEvent event) {\r\n        System.out.println(\"BEFORE_COMMIT: Validating order \" + event.getOrderId());\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\r\n    public void afterCommit(OrderCreatedEvent event) {\r\n        System.out.println(\"AFTER_COMMIT: Order \" + event.getOrderId() + \" is confirmed\");\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)\r\n    public void afterRollback(OrderCreatedEvent event) {\r\n        System.out.println(\"AFTER_ROLLBACK: Order \" + event.getOrderId() + \" was rolled back\");\r\n    }\r\n\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)\r\n    public void afterCompletion(OrderCreatedEvent event) {\r\n        System.out.println(\"AFTER_COMPLETION: Transaction ended for order \" + event.getOrderId());\r\n    }\r\n\r\n    @TransactionalEventListener(\r\n        phase = TransactionPhase.AFTER_COMMIT,\r\n        condition = \"#event.total > 5000\",\r\n        fallbackExecution = true\r\n    )\r\n    public void highValueAfterCommit(OrderCreatedEvent event) {\r\n        System.out.println(\"High-value order \" + event.getOrderId()\r\n            + \" committed. Notifying sales team.\");\r\n    }\r\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Phase"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When it fires"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BEFORE_COMMIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before the transaction commits, within the same transaction"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AFTER_COMMIT"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After a successful commit (default)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AFTER_ROLLBACK"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After a rollback"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AFTER_COMPLETION"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "After commit or rollback"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "fallbackExecution"
      }), " parameter (default false) controls whether the listener fires even when no transaction is active."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-making-event-listeners-async",
      children: "12. Making Event Listeners Async"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["By default, all event listeners run on the publisher's thread. Adding ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " to an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " method dispatches it to the task executor."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class AsyncEventListeners {\r\n\r\n    @Async\r\n    @EventListener\r\n    public void sendConfirmationEmail(OrderCreatedEvent event) {\r\n        // Runs on async-executor thread\r\n        System.out.println(\"Sending email on thread: \"\r\n            + Thread.currentThread().getName());\r\n    }\r\n\r\n    @Async(\"ioTaskExecutor\")\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\r\n    public void generateInvoice(OrderCreatedEvent event) {\r\n        System.out.println(\"Generating invoice for order \" + event.getOrderId()\r\n            + \" on \" + Thread.currentThread().getName());\r\n    }\r\n\r\n    @Async\r\n    @EventListener(condition = \"#event.total > 10000\")\r\n    public void notifyEnterpriseSupport(OrderCreatedEvent event) {\r\n        System.out.println(\"Enterprise support notified for order \"\r\n            + event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete async event-driven flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderService {\r\n\r\n    private final ApplicationEventPublisher publisher;\r\n\r\n    public OrderService(ApplicationEventPublisher publisher) {\r\n        this.publisher = publisher;\r\n    }\r\n\r\n    @Transactional\r\n    public Order createOrder(CreateOrderRequest request) {\r\n        Order order = new Order(request.getCustomerId(), request.getItems());\r\n        // persist to database\r\n        publisher.publishEvent(new OrderCreatedEvent(\r\n            this, order.getId(), order.getCustomerEmail(),\r\n            order.getTotal(), order.getCreatedAt()\r\n        ));\r\n        return order;\r\n    }\r\n}\r\n\r\n@Component\r\npublic class AsyncEventListenerChain {\r\n\r\n    @Async\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 1)\r\n    public CompletableFuture<Void> validatePayment(OrderCreatedEvent event) {\r\n        System.out.println(\"Validating payment for \" + event.getOrderId());\r\n        return CompletableFuture.completedFuture(null);\r\n    }\r\n\r\n    @Async\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 2)\r\n    public void reserveInventory(OrderCreatedEvent event) {\r\n        System.out.println(\"Reserving inventory for \" + event.getOrderId());\r\n    }\r\n\r\n    @Async\r\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 3)\r\n    public void scheduleDelivery(OrderCreatedEvent event) {\r\n        System.out.println(\"Scheduling delivery for \" + event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-generic-events",
      children: "13. Generic Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring events support generic payloads:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class GenericEvent<T> {\r\n\r\n    private final T payload;\r\n    private final boolean success;\r\n\r\n    public GenericEvent(T payload, boolean success) {\r\n        this.payload = payload;\r\n        this.success = success;\r\n    }\r\n\r\n    public T getPayload() { return payload; }\r\n    public boolean isSuccess() { return success; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution via generic type:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class GenericEventHandler {\r\n\r\n    @EventListener\r\n    public void handleUserCreated(GenericEvent<UserCreatedPayload> event) {\r\n        UserCreatedPayload payload = event.getPayload();\r\n        System.out.println(\"User created: \" + payload.getEmail());\r\n    }\r\n\r\n    @EventListener\r\n    public void handleProductUpdated(GenericEvent<ProductUpdatedPayload> event) {\r\n        ProductUpdatedPayload payload = event.getPayload();\r\n        System.out.println(\"Product updated: \" + payload.getSku());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-event-payload-design",
      children: "14. Event Payload Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events should be immutable, self-contained DTOs that carry enough context for any listener to act without querying the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UserRegisteredEvent {\r\n\r\n    private final String userId;\r\n    private final String email;\r\n    private final String name;\r\n    private final String sourceApp;\r\n    private final LocalDateTime timestamp;\r\n    private final Map<String, Object> metadata;\r\n\r\n    public UserRegisteredEvent(String userId, String email, String name,\r\n                               String sourceApp, LocalDateTime timestamp,\r\n                               Map<String, Object> metadata) {\r\n        this.userId = userId;\r\n        this.email = email;\r\n        this.name = name;\r\n        this.sourceApp = sourceApp;\r\n        this.timestamp = timestamp;\r\n        this.metadata = metadata;\r\n    }\r\n\r\n    public String getUserId() { return userId; }\r\n    public String getEmail() { return email; }\r\n    public String getName() { return name; }\r\n    public String getSourceApp() { return sourceApp; }\r\n    public LocalDateTime getTimestamp() { return timestamp; }\r\n    public Map<String, Object> getMetadata() { return metadata; }\r\n\r\n    @Override\r\n    public String toString() {\r\n        return \"UserRegisteredEvent{userId='\" + userId + \"', email='\" + email + \"'}\";\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event payload best practices:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Immutable fields, no setters"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Include a timestamp (preferably ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Instant"
        }), " or ", (0,jsx_runtime.jsx)(_components.code, {
          children: "LocalDateTime"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include a correlation ID for tracing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include source/version info for schema evolution"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Do not include heavy objects like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "HttpSession"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "EntityManager"
        }), ", or serialized file content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-event-batching",
      children: "15. Event Batching"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "When many events are published in rapid succession, batching improves throughput:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class EventBatcher {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(EventBatcher.class);\r\n    private final ApplicationEventPublisher publisher;\r\n    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();\r\n\r\n    private final Queue<MetricRecord> batch = new ConcurrentLinkedQueue<>();\r\n    private static final int BATCH_SIZE = 50;\r\n    private static final int FLUSH_INTERVAL_MS = 5000;\r\n\r\n    public EventBatcher(ApplicationEventPublisher publisher) {\r\n        this.publisher = publisher;\r\n        scheduler.scheduleAtFixedRate(this::flush, FLUSH_INTERVAL_MS, FLUSH_INTERVAL_MS, TimeUnit.MILLISECONDS);\r\n    }\r\n\r\n    public void recordMetric(String name, double value, Map<String, String> tags) {\r\n        batch.add(new MetricRecord(name, value, tags, Instant.now()));\r\n        if (batch.size() >= BATCH_SIZE) {\r\n            flush();\r\n        }\r\n    }\r\n\r\n    public void flush() {\r\n        List<MetricRecord> records = new ArrayList<>();\r\n        MetricRecord record;\r\n        while ((record = batch.poll()) != null) {\r\n            records.add(record);\r\n        }\r\n        if (!records.isEmpty()) {\r\n            publisher.publishEvent(new MetricBatchEvent(this, records));\r\n            log.info(\"Published batch of {} metrics\", records.size());\r\n        }\r\n    }\r\n\r\n    @PreDestroy\r\n    public void shutdown() {\r\n        flush();\r\n        scheduler.shutdown();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-event-priority",
      children: "16. Event Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement priority-based processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PrioritizedEvent<T> {\r\n\r\n    private final T payload;\r\n    private final int priority;\r\n\r\n    public PrioritizedEvent(T payload, int priority) {\r\n        this.payload = payload;\r\n        this.priority = priority;\r\n    }\r\n\r\n    public T getPayload() { return payload; }\r\n    public int getPriority() { return priority; }\r\n}\r\n\r\n@Component\r\npublic class PriorityEventProcessor {\r\n\r\n    private final PriorityQueue<PrioritizedEvent<OrderCreatedEvent>> queue =\r\n        new PriorityQueue<>(Comparator.comparingInt(PrioritizedEvent::getPriority).reversed());\r\n\r\n    @Async\r\n    @EventListener\r\n    public void enqueue(PrioritizedEvent<OrderCreatedEvent> event) {\r\n        synchronized (queue) {\r\n            queue.offer(event);\r\n        }\r\n    }\r\n\r\n    @Async\r\n    public void processQueue() {\r\n        while (true) {\r\n            PrioritizedEvent<OrderCreatedEvent> event;\r\n            synchronized (queue) {\r\n                event = queue.poll();\r\n            }\r\n            if (event != null) {\r\n                process(event.getPayload());\r\n            } else {\r\n                try {\r\n                    Thread.sleep(100);\r\n                } catch (InterruptedException e) {\r\n                    Thread.currentThread().interrupt();\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    private void process(OrderCreatedEvent event) {\r\n        System.out.println(\"Processing priority event for order \" + event.getOrderId());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-event-sourcing-basics",
      children: "17. Event Sourcing Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event sourcing persists every state change as an immutable event in an append-only store, rather than storing current state. The current state is reconstructed by replaying events."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface EventStore {\r\n    void save(DomainEvent event);\r\n    List<DomainEvent> findByAggregateId(String aggregateId);\r\n    List<DomainEvent> findAllSince(Long globalSequence);\r\n    Long getLastSequence();\r\n}\r\n\r\n@Component\r\npublic class InMemoryEventStore implements EventStore {\r\n\r\n    private final List<DomainEvent> events = new CopyOnWriteArrayList<>();\r\n\r\n    @Override\r\n    public void save(DomainEvent event) {\r\n        events.add(event);\r\n    }\r\n\r\n    @Override\r\n    public List<DomainEvent> findByAggregateId(String aggregateId) {\r\n        return events.stream()\r\n            .filter(e -> e.getAggregateId().equals(aggregateId))\r\n            .collect(Collectors.toList());\r\n    }\r\n\r\n    @Override\r\n    public List<DomainEvent> findAllSince(Long globalSequence) {\r\n        return events.stream()\r\n            .filter(e -> e.getSequence() > globalSequence)\r\n            .collect(Collectors.toList());\r\n    }\r\n\r\n    @Override\r\n    public Long getLastSequence() {\r\n        return events.isEmpty() ? 0L : events.get(events.size() - 1).getSequence();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Base domain event:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public abstract class DomainEvent {\r\n\r\n    private final String aggregateId;\r\n    private final String eventType;\r\n    private final Long sequence;\r\n    private final Instant occurredAt;\r\n\r\n    protected DomainEvent(String aggregateId, String eventType, Long sequence) {\r\n        this.aggregateId = aggregateId;\r\n        this.eventType = eventType;\r\n        this.sequence = sequence;\r\n        this.occurredAt = Instant.now();\r\n    }\r\n\r\n    public String getAggregateId() { return aggregateId; }\r\n    public String getEventType() { return eventType; }\r\n    public Long getSequence() { return sequence; }\r\n    public Instant getOccurredAt() { return occurredAt; }\r\n}\r\n\r\npublic class AccountOpenedEvent extends DomainEvent {\r\n    private final String accountHolder;\r\n    private final BigDecimal initialDeposit;\r\n\r\n    public AccountOpenedEvent(String aggregateId, Long sequence,\r\n                              String accountHolder, BigDecimal initialDeposit) {\r\n        super(aggregateId, \"ACCOUNT_OPENED\", sequence);\r\n        this.accountHolder = accountHolder;\r\n        this.initialDeposit = initialDeposit;\r\n    }\r\n\r\n    public String getAccountHolder() { return accountHolder; }\r\n    public BigDecimal getInitialDeposit() { return initialDeposit; }\r\n}\r\n\r\npublic class MoneyDepositedEvent extends DomainEvent {\r\n    private final BigDecimal amount;\r\n    private final String reference;\r\n\r\n    public MoneyDepositedEvent(String aggregateId, Long sequence,\r\n                               BigDecimal amount, String reference) {\r\n        super(aggregateId, \"MONEY_DEPOSITED\", sequence);\r\n        this.amount = amount;\r\n        this.reference = reference;\r\n    }\r\n\r\n    public BigDecimal getAmount() { return amount; }\r\n    public String getReference() { return reference; }\r\n}\r\n\r\npublic class MoneyWithdrawnEvent extends DomainEvent {\r\n    private final BigDecimal amount;\r\n\r\n    public MoneyWithdrawnEvent(String aggregateId, Long sequence, BigDecimal amount) {\r\n        super(aggregateId, \"MONEY_WITHDRAWN\", sequence);\r\n        this.amount = amount;\r\n    }\r\n\r\n    public BigDecimal getAmount() { return amount; }\r\n    public String getReason() {\r\n        return \"Withdrawal of \" + amount + \" on \" + getOccurredAt();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate reconstruction from events:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class BankAccount {\r\n\r\n    private String accountId;\r\n    private String accountHolder;\r\n    private BigDecimal balance;\r\n    private boolean isActive;\r\n    private long version;\r\n\r\n    public BankAccount(List<DomainEvent> eventStream) {\r\n        eventStream.forEach(this::apply);\r\n    }\r\n\r\n    public void apply(DomainEvent event) {\r\n        if (event instanceof AccountOpenedEvent e) {\r\n            apply(e);\r\n        } else if (event instanceof MoneyDepositedEvent e) {\r\n            apply(e);\r\n        } else if (event instanceof MoneyWithdrawnEvent e) {\r\n            apply(e);\r\n        }\r\n        version++;\r\n    }\r\n\r\n    private void apply(AccountOpenedEvent event) {\r\n        this.accountId = event.getAggregateId();\r\n        this.accountHolder = event.getAccountHolder();\r\n        this.balance = event.getInitialDeposit();\r\n        this.isActive = true;\r\n    }\r\n\r\n    private void apply(MoneyDepositedEvent event) {\r\n        this.balance = this.balance.add(event.getAmount());\r\n    }\r\n\r\n    private void apply(MoneyWithdrawnEvent event) {\r\n        this.balance = this.balance.subtract(event.getAmount());\r\n    }\r\n\r\n    public String getAccountId() { return accountId; }\r\n    public String getAccountHolder() { return accountHolder; }\r\n    public BigDecimal getBalance() { return balance; }\r\n    public boolean isActive() { return isActive; }\r\n    public long getVersion() { return version; }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-full-asynchronous-event-pipeline",
      children: "18. Full Asynchronous Event Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Putting it all together:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\r\n@EnableAsync\r\npublic class AsyncEventApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(AsyncEventApplication.class, args);\r\n    }\r\n}\r\n\r\n@Configuration\r\npublic class AppAsyncConfig implements AsyncConfigurer {\r\n\r\n    @Override\r\n    @Bean(name = \"applicationTaskExecutor\")\r\n    public Executor getAsyncExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(8);\r\n        executor.setMaxPoolSize(20);\r\n        executor.setQueueCapacity(200);\r\n        executor.setKeepAliveSeconds(60);\r\n        executor.setThreadNamePrefix(\"app-async-\");\r\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\r\n        executor.setWaitForTasksToCompleteOnShutdown(true);\r\n        executor.setAwaitTerminationSeconds(30);\r\n        executor.initialize();\r\n        return executor;\r\n    }\r\n\r\n    @Override\r\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\r\n        return new DelegatingAsyncExceptionHandler(Arrays.asList(\r\n            new LoggingAsyncExceptionHandler(),\r\n            new MetricsAsyncExceptionHandler()\r\n        ));\r\n    }\r\n}\r\n\r\npublic class LoggingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\r\n    private static final Logger log = LoggerFactory.getLogger(LoggingAsyncExceptionHandler.class);\r\n\r\n    @Override\r\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\r\n        log.error(\"Uncaught async exception in {} with params {}\",\r\n            method.getName(), Arrays.toString(params), ex);\r\n    }\r\n}\r\n\r\npublic class MetricsAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\r\n    private final MeterRegistry meterRegistry;\r\n\r\n    public MetricsAsyncExceptionHandler(MeterRegistry meterRegistry) {\r\n        this.meterRegistry = meterRegistry;\r\n    }\r\n\r\n    @Override\r\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\r\n        meterRegistry.counter(\"async.errors\",\r\n            \"method\", method.getName(),\r\n            \"exception\", ex.getClass().getSimpleName()\r\n        ).increment();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete domain event publisher with transaction-aware publishing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class TransactionAwareEventPublisher {\r\n\r\n    private final ApplicationEventPublisher publisher;\r\n    private final TransactionSynchronizationManager synchronizationManager;\r\n\r\n    public TransactionAwareEventPublisher(ApplicationEventPublisher publisher) {\r\n        this.publisher = publisher;\r\n    }\r\n\r\n    public void publishAfterCommit(DomainEvent event) {\r\n        if (TransactionSynchronizationManager.isActualTransactionActive()) {\r\n            TransactionSynchronizationManager.registerSynchronization(\r\n                new TransactionSynchronization() {\r\n                    @Override\r\n                    public void afterCommit() {\r\n                        publisher.publishEvent(event);\r\n                    }\r\n                }\r\n            );\r\n        } else {\r\n            publisher.publishEvent(event);\r\n        }\r\n    }\r\n\r\n    public void publishAfterRollback(DomainEvent event) {\r\n        if (TransactionSynchronizationManager.isActualTransactionActive()) {\r\n            TransactionSynchronizationManager.registerSynchronization(\r\n                new TransactionSynchronization() {\r\n                    @Override\r\n                    public void afterCompletion(int status) {\r\n                        if (status == STATUS_ROLLED_BACK) {\r\n                            publisher.publishEvent(event);\r\n                        }\r\n                    }\r\n                }\r\n            );\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-unit-testing-async-methods",
      children: "19. Unit Testing Async Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\nclass AsyncServiceTest {\r\n\r\n    @Autowired\r\n    private ReportService reportService;\r\n\r\n    @Test\r\n    void testAsyncReturnsCompletableFuture() throws Exception {\r\n        CompletableFuture<Report> future = reportService.generateReport(\"R-001\");\r\n        Report report = future.get(5, TimeUnit.SECONDS);\r\n        assertThat(report.getId()).isEqualTo(\"R-001\");\r\n    }\r\n\r\n    @Test\r\n    void testAsyncTimeout() {\r\n        assertThatThrownBy(() ->\r\n            reportService.generateReport(\"R-002\").get(100, TimeUnit.MILLISECONDS)\r\n        ).isInstanceOf(TimeoutException.class);\r\n    }\r\n}\r\n\r\n@SpringBootTest\r\nclass AsyncEventHandlerTest {\r\n\r\n    @Autowired\r\n    private ApplicationEventPublisher publisher;\r\n\r\n    @Autowired\r\n    private EmailNotificationListener listener;\r\n\r\n    @Test\r\n    void testEventListenerReceivesEvent() {\r\n        OrderCreatedEvent event = new OrderCreatedEvent(\r\n            this, 1L, \"test@test.com\", BigDecimal.valueOf(100), LocalDateTime.now()\r\n        );\r\n        publisher.publishEvent(event);\r\n        // Verify side effects (e.g., verify email was queued)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20-monitoring-async-execution",
      children: "20. Monitoring Async Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class AsyncMetricsPublisher {\r\n\r\n    private final MeterRegistry meterRegistry;\r\n\r\n    public AsyncMetricsPublisher(MeterRegistry meterRegistry) {\r\n        this.meterRegistry = meterRegistry;\r\n    }\r\n\r\n    @EventListener\r\n    public void onAsyncExecution(AsyncExecutionEvent event) {\r\n        meterRegistry.timer(\"async.execution\",\r\n            \"method\", event.getMethodName(),\r\n            \"thread\", event.getThreadName()\r\n        ).record(event.getDuration());\r\n    }\r\n\r\n    @EventListener(condition = \"#event.success == false\")\r\n    public void onAsyncFailure(AsyncExecutionEvent event) {\r\n        meterRegistry.counter(\"async.failures\",\r\n            \"method\", event.getMethodName(),\r\n            \"exception\", event.getExceptionType()\r\n        ).increment();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-advanced-threadpooltaskexecutor-configuration",
      children: "21. Advanced ThreadPoolTaskExecutor Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class AdvancedExecutorConfig {\r\n\r\n    @Bean(name = \"monitoredExecutor\")\r\n    public Executor monitoredExecutor() {\r\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\r\n        executor.setCorePoolSize(10);\r\n        executor.setMaxPoolSize(30);\r\n        executor.setQueueCapacity(150);\r\n        executor.setKeepAliveSeconds(120);\r\n        executor.setThreadNamePrefix(\"monitored-\");\r\n\r\n        // Custom rejection policy with metrics\r\n        executor.setRejectedExecutionHandler((r, exec) -> {\r\n            if (!exec.isShutdown()) {\r\n                BlockingQueue<Runnable> queue = exec.getQueue();\r\n                int queueSize = queue.size();\r\n                int poolSize = exec.getPoolSize();\r\n                System.out.printf(\"Task rejected. Queue: %d, Pool: %d%n\",\r\n                    queueSize, poolSize);\r\n                // Fall back to caller's thread\r\n                r.run();\r\n            }\r\n        });\r\n\r\n        // Thread factory with custom naming and daemon flag\r\n        executor.setThreadFactory(r -> {\r\n            Thread t = new Thread(r, \"monitored-\" + ThreadLocalRandom.current().nextLong());\r\n            t.setDaemon(false);\r\n            t.setPriority(Thread.NORM_PRIORITY);\r\n            t.setUncaughtExceptionHandler((thread, ex) ->\r\n                System.err.println(\"Thread \" + thread.getName() + \" died: \" + ex.getMessage())\r\n            );\r\n            return t;\r\n        });\r\n\r\n        executor.initialize();\r\n\r\n        // Expose pool metrics via Micrometer\r\n        monitorPoolMetrics(executor);\r\n\r\n        return executor;\r\n    }\r\n\r\n    private void monitorPoolMetrics(ThreadPoolTaskExecutor executor) {\r\n        ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();\r\n        scheduler.scheduleAtFixedRate(() -> {\r\n            ThreadPoolExecutor tpe = executor.getThreadPoolExecutor();\r\n            System.out.printf(\"\"\"\r\n                Pool Metrics:\r\n                - Active Threads: %d\r\n                - Current Pool Size: %d\r\n                - Core Pool Size: %d\r\n                - Max Pool Size: %d\r\n                - Queued Tasks: %d\r\n                - Completed Tasks: %d\r\n                - Largest Pool Size: %d\r\n                %n\"\"\",\r\n                tpe.getActiveCount(),\r\n                tpe.getPoolSize(),\r\n                tpe.getCorePoolSize(),\r\n                tpe.getMaximumPoolSize(),\r\n                tpe.getQueue().size(),\r\n                tpe.getCompletedTaskCount(),\r\n                tpe.getLargestPoolSize()\r\n            );\r\n        }, 0, 30, TimeUnit.SECONDS);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nAlways configure a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TaskExecutor"
        }), " bean → the default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SimpleAsyncTaskExecutor"
        }), " creates a new thread per invocation with no pool."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\r\nAsync listeners can lose events on application shutdown. Consider using an outbox pattern for critical events."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\r\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "@TransactionalEventListener"
        }), " only fires if the publishing method runs inside a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Transactional"
        }), " context."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring's async infrastructure spans two dimensions — method-level ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " with customizable thread pools, and the event system (", (0,jsx_runtime.jsx)(_components.code, {
        children: "ApplicationEvent"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " / ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), "). Key takeaways:"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@EnableAsync"
          })
        }), " activates async processing. Always override the default executor with a properly tuned ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ThreadPoolTaskExecutor"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Thread pool tuning"
        }), " requires understanding the core/max/queue relationship. ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CallerRunsPolicy"
        }), " provides natural back-pressure for production systems."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "CompletableFuture"
          })
        }), " is the preferred return type for async methods — it enables composition, error recovery, and timeout control."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Async exception handling"
        }), " requires ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AsyncUncaughtExceptionHandler"
        }), " for void methods; ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CompletableFuture.exceptionally/handle"
        }), " for future-returning methods."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Events"
        }), " decouple publishers from listeners. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@EventListener"
        }), " with SpEL conditions and ordering."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@TransactionalEventListener"
          })
        }), " binds event delivery to transaction lifecycle phases, ensuring events only fire after successful commits."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Combine ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@Async"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@EventListener"
          })]
        }), " for fully asynchronous event processing on dedicated thread pools."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event sourcing"
        }), " persists state changes as immutable events and reconstructs current state by replaying the event stream."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-configure-a-thread-pool",
      children: "Exercise 1: Configure a Thread Pool"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ThreadPoolTaskExecutor"
      }), " bean named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "reportExecutor"
      }), " with core=4, max=12, queue=80, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CallerRunsPolicy"
      }), ", and thread prefix ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"report-\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-async-report-generation",
      children: "Exercise 2: Async Report Generation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a service with an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " method that returns ", (0,jsx_runtime.jsx)(_components.code, {
        children: "CompletableFuture<Report>"
      }), ". Have it sleep 2 seconds, then create and return a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Report"
      }), " object."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-compose-async-results",
      children: "Exercise 3: Compose Async Results"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a coordinator service that calls two async methods in parallel, combines their results with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "thenCombine"
      }), ", and returns the merged output."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-async-error-handling",
      children: "Exercise 4: Async Error Handling"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a custom ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsyncUncaughtExceptionHandler"
      }), " that logs the method name, parameters, and exception. Register it via ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsyncConfigurer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-publish-custom-event",
      children: "Exercise 5: Publish Custom Event"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Define an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "InventoryLowEvent"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "sku"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "currentStock"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "threshold"
      }), ". Publish it when stock drops below threshold. Listen with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-conditional-event-listener",
      children: "Exercise 6: Conditional Event Listener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@EventListener"
      }), " methods for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OrderCreatedEvent"
      }), " — one that fires for totals > $500 and one for totals <= $500. Use SpEL ", (0,jsx_runtime.jsx)(_components.code, {
        children: "condition"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-transaction-bound-event",
      children: "Exercise 7: Transaction-Bound Event"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AFTER_COMMIT"
      }), " phase that sends a notification. Verify it runs only after the transaction commits."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-async-event-listener",
      children: "Exercise 8: Async Event Listener"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Combine ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), " so that event handling runs on a separate thread pool."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-event-store-implementation",
      children: "Exercise 9: Event Store Implementation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement an in-memory ", (0,jsx_runtime.jsx)(_components.code, {
        children: "EventStore"
      }), " that stores ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DomainEvent"
      }), " objects. Write a method to reconstruct a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BankAccount"
      }), " aggregate from its event stream."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-comprehensive-async-pipeline",
      children: "Exercise 10: Comprehensive Async Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a complete pipeline: a service method with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Transactional"
      }), " publishes an event; three ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Async"
      }), " ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TransactionalEventListener"
      }), " handlers process it in order; an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "AsyncUncaughtExceptionHandler"
      }), " catches any failures."]
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

/***/ 8453
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
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