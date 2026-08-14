"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[5817],{

/***/ 22978
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_62_interview_testing_md_68f_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-62-interview-testing-md-68f.json
const site_docs_courses_java_62_interview_testing_md_68f_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/62-interview-testing","title":"Testing Interview Q&A","description":"Previous Tools &amp; DevOps Interview Q&amp;A","source":"@site/docs/courses/java/62-interview-testing.md","sourceDirName":"courses/java","slug":"/java/62-interview-testing","permalink":"/ai-engineering-journey/java/62-interview-testing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":70,"frontMatter":{"id":"62-interview-testing","slug":"/java/62-interview-testing","title":"Testing Interview Q&A","sidebar_label":"Testing Interview Q&A","sidebar_position":70},"sidebar":"course-java","previous":{"title":"Security Interview Q&A","permalink":"/ai-engineering-journey/java/61-interview-security"},"next":{"title":"63. Tools & DevOps — Interview Q&A","permalink":"/ai-engineering-journey/java/63-interview-tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/62-interview-testing.md


const frontMatter = {
	id: '62-interview-testing',
	slug: '/java/62-interview-testing',
	title: 'Testing Interview Q&A',
	sidebar_label: 'Testing Interview Q&A',
	sidebar_position: 70
};
const contentTitle = 'Testing Interview Q&A';

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
  "value": "Q1: Explain the testing pyramid. What should you test at each level?",
  "id": "q1-explain-the-testing-pyramid-what-should-you-test-at-each-level",
  "level": 3
}, {
  "value": "Q2: What are the key JUnit 5 annotations? How do you use @Test, @ParameterizedTest, @RepeatedTest, and @TestFactory?",
  "id": "q2-what-are-the-key-junit-5-annotations-how-do-you-use-test-parameterizedtest-repeatedtest-and-testfactory",
  "level": 3
}, {
  "value": "Q3: How does Mockito work? Explain mock, spy, @InjectMocks, argument matchers, and verification.",
  "id": "q3-how-does-mockito-work-explain-mock-spy-injectmocks-argument-matchers-and-verification",
  "level": 3
}, {
  "value": "Q4: What are Spring Boot testing slices? Explain @WebMvcTest, @DataJpaTest, @JsonTest, and @RestClientTest.",
  "id": "q4-what-are-spring-boot-testing-slices-explain-webmvctest-datajpatest-jsontest-and-restclienttest",
  "level": 3
}, {
  "value": "Q5: How do you use Testcontainers in Spring Boot tests? Explain module containers, static containers, and reusable containers.",
  "id": "q5-how-do-you-use-testcontainers-in-spring-boot-tests-explain-module-containers-static-containers-and-reusable-containers",
  "level": 3
}, {
  "value": "Q6: How do you write integration tests in Spring Boot? How do you manage database transactions and test profiles?",
  "id": "q6-how-do-you-write-integration-tests-in-spring-boot-how-do-you-manage-database-transactions-and-test-profiles",
  "level": 3
}, {
  "value": "Q7: Explain the F.I.R.S.T. principles of unit testing. How do you apply them in practice?",
  "id": "q7-explain-the-first-principles-of-unit-testing-how-do-you-apply-them-in-practice",
  "level": 3
}, {
  "value": "Q8: What is code coverage? How do you configure JaCoCo with coverage thresholds in a Spring Boot project?",
  "id": "q8-what-is-code-coverage-how-do-you-configure-jacoco-with-coverage-thresholds-in-a-spring-boot-project",
  "level": 3
}, {
  "value": "Q9: What is mutation testing? How do you configure Pitest in a Spring Boot project?",
  "id": "q9-what-is-mutation-testing-how-do-you-configure-pitest-in-a-spring-boot-project",
  "level": 3
}, {
  "value": "Q10: How do you write parameterized and dynamic tests in JUnit 5? When would you use each?",
  "id": "q10-how-do-you-write-parameterized-and-dynamic-tests-in-junit-5-when-would-you-use-each",
  "level": 3
}, {
  "value": "Q11: How do you write tests for asynchronous code in Spring Boot? How do you handle @Async, CompletableFuture, and reactive types?",
  "id": "q11-how-do-you-write-tests-for-asynchronous-code-in-spring-boot-how-do-you-handle-async-completablefuture-and-reactive-types",
  "level": 3
}, {
  "value": "Q12: How do you write performance tests for a Spring Boot application? Describe JMH, Gatling, and k6.",
  "id": "q12-how-do-you-write-performance-tests-for-a-spring-boot-application-describe-jmh-gatling-and-k6",
  "level": 3
}, {
  "value": "Q13: What is TDD? How do you apply it in a Spring Boot project? Show the red-green-refactor cycle.",
  "id": "q13-what-is-tdd-how-do-you-apply-it-in-a-spring-boot-project-show-the-red-green-refactor-cycle",
  "level": 3
}, {
  "value": "Q14: What is BDD? How does it differ from TDD? Explain Given-When-Then with Cucumber and JUnit 5.",
  "id": "q14-what-is-bdd-how-does-it-differ-from-tdd-explain-given-when-then-with-cucumber-and-junit-5",
  "level": 3
}, {
  "value": "Q15: How do you test database migrations with Flyway or Liquibase in Spring Boot?",
  "id": "q15-how-do-you-test-database-migrations-with-flyway-or-liquibase-in-spring-boot",
  "level": 3
}, {
  "value": "Q16: What are best practices for test naming conventions? How do you structure test classes?",
  "id": "q16-what-are-best-practices-for-test-naming-conventions-how-do-you-structure-test-classes",
  "level": 3
}, {
  "value": "Q17: How do you test exception handling and error scenarios in Spring Boot?",
  "id": "q17-how-do-you-test-exception-handling-and-error-scenarios-in-spring-boot",
  "level": 3
}, {
  "value": "Q18: How do you test file upload and download in Spring Boot?",
  "id": "q18-how-do-you-test-file-upload-and-download-in-spring-boot",
  "level": 3
}, {
  "value": "Q19: How do you test security configurations in Spring Boot? How do you test @PreAuthorize annotations?",
  "id": "q19-how-do-you-test-security-configurations-in-spring-boot-how-do-you-test-preauthorize-annotations",
  "level": 3
}, {
  "value": "Q20: How do you test scheduled tasks in Spring Boot? How do you verify @Scheduled behavior?",
  "id": "q20-how-do-you-test-scheduled-tasks-in-spring-boot-how-do-you-verify-scheduled-behavior",
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
        id: "testing-interview-qa",
        children: "Testing Interview Q&A"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/61-interview-security",
          children: "Security Interview Q&A"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/63-interview-tools",
          children: "Tools & DevOps Interview Q&A"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This chapter covers everything you need to know about testing Java and Spring Boot applications for technical interviews. From the testing pyramid and JUnit 5 features to Mockito mocking, Spring Boot testing slices, Testcontainers for integration testing, performance testing with JMH and Gatling, and code coverage with JaCoCo and Pitest → each question provides detailed explanations with complete, working code examples. A strong testing strategy is the hallmark of a professional software engineer. Understanding these patterns will help you build reliable, maintainable, and well-tested applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/62-interview-testing.png",
        alt: "Testing Interview Topics - Flowchart"
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
        href: "../../assets/images/lessons/java/62-interview-testing/handwritten-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/62-interview-testing/handwritten-notes.png",
          alt: "Handwritten notes",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Handwritten notes"
          }), "Condensed notes for deliberate review."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/62-interview-testing/sticky-notes.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/62-interview-testing/sticky-notes.png",
          alt: "Sticky-note revision",
          loading: "lazy"
        }), "\n    ", (0,jsx_runtime.jsxs)(_components.span, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Sticky-note revision"
          }), "Fast recall prompts for revision."]
        }), "\n  "]
      }), "\n  ", (0,jsx_runtime.jsxs)(_components.a, {
        className: "lesson-visual-card",
        href: "../../assets/images/lessons/java/62-interview-testing/visual-explanation.png",
        target: "_blank",
        rel: "noopener",
        children: ["\n    ", (0,jsx_runtime.jsx)(_components.img, {
          src: "../../assets/images/lessons/java/62-interview-testing/visual-explanation.png",
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
      id: "q1-explain-the-testing-pyramid-what-should-you-test-at-each-level",
      children: "Q1: Explain the testing pyramid. What should you test at each level?"
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
      children: "The testing pyramid is a conceptual model that describes the ideal distribution of tests across different levels of granularity. The pyramid has three layers: Unit Tests (base, largest), Integration Tests (middle), and End-to-End Tests (top, smallest)."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Unit Tests"
      }), " form the base of the pyramid → they should be the most numerous, fastest, and cheapest to write and maintain. Unit tests verify individual components in isolation, mocking all external dependencies. They test business logic, edge cases, validation rules, and calculations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ExtendWith(MockitoExtension.class)\nclass OrderServiceTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Mock\n    private InventoryService inventoryService;\n\n    @InjectMocks\n    private OrderService orderService;\n\n    @Test\n    void placeOrderShouldSucceedWhenInventoryIsAvailable() {\n        OrderItem item = new OrderItem(\"SKU-001\", 2);\n        when(inventoryService.isAvailable(\"SKU-001\", 2)).thenReturn(true);\n        when(orderRepository.save(any(Order.class))).thenAnswer(invocation -> {\n            Order order = invocation.getArgument(0);\n            order.setId(1L);\n            return order;\n        });\n\n        Order result = orderService.placeOrder(\"customer-1\", List.of(item));\n\n        assertThat(result).isNotNull();\n        assertThat(result.getId()).isEqualTo(1L);\n        assertThat(result.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n        verify(inventoryService).reserveInventory(\"SKU-001\", 2);\n    }\n\n    @Test\n    void placeOrderShouldThrowWhenInventoryIsUnavailable() {\n        OrderItem item = new OrderItem(\"SKU-001\", 2);\n        when(inventoryService.isAvailable(\"SKU-001\", 2)).thenReturn(false);\n\n        assertThatThrownBy(() -> orderService.placeOrder(\"customer-1\", List.of(item)))\n            .isInstanceOf(InsufficientInventoryException.class)\n            .hasMessageContaining(\"SKU-001\");\n\n        verify(orderRepository, never()).save(any());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Integration Tests"
      }), " form the middle layer. They verify that components work together correctly → database access, API endpoints, message queues, and external service clients. These tests use real infrastructure where practical (real database, test containers) and mock only external services."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@AutoConfigureMockMvc\nclass OrderControllerIntegrationTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @BeforeEach\n    void setUp() {\n        orderRepository.deleteAll();\n    }\n\n    @Test\n    void createOrderShouldPersistOrder() throws Exception {\n        OrderRequest request = new OrderRequest(\"customer-1\", List.of(\n            new OrderItemRequest(\"SKU-001\", 2)\n        ));\n\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(asJsonString(request)))\n            .andExpect(status().isCreated())\n            .andExpect(jsonPath(\"$.id\").isNumber())\n            .andExpect(jsonPath(\"$.customerId\").value(\"customer-1\"))\n            .andExpect(jsonPath(\"$.status\").value(\"CONFIRMED\"));\n\n        assertThat(orderRepository.count()).isEqualTo(1);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "End-to-End Tests"
      }), " form the top of the pyramid → they are the fewest, slowest, and most expensive. E2E tests simulate real user flows across the entire system, including the frontend, backend, and external integrations."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Tag(\"e2e\")\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\nclass OrderFullFlowE2ETest {\n\n    @Autowired\n    private TestRestTemplate restTemplate;\n\n    @Test\n    void completeOrderFlow() {\n        // 1. Authenticate\n        ResponseEntity<AuthResponse> authResponse = restTemplate.postForEntity(\n            \"/api/auth/login\",\n            new LoginRequest(\"user@example.com\", \"password\"),\n            AuthResponse.class);\n        String token = authResponse.getBody().accessToken();\n\n        // 2. Browse products\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBearerAuth(token);\n        HttpEntity<Void> entity = new HttpEntity<>(headers);\n\n        ResponseEntity<Product[]> productsResponse = restTemplate.exchange(\n            \"/api/products\", HttpMethod.GET, entity, Product[].class);\n        Product product = productsResponse.getBody()[0];\n\n        // 3. Place order\n        OrderRequest orderRequest = new OrderRequest(\"customer-1\",\n            List.of(new OrderItemRequest(product.getSku(), 1)));\n\n        ResponseEntity<Order> orderResponse = restTemplate.exchange(\n            \"/api/orders\", HttpMethod.POST,\n            new HttpEntity<>(orderRequest, headers), Order.class);\n\n        assertThat(orderResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);\n        assertThat(orderResponse.getBody().getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Best practices by pyramid level:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Unit"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Integration"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "E2E"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Speed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Milliseconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Seconds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Minutes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isolation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full (all mocked)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Partial (real DB, mocked network)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "None"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Reliability"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (flaky)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Coverage target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "70-80%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "15-20%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5-10%"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Debugging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Easy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hard"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CI frequency"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Every commit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Per release"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q2-what-are-the-key-junit-5-annotations-how-do-you-use-test-parameterizedtest-repeatedtest-and-testfactory",
      children: "Q2: What are the key JUnit 5 annotations? How do you use @Test, @ParameterizedTest, @RepeatedTest, and @TestFactory?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["JUnit 5 introduces several annotations beyond the basic ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@Test"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class JUnit5AnnotationsTest {\n\n    // Basic test\n    @Test\n    void standardTest() {\n        assertThat(2 + 2).isEqualTo(4);\n    }\n\n    // Display name for reporting\n    @Test\n    @DisplayName(\"Adding two numbers should return the sum\")\n    @Tag(\"smoke\")\n    void testWithDisplayName() {\n        Calculator calc = new Calculator();\n        assertThat(calc.add(2, 3)).isEqualTo(5);\n    }\n\n    // Parameterized test with value source\n    @ParameterizedTest\n    @ValueSource(ints = {1, 2, 3, 4, 5})\n    @DisplayName(\"Positive numbers should pass validation\")\n    void testWithValueSource(int number) {\n        assertThat(number > 0).isTrue();\n    }\n\n    // Parameterized test with CSV source\n    @ParameterizedTest\n    @CsvSource({\n        \"apple, 1\",\n        \"banana, 2\",\n        \"cherry, 3\"\n    })\n    @DisplayName(\"Fruits should have specific positions\")\n    void testWithCsvSource(String fruit, int position) {\n        assertThat(Fruit.valueOf(fruit.toUpperCase()).ordinal() + 1)\n            .isEqualTo(position);\n    }\n\n    // Parameterized test with method source\n    @ParameterizedTest\n    @MethodSource(\"provideOrdersForCalculation\")\n    @DisplayName(\"Order total calculation\")\n    void testOrderTotal(Order order, BigDecimal expectedTotal) {\n        assertThat(order.calculateTotal()).isEqualByComparingTo(expectedTotal);\n    }\n\n    static Stream<Arguments> provideOrdersForCalculation() {\n        return Stream.of(\n            Arguments.of(new Order(BigDecimal.valueOf(100), BigDecimal.valueOf(10)), BigDecimal.valueOf(110)),\n            Arguments.of(new Order(BigDecimal.valueOf(200), BigDecimal.valueOf(0)), BigDecimal.valueOf(200)),\n            Arguments.of(new Order(BigDecimal.valueOf(50), BigDecimal.valueOf(7.5)), BigDecimal.valueOf(57.5))\n        );\n    }\n\n    // Repeated test\n    @RepeatedTest(value = 10, name = \"Retry {currentRepetition}/{totalRepetitions}\")\n    @DisplayName(\"Random number generation should produce positive values\")\n    void repeatedTest(RepetitionInfo repetitionInfo) {\n        int random = new Random().nextInt(1000);\n        assertThat(random).isBetween(0, 999);\n        System.out.println(\"Repetition \" + repetitionInfo.getCurrentRepetition());\n    }\n\n    // Dynamic test factory\n    @TestFactory\n    @DisplayName(\"Dynamic tests for order validation\")\n    Stream<DynamicNode> dynamicTestsForOrderStatus() {\n        return Stream.of(\n            DynamicTest.dynamicTest(\"Pending order should be valid\",\n                () -> assertThat(OrderStatus.PENDING.canTransitionTo(OrderStatus.CONFIRMED)).isTrue()),\n            DynamicTest.dynamicTest(\"Delivered order should not transition to cancelled\",\n                () -> assertThat(OrderStatus.DELIVERED.canTransitionTo(OrderStatus.CANCELLED)).isFalse()),\n            DynamicContainer.dynamicContainer(\"Status transitions\", Stream.of(\n                DynamicTest.dynamicTest(\"Confirmed to shipped\",\n                    () -> assertThat(OrderStatus.CONFIRMED.canTransitionTo(OrderStatus.SHIPPED)).isTrue()),\n                DynamicTest.dynamicTest(\"Shipped to delivered\",\n                    () -> assertThat(OrderStatus.SHIPPED.canTransitionTo(OrderStatus.DELIVERED)).isTrue())\n            ))\n        );\n    }\n\n    // Timeout test\n    @Test\n    @Timeout(value = 100, unit = TimeUnit.MILLISECONDS)\n    void fastEnough() {\n        new QuickService().execute();\n    }\n\n    // Disabled test\n    @Test\n    @Disabled(\"Until we fix the caching layer → see JIRA-1234\")\n    void testDisabledUntilFix() {\n        // Will be skipped\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Assertions and assumptions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Test\nvoid advancedAssertions() {\n    // Grouped assertions → all are executed, failures are reported together\n    Order order = new Order(\"cust-1\", List.of(new OrderItem(\"SKU-1\", 2)));\n\n    assertAll(\"order verification\",\n        () -> assertThat(order.getCustomerId()).isEqualTo(\"cust-1\"),\n        () -> assertThat(order.getItems()).hasSize(1),\n        () -> assertThat(order.getStatus()).isEqualTo(OrderStatus.PENDING)\n    );\n\n    // Assumptions → skip test if condition fails\n    assumeTrue(env.isProduction(), \"This test only runs in production\");\n    assumeFalse(env.isDevelopment());\n\n    // AssertThrows\n    assertThrows(IllegalArgumentException.class,\n        () -> new Order(null, List.of()));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q3-how-does-mockito-work-explain-mock-spy-injectmocks-argument-matchers-and-verification",
      children: "Q3: How does Mockito work? Explain mock, spy, @InjectMocks, argument matchers, and verification."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mockito is a mocking framework that creates test doubles to isolate the system under test. It supports two types of test doubles:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mock"
        }), " → creates a complete fake object with no real behavior. All methods return default values (null, 0, false) unless stubbed."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spy"
        }), " → wraps a real object. By default, methods execute real behavior, but specific methods can be stubbed."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ExtendWith(MockitoExtension.class)\nclass MockitoExamplesTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Mock\n    private InventoryService inventoryService;\n\n    @Spy\n    @InjectMocks\n    private OrderService orderService;\n\n    @Test\n    void mockVsSpy() {\n        // Mock → default behavior\n        Order mockOrder = mock(Order.class);\n        when(mockOrder.getStatus()).thenReturn(OrderStatus.CONFIRMED);\n        System.out.println(mockOrder.getStatus()); // CONFIRMED\n        System.out.println(mockOrder.getCustomerId()); // null\n\n        // Spy → real behavior by default\n        Order realOrder = new Order(\"cust-1\");\n        Order spyOrder = spy(realOrder);\n        when(spyOrder.getCustomerId()).thenReturn(\"overridden\");\n        System.out.println(spyOrder.getCustomerId()); // overridden\n        System.out.println(spyOrder.getStatus()); // PENDING (real method)\n    }\n\n    @Test\n    void argumentMatchers() {\n        when(orderRepository.findById(anyLong())).thenReturn(Optional.of(new Order(\"cust-1\")));\n        when(orderRepository.findByCustomerId(eq(\"cust-1\"))).thenReturn(List.of(new Order(\"cust-1\")));\n        when(orderRepository.save(argThat(order -> order.getCustomerId() != null)))\n            .thenAnswer(invocation -> invocation.getArgument(0));\n\n        orderService.findById(1L);\n        orderService.findByCustomerId(\"cust-1\");\n\n        // Additional matchers\n        anyString(), anyInt(), anyList(), any(Order.class);\n        isNull(), isNotNull(), contains(\"substring\"), startsWith(\"prefix\");\n        assertThat(orderRepository.findByCustomerId(\"cust-1\")).hasSize(1);\n    }\n\n    @Test\n    void verification() {\n        orderService.findById(1L);\n        orderService.findById(1L);\n\n        verify(orderRepository, times(2)).findById(1L);\n        verify(orderRepository, atLeast(1)).findById(anyLong());\n        verify(orderRepository, atMost(5)).findById(anyLong());\n        verify(orderRepository, never()).delete(any());\n\n        verify(orderRepository, timeout(100).times(2)).findById(1L);\n\n        // Verify no interactions with mock\n        // verifyNoInteractions(inventoryService);\n\n        // Verify no more interactions\n        // verifyNoMoreInteractions(orderRepository);\n    }\n\n    @Test\n    void stubbingWithAnswers() {\n        when(orderRepository.save(any())).thenAnswer(invocation -> {\n            Order order = invocation.getArgument(0);\n            order.setId(new Random().nextLong());\n            return order;\n        });\n\n        when(orderRepository.findById(anyLong())).thenAnswer(\n            invocation -> {\n                Long id = invocation.getArgument(0);\n                if (id == -1) return Optional.empty();\n                Order order = new Order(\"cust-1\");\n                order.setId(id);\n                return Optional.of(order);\n            }\n        );\n    }\n\n    @Test\n    void exceptionThrowing() {\n        when(orderRepository.findById(-1L)).thenThrow(EntityNotFoundException.class);\n        when(orderRepository.save(any())).thenThrow(\n            new DataIntegrityViolationException(\"Duplicate key\"));\n\n        assertThatThrownBy(() -> orderService.findById(-1L))\n            .isInstanceOf(OrderNotFoundException.class);\n    }\n\n    @Test\n    void mockingFinalMethods() {\n        // Mockito 5.x mocks final methods by default\n        Order mockOrder = mock(Order.class);\n        when(mockOrder.finalMethod()).thenReturn(\"mocked final\");\n\n        // Mocking static methods (requires mockito-inline)\n        try (MockedStatic<OrderUtils> utilities = mockStatic(OrderUtils.class)) {\n            utilities.when(() -> OrderUtils.generateOrderNumber())\n                .thenReturn(\"ORD-12345\");\n\n            String orderNumber = OrderUtils.generateOrderNumber();\n            assertThat(orderNumber).isEqualTo(\"ORD-12345\");\n        }\n    }\n\n    @Test\n    void mockingConstructors() {\n        try (MockedConstruction<Order> mocked = mockConstruction(Order.class,\n            (mock, context) -> {\n                when(mock.getStatus()).thenReturn(OrderStatus.CONFIRMED);\n            })) {\n\n            Order order = new Order(\"cust-1\");\n            assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n        }\n    }\n\n    @Test\n    void consecutiveCalls() {\n        when(inventoryService.isAvailable(anyString(), anyInt()))\n            .thenReturn(true)  // First call\n            .thenReturn(true)  // Second call\n            .thenReturn(false); // Third call\n\n        assertThat(inventoryService.isAvailable(\"SKU-1\", 1)).isTrue();\n        assertThat(inventoryService.isAvailable(\"SKU-1\", 1)).isTrue();\n        assertThat(inventoryService.isAvailable(\"SKU-1\", 1)).isFalse();\n    }\n\n    @Test\n    void resetMock() {\n        when(orderRepository.findById(1L))\n            .thenReturn(Optional.of(new Order(\"cust-1\")));\n\n        Order result = orderService.findById(1L);\n        assertThat(result).isNotNull();\n\n        reset(orderRepository); // Clears all stubbing\n\n        assertThatThrownBy(() -> orderService.findById(1L))\n            .isInstanceOf(IllegalStateException.class); // Mock returns null by default\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "@InjectMocks rules:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mockito tries constructor injection first → uses the largest constructor."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If constructor injection fails, it falls back to setter injection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If setter injection fails, it falls back to field injection."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "If Mockito cannot inject a mock, it leaves the field as null."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class OrderService {\n    private final OrderRepository repository;\n    private final InventoryService inventory;\n    private final NotificationService notification;\n\n    // Constructor injection\n    public OrderService(OrderRepository repository,\n                        InventoryService inventory,\n                        NotificationService notification) {\n        this.repository = repository;\n        this.inventory = inventory;\n        this.notification = notification;\n    }\n}\n\n@ExtendWith(MockitoExtension.class)\nclass OrderServiceInjectTest {\n\n    @Mock\n    private OrderRepository repository;\n\n    @Mock\n    private InventoryService inventory;\n\n    @Mock\n    private NotificationService notification;\n\n    @InjectMocks\n    private OrderService orderService;\n    // Mockito injects all three mocks via the constructor\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BDD-style Mockito (Mockito BDD):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class BddStyleTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @InjectMocks\n    private OrderService orderService;\n\n    @Test\n    void bddStyleTest() {\n        // Given\n        given(orderRepository.findById(1L)).willReturn(Optional.of(new Order(\"cust-1\")));\n\n        // When\n        Order result = orderService.findById(1L);\n\n        // Then\n        assertThat(result.getCustomerId()).isEqualTo(\"cust-1\");\n        then(orderRepository).should(times(1)).findById(1L);\n        then(orderRepository).shouldHaveNoMoreInteractions();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q4-what-are-spring-boot-testing-slices-explain-webmvctest-datajpatest-jsontest-and-restclienttest",
      children: "Q4: What are Spring Boot testing slices? Explain @WebMvcTest, @DataJpaTest, @JsonTest, and @RestClientTest."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot testing slices load only a subset of the application context, making tests faster and more focused. Each slice loads specific beans relevant to the layer being tested."
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@WebMvcTest"
      }), " → Tests the web layer only. Loads controllers, filters, and MVC infrastructure but not services or repositories."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(controllers = OrderController.class)\nclass OrderControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private OrderService orderService;\n\n    @Test\n    void getOrderShouldReturnOrder() throws Exception {\n        Order order = new Order(\"cust-1\");\n        order.setId(1L);\n        order.setStatus(OrderStatus.CONFIRMED);\n        when(orderService.findById(1L)).thenReturn(order);\n\n        mockMvc.perform(get(\"/api/orders/1\")\n                .accept(MediaType.APPLICATION_JSON))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.id\").value(1))\n            .andExpect(jsonPath(\"$.customerId\").value(\"cust-1\"))\n            .andExpect(jsonPath(\"$.status\").value(\"CONFIRMED\"));\n    }\n\n    @Test\n    void createOrderShouldReturn201() throws Exception {\n        OrderRequest request = new OrderRequest(\"cust-1\", List.of(\n            new OrderItemRequest(\"SKU-001\", 2)));\n        Order created = new Order(\"cust-1\");\n        created.setId(1L);\n        created.setStatus(OrderStatus.PENDING);\n\n        when(orderService.placeOrder(anyString(), anyList())).thenReturn(created);\n\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"{\\\"customerId\\\":\\\"cust-1\\\",\\\"items\\\":[{\\\"sku\\\":\\\"SKU-001\\\",\\\"quantity\\\":2}]}\"))\n            .andExpect(status().isCreated())\n            .andExpect(header().exists(\"Location\"));\n    }\n\n    @Test\n    void getNonExistentOrderShouldReturn404() throws Exception {\n        when(orderService.findById(999L))\n            .thenThrow(new OrderNotFoundException(999L));\n\n        mockMvc.perform(get(\"/api/orders/999\")\n                .accept(MediaType.APPLICATION_JSON))\n            .andExpect(status().isNotFound())\n            .andExpect(jsonPath(\"$.message\").value(\"Order not found: 999\"));\n    }\n\n    @Test\n    void validationFailureShouldReturn400() throws Exception {\n        String invalidOrder = \"{\\\"customerId\\\":\\\"\\\",\\\"items\\\":[]}\";\n\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(invalidOrder))\n            .andExpect(status().isBadRequest())\n            .andExpect(jsonPath(\"$.errors\").isArray());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@DataJpaTest"
      }), " → Tests JPA repositories. Loads only JPA-related beans (EntityManager, DataSource, repositories) and uses an in-memory database by default."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@DataJpaTest\n@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)\nclass OrderRepositoryTest {\n\n    @Autowired\n    private TestEntityManager entityManager;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Test\n    void findByCustomerIdShouldReturnOrders() {\n        Order order1 = new Order(\"cust-1\", OrderStatus.CONFIRMED);\n        Order order2 = new Order(\"cust-1\", OrderStatus.PENDING);\n        Order order3 = new Order(\"cust-2\", OrderStatus.CONFIRMED);\n\n        entityManager.persist(order1);\n        entityManager.persist(order2);\n        entityManager.persist(order3);\n\n        List<Order> result = orderRepository.findByCustomerId(\"cust-1\");\n\n        assertThat(result).hasSize(2);\n        assertThat(result).extracting(Order::getCustomerId)\n            .allMatch(id -> id.equals(\"cust-1\"));\n    }\n\n    @Test\n    void findPendingOrdersSinceShouldReturnOrdersAfterTimestamp() {\n        Order order = new Order(\"cust-1\", OrderStatus.PENDING);\n        entityManager.persistAndFlush(order);\n\n        List<Order> result = orderRepository\n            .findPendingOrdersSince(Instant.now().minusSeconds(60));\n\n        assertThat(result).isNotEmpty();\n        assertThat(result.get(0).getStatus()).isEqualTo(OrderStatus.PENDING);\n    }\n\n    @Test\n    void deleteOrderByIdShouldRemoveOrder() {\n        Order order = new Order(\"cust-1\", OrderStatus.PENDING);\n        entityManager.persistAndFlush(order);\n        Long id = order.getId();\n\n        orderRepository.deleteById(id);\n\n        assertThat(orderRepository.findById(id)).isEmpty();\n    }\n\n    @Test\n    void customQueryMethod() {\n        entityManager.persist(new Order(\"cust-1\", OrderStatus.PENDING));\n        entityManager.persist(new Order(\"cust-1\", OrderStatus.CONFIRMED));\n        entityManager.persist(new Order(\"cust-2\", OrderStatus.SHIPPED));\n\n        List<Order> ordersByStatus = orderRepository\n            .findOrdersByStatusWithPagination(OrderStatus.PENDING, PageRequest.of(0, 10));\n\n        assertThat(ordersByStatus).hasSize(1);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@JsonTest"
      }), " → Tests JSON serialization and deserialization."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@JsonTest\nclass OrderJsonTest {\n\n    @Autowired\n    private JacksonTester<Order> json;\n\n    @Test\n    void serializeOrder() throws Exception {\n        Order order = new Order(\"cust-1\");\n        order.setId(1L);\n        order.setStatus(OrderStatus.CONFIRMED);\n        order.setItems(List.of(new OrderItem(\"SKU-001\", 2)));\n\n        assertThat(json.write(order)).isEqualToJson(\"expected-order.json\");\n        assertThat(json.write(order)).hasJsonPathNumberValue(\"$.id\");\n        assertThat(json.write(order)).hasJsonPathStringValue(\"$.customerId\");\n        assertThat(json.write(order)).hasJsonPathArrayValue(\"$.items\");\n    }\n\n    @Test\n    void deserializeOrder() throws Exception {\n        String jsonContent = \"\"\"\n            {\n                \"customerId\": \"cust-1\",\n                \"items\": [\n                    {\"sku\": \"SKU-001\", \"quantity\": 2}\n                ]\n            }\"\"\";\n\n        Order order = json.parseObject(jsonContent);\n\n        assertThat(order.getCustomerId()).isEqualTo(\"cust-1\");\n        assertThat(order.getItems()).hasSize(1);\n        assertThat(order.getItems().get(0).getSku()).isEqualTo(\"SKU-001\");\n    }\n\n    @Test\n    void deserializeInvalidShouldThrow() {\n        String invalidJson = \"\"\"\n            {\n                \"customerId\": null,\n                \"items\": null\n            }\"\"\";\n\n        assertThatThrownBy(() -> json.parseObject(invalidJson))\n            .isInstanceOf(JsonParseException.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "@RestClientTest"
      }), " → Tests REST clients."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestClientTest(OrderServiceClient.class)\nclass OrderServiceClientTest {\n\n    @Autowired\n    private OrderServiceClient client;\n\n    @Autowired\n    private MockRestServiceServer server;\n\n    @Test\n    void getOrderShouldReturnOrder() {\n        server.expect(requestTo(\"/api/orders/1\"))\n            .andExpect(method(HttpMethod.GET))\n            .andRespond(withSuccess(\"\"\"\n                {\n                    \"id\": 1,\n                    \"customerId\": \"cust-1\",\n                    \"status\": \"CONFIRMED\"\n                }\n                \"\"\", MediaType.APPLICATION_JSON));\n\n        Order order = client.getOrder(1L);\n\n        assertThat(order.getId()).isEqualTo(1L);\n        assertThat(order.getCustomerId()).isEqualTo(\"cust-1\");\n        server.verify();\n    }\n\n    @Test\n    void getNonExistentShouldThrow() {\n        server.expect(requestTo(\"/api/orders/999\"))\n            .andExpect(method(HttpMethod.GET))\n            .andRespond(withStatus(HttpStatus.NOT_FOUND));\n\n        assertThatThrownBy(() -> client.getOrder(999L))\n            .isInstanceOf(OrderServiceException.class);\n    }\n\n    @Test\n    void getServerErrorShouldRetry() {\n        server.expect(requestTo(\"/api/orders/1\"))\n            .andExpect(method(HttpMethod.GET))\n            .andRespond(withStatus(HttpStatus.INTERNAL_SERVER_ERROR));\n        server.expect(requestTo(\"/api/orders/1\"))\n            .andExpect(method(HttpMethod.GET))\n            .andRespond(withSuccess(\"\"\"\n                {\"id\": 1, \"customerId\": \"cust-1\", \"status\": \"CONFIRMED\"}\n                \"\"\", MediaType.APPLICATION_JSON));\n\n        Order order = client.getOrder(1L);\n        assertThat(order).isNotNull();\n        server.verify();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Comparison of testing slices:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Annotation"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Loads"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Does NOT load"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use case"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@WebMvcTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, filters, MVC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Services, repositories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controller logic, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@DataJpaTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repositories, EntityManager"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Repository queries, mappings"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@JsonTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ObjectMapper, Jackson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Serialization/deserialization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@RestClientTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RestTemplate, Jackson"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Controllers, repositories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST client integration"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@DataMongoTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Mongo repositories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other beans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "MongoDB repositories"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "@DataRedisTest"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis repositories"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Other beans"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis repositories"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q5-how-do-you-use-testcontainers-in-spring-boot-tests-explain-module-containers-static-containers-and-reusable-containers",
      children: "Q5: How do you use Testcontainers in Spring Boot tests? Explain module containers, static containers, and reusable containers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testcontainers provides lightweight, disposable instances of databases, message brokers, and other services in Docker containers for integration tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Basic setup:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>testcontainers-bom</artifactId>\n    <version>1.19.3</version>\n    <type>pom</type>\n    <scope>import</scope>\n</dependency>\n<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>postgresql</artifactId>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.testcontainers</groupId>\n    <artifactId>junit-jupiter</artifactId>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Module containers (specific database containers):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass OrderRepositoryContainerTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.datasource.driver-class-name\", postgres::getDriverClassName);\n        registry.add(\"spring.jpa.hibernate.ddl-auto\", () -> \"create-drop\");\n    }\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Autowired\n    private TestEntityManager entityManager;\n\n    @Test\n    void shouldPersistOrderInPostgres() {\n        Order order = new Order(\"cust-1\", OrderStatus.PENDING);\n        entityManager.persistAndFlush(order);\n\n        List<Order> found = orderRepository.findByCustomerId(\"cust-1\");\n        assertThat(found).hasSize(1);\n        assertThat(found.get(0).getStatus()).isEqualTo(OrderStatus.PENDING);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Multiple containers:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass MultiContainerTest {\n\n    private static final Network network = Network.newNetwork();\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withNetwork(network)\n        .withNetworkAliases(\"postgres\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @Container\n    static GenericContainer<?> redis = new GenericContainer<>(\"redis:7-alpine\")\n        .withNetwork(network)\n        .withNetworkAliases(\"redis\")\n        .withExposedPorts(6379);\n\n    @Container\n    static KafkaContainer kafka = new KafkaContainer(\n        DockerImageName.parse(\"confluentinc/cp-kafka:7.5.0\"))\n        .withNetwork(network);\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.redis.host\", redis::getHost);\n        registry.add(\"spring.redis.port\", () -> redis.getMappedPort(6379));\n        registry.add(\"spring.kafka.bootstrap-servers\", kafka::getBootstrapServers);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Static containers (shared across test classes):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "abstract class AbstractIntegrationTest {\n\n    private static final PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    static {\n        postgres.start();\n    }\n\n    @DynamicPropertySource\n    static void configureProperties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n}\n\nclass OrderServiceIntegrationTest extends AbstractIntegrationTest {\n    // Reuses the same PostgreSQL container\n}\n\nclass PaymentServiceIntegrationTest extends AbstractIntegrationTest {\n    // Reuses the same PostgreSQL container\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Reusable containers (stay running between test runs):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Testcontainers\nclass ReusableContainerTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withReuse(true)  // Container stays running\n        .withLabel(\"reusable\", \"true\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Enable reuse in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "~/.testcontainers.properties"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "testcontainers.reuse.enable=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom container with wait strategies:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass CustomContainerTest {\n\n    @Container\n    static GenericContainer<?> customService = new GenericContainer<>(\"my-service:latest\")\n        .withExposedPorts(8080)\n        .withEnv(\"SPRING_PROFILES_ACTIVE\", \"test\")\n        .waitingFor(Wait.forHttp(\"/actuator/health\")\n            .forStatusCode(200)\n            .withStartupTimeout(Duration.ofSeconds(60)))\n        .withStartupAttempts(3);\n\n    @Test\n    void shouldCallCustomService() {\n        String url = String.format(\"http://%s:%d/api/data\",\n            customService.getHost(), customService.getMappedPort(8080));\n\n        RestTemplate restTemplate = new RestTemplate();\n        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);\n\n        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testcontainers with Flyway migrations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass FlywayMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void properties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.flyway.enabled\", () -> \"true\");\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void allMigrationsShouldApply() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n        List<String> tables = jdbc.queryForList(\n            \"SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'\",\n            String.class);\n\n        assertThat(tables).contains(\"flyway_schema_history\");\n        assertThat(tables).contains(\"orders\");\n        assertThat(tables).contains(\"order_items\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q6-how-do-you-write-integration-tests-in-spring-boot-how-do-you-manage-database-transactions-and-test-profiles",
      children: "Q6: How do you write integration tests in Spring Boot? How do you manage database transactions and test profiles?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Integration tests in Spring Boot verify that multiple components work together. They typically involve the database, message brokers, and external service clients."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Transaction management:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Boot integration tests run within a transaction by default. Each test rolls back when complete, preventing data leakage between tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Transactional  // Each test runs in a transaction that rolls back\nclass OrderServiceIntegrationTest {\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Autowired\n    private InventoryRepository inventoryRepository;\n\n    @Autowired\n    private OrderService orderService;\n\n    @Test\n    void placeOrderShouldDeductInventory() {\n        InventoryItem item = new InventoryItem(\"SKU-001\", 10);\n        inventoryRepository.save(item);\n\n        OrderRequest request = new OrderRequest(\"cust-1\",\n            List.of(new OrderItemRequest(\"SKU-001\", 3)));\n\n        Order result = orderService.placeOrder(request);\n\n        assertThat(result.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n        InventoryItem updated = inventoryRepository.findBySku(\"SKU-001\").get();\n        assertThat(updated.getQuantity()).isEqualTo(7); // 10 - 3\n    }\n\n    @Test\n    @Rollback(false)  // Keep the data for debugging\n    @Tag(\"debug\")\n    void debugTransaction() {\n        // Useful for debugging → data persists after test\n    }\n\n    @Test\n    @Commit  // Same as @Rollback(false)\n    void commitTransaction() {\n        // Data is committed\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test profiles:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@ActiveProfiles"
      }), " to activate specific configuration for tests:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/test/resources/application-test.yml\n\n> **Previous:** [Security Interview Q&amp;A](./61-interview-security.md) | **Next:** [Tools &amp; DevOps Interview Q&amp;A](./63-interview-tools.md)\nspring:\n  datasource:\n    url: jdbc:h2:mem:testdb;DB_CLOSE_DELAY=-1\n    driver-class-name: org.h2.Driver\n  jpa:\n    hibernate:\n      ddl-auto: create-drop\n    show-sql: true\n  flyway:\n    enabled: false\nlogging:\n  level:\n    org.springframework.security: DEBUG\n    org.hibernate.SQL: DEBUG\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@ActiveProfiles(\"test\")\n@Testcontainers\nclass OrderServiceTestProfileTest {\n\n    @Autowired\n    private OrderService orderService;\n\n    @Autowired\n    private Environment env;\n\n    @Test\n    void shouldUseTestProfile() {\n        assertThat(env.getActiveProfiles()).contains(\"test\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Custom test configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@TestPropertySource(properties = {\n    \"app.feature.new-checkout=true\",\n    \"app.payment.gateway.url=http://localhost:8080/mock\",\n    \"app.payment.gateway.api-key=test-key\"\n})\nclass FeatureToggleTest {\n\n    @Value(\"${app.feature.new-checkout}\")\n    private boolean newCheckout;\n\n    @Test\n    void featureFlagShouldBeEnabled() {\n        assertThat(newCheckout).isTrue();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Test configuration with @TestConfiguration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass PaymentServiceTest {\n\n    @Autowired\n    private PaymentService paymentService;\n\n    @Test\n    void shouldUseMockPaymentGateway() {\n        PaymentResult result = paymentService.processPayment(\n            new PaymentRequest(\"cust-1\", BigDecimal.valueOf(100)));\n        assertThat(result.isSuccess()).isTrue();\n    }\n\n    @TestConfiguration\n    static class TestConfig {\n\n        @Bean\n        @Primary\n        @Profile(\"test\")\n        public PaymentGateway mockPaymentGateway() {\n            return new MockPaymentGateway();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Full integration test with external service mocking:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@AutoConfigureMockMvc\n@Transactional\n@Testcontainers\nclass OrderFullIntegrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\");\n\n    @DynamicPropertySource\n    static void properties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n    }\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @MockitoBean\n    private PaymentGateway paymentGateway;\n\n    @BeforeEach\n    void setUp() {\n        orderRepository.deleteAll();\n        when(paymentGateway.charge(anyString(), any(BigDecimal.class)))\n            .thenReturn(new PaymentResult(true, \"tx-12345\"));\n    }\n\n    @Test\n    void fullOrderFlow() throws Exception {\n        // 1. Create inventory\n        InventoryItem item = new InventoryItem(\"SKU-001\", 10);\n        givenInventory(item);\n\n        // 2. Place order\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"\"\"\n                    {\n                        \"customerId\": \"cust-1\",\n                        \"items\": [{\"sku\": \"SKU-001\", \"quantity\": 2}]\n                    }\"\"\"))\n            .andExpect(status().isCreated());\n\n        // 3. Verify database state\n        assertThat(orderRepository.count()).isEqualTo(1);\n        Order savedOrder = orderRepository.findAll().get(0);\n        assertThat(savedOrder.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n    }\n\n    private void givenInventory(InventoryItem item) {\n        // Helper to set up test data\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q7-explain-the-first-principles-of-unit-testing-how-do-you-apply-them-in-practice",
      children: "Q7: Explain the F.I.R.S.T. principles of unit testing. How do you apply them in practice?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The F.I.R.S.T. principles are a set of guidelines for writing effective unit tests:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "F"
        }), "ast → Tests should run quickly. Slow tests discourage frequent execution."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "I"
        }), "solated → Tests should not depend on each other. Each test should run independently, in any order."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "R"
        }), "epeatable → Tests should produce the same result every time, regardless of environment."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "S"
        }), "elf-validating → Tests should have a boolean outcome (pass/fail) without manual inspection."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "T"
        }), "imely → Tests should be written at the right time (preferably before the code)."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Fast:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// BAD: Slow test → hits the database\n@Test\nvoid slowOrderTest() {\n    Order order = new Order();\n    orderRepository.save(order);  // Database call\n    Order found = orderRepository.findById(order.getId()).get();\n    assertThat(found.getCustomerId()).isEqualTo(\"cust-1\");\n}\n\n// GOOD: Fast test → uses mocks\n@Test\nvoid fastOrderTest() {\n    when(orderRepository.findById(1L))\n        .thenReturn(Optional.of(new Order(\"cust-1\")));\n\n    Order result = orderService.findById(1L);\n\n    assertThat(result.getCustomerId()).isEqualTo(\"cust-1\");\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Isolated:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// BAD: Tests depend on shared state\nprivate static Order sharedOrder = new Order();\n\n@Test\nvoid test1() {\n    sharedOrder.setStatus(OrderStatus.CONFIRMED);\n    assertThat(sharedOrder.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n}\n\n@Test\nvoid test2() {\n    // FAILS if test1 ran first → sharedOrder is CONFIRMED\n    assertThat(sharedOrder.getStatus()).isEqualTo(OrderStatus.PENDING);\n}\n\n// GOOD: Each test creates its own data\n@Test\nvoid isolatedTest1() {\n    Order order = new Order(\"cust-1\");\n    order.setStatus(OrderStatus.CONFIRMED);\n    assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n}\n\n@Test\nvoid isolatedTest2() {\n    Order order = new Order(\"cust-1\");\n    assertThat(order.getStatus()).isEqualTo(OrderStatus.PENDING);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Repeatable:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// BAD: Non-repeatable → depends on current time\n@Test\nvoid badDateTest() {\n    Order order = new Order();\n    order.validateExpiration();\n    assertThat(order.getStatus()).isEqualTo(OrderStatus.EXPIRED);\n    // This test passes only on certain dates\n}\n\n// GOOD: Repeatable → controls the time\n@Test\nvoid goodDateTest() {\n    Clock clock = Clock.fixed(\n        Instant.parse(\"2025-01-15T10:00:00Z\"),\n        ZoneId.systemDefault());\n    Order order = new Order(\"cust-1\", clock);\n    order.setExpiresAt(Instant.parse(\"2025-01-14T10:00:00Z\"));\n\n    order.validateExpiration();\n\n    assertThat(order.getStatus()).isEqualTo(OrderStatus.EXPIRED);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Self-validating:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// BAD: Requires manual inspection\n@Test\nvoid badTest() {\n    Order order = orderService.findById(1L);\n    System.out.println(\"Order status: \" + order.getStatus());\n    // Developer must read the output\n}\n\n// GOOD: Self-validating assertion\n@Test\nvoid goodTest() {\n    Order order = orderService.findById(1L);\n    assertThat(order.getStatus()).isEqualTo(OrderStatus.CONFIRMED);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Timely:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Write tests before (TDD) or immediately after writing production code. Tests written weeks later often miss edge cases and are harder to write because the developer has forgotten the implementation details."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q8-what-is-code-coverage-how-do-you-configure-jacoco-with-coverage-thresholds-in-a-spring-boot-project",
      children: "Q8: What is code coverage? How do you configure JaCoCo with coverage thresholds in a Spring Boot project?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Code coverage measures the percentage of code executed during automated tests. JaCoCo (Java Code Coverage) is the most popular coverage tool for Java projects. It measures several types of coverage:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instruction coverage"
        }), " → percentage of bytecode instructions executed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branch coverage"
        }), " → percentage of branches (if/else, switch) executed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Line coverage"
        }), " → percentage of source lines executed"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method coverage"
        }), " → percentage of methods called"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Class coverage"
        }), " → percentage of classes loaded"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven configuration with JaCoCo and coverage thresholds:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<build>\n    <plugins>\n        <plugin>\n            <groupId>org.jacoco</groupId>\n            <artifactId>jacoco-maven-plugin</artifactId>\n            <version>0.8.11</version>\n            <configuration>\n                <excludes>\n                    <exclude>**/config/**</exclude>\n                    <exclude>**/dto/**</exclude>\n                    <exclude>**/entity/**</exclude>\n                    <exclude>**/Application.*</exclude>\n                </excludes>\n            </configuration>\n            <executions>\n                <execution>\n                    <id>pre-unit-test</id>\n                    <goals>\n                        <goal>prepare-agent</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>post-unit-test</id>\n                    <phase>test</phase>\n                    <goals>\n                        <goal>report</goal>\n                    </goals>\n                </execution>\n                <execution>\n                    <id>check</id>\n                    <goals>\n                        <goal>check</goal>\n                    </goals>\n                    <configuration>\n                        <rules>\n                            <rule>\n                                <element>BUNDLE</element>\n                                <limits>\n                                    <limit>\n                                        <counter>INSTRUCTION</counter>\n                                        <value>COVEREDRATIO</value>\n                                        <minimum>0.80</minimum>\n                                    </limit>\n                                    <limit>\n                                        <counter>BRANCH</counter>\n                                        <value>COVEREDRATIO</value>\n                                        <minimum>0.70</minimum>\n                                    </limit>\n                                    <limit>\n                                        <counter>LINE</counter>\n                                        <value>COVEREDRATIO</value>\n                                        <minimum>0.80</minimum>\n                                    </limit>\n                                    <limit>\n                                        <counter>CLASS</counter>\n                                        <value>MISSEDCOUNT</value>\n                                        <maximum>5</maximum>\n                                    </limit>\n                                </limits>\n                            </rule>\n                            <rule>\n                                <element>PACKAGE</element>\n                                <includes>\n                                    <include>com.example.service</include>\n                                </includes>\n                                <limits>\n                                    <limit>\n                                        <counter>INSTRUCTION</counter>\n                                        <value>COVEREDRATIO</value>\n                                        <minimum>0.90</minimum>\n                                    </limit>\n                                </limits>\n                            </rule>\n                        </rules>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradle configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id 'java'\n    id 'jacoco'\n}\n\njacocoTestCoverageVerification {\n    violationRules {\n        rule {\n            element = 'BUNDLE'\n            limit {\n                counter = 'INSTRUCTION'\n                value = 'COVEREDRATIO'\n                minimum = 0.80\n            }\n            limit {\n                counter = 'BRANCH'\n                value = 'COVEREDRATIO'\n                minimum = 0.70\n            }\n        }\n        rule {\n            element = 'CLASS'\n            excludes = [\n                'com.example.config.*',\n                'com.example.dto.*',\n                'com.example.Application'\n            ]\n            limit {\n                counter = 'LINE'\n                value = 'COVEREDRATIO'\n                minimum = 0.85\n            }\n        }\n    }\n}\n\ncheck.dependsOn jacocoTestCoverageVerification\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Excluding code from coverage:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Use annotations to exclude specific code:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Generated\npublic class GeneratedCode {\n    // Excluded from coverage via @Generated annotation\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Or use JaCoCo exclusions in configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<excludes>\n    <exclude>**/config/**</exclude>\n    <exclude>**/dto/*</exclude>\n    <exclude>**/entity/*</exclude>\n    <exclude>**/Application.*</exclude>\n</excludes>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Generating HTML reports:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.jacoco</groupId>\n    <artifactId>jacoco-maven-plugin</artifactId>\n    <executions>\n        <execution>\n            <id>report</id>\n            <phase>verify</phase>\n            <goals>\n                <goal>report</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn verify\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Reports are generated in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target/site/jacoco/index.html"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q9-what-is-mutation-testing-how-do-you-configure-pitest-in-a-spring-boot-project",
      children: "Q9: What is mutation testing? How do you configure Pitest in a Spring Boot project?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Mutation testing evaluates the quality of your tests by introducing small changes (mutations) to your code and checking whether the tests detect them. If tests pass on mutated code, the mutation \"survives,\" indicating that the tests are not adequately verifying the code."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Pitest is the leading mutation testing tool for Java. It applies mutation operators such as:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Changing ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">"
        }), " to ", (0,jsx_runtime.jsx)(_components.code, {
          children: ">="
        })]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Removing method calls"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Negating conditionals"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Returning ", (0,jsx_runtime.jsx)(_components.code, {
          children: "null"
        }), " instead of a value"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Changing constants"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Maven configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>org.pitest</groupId>\n    <artifactId>pitest-maven</artifactId>\n    <version>1.15.0</version>\n    <configuration>\n        <targetClasses>\n            <param>com.example.service.*</param>\n            <param>com.example.domain.*</param>\n        </targetClasses>\n        <targetTests>\n            <param>com.example.service.*</param>\n            <param>com.example.domain.*</param>\n        </targetTests>\n        <excludedClasses>\n            <param>com.example.config.*</param>\n            <param>com.example.dto.*</param>\n        </excludedClasses>\n        <mutationThreshold>80</mutationThreshold>\n        <timeoutConstant>3000</timeoutConstant>\n        <threads>4</threads>\n        <mutators>\n            <mutator>CONDITIONALS_BOUNDARY</mutator>\n            <mutator>INCREMENTS</mutator>\n            <mutator>INVERT_NEGS</mutator>\n            <mutator>MATH</mutator>\n            <mutator>NEGATE_CONDITIONALS</mutator>\n            <mutator>RETURN_VALS</mutator>\n            <mutator>VOID_METHOD_CALLS</mutator>\n        </mutators>\n        <outputFormats>\n            <param>HTML</param>\n            <param>XML</param>\n        </outputFormats>\n    </configuration>\n    <dependencies>\n        <dependency>\n            <groupId>org.pitest</groupId>\n            <artifactId>pitest-junit5-plugin</artifactId>\n            <version>1.2.1</version>\n        </dependency>\n    </dependencies>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gradle configuration:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-groovy",
        children: "plugins {\n    id 'info.solidsoft.pitest' version '1.9.11'\n}\n\npitest {\n    targetClasses = ['com.example.service.*', 'com.example.domain.*']\n    targetTests = ['com.example.service.*', 'com.example.domain.*']\n    excludedClasses = ['com.example.config.*', 'com.example.dto.*']\n    mutationThreshold = 80\n    timeoutConstant = 3000\n    threads = 4\n    mutators = ['CONDITIONALS_BOUNDARY', 'INCREMENTS', 'INVERT_NEGS',\n                'MATH', 'NEGATE_CONDITIONALS', 'RETURN_VALS', 'VOID_METHOD_CALLS']\n    outputFormats = ['HTML', 'XML']\n    junit5PluginVersion = '1.2.1'\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Running Pitest:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn org.pitest:pitest-maven:mutationCoverage\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Example of mutation testing in action:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Consider this method:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DiscountCalculator {\n\n    public BigDecimal calculateDiscount(Order order) {\n        BigDecimal discount = BigDecimal.ZERO;\n        if (order.getTotal().compareTo(BigDecimal.valueOf(100)) > 0) {\n            discount = order.getTotal().multiply(BigDecimal.valueOf(0.10));\n        }\n        return discount;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "With these tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class DiscountCalculatorTest {\n\n    private final DiscountCalculator calculator = new DiscountCalculator();\n\n    @Test\n    void ordersOver100Get10PercentDiscount() {\n        Order order = new Order(BigDecimal.valueOf(200));\n        BigDecimal discount = calculator.calculateDiscount(order);\n        assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(20));\n    }\n\n    @Test\n    void ordersUnder100GetNoDiscount() {\n        Order order = new Order(BigDecimal.valueOf(50));\n        BigDecimal discount = calculator.calculateDiscount(order);\n        assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);\n    }\n\n    @Test\n    void ordersExactly100GetNoDiscount() {\n        Order order = new Order(BigDecimal.valueOf(100));\n        BigDecimal discount = calculator.calculateDiscount(order);\n        assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pitest will mutate the condition ", (0,jsx_runtime.jsx)(_components.code, {
        children: "> 0"
      }), " to ", (0,jsx_runtime.jsx)(_components.code, {
        children: ">= 0"
      }), ". If the tests pass (they would → we test the boundary), the mutation survives. We need to add:"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Test\nvoid ordersOver100BoundaryTest() {\n    // This test catches the mutated condition\n    Order order = new Order(BigDecimal.valueOf(100));\n    BigDecimal discount = calculator.calculateDiscount(order);\n    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);\n\n    order = new Order(BigDecimal.valueOf(100.01));\n    discount = calculator.calculateDiscount(order);\n    assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(10.001));\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Interpreting Pitest results:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Survived mutation (RED)"
        }), ": Tests did not catch the change → need better tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Killed mutation (GREEN)"
        }), ": Tests caught the change."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Timed out"
        }), ": Mutation caused infinite loop."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Non-viable"
        }), ": Mutation produced uncompilable code."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Pitest also generates a HTML report in ", (0,jsx_runtime.jsx)(_components.code, {
        children: "target/pit-reports/"
      }), " showing exactly which mutations survived and which line of code they affected."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q10-how-do-you-write-parameterized-and-dynamic-tests-in-junit-5-when-would-you-use-each",
      children: "Q10: How do you write parameterized and dynamic tests in JUnit 5? When would you use each?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Parameterized tests"
      }), " run the same test logic with different inputs. Use them to avoid code duplication when testing multiple variations of the same behavior."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class ParameterizedTestExamples {\n\n    // @ValueSource → simplest, for single primitive parameters\n    @ParameterizedTest\n    @ValueSource(strings = {\"racecar\", \"radar\", \"level\", \"madam\"})\n    void palindromesAreDetected(String candidate) {\n        assertThat(PalindromeChecker.isPalindrome(candidate)).isTrue();\n    }\n\n    @ParameterizedTest\n    @ValueSource(ints = {1, 2, 3, 5, 8, 13})\n    void fibonacciNumbersArePositive(int number) {\n        assertThat(number).isPositive();\n    }\n\n    // @CsvSource → for multiple parameters\n    @ParameterizedTest\n    @CsvSource({\n        \"1, 1, 2\",\n        \"2, 3, 5\",\n        \"10, 20, 30\",\n        \"100, -50, 50\"\n    })\n    void additionWorks(int a, int b, int expected) {\n        assertThat(a + b).isEqualTo(expected);\n    }\n\n    @ParameterizedTest\n    @CsvSource(delimiter = '|', textBlock = \"\"\"\n        100  | 10  | 90\n        200  | 25  | 175\n        50   | 0   | 50\n    \"\"\")\n    void calculateNetAmount(BigDecimal gross, BigDecimal tax, BigDecimal expected) {\n        BigDecimal net = gross.subtract(tax);\n        assertThat(net).isEqualByComparingTo(expected);\n    }\n\n    // @CsvFileSource → loads from classpath CSV file\n    @ParameterizedTest\n    @CsvFileSource(resources = \"/test-data/orders.csv\", numLinesToSkip = 1)\n    void orderValidation(String customerId, int itemCount, String expectedStatus) {\n        Order order = new Order(customerId);\n        for (int i = 0; i < itemCount; i++) {\n            order.addItem(new OrderItem(\"SKU-\" + i, 1));\n        }\n        ValidationResult result = orderValidator.validate(order);\n        assertThat(result.getStatus().name()).isEqualTo(expectedStatus);\n    }\n\n    // @EnumSource → for enum parameters\n    @ParameterizedTest\n    @EnumSource(value = OrderStatus.class, names = {\"CONFIRMED\", \"SHIPPED\"}, mode = EnumSource.Mode.INCLUDE)\n    void activeStatusesAreNotPending(OrderStatus status) {\n        assertThat(status).isNotEqualTo(OrderStatus.PENDING);\n    }\n\n    @ParameterizedTest\n    @EnumSource(value = OrderStatus.class, mode = EnumSource.Mode.EXCLUDE, names = {\"DELETED\"})\n    void orderStatusHasDisplayName(OrderStatus status) {\n        assertThat(status.getDisplayName()).isNotBlank();\n    }\n\n    // @MethodSource → most flexible, for complex types\n    @ParameterizedTest\n    @MethodSource(\"provideOrdersForDiscount\")\n    void discountCalculation(Order order, BigDecimal expectedDiscount) {\n        BigDecimal discount = discountCalculator.calculate(order);\n        assertThat(discount).isEqualByComparingTo(expectedDiscount);\n    }\n\n    static Stream<Arguments> provideOrdersForDiscount() {\n        return Stream.of(\n            Arguments.of(new Order(BigDecimal.valueOf(50)), BigDecimal.ZERO),\n            Arguments.of(new Order(BigDecimal.valueOf(150)), BigDecimal.valueOf(15)),\n            Arguments.of(new Order(BigDecimal.valueOf(300)), BigDecimal.valueOf(45)),\n            Arguments.of(new Order(BigDecimal.valueOf(1000)), BigDecimal.valueOf(150))\n        );\n    }\n\n    // @ArgumentsSource → custom ArgumentsProvider\n    @ParameterizedTest\n    @ArgumentsSource(OrderArgumentsProvider.class)\n    void customProviderTest(Order order) {\n        assertThat(order.getCustomerId()).isNotBlank();\n        assertThat(order.getItems()).isNotEmpty();\n    }\n\n    static class OrderArgumentsProvider implements ArgumentsProvider {\n        @Override\n        public Stream<? extends Arguments> provideArguments(ExtensionContext context) {\n            return Stream.of(\n                Arguments.of(new Order(\"cust-1\", List.of(new OrderItem(\"SKU-1\", 1)))),\n                Arguments.of(new Order(\"cust-2\", List.of(new OrderItem(\"SKU-2\", 2))))\n            );\n        }\n    }\n\n    // Custom display names\n    @ParameterizedTest(name = \"Order {0} with {1} items should be {2}\")\n    @CsvSource({\n        \"CUST-001, 1, VALID\",\n        \"CUST-002, 10, VALID\",\n        \", 1, INVALID\"\n    })\n    void descriptiveTestName(String customerId, int items, String status) {\n        // Custom {index}, {arguments}, {0}, {1}, etc. in test name\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Dynamic tests"
      }), " are generated at runtime by a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@TestFactory"
      }), " method. Unlike parameterized tests where the data varies but the structure is fixed, dynamic tests can vary both the test logic and the test structure."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class DynamicTestExamples {\n\n    private final OrderService orderService = new OrderService();\n\n    @TestFactory\n    Collection<DynamicTest> dynamicTestsFromCollection() {\n        return List.of(\n            DynamicTest.dynamicTest(\"pending order can be confirmed\",\n                () -> {\n                    Order order = new Order(\"cust-1\", OrderStatus.PENDING);\n                    assertThat(orderService.canTransitionTo(order, OrderStatus.CONFIRMED)).isTrue();\n                }),\n            DynamicTest.dynamicTest(\"confirmed order can be shipped\",\n                () -> {\n                    Order order = new Order(\"cust-1\", OrderStatus.CONFIRMED);\n                    assertThat(orderService.canTransitionTo(order, OrderStatus.SHIPPED)).isTrue();\n                }),\n            DynamicTest.dynamicTest(\"delivered order cannot be cancelled\",\n                () -> {\n                    Order order = new Order(\"cust-1\", OrderStatus.DELIVERED);\n                    assertThat(orderService.canTransitionTo(order, OrderStatus.CANCELLED)).isFalse();\n                })\n        );\n    }\n\n    @TestFactory\n    Stream<DynamicNode> dynamicTestsFromStream() {\n        return Stream.of(OrderStatus.values())\n            .map(status -> DynamicContainer.dynamicContainer(\n                \"Status: \" + status,\n                Stream.of(\n                    DynamicTest.dynamicTest(\"has display name\",\n                        () -> assertThat(status.getDisplayName()).isNotBlank()),\n                    DynamicTest.dynamicTest(\"is in correct lifecycle order\",\n                        () -> assertThat(status.getOrder()).isPositive())\n                )\n            ));\n    }\n\n    @TestFactory\n    Stream<DynamicNode> dynamicTestsForValidation() {\n        Map<String, String> validationCases = Map.of(\n            \"empty customer ID should be invalid\", \"\",\n            \"customer ID with special chars should be invalid\", \"cust@#!\",\n            \"valid customer ID should pass\", \"cust-123-abc\"\n        );\n\n        return validationCases.entrySet().stream()\n            .map(entry -> DynamicTest.dynamicTest(entry.getKey(),\n                () -> {\n                    Order order = new Order(entry.getValue());\n                    boolean valid = orderService.validateOrder(order);\n                    boolean expectedValid = entry.getValue().matches(\"[a-zA-Z0-9-]+\");\n                    assertThat(valid).isEqualTo(expectedValid);\n                }));\n    }\n\n    @TestFactory\n    @DisplayName(\"Dynamic tests from external data source\")\n    Stream<DynamicNode> dynamicTestsFromFile() throws IOException {\n        Path testData = Paths.get(\"src/test/resources/order-scenarios.csv\");\n        return Files.lines(testData)\n            .skip(1) // Skip header\n            .map(line -> {\n                String[] parts = line.split(\",\");\n                String customerId = parts[0];\n                String itemSkus = parts[1];\n                boolean shouldSucceed = Boolean.parseBoolean(parts[2]);\n\n                return DynamicTest.dynamicTest(\n                    \"Order from \" + customerId + \" should \" +\n                    (shouldSucceed ? \"succeed\" : \"fail\"),\n                    () -> {\n                        List<OrderItem> items = Arrays.stream(itemSkus.split(\";\"))\n                            .map(sku -> new OrderItem(sku, 1))\n                            .toList();\n                        OrderRequest request = new OrderRequest(customerId, items);\n                        if (shouldSucceed) {\n                            assertThatCode(() -> orderService.placeOrder(request))\n                                .doesNotThrowAnyException();\n                        } else {\n                            assertThatThrownBy(() -> orderService.placeOrder(request))\n                                .isInstanceOf(OrderValidationException.class);\n                        }\n                    });\n            });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "When to use parameterized vs dynamic tests:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Parameterized Tests"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Dynamic Tests"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Use case"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Same logic, different data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Different logic, different data"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Structure"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fixed test logic per run"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Varies per test node"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Annotations (@ValueSource, @CsvSource)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programmatic generation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Test names"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "name"
            }), " attribute in annotation"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "dynamicTest(name, executable)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nested tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes (DynamicContainer)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Runtime generation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Yes"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "IDE support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Excellent"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Good"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Best for"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validation, calculations, mappings"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "State machines, file-based scenarios, API testing"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q11-how-do-you-write-tests-for-asynchronous-code-in-spring-boot-how-do-you-handle-async-completablefuture-and-reactive-types",
      children: "Q11: How do you write tests for asynchronous code in Spring Boot? How do you handle @Async, CompletableFuture, and reactive types?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing asynchronous code requires specific techniques to handle the concurrent nature of the code under test."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing @Async methods:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@EnableAsync\n@SpringBootTest\nclass AsyncServiceTest {\n\n    @Autowired\n    private AsyncService asyncService;\n\n    @Test\n    void asyncMethodReturnsImmediately() {\n        // The method returns immediately, work happens in background\n        CompletableFuture<String> future = asyncService.processAsync(\"test\");\n        assertThat(future).isNotNull();\n    }\n\n    @Test\n    void asyncMethodCompletesSuccessfully() throws Exception {\n        CompletableFuture<String> future = asyncService.processAsync(\"test\");\n        String result = future.get(5, TimeUnit.SECONDS); // Wait for completion\n        assertThat(result).isEqualTo(\"Processed: test\");\n    }\n\n    @Test\n    void asyncMethodThrowsException() {\n        CompletableFuture<String> future = asyncService.processAsync(\"error\");\n        assertThatThrownBy(() -> future.get(5, TimeUnit.SECONDS))\n            .hasCauseInstanceOf(IllegalArgumentException.class);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing CompletableFuture chains:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Test\nvoid completableFutureChaining() throws Exception {\n    CompletableFuture<String> result = CompletableFuture\n        .supplyAsync(() -> fetchData(\"user-1\"))\n        .thenApplyAsync(this::transformData)\n        .thenApplyAsync(this::enrichData)\n        .exceptionally(ex -> \"fallback\");\n\n    String finalResult = result.get(10, TimeUnit.SECONDS);\n    assertThat(finalResult).contains(\"User\");\n}\n\n@Test\nvoid completableFutureComposition() throws Exception {\n    CompletableFuture<String> service1 = asyncService.callService1();\n    CompletableFuture<String> service2 = asyncService.callService2();\n\n    CompletableFuture<String> combined = service1\n        .thenCombine(service2, (r1, r2) -> r1 + \" | \" + r2);\n\n    String result = combined.get(10, TimeUnit.SECONDS);\n    assertThat(result).contains(\"Service1\").contains(\"Service2\");\n}\n\n@Test\nvoid completableFutureAllOf() throws Exception {\n    CompletableFuture<String> f1 = asyncService.callService1();\n    CompletableFuture<String> f2 = asyncService.callService2();\n    CompletableFuture<String> f3 = asyncService.callService3();\n\n    CompletableFuture<Void> all = CompletableFuture.allOf(f1, f2, f3);\n    all.get(10, TimeUnit.SECONDS);\n\n    assertThat(f1.get()).isNotBlank();\n    assertThat(f2.get()).isNotBlank();\n    assertThat(f3.get()).isNotBlank();\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing reactive types (Mono/Flux):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass ReactiveServiceTest {\n\n    @Autowired\n    private ReactiveOrderService reactiveService;\n\n    @MockitoBean\n    private OrderRepository orderRepository;\n\n    @Test\n    void monoReturnsSingleResult() {\n        when(orderRepository.findById(1L))\n            .thenReturn(Mono.just(new Order(\"cust-1\")));\n\n        Mono<Order> result = reactiveService.findById(1L);\n\n        StepVerifier.create(result)\n            .expectNextMatches(order -> order.getCustomerId().equals(\"cust-1\"))\n            .verifyComplete();\n    }\n\n    @Test\n    void fluxReturnsMultipleResults() {\n        when(orderRepository.findByCustomerId(\"cust-1\"))\n            .thenReturn(Flux.just(\n                new Order(\"cust-1\"), new Order(\"cust-1\")));\n\n        Flux<Order> result = reactiveService.findByCustomer(\"cust-1\");\n\n        StepVerifier.create(result)\n            .expectNextCount(2)\n            .verifyComplete();\n    }\n\n    @Test\n    void monoHandlesError() {\n        when(orderRepository.findById(-1L))\n            .thenReturn(Mono.error(new OrderNotFoundException(-1L)));\n\n        Mono<Order> result = reactiveService.findById(-1L);\n\n        StepVerifier.create(result)\n            .expectError(OrderNotFoundException.class)\n            .verify();\n    }\n\n    @Test\n    void fluxVerificationWithAssertions() {\n        when(orderRepository.findAll())\n            .thenReturn(Flux.just(\n                new Order(\"cust-1\", OrderStatus.PENDING),\n                new Order(\"cust-2\", OrderStatus.CONFIRMED)));\n\n        Flux<Order> result = reactiveService.findAll();\n\n        StepVerifier.create(result)\n            .assertNext(order -> assertThat(order.getCustomerId()).isEqualTo(\"cust-1\"))\n            .assertNext(order -> assertThat(order.getCustomerId()).isEqualTo(\"cust-2\"))\n            .verifyComplete();\n    }\n\n    @Test\n    void testReactiveController() {\n        webTestClient.get().uri(\"/api/orders/1\")\n            .exchange()\n            .expectStatus().isOk()\n            .expectBody()\n            .jsonPath(\"$.customerId\").isEqualTo(\"cust-1\");\n    }\n\n    @Test\n    void testReactiveWithDelay() {\n        when(orderRepository.findById(1L))\n            .thenReturn(Mono.just(new Order(\"cust-1\"))\n                .delayElement(Duration.ofMillis(100)));\n\n        Mono<Order> result = reactiveService.findById(1L);\n\n        StepVerifier.create(result)\n            .expectSubscription()\n            .expectNoEvent(Duration.ofMillis(50))\n            .thenAwait(Duration.ofMillis(100))\n            .expectNextMatches(o -> o.getCustomerId().equals(\"cust-1\"))\n            .verifyComplete();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing scheduled tasks:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass ScheduledTaskTest {\n\n    @Autowired\n    private ScheduledTaskService scheduledService;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @Test\n    @Transactional\n    void scheduledTaskProcessesPendingOrders() {\n        // Given\n        orderRepository.save(new Order(\"cust-1\", OrderStatus.PENDING));\n        orderRepository.save(new Order(\"cust-2\", OrderStatus.PENDING));\n\n        // When\n        scheduledService.processPendingOrders();\n\n        // Then\n        List<Order> processed = orderRepository.findByStatus(OrderStatus.PROCESSING);\n        assertThat(processed).hasSize(2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing asynchronous event listeners:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass AsyncEventListenerTest {\n\n    @Autowired\n    private ApplicationEventPublisher eventPublisher;\n\n    @Autowired\n    private AsyncEventListener listener;\n\n    @Test\n    void eventIsProcessedAsynchronously() throws Exception {\n        OrderCreatedEvent event = new OrderCreatedEvent(\"order-1\", \"cust-1\");\n\n        eventPublisher.publishEvent(event);\n\n        Thread.sleep(500); // Allow async processing\n        assertThat(listener.getProcessedEvents()).contains(event);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q12-how-do-you-write-performance-tests-for-a-spring-boot-application-describe-jmh-gatling-and-k6",
      children: "Q12: How do you write performance tests for a Spring Boot application? Describe JMH, Gatling, and k6."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Performance testing evaluates how an application behaves under load. Three common tools are JMH (microbenchmarks), Gatling (load testing), and k6 (modern load testing)."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "JMH (Java Microbenchmark Harness):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JMH measures the performance of small code snippets with nanosecond precision."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-core</artifactId>\n    <version>1.37</version>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>org.openjdk.jmh</groupId>\n    <artifactId>jmh-generator-annprocess</artifactId>\n    <version>1.37</version>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@BenchmarkMode(Mode.AverageTime)\n@OutputTimeUnit(TimeUnit.NANOSECONDS)\n@State(Scope.Thread)\n@Fork(value = 2, warmups = 1)\n@Warmup(iterations = 5, time = 1)\n@Measurement(iterations = 10, time = 1)\npublic class StringBenchmark {\n\n    private String data;\n\n    @Setup\n    public void setUp() {\n        data = \"The quick brown fox jumps over the lazy dog\";\n    }\n\n    @Benchmark\n    public boolean containsWithStringMatch() {\n        return data.matches(\".*fox.*\");\n    }\n\n    @Benchmark\n    public boolean containsWithIndexOf() {\n        return data.indexOf(\"fox\") >= 0;\n    }\n\n    @Benchmark\n    public boolean containsWithContains() {\n        return data.contains(\"fox\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@BenchmarkMode(Mode.Throughput)\n@OutputTimeUnit(TimeUnit.SECONDS)\n@State(Scope.Benchmark)\n@Fork(1)\npublic class OrderServiceBenchmark {\n\n    @Param({\"10\", \"100\", \"1000\"})\n    private int itemCount;\n\n    private OrderService orderService;\n    private OrderRequest request;\n\n    @Setup\n    public void setUp() {\n        orderService = new OrderService();\n        List<OrderItemRequest> items = new ArrayList<>();\n        for (int i = 0; i < itemCount; i++) {\n            items.add(new OrderItemRequest(\"SKU-\" + i, 1));\n        }\n        request = new OrderRequest(\"cust-1\", items);\n    }\n\n    @Benchmark\n    public Order placeOrder(Blackhole blackhole) {\n        Order order = orderService.placeOrder(request);\n        blackhole.consume(order);\n        return order;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn clean verify\njava -jar target/benchmarks.jar\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Gatling (Load Testing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gatling is a Scala-based load testing tool that generates HTML reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-scala",
        children: "// src/gatling/scala/OrderSimulation.scala\npackage com.example\n\nimport io.gatling.core.Predef._\nimport io.gatling.http.Predef._\nimport scala.concurrent.duration._\n\nclass OrderSimulation extends Simulation {\n\n  val httpProtocol = http\n    .baseUrl(\"http://localhost:8080\")\n    .acceptHeader(\"application/json\")\n    .contentTypeHeader(\"application/json\")\n\n  val authFeeder = csv(\"users.csv\").circular\n\n  val scn = scenario(\"Order Flow\")\n    .feed(authFeeder)\n    .exec(\n      http(\"Login\")\n        .post(\"/api/auth/login\")\n        .body(StringBody(\"\"\"{ \"email\": \"${email}\", \"password\": \"${password}\" }\"\"\"))\n        .check(jsonPath(\"$.accessToken\").saveAs(\"token\"))\n    )\n    .exec(\n      http(\"Create Order\")\n        .post(\"/api/orders\")\n        .header(\"Authorization\", \"Bearer ${token}\")\n        .body(StringBody(\"\"\"\n          {\n            \"customerId\": \"${customerId}\",\n            \"items\": [\n              {\"sku\": \"SKU-001\", \"quantity\": 1},\n              {\"sku\": \"SKU-002\", \"quantity\": 2}\n            ]\n          }\n        \"\"\"))\n        .check(status.is(201))\n        .check(jsonPath(\"$.id\").saveAs(\"orderId\"))\n    )\n    .exec(\n      http(\"Get Order\")\n        .get(\"/api/orders/${orderId}\")\n        .header(\"Authorization\", \"Bearer ${token}\")\n        .check(status.is(200))\n    )\n\n  setUp(\n    scn.inject(\n      nothingFor(4.seconds),\n      atOnceUsers(10),\n      rampUsers(50).during(30.seconds),\n      constantUsersPerSec(20).during(60.seconds),\n      rampUsersPerSec(20).to(100).during(120.seconds)\n    )\n  ).protocols(httpProtocol)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gatling Maven plugin:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<plugin>\n    <groupId>io.gatling</groupId>\n    <artifactId>gatling-maven-plugin</artifactId>\n    <version>4.5.0</version>\n    <configuration>\n        <simulationClass>com.example.OrderSimulation</simulationClass>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "mvn gatling:test\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "k6 (Modern Load Testing):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "k6 is a JavaScript-based load testing tool:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-javascript",
        children: "// k6-test.js\nimport http from 'k6/http';\nimport { check, sleep } from 'k6';\nimport { SharedArray } from 'k6/data';\n\nconst users = new SharedArray('users', function () {\n  return JSON.parse(open('./users.json'));\n});\n\nexport const options = {\n  stages: [\n    { duration: '5m', target: 100 },    // Ramp up\n    { duration: '10m', target: 100 },    // Stay at 100\n    { duration: '5m', target: 200 },     // Ramp up\n    { duration: '10m', target: 200 },    // Stay at 200\n    { duration: '5m', target: 0 },       // Ramp down\n  ],\n  thresholds: {\n    http_req_duration: ['p(95)<2000'],  // 95% of requests under 2s\n    http_req_failed: ['rate<0.01'],     // Less than 1% failure rate\n    http_reqs: ['rate>100'],            // More than 100 req/s\n  },\n};\n\nexport default function () {\n  const user = users[Math.floor(Math.random() * users.length)];\n\n  // Login\n  const loginRes = http.post('http://localhost:8080/api/auth/login', JSON.stringify({\n    email: user.email,\n    password: user.password,\n  }), { headers: { 'Content-Type': 'application/json' } });\n\n  check(loginRes, { 'login succeeded': (r) => r.status === 200 });\n  const token = loginRes.json('accessToken');\n\n  // Create order\n  const orderPayload = {\n    customerId: user.customerId,\n    items: [\n      { sku: 'SKU-' + Math.floor(Math.random() * 100), quantity: 1 },\n    ],\n  };\n\n  const orderRes = http.post('http://localhost:8080/api/orders', JSON.stringify(orderPayload), {\n    headers: {\n      'Content-Type': 'application/json',\n      'Authorization': `Bearer ${token}`,\n    },\n  });\n\n  check(orderRes, { 'order created': (r) => r.status === 201 });\n  const orderId = orderRes.json('id');\n\n  // Get order\n  const getRes = http.get(`http://localhost:8080/api/orders/${orderId}`, {\n    headers: { 'Authorization': `Bearer ${token}` },\n  });\n\n  check(getRes, { 'order retrieved': (r) => r.status === 200 });\n\n  sleep(1);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run with:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "k6 run k6-test.js\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Which tool to use:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Use Case"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Metrics"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Reports"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JMH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microbenchmarks (methods, algorithms)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "ns, Î¼s, operations/s"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Console, HTML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gatling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load/Stress tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scala/Script"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, throughput, percentiles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML (detailed)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "k6"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load/Smoke/Stress tests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JavaScript"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Latency, throughput, thresholds"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cloud, JSON, HTML"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Locust"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load tests (Python ecosystem)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Python"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RPS, response time, users"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Web UI"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q13-what-is-tdd-how-do-you-apply-it-in-a-spring-boot-project-show-the-red-green-refactor-cycle",
      children: "Q13: What is TDD? How do you apply it in a Spring Boot project? Show the red-green-refactor cycle."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test-Driven Development (TDD) is a software development approach where tests are written before production code. The cycle is Red-Green-Refactor:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Red"
        }), ": Write a failing test that describes the desired behavior."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Green"
        }), ": Write the minimum code to make the test pass."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Refactor"
        }), ": Improve the code while keeping all tests passing."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TDD example: Building an order discount calculator"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1 → Red (write failing test):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class DiscountCalculatorTest {\n\n    @Test\n    void ordersOver100Get10PercentDiscount() {\n        DiscountCalculator calculator = new DiscountCalculator();\n        Order order = new Order(BigDecimal.valueOf(200));\n        BigDecimal discount = calculator.calculate(order);\n        assertThat(discount).isEqualByComparingTo(BigDecimal.valueOf(20));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Test fails → ", (0,jsx_runtime.jsx)(_components.code, {
        children: "DiscountCalculator"
      }), " does not exist yet."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 2 → Green (write minimal code):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DiscountCalculator {\n    public BigDecimal calculate(Order order) {\n        return BigDecimal.ZERO; // Minimum to compile\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Update to make the test pass:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DiscountCalculator {\n    public BigDecimal calculate(Order order) {\n        return order.getTotal().multiply(BigDecimal.valueOf(0.10));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3 → Refactor:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "public class DiscountCalculator {\n    private static final BigDecimal THRESHOLD = BigDecimal.valueOf(100);\n    private static final BigDecimal RATE = BigDecimal.valueOf(0.10);\n    private static final BigDecimal ZERO = BigDecimal.ZERO;\n\n    public BigDecimal calculate(Order order) {\n        if (order.getTotal().compareTo(THRESHOLD) > 0) {\n            return order.getTotal().multiply(RATE);\n        }\n        return ZERO;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Add another test (Red):"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Test\nvoid ordersUnder100GetNoDiscount() {\n    DiscountCalculator calculator = new DiscountCalculator();\n    Order order = new Order(BigDecimal.valueOf(50));\n    BigDecimal discount = calculator.calculate(order);\n    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The code already handles this case (Green). Continue with more tests:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Test\nvoid ordersExactly100GetNoDiscount() {\n    DiscountCalculator calculator = new DiscountCalculator();\n    Order order = new Order(BigDecimal.valueOf(100));\n    BigDecimal discount = calculator.calculate(order);\n    assertThat(discount).isEqualByComparingTo(BigDecimal.ZERO);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TDD in a Spring Boot service:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 1 → Red:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ExtendWith(MockitoExtension.class)\nclass OrderServiceTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Mock\n    private InventoryService inventoryService;\n\n    @InjectMocks\n    private OrderService orderService;\n\n    @Test\n    void placeOrderShouldReserveInventory() {\n        OrderRequest request = new OrderRequest(\"cust-1\",\n            List.of(new OrderItemRequest(\"SKU-001\", 2)));\n        when(inventoryService.isAvailable(\"SKU-001\", 2)).thenReturn(true);\n\n        orderService.placeOrder(request);\n\n        verify(inventoryService).reserveInventory(\"SKU-001\", 2);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 2 → Green:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    public Order placeOrder(OrderRequest request) {\n        for (OrderItemRequest item : request.items()) {\n            inventoryService.reserveInventory(item.sku(), item.quantity());\n        }\n        return null;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Step 3 → Refactor:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@Service\npublic class OrderService {\n\n    private final OrderRepository orderRepository;\n    private final InventoryService inventoryService;\n\n    public OrderService(OrderRepository orderRepository,\n                         InventoryService inventoryService) {\n        this.orderRepository = orderRepository;\n        this.inventoryService = inventoryService;\n    }\n\n    public Order placeOrder(OrderRequest request) {\n        validateInventory(request);\n        Order order = buildOrder(request);\n        return orderRepository.save(order);\n    }\n\n    private void validateInventory(OrderRequest request) {\n        for (OrderItemRequest item : request.items()) {\n            if (!inventoryService.isAvailable(item.sku(), item.quantity())) {\n                throw new InsufficientInventoryException(item.sku());\n            }\n            inventoryService.reserveInventory(item.sku(), item.quantity());\n        }\n    }\n\n    private Order buildOrder(OrderRequest request) {\n        Order order = new Order(request.customerId());\n        for (OrderItemRequest item : request.items()) {\n            order.addItem(new OrderItem(item.sku(), item.quantity()));\n        }\n        return order;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "TDD benefits:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forces you to think about the API before implementation."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ensures test coverage from the start."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Encourages modular, testable design."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provides immediate feedback on changes."
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Serves as living documentation."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q14-what-is-bdd-how-does-it-differ-from-tdd-explain-given-when-then-with-cucumber-and-junit-5",
      children: "Q14: What is BDD? How does it differ from TDD? Explain Given-When-Then with Cucumber and JUnit 5."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "BDD (Behavior-Driven Development) extends TDD by expressing tests in a language understandable by non-technical stakeholders. While TDD focuses on \"does the code work correctly?\", BDD asks \"does the system behave as expected?\" The key difference is BDD's use of natural language scenarios."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Given-When-Then format:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Scenario: Customer places an order with sufficient inventory\n  Given customer \"cust-1\" is authenticated\n  And product \"SKU-001\" has 10 units in stock\n  When the customer places an order with 2 units of \"SKU-001\"\n  Then the order status should be \"CONFIRMED\"\n  And the inventory for \"SKU-001\" should be 8 units\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Cucumber with Spring Boot:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, add dependencies:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<dependency>\n    <groupId>io.cucumber</groupId>\n    <artifactId>cucumber-spring</artifactId>\n    <scope>test</scope>\n</dependency>\n<dependency>\n    <groupId>io.cucumber</groupId>\n    <artifactId>cucumber-junit-platform-engine</artifactId>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Feature file (", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/test/resources/features/order.feature"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-gherkin",
        children: "Feature: Order Management\n  As a customer\n  I want to place orders\n  So that I can purchase products\n\n  Background:\n    Given customer \"cust-1\" has a valid account\n    And the inventory system is available\n\n  Scenario: Place order with sufficient stock\n    Given product \"SKU-001\" has 10 units in stock\n    When customer \"cust-1\" places an order with:\n      | sku     | quantity |\n      | SKU-001 | 2        |\n    Then the order should be created successfully\n    And the order status should be \"CONFIRMED\"\n    And the inventory for \"SKU-001\" should be 8 units\n\n  Scenario: Place order with insufficient stock\n    Given product \"SKU-001\" has 0 units in stock\n    When customer \"cust-1\" places an order with:\n      | sku     | quantity |\n      | SKU-001 | 2        |\n    Then the order should be rejected\n    And the error message should contain \"insufficient inventory\"\n\n  Scenario: Cancel a confirmed order\n    Given customer \"cust-1\" has an existing order \"ORD-001\"\n    And the order \"ORD-001\" status is \"CONFIRMED\"\n    When customer \"cust-1\" cancels order \"ORD-001\"\n    Then the order \"ORD-001\" status should be \"CANCELLED\"\n    And the inventory should be restored\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Step definitions (", (0,jsx_runtime.jsx)(_components.code, {
        children: "src/test/java/com/example/bdd/OrderStepDefinitions.java"
      }), "):"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.example.bdd;\n\nimport io.cucumber.java.en.Given;\nimport io.cucumber.java.en.When;\nimport io.cucumber.java.en.Then;\nimport io.cucumber.spring.CucumberContextConfiguration;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.web.server.LocalServerPort;\nimport org.springframework.http.*;\nimport org.springframework.web.client.RestTemplate;\nimport java.util.*;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@CucumberContextConfiguration\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\npublic class OrderStepDefinitions {\n\n    @LocalServerPort\n    private int port;\n\n    @Autowired\n    private RestTemplate restTemplate;\n\n    private String accessToken;\n    private ResponseEntity<String> lastResponse;\n    private final Map<String, Integer> inventory = new HashMap<>();\n    private final Map<String, String> orderStatuses = new HashMap<>();\n\n    @Given(\"customer {string} has a valid account\")\n    public void customerHasAccount(String customerId) {\n        // Setup or authenticate\n        LoginRequest loginRequest = new LoginRequest(customerId + \"@example.com\", \"password\");\n        ResponseEntity<AuthResponse> response = restTemplate.postForEntity(\n            \"http://localhost:\" + port + \"/api/auth/login\",\n            loginRequest, AuthResponse.class);\n        accessToken = response.getBody().accessToken();\n        assertThat(accessToken).isNotBlank();\n    }\n\n    @Given(\"product {string} has {int} units in stock\")\n    public void productHasStock(String sku, int quantity) {\n        inventory.put(sku, quantity);\n        // If there is an API to set inventory, call it here\n    }\n\n    @When(\"customer {string} places an order with:\")\n    public void customerPlacesOrder(String customerId, List<Map<String, String>> items) {\n        HttpHeaders headers = new HttpHeaders();\n        headers.setBearerAuth(accessToken);\n        headers.setContentType(MediaType.APPLICATION_JSON);\n\n        Map<String, Object> orderRequest = new HashMap<>();\n        orderRequest.put(\"customerId\", customerId);\n        orderRequest.put(\"items\", items.stream().map(item -> Map.of(\n            \"sku\", item.get(\"sku\"),\n            \"quantity\", Integer.parseInt(item.get(\"quantity\"))\n        )).toList());\n\n        HttpEntity<Map<String, Object>> request = new HttpEntity<>(orderRequest, headers);\n        lastResponse = restTemplate.exchange(\n            \"http://localhost:\" + port + \"/api/orders\",\n            HttpMethod.POST, request, String.class);\n    }\n\n    @Then(\"the order should be created successfully\")\n    public void orderShouldBeCreated() {\n        assertThat(lastResponse.getStatusCode()).isEqualTo(HttpStatus.CREATED);\n    }\n\n    @Then(\"the order status should be {string}\")\n    public void orderStatusShouldBe(String expectedStatus) {\n        // Parse JSON response and check status\n        assertThat(lastResponse.getBody()).contains(expectedStatus);\n    }\n\n    @Then(\"the inventory for {string} should be {int} units\")\n    public void inventoryShouldBe(String sku, int expectedQuantity) {\n        // Check inventory via API\n        ResponseEntity<InventoryResponse> response = restTemplate.exchange(\n            \"http://localhost:\" + port + \"/api/inventory/\" + sku,\n            HttpMethod.GET, new HttpEntity<>(null), InventoryResponse.class);\n        assertThat(response.getBody().quantity()).isEqualTo(expectedQuantity);\n    }\n\n    @Then(\"the order should be rejected\")\n    public void orderShouldBeRejected() {\n        assertThat(lastResponse.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);\n    }\n\n    @Then(\"the error message should contain {string}\")\n    public void errorMessageShouldContain(String message) {\n        assertThat(lastResponse.getBody()).contains(message);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Cucumber runner configuration:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.junit.platform.suite.api.IncludeEngines;\nimport org.junit.platform.suite.api.SelectClasspathResource;\nimport org.junit.platform.suite.api.Suite;\n\n@Suite\n@IncludeEngines(\"cucumber\")\n@SelectClasspathResource(\"features\")\n@ConfigurationParameter(key = GLUE_PROPERTY_NAME, value = \"com.example.bdd\")\n@ConfigurationParameter(key = PLUGIN_PROPERTY_NAME, value = \"pretty, html:target/cucumber/report.html\")\npublic class CucumberRunnerTest {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "BDD vs TDD comparison:"
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "TDD"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "BDD"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Focus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unit level, code correctness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "System level, business behavior"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Programming language (Java)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Natural language (Gherkin)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Audience"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developers"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developers + Business + QA"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Granularity"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Methods, classes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Features, scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JUnit + Mockito"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Cucumber, JBehave"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "When"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "During development"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Before development (ATDD)"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q15-how-do-you-test-database-migrations-with-flyway-or-liquibase-in-spring-boot",
      children: "Q15: How do you test database migrations with Flyway or Liquibase in Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing database migrations ensures that your schema changes apply correctly, roll forward cleanly, and can be reproduced in different environments."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Flyway migrations:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass FlywayMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\")\n        .withDatabaseName(\"testdb\")\n        .withUsername(\"test\")\n        .withPassword(\"test\")\n        .withInitScript(\"init-schema.sql\");\n\n    @DynamicPropertySource\n    static void properties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.flyway.enabled\", () -> \"true\");\n        registry.add(\"spring.flyway.baseline-on-migrate\", () -> \"true\");\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Autowired\n    private Flyway flyway;\n\n    @Test\n    void allMigrationsApplied() {\n        FlywayMigrationSummary[] migrations = flyway.info().all();\n        assertThat(migrations).isNotEmpty();\n        assertThat(migrations).allMatch(m -> m.getState() == State.SUCCESS);\n    }\n\n    @Test\n    void expectedTablesExist() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        List<String> tables = jdbc.queryForList(\n            \"SELECT table_name FROM information_schema.tables \" +\n            \"WHERE table_schema = 'public' ORDER BY table_name\",\n            String.class);\n\n        assertThat(tables).contains(\n            \"orders\", \"order_items\", \"products\", \"inventory\",\n            \"customers\", \"flyway_schema_history\"\n        );\n    }\n\n    @Test\n    void expectedColumnsExist() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        List<String> orderColumns = jdbc.queryForList(\n            \"SELECT column_name FROM information_schema.columns \" +\n            \"WHERE table_name = 'orders' ORDER BY ordinal_position\",\n            String.class);\n\n        assertThat(orderColumns).containsExactly(\n            \"id\", \"customer_id\", \"status\", \"total\",\n            \"created_at\", \"updated_at\"\n        );\n    }\n\n    @Test\n    void foreignKeysAreDefined() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        List<String> foreignKeys = jdbc.queryForList(\n            \"SELECT conname FROM pg_constraint \" +\n            \"WHERE contype = 'f' ORDER BY conname\",\n            String.class);\n\n        assertThat(foreignKeys).contains(\n            \"fk_order_items_order\",\n            \"fk_order_items_product\"\n        );\n    }\n\n    @Test\n    void indexesAreCreated() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        List<String> indexes = jdbc.queryForList(\n            \"SELECT indexname FROM pg_indexes \" +\n            \"WHERE tablename IN ('orders', 'order_items') \" +\n            \"ORDER BY indexname\",\n            String.class);\n\n        assertThat(indexes).contains(\n            \"idx_orders_customer_id\",\n            \"idx_orders_status\",\n            \"idx_order_items_order_id\"\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Flyway rollback (undo):"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass FlywayRollbackTest {\n\n    private static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\");\n\n    @Test\n    void migrationCanRollback() {\n        // Apply all migrations\n        Flyway flyway = Flyway.configure()\n            .dataSource(postgres.getJdbcUrl(), postgres.getUsername(), postgres.getPassword())\n            .load();\n        flyway.migrate();\n\n        // Undo the last migration\n        flyway.undo();\n\n        // Verify the schema is rolled back\n        JdbcTemplate jdbc = new JdbcTemplate(\n            DataSourceBuilder.create()\n                .url(postgres.getJdbcUrl())\n                .username(postgres.getUsername())\n                .password(postgres.getPassword())\n                .build());\n\n        List<String> columns = jdbc.queryForList(\n            \"SELECT column_name FROM information_schema.columns \" +\n            \"WHERE table_name = 'orders'\", String.class);\n\n        // Column added in the last migration should no longer exist\n        assertThat(columns).doesNotContain(\"new_column_name\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Liquibase changesets:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@Testcontainers\nclass LiquibaseMigrationTest {\n\n    @Container\n    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>(\"postgres:15-alpine\");\n\n    @DynamicPropertySource\n    static void properties(DynamicPropertyRegistry registry) {\n        registry.add(\"spring.datasource.url\", postgres::getJdbcUrl);\n        registry.add(\"spring.datasource.username\", postgres::getUsername);\n        registry.add(\"spring.datasource.password\", postgres::getPassword);\n        registry.add(\"spring.liquibase.enabled\", () -> \"true\");\n    }\n\n    @Autowired\n    private DataSource dataSource;\n\n    @Test\n    void allChangeSetsApplied() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        List<Map<String, Object>> changesets = jdbc.queryForList(\n            \"SELECT id, author, filename, orderexecuted, tag \" +\n            \"FROM databasechangelog ORDER BY orderexecuted\");\n\n        assertThat(changesets).isNotEmpty();\n        for (Map<String, Object> cs : changesets) {\n            assertThat(cs.get(\"id\")).isNotNull();\n        }\n    }\n\n    @Test\n    void noFailedMigrations() {\n        JdbcTemplate jdbc = new JdbcTemplate(dataSource);\n\n        Integer failedCount = jdbc.queryForObject(\n            \"SELECT COUNT(*) FROM databasechangelog WHERE deployment_id IS NULL\",\n            Integer.class);\n\n        assertThat(failedCount).isZero();\n    }\n\n    @Test\n    void verifyCompleteSchema() {\n        Liquibase liquibase = LiquibaseFactory.getInstance().createLiquibase(dataSource);\n        liquibase.validate(); // Throws if validation fails\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q16-what-are-best-practices-for-test-naming-conventions-how-do-you-structure-test-classes",
      children: "Q16: What are best practices for test naming conventions? How do you structure test classes?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test naming and structure directly impact maintainability. Good test names serve as documentation → they describe what the system does in what scenario."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Method naming conventions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Convention 1: MethodName_StateUnderTest_ExpectedBehavior\n@Test\nvoid findById_WhenOrderExists_ReturnsOrder() { }\n@Test\nvoid findById_WhenOrderNotExists_ThrowsException() { }\n@Test\nvoid calculateDiscount_WhenOrderOverThreshold_AppliesRate() { }\n\n// Convention 2: should_ExpectedBehavior_When_StateUnderTest (BDD style)\n@Test\nvoid should_ReturnOrder_When_OrderExists() { }\n@Test\nvoid should_ThrowException_When_OrderNotFound() { }\n@Test\nvoid should_ApplyDiscount_When_OrderExceedsThreshold() { }\n\n// Convention 3: Given_StateUnderTest_When_Action_Then_ExpectedBehavior\n@Test\nvoid given_OrderExists_When_FindById_Then_ReturnOrder() { }\n@Test\nvoid given_OrderNotExists_When_FindById_Then_ThrowNotFound() { }\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Class structure patterns:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "class OrderServiceTest {\n\n    // 1. Class-level constants\n    private static final String DEFAULT_CUSTOMER_ID = \"cust-1\";\n    private static final String DEFAULT_SKU = \"SKU-001\";\n    private static final int DEFAULT_QUANTITY = 1;\n\n    // 2. Mocks and injects\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Mock\n    private InventoryService inventoryService;\n\n    @InjectMocks\n    private OrderService orderService;\n\n    // 3. Shared test data\n    private Order defaultOrder;\n    private OrderRequest defaultRequest;\n\n    // 4. Setup methods\n    @BeforeEach\n    void setUp() {\n        defaultOrder = new Order(DEFAULT_CUSTOMER_ID);\n        defaultOrder.setId(1L);\n        defaultRequest = new OrderRequest(DEFAULT_CUSTOMER_ID,\n            List.of(new OrderItemRequest(DEFAULT_SKU, DEFAULT_QUANTITY)));\n    }\n\n    // 5. Test groups via nested classes\n    @Nested\n    class PlaceOrder {\n\n        @Test\n        void shouldCreateOrderWhenInventoryAvailable() { }\n\n        @Test\n        void shouldThrowExceptionWhenInventoryUnavailable() { }\n\n        @Test\n        void shouldReserveInventoryOnSuccess() { }\n\n        @Test\n        void shouldNotSaveOrderOnFailure() { }\n\n        @Nested\n        class Validation {\n\n            @Test\n            void shouldRejectEmptyCustomerId() { }\n\n            @Test\n            void shouldRejectEmptyItems() { }\n\n            @Test\n            void shouldRejectNegativeQuantity() { }\n        }\n    }\n\n    @Nested\n    class CancelOrder {\n\n        @Test\n        void shouldCancelPendingOrder() { }\n\n        @Test\n        void shouldThrowWhenOrderAlreadyShipped() { }\n\n        @Test\n        void shouldRestoreInventory() { }\n    }\n\n    @Nested\n    class CalculateTotal {\n\n        @Test\n        void shouldSumItemPrices() { }\n\n        @Test\n        void shouldIncludeTax() { }\n\n        @Test\n        void shouldApplyDiscount() { }\n\n        @ParameterizedTest\n        @CsvSource({\"50, 0\", \"100, 0\", \"101, 10.10\"})\n        void shouldApplyDiscountThresholds(BigDecimal total, BigDecimal expectedDiscount) { }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q17-how-do-you-test-exception-handling-and-error-scenarios-in-spring-boot",
      children: "Q17: How do you test exception handling and error scenarios in Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Testing exception handling covers both business logic exceptions and the HTTP error responses returned by controllers."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing service layer exceptions:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@ExtendWith(MockitoExtension.class)\nclass OrderServiceExceptionTest {\n\n    @Mock\n    private OrderRepository orderRepository;\n\n    @Mock\n    private InventoryService inventoryService;\n\n    @InjectMocks\n    private OrderService orderService;\n\n    @Test\n    void placeOrderThrowsWhenInventoryUnavailable() {\n        when(inventoryService.isAvailable(anyString(), anyInt())).thenReturn(false);\n\n        assertThatThrownBy(() -> orderService.placeOrder(\n                new OrderRequest(\"cust-1\",\n                    List.of(new OrderItemRequest(\"SKU-001\", 1)))))\n            .isInstanceOf(InsufficientInventoryException.class)\n            .hasMessageContaining(\"SKU-001\");\n    }\n\n    @Test\n    void placeOrderThrowsWhenOrderRepositoryFails() {\n        when(inventoryService.isAvailable(anyString(), anyInt())).thenReturn(true);\n        when(orderRepository.save(any())).thenThrow(\n            new DataIntegrityViolationException(\"Duplicate key\"));\n\n        assertThatThrownBy(() -> orderService.placeOrder(\n                new OrderRequest(\"cust-1\",\n                    List.of(new OrderItemRequest(\"SKU-001\", 1)))))\n            .isInstanceOf(DataIntegrityViolationException.class);\n    }\n\n    @Test\n    void cancelOrderThrowsWhenAlreadyShipped() {\n        Order shippedOrder = new Order(\"cust-1\", OrderStatus.SHIPPED);\n        when(orderRepository.findById(1L)).thenReturn(Optional.of(shippedOrder));\n\n        assertThatThrownBy(() -> orderService.cancelOrder(1L))\n            .isInstanceOf(IllegalStateException.class)\n            .hasMessageContaining(\"cannot be cancelled\");\n    }\n\n    @Test\n    void cancelOrderThrowsWhenOrderNotFound() {\n        when(orderRepository.findById(999L)).thenReturn(Optional.empty());\n\n        assertThatThrownBy(() -> orderService.cancelOrder(999L))\n            .isInstanceOf(OrderNotFoundException.class)\n            .hasMessageContaining(\"999\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing controller exception handling:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(OrderController.class)\nclass OrderControllerExceptionTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private OrderService orderService;\n\n    @Test\n    void missingRequestBodyReturns400() throws Exception {\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"\"))  // Empty body\n            .andExpect(status().isBadRequest());\n    }\n\n    @Test\n    void invalidInputReturnsValidationErrors() throws Exception {\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"\"\"\n                    {\n                        \"customerId\": \"\",\n                        \"items\": []\n                    }\"\"\"))\n            .andExpect(status().isBadRequest())\n            .andExpect(jsonPath(\"$.errors\").isArray())\n            .andExpect(jsonPath(\"$.errors[0].field\").exists());\n    }\n\n    @Test\n    void orderNotFoundReturns404() throws Exception {\n        when(orderService.findById(999L))\n            .thenThrow(new OrderNotFoundException(999L));\n\n        mockMvc.perform(get(\"/api/orders/999\"))\n            .andExpect(status().isNotFound())\n            .andExpect(jsonPath(\"$.error\").value(\"Order Not Found\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing global exception handler:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    @ExceptionHandler(OrderNotFoundException.class)\n    @ResponseStatus(HttpStatus.NOT_FOUND)\n    public ErrorResponse handleOrderNotFound(OrderNotFoundException ex) {\n        return new ErrorResponse(\"Order Not Found\", ex.getMessage());\n    }\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    @ResponseStatus(HttpStatus.BAD_REQUEST)\n    public ErrorResponse handleValidation(MethodArgumentNotValidException ex) {\n        List<FieldError> fieldErrors = ex.getBindingResult().getFieldErrors().stream()\n            .map(fe -> new FieldError(fe.getField(), fe.getDefaultMessage()))\n            .toList();\n        return new ErrorResponse(\"Validation Failed\", fieldErrors);\n    }\n\n    @ExceptionHandler(Exception.class)\n    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)\n    public ErrorResponse handleGeneric(Exception ex) {\n        return new ErrorResponse(\"Internal Server Error\", \"An unexpected error occurred\");\n    }\n}\n\n@WebMvcTest(OrderController.class)\n@Import(GlobalExceptionHandler.class)\nclass GlobalExceptionHandlerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private OrderService orderService;\n\n    @Test\n    void genericExceptionReturns500() throws Exception {\n        when(orderService.findById(1L)).thenThrow(new RuntimeException(\"DB connection failed\"));\n\n        mockMvc.perform(get(\"/api/orders/1\"))\n            .andExpect(status().isInternalServerError())\n            .andExpect(jsonPath(\"$.error\").value(\"Internal Server Error\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q18-how-do-you-test-file-upload-and-download-in-spring-boot",
      children: "Q18: How do you test file upload and download in Spring Boot?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing file upload:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(DocumentController.class)\nclass FileUploadTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private DocumentService documentService;\n\n    @Test\n    void uploadFileSuccessfully() throws Exception {\n        MockMultipartFile file = new MockMultipartFile(\n            \"file\",\n            \"test.pdf\",\n            MediaType.APPLICATION_PDF_VALUE,\n            \"PDF content\".getBytes()\n        );\n\n        when(documentService.store(any(), anyString()))\n            .thenReturn(new Document(\"doc-1\", \"test.pdf\"));\n\n        mockMvc.perform(multipart(\"/api/documents\")\n                .file(file)\n                .param(\"description\", \"Test document\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.fileName\").value(\"test.pdf\"));\n    }\n\n    @Test\n    void uploadEmptyFileReturns400() throws Exception {\n        MockMultipartFile emptyFile = new MockMultipartFile(\n            \"file\", \"\", MediaType.APPLICATION_PDF_VALUE, new byte[0]);\n\n        mockMvc.perform(multipart(\"/api/documents\")\n                .file(emptyFile))\n            .andExpect(status().isBadRequest());\n    }\n\n    @Test\n    void uploadFileExceedingMaxSizeReturns413() throws Exception {\n        byte[] largeContent = new byte[10_000_001];\n        new Random().nextBytes(largeContent);\n        MockMultipartFile largeFile = new MockMultipartFile(\n            \"file\", \"large.pdf\", MediaType.APPLICATION_PDF_VALUE, largeContent);\n\n        mockMvc.perform(multipart(\"/api/documents\")\n                .file(largeFile))\n            .andExpect(status().isPayloadTooLarge());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing file download:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(DocumentController.class)\nclass FileDownloadTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private DocumentService documentService;\n\n    @Test\n    void downloadFileSuccessfully() throws Exception {\n        Document document = new Document(\"doc-1\", \"test.pdf\");\n        document.setContentType(\"application/pdf\");\n        document.setData(\"PDF content\".getBytes());\n\n        when(documentService.load(\"doc-1\")).thenReturn(document);\n\n        mockMvc.perform(get(\"/api/documents/{id}\", \"doc-1\"))\n            .andExpect(status().isOk())\n            .andExpect(header().string(\"Content-Type\", \"application/pdf\"))\n            .andExpect(header().string(\"Content-Disposition\",\n                \"attachment; filename=\\\"test.pdf\\\"\"))\n            .andExpect(content().bytes(\"PDF content\".getBytes()));\n    }\n\n    @Test\n    void downloadNonExistentFileReturns404() throws Exception {\n        when(documentService.load(\"doc-999\"))\n            .thenThrow(new DocumentNotFoundException(\"doc-999\"));\n\n        mockMvc.perform(get(\"/api/documents/{id}\", \"doc-999\"))\n            .andExpect(status().isNotFound());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q19-how-do-you-test-security-configurations-in-spring-boot-how-do-you-test-preauthorize-annotations",
      children: "Q19: How do you test security configurations in Spring Boot? How do you test @PreAuthorize annotations?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing security at the controller level:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(OrderController.class)\n@Import(SecurityConfig.class)\nclass SecurityTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private OrderService orderService;\n\n    @Test\n    void unauthenticatedRequestsReturn401() throws Exception {\n        mockMvc.perform(get(\"/api/orders\"))\n            .andExpect(status().isUnauthorized());\n    }\n\n    @Test\n    void authenticatedUserCanAccess() throws Exception {\n        mockMvc.perform(get(\"/api/orders\")\n                .with(user(\"user@example.com\").roles(\"USER\")))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    void adminOnlyEndpointRejectsUser() throws Exception {\n        mockMvc.perform(get(\"/api/admin/config\")\n                .with(user(\"user@example.com\").roles(\"USER\")))\n            .andExpect(status().isForbidden());\n    }\n\n    @Test\n    void adminOnlyEndpointAcceptsAdmin() throws Exception {\n        mockMvc.perform(get(\"/api/admin/config\")\n                .with(user(\"admin@example.com\").roles(\"ADMIN\")))\n            .andExpect(status().isOk());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing @PreAuthorize with method security:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@AutoConfigureMockMvc\nclass MethodSecurityTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private DocumentService documentService;\n\n    @Test\n    void userCanAccessTheirOwnDocument() throws Exception {\n        Document document = new Document(\"owner@example.com\", \"My Document\");\n        document.setId(1L);\n        when(documentService.findById(1L)).thenReturn(document);\n\n        mockMvc.perform(get(\"/api/documents/1\")\n                .with(user(\"owner@example.com\").roles(\"USER\")))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    void userCannotAccessOtherUserDocument() throws Exception {\n        Document document = new Document(\"other@example.com\", \"Other's Document\");\n        document.setId(1L);\n        when(documentService.findById(1L)).thenReturn(document);\n\n        mockMvc.perform(get(\"/api/documents/1\")\n                .with(user(\"owner@example.com\").roles(\"USER\")))\n            .andExpect(status().isForbidden());\n    }\n\n    @Test\n    void adminCanAccessAnyDocument() throws Exception {\n        Document document = new Document(\"anyone@example.com\", \"Any Document\");\n        document.setId(1L);\n        when(documentService.findById(1L)).thenReturn(document);\n\n        mockMvc.perform(get(\"/api/documents/1\")\n                .with(user(\"admin@example.com\").roles(\"ADMIN\")))\n            .andExpect(status().isOk());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing CSRF protection:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(OrderController.class)\nclass CsrfTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockitoBean\n    private OrderService orderService;\n\n    @Test\n    void postWithoutCsrfTokenReturns403() throws Exception {\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"{}\")\n                .with(user(\"user@example.com\")))\n            .andExpect(status().isForbidden());\n    }\n\n    @Test\n    void postWithCsrfTokenSucceeds() throws Exception {\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"{}\")\n                .with(user(\"user@example.com\"))\n                .with(csrf()))\n            .andExpect(status().isOk());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "q20-how-do-you-test-scheduled-tasks-in-spring-boot-how-do-you-verify-scheduled-behavior",
      children: "Q20: How do you test scheduled tasks in Spring Boot? How do you verify @Scheduled behavior?"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Answer:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing scheduled tasks directly:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@EnableScheduling\nclass ScheduledTaskTest {\n\n    @Autowired\n    private OrderCleanupTask cleanupTask;\n\n    @Autowired\n    private OrderRepository orderRepository;\n\n    @BeforeEach\n    void setUp() {\n        orderRepository.deleteAll();\n    }\n\n    @Test\n    @Transactional\n    void cleanupRemovesExpiredOrders() {\n        Order expiredOrder = new Order(\"cust-1\", OrderStatus.PENDING);\n        expiredOrder.setCreatedAt(Instant.now().minus(90, ChronoUnit.DAYS));\n        orderRepository.save(expiredOrder);\n\n        cleanupTask.cleanupExpiredOrders();\n\n        List<Order> remaining = orderRepository.findAll();\n        assertThat(remaining).isEmpty();\n    }\n\n    @Test\n    @Transactional\n    void cleanupDoesNotRemoveRecentOrders() {\n        Order recentOrder = new Order(\"cust-1\", OrderStatus.PENDING);\n        recentOrder.setCreatedAt(Instant.now().minus(10, ChronoUnit.DAYS));\n        orderRepository.save(recentOrder);\n\n        cleanupTask.cleanupExpiredOrders();\n\n        assertThat(orderRepository.findById(recentOrder.getId())).isPresent();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing scheduled task with time manipulation:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\n@EnableScheduling\nclass ScheduledTaskTimingTest {\n\n    @Autowired\n    private OrderCleanupTask cleanupTask;\n\n    @MockitoBean\n    private OrderRepository orderRepository;\n\n    @Test\n    void cleanupRunsOnSchedule() throws Exception {\n        // Use Awaitility to verify the task runs asynchronously\n        await().atMost(10, TimeUnit.SECONDS)\n            .untilAsserted(() ->\n                verify(orderRepository, atLeast(1)).deleteByStatusAndCreatedAtBefore(\n                    eq(OrderStatus.PENDING), any(Instant.class)));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This concludes the Testing Interview Q&A chapter. Each question covered a critical aspect of modern Java and Spring Boot testing, from unit testing fundamentals to advanced performance and mutation testing."
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