"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[81306],{

/***/ 93934
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_40_gateway_md_365_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-40-gateway-md-365.json
const site_docs_courses_java_40_gateway_md_365_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/40-gateway","title":"API Gateway (Spring Cloud Gateway)","description":"Previous Resilience and Circuit Breakers","source":"@site/docs/courses/java/40-gateway.md","sourceDirName":"courses/java","slug":"/java/40-gateway","permalink":"/ai-engineering-journey/java/40-gateway","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":40,"frontMatter":{"id":"40-gateway","slug":"/java/40-gateway","title":"API Gateway (Spring Cloud Gateway)","sidebar_label":"API Gateway (Spring Cloud Gateway)","sidebar_position":40},"sidebar":"course-java","previous":{"title":"Service Discovery & Load Balancing","permalink":"/ai-engineering-journey/java/39-discovery"},"next":{"title":"Resilience & Circuit Breakers (Resilience4j)","permalink":"/ai-engineering-journey/java/41-resilience"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// ./docs/courses/java/40-gateway.md


const frontMatter = {
	id: '40-gateway',
	slug: '/java/40-gateway',
	title: 'API Gateway (Spring Cloud Gateway)',
	sidebar_label: 'API Gateway (Spring Cloud Gateway)',
	sidebar_position: 40
};
const contentTitle = 'API Gateway (Spring Cloud Gateway)';

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
  "value": "API Gateway Pattern",
  "id": "api-gateway-pattern",
  "level": 3
}, {
  "value": "Spring Cloud Gateway",
  "id": "spring-cloud-gateway",
  "level": 3
}, {
  "value": "Circuit Breaker Integration",
  "id": "circuit-breaker-integration",
  "level": 3
}, {
  "value": "Rate Limiting",
  "id": "rate-limiting",
  "level": 3
}, {
  "value": "Complete Code Examples",
  "id": "complete-code-examples",
  "level": 2
}, {
  "value": "Gateway Application",
  "id": "gateway-application",
  "level": 3
}, {
  "value": "YAML Route Configuration",
  "id": "yaml-route-configuration",
  "level": 3
}, {
  "value": "Programmatic Route Configuration",
  "id": "programmatic-route-configuration",
  "level": 3
}, {
  "value": "Predicate Examples",
  "id": "predicate-examples",
  "level": 3
}, {
  "value": "Custom Gateway Filters",
  "id": "custom-gateway-filters",
  "level": 3
}, {
  "value": "Global Filters",
  "id": "global-filters",
  "level": 3
}, {
  "value": "Rate Limiting Configuration",
  "id": "rate-limiting-configuration",
  "level": 3
}, {
  "value": "Circuit Breaker Fallback Controller",
  "id": "circuit-breaker-fallback-controller",
  "level": 3
}, {
  "value": "Security Configuration",
  "id": "security-configuration",
  "level": 3
}, {
  "value": "Security Global Filter",
  "id": "security-global-filter",
  "level": 3
}, {
  "value": "Gateway Health Indicator",
  "id": "gateway-health-indicator",
  "level": 3
}, {
  "value": "Gateway Metrics",
  "id": "gateway-metrics",
  "level": 3
}, {
  "value": "Gateway Admin Controller",
  "id": "gateway-admin-controller",
  "level": 3
}, {
  "value": "Discovery Locator Configuration",
  "id": "discovery-locator-configuration",
  "level": 3
}, {
  "value": "Route Validation Configuration",
  "id": "route-validation-configuration",
  "level": 3
}, {
  "value": "Integration Tests",
  "id": "integration-tests",
  "level": 3
}, {
  "value": "Load Balancer Configuration for Gateway",
  "id": "load-balancer-configuration-for-gateway",
  "level": 3
}, {
  "value": "Reactive Request Statistics",
  "id": "reactive-request-statistics",
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
        id: "api-gateway-spring-cloud-gateway",
        children: "API Gateway (Spring Cloud Gateway)"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/39-discovery",
          children: "Service Discovery"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/41-resilience",
          children: "Resilience and Circuit Breakers"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure Spring Cloud Gateway with RouteLocatorBuilder and YAML-based route definitions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement gateway predicates including Path, Method, Header, Query, Cookie, Host, RemoteAddr, Weight, and temporal predicates"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and apply gateway filters (AddRequestHeader, AddResponseHeader, RewritePath, StripPrefix, CircuitBreaker, Retry, RequestRateLimiter)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build custom GatewayFilter and GlobalFilter implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate Spring Cloud CircuitBreaker with the gateway for resilience"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement rate limiting with Redis and custom KeyResolver"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure the gateway with OAuth2 Resource Server and custom security filters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the WebFlux-based reactive architecture"
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
            children: "API Gateway → single entry point for all client requests"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Routing, filtering, cross-cutting concerns in one layer"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Spring Cloud Gateway → reactive, non-blocking gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Route definitions with predicates and filters"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Advanced Features → rate limiting, circuit breaking, security"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Global and per-route filters; integration with Resilience4j"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[API Gateway] --> B[Core Concepts]\n    A --> C[Spring Cloud Gateway]\n    A --> D[Advanced Features]\n    B --> B1[Routing / Filtering]\n    B --> B2[Cross-cutting concerns]\n    C --> C1[Route definition]\n    C --> C2[Predicates / Filters]\n    D --> D1[Rate Limiting]\n    D --> D2[Circuit Breaker]\n    D --> D3[Security]\n"
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
            children: "Spring Cloud Gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reactive (WebFlux)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Non-blocking, built on Spring 5"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Zuul 1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Servlet-based (blocking)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Legacy Netflix OSS, no longer actively developed"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Kong"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Lua/OpenResty gateway"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Plugin ecosystem, Kubernetes Ingress Controller"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Nginx + Lua"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Reverse proxy with scripting"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-performance, custom routing logic"
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
              children: "RouteLocator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Defines gateway routes"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean RouteLocator routes(RouteLocatorBuilder builder)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".route(r -> r.path(\"/api/**\").uri(\"lb://service\"))"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path-based route to Eureka service"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Combines routing with load balancing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "AddRequestHeader"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GatewayFilter to add header"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: ".filter(gatewayFilter)"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "RequestRateLimiter"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Redis-backed rate limiter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Bean KeyResolver userKeyResolver()"
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
            children: "Microservices"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gateway + Eureka"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Single endpoint for all: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/orders/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/payments/"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/api/inventory/"
            })]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Multi-Version API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Predicate-based routing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Route ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v1/**"
            }), " to old service, ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/v2/**"
            }), " to new service"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Global Auth"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security filter"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Validate JWT at the gateway before routing to backend"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["On which reactive framework is Spring Cloud Gateway built? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Spring WebFlux (Project Reactor)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which two components make up a route definition? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Predicate (match condition) and Filter (request/response transformation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is the main advantage of a gateway in a microservices architecture? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Centralized cross-cutting concerns → auth, rate limiting, logging → without per-service duplication"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "theory",
      children: "Theory"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/40-gateway.png",
        alt: "API Gateway - Spring Cloud Gateway Architecture"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "api-gateway-pattern",
      children: "API Gateway Pattern"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "An API Gateway is a single entry point that routes requests to appropriate backend services. It handles cross-cutting concerns including authentication, rate limiting, routing, aggregation, and protocol translation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "spring-cloud-gateway",
      children: "Spring Cloud Gateway"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Spring Cloud Gateway is built on ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Spring WebFlux"
      }), " (Reactor, Netty), making it fully reactive and non-blocking."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "Core Concepts:"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routes"
        }), ": A route is a combination of an ID, a URI destination, a collection of predicates, and a collection of filters."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predicates"
        }), ": Conditions that determine if a request matches a route (HTTP method, headers, paths, etc.)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filters"
        }), ": Modify requests and responses as they pass through the gateway (pre-filters and post-filters)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Route Locator"
        }), ": Configuration source for routes (programmatic via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouteLocatorBuilder"
        }), " or declarative via YAML)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circuit-breaker-integration",
      children: "Circuit Breaker Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Cloud Gateway integrates with Spring Cloud CircuitBreaker to wrap downstream calls with circuit breaker protection. When a backend service fails, the circuit breaker returns a fallback response instead of propagating the error."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rate-limiting",
      children: "Rate Limiting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "RequestRateLimiter"
      }), " filter uses Redis and the Token Bucket algorithm. The ", (0,jsx_runtime.jsx)(_components.code, {
        children: "KeyResolver"
      }), " determines how to identify unique clients (e.g., by IP, authenticated user, or header)."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nUse ", (0,jsx_runtime.jsx)(_components.code, {
          children: "lb://service-name"
        }), " as the URI in route definitions to leverage Eureka load balancing through the gateway."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!WARNING]\nSpring Cloud Gateway is reactive and uses Netty → do not depend on ", (0,jsx_runtime.jsx)(_components.code, {
          children: "spring-boot-starter-web"
        }), " (Tomcat) as they conflict."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!NOTE]\nEnable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RouteDefinitionMetrics"
        }), " via Micrometer to monitor route hit rates, latency, and error responses."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "complete-code-examples",
      children: "Complete Code Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gateway-application",
      children: "Gateway Application"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<project xmlns=\"http://maven.apache.org/POM/4.0.0\"\n         xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n         xsi:schemaLocation=\"http://maven.apache.org/POM/4.0.0\n         https://maven.apache.org/xsd/maven-4.0.0.xsd\">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>3.2.0</version>\n        <relativePath/>\n    </parent>\n\n    <groupId>com.course.gateway</groupId>\n    <artifactId>api-gateway</artifactId>\n    <version>1.0.0</version>\n    <name>api-gateway</name>\n    <description>Spring Cloud Gateway</description>\n\n    <properties>\n        <java.version>21</java.version>\n        <spring-cloud.version>2023.0.0</spring-cloud.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-gateway</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-circuitbreaker-reactor-resilience4j</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-data-redis-reactive</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-oauth2-resource-server</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-actuator</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-loadbalancer</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n        <dependency>\n            <groupId>io.projectreactor</groupId>\n            <artifactId>reactor-test</artifactId>\n            <scope>test</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>${spring-cloud.version}</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.springframework.boot</groupId>\n                <artifactId>spring-boot-maven-plugin</artifactId>\n            </plugin>\n        </plugins>\n    </build>\n</project>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cloud.client.discovery.EnableDiscoveryClient;\n\n@SpringBootApplication\n@EnableDiscoveryClient\npublic class GatewayApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(GatewayApplication.class, args);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "yaml-route-configuration",
      children: "YAML Route Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# src/main/resources/application.yml\nserver:\n  port: 8080\n\nspring:\n  application:\n    name: api-gateway\n  cloud:\n    gateway:\n      httpclient:\n        connect-timeout: 5000\n        response-timeout: 30s\n        pool:\n          type: elastic\n          max-connections: 1000\n          acquire-timeout: 5000\n      routes:\n        - id: order-service\n          uri: lb://order-service\n          predicates:\n            - Path=/api/orders/**\n            - Method=GET,POST,PUT,DELETE\n          filters:\n            - StripPrefix=0\n            - name: RequestRateLimiter\n              args:\n                redis-rate-limiter.replenishRate: 100\n                redis-rate-limiter.burstCapacity: 200\n                redis-rate-limiter.requestedTokens: 1\n                key-resolver: \"#{@clientIpKeyResolver}\"\n            - name: CircuitBreaker\n              args:\n                name: orderServiceCircuitBreaker\n                fallbackUri: forward:/fallback/orders\n            - AddResponseHeader=X-Gateway-Response, gateway-1.0\n            - AddRequestHeader=X-Gateway-Request, gateway-1.0\n\n        - id: payment-service\n          uri: lb://payment-service\n          predicates:\n            - Path=/api/payments/**\n            - Method=GET,POST\n          filters:\n            - StripPrefix=0\n            - name: Retry\n              args:\n                retries: 3\n                statuses: BAD_GATEWAY, SERVICE_UNAVAILABLE, GATEWAY_TIMEOUT\n                methods: GET\n                backoff:\n                  firstBackoff: 500ms\n                  maxBackoff: 5000ms\n                  factor: 2\n                  basedOnPreviousValue: true\n\n        - id: inventory-service\n          uri: lb://inventory-service\n          predicates:\n            - Path=/api/inventory/**\n            - Header=X-Inventory-Version, v1\n          filters:\n            - StripPrefix=0\n            - SetPath=/api/inventory/{segment}\n\n        - id: shipping-service\n          uri: lb://shipping-service\n          predicates:\n            - Path=/api/shipping/**\n            - Method=GET\n            - Query=zipCode\n          filters:\n            - StripPrefix=0\n            - AddResponseHeader=X-Cache, MISS\n\n        - id: user-service-v1\n          uri: lb://user-service-v1\n          predicates:\n            - Path=/api/users/**\n            - Weight=user-group, 90\n          filters:\n            - StripPrefix=0\n            - AddRequestHeader=X-Version, v1\n\n        - id: user-service-v2\n          uri: lb://user-service-v2\n          predicates:\n            - Path=/api/users/**\n            - Weight=user-group, 10\n            - Cookie=canary, enabled\n          filters:\n            - StripPrefix=0\n            - AddRequestHeader=X-Version, v2\n\n        - id: external-service\n          uri: https://api.external.com\n          predicates:\n            - Host=external.**.com\n            - RemoteAddr=10.0.0.0/24\n          filters:\n            - StripPrefix=1\n            - AddRequestHeader=X-External-Auth, ${EXTERNAL_API_KEY}\n            - name: CircuitBreaker\n              args:\n                name: externalServiceCB\n                fallbackUri: forward:/fallback/external\n\n        - id: docs-route\n          uri: http://localhost:8081\n          predicates:\n            - Path=/docs/**\n            - After=2024-01-01T00:00:00.000-05:00\n          filters:\n            - RewritePath=/docs/(?<segment>.*), /${segment}\n\n      default-filters:\n        - AddResponseHeader=X-Gateway-Instance, ${spring.application.name}\n        - name: CircuitBreaker\n          args:\n            name: defaultCircuitBreaker\n            fallbackUri: forward:/fallback/default\n\n  redis:\n    host: localhost\n    port: 6379\n\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: https://auth.example.com/realms/microservices\n          jwk-set-uri: https://auth.example.com/realms/microservices/protocol/openid-connect/certs\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://localhost:8761/eureka/\n    registry-fetch-interval-seconds: 5\n  instance:\n    prefer-ip-address: true\n\nmanagement:\n  endpoints:\n    web:\n      exposure:\n        include: health,info,metrics,gateway\n  endpoint:\n    gateway:\n      enabled: true\n    health:\n      show-details: always\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "programmatic-route-configuration",
      children: "Programmatic Route Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;\nimport org.springframework.cloud.gateway.route.RouteLocator;\nimport org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.http.HttpStatus;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\nimport java.time.ZonedDateTime;\n\n@Configuration\npublic class GatewayRouteConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(GatewayRouteConfig.class);\n\n    @Bean\n    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {\n        return builder.routes()\n                .route(\"order-service-programmatic\", r -> r\n                        .path(\"/api/orders/**\")\n                        .and()\n                        .method(HttpMethod.GET, HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE)\n                        .and()\n                        .header(\"Accept\", \"application/json\")\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .addRequestHeader(\"X-Request-Source\", \"gateway\")\n                                .addResponseHeader(\"X-Response-Source\", \"gateway\")\n                                .retry(retryConfig -> retryConfig\n                                        .setRetries(3)\n                                        .setStatuses(HttpStatus.BAD_GATEWAY, HttpStatus.SERVICE_UNAVAILABLE)\n                                        .setMethods(HttpMethod.GET)\n                                        .setBackoff(Duration.ofMillis(200), Duration.ofSeconds(5), 2, true))\n                                .circuitBreaker(cb -> cb\n                                        .setName(\"orderServiceCB\")\n                                        .setFallbackUri(\"forward:/fallback/orders\")))\n                        .uri(\"lb://order-service\"))\n\n                .route(\"payment-service-programmatic\", r -> r\n                        .path(\"/api/payments/**\")\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .addResponseHeader(\"X-Payment-Gateway\", \"active\")\n                                .circuitBreaker(cb -> cb\n                                        .setName(\"paymentServiceCB\")\n                                        .setFallbackUri(\"forward:/fallback/payments\")))\n                        .uri(\"lb://payment-service\"))\n\n                .route(\"inventory-service-programmatic\", r -> r\n                        .path(\"/api/inventory/**\")\n                        .and()\n                        .header(\"X-Inventory-Version\", \"v1\")\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .setPath(\"/api/inventory/{segment}\"))\n                        .uri(\"lb://inventory-service\"))\n\n                .route(\"shipping-service-programmatic\", r -> r\n                        .path(\"/api/shipping/**\")\n                        .and()\n                        .query(\"zipCode\")\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .addResponseHeader(\"X-Cache\", \"MISS\"))\n                        .uri(\"lb://shipping-service\"))\n\n                .route(\"canary-user-service-v2\", r -> r\n                        .path(\"/api/users/**\")\n                        .and()\n                        .cookie(\"canary\", \"enabled\")\n                        .and()\n                        .weight(\"user-group\", 10)\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .addRequestHeader(\"X-Version\", \"v2\")\n                                .addResponseHeader(\"X-Canary\", \"true\"))\n                        .uri(\"lb://user-service-v2\"))\n\n                .route(\"canary-user-service-v1\", r -> r\n                        .path(\"/api/users/**\")\n                        .and()\n                        .weight(\"user-group\", 90)\n                        .filters(f -> f\n                                .stripPrefix(0)\n                                .addRequestHeader(\"X-Version\", \"v1\"))\n                        .uri(\"lb://user-service-v1\"))\n\n                .route(\"docs-route-programmatic\", r -> r\n                        .path(\"/docs/**\")\n                        .and()\n                        .after(ZonedDateTime.parse(\"2024-01-01T00:00:00.000-05:00[America/New_York]\"))\n                        .filters(f -> f\n                                .rewritePath(\"/docs/(?<segment>.*)\", \"/${segment}\"))\n                        .uri(\"http://localhost:8081\"))\n\n                .route(\"external-api-route\", r -> r\n                        .host(\"external.**.com\")\n                        .and()\n                        .remoteAddr(\"10.0.0.0/24\")\n                        .filters(f -> f\n                                .stripPrefix(1)\n                                .addRequestHeader(\"X-External-Auth\", \"${external.api.key}\")\n                                .circuitBreaker(cb -> cb\n                                        .setName(\"externalApiCB\")\n                                        .setFallbackUri(\"forward:/fallback/external\")))\n                        .uri(\"https://api.external.com\"))\n\n                .route(\"websocket-route\", r -> r\n                        .path(\"/ws/**\")\n                        .filters(f -> f\n                                .stripPrefix(1))\n                        .uri(\"lb:ws://websocket-service\"))\n\n                .build();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "predicate-examples",
      children: "Predicate Examples"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.gateway.handler.predicate.AbstractRoutePredicateFactory;\nimport org.springframework.cloud.gateway.handler.predicate.GatewayPredicate;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport java.time.DayOfWeek;\nimport java.time.LocalTime;\nimport java.time.ZoneId;\nimport java.time.ZonedDateTime;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.function.Predicate;\n\n@Component\npublic class BusinessHoursRoutePredicateFactory\n        extends AbstractRoutePredicateFactory<BusinessHoursRoutePredicateFactory.Config> {\n\n    public BusinessHoursRoutePredicateFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public List<String> shortcutFieldOrder() {\n        return Arrays.asList(\"startHour\", \"endHour\", \"timeZone\");\n    }\n\n    @Override\n    public Predicate<ServerWebExchange> apply(Config config) {\n        return exchange -> {\n            ZoneId zoneId = ZoneId.of(config.getTimeZone());\n            ZonedDateTime now = ZonedDateTime.now(zoneId);\n            LocalTime currentTime = now.toLocalTime();\n            DayOfWeek dayOfWeek = now.getDayOfWeek();\n\n            if (dayOfWeek == DayOfWeek.SATURDAY || dayOfWeek == DayOfWeek.SUNDAY) {\n                return false;\n            }\n\n            LocalTime start = LocalTime.parse(config.getStartHour());\n            LocalTime end = LocalTime.parse(config.getEndHour());\n            return !currentTime.isBefore(start) && !currentTime.isAfter(end);\n        };\n    }\n\n    public static class Config {\n        private String startHour = \"09:00\";\n        private String endHour = \"17:00\";\n        private String timeZone = \"America/New_York\";\n\n        public String getStartHour() { return startHour; }\n        public void setStartHour(String startHour) { this.startHour = startHour; }\n        public String getEndHour() { return endHour; }\n        public void setEndHour(String endHour) { this.endHour = endHour; }\n        public String getTimeZone() { return timeZone; }\n        public void setTimeZone(String timeZone) { this.timeZone = timeZone; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.gateway.handler.predicate.AbstractRoutePredicateFactory;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.function.Predicate;\n\n@Component\npublic class ClientIdRoutePredicateFactory\n        extends AbstractRoutePredicateFactory<ClientIdRoutePredicateFactory.Config> {\n\n    public ClientIdRoutePredicateFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public List<String> shortcutFieldOrder() {\n        return Arrays.asList(\"clientIds\");\n    }\n\n    @Override\n    public Predicate<ServerWebExchange> apply(Config config) {\n        return exchange -> {\n            String clientId = exchange.getRequest().getHeaders()\n                    .getFirst(\"X-Client-Id\");\n            if (clientId == null || clientId.isBlank()) {\n                return false;\n            }\n            return config.getClientIds().contains(clientId);\n        };\n    }\n\n    public static class Config {\n        private List<String> clientIds;\n\n        public List<String> getClientIds() { return clientIds; }\n        public void setClientIds(List<String> clientIds) { this.clientIds = clientIds; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.gateway.handler.predicate.AbstractRoutePredicateFactory;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport java.util.function.Predicate;\n\n@Component\npublic class VersionRoutePredicateFactory\n        extends AbstractRoutePredicateFactory<VersionRoutePredicateFactory.Config> {\n\n    public VersionRoutePredicateFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public Predicate<ServerWebExchange> apply(Config config) {\n        return exchange -> {\n            String version = exchange.getRequest().getHeaders()\n                    .getFirst(\"Accept-Version\");\n            return config.getVersion().equals(version);\n        };\n    }\n\n    public static class Config {\n        private String version;\n\n        public String getVersion() { return version; }\n        public void setVersion(String version) { this.version = version; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.gateway.handler.predicate.AbstractRoutePredicateFactory;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.function.Predicate;\n\n@Component\npublic class RateLimitBypassPredicateFactory\n        extends AbstractRoutePredicateFactory<RateLimitBypassPredicateFactory.Config> {\n\n    public RateLimitBypassPredicateFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public List<String> shortcutFieldOrder() {\n        return Arrays.asList(\"bypassTokens\");\n    }\n\n    @Override\n    public Predicate<ServerWebExchange> apply(Config config) {\n        return exchange -> {\n            String token = exchange.getRequest().getHeaders()\n                    .getFirst(\"X-Bypass-Rate-Limit\");\n            return token != null && config.getBypassToken().equals(token);\n        };\n    }\n\n    public static class Config {\n        private String bypassToken;\n\n        public String getBypassToken() { return bypassToken; }\n        public void setBypassToken(String bypassToken) { this.bypassToken = bypassToken; }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "custom-gateway-filters",
      children: "Custom Gateway Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilter;\nimport org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\n\n@Component\npublic class RequestLoggingGatewayFilterFactory\n        extends AbstractGatewayFilterFactory<RequestLoggingGatewayFilterFactory.Config> {\n\n    private static final Logger log = LoggerFactory.getLogger(RequestLoggingGatewayFilterFactory.class);\n\n    public RequestLoggingGatewayFilterFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public GatewayFilter apply(Config config) {\n        return (exchange, chain) -> {\n            ServerHttpRequest request = exchange.getRequest();\n            long startTime = System.currentTimeMillis();\n\n            log.info(\"Request: {} {} from {} headers={}\",\n                    request.getMethod(),\n                    request.getURI().getPath(),\n                    request.getRemoteAddress(),\n                    config.logHeaders() ? request.getHeaders() : \"[masked]\");\n\n            return chain.filter(exchange).then(Mono.fromRunnable(() -> {\n                ServerHttpResponse response = exchange.getResponse();\n                long duration = System.currentTimeMillis() - startTime;\n                log.info(\"Response: {} {} {} ({}ms)\",\n                        request.getMethod(),\n                        request.getURI().getPath(),\n                        response.getStatusCode(),\n                        duration);\n\n                if (config.logResponseHeaders()) {\n                    log.debug(\"Response headers: {}\", response.getHeaders());\n                }\n            }));\n        };\n    }\n\n    public record Config(boolean logHeaders, boolean logResponseHeaders) {\n        public Config() { this(true, false); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport com.fasterxml.jackson.databind.ObjectMapper;\nimport org.springframework.cloud.gateway.filter.GatewayFilter;\nimport org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;\nimport org.springframework.core.io.buffer.DataBuffer;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.MediaType;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\nimport java.nio.charset.StandardCharsets;\nimport java.util.Map;\n\n@Component\npublic class MaintenanceModeGatewayFilterFactory\n        extends AbstractGatewayFilterFactory<MaintenanceModeGatewayFilterFactory.Config> {\n\n    private final ObjectMapper objectMapper;\n\n    public MaintenanceModeGatewayFilterFactory(ObjectMapper objectMapper) {\n        super(Config.class);\n        this.objectMapper = objectMapper;\n    }\n\n    @Override\n    public GatewayFilter apply(Config config) {\n        return (exchange, chain) -> {\n            if (config.isEnabled()) {\n                ServerHttpResponse response = exchange.getResponse();\n                response.setStatusCode(HttpStatus.SERVICE_UNAVAILABLE);\n                response.getHeaders().setContentType(MediaType.APPLICATION_JSON);\n                response.getHeaders().set(\"Retry-After\", \"3600\");\n\n                try {\n                    String body = objectMapper.writeValueAsString(Map.of(\n                            \"status\", \"MAINTENANCE\",\n                            \"message\", config.getMessage(),\n                            \"estimatedDowntime\", config.getEstimatedDowntime()\n                    ));\n                    DataBuffer buffer = response.bufferFactory()\n                            .wrap(body.getBytes(StandardCharsets.UTF_8));\n                    return response.writeWith(Mono.just(buffer));\n                } catch (Exception e) {\n                    return response.setComplete();\n                }\n            }\n            return chain.filter(exchange);\n        };\n    }\n\n    public record Config(boolean enabled, String message, String estimatedDowntime) {\n        public Config() { this(false, \"Service is under maintenance\", \"Unknown\"); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.springframework.cloud.gateway.filter.GatewayFilter;\nimport org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.stereotype.Component;\nimport java.net.URI;\nimport java.time.Duration;\nimport java.time.Instant;\n\n@Component\npublic class RateLimitHeaderGatewayFilterFactory\n        extends AbstractGatewayFilterFactory<RateLimitHeaderGatewayFilterFactory.Config> {\n\n    public RateLimitHeaderGatewayFilterFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public GatewayFilter apply(Config config) {\n        return (exchange, chain) -> {\n            ServerHttpRequest request = exchange.getRequest().mutate()\n                    .header(\"X-Rate-Limit-Limit\", String.valueOf(config.getLimit()))\n                    .header(\"X-Rate-Limit-Remaining\", String.valueOf(config.getRemaining()))\n                    .header(\"X-Rate-Limit-Reset\", String.valueOf(\n                            Instant.now().plus(Duration.ofSeconds(config.getResetSeconds()))\n                                    .getEpochSecond()))\n                    .build();\n\n            return chain.filter(exchange.mutate().request(request).build());\n        };\n    }\n\n    public record Config(int limit, int remaining, int resetSeconds) {\n        public Config() { this(100, 100, 60); }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.springframework.cloud.gateway.filter.GatewayFilter;\nimport org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.stereotype.Component;\n\n@Component\npublic class CorrelationIdGatewayFilterFactory\n        extends AbstractGatewayFilterFactory<CorrelationIdGatewayFilterFactory.Config> {\n\n    private static final String CORRELATION_ID_HEADER = \"X-Correlation-Id\";\n\n    public CorrelationIdGatewayFilterFactory() {\n        super(Config.class);\n    }\n\n    @Override\n    public GatewayFilter apply(Config config) {\n        return (exchange, chain) -> {\n            ServerHttpRequest request = exchange.getRequest();\n            String correlationId = request.getHeaders()\n                    .getFirst(CORRELATION_ID_HEADER);\n\n            if (correlationId == null || correlationId.isBlank()) {\n                correlationId = java.util.UUID.randomUUID().toString();\n            }\n\n            ServerHttpRequest mutatedRequest = request.mutate()\n                    .header(CORRELATION_ID_HEADER, correlationId)\n                    .build();\n\n            return chain.filter(exchange.mutate().request(mutatedRequest).build());\n        };\n    }\n\n    public record Config() {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "global-filters",
      children: "Global Filters"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Timer;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilterChain;\nimport org.springframework.cloud.gateway.filter.GlobalFilter;\nimport org.springframework.core.Ordered;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\nimport java.time.Duration;\nimport java.time.Instant;\n\n@Component\npublic class MetricsGlobalFilter implements GlobalFilter, Ordered {\n\n    private static final Logger log = LoggerFactory.getLogger(MetricsGlobalFilter.class);\n    private final MeterRegistry meterRegistry;\n\n    public MetricsGlobalFilter(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        String path = request.getURI().getPath();\n        String method = request.getMethod().toString();\n        Instant start = Instant.now();\n\n        return chain.filter(exchange).then(Mono.fromRunnable(() -> {\n            ServerHttpResponse response = exchange.getResponse();\n            HttpStatus status = HttpStatus.resolve(response.getStatusCode().value());\n\n            Timer.Sample sample = Timer.start(meterRegistry);\n            sample.stop(Timer.builder(\"gateway.request.duration\")\n                    .tag(\"path\", path)\n                    .tag(\"method\", method)\n                    .tag(\"status\", status != null ? String.valueOf(status.value()) : \"unknown\")\n                    .register(meterRegistry));\n\n            meterRegistry.counter(\"gateway.request.count\",\n                    \"path\", path,\n                    \"method\", method,\n                    \"status\", String.valueOf(response.getStatusCode().value())\n            ).increment();\n        }));\n    }\n\n    @Override\n    public int getOrder() {\n        return Ordered.LOWEST_PRECEDENCE - 5;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilterChain;\nimport org.springframework.cloud.gateway.filter.GlobalFilter;\nimport org.springframework.core.Ordered;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\nimport java.net.InetSocketAddress;\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicInteger;\n\n@Component\npublic class IpBlockingGlobalFilter implements GlobalFilter, Ordered {\n\n    private static final Logger log = LoggerFactory.getLogger(IpBlockingGlobalFilter.class);\n    private final Map<String, AtomicInteger> requestCounts = new ConcurrentHashMap<>();\n    private static final int MAX_REQUESTS_PER_IP = 1000;\n    private static final long WINDOW_MS = 60_000;\n    private final Map<String, Long> blockedUntil = new ConcurrentHashMap<>();\n    private static final long BLOCK_DURATION_MS = 300_000;\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        InetSocketAddress remoteAddress = exchange.getRequest().getRemoteAddress();\n        if (remoteAddress == null) {\n            return chain.filter(exchange);\n        }\n\n        String clientIp = remoteAddress.getAddress().getHostAddress();\n\n        if (isBlocked(clientIp)) {\n            log.warn(\"Blocked request from IP: {}\", clientIp);\n            ServerHttpResponse response = exchange.getResponse();\n            response.setStatusCode(HttpStatus.FORBIDDEN);\n            return response.setComplete();\n        }\n\n        trackRequest(clientIp);\n        return chain.filter(exchange);\n    }\n\n    private boolean isBlocked(String ip) {\n        Long blockedTime = blockedUntil.get(ip);\n        if (blockedTime != null) {\n            if (System.currentTimeMillis() < blockedTime) {\n                return true;\n            }\n            blockedUntil.remove(ip);\n            requestCounts.remove(ip);\n        }\n        return false;\n    }\n\n    private void trackRequest(String ip) {\n        requestCounts.computeIfAbsent(ip, k -> new AtomicInteger(0));\n        int count = requestCounts.get(ip).incrementAndGet();\n        if (count > MAX_REQUESTS_PER_IP) {\n            blockedUntil.put(ip, System.currentTimeMillis() + BLOCK_DURATION_MS);\n            log.warn(\"Blocked IP {} for exceeding request limit\", ip);\n        }\n    }\n\n    @Override\n    public int getOrder() {\n        return Ordered.HIGHEST_PRECEDENCE + 1;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilterChain;\nimport org.springframework.cloud.gateway.filter.GlobalFilter;\nimport org.springframework.core.Ordered;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\nimport java.time.Instant;\nimport java.util.UUID;\n\n@Component\npublic class TracingGlobalFilter implements GlobalFilter, Ordered {\n\n    private static final Logger log = LoggerFactory.getLogger(TracingGlobalFilter.class);\n    private static final String TRACE_ID_HEADER = \"X-Trace-Id\";\n    private static final String SPAN_ID_HEADER = \"X-Span-Id\";\n    private static final String PARENT_SPAN_ID_HEADER = \"X-Parent-Span-Id\";\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        String traceId = request.getHeaders().getFirst(TRACE_ID_HEADER);\n        String parentSpanId = request.getHeaders().getFirst(SPAN_ID_HEADER);\n\n        if (traceId == null || traceId.isBlank()) {\n            traceId = UUID.randomUUID().toString().replace(\"-\", \"\");\n        }\n\n        String spanId = UUID.randomUUID().toString().replace(\"-\", \"\").substring(0, 16);\n\n        ServerHttpRequest mutatedRequest = request.mutate()\n                .header(TRACE_ID_HEADER, traceId)\n                .header(SPAN_ID_HEADER, spanId)\n                .header(PARENT_SPAN_ID_HEADER, parentSpanId != null ? parentSpanId : \"root\")\n                .header(\"X-Request-Start\", String.valueOf(Instant.now().toEpochMilli()))\n                .build();\n\n        log.debug(\"Trace: {} Span: {} Parent: {} Path: {}\",\n                traceId, spanId, parentSpanId, request.getURI().getPath());\n\n        return chain.filter(exchange.mutate().request(mutatedRequest).build());\n    }\n\n    @Override\n    public int getOrder() {\n        return Ordered.HIGHEST_PRECEDENCE;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilterChain;\nimport org.springframework.cloud.gateway.filter.GlobalFilter;\nimport org.springframework.core.Ordered;\nimport org.springframework.http.HttpHeaders;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\n\n@Component\npublic class CorsGlobalFilter implements GlobalFilter, Ordered {\n\n    private static final Logger log = LoggerFactory.getLogger(CorsGlobalFilter.class);\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        ServerHttpResponse response = exchange.getResponse();\n        HttpHeaders headers = response.getHeaders();\n\n        headers.add(\"Access-Control-Allow-Origin\", \"*\");\n        headers.add(\"Access-Control-Allow-Methods\", \"GET, POST, PUT, DELETE, PATCH, OPTIONS\");\n        headers.add(\"Access-Control-Allow-Headers\", \"Origin, Content-Type, Accept, Authorization, X-Requested-With\");\n        headers.add(\"Access-Control-Max-Age\", \"3600\");\n        headers.add(\"Access-Control-Allow-Credentials\", \"true\");\n\n        if (exchange.getRequest().getMethod().matches(\"OPTIONS\")) {\n            response.getHeaders().add(\"Access-Control-Max-Age\", \"3600\");\n            return Mono.empty();\n        }\n\n        return chain.filter(exchange);\n    }\n\n    @Override\n    public int getOrder() {\n        return Ordered.HIGHEST_PRECEDENCE + 2;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rate-limiting-configuration",
      children: "Rate Limiting Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.gateway.filter.ratelimit.KeyResolver;\nimport org.springframework.cloud.gateway.filter.ratelimit.RedisRateLimiter;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Primary;\nimport reactor.core.publisher.Mono;\n\n@Configuration\npublic class RateLimiterConfig {\n\n    private static final String DEFAULT_REPLENISH_RATE = \"100\";\n    private static final String DEFAULT_BURST_CAPACITY = \"200\";\n\n    @Bean\n    @Primary\n    public RedisRateLimiter redisRateLimiter() {\n        return new RedisRateLimiter(\n                Integer.parseInt(DEFAULT_REPLENISH_RATE),\n                Integer.parseInt(DEFAULT_BURST_CAPACITY)\n        );\n    }\n\n    @Bean\n    public KeyResolver clientIpKeyResolver() {\n        return exchange -> {\n            String ip = exchange.getRequest().getRemoteAddress() != null\n                    ? exchange.getRequest().getRemoteAddress().getAddress().getHostAddress()\n                    : \"unknown\";\n            return Mono.just(ip);\n        };\n    }\n\n    @Bean\n    public KeyResolver authenticatedUserKeyResolver() {\n        return exchange -> {\n            String userId = exchange.getRequest().getHeaders()\n                    .getFirst(\"X-User-Id\");\n            return Mono.just(userId != null ? userId : \"anonymous\");\n        };\n    }\n\n    @Bean\n    public KeyResolver pathBasedKeyResolver() {\n        return exchange -> {\n            String path = exchange.getRequest().getURI().getPath();\n            String method = exchange.getRequest().getMethod().toString();\n            return Mono.just(method + \":\" + path);\n        };\n    }\n\n    @Bean\n    public KeyResolver compositeKeyResolver() {\n        return exchange -> {\n            String ip = exchange.getRequest().getRemoteAddress() != null\n                    ? exchange.getRequest().getRemoteAddress().getAddress().getHostAddress()\n                    : \"unknown\";\n            String userId = exchange.getRequest().getHeaders()\n                    .getFirst(\"X-User-Id\");\n            String key = userId != null\n                    ? \"user:\" + userId\n                    : \"ip:\" + ip;\n            return Mono.just(key);\n        };\n    }\n\n    @Bean\n    public RedisRateLimiter strictRateLimiter() {\n        return new RedisRateLimiter(10, 20);\n    }\n\n    @Bean\n    public RedisRateLimiter moderateRateLimiter() {\n        return new RedisRateLimiter(50, 100);\n    }\n\n    @Bean\n    public RedisRateLimiter relaxedRateLimiter() {\n        return new RedisRateLimiter(500, 1000);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "circuit-breaker-fallback-controller",
      children: "Circuit Breaker Fallback Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.controller;\n\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport reactor.core.publisher.Mono;\nimport java.time.Instant;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/fallback\")\npublic class FallbackController {\n\n    @GetMapping(\"/orders\")\n    public Mono<ResponseEntity<Map<String, Object>>> ordersFallback() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"Order service is currently unavailable. Please try again later.\",\n                        \"timestamp\", Instant.now().toString(),\n                        \"service\", \"order-service\"\n                )));\n    }\n\n    @PostMapping(\"/orders\")\n    public Mono<ResponseEntity<Map<String, Object>>> ordersFallbackPost() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"Order service is currently unavailable. Your request could not be processed.\",\n                        \"timestamp\", Instant.now().toString(),\n                        \"service\", \"order-service\"\n                )));\n    }\n\n    @GetMapping(\"/payments\")\n    public Mono<ResponseEntity<Map<String, Object>>> paymentsFallback() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"Payment service is temporarily unavailable.\",\n                        \"timestamp\", Instant.now().toString(),\n                        \"service\", \"payment-service\"\n                )));\n    }\n\n    @GetMapping(\"/inventory\")\n    public Mono<ResponseEntity<Map<String, Object>>> inventoryFallback() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"Inventory service is unavailable.\",\n                        \"timestamp\", Instant.now().toString(),\n                        \"service\", \"inventory-service\"\n                )));\n    }\n\n    @GetMapping(\"/external\")\n    public Mono<ResponseEntity<Map<String, Object>>> externalFallback() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"External API is currently unreachable.\",\n                        \"timestamp\", Instant.now().toString(),\n                        \"service\", \"external-api\"\n                )));\n    }\n\n    @GetMapping(\"/default\")\n    public Mono<ResponseEntity<Map<String, Object>>> defaultFallback() {\n        return Mono.just(ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE)\n                .body(Map.of(\n                        \"status\", \"FALLBACK\",\n                        \"message\", \"The requested service is unavailable.\",\n                        \"timestamp\", Instant.now().toString()\n                )));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-configuration",
      children: "Security Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;\nimport org.springframework.security.config.web.server.ServerHttpSecurity;\nimport org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;\nimport org.springframework.security.oauth2.jwt.ReactiveJwtDecoders;\nimport org.springframework.security.web.server.SecurityWebFilterChain;\nimport org.springframework.security.web.server.authentication.ServerAuthenticationConverter;\nimport org.springframework.security.web.server.authorization.ServerAccessDeniedHandler;\nimport org.springframework.security.web.server.context.NoOpServerSecurityContextRepository;\nimport org.springframework.web.cors.CorsConfiguration;\nimport org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;\nimport org.springframework.web.cors.reactive.CorsWebFilter;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\n\n@Configuration\n@EnableWebFluxSecurity\npublic class GatewaySecurityConfig {\n\n    @Bean\n    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {\n        http\n            .csrf(ServerHttpSecurity.CsrfSpec::disable)\n            .cors(cors -> {})\n            .securityContextRepository(NoOpServerSecurityContextRepository.getInstance())\n            .authorizeExchange(exchanges -> exchanges\n                .pathMatchers(\"/actuator/**\").permitAll()\n                .pathMatchers(\"/fallback/**\").permitAll()\n                .pathMatchers(\"/public/**\").permitAll()\n                .pathMatchers(\"/api/orders/**\").hasAuthority(\"SCOPE_orders:read\")\n                .pathMatchers(\"/api/orders/**\", HttpMethod.POST).hasAuthority(\"SCOPE_orders:write\")\n                .pathMatchers(\"/api/payments/**\").hasAuthority(\"SCOPE_payments:read\")\n                .pathMatchers(\"/api/inventory/**\").hasAuthority(\"SCOPE_inventory:read\")\n                .pathMatchers(\"/api/users/**\").hasAuthority(\"SCOPE_users:read\")\n                .anyExchange().authenticated())\n            .oauth2ResourceServer(oauth2 -> oauth2\n                .jwt(jwt -> jwt\n                    .jwtDecoder(jwtDecoder())))\n            .exceptionHandling(exceptions -> exceptions\n                .accessDeniedHandler(accessDeniedHandler()));\n\n        return http.build();\n    }\n\n    @Bean\n    public ReactiveJwtDecoder jwtDecoder() {\n        return ReactiveJwtDecoders.fromIssuerLocation(\n                \"https://auth.example.com/realms/microservices\");\n    }\n\n    @Bean\n    public ServerAccessDeniedHandler accessDeniedHandler() {\n        return (exchange, denied) -> {\n            exchange.getResponse().setStatusCode(org.springframework.http.HttpStatus.FORBIDDEN);\n            exchange.getResponse().getHeaders().setContentType(\n                    org.springframework.http.MediaType.APPLICATION_JSON);\n            byte[] body = \"{\\\"error\\\":\\\"forbidden\\\",\\\"message\\\":\\\"Insufficient permissions\\\"}\"\n                    .getBytes(java.nio.charset.StandardCharsets.UTF_8);\n            return exchange.getResponse()\n                    .writeWith(Mono.just(exchange.getResponse().bufferFactory().wrap(body)));\n        };\n    }\n\n    @Bean\n    public CorsWebFilter corsWebFilter() {\n        CorsConfiguration config = new CorsConfiguration();\n        config.setAllowedOrigins(List.of(\"*\"));\n        config.setAllowedMethods(List.of(\"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\", \"OPTIONS\"));\n        config.setAllowedHeaders(List.of(\"*\"));\n        config.setMaxAge(3600L);\n\n        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();\n        source.registerCorsConfiguration(\"/**\", config);\n        return new CorsWebFilter(source);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "security-global-filter",
      children: "Security Global Filter"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.filter;\n\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.filter.GatewayFilterChain;\nimport org.springframework.cloud.gateway.filter.GlobalFilter;\nimport org.springframework.core.Ordered;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.server.reactive.ServerHttpRequest;\nimport org.springframework.http.server.reactive.ServerHttpResponse;\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Set;\nimport java.util.concurrent.ConcurrentHashMap;\n\n@Component\npublic class SecurityGlobalFilter implements GlobalFilter, Ordered {\n\n    private static final Logger log = LoggerFactory.getLogger(SecurityGlobalFilter.class);\n\n    private static final Set<String> BLOCKED_PATHS = Set.of(\n            \"/actuator/shutdown\",\n            \"/actuator/restart\",\n            \"/actuator/pause\",\n            \"/actuator/resume\"\n    );\n\n    private static final Set<String> BLOCKED_USER_AGENTS = Set.of(\n            \"sqlmap\",\n            \"nmap\",\n            \"nikto\",\n            \"masscan\",\n            \"zgrab\",\n            \"wpscan\"\n    );\n\n    private static final Map<String, Integer> FAILED_AUTH_ATTEMPTS = new ConcurrentHashMap<>();\n    private static final int MAX_FAILED_ATTEMPTS = 10;\n    private static final long BLOCK_DURATION_MS = 3600_000;\n\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        String path = request.getURI().getPath();\n\n        if (BLOCKED_PATHS.contains(path)) {\n            log.warn(\"Blocked access to sensitive path: {}\", path);\n            exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);\n            return exchange.getResponse().setComplete();\n        }\n\n        String userAgent = request.getHeaders().getFirst(\"User-Agent\");\n        if (userAgent != null) {\n            String ua = userAgent.toLowerCase();\n            boolean blocked = BLOCKED_USER_AGENTS.stream().anyMatch(ua::contains);\n            if (blocked) {\n                log.warn(\"Blocked request with User-Agent: {}\", userAgent);\n                exchange.getResponse().setStatusCode(HttpStatus.FORBIDDEN);\n                return exchange.getResponse().setComplete();\n            }\n        }\n\n        String clientIp = request.getRemoteAddress() != null\n                ? request.getRemoteAddress().getAddress().getHostAddress()\n                : null;\n        if (clientIp != null && isBlocked(clientIp)) {\n            log.warn(\"Blocked request from IP due to failed auth: {}\", clientIp);\n            exchange.getResponse().setStatusCode(HttpStatus.TOO_MANY_REQUESTS);\n            return exchange.getResponse().setComplete();\n        }\n\n        return chain.filter(exchange).then(Mono.fromRunnable(() -> {\n            ServerHttpResponse response = exchange.getResponse();\n            if (response.getStatusCode() == HttpStatus.UNAUTHORIZED && clientIp != null) {\n                trackFailedAuth(clientIp);\n            } else if (response.getStatusCode() == HttpStatus.OK && clientIp != null) {\n                clearFailedAuth(clientIp);\n            }\n        }));\n    }\n\n    private boolean isBlocked(String ip) {\n        Integer count = FAILED_AUTH_ATTEMPTS.get(ip);\n        return count != null && count >= MAX_FAILED_ATTEMPTS;\n    }\n\n    private void trackFailedAuth(String ip) {\n        FAILED_AUTH_ATTEMPTS.merge(ip, 1, Integer::sum);\n    }\n\n    private void clearFailedAuth(String ip) {\n        FAILED_AUTH_ATTEMPTS.remove(ip);\n    }\n\n    @Override\n    public int getOrder() {\n        return Ordered.HIGHEST_PRECEDENCE + 5;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gateway-health-indicator",
      children: "Gateway Health Indicator"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.health;\n\nimport org.springframework.boot.actuate.health.Health;\nimport org.springframework.boot.actuate.health.HealthIndicator;\nimport org.springframework.cloud.gateway.route.RouteDefinition;\nimport org.springframework.cloud.gateway.route.RouteDefinitionLocator;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\n\n@Component\npublic class GatewayHealthIndicator implements HealthIndicator {\n\n    private final RouteDefinitionLocator routeDefinitionLocator;\n\n    public GatewayHealthIndicator(RouteDefinitionLocator routeDefinitionLocator) {\n        this.routeDefinitionLocator = routeDefinitionLocator;\n    }\n\n    @Override\n    public Health health() {\n        try {\n            List<RouteDefinition> routes = routeDefinitionLocator.getRouteDefinitions()\n                    .collectList()\n                    .block();\n\n            if (routes == null || routes.isEmpty()) {\n                return Health.down()\n                        .withDetail(\"routesCount\", 0)\n                        .withDetail(\"reason\", \"No routes configured\")\n                        .build();\n            }\n\n            List<String> routeIds = routes.stream()\n                    .map(RouteDefinition::getId)\n                    .toList();\n\n            return Health.up()\n                    .withDetail(\"routesCount\", routes.size())\n                    .withDetail(\"routes\", routeIds)\n                    .build();\n        } catch (Exception e) {\n            return Health.down(e)\n                    .withDetail(\"reason\", e.getMessage())\n                    .build();\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gateway-metrics",
      children: "Gateway Metrics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.metrics;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Tag;\nimport org.springframework.boot.actuate.metrics.web.reactive.server.DefaultWebFluxTagsProvider;\nimport org.springframework.boot.actuate.metrics.web.reactive.server.WebFluxTagsProvider;\nimport org.springframework.cloud.gateway.route.RouteDefinition;\nimport org.springframework.cloud.gateway.route.RouteDefinitionLocator;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.server.ServerWebExchange;\nimport reactor.core.publisher.Flux;\nimport java.util.List;\n\n@Configuration\npublic class GatewayMetricsConfig {\n\n    @Bean\n    public WebFluxTagsProvider webFluxTagsProvider() {\n        return new DefaultWebFluxTagsProvider();\n    }\n\n    @Bean\n    public GatewayMetricsInitializer gatewayMetricsInitializer(\n            MeterRegistry meterRegistry,\n            RouteDefinitionLocator routeDefinitionLocator) {\n        return new GatewayMetricsInitializer(meterRegistry, routeDefinitionLocator);\n    }\n\n    public static class GatewayMetricsInitializer {\n\n        private final MeterRegistry meterRegistry;\n        private final RouteDefinitionLocator routeDefinitionLocator;\n\n        public GatewayMetricsInitializer(MeterRegistry meterRegistry,\n                                          RouteDefinitionLocator routeDefinitionLocator) {\n            this.meterRegistry = meterRegistry;\n            this.routeDefinitionLocator = routeDefinitionLocator;\n            initializeRouteMetrics();\n        }\n\n        private void initializeRouteMetrics() {\n            routeDefinitionLocator.getRouteDefinitions()\n                    .flatMapMany(Flux::just)\n                    .subscribe(route -> {\n                        meterRegistry.gauge(\"gateway.route.weight\",\n                                List.of(Tag.of(\"routeId\", route.getId())),\n                                route,\n                                r -> r.getMetadata().getOrDefault(\"weight\", 1) instanceof Number\n                                        ? ((Number) r.getMetadata().get(\"weight\")).doubleValue()\n                                        : 1.0);\n                    });\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gateway-admin-controller",
      children: "Gateway Admin Controller"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.controller;\n\nimport org.springframework.cloud.gateway.actuate.GatewayControllerEndpoint;\nimport org.springframework.cloud.gateway.filter.GatewayFilter;\nimport org.springframework.cloud.gateway.filter.factory.GatewayFilterFactory;\nimport org.springframework.cloud.gateway.handler.predicate.RoutePredicateFactory;\nimport org.springframework.cloud.gateway.route.RouteDefinition;\nimport org.springframework.cloud.gateway.route.RouteDefinitionLocator;\nimport org.springframework.cloud.gateway.route.RouteDefinitionWriter;\nimport org.springframework.http.HttpStatus;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.web.bind.annotation.*;\nimport reactor.core.publisher.Mono;\nimport java.util.List;\nimport java.util.Map;\n\n@RestController\n@RequestMapping(\"/api/admin/gateway\")\npublic class GatewayAdminController {\n\n    private final RouteDefinitionLocator routeDefinitionLocator;\n    private final RouteDefinitionWriter routeDefinitionWriter;\n    private final List<GatewayFilterFactory<?>> filterFactories;\n    private final List<RoutePredicateFactory<?>> predicateFactories;\n\n    public GatewayAdminController(RouteDefinitionLocator routeDefinitionLocator,\n                                   RouteDefinitionWriter routeDefinitionWriter,\n                                   List<GatewayFilterFactory<?>> filterFactories,\n                                   List<RoutePredicateFactory<?>> predicateFactories) {\n        this.routeDefinitionLocator = routeDefinitionLocator;\n        this.routeDefinitionWriter = routeDefinitionWriter;\n        this.filterFactories = filterFactories;\n        this.predicateFactories = predicateFactories;\n    }\n\n    @GetMapping(\"/routes\")\n    public Mono<List<RouteDefinition>> getAllRoutes() {\n        return routeDefinitionLocator.getRouteDefinitions().collectList();\n    }\n\n    @GetMapping(\"/routes/{id}\")\n    public Mono<ResponseEntity<RouteDefinition>> getRoute(@PathVariable String id) {\n        return routeDefinitionLocator.getRouteDefinitions()\n                .filter(route -> route.getId().equals(id))\n                .next()\n                .map(ResponseEntity::ok)\n                .defaultIfEmpty(ResponseEntity.notFound().build());\n    }\n\n    @PostMapping(\"/routes\")\n    public Mono<ResponseEntity<Void>> addRoute(@RequestBody RouteDefinition routeDefinition) {\n        return routeDefinitionWriter.save(Mono.just(routeDefinition))\n                .then(Mono.just(ResponseEntity.status(HttpStatus.CREATED).build()));\n    }\n\n    @DeleteMapping(\"/routes/{id}\")\n    public Mono<ResponseEntity<Void>> deleteRoute(@PathVariable String id) {\n        return routeDefinitionWriter.delete(Mono.just(id))\n                .then(Mono.just(ResponseEntity.ok().build()));\n    }\n\n    @GetMapping(\"/filters\")\n    public ResponseEntity<Map<String, List<String>>> getAvailableFilters() {\n        List<String> filterNames = filterFactories.stream()\n                .map(f -> f.name())\n                .toList();\n        return ResponseEntity.ok(Map.of(\"filters\", filterNames));\n    }\n\n    @GetMapping(\"/predicates\")\n    public ResponseEntity<Map<String, List<String>>> getAvailablePredicates() {\n        List<String> predicateNames = predicateFactories.stream()\n                .map(p -> p.name())\n                .toList();\n        return ResponseEntity.ok(Map.of(\"predicates\", predicateNames));\n    }\n\n    @PostMapping(\"/refresh\")\n    public Mono<ResponseEntity<Void>> refreshRoutes() {\n        return Mono.empty();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "discovery-locator-configuration",
      children: "Discovery Locator Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "spring:\n  cloud:\n    gateway:\n      discovery:\n        locator:\n          enabled: true\n          lower-case-service-id: true\n          include-expression: true\n          filters:\n            - StripPrefix=0\n            - AddRequestHeader=X-Discovery-Locator, true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "route-validation-configuration",
      children: "Route Validation Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport jakarta.annotation.PostConstruct;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\nimport org.springframework.cloud.gateway.event.RefreshRoutesEvent;\nimport org.springframework.cloud.gateway.route.RouteDefinition;\nimport org.springframework.cloud.gateway.route.RouteDefinitionLocator;\nimport org.springframework.context.ApplicationEventPublisher;\nimport org.springframework.context.annotation.Configuration;\nimport reactor.core.publisher.Flux;\nimport java.util.List;\n\n@Configuration\npublic class RouteValidationConfig {\n\n    private static final Logger log = LoggerFactory.getLogger(RouteValidationConfig.class);\n\n    private final RouteDefinitionLocator routeDefinitionLocator;\n    private final ApplicationEventPublisher eventPublisher;\n\n    public RouteValidationConfig(RouteDefinitionLocator routeDefinitionLocator,\n                                  ApplicationEventPublisher eventPublisher) {\n        this.routeDefinitionLocator = routeDefinitionLocator;\n        this.eventPublisher = eventPublisher;\n    }\n\n    @PostConstruct\n    public void validateRoutes() {\n        routeDefinitionLocator.getRouteDefinitions()\n                .collectList()\n                .subscribe(routes -> {\n                    log.info(\"Loaded {} gateway routes:\", routes.size());\n                    routes.forEach(route -> {\n                        log.info(\"  Route: id={}, uri={}, predicates={}, filters={}\",\n                                route.getId(),\n                                route.getUri(),\n                                route.getPredicates().stream()\n                                        .map(p -> p.getName() + \":\" + p.getArgs())\n                                        .toList(),\n                                route.getFilters().stream()\n                                        .map(f -> f.getName() + \":\" + f.getArgs())\n                                        .toList());\n                    });\n                });\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "integration-tests",
      children: "Integration Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway;\n\nimport org.junit.jupiter.api.Test;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.cloud.gateway.route.RouteDefinition;\nimport org.springframework.cloud.gateway.route.RouteDefinitionLocator;\nimport org.springframework.test.context.ActiveProfiles;\nimport reactor.test.StepVerifier;\nimport java.util.List;\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@SpringBootTest(properties = {\n    \"eureka.client.enabled=false\",\n    \"spring.cloud.gateway.routes[0].id=test-route\",\n    \"spring.cloud.gateway.routes[0].uri=http://localhost:9999\",\n    \"spring.cloud.gateway.routes[0].predicates[0].name=Path\",\n    \"spring.cloud.gateway.routes[0].predicates[0].args[pattern]=/test/**\"\n})\n@ActiveProfiles(\"test\")\nclass GatewayRouteIntegrationTest {\n\n    @Autowired\n    private RouteDefinitionLocator routeDefinitionLocator;\n\n    @Test\n    void shouldHaveConfiguredRoutes() {\n        StepVerifier.create(routeDefinitionLocator.getRouteDefinitions().collectList())\n                .assertNext(routes -> {\n                    assertThat(routes).isNotEmpty();\n                    boolean hasTestRoute = routes.stream()\n                            .anyMatch(r -> r.getId().equals(\"test-route\"));\n                    assertThat(hasTestRoute).isTrue();\n                })\n                .verifyComplete();\n    }\n\n    @Test\n    void routesShouldHaveValidPredicates() {\n        StepVerifier.create(routeDefinitionLocator.getRouteDefinitions().collectList())\n                .assertNext(routes -> {\n                    for (RouteDefinition route : routes) {\n                        assertThat(route.getPredicates())\n                                .as(\"Route %s should have predicates\", route.getId())\n                                .isNotEmpty();\n                        route.getPredicates().forEach(predicate -> {\n                            assertThat(predicate.getName())\n                                    .as(\"Predicate name should not be null\")\n                                    .isNotNull();\n                            assertThat(predicate.getArgs())\n                                    .as(\"Predicate args should not be null for %s\", predicate.getName())\n                                    .isNotNull();\n                        });\n                    }\n                })\n                .verifyComplete();\n    }\n\n    @Test\n    void routesShouldHaveValidUris() {\n        StepVerifier.create(routeDefinitionLocator.getRouteDefinitions().collectList())\n                .assertNext(routes -> {\n                    for (RouteDefinition route : routes) {\n                        assertThat(route.getUri())\n                                .as(\"Route %s should have a URI\", route.getId())\n                                .isNotNull();\n                    }\n                })\n                .verifyComplete();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "load-balancer-configuration-for-gateway",
      children: "Load Balancer Configuration for Gateway"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.config;\n\nimport org.springframework.cloud.client.ServiceInstance;\nimport org.springframework.cloud.loadbalancer.core.ReactorLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.RoundRobinLoadBalancer;\nimport org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;\nimport org.springframework.cloud.loadbalancer.support.LoadBalancerClientFactory;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.core.env.Environment;\n\n@Configuration\npublic class GatewayLoadBalancerConfig {\n\n    @Bean\n    public ReactorLoadBalancer<ServiceInstance> gatewayLoadBalancer(\n            Environment environment,\n            LoadBalancerClientFactory loadBalancerClientFactory) {\n        String name = environment.getProperty(LoadBalancerClientFactory.PROPERTY_NAME);\n        return new RoundRobinLoadBalancer(\n                loadBalancerClientFactory.getLazyProvider(name, ServiceInstanceListSupplier.class),\n                name\n        );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "reactive-request-statistics",
      children: "Reactive Request Statistics"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "package com.course.gateway.metrics;\n\nimport io.micrometer.core.instrument.MeterRegistry;\nimport org.springframework.stereotype.Component;\nimport reactor.core.publisher.Mono;\nimport java.util.Map;\nimport java.util.concurrent.ConcurrentHashMap;\nimport java.util.concurrent.atomic.AtomicLong;\n\n@Component\npublic class ReactiveRequestStatistics {\n\n    private final ConcurrentHashMap<String, AtomicLong> pathCounts = new ConcurrentHashMap<>();\n    private final ConcurrentHashMap<String, AtomicLong> statusCounts = new ConcurrentHashMap<>();\n    private final ConcurrentHashMap<String, AtomicLong> methodCounts = new ConcurrentHashMap<>();\n    private final AtomicLong totalRequests = new AtomicLong(0);\n\n    public void recordRequest(String path, String method, int statusCode) {\n        totalRequests.incrementAndGet();\n\n        String pathKey = \"path:\" + path;\n        pathCounts.computeIfAbsent(pathKey, k -> new AtomicLong(0)).incrementAndGet();\n\n        String methodKey = \"method:\" + method;\n        methodCounts.computeIfAbsent(methodKey, k -> new AtomicLong(0)).incrementAndGet();\n\n        String statusRange = (statusCode / 100) + \"xx\";\n        String statusKey = \"status:\" + statusRange + \":\" + statusCode;\n        statusCounts.computeIfAbsent(statusKey, k -> new AtomicLong(0)).incrementAndGet();\n    }\n\n    public Map<String, Object> getStatistics() {\n        Map<String, Object> stats = new ConcurrentHashMap<>();\n        stats.put(\"totalRequests\", totalRequests.get());\n        stats.put(\"pathCounts\", pathCounts);\n        stats.put(\"methodCounts\", methodCounts);\n        stats.put(\"statusCounts\", statusCounts);\n        return stats;\n    }\n\n    public Mono<Map<String, Object>> getStatisticsReactive() {\n        return Mono.fromCallable(this::getStatistics);\n    }\n\n    public long getTotalRequests() {\n        return totalRequests.get();\n    }\n\n    public long getPathCount(String path) {\n        return pathCounts.getOrDefault(\"path:\" + path, new AtomicLong(0)).get();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Spring Cloud Gateway"
        }), " is a reactive API gateway built on Spring WebFlux and Netty"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Routes"
        }), " combine a destination URI, predicates (conditions), and filters (transformations)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Predicates"
        }), " match on path, method, header, query, cookie, host, remote address, weight, and time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Filters"
        }), " modify requests/responses; built-in filters include ", (0,jsx_runtime.jsx)(_components.code, {
          children: "StripPrefix"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RewritePath"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AddRequestHeader"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "CircuitBreaker"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Retry"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RequestRateLimiter"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom GatewayFilter"
        }), " implementations extend ", (0,jsx_runtime.jsx)(_components.code, {
          children: "AbstractGatewayFilterFactory"
        }), " for reusable filter factories"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GlobalFilter"
        }), " implementations apply to all routes and are ordered via ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Ordered"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Rate Limiting"
        }), " uses the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "RequestRateLimiter"
        }), " filter with Redis and customizable ", (0,jsx_runtime.jsx)(_components.code, {
          children: "KeyResolver"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Circuit Breaker"
        }), " integration wraps downstream calls with Resilience4j fallback support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security"
        }), " is enforced via OAuth2 Resource Server, custom global filters, and IP blocking"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Route Configuration"
          }), ": Configure a route for a new ", (0,jsx_runtime.jsx)(_components.code, {
            children: "notification-service"
          }), " with predicates on path and method, filters for rate limiting and circuit breaker."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Predicate"
          }), ": Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserAgentRoutePredicateFactory"
          }), " that matches routes based on the User-Agent header (e.g., mobile vs desktop)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom Filter"
          }), ": Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "ResponseTransformGatewayFilterFactory"
          }), " that modifies the response body (e.g., wrapping it in an envelope with status and timestamp)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Rate Limiting"
          }), ": Configure a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "KeyResolver"
          }), " that uses a combination of the authenticated user's role and the request path. Set different rate limits for each role level."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circuit Breaker Fallback"
          }), ": Create a fallback endpoint that returns cached data from a Redis store when the backend service is unavailable."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Global Security"
          }), ": Write a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "GlobalFilter"
          }), " that validates API keys from a database, with caching and rate limiting per API key."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "WebSocket Routing"
          }), ": Configure a WebSocket route in the gateway to forward ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/ws/chat/**"
          }), " to a chat service, with authentication validation before the WebSocket handshake."]
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