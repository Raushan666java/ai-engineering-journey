"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[1504],{

/***/ 8522
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_courses_java_33_security_perf_test_md_ba3_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-courses-java-33-security-perf-test-md-ba3.json
const site_docs_courses_java_33_security_perf_test_md_ba3_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"courses/java/33-security-perf-test","title":"Security Testing & Performance Testing","description":"Previous Async and Events","source":"@site/docs/courses/java/33-security-perf-test.md","sourceDirName":"courses/java","slug":"/java/33-security-perf-test","permalink":"/ai-engineering-journey/java/33-security-perf-test","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"id":"33-security-perf-test","slug":"/java/33-security-perf-test","title":"Security Testing & Performance Testing","sidebar_label":"Security Testing & Performance Testing","sidebar_position":33},"sidebar":"course-java","previous":{"title":"Testcontainers & Integration Testing","permalink":"/ai-engineering-journey/java/32-testcontainers"},"next":{"title":"Async Processing & Spring Events","permalink":"/ai-engineering-journey/java/34-async-events"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/courses/java/33-security-perf-test.md


const frontMatter = {
	id: '33-security-perf-test',
	slug: '/java/33-security-perf-test',
	title: 'Security Testing & Performance Testing',
	sidebar_label: 'Security Testing & Performance Testing',
	sidebar_position: 33
};
const contentTitle = 'Security Testing & Performance Testing';

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
  "value": "1. Security Testing with Annotations",
  "id": "1-security-testing-with-annotations",
  "level": 2
}, {
  "value": "1.1 @WithMockUser",
  "id": "11-withmockuser",
  "level": 3
}, {
  "value": "1.2 @WithAnonymousUser",
  "id": "12-withanonymoususer",
  "level": 3
}, {
  "value": "1.3 @WithUserDetails",
  "id": "13-withuserdetails",
  "level": 3
}, {
  "value": "1.4 Custom @WithMockJwt",
  "id": "14-custom-withmockjwt",
  "level": 3
}, {
  "value": "1.5 Testing Method Security",
  "id": "15-testing-method-security",
  "level": 3
}, {
  "value": "1.6 Testing CORS",
  "id": "16-testing-cors",
  "level": 3
}, {
  "value": "1.7 CSRF Test Configuration",
  "id": "17-csrf-test-configuration",
  "level": 3
}, {
  "value": "2. OAuth2 Test Support",
  "id": "2-oauth2-test-support",
  "level": 2
}, {
  "value": "2.1 @WithMockOAuth2Client",
  "id": "21-withmockoauth2client",
  "level": 3
}, {
  "value": "2.2 OAuth2AuthorizedClientRepository Testing",
  "id": "22-oauth2authorizedclientrepository-testing",
  "level": 3
}, {
  "value": "2.3 JWT Token Mocking",
  "id": "23-jwt-token-mocking",
  "level": 3
}, {
  "value": "2.4 Testing Resource Server with JWT Authentication Token",
  "id": "24-testing-resource-server-with-jwt-authentication-token",
  "level": 3
}, {
  "value": "3. Performance Testing with JMeter",
  "id": "3-performance-testing-with-jmeter",
  "level": 2
}, {
  "value": "3.1 Test Plan Structure",
  "id": "31-test-plan-structure",
  "level": 3
}, {
  "value": "3.2 Creating a JMeter Test Programmatically",
  "id": "32-creating-a-jmeter-test-programmatically",
  "level": 3
}, {
  "value": "3.3 JMeter Listeners",
  "id": "33-jmeter-listeners",
  "level": 3
}, {
  "value": "3.4 Running JMeter from Command Line",
  "id": "34-running-jmeter-from-command-line",
  "level": 3
}, {
  "value": "3.5 JMeter Assertions",
  "id": "35-jmeter-assertions",
  "level": 3
}, {
  "value": "4. Performance Testing with Gatling",
  "id": "4-performance-testing-with-gatling",
  "level": 2
}, {
  "value": "4.1 Basic Simulation",
  "id": "41-basic-simulation",
  "level": 3
}, {
  "value": "4.2 Advanced Simulation with Feeders",
  "id": "42-advanced-simulation-with-feeders",
  "level": 3
}, {
  "value": "4.3 Gatling Maven Plugin Configuration",
  "id": "43-gatling-maven-plugin-configuration",
  "level": 3
}, {
  "value": "4.4 JMeter vs Gatling — Comparison",
  "id": "44-jmeter-vs-gatling--comparison",
  "level": 3
}, {
  "value": "5. Load Testing Spring Boot",
  "id": "5-load-testing-spring-boot",
  "level": 2
}, {
  "value": "5.1 Profiling Endpoints Under Load",
  "id": "51-profiling-endpoints-under-load",
  "level": 3
}, {
  "value": "5.2 Connection Pool Performance",
  "id": "52-connection-pool-performance",
  "level": 3
}, {
  "value": "5.3 Database Query Performance Under Load",
  "id": "53-database-query-performance-under-load",
  "level": 3
}, {
  "value": "5.4 Measuring Latency Percentiles",
  "id": "54-measuring-latency-percentiles",
  "level": 3
}, {
  "value": "5.5 Spring Boot Actuator Endpoints for Load Monitoring",
  "id": "55-spring-boot-actuator-endpoints-for-load-monitoring",
  "level": 3
}, {
  "value": "6. Stress Testing",
  "id": "6-stress-testing",
  "level": 2
}, {
  "value": "6.1 Ramp-Up Test",
  "id": "61-ramp-up-test",
  "level": 3
}, {
  "value": "6.2 Spike Test",
  "id": "62-spike-test",
  "level": 3
}, {
  "value": "6.3 Soak Test (Endurance)",
  "id": "63-soak-test-endurance",
  "level": 3
}, {
  "value": "6.4 Stress Test Thresholds",
  "id": "64-stress-test-thresholds",
  "level": 3
}, {
  "value": "6.5 Resource Monitoring During Load",
  "id": "65-resource-monitoring-during-load",
  "level": 3
}, {
  "value": "7. Chaos Testing",
  "id": "7-chaos-testing",
  "level": 2
}, {
  "value": "7.1 Chaos Monkey for Spring Boot",
  "id": "71-chaos-monkey-for-spring-boot",
  "level": 3
}, {
  "value": "7.2 Chaos Engineering Principles",
  "id": "72-chaos-engineering-principles",
  "level": 3
}, {
  "value": "7.3 Chaos Monkey Configuration for Different Assault Types",
  "id": "73-chaos-monkey-configuration-for-different-assault-types",
  "level": 3
}, {
  "value": "7.4 Chaos Experiment Framework — Automated Resilience Tests",
  "id": "74-chaos-experiment-framework--automated-resilience-tests",
  "level": 3
}, {
  "value": "7.5 Circuit Breaker Resilience Under Chaos",
  "id": "75-circuit-breaker-resilience-under-chaos",
  "level": 3
}, {
  "value": "7.6 Graceful Degradation Patterns",
  "id": "76-graceful-degradation-patterns",
  "level": 3
}, {
  "value": "7.7 Load Testing with Simulated Chaos",
  "id": "77-load-testing-with-simulated-chaos",
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
        id: "security-testing--performance-testing",
        children: "Security Testing & Performance Testing"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Previous:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/32-testcontainers",
          children: "Testcontainers"
        }), " | ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Next:"
        }), " ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ai-engineering-journey/java/34-async-events",
          children: "Async and Events"
        })]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "By the end of this chapter, you will be able to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test Spring Security configurations using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockUser"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithAnonymousUser"
        }), ", and ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithUserDetails"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Create custom security annotations like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockJwt"
        }), " for JWT-authenticated tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Write tests for method security (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostAuthorize"
        }), ") and CORS/CSRF configurations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Test OAuth2 client and resource server with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockOAuth2Client"
        }), " and mocked JWT decoders"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Build JMeter test plans with thread groups, samplers, listeners, and assertions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Write Gatling simulations with scenarios, checks, feeds, and injection profiles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Profile Spring Boot endpoints under load — connection pools, query performance, latency percentiles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Execute stress tests (ramp-up, spike, soak) with proper thresholds and resource monitoring"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply chaos engineering with Chaos Monkey for Spring Boot — latency, exceptions, service shutdown"
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
            children: "Security Testing → verify auth and authorization controls"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Use ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@WithMockUser"
            }), ", ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@WithAnonymousUser"
            }), ", and request post-processors"]
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Performance Testing → measure throughput, latency, and resource usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java Microbenchmark Harness (JMH) for micro-benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Load Testing → simulate concurrent users with Gatling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scenario-based DSL for HTTP, WebSocket, and JMS load tests"
          }), (0,jsx_runtime.jsx)(_components.td, {})]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-roadmap",
      children: "Chapter Roadmap"
    }), "\n", (0,jsx_runtime.jsx)(_components.mermaid, {
      value: "flowchart TD\r\n    A[Security and Performance Testing] --> B[Security Testing]\r\n    A --> C[Performance Testing]\r\n    A --> D[Load Testing]\r\n    B --> B1[\"@WithMockUser\"]\r\n    B --> B2[\"@WithAnonymousUser\"]\r\n    B --> B3[Security test annotations]\r\n    C --> C1[JMH benchmarks]\r\n    C --> C2[JVM profiling]\r\n    D --> D1[Gatling scenarios]\r\n    D --> D2[Report analysis]"
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
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@WithMockUser"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Creates user with given roles"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "No authentication against real provider"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@WithUserDetails"
            })
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Uses real ", (0,jsx_runtime.jsx)(_components.code, {
              children: "UserDetailsService"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Full authentication flow"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "JMH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Java microbenchmark harness"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Method-level performance measurement"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gatling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Load testing tool"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scala-based scenario DSL"
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
              children: "@WithMockUser(roles=\"ADMIN\")"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Security test annotation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test endpoint authorization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@WithAnonymousUser"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test anonymous access"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Unauthenticated request scenarios"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Benchmark"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JMH benchmark method"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "@Benchmark public void measureSomething() { ... }"
            })
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.code, {
              children: "gatling.Run"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gatling simulation class"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["Extends ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Simulation"
            }), " with scenario definitions"]
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
            children: "API Endpoint Testing"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.code, {
              children: "@WithMockUser"
            }), " + ", (0,jsx_runtime.jsx)(_components.code, {
              children: "@WebMvcTest"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Verify role-based access on each endpoint"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Algorithm Performance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "JMH micro-benchmarks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Measure hashing, encryption, serialization throughput"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "User Load Simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Gatling"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Test system behavior under 1000+ concurrent users"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-quiz",
      children: "Chapter Quiz"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Which annotation creates a test user with specific roles without contacting the auth provider? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockUser"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What is JMH? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Java Microbenchmark Harness → for accurate method-level performance measurement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["What tool uses a Scala-based DSL for HTTP load testing? ", (0,jsx_runtime.jsx)(_components.strong, {
          children: "Answer:"
        }), " Gatling"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-security-testing-with-annotations",
      children: "1. Security Testing with Annotations"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: "https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/java/33-security-perf-test.png",
        alt: "Security & Performance Testing Flow"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security provides a set of testing annotations that simulate authenticated requests without starting a full OAuth2 provider or setting up a real identity store."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "11-withmockuser",
      children: "1.1 @WithMockUser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.code, {
        children: "@WithMockUser"
      }), " creates a ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityContext"
      }), " with a mocked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UsernamePasswordAuthenticationToken"
      }), ". No actual authentication takes place."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.test.context.support.WithMockUser;\r\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.test.web.servlet.MockMvc;\r\nimport org.junit.jupiter.api.Test;\r\n\r\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\r\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\r\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;\r\n\r\n@WebMvcTest(UserController.class)\r\nclass SecurityAnnotationTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithMockUser  // Default: username=\"user\", roles={\"USER\"}, password=\"password\"\r\n    void testAuthenticatedUserCanAccess() throws Exception {\r\n        mockMvc.perform(get(\"/api/users/me\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(username = \"admin\", roles = {\"ADMIN\"})\r\n    void testAdminAccess() throws Exception {\r\n        mockMvc.perform(get(\"/api/admin/users\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(username = \"admin\", authorities = {\"ROLE_ADMIN\", \"SCOPE_read\"})\r\n    void testWithAuthorities() throws Exception {\r\n        mockMvc.perform(get(\"/api/admin/users\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test  // No @WithMockUser — unauthenticated\r\n    void testUnauthenticatedAccess() throws Exception {\r\n        mockMvc.perform(get(\"/api/users/me\"))\r\n            .andExpect(status().isUnauthorized());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "12-withanonymoususer",
      children: "1.2 @WithAnonymousUser"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Explicitly creates an anonymous ", (0,jsx_runtime.jsx)(_components.code, {
        children: "SecurityContext"
      }), ". Useful when your code checks for ", (0,jsx_runtime.jsx)(_components.code, {
        children: "isAnonymous()"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.test.context.support.WithAnonymousUser;\r\n\r\n@WebMvcTest(PublicController.class)\r\nclass AnonymousTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithAnonymousUser\r\n    void testPublicEndpointWithAnonymous() throws Exception {\r\n        mockMvc.perform(get(\"/api/public/info\"))\r\n            .andExpect(status().isOk())\r\n            .andExpect(content().string(\"Public information\"));\r\n    }\r\n\r\n    @Test\r\n    @WithAnonymousUser\r\n    void testAnonymousCannotAccessSecured() throws Exception {\r\n        mockMvc.perform(get(\"/api/users/me\"))\r\n            .andExpect(status().isForbidden());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "13-withuserdetails",
      children: "1.3 @WithUserDetails"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Loads a real user from your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserDetailsService"
      }), ". This tests both authentication and your ", (0,jsx_runtime.jsx)(_components.code, {
        children: "UserDetailsService"
      }), " implementation."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.test.context.support.WithUserDetails;\r\n\r\n@WebMvcTest(UserController.class)\r\nclass UserDetailsTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithUserDetails(\"alice@example.com\")  // Username passed to UserDetailsService.loadUserByUsername()\r\n    void testLoadRealUser() throws Exception {\r\n        mockMvc.perform(get(\"/api/users/me\"))\r\n            .andExpect(status().isOk())\r\n            .andExpect(jsonPath(\"$.email\").value(\"alice@example.com\"));\r\n    }\r\n\r\n    @Test\r\n    @WithUserDetails(value = \"admin@example.com\", userDetailsServiceBeanName = \"customUserDetailsService\")\r\n    void testWithCustomUserDetailsService() throws Exception {\r\n        mockMvc.perform(get(\"/api/admin/users\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "14-custom-withmockjwt",
      children: "1.4 Custom @WithMockJwt"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For JWT-authenticated tests, create a custom annotation that populates the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JwtAuthenticationToken"
      }), "."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Custom annotation definition\r\nimport org.springframework.security.test.context.support.WithSecurityContext;\r\n\r\nimport java.lang.annotation.Retention;\r\nimport java.lang.annotation.RetentionPolicy;\r\n\r\n@Retention(RetentionPolicy.RUNTIME)\r\n@WithSecurityContext(factory = WithMockJwtSecurityContextFactory.class)\r\npublic @interface WithMockJwt {\r\n\r\n    String subject() default \"user\";\r\n    String email() default \"user@example.com\";\r\n    String[] roles() default {};\r\n    String[] scopes() default {};\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Security context factory\r\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\r\nimport org.springframework.security.oauth2.jwt.Jwt;\r\nimport org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;\r\nimport org.springframework.security.core.context.SecurityContext;\r\nimport org.springframework.security.core.context.SecurityContextHolder;\r\nimport org.springframework.security.test.context.support.WithSecurityContextFactory;\r\n\r\nimport java.time.Instant;\r\nimport java.util.List;\r\nimport java.util.Map;\r\nimport java.util.stream.Stream;\r\n\r\npublic class WithMockJwtSecurityContextFactory\r\n        implements WithSecurityContextFactory<WithMockJwt> {\r\n\r\n    @Override\r\n    public SecurityContext createSecurityContext(WithMockJwt annotation) {\r\n        var jwt = Jwt.withTokenValue(\"mock-token\")\r\n            .header(\"alg\", \"RS256\")\r\n            .header(\"typ\", \"JWT\")\r\n            .subject(annotation.subject())\r\n            .claim(\"email\", annotation.email())\r\n            .claim(\"scope\", String.join(\" \", annotation.scopes()))\r\n            .issuedAt(Instant.now())\r\n            .expiresAt(Instant.now().plusSeconds(3600))\r\n            .build();\r\n\r\n        var authorities = Stream.concat(\r\n            Stream.of(annotation.roles()).map(r -> \"ROLE_\" + r),\r\n            Stream.of(annotation.scopes()).map(s -> \"SCOPE_\" + s)\r\n        ).map(SimpleGrantedAuthority::new).toList();\r\n\r\n        var token = new JwtAuthenticationToken(jwt, authorities, annotation.subject());\r\n\r\n        SecurityContext context = SecurityContextHolder.createEmptyContext();\r\n        context.setAuthentication(token);\r\n        return context;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Using the custom annotation\r\n@RestController\r\n@RequestMapping(\"/api/orders\")\r\npublic class OrderController {\r\n\r\n    @GetMapping\r\n    public List<String> getOrders(@AuthenticationPrincipal JwtAuthenticationToken token) {\r\n        String userId = token.getToken().getSubject();\r\n        return List.of(\"order-1\", \"order-2\");\r\n    }\r\n\r\n    @PreAuthorize(\"hasAuthority('SCOPE_admin')\")\r\n    @PostMapping\r\n    public String createOrder() {\r\n        return \"order-created\";\r\n    }\r\n}\r\n\r\n// Test\r\n@WebMvcTest(OrderController.class)\r\nclass OrderControllerTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithMockJwt(subject = \"user123\", scopes = {\"read\"})\r\n    void testGetOrders() throws Exception {\r\n        mockMvc.perform(get(\"/api/orders\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockJwt(subject = \"admin\", roles = {\"ADMIN\"}, scopes = {\"admin\"})\r\n    void testCreateOrderWithAdmin() throws Exception {\r\n        mockMvc.perform(post(\"/api/orders\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockJwt(subject = \"user\", scopes = {\"read\"})\r\n    void testCreateOrderWithoutAdminScope_ShouldReturnForbidden() throws Exception {\r\n        mockMvc.perform(post(\"/api/orders\"))\r\n            .andExpect(status().isForbidden());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-testing-method-security",
      children: "1.5 Testing Method Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.access.prepost.PreAuthorize;\r\nimport org.springframework.stereotype.Service;\r\n\r\n@Service\r\npublic class DocumentService {\r\n\r\n    @PreAuthorize(\"isAuthenticated()\")\r\n    public String getPublicDocument(Long id) {\r\n        return \"public-doc-\" + id;\r\n    }\r\n\r\n    @PreAuthorize(\"hasRole('ADMIN')\")\r\n    public String getAdminDocument(Long id) {\r\n        return \"admin-doc-\" + id;\r\n    }\r\n\r\n    @PreAuthorize(\"#owner == authentication.name\")\r\n    public String getOwnedDocument(Long id, String owner) {\r\n        return \"owned-doc-\" + id;\r\n    }\r\n\r\n    @PreAuthorize(\"hasRole('ADMIN') or hasPermission(#id, 'com.example.Document', 'read')\")\r\n    public String getPermissionBasedDocument(Long id) {\r\n        return \"permission-doc-\" + id;\r\n    }\r\n\r\n    @PostAuthorize(\"returnObject.owner == authentication.name\")\r\n    public Document getDocumentWithOwnerCheck(Long id) {\r\n        return new Document(id, \"content\", \"alice\");\r\n    }\r\n\r\n    record Document(Long id, String content, String owner) {}\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\r\nclass MethodSecurityTest {\r\n\r\n    @Autowired\r\n    private DocumentService documentService;\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testAuthenticatedCanAccess() {\r\n        String result = documentService.getPublicDocument(1L);\r\n        assertEquals(\"public-doc-1\", result);\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(roles = {\"USER\"})\r\n    void testUserCannotAccessAdmin() {\r\n        assertThrows(AccessDeniedException.class, () ->\r\n            documentService.getAdminDocument(1L));\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(roles = {\"ADMIN\"})\r\n    void testAdminCanAccessAdmin() {\r\n        String result = documentService.getAdminDocument(1L);\r\n        assertEquals(\"admin-doc-1\", result);\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(username = \"alice\")\r\n    void testOwnedDocumentByOwner() {\r\n        String result = documentService.getOwnedDocument(1L, \"alice\");\r\n        assertEquals(\"owned-doc-1\", result);\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser(username = \"bob\")\r\n    void testOwnedDocumentByNonOwner_ShouldDeny() {\r\n        assertThrows(AccessDeniedException.class, () ->\r\n            documentService.getOwnedDocument(1L, \"alice\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-testing-cors",
      children: "1.6 Testing CORS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.web.servlet.config.annotation.CorsRegistry;\r\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\r\n\r\n@Configuration\r\nclass CorsConfig implements WebMvcConfigurer {\r\n\r\n    @Override\r\n    public void addCorsMappings(CorsRegistry registry) {\r\n        registry.addMapping(\"/api/**\")\r\n            .allowedOrigins(\"https://trusted-frontend.com\")\r\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\r\n            .allowedHeaders(\"*\")\r\n            .allowCredentials(true)\r\n            .maxAge(3600);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(CorsController.class)\r\n@AutoConfigureMockMvc\r\nclass CorsTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testCorsAllowedOrigin() throws Exception {\r\n        mockMvc.perform(options(\"/api/orders\")\r\n                .header(\"Origin\", \"https://trusted-frontend.com\")\r\n                .header(\"Access-Control-Request-Method\", \"POST\"))\r\n            .andExpect(status().isOk())\r\n            .andExpect(header().string(\"Access-Control-Allow-Origin\",\r\n                \"https://trusted-frontend.com\"))\r\n            .andExpect(header().exists(\"Access-Control-Allow-Methods\"));\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testCorsBlockedOrigin() throws Exception {\r\n        mockMvc.perform(get(\"/api/orders\")\r\n                .header(\"Origin\", \"https://malicious-site.com\"))\r\n            .andExpect(header().doesNotExist(\"Access-Control-Allow-Origin\"));\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testCorsBlockedMethod() throws Exception {\r\n        mockMvc.perform(options(\"/api/orders\")\r\n                .header(\"Origin\", \"https://trusted-frontend.com\")\r\n                .header(\"Access-Control-Request-Method\", \"DELETE\"))\r\n            .andExpect(status().isOk())\r\n            .andExpect(header().string(\"Access-Control-Allow-Methods\",\r\n                \"GET, POST, PUT, DELETE\"));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-csrf-test-configuration",
      children: "1.7 CSRF Test Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security enables CSRF protection by default for state-changing requests. In tests, you must either include the CSRF token or disable CSRF."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;\r\nimport static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;\r\n\r\n@WebMvcTest(CsrfController.class)\r\nclass CsrfTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testPostWithoutCsrf_ShouldReturn403() throws Exception {\r\n        mockMvc.perform(post(\"/api/items\"))\r\n            .andExpect(status().isForbidden());  // Missing CSRF token\r\n    }\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testPostWithCsrf_ShouldSucceed() throws Exception {\r\n        mockMvc.perform(post(\"/api/items\")\r\n                .with(csrf()))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    void testPutWithCsrf() throws Exception {\r\n        mockMvc.perform(put(\"/api/items/1\")\r\n                .contentType(MediaType.APPLICATION_JSON)\r\n                .content(\"\"\"\r\n                    {\"name\": \"updated-item\"}\r\n                    \"\"\")\r\n                .with(csrf())\r\n                .with(user(\"admin\").roles(\"ADMIN\")))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    void testDeleteWithInvalidCsrf() throws Exception {\r\n        mockMvc.perform(delete(\"/api/items/1\")\r\n                .with(csrf().useInvalidToken()))\r\n            .andExpect(status().isForbidden());\r\n    }\r\n}\r\n\r\n// Disable CSRF for a specific test class\r\n@SpringBootTest\r\n@AutoConfigureMockMvc\r\nclass DisabledCsrfTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    void testPostWithoutCsrfWhenDisabled() throws Exception {\r\n        mockMvc.perform(post(\"/api/public/contact\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\r\nCreate custom meta-annotations like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithAdminUser"
        }), " that combine ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockUser"
        }), " with default role values to reduce repetition."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-oauth2-test-support",
      children: "2. OAuth2 Test Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-withmockoauth2client",
      children: "2.1 @WithMockOAuth2Client"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Simulates an OAuth2 client registration in the security context."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.test.context.support.WithMockOAuth2Client;\r\n\r\n@WebMvcTest(SocialLoginController.class)\r\nclass OAuth2ClientTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @Test\r\n    @WithMockOAuth2Client(\r\n        clientId = \"google\",\r\n        clientRegistrationId = \"google\",\r\n        principalName = \"user@google.com\",\r\n        scopes = {\"email\", \"profile\"}\r\n    )\r\n    void testGoogleOAuth2Login() throws Exception {\r\n        mockMvc.perform(get(\"/api/social/login/google\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockOAuth2Client(\r\n        clientId = \"github\",\r\n        clientRegistrationId = \"github\",\r\n        principalName = \"github-user-123\",\r\n        scopes = {\"read:user\"}\r\n    )\r\n    void testGithubOAuth2Login() throws Exception {\r\n        mockMvc.perform(get(\"/api/social/login/github\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-oauth2authorizedclientrepository-testing",
      children: "2.2 OAuth2AuthorizedClientRepository Testing"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["When your code relies on ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OAuth2AuthorizedClientRepository"
      }), " or ", (0,jsx_runtime.jsx)(_components.code, {
        children: "OAuth2AuthorizedClientService"
      }), ", use ", (0,jsx_runtime.jsx)(_components.code, {
        children: "mockOAuth2Test"
      }), " to set up the mock."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;\r\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;\r\nimport org.springframework.security.oauth2.client.registration.ClientRegistration;\r\nimport org.springframework.security.oauth2.core.AuthorizationGrantType;\r\n\r\n@SpringBootTest\r\nclass OAuth2ClientServiceTest {\r\n\r\n    @MockBean\r\n    private OAuth2AuthorizedClientService authorizedClientService;\r\n\r\n    @Test\r\n    @WithMockUser\r\n    void testAuthorizedClientService() {\r\n        var registration = ClientRegistration.withRegistrationId(\"google\")\r\n            .clientId(\"client-id\")\r\n            .clientSecret(\"client-secret\")\r\n            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)\r\n            .redirectUri(\"{baseUrl}/login/oauth2/code/google\")\r\n            .scope(\"email\", \"profile\")\r\n            .authorizationUri(\"https://accounts.google.com/o/oauth2/v2/auth\")\r\n            .tokenUri(\"https://oauth2.googleapis.com/token\")\r\n            .clientName(\"Google\")\r\n            .build();\r\n\r\n        var client = new OAuth2AuthorizedClient(registration, \"user\",\r\n            new OAuth2AccessToken(OAuth2AccessToken.TokenType.BEARER,\r\n                \"mock-token\", Instant.now(), Instant.now().plusSeconds(300)));\r\n\r\n        when(authorizedClientService.loadAuthorizedClient(\"google\", \"user\"))\r\n            .thenReturn(client);\r\n\r\n        var loaded = authorizedClientService.loadAuthorizedClient(\"google\", \"user\");\r\n        assertNotNull(loaded);\r\n        assertEquals(\"mock-token\", loaded.getAccessToken().getTokenValue());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "23-jwt-token-mocking",
      children: "2.3 JWT Token Mocking"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["For resource servers that validate JWT tokens, mock the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JwtDecoder"
      }), " to avoid calling the authorization server."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.mock.mockito.MockBean;\r\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\r\nimport org.springframework.security.oauth2.jwt.Jwt;\r\n\r\n@SpringBootTest\r\n@AutoConfigureMockMvc\r\nclass JwtResourceServerTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    @MockBean\r\n    private JwtDecoder jwtDecoder;\r\n\r\n    @Test\r\n    void testAuthenticatedRequestWithMockedJwt() throws Exception {\r\n        Jwt jwt = Jwt.withTokenValue(\"mock-token\")\r\n            .header(\"alg\", \"RS256\")\r\n            .header(\"typ\", \"JWT\")\r\n            .subject(\"user123\")\r\n            .claim(\"scope\", \"openid email read\")\r\n            .claim(\"email\", \"alice@example.com\")\r\n            .issuedAt(Instant.now())\r\n            .expiresAt(Instant.now().plusSeconds(3600))\r\n            .build();\r\n\r\n        when(jwtDecoder.decode(anyString())).thenReturn(jwt);\r\n\r\n        mockMvc.perform(get(\"/api/orders\")\r\n                .header(\"Authorization\", \"Bearer mock-token\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    void testInvalidToken() throws Exception {\r\n        when(jwtDecoder.decode(anyString()))\r\n            .thenThrow(new JwtException(\"Invalid token\"));\r\n\r\n        mockMvc.perform(get(\"/api/orders\")\r\n                .header(\"Authorization\", \"Bearer invalid-token\"))\r\n            .andExpect(status().isUnauthorized());\r\n    }\r\n\r\n    @Test\r\n    void testMissingToken() throws Exception {\r\n        mockMvc.perform(get(\"/api/orders\"))\r\n            .andExpect(status().isUnauthorized());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "24-testing-resource-server-with-jwt-authentication-token",
      children: "2.4 Testing Resource Server with JWT Authentication Token"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Combining ", (0,jsx_runtime.jsx)(_components.code, {
        children: "@WithMockJwt"
      }), " and a mocked ", (0,jsx_runtime.jsx)(_components.code, {
        children: "JwtDecoder"
      }), " for full control."]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(OrderController.class)\r\nclass FullJwtTest {\r\n\r\n    @Autowired\r\n    private MockMvc mockMvc;\r\n\r\n    // When using @WithMockJwt, we don't need JwtDecoder — the annotation\r\n    // populates the SecurityContext directly. But if the controller\r\n    // or a filter calls JwtDecoder, we still need the mock.\r\n\r\n    @MockBean\r\n    private JwtDecoder jwtDecoder;\r\n\r\n    @Test\r\n    @WithMockJwt(subject = \"alice\", scopes = {\"read\", \"write\"})\r\n    void testReadScope() throws Exception {\r\n        mockMvc.perform(get(\"/api/orders\"))\r\n            .andExpect(status().isOk());\r\n    }\r\n\r\n    @Test\r\n    @WithMockJwt(subject = \"bob\", scopes = {\"read\"})\r\n    void testReadScopeOnly_ShouldFailOnWrite() throws Exception {\r\n        mockMvc.perform(post(\"/api/orders\")\r\n                .contentType(MediaType.APPLICATION_JSON)\r\n                .content(\"\"\"\r\n                    {\"productId\": \"prod-1\", \"quantity\": 1}\r\n                    \"\"\")\r\n                .with(csrf()))\r\n            .andExpect(status().isForbidden());\r\n    }\r\n\r\n    @Test\r\n    void testNoToken() throws Exception {\r\n        mockMvc.perform(get(\"/api/orders\"))\r\n            .andExpect(status().isUnauthorized());\r\n    }\r\n\r\n    @Test\r\n    void testExpiredToken() throws Exception {\r\n        Jwt expiredJwt = Jwt.withTokenValue(\"expired\")\r\n            .header(\"alg\", \"RS256\")\r\n            .subject(\"alice\")\r\n            .issuedAt(Instant.now().minusSeconds(7200))\r\n            .expiresAt(Instant.now().minusSeconds(3600))\r\n            .build();\r\n\r\n        when(jwtDecoder.decode(anyString())).thenThrow(\r\n            new JwtValidationException(\"Token expired\",\r\n                List.of(new OAuth2Error(\"expired_token\"))));\r\n\r\n        mockMvc.perform(get(\"/api/orders\")\r\n                .header(\"Authorization\", \"Bearer expired\"))\r\n            .andExpect(status().isUnauthorized());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-performance-testing-with-jmeter",
      children: "3. Performance Testing with JMeter"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Apache JMeter is a graphical, Java-based performance testing tool. It tests applications by simulating multiple concurrent users sending requests."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-test-plan-structure",
      children: "3.1 Test Plan Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "A JMeter test plan follows this hierarchy:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Test Plan\r\n├── User Defined Variables\r\n├── HTTP Request Defaults\r\n├── Thread Group (simulates users)\r\n│   ├── HTTP Request Sampler (GET /api/orders)\r\n│   ├── HTTP Header Manager\r\n│   ├── Assertions (Response Assertion)\r\n│   └── Listeners (Summary Report, Aggregate Report)\r\n├── Thread Group (admin users)\r\n│   └── HTTP Request Sampler (POST /api/orders)\r\n└── View Results Tree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-creating-a-jmeter-test-programmatically",
      children: "3.2 Creating a JMeter Test Programmatically"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JMeterTestPlan.java — creates a JMX test plan programmatically\r\nimport org.apache.jmeter.config.Arguments;\r\nimport org.apache.jmeter.config.gui.ArgumentsPanel;\r\nimport org.apache.jmeter.control.LoopController;\r\nimport org.apache.jmeter.control.gui.LoopControlPanel;\r\nimport org.apache.jmeter.engine.StandardJMeterEngine;\r\nimport org.apache.jmeter.protocol.http.control.Header;\r\nimport org.apache.jmeter.protocol.http.control.HeaderManager;\r\nimport org.apache.jmeter.protocol.http.sampler.HTTPSampler;\r\nimport org.apache.jmeter.protocol.http.util.HTTPArgument;\r\nimport org.apache.jmeter.reporters.ResultCollector;\r\nimport org.apache.jmeter.reporters.Summariser;\r\nimport org.apache.jmeter.save.SaveService;\r\nimport org.apache.jmeter.testelement.TestPlan;\r\nimport org.apache.jmeter.threads.ThreadGroup;\r\nimport org.apache.jmeter.util.JMeterUtils;\r\nimport org.apache.jorphan.collections.HashTree;\r\nimport java.io.FileOutputStream;\r\n\r\npublic class JmeterTestPlanGenerator {\r\n\r\n    public static void main(String[] args) throws Exception {\r\n        // Initialize JMeter\r\n        JMeterUtils.setJMeterHome(\"C:/tools/apache-jmeter-5.6.3\");\r\n        JMeterUtils.loadJMeterProperties(\r\n            \"C:/tools/apache-jmeter-5.6.3/bin/jmeter.properties\");\r\n        JMeterUtils.initLocale();\r\n\r\n        // Create Test Plan\r\n        TestPlan testPlan = new TestPlan(\"Spring Boot Order API Load Test\");\r\n        testPlan.setProperty(TestPlan.TEST_COMMENTS,\r\n            \"Simulates 50 concurrent users placing orders\");\r\n        testPlan.setUserDefinedVariables(createUserDefinedVariables());\r\n\r\n        // Thread Group: 50 users, ramp-up 10s, loop 5 times\r\n        ThreadGroup threadGroup = createThreadGroup(50, 10, 5);\r\n\r\n        // HTTP Request Defaults\r\n        HTTPSampler defaultSampler = new HTTPSampler();\r\n        defaultSampler.setName(\"HTTP Request Defaults\");\r\n        defaultSampler.setDomain(\"localhost\");\r\n        defaultSampler.setPort(8080);\r\n        defaultSampler.setProtocol(\"http\");\r\n        defaultSampler.setPath(\"/api\");\r\n\r\n        // GET Orders Sampler\r\n        HTTPSampler getOrdersSampler = new HTTPSampler();\r\n        getOrdersSampler.setName(\"GET /api/orders\");\r\n        getOrdersSampler.setDomain(\"localhost\");\r\n        getOrdersSampler.setPort(8080);\r\n        getOrdersSampler.setProtocol(\"http\");\r\n        getOrdersSampler.setPath(\"/api/orders\");\r\n        getOrdersSampler.setMethod(\"GET\");\r\n        getOrdersSampler.addArgument(\"page\", \"0\");\r\n        getOrdersSampler.addArgument(\"size\", \"20\");\r\n\r\n        // POST Order Sampler\r\n        HTTPSampler createOrderSampler = new HTTPSampler();\r\n        createOrderSampler.setName(\"POST /api/orders\");\r\n        createOrderSampler.setDomain(\"localhost\");\r\n        createOrderSampler.setPort(8080);\r\n        createOrderSampler.setProtocol(\"http\");\r\n        createOrderSampler.setPath(\"/api/orders\");\r\n        createOrderSampler.setMethod(\"POST\");\r\n        createOrderSampler.addArgument(\"productId\", \"prod-${__Random(1,100)}\");\r\n        createOrderSampler.addArgument(\"quantity\", \"${__Random(1,5)}\");\r\n\r\n        // Header Manager\r\n        HeaderManager headerManager = new HeaderManager();\r\n        headerManager.add(new Header(\"Content-Type\", \"application/json\"));\r\n        headerManager.add(new Header(\"Authorization\", \"Bearer ${__property(jwt.token)}\"));\r\n\r\n        // Response Assertion\r\n        org.apache.jmeter.assertions.ResponseAssertion assertion =\r\n            new org.apache.jmeter.assertions.ResponseAssertion();\r\n        assertion.setName(\"Assert Status 200\");\r\n        assertion.setTestFieldResponseCode();\r\n        assertion.addTestString(\"200\");\r\n        assertion.setAssumeSuccess(false);\r\n\r\n        // Loop Controller\r\n        LoopController loopController = new LoopController();\r\n        loopController.setLoops(5);\r\n        loopController.setContinueForever(false);\r\n\r\n        // Build test tree\r\n        HashTree testPlanTree = new HashTree();\r\n        HashTree threadGroupHashTree = testPlanTree.add(testPlan);\r\n        HashTree threadGroupTree = threadGroupHashTree.add(threadGroup);\r\n\r\n        threadGroupTree.add(getOrdersSampler);\r\n        threadGroupTree.add(createOrderSampler);\r\n        threadGroupTree.add(headerManager);\r\n        threadGroupTree.add(assertion);\r\n\r\n        // Save test plan\r\n        SaveService.saveTree(testPlanTree,\r\n            new FileOutputStream(\"order-api-load-test.jmx\"));\r\n\r\n        System.out.println(\"JMeter test plan saved to order-api-load-test.jmx\");\r\n    }\r\n\r\n    private static Arguments createUserDefinedVariables() {\r\n        Arguments args = new Arguments();\r\n        args.addArgument(\"base_url\", \"localhost:8080\");\r\n        args.addArgument(\"jwt.token\", \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...\");\r\n        return args;\r\n    }\r\n\r\n    private static ThreadGroup createThreadGroup(int users, int rampUp, int loops) {\r\n        ThreadGroup group = new ThreadGroup();\r\n        group.setName(\"Order API Users\");\r\n        group.setNumThreads(users);\r\n        group.setRampUp(rampUp);\r\n        group.setScheduler(true);\r\n        group.setDuration(300);  // 5 minutes max\r\n        group.setSamplerController(createLoopController(loops));\r\n        return group;\r\n    }\r\n\r\n    private static LoopController createLoopController(int loops) {\r\n        LoopController controller = new LoopController();\r\n        controller.setLoops(loops);\r\n        controller.setContinueForever(false);\r\n        return controller;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-jmeter-listeners",
      children: "3.3 JMeter Listeners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Programmatic listener setup\r\nimport org.apache.jmeter.reporters.ResultCollector;\r\nimport org.apache.jmeter.reporters.Summariser;\r\nimport org.apache.jmeter.reporters.gui.SummariserGui;\r\nimport org.apache.jmeter.visualizers.SummaryReport;\r\nimport org.apache.jmeter.visualizers.ViewResultsFullVisualizer;\r\n\r\npublic class JmeterListeners {\r\n\r\n    public static ResultCollector createSummaryReport(HashTree testPlanTree) {\r\n        Summariser summariser = new Summariser(\"Summary\");\r\n        ResultCollector summaryCollector = new ResultCollector(summariser);\r\n        summaryCollector.setName(\"Summary Report\");\r\n        summaryCollector.setFilename(\"results/summary-report.csv\");\r\n        testPlanTree.add(summaryCollector);\r\n        return summaryCollector;\r\n    }\r\n\r\n    public static ResultCollector createAggregateReport(HashTree testPlanTree) {\r\n        ResultCollector aggregateCollector = new ResultCollector();\r\n        aggregateCollector.setName(\"Aggregate Report\");\r\n        aggregateCollector.setFilename(\"results/aggregate-report.csv\");\r\n        aggregateCollector.setProperty(\"collector\", \"aggregate\");\r\n        testPlanTree.add(aggregateCollector);\r\n        return aggregateCollector;\r\n    }\r\n\r\n    public static ResultCollector createErrorLog(HashTree testPlanTree) {\r\n        ResultCollector errorCollector = new ResultCollector();\r\n        errorCollector.setName(\"Error Log\");\r\n        errorCollector.setFilename(\"results/errors.csv\");\r\n        errorCollector.setErrorLogging(true);\r\n        testPlanTree.add(errorCollector);\r\n        return errorCollector;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-running-jmeter-from-command-line",
      children: "3.4 Running JMeter from Command Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Non-GUI mode (headless — for CI/CD)\r\njmeter -n -t order-api-load-test.jmx -l results/raw-results.jtl -e -o results/report/\r\n\r\n# Parameters\r\n# -n        Non-GUI mode\r\n# -t        Test plan file\r\n# -l        Results log file\r\n# -e        Generate HTML report\r\n# -o        Output directory for HTML report\r\n\r\n# With custom properties\r\njmeter -n -t order-api-load-test.jmx \\\r\n    -Jjwt.token=eyJhbGciOiJSUzI1NiJ9... \\\r\n    -Jbase_url=staging.example.com \\\r\n    -l results/raw.jtl -e -o results/report/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-jmeter-assertions",
      children: "3.5 JMeter Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JSON Assertion — validates JSON response body\r\nimport org.apache.jmeter.assertions.JSONPathAssertion;\r\n\r\npublic class JmeterAssertions {\r\n\r\n    public static JSONPathAssertion createJsonAssertion() {\r\n        JSONPathAssertion jsonAssertion = new JSONPathAssertion();\r\n        jsonAssertion.setName(\"Validate JSON Response\");\r\n        jsonAssertion.setJsonPath(\"$.status\");\r\n        jsonAssertion.setExpectedValue(\"CONFIRMED\");\r\n        jsonAssertion.setJsonValidationBool(true);\r\n        return jsonAssertion;\r\n    }\r\n\r\n    public static org.apache.jmeter.assertions.DurationAssertion createDurationAssertion() {\r\n        var durationAssertion = new org.apache.jmeter.assertions.DurationAssertion();\r\n        durationAssertion.setName(\"Max Response Time 2s\");\r\n        durationAssertion.setAllowedDuration(2000);  // 2 seconds\r\n        return durationAssertion;\r\n    }\r\n\r\n    public static org.apache.jmeter.assertions.SizeAssertion createSizeAssertion() {\r\n        var sizeAssertion = new org.apache.jmeter.assertions.SizeAssertion();\r\n        sizeAssertion.setName(\"Response Size between 50-50000 bytes\");\r\n        sizeAssertion.setAllowedSizeRange(true);\r\n        sizeAssertion.setSizeMin(50);\r\n        sizeAssertion.setSizeMax(50000);\r\n        return sizeAssertion;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\r\nJMH benchmarks must include warmup iterations so the JIT compiler reaches steady state before measurement."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-performance-testing-with-gatling",
      children: "4. Performance Testing with Gatling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gatling is a high-performance, code-first load testing tool written in Scala. It generates realistic load and produces rich HTML reports."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-basic-simulation",
      children: "4.1 Basic Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-scala",
        children: "// src/test/scala/com/example/OrderApiSimulation.scala\r\nimport io.gatling.core.Predef._\r\nimport io.gatling.http.Predef._\r\nimport scala.concurrent.duration._\r\n\r\nclass OrderApiSimulation extends Simulation {\r\n\r\n  // HTTP Protocol configuration\r\n  val httpProtocol = http\r\n    .baseUrl(\"http://localhost:8080\")\r\n    .acceptHeader(\"application/json\")\r\n    .contentTypeHeader(\"application/json\")\r\n    .authorizationHeader(\"Bearer ${jwtToken}\")\r\n    .header(\"X-Request-Id\", \"${correlationId}\")\r\n    .check(status.is(200))\r\n\r\n  // Scenario: browse orders\r\n  val browseOrders = scenario(\"Browse Orders\")\r\n    .exec(http(\"Get Orders Page 0\")\r\n      .get(\"/api/orders?page=0&size=20\")\r\n      .check(\r\n        status.is(200),\r\n        jsonPath(\"$.totalElements\").exists,\r\n        jsonPath(\"$.content[*]\").count.gt(0)\r\n      )\r\n    )\r\n    .pause(1, 3)  // Think time between 1-3 seconds\r\n    .exec(http(\"Get Order Details\")\r\n      .get(\"/api/orders/${orderId}\")\r\n      .check(\r\n        status.is(200),\r\n        jsonPath(\"$.status\").is(\"CONFIRMED\")\r\n      )\r\n    )\r\n\r\n  // Scenario: create orders\r\n  val createOrders = scenario(\"Create Orders\")\r\n    .feed(Iterator.continually(Map(\r\n      \"productId\" -> (\"prod-\" + scala.util.Random.nextInt(100)),\r\n      \"quantity\"  -> (scala.util.Random.nextInt(5) + 1)\r\n    )))\r\n    .exec(http(\"Create Order\")\r\n      .post(\"/api/orders\")\r\n      .body(StringBody(\r\n        \"\"\"{\"productId\": \"${productId}\", \"quantity\": ${quantity}}\"\"\"\r\n      )).asJson\r\n      .check(\r\n        status.is(200),\r\n        jsonPath(\"$.id\").saveAs(\"orderId\"),\r\n        jsonPath(\"$.status\").is(\"PENDING\")\r\n      )\r\n    )\r\n\r\n  // Scenario: admin operations\r\n  val adminOperations = scenario(\"Admin Operations\")\r\n    .exec(http(\"Get All Orders\")\r\n      .get(\"/api/admin/orders\")\r\n      .check(\r\n        status.is(200),\r\n        jsonPath(\"$..status\").findAll.transform(\r\n          statuses => statuses.distinct\r\n        )\r\n      )\r\n    )\r\n\r\n  // Injection profile\r\n  setUp(\r\n    browseOrders.inject(\r\n      nothingFor(4.seconds),          // Pause before starting\r\n      atOnceUsers(10),                // 10 immediate users\r\n      rampUsers(50).during(30.seconds), // 50 users over 30 seconds\r\n      constantUsersPerSec(20).during(1.minute), // 20 users/sec for 1 min\r\n      rampUsersPerSec(20).to(100).during(2.minutes), // Ramp to 100/sec\r\n      stressPeakUsers(200).during(30.seconds) // Spike to 200 users\r\n    ),\r\n    createOrders.inject(\r\n      rampUsers(30).during(30.seconds),\r\n      constantUsersPerSec(10).during(2.minutes)\r\n    ),\r\n    adminOperations.inject(\r\n      nothingFor(10.seconds),\r\n      atOnceUsers(5),\r\n      rampUsers(10).during(1.minute)\r\n    )\r\n  ).protocols(httpProtocol)\r\n   .maxDuration(5.minutes)\r\n   .assertions(\r\n     global.responseTime.mean.lt(500),          // Mean < 500ms\r\n     global.responseTime.max.lt(3000),          // Max < 3s\r\n     global.successfulRequests.percent.gt(99),  // 99%+ success rate\r\n     forAll.responseTime.percentile3.lt(2000)   // p95 < 2s\r\n   )\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-advanced-simulation-with-feeders",
      children: "4.2 Advanced Simulation with Feeders"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-scala",
        children: "// src/test/scala/com/example/AdvancedOrderSimulation.scala\r\nimport io.gatling.core.Predef._\r\nimport io.gatling.http.Predef._\r\nimport io.gatling.jdbc.Predef._\r\nimport io.gatling.jsonpath.JsonPath\r\nimport scala.concurrent.duration._\r\n\r\nclass AdvancedOrderSimulation extends Simulation {\r\n\r\n  val httpProtocol = http\r\n    .baseUrl(\"http://localhost:8080\")\r\n    .inferHtmlResources()\r\n    .userAgentHeader(\"Gatling/PerformanceTest\")\r\n    .disableFollowRedirect\r\n    .disableCaching\r\n\r\n  // CSV feeder — read test data from file\r\n  val productFeeder = csv(\"data/products.csv\").circular\r\n  val userFeeder = csv(\"data/users.csv\").random\r\n  val tokenFeeder = Iterator.continually(Map(\r\n    \"authToken\" -> (\"Bearer \" + generateToken())\r\n  ))\r\n\r\n  // Scenario with feeder\r\n  val orderFlow = scenario(\"Complete Order Flow\")\r\n    .feed(userFeeder)\r\n    .feed(tokenFeeder)\r\n    .feed(productFeeder)\r\n    .exec(http(\"Login\")\r\n      .post(\"/api/auth/login\")\r\n      .body(StringBody(\r\n        \"\"\"{\"email\": \"${email}\", \"password\": \"${password}\"}\"\"\"\r\n      )).asJson\r\n      .check(\r\n        jsonPath(\"$.accessToken\").saveAs(\"jwtToken\")\r\n      )\r\n    )\r\n    .exec(http(\"Browse Products\")\r\n      .get(\"/api/products\")\r\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\r\n      .check(\r\n        jsonPath(\"$[0].id\").saveAs(\"productId\")\r\n      )\r\n    )\r\n    .exec(http(\"Add to Cart\")\r\n      .post(\"/api/cart/items\")\r\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\r\n      .body(StringBody(\r\n        \"\"\"{\"productId\": \"${productId}\", \"quantity\": ${quantity}}\"\"\"\r\n      )).asJson\r\n    )\r\n    .exec(http(\"Checkout\")\r\n      .post(\"/api/orders\")\r\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\r\n      .body(StringBody(\r\n        \"\"\"{\"cartId\": \"${cartId}\", \"shippingAddress\": \"${address}\"}\"\"\"\r\n      )).asJson\r\n      .check(\r\n        jsonPath(\"$.id\").saveAs(\"orderId\")\r\n      )\r\n    )\r\n    .exec(session => {\r\n      println(s\"Order completed: ${session(\"orderId\").as[String]}\")\r\n      session\r\n    })\r\n\r\n  // Multiple injection profiles\r\n  setUp(\r\n    orderFlow.inject(\r\n      incrementUsersPerSec(10.0)\r\n        .times(5)        // 5 steps: 10, 20, 30, 40, 50 users/sec\r\n        .eachLevelLasting(30.seconds)\r\n        .separatedByRampsLasting(10.seconds)\r\n        .startingFrom(10)\r\n    )\r\n  ).protocols(httpProtocol)\r\n   .assertions(\r\n     global.failedRequests.count.lt(5)\r\n   )\r\n}\r\n\r\n// Helper method outside simulation\r\nobject generateToken {\r\n  def apply(): String = {\r\n    // In real tests, call the auth endpoint\r\n    java.util.UUID.randomUUID().toString\r\n  }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-gatling-maven-plugin-configuration",
      children: "4.3 Gatling Maven Plugin Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml — Gatling Maven plugin -->\r\n<plugin>\r\n    <groupId>io.gatling</groupId>\r\n    <artifactId>gatling-maven-plugin</artifactId>\r\n    <version>4.7.0</version>\r\n    <configuration>\r\n        <simulationClass>com.example.OrderApiSimulation</simulationClass>\r\n        <jvmArgs>\r\n            <jvmArg>-Xmx2g</jvmArg>\r\n            <jvmArg>-Dgatling.http.ssl.trustStoreType=JKS</jvmArg>\r\n        </jvmArgs>\r\n        <runDescription>Order API load test - 200 concurrent users</runDescription>\r\n    </configuration>\r\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Gatling test\r\nmvn gatling:test \\\r\n    -Dgatling.simulationClass=com.example.OrderApiSimulation \\\r\n    -DbaseUrl=http://staging.example.com:8080\r\n\r\n# Output: target/gatling/orderapisimulation-{timestamp}/index.html\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "44-jmeter-vs-gatling--comparison",
      children: "4.4 JMeter vs Gatling — Comparison"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Feature"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "JMeter"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Gatling"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Interface"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI + XML (JMX)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Code-first (Scala)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Learning curve"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Low (visual)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Medium (Scala DSL)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Scripting"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI drag-drop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Scala code"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reports"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTML via -e flag"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Rich HTML with graphs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Performance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Slower (Swing UI overhead)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Faster (Akka-based)"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Distribution"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in distributed mode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Requires separate tools"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "CI/CD integration"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command line"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maven/Gradle/sbt"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Protocols"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Extensive (HTTP, JDBC, JMS, FTP, etc.)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "HTTP, WebSocket, JMS, MQTT"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Correlation"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Manual (regex extractors)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Automatic with checks"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Real-time metrics"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Basic"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Built-in"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Best for"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GUI-oriented teams, complex protocols"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Developer teams, CI pipelines"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-load-testing-spring-boot",
      children: "5. Load Testing Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-profiling-endpoints-under-load",
      children: "5.1 Profiling Endpoints Under Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ProductController to be load-tested\r\n@RestController\r\n@RequestMapping(\"/api/products\")\r\npublic class ProductController {\r\n\r\n    private final ProductRepository productRepository;\r\n    private final PriceCalculationService priceService;\r\n\r\n    public ProductController(ProductRepository productRepository,\r\n                             PriceCalculationService priceService) {\r\n        this.productRepository = productRepository;\r\n        this.priceService = priceService;\r\n    }\r\n\r\n    @GetMapping\r\n    public Page<ProductDto> getProducts(\r\n            @PageableDefault(size = 20) Pageable pageable,\r\n            @RequestParam(required = false) String category) {\r\n\r\n        Page<Product> products;\r\n        if (category != null) {\r\n            products = productRepository.findByCategory(category, pageable);\r\n        } else {\r\n            products = productRepository.findAll(pageable);\r\n        }\r\n\r\n        return products.map(product -> new ProductDto(\r\n            product.getId(),\r\n            product.getName(),\r\n            priceService.calculateFinalPrice(product.getPrice(), product.getDiscount()),\r\n            product.getCategory()\r\n        ));\r\n    }\r\n\r\n    @GetMapping(\"/{id}\")\r\n    public ProductDto getProduct(@PathVariable Long id) {\r\n        Product product = productRepository.findByIdWithReviews(id)\r\n            .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, \"Product not found\"));\r\n        return new ProductDto(product, product.getReviews());\r\n    }\r\n\r\n    @PostMapping\r\n    public ProductDto createProduct(@Valid @RequestBody CreateProductRequest request) {\r\n        Product product = new Product(request.name(), request.price(), request.category());\r\n        product = productRepository.save(product);\r\n        return new ProductDto(product);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-connection-pool-performance",
      children: "5.2 Connection Pool Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor HikariCP connection pool metrics during load tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import com.zaxxer.hikari.HikariConfig;\r\nimport com.zaxxer.hikari.HikariDataSource;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\n\r\nimport javax.sql.DataSource;\r\nimport java.time.Duration;\r\n\r\n@Configuration\r\nclass ConnectionPoolConfig {\r\n\r\n    @Bean\r\n    public DataSource dataSource() {\r\n        HikariConfig config = new HikariConfig();\r\n        config.setJdbcUrl(\"jdbc:postgresql://localhost:5432/orderdb\");\r\n        config.setUsername(\"app\");\r\n        config.setPassword(\"app\");\r\n        config.setDriverClassName(\"org.postgresql.Driver\");\r\n\r\n        // Connection pool tuning\r\n        config.setMaximumPoolSize(50);          // Max connections\r\n        config.setMinimumIdle(10);              // Keep 10 idle\r\n        config.setIdleTimeout(Duration.ofMinutes(5).toMillis());\r\n        config.setConnectionTimeout(Duration.ofSeconds(5).toMillis());  // Wait 5s for connection\r\n        config.setMaxLifetime(Duration.ofMinutes(30).toMillis());\r\n        config.setValidationTimeout(Duration.ofSeconds(2).toMillis());\r\n        config.setConnectionTestQuery(\"SELECT 1\");\r\n        config.setPoolName(\"OrderAppPool\");\r\n\r\n        // Metrics\r\n        config.setMetricsTrackerFactory(new MicrometerMetricsTrackerFactory());\r\n\r\n        return new HikariDataSource(config);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-database-query-performance-under-load",
      children: "5.3 Database Query Performance Under Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import io.micrometer.core.annotation.Timed;\r\nimport org.springframework.data.jpa.repository.Query;\r\nimport org.springframework.data.repository.query.Param;\r\n\r\n@Repository\r\npublic interface ProductRepository extends JpaRepository<Product, Long> {\r\n\r\n    @Timed(value = \"db.query.findByCategory\", extraTags = {\"repo\", \"ProductRepository\"})\r\n    Page<Product> findByCategory(String category, Pageable pageable);\r\n\r\n    @Query(\"\"\"\r\n        SELECT p FROM Product p\r\n        LEFT JOIN FETCH p.reviews\r\n        LEFT JOIN FETCH p.category\r\n        WHERE p.id = :id\r\n        \"\"\")\r\n    @Timed(value = \"db.query.findByIdWithReviews\", extraTags = {\"repo\", \"ProductRepository\"})\r\n    Optional<Product> findByIdWithReviews(@Param(\"id\") Long id);\r\n\r\n    @Query(value = \"\"\"\r\n        SELECT p FROM Product p\r\n        WHERE lower(p.name) LIKE lower(concat('%', :keyword, '%'))\r\n        ORDER BY p.salesCount DESC\r\n        \"\"\")\r\n    @Timed(value = \"db.query.searchByName\")\r\n    Page<Product> searchByName(@Param(\"keyword\") String keyword, Pageable pageable);\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-measuring-latency-percentiles",
      children: "5.4 Measuring Latency Percentiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import io.micrometer.core.instrument.MeterRegistry;\r\nimport io.micrometer.core.instrument.Timer;\r\nimport org.springframework.web.filter.OncePerRequestFilter;\r\nimport jakarta.servlet.FilterChain;\r\nimport jakarta.servlet.http.HttpServletRequest;\r\nimport jakarta.servlet.http.HttpServletResponse;\r\n\r\n@Component\r\npublic class LatencyMetricsFilter extends OncePerRequestFilter {\r\n\r\n    private final MeterRegistry meterRegistry;\r\n\r\n    public LatencyMetricsFilter(MeterRegistry meterRegistry) {\r\n        this.meterRegistry = meterRegistry;\r\n    }\r\n\r\n    @Override\r\n    protected void doFilterInternal(HttpServletRequest request,\r\n                                    HttpServletResponse response,\r\n                                    FilterChain filterChain) {\r\n\r\n        Timer.Sample sample = Timer.start(meterRegistry);\r\n\r\n        try {\r\n            filterChain.doFilter(request, response);\r\n        } catch (Exception e) {\r\n            throw new RuntimeException(e);\r\n        } finally {\r\n            String path = request.getRequestURI();\r\n            String method = request.getMethod();\r\n            int status = response.getStatus();\r\n\r\n            sample.stop(Timer.builder(\"http.request.latency\")\r\n                .description(\"HTTP request latency\")\r\n                .tags(\"method\", method, \"path\", path, \"status\", String.valueOf(status))\r\n                .publishPercentiles(0.5, 0.75, 0.90, 0.95, 0.99, 0.999)\r\n                .publishPercentileHistogram()\r\n                .register(meterRegistry));\r\n        }\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml — Micrometer percentile config\r\nmanagement:\r\n  metrics:\r\n    distribution:\r\n      percentiles-histogram:\r\n        http.request.latency: true\r\n      percentiles:\r\n        http.request.latency: 0.5, 0.75, 0.90, 0.95, 0.99, 0.999\r\n      slo:\r\n        http.request.latency: 10ms, 50ms, 100ms, 200ms, 500ms, 1s, 2s, 5s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-spring-boot-actuator-endpoints-for-load-monitoring",
      children: "5.5 Spring Boot Actuator Endpoints for Load Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties — expose all metrics during load test\r\nmanagement.endpoints.web.exposure.include=health,metrics,prometheus,threaddump,heapdump\r\nmanagement.endpoint.metrics.enabled=true\r\nmanagement.metrics.export.prometheus.enabled=true\r\n\r\n# Expose HikariCP metrics\r\nspring.datasource.hikari.metrics-tracker-factory=com.zaxxer.hikari.metrics.prometheus.PrometheusMetricsTrackerFactory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# During a load test, watch these endpoints:\r\n\r\n# Active connections\r\ncurl localhost:8080/actuator/metrics/hikaricp.connections.active\r\n\r\n# Thread pool status\r\ncurl localhost:8080/actuator/metrics/jvm.threads.live\r\n\r\n# Database connections waiting\r\ncurl localhost:8080/actuator/metrics/hikaricp.connections.pending\r\n\r\n# HTTP request throughput\r\ncurl localhost:8080/actuator/metrics/http.server.requests\r\n\r\n# Heap memory\r\ncurl localhost:8080/actuator/metrics/jvm.memory.used\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\r\nAlways run load tests against a staging environment that mirrors production → results from a developer laptop are not meaningful."
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-stress-testing",
      children: "6. Stress Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Stress testing pushes the system beyond normal capacity to find breaking points."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-ramp-up-test",
      children: "6.1 Ramp-Up Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gradually increases load to find the saturation point."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Gatling ramp-up simulation\r\nimport io.gatling.javaapi.core.*;\r\nimport io.gatling.javaapi.http.*;\r\n\r\nimport static io.gatling.javaapi.core.CoreDsl.*;\r\nimport static io.gatling.javaapi.http.HttpDsl.*;\r\n\r\npublic class RampUpSimulation extends Simulation {\r\n\r\n    HttpProtocolBuilder httpProtocol = http\r\n        .baseUrl(\"http://localhost:8080\")\r\n        .acceptHeader(\"application/json\");\r\n\r\n    ScenarioBuilder rampUp = scenario(\"Ramp-Up Test\")\r\n        .exec(http(\"GET /api/orders\")\r\n            .get(\"/api/orders?page=0&size=20\")\r\n            .check(status().is(200)))\r\n        .pause(1);\r\n\r\n    {\r\n        setUp(\r\n            rampUp.inject(\r\n                rampUsersPerSec(1).to(500)\r\n                    .during(Duration.ofMinutes(10))  // 1 → 500 req/sec over 10 min\r\n            )\r\n        ).protocols(httpProtocol)\r\n         .assertions(\r\n             global().responseTime().max().lt(5000),  // Fail if max > 5s\r\n             global().successfulRequests().percent().gt(95.0)\r\n         );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-spike-test",
      children: "6.2 Spike Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sudden burst of traffic — tests auto-scaling and circuit breakers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Gatling spike simulation\r\npublic class SpikeSimulation extends Simulation {\r\n\r\n    HttpProtocolBuilder httpProtocol = http\r\n        .baseUrl(\"http://localhost:8080\")\r\n        .acceptHeader(\"application/json\");\r\n\r\n    ScenarioBuilder spike = scenario(\"Spike Test\")\r\n        .exec(http(\"GET /api/products\")\r\n            .get(\"/api/products\")\r\n            .check(status().is(200)));\r\n\r\n    {\r\n        setUp(\r\n            spike.inject(\r\n                nothingFor(2.minutes),                    // Baseline steady state\r\n                atOnceUsers(1000),                         // Immediate 1000 users\r\n                nothingFor(30.seconds),                    // Observe recovery\r\n                atOnceUsers(2000),                         // Bigger spike\r\n                nothingFor(1.minutes),                     // Recovery\r\n                rampUsers(300).during(10.seconds)          // Mini spike\r\n            )\r\n        ).protocols(httpProtocol)\r\n         .maxDuration(5.minutes);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-soak-test-endurance",
      children: "6.3 Soak Test (Endurance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sustained load over hours to detect memory leaks and resource exhaustion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Gatling soak simulation\r\npublic class SoakSimulation extends Simulation {\r\n\r\n    HttpProtocolBuilder httpProtocol = http\r\n        .baseUrl(\"http://localhost:8080\")\r\n        .acceptHeader(\"application/json\");\r\n\r\n    ScenarioBuilder steadyLoad = scenario(\"Soak Test — 8 hours sustained\")\r\n        .exec(http(\"GET /api/health\")\r\n            .get(\"/api/health\")\r\n            .check(status().is(200)))\r\n        .pause(2, 5);  // Random pause between 2-5 seconds\r\n\r\n    {\r\n        setUp(\r\n            steadyLoad.inject(\r\n                constantUsersPerSec(100).during(8.hours)  // 100 req/sec for 8 hours\r\n            )\r\n        ).protocols(httpProtocol)\r\n         .assertions(\r\n             global().responseTime().mean().lt(1000),\r\n             global().failedRequests().count().lt(100)\r\n         );\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-stress-test-thresholds",
      children: "6.4 Stress Test Thresholds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Threshold configuration\r\npublic class StressTestThresholds {\r\n\r\n    // Define thresholds as constants\r\n    public static final int MAX_P95_LATENCY_MS = 2000;\r\n    public static final int MAX_P99_LATENCY_MS = 5000;\r\n    public static final int MAX_ERROR_RATE_PERCENT = 1;\r\n    public static final int MIN_THROUGHPUT_RPS = 100;\r\n    public static final int MAX_CPU_PERCENT = 80;\r\n    public static final int MAX_MEMORY_USAGE_MB = 1024;\r\n    public static final int MAX_DB_CONNECTION_POOL_ACTIVE = 45;\r\n\r\n    // Gatling assertions from Java\r\n    public static PopulationBuilder applyAssertions(SetUp setUp) {\r\n        return setUp.assertions(\r\n            global().responseTime().percentile(95).lt(MAX_P95_LATENCY_MS),\r\n            global().responseTime().percentile(99).lt(MAX_P99_LATENCY_MS),\r\n            global().failedRequests().percent().lt(MAX_ERROR_RATE_PERCENT),\r\n            global().requestsPerSec().gt(MIN_THROUGHPUT_RPS)\r\n        );\r\n    }\r\n}\r\n\r\n// Usage in Gatling Java API\r\n/*\r\nsetUp(scenario.inject(...))\r\n    .assertions(\r\n        global().responseTime().percentile3().lt(2000),  // p95 < 2s\r\n        global().responseTime().percentile4().lt(5000),  // p99 < 5s\r\n        global().failedRequests().percent().lt(1.0),     // < 1% errors\r\n        global().requestsPerSec().gt(100)                // > 100 req/sec\r\n    );\r\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-resource-monitoring-during-load",
      children: "6.5 Resource Monitoring During Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.management.ManagementFactory;\r\nimport java.lang.management.MemoryMXBean;\r\nimport java.lang.management.OperatingSystemMXBean;\r\nimport java.lang.management.ThreadMXBean;\r\n\r\n@Component\r\npublic class ResourceMonitor {\r\n\r\n    private final MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();\r\n    private final OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();\r\n    private final ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();\r\n\r\n    private final MeterRegistry meterRegistry;\r\n\r\n    public ResourceMonitor(MeterRegistry meterRegistry) {\r\n        this.meterRegistry = meterRegistry;\r\n    }\r\n\r\n    @Scheduled(fixedRate = 1000)\r\n    public void monitorResources() {\r\n        // JVM heap memory\r\n        var heap = memoryMXBean.getHeapMemoryUsage();\r\n        meterRegistry.gauge(\"jvm.memory.heap.used\", heap.getUsed());\r\n        meterRegistry.gauge(\"jvm.memory.heap.max\", heap.getMax());\r\n        meterRegistry.gauge(\"jvm.memory.heap.percent\",\r\n            (double) heap.getUsed() / heap.getMax() * 100);\r\n\r\n        // Non-heap memory\r\n        var nonHeap = memoryMXBean.getNonHeapMemoryUsage();\r\n        meterRegistry.gauge(\"jvm.memory.nonheap.used\", nonHeap.getUsed());\r\n\r\n        // Thread count\r\n        meterRegistry.gauge(\"jvm.threads.live\", threadMXBean.getThreadCount());\r\n        meterRegistry.gauge(\"jvm.threads.daemon\", threadMXBean.getDaemonThreadCount());\r\n        meterRegistry.gauge(\"jvm.threads.peak\", threadMXBean.getPeakThreadCount());\r\n\r\n        // CPU load\r\n        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {\r\n            meterRegistry.gauge(\"system.cpu.load\", sunOsBean.getCpuLoad());\r\n            meterRegistry.gauge(\"process.cpu.load\", sunOsBean.getProcessCpuLoad());\r\n            meterRegistry.gauge(\"system.memory.free\",\r\n                sunOsBean.getFreePhysicalMemorySize());\r\n            meterRegistry.gauge(\"system.memory.total\",\r\n                sunOsBean.getTotalPhysicalMemorySize());\r\n        }\r\n    }\r\n\r\n    @Scheduled(fixedRate = 5000)\r\n    public void logResourceSnapshot() {\r\n        var heap = memoryMXBean.getHeapMemoryUsage();\r\n        var usedMB = heap.getUsed() / (1024.0 * 1024.0);\r\n        var maxMB = heap.getMax() / (1024.0 * 1024.0);\r\n\r\n        log.info(\"Heap: {:.1f}/{:.1f} MB | Threads: {} | CPU: {:.1f}%\",\r\n            usedMB, maxMB,\r\n            threadMXBean.getThreadCount(),\r\n            getProcessCpuLoad() * 100);\r\n    }\r\n\r\n    private double getProcessCpuLoad() {\r\n        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {\r\n            return sunOsBean.getProcessCpuLoad();\r\n        }\r\n        return -1;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-chaos-testing",
      children: "7. Chaos Testing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chaos engineering tests system resilience by introducing failures in a controlled way."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-chaos-monkey-for-spring-boot",
      children: "7.1 Chaos Monkey for Spring Boot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Chaos Monkey is a Spring Boot actuator module that injects faults (latency, exceptions, service shutdown) into running applications."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml -->\r\n<dependency>\r\n    <groupId>de.codecentric</groupId>\r\n    <artifactId>chaos-monkey-spring-boot</artifactId>\r\n    <version>3.1.0</version>\r\n    <scope>test</scope>\r\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application-chaos.properties — enable Chaos Monkey\r\n# Enable Chaos Monkey\r\nchaos.monkey.enabled=true\r\n\r\n# Assault configuration\r\nchaos.monkey.assaults.level=1\r\nchaos.monkey.assaults.latency-active=true\r\nchaos.monkey.assaults.latency-range-start=1000\r\nchaos.monkey.assaults.latency-range-end=5000\r\nchaos.monkey.assaults.exceptions-active=true\r\nchaos.monkey.assaults.kill-application-active=true\r\nchaos.monkey.assaults.watched-custom-services=com.example.demo.*\r\n\r\n# Watcher configuration\r\nchaos.monkey.watcher.controller=true\r\nchaos.monkey.watcher.rest-controller=true\r\nchaos.monkey.watcher.service=true\r\nchaos.monkey.watcher.repository=true\r\nchaos.monkey.watcher.component=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-chaos-engineering-principles",
      children: "7.2 Chaos Engineering Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ChaosExperiment.java — programmatic chaos experiment\r\nimport org.springframework.web.client.RestTemplate;\r\n\r\npublic class ChaosExperiment {\r\n\r\n    private final RestTemplate restTemplate = new RestTemplate();\r\n    private final String baseUrl = \"http://localhost:8080\";\r\n\r\n    public record ExperimentResult(\r\n        String name,\r\n        boolean passed,\r\n        long p95LatencyMs,\r\n        double errorRate,\r\n        String details\r\n    ) {}\r\n\r\n    // Experiment 1: Inject latency into a single endpoint\r\n    public ExperimentResult testLatencyInjection() {\r\n        System.out.println(\"=== Experiment: Inject 3s latency into GET /api/orders ===\");\r\n\r\n        // Before chaos\r\n        long beforeAvg = measureAverageLatency(\"/api/orders\", 100);\r\n        System.out.println(\"Baseline avg latency: \" + beforeAvg + \"ms\");\r\n\r\n        // Enable latency assault via Chaos Monkey Actuator\r\n        restTemplate.postForEntity(\r\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\r\n            Map.of(\r\n                \"latencyActive\", true,\r\n                \"latencyRangeStart\", 3000,\r\n                \"latencyRangeEnd\", 3000,\r\n                \"level\", 1\r\n            ),\r\n            Void.class\r\n        );\r\n\r\n        // Wait for assault to activate\r\n        sleep(2000);\r\n\r\n        // During chaos\r\n        long duringAvg = measureAverageLatency(\"/api/orders\", 50);\r\n        System.out.println(\"During chaos avg latency: \" + duringAvg + \"ms\");\r\n\r\n        // Disable assault\r\n        restTemplate.postForEntity(\r\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\r\n            Map.of(\"latencyActive\", false),\r\n            Void.class\r\n        );\r\n\r\n        // Verify recovery\r\n        long afterAvg = measureAverageLatency(\"/api/orders\", 50);\r\n        System.out.println(\"After recovery avg latency: \" + afterAvg + \"ms\");\r\n\r\n        return new ExperimentResult(\"Latency Injection\",\r\n            duringAvg > beforeAvg + 2000, duringAvg, 0,\r\n            \"Baseline: \" + beforeAvg + \"ms → During: \" + duringAvg + \"ms → Recovery: \" + afterAvg + \"ms\");\r\n    }\r\n\r\n    // Experiment 2: Inject exceptions\r\n    public ExperimentResult testExceptionInjection() {\r\n        System.out.println(\"=== Experiment: Inject exceptions into POST /api/orders ===\");\r\n\r\n        // Baseline\r\n        double beforeErrors = measureErrorRate(\"/api/orders\", \"POST\", 50);\r\n        System.out.println(\"Baseline error rate: \" + (beforeErrors * 100) + \"%\");\r\n\r\n        // Enable exception assault\r\n        restTemplate.postForEntity(\r\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\r\n            Map.of(\r\n                \"exceptionsActive\", true,\r\n                \"level\", 5,  // High probability\r\n                \"watchedCustomServices\", List.of(\"com.example.demo.service.OrderService\")\r\n            ),\r\n            Void.class\r\n        );\r\n\r\n        sleep(1000);\r\n\r\n        // During chaos\r\n        double duringErrors = measureErrorRate(\"/api/orders\", \"POST\", 100);\r\n        System.out.println(\"During chaos error rate: \" + (duringErrors * 100) + \"%\");\r\n\r\n        // Disable\r\n        restTemplate.postForEntity(\r\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\r\n            Map.of(\"exceptionsActive\", false),\r\n            Void.class\r\n        );\r\n\r\n        return new ExperimentResult(\"Exception Injection\",\r\n            duringErrors > beforeErrors, 0, duringErrors,\r\n            \"Error rate: \" + (beforeErrors * 100) + \"% → \" + (duringErrors * 100) + \"%\");\r\n    }\r\n\r\n    // Experiment 3: Kill application (test graceful shutdown + restart)\r\n    public ExperimentResult testKillApplication() {\r\n        System.out.println(\"=== Experiment: Kill application ===\");\r\n\r\n        // Enable kill\r\n        restTemplate.postForEntity(\r\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\r\n            Map.of(\"killApplicationActive\", true),\r\n            Void.class\r\n        );\r\n\r\n        sleep(5000);\r\n\r\n        // Application should have been killed\r\n        try {\r\n            restTemplate.getForEntity(baseUrl + \"/actuator/health\", String.class);\r\n            return new ExperimentResult(\"Kill Application\", false, 0, 0,\r\n                \"Application did not die — kill failed\");\r\n        } catch (Exception e) {\r\n            return new ExperimentResult(\"Kill Application\", true, 0, 1.0,\r\n                \"Application died as expected\");\r\n        }\r\n    }\r\n\r\n    private long measureAverageLatency(String path, int samples) {\r\n        long total = 0;\r\n        int success = 0;\r\n        for (int i = 0; i < samples; i++) {\r\n            try {\r\n                long start = System.currentTimeMillis();\r\n                restTemplate.getForEntity(baseUrl + path, String.class);\r\n                total += System.currentTimeMillis() - start;\r\n                success++;\r\n            } catch (Exception e) {\r\n                // Ignore — we're measuring latency, error handling is separate\r\n            }\r\n        }\r\n        return success > 0 ? total / success : -1;\r\n    }\r\n\r\n    private double measureErrorRate(String path, String method, int samples) {\r\n        int errors = 0;\r\n        for (int i = 0; i < samples; i++) {\r\n            try {\r\n                if (\"POST\".equals(method)) {\r\n                    restTemplate.postForEntity(baseUrl + path,\r\n                        Map.of(\"productId\", \"test\", \"quantity\", 1), String.class);\r\n                } else {\r\n                    restTemplate.getForEntity(baseUrl + path, String.class);\r\n                }\r\n            } catch (Exception e) {\r\n                errors++;\r\n            }\r\n        }\r\n        return (double) errors / samples;\r\n    }\r\n\r\n    private void sleep(long ms) {\r\n        try { Thread.sleep(ms); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\r\n    }\r\n\r\n    public static void main(String[] args) {\r\n        ChaosExperiment experiment = new ChaosExperiment();\r\n\r\n        var latencyResult = experiment.testLatencyInjection();\r\n        System.out.println(latencyResult);\r\n\r\n        var exceptionResult = experiment.testExceptionInjection();\r\n        System.out.println(exceptionResult);\r\n\r\n        // Don't run kill in automated tests unless you have a restart mechanism\r\n        // var killResult = experiment.testKillApplication();\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-chaos-monkey-configuration-for-different-assault-types",
      children: "7.3 Chaos Monkey Configuration for Different Assault Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ChaosMonkeyConfig.java — programmatic configuration\r\nimport de.codecentric.spring.boot.chaos.monkey.configuration.AssaultProperties;\r\nimport de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeySettings;\r\nimport de.codecentric.spring.boot.chaos.monkey.configuration.WatcherProperties;\r\nimport org.springframework.context.annotation.Bean;\r\nimport org.springframework.context.annotation.Configuration;\r\nimport org.springframework.context.annotation.Profile;\r\n\r\n@Configuration\r\n@Profile(\"chaos-test\")\r\npublic class ChaosMonkeyConfig {\r\n\r\n    @Bean\r\n    public ChaosMonkeySettings chaosMonkeySettings() {\r\n        var assaultProperties = new AssaultProperties();\r\n        assaultProperties.setLevel(3);\r\n        assaultProperties.setLatencyRangeStart(2000);\r\n        assaultProperties.setLatencyRangeEnd(8000);\r\n        assaultProperties.setLatencyActive(true);\r\n        assaultProperties.setExceptionsActive(true);\r\n        assaultProperties.setKillApplicationActive(false);\r\n        assaultProperties.setMemoryActive(true);\r\n        assaultProperties.setMemoryMillisecondsHold(5000);\r\n        assaultProperties.setRuntimeAssaultCronExpression(\"OFF\");\r\n\r\n        var watcherProperties = new WatcherProperties();\r\n        watcherProperties.setController(true);\r\n        watcherProperties.setRestController(true);\r\n        watcherProperties.setService(true);\r\n        watcherProperties.setRepository(true);\r\n\r\n        var settings = new ChaosMonkeySettings();\r\n        settings.setChaosMonkeyProperties(\r\n            new de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeyProperties());\r\n        settings.getChaosMonkeyProperties().setEnabled(true);\r\n        settings.setAssaultProperties(assaultProperties);\r\n        settings.setWatcherProperties(watcherProperties);\r\n\r\n        return settings;\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-chaos-experiment-framework--automated-resilience-tests",
      children: "7.4 Chaos Experiment Framework — Automated Resilience Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// AbstractChaosTest.java — base class for resilience tests\r\nimport org.junit.jupiter.api.TestInstance;\r\nimport org.springframework.beans.factory.annotation.Autowired;\r\nimport org.springframework.boot.test.context.SpringBootTest;\r\nimport org.springframework.boot.test.web.client.TestRestTemplate;\r\nimport org.springframework.http.ResponseEntity;\r\nimport org.springframework.test.context.ActiveProfiles;\r\n\r\nimport java.time.Duration;\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\nimport java.util.concurrent.Callable;\r\nimport java.util.concurrent.Executors;\r\nimport java.util.concurrent.TimeUnit;\r\n\r\nimport static org.assertj.core.api.Assertions.assertThat;\r\n\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\n@ActiveProfiles(\"chaos-test\")\r\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\r\npublic abstract class AbstractChaosTest {\r\n\r\n    @Autowired\r\n    protected TestRestTemplate restTemplate;\r\n\r\n    @Autowired\r\n    private ResilienceProperties resilienceProperties;\r\n\r\n    protected record ResilienceAssertion(\r\n        String endpoint,\r\n        int expectedMaxLatencyMs,\r\n        double expectedMinSuccessRate,\r\n        int concurrentCalls,\r\n        Duration testDuration\r\n    ) {}\r\n\r\n    protected void assertEndpointResilient(ResilienceAssertion assertion) {\r\n        var executor = Executors.newFixedThreadPool(assertion.concurrentCalls());\r\n        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\r\n        var startTime = System.currentTimeMillis();\r\n\r\n        // Submit concurrent requests\r\n        for (int i = 0; i < assertion.concurrentCalls(); i++) {\r\n            futures.add(executor.submit(() ->\r\n                restTemplate.getForEntity(assertion.endpoint(), String.class)));\r\n        }\r\n\r\n        executor.shutdown();\r\n        try {\r\n            boolean completed = executor.awaitTermination(\r\n                assertion.testDuration().toSeconds(), TimeUnit.SECONDS);\r\n            assertThat(completed).as(\"All requests completed within timeout\").isTrue();\r\n        } catch (InterruptedException e) {\r\n            Thread.currentThread().interrupt();\r\n        }\r\n\r\n        // Analyze results\r\n        int successCount = 0;\r\n        int failureCount = 0;\r\n        long totalLatency = 0;\r\n        long maxLatency = 0;\r\n        List<Long> latencies = new ArrayList<>();\r\n\r\n        for (var future : futures) {\r\n            try {\r\n                long start = System.nanoTime();\r\n                var response = future.get();\r\n                long latency = Duration.ofNanos(System.nanoTime() - start).toMillis();\r\n\r\n                if (response.getStatusCode().is2xxSuccessful()) {\r\n                    successCount++;\r\n                    totalLatency += latency;\r\n                    latencies.add(latency);\r\n                    maxLatency = Math.max(maxLatency, latency);\r\n                } else {\r\n                    failureCount++;\r\n                }\r\n            } catch (Exception e) {\r\n                failureCount++;\r\n            }\r\n        }\r\n\r\n        double successRate = (double) successCount / assertion.concurrentCalls();\r\n        double avgLatency = successCount > 0 ? (double) totalLatency / successCount : 0;\r\n\r\n        // Sort for percentile calculation\r\n        java.util.Collections.sort(latencies);\r\n        int p95Index = (int) (latencies.size() * 0.95);\r\n        long p95Latency = p95Index < latencies.size() ? latencies.get(p95Index) : 0;\r\n\r\n        System.out.printf(\"\"\"\r\n            \r\n            === Resilience Test Results for %s ===\r\n            Total calls:     %d\r\n            Success:         %d (%.1f%%)\r\n            Failures:        %d (%.1f%%)\r\n            Avg latency:     %.0f ms\r\n            Max latency:     %d ms\r\n            p95 latency:     %d ms\r\n            Thresholds:      maxLatency=%dms, minSuccess=%.0f%%\r\n            %n\"\"\",\r\n            assertion.endpoint(),\r\n            assertion.concurrentCalls(),\r\n            successCount, successRate * 100,\r\n            failureCount, (1 - successRate) * 100,\r\n            avgLatency, maxLatency, p95Latency,\r\n            assertion.expectedMaxLatencyMs(),\r\n            assertion.expectedMinSuccessRate() * 100);\r\n\r\n        // Assert against thresholds\r\n        assertThat(successRate)\r\n            .as(\"Success rate %.1f%% >= %.1f%%\", successRate * 100,\r\n                assertion.expectedMinSuccessRate() * 100)\r\n            .isGreaterThanOrEqualTo(assertion.expectedMinSuccessRate());\r\n\r\n        assertThat(p95Latency)\r\n            .as(\"p95 latency %dms <= %dms\", p95Latency, assertion.expectedMaxLatencyMs())\r\n            .isLessThanOrEqualTo(assertion.expectedMaxLatencyMs());\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-circuit-breaker-resilience-under-chaos",
      children: "7.5 Circuit Breaker Resilience Under Chaos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ResilienceProperties.java\r\n@ConfigurationProperties(prefix = \"resilience\")\r\n@Component\r\npublic class ResilienceProperties {\r\n    private int maxLatencyMs = 5000;\r\n    private double minSuccessRate = 0.95;\r\n    private int concurrentCalls = 50;\r\n    private Duration testDuration = Duration.ofSeconds(30);\r\n\r\n    // Getters and setters\r\n}\r\n\r\n// application-chaos.yml\r\n/*\r\nresilience:\r\n  max-latency-ms: 5000\r\n  min-success-rate: 0.95\r\n  concurrent-calls: 100\r\n  test-duration: 60s\r\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// OrderServiceResilienceTest.java\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\n@ActiveProfiles(\"chaos-test\")\r\nclass OrderServiceResilienceTest extends AbstractChaosTest {\r\n\r\n    @Autowired\r\n    private OrderService orderService;\r\n\r\n    @Test\r\n    void testGetOrderEndpointUnderLatencyChaos() {\r\n        assertEndpointResilient(new ResilienceAssertion(\r\n            \"/api/orders?page=0&size=20\",\r\n            5000,     // max 5s p95 latency under chaos\r\n            0.90,     // 90% success rate minimum\r\n            50,       // 50 concurrent users\r\n            Duration.ofSeconds(30)\r\n        ));\r\n    }\r\n\r\n    @Test\r\n    void testCreateOrderWithExceptionAssault() {\r\n        // The exception assault will randomly throw exceptions\r\n        // Our service must handle them gracefully (circuit breaker, retry, fallback)\r\n\r\n        var executor = Executors.newFixedThreadPool(20);\r\n        var results = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\r\n\r\n        for (int i = 0; i < 100; i++) {\r\n            String productId = \"prod-\" + i;\r\n            results.add(executor.submit(() ->\r\n                restTemplate.postForEntity(\r\n                    \"/api/orders\",\r\n                    Map.of(\"productId\", productId, \"quantity\", 1),\r\n                    String.class\r\n                )\r\n            ));\r\n        }\r\n\r\n        executor.shutdown();\r\n\r\n        long successCount = results.stream()\r\n            .filter(f -> {\r\n                try { return f.get().getStatusCode().is2xxSuccessful(); }\r\n                catch (Exception e) { return false; }\r\n            })\r\n            .count();\r\n\r\n        double successRate = (double) successCount / results.size();\r\n        System.out.println(\"Order creation success rate under chaos: \" +\r\n            (successRate * 100) + \"%\");\r\n\r\n        // With circuit breaker, we expect some failures but not total outage\r\n        assertThat(successRate).isGreaterThan(0.50);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-graceful-degradation-patterns",
      children: "7.6 Graceful Degradation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Fallback methods to handle chaos monkey-induced failures\r\n@Service\r\npublic class ResilientOrderService {\r\n\r\n    private final OrderRepository orderRepository;\r\n    private final PaymentClient paymentClient;\r\n\r\n    public ResilientOrderService(OrderRepository orderRepository,\r\n                                  PaymentClient paymentClient) {\r\n        this.orderRepository = orderRepository;\r\n        this.paymentClient = paymentClient;\r\n    }\r\n\r\n    @CircuitBreaker(name = \"orderService\", fallbackMethod = \"createOrderFallback\")\r\n    @Retry(name = \"orderService\", fallbackMethod = \"createOrderFallback\")\r\n    public Order createOrder(String customerEmail, BigDecimal total) {\r\n        // May fail with latency or exceptions during chaos\r\n        Order order = new Order(customerEmail, total);\r\n        order = orderRepository.save(order);\r\n\r\n        PaymentResult payment = paymentClient.processPayment(order);\r\n        if (!payment.success()) {\r\n            throw new PaymentFailedException(\"Payment declined\");\r\n        }\r\n\r\n        order.setStatus(OrderStatus.CONFIRMED);\r\n        return orderRepository.save(order);\r\n    }\r\n\r\n    public Order createOrderFallback(String customerEmail, BigDecimal total, Throwable t) {\r\n        System.out.println(\"Fallback: creating pending order due to: \" + t.getMessage());\r\n        Order order = new Order(customerEmail, total);\r\n        order.setStatus(OrderStatus.PENDING);\r\n        return orderRepository.save(order);\r\n    }\r\n\r\n    @TimeLimiter(name = \"orderService\")\r\n    public CompletableFuture<Order> createOrderAsync(String email, BigDecimal total) {\r\n        return CompletableFuture.supplyAsync(() -> createOrder(email, total));\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-load-testing-with-simulated-chaos",
      children: "7.7 Load Testing with Simulated Chaos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Combined stress + chaos test\r\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\r\n@ActiveProfiles({\"load-test\", \"chaos-test\"})\r\nclass StressAndChaosTest {\r\n\r\n    @Autowired\r\n    private TestRestTemplate restTemplate;\r\n\r\n    @Test\r\n    void testSystemUnderCombinedStressAndChaos() {\r\n        // Step 1: Warm up\r\n        System.out.println(\"=== Phase 1: Warm up ===\");\r\n        for (int i = 0; i < 100; i++) {\r\n            restTemplate.getForEntity(\"/api/health\", String.class);\r\n        }\r\n\r\n        // Step 2: Enable Chaos Monkey — latency injection\r\n        System.out.println(\"=== Phase 2: Enable latency chaos ===\");\r\n        restTemplate.postForEntity(\r\n            \"http://localhost:8080/actuator/chaosmonkey/assaults\",\r\n            Map.of(\"latencyActive\", true,\r\n                   \"latencyRangeStart\", 100,\r\n                   \"latencyRangeEnd\", 2000,\r\n                   \"level\", 3),\r\n            Void.class\r\n        );\r\n\r\n        // Step 3: Ramp up load\r\n        System.out.println(\"=== Phase 3: Ramp up load under chaos ===\");\r\n        var executor = Executors.newFixedThreadPool(50);\r\n        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\r\n\r\n        for (int i = 0; i < 500; i++) {\r\n            futures.add(executor.submit(() ->\r\n                restTemplate.getForEntity(\"/api/orders?page=0&size=20\", String.class)));\r\n        }\r\n\r\n        executor.shutdown();\r\n        try {\r\n            executor.awaitTermination(30, TimeUnit.SECONDS);\r\n        } catch (InterruptedException e) {\r\n            Thread.currentThread().interrupt();\r\n        }\r\n\r\n        // Step 4: Analyze results\r\n        long successCount = futures.stream()\r\n            .filter(f -> {\r\n                try { return f.get().getStatusCode().is2xxSuccessful(); }\r\n                catch (Exception e) { return false; }\r\n            })\r\n            .count();\r\n\r\n        long failureCount = futures.size() - successCount;\r\n        double successRate = (double) successCount / futures.size();\r\n\r\n        System.out.printf(\"\"\"\r\n            \r\n            === Stress + Chaos Results ===\r\n            Total requests: %d\r\n            Successful:     %d\r\n            Failed:         %d\r\n            Success rate:   %.1f%%\r\n            %n\"\"\",\r\n            futures.size(), successCount, failureCount, successRate * 100);\r\n\r\n        // Step 5: Clean up — disable chaos monkey\r\n        restTemplate.postForEntity(\r\n            \"http://localhost:8080/actuator/chaosmonkey/assaults\",\r\n            Map.of(\"latencyActive\", false, \"exceptionsActive\", false),\r\n            Void.class\r\n        );\r\n\r\n        // Step 6: Verify recovery\r\n        ResponseEntity<String> healthCheck = restTemplate.getForEntity(\"/api/health\", String.class);\r\n        assertThat(healthCheck.getStatusCode().is2xxSuccessful()).isTrue();\r\n\r\n        // Assert that system survives\r\n        assertThat(successRate).isGreaterThan(0.80);\r\n    }\r\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Security testing annotations"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockUser"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithAnonymousUser"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithUserDetails"
        }), ") simulate authenticated requests without actual authentication. They populate the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityContext"
        }), " before each test method."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Custom security annotations"
        }), " like ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockJwt"
        }), " use ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithSecurityContext"
        }), " with a ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityContextFactory"
        }), " to create arbitrary ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Authentication"
        }), " objects — essential for JWT and OAuth2 resource server tests."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Method security testing"
        }), " verifies ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PreAuthorize"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@PostAuthorize"
        }), ", and expression-based access control. Test each role and permission combination."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CORS testing"
        }), " validates ", (0,jsx_runtime.jsx)(_components.code, {
          children: "Access-Control-Allow-Origin"
        }), " headers from allowed and blocked origins."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CSRF test configuration"
        }), " uses ", (0,jsx_runtime.jsx)(_components.code, {
          children: "SecurityMockMvcRequestPostProcessors.csrf()"
        }), " to include tokens, or disables CSRF for non-state-changing endpoints."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OAuth2 test support"
        }), " (", (0,jsx_runtime.jsx)(_components.code, {
          children: "@WithMockOAuth2Client"
        }), ", mocked ", (0,jsx_runtime.jsx)(_components.code, {
          children: "JwtDecoder"
        }), ") tests OAuth2 client and resource server configurations without a real authorization server."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "JMeter"
        }), " provides GUI-based test plan creation with thread groups, samplers, assertions, and listeners. Best for teams that prefer visual test design."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gatling"
        }), " offers code-first simulations in Scala with rich HTML reports, feeders, checks, and sophisticated injection profiles. Best for developer-driven CI pipelines."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Load testing Spring Boot"
        }), " involves profiling endpoints under load, monitoring connection pools (HikariCP), measuring query performance with Micrometer ", (0,jsx_runtime.jsx)(_components.code, {
          children: "@Timed"
        }), ", and tracking latency percentiles."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stress testing"
        }), " includes ramp-up (gradual load increase), spike (sudden traffic bursts), and soak (sustained load over hours) patterns — each finding different failure modes."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Resource monitoring"
        }), " during load tests tracks heap memory, thread counts, CPU load, and database connection pool utilization via Actuator and Micrometer metrics."]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chaos testing"
        }), " with Chaos Monkey for Spring Boot injects latency, exceptions, and application shutdown in controlled experiments. Combined with Resilience4j circuit breakers and fallbacks, it validates system resilience under real-world failure conditions."]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "exercises",
      children: "Exercises"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@WithMockUser Basics:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WebMvcTest"
          }), " for a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "UserController"
          }), " with endpoints ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/users/me"
          }), " (requires authentication) and ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/admin/users"
          }), " (requires ADMIN role). Write tests using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WithMockUser"
          }), " with default values, custom username, custom roles, and custom authorities. Verify that unauthenticated requests receive 401 and users without ADMIN role receive 403."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Custom @WithMockJwt:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WithMockJwt"
          }), " annotation as shown in this chapter. Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DocumentController"
          }), " that extracts claims from the JWT and returns user-specific data. Write tests that verify: valid JWT returns data, expired JWT returns 401, missing required scope returns 403."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "@WithUserDetails vs @WithMockUser:"
          }), " Create a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "CustomUserDetailsService"
          }), " that loads users with roles from a database. Write two versions of the same test: one using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WithUserDetails(\"alice@example.com\")"
          }), " and one using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WithMockUser(username = \"alice\", roles = {\"USER\"})"
          }), ". Explain the difference and when each is appropriate."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Method Security Testing:"
          }), " Implement a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "DocumentService"
          }), " with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@PreAuthorize"
          }), " on methods that requires: ", (0,jsx_runtime.jsx)(_components.code, {
            children: "isAuthenticated()"
          }), " for viewing, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "hasRole('EDITOR')"
          }), " for editing, ", (0,jsx_runtime.jsx)(_components.code, {
            children: "#owner == authentication.name"
          }), " for deleting. Write a full test class using ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@SpringBootTest"
          }), " that tests all method-level security rules with both success and failure cases."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "CORS Testing:"
          }), " Configure CORS to allow ", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://app.example.com"
          }), " with methods GET, POST, PUT. Write ", (0,jsx_runtime.jsx)(_components.code, {
            children: "MockMvc"
          }), " tests that verify: preflight OPTIONS returns correct headers, GET from allowed origin succeeds, requests from blocked origin do not include CORS headers, requests with disallowed methods are rejected."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "OAuth2 Resource Server:"
          }), " Set up a Spring Boot resource server that validates JWT tokens. Mock the ", (0,jsx_runtime.jsx)(_components.code, {
            children: "JwtDecoder"
          }), " and write tests that: pass a valid JWT in the Authorization header, pass an expired JWT, pass a JWT with missing scopes, and omit the token entirely. Use ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@WithMockJwt"
          }), " as an alternative approach and compare the two methods."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "JMeter Test Plan:"
          }), " Create a JMeter test plan (programmatically or via GUI) that tests a Spring Boot API with: 100 concurrent users, ramp-up over 30 seconds, loop count of 10, GET and POST samplers, JSON response assertion, duration assertion (max 2s), and an aggregate report listener. Save the plan as a .jmx file."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Gatling Simulation:"
          }), " Write a Gatling simulation that tests the order management API. Include: a CSV feeder for test data, a scenario for browsing orders (GET), a scenario for creating orders (POST), a scenario for admin operations (GET admin endpoints), injection profile with ramp-up and constant load, assertions for p95 < 2s and success rate > 99%. Run it with ", (0,jsx_runtime.jsx)(_components.code, {
            children: "mvn gatling:test"
          }), "."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Latency Percentiles:"
          }), " Configure Micrometer to capture HTTP request latency percentiles (p50, p75, p90, p95, p99, p999). Write a load test that generates traffic and verify the percentiles appear in Prometheus format. Set SLO targets for each percentile and fail the test if any percentile exceeds its target."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Soak Test:"
          }), " Design a soak test that runs for 2 hours with 50 constant users. Monitor JVM heap, thread count, and database connection pool metrics every 30 seconds. Log a warning if heap exceeds 80% or active connections exceed 90% of pool. Write assertions that verify no memory leak (heap stabilizes after warmup)."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Chaos Monkey Setup:"
          }), " Configure Chaos Monkey for a Spring Boot application. Enable latency assault (1-3s), exception assault (level 3), and controller/service watchers. Write an integration test that: enables chaos monkey, sends 200 requests to an endpoint, measures the impact, disables chaos monkey, verifies recovery."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Circuit Breaker + Chaos:"
          }), " Add ", (0,jsx_runtime.jsx)(_components.code, {
            children: "@CircuitBreaker"
          }), " with a fallback method to a service. Run a chaos experiment where Chaos Monkey injects exceptions into that service. Assert that the circuit breaker opens after 5 failures and the fallback method is invoked. Verify the circuit recovers to half-open and then closed state."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Stress Test Thresholds:"
          }), " Define threshold constants (p95 < 2s, p99 < 5s, error rate < 1%, throughput > 100 rps). Write a Gatling simulation that includes these assertions. Run the simulation and force a threshold violation by increasing the load. Capture the assertion failure report."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Spike Test:"
          }), " Write a spike simulation that sends 1000 concurrent users to a ", (0,jsx_runtime.jsx)(_components.code, {
            children: "/api/search"
          }), " endpoint within 2 seconds. Measure: success rate during the spike, recovery time after the spike, max latency during the spike, and whether the endpoint returns to baseline performance within 30 seconds."]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Combined Security + Performance Test:"
          }), " Create an API endpoint that requires JWT authentication and performs a database query. Write a Gatling simulation that: authenticates users via OAuth2 (or mocked JWT), ramps up to 200 users/sec, measures authenticated endpoint performance under load, and asserts that p95 latency stays under 1s even under maximum load. Include Chaos Monkey to inject latency into the database layer and verify circuit breakers protect the endpoint."]
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