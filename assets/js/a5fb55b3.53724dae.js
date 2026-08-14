"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[61306],{

/***/ 42120
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_60_interview_microservices_md_a5f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-60-interview-microservices-md-a5f.json
const site_docs_courses_java_60_interview_microservices_md_a5f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/60-interview-microservices","title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","description":"Previous Microservices Interview Q&amp;A (cont.)","source":"@site/docs/courses/java/60-interview-microservices.md","sourceDirName":"courses/java","slug":"/java/60-interview-microservices","permalink":"/ai-engineering-journey/java/60-interview-microservices","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":68,"frontMatter":{"id":"60-interview-microservices","slug":"/java/60-interview-microservices","title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","sidebar_label":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","sidebar_position":68},"sidebar":"course-java","previous":{"title":"── Istio DestinationRule (circuit breaker at mesh level) ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-d"},"next":{"title":"Security Interview Q&A","permalink":"/ai-engineering-journey/java/61-interview-security"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/60-interview-microservices.md


const frontMatter = {
	id: '60-interview-microservices',
	slug: '/java/60-interview-microservices',
	title: 'Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)',
	sidebar_label: 'Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)',
	sidebar_position: 68
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
  "value": "Q9: What is CQRS and how do you implement it?",
  "id": "q9-what-is-cqrs-and-how-do-you-implement-it",
  "level": 3
}, {
  "value": "Q10: How do you implement a circuit breaker with Resilience4j?",
  "id": "q10-how-do-you-implement-a-circuit-breaker-with-resilience4j",
  "level": 3
}, {
  "value": "Q11: How do you handle service-to-service authentication with OAuth2 and JWT?",
  "id": "q11-how-do-you-handle-service-to-service-authentication-with-oauth2-and-jwt",
  "level": 3
}, {
  "value": "Q12: How do you implement event-driven microservices with Kafka?",
  "id": "q12-how-do-you-implement-event-driven-microservices-with-kafka",
  "level": 3
}, {
  "value": "Q13: How do you handle containerization for microservices with Docker?",
  "id": "q13-how-do-you-handle-containerization-for-microservices-with-docker",
  "level": 3
}, {
  "value": "Q14: How do you deploy microservices on Kubernetes?",
  "id": "q14-how-do-you-deploy-microservices-on-kubernetes",
  "level": 3
}, {
  "value": "Q15: Compare deployment strategies: rolling, blue/green, and canary",
  "id": "q15-compare-deployment-strategies-rolling-bluegreen-and-canary",
  "level": 3
}, {
  "value": "Q16: How do you monitor microservices with Prometheus and Grafana?",
  "id": "q16-how-do-you-monitor-microservices-with-prometheus-and-grafana",
  "level": 3
}, {
  "value": "Q17: How do you implement contract testing with Spring Cloud Contract?",
  "id": "q17-how-do-you-implement-contract-testing-with-spring-cloud-contract",
  "level": 3
}, {
  "value": "Q18: How do you handle database-per-service with shared data concerns?",
  "id": "q18-how-do-you-handle-database-per-service-with-shared-data-concerns",
  "level": 3
}, {
  "value": "Q19: What are common microservices anti-patterns and how do you avoid them?",
  "id": "q19-what-are-common-microservices-anti-patterns-and-how-do-you-avoid-them",
  "level": 3
}, {
  "value": "Q20: How do you test microservices end-to-end?",
  "id": "q20-how-do-you-test-microservices-end-to-end",
  "level": 3
}, {
  "value": "Q21: What is a service mesh and when would you use Istio?",
  "id": "q21-what-is-a-service-mesh-and-when-would-you-use-istio",
  "level": 3
}, {
  "value": "Q22: How do you implement structured logging and log aggregation?",
  "id": "q22-how-do-you-implement-structured-logging-and-log-aggregation",
  "level": 3
}, {
  "value": "Q23: How do you handle database migrations across multiple microservices?",
  "id": "q23-how-do-you-handle-database-migrations-across-multiple-microservices",
  "level": 3
}, {
  "value": "Q24: How do you implement idempotency in microservices?",
  "id": "q24-how-do-you-implement-idempotency-in-microservices",
  "level": 3
}, {
  "value": "Q25: What distributed caching strategies work for microservices?",
  "id": "q25-what-distributed-caching-strategies-work-for-microservices",
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
          href: "/ai-engineering-journey/java/59-interview-databases-d",
          children: "Databases Interview Q&A (cont.)"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/60-interview-microservices-a",
          children: "Microservices Interview Q&A (cont.)"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices.png",
        alt: "Microservices Interview Topics - Mindmap"
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
        href: "../../assets/images/lessons/java/60-interview-microservices/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices/visual-explanation.png",
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
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-cqrs-and-how-do-you-implement-it",
      children: "Q9: What is CQRS and how do you implement it?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CQRS (Command Query Responsibility Segregation) separates write models (commands) from read models (queries). Each model has its own database schema, optimized for its operation."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Command side: focused on writes ──\n@RestController\n@RequestMapping(\"/orders/commands\")\npublic class OrderCommandController {\n    @Autowired private OrderCommandService commandService;\n\n    @PostMapping\n    public CompletableFuture<UUID> createOrder(@RequestBody CreateOrderCommand cmd) {\n        return commandService.handle(cmd);  // Returns order ID immediately\n    }\n\n    @PostMapping(\"/{id}/cancel\")\n    public void cancelOrder(@PathVariable UUID id) {\n        commandService.handle(new CancelOrderCommand(id));\n    }\n}\n\n@Service\npublic class OrderCommandService {\n    @Autowired private OrderCommandRepository cmdRepo;\n    @Autowired private EventPublisher eventPublisher;\n\n    @Transactional\n    public CompletableFuture<UUID> handle(CreateOrderCommand cmd) {\n        OrderWriteModel order = new OrderWriteModel(\n            cmd.userId(), cmd.productId(), cmd.quantity(), cmd.total()\n        );\n        order = cmdRepo.save(order);\n\n        // Publish event for the query side to consume\n        eventPublisher.publish(new OrderCreatedEvent(\n            order.getId(), cmd.userId(), cmd.productId(),\n            cmd.quantity(), cmd.total()\n        ));\n        return CompletableFuture.completedFuture(order.getId());\n    }\n}\n\n// Write-side repository (simple, no complex joins needed)\n@Repository\npublic interface OrderCommandRepository extends JpaRepository<OrderWriteModel, UUID> {}\n\n// ── Query side: optimized for reads ──\n@RestController\n@RequestMapping(\"/orders/queries\")\npublic class OrderQueryController {\n    @Autowired private OrderQueryService queryService;\n\n    @GetMapping(\"/{id}\")\n    public OrderReadModel getOrder(@PathVariable UUID id) {\n        return queryService.findById(id);\n    }\n\n    @GetMapping\n    public Page<OrderReadModel> listOrders(\n            @RequestParam UUID userId,\n            @PageableDefault(size = 20) Pageable pageable) {\n        return queryService.findByUserId(userId, pageable);\n    }\n}\n\n// Query-side uses a denormalized read model\n@Entity\n@Table(name = \"order_read_model\")\npublic class OrderReadModel {\n    @Id private UUID id;\n    private Long userId;\n    private String userName;        // denormalized from user-service\n    private String productName;     // denormalized from product-service\n    private int quantity;\n    private BigDecimal total;\n    private String status;\n    private Instant createdAt;\n    private Instant updatedAt;\n}\n\n// Query-side event consumer keeps the read model in sync\n@Component\npublic class OrderEventConsumer {\n    @Autowired private OrderQueryRepository queryRepo;\n\n    @Transactional\n    @KafkaListener(topics = \"order.events\")\n    public void handleOrderEvent(OrderEvent event) {\n        if (event instanceof OrderCreatedEvent e) {\n            OrderReadModel model = new OrderReadModel();\n            model.setId(e.orderId());\n            model.setUserId(e.userId());\n            model.setProductName(productService.getName(e.productId()));  // denormalize\n            model.setQuantity(e.quantity());\n            model.setTotal(e.total());\n            model.setStatus(\"PENDING\");\n            model.setCreatedAt(Instant.now());\n            queryRepo.save(model);\n        } else if (event instanceof OrderStatusChangedEvent e) {\n            queryRepo.findById(e.orderId()).ifPresent(model -> {\n                model.setStatus(e.newStatus());\n                model.setUpdatedAt(Instant.now());\n            });\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CQRS adds significant complexity (eventual consistency, duplicate data, two models to maintain). Use it only when reads and writes have fundamentally different shapes → for example, writes are simple INSERT/UPDATE but reads need complex aggregations, joins, or full-text search."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apply CQRS to individual bounded contexts, not the entire system. Most services do not need CQRS → a well-designed JPA model with DTO projections is sufficient."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-implement-a-circuit-breaker-with-resilience4j",
      children: "Q10: How do you implement a circuit breaker with Resilience4j?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Resilience4j provides circuit breakers, retries, rate limiters, bulkheads, and time limiters. The circuit breaker prevents cascading failures by failing fast when a downstream service is unhealthy."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Configuration ──\n// application.yml:\n// resilience4j.circuitbreaker:\n//   instances:\n//     userService:\n//       sliding-window-size: 10\n//       sliding-window-type: COUNT_BASED\n//       minimum-number-of-calls: 5\n//       failure-rate-threshold: 50\n//       wait-duration-in-open-state: 30s\n//       permitted-number-of-calls-in-half-open-state: 3\n//       record-exceptions:\n//         - java.io.IOException\n//         - org.springframework.web.client.HttpServerErrorException\n//       ignore-exceptions:\n//         - org.springframework.web.client.HttpClientErrorException  (4xx → not a circuit failure)\n\n// ── Registration ──\n@Configuration\npublic class Resilience4jConfig {\n    @Bean\n    public Customizer<Resilience4JCircuitBreakerFactory> defaultConfig() {\n        return factory -> factory.configureDefault(id -> new Resilience4JConfigBuilder(id)\n            .circuitBreakerConfig(CircuitBreakerConfig.custom()\n                .slidingWindowSize(10)\n                .failureRateThreshold(50)\n                .waitDurationInOpenState(Duration.ofSeconds(30))\n                .permittedNumberOfCallsInHalfOpenState(3)\n                .build())\n            .timeLimiterConfig(TimeLimiterConfig.custom()\n                .timeoutDuration(Duration.ofSeconds(4))\n                .build())\n            .build());\n    }\n}\n\n// ── Usage with @CircuitBreaker annotation ──\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n\n    @CircuitBreaker(name = \"userService\", fallbackMethod = \"getUserFallback\")\n    @TimeLimiter(name = \"userService\")\n    public CompletableFuture<UserDto> getUser(Long userId) {\n        return CompletableFuture.supplyAsync(() ->\n            userClient.getUser(userId));\n    }\n\n    // Fallback must match the return type and parameters\n    public CompletableFuture<UserDto> getUserFallback(Long userId, Throwable t) {\n        log.warn(\"user-service unavailable, returning cached user: {}\", t.getMessage());\n        return CompletableFuture.completedFuture(\n            new UserDto(userId, \"Cached User\", \"cached@example.com\"));\n    }\n}\n\n// ── Manual circuit breaker usage ──\n@Service\npublic class PaymentService {\n    private final CircuitBreaker circuitBreaker;\n\n    public PaymentService(CircuitBreakerRegistry registry) {\n        this.circuitBreaker = registry.circuitBreaker(\"paymentService\");\n    }\n\n    public PaymentResult processPayment(PaymentRequest req) {\n        // Decorate supplier with circuit breaker\n        Supplier<PaymentResult> decorated = CircuitBreaker\n            .decorateSupplier(circuitBreaker, () -> callPaymentProvider(req));\n\n        // Also add retry\n        Retry retry = Retry.ofDefaults(\"paymentRetry\");\n        Supplier<PaymentResult> retryAndCircuit = Retry\n            .decorateSupplier(retry, decorated);\n\n        // Try with fallback\n        Try<PaymentResult> result = Try.ofSupplier(retryAndCircuit)\n            .recover(throwable -> PaymentResult.failed(\"Payment unavailable\"));\n\n        return result.get();\n    }\n}\n\n// ── Monitoring circuit breaker state ──\n@Component\npublic class CircuitBreakerMonitor {\n    public CircuitBreakerMonitor(CircuitBreakerRegistry registry) {\n        // Log every state transition\n        registry.getAllCircuitBreakers().forEach(cb -> {\n            cb.getEventPublisher()\n                .onStateTransition(event ->\n                    log.info(\"CircuitBreaker {}: {} -> {}\",\n                        event.getCircuitBreakerName(),\n                        event.getOldState(),\n                        event.getNewState()));\n        });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Circuit breaker states: CLOSED (normal, pass through) → OPEN (fail fast, no calls) → HALF_OPEN (allow limited probe calls) → back to CLOSED or OPEN. Use it on every cross-service call. Without circuit breakers, a cascading failure in one service can take down the entire system."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-do-you-handle-service-to-service-authentication-with-oauth2-and-jwt",
      children: "Q11: How do you handle service-to-service authentication with OAuth2 and JWT?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "OAuth2 with JWT provides token-based authentication. The client credentials grant is the standard pattern for service-to-service communication."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Authorization Server config (Spring Authorization Server) ──\n@Configuration\n@EnableAuthorizationServer\npublic class AuthServerConfig {\n    @Bean\n    public RegisteredClientRepository registeredClientRepository() {\n        RegisteredClient orderService = RegisteredClient.withId(UUID.randomUUID().toString())\n            .clientId(\"order-service\")\n            .clientSecret(\"{noop}order-secret\")  // noop = plain text → use BCrypt in prod\n            .authorizationGrantType(ClientCredentialsGrant.INSTANCE)\n            .scope(\"order:read\")\n            .scope(\"order:write\")\n            .build();\n        return new InMemoryRegisteredClientRepository(orderService);\n    }\n}\n\n// ── Resource Server config (each microservice validates tokens) ──\n// application.yml:\n// spring.security.oauth2.resourceserver.jwt:\n//   issuer-uri: http://localhost:9000\n//   jwk-set-uri: http://localhost:9000/.well-known/jwks.json\n\n@Configuration\n@EnableWebSecurity\npublic class ResourceServerConfig {\n    @Bean\n    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n        http\n            .authorizeHttpRequests(auth -> auth\n                .requestMatchers(\"/public/**\").permitAll()\n                .requestMatchers(HttpMethod.GET, \"/orders/**\").hasAuthority(\"SCOPE_order:read\")\n                .requestMatchers(HttpMethod.POST, \"/orders/**\").hasAuthority(\"SCOPE_order:write\")\n                .anyRequest().authenticated()\n            )\n            .oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt);\n        return http.build();\n    }\n}\n\n// ── Client credentials flow (service calls another service) ──\n@Service\npublic class ServiceClient {\n    @Autowired\n    private WebClient webClient;\n\n    @Autowired\n    private ClientRegistrationRepository registrations;\n\n    public String callService(String targetClientId, String path) {\n        // Get the client credentials grant for the calling service\n        OAuth2AuthorizedClient client = authorizeClient(targetClientId);\n\n        return webClient.get()\n            .uri(\"http://target-service\" + path)\n            .headers(h -> h.setBearerAuth(client.getAccessToken().getTokenValue()))\n            .retrieve()\n            .bodyToMono(String.class)\n            .block();\n    }\n\n    private OAuth2AuthorizedClient authorizeClient(String targetClientId) {\n        // Use OAuth2AuthorizedClientManager to get/refresh tokens\n        ClientRegistration reg = registrations.findByRegistrationId(targetClientId);\n        OAuth2ClientCredentialsGrantRequest request =\n            new OAuth2ClientCredentialsGrantRequest(reg);\n        OAuth2AccessTokenResponse response = restTemplate.postForObject(\n            reg.getProviderDetails().getTokenUri(),\n            request, OAuth2AccessTokenResponse.class);\n        return new OAuth2AuthorizedClient(reg, reg.getClientId(),\n            response.getAccessToken());\n    }\n}\n\n// ── Extract user context from JWT ──\n@RestController\n@RequestMapping(\"/orders\")\npublic class OrderController {\n    @GetMapping(\"/current\")\n    public String getCurrentUser(@AuthenticationPrincipal Jwt jwt) {\n        // JWT contains: sub (user ID), claims (roles, scopes)\n        String userId = jwt.getSubject();\n        String email = jwt.getClaimAsString(\"email\");\n        List<String> roles = jwt.getClaimAsStringList(\"roles\");\n        return \"User: \" + userId + \", Email: \" + email + \", Roles: \" + roles;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JWT is stateless → the resource server only needs the public key (JWKS) to verify tokens, no database call. Token expiry is short (15-30 minutes for access tokens). Use refresh tokens for user-facing flows; client credentials flow generates new tokens directly."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never embed sensitive data in JWT claims (they are base64-encoded, not encrypted). For fine-grained authorization, use OAuth2 scopes combined with custom claims or a dedicated authorization service."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-do-you-implement-event-driven-microservices-with-kafka",
      children: "Q12: How do you implement event-driven microservices with Kafka?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache Kafka provides a distributed commit log for asynchronous event streaming between services. Each service publishes events to topics; other services consume from those topics independently."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Producer configuration ──\n@Configuration\npublic class KafkaProducerConfig {\n    @Bean\n    public ProducerFactory<String, Object> producerFactory() {\n        Map<String, Object> props = new HashMap<>();\n        props.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\n        props.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG,\n            StringSerializer.class);\n        props.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG,\n            JsonSerializer.class);\n        props.put(ProducerConfig.ACKS_CONFIG, \"all\");          // wait for all replicas\n        props.put(ProducerConfig.RETRIES_CONFIG, 3);\n        props.put(ProducerConfig.ENABLE_IDEMPOTENCE_CONFIG, true);  // exactly-once semantics\n        return new DefaultKafkaProducerFactory<>(props);\n    }\n\n    @Bean\n    public KafkaTemplate<String, Object> kafkaTemplate() {\n        return new KafkaTemplate<>(producerFactory());\n    }\n}\n\n// ── Event publisher ──\n@Service\npublic class OrderEventPublisher {\n    @Autowired\n    private KafkaTemplate<String, Object> kafka;\n\n    @Transactional\n    public void orderCreated(Order order) {\n        // Send event and wait for acknowledgment\n        ListenableFuture<SendResult<String, Object>> future =\n            kafka.send(\"order.created\", order.getId().toString(),\n                new OrderCreatedEvent(order.getId(), order.getUserId(),\n                    order.getTotal()));\n\n        future.addCallback(\n            result -> log.info(\"Event sent: {}\", result.getRecordMetadata().offset()),\n            ex -> log.error(\"Failed to send event\", ex)\n        );\n    }\n\n    // ── Transactional outbox pattern ──\n    @Transactional\n    public void createOrderAndPublishEvent(OrderRequest request) {\n        // 1. Save order in the database\n        Order order = orderRepository.save(new Order(request));\n\n        // 2. Also save the event in an outbox table (same transaction!)\n        OutboxEvent outbox = new OutboxEvent(\n            null, \"order.created\", order.getId().toString(),\n            new ObjectMapper().writeValueAsString(\n                new OrderCreatedEvent(order.getId(), order.getUserId(), order.getTotal()))\n        );\n        outboxRepository.save(outbox);\n        // A separate poller reads OutboxEvent and publishes to Kafka\n        // This ensures at-least-once delivery without distributed transactions\n    }\n}\n\n// ── Consumer configuration ──\n@Configuration\npublic class KafkaConsumerConfig {\n    @Bean\n    public ConsumerFactory<String, Object> consumerFactory() {\n        Map<String, Object> props = new HashMap<>();\n        props.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, \"localhost:9092\");\n        props.put(ConsumerConfig.GROUP_ID_CONFIG, \"inventory-service-group\");\n        props.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG,\n            StringDeserializer.class);\n        props.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,\n            JsonDeserializer.class);\n        props.put(JsonDeserializer.TRUSTED_PACKAGES,\n            \"com.company.*\");  // security: whitelist packages\n        props.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, \"earliest\");\n        props.put(ConsumerConfig.ENABLE_AUTO_COMMIT_CONFIG, false);  // manual commit\n        return new DefaultKafkaConsumerFactory<>(props);\n    }\n}\n\n// ── Event consumer ──\n@Component\npublic class InventoryEventConsumer {\n    @Autowired\n    private InventoryService inventoryService;\n\n    @KafkaListener(topics = \"order.created\",\n        groupId = \"inventory-service-group\",\n        containerFactory = \"kafkaListenerContainerFactory\")\n    @Transactional\n    public void handleOrderCreated(\n            @Payload OrderCreatedEvent event,\n            @Header(KafkaHeaders.OFFSET) long offset,\n            Acknowledgment acknowledgment) {\n\n        try {\n            inventoryService.reserveStock(event.productId(), event.quantity());\n            // Manual commit after processing\n            acknowledgment.acknowledge();\n        } catch (InsufficientStockException e) {\n            // Publish a failure event and commit the offset (skip this message)\n            kafkaTemplate.send(\"inventory.failed\",\n                new InventoryFailedEvent(event.orderId(), e.getMessage()));\n            acknowledgment.acknowledge();\n        } catch (Exception e) {\n            // Do not commit → message will be re-delivered\n            log.error(\"Failed to process order {}, will retry\", event.orderId(), e);\n            throw new RetryableException(\"Retry later\");\n        }\n    }\n}\n\n// ── Idempotent consumer (same event may be delivered twice) ──\n@Service\npublic class IdempotentConsumerService {\n    @Autowired\n    private ProcessedEventRepository processedEventRepo;\n\n    @Transactional\n    public void handleEvent(OrderCreatedEvent event) {\n        // Check if we already processed this event\n        if (processedEventRepo.existsByEventId(event.getEventId())) {\n            log.info(\"Duplicate event: {}, skipping\", event.getEventId());\n            return;\n        }\n\n        // Process the event\n        inventoryService.reserveStock(event.productId(), event.quantity());\n\n        // Record the event ID to prevent duplicate processing\n        processedEventRepo.save(new ProcessedEvent(event.getEventId()));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kafka provides at-least-once delivery by default. Consumers must be idempotent. The transactional outbox pattern prevents dual-write problems (saving to DB and sending Kafka event atomically)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use one topic per event type or per bounded context. Partition count should be equal to the maximum expected consumer parallelism. Replication factor 3 in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-how-do-you-handle-containerization-for-microservices-with-docker",
      children: "Q13: How do you handle containerization for microservices with Docker?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each microservice gets a Docker image with multi-stage builds for minimal size. Spring Boot 3.x provides layered JARs for efficient Docker builds."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-dockerfile",
        children: "# ── Multi-stage Dockerfile for a Spring Boot microservice ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n\n# Stage 1: Build the application\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nFROM eclipse-temurin:21-jdk AS builder\nWORKDIR /build\n\n# Copy Maven wrapper and pom.xml first (cache layer)\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nCOPY mvnw pom.xml ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\n\n# Copy source and build\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nCOPY src src\nRUN ./mvnw package -DskipTests -B\n\n# Stage 2: Extract Spring Boot layered JAR\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nFROM builder AS layers\nWORKDIR /layers\nRUN java -Djarmode=layertools -jar /build/target/*.jar extract\n\n# Stage 3: Runtime image (minimal)\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nFROM eclipse-temurin:21-jre-alpine\nWORKDIR /app\n\n# Copy each layer separately (Docker caches layers independently)\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nCOPY --from=layers layers/dependencies/ ./\nCOPY --from=layers layers/spring-boot-loader/ ./\nCOPY --from=layers layers/snapshot-dependencies/ ./\nCOPY --from=layers layers/application/ ./\n\n# Non-root user\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\n\nEXPOSE 8080\n\nHEALTHCHECK --interval=30s --timeout=3s --retries=3 \\\n  CMD wget -qO- http://localhost:8080/actuator/health || exit 1\n\nENTRYPOINT [\"java\", \"org.springframework.boot.loader.launch.JarLauncher\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── docker-compose.yml for local development ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nversion: '3.8'\nservices:\n  eureka-server:\n    build: ./eureka-server\n    ports:\n      - \"8761:8761\"\n\n  config-server:\n    build: ./config-server\n    ports:\n      - \"8888:8888\"\n    depends_on:\n      - eureka-server\n\n  user-service:\n    build: ./user-service\n    ports:\n      - \"8081:8081\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - config-server\n\n  order-service:\n    build: ./order-service\n    ports:\n      - \"8082:8082\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - config-server\n      - user-service\n\n  api-gateway:\n    build: ./api-gateway\n    ports:\n      - \"8080:8080\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - user-service\n      - order-service\n\n  kafka:\n    image: confluentinc/cp-kafka:7.6.0\n    ports:\n      - \"9092:9092\"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n\n  zipkin:\n    image: openzipkin/zipkin\n    ports:\n      - \"9411:9411\"\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key Docker best practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-stage builds keep images under 200 MB (vs 800+ MB with full JDK)"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "jre-alpine"
        }), " as base reduces attack surface and size"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Layer ordering: dependencies change rarely, application code changes frequently"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HEALTHCHECK enables orchestration to detect dead instances"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Non-root user prevents container breakout from gaining root access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "docker-compose for local dev, Kubernetes for production"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-how-do-you-deploy-microservices-on-kubernetes",
      children: "Q14: How do you deploy microservices on Kubernetes?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes orchestrates containerized microservices with deployments, services, config maps, and ingress controllers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Deployment for a microservice ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: order-service\n  labels:\n    app: order-service\nspec:\n  replicas: 3  # Run 3 instances for high availability\n  selector:\n    matchLabels:\n      app: order-service\n  template:\n    metadata:\n      labels:\n        app: order-service\n    spec:\n      containers:\n        - name: order-service\n          image: raushan666/order-service:1.0.0\n          imagePullPolicy: Always\n          ports:\n            - containerPort: 8080\n          env:\n            - name: SPRING_PROFILES_ACTIVE\n              value: \"k8s\"\n            - name: DB_URL\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: url\n            - name: DB_USERNAME\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: username\n            - name: DB_PASSWORD\n              valueFrom:\n                secretKeyRef:\n                  name: db-credentials\n                  key: password\n          livenessProbe:\n            httpGet:\n              path: /actuator/health/liveness\n              port: 8080\n            initialDelaySeconds: 30\n            periodSeconds: 10\n          readinessProbe:\n            httpGet:\n              path: /actuator/health/readiness\n              port: 8080\n            initialDelaySeconds: 20\n            periodSeconds: 5\n          resources:\n            requests:\n              memory: \"256Mi\"\n              cpu: \"250m\"\n            limits:\n              memory: \"512Mi\"\n              cpu: \"500m\"\n---\n# ── Service (stable network endpoint) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n  ports:\n    - port: 80\n      targetPort: 8080\n  type: ClusterIP  # Internal → only accessible within the cluster\n---\n# ── ConfigMap for non-sensitive config ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: order-service-config\ndata:\n  application.yml: |\n    order-service:\n      order-timeout: 30s\n      max-batch-size: 100\n---\n# ── HPA (auto-scaling) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: order-service-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: order-service\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: Resource\n      resource:\n        name: cpu\n        target:\n          type: Utilization\n          averageUtilization: 70\n---\n# ── Ingress (external traffic routing) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-ingress\n  annotations:\n    kubernetes.io/ingress.class: nginx\n    nginx.ingress.kubernetes.io/rewrite-target: /$2\nspec:\n  rules:\n    - host: api.example.com\n      http:\n        paths:\n          - path: /users(/|$)(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: user-service\n                port:\n                  number: 80\n          - path: /orders(/|$)(.*)\n            pathType: Prefix\n            backend:\n              service:\n                name: order-service\n                port:\n                  number: 80\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Kubernetes-friendly configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application-k8s.yml\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nspring:\n  cloud:\n    kubernetes:\n      discovery:\n        enabled: true   # Use Kubernetes DNS instead of Eureka\n      config:\n        enabled: true   # Read ConfigMap as configuration source\n      secrets:\n        enabled: true   # Read Secrets as configuration source\n  config:\n    import: configmap:order-service-config\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,prometheus\n  health:\n    livenessstate:\n      enabled: true\n    readinessstate:\n      enabled: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Deploy a new version:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "kubectl set image deployment/order-service order-service=raushan666/order-service:1.1.0\nkubectl rollout status deployment/order-service\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Kubernetes replaces Eureka for service discovery (DNS resolution), replaces Config Server (ConfigMaps + Secrets), and provides health checks (liveness/readiness probes) instead of Eureka heartbeats. Use Spring Cloud Kubernetes for seamless integration."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-compare-deployment-strategies-rolling-bluegreen-and-canary",
      children: "Q15: Compare deployment strategies: rolling, blue/green, and canary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Rolling update (Kubernetes default) ──\n// Updates pods gradually → old pods keep serving until new ones are healthy\napiVersion: apps/v1\nkind: Deployment\nspec:\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1        // One extra pod during update\n      maxUnavailable: 0  // Zero downtime: only create new pods before removing old ones\n\n// ── Blue/Green deployment ──\n// Two identical environments: Blue (current), Green (new)\napiVersion: apps/v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n    version: green   # ← Flip this from \"blue\" to \"green\" to switch traffic\n---\n# Deploy green:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# kubectl apply -f deployment-green.yml\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# Wait for all green pods to pass readiness probes\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# Then switch traffic:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# kubectl patch service order-service -p '{\"spec\":{\"selector\":{\"version\":\"green\"}}}'\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# When confirmed, delete blue:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n# kubectl delete -f deployment-blue.yml\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n\n// ── Canary deployment (traffic splitting) ──\n// Route 5% of traffic to the new version, monitor, then gradually increase\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: order-service\nspec:\n  hosts:\n    - order-service\n  http:\n    - match:\n        - headers:\n            canary:\n              exact: \"true\"      # Route internal testers to canary\n      route:\n        - destination:\n            host: order-service\n            subset: canary\n          weight: 100\n    - route:\n        - destination:\n            host: order-service\n            subset: stable\n          weight: 95            # 95% traffic to stable\n        - destination:\n            host: order-service\n            subset: canary\n          weight: 5             # 5% to canary\n---\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: order-service\nspec:\n  host: order-service\n  subsets:\n    - name: stable\n      labels:\n        version: v1\n    - name: canary\n      labels:\n        version: v2\n"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Strategy"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Downtime"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Risk"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Rollback Speed"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Traffic Control"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Complexity"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Rolling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Moderate (gradual exposure)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Limited (per-pod)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Blue/Green"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Switch moment (seconds)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (all traffic at once)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (flip back)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Canary"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lowest (small % first)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Instant (cut traffic)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fine-grained (1-99%)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High (Service Mesh)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Start with rolling (built into Kubernetes, zero configuration). Move to blue/green when you need instant rollback. Use canary only when you have a service mesh (Istio, Linkerd) and need to test new versions on real traffic."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-how-do-you-monitor-microservices-with-prometheus-and-grafana",
      children: "Q16: How do you monitor microservices with Prometheus and Grafana?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot Actuator exposes metrics in Prometheus format. Prometheus scrapes them. Grafana visualizes dashboards."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Dependencies ──\n// implementation 'org.springframework.boot:spring-boot-starter-actuator'\n// implementation 'io.micrometer:micrometer-registry-prometheus'\n\n// ── Configuration ──\n// application.yml:\n// management:\n//   endpoints:\n//     web:\n//       exposure:\n//         include: health,info,metrics,prometheus\n//   metrics:\n//     tags:\n//       application: ${spring.application.name}\n//     export:\n//       prometheus:\n//         enabled: true\n\n// ── Custom metrics ──\n@Service\npublic class OrderMetricsService {\n    private final Counter orderCounter;\n    private final Timer orderTimer;\n    private final DistributionSummary orderValueSummary;\n\n    public OrderMetricsService(MeterRegistry registry) {\n        orderCounter = Counter.builder(\"orders.created.total\")\n            .description(\"Total orders created\")\n            .tag(\"service\", \"order-service\")\n            .register(registry);\n\n        orderTimer = Timer.builder(\"orders.processing.time\")\n            .description(\"Time taken to process an order\")\n            .publishPercentiles(0.5, 0.95, 0.99)\n            .register(registry);\n\n        orderValueSummary = DistributionSummary.builder(\"orders.value\")\n            .description(\"Order value distribution\")\n            .baseUnit(\"USD\")\n            .publishPercentiles(0.5, 0.95, 0.99)\n            .register(registry);\n    }\n\n    public void recordOrder(BigDecimal value) {\n        orderCounter.increment();\n        orderValueSummary.record(value.doubleValue());\n    }\n\n    public <T> T measureOrderProcessing(Supplier<T> op) {\n        return orderTimer.record(op);\n    }\n}\n\n// ── Micrometer annotations ──\n@Component\npublic class PaymentProcessor {\n    @Timed(value = \"payment.processing\", percentiles = {0.5, 0.95, 0.99})\n    public PaymentResult processPayment(PaymentRequest req) {\n        // Method execution time is automatically recorded\n    }\n\n    @Counted(value = \"payment.retries\", description = \"Payment retry count\")\n    public void retryPayment(Long orderId) { }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Prometheus config (prometheus.yml) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nscrape_configs:\n  - job_name: 'spring-boot-apps'\n    metrics_path: '/actuator/prometheus'\n    static_configs:\n      - targets:\n        - 'user-service:8080'\n        - 'order-service:8080'\n        - 'payment-service:8080'\n\n  - job_name: 'kubernetes-pods'\n    kubernetes_sd_configs:\n      - role: pod\n    relabel_configs:\n      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]\n        action: keep\n        regex: true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Kubernetes PodMonitor (operator-based scraping) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: monitoring.coreos.com/v1\nkind: PodMonitor\nmetadata:\n  name: spring-boot-monitor\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  podMetricsEndpoints:\n    - port: http\n      path: /actuator/prometheus\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Grafana dashboard panels to create:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Request rate (requests/sec by endpoint)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Error rate (5xx / total requests)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latency (p50, p95, p99 in ms)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "JVM metrics (heap usage, GC pause time, thread count)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Database connection pool (active/idle/waiting)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Circuit breaker state (CLOSED/OPEN/HALF_OPEN)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "System metrics (CPU, memory, disk)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Alert on: p99 latency > 1s, error rate > 1%, circuit breaker OPEN, heap usage > 80%, connection pool exhaustion."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-do-you-implement-contract-testing-with-spring-cloud-contract",
      children: "Q17: How do you implement contract testing with Spring Cloud Contract?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contract testing verifies that a producer's API matches what the consumer expects, without end-to-end integration tests. Spring Cloud Contract generates tests and stubs from Groovy or YAML contracts."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "// ── Producer contract (user-service) ──\n// File: contracts/shouldReturnUser.groovy\nContract.make {\n    description \"should return user by ID\"\n    request {\n        method GET()\n        url \"/users/1\"\n        headers {\n            accept(applicationJson())\n        }\n    }\n    response {\n        status OK()\n        headers {\n            contentType(applicationJson())\n        }\n        body([\n            id: 1,\n            name: \"Raushan\",\n            email: \"raushan@example.com\"\n        ])\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Producer-side base test (Spring Cloud Contract generates tests) ──\n// File: src/test/java/.../BaseContractTest.java\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.MOCK)\n@AutoConfigureMockMvc\npublic abstract class BaseContractTest {\n    @Autowired\n    private MockMvc mockMvc;\n\n    // Spring Cloud Contract auto-creates a test class that extends this\n    // and verifies the controller matches the contract\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Generate contract tests + publish stubs:\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\n./mvnw verifystubs:8080\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Consumer-side (order-service uses stubs to test its client) ──\n@SpringBootTest\n@AutoConfigureStubRunner(\n    stubsMode = StubRunnerProperties.StubsMode.LOCAL,\n    ids = \"com.company:user-service:+:stubs:8080\"\n)\nclass UserServiceClientTest {\n    @Autowired\n    private UserServiceClient userClient;\n\n    @Test\n    void shouldReturnUser() {\n        UserDto user = userClient.getUser(1L);\n        assertThat(user.id()).isEqualTo(1L);\n        assertThat(user.name()).isEqualTo(\"Raushan\");\n        assertThat(user.email()).isEqualTo(\"raushan@example.com\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud Contract automatically verifies that the consumer's client code works against the producer's contract. If the producer changes a response field, the consumer build breaks before deployment → not in production."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Contract testing replaces brittle end-to-end tests for cross-service integration. Combined with consumer-driven contracts, it prevents breaking changes from reaching production."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-handle-database-per-service-with-shared-data-concerns",
      children: "Q18: How do you handle database-per-service with shared data concerns?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each microservice owns its database → no other service accesses it directly. Data that spans services is shared through events or API calls."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Anti-pattern: direct database access ──\n// order-service calls user-service's database directly → WRONG\n@Repository\npublic interface UserRepository extends JpaRepository<User, Long> {\n    // order-service should NOT have this → it violates service boundaries\n}\n\n// ── Correct: API-based data sharing ──\n// order-service calls user-service's REST API\n@FeignClient(name = \"user-service\")\npublic interface UserServiceClient {\n    @GetMapping(\"/users/{id}/shipping-address\")\n    AddressDto getShippingAddress(@PathVariable Long id);\n}\n\n// ── Correct: Event-based data sharing ──\n// When user changes their shipping address, user-service publishes an event\n@Service\npublic class UserService {\n    @Transactional\n    public void updateShippingAddress(Long userId, Address newAddress) {\n        userRepo.updateAddress(userId, newAddress);\n        // Publish event → order-service consumes and updates its local cache\n        eventPublisher.publish(new AddressChangedEvent(userId, newAddress));\n    }\n}\n\n// order-service caches only the shipping address it needs\n@Service\npublic class OrderAddressService {\n    @Autowired private OrderAddressCacheRepository addressCache;\n\n    @Transactional\n    @KafkaListener(topics = \"user.address-changed\")\n    public void handleAddressChanged(AddressChangedEvent event) {\n        orderAddressCache.save(\n            new OrderAddressCache(event.userId(), event.newAddress()));\n    }\n}\n\n@Entity\npublic class OrderAddressCache {\n    @Id private Long userId;            // Same ID as user-service\n    private String street;\n    private String city;\n    private String zipCode;\n    // Only the fields order-service needs\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Strategies for cross-service data:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API calls"
        }), ": Best for real-time data (get user details when creating an order)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Event replication"
        }), ": Best for reference data (cache user address locally, update via events)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "API composition"
        }), ": Best for complex read models (API gateway aggregates responses)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Shared kernel"
        }), ": Rare → share only extremely stable data (country codes, tax rates) as a library"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Never share databases between services. If two services need the same table, they are not independent → merge them into one service."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-what-are-common-microservices-anti-patterns-and-how-do-you-avoid-them",
      children: "Q19: What are common microservices anti-patterns and how do you avoid them?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Anti-pattern 1: Distributed Monolith ──\n// Services are split but share a database and cannot deploy independently\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n    @ManyToOne\n    @JoinColumn(name = \"user_id\")\n    private User user;  // ← Order-service needs User entity from user-service's DB\n}\n// Fix: Each service owns its data. Order-service stores only user_id as a value.\n\n// ── Anti-pattern 2: Chatty Communication ──\n// Multiple API calls to complete one operation\n@Service\npublic class OrderService {\n    public Order createOrder(OrderRequest req) {\n        UserDto user = userClient.getUser(req.userId());          // call 1\n        AddressDto address = userClient.getAddress(req.userId()); // call 2\n        PaymentMethodDto pm = userClient.getPaymentMethod(req.userId()); // call 3\n        // Prefer bulk API: userClient.getUserWithDetails(req.userId())\n    }\n}\n\n// ── Anti-pattern 3: Shared Libraries for Domain Logic ──\n// A shared JAR that contains business logic used by multiple services\npublic class OrderValidationUtils {\n    // Any change to this requires rebuilding ALL services\n    // Fix: duplicate validation logic per service or make it a separate microservice\n}\n\n// ── Anti-pattern 4: Golden Hammer (everything must be a microservice) ──\n@SpringBootApplication\npublic class EmailSendingService { }  // Could be a simple function + queue\n// Fix: Use serverless functions for simple tasks. Not everything needs a full service.\n\n// ── Anti-pattern 5: No Monitoring or Observability ──\n// Services communicate without tracing, logging correlation, or metrics\n// Fix: Always include distributed tracing (Micrometer + Zipkin),\n// structured logging (trace ID in every log), and Prometheus metrics.\n\n// ── Anti-pattern 6: Leaky Abstractions ──\n// Internal implementation details leak through service boundaries\n@FeignClient(name = \"user-service\")\npublic interface UserServiceClient {\n    @GetMapping(\"/users/{id}/raw\")\n    String getRawUserData();  // Returns internal DB representation\n}\n// Fix: Each service has its own API contract with DTOs, not exposed entities.\n\n// ── Anti-pattern 7: Orchestration in the API Gateway ──\n@RestController\npublic class ApiGatewayController {\n    @GetMapping(\"/order-details/{orderId}\")\n    public OrderDetailsDto getOrderDetails(@PathVariable Long orderId) {\n        OrderDto order = orderClient.getOrder(orderId);\n        UserDto user = userClient.getUser(order.userId());\n        ProductDto product = productClient.getProduct(order.productId());\n        // Gateway is now doing orchestration → it should just route\n    }\n}\n// Fix: Create a dedicated order-aggregation-service for API composition.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Golden rule: If splitting a service doesn't give you independent deployability, independent scalability, or independent team ownership, don't split it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-test-microservices-end-to-end",
      children: "Q20: How do you test microservices end-to-end?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing microservices uses a pyramid: unit tests (many) → integration tests (fewer) → contract tests (per pair) → end-to-end tests (few)."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Layer 1: Unit tests (fast, isolated, mock external calls) ──\n@ExtendWith(MockitoExtension.class)\nclass OrderServiceUnitTest {\n    @Mock private OrderRepository orderRepo;\n    @Mock private UserServiceClient userClient;\n    @InjectMocks private OrderService orderService;\n\n    @Test\n    void shouldCreateOrder() {\n        when(userClient.getUser(1L)).thenReturn(new UserDto(1L, \"Raushan\"));\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n\n        Order result = orderService.createOrder(req);\n\n        assertThat(result.getStatus()).isEqualTo(\"PENDING\");\n        verify(orderRepo).save(any(Order.class));\n    }\n}\n\n// ── Layer 2: Integration tests with TestContainers ──\n@SpringBootTest\n@Testcontainers\nclass OrderServiceIntegrationTest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\"));\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry reg) {\n        reg.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        reg.add(\"spring.kafka.bootstrap-servers\", kafka::getBootstrapServers);\n    }\n\n    @Autowired private OrderService orderService;\n    @Autowired private OrderRepository orderRepo;\n\n    @Test\n    void shouldPersistOrder() {\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n\n        Order result = orderService.createOrder(req);\n\n        assertThat(orderRepo.findById(result.getId())).isPresent();\n        assertThat(result.getTotal()).isEqualByComparingTo(new BigDecimal(\"100.00\"));\n    }\n}\n\n// ── Layer 3: Contract tests (Spring Cloud Contract or Pact) ──\n@SpringBootTest\n@AutoConfigureStubRunner(\n    stubsMode = StubRunnerProperties.StubsMode.LOCAL,\n    ids = \"com.company:user-service:+:stubs:8080\")\nclass OrderServiceContractTest {\n    @Autowired\n    private UserServiceClient userClient;\n\n    @Test\n    void shouldGetUser() {\n        UserDto user = userClient.getUser(1L);\n        assertThat(user.name()).isEqualTo(\"Raushan\");\n    }\n}\n\n// ── Layer 4: End-to-end tests (few, smoke-test critical paths) ──\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@Testcontainers\nclass OrderE2ETest {\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:16\");\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(\n        DockerImageName.parse(\"confluentinc/cp-kafka:7.6.0\"));\n\n    @LocalServerPort\n    private int port;\n\n    private WebTestClient client;\n\n    @BeforeEach\n    void setUp() {\n        client = WebTestClient.bindToServer()\n            .baseUrl(\"http://localhost:\" + port)\n            .build();\n    }\n\n    @Test\n    void fullOrderFlow() {\n        // Create order via REST\n        client.post().uri(\"/orders\")\n            .bodyValue(new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\")))\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.status\").isEqualTo(\"PENDING\")\n            .jsonPath(\"$.total\").isEqualTo(100.00);\n\n        // Verify Kafka event was published\n        // (consume the event from the test container and assert)\n    }\n}\n\n// ── WireMock for external service simulation ──\n@SpringBootTest\n@WireMockTest(httpPort = 9090)\nclass OrderServiceWireMockTest {\n    @Test\n    void shouldHandleUserServiceTimeout() {\n        // Simulate slow user-service response\n        stubFor(get(urlEqualTo(\"/users/1\"))\n            .willReturn(aResponse()\n                .withFixedDelay(5000)\n                .withStatus(200)));\n\n        // Circuit breaker should trigger fallback\n        OrderRequest req = new OrderRequest(1L, 100L, 2, new BigDecimal(\"50.00\"));\n        assertThrows(CircuitBreakerOpenException.class,\n            () -> orderService.createOrder(req));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "End-to-end tests are slow and flaky. Keep them to 3-5 critical paths per service. Rely on contract tests for cross-service integration and unit tests for business logic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q21-what-is-a-service-mesh-and-when-would-you-use-istio",
      children: "Q21: What is a service mesh and when would you use Istio?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service mesh manages service-to-service communication at the infrastructure layer using sidecar proxies. Istio injects an Envoy proxy alongside each pod, handling traffic management, security, and observability without changing application code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Without service mesh: circuit breaker in application code ──\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n\n    @CircuitBreaker(name = \"userService\", fallbackMethod = \"fallback\")\n    public UserDto getUser(Long id) {\n        return userClient.getUser(id);\n    }\n}\n\n// ── With Istio: circuit breaker moves to infrastructure ──\n// application code is clean → no Resilience4j annotations needed\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n\n    public UserDto getUser(Long id) {\n        return userClient.getUser(id);  // No circuit breaker → Istio handles it\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Istio DestinationRule (circuit breaker at mesh level) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: user-service\nspec:\n  host: user-service\n  trafficPolicy:\n    connectionPool:\n      tcp:\n        maxConnections: 100\n      http:\n        http1MaxPendingRequests: 10\n        http2MaxRequests: 100\n    outlierDetection:\n      consecutive5xxErrors: 5\n      interval: 30s\n      baseEjectionTime: 30s\n      maxEjectionPercent: 50\n---\n# ── Istio VirtualService (traffic splitting for canary) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: user-service\nspec:\n  hosts:\n    - user-service\n  http:\n    - route:\n        - destination:\n            host: user-service\n            subset: v1\n          weight: 90\n        - destination:\n            host: user-service\n            subset: v2\n          weight: 10\n    - timeout: 3s\n      retries:\n        attempts: 3\n        perTryTimeout: 1s\n---\n# ── Istio PeerAuthentication (mTLS between services) ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: security.istio.io/v1beta1\nkind: PeerAuthentication\nmetadata:\n  name: default\n  namespace: default\nspec:\n  mtls:\n    mode: STRICT  # All inter-service traffic must use mTLS\n---\n# ── Istio AuthorizationPolicy ──\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\napiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: order-service-policy\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  rules:\n    - from:\n        - source:\n            principals: [\"cluster.local/ns/default/sa/api-gateway\"]\n      to:\n        - operation:\n            methods: [\"GET\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Service mesh provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Traffic management (canary, circuit breaker, retries, timeouts → no code changes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Security (mTLS, authorization, authentication at the proxy level)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Observability (automatic metrics, traces, access logs per request)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Resilience (timeouts, retries, circuit breaking, outlier detection)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use a service mesh when you have 10+ services and can't add cross-cutting code to each one. Do not use a service mesh for small deployments (3-5 services) → the complexity of managing sidecars and control plane is not worth it."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q22-how-do-you-implement-structured-logging-and-log-aggregation",
      children: "Q22: How do you implement structured logging and log aggregation?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Structured logging outputs JSON with consistent fields (service name, trace ID, level, message, timestamp). ELK or Loki aggregates logs from all services into a searchable store."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Logback configuration for structured JSON logging ──\n// resources/logback-spring.xml\n<configuration>\n    <appender name=\"JSON\" class=\"ch.qos.logback.core.ConsoleAppender\">\n        <encoder class=\"net.logstash.logback.encoder.LogstashEncoder\">\n            <includeMdc>true</includeMdc>          <!-- Include MDC context -->\n            <customFields>{\"service\":\"order-service\",\"environment\":\"${ENV:-dev}\"}</customFields>\n        </encoder>\n    </appender>\n\n    <root level=\"INFO\">\n        <appender-ref ref=\"JSON\"/>\n    </root>\n</configuration>\n\n// ── Dependencies ──\n// implementation 'net.logstash.logback:logstash-logback-encoder:7.4'\n\n// ── Structured logging in application code ──\n@Service\npublic class OrderService {\n    private static final Logger log = LoggerFactory.getLogger(OrderService.class);\n\n    @Autowired\n    private Tracer tracer;  // Micrometer Tracing\n\n    @Transactional\n    public Order createOrder(OrderRequest req) {\n        // MDC is automatically populated by Micrometer with traceId and spanId\n        MDC.put(\"user.id\", String.valueOf(req.userId()));\n        MDC.put(\"order.total\", req.total().toPlainString());\n\n        log.info(\"Creating order\");\n        try {\n            Order order = orderRepo.save(new Order(req));\n            MDC.put(\"order.id\", String.valueOf(order.getId()));\n            log.info(\"Order created successfully\");\n            return order;\n        } catch (Exception e) {\n            log.error(\"Failed to create order\", e);\n            throw e;\n        } finally {\n            MDC.remove(\"user.id\");\n            MDC.remove(\"order.total\");\n            MDC.remove(\"order.id\");\n        }\n    }\n}\n\n// ── JSON output (single log entry) ──\n// {\n//   \"@timestamp\": \"2026-06-16T12:30:00.000+00:00\",\n//   \"level\": \"INFO\",\n//   \"service\": \"order-service\",\n//   \"environment\": \"prod\",\n//   \"traceId\": \"abc123def456\",\n//   \"spanId\": \"span789\",\n//   \"message\": \"Order created successfully\",\n//   \"mdc\": {\n//     \"user.id\": \"42\",\n//     \"order.total\": \"100.00\",\n//     \"order.id\": \"87\"\n//   },\n//   \"logger_name\": \"com.company.orderservice.OrderService\",\n//   \"thread_name\": \"http-nio-8080-exec-3\"\n// }\n\n// ── Loki log query ──\n// {service=\"order-service\", level=\"ERROR\"} |= \"traceId=abc123def456\"\n// {service=~\"user-service|order-service\", level=\"ERROR\"} | json | line_format \"{{.message}}\"\n\n// ── Logback MDC with auto-cleanup via Filter ──\n@Component\npublic class MdcFilter implements WebFilter {\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {\n        return chain.filter(exchange)\n            .contextWrite(ctx -> {\n                MDC.put(\"request.path\", exchange.getRequest().getPath().value());\n                MDC.put(\"request.method\", exchange.getRequest().getMethod().name());\n                return ctx;\n            })\n            .doFinally(signalType -> MDC.clear());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Best practices:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Every log entry includes ", (0,jsx_runtime.jsx)(_components.code, {
          children: "traceId"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "service"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "level"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "timestamp"
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Structured JSON means no regex parsing → just query fields"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Never log sensitive data (PII, passwords, tokens) → even in structured logs"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Correlation ID (traceId) connects logs across services during a single request flow"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use Loki + Grafana for Kubernetes-native log aggregation (no Elasticsearch cluster needed)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q23-how-do-you-handle-database-migrations-across-multiple-microservices",
      children: "Q23: How do you handle database migrations across multiple microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each microservice manages its own database migrations independently. Migrations are versioned, sequential, and tested in CI."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Each service has its own Flyway configuration ──\n// order-service/src/main/resources/application.yml:\n// spring:\n//   flyway:\n//     enabled: true\n//     locations: classpath:db/migration/order\n//     baseline-on-migrate: true\n//     out-of-order: false\n//     validate-on-migrate: true\n\n// user-service/src/main/resources/application.yml:\n// spring:\n//   flyway:\n//     locations: classpath:db/migration/user\n\n// ── Migration files are prefixed by version: V{version}__{description}.sql ──\n// order-service:\n//   db/migration/order/V1__create_orders_table.sql\n//   db/migration/order/V2__add_status_column.sql\n//   db/migration/order/V3__add_indexes.sql\n//\n// user-service:\n//   db/migration/user/V1__create_users_table.sql\n//   db/migration/user/V2__add_email_verification.sql\n\n// ── V3__add_indexes.sql for order-service ──\n-- Create indexes for common queries\nCREATE INDEX idx_orders_user_id ON orders(user_id);\nCREATE INDEX idx_orders_status ON orders(status) WHERE status IN ('PENDING', 'PROCESSING');\nCREATE INDEX idx_orders_created_at ON orders(created_at DESC);\n\n-- Backfill existing data if needed\n-- UPDATE orders SET status = 'PENDING' WHERE status IS NULL;\n\n// ── Advanced: multi-service migration coordination ──\n@Service\npublic class CoordinatedMigrationService {\n    @Autowired private Map<String, DataSource> dataSources;\n\n    @EventListener(ApplicationReadyEvent.class)\n    public void runCoordinatedMigrations() {\n        dataSources.forEach((serviceName, ds) -> {\n            Flyway flyway = Flyway.configure()\n                .dataSource(ds)\n                .locations(\"classpath:db/migration/\" + serviceName)\n                .load();\n            flyway.migrate();\n            log.info(\"{} migration complete\", serviceName);\n        });\n    }\n}\n\n// ── Backward compatibility: expand-contract for cross-service migrations ──\n// Phase 1: Add new column (expand)\n-- V1__add_phone_column.sql\nALTER TABLE users ADD COLUMN phone VARCHAR(20);\n\n// Phase 2: Deploy services to write to both old and new fields\n// Phase 3: Backfill data\n// Phase 4: Migrate readers to new column\n// Phase 5: Drop old column (contract)\n-- V2__drop_legacy_phone.sql\nALTER TABLE users DROP COLUMN legacy_phone;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CI validation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Validate that migrations are reversible (check for down scripts)\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nfor f in db/migration/*/V*.sql; do\n  down=\"${f/V/__down/V}\"\n  if [ ! -f \"${down}\" ]; then\n    echo \"WARNING: No undo migration for $f\"\n  fi\ndone\n\n# Check for SQL syntax errors via dry-run\n\n> **Previous:** [Databases Interview Q&amp;A (cont.)](./59-interview-databases-d.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md)\nflyway migrate -dryRunOutput=dry-run.sql\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Each service's migration is independent. Never share migration files across services. Backward-compatible migrations (expand phase) allow zero-downtime deployment."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-how-do-you-implement-idempotency-in-microservices",
      children: "Q24: How do you implement idempotency in microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Idempotency ensures that processing the same request multiple times produces the same result. For asynchronous processing, this means deduplication at the consumer."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Idempotency key pattern (for REST endpoints) ──\n@RestController\n@RequestMapping(\"/orders\")\npublic class OrderController {\n\n    @PostMapping\n    public ResponseEntity<Order> createOrder(\n            @RequestBody OrderRequest request,\n            @RequestHeader(\"Idempotency-Key\") String idempotencyKey) {\n\n        Order order = orderService.createIdempotent(request, idempotencyKey);\n        return ResponseEntity.ok(order);\n    }\n}\n\n@Service\npublic class OrderService {\n    @Autowired private OrderRepository orderRepo;\n    @Autowired private IdempotencyRegistry idempotencyRegistry;\n\n    @Transactional\n    public Order createIdempotent(OrderRequest request, String idempotencyKey) {\n        // Check if this key was already processed\n        return idempotencyRegistry.getProcessedResult(idempotencyKey)\n            .orElseGet(() -> {\n                Order order = orderRepo.save(new Order(request));\n                idempotencyRegistry.record(idempotencyKey, order.getId());\n                return order;\n            });\n    }\n}\n\n// ── Idempotency registry (using database for persistence) ──\n@Entity\n@Table(name = \"idempotency_keys\")\npublic class IdempotencyRecord {\n    @Id\n    private String idempotencyKey;\n\n    private Long resultId;  // The ID of the created resource\n    private Instant createdAt;\n\n    // TTL: purge old entries after 24 hours\n    public boolean isExpired() {\n        return createdAt.isBefore(Instant.now().minus(24, ChronoUnit.HOURS));\n    }\n}\n\n@Repository\npublic interface IdempotencyRegistry extends JpaRepository<IdempotencyRecord, String> {\n    Optional<IdempotencyRecord> findByIdempotencyKey(String key);\n\n    @Modifying\n    @Query(\"DELETE FROM IdempotencyRecord r WHERE r.createdAt < :cutoff\")\n    void purgeOlderThan(@Param(\"cutoff\") Instant cutoff);\n}\n\n// ── Idempotent Kafka consumer ──\n@Service\npublic class IdempotentConsumer {\n    @Autowired private ProcessedEventRepository processedRepo;\n    @Autowired private OrderRepository orderRepo;\n\n    @Transactional\n    @KafkaListener(topics = \"payment.completed\")\n    public void handlePaymentCompleted(PaymentCompletedEvent event) {\n        // Deduplicate by event ID\n        if (processedRepo.existsByEventId(event.getEventId())) {\n            log.info(\"Duplicate event: {}, skipping\", event.getEventId());\n            return;\n        }\n\n        Order order = orderRepo.findById(event.getOrderId())\n            .orElseThrow(() -> new IllegalArgumentException(\"Order not found\"));\n\n        order.setStatus(\"PAID\");\n        orderRepo.save(order);\n\n        processedRepo.save(new ProcessedEvent(event.getEventId()));\n    }\n}\n\n// ── Guarantee: atomic check-then-process with database constraint ──\n// PostgreSQL:\n// CREATE UNIQUE INDEX idx_idempotency ON idempotency_keys(idempotency_key);\n//\n// INSERT INTO idempotency_keys(idempotency_key, result_id, created_at)\n// VALUES ('key-123', NULL, NOW())\n// ON CONFLICT (idempotency_key) DO NOTHING\n// RETURNING idempotency_key;\n//\n// If the INSERT returns the key, this is the first call → process normally.\n// If it returns nothing, another request already started processing → return cached result.\n\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Idempotency is not optional in microservices → network retries guarantee duplicate requests. Every write endpoint should accept an idempotency key. Every async consumer should deduplicate by event ID."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-what-distributed-caching-strategies-work-for-microservices",
      children: "Q25: What distributed caching strategies work for microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Distributed caching (Redis) reduces latency and database load. Two primary patterns: cache-aside (read-through) and write-through."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Cache-aside: read from cache, miss -> load from DB -> populate cache ──\n@Service\npublic class ProductService {\n    @Autowired private RedisTemplate<String, ProductDto> redis;\n    @Autowired private ProductRepository productRepo;\n\n    private static final Duration CACHE_TTL = Duration.ofMinutes(10);\n\n    public ProductDto getProduct(Long id) {\n        String key = \"product:\" + id;\n\n        // Try cache\n        ProductDto cached = redis.opsForValue().get(key);\n        if (cached != null) {\n            return cached;\n        }\n\n        // Cache miss → load from database\n        Product product = productRepo.findById(id)\n            .orElseThrow(() -> new ProductNotFoundException(id));\n        ProductDto dto = ProductDto.from(product);\n\n        // Populate cache with TTL\n        redis.opsForValue().set(key, dto, CACHE_TTL);\n        return dto;\n    }\n\n    // ── Invalidate cache on write ──\n    @Transactional\n    public ProductDto updateProduct(Long id, UpdateProductRequest req) {\n        Product product = productRepo.findById(id).orElseThrow();\n        product.setName(req.name());\n        product.setPrice(req.price());\n        product = productRepo.save(product);\n\n        // Invalidate cache (or update it with write-through)\n        redis.delete(\"product:\" + id);\n\n        return ProductDto.from(product);\n    }\n}\n\n// ── Spring Cache abstraction ──\n@Service\npublic class ProductService {\n    @Cacheable(value = \"products\", key = \"#id\", unless = \"#result == null\")\n    public ProductDto getProduct(Long id) {\n        Product product = productRepo.findById(id)\n            .orElseThrow(() -> new ProductNotFoundException(id));\n        return ProductDto.from(product);\n    }\n\n    @CachePut(value = \"products\", key = \"#id\")\n    @Transactional\n    public ProductDto updateProduct(Long id, UpdateProductRequest req) {\n        Product product = productRepo.findById(id).orElseThrow();\n        product.setName(req.name());\n        product.setPrice(req.price());\n        product = productRepo.save(product);\n        return ProductDto.from(product);\n    }\n\n    @CacheEvict(value = \"products\", key = \"#id\")\n    public void evictProduct(Long id) {\n        // Cache eviction triggered externally (e.g., admin action)\n    }\n}\n\n// ── Redis configuration for distributed caching ──\n@Configuration\n@EnableCaching\npublic class CacheConfig {\n    @Bean\n    public RedisCacheConfiguration cacheConfiguration() {\n        return RedisCacheConfiguration.defaultCacheConfig()\n            .entryTtl(Duration.ofMinutes(10))\n            .disableCachingNullValues()\n            .serializeKeysWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new StringRedisSerializer()))\n            .serializeValuesWith(\n                RedisSerializationContext.SerializationPair\n                    .fromSerializer(new GenericJackson2JsonRedisSerializer()));\n    }\n\n    @Bean\n    public RedisTemplate<String, Object> redisTemplate(\n            RedisConnectionFactory factory) {\n        RedisTemplate<String, Object> template = new RedisTemplate<>();\n        template.setConnectionFactory(factory);\n        template.setKeySerializer(new StringRedisSerializer());\n        template.setValueSerializer(new GenericJackson2JsonRedisSerializer());\n        template.setHashKeySerializer(new StringRedisSerializer());\n        template.setHashValueSerializer(new GenericJackson2JsonRedisSerializer());\n        return template;\n    }\n}\n\n// ── Cache stampede prevention ──\n@Service\npublic class ProductService {\n    // Without protection: 100 concurrent cache misses all hit the database\n    // With Redis lock: only one request hits the DB, others wait\n\n    public ProductDto getProductWithLock(Long id) {\n        String key = \"product:\" + id;\n        String lockKey = \"lock:\" + key;\n\n        // Fast path: try cache\n        ProductDto cached = redis.opsForValue().get(key);\n        if (cached != null) {\n            return cached;\n        }\n\n        // Acquire distributed lock\n        Boolean locked = redis.opsForValue()\n            .setIfAbsent(lockKey, \"locked\", Duration.ofSeconds(5));\n        if (Boolean.TRUE.equals(locked)) {\n            try {\n                // Double-check cache (another thread may have populated it)\n                ProductDto again = redis.opsForValue().get(key);\n                if (again != null) {\n                    return again;\n                }\n\n                // Load from database\n                Product product = productRepo.findById(id).orElseThrow();\n                ProductDto dto = ProductDto.from(product);\n                redis.opsForValue().set(key, dto, CACHE_TTL);\n                return dto;\n            } finally {\n                redis.delete(lockKey);\n            }\n        }\n\n        // Lock not acquired → wait briefly and retry\n        Thread.sleep(100);\n        return redis.opsForValue().get(key);  // Should be populated by now\n    }\n}\n\n// ── Cache strategy comparison ──\n// 1. Cache-aside (lazy): Most common. Cache miss = DB hit + cache populate.\n//    Pros: Simple, resilient (cache loss just means slower reads).\n//    Cons: Cache stampede on first request.\n\n// 2. Write-through: Every write updates both DB and cache.\n//    Pros: Cache always consistent with DB. Never stale reads.\n//    Cons: Slower writes. Wasted cache writes for infrequently read data.\n\n// 3. Write-behind (write-back): Write to cache, async flush to DB.\n//    Pros: Fastest writes. Can batch DB updates.\n//    Cons: Data loss if cache goes down before flush. Complex.\n\n// 4. Cache-aside + TTL + invalidation: The sweet spot.\n//    Populate on read. Invalidate on write. TTL ensures eventual consistency.\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use cache-aside with TTL for most services. Never cache sensitive data (PII, financial details) without explicit TTL and encryption. Always consider the cache-to-DB consistency window and whether stale data is acceptable for the use case."
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
            children: "Interface"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Contract without state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Multiple inheritance of type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API contracts"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Abstract Class"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial implementation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single inheritance, shared state"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Template method pattern"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Record"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Transparent data carrier"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-generated methods"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "DTOs, value objects"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "quick-reference",
      children: "Quick Reference"
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