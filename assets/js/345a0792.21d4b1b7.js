"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[3202],{

/***/ 21
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
const site_docs_courses_java_35_rabbitmq_md_345_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/35-rabbitmq","title":"RabbitMQ","description":"Previous Kafka","source":"@site/docs/courses/java/35-rabbitmq.md","sourceDirName":"courses/java","slug":"/java/35-rabbitmq","permalink":"/ai-engineering-journey/java/35-rabbitmq","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":35,"frontMatter":{"id":"35-rabbitmq","slug":"/java/35-rabbitmq","title":"RabbitMQ","sidebar_label":"RabbitMQ","sidebar_position":35},"sidebar":"course-java","previous":{"title":"Async Processing & Spring Events","permalink":"/ai-engineering-journey/java/34-async-events"},"next":{"title":"Apache Kafka","permalink":"/ai-engineering-journey/java/36-kafka"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[RabbitMQ] --> B[Core Concepts]\r\n    A --> C[Producers]\r\n    A --> D[Consumers]\r\n    A --> E[Advanced]\r\n    B --> B1[Exchange / Queue / Binding]\r\n    B --> B2[AMQP protocol]\r\n    C --> C1[RabbitTemplate]\r\n    C --> C2[Correlation ID]\r\n    D --> D1[\"@RabbitListener\"]\r\n    D --> D2[Manual ack]\r\n    E --> E1[DLQ / Retry]\r\n    E --> E2[Idempotent consumers]"
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
        children: "@Bean\r\npublic DirectExchange orderExchange() {\r\n    return new DirectExchange(\"order.exchange\", true, false);\r\n}\r\n\r\n@Bean\r\npublic Queue orderPaymentQueue() {\r\n    return QueueBuilder.durable(\"order.payment.queue\")\r\n        .withArgument(\"x-dead-letter-exchange\", \"order.dlx\")\r\n        .withArgument(\"x-message-ttl\", 30000)\r\n        .build();\r\n}\r\n\r\n@Bean\r\npublic Queue orderShippingQueue() {\r\n    return new Queue(\"order.shipping.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Binding paymentBinding() {\r\n    return BindingBuilder.bind(orderPaymentQueue())\r\n        .to(orderExchange())\r\n        .with(\"payment\");\r\n}\r\n\r\n@Bean\r\npublic Binding shippingBinding() {\r\n    return BindingBuilder.bind(orderShippingQueue())\r\n        .to(orderExchange())\r\n        .with(\"shipping\");\r\n}\n"
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
        children: "@Bean\r\npublic TopicExchange notificationExchange() {\r\n    return new TopicExchange(\"notification.topic\");\r\n}\r\n\r\n@Bean\r\npublic Queue emailQueue() {\r\n    return new Queue(\"notification.email.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Queue smsQueue() {\r\n    return new Queue(\"notification.sms.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Queue pushQueue() {\r\n    return new Queue(\"notification.push.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Binding emailBinding() {\r\n    return BindingBuilder.bind(emailQueue())\r\n        .to(notificationExchange())\r\n        .with(\"user.*.email\");\r\n}\r\n\r\n@Bean\r\npublic Binding smsBinding() {\r\n    return BindingBuilder.bind(smsQueue())\r\n        .to(notificationExchange())\r\n        .with(\"user.*.sms\");\r\n}\r\n\r\n@Bean\r\npublic Binding pushBinding() {\r\n    return BindingBuilder.bind(pushQueue())\r\n        .to(notificationExchange())\r\n        .with(\"user.#.push\");\r\n}\r\n\r\n@Bean\r\npublic Binding allNotificationsBinding() {\r\n    return BindingBuilder.bind(pushQueue())\r\n        .to(notificationExchange())\r\n        .with(\"notification.#\");\r\n}\n"
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
        children: "@Bean\r\npublic FanoutExchange broadcastExchange() {\r\n    return new FanoutExchange(\"broadcast.fanout\");\r\n}\r\n\r\n@Bean\r\npublic Queue serviceAQueue() {\r\n    return new Queue(\"broadcast.service-a.queue\", false);\r\n}\r\n\r\n@Bean\r\npublic Queue serviceBQueue() {\r\n    return new Queue(\"broadcast.service-b.queue\", false);\r\n}\r\n\r\n@Bean\r\npublic Queue auditQueue() {\r\n    return QueueBuilder.nonDurable(\"broadcast.audit.queue\")\r\n        .autoDelete()\r\n        .build();\r\n}\r\n\r\n@Bean\r\npublic Binding serviceABinding() {\r\n    return BindingBuilder.bind(serviceAQueue()).to(broadcastExchange());\r\n}\r\n\r\n@Bean\r\npublic Binding serviceBBinding() {\r\n    return BindingBuilder.bind(serviceBQueue()).to(broadcastExchange());\r\n}\r\n\r\n@Bean\r\npublic Binding auditBinding() {\r\n    return BindingBuilder.bind(auditQueue()).to(broadcastExchange());\r\n}\n"
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
        children: "@Bean\r\npublic HeadersExchange headersExchange() {\r\n    return new HeadersExchange(\"config.headers\");\r\n}\r\n\r\n@Bean\r\npublic Queue windowsQueue() {\r\n    return new Queue(\"config.windows.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Queue linuxQueue() {\r\n    return new Queue(\"config.linux.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Queue allQueue() {\r\n    return new Queue(\"config.all.queue\", true);\r\n}\r\n\r\n@Bean\r\npublic Binding windowsBinding() {\r\n    return BindingBuilder.bind(windowsQueue())\r\n        .to(headersExchange())\r\n        .where(\"os\").matches(\"windows\")\r\n        .and(\"version\").matches(\"10\");\r\n}\r\n\r\n@Bean\r\npublic Binding linuxBinding() {\r\n    return BindingBuilder.bind(linuxQueue())\r\n        .to(headersExchange())\r\n        .whereAll(\"os\", \"arch\").exist();\r\n}\r\n\r\n@Bean\r\npublic Binding allBinding() {\r\n    return BindingBuilder.bind(allQueue())\r\n        .to(headersExchange())\r\n        .whereAny(\"env\", \"branch\").exist();\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-queue-configuration",
      children: "3. Queue Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Queues can be configured with various arguments for behavior control:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class QueueConfig {\r\n\r\n    @Bean\r\n    public Queue highPriorityQueue() {\r\n        return QueueBuilder.durable(\"high.priority.queue\")\r\n            .withArgument(\"x-message-ttl\", 5000)\r\n            .withArgument(\"x-dead-letter-exchange\", \"high.dlx\")\r\n            .withArgument(\"x-dead-letter-routing-key\", \"high.dead\")\r\n            .withArgument(\"x-max-length\", 1000)\r\n            .withArgument(\"x-max-length-bytes\", 10_000_000)\r\n            .withArgument(\"x-max-priority\", 10)\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue lowPriorityQueue() {\r\n        return QueueBuilder.durable(\"low.priority.queue\")\r\n            .withArgument(\"x-message-ttl\", 60000)\r\n            .withArgument(\"x-dead-letter-exchange\", \"low.dlx\")\r\n            .withArgument(\"x-max-length\", 100)\r\n            .withArgument(\"x-overflow\", \"reject-publish\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue transientQueue() {\r\n        return QueueBuilder.nonDurable(\"transient.queue\")\r\n            .exclusive()\r\n            .autoDelete()\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue dlqQueue() {\r\n        return QueueBuilder.durable(\"high.dlx.queue\")\r\n            .withArgument(\"x-message-ttl\", 86400000)\r\n            .build();\r\n    }\r\n}\n"
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
        children: "@Configuration\r\npublic class DeadLetterConfig {\r\n\r\n    @Bean\r\n    public DirectExchange deadLetterExchange() {\r\n        return new DirectExchange(\"dlx.direct\");\r\n    }\r\n\r\n    @Bean\r\n    public Queue deadLetterQueue() {\r\n        return QueueBuilder.durable(\"dlx.order.queue\")\r\n            .withArgument(\"x-message-ttl\", 3600000)\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Binding deadLetterBinding() {\r\n        return BindingBuilder.bind(deadLetterQueue())\r\n            .to(deadLetterExchange())\r\n            .with(\"order.dead\");\r\n    }\r\n\r\n    @Bean\r\n    public Queue orderQueue() {\r\n        return QueueBuilder.durable(\"order.retry.queue\")\r\n            .withArgument(\"x-dead-letter-exchange\", \"dlx.direct\")\r\n            .withArgument(\"x-dead-letter-routing-key\", \"order.dead\")\r\n            .withArgument(\"x-message-ttl\", 30000)\r\n            .build();\r\n    }\r\n}\n"
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
        children: "@Configuration\r\n@EnableRabbit\r\npublic class RabbitConfig {\r\n\r\n    @Bean\r\n    public ConnectionFactory connectionFactory() {\r\n        CachingConnectionFactory factory = new CachingConnectionFactory();\r\n        factory.setHost(\"localhost\");\r\n        factory.setPort(5672);\r\n        factory.setUsername(\"guest\");\r\n        factory.setPassword(\"guest\");\r\n        factory.setVirtualHost(\"/\");\r\n        factory.setChannelCacheSize(25);\r\n        factory.setConnectionTimeout(30000);\r\n        factory.setRequestedHeartBeat(30);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {\r\n        RabbitTemplate template = new RabbitTemplate(connectionFactory);\r\n        template.setMessageConverter(jsonMessageConverter());\r\n        template.setConfirmCallback(confirmCallback());\r\n        template.setReturnCallback(returnCallback());\r\n        template.setMandatory(true);\r\n        template.setChannelTransacted(true);\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public Jackson2JsonMessageConverter jsonMessageConverter() {\r\n        Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();\r\n        converter.setCreateMessageIds(true);\r\n        ObjectMapper mapper = new ObjectMapper();\r\n        mapper.registerModule(new JavaTimeModule());\r\n        mapper.disable(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS);\r\n        converter.setObjectMapper(mapper);\r\n        return converter;\r\n    }\r\n\r\n    @Bean\r\n    public RabbitAdmin rabbitAdmin(ConnectionFactory connectionFactory) {\r\n        RabbitAdmin admin = new RabbitAdmin(connectionFactory);\r\n        admin.setAutoStartup(true);\r\n        return admin;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "42-tls-connection-factory",
      children: "4.2 TLS Connection Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic ConnectionFactory tlsConnectionFactory() throws Exception {\r\n    CachingConnectionFactory factory = new CachingConnectionFactory();\r\n    factory.setHost(\"rabbitmq.example.com\");\r\n    factory.setPort(5671);\r\n\r\n    SslContextBuilder builder = SslContextBuilder.forClient();\r\n    builder.keyManager(\r\n        new File(\"client-cert.pem\"),\r\n        new File(\"client-key.pem\")\r\n    );\r\n    builder.trustManager(new File(\"ca-cert.pem\"));\r\n\r\n    SslContext sslContext = builder.build();\r\n    factory.getRabbitConnectionFactory().enableHostnameVerification();\r\n\r\n    NettyDataChannelFactory channelFactory = new NettyDataChannelFactory(\r\n        new NettyConnectionFactoryConfigurator(factory.getRabbitConnectionFactory()) {\r\n            @Override\r\n            public void configure(SslContextBuilder builder) {\r\n                builder.sslProvider(SslProvider.OPENSSL);\r\n            }\r\n        }.configure(sslContext)\r\n    );\r\n\r\n    return factory;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-rabbittemplate--sending-messages",
      children: "5. RabbitTemplate — Sending Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderMessageSender {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderMessageSender.class);\r\n    private final RabbitTemplate rabbitTemplate;\r\n\r\n    public OrderMessageSender(RabbitTemplate rabbitTemplate) {\r\n        this.rabbitTemplate = rabbitTemplate;\r\n    }\r\n\r\n    public void sendOrder(Order order) {\r\n        Message message = rabbitTemplate.getMessageConverter()\r\n            .toMessage(order, new MessageProperties());\r\n        rabbitTemplate.send(\"order.exchange\", \"payment\", message);\r\n        log.info(\"Sent order {} to exchange order.exchange\", order.getId());\r\n    }\r\n\r\n    public void sendOrderConverted(Order order) {\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order);\r\n    }\r\n\r\n    public void sendWithPriority(Order order, int priority) {\r\n        MessageProperties props = new MessageProperties();\r\n        props.setPriority(priority);\r\n        props.setExpiration(\"30000\");\r\n        props.setCorrelationId(order.getId().toString());\r\n        props.setHeader(\"source\", \"order-service\");\r\n        props.setDeliveryMode(MessageDeliveryMode.PERSISTENT);\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order, message -> {\r\n            message.getMessageProperties().setPriority(priority);\r\n            return message;\r\n        });\r\n    }\r\n\r\n    public Order receiveOrder() {\r\n        return (Order) rabbitTemplate.receiveAndConvert(\"order.payment.queue\");\r\n    }\r\n\r\n    public Order receiveOrderWithTimeout() {\r\n        return (Order) rabbitTemplate.receiveAndConvert(\r\n            \"order.payment.queue\", 5000);\r\n    }\r\n\r\n    public String sendAndReceive(Order order) {\r\n        return (String) rabbitTemplate.convertSendAndReceive(\r\n            \"order.exchange\", \"payment\", order);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "51-publisher-confirms",
      children: "5.1 Publisher Confirms"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class ReliablePublisher {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(ReliablePublisher.class);\r\n    private final RabbitTemplate rabbitTemplate;\r\n\r\n    public ReliablePublisher(RabbitTemplate rabbitTemplate) {\r\n        this.rabbitTemplate = rabbitTemplate;\r\n        this.rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {\r\n            if (ack) {\r\n                log.info(\"Message confirmed: {}\", correlationData != null ?\r\n                    correlationData.getId() : \"null\");\r\n            } else {\r\n                log.error(\"Message not confirmed: {} cause: {}\",\r\n                    correlationData != null ? correlationData.getId() : \"null\", cause);\r\n            }\r\n        });\r\n        this.rabbitTemplate.setReturnsCallback(returned -> {\r\n            log.warn(\"Message returned: replyCode={}, replyText={}, exchange={}, routingKey={}\",\r\n                returned.getReplyCode(), returned.getReplyText(),\r\n                returned.getExchange(), returned.getRoutingKey());\r\n        });\r\n        this.rabbitTemplate.setMandatory(true);\r\n    }\r\n\r\n    public void publishWithConfirms(Order order) {\r\n        CorrelationData correlationData = new CorrelationData(\r\n            UUID.randomUUID().toString());\r\n        correlationData.getFuture().addCallback(\r\n            result -> {\r\n                if (result.isAck()) {\r\n                    log.info(\"Order {} confirmed by broker\", order.getId());\r\n                } else {\r\n                    log.warn(\"Order {} nack'd by broker: {}\",\r\n                        order.getId(), result.getReason());\r\n                }\r\n            },\r\n            ex -> log.error(\"Confirm failed for order {}\", order.getId(), ex)\r\n        );\r\n        rabbitTemplate.convertAndSend(\r\n            \"order.exchange\", \"payment\", order, correlationData);\r\n    }\r\n\r\n    public void publishWithMandatoryFlag(Order order) {\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"invalid.key\", order);\r\n    }\r\n\r\n    public void publishBatch(List<Order> orders) {\r\n        List<CorrelationData> correlationDataList = new ArrayList<>();\r\n        for (Order order : orders) {\r\n            CorrelationData cd = new CorrelationData(order.getId().toString());\r\n            correlationDataList.add(cd);\r\n            rabbitTemplate.convertAndSend(\r\n                \"order.exchange\", \"payment\", order, cd);\r\n        }\r\n        for (CorrelationData cd : correlationDataList) {\r\n            try {\r\n                Confirm confirm = cd.getFuture().get(10, TimeUnit.SECONDS);\r\n                log.info(\"Batch confirm for {}: ack={}\",\r\n                    cd.getId(), confirm.isAck());\r\n            } catch (Exception e) {\r\n                log.error(\"Batch confirm timeout for {}\", cd.getId());\r\n            }\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "52-custom-message-converter",
      children: "5.2 Custom Message Converter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic MessageConverter customMessageConverter() {\r\n    Jackson2JsonMessageConverter converter = new Jackson2JsonMessageConverter();\r\n    converter.setCreateMessageIds(true);\r\n    converter.setAlwaysConvertToInferredType(true);\r\n    converter.setClassMapper(new ClassMapper() {\r\n        @Override\r\n        public void fromClass(Class<?> clazz, MessageProperties properties) {\r\n            properties.setHeader(\"__TypeId__\", clazz.getSimpleName());\r\n        }\r\n\r\n        @Override\r\n        public Class<?> toClass(MessageProperties properties) {\r\n            String typeId = properties.getHeader(\"__TypeId__\");\r\n            if (typeId == null) {\r\n                return Object.class;\r\n            }\r\n            return switch (typeId) {\r\n                case \"Order\" -> Order.class;\r\n                case \"PaymentEvent\" -> PaymentEvent.class;\r\n                case \"InventoryEvent\" -> InventoryEvent.class;\r\n                default -> Object.class;\r\n            };\r\n        }\r\n    });\r\n    return converter;\r\n}\r\n\r\n@Bean\r\npublic MessageConverter simpleConverter() {\r\n    SimpleMessageConverter converter = new SimpleMessageConverter();\r\n    converter.setAllowedListPatterns(List.of(\"com.example.*\"));\r\n    return converter;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-rabbitlistener--consuming-messages",
      children: "6. @RabbitListener — Consuming Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class OrderMessageConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderMessageConsumer.class);\r\n\r\n    @RabbitListener(\r\n        queues = \"order.payment.queue\",\r\n        concurrency = \"3-10\",\r\n        messageConverter = \"jsonMessageConverter\"\r\n    )\r\n    public void handlePaymentOrder(Order order, Channel channel, @Header(AmqpHeaders.DELIVERY_TAG) long tag) {\r\n        try {\r\n            log.info(\"Processing payment order: {} from {}\", order.getId(), order.getCustomerEmail());\r\n            processPayment(order);\r\n            channel.basicAck(tag, false);\r\n        } catch (Exception e) {\r\n            log.error(\"Failed to process order {}\", order.getId(), e);\r\n            channel.basicNack(tag, false, false);\r\n        }\r\n    }\r\n\r\n    @RabbitListener(\r\n        bindings = @QueueBinding(\r\n            value = @Queue(value = \"order.shipping.queue\", durable = \"true\"),\r\n            exchange = @Exchange(value = \"order.exchange\", type = ExchangeTypes.DIRECT),\r\n            key = \"shipping\"\r\n        ),\r\n        concurrency = \"5\"\r\n    )\r\n    public void handleShippingOrder(@Payload Order order,\r\n                                    @Headers Map<String, Object> headers) {\r\n        log.info(\"Processing shipping order: {}\", order.getId());\r\n        headers.forEach((key, value) ->\r\n            log.debug(\"Header: {} = {}\", key, value));\r\n    }\r\n\r\n    @RabbitListener(queues = \"order.audit.queue\")\r\n    public void handleAudit(Message message) {\r\n        log.info(\"Audit message received: body={}, headers={}\",\r\n            new String(message.getBody()), message.getMessageProperties().getHeaders());\r\n    }\r\n\r\n    @RabbitListener(\r\n        queues = \"order.error.queue\",\r\n        containerFactory = \"retryContainerFactory\"\r\n    )\r\n    public void handleRetryOrder(Order order) {\r\n        log.info(\"Processing retry order: {}\", order.getId());\r\n        processPayment(order);\r\n    }\r\n\r\n    private void processPayment(Order order) {\r\n        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\r\n            throw new IllegalArgumentException(\"Invalid order total\");\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "61-message-listener-adapter",
      children: "6.1 Message Listener Adapter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic SimpleRabbitListenerContainerFactory customContainerFactory(\r\n        ConnectionFactory connectionFactory) {\r\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n    factory.setConnectionFactory(connectionFactory);\r\n    factory.setConcurrentConsumers(5);\r\n    factory.setMaxConcurrentConsumers(15);\r\n    factory.setPrefetchCount(10);\r\n    factory.setBatchSize(5);\r\n    factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\r\n    factory.setDefaultRequeueRejected(false);\r\n    factory.setMissingQueuesFatal(false);\r\n    factory.setAdviceChain(new Advice[] {\r\n        new RetryOperationsInterceptor()\r\n    });\r\n    factory.setConsumerTagStrategy(queue -> \"consumer-\" + queue + \"-\" + UUID.randomUUID());\r\n    factory.setErrorHandler(new ConditionalRejectingErrorHandler());\r\n    return factory;\r\n}\r\n\r\n@Bean\r\npublic SimpleRabbitListenerContainerFactory retryContainerFactory(\r\n        ConnectionFactory connectionFactory) {\r\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n    factory.setConnectionFactory(connectionFactory);\r\n    factory.setConcurrentConsumers(2);\r\n    factory.setMaxConcurrentConsumers(4);\r\n    factory.setPrefetchCount(5);\r\n    factory.setAcknowledgeMode(AcknowledgeMode.AUTO);\r\n    factory.setDefaultRequeueRejected(true);\r\n    return factory;\r\n}\n"
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
        children: "@Configuration\r\npublic class RetryConfig {\r\n\r\n    @Bean\r\n    public RetryTemplate retryTemplate() {\r\n        RetryTemplate template = new RetryTemplate();\r\n\r\n        ExponentialBackOffPolicy backOff = new ExponentialBackOffPolicy();\r\n        backOff.setInitialInterval(1000);\r\n        backOff.setMultiplier(2.0);\r\n        backOff.setMaxInterval(30000);\r\n        template.setBackOffPolicy(backOff);\r\n\r\n        SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();\r\n        retryPolicy.setMaxAttempts(3);\r\n        template.setRetryPolicy(retryPolicy);\r\n\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public RetryOperationsInterceptor retryInterceptor(RetryTemplate retryTemplate) {\r\n        return RetryInterceptorBuilder.stateless()\r\n            .retryOperations(retryTemplate)\r\n            .recoverer(rejectAndDontRequeueRecoverer())\r\n            .build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "72-message-recoverers",
      children: "7.2 Message Recoverers"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class MessageRecovererConfig {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(MessageRecovererConfig.class);\r\n    private final RabbitTemplate rabbitTemplate;\r\n\r\n    public MessageRecovererConfig(RabbitTemplate rabbitTemplate) {\r\n        this.rabbitTemplate = rabbitTemplate;\r\n    }\r\n\r\n    @Bean\r\n    public MessageRecoverer rejectAndDontRequeueRecoverer() {\r\n        return new RejectAndDontRequeueRecoverer();\r\n    }\r\n\r\n    @Bean\r\n    public MessageRecoverer immediateRequeueRecoverer() {\r\n        return new ImmediateRequeueMessageRecoverer();\r\n    }\r\n\r\n    @Bean\r\n    public MessageRecoverer republishMessageRecoverer() {\r\n        RepublishMessageRecoverer recoverer = new RepublishMessageRecoverer(\r\n            rabbitTemplate, \"order.retry.exchange\");\r\n        recoverer.setErrorRoutingKey(\"order.retry\");\r\n        return recoverer;\r\n    }\r\n\r\n    @Bean\r\n    public MessageRecoverer customRecoverer() {\r\n        return new MessageRecoverer() {\r\n            @Override\r\n            public void recover(Message message, Throwable cause) {\r\n                log.error(\"All retries exhausted for message: {}\",\r\n                    new String(message.getBody()), cause);\r\n\r\n                MessageProperties props = message.getMessageProperties();\r\n                props.setHeader(\"x-exception-message\", cause.getMessage());\r\n                props.setHeader(\"x-exception-stacktrace\",\r\n                    ExceptionUtils.getStackTrace(cause));\r\n                props.setHeader(\"x-retry-count\",\r\n                    props.getHeader(\"x-retry-count\") != null ?\r\n                    (int) props.getHeader(\"x-retry-count\") + 1 : 1);\r\n                props.setDelay(60000);\r\n\r\n                rabbitTemplate.convertAndSend(\r\n                    \"order.dlx.exchange\", \"order.dead\", message,\r\n                    m -> {\r\n                        m.getMessageProperties().setDelay(60000);\r\n                        return m;\r\n                    }\r\n                );\r\n            }\r\n        };\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "73-per-listener-retry-configuration",
      children: "7.3 Per-Listener Retry Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class ListenerRetryConfig {\r\n\r\n    @Bean\r\n    public SimpleRabbitListenerContainerFactory retryContainerFactory(\r\n            ConnectionFactory connectionFactory, RetryTemplate retryTemplate) {\r\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n        factory.setConnectionFactory(connectionFactory);\r\n        factory.setConcurrentConsumers(3);\r\n        factory.setMaxConcurrentConsumers(6);\r\n        factory.setPrefetchCount(5);\r\n        factory.setAdviceChain(new Advice[] {\r\n            RetryInterceptorBuilder.stateless()\r\n                .retryOperations(retryTemplate)\r\n                .backOffOptions(2000, 3, 30000)\r\n                .recoverer(new RepublishMessageRecoverer(\r\n                    rabbitTemplate(connectionFactory),\r\n                    \"order.retry.exchange\", \"order.retry\"))\r\n                .build()\r\n        });\r\n        return factory;\r\n    }\r\n\r\n    private RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {\r\n        RabbitTemplate template = new RabbitTemplate(connectionFactory);\r\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\r\n        return template;\r\n    }\r\n}\n"
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
        children: "@Configuration\r\npublic class BatchConfig {\r\n\r\n    @Bean\r\n    public BatchingRabbitTemplate batchingRabbitTemplate(\r\n            ConnectionFactory connectionFactory) {\r\n        BatchingStrategy strategy = new SimpleBatchingStrategy(\r\n            50,                    // batch size\r\n            10000,                 // batch limit (bytes)\r\n            3000                   // timeout (ms)\r\n        );\r\n        BatchingRabbitTemplate template = new BatchingRabbitTemplate(\r\n            connectionFactory, strategy);\r\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\r\n        return template;\r\n    }\r\n}\r\n\r\n@Service\r\npublic class BatchPublisher {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(BatchPublisher.class);\r\n    private final BatchingRabbitTemplate batchingRabbitTemplate;\r\n\r\n    public BatchPublisher(BatchingRabbitTemplate batchingRabbitTemplate) {\r\n        this.batchingRabbitTemplate = batchingRabbitTemplate;\r\n    }\r\n\r\n    public void publishMetrics(List<MetricEvent> events) {\r\n        for (MetricEvent event : events) {\r\n            batchingRabbitTemplate.convertAndSend(\r\n                \"metrics.exchange\", \"metrics.batch\", event);\r\n        }\r\n        log.info(\"Queued {} metrics for batch publishing\", events.size());\r\n    }\r\n}\r\n\r\n@Component\r\npublic class BatchConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(BatchConsumer.class);\r\n\r\n    @RabbitListener(queues = \"metrics.queue\", containerFactory = \"batchContainerFactory\")\r\n    public void handleBatch(List<MetricEvent> events) {\r\n        log.info(\"Received batch of {} metrics\", events.size());\r\n        for (MetricEvent event : events) {\r\n            log.debug(\"Metric: {} = {} at {}\",\r\n                event.getName(), event.getValue(), event.getTimestamp());\r\n        }\r\n    }\r\n}\r\n\r\n@Bean\r\npublic SimpleRabbitListenerContainerFactory batchContainerFactory(\r\n        ConnectionFactory connectionFactory) {\r\n    SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n    factory.setConnectionFactory(connectionFactory);\r\n    factory.setBatchListener(true);\r\n    factory.setConsumerBatchEnabled(true);\r\n    factory.setBatchSize(50);\r\n    factory.setReceiveTimeout(3000L);\r\n    return factory;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-multiple-virtual-hosts",
      children: "9. Multiple Virtual Hosts"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class MultiVhostConfig {\r\n\r\n    @Bean\r\n    public ConnectionFactory primaryConnectionFactory() {\r\n        CachingConnectionFactory factory = new CachingConnectionFactory();\r\n        factory.setHost(\"localhost\");\r\n        factory.setPort(5672);\r\n        factory.setUsername(\"admin\");\r\n        factory.setPassword(\"admin\");\r\n        factory.setVirtualHost(\"/primary\");\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConnectionFactory secondaryConnectionFactory() {\r\n        CachingConnectionFactory factory = new CachingConnectionFactory();\r\n        factory.setHost(\"localhost\");\r\n        factory.setPort(5672);\r\n        factory.setUsername(\"admin\");\r\n        factory.setPassword(\"admin\");\r\n        factory.setVirtualHost(\"/secondary\");\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public RabbitTemplate primaryTemplate(\r\n            @Qualifier(\"primaryConnectionFactory\") ConnectionFactory cf) {\r\n        RabbitTemplate template = new RabbitTemplate(cf);\r\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public RabbitTemplate secondaryTemplate(\r\n            @Qualifier(\"secondaryConnectionFactory\") ConnectionFactory cf) {\r\n        RabbitTemplate template = new RabbitTemplate(cf);\r\n        template.setMessageConverter(new Jackson2JsonMessageConverter());\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public SimpleRabbitListenerContainerFactory primaryListenerFactory(\r\n            @Qualifier(\"primaryConnectionFactory\") ConnectionFactory cf) {\r\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n        factory.setConnectionFactory(cf);\r\n        factory.setConcurrentConsumers(5);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public SimpleRabbitListenerContainerFactory secondaryListenerFactory(\r\n            @Qualifier(\"secondaryConnectionFactory\") ConnectionFactory cf) {\r\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n        factory.setConnectionFactory(cf);\r\n        factory.setConcurrentConsumers(3);\r\n        return factory;\r\n    }\r\n}\r\n\r\n@Component\r\npublic class VhostAwareConsumer {\r\n\r\n    @RabbitListener(\r\n        queues = \"primary.queue\",\r\n        containerFactory = \"primaryListenerFactory\"\r\n    )\r\n    public void handlePrimary(Order order) {\r\n        System.out.println(\"Primary: \" + order);\r\n    }\r\n\r\n    @RabbitListener(\r\n        queues = \"secondary.queue\",\r\n        containerFactory = \"secondaryListenerFactory\"\r\n    )\r\n    public void handleSecondary(Order order) {\r\n        System.out.println(\"Secondary: \" + order);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-rabbitadmin--programmatic-management",
      children: "10. RabbitAdmin — Programmatic Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class RabbitAdminService {\r\n\r\n    private final RabbitAdmin admin;\r\n\r\n    public RabbitAdminService(RabbitAdmin admin) {\r\n        this.admin = admin;\r\n    }\r\n\r\n    public void declareInfrastructure(String tenantId) {\r\n        Queue queue = QueueBuilder.durable(\"tenant.\" + tenantId + \".queue\")\r\n            .withArgument(\"x-message-ttl\", 60000)\r\n            .build();\r\n        admin.declareQueue(queue);\r\n\r\n        DirectExchange exchange = new DirectExchange(\"tenant.\" + tenantId + \".exchange\");\r\n        admin.declareExchange(exchange);\r\n\r\n        Binding binding = BindingBuilder.bind(queue)\r\n            .to(exchange)\r\n            .with(\"tenant.\" + tenantId);\r\n        admin.declareBinding(binding);\r\n\r\n        // Dead letter setup\r\n        Queue dlq = QueueBuilder.durable(\"tenant.\" + tenantId + \".dlq\").build();\r\n        admin.declareQueue(dlq);\r\n\r\n        DirectExchange dlx = new DirectExchange(\"tenant.\" + tenantId + \".dlx\");\r\n        admin.declareExchange(dlx);\r\n\r\n        Binding dlqBinding = BindingBuilder.bind(dlq)\r\n            .to(dlx)\r\n            .with(\"tenant.\" + tenantId + \".dead\");\r\n        admin.declareBinding(dlqBinding);\r\n    }\r\n\r\n    public void deleteQueue(String queueName) {\r\n        boolean deleted = admin.deleteQueue(queueName);\r\n        if (deleted) {\r\n            System.out.println(\"Deleted queue: \" + queueName);\r\n        }\r\n    }\r\n\r\n    public void purgeQueue(String queueName) {\r\n        int purged = admin.purgeQueue(queueName, false);\r\n        System.out.println(\"Purged \" + purged + \" messages from \" + queueName);\r\n    }\r\n\r\n    public Properties getQueueProperties(String queueName) {\r\n        Properties props = admin.getQueueProperties(queueName);\r\n        if (props != null) {\r\n            System.out.println(\"Message count: \" + props.get(RabbitAdmin.QUEUE_MESSAGE_COUNT));\r\n            System.out.println(\"Consumer count: \" + props.get(RabbitAdmin.QUEUE_CONSUMER_COUNT));\r\n        }\r\n        return props;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-complete-order-processing-example",
      children: "11. Complete Order Processing Example"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootApplication\r\n@EnableRabbit\r\npublic class RabbitOrderApplication {\r\n\r\n    public static void main(String[] args) {\r\n        SpringApplication.run(RabbitOrderApplication.class, args);\r\n    }\r\n}\r\n\r\n@Configuration\r\npublic class OrderMessagingConfig {\r\n\r\n    @Bean\r\n    public DirectExchange orderExchange() {\r\n        return new DirectExchange(\"order.exchange\");\r\n    }\r\n\r\n    @Bean\r\n    public DirectExchange orderDeadLetterExchange() {\r\n        return new DirectExchange(\"order.dlx\");\r\n    }\r\n\r\n    @Bean\r\n    public Queue paymentQueue() {\r\n        return QueueBuilder.durable(\"order.payment.queue\")\r\n            .withArgument(\"x-dead-letter-exchange\", \"order.dlx\")\r\n            .withArgument(\"x-dead-letter-routing-key\", \"payment.dead\")\r\n            .withArgument(\"x-message-ttl\", 30000)\r\n            .withArgument(\"x-max-length\", 500)\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue shippingQueue() {\r\n        return QueueBuilder.durable(\"order.shipping.queue\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue notificationQueue() {\r\n        return QueueBuilder.durable(\"order.notification.queue\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Queue deadLetterQueue() {\r\n        return QueueBuilder.durable(\"order.dlq\")\r\n            .withArgument(\"x-message-ttl\", 86400000)\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public Binding paymentBinding() {\r\n        return BindingBuilder.bind(paymentQueue())\r\n            .to(orderExchange()).with(\"payment\");\r\n    }\r\n\r\n    @Bean\r\n    public Binding shippingBinding() {\r\n        return BindingBuilder.bind(shippingQueue())\r\n            .to(orderExchange()).with(\"shipping\");\r\n    }\r\n\r\n    @Bean\r\n    public Binding notificationBinding() {\r\n        return BindingBuilder.bind(notificationQueue())\r\n            .to(orderExchange()).with(\"notification\");\r\n    }\r\n\r\n    @Bean\r\n    public Binding deadLetterBinding() {\r\n        return BindingBuilder.bind(deadLetterQueue())\r\n            .to(orderDeadLetterExchange()).with(\"payment.dead\");\r\n    }\r\n}\r\n\r\n@Service\r\npublic class OrderCommandService {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderCommandService.class);\r\n    private final RabbitTemplate rabbitTemplate;\r\n\r\n    public OrderCommandService(RabbitTemplate rabbitTemplate) {\r\n        this.rabbitTemplate = rabbitTemplate;\r\n    }\r\n\r\n    public void placeOrder(Order order) {\r\n        log.info(\"Placing order: {}\", order.getId());\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"payment\", order);\r\n    }\r\n\r\n    public void shipOrder(Long orderId) {\r\n        ShipmentEvent event = new ShipmentEvent(orderId, Instant.now());\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"shipping\", event);\r\n    }\r\n}\r\n\r\n@Component\r\npublic class PaymentConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(PaymentConsumer.class);\r\n    private final RabbitTemplate rabbitTemplate;\r\n\r\n    public PaymentConsumer(RabbitTemplate rabbitTemplate) {\r\n        this.rabbitTemplate = rabbitTemplate;\r\n    }\r\n\r\n    @RabbitListener(queues = \"order.payment.queue\", concurrency = \"5\")\r\n    public void processPayment(Order order) {\r\n        log.info(\"Processing payment for order {}: {}\", order.getId(), order.getTotal());\r\n        if (order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\r\n            throw new IllegalArgumentException(\"Invalid total for order \" + order.getId());\r\n        }\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"notification\",\r\n            new NotificationEvent(order.getCustomerEmail(), \"Payment received\"));\r\n        rabbitTemplate.convertAndSend(\"order.exchange\", \"shipping\", order);\r\n    }\r\n}\r\n\r\n@Component\r\npublic class ShippingConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(ShippingConsumer.class);\r\n\r\n    @RabbitListener(queues = \"order.shipping.queue\")\r\n    public void processShipping(Order order) {\r\n        log.info(\"Arranging shipping for order {} to {}\", order.getId(), order.getShippingAddress());\r\n    }\r\n\r\n    @RabbitListener(queues = \"order.shipping.queue\")\r\n    public void processShipmentEvent(ShipmentEvent event) {\r\n        log.info(\"Processing shipment event for order {}\", event.getOrderId());\r\n    }\r\n}\r\n\r\n@Component\r\npublic class NotificationConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(NotificationConsumer.class);\r\n\r\n    @RabbitListener(queues = \"order.notification.queue\")\r\n    public void sendNotification(NotificationEvent event) {\r\n        log.info(\"Sending notification to {}: {}\", event.getEmail(), event.getMessage());\r\n    }\r\n}\r\n\r\n@Component\r\npublic class DeadLetterConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(DeadLetterConsumer.class);\r\n\r\n    @RabbitListener(queues = \"order.dlq\")\r\n    public void handleDeadLetter(Order order) {\r\n        log.error(\"Dead letter received for order {}: {}\", order.getId(), order.getTotal());\r\n        // Alert operations team\r\n    }\r\n}\r\n\r\n@Component\r\npublic class RejectingErrorHandler extends ConditionalRejectingErrorHandler {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(RejectingErrorHandler.class);\r\n\r\n    @Override\r\n    public void handleError(Throwable t) {\r\n        log.error(\"RabbitMQ listener error\", t);\r\n        super.handleError(t);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-container-customization",
      children: "12. Container Customization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class ContainerCustomizerConfig {\r\n\r\n    @Bean\r\n    public SimpleRabbitListenerContainerFactory customContainerFactory(\r\n            ConnectionFactory connectionFactory) {\r\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n        factory.setConnectionFactory(connectionFactory);\r\n        factory.setConcurrentConsumers(4);\r\n        factory.setMaxConcurrentConsumers(12);\r\n        factory.setPrefetchCount(8);\r\n        factory.setBatchSize(3);\r\n        factory.setConsumerBatchEnabled(true);\r\n        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\r\n        factory.setDefaultRequeueRejected(false);\r\n        factory.setMissingQueuesFatal(false);\r\n        factory.setAutoStartup(true);\r\n        factory.setAdviceChain(new Advice[] {\r\n            new RetryOperationsInterceptor()\r\n        });\r\n        factory.setErrorHandler(new ConditionalRejectingErrorHandler());\r\n        factory.setConsumerTagStrategy(q -> \"myapp-\" + q);\r\n        factory.setExclusive(false);\r\n        factory.setAfterReceivePostProcessors(message -> {\r\n            message.getMessageProperties().setHeader(\"x-received-at\",\r\n                Instant.now().toString());\r\n            return message;\r\n        });\r\n        factory.setApplicationContext(new AnnotationConfigApplicationContext());\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public SimpleRabbitListenerContainerFactory exclusiveContainerFactory(\r\n            ConnectionFactory connectionFactory) {\r\n        SimpleRabbitListenerContainerFactory factory = new SimpleRabbitListenerContainerFactory();\r\n        factory.setConnectionFactory(connectionFactory);\r\n        factory.setConcurrentConsumers(1);\r\n        factory.setPrefetchCount(1);\r\n        factory.setExclusive(true);\r\n        factory.setAcknowledgeMode(AcknowledgeMode.MANUAL);\r\n        return factory;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-custom-connection-factory-with-multiple-channels",
      children: "13. Custom Connection Factory with Multiple Channels"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Bean\r\npublic CachingConnectionFactory multiChannelFactory() {\r\n    CachingConnectionFactory factory = new CachingConnectionFactory();\r\n    factory.setHost(\"rabbitmq.internal\");\r\n    factory.setPort(5672);\r\n    factory.setUsername(\"app-user\");\r\n    factory.setPassword(\"app-pass\");\r\n    factory.setVirtualHost(\"/app\");\r\n    factory.setChannelCacheSize(50);\r\n    factory.setChannelCheckoutTimeout(5000);\r\n    factory.setConnectionTimeout(30000);\r\n    factory.setRequestedHeartBeat(60);\r\n    factory.setPublisherConfirmType(CachingConnectionFactory.ConfirmType.CORRELATED);\r\n    factory.setPublisherReturns(true);\r\n    factory.setShutdownTimeout(30000);\r\n\r\n    // Configure connection listeners\r\n    factory.addConnectionListener(new ConnectionListener() {\r\n        @Override\r\n        public void onCreate(Connection connection) {\r\n            log.info(\"RabbitMQ connection created: {}\", connection);\r\n        }\r\n\r\n        @Override\r\n        public void onClose(Connection connection) {\r\n            log.warn(\"RabbitMQ connection closed: {}\", connection);\r\n        }\r\n\r\n        @Override\r\n        public void onShutDown(ShutdownSignalException signal) {\r\n            log.error(\"RabbitMQ connection shutdown: {}\", signal.getMessage());\r\n        }\r\n    });\r\n\r\n    return factory;\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-full-application-properties",
      children: "14. Full Application Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\r\n  rabbitmq:\r\n    host: localhost\r\n    port: 5672\r\n    username: guest\r\n    password: guest\r\n    virtual-host: /\r\n    connection-timeout: 30s\r\n    requested-heartbeat: 30s\r\n    listener:\r\n      simple:\r\n        concurrency: 5\r\n        max-concurrency: 15\r\n        prefetch: 10\r\n        acknowledge-mode: manual\r\n        default-requeue-rejected: false\r\n        retry:\r\n          enabled: true\r\n          initial-interval: 2s\r\n          multiplier: 2.0\r\n          max-attempts: 5\r\n          max-interval: 30s\r\n          stateless: true\r\n    template:\r\n      retry:\r\n        enabled: true\r\n        initial-interval: 1s\r\n        multiplier: 2.0\r\n        max-attempts: 3\r\n      mandatory: true\r\n    publisher-confirm-type: correlated\r\n    publisher-returns: true\r\n    cache:\r\n      channel:\r\n        size: 50\r\n        checkout-timeout: 5s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-testing-rabbitmq",
      children: "15. Testing RabbitMQ"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\n@EnableRabbit\r\nclass RabbitTemplateTest {\r\n\r\n    @Autowired\r\n    private RabbitTemplate rabbitTemplate;\r\n\r\n    @Autowired\r\n    private RabbitAdmin rabbitAdmin;\r\n\r\n    @BeforeEach\r\n    void setUp() {\r\n        Queue testQueue = QueueBuilder.durable(\"test.queue\").build();\r\n        DirectExchange testExchange = new DirectExchange(\"test.exchange\");\r\n        rabbitAdmin.declareQueue(testQueue);\r\n        rabbitAdmin.declareExchange(testExchange);\r\n        rabbitAdmin.declareBinding(\r\n            BindingBuilder.bind(testQueue).to(testExchange).with(\"test\"));\r\n    }\r\n\r\n    @AfterEach\r\n    void tearDown() {\r\n        rabbitAdmin.deleteQueue(\"test.queue\");\r\n        rabbitAdmin.deleteExchange(\"test.exchange\");\r\n    }\r\n\r\n    @Test\r\n    void testSendAndReceive() {\r\n        Order order = new Order(1L, \"test@test.com\", BigDecimal.valueOf(100));\r\n        rabbitTemplate.convertAndSend(\"test.exchange\", \"test\", order);\r\n\r\n        Order received = (Order) rabbitTemplate.receiveAndConvert(\"test.queue\", 3000);\r\n        assertThat(received.getId()).isEqualTo(order.getId());\r\n        assertThat(received.getCustomerEmail()).isEqualTo(order.getCustomerEmail());\r\n    }\r\n\r\n    @Test\r\n    void testConvertSendAndReceive() {\r\n        Order order = new Order(2L, \"reply@test.com\", BigDecimal.valueOf(200));\r\n        rabbitTemplate.convertSendAndReceive(\"test.exchange\", \"test\", order);\r\n    }\r\n}\r\n\r\n@SpringBootTest\r\n@EnableRabbit\r\nclass RabbitListenerTest {\r\n\r\n    @Autowired\r\n    private RabbitTemplate rabbitTemplate;\r\n\r\n    @Test\r\n    void testListenerReceivesMessage() {\r\n        Order order = new Order(3L, \"listener@test.com\", BigDecimal.valueOf(300));\r\n        rabbitTemplate.convertAndSend(\"test.exchange\", \"test\", order);\r\n        // Verify side effects (log output, database state, etc.)\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nAlways use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CorrelationId"
        }), " message property for end-to-end tracing → it helps track messages across producer, broker, and consumer."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\r\nIdempotent consumers are essential → messages can be redelivered after consumer failure or connection loss."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\r\nConfigure a DLQ with a TTL-based retry queue for handling transient failures → the message returns to the original queue after TTL expires."
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