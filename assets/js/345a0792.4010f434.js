"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[83202],{

/***/ 90021
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_35_rabbitmq_md_345_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-35-rabbitmq-md-345.json
const site_docs_courses_java_35_rabbitmq_md_345_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/35-rabbitmq","title":"RabbitMQ","description":"Previous Kafka","source":"@site/docs/courses/java/35-rabbitmq.md","sourceDirName":"courses/java","slug":"/java/35-rabbitmq","permalink":"/ai-engineering-journey/java/35-rabbitmq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"id":"35-rabbitmq","slug":"/java/35-rabbitmq","title":"RabbitMQ","sidebar_label":"RabbitMQ","sidebar_position":35},"sidebar":"coursesSidebar","previous":{"title":"Async Processing & Spring Events","permalink":"/ai-engineering-journey/java/34-async-events"},"next":{"title":"Apache Kafka","permalink":"/ai-engineering-journey/java/36-kafka"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/35-rabbitmq.md


const frontMatter = {
	id: '35-rabbitmq',
	slug: '/java/35-rabbitmq',
	title: 'RabbitMQ',
	sidebar_label: 'RabbitMQ',
	sidebar_position: 35
};
const contentTitle = 'RabbitMQ';

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
  "value": "1. AMQP Core Concepts",
  "id": "1-amqp-core-concepts",
  "level": 3
}, {
  "value": "2. Exchange Types",
  "id": "2-exchange-types",
  "level": 3
}, {
  "value": "2.1 DirectExchange",
  "id": "21-directexchange",
  "level": 4
}, {
  "value": "2.2 TopicExchange",
  "id": "22-topicexchange",
  "level": 4
}, {
  "value": "2.3 FanoutExchange",
  "id": "23-fanoutexchange",
  "level": 4
}, {
  "value": "2.4 HeadersExchange",
  "id": "24-headersexchange",
  "level": 4
}, {
  "value": "3. Queue Configuration",
  "id": "3-queue-configuration",
  "level": 3
}, {
  "value": "3.1 Dead Letter Queues",
  "id": "31-dead-letter-queues",
  "level": 4
}, {
  "value": "4. Spring AMQP Configuration",
  "id": "4-spring-amqp-configuration",
  "level": 3
}, {
  "value": "4.1 Basic Connection Factory",
  "id": "41-basic-connection-factory",
  "level": 4
}, {
  "value": "4.2 TLS Connection Factory",
  "id": "42-tls-connection-factory",
  "level": 4
}, {
  "value": "5. RabbitTemplate — Sending Messages",
  "id": "5-rabbittemplate--sending-messages",
  "level": 3
}, {
  "value": "5.1 Publisher Confirms",
  "id": "51-publisher-confirms",
  "level": 4
}, {
  "value": "5.2 Custom Message Converter",
  "id": "52-custom-message-converter",
  "level": 4
}, {
  "value": "6. @RabbitListener — Consuming Messages",
  "id": "6-rabbitlistener--consuming-messages",
  "level": 3
}, {
  "value": "6.1 Message Listener Adapter",
  "id": "61-message-listener-adapter",
  "level": 4
}, {
  "value": "7. Retry and Error Handling",
  "id": "7-retry-and-error-handling",
  "level": 3
}, {
  "value": "7.1 RetryTemplate with Exponential Backoff",
  "id": "71-retrytemplate-with-exponential-backoff",
  "level": 4
}, {
  "value": "7.2 Message Recoverers",
  "id": "72-message-recoverers",
  "level": 4
}, {
  "value": "7.3 Per-Listener Retry Configuration",
  "id": "73-per-listener-retry-configuration",
  "level": 4
}, {
  "value": "8. Batch Processing",
  "id": "8-batch-processing",
  "level": 3
}, {
  "value": "8.1 BatchingRabbitTemplate",
  "id": "81-batchingrabbittemplate",
  "level": 4
}, {
  "value": "9. Multiple Virtual Hosts",
  "id": "9-multiple-virtual-hosts",
  "level": 3
}, {
  "value": "10. RabbitAdmin — Programmatic Management",
  "id": "10-rabbitadmin--programmatic-management",
  "level": 3
}, {
  "value": "11. Complete Order Processing Example",
  "id": "11-complete-order-processing-example",
  "level": 3
}, {
  "value": "12. Container Customization",
  "id": "12-container-customization",
  "level": 3
}, {
  "value": "13. Custom Connection Factory with Multiple Channels",
  "id": "13-custom-connection-factory-with-multiple-channels",
  "level": 3
}, {
  "value": "14. Full Application Properties",
  "id": "14-full-application-properties",
  "level": 3
}, {
  "value": "15. Testing RabbitMQ",
  "id": "15-testing-rabbitmq",
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
  "value": "Exercise 1: Direct Exchange Setup",
  "id": "exercise-1-direct-exchange-setup",
  "level": 3
}, {
  "value": "Exercise 2: Topic Exchange Pattern",
  "id": "exercise-2-topic-exchange-pattern",
  "level": 3
}, {
  "value": "Exercise 3: RabbitTemplate Send and Receive",
  "id": "exercise-3-rabbittemplate-send-and-receive",
  "level": 3
}, {
  "value": "Exercise 4: @RabbitListener with Manual Ack",
  "id": "exercise-4-rabbitlistener-with-manual-ack",
  "level": 3
}, {
  "value": "Exercise 5: Dead Letter Queue",
  "id": "exercise-5-dead-letter-queue",
  "level": 3
}, {
  "value": "Exercise 6: Publisher Confirms",
  "id": "exercise-6-publisher-confirms",
  "level": 3
}, {
  "value": "Exercise 7: Retry with Exponential Backoff",
  "id": "exercise-7-retry-with-exponential-backoff",
  "level": 3
}, {
  "value": "Exercise 8: BatchingRabbitTemplate",
  "id": "exercise-8-batchingrabbittemplate",
  "level": 3
}, {
  "value": "Exercise 9: Multi-Vhost Setup",
  "id": "exercise-9-multi-vhost-setup",
  "level": 3
}, {
  "value": "Exercise 10: Complete Order Pipeline",
  "id": "exercise-10-complete-order-pipeline",
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
    h4: "h4",
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
        id: "rabbitmq",
        children: "RabbitMQ"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/34-async-events",
          children: "Async and Events"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/36-kafka",
          children: "Kafka"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand AMQP core concepts: exchanges, queues, bindings, routing keys, and virtual hosts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Direct, Topic, Fanout, and Headers exchange types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create durable, exclusive, auto-delete queues with TTL, dead-letter exchange, and max-length arguments"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RabbitTemplate"
        }), " to send and receive messages with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Jackson2JsonMessageConverter"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RabbitListener"
        }), " for message consumption with concurrency tuning"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable publisher confirms and returns for reliable messaging"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Implement retry logic with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RetryTemplate"
        }), ", exponential backoff, and message recoverers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "BatchingRabbitTemplate"
        }), " for batch message publishing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Work with multiple virtual hosts, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RabbitAdmin"
        }), ", and connection factory customization"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure connections with TLS and customize container factories"
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
        href: "../../assets/images/lessons/java/35-rabbitmq/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/35-rabbitmq/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/35-rabbitmq/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/35-rabbitmq/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/35-rabbitmq/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/35-rabbitmq/visual-explanation.png",
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
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RabbitMQ → AMQP-compliant message broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange types: Direct, Topic, Fanout, Headers"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Producer-Consumer → send and receive messages via ", (0,jsx_runtime.jsx)(_components.code, {
              children: "RabbitTemplate"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@RabbitListener"
            }), " for message consumption"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Patterns → dead letter queues, retry, and idempotency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DLQ handles poison messages; manual ack for retry control"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[RabbitMQ] --> B[Core Concepts]\n    A --> C[Producers]\n    A --> D[Consumers]\n    A --> E[Advanced]\n    B --> B1[Exchange / Queue / Binding]\n    B --> B2[AMQP protocol]\n    C --> C1[RabbitTemplate]\n    C --> C2[Correlation ID]\n    D --> D1[@RabbitListener]\n    D --> D2[Manual ack]\n    E --> E1[DLQ / Retry]\n    E --> E2[Idempotent consumers]\n"
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
            children: "Direct Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes by routing key exactly"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "routingKey = \"order.created\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Topic Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes by routing key pattern"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "routingKey = \"order.#\""
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Fanout Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes to all bound queues"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No routing key filtering"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Headers Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routes by header matching"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-match = all/any"
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
              children: "RabbitTemplate.convertAndSend()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends a message"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "rabbitTemplate.convertAndSend(exchange, routingKey, payload)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RabbitListener(queues = \"myQueue\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumes messages"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@RabbitListener(queues = \"#{queue.name}\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MessageProperties#setDeliveryMode(PERSISTENT)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Persists message to disk"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Survives broker restart"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RabbitAdmin.declareQueue()"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Declares queues programmatically"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Used for dynamic queue setup"
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
            children: "Order Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Direct Exchange + DLQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Process orders; send failures to DLQ for manual retry"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fanout Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broadcast alerts to all connected services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Routing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topic Exchange"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route messages based on event type hierarchy"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the four exchange types in RabbitMQ? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Direct, Topic, Fanout, Headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation is used to consume messages from a RabbitMQ queue? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RabbitListener"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What happens to a message that cannot be processed after max retries? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " It goes to the Dead Letter Queue (DLQ)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/35-rabbitmq.png",
        alt: "RabbitMQ / AMQP Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-amqp-core-concepts",
      children: "1. AMQP Core Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "AMQP (Advanced Message Queuing Protocol) is a wire-level protocol for message-oriented middleware. RabbitMQ is the most popular AMQP broker."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key abstractions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Concept"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Producer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Publishes messages to an exchange"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Exchange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Receives messages and routes them to queues based on bindings and routing keys"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Binding"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A rule that connects an exchange to a queue with an optional routing key"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Queue"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A named buffer that stores messages until consumers process them"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Subscribes to a queue and processes messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Virtual Host (vhost)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A namespace isolation unit — exchanges, queues, and bindings are scoped to a vhost"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Message broker vs Message queue:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "message queue"
      }), " (e.g., ActiveMQ, SQS) stores messages in named queues; producers send directly to a queue. An AMQP ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "message broker"
      }), " adds an exchange layer — producers never touch queues directly. The exchange determines routing, enabling complex patterns like topic-based subscriptions and fanout."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-exchange-types",
      children: "2. Exchange Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "21-directexchange",
      children: "2.1 DirectExchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["A message goes to the queues whose ", (0,jsx_runtime.jsx)(_components.code, {
        children: "bindingKey"
      }), " exactly matches the message's ", (0,jsx_runtime.jsx)(_components.code, {
        children: "routingKey"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic DirectExchange orderExchange() {\n    return new DirectExchange(\"order.exchange\", true, false);\n}\n\n@Bean\npublic Queue orderPaymentQueue() {\n    return QueueBuilder.durable(\"order.payment.queue\")\n        .withArgument(\"x-dead-letter-exchange\", \"order.dlx\")\n        .withArgument(\"x-message-ttl\", 30000)\n        .build();\n}\n\n@Bean\npublic Queue orderShippingQueue() {\n    return new Queue(\"order.shipping.queue\", true);\n}\n\n@Bean\npublic Binding paymentBinding() {\n    return BindingBuilder.bind(orderPaymentQueue())\n        .to(orderExchange())\n        .with(\"payment\");\n}\n\n@Bean\npublic Binding shippingBinding() {\n    return BindingBuilder.bind(orderShippingQueue())\n        .to(orderExchange())\n        .with(\"shipping\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Messages with routing key ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"payment\""
      }), " go to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order.payment.queue"
      }), ". Messages with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"shipping\""
      }), " go to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order.shipping.queue"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "22-topicexchange",
      children: "2.2 TopicExchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Routing keys use a dot-separated pattern with wildcards: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "*"
      }), " matches exactly one word, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "#"
      }), " matches zero or more words."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic TopicExchange notificationExchange() {\n    return new TopicExchange(\"notification.topic\");\n}\n\n@Bean\npublic Queue emailQueue() {\n    return new Queue(\"notification.email.queue\", true);\n}\n\n@Bean\npublic Queue smsQueue() {\n    return new Queue(\"notification.sms.queue\", true);\n}\n\n@Bean\npublic Queue pushQueue() {\n    return new Queue(\"notification.push.queue\", true);\n}\n\n@Bean\npublic Binding emailBinding() {\n    return BindingBuilder.bind(emailQueue())\n        .to(notificationExchange())\n        .with(\"user.*.email\");\n}\n\n@Bean\npublic Binding smsBinding() {\n    return BindingBuilder.bind(smsQueue())\n        .to(notificationExchange())\n        .with(\"user.*.sms\");\n}\n\n@Bean\npublic Binding pushBinding() {\n    return BindingBuilder.bind(pushQueue())\n        .to(notificationExchange())\n        .with(\"user.#.push\");\n}\n\n@Bean\npublic Binding allNotificationsBinding() {\n    return BindingBuilder.bind(pushQueue())\n        .to(notificationExchange())\n        .with(\"notification.#\");\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Message routing key"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Routes to"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user.create.email"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emailQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user.update.sms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "smsQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user.create.push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user.profile.update.push"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "notification.alert"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "pushQueue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "user.delete.email"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "emailQueue"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "23-fanoutexchange",
      children: "2.3 FanoutExchange"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Broadcasts every message to every bound queue, ignoring the routing key."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic FanoutExchange broadcastExchange() {\n    return new FanoutExchange(\"broadcast.fanout\");\n}\n\n@Bean\npublic Queue serviceAQueue() {\n    return new Queue(\"broadcast.service-a.queue\", false);\n}\n\n@Bean\npublic Queue serviceBQueue() {\n    return new Queue(\"broadcast.service-b.queue\", false);\n}\n\n@Bean\npublic Queue auditQueue() {\n    return QueueBuilder.nonDurable(\"broadcast.audit.queue\")\n        .autoDelete()\n        .build();\n}\n\n@Bean\npublic Binding serviceABinding() {\n    return BindingBuilder.bind(serviceAQueue()).to(broadcastExchange());\n}\n\n@Bean\npublic Binding serviceBBinding() {\n    return BindingBuilder.bind(serviceBQueue()).to(broadcastExchange());\n}\n\n@Bean\npublic Binding auditBinding() {\n    return BindingBuilder.bind(auditQueue()).to(broadcastExchange());\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Every message published to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "broadcast.fanout"
      }), " goes to all three queues simultaneously."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "24-headersexchange",
      children: "2.4 HeadersExchange"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Routes based on message header attributes rather than routing keys. Supports ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-match"
      }), " — ", (0,jsx_runtime.jsx)(_components.code, {
        children: "all"
      }), " means all headers must match, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "any"
      }), " means at least one header must match."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic HeadersExchange headersExchange() {\n    return new HeadersExchange(\"config.headers\");\n}\n\n@Bean\npublic Queue windowsQueue() {\n    return new Queue(\"config.windows.queue\", true);\n}\n\n@Bean\npublic Queue linuxQueue() {\n    return new Queue(\"config.linux.queue\", true);\n}\n\n@Bean\npublic Queue allQueue() {\n    return new Queue(\"config.all.queue\", true);\n}\n\n@Bean\npublic Binding windowsBinding() {\n    return BindingBuilder.bind(windowsQueue())\n        .to(headersExchange())\n        .where(\"os\").matches(\"windows\")\n        .and(\"version\").matches(\"10\");\n}\n\n@Bean\npublic Binding linuxBinding() {\n    return BindingBuilder.bind(linuxQueue())\n        .to(headersExchange())\n        .whereAll(\"os\", \"arch\").exist();\n}\n\n@Bean\npublic Binding allBinding() {\n    return BindingBuilder.bind(allQueue())\n        .to(headersExchange())\n        .whereAny(\"env\", \"branch\").exist();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-queue-configuration",
      children: "3. Queue Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queues can be configured with various arguments for behavior control:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class QueueConfig {\n\n    @Bean\n    public Queue highPriorityQueue() {\n        return QueueBuilder.durable(\"high.priority.queue\")\n            .withArgument(\"x-message-ttl\", 5000)\n            .withArgument(\"x-dead-letter-exchange\", \"high.dlx\")\n            .withArgument(\"x-dead-letter-routing-key\", \"high.dead\")\n            .withArgument(\"x-max-length\", 1000)\n            .withArgument(\"x-max-length-bytes\", 10_000_000)\n            .withArgument(\"x-max-priority\", 10)\n            .build();\n    }\n\n    @Bean\n    public Queue lowPriorityQueue() {\n        return QueueBuilder.durable(\"low.priority.queue\")\n            .withArgument(\"x-message-ttl\", 60000)\n            .withArgument(\"x-dead-letter-exchange\", \"low.dlx\")\n            .withArgument(\"x-max-length\", 100)\n            .withArgument(\"x-overflow\", \"reject-publish\")\n            .build();\n    }\n\n    @Bean\n    public Queue transientQueue() {\n        return QueueBuilder.nonDurable(\"transient.queue\")\n            .exclusive()\n            .autoDelete()\n            .build();\n    }\n\n    @Bean\n    public Queue dlqQueue() {\n        return QueueBuilder.durable(\"high.dlx.queue\")\n            .withArgument(\"x-message-ttl\", 86400000)\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key queue arguments:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Argument"
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
              children: "x-message-ttl"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long (ms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message expires after this time in the queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-dead-letter-exchange"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Exchange to route dead-lettered messages to"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-dead-letter-routing-key"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing key for dead-lettered messages"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-max-length"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum number of messages in the queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-max-length-bytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "long"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum total body size of the queue"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-max-priority"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "int"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Priority queue support (0-255)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-overflow"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "drop-head"
            }), " (default), ", (0,jsx_runtime.jsx)(_components.code, {
              children: "reject-publish"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "x-queue-type"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "classic"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "quorum"
            }), ", or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "stream"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "31-dead-letter-queues",
      children: "3.1 Dead Letter Queues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Messages are dead-lettered when:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["They are rejected with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "requeue=false"
        }), " by a consumer"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The message TTL expires"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The queue length limit is exceeded"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class DeadLetterConfig {\n\n    @Bean\n    public DirectExchange deadLetterExchange() {\n        return new DirectExchange(\"dlx.direct\");\n    }\n\n    @Bean\n    public Queue deadLetterQueue() {\n        return QueueBuilder.durable(\"dlx.order.queue\")\n            .withArgument(\"x-message-ttl\", 3600000)\n            .build();\n    }\n\n    @Bean\n    public Binding deadLetterBinding() {\n        return BindingBuilder.bind(deadLetterQueue())\n            .to(deadLetterExchange())\n            .with(\"order.dead\");\n    }\n\n    @Bean\n    public Queue orderQueue() {\n        return QueueBuilder.durable(\"order.retry.queue\")\n            .withArgument(\"x-dead-letter-exchange\", \"dlx.direct\")\n            .withArgument(\"x-dead-letter-routing-key\", \"order.dead\")\n            .withArgument(\"x-message-ttl\", 30000)\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-spring-amqp-configuration",
      children: "4. Spring AMQP Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "41-basic-connection-factory",
      children: "4.1 Basic Connection Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\n@EnableRabbit\npublic class RabbitConfig {\n\n    @Bean\n    public ConnectionFactory connectionFactory() {\n        CachingConnectionFactory factory = new CachingConnectionFactory();\n        factory.setHost(\"localhost\");\n        factory.setPort(5672);\n        factory.setUsername(\"guest\");\n        factory.setPassword(\"guest\");\n        factory.setVirtualHost(\"/\");\n        factory.setChannelCacheSize(25);\n        factory.setConnectionTimeout(30000);\n        factory.setRequestedHeartBeat(30);\n        return factory;\n    }\n\n    @Bean\n    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {\n        RabbitTemplate template = new RabbitTemplate(connectionFactory);\n        template.setMessageConverter(jsonMessageConverter());\n        template.setConfirmCallback(confirmCallback());\n        template.setReturnCallback(returnCallback());\n        template.setMandatory(true);\n        template.setChannelTransacted(true);\n        return template;\n    }\n\n    @Bean\n    public Jackson2JsonMessageConverter jsonMessageConverter() {\n        Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();\n        converter.setCreateMessageIds(true);\n        ObjectMapper mapper = new ObjectMapper();\n        mapper.registerModule(new JavaTimeModule());\n        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);\n        converter.setObjectMapper(mapper);\n        return converter;\n    }\n\n    @Bean\n    public RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {\n        RabbitAdmin admin = new RabbitAdmin(connectionFactory);\n        admin.setAutoStartup(true);\n        return admin;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-tls-connection-factory",
      children: "4.2 TLS Connection Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic ConnectionFactory tlsConnectionFactory() throws Exception {\n    CachingConnectionFactory factory = new CachingConnectionFactory();\n    factory.setHost(\"rabbitmq.example.com\");\n    factory.setPort(5671);\n\n    SslContextBuilder builder = SslContextBuilder.forClient();\n    builder.keyManager(\n        new File(\"client-cert.pem\"),\n        new File(\"client-key.pem\")\n    );\n    builder.trustManager(new File(\"ca-cert.pem\"));\n\n    SslContext sslContext = builder.build();\n    factory.getRabbitConnectionFactory().enableHostnameVerification();\n\n    NettyDataChannelFactory channelFactory = new NettyDataChannelFactory(\n        new NettyConnectionFactoryConfigurator(factory.getRabbitConnectionFactory()) {\n            @Override\n            public void configure(SslContextBuilder builder) {\n                builder.sslProvider(SslProvider.OPENSSL);\n            }\n        }.configure(sslContext)\n    );\n\n    return factory;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-rabbittemplate--sending-messages",
      children: "5. RabbitTemplate — Sending Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderMessageSender {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderMessageSender.class);\n    private final RabbitTemplate rabbitTemplate;\n\n    public OrderMessageSender(RabbitTemplate rabbitTemplate) {\n        this.rabbitTemplate = rabbitTemplate;\n    }\n\n    public void sendOrder(Order order) {\n        Message message = rabbitTemplate.getMessageConverter()\n            .toMessage(order, new MessageProperties());\n        rabbitTemplate.send(\"order.exchange\", \"payment\", message);\n        log.info(\"Sent order {} to exchange order.exchange\", order.getId());\n    }\n\n    public void sendOrderConverted(Order order) {\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order);\n    }\n\n    public void sendWithPriority(Order order, int priority) {\n        MessageProperties props = new MessageProperties();\n        props.setPriority(priority);\n        props.setExpiration(\"30000\");\n        props.setCorrelationId(order.getId().toString());\n        props.setHeader(\"source\", \"order-service\");\n        props.setDeliveryMode(MessageDeliveryMode.PERSISTENT);\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order, message -> {\n            message.getMessageProperties().setPriority(priority);\n            return message;\n        });\n    }\n\n    public Order receiveOrder() {\n        return (Order) rabbitTemplate.receiveAndConvert(\"order.payment.queue\");\n    }\n\n    public Order receiveOrderWithTimeout() {\n        return (Order) rabbitTemplate.receiveAndConvert(\n            \"order.payment.queue\", 5000);\n    }\n\n    public String sendAndReceive(Order order) {\n        return (String) rabbitTemplate.convertSendAndReceive(\n            \"order.exchange\", \"payment\", order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-publisher-confirms",
      children: "5.1 Publisher Confirms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ReliablePublisher {\n\n    private static final Logger log = LoggerFactory.getLogger(ReliablePublisher.class);\n    private final RabbitTemplate rabbitTemplate;\n\n    public ReliablePublisher(RabbitTemplate rabbitTemplate) {\n        this.rabbitTemplate = rabbitTemplate;\n        this.rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {\n            if (ack) {\n                log.info(\"Message confirmed: {}\", correlationData != null ?\n                    correlationData.getId() : \"null\");\n            } else {\n                log.error(\"Message not confirmed: {} cause: {}\",\n                    correlationData != null ? correlationData.getId() : \"null\", cause);\n            }\n        });\n        this.rabbitTemplate.setReturnsCallback(returned -> {\n            log.warn(\"Message returned: replyCode={}, replyText={}, exchange={}, routingKey={}\",\n                returned.getReplyCode(), returned.getReplyText(),\n                returned.getExchange(), returned.getRoutingKey());\n        });\n        this.rabbitTemplate.setMandatory(true);\n    }\n\n    public void publishWithConfirms(Order order) {\n        CorrelationData correlationData = new CorrelationData(\n            UUID.randomUUID().toString());\n        correlationData.getFuture().addCallback(\n            result -> {\n                if (result.isAck()) {\n                    log.info(\"Order {} confirmed by broker\", order.getId());\n                } else {\n                    log.warn(\"Order {} nack'd by broker: {}\",\n                        order.getId(), result.getReason());\n                }\n            },\n            ex -> log.error(\"Confirm failed for order {}\", order.getId(), ex)\n        );\n        rabbitTemplate.convertAndSend(\n            \"order.exchange\", \"payment\", order, correlationData);\n    }\n\n    public void publishWithMandatoryFlag(Order order) {\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"invalid.key\", order);\n    }\n\n    public void publishBatch(List<Order> orders) {\n        List<CorrelationData> correlationDataList = new ArrayList<>();\n        for (Order order : orders) {\n            CorrelationData cd = new CorrelationData(order.getId().toString());\n            correlationDataList.add(cd);\n            rabbitTemplate.convertAndSend(\n                \"order.exchange\", \"payment\", order, cd);\n        }\n        for (CorrelationData cd : correlationDataList) {\n            try {\n                Confirm confirm = cd.getFuture().get(10, TimeUnit.SECONDS);\n                log.info(\"Batch confirm for {}: ack={}\",\n                    cd.getId(), confirm.isAck());\n            } catch (Exception e) {\n                log.error(\"Batch confirm timeout for {}\", cd.getId());\n            }\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-custom-message-converter",
      children: "5.2 Custom Message Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic MessageConverter customMessageConverter() {\n    Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();\n    converter.setCreateMessageIds(true);\n    converter.setAlwaysConvertToInferredType(true);\n    converter.setClassMapper(new ClassMapper() {\n        @Override\n        public void fromClass(Class<?> clazz, MessageProperties properties) {\n            properties.setHeader(\"__TypeId__\", clazz.getSimpleName());\n        }\n\n        @Override\n        public Class<?> toClass(MessageProperties properties) {\n            String typeId = properties.getHeader(\"__TypeId__\");\n            if (typeId == null) {\n                return Object.class;\n            }\n            return switch (typeId) {\n                case \"Order\" -> Order.class;\n                case \"PaymentEvent\" -> PaymentEvent.class;\n                case \"InventoryEvent\" -> InventoryEvent.class;\n                default -> Object.class;\n            };\n        }\n    });\n    return converter;\n}\n\n@Bean\npublic MessageConverter simpleConverter() {\n    SimpleMessageConverter converter = new SimpleMessageConverter();\n    converter.setAllowedListPatterns(List.of(\"com.example.*\"));\n    return converter;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-rabbitlistener--consuming-messages",
      children: "6. @RabbitListener — Consuming Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\npublic class OrderMessageConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderMessageConsumer.class);\n\n    @RabbitListener(\n        queues = \"order.payment.queue\",\n        concurrency = \"3-10\",\n        messageConverter = \"jsonMessageConverter\"\n    )\n    public void handlePaymentOrder(Order order, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag) {\n        try {\n            log.info(\"Processing payment order: {} from {}\", order.getId(), order.getCustomerEmail());\n            processPayment(order);\n            channel.basicAck(tag, false);\n        } catch (Exception e) {\n            log.error(\"Failed to process order {}\", order.getId(), e);\n            channel.basicNack(tag, false, false);\n        }\n    }\n\n    @RabbitListener(\n        bindings = @QueueBinding(\n            value = @Queue(value = \"order.shipping.queue\", durable = \"true\"),\n            exchange = @Exchange(value = \"order.exchange\", type = ExchangeTypes.DIRECT),\n            key = \"shipping\"\n        ),\n        concurrency = \"5\"\n    )\n    public void handleShippingOrder(@Payload Order order,\n                                    @Headers Map<String, Object> headers) {\n        log.info(\"Processing shipping order: {}\", order.getId());\n        headers.forEach((key, value) ->\n            log.debug(\"Header: {} = {}\", key, value));\n    }\n\n    @RabbitListener(queues = \"order.audit.queue\")\n    public void handleAudit(Message message) {\n        log.info(\"Audit message received: body={}, headers={}\",\n            new String(message.getBody()), message.getMessageProperties().getHeaders());\n    }\n\n    @RabbitListener(\n        queues = \"order.error.queue\",\n        containerFactory = \"retryContainerFactory\"\n    )\n    public void handleRetryOrder(Order order) {\n        log.info(\"Processing retry order: {}\", order.getId());\n        processPayment(order);\n    }\n\n    private void processPayment(Order order) {\n        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\n            throw new IllegalArgumentException(\"Invalid order total\");\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-message-listener-adapter",
      children: "6.1 Message Listener Adapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic SimpleRabbitListenerContainerFactory customContainerFactory(\n        ConnectionFactory connectionFactory) {\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n    factory.setConnectionFactory(connectionFactory);\n    factory.setConcurrentConsumers(5);\n    factory.setMaxConcurrentConsumers(15);\n    factory.setPrefetchCount(10);\n    factory.setBatchSize(5);\n    factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\n    factory.setDefaultRequeueRejected(false);\n    factory.setMissingQueuesFatal(false);\n    factory.setAdviceChain(new Advice[] {\n        new RetryOperationsInterceptor()\n    });\n    factory.setConsumerTagStrategy(queue -> \"consumer-\" + queue + \"-\" + UUID.randomUUID());\n    factory.setErrorHandler(new ConditionalRejectingErrorHandler());\n    return factory;\n}\n\n@Bean\npublic SimpleRabbitListenerContainerFactory retryContainerFactory(\n        ConnectionFactory connectionFactory) {\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n    factory.setConnectionFactory(connectionFactory);\n    factory.setConcurrentConsumers(2);\n    factory.setMaxConcurrentConsumers(4);\n    factory.setPrefetchCount(5);\n    factory.setAcknowledgeMode(AcknowledgeMode.AUTO);\n    factory.setDefaultRequeueRejected(true);\n    return factory;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-retry-and-error-handling",
      children: "7. Retry and Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "71-retrytemplate-with-exponential-backoff",
      children: "7.1 RetryTemplate with Exponential Backoff"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class RetryConfig {\n\n    @Bean\n    public RetryTemplate retryTemplate() {\n        RetryTemplate template = new RetryTemplate();\n\n        ExponentialBackOffPolicy backOff = new ExponentialBackOffPolicy();\n        backOff.setInitialInterval(1000);\n        backOff.setMultiplier(2.0);\n        backOff.setMaxInterval(30000);\n        template.setBackOffPolicy(backOff);\n\n        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();\n        retryPolicy.setMaxAttempts(3);\n        template.setRetryPolicy(retryPolicy);\n\n        return template;\n    }\n\n    @Bean\n    public RetryOperationsInterceptor retryInterceptor(RetryTemplate retryTemplate) {\n        return RetryInterceptorBuilder.stateless()\n            .retryOperations(retryTemplate)\n            .recoverer(rejectAndDontRequeueRecoverer())\n            .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-message-recoverers",
      children: "7.2 Message Recoverers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class MessageRecovererConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(MessageRecovererConfig.class);\n    private final RabbitTemplate rabbitTemplate;\n\n    public MessageRecovererConfig(RabbitTemplate rabbitTemplate) {\n        this.rabbitTemplate = rabbitTemplate;\n    }\n\n    @Bean\n    public MessageRecoverer rejectAndDontRequeueRecoverer() {\n        return new RejectAndDontRequeueRecoverer();\n    }\n\n    @Bean\n    public MessageRecoverer immediateRequeueRecoverer() {\n        return new ImmediateRequeueMessageRecoverer();\n    }\n\n    @Bean\n    public MessageRecoverer republishMessageRecoverer() {\n        RepublishMessageRecoverer recoverer = new RepublishMessageRecoverer(\n            rabbitTemplate, \"order.retry.exchange\");\n        recoverer.setErrorRoutingKey(\"order.retry\");\n        return recoverer;\n    }\n\n    @Bean\n    public MessageRecoverer customRecoverer() {\n        return new MessageRecoverer() {\n            @Override\n            public void recover(Message message, Throwable cause) {\n                log.error(\"All retries exhausted for message: {}\",\n                    new String(message.getBody()), cause);\n\n                MessageProperties props = message.getMessageProperties();\n                props.setHeader(\"x-exception-message\", cause.getMessage());\n                props.setHeader(\"x-exception-stacktrace\",\n                    ExceptionUtils.getStackTrace(cause));\n                props.setHeader(\"x-retry-count\",\n                    props.getHeader(\"x-retry-count\") != null ?\n                    (int) props.getHeader(\"x-retry-count\") + 1 : 1);\n                props.setDelay(60000);\n\n                rabbitTemplate.convertAndSend(\n                    \"order.dlx.exchange\", \"order.dead\", message,\n                    m -> {\n                        m.getMessageProperties().setDelay(60000);\n                        return m;\n                    }\n                );\n            }\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "73-per-listener-retry-configuration",
      children: "7.3 Per-Listener Retry Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class ListenerRetryConfig {\n\n    @Bean\n    public SimpleRabbitListenerContainerFactory retryContainerFactory(\n            ConnectionFactory connectionFactory, RetryTemplate retryTemplate) {\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n        factory.setConnectionFactory(connectionFactory);\n        factory.setConcurrentConsumers(3);\n        factory.setMaxConcurrentConsumers(6);\n        factory.setPrefetchCount(5);\n        factory.setAdviceChain(new Advice[] {\n            RetryInterceptorBuilder.stateless()\n                .retryOperations(retryTemplate)\n                .backOffOptions(2000, 3, 30000)\n                .recoverer(new RepublishMessageRecoverer(\n                    rabbitTemplate(connectionFactory),\n                    \"order.retry.exchange\", \"order.retry\"))\n                .build()\n        });\n        return factory;\n    }\n\n    private RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {\n        RabbitTemplate template = new RabbitTemplate(connectionFactory);\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\n        return template;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-batch-processing",
      children: "8. Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "81-batchingrabbittemplate",
      children: "8.1 BatchingRabbitTemplate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class BatchConfig {\n\n    @Bean\n    public BatchingRabbitTemplate batchingRabbitTemplate(\n            ConnectionFactory connectionFactory) {\n        BatchingStrategy strategy = new SimpleBatchingStrategy(\n            50,                    // batch size\n            10000,                 // batch limit (bytes)\n            3000                   // timeout (ms)\n        );\n        BatchingRabbitTemplate template = new BatchingRabbitTemplate(\n            connectionFactory, strategy);\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\n        return template;\n    }\n}\n\n@Service\npublic class BatchPublisher {\n\n    private static final Logger log = LoggerFactory.getLogger(BatchPublisher.class);\n    private final BatchingRabbitTemplate batchingRabbitTemplate;\n\n    public BatchPublisher(BatchingRabbitTemplate batchingRabbitTemplate) {\n        this.batchingRabbitTemplate = batchingRabbitTemplate;\n    }\n\n    public void publishMetrics(List<MetricEvent> events) {\n        for (MetricEvent event : events) {\n            batchingRabbitTemplate.convertAndSend(\n                \"metrics.exchange\", \"metrics.batch\", event);\n        }\n        log.info(\"Queued {} metrics for batch publishing\", events.size());\n    }\n}\n\n@Component\npublic class BatchConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(BatchConsumer.class);\n\n    @RabbitListener(queues = \"metrics.queue\", containerFactory = \"batchContainerFactory\")\n    public void handleBatch(List<MetricEvent> events) {\n        log.info(\"Received batch of {} metrics\", events.size());\n        for (MetricEvent event : events) {\n            log.debug(\"Metric: {} = {} at {}\",\n                event.getName(), event.getValue(), event.getTimestamp());\n        }\n    }\n}\n\n@Bean\npublic SimpleRabbitListenerContainerFactory batchContainerFactory(\n        ConnectionFactory connectionFactory) {\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n    factory.setConnectionFactory(connectionFactory);\n    factory.setBatchListener(true);\n    factory.setConsumerBatchEnabled(true);\n    factory.setBatchSize(50);\n    factory.setReceiveTimeout(3000L);\n    return factory;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-multiple-virtual-hosts",
      children: "9. Multiple Virtual Hosts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class MultiVhostConfig {\n\n    @Bean\n    public ConnectionFactory primaryConnectionFactory() {\n        CachingConnectionFactory factory = new CachingConnectionFactory();\n        factory.setHost(\"localhost\");\n        factory.setPort(5672);\n        factory.setUsername(\"admin\");\n        factory.setPassword(\"admin\");\n        factory.setVirtualHost(\"/primary\");\n        return factory;\n    }\n\n    @Bean\n    public ConnectionFactory secondaryConnectionFactory() {\n        CachingConnectionFactory factory = new CachingConnectionFactory();\n        factory.setHost(\"localhost\");\n        factory.setPort(5672);\n        factory.setUsername(\"admin\");\n        factory.setPassword(\"admin\");\n        factory.setVirtualHost(\"/secondary\");\n        return factory;\n    }\n\n    @Bean\n    public RabbitTemplate primaryTemplate(\n            @Qualifier(\"primaryConnectionFactory\") ConnectionFactory cf) {\n        RabbitTemplate template = new RabbitTemplate(cf);\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\n        return template;\n    }\n\n    @Bean\n    public RabbitTemplate secondaryTemplate(\n            @Qualifier(\"secondaryConnectionFactory\") ConnectionFactory cf) {\n        RabbitTemplate template = new RabbitTemplate(cf);\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\n        return template;\n    }\n\n    @Bean\n    public SimpleRabbitListenerContainerFactory primaryListenerFactory(\n            @Qualifier(\"primaryConnectionFactory\") ConnectionFactory cf) {\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n        factory.setConnectionFactory(cf);\n        factory.setConcurrentConsumers(5);\n        return factory;\n    }\n\n    @Bean\n    public SimpleRabbitListenerContainerFactory secondaryListenerFactory(\n            @Qualifier(\"secondaryConnectionFactory\") ConnectionFactory cf) {\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n        factory.setConnectionFactory(cf);\n        factory.setConcurrentConsumers(3);\n        return factory;\n    }\n}\n\n@Component\npublic class VhostAwareConsumer {\n\n    @RabbitListener(\n        queues = \"primary.queue\",\n        containerFactory = \"primaryListenerFactory\"\n    )\n    public void handlePrimary(Order order) {\n        System.out.println(\"Primary: \" + order);\n    }\n\n    @RabbitListener(\n        queues = \"secondary.queue\",\n        containerFactory = \"secondaryListenerFactory\"\n    )\n    public void handleSecondary(Order order) {\n        System.out.println(\"Secondary: \" + order);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-rabbitadmin--programmatic-management",
      children: "10. RabbitAdmin — Programmatic Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class RabbitAdminService {\n\n    private final RabbitAdmin admin;\n\n    public RabbitAdminService(RabbitAdmin admin) {\n        this.admin = admin;\n    }\n\n    public void declareInfrastructure(String tenantId) {\n        Queue queue = QueueBuilder.durable(\"tenant.\" + tenantId + \".queue\")\n            .withArgument(\"x-message-ttl\", 60000)\n            .build();\n        admin.declareQueue(queue);\n\n        DirectExchange exchange = new DirectExchange(\"tenant.\" + tenantId + \".exchange\");\n        admin.declareExchange(exchange);\n\n        Binding binding = BindingBuilder.bind(queue)\n            .to(exchange)\n            .with(\"tenant.\" + tenantId);\n        admin.declareBinding(binding);\n\n        // Dead letter setup\n        Queue dlq = QueueBuilder.durable(\"tenant.\" + tenantId + \".dlq\").build();\n        admin.declareQueue(dlq);\n\n        DirectExchange dlx = new DirectExchange(\"tenant.\" + tenantId + \".dlx\");\n        admin.declareExchange(dlx);\n\n        Binding dlqBinding = BindingBuilder.bind(dlq)\n            .to(dlx)\n            .with(\"tenant.\" + tenantId + \".dead\");\n        admin.declareBinding(dlqBinding);\n    }\n\n    public void deleteQueue(String queueName) {\n        boolean deleted = admin.deleteQueue(queueName);\n        if (deleted) {\n            System.out.println(\"Deleted queue: \" + queueName);\n        }\n    }\n\n    public void purgeQueue(String queueName) {\n        int purged = admin.purgeQueue(queueName, false);\n        System.out.println(\"Purged \" + purged + \" messages from \" + queueName);\n    }\n\n    public Properties getQueueProperties(String queueName) {\n        Properties props = admin.getQueueProperties(queueName);\n        if (props != null) {\n            System.out.println(\"Message count: \" + props.get(RabbitAdmin.QUEUE_MESSAGE_COUNT));\n            System.out.println(\"Consumer count: \" + props.get(RabbitAdmin.QUEUE_CONSUMER_COUNT));\n        }\n        return props;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-complete-order-processing-example",
      children: "11. Complete Order Processing Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\n@EnableRabbit\npublic class RabbitOrderApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(RabbitOrderApplication.class, args);\n    }\n}\n\n@Configuration\npublic class OrderMessagingConfig {\n\n    @Bean\n    public DirectExchange orderExchange() {\n        return new DirectExchange(\"order.exchange\");\n    }\n\n    @Bean\n    public DirectExchange orderDeadLetterExchange() {\n        return new DirectExchange(\"order.dlx\");\n    }\n\n    @Bean\n    public Queue paymentQueue() {\n        return QueueBuilder.durable(\"order.payment.queue\")\n            .withArgument(\"x-dead-letter-exchange\", \"order.dlx\")\n            .withArgument(\"x-dead-letter-routing-key\", \"payment.dead\")\n            .withArgument(\"x-message-ttl\", 30000)\n            .withArgument(\"x-max-length\", 500)\n            .build();\n    }\n\n    @Bean\n    public Queue shippingQueue() {\n        return QueueBuilder.durable(\"order.shipping.queue\")\n            .build();\n    }\n\n    @Bean\n    public Queue notificationQueue() {\n        return QueueBuilder.durable(\"order.notification.queue\")\n            .build();\n    }\n\n    @Bean\n    public Queue deadLetterQueue() {\n        return QueueBuilder.durable(\"order.dlq\")\n            .withArgument(\"x-message-ttl\", 86400000)\n            .build();\n    }\n\n    @Bean\n    public Binding paymentBinding() {\n        return BindingBuilder.bind(paymentQueue())\n            .to(orderExchange()).with(\"payment\");\n    }\n\n    @Bean\n    public Binding shippingBinding() {\n        return BindingBuilder.bind(shippingQueue())\n            .to(orderExchange()).with(\"shipping\");\n    }\n\n    @Bean\n    public Binding notificationBinding() {\n        return BindingBuilder.bind(notificationQueue())\n            .to(orderExchange()).with(\"notification\");\n    }\n\n    @Bean\n    public Binding deadLetterBinding() {\n        return BindingBuilder.bind(deadLetterQueue())\n            .to(orderDeadLetterExchange()).with(\"payment.dead\");\n    }\n}\n\n@Service\npublic class OrderCommandService {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderCommandService.class);\n    private final RabbitTemplate rabbitTemplate;\n\n    public OrderCommandService(RabbitTemplate rabbitTemplate) {\n        this.rabbitTemplate = rabbitTemplate;\n    }\n\n    public void placeOrder(Order order) {\n        log.info(\"Placing order: {}\", order.getId());\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order);\n    }\n\n    public void shipOrder(Long orderId) {\n        ShipmentEvent event = new ShipmentEvent(orderId, Instant.now());\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"shipping\", event);\n    }\n}\n\n@Component\npublic class PaymentConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(PaymentConsumer.class);\n    private final RabbitTemplate rabbitTemplate;\n\n    public PaymentConsumer(RabbitTemplate rabbitTemplate) {\n        this.rabbitTemplate = rabbitTemplate;\n    }\n\n    @RabbitListener(queues = \"order.payment.queue\", concurrency = \"5\")\n    public void processPayment(Order order) {\n        log.info(\"Processing payment for order {}: {}\", order.getId(), order.getTotal());\n        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\n            throw new IllegalArgumentException(\"Invalid total for order \" + order.getId());\n        }\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"notification\",\n            new NotificationEvent(order.getCustomerEmail(), \"Payment received\"));\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"shipping\", order);\n    }\n}\n\n@Component\npublic class ShippingConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(ShippingConsumer.class);\n\n    @RabbitListener(queues = \"order.shipping.queue\")\n    public void processShipping(Order order) {\n        log.info(\"Arranging shipping for order {} to {}\", order.getId(), order.getShippingAddress());\n    }\n\n    @RabbitListener(queues = \"order.shipping.queue\")\n    public void processShipmentEvent(ShipmentEvent event) {\n        log.info(\"Processing shipment event for order {}\", event.getOrderId());\n    }\n}\n\n@Component\npublic class NotificationConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(NotificationConsumer.class);\n\n    @RabbitListener(queues = \"order.notification.queue\")\n    public void sendNotification(NotificationEvent event) {\n        log.info(\"Sending notification to {}: {}\", event.getEmail(), event.getMessage());\n    }\n}\n\n@Component\npublic class DeadLetterConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(DeadLetterConsumer.class);\n\n    @RabbitListener(queues = \"order.dlq\")\n    public void handleDeadLetter(Order order) {\n        log.error(\"Dead letter received for order {}: {}\", order.getId(), order.getTotal());\n        // Alert operations team\n    }\n}\n\n@Component\npublic class RejectingErrorHandler extends ConditionalRejectingErrorHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(RejectingErrorHandler.class);\n\n    @Override\n    public void handleError(Throwable t) {\n        log.error(\"RabbitMQ listener error\", t);\n        super.handleError(t);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-container-customization",
      children: "12. Container Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\npublic class ContainerCustomizerConfig {\n\n    @Bean\n    public SimpleRabbitListenerContainerFactory customContainerFactory(\n            ConnectionFactory connectionFactory) {\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n        factory.setConnectionFactory(connectionFactory);\n        factory.setConcurrentConsumers(4);\n        factory.setMaxConcurrentConsumers(12);\n        factory.setPrefetchCount(8);\n        factory.setBatchSize(3);\n        factory.setConsumerBatchEnabled(true);\n        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\n        factory.setDefaultRequeueRejected(false);\n        factory.setMissingQueuesFatal(false);\n        factory.setAutoStartup(true);\n        factory.setAdviceChain(new Advice[] {\n            new RetryOperationsInterceptor()\n        });\n        factory.setErrorHandler(new ConditionalRejectingErrorHandler());\n        factory.setConsumerTagStrategy(q -> \"myapp-\" + q);\n        factory.setExclusive(false);\n        factory.setAfterReceivePostProcessors(message -> {\n            message.getMessageProperties().setHeader(\"x-received-at\",\n                Instant.now().toString());\n            return message;\n        });\n        factory.setApplicationContext(new AnnotationConfigApplicationContext());\n        return factory;\n    }\n\n    @Bean\n    public SimpleRabbitListenerContainerFactory exclusiveContainerFactory(\n            ConnectionFactory connectionFactory) {\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\n        factory.setConnectionFactory(connectionFactory);\n        factory.setConcurrentConsumers(1);\n        factory.setPrefetchCount(1);\n        factory.setExclusive(true);\n        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\n        return factory;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-custom-connection-factory-with-multiple-channels",
      children: "13. Custom Connection Factory with Multiple Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\npublic CachingConnectionFactory multiChannelFactory() {\n    CachingConnectionFactory factory = new CachingConnectionFactory();\n    factory.setHost(\"rabbitmq.internal\");\n    factory.setPort(5672);\n    factory.setUsername(\"app-user\");\n    factory.setPassword(\"app-pass\");\n    factory.setVirtualHost(\"/app\");\n    factory.setChannelCacheSize(50);\n    factory.setChannelCheckoutTimeout(5000);\n    factory.setConnectionTimeout(30000);\n    factory.setRequestedHeartBeat(60);\n    factory.setPublisherConfirmType(CachingConnectionFactory.ConfirmType.CORRELATED);\n    factory.setPublisherReturns(true);\n    factory.setShutdownTimeout(30000);\n\n    // Configure connection listeners\n    factory.addConnectionListener(new ConnectionListener() {\n        @Override\n        public void onCreate(Connection connection) {\n            log.info(\"RabbitMQ connection created: {}\", connection);\n        }\n\n        @Override\n        public void onClose(Connection connection) {\n            log.warn(\"RabbitMQ connection closed: {}\", connection);\n        }\n\n        @Override\n        public void onShutDown(ShutdownSignalException signal) {\n            log.error(\"RabbitMQ connection shutdown: {}\", signal.getMessage());\n        }\n    });\n\n    return factory;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-full-application-properties",
      children: "14. Full Application Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  rabbitmq:\n    host: localhost\n    port: 5672\n    username: guest\n    password: guest\n    virtual-host: /\n    connection-timeout: 30s\n    requested-heartbeat: 30s\n    listener:\n      simple:\n        concurrency: 5\n        max-concurrency: 15\n        prefetch: 10\n        acknowledge-mode: manual\n        default-requeue-rejected: false\n        retry:\n          enabled: true\n          initial-interval: 2s\n          multiplier: 2.0\n          max-attempts: 5\n          max-interval: 30s\n          stateless: true\n    template:\n      retry:\n        enabled: true\n        initial-interval: 1s\n        multiplier: 2.0\n        max-attempts: 3\n      mandatory: true\n    publisher-confirm-type: correlated\n    publisher-returns: true\n    cache:\n      channel:\n        size: 50\n        checkout-timeout: 5s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-testing-rabbitmq",
      children: "15. Testing RabbitMQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@EnableRabbit\nclass RabbitTemplateTest {\n\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n\n    @Autowired\n    private RabbitAdmin rabbitAdmin;\n\n    @BeforeEach\n    void setUp() {\n        Queue testQueue = QueueBuilder.durable(\"test.queue\").build();\n        DirectExchange testExchange = new DirectExchange(\"test.exchange\");\n        rabbitAdmin.declareQueue(testQueue);\n        rabbitAdmin.declareExchange(testExchange);\n        rabbitAdmin.declareBinding(\n            BindingBuilder.bind(testQueue).to(testExchange).with(\"test\"));\n    }\n\n    @AfterEach\n    void tearDown() {\n        rabbitAdmin.deleteQueue(\"test.queue\");\n        rabbitAdmin.deleteExchange(\"test.exchange\");\n    }\n\n    @Test\n    void testSendAndReceive() {\n        Order order = new Order(1L, \"test@test.com\", BigDecimal.valueOf(100));\n        rabbitTemplate.convertAndSend(\"test.exchange\", \"test\", order);\n\n        Order received = (Order) rabbitTemplate.receiveAndConvert(\"test.queue\", 3000);\n        assertThat(received.getId()).isEqualTo(order.getId());\n        assertThat(received.getCustomerEmail()).isEqualTo(order.getCustomerEmail());\n    }\n\n    @Test\n    void testConvertSendAndReceive() {\n        Order order = new Order(2L, \"reply@test.com\", BigDecimal.valueOf(200));\n        rabbitTemplate.convertSendAndReceive(\"test.exchange\", \"test\", order);\n    }\n}\n\n@SpringBootTest\n@EnableRabbit\nclass RabbitListenerTest {\n\n    @Autowired\n    private RabbitTemplate rabbitTemplate;\n\n    @Test\n    void testListenerReceivesMessage() {\n        Order order = new Order(3L, \"listener@test.com\", BigDecimal.valueOf(300));\n        rabbitTemplate.convertAndSend(\"test.exchange\", \"test\", order);\n        // Verify side effects (log output, database state, etc.)\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nAlways use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CorrelationId"
        }), " message property for end-to-end tracing → it helps track messages across producer, broker, and consumer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nIdempotent consumers are essential → messages can be redelivered after consumer failure or connection loss."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nConfigure a DLQ with a TTL-based retry queue for handling transient failures → the message returns to the original queue after TTL expires."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RabbitMQ implements the AMQP 0-9-1 protocol, providing a robust message broker with four exchange types, durable and transient queues, and flexible routing through bindings. Key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exchanges"
        }), " are the routing backbone — Direct for exact match, Topic for wildcard patterns, Fanout for broadcast, and Headers for attribute-based routing."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Queues"
        }), " support rich configuration including TTL, dead-letter exchanges, max length, and priority."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsxs)(_components.strong, {
          children: ["Spring AMQP's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "RabbitTemplate"
          })]
        }), " provides ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convertAndSend"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "receiveAndConvert"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "convertSendAndReceive"
        }), " for both synchronous and asynchronous messaging. Always configure a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Jackson2JsonMessageConverter"
        }), " for structured data."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@RabbitListener"
          })
        }), " consumes messages with per-listener concurrency tuning, container factory customization, and manual/auto acknowledgments."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Publisher confirms and returns"
        }), " ensure reliable delivery. Always set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "mandatory=true"
        }), " and register ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ConfirmCallback"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ReturnCallback"
        }), "."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Retry and error handling"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RetryTemplate"
        }), " with exponential backoff, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MessageRecoverer"
        }), " implementations for final disposition — ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RepublishMessageRecoverer"
        }), " is production-preferred for routing failures to a retry/dead-letter queue."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "BatchingRabbitTemplate"
          })
        }), " aggregates messages for high-throughput scenarios."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "RabbitAdmin"
          })
        }), " enables programmatic management of exchanges, queues, and bindings for dynamic multi-tenant setups."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-direct-exchange-setup",
      children: "Exercise 1: Direct Exchange Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DirectExchange"
      }), " named ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"task.exchange\""
      }), " with three queues: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "critical.queue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "normal.queue"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "low.queue"
      }), ". Bind them with routing keys ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"critical\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"normal\""
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"low\""
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-topic-exchange-pattern",
      children: "Exercise 2: Topic Exchange Pattern"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TopicExchange"
      }), " for a logging system. Bind queues to patterns: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"error.*\""
      }), " for error logs, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"*.critical\""
      }), " for critical logs across all services, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app.#\""
      }), " for all app logs."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-rabbittemplate-send-and-receive",
      children: "Exercise 3: RabbitTemplate Send and Receive"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RabbitTemplate.convertAndSend"
      }), " to send a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Task"
      }), " object to a queue, and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "receiveAndConvert"
      }), " to poll for it. Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Jackson2JsonMessageConverter"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-rabbitlistener-with-manual-ack",
      children: "Exercise 4: @RabbitListener with Manual Ack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RabbitListener"
      }), " that processes messages with manual acknowledgment. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "channel.basicAck"
      }), " on success and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "channel.basicNack"
      }), " on failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-dead-letter-queue",
      children: "Exercise 5: Dead Letter Queue"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure a queue with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "x-dead-letter-exchange"
      }), " pointing to a DLX. Create a consumer on the DLQ that logs dead-lettered messages."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-publisher-confirms",
      children: "Exercise 6: Publisher Confirms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a reliable publisher that sets up ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConfirmCallback"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ReturnCallback"
      }), ". Verify ack/nack behavior by publishing to valid and invalid routing keys."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-retry-with-exponential-backoff",
      children: "Exercise 7: Retry with Exponential Backoff"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RetryTemplate"
      }), " with 1000ms initial interval, 3.0 multiplier, 30s max. Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RepublishMessageRecoverer"
      }), " to send failed messages to a retry exchange."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-batchingrabbittemplate",
      children: "Exercise 8: BatchingRabbitTemplate"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "BatchingRabbitTemplate"
      }), " with batch size 20, byte limit 10000, and 5-second timeout. Publish 50 small messages and verify batch behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-multi-vhost-setup",
      children: "Exercise 9: Multi-Vhost Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure two ", (0,jsx_runtime.jsx)(_components.code, {
        children: "ConnectionFactory"
      }), " beans for vhosts ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/app-a"
      }), " and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "/app-b"
      }), ". Create separate ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RabbitTemplate"
      }), " beans and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RabbitListener"
      }), " container factories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-complete-order-pipeline",
      children: "Exercise 10: Complete Order Pipeline"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a full order processing pipeline: ", (0,jsx_runtime.jsx)(_components.code, {
        children: "order.exchange"
      }), " (direct), queues for payment → inventory → shipping → notification, with a DLQ for failed messages and publisher confirms."]
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