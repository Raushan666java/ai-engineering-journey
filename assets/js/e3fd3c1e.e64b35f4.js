"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[51469],{

/***/ 59316
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_60_interview_microservices_a_md_e3f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-60-interview-microservices-a-md-e3f.json
const site_docs_courses_java_60_interview_microservices_a_md_e3f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/60-interview-microservices-a","title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","description":"Previous Microservices Interview Q&amp;A (cont.)","source":"@site/docs/courses/java/60-interview-microservices-a.md","sourceDirName":"courses/java","slug":"/java/60-interview-microservices-a","permalink":"/ai-engineering-journey/java/60-interview-microservices-a","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":64,"frontMatter":{"id":"60-interview-microservices-a","slug":"/java/60-interview-microservices-a","title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","sidebar_label":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","sidebar_position":64},"sidebar":"coursesSidebar","previous":{"title":"Chapter 59: Database Interview Q&A for Java & Spring Boot Developers","permalink":"/ai-engineering-journey/java/59-interview-databases"},"next":{"title":"── Multi-stage Dockerfile for a Spring Boot microservice ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-b"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/60-interview-microservices-a.md


const frontMatter = {
	id: '60-interview-microservices-a',
	slug: '/java/60-interview-microservices-a',
	title: 'Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)',
	sidebar_label: 'Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)',
	sidebar_position: 64
};
const contentTitle = 'Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)';

const assets = {

};

/*End Image Gallery*/


const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
}, {
  "value": "Q1: What is microservice architecture and how does it differ from monolithic architecture?",
  "id": "q1-what-is-microservice-architecture-and-how-does-it-differ-from-monolithic-architecture",
  "level": 3
}, {
  "value": "Q2: How do you decompose a monolith into microservices?",
  "id": "q2-how-do-you-decompose-a-monolith-into-microservices",
  "level": 3
}, {
  "value": "Q3: Compare synchronous and asynchronous communication between microservices",
  "id": "q3-compare-synchronous-and-asynchronous-communication-between-microservices",
  "level": 3
}, {
  "value": "Q4: How do you implement an API Gateway with Spring Cloud Gateway?",
  "id": "q4-how-do-you-implement-an-api-gateway-with-spring-cloud-gateway",
  "level": 3
}, {
  "value": "Q5: How does service discovery work with Eureka?",
  "id": "q5-how-does-service-discovery-work-with-eureka",
  "level": 3
}, {
  "value": "Q6: How do you externalize configuration with Spring Cloud Config?",
  "id": "q6-how-do-you-externalize-configuration-with-spring-cloud-config",
  "level": 3
}, {
  "value": "Q7: How do you implement distributed tracing with Micrometer and Zipkin?",
  "id": "q7-how-do-you-implement-distributed-tracing-with-micrometer-and-zipkin",
  "level": 3
}, {
  "value": "Q8: Explain the Saga pattern with a code example",
  "id": "q8-explain-the-saga-pattern-with-a-code-example",
  "level": 3
}, {
  "value": "Q6: What is the Strangler Fig pattern and when should you use it?",
  "id": "q6-what-is-the-strangler-fig-pattern-and-when-should-you-use-it",
  "level": 3
}, {
  "value": "Q7: How do you handle distributed caching in microservices?",
  "id": "q7-how-do-you-handle-distributed-caching-in-microservices",
  "level": 3
}, {
  "value": "Common Mistakes in Saga Pattern (GFG-Style)",
  "id": "common-mistakes-in-saga-pattern-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Not implementing compensating transactions",
  "id": "mistake-1-not-implementing-compensating-transactions",
  "level": 3
}, {
  "value": "Mistake 2: Using synchronous communication for saga steps",
  "id": "mistake-2-using-synchronous-communication-for-saga-steps",
  "level": 3
}, {
  "value": "Mistake 3: Not handling duplicate saga events",
  "id": "mistake-3-not-handling-duplicate-saga-events",
  "level": 3
}, {
  "value": "Choreography vs Orchestration Saga Comparison",
  "id": "choreography-vs-orchestration-saga-comparison",
  "level": 2
}, {
  "value": "Mermaid: Saga Patterns Comparison",
  "id": "mermaid-saga-patterns-comparison",
  "level": 2
}, {
  "value": "Chapter Quiz — Microservices Patterns",
  "id": "chapter-quiz--microservices-patterns",
  "level": 2
}, {
  "value": "Concept Comparison Table",
  "id": "concept-comparison-table",
  "level": 2
}, {
  "value": "Cross-Application Matrix",
  "id": "cross-application-matrix",
  "level": 2
}, {
  "value": "Chapter Quiz",
  "id": "chapter-quiz",
  "level": 2
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
        id: "chapter-60-microservices-interview-qa-part-a--q1q8",
        children: "Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/60-interview-microservices",
          children: "Microservices Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/60-interview-microservices-b",
          children: "Microservices Interview Q&A (cont.)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices-a.png",
        alt: "CQRS - Command Query Responsibility Segregation"
      })
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
        href: "../../assets/images/lessons/java/60-interview-microservices-a/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-a/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices-a/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-a/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices-a/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-a/visual-explanation.png",
          alt: "Visual concept guide",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Visual concept guide"
          }), "A connected explanation of the key ideas."]
        }), "\n  "]
      }), "\n"]
    }), "\n", "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-at-a-glance",
      children: "Chapter at a Glance"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Focus"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Questions"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Core Concepts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Foundational understanding"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Definitions, contrasts, trade-offs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Code Examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Compilable, runnable solutions"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real interview scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best Practices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Production-ready patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pitfalls to avoid"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    A[Core Concepts] --> B[Code Examples]\n    B --> C[Edge Cases]\n    C --> D[Best Practices]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q1-what-is-microservice-architecture-and-how-does-it-differ-from-monolithic-architecture",
      children: "Q1: What is microservice architecture and how does it differ from monolithic architecture?"
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pro Tip:"
        }), " In interviews, always start with the \"why\" before the \"how.\" Explaining the reasoning behind a design choice is more valuable than reciting syntax."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Remember:"
        }), " Code readability matters in interviews. Write clean, well-structured code with meaningful variable names."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Microservice architecture decomposes an application into small, independently deployable services that each own a specific business capability. A monolithic architecture packages all functionality into a single deployable unit."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Monolithic: everything in one service ──\n@RestController\n@RequestMapping(\"/api\")\npublic class MonolithController {\n    @Autowired private UserService userService;\n    @Autowired private OrderService orderService;\n    @Autowired private PaymentService paymentService;\n    @Autowired private NotificationService notificationService;\n}\n\n// ── Microservice: separate services, each with its own API ──\n// Service 1: user-service\n@SpringBootApplication\n@EnableEurekaClient\npublic class UserServiceApplication {\n    @RestController\n    @RequestMapping(\"/users\")\n    class UserController {\n        @GetMapping(\"/{id}\") public User getUser(@PathVariable Long id) { /* ... */ }\n    }\n}\n\n// Service 2: order-service\n@SpringBootApplication\n@EnableEurekaClient\npublic class OrderServiceApplication {\n    @RestController\n    @RequestMapping(\"/orders\")\n    class OrderController {\n        @PostMapping\n        public Order createOrder(@RequestBody OrderRequest req) {\n            // Calls payment-service and notification-service via HTTP/async\n        }\n    }\n}\n\n// Service 3: payment-service\n@SpringBootApplication\n@EnableEurekaClient\npublic class PaymentServiceApplication { /* ... */ }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key differences:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment"
        }), ": Monolith deploys as one WAR/JAR. Microservices deploy independently."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Scaling"
        }), ": Monolith scales the entire application. Microservices scale only the services under load."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database"
        }), ": Monolith typically uses one shared database. Microservices own their data (database-per-service)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Team structure"
        }), ": Monolith works for small teams. Microservices align with cross-functional teams owning one service each."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Communication"
        }), ": Monolith uses in-process method calls. Microservices use network calls (HTTP/gRPC/messaging)."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Failure isolation"
        }), ": Monolith failure takes down everything. Microservices fail independently (with circuit breakers)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start monolithic. Split into microservices only when you need independent scaling, deployment velocity, or team independence. Premature microservices add complexity without benefit."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-how-do-you-decompose-a-monolith-into-microservices",
      children: "Q2: How do you decompose a monolith into microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Decomposition follows Domain-Driven Design → identify bounded contexts and aggregate boundaries. Use the Strangler Fig pattern to migrate incrementally."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Phase 1: Identify bounded contexts through domain analysis ──\n// Original monolith entities often blur domain boundaries:\n@Entity\npublic class User {\n    private Long id;\n    private String name;\n    private String email;\n    private String shippingAddress;     // belongs to shipping context\n    private String preferredPayment;    // belongs to payment context\n    private List<Order> orders;         // belongs to order context\n}\n\n// ── Phase 2: Extract the first bounded context ──\n// New user-service keeps only user data\n@Entity\n@Table(name = \"users\")\npublic class User {\n    @Id @GeneratedValue private Long id;\n    private String name;\n    private String email;\n}\n\n// ── Phase 3: Create API contract between services ──\n// user-service exposes what order-service needs via a client\n@FeignClient(name = \"user-service\")\npublic interface UserServiceClient {\n    @GetMapping(\"/users/{id}\")\n    UserDto getUser(@PathVariable Long id);\n}\n\n// order-service stores only the reference (user_id), not embedded user data\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n    @Id @GeneratedValue private Long id;\n    private Long userId;                // FK reference → no User entity\n    private BigDecimal total;\n    private String status;\n}\n\n// ── Phase 4: Strangler Fig → route traffic gradually ──\n// API gateway routes /users/* to user-service, /orders/* to order-service\n// Both services can still share the old database during migration\n@Bean\npublic RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {\n    return builder.routes()\n        .route(\"users\", r -> r.path(\"/api/users/**\")\n            .uri(\"lb://user-service\"))\n        .route(\"orders\", r -> r.path(\"/api/orders/**\")\n            .uri(\"lb://order-service\"))\n        .build();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Extraction order: start with the bounded context that changes most frequently, has the simplest data, or requires independent scaling. Never extract services that share a database transaction → they belong in the same service."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-compare-synchronous-and-asynchronous-communication-between-microservices",
      children: "Q3: Compare synchronous and asynchronous communication between microservices"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Synchronous (HTTP/gRPC) gives immediate responses but couples services in time. Asynchronous (messaging) decouples services but adds eventual consistency and complexity."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Synchronous: HTTP via Feign Client ──\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n    @Autowired private InventoryServiceClient inventoryClient;\n\n    @Transactional\n    public Order createOrderSync(OrderRequest request) {\n        // Blocks until user-service responds\n        UserDto user = userClient.getUser(request.userId());\n        // Blocks until inventory-service responds\n        InventoryStatus stock = inventoryClient.checkStock(request.productId());\n\n        if (!stock.available()) throw new InsufficientStockException();\n        Order order = orderRepo.save(new Order(request));\n        inventoryClient.reserveStock(request.productId(), request.quantity());\n        return order;\n    }\n}\n\n// ── Asynchronous: Event-driven via Kafka ──\n@Service\npublic class OrderEventProducer {\n    @Autowired private KafkaTemplate<String, OrderEvent> kafka;\n\n    public void createOrderAsync(OrderRequest request) {\n        Order order = orderRepo.save(new Order(request));\n        // Fire-and-forget event → inventory-service consumes asynchronously\n        kafka.send(\"order.created\", new OrderCreatedEvent(order.getId(), request));\n    }\n}\n\n// inventory-service consumes the event independently\n@Component\npublic class InventoryEventConsumer {\n    @KafkaListener(topics = \"order.created\")\n    public void handleOrderCreated(OrderCreatedEvent event) {\n        // Deduct stock in its own transaction\n        inventoryService.deductStock(event.productId(), event.quantity());\n        // Emits inventory.reserved or inventory.failed event\n        kafkaTemplate.send(\"inventory.reserved\", new InventoryReservedEvent(event.orderId()));\n    }\n}\n\n// order-service handles the callback event\n@Component\npublic class OrderEventConsumer {\n    @KafkaListener(topics = \"inventory.reserved\")\n    public void handleInventoryReserved(InventoryReservedEvent event) {\n        orderService.updateStatus(event.orderId(), \"CONFIRMED\");\n    }\n}\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Synchronous"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Asynchronous"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower from caller's perspective"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tight (service must be up)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose (offline consumer tolerated)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (within transaction)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventual"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lower"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Higher (dead letter queues, retries)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (single flow)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Harder (scattered across consumers)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Backpressure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tricky"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural (queues buffer)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use synchronous for reads and commands where immediate response is required. Use asynchronous for cross-service workflows where the caller doesn't need an immediate answer."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-how-do-you-implement-an-api-gateway-with-spring-cloud-gateway",
      children: "Q4: How do you implement an API Gateway with Spring Cloud Gateway?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud Gateway provides routing, filtering, rate limiting, and cross-cutting concerns at a single entry point."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Main application ──\n@SpringBootApplication\npublic class ApiGatewayApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ApiGatewayApplication.class, args);\n    }\n}\n\n// ── Route configuration with filters ──\n@Configuration\npublic class GatewayConfig {\n\n    @Bean\n    public RouteLocator customRoutes(RouteLocatorBuilder builder) {\n        return builder.routes()\n            // Route 1: user-service with header stripping\n            .route(\"user-service\", r -> r.path(\"/api/users/**\")\n                .filters(f -> f\n                    .stripPrefix(1)\n                    .addRequestHeader(\"X-Gateway\", \"spring-cloud-gateway\")\n                    .retry(3)\n                    .circuitBreaker(config -> config\n                        .setName(\"userServiceCB\")\n                        .setFallbackUri(\"forward:/fallback/users\")))\n                .uri(\"lb://user-service\"))\n\n            // Route 2: order-service with rate limiting\n            .route(\"order-service\", r -> r.path(\"/api/orders/**\")\n                .filters(f -> f\n                    .stripPrefix(1)\n                    .requestRateLimiter(config -> config\n                        .setRateLimiter(redisRateLimiter())))\n                .uri(\"lb://order-service\"))\n\n            .build();\n    }\n\n    // ── Redis-based rate limiter ──\n    @Bean\n    public RedisRateLimiter redisRateLimiter() {\n        return new RedisRateLimiter(10, 20, 1);  // 10 requests/sec, burst 20\n    }\n}\n\n// ── Global filters (applied to every route) ──\n@Component\npublic class GlobalLoggingFilter implements GlobalFilter, Ordered {\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        long start = System.currentTimeMillis();\n        return chain.filter(exchange).then(Mono.fromRunnable(() -> {\n            log.info(\"{} {} -> {} ({}ms)\",\n                exchange.getRequest().getMethod(),\n                exchange.getRequest().getPath(),\n                exchange.getResponse().getStatusCode(),\n                System.currentTimeMillis() - start);\n        }));\n    }\n}\n\n// ── Security: validate JWT at the gateway ──\n@Component\npublic class JwtAuthFilter implements GatewayFilterFactory<Object> {\n    @Override\n    public GatewayFilter apply(Object config) {\n        return (exchange, chain) -> {\n            String auth = exchange.getRequest().getHeaders()\n                .getFirst(HttpHeaders.AUTHORIZATION);\n            if (auth == null || !auth.startsWith(\"Bearer \")) {\n                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);\n                return exchange.getResponse().setComplete();\n            }\n            Jwt jwt = jwtDecoder.decode(auth.substring(7));\n            // Add user info to downstream headers\n            exchange.getRequest().mutate()\n                .header(\"X-User-Id\", jwt.getSubject());\n            return chain.filter(exchange);\n        };\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "API Gateway responsibilities: routing, authentication, rate limiting, request/response transformation, circuit breaking, logging, and aggregation. Do NOT put business logic in the gateway → it's a routing layer, not an orchestration layer."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-does-service-discovery-work-with-eureka",
      children: "Q5: How does service discovery work with Eureka?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service discovery lets services find each other without hardcoded URLs. Each service registers itself with Eureka on startup and sends heartbeats to maintain its lease."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Eureka Server (the registry) ──\n@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(EurekaServerApplication.class, args);\n    }\n}\n\n// application.yml for Eureka server:\n// server.port: 8761\n// eureka.client.register-with-eureka: false\n// eureka.client.fetch-registry: false\n\n// ── Eureka Client (every microservice) ──\n@SpringBootApplication\n@EnableEurekaClient\npublic class OrderServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n\n// application.yml for clients:\n// spring.application.name: order-service\n// eureka.client.service-url.defaultZone: http://localhost:8761/eureka/\n// eureka.instance.prefer-ip-address: true\n// eureka.instance.lease-renewal-interval-in-seconds: 10\n// eureka.instance.lease-expiration-duration-in-seconds: 30\n\n// ── Using discovery to call another service ──\n@Service\npublic class OrderService {\n\n    @Autowired\n    private DiscoveryClient discoveryClient;\n\n    public String getUserEmail(Long userId) {\n        // Look up user-service instances dynamically\n        List<ServiceInstance> instances = discoveryClient\n            .getInstances(\"user-service\");\n\n        if (instances.isEmpty()) {\n            throw new ServiceUnavailableException(\"user-service not found\");\n        }\n\n        ServiceInstance instance = instances.get(0);\n        URI uri = instance.getUri();\n        String url = uri + \"/users/\" + userId + \"/email\";\n\n        // Use RestTemplate or WebClient to call the discovered URL\n        return restTemplate.getForObject(url, String.class);\n    }\n}\n\n// ── Load-balanced with @LoadBalanced ──\n@Configuration\npublic class ClientConfig {\n    @Bean\n    @LoadBalanced\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n}\n\n@Service\npublic class OrderService {\n    @Autowired\n    private RestTemplate restTemplate;  // automatically load-balanced via Eureka\n\n    public String getUserEmail(Long userId) {\n        // Just use the service name → Ribbon/Ribbon resolves via Eureka\n        return restTemplate.getForObject(\n            \"http://user-service/users/\" + userId + \"/email\",\n            String.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Eureka provides client-side load balancing. Each client maintains a local registry of available instances and rotates through them (round-robin by default). If a service instance fails to send a heartbeat within 3 lease periods, Eureka evicts it."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For production, run at least 2 Eureka servers in a multi-DC setup. Eureka is AP (availability + partition tolerance) → sacrifices consistency, which is fine for service discovery."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-externalize-configuration-with-spring-cloud-config",
      children: "Q6: How do you externalize configuration with Spring Cloud Config?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud Config Server serves configuration from a Git backend. Config clients fetch their configuration on startup and can refresh it at runtime."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Config Server ──\n@SpringBootApplication\n@EnableConfigServer\npublic class ConfigServerApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ConfigServerApplication.class, args);\n    }\n}\n\n// application.yml:\n// server.port: 8888\n// spring.cloud.config.server.git.uri: https://github.com/raushan666/config-repo\n// spring.cloud.config.server.git.searchPaths: '{application}'\n// spring.cloud.config.server.git.default-label: main\n\n// ── Git-backed config repository structure ──\n// config-repo/\n//   order-service.yml          (shared for all profiles)\n//   order-service-dev.yml      (dev profile)\n//   order-service-prod.yml     (prod profile)\n//   application.yml            (shared across all services)\n\n// order-service.yml in Git:\n// server:\n//   port: 8081\n// spring:\n//   datasource:\n//     url: ${DB_URL}\n//     username: ${DB_USER}\n//     password: ${DB_PASS}\n// order-service:\n//   order-timeout: 30s\n//   max-batch-size: 100\n\n// ── Config Client ──\n@SpringBootApplication\npublic class OrderServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n\n// bootstrap.yml (loaded before application.yml):\n// spring.application.name: order-service\n// spring.cloud.config.uri: http://localhost:8888\n// spring.cloud.config.fail-fast: true\n// spring.cloud.config.retry.initial-interval: 1000\n// spring.cloud.config.retry.max-attempts: 5\n\n// ── Using config values ──\n@RestController\n@RequestMapping(\"/orders\")\npublic class OrderController {\n\n    @Value(\"${order-service.order-timeout:30s}\")\n    private Duration orderTimeout;\n\n    @Value(\"${order-service.max-batch-size:100}\")\n    private int maxBatchSize;\n\n    @RefreshScope  // Enables runtime refresh without restart\n    @Component\n    public class OrderConfig {\n        @Value(\"${order-service.discount-rate:0}\")\n        private double discountRate;\n    }\n}\n\n// ── Trigger refresh ──\n@RestController\npublic class ConfigRefreshController {\n    @Autowired\n    private RefreshEndpoint refreshEndpoint;\n\n    @PostMapping(\"/actuator/refresh\")\n    public Set<String> refresh() {\n        return refreshEndpoint.refresh();  // Returns changed property keys\n    }\n}\n// POST http://order-service/actuator/refresh\n// Response: [\"order-service.discount-rate\"]\n\n// ── For automatic broadcast, use Spring Cloud Bus ──\n// POST http://config-server/actuator/busrefresh/order-service:**\n// Broadcasts refresh to all instances of order-service via RabbitMQ\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Config server enables centralized management, version history (through Git), and environment-specific overrides. Never store secrets in plain text → use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "{cipher}"
      }), " encrypted values with a symmetric key or Vault backend."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-implement-distributed-tracing-with-micrometer-and-zipkin",
      children: "Q7: How do you implement distributed tracing with Micrometer and Zipkin?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed tracing traces a request across multiple microservices using trace IDs and span IDs. Spring Cloud Sleuth (now Micrometer Tracing) integrates with Zipkin for visualization."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Dependencies (Spring Boot 3.x) ──\n// implementation 'io.micrometer:micrometer-tracing-bridge-brave'\n// implementation 'io.zipkin.reporter2:zipkin-reporter-brave'\n// implementation 'io.micrometer:micrometer-tracing'\n\n// ── Application configuration ──\n@SpringBootApplication\npublic class OrderServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(OrderServiceApplication.class, args);\n    }\n}\n\n// application.yml:\n// management.tracing.sampling.probability: 1.0   (1.0 = trace all requests)\n// spring.sleuth.reporter.zipkin.enabled: true    (for Sleuth 2.x, pre-micrometer)\n// Actually with Micrometer Tracing:\n// management.zipkin.tracing.endpoint: http://localhost:9411/api/v2/spans\n\n// ── Manual tracing in code ──\n@Service\npublic class OrderService {\n\n    @Autowired\n    private Tracer tracer;  // Micrometer Tracing Tracer\n\n    @Autowired\n    private UserServiceClient userClient;\n\n    public Order createOrder(OrderRequest request) {\n        // Create a custom span for business logic\n        Span span = tracer.nextSpan().name(\"create-order\").start();\n        try (Tracer.SpanInScope ws = tracer.withSpan(span)) {\n            span.tag(\"user.id\", String.valueOf(request.userId()));\n            span.tag(\"order.total\", request.total().toString());\n\n            // This HTTP call automatically propagates the trace ID\n            UserDto user = userClient.getUser(request.userId());\n\n            Order order = orderRepo.save(new Order(request));\n\n            span.tag(\"order.id\", String.valueOf(order.getId()));\n            return order;\n        } finally {\n            span.end();\n        }\n    }\n}\n\n// ── Trace propagation via RestTemplate ──\n@Configuration\npublic class TracingConfig {\n    @Bean\n    @LoadBalanced\n    public RestTemplate restTemplate() {\n        return new RestTemplate();\n    }\n\n    // Micrometer automatically instruments RestTemplate, WebClient, Kafka, etc.\n    // No manual header propagation needed with brave instrumentation\n}\n\n// ── View traces in Zipkin ──\n// docker run -d -p 9411:9411 openzipkin/zipkin\n// Then visit http://localhost:9411 → search by trace ID or service\n\n// ── Tag annotation with @SpanTag ──\n@Component\npublic class PaymentProcessor {\n    @NewSpan(name = \"process-payment\")\n    public PaymentResult process(\n            @SpanTag(\"payment.amount\") BigDecimal amount,\n            @SpanTag(\"payment.method\") String method) {\n        // Method arguments are automatically captured as span tags\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each trace has a unique trace ID (propagated across services via HTTP headers). Each service creates spans within that trace. Zipkin collects spans and shows them in a waterfall view, revealing which service caused the latency."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["With 100% sampling in dev (1.0) and 1-10% in prod, tracing adds negligible overhead. Pair traces with logs by including the trace ID in log output (", (0,jsx_runtime.jsx)(_components.code, {
        children: "%X{traceId}"
      }), ")."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-explain-the-saga-pattern-with-a-code-example",
      children: "Q8: Explain the Saga pattern with a code example"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Saga pattern manages distributed transactions across microservices by breaking them into a sequence of local transactions with compensating actions for rollback. Two implementations: choreography (each service emits/reacts to events) and orchestration (a coordinator drives the flow)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ═══════════════════════════════════════════════════════════════\n// CHOREOGRAPHY SAGA → services react to each other's events\n// ═══════════════════════════════════════════════════════════════\n\n// Step 1: Order Service creates order and emits event\n@Service\npublic class OrderSagaService {\n    @Autowired private OrderRepository orderRepo;\n    @Autowired private KafkaTemplate<String, Object> kafka;\n\n    @Transactional\n    public Order createOrder(OrderRequest req) {\n        Order order = new Order(req.userId(), req.productId(), req.quantity(), req.total());\n        order.setStatus(\"PENDING\");\n        order = orderRepo.save(order);\n\n        // Emit event → inventory service consumes this\n        kafka.send(\"saga.order-created\", new OrderCreatedEvent(order.getId(), req));\n        return order;\n    }\n\n    // Compensating handler: if inventory fails, cancel the order\n    @KafkaListener(topics = \"saga.inventory-failed\")\n    public void handleInventoryFailed(InventoryFailedEvent event) {\n        Order order = orderRepo.findById(event.orderId()).orElseThrow();\n        order.setStatus(\"CANCELLED\");\n        order.setFailureReason(event.reason());\n        orderRepo.save(order);\n    }\n}\n\n// Step 2: Inventory Service reserves stock\n@Service\npublic class InventorySagaService {\n    @Autowired private InventoryRepository invRepo;\n    @Autowired private KafkaTemplate<String, Object> kafka;\n\n    @KafkaListener(topics = \"saga.order-created\")\n    public void handleOrderCreated(OrderCreatedEvent event) {\n        try {\n            ProductInventory inv = invRepo.findByProductId(event.productId());\n            inv.reserve(event.quantity());\n            invRepo.save(inv);\n            kafka.send(\"saga.inventory-reserved\",\n                new InventoryReservedEvent(event.orderId()));\n        } catch (Exception e) {\n            kafka.send(\"saga.inventory-failed\",\n                new InventoryFailedEvent(event.orderId(), e.getMessage()));\n        }\n    }\n}\n\n// Step 3: Payment Service processes payment\n@Service\npublic class PaymentSagaService {\n    @KafkaListener(topics = \"saga.inventory-reserved\")\n    public void handleInventoryReserved(InventoryReservedEvent event) {\n        try {\n            paymentService.charge(event.orderId(), event.total());\n            kafka.send(\"saga.payment-completed\",\n                new PaymentCompletedEvent(event.orderId()));\n        } catch (Exception e) {\n            // Compensating: release inventory\n            kafka.send(\"saga.payment-failed\",\n                new PaymentFailedEvent(event.orderId()));\n        }\n    }\n\n    // Compensating: refund if downstream fails\n    @KafkaListener(topics = \"saga.refund-requested\")\n    public void handleRefundRequested(RefundRequestedEvent event) {\n        paymentService.refund(event.orderId());\n    }\n}\n\n// ═══════════════════════════════════════════════════════════════\n// ORCHESTRATION SAGA → a coordinator manages the flow\n// ═══════════════════════════════════════════════════════════════\n\n// Saga Orchestrator\n@Component\npublic class OrderSagaOrchestrator {\n    @Autowired private KafkaTemplate<String, Object> kafka;\n    @Autowired private SagaStateRepository sagaStateRepo;\n\n    @Transactional\n    public void startSaga(CreateOrderCommand cmd) {\n        SagaState state = new SagaState(cmd.orderId(), \"ORDER_CREATED\");\n        sagaStateRepo.save(state);\n        kafka.send(\"saga.commands\", new ReserveInventoryCmd(cmd.orderId(), cmd.productId(), cmd.quantity()));\n    }\n\n    @KafkaListener(topics = \"saga.events\")\n    public void handleEvent(SagaEvent event) {\n        SagaState state = sagaStateRepo.findById(event.sagaId()).orElseThrow();\n\n        switch (state.currentStep()) {\n            case \"ORDER_CREATED\" -> {\n                if (event instanceof InventoryReservedEvent) {\n                    state.advanceTo(\"INVENTORY_RESERVED\");\n                    kafka.send(\"saga.commands\", new ProcessPaymentCmd(event.orderId()));\n                } else if (event instanceof InventoryFailedEvent) {\n                    state.fail(event.reason());\n                    // Saga complete → order already marked PENDING, no action needed\n                }\n            }\n            case \"INVENTORY_RESERVED\" -> {\n                if (event instanceof PaymentCompletedEvent) {\n                    state.advanceTo(\"PAYMENT_COMPLETED\");\n                    kafka.send(\"saga.commands\", new ConfirmOrderCmd(event.orderId()));\n                } else if (event instanceof PaymentFailedEvent) {\n                    // Compensate: release inventory\n                    kafka.send(\"saga.commands\", new ReleaseInventoryCmd(event.orderId()));\n                    state.compensate();\n                }\n            }\n            default -> state.fail(\"Unknown step: \" + state.currentStep());\n        }\n        sagaStateRepo.save(state);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Saga handles long-running transactions without locking resources. Choreography works when the flow is simple (3-4 services). Orchestration is better for complex workflows with branching and compensations. Never use XA/2PC transactions across services → that defeats the purpose of microservices."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-what-is-the-strangler-fig-pattern-and-when-should-you-use-it",
      children: "Q6: What is the Strangler Fig pattern and when should you use it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Strangler Fig pattern incrementally replaces a monolithic system with microservices by gradually routing functionality to new services while the old system remains operational. Named after fig trees that grow around and eventually replace their host tree."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Step 1: Introduce a proxy/routing layer ──\n@Component\npublic class MonolithRoutingFilter implements Filter {\n\n    private static final Set<String> MIGRATED_PATHS = Set.of(\n        \"/api/v2/products\",    // New microservice handles products\n        \"/api/v2/search\"       // New microservice handles search\n    );\n\n    @Override\n    public void doFilter(ServletRequest request, ServletResponse response,\n                         FilterChain chain) {\n        HttpServletRequest httpRequest = (HttpServletRequest) request;\n        String path = httpRequest.getRequestURI();\n\n        if (MIGRATED_PATHS.contains(path)) {\n            // Route to new microservice\n            forwardToMicroservice(httpRequest, response);\n        } else {\n            // Route to old monolith\n            chain.doFilter(request, response);\n        }\n    }\n}\n\n// ── Step 2: Gradually expand migrated paths ──\n// Step 3: When all paths are migrated → decommission the monolith\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Migration phases:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Coexist:"
        }), " New features built as microservices. Monolith handles old features."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Strangle:"
        }), " Routes for old features are gradually redirected to new services."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Decommission:"
        }), " Once all routes point to microservices, the monolith is shut down."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Key principles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never big-bang rewrite — strangulation reduces risk"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Each migrated feature must be independently deployable"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maintain backward compatibility during transition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use feature flags to toggle between old and new implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Monitor both systems in parallel until migration is complete"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-how-do-you-handle-distributed-caching-in-microservices",
      children: "Q7: How do you handle distributed caching in microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed caching in microservices requires coordinating cache state across service instances. The most common approach is a shared Redis cluster with cache-aside pattern."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache-aside (lazy population) — the standard pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class ProductService {\n\n    private final RedisTemplate<String, ProductDto> redis;\n    private final ProductRepository productRepo;\n    private static final Duration CACHE_TTL = Duration.ofMinutes(30);\n\n    public ProductDto getProduct(Long id) {\n        String key = \"product:\" + id;\n\n        // 1. Try cache\n        ProductDto cached = redis.opsForValue().get(key);\n        if (cached != null) return cached;\n\n        // 2. Cache miss — load from DB\n        Product product = productRepo.findById(id)\n            .orElseThrow(() -> new ProductNotFoundException(id));\n        ProductDto dto = ProductDto.from(product);\n\n        // 3. Populate cache\n        redis.opsForValue().set(key, dto, CACHE_TTL);\n        return dto;\n    }\n\n    @Transactional\n    public ProductDto updateProduct(Long id, UpdateProductRequest req) {\n        // 1. Update DB\n        Product product = productRepo.findById(id).orElseThrow();\n        product.setName(req.name());\n        product.setPrice(req.price());\n        productRepo.save(product);\n\n        // 2. Invalidate cache (or update it)\n        String key = \"product:\" + id;\n        redis.delete(key);  // Next read will repopulate\n\n        return ProductDto.from(product);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache invalidation strategies:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TTL-based:"
        }), " Simplest — entries expire after a fixed duration. Accept some staleness."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-through:"
        }), " Update cache on every write. Consistent but slower writes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Write-behind:"
        }), " Async cache update. Fast writes but risk of data loss."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event-based invalidation:"
        }), " Publish cache invalidation events when data changes."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Cache invalidation via event\n@Service\npublic class ProductEventConsumer {\n\n    @KafkaListener(topics = \"product-events\")\n    public void onProductUpdated(ProductUpdatedEvent event) {\n        String key = \"product:\" + event.productId();\n        redis.delete(key);\n        System.out.println(\"Cache invalidated: \" + key);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Cache stampede prevention:"
      }), " See Q24 in the previous chapter for distributed locking patterns."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-saga-pattern-gfg-style",
      children: "Common Mistakes in Saga Pattern (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-not-implementing-compensating-transactions",
      children: "Mistake 1: Not implementing compensating transactions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Saga only has forward steps, no rollback\n// If payment succeeds but inventory fails → money is lost!\n\n// ✅ CORRECT: Every forward action has a compensating action\n@Component\npublic class OrderSagaOrchestrator {\n    // Forward actions (as defined above)\n    public void process(Order order) {\n        createOrder(order);\n        reserveInventory(order);\n        processPayment(order);\n    }\n\n    // Compensating actions (for each forward step)\n    public void compensate(Order order) {\n        refundPayment(order);        // Reverse payment\n        releaseInventory(order);     // Release reserved stock\n        cancelOrder(order);          // Mark order as failed\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-using-synchronous-communication-for-saga-steps",
      children: "Mistake 2: Using synchronous communication for saga steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Sequential synchronous calls → tight coupling, cascading failures\n// Order → Payment (REST) → wait → Inventory (REST) → wait → Notification (REST)\n\n// ✅ CORRECT: Event-driven saga steps\n// Order → publish OrderCreated → Payment consumes, publishes PaymentProcessed →\n// Inventory consumes, publishes InventoryReserved → etc.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-not-handling-duplicate-saga-events",
      children: "Mistake 3: Not handling duplicate saga events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: No idempotency check → duplicate events double-process\n// If Kafka re-delivers a PaymentProcessed event, inventory is deducted twice\n\n// ✅ CORRECT: Check idempotency before each saga step\npublic void handlePaymentProcessed(PaymentProcessedEvent event) {\n    if (sagaStateRepo.existsBySagaIdAndStep(event.sagaId(), \"PAYMENT\")) {\n        return;  // Already processed this step\n    }\n    // Process the step\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "choreography-vs-orchestration-saga-comparison",
      children: "Choreography vs Orchestration Saga Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Choreography (Event-driven)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Orchestration (Command-driven)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coordination"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Decentralized — each service reacts to events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized — orchestrator tells services what to do"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose — services only know their events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tighter — services depend on orchestrator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low for simple flows (3-4 steps)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manageable for complex flows"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard — no central coordinator to inspect"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier — orchestrator logs each step"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Flow visibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires event tracing (distributed)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized state in orchestrator"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Failure handling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each service emits failure events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Orchestrator triggers compensating actions"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex — need to run multiple services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simpler — mock orchestrator to drive tests"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple linear pipelines"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex branching workflows"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Rule of thumb:"
      }), " If your saga has more than 5 steps or requires branching/conditional logic, use orchestration. Otherwise, choreography is simpler."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-saga-patterns-comparison",
      children: "Mermaid: Saga Patterns Comparison"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart LR\n    subgraph Choreography\n        direction LR\n        A1[Order Service] -->|OrderCreated| B1[Payment Service]\n        B1 -->|PaymentProcessed| C1[Inventory Service]\n        C1 -->|InventoryReserved| D1[Shipping Service]\n        D1 -->|Shipped| E1[Complete]\n    end\n\n    subgraph Orchestration\n        direction LR\n        O[Orchestrator<br/>Saga Manager]\n        A2[Order Service]\n        B2[Payment Service]\n        C2[Inventory Service]\n        D2[Shipping Service]\n\n        O -->|Create Order| A2\n        O -->|Process Payment| B2\n        O -->|Reserve Inventory| C2\n        O -->|Arrange Shipping| D2\n        A2 -->|OrderCreated| O\n        B2 -->|PaymentProcessed| O\n        C2 -->|InventoryReserved| O\n        D2 -->|Shipped| O\n    end\n\n    style O fill:#ff9800,color:#fff\n    style A1 fill:#2196f3,color:#fff\n    style B1 fill:#2196f3,color:#fff\n    style C1 fill:#2196f3,color:#fff\n    style D1 fill:#2196f3,color:#fff\n    style A2 fill:#4caf50,color:#fff\n    style B2 fill:#4caf50,color:#fff\n    style C2 fill:#4caf50,color:#fff\n    style D2 fill:#4caf50,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--microservices-patterns",
      children: "Chapter Quiz — Microservices Patterns"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the Strangler Fig pattern used for?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Improving database performance"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Incrementally migrating a monolith to microservices"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Implementing service discovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Handling distributed transactions"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Incrementally migrating a monolith to microservices.** The Strangler Fig pattern routes traffic to new services gradually while the monolith stays operational, reducing risk compared to a big-bang rewrite.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["In the cache-aside pattern, what happens on a cache miss?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) An error is returned to the client"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) The data is loaded from the database and the cache is populated"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) The cache is bypassed permanently"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) A new cache node is created"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) The data is loaded from the database and the cache is populated.** On cache miss, the application loads data from the database, stores it in the cache with a TTL, and returns the result. Subsequent reads for the same key hit the cache.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the key difference between choreography and orchestration sagas?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Choreography is faster"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Choreography has no central coordinator; orchestration has a central saga manager"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Orchestration requires Kafka"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Choreography is only for REST APIs"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Choreography has no central coordinator.** In choreography, each service emits events that other services react to. In orchestration, a central orchestrator tells each service what to do and tracks the overall state.\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "concept-comparison-table",
      children: "Concept Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Topic"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Key Points"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Interview Frequency"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "OOP"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encapsulation, Inheritance, Polymorphism, Abstraction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every interview"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Collections"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "List, Set, Map, Queue, Deque"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "9/10 interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Concurrency"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "synchronized, volatile, Locks, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "7/10 senior interviews"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Java 8+"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lambdas, Streams, Optional, CompletableFuture"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8/10 interviews"
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
            children: "Skill"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Junior (0-2yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Mid (3-5yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Senior (6-9yr)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Staff (10+)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OOP & Design Patterns"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Define and identify"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Apply and combine"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Evaluate and refactor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create and teach"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Performance trade-offs"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrent collections"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Custom implementations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Concurrency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Syntax knowledge"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Write thread-safe code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Debug deadlocks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Design concurrent systems"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the difference between equals() and == in Java?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are identical"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) equals() compares values, == compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) == compares values, equals() compares references"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) equals() is for primitives, == is for objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**B) equals() compares logical equality (overridable), == compares reference equality.**\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "2",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which collection guarantees insertion order?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) HashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) TreeMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) LinkedHashMap"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) HashSet"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer</summary>\n**C) LinkedHashMap.** LinkedHashMap maintains a doubly-linked list of entries to preserve insertion order.\n"
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What keyword prevents a method from being overridden?\n", (0,jsx_runtime.jsxs)(_components.ul, {
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