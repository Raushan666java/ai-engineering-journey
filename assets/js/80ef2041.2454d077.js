"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[96101],{

/***/ 25281
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_38_microservices_principles_md_80e_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-38-microservices-principles-md-80e.json
const site_docs_courses_java_38_microservices_principles_md_80e_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/38-microservices-principles","title":"Microservices Architecture Principles","description":"Previous Service Discovery","source":"@site/docs/courses/java/38-microservices-principles.md","sourceDirName":"courses/java","slug":"/java/38-microservices-principles","permalink":"/ai-engineering-journey/java/38-microservices-principles","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":38,"frontMatter":{"id":"38-microservices-principles","slug":"/java/38-microservices-principles","title":"Microservices Architecture Principles","sidebar_label":"Microservices Architecture Principles","sidebar_position":38},"sidebar":"course-java","previous":{"title":"Event-Driven Architecture & SAGA","permalink":"/ai-engineering-journey/java/37-event-driven-saga"},"next":{"title":"Service Discovery & Load Balancing","permalink":"/ai-engineering-journey/java/39-discovery"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/38-microservices-principles.md


const frontMatter = {
	id: '38-microservices-principles',
	slug: '/java/38-microservices-principles',
	title: 'Microservices Architecture Principles',
	sidebar_label: 'Microservices Architecture Principles',
	sidebar_position: 38
};
const contentTitle = 'Microservices Architecture Principles';

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
  "value": "Domain-Driven Design and Bounded Context",
  "id": "domain-driven-design-and-bounded-context",
  "level": 3
}, {
  "value": "Service Decomposition Strategies",
  "id": "service-decomposition-strategies",
  "level": 3
}, {
  "value": "Inter-Service Communication",
  "id": "inter-service-communication",
  "level": 3
}, {
  "value": "Data Ownership",
  "id": "data-ownership",
  "level": 3
}, {
  "value": "Service Mesh",
  "id": "service-mesh",
  "level": 3
}, {
  "value": "Complete Code Examples",
  "id": "complete-code-examples",
  "level": 2
}, {
  "value": "Example Project: Order Management Microservice",
  "id": "example-project-order-management-microservice",
  "level": 3
}, {
  "value": "pom.xml",
  "id": "pomxml",
  "level": 4
}, {
  "value": "OrderApplication.java",
  "id": "orderapplicationjava",
  "level": 4
}, {
  "value": "application.yml",
  "id": "applicationyml",
  "level": 4
}, {
  "value": "Domain Model — Value Objects",
  "id": "domain-model--value-objects",
  "level": 3
}, {
  "value": "Domain Events",
  "id": "domain-events",
  "level": 3
}, {
  "value": "Domain Model — Entity &amp; Aggregate",
  "id": "domain-model--entity--aggregate",
  "level": 3
}, {
  "value": "Domain Service",
  "id": "domain-service",
  "level": 3
}, {
  "value": "Repository",
  "id": "repository",
  "level": 3
}, {
  "value": "Factory",
  "id": "factory",
  "level": 3
}, {
  "value": "Domain Event Publisher",
  "id": "domain-event-publisher",
  "level": 3
}, {
  "value": "Application Service",
  "id": "application-service",
  "level": 3
}, {
  "value": "REST Controller (Synchronous Communication)",
  "id": "rest-controller-synchronous-communication",
  "level": 3
}, {
  "value": "Feign Client for Inter-Service Communication",
  "id": "feign-client-for-inter-service-communication",
  "level": 3
}, {
  "value": "GraphQL Controller (Alternative to REST)",
  "id": "graphql-controller-alternative-to-rest",
  "level": 3
}, {
  "value": "Async Event Consumer",
  "id": "async-event-consumer",
  "level": 3
}, {
  "value": "Inventory Service (Separate Bounded Context)",
  "id": "inventory-service-separate-bounded-context",
  "level": 3
}, {
  "value": "Inventory REST Controller",
  "id": "inventory-rest-controller",
  "level": 3
}, {
  "value": "Payment Service (Separate Bounded Context)",
  "id": "payment-service-separate-bounded-context",
  "level": 3
}, {
  "value": "Kafka Event Producer for Payment Events",
  "id": "kafka-event-producer-for-payment-events",
  "level": 3
}, {
  "value": "Payment REST Controller",
  "id": "payment-rest-controller",
  "level": 3
}, {
  "value": "Service Mesh Configuration (Istio)",
  "id": "service-mesh-configuration-istio",
  "level": 3
}, {
  "value": "Database-Per-Service Configuration",
  "id": "database-per-service-configuration",
  "level": 3
}, {
  "value": "Global Exception Handler",
  "id": "global-exception-handler",
  "level": 3
}, {
  "value": "Health Check Controller",
  "id": "health-check-controller",
  "level": 3
}, {
  "value": "Integration Test",
  "id": "integration-test",
  "level": 3
}, {
  "value": "Unit Tests for Domain Model",
  "id": "unit-tests-for-domain-model",
  "level": 3
}, {
  "value": "Money Value Object Tests",
  "id": "money-value-object-tests",
  "level": 3
}, {
  "value": "Docker Compose with Database-Per-Service",
  "id": "docker-compose-with-database-per-service",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}, {
  "value": "Exercises",
  "id": "exercises",
  "level": 2
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
        id: "microservices-architecture-principles",
        children: "Microservices Architecture Principles"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/37-event-driven-saga",
          children: "Event-Driven Architecture and Saga Pattern"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/39-discovery",
          children: "Service Discovery"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define bounded contexts and apply Domain-Driven Design concepts to decompose a monolith into services"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Identify aggregates, value objects, domain events, repositories, and factories within a business domain"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply service decomposition strategies using business capabilities, subdomains, and Conway's Law"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Choose between synchronous (REST/GraphQL) and asynchronous messaging for inter-service communication"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement the database-per-service pattern and recognize the shared-database anti-pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand service mesh concepts including sidecar proxies, Istio, Linkerd, traffic management, observability, and security"
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
            children: "Microservices → independently deployable, loosely coupled services"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded contexts, autonomous teams, polyglot persistence"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Communication → synchronous (REST/gRPC) vs async (events/messaging)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Choose sync for queries, async for commands and events"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Observability → logging, metrics, and distributed tracing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Centralized logging (ELK), metrics (Prometheus + Grafana), tracing (Jaeger/Zipkin)"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Microservices Principles] --> B[Design Principles]\n    A --> C[Communication]\n    A --> D[Observability]\n    A --> E[Deployment]\n    B --> B1[Bounded Context]\n    B --> B2[Autonomy / Decentralization]\n    C --> C1[Synchronous]\n    C --> C2[Asynchronous]\n    D --> D1[Logging / Metrics / Tracing]\n    E --> E1[CI/CD / Containerization]\n"
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
            children: "REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP sync communication"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Simple, universally supported"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "gRPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Binary, streaming RPC"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Fast, typed, bidirectional streams"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async via broker"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Loose coupling, buffered delivery"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Async via event bus"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event sourcing, CQRS support"
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
              children: "@SpringBootApplication"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservice entry point"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Includes auto-config, component scan, property support"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-actuator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Health checks and metrics"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/health"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/actuator/metrics"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "spring-boot-starter-web"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "REST endpoint support"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Embedded Tomcat, Jackson, validation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Maven/Gradle multi-module"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Shared API contracts"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "api"
            }), " module defines DTOs and interfaces"]
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
            children: "E-Commerce Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Microservices per domain"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Order, Inventory, Payment, Shipping as separate services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "SaaS Platform"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Bounded contexts"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Tenant management, Billing, Analytics as independent services"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Media Streaming"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "CQRS + Events"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content ingestion (write) vs delivery (read) separated"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is a bounded context in Domain-Driven Design? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " A logical boundary where a particular domain model applies, with its own ubiquitous language"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What are the three pillars of observability? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Logging, Metrics, Distributed Tracing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Why prefer async communication over sync in microservices? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Loose coupling → services do not need to be available simultaneously"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-driven-design-and-bounded-context",
      children: "Domain-Driven Design and Bounded Context"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Domain-Driven Design (DDD), introduced by Eric Evans, provides a framework for modeling complex business domains. The central concept is the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "bounded context"
      }), " — a explicit boundary within which a particular domain model applies. Each bounded context has its own ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "ubiquitous language"
      }), ", a shared vocabulary used by domain experts and developers alike."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/38-microservices-principles.png",
        alt: "Microservices Architecture Mindmap"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core DDD Building Blocks:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Value Object"
        }), ": An immutable object that describes attributes with no conceptual identity (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Money"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Address"
        }), ")"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entity"
        }), ": An object defined by its identity, not its attributes (e.g., ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Order"
        }), " with orderId)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Aggregate"
        }), ": A cluster of entities and value objects treated as a single unit, with one aggregate root"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain Event"
        }), ": Something meaningful that happened in the domain, captured for side effects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Repository"
        }), ": A collection-like abstraction for retrieving and persisting aggregates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Factory"
        }), ": Encapsulates complex creation logic for aggregates and value objects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-decomposition-strategies",
      children: "Service Decomposition Strategies"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Three primary strategies guide service decomposition:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By Business Capability"
        }), ": Map each business capability (e.g., Order Management, Inventory, Shipping) to a separate service"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By Subdomain"
        }), ": Use DDD subdomains (core, supporting, generic) to identify service boundaries"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "By Conway's Law"
        }), ": Structure services to match the team organization — \"organizations design systems that mirror their communication structure\""]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inter-service-communication",
      children: "Inter-Service Communication"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Approach"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "When to Use"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Technology"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Synchronous REST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Real-time queries, request-response"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Web, Feign"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GraphQL"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Flexible querying, aggregate data"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Spring GraphQL"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Async Messaging"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Event-driven, decoupled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RabbitMQ, Kafka"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-ownership",
      children: "Data Ownership"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Database-per-service"
      }), " is the preferred pattern — each service owns its data exclusively and exposes it only through its API. The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "shared-database anti-pattern"
      }), " couples services at the data layer, creating hidden dependencies that prevent independent evolution."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-mesh",
      children: "Service Mesh"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A service mesh manages inter-service communication through a dedicated infrastructure layer. Key concepts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sidecar Proxy"
        }), ": A lightweight proxy deployed alongside each service (e.g., Envoy)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Istio"
        }), ": Complete service mesh with traffic management, security policies, and observability"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linkerd"
        }), ": Lightweight, Kubernetes-native service mesh"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Traffic Management"
        }), ": Canary releases, blue-green deployments, circuit breaking"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Observability"
        }), ": Metrics, traces, and access logs from all service-to-service communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), ": mTLS between sidecars, fine-grained access policies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!TIP]\nStart with a monolith. Extract microservices only when you understand the domain boundaries → premature decomposition adds complexity without benefit."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nSynchronous calls between services (REST/gRPC) create runtime coupling. Use circuit breakers and timeouts to prevent cascading failures."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nEvery service must expose health, metrics, and distributed tracing → without observability, a microservices architecture is unmanageable."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-code-examples",
      children: "Complete Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-project-order-management-microservice",
      children: "Example Project: Order Management Microservice"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This project demonstrates a complete bounded context for order management with DDD building blocks, synchronous and async communication, and database-per-service."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pomxml",
      children: "pom.xml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.course.microservices</groupId>\n    <artifactId>order-service</artifactId>\n    <version>1.0.0</version>\n    <name>order-service</name>\n    <description>Order Management Bounded Context</description>\n\n    <properties>\n        <java.version>21</java.version>\n        <spring-cloud.version>2023.0.0</spring-cloud.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-jpa</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-validation</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-openfeign</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.kafka</groupId>\n            <artifactId>spring-kafka</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>com.h2database</groupId>\n            <artifactId>h2</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.postgresql</groupId>\n            <artifactId>postgresql</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n                <configuration>\n                    <excludes>\n                        <exclude>\n                            <groupId>org.projectlombok</groupId>\n                            <artifactId>lombok</artifactId>\n                        </exclude>\n                    </excludes>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "orderapplicationjava",
      children: "OrderApplication.java"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.openfeign.EnableFeignClients;\nimport org.springframework.scheduling.annotation.EnableAsync;\n\n@SpringBootApplication\n@EnableFeignClients\n@EnableAsync\npublic class OrderApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(OrderApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "applicationyml",
      children: "application.yml"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "server:\n  port: 8081\n\nspring:\n  application:\n    name: order-service\n  datasource:\n    url: jdbc:h2:mem:orderdb\n    driver-class-name: org.h2.Driver\n    username: sa\n    password:\n  jpa:\n    hibernate:\n      ddl-auto: create-drop\n    show-sql: true\n    properties:\n      hibernate:\n        format_sql: true\n  kafka:\n    bootstrap-servers: localhost:9092\n    producer:\n      key-serializer: org.apache.kafka.common.serialization.StringSerializer\n      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer\n    consumer:\n      group-id: order-service-group\n      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer\n      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer\n      properties:\n        spring.json.trusted.packages: com.course.microservices.order.domain.event\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/\n  instance:\n    prefer-ip-address: true\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-model--value-objects",
      children: "Domain Model — Value Objects"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.DecimalMin;\nimport jakarta.validation.constraints.NotNull;\nimport java.math.BigDecimal;\nimport java.util.Currency;\nimport java.util.Objects;\n\n@Embeddable\npublic class Money {\n\n    @NotNull\n    @DecimalMin(value = \"0.00\", inclusive = true)\n    private BigDecimal amount;\n\n    @NotNull\n    private Currency currency;\n\n    protected Money() {\n    }\n\n    public Money(BigDecimal amount, Currency currency) {\n        if (amount == null || currency == null) {\n            throw new IllegalArgumentException(\"Amount and currency must not be null\");\n        }\n        if (amount.compareTo(BigDecimal.ZERO) < 0) {\n            throw new IllegalArgumentException(\"Amount must not be negative\");\n        }\n        this.amount = amount;\n        this.currency = currency;\n    }\n\n    public static Money of(double amount, String currencyCode) {\n        return new Money(BigDecimal.valueOf(amount), Currency.getInstance(currencyCode));\n    }\n\n    public static Money zero(String currencyCode) {\n        return new Money(BigDecimal.ZERO, Currency.getInstance(currencyCode));\n    }\n\n    public Money add(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new IllegalArgumentException(\"Cannot add different currencies: \"\n                    + this.currency + \" vs \" + other.currency);\n        }\n        return new Money(this.amount.add(other.amount), this.currency);\n    }\n\n    public Money subtract(Money other) {\n        if (!this.currency.equals(other.currency)) {\n            throw new IllegalArgumentException(\"Cannot subtract different currencies\");\n        }\n        if (this.amount.compareTo(other.amount) < 0) {\n            throw new IllegalArgumentException(\"Insufficient funds\");\n        }\n        return new Money(this.amount.subtract(other.amount), this.currency);\n    }\n\n    public Money multiply(int quantity) {\n        if (quantity < 0) {\n            throw new IllegalArgumentException(\"Quantity must not be negative\");\n        }\n        return new Money(this.amount.multiply(BigDecimal.valueOf(quantity)), this.currency);\n    }\n\n    public boolean isGreaterThan(Money other) {\n        return this.amount.compareTo(other.amount) > 0;\n    }\n\n    public boolean isLessThan(Money other) {\n        return this.amount.compareTo(other.amount) < 0;\n    }\n\n    public BigDecimal getAmount() {\n        return amount;\n    }\n\n    public Currency getCurrency() {\n        return currency;\n    }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Money money = (Money) o;\n        return amount.compareTo(money.amount) == 0 && currency.equals(money.currency);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(amount.doubleValue(), currency);\n    }\n\n    @Override\n    public String toString() {\n        return String.format(\"%.2f %s\", amount, currency.getCurrencyCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Pattern;\nimport java.util.Objects;\n\n@Embeddable\npublic class Address {\n\n    @NotBlank\n    private String street;\n\n    @NotBlank\n    private String city;\n\n    @NotBlank\n    private String state;\n\n    @NotBlank\n    @Pattern(regexp = \"\\\\d{5}(-\\\\d{4})?\")\n    private String zipCode;\n\n    @NotBlank\n    private String country;\n\n    protected Address() {\n    }\n\n    public Address(String street, String city, String state, String zipCode, String country) {\n        this.street = street;\n        this.city = city;\n        this.state = state;\n        this.zipCode = zipCode;\n        this.country = country;\n    }\n\n    public String getStreet() { return street; }\n    public String getCity() { return city; }\n    public String getState() { return state; }\n    public String getZipCode() { return zipCode; }\n    public String getCountry() { return country; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        Address address = (Address) o;\n        return street.equals(address.street) && city.equals(address.city)\n                && state.equals(address.state) && zipCode.equals(address.zipCode)\n                && country.equals(address.country);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(street, city, state, zipCode, country);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class OrderLineId {\n\n    @NotBlank\n    private String value;\n\n    protected OrderLineId() {\n    }\n\n    public OrderLineId(String value) {\n        if (value == null || value.isBlank()) {\n            throw new IllegalArgumentException(\"Order line ID must not be blank\");\n        }\n        this.value = value;\n    }\n\n    public static OrderLineId next() {\n        return new OrderLineId(UUID.randomUUID().toString());\n    }\n\n    public static OrderLineId of(String value) {\n        return new OrderLineId(value);\n    }\n\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        OrderLineId that = (OrderLineId) o;\n        return value.equals(that.value);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(value);\n    }\n\n    @Override\n    public String toString() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class OrderId {\n\n    @NotBlank\n    private String value;\n\n    protected OrderId() {\n    }\n\n    public OrderId(String value) {\n        if (value == null || value.isBlank()) {\n            throw new IllegalArgumentException(\"Order ID must not be blank\");\n        }\n        this.value = value;\n    }\n\n    public static OrderId next() {\n        return new OrderId(UUID.randomUUID().toString());\n    }\n\n    public static OrderId of(String value) {\n        return new OrderId(value);\n    }\n\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        OrderId orderId = (OrderId) o;\n        return value.equals(orderId.value);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(value);\n    }\n\n    @Override\n    public String toString() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class ProductId {\n\n    @NotBlank\n    private String value;\n\n    protected ProductId() {\n    }\n\n    public ProductId(String value) {\n        if (value == null || value.isBlank()) {\n            throw new IllegalArgumentException(\"Product ID must not be blank\");\n        }\n        this.value = value;\n    }\n\n    public static ProductId next() {\n        return new ProductId(UUID.randomUUID().toString());\n    }\n\n    public static ProductId of(String value) {\n        return new ProductId(value);\n    }\n\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        ProductId that = (ProductId) o;\n        return value.equals(that.value);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(value);\n    }\n\n    @Override\n    public String toString() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport jakarta.validation.constraints.NotBlank;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class CustomerId {\n\n    @NotBlank\n    private String value;\n\n    protected CustomerId() {\n    }\n\n    public CustomerId(String value) {\n        if (value == null || value.isBlank()) {\n            throw new IllegalArgumentException(\"Customer ID must not be blank\");\n        }\n        this.value = value;\n    }\n\n    public static CustomerId next() {\n        return new CustomerId(UUID.randomUUID().toString());\n    }\n\n    public static CustomerId of(String value) {\n        return new CustomerId(value);\n    }\n\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        CustomerId that = (CustomerId) o;\n        return value.equals(that.value);\n    }\n\n    @Override\n    public int hashCode() {\n        return Objects.hash(value);\n    }\n\n    @Override\n    public String toString() {\n        return value;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-events",
      children: "Domain Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.vo.OrderId;\nimport java.time.Instant;\nimport java.util.UUID;\n\npublic abstract class DomainEvent {\n\n    private final String eventId;\n    private final Instant occurredOn;\n    private final String eventType;\n\n    protected DomainEvent(String eventType) {\n        this.eventId = UUID.randomUUID().toString();\n        this.occurredOn = Instant.now();\n        this.eventType = eventType;\n    }\n\n    public String getEventId() { return eventId; }\n    public Instant getOccurredOn() { return occurredOn; }\n    public String getEventType() { return eventType; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.vo.Money;\nimport com.course.microservices.order.domain.vo.OrderId;\nimport com.course.microservices.order.domain.vo.CustomerId;\nimport java.time.Instant;\n\npublic class OrderPlacedEvent extends DomainEvent {\n\n    private final OrderId orderId;\n    private final CustomerId customerId;\n    private final Money totalAmount;\n    private final Instant orderDate;\n\n    public OrderPlacedEvent(OrderId orderId, CustomerId customerId, Money totalAmount, Instant orderDate) {\n        super(\"ORDER_PLACED\");\n        this.orderId = orderId;\n        this.customerId = customerId;\n        this.totalAmount = totalAmount;\n        this.orderDate = orderDate;\n    }\n\n    public OrderId getOrderId() { return orderId; }\n    public CustomerId getCustomerId() { return customerId; }\n    public Money getTotalAmount() { return totalAmount; }\n    public Instant getOrderDate() { return orderDate; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.vo.OrderId;\nimport java.time.Instant;\n\npublic class OrderShippedEvent extends DomainEvent {\n\n    private final OrderId orderId;\n    private final Instant shippedAt;\n\n    public OrderShippedEvent(OrderId orderId, Instant shippedAt) {\n        super(\"ORDER_SHIPPED\");\n        this.orderId = orderId;\n        this.shippedAt = shippedAt;\n    }\n\n    public OrderId getOrderId() { return orderId; }\n    public Instant getShippedAt() { return shippedAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.vo.OrderId;\nimport com.course.microservices.order.domain.vo.Money;\nimport java.time.Instant;\nimport java.util.Map;\n\npublic class OrderCancelledEvent extends DomainEvent {\n\n    private final OrderId orderId;\n    private final String reason;\n    private final Money refundAmount;\n    private final Instant cancelledAt;\n\n    public OrderCancelledEvent(OrderId orderId, String reason, Money refundAmount, Instant cancelledAt) {\n        super(\"ORDER_CANCELLED\");\n        this.orderId = orderId;\n        this.reason = reason;\n        this.refundAmount = refundAmount;\n        this.cancelledAt = cancelledAt;\n    }\n\n    public OrderId getOrderId() { return orderId; }\n    public String getReason() { return reason; }\n    public Money getRefundAmount() { return refundAmount; }\n    public Instant getCancelledAt() { return cancelledAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.vo.OrderId;\nimport com.course.microservices.order.domain.vo.Money;\nimport java.time.Instant;\n\npublic class PaymentReceivedEvent extends DomainEvent {\n\n    private final OrderId orderId;\n    private final Money amount;\n    private final String paymentReference;\n    private final Instant paidAt;\n\n    public PaymentReceivedEvent(OrderId orderId, Money amount, String paymentReference, Instant paidAt) {\n        super(\"PAYMENT_RECEIVED\");\n        this.orderId = orderId;\n        this.amount = amount;\n        this.paymentReference = paymentReference;\n        this.paidAt = paidAt;\n    }\n\n    public OrderId getOrderId() { return orderId; }\n    public Money getAmount() { return amount; }\n    public String getPaymentReference() { return paymentReference; }\n    public Instant getPaidAt() { return paidAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-model--entity--aggregate",
      children: "Domain Model — Entity & Aggregate"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.model;\n\nimport com.course.microservices.order.domain.vo.*;\nimport jakarta.persistence.*;\nimport java.time.Instant;\nimport java.util.ArrayList;\nimport java.util.Collections;\nimport java.util.List;\nimport java.util.Optional;\n\n@Entity\n@Table(name = \"orders\")\npublic class Order {\n\n    @EmbeddedId\n    private OrderId id;\n\n    @Embedded\n    @AttributeOverrides({\n        @AttributeOverride(name = \"amount\", column = @Column(name = \"total_amount\")),\n        @AttributeOverride(name = \"currency\", column = @Column(name = \"total_currency\"))\n    })\n    private Money totalAmount;\n\n    @Embedded\n    @AttributeOverrides({\n        @AttributeOverride(name = \"street\", column = @Column(name = \"shipping_street\")),\n        @AttributeOverride(name = \"city\", column = @Column(name = \"shipping_city\")),\n        @AttributeOverride(name = \"state\", column = @Column(name = \"shipping_state\")),\n        @AttributeOverride(name = \"zipCode\", column = @Column(name = \"shipping_zip\")),\n        @AttributeOverride(name = \"country\", column = @Column(name = \"shipping_country\"))\n    })\n    private Address shippingAddress;\n\n    @Embedded\n    private CustomerId customerId;\n\n    @Enumerated(EnumType.STRING)\n    private OrderStatus status;\n\n    private Instant orderDate;\n    private Instant shippedDate;\n\n    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)\n    @JoinColumn(name = \"order_id\")\n    private List<OrderLine> orderLines;\n\n    @Version\n    private long version;\n\n    protected Order() {\n    }\n\n    private Order(OrderId id, CustomerId customerId, Address shippingAddress, List<OrderLine> orderLines) {\n        this.id = id;\n        this.customerId = customerId;\n        this.shippingAddress = shippingAddress;\n        this.orderLines = new ArrayList<>(orderLines);\n        this.status = OrderStatus.PLACED;\n        this.orderDate = Instant.now();\n        this.totalAmount = calculateTotal();\n    }\n\n    public static Order place(CustomerId customerId, Address shippingAddress, List<OrderLine> orderLines) {\n        if (orderLines == null || orderLines.isEmpty()) {\n            throw new IllegalArgumentException(\"Order must have at least one order line\");\n        }\n        OrderId orderId = OrderId.next();\n        return new Order(orderId, customerId, shippingAddress, orderLines);\n    }\n\n    public void addLine(OrderLine line) {\n        if (status != OrderStatus.PLACED) {\n            throw new IllegalStateException(\"Cannot add lines to an order in status: \" + status);\n        }\n        this.orderLines.add(line);\n        this.totalAmount = calculateTotal();\n    }\n\n    public void removeLine(OrderLineId lineId) {\n        if (status != OrderStatus.PLACED) {\n            throw new IllegalStateException(\"Cannot remove lines from an order in status: \" + status);\n        }\n        this.orderLines.removeIf(line -> line.getId().equals(lineId));\n        if (this.orderLines.isEmpty()) {\n            throw new IllegalStateException(\"Order must have at least one order line\");\n        }\n        this.totalAmount = calculateTotal();\n    }\n\n    public void ship() {\n        if (status != OrderStatus.PLACED) {\n            throw new IllegalStateException(\"Cannot ship order in status: \" + status);\n        }\n        this.status = OrderStatus.SHIPPED;\n        this.shippedDate = Instant.now();\n    }\n\n    public void markPaid() {\n        if (status != OrderStatus.PLACED) {\n            throw new IllegalStateException(\"Cannot mark paid order in status: \" + status);\n        }\n        this.status = OrderStatus.PAID;\n    }\n\n    public void cancel(String reason) {\n        if (status == OrderStatus.SHIPPED || status == OrderStatus.DELIVERED) {\n            throw new IllegalStateException(\"Cannot cancel shipped or delivered order\");\n        }\n        this.status = OrderStatus.CANCELLED;\n    }\n\n    public void markDelivered() {\n        if (status != OrderStatus.SHIPPED) {\n            throw new IllegalStateException(\"Cannot deliver order in status: \" + status);\n        }\n        this.status = OrderStatus.DELIVERED;\n    }\n\n    public Money calculateTotal() {\n        return orderLines.stream()\n                .map(OrderLine::getSubtotal)\n                .reduce(Money.zero(\"USD\"), Money::add);\n    }\n\n    public OrderId getId() { return id; }\n    public CustomerId getCustomerId() { return customerId; }\n    public Address getShippingAddress() { return shippingAddress; }\n    public Money getTotalAmount() { return totalAmount; }\n    public OrderStatus getStatus() { return status; }\n    public Instant getOrderDate() { return orderDate; }\n    public Instant getShippedDate() { return shippedDate; }\n    public List<OrderLine> getOrderLines() { return Collections.unmodifiableList(orderLines); }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.model;\n\npublic enum OrderStatus {\n    PLACED,\n    PAID,\n    SHIPPED,\n    DELIVERED,\n    CANCELLED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.model;\n\nimport com.course.microservices.order.domain.vo.*;\nimport jakarta.persistence.*;\nimport java.math.BigDecimal;\nimport java.util.Currency;\n\n@Entity\n@Table(name = \"order_lines\")\npublic class OrderLine {\n\n    @EmbeddedId\n    private OrderLineId id;\n\n    @Embedded\n    private ProductId productId;\n\n    private int quantity;\n\n    @Embedded\n    @AttributeOverrides({\n        @AttributeOverride(name = \"amount\", column = @Column(name = \"unit_price_amount\")),\n        @AttributeOverride(name = \"currency\", column = @Column(name = \"unit_price_currency\"))\n    })\n    private Money unitPrice;\n\n    @Embedded\n    @AttributeOverrides({\n        @AttributeOverride(name = \"amount\", column = @Column(name = \"subtotal_amount\")),\n        @AttributeOverride(name = \"currency\", column = @Column(name = \"subtotal_currency\"))\n    })\n    private Money subtotal;\n\n    private String productName;\n\n    protected OrderLine() {\n    }\n\n    private OrderLine(OrderLineId id, ProductId productId, String productName, int quantity, Money unitPrice) {\n        if (quantity <= 0) {\n            throw new IllegalArgumentException(\"Quantity must be positive\");\n        }\n        this.id = id;\n        this.productId = productId;\n        this.productName = productName;\n        this.quantity = quantity;\n        this.unitPrice = unitPrice;\n        this.subtotal = unitPrice.multiply(quantity);\n    }\n\n    public static OrderLine create(ProductId productId, String productName, int quantity, Money unitPrice) {\n        return new OrderLine(OrderLineId.next(), productId, productName, quantity, unitPrice);\n    }\n\n    public void updateQuantity(int newQuantity) {\n        if (newQuantity <= 0) {\n            throw new IllegalArgumentException(\"Quantity must be positive\");\n        }\n        this.quantity = newQuantity;\n        this.subtotal = unitPrice.multiply(newQuantity);\n    }\n\n    public OrderLineId getId() { return id; }\n    public ProductId getProductId() { return productId; }\n    public String getProductName() { return productName; }\n    public int getQuantity() { return quantity; }\n    public Money getUnitPrice() { return unitPrice; }\n    public Money getSubtotal() { return subtotal; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-service",
      children: "Domain Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.service;\n\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.model.OrderLine;\nimport com.course.microservices.order.domain.vo.Address;\nimport com.course.microservices.order.domain.vo.CustomerId;\nimport com.course.microservices.order.domain.vo.Money;\nimport com.course.microservices.order.domain.vo.ProductId;\nimport org.springframework.stereotype.Service;\nimport java.util.List;\n\n@Service\npublic class OrderPricingService {\n\n    private static final Money TAX_RATE = Money.of(0.08, \"USD\");\n    private static final Money FREE_SHIPPING_THRESHOLD = Money.of(100.00, \"USD\");\n    private static final Money STANDARD_SHIPPING = Money.of(9.99, \"USD\");\n\n    public OrderPricingResult calculateOrderPricing(CustomerId customerId,\n                                                     Address shippingAddress,\n                                                     List<OrderLine> lines) {\n        Money subtotal = lines.stream()\n                .map(OrderLine::getSubtotal)\n                .reduce(Money.zero(\"USD\"), Money::add);\n\n        Money tax = subtotal.multiply(TAX_RATE.getAmount().intValue())\n                .multiply(TAX_RATE.getAmount().remainder(BigDecimal.ONE).doubleValue() > 0 ? 1 : 0);\n\n        Money shipping = calculateShipping(subtotal, shippingAddress);\n        Money total = subtotal.add(tax).add(shipping);\n\n        return new OrderPricingResult(subtotal, tax, shipping, total);\n    }\n\n    private Money calculateShipping(Money subtotal, Address shippingAddress) {\n        if (subtotal.isGreaterThan(FREE_SHIPPING_THRESHOLD)) {\n            return Money.zero(\"USD\");\n        }\n        if (shippingAddress.getCountry().equalsIgnoreCase(\"US\")) {\n            return STANDARD_SHIPPING;\n        }\n        return Money.of(24.99, \"USD\");\n    }\n\n    public record OrderPricingResult(Money subtotal, Money tax, Money shipping, Money total) {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "repository",
      children: "Repository"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.repository;\n\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.vo.CustomerId;\nimport com.course.microservices.order.domain.vo.OrderId;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\nimport org.springframework.stereotype.Repository;\nimport java.util.List;\nimport java.util.Optional;\n\n@Repository\npublic interface OrderRepository extends JpaRepository<Order, OrderId> {\n\n    List<Order> findByCustomerId(CustomerId customerId);\n\n    Optional<Order> findByIdAndCustomerId(OrderId orderId, CustomerId customerId);\n\n    @Query(\"SELECT o FROM Order o LEFT JOIN FETCH o.orderLines WHERE o.id = :id\")\n    Optional<Order> findByIdWithLines(@Param(\"id\") OrderId orderId);\n\n    @Query(\"SELECT o FROM Order o WHERE o.status = 'PLACED' AND o.orderDate < :threshold\")\n    List<Order> findStalePlacedOrders(@Param(\"threshold\") java.time.Instant threshold);\n\n    long countByCustomerId(CustomerId customerId);\n\n    @Query(\"SELECT COUNT(o) FROM Order o WHERE o.customerId = :customerId AND o.status = 'PLACED'\")\n    long countActiveOrdersByCustomer(@Param(\"customerId\") CustomerId customerId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "factory",
      children: "Factory"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.factory;\n\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.model.OrderLine;\nimport com.course.microservices.order.domain.service.OrderPricingService;\nimport com.course.microservices.order.domain.vo.*;\nimport com.course.microservices.order.domain.repository.OrderRepository;\nimport org.springframework.stereotype.Component;\nimport java.util.List;\n\n@Component\npublic class OrderFactory {\n\n    private final OrderRepository orderRepository;\n    private final OrderPricingService pricingService;\n\n    public OrderFactory(OrderRepository orderRepository, OrderPricingService pricingService) {\n        this.orderRepository = orderRepository;\n        this.pricingService = pricingService;\n    }\n\n    public Order createOrder(CustomerId customerId,\n                             Address shippingAddress,\n                             List<OrderLine> orderLines) {\n        OrderPricingService.OrderPricingResult pricing = pricingService.calculateOrderPricing(\n                customerId, shippingAddress, orderLines);\n\n        Order order = Order.place(customerId, shippingAddress, orderLines);\n        return orderRepository.save(order);\n    }\n\n    public OrderLine createOrderLine(ProductId productId, String productName,\n                                     int quantity, Money unitPrice) {\n        return OrderLine.create(productId, productName, quantity, unitPrice);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "domain-event-publisher",
      children: "Domain Event Publisher"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.event;\n\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.vo.OrderId;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.kafka.core.KafkaTemplate;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderEventPublisher {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderEventPublisher.class);\n    private static final String TOPIC_ORDER_EVENTS = \"order-events\";\n\n    private final ApplicationEventPublisher springEventPublisher;\n    private final KafkaTemplate<String, Object> kafkaTemplate;\n\n    public OrderEventPublisher(ApplicationEventPublisher springEventPublisher,\n                                KafkaTemplate<String, Object> kafkaTemplate) {\n        this.springEventPublisher = springEventPublisher;\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void publishOrderPlaced(Order order) {\n        OrderPlacedEvent event = new OrderPlacedEvent(\n                order.getId(),\n                order.getCustomerId(),\n                order.getTotalAmount(),\n                order.getOrderDate()\n        );\n        springEventPublisher.publishEvent(event);\n        kafkaTemplate.send(TOPIC_ORDER_EVENTS, order.getId().getValue(), event);\n        log.info(\"Published OrderPlacedEvent for order: {}\", order.getId());\n    }\n\n    public void publishOrderShipped(Order order) {\n        OrderShippedEvent event = new OrderShippedEvent(\n                order.getId(),\n                order.getShippedDate()\n        );\n        springEventPublisher.publishEvent(event);\n        kafkaTemplate.send(TOPIC_ORDER_EVENTS, order.getId().getValue(), event);\n        log.info(\"Published OrderShippedEvent for order: {}\", order.getId());\n    }\n\n    public void publishOrderCancelled(Order order, String reason) {\n        OrderCancelledEvent event = new OrderCancelledEvent(\n                order.getId(),\n                reason,\n                order.getTotalAmount(),\n                java.time.Instant.now()\n        );\n        springEventPublisher.publishEvent(event);\n        kafkaTemplate.send(TOPIC_ORDER_EVENTS, order.getId().getValue(), event);\n        log.info(\"Published OrderCancelledEvent for order: {}\", order.getId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "application-service",
      children: "Application Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.application;\n\nimport com.course.microservices.order.domain.event.OrderEventPublisher;\nimport com.course.microservices.order.domain.factory.OrderFactory;\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.model.OrderLine;\nimport com.course.microservices.order.domain.repository.OrderRepository;\nimport com.course.microservices.order.domain.vo.*;\nimport org.springframework.stereotype.Service;\nimport org.springframework.transaction.annotation.Transactional;\nimport java.util.List;\n\n@Service\n@Transactional\npublic class OrderApplicationService {\n\n    private final OrderRepository orderRepository;\n    private final OrderFactory orderFactory;\n    private final OrderEventPublisher eventPublisher;\n\n    public OrderApplicationService(OrderRepository orderRepository,\n                                    OrderFactory orderFactory,\n                                    OrderEventPublisher eventPublisher) {\n        this.orderRepository = orderRepository;\n        this.orderFactory = orderFactory;\n        this.eventPublisher = eventPublisher;\n    }\n\n    public Order placeOrder(CustomerId customerId, Address shippingAddress,\n                            List<OrderLineRequest> lineRequests) {\n        List<OrderLine> orderLines = lineRequests.stream()\n                .map(req -> orderFactory.createOrderLine(\n                        ProductId.of(req.productId()),\n                        req.productName(),\n                        req.quantity(),\n                        Money.of(req.unitPrice(), \"USD\")))\n                .toList();\n\n        Order order = orderFactory.createOrder(customerId, shippingAddress, orderLines);\n        eventPublisher.publishOrderPlaced(order);\n        return order;\n    }\n\n    public void shipOrder(OrderId orderId) {\n        Order order = orderRepository.findById(orderId)\n                .orElseThrow(() -> new IllegalArgumentException(\"Order not found: \" + orderId));\n        order.ship();\n        orderRepository.save(order);\n        eventPublisher.publishOrderShipped(order);\n    }\n\n    public void cancelOrder(OrderId orderId, String reason) {\n        Order order = orderRepository.findById(orderId)\n                .orElseThrow(() -> new IllegalArgumentException(\"Order not found: \" + orderId));\n        order.cancel(reason);\n        orderRepository.save(order);\n        eventPublisher.publishOrderCancelled(order, reason);\n    }\n\n    public Order getOrder(OrderId orderId) {\n        return orderRepository.findByIdWithLines(orderId)\n                .orElseThrow(() -> new IllegalArgumentException(\"Order not found: \" + orderId));\n    }\n\n    public List<Order> getCustomerOrders(CustomerId customerId) {\n        return orderRepository.findByCustomerId(customerId);\n    }\n\n    public record OrderLineRequest(String productId, String productName, int quantity, double unitPrice) {\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rest-controller-synchronous-communication",
      children: "REST Controller (Synchronous Communication)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.interfaces.rest;\n\nimport com.course.microservices.order.application.OrderApplicationService;\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.vo.*;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport jakarta.validation.Valid;\nimport jakarta.validation.constraints.NotBlank;\nimport jakarta.validation.constraints.Positive;\nimport java.util.List;\n\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n\n    private final OrderApplicationService orderService;\n\n    public OrderController(OrderApplicationService orderService) {\n        this.orderService = orderService;\n    }\n\n    @PostMapping\n    public ResponseEntity<OrderResponse> placeOrder(@Valid @RequestBody PlaceOrderRequest request) {\n        CustomerId customerId = CustomerId.of(request.customerId());\n        Address shippingAddress = new Address(\n                request.shippingAddress().street(),\n                request.shippingAddress().city(),\n                request.shippingAddress().state(),\n                request.shippingAddress().zipCode(),\n                request.shippingAddress().country()\n        );\n        List<OrderApplicationService.OrderLineRequest> lineRequests = request.lines().stream()\n                .map(line -> new OrderApplicationService.OrderLineRequest(\n                        line.productId(), line.productName(), line.quantity(), line.unitPrice()))\n                .toList();\n\n        Order order = orderService.placeOrder(customerId, shippingAddress, lineRequests);\n        return ResponseEntity.status(HttpStatus.CREATED).body(OrderResponse.from(order));\n    }\n\n    @GetMapping(\"/{orderId}\")\n    public ResponseEntity<OrderResponse> getOrder(@PathVariable String orderId) {\n        Order order = orderService.getOrder(OrderId.of(orderId));\n        return ResponseEntity.ok(OrderResponse.from(order));\n    }\n\n    @GetMapping\n    public ResponseEntity<List<OrderResponse>> getCustomerOrders(@RequestParam String customerId) {\n        List<Order> orders = orderService.getCustomerOrders(CustomerId.of(customerId));\n        return ResponseEntity.ok(orders.stream().map(OrderResponse::from).toList());\n    }\n\n    @PostMapping(\"/{orderId}/ship\")\n    public ResponseEntity<Void> shipOrder(@PathVariable String orderId) {\n        orderService.shipOrder(OrderId.of(orderId));\n        return ResponseEntity.ok().build();\n    }\n\n    @PostMapping(\"/{orderId}/cancel\")\n    public ResponseEntity<Void> cancelOrder(@PathVariable String orderId,\n                                             @RequestParam String reason) {\n        orderService.cancelOrder(OrderId.of(orderId), reason);\n        return ResponseEntity.ok().build();\n    }\n\n    @ExceptionHandler(IllegalArgumentException.class)\n    public ResponseEntity<ErrorResponse> handleBadRequest(IllegalArgumentException ex) {\n        return ResponseEntity.badRequest()\n                .body(new ErrorResponse(\"BAD_REQUEST\", ex.getMessage()));\n    }\n\n    @ExceptionHandler(IllegalStateException.class)\n    public ResponseEntity<ErrorResponse> handleConflict(IllegalStateException ex) {\n        return ResponseEntity.status(HttpStatus.CONFLICT)\n                .body(new ErrorResponse(\"CONFLICT\", ex.getMessage()));\n    }\n\n    public record PlaceOrderRequest(\n            @NotBlank String customerId,\n            @Valid AddressRequest shippingAddress,\n            @Valid List<OrderLineRequest> lines) {}\n\n    public record AddressRequest(\n            @NotBlank String street,\n            @NotBlank String city,\n            @NotBlank String state,\n            @NotBlank String zipCode,\n            @NotBlank String country) {}\n\n    public record OrderLineRequest(\n            @NotBlank String productId,\n            @NotBlank String productName,\n            @Positive int quantity,\n            @Positive double unitPrice) {}\n\n    public record OrderResponse(\n            String id, String customerId, Money totalAmount,\n            String status, String orderDate, List<OrderLineResponse> lines) {\n        static OrderResponse from(Order order) {\n            return new OrderResponse(\n                    order.getId().getValue(),\n                    order.getCustomerId().getValue(),\n                    order.getTotalAmount(),\n                    order.getStatus().name(),\n                    order.getOrderDate().toString(),\n                    order.getOrderLines().stream()\n                            .map(line -> new OrderLineResponse(\n                                    line.getId().getValue(),\n                                    line.getProductName(),\n                                    line.getQuantity(),\n                                    line.getUnitPrice(),\n                                    line.getSubtotal()))\n                            .toList()\n            );\n        }\n    }\n\n    public record OrderLineResponse(\n            String id, String productName, int quantity,\n            Money unitPrice, Money subtotal) {}\n\n    public record ErrorResponse(String code, String message) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "feign-client-for-inter-service-communication",
      children: "Feign Client for Inter-Service Communication"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport com.course.microservices.order.domain.vo.Money;\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\n\n@FeignClient(name = \"payment-service\", url = \"${payment.service.url:http://localhost:8082}\")\npublic interface PaymentServiceClient {\n\n    @PostMapping(\"/api/payments/process\")\n    PaymentResponse processPayment(@RequestBody PaymentRequest request);\n\n    @GetMapping(\"/api/payments/order/{orderId}\")\n    PaymentStatusResponse getPaymentStatus(@PathVariable(\"orderId\") String orderId);\n\n    @PostMapping(\"/api/payments/refund/{paymentId}\")\n    RefundResponse refundPayment(@PathVariable(\"paymentId\") String paymentId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport com.course.microservices.order.domain.vo.Money;\n\npublic record PaymentRequest(\n        String orderId,\n        String customerId,\n        Money amount,\n        String currency) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record PaymentResponse(\n        String paymentId,\n        String orderId,\n        String status,\n        String transactionReference) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record PaymentStatusResponse(\n        String paymentId,\n        String orderId,\n        String status,\n        String paidAt) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record RefundResponse(\n        String refundId,\n        String paymentId,\n        String status,\n        Money refundedAmount) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\nimport com.course.microservices.order.domain.vo.Money;\nimport org.springframework.cloud.openfeign.FeignClient;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.RequestBody;\n\n@FeignClient(name = \"inventory-service\", url = \"${inventory.service.url:http://localhost:8083}\")\npublic interface InventoryServiceClient {\n\n    @GetMapping(\"/api/inventory/{productId}\")\n    InventoryResponse checkInventory(@PathVariable(\"productId\") String productId);\n\n    @PostMapping(\"/api/inventory/reserve\")\n    ReservationResponse reserveInventory(@RequestBody ReservationRequest request);\n\n    @PostMapping(\"/api/inventory/release\")\n    void releaseInventory(@RequestBody ReservationRequest request);\n\n    @PostMapping(\"/api/inventory/confirm\")\n    void confirmReservation(@RequestBody ReservationRequest request);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record InventoryResponse(\n        String productId,\n        int availableQuantity,\n        boolean inStock) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record ReservationRequest(\n        String orderId,\n        String productId,\n        int quantity) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.client;\n\npublic record ReservationResponse(\n        String reservationId,\n        boolean success,\n        String message) {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "graphql-controller-alternative-to-rest",
      children: "GraphQL Controller (Alternative to REST)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.interfaces.graphql;\n\nimport com.course.microservices.order.application.OrderApplicationService;\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.vo.CustomerId;\nimport com.course.microservices.order.domain.vo.OrderId;\nimport org.springframework.graphql.data.method.annotation.Argument;\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.graphql.data.method.annotation.QueryMapping;\nimport org.springframework.stereotype.Controller;\nimport java.util.List;\n\n@Controller\npublic class OrderGraphQlController {\n\n    private final OrderApplicationService orderService;\n\n    public OrderGraphQlController(OrderApplicationService orderService) {\n        this.orderService = orderService;\n    }\n\n    @QueryMapping\n    public Order getOrder(@Argument String orderId) {\n        return orderService.getOrder(OrderId.of(orderId));\n    }\n\n    @QueryMapping\n    public List<Order> getCustomerOrders(@Argument String customerId) {\n        return orderService.getCustomerOrders(CustomerId.of(customerId));\n    }\n\n    @MutationMapping\n    public Order placeOrder(@Argument PlaceOrderInput input) {\n        CustomerId customerId = CustomerId.of(input.customerId());\n        var shippingAddress = new com.course.microservices.order.domain.vo.Address(\n                input.shippingAddress().street(),\n                input.shippingAddress().city(),\n                input.shippingAddress().state(),\n                input.shippingAddress().zipCode(),\n                input.shippingAddress().country()\n        );\n        List<OrderApplicationService.OrderLineRequest> lineRequests = input.lines().stream()\n                .map(line -> new OrderApplicationService.OrderLineRequest(\n                        line.productId(), line.productName(), line.quantity(), line.unitPrice()))\n                .toList();\n        return orderService.placeOrder(customerId, shippingAddress, lineRequests);\n    }\n\n    @MutationMapping\n    public String shipOrder(@Argument String orderId) {\n        orderService.shipOrder(OrderId.of(orderId));\n        return \"Order shipped successfully\";\n    }\n\n    @MutationMapping\n    public String cancelOrder(@Argument String orderId, @Argument String reason) {\n        orderService.cancelOrder(OrderId.of(orderId), reason);\n        return \"Order cancelled successfully\";\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.interfaces.graphql;\n\nimport java.util.List;\n\npublic record PlaceOrderInput(\n        String customerId,\n        AddressInput shippingAddress,\n        List<OrderLineInput> lines) {\n\n    public record AddressInput(\n            String street, String city, String state,\n            String zipCode, String country) {}\n\n    public record OrderLineInput(\n            String productId, String productName,\n            int quantity, double unitPrice) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "async-event-consumer",
      children: "Async Event Consumer"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.infrastructure.messaging;\n\nimport com.course.microservices.order.domain.event.PaymentReceivedEvent;\nimport com.course.microservices.order.domain.vo.OrderId;\nimport com.course.microservices.order.application.OrderApplicationService;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.kafka.annotation.KafkaListener;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class PaymentEventConsumer {\n\n    private static final Logger log = LoggerFactory.getLogger(PaymentEventConsumer.class);\n\n    private final OrderApplicationService orderService;\n\n    public PaymentEventConsumer(OrderApplicationService orderService) {\n        this.orderService = orderService;\n    }\n\n    @KafkaListener(topics = \"payment-events\", groupId = \"order-service-group\")\n    public void handlePaymentReceived(PaymentReceivedEvent event) {\n        log.info(\"Received payment event for order: {}\", event.getOrderId());\n        orderService.shipOrder(event.getOrderId());\n        log.info(\"Order {} shipped after payment received\", event.getOrderId());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.infrastructure.messaging;\n\nimport com.course.microservices.order.domain.event.OrderPlacedEvent;\nimport com.course.microservices.order.domain.event.OrderCancelledEvent;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.context.event.EventListener;\nimport org.springframework.scheduling.annotation.Async;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class OrderDomainEventListener {\n\n    private static final Logger log = LoggerFactory.getLogger(OrderDomainEventListener.class);\n\n    @Async\n    @EventListener\n    public void handleOrderPlaced(OrderPlacedEvent event) {\n        log.info(\"Domain event - Order placed: {}, customer: {}, total: {}\",\n                event.getOrderId(), event.getCustomerId(), event.getTotalAmount());\n    }\n\n    @Async\n    @EventListener\n    public void handleOrderCancelled(OrderCancelledEvent event) {\n        log.info(\"Domain event - Order cancelled: {}, reason: {}, refund: {}\",\n                event.getOrderId(), event.getReason(), event.getRefundAmount());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inventory-service-separate-bounded-context",
      children: "Inventory Service (Separate Bounded Context)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.inventory;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class InventoryApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(InventoryApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.inventory.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class ProductId {\n    private String value;\n\n    protected ProductId() {}\n\n    public ProductId(String value) {\n        if (value == null || value.isBlank()) throw new IllegalArgumentException(\"Product ID must not be blank\");\n        this.value = value;\n    }\n\n    public static ProductId of(String value) { return new ProductId(value); }\n    public static ProductId next() { return new ProductId(UUID.randomUUID().toString()); }\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        ProductId productId = (ProductId) o;\n        return value.equals(productId.value);\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(value); }\n\n    @Override\n    public String toString() { return value; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.inventory.domain.model;\n\nimport com.course.microservices.inventory.domain.vo.ProductId;\nimport jakarta.persistence.*;\nimport java.time.Instant;\n\n@Entity\n@Table(name = \"inventory\")\npublic class InventoryItem {\n\n    @EmbeddedId\n    private ProductId productId;\n\n    private int quantityOnHand;\n    private int reservedQuantity;\n    private int reorderPoint;\n    private int reorderQuantity;\n    private String location;\n    private Instant lastUpdated;\n\n    @Version\n    private long version;\n\n    protected InventoryItem() {}\n\n    public InventoryItem(ProductId productId, int quantityOnHand, int reorderPoint, int reorderQuantity) {\n        this.productId = productId;\n        this.quantityOnHand = quantityOnHand;\n        this.reservedQuantity = 0;\n        this.reorderPoint = reorderPoint;\n        this.reorderQuantity = reorderQuantity;\n        this.lastUpdated = Instant.now();\n    }\n\n    public boolean canReserve(int quantity) {\n        return (quantityOnHand - reservedQuantity) >= quantity;\n    }\n\n    public void reserve(int quantity) {\n        if (!canReserve(quantity)) {\n            throw new IllegalStateException(\"Insufficient inventory for product: \" + productId);\n        }\n        this.reservedQuantity += quantity;\n        this.lastUpdated = Instant.now();\n    }\n\n    public void releaseReservation(int quantity) {\n        if (reservedQuantity < quantity) {\n            throw new IllegalStateException(\"Cannot release more than reserved\");\n        }\n        this.reservedQuantity -= quantity;\n        this.lastUpdated = Instant.now();\n    }\n\n    public void confirmReservation(int quantity) {\n        if (reservedQuantity < quantity) {\n            throw new IllegalStateException(\"No reservation to confirm\");\n        }\n        this.reservedQuantity -= quantity;\n        this.quantityOnHand -= quantity;\n        this.lastUpdated = Instant.now();\n    }\n\n    public void receiveStock(int quantity) {\n        if (quantity <= 0) throw new IllegalArgumentException(\"Quantity must be positive\");\n        this.quantityOnHand += quantity;\n        this.lastUpdated = Instant.now();\n    }\n\n    public boolean needsReorder() {\n        return (quantityOnHand - reservedQuantity) <= reorderPoint;\n    }\n\n    public ProductId getProductId() { return productId; }\n    public int getQuantityOnHand() { return quantityOnHand; }\n    public int getReservedQuantity() { return reservedQuantity; }\n    public int getAvailableQuantity() { return quantityOnHand - reservedQuantity; }\n    public int getReorderPoint() { return reorderPoint; }\n    public int getReorderQuantity() { return reorderQuantity; }\n    public Instant getLastUpdated() { return lastUpdated; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.inventory.infrastructure.repository;\n\nimport com.course.microservices.inventory.domain.model.InventoryItem;\nimport com.course.microservices.inventory.domain.vo.ProductId;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\n\n@Repository\npublic interface InventoryRepository extends JpaRepository<InventoryItem, ProductId> {\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inventory-rest-controller",
      children: "Inventory REST Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.inventory.interfaces.rest;\n\nimport com.course.microservices.inventory.domain.model.InventoryItem;\nimport com.course.microservices.inventory.domain.vo.ProductId;\nimport com.course.microservices.inventory.infrastructure.repository.InventoryRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\n@RestController\n@RequestMapping(\"/api/inventory\")\npublic class InventoryController {\n\n    private final InventoryRepository inventoryRepository;\n\n    public InventoryController(InventoryRepository inventoryRepository) {\n        this.inventoryRepository = inventoryRepository;\n    }\n\n    @GetMapping(\"/{productId}\")\n    public ResponseEntity<InventoryResponse> checkInventory(@PathVariable String productId) {\n        return inventoryRepository.findById(ProductId.of(productId))\n                .map(item -> ResponseEntity.ok(InventoryResponse.from(item)))\n                .orElse(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping(\"/reserve\")\n    public ResponseEntity<ReservationResponse> reserveInventory(@RequestBody ReservationRequest request) {\n        InventoryItem item = inventoryRepository.findById(ProductId.of(request.productId()))\n                .orElseThrow(() -> new IllegalArgumentException(\"Product not found: \" + request.productId()));\n        try {\n            item.reserve(request.quantity());\n            inventoryRepository.save(item);\n            return ResponseEntity.ok(new ReservationResponse(java.util.UUID.randomUUID().toString(), true, \"Reserved\"));\n        } catch (IllegalStateException e) {\n            return ResponseEntity.status(HttpStatus.CONFLICT)\n                    .body(new ReservationResponse(null, false, e.getMessage()));\n        }\n    }\n\n    @PostMapping(\"/release\")\n    public ResponseEntity<Void> releaseInventory(@RequestBody ReservationRequest request) {\n        InventoryItem item = inventoryRepository.findById(ProductId.of(request.productId()))\n                .orElseThrow(() -> new IllegalArgumentException(\"Product not found: \" + request.productId()));\n        item.releaseReservation(request.quantity());\n        inventoryRepository.save(item);\n        return ResponseEntity.ok().build();\n    }\n\n    @PostMapping(\"/confirm\")\n    public ResponseEntity<Void> confirmReservation(@RequestBody ReservationRequest request) {\n        InventoryItem item = inventoryRepository.findById(ProductId.of(request.productId()))\n                .orElseThrow(() -> new IllegalArgumentException(\"Product not found: \" + request.productId()));\n        item.confirmReservation(request.quantity());\n        inventoryRepository.save(item);\n        return ResponseEntity.ok().build();\n    }\n\n    public record InventoryResponse(String productId, int availableQuantity, boolean inStock) {\n        static InventoryResponse from(InventoryItem item) {\n            return new InventoryResponse(\n                    item.getProductId().getValue(),\n                    item.getAvailableQuantity(),\n                    item.getAvailableQuantity() > 0\n            );\n        }\n    }\n\n    public record ReservationRequest(String orderId, String productId, int quantity) {}\n\n    public record ReservationResponse(String reservationId, boolean success, String message) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "payment-service-separate-bounded-context",
      children: "Payment Service (Separate Bounded Context)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class PaymentApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.domain.vo;\n\nimport jakarta.persistence.Embeddable;\nimport java.util.Objects;\nimport java.util.UUID;\n\n@Embeddable\npublic class PaymentId {\n    private String value;\n\n    protected PaymentId() {}\n\n    public PaymentId(String value) {\n        if (value == null || value.isBlank()) throw new IllegalArgumentException(\"Payment ID must not be blank\");\n        this.value = value;\n    }\n\n    public static PaymentId of(String value) { return new PaymentId(value); }\n    public static PaymentId next() { return new PaymentId(UUID.randomUUID().toString()); }\n    public String getValue() { return value; }\n\n    @Override\n    public boolean equals(Object o) {\n        if (this == o) return true;\n        if (o == null || getClass() != o.getClass()) return false;\n        PaymentId that = (PaymentId) o;\n        return value.equals(that.value);\n    }\n\n    @Override\n    public int hashCode() { return Objects.hash(value); }\n\n    @Override\n    public String toString() { return value; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.domain.model;\n\nimport com.course.microservices.payment.domain.vo.PaymentId;\nimport jakarta.persistence.*;\nimport java.math.BigDecimal;\nimport java.time.Instant;\nimport java.util.Currency;\n\n@Entity\n@Table(name = \"payments\")\npublic class Payment {\n\n    @EmbeddedId\n    private PaymentId id;\n\n    private String orderId;\n    private String customerId;\n    private BigDecimal amount;\n    private String currency;\n\n    @Enumerated(EnumType.STRING)\n    private PaymentStatus status;\n\n    private String transactionReference;\n    private Instant createdAt;\n    private Instant completedAt;\n\n    @Version\n    private long version;\n\n    protected Payment() {}\n\n    public Payment(String orderId, String customerId, BigDecimal amount, String currency) {\n        this.id = PaymentId.next();\n        this.orderId = orderId;\n        this.customerId = customerId;\n        this.amount = amount;\n        this.currency = currency;\n        this.status = PaymentStatus.PENDING;\n        this.createdAt = Instant.now();\n    }\n\n    public void process() {\n        if (status != PaymentStatus.PENDING) {\n            throw new IllegalStateException(\"Cannot process payment in status: \" + status);\n        }\n        this.status = PaymentStatus.COMPLETED;\n        this.transactionReference = \"TXN-\" + java.util.UUID.randomUUID().toString().substring(0, 8).toUpperCase();\n        this.completedAt = Instant.now();\n    }\n\n    public void fail(String reason) {\n        if (status != PaymentStatus.PENDING) {\n            throw new IllegalStateException(\"Cannot fail payment in status: \" + status);\n        }\n        this.status = PaymentStatus.FAILED;\n        this.completedAt = Instant.now();\n    }\n\n    public void refund() {\n        if (status != PaymentStatus.COMPLETED) {\n            throw new IllegalStateException(\"Cannot refund payment in status: \" + status);\n        }\n        this.status = PaymentStatus.REFUNDED;\n    }\n\n    public PaymentId getId() { return id; }\n    public String getOrderId() { return orderId; }\n    public String getCustomerId() { return customerId; }\n    public BigDecimal getAmount() { return amount; }\n    public String getCurrency() { return currency; }\n    public PaymentStatus getStatus() { return status; }\n    public String getTransactionReference() { return transactionReference; }\n    public Instant getCreatedAt() { return createdAt; }\n    public Instant getCompletedAt() { return completedAt; }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.domain.model;\n\npublic enum PaymentStatus {\n    PENDING,\n    COMPLETED,\n    FAILED,\n    REFUNDED\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.infrastructure.repository;\n\nimport com.course.microservices.payment.domain.model.Payment;\nimport com.course.microservices.payment.domain.vo.PaymentId;\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.stereotype.Repository;\nimport java.util.Optional;\n\n@Repository\npublic interface PaymentRepository extends JpaRepository<Payment, PaymentId> {\n    Optional<Payment> findByOrderId(String orderId);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kafka-event-producer-for-payment-events",
      children: "Kafka Event Producer for Payment Events"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.infrastructure.messaging;\n\nimport com.course.microservices.payment.domain.model.Payment;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.kafka.core.KafkaTemplate;\nimport org.springframework.stereotype.Component;\nimport java.time.Instant;\n\n@Component\npublic class PaymentEventProducer {\n\n    private static final Logger log = LoggerFactory.getLogger(PaymentEventProducer.class);\n    private static final String TOPIC = \"payment-events\";\n\n    private final KafkaTemplate<String, Object> kafkaTemplate;\n\n    public PaymentEventProducer(KafkaTemplate<String, Object> kafkaTemplate) {\n        this.kafkaTemplate = kafkaTemplate;\n    }\n\n    public void publishPaymentReceived(Payment payment) {\n        PaymentReceivedEvent event = new PaymentReceivedEvent(\n                payment.getOrderId(),\n                payment.getAmount().doubleValue(),\n                payment.getCurrency(),\n                payment.getTransactionReference(),\n                Instant.now()\n        );\n        kafkaTemplate.send(TOPIC, payment.getOrderId(), event);\n        log.info(\"Published payment received event for order: {}\", payment.getOrderId());\n    }\n\n    public record PaymentReceivedEvent(\n            String orderId,\n            double amount,\n            String currency,\n            String transactionReference,\n            Instant paidAt) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "payment-rest-controller",
      children: "Payment REST Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.payment.interfaces.rest;\n\nimport com.course.microservices.payment.domain.model.Payment;\nimport com.course.microservices.payment.domain.model.PaymentStatus;\nimport com.course.microservices.payment.domain.vo.PaymentId;\nimport com.course.microservices.payment.infrastructure.messaging.PaymentEventProducer;\nimport com.course.microservices.payment.infrastructure.repository.PaymentRepository;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\n\nimport java.math.BigDecimal;\n\n@RestController\n@RequestMapping(\"/api/payments\")\npublic class PaymentController {\n\n    private final PaymentRepository paymentRepository;\n    private final PaymentEventProducer eventProducer;\n\n    public PaymentController(PaymentRepository paymentRepository, PaymentEventProducer eventProducer) {\n        this.paymentRepository = paymentRepository;\n        this.eventProducer = eventProducer;\n    }\n\n    @PostMapping(\"/process\")\n    public ResponseEntity<PaymentResponse> processPayment(@RequestBody PaymentRequest request) {\n        Payment payment = new Payment(request.orderId(), request.customerId(),\n                BigDecimal.valueOf(request.amount().getAmount().doubleValue()),\n                request.amount().getCurrency().getCurrencyCode());\n        payment.process();\n        paymentRepository.save(payment);\n        eventProducer.publishPaymentReceived(payment);\n        return ResponseEntity.status(HttpStatus.CREATED)\n                .body(new PaymentResponse(payment.getId().getValue(), payment.getOrderId(),\n                        payment.getStatus().name(), payment.getTransactionReference()));\n    }\n\n    @GetMapping(\"/order/{orderId}\")\n    public ResponseEntity<PaymentStatusResponse> getPaymentStatus(@PathVariable String orderId) {\n        return paymentRepository.findByOrderId(orderId)\n                .map(p -> ResponseEntity.ok(new PaymentStatusResponse(\n                        p.getId().getValue(), p.getOrderId(), p.getStatus().name(),\n                        p.getCompletedAt() != null ? p.getCompletedAt().toString() : null)))\n                .orElse(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping(\"/refund/{paymentId}\")\n    public ResponseEntity<RefundResponse> refundPayment(@PathVariable String paymentId) {\n        Payment payment = paymentRepository.findById(PaymentId.of(paymentId))\n                .orElseThrow(() -> new IllegalArgumentException(\"Payment not found: \" + paymentId));\n        payment.refund();\n        paymentRepository.save(payment);\n        return ResponseEntity.ok(new RefundResponse(\n                \"REF-\" + paymentId, paymentId, payment.getStatus().name(),\n                new RefundResponse.MoneyData(payment.getAmount().doubleValue(), payment.getCurrency())));\n    }\n\n    public record PaymentRequest(String orderId, String customerId, MoneyData amount) {\n        public record MoneyData(double amount, String currency) {}\n    }\n\n    public record PaymentResponse(String paymentId, String orderId, String status, String transactionReference) {}\n\n    public record PaymentStatusResponse(String paymentId, String orderId, String status, String paidAt) {}\n\n    public record RefundResponse(String refundId, String paymentId, String status, MoneyData refundedAmount) {\n        public record MoneyData(double amount, String currency) {}\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "service-mesh-configuration-istio",
      children: "Service Mesh Configuration (Istio)"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# istio-config.yaml\napiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: order-service\nspec:\n  hosts:\n  - order-service\n  http:\n  - match:\n    - headers:\n        canary:\n          exact: \"v2\"\n    route:\n    - destination:\n        host: order-service\n        subset: v2\n      weight: 100\n  - route:\n    - destination:\n        host: order-service\n        subset: v1\n      weight: 90\n    - destination:\n        host: order-service\n        subset: v2\n      weight: 10\n---\napiVersion: networking.istio.io/v1beta1\nkind: DestinationRule\nmetadata:\n  name: order-service\nspec:\n  host: order-service\n  subsets:\n  - name: v1\n    labels:\n      version: v1\n  - name: v2\n    labels:\n      version: v2\n  trafficPolicy:\n    connectionPool:\n      tcp:\n        maxConnections: 100\n      http:\n        http1MaxPendingRequests: 10\n        http2MaxRequests: 1000\n    loadBalancer:\n      simple: LEAST_CONN\n    outlierDetection:\n      consecutive5xxErrors: 5\n      interval: 30s\n      baseEjectionTime: 60s\n---\napiVersion: security.istio.io/v1beta1\nkind: PeerAuthentication\nmetadata:\n  name: default\n  namespace: microservices\nspec:\n  mtls:\n    mode: STRICT\n---\napiVersion: security.istio.io/v1beta1\nkind: AuthorizationPolicy\nmetadata:\n  name: order-service-auth\n  namespace: microservices\nspec:\n  selector:\n    matchLabels:\n      app: order-service\n  action: ALLOW\n  rules:\n  - from:\n    - source:\n        principals: [\"cluster.local/ns/microservices/sa/inventory-service\"]\n    - source:\n        principals: [\"cluster.local/ns/microservices/sa/payment-service\"]\n    - source:\n        principals: [\"cluster.local/ns/microservices/sa/api-gateway\"]\n    to:\n    - operation:\n        methods: [\"GET\", \"POST\"]\n        paths: [\"/api/orders/*\"]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "database-per-service-configuration",
      children: "Database-Per-Service Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# order-service/src/main/resources/application-docker.yml\nspring:\n  datasource:\n    url: jdbc:postgresql://order-db:5432/orderdb\n    username: order_user\n    password: order_password\n  jpa:\n    hibernate:\n      ddl-auto: validate\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.PostgreSQLDialect\n---\n# inventory-service/src/main/resources/application-docker.yml\nspring:\n  datasource:\n    url: jdbc:postgresql://inventory-db:5432/inventorydb\n    username: inventory_user\n    password: inventory_password\n  jpa:\n    hibernate:\n      ddl-auto: validate\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.PostgreSQLDialect\n---\n# payment-service/src/main/resources/application-docker.yml\nspring:\n  datasource:\n    url: jdbc:postgresql://payment-db:5432/paymentdb\n    username: payment_user\n    password: payment_password\n  jpa:\n    hibernate:\n      ddl-auto: validate\n    properties:\n      hibernate:\n        dialect: org.hibernate.dialect.PostgreSQLDialect\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-exception-handler",
      children: "Global Exception Handler"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.interfaces.rest;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.validation.FieldError;\nimport org.springframework.web.bind.MethodArgumentNotValidException;\nimport org.springframework.web.bind.annotation.ExceptionHandler;\nimport org.springframework.web.bind.annotation.RestControllerAdvice;\nimport java.time.Instant;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\n@RestControllerAdvice\npublic class GlobalExceptionHandler {\n\n    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);\n\n    @ExceptionHandler(MethodArgumentNotValidException.class)\n    public ResponseEntity<ValidationErrorResponse> handleValidation(MethodArgumentNotValidException ex) {\n        List<FieldErrorDetail> errors = ex.getBindingResult().getFieldErrors().stream()\n                .map(error -> new FieldErrorDetail(error.getField(), error.getDefaultMessage()))\n                .toList();\n        return ResponseEntity.badRequest()\n                .body(new ValidationErrorResponse(\"VALIDATION_ERROR\", \"Validation failed\", errors));\n    }\n\n    @ExceptionHandler(IllegalArgumentException.class)\n    public ResponseEntity<ErrorResponse> handleBadArgument(IllegalArgumentException ex) {\n        return ResponseEntity.badRequest()\n                .body(new ErrorResponse(\"BAD_REQUEST\", ex.getMessage(), Instant.now().toString()));\n    }\n\n    @ExceptionHandler(IllegalStateException.class)\n    public ResponseEntity<ErrorResponse> handleConflict(IllegalStateException ex) {\n        return ResponseEntity.status(HttpStatus.CONFLICT)\n                .body(new ErrorResponse(\"CONFLICT\", ex.getMessage(), Instant.now().toString()));\n    }\n\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<ErrorResponse> handleUnexpected(Exception ex) {\n        log.error(\"Unexpected error\", ex);\n        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)\n                .body(new ErrorResponse(\"INTERNAL_ERROR\", \"An unexpected error occurred\",\n                        Instant.now().toString()));\n    }\n\n    public record ErrorResponse(String code, String message, String timestamp) {}\n    public record ValidationErrorResponse(String code, String message, List<FieldErrorDetail> errors) {}\n    public record FieldErrorDetail(String field, String message) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "health-check-controller",
      children: "Health Check Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.interfaces.rest;\n\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\nimport java.time.Instant;\nimport java.util.Map;\n\n@RestController\npublic class HealthController {\n\n    @GetMapping(\"/health\")\n    public ResponseEntity<Map<String, Object>> health() {\n        return ResponseEntity.ok(Map.of(\n                \"status\", \"UP\",\n                \"service\", \"order-service\",\n                \"timestamp\", Instant.now().toString(),\n                \"version\", \"1.0.0\"\n        ));\n    }\n\n    @GetMapping(\"/health/ready\")\n    public ResponseEntity<Map<String, String>> readiness() {\n        return ResponseEntity.ok(Map.of(\"status\", \"READY\"));\n    }\n\n    @GetMapping(\"/health/live\")\n    public ResponseEntity<Map<String, String>> liveness() {\n        return ResponseEntity.ok(Map.of(\"status\", \"ALIVE\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-test",
      children: "Integration Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order;\n\nimport com.course.microservices.order.application.OrderApplicationService;\nimport com.course.microservices.order.domain.model.Order;\nimport com.course.microservices.order.domain.vo.*;\nimport org.junit.jupiter.api.BeforeEach;\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.test.context.ActiveProfiles;\nimport java.util.List;\nimport static org.assertj.core.api.Assertions.assertThat;\nimport static org.assertj.core.api.Assertions.assertThatThrownBy;\n\n@SpringBootTest\n@ActiveProfiles(\"test\")\nclass OrderServiceIntegrationTest {\n\n    @Autowired\n    private OrderApplicationService orderService;\n\n    @BeforeEach\n    void setUp() {\n    }\n\n    @Test\n    void shouldPlaceOrderSuccessfully() {\n        CustomerId customerId = CustomerId.next();\n        Address shippingAddress = new Address(\"123 Main St\", \"New York\", \"NY\", \"10001\", \"US\");\n\n        List<OrderApplicationService.OrderLineRequest> lines = List.of(\n                new OrderApplicationService.OrderLineRequest(\"PROD-1\", \"Product 1\", 2, 29.99),\n                new OrderApplicationService.OrderLineRequest(\"PROD-2\", \"Product 2\", 1, 49.99)\n        );\n\n        Order order = orderService.placeOrder(customerId, shippingAddress, lines);\n\n        assertThat(order).isNotNull();\n        assertThat(order.getId()).isNotNull();\n        assertThat(order.getCustomerId()).isEqualTo(customerId);\n        assertThat(order.getStatus().name()).isEqualTo(\"PLACED\");\n        assertThat(order.getOrderLines()).hasSize(2);\n        assertThat(order.getTotalAmount()).isNotNull();\n    }\n\n    @Test\n    void shouldNotPlaceOrderWithEmptyLines() {\n        CustomerId customerId = CustomerId.next();\n        Address shippingAddress = new Address(\"123 Main St\", \"New York\", \"NY\", \"10001\", \"US\");\n\n        List<OrderApplicationService.OrderLineRequest> lines = List.of();\n\n        assertThatThrownBy(() -> orderService.placeOrder(customerId, shippingAddress, lines))\n                .isInstanceOf(IllegalArgumentException.class)\n                .hasMessageContaining(\"at least one order line\");\n    }\n\n    @Test\n    void shouldShipAndCancelOrder() {\n        CustomerId customerId = CustomerId.next();\n        Address shippingAddress = new Address(\"456 Oak Ave\", \"Los Angeles\", \"CA\", \"90001\", \"US\");\n        List<OrderApplicationService.OrderLineRequest> lines = List.of(\n                new OrderApplicationService.OrderLineRequest(\"PROD-3\", \"Product 3\", 1, 99.99)\n        );\n\n        Order order = orderService.placeOrder(customerId, shippingAddress, lines);\n        String orderId = order.getId().getValue();\n\n        orderService.shipOrder(OrderId.of(orderId));\n        Order shippedOrder = orderService.getOrder(OrderId.of(orderId));\n        assertThat(shippedOrder.getStatus().name()).isEqualTo(\"SHIPPED\");\n\n        orderService.cancelOrder(OrderId.of(orderId), \"Customer request\");\n        Order cancelledOrder = orderService.getOrder(OrderId.of(orderId));\n        assertThat(cancelledOrder.getStatus().name()).isEqualTo(\"CANCELLED\");\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "unit-tests-for-domain-model",
      children: "Unit Tests for Domain Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.model;\n\nimport com.course.microservices.order.domain.vo.*;\nimport org.junit.jupiter.api.Test;\nimport java.util.List;\nimport static org.assertj.core.api.Assertions.assertThat;\nimport static org.assertj.core.api.Assertions.assertThatThrownBy;\n\nclass OrderTest {\n\n    @Test\n    void shouldCreateOrderWithLines() {\n        CustomerId customerId = CustomerId.next();\n        Address address = new Address(\"1 Main St\", \"City\", \"ST\", \"12345\", \"US\");\n        OrderLine line1 = OrderLine.create(ProductId.next(), \"Product A\", 2, Money.of(10.00, \"USD\"));\n        OrderLine line2 = OrderLine.create(ProductId.next(), \"Product B\", 1, Money.of(25.00, \"USD\"));\n\n        Order order = Order.place(customerId, address, List.of(line1, line2));\n\n        assertThat(order.getStatus()).isEqualTo(OrderStatus.PLACED);\n        assertThat(order.getOrderLines()).hasSize(2);\n        assertThat(order.getTotalAmount()).isEqualTo(Money.of(45.00, \"USD\"));\n    }\n\n    @Test\n    void shouldRejectEmptyOrder() {\n        CustomerId customerId = CustomerId.next();\n        Address address = new Address(\"1 Main St\", \"City\", \"ST\", \"12345\", \"US\");\n\n        assertThatThrownBy(() -> Order.place(customerId, address, List.of()))\n                .isInstanceOf(IllegalArgumentException.class);\n    }\n\n    @Test\n    void shouldShipOrder() {\n        Order order = createSampleOrder();\n        order.ship();\n        assertThat(order.getStatus()).isEqualTo(OrderStatus.SHIPPED);\n        assertThat(order.getShippedDate()).isNotNull();\n    }\n\n    @Test\n    void shouldNotShipDeliveredOrder() {\n        Order order = createSampleOrder();\n        order.ship();\n        order.markDelivered();\n        assertThatThrownBy(order::ship).isInstanceOf(IllegalStateException.class);\n    }\n\n    @Test\n    void shouldCancelPlacedOrder() {\n        Order order = createSampleOrder();\n        order.cancel(\"No longer needed\");\n        assertThat(order.getStatus()).isEqualTo(OrderStatus.CANCELLED);\n    }\n\n    @Test\n    void shouldNotCancelShippedOrder() {\n        Order order = createSampleOrder();\n        order.ship();\n        assertThatThrownBy(() -> order.cancel(\"Requested\"))\n                .isInstanceOf(IllegalStateException.class);\n    }\n\n    @Test\n    void shouldCalculateTotalCorrectly() {\n        OrderLine line1 = OrderLine.create(ProductId.next(), \"Item\", 3, Money.of(5.00, \"USD\"));\n        OrderLine line2 = OrderLine.create(ProductId.next(), \"Item\", 2, Money.of(10.00, \"USD\"));\n        Order order = createSampleOrderWithLines(line1, line2);\n\n        Money expectedTotal = Money.of(35.00, \"USD\");\n        assertThat(order.getTotalAmount()).isEqualTo(expectedTotal);\n    }\n\n    @Test\n    void shouldAddAndRemoveLines() {\n        Order order = createSampleOrder();\n        int initialSize = order.getOrderLines().size();\n\n        OrderLine newLine = OrderLine.create(ProductId.next(), \"New Item\", 1, Money.of(15.00, \"USD\"));\n        order.addLine(newLine);\n        assertThat(order.getOrderLines()).hasSize(initialSize + 1);\n\n        order.removeLine(order.getOrderLines().get(0).getId());\n        assertThat(order.getOrderLines()).hasSize(initialSize);\n    }\n\n    private Order createSampleOrder() {\n        OrderLine line = OrderLine.create(ProductId.next(), \"Sample\", 1, Money.of(50.00, \"USD\"));\n        return createSampleOrderWithLines(line);\n    }\n\n    private Order createSampleOrderWithLines(OrderLine... lines) {\n        return Order.place(\n                CustomerId.next(),\n                new Address(\"1 St\", \"City\", \"ST\", \"12345\", \"US\"),\n                List.of(lines)\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "money-value-object-tests",
      children: "Money Value Object Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.microservices.order.domain.vo;\n\nimport org.junit.jupiter.api.Test;\nimport java.math.BigDecimal;\nimport java.util.Currency;\nimport static org.assertj.core.api.Assertions.assertThat;\nimport static org.assertj.core.api.Assertions.assertThatThrownBy;\n\nclass MoneyTest {\n\n    @Test\n    void shouldCreateMoneyWithValidAmount() {\n        Money money = Money.of(100.50, \"USD\");\n        assertThat(money.getAmount()).isEqualTo(BigDecimal.valueOf(100.50));\n        assertThat(money.getCurrency().getCurrencyCode()).isEqualTo(\"USD\");\n    }\n\n    @Test\n    void shouldRejectNullAmount() {\n        assertThatThrownBy(() -> new Money(null, Currency.getInstance(\"USD\")))\n                .isInstanceOf(IllegalArgumentException.class);\n    }\n\n    @Test\n    void shouldRejectNegativeAmount() {\n        assertThatThrownBy(() -> Money.of(-10.00, \"USD\"))\n                .isInstanceOf(IllegalArgumentException.class);\n    }\n\n    @Test\n    void shouldAddSameCurrency() {\n        Money a = Money.of(100.00, \"USD\");\n        Money b = Money.of(50.00, \"USD\");\n        Money result = a.add(b);\n        assertThat(result).isEqualTo(Money.of(150.00, \"USD\"));\n    }\n\n    @Test\n    void shouldRejectDifferentCurrencyAddition() {\n        Money a = Money.of(100.00, \"USD\");\n        Money b = Money.of(50.00, \"EUR\");\n        assertThatThrownBy(() -> a.add(b)).isInstanceOf(IllegalArgumentException.class);\n    }\n\n    @Test\n    void shouldSubtract() {\n        Money a = Money.of(100.00, \"USD\");\n        Money b = Money.of(30.00, \"USD\");\n        assertThat(a.subtract(b)).isEqualTo(Money.of(70.00, \"USD\"));\n    }\n\n    @Test\n    void shouldRejectInsufficientFunds() {\n        Money a = Money.of(20.00, \"USD\");\n        Money b = Money.of(50.00, \"USD\");\n        assertThatThrownBy(() -> a.subtract(b)).isInstanceOf(IllegalArgumentException.class);\n    }\n\n    @Test\n    void shouldMultiplyByQuantity() {\n        Money price = Money.of(25.50, \"USD\");\n        assertThat(price.multiply(3)).isEqualTo(Money.of(76.50, \"USD\"));\n    }\n\n    @Test\n    void shouldCreateZero() {\n        Money zero = Money.zero(\"USD\");\n        assertThat(zero.getAmount()).isEqualByComparingTo(BigDecimal.ZERO);\n    }\n\n    @Test\n    void shouldImplementValueEquality() {\n        Money a = Money.of(100.00, \"USD\");\n        Money b = Money.of(100.00, \"USD\");\n        Money c = Money.of(200.00, \"USD\");\n        assertThat(a).isEqualTo(b);\n        assertThat(a).isNotEqualTo(c);\n        assertThat(a.hashCode()).isEqualTo(b.hashCode());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "docker-compose-with-database-per-service",
      children: "Docker Compose with Database-Per-Service"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "version: '3.8'\nservices:\n  order-db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: orderdb\n      POSTGRES_USER: order_user\n      POSTGRES_PASSWORD: order_password\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - order-db-data:/var/lib/postgresql/data\n\n  inventory-db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: inventorydb\n      POSTGRES_USER: inventory_user\n      POSTGRES_PASSWORD: inventory_password\n    ports:\n      - \"5433:5432\"\n    volumes:\n      - inventory-db-data:/var/lib/postgresql/data\n\n  payment-db:\n    image: postgres:16-alpine\n    environment:\n      POSTGRES_DB: paymentdb\n      POSTGRES_USER: payment_user\n      POSTGRES_PASSWORD: payment_password\n    ports:\n      - \"5434:5432\"\n    volumes:\n      - payment-db-data:/var/lib/postgresql/data\n\n  zookeeper:\n    image: confluentinc/cp-zookeeper:7.5.0\n    environment:\n      ZOOKEEPER_CLIENT_PORT: 2181\n      ZOOKEEPER_TICK_TIME: 2000\n\n  kafka:\n    image: confluentinc/cp-kafka:7.5.0\n    depends_on:\n      - zookeeper\n    ports:\n      - \"9092:9092\"\n    environment:\n      KAFKA_BROKER_ID: 1\n      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181\n      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092\n      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1\n      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 1\n      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1\n\n  order-service:\n    build: ./order-service\n    ports:\n      - \"8081:8081\"\n    depends_on:\n      - order-db\n      - kafka\n    environment:\n      SPRING_PROFILES_ACTIVE: docker\n\n  inventory-service:\n    build: ./inventory-service\n    ports:\n      - \"8083:8083\"\n    depends_on:\n      - inventory-db\n    environment:\n      SPRING_PROFILES_ACTIVE: docker\n\n  payment-service:\n    build: ./payment-service\n    ports:\n      - \"8082:8082\"\n    depends_on:\n      - payment-db\n      - kafka\n    environment:\n      SPRING_PROFILES_ACTIVE: docker\n\nvolumes:\n  order-db-data:\n  inventory-db-data:\n  payment-db-data:\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bounded Context"
        }), " defines the boundary within which a domain model applies, with its own ubiquitous language"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DDD Building Blocks"
        }), " include value objects (immutable, no identity), aggregates (consistency boundaries), domain events (side effects), repositories (persistence abstraction), and factories (complex creation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Decomposition"
        }), " follows business capabilities, DDD subdomains, and Conway's Law"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Inter-service Communication"
        }), " can be synchronous (REST, GraphQL) for queries or async (messaging) for events"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Database-Per-Service"
        }), " ensures loose coupling; the shared database anti-pattern creates hidden dependencies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Service Mesh"
        }), " (Istio, Linkerd) provides traffic management, observability, and security at the infrastructure layer via sidecar proxies"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Domain Modeling"
          }), ": Identify the bounded contexts in an e-commerce system (catalog, cart, checkout, shipping, returns). Define the ubiquitous language for each context."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Value Objects"
          }), ": Implement value objects for ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Email"
          }), ", ", (0,jsx_runtime.jsx)(_components.code, {
            children: "PhoneNumber"
          }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Quantity"
          }), " following the patterns shown in ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Money"
          }), ". Include validation, immutability, and equality."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Aggregate Design"
          }), ": Design an ", (0,jsx_runtime.jsx)(_components.code, {
            children: "Order"
          }), " aggregate that enforces the invariant that an order cannot exceed $10,000 total. Write tests proving the invariant holds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Synchronous Communication"
          }), ": Create a Feign client for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ShippingService"
          }), " and integrate it into the order flow to fetch shipping rates after an order is placed."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Async Events"
          }), ": Add a new domain event ", (0,jsx_runtime.jsx)(_components.code, {
            children: "OrderDeliveredEvent"
          }), ". Publish it when an order is marked delivered, and create a consumer in the inventory service that releases any remaining reservations."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Database-Per-Service"
          }), ": Convert the shared-database anti-pattern in the provided code to explicit database-per-service by configuring separate datasources in each service's ", (0,jsx_runtime.jsx)(_components.code, {
            children: "application.yml"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Service Mesh"
          }), ": Write an Istio ", (0,jsx_runtime.jsx)(_components.code, {
            children: "VirtualService"
          }), " configuration that splits 80% of traffic to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "v1"
          }), " and 20% to ", (0,jsx_runtime.jsx)(_components.code, {
            children: "v2"
          }), " of the order service, with a canary header override."]
        }), "\n"]
      }), "\n"]
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