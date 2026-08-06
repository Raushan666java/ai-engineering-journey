"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[91013],{

/***/ 16212
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_60_interview_microservices_d_md_6ba_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-60-interview-microservices-d-md-6ba.json
const site_docs_courses_java_60_interview_microservices_d_md_6ba_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/60-interview-microservices-d","title":"── Istio DestinationRule (circuit breaker at mesh level) ──","description":"Microservices Advanced Topics - Flowchart","source":"@site/docs/courses/java/60-interview-microservices-d.md","sourceDirName":"courses/java","slug":"/java/60-interview-microservices-d","permalink":"/ai-engineering-journey/java/60-interview-microservices-d","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":67,"frontMatter":{"id":"60-interview-microservices-d","slug":"/java/60-interview-microservices-d","title":"── Istio DestinationRule (circuit breaker at mesh level) ──","sidebar_label":"── Istio DestinationRule (circuit breaker at mesh level) ──","sidebar_position":67},"sidebar":"coursesSidebar","previous":{"title":"── Deployment for a microservice ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-c"},"next":{"title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","permalink":"/ai-engineering-journey/java/60-interview-microservices"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/60-interview-microservices-d.md


const frontMatter = {
	id: '60-interview-microservices-d',
	slug: '/java/60-interview-microservices-d',
	title: '── Istio DestinationRule (circuit breaker at mesh level) ──',
	sidebar_label: '── Istio DestinationRule (circuit breaker at mesh level) ──',
	sidebar_position: 67
};
const contentTitle = undefined;

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
  "value": "Q24: What is idempotency and how do you implement it in microservices?",
  "id": "q24-what-is-idempotency-and-how-do-you-implement-it-in-microservices",
  "level": 3
}, {
  "value": "Q25: How do you handle schema changes in event-driven microservices?",
  "id": "q25-how-do-you-handle-schema-changes-in-event-driven-microservices",
  "level": 3
}, {
  "value": "Common Mistakes in Advanced Microservices (GFG-Style)",
  "id": "common-mistakes-in-advanced-microservices-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Not setting timeouts on all external calls",
  "id": "mistake-1-not-setting-timeouts-on-all-external-calls",
  "level": 3
}, {
  "value": "Mistake 2: Cache stampede without protection",
  "id": "mistake-2-cache-stampede-without-protection",
  "level": 3
}, {
  "value": "Mistake 3: Treating all services the same in deployment",
  "id": "mistake-3-treating-all-services-the-same-in-deployment",
  "level": 3
}, {
  "value": "Event-Driven vs Request-Driven Comparison Table",
  "id": "event-driven-vs-request-driven-comparison-table",
  "level": 2
}, {
  "value": "TypeScript Distributed Cache Simulator",
  "id": "typescript-distributed-cache-simulator",
  "level": 2
}, {
  "value": "Mermaid: Distributed Caching Architecture",
  "id": "mermaid-distributed-caching-architecture",
  "level": 2
}, {
  "value": "Chapter Quiz — Advanced Microservices",
  "id": "chapter-quiz--advanced-microservices",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices-d.png",
        alt: "Microservices Advanced Topics - Flowchart"
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
        href: "../../assets/images/lessons/java/60-interview-microservices-d/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-d/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices-d/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-d/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/60-interview-microservices-d/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/60-interview-microservices-d/visual-explanation.png",
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
      id: "q21-what-is-a-service-mesh-and-when-would-you-use-istio",
      children: "Q21: What is a service mesh and when would you use Istio?"
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
      children: "A service mesh manages service-to-service communication at the infrastructure layer using sidecar proxies. Istio injects an Envoy proxy alongside each pod, handling traffic management, security, and observability without changing application code."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ── Without service mesh: circuit breaker in application code ──\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n\n    @CircuitBreaker(name = \"userService\", fallbackMethod = \"fallback\")\n    public UserDto getUser(Long id) {\n        return userClient.getUser(id);\n    }\n}\n\n// ── With Istio: circuit breaker moves to infrastructure ──\n// application code is clean → no Resilience4j annotations needed\n@Service\npublic class OrderService {\n    @Autowired private UserServiceClient userClient;\n\n    public UserDto getUser(Long id) {\n        return userClient.getUser(id);  // No circuit breaker → Istio handles it\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── Istio DestinationRule (circuit breaker at mesh level) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: user-service\nspec:\n  host: user-service\n  trafficPolicy:\n    connectionPool:\n      tcp:\n        maxConnections: 100\n      http:\n        http1MaxPendingRequests: 10\n        http2MaxRequests: 100\n    outlierDetection:\n      consecutive5xxErrors: 5\n      interval: 30s\n      baseEjectionTime: 30s\n      maxEjectionPercent: 50\n---\n# ── Istio VirtualService (traffic splitting for canary) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: user-service\nspec:\n  hosts:\n    - user-service\n  http:\n    - route:\n        - destination:\n            host: user-service\n            subset: v1\n          weight: 90\n        - destination:\n            host: user-service\n            subset: v2\n          weight: 10\n    - timeout: 3s\n      retries:\n        attempts: 3\n        perTryTimeout: 1s\n---\n# ── Istio PeerAuthentication (mTLS between services) ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\napiVersion: security.istio.io/v1beta1\nkind: PeerAuthentication\nmetadata:\n  name: default\n  namespace: default\nspec:\n  mtls:\n    mode: STRICT  # All inter-service traffic must use mTLS\n---\n# ── Istio AuthorizationPolicy ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\napiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: order-service-policy\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  rules:\n    - from:\n        - source:\n            principals: [\"cluster.local/ns/default/sa/api-gateway\"]\n      to:\n        - operation:\n            methods: [\"GET\"]\n"
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
        children: "# Validate that migrations are reversible (check for down scripts)\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\nfor f in db/migration/*/V*.sql; do\n  down=\"${f/V/__down/V}\"\n  if [ ! -f \"${down}\" ]; then\n    echo \"WARNING: No undo migration for $f\"\n  fi\ndone\n\n# Check for SQL syntax errors via dry-run\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md) | **Next:** [Security Interview Q&amp;A](./61-interview-security.md)\nflyway migrate -dryRunOutput=dry-run.sql\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q24-what-is-idempotency-and-how-do-you-implement-it-in-microservices",
      children: "Q24: What is idempotency and how do you implement it in microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Idempotency means that executing the same operation multiple times has the same effect as executing it once. In distributed systems, retries are inevitable (network timeouts, leader elections), and without idempotency, retries cause duplicate orders, double charges, and data corruption."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Idempotency key pattern:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class PaymentService {\n\n    private final PaymentRepository paymentRepo;\n    private final IdempotencyRegistry idempotencyRegistry;\n\n    @Transactional\n    public PaymentResult processPayment( PaymentRequest request) {\n        // 1. Check idempotency — has this key been processed?\n        String idempotencyKey = request.idempotencyKey();\n        if (idempotencyRegistry.exists(idempotencyKey)) {\n            // Return the previously computed result — safe retry\n            return idempotencyRegistry.getResult(idempotencyKey);\n        }\n\n        // 2. Process the payment (deduct funds, etc.)\n        PaymentResult result = paymentGateway.charge(\n            request.amount(), request.currency());\n\n        // 3. Store the result keyed by idempotency key\n        idempotencyRegistry.store(idempotencyKey, result);\n\n        return result;\n    }\n}\n\n// Idempotency registry implementations:\n// 1. Redis with TTL: SET idempotency:key result NX EX 86400\n// 2. Database with unique constraint: idempotency_key VARCHAR(255) UNIQUE\n// 3. In-memory HashMap (for single-instance, not for production)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Database-level idempotency with unique constraints:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Entity\n@Table(name = \"payment_events\", uniqueConstraints =\n    @UniqueConstraint(name = \"uk_idempotency_key\", columnNames = \"idempotency_key\"))\npublic class PaymentEvent {\n    @Id @GeneratedValue private Long id;\n    @Column(name = \"idempotency_key\", nullable = false)\n    private String idempotencyKey;\n    private String status;\n    // ...\n}\n\n@Transactional\npublic PaymentResult processPayment(PaymentRequest request) {\n    try {\n        PaymentEvent event = new PaymentEvent();\n        event.setIdempotencyKey(request.idempotencyKey());\n        event.setStatus(\"PROCESSING\");\n        paymentEventRepo.save(event);  // Unique constraint prevents duplicates\n\n        PaymentResult result = paymentGateway.charge(request.amount());\n        event.setStatus(\"COMPLETED\");\n        return result;\n    } catch (DataIntegrityViolationException e) {\n        // Duplicate idempotency key → return stored result\n        return paymentEventRepo.findByStatus(\"COMPLETED\")\n            .orElseThrow(() -> new RetryableException(\"Previous request in progress\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Idempotency requirements by HTTP method:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Method"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Idempotent?"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Safe to retry?"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Always"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (full update)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (second delete returns 404 — same state)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Must use idempotency-key header"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Depends"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "❌ Use idempotency-key"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q25-how-do-you-handle-schema-changes-in-event-driven-microservices",
      children: "Q25: How do you handle schema changes in event-driven microservices?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Event schemas evolve over time. In event-driven systems, consumers and producers are deployed independently, so you must support multiple schema versions simultaneously."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 1: Schema registry (Avro/Protobuf with Schema Registry):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Producer sends schema-compatible events\n// Schema Registry enforces compatibility rules\n\n// Avro schema v1\nrecord OrderEventV1 {\n    string orderId;\n    string customerId;\n    double total;\n}\n\n// Avro schema v2 (backward compatible — added optional field)\nrecord OrderEventV2 {\n    string orderId;\n    string customerId;\n    double total;\n    union {null, string} couponCode = null;  // default null\n}\n\n// Compatibility types:\n// BACKWARD: New schema can read old data (default) — add optional fields\n// FORWARD: Old schema can read new data — add fields with defaults\n// FULL: Both backward and forward compatible\n// NONE: No compatibility checks — use with caution\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 2: Event versioning in the payload:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JSON event with version field\npublic class OrderEvent {\n    private int eventVersion;          // 1, 2, 3...\n    private String eventType;          // \"OrderCreated\"\n    private Map<String, Object> data;  // Version-specific payload\n\n    public OrderEvent(int version, String type, Map<String, Object> data) {\n        this.eventVersion = version;\n        this.eventType = type;\n        this.data = data;\n    }\n}\n\n// Consumer handles multiple versions\n@Component\npublic class OrderEventConsumer {\n\n    @KafkaListener(topics = \"order-events\")\n    public void consume(OrderEvent event) {\n        switch (event.getEventVersion()) {\n            case 1 -> handleV1(event.getData());\n            case 2 -> handleV2(event.getData());\n            default -> throw new UnsupportedEventException(\n                \"Version \" + event.getEventVersion() + \" not supported\");\n        }\n    }\n\n    private void handleV1(Map<String, Object> data) {\n        String orderId = (String) data.get(\"orderId\");\n        double total = (double) data.get(\"total\");\n        // V1 has no couponCode\n    }\n\n    private void handleV2(Map<String, Object> data) {\n        String orderId = (String) data.get(\"orderId\");\n        double total = (double) data.get(\"total\");\n        String couponCode = (String) data.getOrDefault(\"couponCode\", null);\n        // V2 added couponCode\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Strategy 3: Dual-write and event migration:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write to both old and new event topics during migration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consumers gradually switch from old to new topic"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Once all consumers migrate, stop writing to the old topic"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-advanced-microservices-gfg-style",
      children: "Common Mistakes in Advanced Microservices (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-not-setting-timeouts-on-all-external-calls",
      children: "Mistake 1: Not setting timeouts on all external calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: No timeout — thread blocks indefinitely\nrestTemplate.getForObject(\"/users/{id}\", UserDto.class, id);\n\n// ✅ CORRECT: Always set connect and read timeouts\n@Bean\npublic RestTemplate restTemplate() {\n    return new RestTemplateBuilder()\n        .connectTimeout(Duration.ofSeconds(2))\n        .readTimeout(Duration.ofSeconds(5))\n        .build();\n}\n\n// With WebClient:\nWebClient.builder()\n    .baseUrl(\"http://user-service\")\n    .clientConnector(new ReactorClientHttpConnector(\n        HttpClient.create()\n            .responseTimeout(Duration.ofSeconds(5))\n            .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 2000)\n    ))\n    .build();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-cache-stampede-without-protection",
      children: "Mistake 2: Cache stampede without protection"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: 100 concurrent requests all miss cache, all hit DB\npublic Product getProduct(Long id) {\n    Product cached = cache.get(id);\n    if (cached == null) {\n        cached = productRepo.findById(id).orElseThrow();\n        cache.put(id, cached);  // 100 threads all do this\n    }\n    return cached;\n}\n\n// ✅ CORRECT: Use locking to allow only one DB hit\npublic Product getProduct(Long id) {\n    Product cached = cache.get(id);\n    if (cached == null) {\n        synchronized (this) {\n            cached = cache.get(id);  // Double-check\n            if (cached == null) {\n                cached = productRepo.findById(id).orElseThrow();\n                cache.put(id, cached);\n            }\n        }\n    }\n    return cached;\n}\n\n// For distributed apps: Redis Redlock or SET NX\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-treating-all-services-the-same-in-deployment",
      children: "Mistake 3: Treating all services the same in deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ❌ WRONG: Same resources for all services\n# order-service: 2 CPU, 4GB RAM\n# audit-service: 2 CPU, 4GB RAM (over-provisioned — audit is I/O bound)\n\n# ✅ CORRECT: Right-size per service\n# order-service: 4 CPU, 8GB RAM (CPU-intensive, large heap)\n# audit-service: 1 CPU, 2GB RAM (light, async writes)\n# payment-service: 2 CPU, 4GB RAM (balanced, strict latency requirements)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "event-driven-vs-request-driven-comparison-table",
      children: "Event-Driven vs Request-Driven Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Request-Driven (REST)"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Event-Driven (Kafka/RabbitMQ)"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coupling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal — caller waits for response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Temporal decoupling — fire and forget"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Availability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires all services up"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial availability — events queued"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Consistency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Strong (if transactional)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Eventually consistent"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy — linear request flow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex — need tracing across events"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale by request volume"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale by event throughput + consumer groups"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Retry"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Client-side retry with idempotency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Broker-based retry (DLQ pattern)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Schema evolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "API versioning (URL/header)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Schema registry compatibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CRUD, queries, real-time responses"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Notifications, workflows, data synchronization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use request-driven:"
      }), " User-facing operations that need immediate response (checkout, login). ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use event-driven:"
      }), " Background processing, cross-service coordination, data replication."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-distributed-cache-simulator",
      children: "TypeScript Distributed Cache Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface CacheEntry<T> {\n  value: T;\n  expiresAt: number;\n}\n\nclass DistributedCacheSimulator {\n  private store = new Map<string, CacheEntry<unknown>>();\n  private locks = new Map<string, string>();  // key → lock owner\n\n  async get<T>(key: string): Promise<T | null> {\n    const entry = this.store.get(key);\n    if (!entry) return null;\n    if (Date.now() > entry.expiresAt) {\n      this.store.delete(key);\n      return null;\n    }\n    return entry.value as T;\n  }\n\n  async set<T>(key: string, value: T, ttlMs: number): Promise<void> {\n    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });\n  }\n\n  /** Cache stampede prevention using distributed lock */\n  async getOrCompute<T>(\n    key: string,\n    ttlMs: number,\n    computeFn: () => Promise<T>,\n    lockTimeoutMs = 5000\n  ): Promise<T> {\n    // Fast path: return cached value\n    const cached = await this.get<T>(key);\n    if (cached !== null) return cached;\n\n    // Try to acquire lock\n    const lockId = `lock:${key}`;\n    const lockToken = Math.random().toString(36);\n\n    if (this.locks.has(lockId)) {\n      // Another thread is computing — wait and retry\n      await new Promise(resolve => setTimeout(resolve, 100));\n      const retry = await this.get<T>(key);\n      if (retry !== null) return retry;\n    }\n\n    this.locks.set(lockId, lockToken);\n    try {\n      // Double-check cache\n      const again = await this.get<T>(key);\n      if (again !== null) return again;\n\n      // Compute value\n      const value = await computeFn();\n      await this.set(key, value, ttlMs);\n      return value;\n    } finally {\n      if (this.locks.get(lockId) === lockToken) {\n        this.locks.delete(lockId);\n      }\n    }\n  }\n\n  /** Distributed cache stats */\n  stats(): { entries: number; locks: number; keys: string[] } {\n    return {\n      entries: this.store.size,\n      locks: this.locks.size,\n      keys: [...this.store.keys()]\n    };\n  }\n}\n\n// Demonstration\nconst cache = new DistributedCacheSimulator();\nasync function demo() {\n  const result = await cache.getOrCompute(\n    'product:42',\n    60000,\n    async () => {\n      console.log('[COMPUTE] Loading from database...');\n      await new Promise(r => setTimeout(r, 200));\n      return { id: 42, name: 'Widget', price: 29.99 };\n    }\n  );\n  console.log('[RESULT]', result);\n  console.log('[STATS]', cache.stats());\n}\ndemo();\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-distributed-caching-architecture",
      children: "Mermaid: Distributed Caching Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    subgraph Clients\n        A[API Gateway]\n    end\n\n    subgraph Cache Layer\n        B[Redis Cluster<br/>Primary]\n        C[Redis Replica 1]\n        D[Redis Replica 2]\n    end\n\n    subgraph Services\n        E[Order Service]\n        F[Product Service]\n        G[User Service]\n    end\n\n    subgraph Database\n        H[(PostgreSQL<br/>Primary)]\n        I[(PostgreSQL<br/>Replica)]\n    end\n\n    A --> B\n    B --> C\n    B --> D\n\n    E --> B\n    E --> H\n    F --> B\n    F --> H\n    G --> B\n    G --> H\n\n    H -.->|Streaming Replication| I\n    B -.->|Cache invalidation| E\n    B -.->|Cache invalidation| F\n\n    style B fill:#4caf50,color:#fff\n    style C fill:#81c784,color:#fff\n    style D fill:#81c784,color:#fff\n    style H fill:#2196f3,color:#fff\n    style I fill:#64b5f6,color:#fff\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--advanced-microservices",
      children: "Chapter Quiz — Advanced Microservices"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary mechanism for idempotency in REST APIs?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Using POST for all requests"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) An idempotency-key header that the client sends"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Using HTTP Basic Auth"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Sending requests twice"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) An idempotency-key header.** The client generates a unique key for each operation. The server stores the result keyed by this value, so retries with the same key return the stored result instead of executing the operation again.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which schema evolution strategy allows new consumers to read old events?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) BACKWARD compatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) FORWARD compatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) FULL compatibility"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) NONE"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**A) BACKWARD compatibility.** Backward compatibility means the new schema can read data written with the old schema — achieved by making new fields optional with defaults.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the most effective cache stampede prevention pattern in distributed systems?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Longer TTL"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Cache-aside with distributed locking"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Using a larger cache"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Disabling the cache"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Cache-aside with distributed locking.** A distributed lock (Redis SET NEX) ensures only one request hits the database on cache miss. Other requests wait briefly and read the populated cache.\n"]
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