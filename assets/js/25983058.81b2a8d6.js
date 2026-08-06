"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[85517],{

/***/ 19146
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
const site_docs_courses_java_34_async_events_md_259_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/34-async-events","title":"Async Processing & Spring Events","description":"Previous RabbitMQ","source":"@site/docs/courses/java/34-async-events.md","sourceDirName":"courses/java","slug":"/java/34-async-events","permalink":"/ai-engineering-journey/java/34-async-events","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":34,"frontMatter":{"id":"34-async-events","slug":"/java/34-async-events","title":"Async Processing & Spring Events","sidebar_label":"Async Processing & Spring Events","sidebar_position":34},"sidebar":"coursesSidebar","previous":{"title":"Security Testing & Performance Testing","permalink":"/ai-engineering-journey/java/33-security-perf-test"},"next":{"title":"RabbitMQ","permalink":"/ai-engineering-journey/java/35-rabbitmq"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
        href: "../../assets/images/lessons/java/34-async-events/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/34-async-events/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/34-async-events/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/34-async-events/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/34-async-events/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/34-async-events/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Async and Events] --> B[@Async]\n    A --> C[Application Events]\n    A --> D[Transactional Events]\n    B --> B1[TaskExecutor config]\n    B --> B2[Future / CompletableFuture]\n    C --> C1[ApplicationEventPublisher]\n    C --> C2[@EventListener]\n    D --> D1[@TransactionalEventListener]\n    D --> D2[Phase: AFTER_COMMIT / AFTER_ROLLBACK]\n"
      })
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
        children: "@Configuration\n@EnableAsync\npublic class AsyncConfig {\n}\n"
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
        children: "@Configuration\n@EnableAsync\npublic class ThreadPoolConfig {\n\n    @Bean(name = \"taskExecutor\")\n    public Executor taskExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(5);\n        executor.setMaxPoolSize(25);\n        executor.setQueueCapacity(100);\n        executor.setKeepAliveSeconds(120);\n        executor.setThreadNamePrefix(\"async-worker-\");\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\n        executor.setWaitForTasksToCompleteOnShutdown(true);\n        executor.setAwaitTerminationSeconds(30);\n        executor.initialize();\n        return executor;\n    }\n}\n"
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
        children: "@Service\npublic class EmailService {\n\n    @Async\n    public void sendWelcomeEmail(String email) {\n        // Simulate email sending\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n        System.out.printf(\"Welcome email sent to %s on thread %s%n\",\n            email, Thread.currentThread().getName());\n    }\n\n    @Async(\"customExecutor\")\n    public void sendPasswordReset(String email) {\n        // Uses the bean named \"customExecutor\"\n    }\n}\n"
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
        children: "@Service\npublic class ReportService {\n\n    private static final Logger log = LoggerFactory.getLogger(ReportService.class);\n\n    @Async\n    public CompletableFuture<Report> generateReport(String reportId) {\n        log.info(\"Generating report {} on thread {}\", reportId,\n            Thread.currentThread().getName());\n        try {\n            Thread.sleep(1500);\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n        Report report = new Report(reportId, \"Q4 Results\", \"PDF\");\n        return CompletableFuture.completedFuture(report);\n    }\n\n    @Async\n    public CompletableFuture<List<String>> fetchDataSources(String reportId) {\n        log.info(\"Fetching data sources for {} on thread {}\", reportId,\n            Thread.currentThread().getName());\n        return CompletableFuture.completedFuture(List.of(\"sales_db\", \"inventory_api\"));\n    }\n\n    @Async\n    public CompletableFuture<Void> cacheReport(Report report) {\n        log.info(\"Caching report {} on thread {}\", report.getId(),\n            Thread.currentThread().getName());\n        return CompletableFuture.allOf();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Composing async results:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ReportCoordinator {\n\n    private final ReportService reportService;\n\n    public ReportCoordinator(ReportService reportService) {\n        this.reportService = reportService;\n    }\n\n    public CompletableFuture<Report> buildReport(String reportId) {\n        CompletableFuture<Report> reportFuture = reportService.generateReport(reportId);\n        CompletableFuture<List<String>> dataFuture = reportService.fetchDataSources(reportId);\n\n        return reportFuture.thenCombine(dataFuture, (report, sources) -> {\n            report.setDataSources(sources);\n            return report;\n        }).thenCompose(report ->\n            reportService.cacheReport(report)\n                .thenApply(v -> report)\n        );\n    }\n\n    public Report buildReportSync(String reportId) {\n        return buildReport(reportId)\n            .completeOnTimeout(null, 10, TimeUnit.SECONDS)\n            .exceptionally(ex -> {\n                log.error(\"Report generation failed\", ex);\n                return null;\n            })\n            .join();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Error recovery with CompletableFuture:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "reportService.generateReport(\"R-001\")\n    .thenApply(Report::getId)\n    .handle((id, ex) -> {\n        if (ex != null) {\n            log.error(\"Failed to generate report\", ex);\n            return null;\n        }\n        return id;\n    });\n\nreportService.generateReport(\"R-002\")\n    .exceptionally(ex -> {\n        log.warn(\"Recovering from error\", ex);\n        return Report.errorReport(\"R-002\", ex.getMessage());\n    })\n    .thenAccept(report -> log.info(\"Recovered report: {}\", report));\n\nreportService.generateReport(\"R-003\")\n    .whenComplete((report, ex) -> {\n        if (ex == null) {\n            log.info(\"Success: {}\", report);\n        } else {\n            log.error(\"Failure\", ex);\n        }\n    });\n"
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
        children: "@Async\npublic ListenableFuture<String> processOrder(Long orderId) {\n    return AsyncResult.forValue(\"Processed order \" + orderId);\n}\n\n@Async\npublic ListenableFuture<String> processOrderWithCallback(Long orderId) {\n    ListenableFuture<String> future = AsyncResult.forValue(\"Processed \" + orderId);\n    future.addCallback(\n        result -> log.info(\"Success: {}\", result),\n        ex -> log.error(\"Failure\", ex)\n    );\n    return future;\n}\n"
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
        children: "@Configuration\n@EnableAsync\npublic class AsyncExceptionConfig implements AsyncConfigurer {\n\n    @Override\n    public Executor getAsyncExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(5);\n        executor.setMaxPoolSize(10);\n        executor.setQueueCapacity(50);\n        executor.setThreadNamePrefix(\"async-\");\n        executor.initialize();\n        return executor;\n    }\n\n    @Override\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\n        return new SimpleAsyncExceptionHandler();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.2 Custom AsyncUncaughtExceptionHandler:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class SimpleAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(SimpleAsyncExceptionHandler.class);\n\n    @Override\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\n        log.error(\"Async method {} threw exception\", method.getName(), ex);\n        log.warn(\"Method parameters: {}\", Arrays.toString(params));\n        // Send alert, write to dead-letter queue, etc.\n        if (ex instanceof DataAccessException) {\n            // Retry logic could go here\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.3 Multiple Handlers via Delegation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DelegatingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\n\n    private final List<AsyncUncaughtExceptionHandler> handlers;\n\n    public DelegatingAsyncExceptionHandler(List<AsyncUncaughtExceptionHandler> handlers) {\n        this.handlers = handlers;\n    }\n\n    @Override\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\n        for (AsyncUncaughtExceptionHandler handler : handlers) {\n            try {\n                handler.handleUncaughtException(ex, method, params);\n            } catch (Exception e) {\n                // Log and continue – never let one handler break the chain\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "7.4 Logging Async Failures with AOP:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Aspect\n@Component\npublic class AsyncLoggingAspect {\n\n    private static final Logger log = LoggerFactory.getLogger(AsyncLoggingAspect.class);\n\n    @Around(\"@annotation(org.springframework.scheduling.annotation.Async)\")\n    public Object logAsyncExecution(ProceedingJoinPoint pjp) throws Throwable {\n        String methodName = pjp.getSignature().toShortString();\n        log.info(\"Entering async method: {}\", methodName);\n        long start = System.currentTimeMillis();\n        try {\n            Object result = pjp.proceed();\n            long elapsed = System.currentTimeMillis() - start;\n            log.info(\"Completed async method: {} in {}ms\", methodName, elapsed);\n            return result;\n        } catch (Exception ex) {\n            log.error(\"Async method {} failed after {}ms\", methodName,\n                System.currentTimeMillis() - start, ex);\n            throw ex;\n        }\n    }\n}\n"
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
        children: "@Configuration\npublic class MultiPoolConfig {\n\n    @Bean(name = \"ioTaskExecutor\")\n    public Executor ioTaskExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(10);\n        executor.setMaxPoolSize(50);\n        executor.setQueueCapacity(200);\n        executor.setThreadNamePrefix(\"io-\");\n        executor.setKeepAliveSeconds(60);\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\n        executor.initialize();\n        return executor;\n    }\n\n    @Bean(name = \"cpuTaskExecutor\")\n    public Executor cpuTaskExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        int cores = Runtime.getRuntime().availableProcessors();\n        executor.setCorePoolSize(cores);\n        executor.setMaxPoolSize(cores * 2);\n        executor.setQueueCapacity(50);\n        executor.setThreadNamePrefix(\"cpu-\");\n        executor.initialize();\n        return executor;\n    }\n\n    @Bean(name = \"eventTaskExecutor\")\n    public Executor eventTaskExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(4);\n        executor.setMaxPoolSize(10);\n        executor.setQueueCapacity(500);\n        executor.setThreadNamePrefix(\"event-\");\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.DiscardPolicy());\n        executor.initialize();\n        return executor;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Usage:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class HybridService {\n\n    @Async(\"ioTaskExecutor\")\n    public CompletableFuture<String> callExternalApi(String url) {\n        return CompletableFuture.completedFuture(\"response from \" + url);\n    }\n\n    @Async(\"cpuTaskExecutor\")\n    public CompletableFuture<BigDecimal> calculateRisk(DataPoint dp) {\n        return CompletableFuture.completedFuture(dp.calculateRiskScore());\n    }\n\n    @Async(\"eventTaskExecutor\")\n    public void fireNotification(String userId) {\n        // fast fire-and-forget\n    }\n}\n"
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
        children: "public class OrderCreatedEvent extends ApplicationEvent {\n\n    private final Long orderId;\n    private final String customerEmail;\n    private final BigDecimal total;\n    private final LocalDateTime createdAt;\n\n    public OrderCreatedEvent(Object source, Long orderId, String customerEmail,\n                             BigDecimal total, LocalDateTime createdAt) {\n        super(source);\n        this.orderId = orderId;\n        this.customerEmail = customerEmail;\n        this.total = total;\n        this.createdAt = createdAt;\n    }\n\n    public Long getOrderId() { return orderId; }\n    public String getCustomerEmail() { return customerEmail; }\n    public BigDecimal getTotal() { return total; }\n    public LocalDateTime getCreatedAt() { return createdAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Publisher:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderEventPublisher {\n\n    private final ApplicationEventPublisher publisher;\n\n    public OrderEventPublisher(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n    }\n\n    public void publishOrderCreated(Order order) {\n        OrderCreatedEvent event = new OrderCreatedEvent(\n            this,\n            order.getId(),\n            order.getCustomerEmail(),\n            order.getTotal(),\n            order.getCreatedAt()\n        );\n        publisher.publishEvent(event);\n    }\n\n    public void publishOrderCancelled(Order order, String reason) {\n        OrderCancelledEvent event = new OrderCancelledEvent(\n            this,\n            order.getId(),\n            reason\n        );\n        publisher.publishEvent(event);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Listener (classic):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class InventoryUpdateListener implements ApplicationListener<OrderCreatedEvent> {\n\n    private static final Logger log = LoggerFactory.getLogger(InventoryUpdateListener.class);\n\n    @Override\n    public void onApplicationEvent(OrderCreatedEvent event) {\n        log.info(\"Reserving inventory for order {}\", event.getOrderId());\n        // Inventory reservation logic\n    }\n}\n"
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
        children: "@Component\npublic class EmailNotificationListener {\n\n    private static final Logger log = LoggerFactory.getLogger(EmailNotificationListener.class);\n\n    @EventListener\n    public void handleOrderCreated(OrderCreatedEvent event) {\n        log.info(\"Sending confirmation email for order {} to {}\",\n            event.getOrderId(), event.getCustomerEmail());\n    }\n\n    @EventListener\n    public void handleOrderCancelled(OrderCancelledEvent event) {\n        log.info(\"Notifying customer about cancelled order {}\", event.getOrderId());\n    }\n\n    @EventListener\n    public void handleAllOrders(Object event) {\n        if (event instanceof OrderCreatedEvent || event instanceof OrderCancelledEvent) {\n            log.trace(\"Order-related event: {}\", event);\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "SpEL conditions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class HighValueOrderHandler {\n\n    @EventListener(condition = \"#event.total > 1000\")\n    public void handleHighValueOrder(OrderCreatedEvent event) {\n        log.info(\"High-value order {} for {}. Flagging for review.\",\n            event.getOrderId(), event.getTotal());\n    }\n\n    @EventListener(condition = \"#event.total > 5000\")\n    public void handleVipOrder(OrderCreatedEvent event) {\n        log.info(\"VIP order {} – assigning dedicated support.\", event.getOrderId());\n    }\n\n    @EventListener(condition = \"#event.customerEmail.contains('wholesale')\")\n    public void handleWholesaleOrder(OrderCreatedEvent event) {\n        log.info(\"Wholesale order {} – applying bulk discount.\", event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Ordering listeners:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class FraudDetectionListener {\n\n    @EventListener\n    @Order(1)\n    public void checkFraud(OrderCreatedEvent event) {\n        log.info(\"Fraud check for order {}\", event.getOrderId());\n    }\n}\n\n@Component\npublic class InventoryReservationListener {\n\n    @EventListener\n    @Order(2)\n    public void reserveInventory(OrderCreatedEvent event) {\n        log.info(\"Reserve inventory for order {}\", event.getOrderId());\n    }\n}\n\n@Component\npublic class ShippingSchedulerListener {\n\n    @EventListener\n    @Order(3)\n    public void scheduleShipping(OrderCreatedEvent event) {\n        log.info(\"Schedule shipping for order {}\", event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Event listener with id (for programmatic removal):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class ConditionalEventListener {\n\n    @EventListener(id = \"audit-log-listener\")\n    public void auditLog(OrderCreatedEvent event) {\n        log.info(\"Audit: order {} created\", event.getOrderId());\n    }\n\n    @EventListener(id = \"metrics-listener\", condition = \"#event.total > 0\")\n    public void metrics(OrderCreatedEvent event) {\n        log.info(\"Metrics: order total {}\", event.getTotal());\n    }\n}\n"
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
        children: "@Component\npublic class TransactionBoundEventHandlers {\n\n    @TransactionalEventListener(phase = TransactionPhase.BEFORE_COMMIT)\n    public void beforeCommit(OrderCreatedEvent event) {\n        System.out.println(\"BEFORE_COMMIT: Validating order \" + event.getOrderId());\n    }\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n    public void afterCommit(OrderCreatedEvent event) {\n        System.out.println(\"AFTER_COMMIT: Order \" + event.getOrderId() + \" is confirmed\");\n    }\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)\n    public void afterRollback(OrderCreatedEvent event) {\n        System.out.println(\"AFTER_ROLLBACK: Order \" + event.getOrderId() + \" was rolled back\");\n    }\n\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMPLETION)\n    public void afterCompletion(OrderCreatedEvent event) {\n        System.out.println(\"AFTER_COMPLETION: Transaction ended for order \" + event.getOrderId());\n    }\n\n    @TransactionalEventListener(\n        phase = TransactionPhase.AFTER_COMMIT,\n        condition = \"#event.total > 5000\",\n        fallbackExecution = true\n    )\n    public void highValueAfterCommit(OrderCreatedEvent event) {\n        System.out.println(\"High-value order \" + event.getOrderId()\n            + \" committed. Notifying sales team.\");\n    }\n}\n"
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
        children: "@Component\npublic class AsyncEventListeners {\n\n    @Async\n    @EventListener\n    public void sendConfirmationEmail(OrderCreatedEvent event) {\n        // Runs on async-executor thread\n        System.out.println(\"Sending email on thread: \"\n            + Thread.currentThread().getName());\n    }\n\n    @Async(\"ioTaskExecutor\")\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)\n    public void generateInvoice(OrderCreatedEvent event) {\n        System.out.println(\"Generating invoice for order \" + event.getOrderId()\n            + \" on \" + Thread.currentThread().getName());\n    }\n\n    @Async\n    @EventListener(condition = \"#event.total > 10000\")\n    public void notifyEnterpriseSupport(OrderCreatedEvent event) {\n        System.out.println(\"Enterprise support notified for order \"\n            + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete async event-driven flow:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    private final ApplicationEventPublisher publisher;\n\n    public OrderService(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n    }\n\n    @Transactional\n    public Order createOrder(CreateOrderRequest request) {\n        Order order = new Order(request.getCustomerId(), request.getItems());\n        // persist to database\n        publisher.publishEvent(new OrderCreatedEvent(\n            this, order.getId(), order.getCustomerEmail(),\n            order.getTotal(), order.getCreatedAt()\n        ));\n        return order;\n    }\n}\n\n@Component\npublic class AsyncEventListenerChain {\n\n    @Async\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 1)\n    public CompletableFuture<Void> validatePayment(OrderCreatedEvent event) {\n        System.out.println(\"Validating payment for \" + event.getOrderId());\n        return CompletableFuture.completedFuture(null);\n    }\n\n    @Async\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 2)\n    public void reserveInventory(OrderCreatedEvent event) {\n        System.out.println(\"Reserving inventory for \" + event.getOrderId());\n    }\n\n    @Async\n    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT, order = 3)\n    public void scheduleDelivery(OrderCreatedEvent event) {\n        System.out.println(\"Scheduling delivery for \" + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-generic-events",
      children: "13. Generic Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring events support generic payloads:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class GenericEvent<T> {\n\n    private final T payload;\n    private final boolean success;\n\n    public GenericEvent(T payload, boolean success) {\n        this.payload = payload;\n        this.success = success;\n    }\n\n    public T getPayload() { return payload; }\n    public boolean isSuccess() { return success; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Resolution via generic type:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class GenericEventHandler {\n\n    @EventListener\n    public void handleUserCreated(GenericEvent<UserCreatedPayload> event) {\n        UserCreatedPayload payload = event.getPayload();\n        System.out.println(\"User created: \" + payload.getEmail());\n    }\n\n    @EventListener\n    public void handleProductUpdated(GenericEvent<ProductUpdatedPayload> event) {\n        ProductUpdatedPayload payload = event.getPayload();\n        System.out.println(\"Product updated: \" + payload.getSku());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-event-payload-design",
      children: "14. Event Payload Design"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Events should be immutable, self-contained DTOs that carry enough context for any listener to act without querying the database."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class UserRegisteredEvent {\n\n    private final String userId;\n    private final String email;\n    private final String name;\n    private final String sourceApp;\n    private final LocalDateTime timestamp;\n    private final Map<String, Object> metadata;\n\n    public UserRegisteredEvent(String userId, String email, String name,\n                               String sourceApp, LocalDateTime timestamp,\n                               Map<String, Object> metadata) {\n        this.userId = userId;\n        this.email = email;\n        this.name = name;\n        this.sourceApp = sourceApp;\n        this.timestamp = timestamp;\n        this.metadata = metadata;\n    }\n\n    public String getUserId() { return userId; }\n    public String getEmail() { return email; }\n    public String getName() { return name; }\n    public String getSourceApp() { return sourceApp; }\n    public LocalDateTime getTimestamp() { return timestamp; }\n    public Map<String, Object> getMetadata() { return metadata; }\n\n    @Override\n    public String toString() {\n        return \"UserRegisteredEvent{userId='\" + userId + \"', email='\" + email + \"'}\";\n    }\n}\n"
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
        children: "@Component\npublic class EventBatcher {\n\n    private static final Logger log = LoggerFactory.getLogger(EventBatcher.class);\n    private final ApplicationEventPublisher publisher;\n    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();\n\n    private final Queue<MetricRecord> batch = new ConcurrentLinkedQueue<>();\n    private static final int BATCH_SIZE = 50;\n    private static final int FLUSH_INTERVAL_MS = 5000;\n\n    public EventBatcher(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n        scheduler.scheduleAtFixedRate(this::flush, FLUSH_INTERVAL_MS, FLUSH_INTERVAL_MS, TimeUnit.MILLISECONDS);\n    }\n\n    public void recordMetric(String name, double value, Map<String, String> tags) {\n        batch.add(new MetricRecord(name, value, tags, Instant.now()));\n        if (batch.size() >= BATCH_SIZE) {\n            flush();\n        }\n    }\n\n    public void flush() {\n        List<MetricRecord> records = new ArrayList<>();\n        MetricRecord record;\n        while ((record = batch.poll()) != null) {\n            records.add(record);\n        }\n        if (!records.isEmpty()) {\n            publisher.publishEvent(new MetricBatchEvent(this, records));\n            log.info(\"Published batch of {} metrics\", records.size());\n        }\n    }\n\n    @PreDestroy\n    public void shutdown() {\n        flush();\n        scheduler.shutdown();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-event-priority",
      children: "16. Event Priority"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Implement priority-based processing:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class PrioritizedEvent<T> {\n\n    private final T payload;\n    private final int priority;\n\n    public PrioritizedEvent(T payload, int priority) {\n        this.payload = payload;\n        this.priority = priority;\n    }\n\n    public T getPayload() { return payload; }\n    public int getPriority() { return priority; }\n}\n\n@Component\npublic class PriorityEventProcessor {\n\n    private final PriorityQueue<PrioritizedEvent<OrderCreatedEvent>> queue =\n        new PriorityQueue<>(Comparator.comparingInt(PrioritizedEvent::getPriority).reversed());\n\n    @Async\n    @EventListener\n    public void enqueue(PrioritizedEvent<OrderCreatedEvent> event) {\n        synchronized (queue) {\n            queue.offer(event);\n        }\n    }\n\n    @Async\n    public void processQueue() {\n        while (true) {\n            PrioritizedEvent<OrderCreatedEvent> event;\n            synchronized (queue) {\n                event = queue.poll();\n            }\n            if (event != null) {\n                process(event.getPayload());\n            } else {\n                try {\n                    Thread.sleep(100);\n                } catch (InterruptedException e) {\n                    Thread.currentThread().interrupt();\n                    break;\n                }\n            }\n        }\n    }\n\n    private void process(OrderCreatedEvent event) {\n        System.out.println(\"Processing priority event for order \" + event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-event-sourcing-basics",
      children: "17. Event Sourcing Basics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event sourcing persists every state change as an immutable event in an append-only store, rather than storing current state. The current state is reconstructed by replaying events."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public interface EventStore {\n    void save(DomainEvent event);\n    List<DomainEvent> findByAggregateId(String aggregateId);\n    List<DomainEvent> findAllSince(Long globalSequence);\n    Long getLastSequence();\n}\n\n@Component\npublic class InMemoryEventStore implements EventStore {\n\n    private final List<DomainEvent> events = new CopyOnWriteArrayList<>();\n\n    @Override\n    public void save(DomainEvent event) {\n        events.add(event);\n    }\n\n    @Override\n    public List<DomainEvent> findByAggregateId(String aggregateId) {\n        return events.stream()\n            .filter(e -> e.getAggregateId().equals(aggregateId))\n            .collect(Collectors.toList());\n    }\n\n    @Override\n    public List<DomainEvent> findAllSince(Long globalSequence) {\n        return events.stream()\n            .filter(e -> e.getSequence() > globalSequence)\n            .collect(Collectors.toList());\n    }\n\n    @Override\n    public Long getLastSequence() {\n        return events.isEmpty() ? 0L : events.get(events.size() - 1).getSequence();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Base domain event:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public abstract class DomainEvent {\n\n    private final String aggregateId;\n    private final String eventType;\n    private final Long sequence;\n    private final Instant occurredAt;\n\n    protected DomainEvent(String aggregateId, String eventType, Long sequence) {\n        this.aggregateId = aggregateId;\n        this.eventType = eventType;\n        this.sequence = sequence;\n        this.occurredAt = Instant.now();\n    }\n\n    public String getAggregateId() { return aggregateId; }\n    public String getEventType() { return eventType; }\n    public Long getSequence() { return sequence; }\n    public Instant getOccurredAt() { return occurredAt; }\n}\n\npublic class AccountOpenedEvent extends DomainEvent {\n    private final String accountHolder;\n    private final BigDecimal initialDeposit;\n\n    public AccountOpenedEvent(String aggregateId, Long sequence,\n                              String accountHolder, BigDecimal initialDeposit) {\n        super(aggregateId, \"ACCOUNT_OPENED\", sequence);\n        this.accountHolder = accountHolder;\n        this.initialDeposit = initialDeposit;\n    }\n\n    public String getAccountHolder() { return accountHolder; }\n    public BigDecimal getInitialDeposit() { return initialDeposit; }\n}\n\npublic class MoneyDepositedEvent extends DomainEvent {\n    private final BigDecimal amount;\n    private final String reference;\n\n    public MoneyDepositedEvent(String aggregateId, Long sequence,\n                               BigDecimal amount, String reference) {\n        super(aggregateId, \"MONEY_DEPOSITED\", sequence);\n        this.amount = amount;\n        this.reference = reference;\n    }\n\n    public BigDecimal getAmount() { return amount; }\n    public String getReference() { return reference; }\n}\n\npublic class MoneyWithdrawnEvent extends DomainEvent {\n    private final BigDecimal amount;\n\n    public MoneyWithdrawnEvent(String aggregateId, Long sequence, BigDecimal amount) {\n        super(aggregateId, \"MONEY_WITHDRAWN\", sequence);\n        this.amount = amount;\n    }\n\n    public BigDecimal getAmount() { return amount; }\n    public String getReason() {\n        return \"Withdrawal of \" + amount + \" on \" + getOccurredAt();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Aggregate reconstruction from events:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class BankAccount {\n\n    private String accountId;\n    private String accountHolder;\n    private BigDecimal balance;\n    private boolean isActive;\n    private long version;\n\n    public BankAccount(List<DomainEvent> eventStream) {\n        eventStream.forEach(this::apply);\n    }\n\n    public void apply(DomainEvent event) {\n        if (event instanceof AccountOpenedEvent e) {\n            apply(e);\n        } else if (event instanceof MoneyDepositedEvent e) {\n            apply(e);\n        } else if (event instanceof MoneyWithdrawnEvent e) {\n            apply(e);\n        }\n        version++;\n    }\n\n    private void apply(AccountOpenedEvent event) {\n        this.accountId = event.getAggregateId();\n        this.accountHolder = event.getAccountHolder();\n        this.balance = event.getInitialDeposit();\n        this.isActive = true;\n    }\n\n    private void apply(MoneyDepositedEvent event) {\n        this.balance = this.balance.add(event.getAmount());\n    }\n\n    private void apply(MoneyWithdrawnEvent event) {\n        this.balance = this.balance.subtract(event.getAmount());\n    }\n\n    public String getAccountId() { return accountId; }\n    public String getAccountHolder() { return accountHolder; }\n    public BigDecimal getBalance() { return balance; }\n    public boolean isActive() { return isActive; }\n    public long getVersion() { return version; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "18-full-asynchronous-event-pipeline",
      children: "18. Full Asynchronous Event Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Putting it all together:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\n@EnableAsync\npublic class AsyncEventApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(AsyncEventApplication.class, args);\n    }\n}\n\n@Configuration\npublic class AppAsyncConfig implements AsyncConfigurer {\n\n    @Override\n    @Bean(name = \"applicationTaskExecutor\")\n    public Executor getAsyncExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(8);\n        executor.setMaxPoolSize(20);\n        executor.setQueueCapacity(200);\n        executor.setKeepAliveSeconds(60);\n        executor.setThreadNamePrefix(\"app-async-\");\n        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());\n        executor.setWaitForTasksToCompleteOnShutdown(true);\n        executor.setAwaitTerminationSeconds(30);\n        executor.initialize();\n        return executor;\n    }\n\n    @Override\n    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {\n        return new DelegatingAsyncExceptionHandler(Arrays.asList(\n            new LoggingAsyncExceptionHandler(),\n            new MetricsAsyncExceptionHandler()\n        ));\n    }\n}\n\npublic class LoggingAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\n    private static final Logger log = LoggerFactory.getLogger(LoggingAsyncExceptionHandler.class);\n\n    @Override\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\n        log.error(\"Uncaught async exception in {} with params {}\",\n            method.getName(), Arrays.toString(params), ex);\n    }\n}\n\npublic class MetricsAsyncExceptionHandler implements AsyncUncaughtExceptionHandler {\n    private final MeterRegistry meterRegistry;\n\n    public MetricsAsyncExceptionHandler(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @Override\n    public void handleUncaughtException(Throwable ex, Method method, Object... params) {\n        meterRegistry.counter(\"async.errors\",\n            \"method\", method.getName(),\n            \"exception\", ex.getClass().getSimpleName()\n        ).increment();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Complete domain event publisher with transaction-aware publishing:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class TransactionAwareEventPublisher {\n\n    private final ApplicationEventPublisher publisher;\n    private final TransactionSynchronizationManager synchronizationManager;\n\n    public TransactionAwareEventPublisher(ApplicationEventPublisher publisher) {\n        this.publisher = publisher;\n    }\n\n    public void publishAfterCommit(DomainEvent event) {\n        if (TransactionSynchronizationManager.isActualTransactionActive()) {\n            TransactionSynchronizationManager.registerSynchronization(\n                new TransactionSynchronization() {\n                    @Override\n                    public void afterCommit() {\n                        publisher.publishEvent(event);\n                    }\n                }\n            );\n        } else {\n            publisher.publishEvent(event);\n        }\n    }\n\n    public void publishAfterRollback(DomainEvent event) {\n        if (TransactionSynchronizationManager.isActualTransactionActive()) {\n            TransactionSynchronizationManager.registerSynchronization(\n                new TransactionSynchronization() {\n                    @Override\n                    public void afterCompletion(int status) {\n                        if (status == STATUS_ROLLED_BACK) {\n                            publisher.publishEvent(event);\n                        }\n                    }\n                }\n            );\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "19-unit-testing-async-methods",
      children: "19. Unit Testing Async Methods"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass AsyncServiceTest {\n\n    @Autowired\n    private ReportService reportService;\n\n    @Test\n    void testAsyncReturnsCompletableFuture() throws Exception {\n        CompletableFuture<Report> future = reportService.generateReport(\"R-001\");\n        Report report = future.get(5, TimeUnit.SECONDS);\n        assertThat(report.getId()).isEqualTo(\"R-001\");\n    }\n\n    @Test\n    void testAsyncTimeout() {\n        assertThatThrownBy(() ->\n            reportService.generateReport(\"R-002\").get(100, TimeUnit.MILLISECONDS)\n        ).isInstanceOf(TimeoutException.class);\n    }\n}\n\n@SpringBootTest\nclass AsyncEventHandlerTest {\n\n    @Autowired\n    private ApplicationEventPublisher publisher;\n\n    @Autowired\n    private EmailNotificationListener listener;\n\n    @Test\n    void testEventListenerReceivesEvent() {\n        OrderCreatedEvent event = new OrderCreatedEvent(\n            this, 1L, \"test@test.com\", BigDecimal.valueOf(100), LocalDateTime.now()\n        );\n        publisher.publishEvent(event);\n        // Verify side effects (e.g., verify email was queued)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "20-monitoring-async-execution",
      children: "20. Monitoring Async Execution"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class AsyncMetricsPublisher {\n\n    private final MeterRegistry meterRegistry;\n\n    public AsyncMetricsPublisher(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @EventListener\n    public void onAsyncExecution(AsyncExecutionEvent event) {\n        meterRegistry.timer(\"async.execution\",\n            \"method\", event.getMethodName(),\n            \"thread\", event.getThreadName()\n        ).record(event.getDuration());\n    }\n\n    @EventListener(condition = \"#event.success == false\")\n    public void onAsyncFailure(AsyncExecutionEvent event) {\n        meterRegistry.counter(\"async.failures\",\n            \"method\", event.getMethodName(),\n            \"exception\", event.getExceptionType()\n        ).increment();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-advanced-threadpooltaskexecutor-configuration",
      children: "21. Advanced ThreadPoolTaskExecutor Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class AdvancedExecutorConfig {\n\n    @Bean(name = \"monitoredExecutor\")\n    public Executor monitoredExecutor() {\n        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();\n        executor.setCorePoolSize(10);\n        executor.setMaxPoolSize(30);\n        executor.setQueueCapacity(150);\n        executor.setKeepAliveSeconds(120);\n        executor.setThreadNamePrefix(\"monitored-\");\n\n        // Custom rejection policy with metrics\n        executor.setRejectedExecutionHandler((r, exec) -> {\n            if (!exec.isShutdown()) {\n                BlockingQueue<Runnable> queue = exec.getQueue();\n                int queueSize = queue.size();\n                int poolSize = exec.getPoolSize();\n                System.out.printf(\"Task rejected. Queue: %d, Pool: %d%n\",\n                    queueSize, poolSize);\n                // Fall back to caller's thread\n                r.run();\n            }\n        });\n\n        // Thread factory with custom naming and daemon flag\n        executor.setThreadFactory(r -> {\n            Thread t = new Thread(r, \"monitored-\" + ThreadLocalRandom.current().nextLong());\n            t.setDaemon(false);\n            t.setPriority(Thread.NORM_PRIORITY);\n            t.setUncaughtExceptionHandler((thread, ex) ->\n                System.err.println(\"Thread \" + thread.getName() + \" died: \" + ex.getMessage())\n            );\n            return t;\n        });\n\n        executor.initialize();\n\n        // Expose pool metrics via Micrometer\n        monitorPoolMetrics(executor);\n\n        return executor;\n    }\n\n    private void monitorPoolMetrics(ThreadPoolTaskExecutor executor) {\n        ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();\n        scheduler.scheduleAtFixedRate(() -> {\n            ThreadPoolExecutor tpe = executor.getThreadPoolExecutor();\n            System.out.printf(\"\"\"\n                Pool Metrics:\n                - Active Threads: %d\n                - Current Pool Size: %d\n                - Core Pool Size: %d\n                - Max Pool Size: %d\n                - Queued Tasks: %d\n                - Completed Tasks: %d\n                - Largest Pool Size: %d\n                %n\"\"\",\n                tpe.getActiveCount(),\n                tpe.getPoolSize(),\n                tpe.getCorePoolSize(),\n                tpe.getMaximumPoolSize(),\n                tpe.getQueue().size(),\n                tpe.getCompletedTaskCount(),\n                tpe.getLargestPoolSize()\n            );\n        }, 0, 30, TimeUnit.SECONDS);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nAlways configure a custom ", (0,jsx_runtime.jsx)(_components.code, {
          children: "TaskExecutor"
        }), " bean → the default ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SimpleAsyncTaskExecutor"
        }), " creates a new thread per invocation with no pool."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nAsync listeners can lose events on application shutdown. Consider using an outbox pattern for critical events."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\n", (0,jsx_runtime.jsx)(_components.code, {
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