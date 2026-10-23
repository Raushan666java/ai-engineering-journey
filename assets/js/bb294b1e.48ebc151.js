"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1968],{

/***/ 7562
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_36_kafka_md_bb2_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-36-kafka-md-bb2.json
const site_docs_courses_java_36_kafka_md_bb2_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/36-kafka","title":"Apache Kafka","description":"Previous Event-Driven Architecture and Saga Pattern","source":"@site/docs/courses/java/36-kafka.md","sourceDirName":"courses/java","slug":"/java/36-kafka","permalink":"/ai-engineering-journey/java/36-kafka","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":36,"frontMatter":{"id":"36-kafka","slug":"/java/36-kafka","title":"Apache Kafka","sidebar_label":"Apache Kafka","sidebar_position":36},"sidebar":"course-java","previous":{"title":"RabbitMQ","permalink":"/ai-engineering-journey/java/35-rabbitmq"},"next":{"title":"Event-Driven Architecture & SAGA","permalink":"/ai-engineering-journey/java/37-event-driven-saga"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/36-kafka.md


const frontMatter = {
	id: '36-kafka',
	slug: '/java/36-kafka',
	title: 'Apache Kafka',
	sidebar_label: 'Apache Kafka',
	sidebar_position: 36
};
const contentTitle = 'Apache Kafka';

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
  "value": "1. Kafka Core Concepts",
  "id": "1-kafka-core-concepts",
  "level": 3
}, {
  "value": "2. Topic Configuration",
  "id": "2-topic-configuration",
  "level": 3
}, {
  "value": "3. Producer Configuration",
  "id": "3-producer-configuration",
  "level": 3
}, {
  "value": "4. KafkaTemplate — Producing Messages",
  "id": "4-kafkatemplate--producing-messages",
  "level": 3
}, {
  "value": "5. Custom Partitioner",
  "id": "5-custom-partitioner",
  "level": 3
}, {
  "value": "6. Consumer Configuration",
  "id": "6-consumer-configuration",
  "level": 3
}, {
  "value": "7. @KafkaListener — Consuming Messages",
  "id": "7-kafkalistener--consuming-messages",
  "level": 3
}, {
  "value": "8. AckMode Strategies",
  "id": "8-ackmode-strategies",
  "level": 3
}, {
  "value": "9. Seek Operations",
  "id": "9-seek-operations",
  "level": 3
}, {
  "value": "10. Error Handling",
  "id": "10-error-handling",
  "level": 3
}, {
  "value": "10.1 @RetryableTopic",
  "id": "101-retryabletopic",
  "level": 4
}, {
  "value": "10.2 Custom Error Handler",
  "id": "102-custom-error-handler",
  "level": 4
}, {
  "value": "11. Exactly-Once Semantics",
  "id": "11-exactly-once-semantics",
  "level": 3
}, {
  "value": "12. Schema Registry Integration",
  "id": "12-schema-registry-integration",
  "level": 3
}, {
  "value": "12.1 Avro with Confluent Schema Registry",
  "id": "121-avro-with-confluent-schema-registry",
  "level": 4
}, {
  "value": "12.2 Protobuf with Kafka",
  "id": "122-protobuf-with-kafka",
  "level": 4
}, {
  "value": "12.3 JSON Schema with Schema Registry",
  "id": "123-json-schema-with-schema-registry",
  "level": 4
}, {
  "value": "13. Kafka Streams (KStreams)",
  "id": "13-kafka-streams-kstreams",
  "level": 3
}, {
  "value": "13.1 Aggregations",
  "id": "131-aggregations",
  "level": 4
}, {
  "value": "13.2 Window Operations",
  "id": "132-window-operations",
  "level": 4
}, {
  "value": "14. KTable and GlobalKTable",
  "id": "14-ktable-and-globalktable",
  "level": 3
}, {
  "value": "15. State Stores",
  "id": "15-state-stores",
  "level": 3
}, {
  "value": "16. Full Application Properties",
  "id": "16-full-application-properties",
  "level": 3
}, {
  "value": "17. Testing Kafka",
  "id": "17-testing-kafka",
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
  "value": "Exercise 1: Topic Configuration",
  "id": "exercise-1-topic-configuration",
  "level": 3
}, {
  "value": "Exercise 2: KafkaTemplate with Callback",
  "id": "exercise-2-kafkatemplate-with-callback",
  "level": 3
}, {
  "value": "Exercise 3: @KafkaListener with Manual Ack",
  "id": "exercise-3-kafkalistener-with-manual-ack",
  "level": 3
}, {
  "value": "Exercise 4: Batch Consumer",
  "id": "exercise-4-batch-consumer",
  "level": 3
}, {
  "value": "Exercise 5: Custom Partitioner",
  "id": "exercise-5-custom-partitioner",
  "level": 3
}, {
  "value": "Exercise 6: Error Handler with DLT",
  "id": "exercise-6-error-handler-with-dlt",
  "level": 3
}, {
  "value": "Exercise 7: @RetryableTopic",
  "id": "exercise-7-retryabletopic",
  "level": 3
}, {
  "value": "Exercise 8: Transactional Producer",
  "id": "exercise-8-transactional-producer",
  "level": 3
}, {
  "value": "Exercise 9: KStream Aggregation",
  "id": "exercise-9-kstream-aggregation",
  "level": 3
}, {
  "value": "Exercise 10: KStream-KTable Join",
  "id": "exercise-10-kstream-ktable-join",
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
        id: "apache-kafka",
        children: "Apache Kafka"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/35-rabbitmq",
          children: "RabbitMQ"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/37-event-driven-saga",
          children: "Event-Driven Architecture and Saga Pattern"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand Kafka's core architecture: topics, partitions, offsets, brokers, producers, consumers, consumer groups, replication, and the KRaft consensus model"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure topics with replication factor, min.insync.replicas, cleanup policy, and retention settings"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Produce messages using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KafkaTemplate"
        }), " with callbacks, custom partitioners, keys, and headers"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consume messages using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@KafkaListener"
        }), " with batch listening, manual offset commits, and various ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AckMode"
        }), " strategies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Handle consumer errors with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DefaultErrorHandler"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DeadLetterPublishingRecoverer"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RetryableTopic"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement exactly-once semantics with idempotent producers and transactional producers/consumers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Schema Registry with Avro, Protobuf, and JSON Schema serialization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build stream processing applications with Kafka Streams including KStream, KTable, aggregations, joins, and window operations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement seek operations and custom error handlers for production resilience"
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
            children: "Kafka → distributed event streaming platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Topics, partitions, and consumer groups for horizontal scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Producers → publish records with keys, headers, and acks"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "KafkaTemplate.send()"
            }), " with partitioning strategies"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: ["Consumers → subscribe with ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@KafkaListener"
            }), " and consumer groups"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Offset management, rebalancing, and exactly-once semantics"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Kafka] --> B[Core Concepts]\r\n    A --> C[Producers]\r\n    A --> D[Consumers]\r\n    A --> E[Spring Integration]\r\n    B --> B1[Topic / Partition / Offset]\r\n    B --> B2[Broker / Cluster / Zookeeper]\r\n    C --> C1[KafkaTemplate]\r\n    C --> C2[Acks / Retries]\r\n    D --> D1[\"@KafkaListener\"]\r\n    D --> D2[Consumer Group / Rebalancing]\r\n    E --> E1[KafkaTransactionManager]\r\n    E --> E2[Exactly-once semantics]"
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
            children: "Kafka"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pull-based, persistent log"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for event sourcing, stream processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "RabbitMQ"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Push-based, smart broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Best for task distribution, RPC-style messaging"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "At-least-once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message may be delivered more than once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Default producer guarantee"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Exactly-once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Message delivered exactly once"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires idempotence + transactional producer"
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
              children: "KafkaTemplate.send(topic, key, value)"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Sends a record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "kafkaTemplate.send(\"orders\", orderId, orderJson)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@KafkaListener(topics = \"orders\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Consumes records"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@KafkaListener(topics = \"orders\", groupId = \"order-group\")"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@KafkaHandler"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Method-level handler in class-level ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@KafkaListener"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dispatches by payload type"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "KafkaTransactionManager"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transactional producer"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Binds producer to Spring ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@Transactional"
            })]
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
            children: "Event Sourcing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka as event store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order events persist in append-only log"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Stream Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka Streams / KSQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time aggregations and joins"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Log Aggregation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Kafka Connect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Collect and centralize microservice logs"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the smallest unit of parallelism in Kafka? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Partition → each partition is consumed by one consumer in a group"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation subscribes a method to Kafka messages? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@KafkaListener"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What configuration enables exactly-once semantics for a Kafka producer? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable.idempotence=true"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "acks=all"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/36-kafka.png",
        alt: "Apache Kafka Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "1-kafka-core-concepts",
      children: "1. Kafka Core Concepts"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Kafka is a distributed event streaming platform. Unlike RabbitMQ (a message broker), Kafka is an append-only log that stores events durably and allows replay."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key abstractions:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              children: "Topic"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A named category/feed for messages. Like a table in a database."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Partition"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "An ordered, immutable sequence of messages. Topics are split into partitions for parallelism."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Offset"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A sequential ID for each message within a partition. The consumer tracks its position via offset."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Broker"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A Kafka server node. A cluster has multiple brokers for fault tolerance."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Producer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A client that publishes messages to a topic partition."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A client that reads messages from a topic partition at a tracked offset."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Consumer Group"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A set of consumers that coordinate to consume partitions. Each partition is assigned to exactly one consumer in a group."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Replication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partitions are replicated across brokers. The leader handles reads/writes; followers replicate."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Log Segment"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "The physical storage unit. Topics are split into segments on disk."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Architecture evolution — ZooKeeper vs KRaft:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "ZooKeeper-based (legacy)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "KRaft (Kafka 3.x+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Metadata store"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Separate ZooKeeper quorum"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Kafka itself (internal topic ", (0,jsx_runtime.jsx)(_components.code, {
              children: "__cluster_metadata"
            }), ")"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Controller"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Elected via ZooKeeper"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Raft-based quorum inside the cluster"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Number of services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2 (Kafka + ZooKeeper)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "1 (Kafka)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Operational complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Boot with Kafka typically uses the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "spring-kafka"
      }), " library:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\r\n    <groupId>org.springframework.kafka</groupId>\r\n    <artifactId>spring-kafka</artifactId>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "2-topic-configuration",
      children: "2. Topic Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Topics can be created programmatically or through auto-creation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class KafkaTopicConfig {\r\n\r\n    @Bean\r\n    public NewTopic ordersTopic() {\r\n        return TopicBuilder.name(\"orders\")\r\n            .partitions(6)\r\n            .replicas(3)\r\n            .config(TopicConfig.MIN_IN_SYNC_REPLICAS_CONFIG, \"2\")\r\n            .config(TopicConfig.CLEANUP_POLICY_CONFIG, TopicConfig.CLEANUP_POLICY_DELETE)\r\n            .config(TopicConfig.RETENTION_MS_CONFIG, \"604800000\")\r\n            .config(TopicConfig.RETENTION_BYTES_CONFIG, \"1073741824\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic paymentsTopic() {\r\n        return TopicBuilder.name(\"payments\")\r\n            .partitions(10)\r\n            .replicas(3)\r\n            .config(TopicConfig.MIN_IN_SYNC_REPLICAS_CONFIG, \"2\")\r\n            .config(TopicConfig.CLEANUP_POLICY_CONFIG, TopicConfig.CLEANUP_POLICY_COMPACT)\r\n            .config(TopicConfig.DELETE_RETENTION_MS_CONFIG, \"86400000\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic eventsTopic() {\r\n        return TopicBuilder.name(\"events\")\r\n            .partitions(3)\r\n            .replicas(1)\r\n            .config(TopicConfig.RETENTION_MS_CONFIG, \"3600000\")\r\n            .config(TopicConfig.SEGMENT_BYTES_CONFIG, \"536870912\")\r\n            .build();\r\n    }\r\n\r\n    @Bean\r\n    public NewTopic compactedTopic() {\r\n        return TopicBuilder.name(\"user-profiles\")\r\n            .partitions(5)\r\n            .replicas(2)\r\n            .config(TopicConfig.CLEANUP_POLICY_CONFIG, TopicConfig.CLEANUP_POLICY_COMPACT)\r\n            .config(TopicConfig.MIN_COMPACTION_LAG_MS_CONFIG, \"60000\")\r\n            .build();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key topic configurations:"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Property"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Description"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "min.insync.replicas"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minimum replicas that must acknowledge writes for acks=all"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "cleanup.policy"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "delete"
            }), " (default, time/size-based retention) or ", (0,jsx_runtime.jsx)(_components.code, {
              children: "compact"
            }), " (key-based retention)"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retention.ms"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum age of a message before deletion (default 7 days)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "retention.bytes"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum bytes per partition before deletion"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "compression.type"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "producer"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "gzip"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "snappy"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "lz4"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "zstd"
            })]
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "3-producer-configuration",
      children: "3. Producer Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class KafkaProducerConfig {\r\n\r\n    @Bean\r\n    public ProducerFactory<String, Order> orderProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092,localhost:9093\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        props.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, \"snappy\");\r\n        props.put(ProducerConfig.BATCH_SIZE_CONFIG, 32768);\r\n        props.put(ProducerConfig.LINGER_MS_CONFIG, 10);\r\n        props.put(ProducerConfig.MAX_REQUEST_SIZE_CONFIG, 10485760);\r\n        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);\r\n        props.put(ProducerConfig.RETRIES_CONFIG, Integer.MAX_VALUE);\r\n        props.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 5);\r\n        props.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432);\r\n        props.put(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG, 30000);\r\n        props.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG, 120000);\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, Order> orderKafkaTemplate() {\r\n        KafkaTemplate<String, Order> template = new KafkaTemplate<>(orderProducerFactory());\r\n        template.setDefaultTopic(\"orders\");\r\n        return template;\r\n    }\r\n\r\n    @Bean\r\n    public ProducerFactory<String, Object> multiTypeProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, Object> multiTypeKafkaTemplate() {\r\n        return new KafkaTemplate<>(multiTypeProducerFactory());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Producer properties detailed:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// All properties with explanations\r\nMap<String, Object> producerProps = new HashMap<>();\r\n\r\n// Connection\r\nproducerProps.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n\r\n// Serialization\r\nproducerProps.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());\r\nproducerProps.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class.getName());\r\n\r\n// Durability\r\nproducerProps.put(ProducerConfig.ACKS_CONFIG, \"all\");          // Wait for all in-sync replicas\r\nproducerProps.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true); // At-most-once delivery\r\n\r\n// Batching and latency\r\nproducerProps.put(ProducerConfig.BATCH_SIZE_CONFIG, 32768);       // Default 16384\r\nproducerProps.put(ProducerConfig.LINGER_MS_CONFIG, 10);           // Wait up to 10ms for batch\r\nproducerProps.put(ProducerConfig.COMPRESSION_TYPE_CONFIG, \"snappy\"); // Compress batches\r\nproducerProps.put(ProducerConfig.BUFFER_MEMORY_CONFIG, 33554432); // 32MB send buffer\r\n\r\n// Retries\r\nproducerProps.put(ProducerConfig.RETRIES_CONFIG, Integer.MAX_VALUE);\r\nproducerProps.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 5);\r\n\r\n// Timeouts\r\nproducerProps.put(ProducerConfig.REQUEST_TIMEOUT_MS_CONFIG, 30000);\r\nproducerProps.put(ProducerConfig.DELIVERY_TIMEOUT_MS_CONFIG, 120000);\r\n\r\n// Size limits\r\nproducerProps.put(ProducerConfig.MAX_REQUEST_SIZE_CONFIG, 10485760);  // 10MB\r\nproducerProps.put(ProducerConfig.MAX_BLOCK_MS_CONFIG, 60000);         // Block for metadata\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "4-kafkatemplate--producing-messages",
      children: "4. KafkaTemplate — Producing Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class OrderProducer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderProducer.class);\r\n    private final KafkaTemplate<String, Order> kafkaTemplate;\r\n\r\n    public OrderProducer(KafkaTemplate<String, Order> kafkaTemplate) {\r\n        this.kafkaTemplate = kafkaTemplate;\r\n    }\r\n\r\n    public void sendOrder(Order order) {\r\n        kafkaTemplate.send(\"orders\", order.getId().toString(), order);\r\n    }\r\n\r\n    public void sendOrderWithCallback(Order order) {\r\n        ListenableFuture<SendResult<String, Order>> future =\r\n            kafkaTemplate.send(\"orders\", order.getId().toString(), order);\r\n\r\n        future.addCallback(new ListenableFutureCallback<>() {\r\n            @Override\r\n            public void onSuccess(SendResult<String, Order> result) {\r\n                RecordMetadata metadata = result.getRecordMetadata();\r\n                log.info(\"Order {} sent to partition {} offset {}\",\r\n                    order.getId(), metadata.partition(), metadata.offset());\r\n            }\r\n\r\n            @Override\r\n            public void onFailure(Throwable ex) {\r\n                log.error(\"Failed to send order {}\", order.getId(), ex);\r\n            }\r\n        });\r\n    }\r\n\r\n    public void sendWithHeaders(Order order) {\r\n        ProducerRecord<String, Order> record = new ProducerRecord<>(\r\n            \"orders\", order.getId().toString(), order);\r\n        record.headers().add(\"source\", \"order-service\".getBytes());\r\n        record.headers().add(\"version\", \"1.0\".getBytes());\r\n        record.headers().add(\"timestamp\", Instant.now().toString().getBytes());\r\n        kafkaTemplate.send(record);\r\n    }\r\n\r\n    public void sendToPartition(Order order, int partition) {\r\n        ProducerRecord<String, Order> record = new ProducerRecord<>(\r\n            \"orders\", partition, order.getId().toString(), order);\r\n        kafkaTemplate.send(record);\r\n    }\r\n\r\n    public CompletableFuture<SendResult<String, Order>> sendAsync(Order order) {\r\n        return kafkaTemplate.send(\"orders\", order.getId().toString(), order)\r\n            .completable();\r\n    }\r\n\r\n    public void sendTransactionally(Order order) {\r\n        kafkaTemplate.executeInTransaction(kafkaTemplate -> {\r\n            kafkaTemplate.send(\"orders\", order.getId().toString(), order);\r\n            kafkaTemplate.send(\"audit\", order.getId().toString(),\r\n                new AuditEvent(\"ORDER_CREATED\", order.getId()));\r\n            return true;\r\n        });\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "5-custom-partitioner",
      children: "5. Custom Partitioner"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class OrderPartitioner implements Partitioner {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderPartitioner.class);\r\n\r\n    @Override\r\n    public int partition(String topic, Object key, byte[] keyBytes,\r\n                         Object value, byte[] valueBytes, Cluster cluster) {\r\n        List<PartitionInfo> partitions = cluster.partitionsForTopic(topic);\r\n        int numPartitions = partitions.size();\r\n\r\n        if (key == null) {\r\n            return ThreadLocalRandom.current().nextInt(numPartitions);\r\n        }\r\n\r\n        if (key instanceof String keyStr) {\r\n            return switch (keyStr.substring(0, 1).toLowerCase()) {\r\n                case \"a\", \"b\", \"c\", \"d\", \"e\" -> 0;\r\n                case \"f\", \"g\", \"h\", \"i\", \"j\" -> 1;\r\n                case \"k\", \"l\", \"m\", \"n\", \"o\" -> 2;\r\n                default -> Math.abs(key.hashCode() % numPartitions);\r\n            };\r\n        }\r\n\r\n        return Math.abs(key.hashCode() % numPartitions);\r\n    }\r\n\r\n    @Override\r\n    public void close() {}\r\n\r\n    @Override\r\n    public void configure(Map<String, ?> configs) {\r\n        log.info(\"Configuring OrderPartitioner with {} configs\", configs.size());\r\n    }\r\n}\r\n\r\n// Register the custom partitioner\r\n@Bean\r\npublic ProducerFactory<String, Order> partitionedProducerFactory() {\r\n    Map<String, Object> props = new HashMap<>();\r\n    props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n    props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n    props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n    props.put(ProducerConfig.PARTITIONER_CLASS_CONFIG, OrderPartitioner.class);\r\n    props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n    return new DefaultKafkaProducerFactory<>(props);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "6-consumer-configuration",
      children: "6. Consumer Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class KafkaConsumerConfig {\r\n\r\n    @Bean\r\n    public ConsumerFactory<String, Order> orderConsumerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"order-processor\");\r\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);\r\n        props.put(JsonDeserializer.TRUSTED_PACKAGES, \"com.example.*\");\r\n        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);\r\n        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, \"earliest\");\r\n        props.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 100);\r\n        props.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, 1024);\r\n        props.put(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG, 500);\r\n        props.put(ConsumerConfig.MAX_PARTITION_FETCH_BYTES_CONFIG, 1048576);\r\n        props.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 45000);\r\n        props.put(ConsumerConfig.HEARTBEAT_INTERVAL_MS_CONFIG, 15000);\r\n        props.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000);\r\n        return new DefaultKafkaConsumerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order>\r\n           orderListenerContainerFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.setConcurrency(3);\r\n        factory.setBatchListener(false);\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);\r\n        factory.getContainerProperties().setPollTimeout(3000);\r\n        factory.getContainerProperties().setIdleBetweenPolls(100);\r\n        factory.getContainerProperties().setSyncCommits(true);\r\n        factory.setCommonErrorHandler(defaultErrorHandler());\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order>\r\n           batchListenerContainerFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.setConcurrency(5);\r\n        factory.setBatchListener(true);\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.BATCH);\r\n        factory.getContainerProperties().setPollTimeout(2000);\r\n        return factory;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Consumer properties detailed:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "Map<String, Object> consumerProps = new HashMap<>();\r\n\r\n// Connection and group\r\nconsumerProps.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\nconsumerProps.put(ConsumerConfig.GROUP_ID_CONFIG, \"my-group\");\r\nconsumerProps.put(ConsumerConfig.CLIENT_ID_CONFIG, \"consumer-1\");\r\n\r\n// Deserialization\r\nconsumerProps.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\nconsumerProps.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);\r\nconsumerProps.put(JsonDeserializer.TRUSTED_PACKAGES, \"com.example.*\");\r\n\r\n// Offset management\r\nconsumerProps.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);\r\nconsumerProps.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, \"earliest\");\r\n// earliest: start from beginning if no offset\r\n// latest: start from end if no offset\r\n// none: fail if no offset\r\n\r\n// Fetch tuning\r\nconsumerProps.put(ConsumerConfig.FETCH_MIN_BYTES_CONFIG, 1);\r\nconsumerProps.put(ConsumerConfig.FETCH_MAX_WAIT_MS_CONFIG, 500);\r\nconsumerProps.put(ConsumerConfig.MAX_PARTITION_FETCH_BYTES_CONFIG, 1048576);\r\nconsumerProps.put(ConsumerConfig.MAX_POLL_RECORDS_CONFIG, 500);\r\n\r\n// Heartbeat and session\r\nconsumerProps.put(ConsumerConfig.SESSION_TIMEOUT_MS_CONFIG, 45000);\r\nconsumerProps.put(ConsumerConfig.HEARTBEAT_INTERVAL_MS_CONFIG, 3000);\r\nconsumerProps.put(ConsumerConfig.MAX_POLL_INTERVAL_MS_CONFIG, 300000);\r\n\r\n// Partition assignment\r\nconsumerProps.put(ConsumerConfig.PARTITION_ASSIGNMENT_STRATEGY_CONFIG,\r\n    CooperativeStickyAssignor.class.getName());\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "7-kafkalistener--consuming-messages",
      children: "7. @KafkaListener — Consuming Messages"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class OrderConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderConsumer.class);\r\n\r\n    @KafkaListener(\r\n        topics = \"orders\",\r\n        groupId = \"order-processor\",\r\n        concurrency = \"3\",\r\n        containerFactory = \"orderListenerContainerFactory\"\r\n    )\r\n    public void processOrder(\r\n            @Payload Order order,\r\n            @Header(KafkaHeaders.RECEIVED_KEY) String key,\r\n            @Header(KafkaHeaders.RECEIVED_PARTITION) int partition,\r\n            @Header(KafkaHeaders.OFFSET) long offset,\r\n            @Header(KafkaHeaders.RECEIVED_TIMESTAMP) long timestamp,\r\n            @Headers MessageHeaders headers) {\r\n\r\n        log.info(\"Received order {} from partition {} offset {}\",\r\n            order.getId(), partition, offset);\r\n        processPayment(order);\r\n    }\r\n\r\n    @KafkaListener(\r\n        topics = \"orders\",\r\n        groupId = \"order-audit\",\r\n        containerFactory = \"orderListenerContainerFactory\"\r\n    )\r\n    @SendTo(\"audit\")  // Forward result to audit topic\r\n    public AuditEvent processAndForward(Order order) {\r\n        log.info(\"Processing and forwarding order {}\", order.getId());\r\n        return new AuditEvent(\"PROCESSED\", order.getId());\r\n    }\r\n\r\n    @KafkaListener(\r\n        topicPattern = \"order-.*\",\r\n        groupId = \"pattern-consumer\",\r\n        containerFactory = \"orderListenerContainerFactory\"\r\n    )\r\n    public void handleByPattern(ConsumerRecord<String, Order> record) {\r\n        log.info(\"Pattern match on topic {} with order {}\",\r\n            record.topic(), record.value().getId());\r\n    }\r\n\r\n    @KafkaListener(\r\n        topics = \"orders\",\r\n        groupId = \"batch-processor\",\r\n        containerFactory = \"batchListenerContainerFactory\"\r\n    )\r\n    public void processBatch(List<Order> orders) {\r\n        log.info(\"Received batch of {} orders\", orders.size());\r\n        for (Order order : orders) {\r\n            processPayment(order);\r\n        }\r\n    }\r\n\r\n    @KafkaListener(\r\n        topics = \"orders\",\r\n        groupId = \"manual-ack\",\r\n        containerFactory = \"orderListenerContainerFactory\"\r\n    )\r\n    public void processWithManualAck(\r\n            @Payload Order order,\r\n            Acknowledgment acknowledgment) {\r\n        try {\r\n            processPayment(order);\r\n            acknowledgment.acknowledge();\r\n        } catch (Exception e) {\r\n            log.error(\"Failed to process order {}\", order.getId(), e);\r\n            // Do not ack — message will be redelivered\r\n        }\r\n    }\r\n\r\n    private void processPayment(Order order) {\r\n        if (order.getTotal() == null || order.getTotal().compareTo(BigDecimal.ZERO) <= 0) {\r\n            throw new IllegalArgumentException(\"Invalid order: \" + order.getId());\r\n        }\r\n        log.info(\"Processed payment for order {}: {}\", order.getId(), order.getTotal());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "8-ackmode-strategies",
      children: "8. AckMode Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class AckModeConfig {\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> recordAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.RECORD);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> batchAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.setBatchListener(true);\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.BATCH);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> timeAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.TIME);\r\n        factory.getContainerProperties().setAckTime(5000);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> countAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.COUNT);\r\n        factory.getContainerProperties().setAckCount(10);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> manualAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order> manualImmediateAckFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(ContainerProperties.AckMode.MANUAL_IMMEDIATE);\r\n        return factory;\r\n    }\r\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "AckMode"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Behavior"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RECORD"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit after each record is processed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "BATCH"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Commit after the poll of records completes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "TIME"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commit every ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ackTime"
            }), " milliseconds"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "COUNT"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Commit after ", (0,jsx_runtime.jsx)(_components.code, {
              children: "ackCount"
            }), " records"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MANUAL"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Listener must call ", (0,jsx_runtime.jsx)(_components.code, {
              children: "acknowledgment.acknowledge()"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "MANUAL_IMMEDIATE"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Like MANUAL but commits immediately (no batching)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "9-seek-operations",
      children: "9. Seek Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class KafkaSeekOperations {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(KafkaSeekOperations.class);\r\n    private final ConsumerFactory<String, Order> consumerFactory;\r\n\r\n    public KafkaSeekOperations(ConsumerFactory<String, Order> consumerFactory) {\r\n        this.consumerFactory = consumerFactory;\r\n    }\r\n\r\n    @KafkaListener(id = \"seek-listener\", topics = \"orders\", groupId = \"seek-group\")\r\n    public void listen(ConsumerRecord<String, Order> record) {\r\n        log.info(\"Received: {}\", record.value());\r\n    }\r\n\r\n    @EventListener(ApplicationStartedEvent.class)\r\n    public void seekToBeginning() {\r\n        try {\r\n            AdminClient admin = AdminClient.create(consumerFactory.getConfigurationProperties());\r\n            ListPartitionReassignment reassignment = new ListPartitionReassignment();\r\n            try (KafkaConsumer<String, Order> consumer =\r\n                     new KafkaConsumer<>(consumerFactory.getConfigurationProperties())) {\r\n                consumer.subscribe(Collections.singletonList(\"orders\"));\r\n                consumer.poll(Duration.ofMillis(1000));\r\n                consumer.seekToBeginning(consumer.assignment());\r\n                log.info(\"Seeked to beginning for all partitions\");\r\n            }\r\n        } catch (Exception e) {\r\n            log.warn(\"Could not seek to beginning\", e);\r\n        }\r\n    }\r\n}\r\n\r\n@Component\r\npublic class SeekErrorHandler {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(SeekErrorHandler.class);\r\n\r\n    @Bean\r\n    public DefaultErrorHandler seekToCurrentErrorHandler() {\r\n        DefaultErrorHandler errorHandler = new DefaultErrorHandler(\r\n            (record, exception) -> {\r\n                log.error(\"Record failed after retries: topic={}, partition={}, offset={}\",\r\n                    record.topic(), record.partition(), record.offset(), exception);\r\n            },\r\n            new FixedBackOff(1000L, 3)\r\n        );\r\n        errorHandler.setSeekAfterError(true);\r\n        errorHandler.addRetryableExceptions(DataAccessException.class, TimeoutException.class);\r\n        errorHandler.addNotRetryableExceptions(IllegalArgumentException.class);\r\n        return errorHandler;\r\n    }\r\n\r\n    @Bean\r\n    public DefaultErrorHandler customSeekHandler() {\r\n        DefaultErrorHandler handler = new DefaultErrorHandler(\r\n            new DeadLetterPublishingRecoverer(\r\n                new KafkaTemplate<>(orderProducerFactory()),\r\n                (rec, ex) -> new TopicPartition(\"orders.DLT\", rec.partition())\r\n            ),\r\n            new ExponentialBackOff(1000, 2.0)\r\n        );\r\n        handler.setSeekAfterError(true);\r\n        return handler;\r\n    }\r\n\r\n    private ProducerFactory<String, Order> orderProducerFactory() {\r\n        return new DefaultKafkaProducerFactory<>(Map.of(\r\n            ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\",\r\n            ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class,\r\n            ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class\r\n        ));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "10-error-handling",
      children: "10. Error Handling"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class KafkaErrorHandlingConfig {\r\n\r\n    @Bean\r\n    public DefaultErrorHandler defaultErrorHandler() {\r\n        DeadLetterPublishingRecoverer recoverer = new DeadLetterPublishingRecoverer(\r\n            kafkaErrorTemplate(),\r\n            (record, exception) -> {\r\n                String topic = record.topic() + \".DLT\";\r\n                log.warn(\"Routing failed record from {} to {}: {}\",\r\n                    record.topic(), topic, exception.getMessage());\r\n                return new TopicPartition(topic, record.partition());\r\n            }\r\n        );\r\n\r\n        DefaultErrorHandler handler = new DefaultErrorHandler(\r\n            recoverer,\r\n            new ExponentialBackOff(1000, 2.0)\r\n        );\r\n        handler.setMaxRetries(5);\r\n        handler.setSeekAfterError(true);\r\n        handler.setClassificationEnabled(true);\r\n        handler.addRetryableExceptions(\r\n            DataAccessException.class,\r\n            NetworkException.class,\r\n            org.apache.kafka.common.errors.TimeoutException.class\r\n        );\r\n        handler.addNotRetryableExceptions(\r\n            IllegalArgumentException.class,\r\n            SerializationException.class,\r\n            DeserializationException.class\r\n        );\r\n        return handler;\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, Object> kafkaErrorTemplate() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, ByteArraySerializer.class);\r\n        return new KafkaTemplate<>(new DefaultKafkaProducerFactory<>(props));\r\n    }\r\n\r\n    @Bean\r\n    public RetryingDeserializationHandler retryingDeserializationHandler() {\r\n        return new RetryingDeserializationHandler() {\r\n            @Override\r\n            public Object handle(DeserializationException exception,\r\n                                 ConsumerRecord<?, ?> record,\r\n                                 Consumer<?, ?> consumer,\r\n                                 MessageListenerContainer container,\r\n                                 Runnable retryInvoker) {\r\n                log.error(\"Deserialization failed for record at {}-{}: {}\",\r\n                    record.topic(), record.offset(), exception.getMessage());\r\n                retryInvoker.run();\r\n                return null;\r\n            }\r\n        };\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order>\r\n           errorHandlingContainerFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(orderConsumerFactory());\r\n        factory.setCommonErrorHandler(defaultErrorHandler());\r\n        factory.getContainerProperties().setAckMode(\r\n            ContainerProperties.AckMode.MANUAL_IMMEDIATE);\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConsumerFactory<String, Order> orderConsumerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"error-handler-group\");\r\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);\r\n        props.put(JsonDeserializer.TRUSTED_PACKAGES, \"*\");\r\n        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);\r\n        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, \"earliest\");\r\n        return new DefaultKafkaConsumerFactory<>(props);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "101-retryabletopic",
      children: "10.1 @RetryableTopic"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\r\npublic class RetryableTopicConsumer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(RetryableTopicConsumer.class);\r\n\r\n    @RetryableTopic(\r\n        attempts = \"5\",\r\n        backoff = @Backoff(delay = 1000, multiplier = 2.0, maxDelay = 30000),\r\n        autoCreateTopics = \"true\",\r\n        include = {\r\n            DataAccessException.class,\r\n            NetworkException.class\r\n        },\r\n        exclude = {\r\n            IllegalArgumentException.class,\r\n            SerializationException.class\r\n        },\r\n        dltTopicSuffix = \"-dead-letter\",\r\n        retryTopicSuffix = \"-retry\",\r\n        topicSuffixingStrategy = TopicSuffixingStrategy.SUFFIX_WITH_INDEX_VALUE\r\n    )\r\n    @KafkaListener(topics = \"orders-important\", groupId = \"retry-group\")\r\n    public void processWithRetry(Order order) {\r\n        log.info(\"Processing order {}\", order.getId());\r\n        if (!order.isValid()) {\r\n            throw new IllegalArgumentException(\"Invalid order\");\r\n        }\r\n    }\r\n\r\n    @DltHandler\r\n    public void handleDlt(Order order, @Header(KafkaHeaders.RECEIVED_TOPIC) String topic) {\r\n        log.error(\"Order {} moved to DLT from topic {}\", order.getId(), topic);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "102-custom-error-handler",
      children: "10.2 Custom Error Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class CustomKafkaErrorHandler implements CommonErrorHandler {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(CustomKafkaErrorHandler.class);\r\n    private final MeterRegistry meterRegistry;\r\n\r\n    public CustomKafkaErrorHandler(MeterRegistry meterRegistry) {\r\n        this.meterRegistry = meterRegistry;\r\n    }\r\n\r\n    @Override\r\n    public boolean seekAfterError(Consumer<?, ?> consumer, Exception exception) {\r\n        return true;\r\n    }\r\n\r\n    @Override\r\n    public boolean retryAfterError(Consumer<?, ?> consumer, Exception exception) {\r\n        if (exception instanceof IllegalArgumentException) {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    @Override\r\n    public void handleBatch(Exception thrownException, ConsumerRecords<?, ?> records,\r\n                            Consumer<?, ?> consumer, MessageListenerContainer container,\r\n                            Runnable invokeListener) {\r\n        log.error(\"Batch processing error for {} records\", records.count(), thrownException);\r\n        meterRegistry.counter(\"kafka.batch.errors\",\r\n            \"exception\", thrownException.getClass().getSimpleName()\r\n        ).increment();\r\n        // Skip the entire batch\r\n        consumer.seekToEnd(consumer.assignment());\r\n    }\r\n\r\n    @Override\r\n    public void handleOne(Exception thrownException, ConsumerRecord<?, ?> record,\r\n                          Consumer<?, ?> consumer, MessageListenerContainer container) {\r\n        log.error(\"Error processing record at {}-{}: {}\",\r\n            record.topic(), record.offset(), thrownException.getMessage());\r\n        meterRegistry.counter(\"kafka.record.errors\",\r\n            \"topic\", record.topic(),\r\n            \"partition\", String.valueOf(record.partition())\r\n        ).increment();\r\n        // Skip this record\r\n        consumer.seek(consumer.assignment().iterator().next(),\r\n            record.offset() + 1);\r\n    }\r\n\r\n    @Override\r\n    public void handleOtherException(Exception thrownException,\r\n                                     Consumer<?, ?> consumer,\r\n                                     MessageListenerContainer container,\r\n                                     boolean batchListener) {\r\n        log.error(\"Unhandled exception in consumer\", thrownException);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-exactly-once-semantics",
      children: "11. Exactly-Once Semantics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class ExactlyOnceConfig {\r\n\r\n    @Bean\r\n    public ProducerFactory<String, Order> idempotentProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        props.put(ProducerConfig.MAX_IN_FLIGHT_REQUESTS_PER_CONNECTION, 5);\r\n        props.put(ProducerConfig.RETRIES_CONFIG, Integer.MAX_VALUE);\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public ProducerFactory<String, Order> transactionalProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        props.put(ProducerConfig.TRANSACTIONAL_ID_CONFIG, \"order-tx-\");\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, Order> transactionalKafkaTemplate() {\r\n        KafkaTemplate<String, Order> template =\r\n            new KafkaTemplate<>(transactionalProducerFactory());\r\n        template.setDefaultTopic(\"orders\");\r\n        return template;\r\n    }\r\n}\r\n\r\n@Service\r\npublic class ExactlyOnceProducer {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(ExactlyOnceProducer.class);\r\n    private final KafkaTemplate<String, Order> kafkaTemplate;\r\n\r\n    public ExactlyOnceProducer(@Qualifier(\"transactionalKafkaTemplate\")\r\n                               KafkaTemplate<String, Order> kafkaTemplate) {\r\n        this.kafkaTemplate = kafkaTemplate;\r\n    }\r\n\r\n    @Transactional\r\n    public void processOrderTransactionally(Order order) {\r\n        kafkaTemplate.send(\"orders\", order);\r\n        kafkaTemplate.send(\"payments\", order.getId().toString(),\r\n            new PaymentEvent(order.getId(), order.getTotal()));\r\n        log.info(\"Transactionally sent order {} and payment event\", order.getId());\r\n    }\r\n\r\n    public void sendInTransaction(Order order) {\r\n        kafkaTemplate.executeInTransaction(operations -> {\r\n            operations.send(\"orders\", order.getId().toString(), order);\r\n            operations.send(\"audit\", order.getId().toString(),\r\n                new AuditEvent(\"ORDER_CREATED\", order.getId()));\r\n            return true;\r\n        });\r\n    }\r\n}\r\n\r\n@Configuration\r\npublic class ExactlyOnceConsumerConfig {\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, Order>\r\n           exactlyOnceContainerFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, Order> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(exactlyOnceConsumerFactory());\r\n        factory.getContainerProperties().setAckMode(\r\n            ContainerProperties.AckMode.MANUAL_IMMEDIATE);\r\n        factory.getContainerProperties().setTransactionManager(kafkaTransactionManager());\r\n        return factory;\r\n    }\r\n\r\n    @Bean\r\n    public ConsumerFactory<String, Order> exactlyOnceConsumerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"exactly-once-group\");\r\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);\r\n        props.put(ConsumerConfig.ISOLATION_LEVEL_CONFIG, \"read_committed\");\r\n        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);\r\n        return new DefaultKafkaConsumerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTransactionManager<String, Order> kafkaTransactionManager() {\r\n        return new KafkaTransactionManager<>(transactionalProducerFactory());\r\n    }\r\n\r\n    private ProducerFactory<String, Order> transactionalProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);\r\n        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        props.put(ProducerConfig.TRANSACTIONAL_ID_CONFIG, \"consumer-tx-\");\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n}\r\n\r\n@Component\r\npublic class ExactlyOnceConsumer {\r\n\r\n    @KafkaListener(\r\n        topics = \"orders\",\r\n        groupId = \"exactly-once-group\",\r\n        containerFactory = \"exactlyOnceContainerFactory\"\r\n    )\r\n    @Transactional\r\n    public void consumeAndProduce(Order order) {\r\n        // This runs within a Kafka transaction\r\n        System.out.println(\"Consumed: \" + order.getId());\r\n        // The offset commit is part of the transaction\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-schema-registry-integration",
      children: "12. Schema Registry Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "121-avro-with-confluent-schema-registry",
      children: "12.1 Avro with Confluent Schema Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class AvroProducerConfig {\r\n\r\n    @Bean\r\n    public ProducerFactory<String, OrderAvro> avroProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, KafkaAvroSerializer.class);\r\n        props.put(\"schema.registry.url\", \"http://localhost:8081\");\r\n        props.put(\"auto.register.schemas\", true);\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, OrderAvro> avroKafkaTemplate() {\r\n        return new KafkaTemplate<>(avroProducerFactory());\r\n    }\r\n\r\n    @Bean\r\n    public ConsumerFactory<String, OrderAvro> avroConsumerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"avro-consumer\");\r\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, KafkaAvroDeserializer.class);\r\n        props.put(\"schema.registry.url\", \"http://localhost:8081\");\r\n        props.put(\"specific.avro.reader\", true);\r\n        return new DefaultKafkaConsumerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public ConcurrentKafkaListenerContainerFactory<String, OrderAvro>\r\n           avroListenerContainerFactory() {\r\n        ConcurrentKafkaListenerContainerFactory<String, OrderAvro> factory =\r\n            new ConcurrentKafkaListenerContainerFactory<>();\r\n        factory.setConsumerFactory(avroConsumerFactory());\r\n        return factory;\r\n    }\r\n}\r\n\r\n@Component\r\npublic class AvroProducer {\r\n\r\n    private final KafkaTemplate<String, OrderAvro> avroKafkaTemplate;\r\n\r\n    public AvroProducer(KafkaTemplate<String, OrderAvro> avroKafkaTemplate) {\r\n        this.avroKafkaTemplate = avroKafkaTemplate;\r\n    }\r\n\r\n    public void sendOrder(OrderAvro order) {\r\n        avroKafkaTemplate.send(\"orders-avro\", order.getId().toString(), order);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "122-protobuf-with-kafka",
      children: "12.2 Protobuf with Kafka"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class ProtobufConfig {\r\n\r\n    @Bean\r\n    public ProducerFactory<String, OrderProtos.Order> protobufProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,\r\n            KafkaProtobufSerializer.class);\r\n        props.put(\"schema.registry.url\", \"http://localhost:8081\");\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, OrderProtos.Order> protobufKafkaTemplate() {\r\n        return new KafkaTemplate<>(protobufProducerFactory());\r\n    }\r\n\r\n    @Bean\r\n    public ConsumerFactory<String, OrderProtos.Order> protobufConsumerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"protobuf-consumer\");\r\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);\r\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,\r\n            KafkaProtobufDeserializer.class);\r\n        props.put(\"schema.registry.url\", \"http://localhost:8081\");\r\n        return new DefaultKafkaConsumerFactory<>(props);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "123-json-schema-with-schema-registry",
      children: "12.3 JSON Schema with Schema Registry"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\npublic class JsonSchemaConfig {\r\n\r\n    @Bean\r\n    public ProducerFactory<String, Order> jsonSchemaProducerFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);\r\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,\r\n            KafkaJsonSchemaSerializer.class);\r\n        props.put(\"schema.registry.url\", \"http://localhost:8081\");\r\n        return new DefaultKafkaProducerFactory<>(props);\r\n    }\r\n\r\n    @Bean\r\n    public KafkaTemplate<String, Order> jsonSchemaKafkaTemplate() {\r\n        return new KafkaTemplate<>(jsonSchemaProducerFactory());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-kafka-streams-kstreams",
      children: "13. Kafka Streams (KStreams)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Configuration\r\n@EnableKafkaStreams\r\npublic class KafkaStreamsConfig {\r\n\r\n    @Bean\r\n    public StreamsBuilderFactoryBean kafkaStreamsBuilderFactory() {\r\n        Map<String, Object> props = new HashMap<>();\r\n        props.put(StreamsConfig.APPLICATION_ID_CONFIG, \"order-stream-processor\");\r\n        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\r\n        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());\r\n        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG,\r\n            JsonSerde.class.getName());\r\n        props.put(StreamsConfig.NUM_STREAM_THREADS_CONFIG, 3);\r\n        props.put(StreamsConfig.COMMIT_INTERVAL_MS_CONFIG, 100);\r\n        props.put(StreamsConfig.PROCESSING_GUARANTEE_CONFIG,\r\n            StreamsConfig.EXACTLY_ONCE_V2);\r\n        props.put(StreamsConfig.CACHE_MAX_BYTES_BUFFERING_CONFIG, 10485760);\r\n        props.put(StreamsConfig.STATE_DIR_CONFIG, \"/tmp/kafka-streams\");\r\n        return new StreamsBuilderFactoryBean(new DefaultKafkaStreamsConfiguration(props));\r\n    }\r\n}\r\n\r\n@Component\r\npublic class OrderStreamProcessor {\r\n\r\n    private static final Logger log = LoggerFactory.getLogger(OrderStreamProcessor.class);\r\n\r\n    @Autowired\r\n    public void buildPipeline(StreamsBuilder builder) {\r\n        JsonSerde<Order> orderSerde = new JsonSerde<>(Order.class);\r\n        JsonSerde<OrderSummary> summarySerde = new JsonSerde<>(OrderSummary.class);\r\n        JsonSerde<PaymentEvent> paymentSerde = new JsonSerde<>(PaymentEvent.class);\r\n\r\n        // KStream: continuous stream of records\r\n        KStream<String, Order> orders = builder.stream(\r\n            \"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde)\r\n        );\r\n\r\n        // Filter and transform\r\n        KStream<String, Order> highValueOrders = orders\r\n            .filter((key, order) -> order.getTotal().compareTo(BigDecimal.valueOf(1000)) > 0)\r\n            .peek((key, order) ->\r\n                log.info(\"High-value order: {} = {}\", key, order.getTotal()));\r\n\r\n        highValueOrders.to(\"high-value-orders\",\r\n            Produced.with(Serdes.String(), orderSerde));\r\n\r\n        // Map values\r\n        KStream<String, String> orderSummaries = orders.mapValues(\r\n            order -> \"Order \" + order.getId() + \": $\" + order.getTotal());\r\n\r\n        orderSummaries.to(\"order-summaries\",\r\n            Produced.with(Serdes.String(), Serdes.String()));\r\n\r\n        // FlatMap: split into multiple records\r\n        KStream<String, OrderItem> orderItems = orders.flatMap(\r\n            (key, order) -> order.getItems().stream()\r\n                .map(item -> new KeyValue<>(order.getId().toString(), item))\r\n                .collect(Collectors.toList()));\r\n\r\n        orderItems.to(\"order-items\",\r\n            Produced.with(Serdes.String(), new JsonSerde<>(OrderItem.class)));\r\n\r\n        // KTable: changelog stream (upsert by key)\r\n        KTable<String, Order> ordersTable = builder.table(\r\n            \"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde),\r\n            Materialized.as(\"orders-store\")\r\n        );\r\n\r\n        // Join streams\r\n        KStream<String, PaymentEvent> payments = builder.stream(\r\n            \"payments\",\r\n            Consumed.with(Serdes.String(), paymentSerde)\r\n        );\r\n\r\n        // Inner join KStream with KStream\r\n        KStream<String, String> paidOrders = orders.join(\r\n            payments,\r\n            (order, payment) -> \"Order \" + order.getId()\r\n                + \" paid $\" + payment.getAmount(),\r\n            JoinWindows.ofTimeDifferenceWithNoGrace(Duration.ofMinutes(5)),\r\n            StreamJoined.with(Serdes.String(), orderSerde, paymentSerde)\r\n        );\r\n\r\n        // Left join KStream with KTable\r\n        KTable<String, Order> orderTable = builder.table(\r\n            \"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde));\r\n\r\n        KStream<String, String> enrichedOrders = payments.leftJoin(\r\n            orderTable,\r\n            (payment, order) -> order != null\r\n                ? \"Paid: \" + order.getId() + \" for $\" + payment.getAmount()\r\n                : \"Orphan payment: \" + payment.getId()\r\n        );\r\n\r\n        // GlobalKTable: fully replicated table for joins without partitioning\r\n        GlobalKTable<String, Order> globalOrders = builder.globalTable(\r\n            \"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde),\r\n            Materialized.as(\"global-orders-store\")\r\n        );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "131-aggregations",
      children: "13.1 Aggregations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class OrderAggregator {\r\n\r\n    @Autowired\r\n    public void buildAggregations(StreamsBuilder builder) {\r\n        JsonSerde<Order> orderSerde = new JsonSerde<>(Order.class);\r\n        JsonSerde<OrderSummary> summarySerde = new JsonSerde<>(OrderSummary.class);\r\n\r\n        KStream<String, Order> orders = builder.stream(\"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde));\r\n\r\n        // Group by key and count\r\n        KTable<String, Long> orderCounts = orders\r\n            .groupByKey(Grouped.with(Serdes.String(), orderSerde))\r\n            .count(Materialized.as(\"order-counts\"));\r\n\r\n        orderCounts.toStream().to(\"order-counts\",\r\n            Produced.with(Serdes.String(), Serdes.Long()));\r\n\r\n        // Group by category and aggregate\r\n        KStream<String, Order> byCategory = orders.selectKey(\r\n            (key, order) -> order.getCategory());\r\n\r\n        KTable<String, OrderSummary> categoryTotals = byCategory\r\n            .groupByKey(Grouped.with(Serdes.String(), orderSerde))\r\n            .aggregate(\r\n                OrderSummary::new,\r\n                (category, order, summary) -> {\r\n                    summary.setCategory(category);\r\n                    summary.setTotalOrders(summary.getTotalOrders() + 1);\r\n                    summary.setTotalRevenue(\r\n                        summary.getTotalRevenue().add(order.getTotal()));\r\n                    return summary;\r\n                },\r\n                Materialized.<String, OrderSummary, KeyValueStore<Bytes, byte[]>>\r\n                    as(\"category-totals\")\r\n                        .withKeySerde(Serdes.String())\r\n                        .withValueSerde(summarySerde)\r\n            );\r\n\r\n        categoryTotals.toStream().to(\"category-totals\",\r\n            Produced.with(Serdes.String(), summarySerde));\r\n\r\n        // Reduce: find max order value per category\r\n        KTable<String, BigDecimal> maxByCategory = byCategory\r\n            .groupByKey(Grouped.with(Serdes.String(), orderSerde))\r\n            .reduce(\r\n                (order1, order2) ->\r\n                    order1.getTotal().compareTo(order2.getTotal()) > 0\r\n                        ? order1 : order2,\r\n                Materialized.as(\"max-order-per-category\")\r\n            )\r\n            .mapValues(Order::getTotal);\r\n\r\n        maxByCategory.toStream().to(\"max-per-category\",\r\n            Produced.with(Serdes.String(), Serdes.BigDecimal()));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "132-window-operations",
      children: "13.2 Window Operations"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class WindowedOperations {\r\n\r\n    @Autowired\r\n    public void buildWindows(StreamsBuilder builder) {\r\n        JsonSerde<Order> orderSerde = new JsonSerde<>(Order.class);\r\n        JsonSerde<OrderSummary> summarySerde = new JsonSerde<>(OrderSummary.class);\r\n\r\n        KStream<String, Order> orders = builder.stream(\"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde)\r\n                .withTimestampExtractor(new OrderTimestampExtractor()));\r\n\r\n        // Tumbling window: non-overlapping, fixed-size\r\n        KTable<Windowed<String>, Long> tumblingCounts = orders\r\n            .groupByKey(Grouped.with(Serdes.String(), orderSerde))\r\n            .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(5)))\r\n            .count(Materialized.as(\"tumbling-counts\"));\r\n\r\n        tumblingCounts.toStream().foreach(\r\n            (windowedKey, count) ->\r\n                log.info(\"Tumbling: key={} window={} count={}\",\r\n                    windowedKey.key(),\r\n                    windowedKey.window().startTime(),\r\n                    count));\r\n\r\n        // Hopping window: overlapping, fixed advance\r\n        KTable<Windowed<String>, OrderSummary> hoppingAgg = orders\r\n            .groupByKey(Grouped.with(Serdes.String(), orderSerde))\r\n            .windowedBy(TimeWindows.ofSizeWithNoGrace(Duration.ofMinutes(10))\r\n                .advanceBy(Duration.ofMinutes(5)))\r\n            .aggregate(\r\n                OrderSummary::new,\r\n                (key, order, summary) -> {\r\n                    summary.setTotalOrders(summary.getTotalOrders() + 1);\r\n                    return summary;\r\n                },\r\n                Materialized.with(Serdes.String(), summarySerde)\r\n            );\r\n\r\n        // Sliding window: for joins (used in KStream-KStream joins)\r\n        KStream<String, PaymentEvent> payments = builder.stream(\"payments\",\r\n            Consumed.with(Serdes.String(), new JsonSerde<>(PaymentEvent.class)));\r\n\r\n        orders.outerJoin(\r\n            payments,\r\n            (order, payment) -> {\r\n                if (order == null) return \"Payment \" + payment.getId() + \" no order\";\r\n                if (payment == null) return \"Order \" + order.getId() + \" unpaid\";\r\n                return \"Order \" + order.getId() + \" paid \" + payment.getAmount();\r\n            },\r\n            JoinWindows.ofTimeDifferenceAndGrace(Duration.ofHours(1),\r\n                Duration.ofMinutes(5)),\r\n            StreamJoined.with(Serdes.String(), orderSerde,\r\n                new JsonSerde<>(PaymentEvent.class))\r\n        );\r\n    }\r\n\r\n    // Custom timestamp extractor\r\n    public static class OrderTimestampExtractor implements TimestampExtractor {\r\n        @Override\r\n        public long extract(ConsumerRecord<Object, Object> record,\r\n                            long partitionTime) {\r\n            if (record.value() instanceof Order order) {\r\n                return order.getCreatedAt().toInstant(ZoneOffset.UTC).toEpochMilli();\r\n            }\r\n            return partitionTime;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-ktable-and-globalktable",
      children: "14. KTable and GlobalKTable"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class TableOperations {\r\n\r\n    @Autowired\r\n    public void buildTables(StreamsBuilder builder) {\r\n        JsonSerde<UserProfile> profileSerde = new JsonSerde<>(UserProfile.class);\r\n        JsonSerde<Order> orderSerde = new JsonSerde<>(Order.class);\r\n\r\n        // KTable: partitioned changelog stream\r\n        KTable<String, UserProfile> profiles = builder.table(\r\n            \"user-profiles\",\r\n            Consumed.with(Serdes.String(), profileSerde),\r\n            Materialized.<String, UserProfile, KeyValueStore<Bytes, byte[]>>\r\n                as(\"profiles-store\")\r\n                .withKeySerde(Serdes.String())\r\n                .withValueSerde(profileSerde)\r\n        );\r\n\r\n        // Query a KTable via Interactive Queries\r\n        profiles.toStream().foreach((key, profile) ->\r\n            log.info(\"Profile: {} - {}\", key, profile.getName()));\r\n\r\n        // GlobalKTable: fully replicated on all nodes\r\n        GlobalKTable<String, UserProfile> globalProfiles = builder.globalTable(\r\n            \"user-profiles\",\r\n            Consumed.with(Serdes.String(), profileSerde),\r\n            Materialized.<String, UserProfile, KeyValueStore<Bytes, byte[]>>\r\n                as(\"global-profiles-store\")\r\n        );\r\n\r\n        // KStream-GlobalKTable join (no co-partitioning needed)\r\n        KStream<String, Order> orders = builder.stream(\r\n            \"orders\",\r\n            Consumed.with(Serdes.String(), orderSerde)\r\n        );\r\n\r\n        KStream<String, String> enrichedOrders = orders.join(\r\n            globalProfiles,\r\n            (orderKey, order) -> order.getUserId(),\r\n            (order, profile) -> \"Order for \" + profile.getName()\r\n                + \": $\" + order.getTotal()\r\n        );\r\n\r\n        enrichedOrders.to(\"enriched-orders\",\r\n            Produced.with(Serdes.String(), Serdes.String()));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-state-stores",
      children: "15. State Stores"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Component\r\npublic class StateStoreOperations {\r\n\r\n    @Autowired\r\n    public void buildStateStore(StreamsBuilder builder) {\r\n        StoreBuilder<KeyValueStore<String, Long>> countStore =\r\n            Stores.keyValueStoreBuilder(\r\n                Stores.persistentKeyValueStore(\"order-count\"),\r\n                Serdes.String(),\r\n                Serdes.Long()\r\n            );\r\n        builder.addStateStore(countStore);\r\n    }\r\n}\r\n\r\n@Component\r\npublic class ProcessorWithState {\r\n\r\n    @Autowired\r\n    public void buildProcessor(StreamsBuilder builder) {\r\n        JsonSerde<Order> orderSerde = new JsonSerde<>(Order.class);\r\n\r\n        // Custom processor that uses state store\r\n        builder.stream(\"orders\", Consumed.with(Serdes.String(), orderSerde))\r\n            .process(() -> new Processor<String, Order>() {\r\n                private StateStore stateStore;\r\n\r\n                @Override\r\n                public void init(ProcessorContext context) {\r\n                    this.stateStore = context.getStateStore(\"order-count\");\r\n                }\r\n\r\n                @Override\r\n                public void process(Record<String, Order> record) {\r\n                    String key = record.key();\r\n                    Long currentCount = (Long) stateStore.get(key);\r\n                    if (currentCount == null) {\r\n                        currentCount = 0L;\r\n                    }\r\n                    stateStore.put(key, currentCount + 1);\r\n                    System.out.println(key + \" count: \" + (currentCount + 1));\r\n                }\r\n\r\n                @Override\r\n                public void close() {}\r\n            }, \"order-count\");\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-full-application-properties",
      children: "16. Full Application Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\r\n  kafka:\r\n    bootstrap-servers: localhost:9092,localhost:9093\r\n    producer:\r\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\r\n      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer\r\n      acks: all\r\n      compression-type: snappy\r\n      batch-size: 32768\r\n      linger-ms: 10\r\n      enable-idempotence: true\r\n      properties:\r\n        max.request.size: 10485760\r\n        delivery.timeout.ms: 120000\r\n        request.timeout.ms: 30000\r\n    consumer:\r\n      group-id: spring-consumer\r\n      auto-offset-reset: earliest\r\n      enable-auto-commit: false\r\n      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer\r\n      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer\r\n      properties:\r\n        spring.json.trusted.packages: \"*\"\r\n        max.poll.records: 100\r\n        session.timeout.ms: 45000\r\n        heartbeat.interval.ms: 3000\r\n        max.poll.interval.ms: 300000\r\n    listener:\r\n      ack-mode: MANUAL_IMMEDIATE\r\n      concurrency: 3\r\n      poll-timeout: 3000\r\n      idle-between-polls: 100\r\n      type: single\r\n    streams:\r\n      application-id: spring-streams\r\n      properties:\r\n        num.stream.threads: 3\r\n        commit.interval.ms: 100\r\n        processing.guarantee: exactly_once_v2\r\n        state.dir: /tmp/kafka-streams\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-testing-kafka",
      children: "17. Testing Kafka"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\n@EmbeddedKafka(partitions = 1, topics = { \"test-topic\" })\r\nclass KafkaProducerTest {\r\n\r\n    @Autowired\r\n    private KafkaTemplate<String, Order> kafkaTemplate;\r\n\r\n    @Autowired\r\n    private EmbeddedKafkaBroker embeddedKafka;\r\n\r\n    @Test\r\n    void testSendAndReceive() throws Exception {\r\n        Order order = new Order(1L, \"test@test.com\", BigDecimal.TEN);\r\n\r\n        ListenableFuture<SendResult<String, Order>> future =\r\n            kafkaTemplate.send(\"test-topic\", order.getId().toString(), order);\r\n        SendResult<String, Order> result = future.get(10, TimeUnit.SECONDS);\r\n\r\n        assertThat(result.getRecordMetadata().topic()).isEqualTo(\"test-topic\");\r\n        assertThat(result.getRecordMetadata().offset()).isGreaterThanOrEqualTo(0);\r\n    }\r\n\r\n    @Test\r\n    void testSendWithHeaders() throws Exception {\r\n        Order order = new Order(2L, \"header@test.com\", BigDecimal.valueOf(50));\r\n        ProducerRecord<String, Order> record = new ProducerRecord<>(\r\n            \"test-topic\", order.getId().toString(), order);\r\n        record.headers().add(\"source\", \"test\".getBytes());\r\n\r\n        SendResult<String, Order> result =\r\n            kafkaTemplate.send(record).get(10, TimeUnit.SECONDS);\r\n        assertThat(result.getProducerRecord().headers().lastHeader(\"source\"))\r\n            .isNotNull();\r\n    }\r\n}\r\n\r\n@SpringBootTest\r\n@EmbeddedKafka(partitions = 1, topics = { \"listener-test\" })\r\nclass KafkaConsumerTest {\r\n\r\n    @Autowired\r\n    private KafkaTemplate<String, Order> kafkaTemplate;\r\n\r\n    @Autowired\r\n    private TestListener testListener;\r\n\r\n    @Test\r\n    void testListenerReceivesMessage() throws Exception {\r\n        Order order = new Order(3L, \"listener@test.com\", BigDecimal.valueOf(75));\r\n\r\n        kafkaTemplate.send(\"listener-test\", order.getId().toString(), order);\r\n\r\n        // Give listener time to process\r\n        Thread.sleep(2000);\r\n\r\n        assertThat(testListener.getLastReceivedOrder()).isNotNull();\r\n        assertThat(testListener.getLastReceivedOrder().getId()).isEqualTo(order.getId());\r\n    }\r\n\r\n    @Component\r\n    public static class TestListener {\r\n\r\n        private Order lastReceivedOrder;\r\n\r\n        @KafkaListener(topics = \"listener-test\", groupId = \"test-group\")\r\n        public void listen(Order order) {\r\n            this.lastReceivedOrder = order;\r\n        }\r\n\r\n        public Order getLastReceivedOrder() {\r\n            return lastReceivedOrder;\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\r\nUse a meaningful message key for partitioning → all messages with the same key go to the same partition, preserving order."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\r\nConsumer rebalancing stops all consumption in the group. Set ", (0,jsx_runtime.jsx)(_components.code, {
          children: "session.timeout.ms"
        }), " appropriately to avoid unnecessary rebalances."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\r\n", (0,jsx_runtime.jsx)(_components.code, {
          children: "@KafkaHandler"
        }), " on multiple methods within a single ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@KafkaListener"
        }), " dispatches messages by payload type → like a visitor pattern."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Kafka is a distributed event streaming platform built on an append-only log abstraction. Key takeaways:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Topics"
        }), " are partitioned for parallelism and replicated for durability. Configure partitions, replication factor, retention, and cleanup policy based on data characteristics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Producers"
        }), " use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KafkaTemplate"
        }), " with callbacks for reliability. Enable idempotence (", (0,jsx_runtime.jsx)(_components.code, {
          children: "enable.idempotence=true"
        }), ") and use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "acks=all"
        }), " for strong guarantees. Tune ", (0,jsx_runtime.jsx)(_components.code, {
          children: "batch.size"
        }), " and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "linger.ms"
        }), " for throughput."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consumers"
        }), " use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@KafkaListener"
        }), " with configurable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AckMode"
        }), ". ", (0,jsx_runtime.jsx)(_components.code, {
          children: "MANUAL_IMMEDIATE"
        }), " gives precise control. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DefaultErrorHandler"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "DeadLetterPublishingRecoverer"
        }), " for production error handling."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Exactly-once"
        }), " requires idempotent producers + transactional producers/consumers + ", (0,jsx_runtime.jsx)(_components.code, {
          children: "read_committed"
        }), " isolation. Configure ", (0,jsx_runtime.jsx)(_components.code, {
          children: "processing.guarantee=exactly_once_v2"
        }), " for Streams."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Schema Registry"
        }), " provides schema evolution with Avro, Protobuf, or JSON Schema — essential for production."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Kafka Streams"
        }), " enables stream processing within the same application. Use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KStream"
        }), " for record streams, ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KTable"
        }), " for changelog views, and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "GlobalKTable"
        }), " for fully replicated lookup tables. Windows (tumbling, hopping, sliding) enable time-based aggregations."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error handling"
        }), " with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@RetryableTopic"
        }), " simplifies retry infrastructure — it auto-creates retry topics and a DLT."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-1-topic-configuration",
      children: "Exercise 1: Topic Configuration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "NewTopic"
      }), " bean for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"user-events\""
      }), " with 8 partitions, 3 replicas, ", (0,jsx_runtime.jsx)(_components.code, {
        children: "cleanup.policy=delete"
      }), ", ", (0,jsx_runtime.jsx)(_components.code, {
        children: "retention.ms=86400000"
      }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
        children: "min.insync.replicas=2"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-2-kafkatemplate-with-callback",
      children: "Exercise 2: KafkaTemplate with Callback"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a producer that sends a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserEvent"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"user-events\""
      }), " and logs the partition and offset in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onSuccess"
      }), ", or logs the error in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "onFailure"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-3-kafkalistener-with-manual-ack",
      children: "Exercise 3: @KafkaListener with Manual Ack"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@KafkaListener"
      }), " that receives ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserEvent"
      }), " objects, processes them, and calls ", (0,jsx_runtime.jsx)(_components.code, {
        children: "acknowledgment.acknowledge()"
      }), " after processing. Do not auto-commit."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-4-batch-consumer",
      children: "Exercise 4: Batch Consumer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure a batch listener container factory and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@KafkaListener"
      }), " that receives a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "List<UserEvent>"
      }), " and processes them as a batch."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-5-custom-partitioner",
      children: "Exercise 5: Custom Partitioner"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Write a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "Partitioner"
      }), " that routes messages with keys starting with A-M to partition 0 and N-Z to partition 1."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-6-error-handler-with-dlt",
      children: "Exercise 6: Error Handler with DLT"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Implement a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DefaultErrorHandler"
      }), " that retries 3 times with exponential backoff, then publishes to a DLT using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DeadLetterPublishingRecoverer"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-7-retryabletopic",
      children: "Exercise 7: @RetryableTopic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@RetryableTopic"
      }), " with 5 attempts, 2-second initial backoff, 3x multiplier. Add a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@DltHandler"
      }), " method that logs the failure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-8-transactional-producer",
      children: "Exercise 8: Transactional Producer"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Configure a transactional producer with ", (0,jsx_runtime.jsx)(_components.code, {
        children: "TRANSACTIONAL_ID_CONFIG"
      }), ". Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "executeInTransaction"
      }), " to send two messages atomically."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-9-kstream-aggregation",
      children: "Exercise 9: KStream Aggregation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Build a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "StreamsBuilder"
      }), " pipeline that reads orders, groups by category, and produces a running total per category using ", (0,jsx_runtime.jsx)(_components.code, {
        children: "aggregate()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "exercise-10-kstream-ktable-join",
      children: "Exercise 10: KStream-KTable Join"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Create a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KStream"
      }), " of orders and a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KTable"
      }), " of user profiles. Inner-join them to enrich orders with user names, producing to an ", (0,jsx_runtime.jsx)(_components.code, {
        children: "\"enriched-orders\""
      }), " topic."]
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