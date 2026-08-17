"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[72551],{

/***/ 53658
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_60_interview_microservices_b_md_d92_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-60-interview-microservices-b-md-d92.json
const site_docs_courses_java_60_interview_microservices_b_md_d92_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/60-interview-microservices-b","title":"── Multi-stage Dockerfile for a Spring Boot microservice ──","description":"Kubernetes Microservices Deployment - Flowchart","source":"@site/docs/courses/java/60-interview-microservices-b.md","sourceDirName":"courses/java","slug":"/java/60-interview-microservices-b","permalink":"/ai-engineering-journey/java/60-interview-microservices-b","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":65,"frontMatter":{"id":"60-interview-microservices-b","slug":"/java/60-interview-microservices-b","title":"── Multi-stage Dockerfile for a Spring Boot microservice ──","sidebar_label":"── Multi-stage Dockerfile for a Spring Boot microservice ──","sidebar_position":65},"sidebar":"course-java","previous":{"title":"Chapter 60: Microservices Interview Q&A (Part A → Q1–Q8)","permalink":"/ai-engineering-journey/java/60-interview-microservices-a"},"next":{"title":"── Deployment for a microservice ──","permalink":"/ai-engineering-journey/java/60-interview-microservices-c"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/60-interview-microservices-b.md


const frontMatter = {
	id: '60-interview-microservices-b',
	slug: '/java/60-interview-microservices-b',
	title: '── Multi-stage Dockerfile for a Spring Boot microservice ──',
	sidebar_label: '── Multi-stage Dockerfile for a Spring Boot microservice ──',
	sidebar_position: 65
};
const contentTitle = undefined;

const assets = {

};



const toc = [{
  "value": "Chapter at a Glance",
  "id": "chapter-at-a-glance",
  "level": 2
}, {
  "value": "Chapter Roadmap",
  "id": "chapter-roadmap",
  "level": 2
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
  "value": "Common Mistakes in Microservices (GFG-Style)",
  "id": "common-mistakes-in-microservices-gfg-style",
  "level": 2
}, {
  "value": "Mistake 1: Synchronous communication chains",
  "id": "mistake-1-synchronous-communication-chains",
  "level": 3
}, {
  "value": "Mistake 2: Shared database across services",
  "id": "mistake-2-shared-database-across-services",
  "level": 3
}, {
  "value": "Mistake 3: No circuit breaker on external calls",
  "id": "mistake-3-no-circuit-breaker-on-external-calls",
  "level": 3
}, {
  "value": "Mistake 4: Missing observability (logs, metrics, traces)",
  "id": "mistake-4-missing-observability-logs-metrics-traces",
  "level": 3
}, {
  "value": "Mistake 5: Over-engineering (starting with microservices)",
  "id": "mistake-5-over-engineering-starting-with-microservices",
  "level": 3
}, {
  "value": "Monolith vs Microservices Comparison Table",
  "id": "monolith-vs-microservices-comparison-table",
  "level": 2
}, {
  "value": "TypeScript Microservice Orchestration Simulator",
  "id": "typescript-microservice-orchestration-simulator",
  "level": 2
}, {
  "value": "Mermaid: Circuit Breaker State Machine",
  "id": "mermaid-circuit-breaker-state-machine",
  "level": 2
}, {
  "value": "Chapter Quiz — Microservices (Part 2)",
  "id": "chapter-quiz--microservices-part-2",
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
    blockquote: "blockquote",
    code: "code",
    details: "details",
    h2: "h2",
    h3: "h3",
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
    children: [(0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/60-interview-microservices-b.png",
        alt: "Kubernetes Microservices Deployment - Flowchart"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
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
      id: "q9-what-is-cqrs-and-how-do-you-implement-it",
      children: "Q9: What is CQRS and how do you implement it?"
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
        children: "# ── Multi-stage Dockerfile for a Spring Boot microservice ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\n\n# Stage 1: Build the application\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nFROM eclipse-temurin:21-jdk AS builder\nWORKDIR /build\n\n# Copy Maven wrapper and pom.xml first (cache layer)\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nCOPY mvnw pom.xml ./\nCOPY .mvn .mvn\nRUN ./mvnw dependency:go-offline -B\n\n# Copy source and build\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nCOPY src src\nRUN ./mvnw package -DskipTests -B\n\n# Stage 2: Extract Spring Boot layered JAR\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nFROM builder AS layers\nWORKDIR /layers\nRUN java -Djarmode=layertools -jar /build/target/*.jar extract\n\n# Stage 3: Runtime image (minimal)\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nFROM eclipse-temurin:21-jre-alpine\nWORKDIR /app\n\n# Copy each layer separately (Docker caches layers independently)\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nCOPY --from=layers layers/dependencies/ ./\nCOPY --from=layers layers/spring-boot-loader/ ./\nCOPY --from=layers layers/snapshot-dependencies/ ./\nCOPY --from=layers layers/application/ ./\n\n# Non-root user\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nRUN addgroup -S appgroup && adduser -S appuser -G appgroup\nUSER appuser\n\nEXPOSE 8080\n\nHEALTHCHECK --interval=30s --timeout=3s --retries=3 \\\n  CMD wget -qO- http://localhost:8080/actuator/health || exit 1\n\nENTRYPOINT [\"java\", \"org.springframework.boot.loader.launch.JarLauncher\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ── docker-compose.yml for local development ──\n\n> **Previous:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-a.md) | **Next:** [Microservices Interview Q&amp;A (cont.)](./60-interview-microservices-c.md)\nversion: '3.8'\nservices:\n  eureka-server:\n    build: ./eureka-server\n    ports:\n      - \"8761:8761\"\n\n  config-server:\n    build: ./config-server\n    ports:\n      - \"8888:8888\"\n    depends_on:\n      - eureka-server\n\n  user-service:\n    build: ./user-service\n    ports:\n      - \"8081:8081\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - config-server\n\n  order-service:\n    build: ./order-service\n    ports:\n      - \"8082:8082\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - config-server\n      - user-service\n\n  api-gateway:\n    build: ./api-gateway\n    ports:\n      - \"8080:8080\"\n    environment:\n      - SPRING_PROFILES_ACTIVE=docker\n      - EUREKA_CLIENT_SERVICEURL_DEFAULTZONE=http://eureka-server:8761/eureka/\n    depends_on:\n      - eureka-server\n      - user-service\n      - order-service\n\n  kafka:\n    image: confluentinc/cp-kafka:7.6.0\n    ports:\n      - \"9092:9092\"\n    environment:\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n\n  zipkin:\n    image: openzipkin/zipkin\n    ports:\n      - \"9411:9411\"\n"
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
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "common-mistakes-in-microservices-gfg-style",
      children: "Common Mistakes in Microservices (GFG-Style)"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-1-synchronous-communication-chains",
      children: "Mistake 1: Synchronous communication chains"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Request threads through 3+ services synchronously\n// Order Service → Payment Service → Inventory Service → Shipping Service\n// If Shipping is slow, ALL upstream threads block → cascading failure\n\n// ✅ CORRECT: Use async messaging for non-critical path\n// Order Service publishes \"OrderCreated\" event\n// Inventory, Payment, Shipping subscribe independently\n@Service\npublic class OrderService {\n    private final KafkaTemplate<String, OrderEvent> kafka;\n\n    public void createOrder(OrderRequest req) {\n        Order order = orderRepo.save(req.toOrder());\n        kafka.send(\"order-events\", new OrderCreatedEvent(order.getId()));\n        // Return immediately → downstream services process in parallel\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-2-shared-database-across-services",
      children: "Mistake 2: Shared database across services"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Multiple services access the same database\n// OrderService → orders_db\n// PaymentService → orders_db  (same DB!)\n// ShippingService → orders_db  (same DB!)\n// Schema changes require coordinated deployments → no autonomy\n\n// ✅ CORRECT: Database per service\n// OrderService → orders_db (owns orders and order_items)\n// PaymentService → payments_db (owns payments table)\n// ShippingService → shipping_db (owns shipments table)\n// Services communicate via API calls or events, not shared tables\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-3-no-circuit-breaker-on-external-calls",
      children: "Mistake 3: No circuit breaker on external calls"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: Direct HTTP call with no protection\n@Service\npublic class OrderService {\n    public UserDto getUser(Long id) {\n        // If user-service is down, this thread blocks for timeout seconds\n        // With 50 threads × 30s timeout = 1500 thread-seconds wasted\n        return restTemplate.getForObject(\"/users/{id}\", UserDto.class, id);\n    }\n}\n\n// ✅ CORRECT: Wrap with Resilience4j CircuitBreaker\n@Service\npublic class OrderService {\n    @CircuitBreaker(name = \"userService\", fallbackMethod = \"getUserFallback\")\n    public UserDto getUser(Long id) {\n        return restTemplate.getForObject(\"/users/{id}\", UserDto.class, id);\n    }\n\n    public UserDto getUserFallback(Long id, Throwable t) {\n        return new UserDto(id, \"Unknown\", \"unavailable@fallback.com\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-4-missing-observability-logs-metrics-traces",
      children: "Mistake 4: Missing observability (logs, metrics, traces)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# ❌ WRONG: No structured logging, no distributed tracing\n# When a request fails across 5 services, you have 5 separate log files\n# with no correlation ID → impossible to debug\n\n# ✅ CORRECT: Always include traceId and spanId\nspring.application.name=order-service\nlogging.pattern.level=trace_id=%mdc{traceId:-no-trace} span_id=%mdc{spanId:-no-span} %5p\nmanagement.tracing.sampling.probability=1.0  # 100% sampling in dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mistake-5-over-engineering-starting-with-microservices",
      children: "Mistake 5: Over-engineering (starting with microservices)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ❌ WRONG: New project with 12 microservices, event bus, CQRS, service mesh\n// 6 months later → still not shipping features, infrastructure complexity dominates\n\n// ✅ CORRECT: Start as modular monolith, extract when needed\n// Phase 1: Single deployable with clear module boundaries\n// Phase 2: Extract hottest path (e.g., payment processing) as first service\n// Phase 3: Extract read models (CQRS) when scaling read traffic\n// Phase 4: Add event bus when async processing is proven necessary\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "monolith-vs-microservices-comparison-table",
      children: "Monolith vs Microservices Comparison Table"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Monolith"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Microservices"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Deployment"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single artifact"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "N independent services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Scaling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale entire app"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scale individual services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Team autonomy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared codebase — coordination needed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Each team owns services end-to-end"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Database"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single database (or few)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Database per service"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easier (single process)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Complex (contract tests, integration tests)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Single log stream"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Distributed tracing needed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Startup time"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes (large WAR/JAR)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds (each service is small)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Complexity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low initial"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High initial (service discovery, config, gateway)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Change velocity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slows as team grows"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scales with team size"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Network latency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None (in-process calls)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Added (remote calls, serialization)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose monolith:"
      }), " Team < 10, product-market fit not validated, simple domain, no need for polyglot tech stack."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "When to choose microservices:"
      }), " Team > 20, multiple subdomains with clear boundaries, different scaling requirements per service, need for independent deployability."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "typescript-microservice-orchestration-simulator",
      children: "TypeScript Microservice Orchestration Simulator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-typescript",
        children: "interface ServiceInstance {\n  serviceId: string;\n  host: string;\n  port: number;\n  healthy: boolean;\n  lastHeartbeat: Date;\n}\n\ntype CircuitState = 'CLOSED' | 'OPEN' | 'HALF_OPEN';\n\ninterface CircuitBreakerState {\n  serviceName: string;\n  state: CircuitState;\n  failureCount: number;\n  lastFailureTime: Date | null;\n  threshold: number;\n  timeoutMs: number;\n}\n\nclass ServiceOrchestrator {\n  private registry = new Map<string, ServiceInstance[]>();\n  private circuits = new Map<string, CircuitBreakerState>();\n\n  /** Register a service instance */\n  register(service: ServiceInstance): void {\n    const instances = this.registry.get(service.serviceId) || [];\n    instances.push(service);\n    this.registry.set(service.serviceId, instances);\n    console.log(`[REGISTER] ${service.serviceId} at ${service.host}:${service.port}`);\n  }\n\n  /** Get healthy instances for a service */\n  discover(serviceId: string): ServiceInstance[] {\n    const instances = this.registry.get(serviceId) || [];\n    const healthy = instances.filter(i => i.healthy);\n    if (healthy.length === 0) {\n      console.log(`[DISCOVERY] WARNING: No healthy instances for ${serviceId}`);\n    }\n    return healthy;\n  }\n\n  /** Circuit breaker state machine */\n  callService(\n    serviceId: string,\n    action: () => Promise<unknown>,\n    fallback: () => Promise<unknown>\n  ): Promise<unknown> {\n    let cb = this.circuits.get(serviceId);\n    if (!cb) {\n      cb = { serviceName: serviceId, state: 'CLOSED', failureCount: 0,\n             lastFailureTime: null, threshold: 5, timeoutMs: 30000 };\n      this.circuits.set(serviceId, cb);\n    }\n\n    if (cb.state === 'OPEN') {\n      const timeSinceFailure = Date.now() - (cb.lastFailureTime?.getTime() || 0);\n      if (timeSinceFailure > cb.timeoutMs) {\n        console.log(`[CIRCUIT] ${serviceId}: OPEN → HALF_OPEN (timeout elapsed)`);\n        cb.state = 'HALF_OPEN';\n      } else {\n        console.log(`[CIRCUIT] ${serviceId}: OPEN — falling back immediately`);\n        return fallback();\n      }\n    }\n\n    return action()\n      .then(result => {\n        if (cb.state === 'HALF_OPEN') {\n          console.log(`[CIRCUIT] ${serviceId}: HALF_OPEN → CLOSED (success)`);\n          cb.state = 'CLOSED';\n        }\n        cb.failureCount = 0;\n        return result;\n      })\n      .catch(err => {\n        cb.failureCount++;\n        cb.lastFailureTime = new Date();\n        if (cb.failureCount >= cb.threshold || cb.state === 'HALF_OPEN') {\n          console.log(`[CIRCUIT] ${serviceId}: ${cb.state} → OPEN (failures=${cb.failureCount})`);\n          cb.state = 'OPEN';\n        }\n        return fallback();\n      });\n  }\n\n  /** Load balance using round-robin */\n  getNextInstance(serviceId: string): ServiceInstance | null {\n    const healthy = this.discover(serviceId);\n    if (healthy.length === 0) return null;\n    const index = Math.floor(Math.random() * healthy.length);\n    return healthy[index];\n  }\n\n  /** Simulate a request through the full chain */\n  async request(\n    serviceChain: string[],\n    action: (svc: ServiceInstance) => Promise<unknown>\n  ): Promise<void> {\n    console.log(`\\n[REQUEST] Chain: ${serviceChain.join(' → ')}`);\n    for (const serviceId of serviceChain) {\n      const instance = this.getNextInstance(serviceId);\n      if (!instance) {\n        console.log(`[FAIL] ${serviceId}: No available instances`);\n        return;\n      }\n      console.log(`[ROUTE] ${serviceId} → ${instance.host}:${instance.port}`);\n\n      await this.callService(\n        serviceId,\n        () => action(instance),\n        async () => ({ status: 503, message: `${serviceId} fallback response` })\n      );\n    }\n    console.log(`[COMPLETE] Chain executed successfully`);\n  }\n}\n\n// ── Demonstration ──\nconst orchestrator = new ServiceOrchestrator();\norchestrator.register({ serviceId: 'auth', host: '10.0.1.1', port: 8081, healthy: true, lastHeartbeat: new Date() });\norchestrator.register({ serviceId: 'orders', host: '10.0.1.2', port: 8082, healthy: true, lastHeartbeat: new Date() });\norchestrator.register({ serviceId: 'payment', host: '10.0.1.3', port: 8083, healthy: true, lastHeartbeat: new Date() });\n\norchestrator.request(\n  ['auth', 'orders', 'payment'],\n  async (svc) => {\n    console.log(`  → Calling ${svc.serviceId} on port ${svc.port}`);\n    return { success: true };\n  }\n);\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "mermaid-circuit-breaker-state-machine",
      children: "Mermaid: Circuit Breaker State Machine"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "stateDiagram-v2\n    [*] --> CLOSED\n    CLOSED --> OPEN : Failure threshold exceeded\n    OPEN --> HALF_OPEN : Timeout elapsed\n    HALF_OPEN --> CLOSED : Success (reset counter)\n    HALF_OPEN --> OPEN : Failure (stay open)\n\n    state CLOSED {\n        [*] --> NormalOperation\n        NormalOperation --> CountingFailures : Request fails\n        CountingFailures --> [*] : Failure < threshold\n    }\n\n    state OPEN {\n        [*] --> RejectingRequests\n        RejectingRequests --> [*] : Fast-fail with fallback\n    }\n\n    state HALF_OPEN {\n        [*] --> Probing\n        Probing --> Success : Allow single request\n        Probing --> Failure : Reject immediately\n    }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz--microservices-part-2",
      children: "Chapter Quiz — Microservices (Part 2)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "4",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the primary disadvantage of synchronous communication chains in microservices?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) They are more complex to code"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) A slow downstream service blocks threads upstream → cascading latency"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) They use more memory"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) They require HTTP/2"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) A slow downstream service blocks threads upstream.** If Service D is slow, Services A, B, and C all accumulate blocked threads. This can exhaust thread pools and cause system-wide failures.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "5",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which pattern prevents cascading failures from an unresponsive downstream service?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Service discovery"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Circuit breaker"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Database per service"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) API gateway"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Circuit breaker.** The circuit breaker detects failures and opens the circuit, preventing further calls to the failing service. This stops failures from cascading through the system.\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "6",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the recommended starting architecture for a new product with an unknown scaling profile?\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "A) Full microservices with event sourcing"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "B) Modular monolith — extract services when needed"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C) Serverless functions only"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "D) Monolith with no module boundaries"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.details, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.summary, {
        children: "Answer"
      }), "\n**B) Modular monolith.** Starting with microservices adds complexity before product-market fit is proven. A modular monolith with clear bounded contexts allows easy extraction later.\n"]
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