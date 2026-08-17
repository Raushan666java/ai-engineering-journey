"use strict";
(globalThis["webpackChunksite"] = globalThis["webpackChunksite"] || []).push([[49123],{

/***/ 58522
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
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
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-mermaid",
        children: "flowchart TD\n    A[Security and Performance Testing] --> B[Security Testing]\n    A --> C[Performance Testing]\n    A --> D[Load Testing]\n    B --> B1[@WithMockUser]\n    B --> B2[@WithAnonymousUser]\n    B --> B3[Security test annotations]\n    C --> C1[JMH benchmarks]\n    C --> C2[JVM profiling]\n    D --> D1[Gatling scenarios]\n    D --> D2[Report analysis]\n"
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
        children: "import org.springframework.security.test.context.support.WithMockUser;\nimport org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.test.web.servlet.MockMvc;\nimport org.junit.jupiter.api.Test;\n\nimport static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;\nimport static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;\n\n@WebMvcTest(UserController.class)\nclass SecurityAnnotationTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithMockUser  // Default: username=\"user\", roles={\"USER\"}, password=\"password\"\n    void testAuthenticatedUserCanAccess() throws Exception {\n        mockMvc.perform(get(\"/api/users/me\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockUser(username = \"admin\", roles = {\"ADMIN\"})\n    void testAdminAccess() throws Exception {\n        mockMvc.perform(get(\"/api/admin/users\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockUser(username = \"admin\", authorities = {\"ROLE_ADMIN\", \"SCOPE_read\"})\n    void testWithAuthorities() throws Exception {\n        mockMvc.perform(get(\"/api/admin/users\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test  // No @WithMockUser — unauthenticated\n    void testUnauthenticatedAccess() throws Exception {\n        mockMvc.perform(get(\"/api/users/me\"))\n            .andExpect(status().isUnauthorized());\n    }\n}\n"
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
        children: "import org.springframework.security.test.context.support.WithAnonymousUser;\n\n@WebMvcTest(PublicController.class)\nclass AnonymousTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithAnonymousUser\n    void testPublicEndpointWithAnonymous() throws Exception {\n        mockMvc.perform(get(\"/api/public/info\"))\n            .andExpect(status().isOk())\n            .andExpect(content().string(\"Public information\"));\n    }\n\n    @Test\n    @WithAnonymousUser\n    void testAnonymousCannotAccessSecured() throws Exception {\n        mockMvc.perform(get(\"/api/users/me\"))\n            .andExpect(status().isForbidden());\n    }\n}\n"
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
        children: "import org.springframework.security.test.context.support.WithUserDetails;\n\n@WebMvcTest(UserController.class)\nclass UserDetailsTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithUserDetails(\"alice@example.com\")  // Username passed to UserDetailsService.loadUserByUsername()\n    void testLoadRealUser() throws Exception {\n        mockMvc.perform(get(\"/api/users/me\"))\n            .andExpect(status().isOk())\n            .andExpect(jsonPath(\"$.email\").value(\"alice@example.com\"));\n    }\n\n    @Test\n    @WithUserDetails(value = \"admin@example.com\", userDetailsServiceBeanName = \"customUserDetailsService\")\n    void testWithCustomUserDetailsService() throws Exception {\n        mockMvc.perform(get(\"/api/admin/users\"))\n            .andExpect(status().isOk());\n    }\n}\n"
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
        children: "// Custom annotation definition\nimport org.springframework.security.test.context.support.WithSecurityContext;\n\nimport java.lang.annotation.Retention;\nimport java.lang.annotation.RetentionPolicy;\n\n@Retention(RetentionPolicy.RUNTIME)\n@WithSecurityContext(factory = WithMockJwtSecurityContextFactory.class)\npublic @interface WithMockJwt {\n\n    String subject() default \"user\";\n    String email() default \"user@example.com\";\n    String[] roles() default {};\n    String[] scopes() default {};\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Security context factory\nimport org.springframework.security.core.authority.SimpleGrantedAuthority;\nimport org.springframework.security.oauth2.jwt.Jwt;\nimport org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;\nimport org.springframework.security.core.context.SecurityContext;\nimport org.springframework.security.core.context.SecurityContextHolder;\nimport org.springframework.security.test.context.support.WithSecurityContextFactory;\n\nimport java.time.Instant;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.stream.Stream;\n\npublic class WithMockJwtSecurityContextFactory\n        implements WithSecurityContextFactory<WithMockJwt> {\n\n    @Override\n    public SecurityContext createSecurityContext(WithMockJwt annotation) {\n        var jwt = Jwt.withTokenValue(\"mock-token\")\n            .header(\"alg\", \"RS256\")\n            .header(\"typ\", \"JWT\")\n            .subject(annotation.subject())\n            .claim(\"email\", annotation.email())\n            .claim(\"scope\", String.join(\" \", annotation.scopes()))\n            .issuedAt(Instant.now())\n            .expiresAt(Instant.now().plusSeconds(3600))\n            .build();\n\n        var authorities = Stream.concat(\n            Stream.of(annotation.roles()).map(r -> \"ROLE_\" + r),\n            Stream.of(annotation.scopes()).map(s -> \"SCOPE_\" + s)\n        ).map(SimpleGrantedAuthority::new).toList();\n\n        var token = new JwtAuthenticationToken(jwt, authorities, annotation.subject());\n\n        SecurityContext context = SecurityContextHolder.createEmptyContext();\n        context.setAuthentication(token);\n        return context;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Using the custom annotation\n@RestController\n@RequestMapping(\"/api/orders\")\npublic class OrderController {\n\n    @GetMapping\n    public List<String> getOrders(@AuthenticationPrincipal JwtAuthenticationToken token) {\n        String userId = token.getToken().getSubject();\n        return List.of(\"order-1\", \"order-2\");\n    }\n\n    @PreAuthorize(\"hasAuthority('SCOPE_admin')\")\n    @PostMapping\n    public String createOrder() {\n        return \"order-created\";\n    }\n}\n\n// Test\n@WebMvcTest(OrderController.class)\nclass OrderControllerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithMockJwt(subject = \"user123\", scopes = {\"read\"})\n    void testGetOrders() throws Exception {\n        mockMvc.perform(get(\"/api/orders\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockJwt(subject = \"admin\", roles = {\"ADMIN\"}, scopes = {\"admin\"})\n    void testCreateOrderWithAdmin() throws Exception {\n        mockMvc.perform(post(\"/api/orders\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockJwt(subject = \"user\", scopes = {\"read\"})\n    void testCreateOrderWithoutAdminScope_ShouldReturnForbidden() throws Exception {\n        mockMvc.perform(post(\"/api/orders\"))\n            .andExpect(status().isForbidden());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "15-testing-method-security",
      children: "1.5 Testing Method Security"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.security.access.prepost.PreAuthorize;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class DocumentService {\n\n    @PreAuthorize(\"isAuthenticated()\")\n    public String getPublicDocument(Long id) {\n        return \"public-doc-\" + id;\n    }\n\n    @PreAuthorize(\"hasRole('ADMIN')\")\n    public String getAdminDocument(Long id) {\n        return \"admin-doc-\" + id;\n    }\n\n    @PreAuthorize(\"#owner == authentication.name\")\n    public String getOwnedDocument(Long id, String owner) {\n        return \"owned-doc-\" + id;\n    }\n\n    @PreAuthorize(\"hasRole('ADMIN') or hasPermission(#id, 'com.example.Document', 'read')\")\n    public String getPermissionBasedDocument(Long id) {\n        return \"permission-doc-\" + id;\n    }\n\n    @PostAuthorize(\"returnObject.owner == authentication.name\")\n    public Document getDocumentWithOwnerCheck(Long id) {\n        return new Document(id, \"content\", \"alice\");\n    }\n\n    record Document(Long id, String content, String owner) {}\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@SpringBootTest\nclass MethodSecurityTest {\n\n    @Autowired\n    private DocumentService documentService;\n\n    @Test\n    @WithMockUser\n    void testAuthenticatedCanAccess() {\n        String result = documentService.getPublicDocument(1L);\n        assertEquals(\"public-doc-1\", result);\n    }\n\n    @Test\n    @WithMockUser(roles = {\"USER\"})\n    void testUserCannotAccessAdmin() {\n        assertThrows(AccessDeniedException.class, () ->\n            documentService.getAdminDocument(1L));\n    }\n\n    @Test\n    @WithMockUser(roles = {\"ADMIN\"})\n    void testAdminCanAccessAdmin() {\n        String result = documentService.getAdminDocument(1L);\n        assertEquals(\"admin-doc-1\", result);\n    }\n\n    @Test\n    @WithMockUser(username = \"alice\")\n    void testOwnedDocumentByOwner() {\n        String result = documentService.getOwnedDocument(1L, \"alice\");\n        assertEquals(\"owned-doc-1\", result);\n    }\n\n    @Test\n    @WithMockUser(username = \"bob\")\n    void testOwnedDocumentByNonOwner_ShouldDeny() {\n        assertThrows(AccessDeniedException.class, () ->\n            documentService.getOwnedDocument(1L, \"alice\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "16-testing-cors",
      children: "1.6 Testing CORS"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.CorsRegistry;\nimport org.springframework.web.servlet.config.annotation.WebMvcConfigurer;\n\n@Configuration\nclass CorsConfig implements WebMvcConfigurer {\n\n    @Override\n    public void addCorsMappings(CorsRegistry registry) {\n        registry.addMapping(\"/api/**\")\n            .allowedOrigins(\"https://trusted-frontend.com\")\n            .allowedMethods(\"GET\", \"POST\", \"PUT\", \"DELETE\")\n            .allowedHeaders(\"*\")\n            .allowCredentials(true)\n            .maxAge(3600);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "@WebMvcTest(CorsController.class)\n@AutoConfigureMockMvc\nclass CorsTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithMockUser\n    void testCorsAllowedOrigin() throws Exception {\n        mockMvc.perform(options(\"/api/orders\")\n                .header(\"Origin\", \"https://trusted-frontend.com\")\n                .header(\"Access-Control-Request-Method\", \"POST\"))\n            .andExpect(status().isOk())\n            .andExpect(header().string(\"Access-Control-Allow-Origin\",\n                \"https://trusted-frontend.com\"))\n            .andExpect(header().exists(\"Access-Control-Allow-Methods\"));\n    }\n\n    @Test\n    @WithMockUser\n    void testCorsBlockedOrigin() throws Exception {\n        mockMvc.perform(get(\"/api/orders\")\n                .header(\"Origin\", \"https://malicious-site.com\"))\n            .andExpect(header().doesNotExist(\"Access-Control-Allow-Origin\"));\n    }\n\n    @Test\n    @WithMockUser\n    void testCorsBlockedMethod() throws Exception {\n        mockMvc.perform(options(\"/api/orders\")\n                .header(\"Origin\", \"https://trusted-frontend.com\")\n                .header(\"Access-Control-Request-Method\", \"DELETE\"))\n            .andExpect(status().isOk())\n            .andExpect(header().string(\"Access-Control-Allow-Methods\",\n                \"GET, POST, PUT, DELETE\"));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "17-csrf-test-configuration",
      children: "1.7 CSRF Test Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Spring Security enables CSRF protection by default for state-changing requests. In tests, you must either include the CSRF token or disable CSRF."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;\nimport static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.user;\n\n@WebMvcTest(CsrfController.class)\nclass CsrfTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithMockUser\n    void testPostWithoutCsrf_ShouldReturn403() throws Exception {\n        mockMvc.perform(post(\"/api/items\"))\n            .andExpect(status().isForbidden());  // Missing CSRF token\n    }\n\n    @Test\n    @WithMockUser\n    void testPostWithCsrf_ShouldSucceed() throws Exception {\n        mockMvc.perform(post(\"/api/items\")\n                .with(csrf()))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    void testPutWithCsrf() throws Exception {\n        mockMvc.perform(put(\"/api/items/1\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"\"\"\n                    {\"name\": \"updated-item\"}\n                    \"\"\")\n                .with(csrf())\n                .with(user(\"admin\").roles(\"ADMIN\")))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    void testDeleteWithInvalidCsrf() throws Exception {\n        mockMvc.perform(delete(\"/api/items/1\")\n                .with(csrf().useInvalidToken()))\n            .andExpect(status().isForbidden());\n    }\n}\n\n// Disable CSRF for a specific test class\n@SpringBootTest\n@AutoConfigureMockMvc\nclass DisabledCsrfTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    void testPostWithoutCsrfWhenDisabled() throws Exception {\n        mockMvc.perform(post(\"/api/public/contact\"))\n            .andExpect(status().isOk());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
        children: ["[!TIP]\nCreate custom meta-annotations like ", (0,jsx_runtime.jsx)(_components.code, {
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
        children: "import org.springframework.security.test.context.support.WithMockOAuth2Client;\n\n@WebMvcTest(SocialLoginController.class)\nclass OAuth2ClientTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @Test\n    @WithMockOAuth2Client(\n        clientId = \"google\",\n        clientRegistrationId = \"google\",\n        principalName = \"user@google.com\",\n        scopes = {\"email\", \"profile\"}\n    )\n    void testGoogleOAuth2Login() throws Exception {\n        mockMvc.perform(get(\"/api/social/login/google\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockOAuth2Client(\n        clientId = \"github\",\n        clientRegistrationId = \"github\",\n        principalName = \"github-user-123\",\n        scopes = {\"read:user\"}\n    )\n    void testGithubOAuth2Login() throws Exception {\n        mockMvc.perform(get(\"/api/social/login/github\"))\n            .andExpect(status().isOk());\n    }\n}\n"
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
        children: "import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;\nimport org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;\nimport org.springframework.security.oauth2.client.registration.ClientRegistration;\nimport org.springframework.security.oauth2.core.AuthorizationGrantType;\n\n@SpringBootTest\nclass OAuth2ClientServiceTest {\n\n    @MockBean\n    private OAuth2AuthorizedClientService authorizedClientService;\n\n    @Test\n    @WithMockUser\n    void testAuthorizedClientService() {\n        var registration = ClientRegistration.withRegistrationId(\"google\")\n            .clientId(\"client-id\")\n            .clientSecret(\"client-secret\")\n            .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)\n            .redirectUri(\"{baseUrl}/login/oauth2/code/google\")\n            .scope(\"email\", \"profile\")\n            .authorizationUri(\"https://accounts.google.com/o/oauth2/v2/auth\")\n            .tokenUri(\"https://oauth2.googleapis.com/token\")\n            .clientName(\"Google\")\n            .build();\n\n        var client = new OAuth2AuthorizedClient(registration, \"user\",\n            new OAuth2AccessToken(OAuth2AccessToken.TokenType.BEARER,\n                \"mock-token\", Instant.now(), Instant.now().plusSeconds(300)));\n\n        when(authorizedClientService.loadAuthorizedClient(\"google\", \"user\"))\n            .thenReturn(client);\n\n        var loaded = authorizedClientService.loadAuthorizedClient(\"google\", \"user\");\n        assertNotNull(loaded);\n        assertEquals(\"mock-token\", loaded.getAccessToken().getTokenValue());\n    }\n}\n"
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
        children: "import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.mock.mockito.MockBean;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\n@SpringBootTest\n@AutoConfigureMockMvc\nclass JwtResourceServerTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    @MockBean\n    private JwtDecoder jwtDecoder;\n\n    @Test\n    void testAuthenticatedRequestWithMockedJwt() throws Exception {\n        Jwt jwt = Jwt.withTokenValue(\"mock-token\")\n            .header(\"alg\", \"RS256\")\n            .header(\"typ\", \"JWT\")\n            .subject(\"user123\")\n            .claim(\"scope\", \"openid email read\")\n            .claim(\"email\", \"alice@example.com\")\n            .issuedAt(Instant.now())\n            .expiresAt(Instant.now().plusSeconds(3600))\n            .build();\n\n        when(jwtDecoder.decode(anyString())).thenReturn(jwt);\n\n        mockMvc.perform(get(\"/api/orders\")\n                .header(\"Authorization\", \"Bearer mock-token\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    void testInvalidToken() throws Exception {\n        when(jwtDecoder.decode(anyString()))\n            .thenThrow(new JwtException(\"Invalid token\"));\n\n        mockMvc.perform(get(\"/api/orders\")\n                .header(\"Authorization\", \"Bearer invalid-token\"))\n            .andExpect(status().isUnauthorized());\n    }\n\n    @Test\n    void testMissingToken() throws Exception {\n        mockMvc.perform(get(\"/api/orders\"))\n            .andExpect(status().isUnauthorized());\n    }\n}\n"
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
        children: "@WebMvcTest(OrderController.class)\nclass FullJwtTest {\n\n    @Autowired\n    private MockMvc mockMvc;\n\n    // When using @WithMockJwt, we don't need JwtDecoder — the annotation\n    // populates the SecurityContext directly. But if the controller\n    // or a filter calls JwtDecoder, we still need the mock.\n\n    @MockBean\n    private JwtDecoder jwtDecoder;\n\n    @Test\n    @WithMockJwt(subject = \"alice\", scopes = {\"read\", \"write\"})\n    void testReadScope() throws Exception {\n        mockMvc.perform(get(\"/api/orders\"))\n            .andExpect(status().isOk());\n    }\n\n    @Test\n    @WithMockJwt(subject = \"bob\", scopes = {\"read\"})\n    void testReadScopeOnly_ShouldFailOnWrite() throws Exception {\n        mockMvc.perform(post(\"/api/orders\")\n                .contentType(MediaType.APPLICATION_JSON)\n                .content(\"\"\"\n                    {\"productId\": \"prod-1\", \"quantity\": 1}\n                    \"\"\")\n                .with(csrf()))\n            .andExpect(status().isForbidden());\n    }\n\n    @Test\n    void testNoToken() throws Exception {\n        mockMvc.perform(get(\"/api/orders\"))\n            .andExpect(status().isUnauthorized());\n    }\n\n    @Test\n    void testExpiredToken() throws Exception {\n        Jwt expiredJwt = Jwt.withTokenValue(\"expired\")\n            .header(\"alg\", \"RS256\")\n            .subject(\"alice\")\n            .issuedAt(Instant.now().minusSeconds(7200))\n            .expiresAt(Instant.now().minusSeconds(3600))\n            .build();\n\n        when(jwtDecoder.decode(anyString())).thenThrow(\n            new JwtValidationException(\"Token expired\",\n                List.of(new OAuth2Error(\"expired_token\"))));\n\n        mockMvc.perform(get(\"/api/orders\")\n                .header(\"Authorization\", \"Bearer expired\"))\n            .andExpect(status().isUnauthorized());\n    }\n}\n"
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
        children: "Test Plan\n├── User Defined Variables\n├── HTTP Request Defaults\n├── Thread Group (simulates users)\n│   ├── HTTP Request Sampler (GET /api/orders)\n│   ├── HTTP Header Manager\n│   ├── Assertions (Response Assertion)\n│   └── Listeners (Summary Report, Aggregate Report)\n├── Thread Group (admin users)\n│   └── HTTP Request Sampler (POST /api/orders)\n└── View Results Tree\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-creating-a-jmeter-test-programmatically",
      children: "3.2 Creating a JMeter Test Programmatically"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JMeterTestPlan.java — creates a JMX test plan programmatically\nimport org.apache.jmeter.config.Arguments;\nimport org.apache.jmeter.config.gui.ArgumentsPanel;\nimport org.apache.jmeter.control.LoopController;\nimport org.apache.jmeter.control.gui.LoopControlPanel;\nimport org.apache.jmeter.engine.StandardJMeterEngine;\nimport org.apache.jmeter.protocol.http.control.Header;\nimport org.apache.jmeter.protocol.http.control.HeaderManager;\nimport org.apache.jmeter.protocol.http.sampler.HTTPSampler;\nimport org.apache.jmeter.protocol.http.util.HTTPArgument;\nimport org.apache.jmeter.reporters.ResultCollector;\nimport org.apache.jmeter.reporters.Summariser;\nimport org.apache.jmeter.save.SaveService;\nimport org.apache.jmeter.testelement.TestPlan;\nimport org.apache.jmeter.threads.ThreadGroup;\nimport org.apache.jmeter.util.JMeterUtils;\nimport org.apache.jorphan.collections.HashTree;\nimport java.io.FileOutputStream;\n\npublic class JmeterTestPlanGenerator {\n\n    public static void main(String[] args) throws Exception {\n        // Initialize JMeter\n        JMeterUtils.setJMeterHome(\"C:/tools/apache-jmeter-5.6.3\");\n        JMeterUtils.loadJMeterProperties(\n            \"C:/tools/apache-jmeter-5.6.3/bin/jmeter.properties\");\n        JMeterUtils.initLocale();\n\n        // Create Test Plan\n        TestPlan testPlan = new TestPlan(\"Spring Boot Order API Load Test\");\n        testPlan.setProperty(TestPlan.TEST_COMMENTS,\n            \"Simulates 50 concurrent users placing orders\");\n        testPlan.setUserDefinedVariables(createUserDefinedVariables());\n\n        // Thread Group: 50 users, ramp-up 10s, loop 5 times\n        ThreadGroup threadGroup = createThreadGroup(50, 10, 5);\n\n        // HTTP Request Defaults\n        HTTPSampler defaultSampler = new HTTPSampler();\n        defaultSampler.setName(\"HTTP Request Defaults\");\n        defaultSampler.setDomain(\"localhost\");\n        defaultSampler.setPort(8080);\n        defaultSampler.setProtocol(\"http\");\n        defaultSampler.setPath(\"/api\");\n\n        // GET Orders Sampler\n        HTTPSampler getOrdersSampler = new HTTPSampler();\n        getOrdersSampler.setName(\"GET /api/orders\");\n        getOrdersSampler.setDomain(\"localhost\");\n        getOrdersSampler.setPort(8080);\n        getOrdersSampler.setProtocol(\"http\");\n        getOrdersSampler.setPath(\"/api/orders\");\n        getOrdersSampler.setMethod(\"GET\");\n        getOrdersSampler.addArgument(\"page\", \"0\");\n        getOrdersSampler.addArgument(\"size\", \"20\");\n\n        // POST Order Sampler\n        HTTPSampler createOrderSampler = new HTTPSampler();\n        createOrderSampler.setName(\"POST /api/orders\");\n        createOrderSampler.setDomain(\"localhost\");\n        createOrderSampler.setPort(8080);\n        createOrderSampler.setProtocol(\"http\");\n        createOrderSampler.setPath(\"/api/orders\");\n        createOrderSampler.setMethod(\"POST\");\n        createOrderSampler.addArgument(\"productId\", \"prod-${__Random(1,100)}\");\n        createOrderSampler.addArgument(\"quantity\", \"${__Random(1,5)}\");\n\n        // Header Manager\n        HeaderManager headerManager = new HeaderManager();\n        headerManager.add(new Header(\"Content-Type\", \"application/json\"));\n        headerManager.add(new Header(\"Authorization\", \"Bearer ${__property(jwt.token)}\"));\n\n        // Response Assertion\n        org.apache.jmeter.assertions.ResponseAssertion assertion =\n            new org.apache.jmeter.assertions.ResponseAssertion();\n        assertion.setName(\"Assert Status 200\");\n        assertion.setTestFieldResponseCode();\n        assertion.addTestString(\"200\");\n        assertion.setAssumeSuccess(false);\n\n        // Loop Controller\n        LoopController loopController = new LoopController();\n        loopController.setLoops(5);\n        loopController.setContinueForever(false);\n\n        // Build test tree\n        HashTree testPlanTree = new HashTree();\n        HashTree threadGroupHashTree = testPlanTree.add(testPlan);\n        HashTree threadGroupTree = threadGroupHashTree.add(threadGroup);\n\n        threadGroupTree.add(getOrdersSampler);\n        threadGroupTree.add(createOrderSampler);\n        threadGroupTree.add(headerManager);\n        threadGroupTree.add(assertion);\n\n        // Save test plan\n        SaveService.saveTree(testPlanTree,\n            new FileOutputStream(\"order-api-load-test.jmx\"));\n\n        System.out.println(\"JMeter test plan saved to order-api-load-test.jmx\");\n    }\n\n    private static Arguments createUserDefinedVariables() {\n        Arguments args = new Arguments();\n        args.addArgument(\"base_url\", \"localhost:8080\");\n        args.addArgument(\"jwt.token\", \"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...\");\n        return args;\n    }\n\n    private static ThreadGroup createThreadGroup(int users, int rampUp, int loops) {\n        ThreadGroup group = new ThreadGroup();\n        group.setName(\"Order API Users\");\n        group.setNumThreads(users);\n        group.setRampUp(rampUp);\n        group.setScheduler(true);\n        group.setDuration(300);  // 5 minutes max\n        group.setSamplerController(createLoopController(loops));\n        return group;\n    }\n\n    private static LoopController createLoopController(int loops) {\n        LoopController controller = new LoopController();\n        controller.setLoops(loops);\n        controller.setContinueForever(false);\n        return controller;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-jmeter-listeners",
      children: "3.3 JMeter Listeners"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Programmatic listener setup\nimport org.apache.jmeter.reporters.ResultCollector;\nimport org.apache.jmeter.reporters.Summariser;\nimport org.apache.jmeter.reporters.gui.SummariserGui;\nimport org.apache.jmeter.visualizers.SummaryReport;\nimport org.apache.jmeter.visualizers.ViewResultsFullVisualizer;\n\npublic class JmeterListeners {\n\n    public static ResultCollector createSummaryReport(HashTree testPlanTree) {\n        Summariser summariser = new Summariser(\"Summary\");\n        ResultCollector summaryCollector = new ResultCollector(summariser);\n        summaryCollector.setName(\"Summary Report\");\n        summaryCollector.setFilename(\"results/summary-report.csv\");\n        testPlanTree.add(summaryCollector);\n        return summaryCollector;\n    }\n\n    public static ResultCollector createAggregateReport(HashTree testPlanTree) {\n        ResultCollector aggregateCollector = new ResultCollector();\n        aggregateCollector.setName(\"Aggregate Report\");\n        aggregateCollector.setFilename(\"results/aggregate-report.csv\");\n        aggregateCollector.setProperty(\"collector\", \"aggregate\");\n        testPlanTree.add(aggregateCollector);\n        return aggregateCollector;\n    }\n\n    public static ResultCollector createErrorLog(HashTree testPlanTree) {\n        ResultCollector errorCollector = new ResultCollector();\n        errorCollector.setName(\"Error Log\");\n        errorCollector.setFilename(\"results/errors.csv\");\n        errorCollector.setErrorLogging(true);\n        testPlanTree.add(errorCollector);\n        return errorCollector;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-running-jmeter-from-command-line",
      children: "3.4 Running JMeter from Command Line"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Non-GUI mode (headless — for CI/CD)\njmeter -n -t order-api-load-test.jmx -l results/raw-results.jtl -e -o results/report/\n\n# Parameters\n# -n        Non-GUI mode\n# -t        Test plan file\n# -l        Results log file\n# -e        Generate HTML report\n# -o        Output directory for HTML report\n\n# With custom properties\njmeter -n -t order-api-load-test.jmx \\\n    -Jjwt.token=eyJhbGciOiJSUzI1NiJ9... \\\n    -Jbase_url=staging.example.com \\\n    -l results/raw.jtl -e -o results/report/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "35-jmeter-assertions",
      children: "3.5 JMeter Assertions"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// JSON Assertion — validates JSON response body\nimport org.apache.jmeter.assertions.JSONPathAssertion;\n\npublic class JmeterAssertions {\n\n    public static JSONPathAssertion createJsonAssertion() {\n        JSONPathAssertion jsonAssertion = new JSONPathAssertion();\n        jsonAssertion.setName(\"Validate JSON Response\");\n        jsonAssertion.setJsonPath(\"$.status\");\n        jsonAssertion.setExpectedValue(\"CONFIRMED\");\n        jsonAssertion.setJsonValidationBool(true);\n        return jsonAssertion;\n    }\n\n    public static org.apache.jmeter.assertions.DurationAssertion createDurationAssertion() {\n        var durationAssertion = new org.apache.jmeter.assertions.DurationAssertion();\n        durationAssertion.setName(\"Max Response Time 2s\");\n        durationAssertion.setAllowedDuration(2000);  // 2 seconds\n        return durationAssertion;\n    }\n\n    public static org.apache.jmeter.assertions.SizeAssertion createSizeAssertion() {\n        var sizeAssertion = new org.apache.jmeter.assertions.SizeAssertion();\n        sizeAssertion.setName(\"Response Size between 50-50000 bytes\");\n        sizeAssertion.setAllowedSizeRange(true);\n        sizeAssertion.setSizeMin(50);\n        sizeAssertion.setSizeMax(50000);\n        return sizeAssertion;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!WARNING]\nJMH benchmarks must include warmup iterations so the JIT compiler reaches steady state before measurement."
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
        children: "// src/test/scala/com/example/OrderApiSimulation.scala\nimport io.gatling.core.Predef._\nimport io.gatling.http.Predef._\nimport scala.concurrent.duration._\n\nclass OrderApiSimulation extends Simulation {\n\n  // HTTP Protocol configuration\n  val httpProtocol = http\n    .baseUrl(\"http://localhost:8080\")\n    .acceptHeader(\"application/json\")\n    .contentTypeHeader(\"application/json\")\n    .authorizationHeader(\"Bearer ${jwtToken}\")\n    .header(\"X-Request-Id\", \"${correlationId}\")\n    .check(status.is(200))\n\n  // Scenario: browse orders\n  val browseOrders = scenario(\"Browse Orders\")\n    .exec(http(\"Get Orders Page 0\")\n      .get(\"/api/orders?page=0&size=20\")\n      .check(\n        status.is(200),\n        jsonPath(\"$.totalElements\").exists,\n        jsonPath(\"$.content[*]\").count.gt(0)\n      )\n    )\n    .pause(1, 3)  // Think time between 1-3 seconds\n    .exec(http(\"Get Order Details\")\n      .get(\"/api/orders/${orderId}\")\n      .check(\n        status.is(200),\n        jsonPath(\"$.status\").is(\"CONFIRMED\")\n      )\n    )\n\n  // Scenario: create orders\n  val createOrders = scenario(\"Create Orders\")\n    .feed(Iterator.continually(Map(\n      \"productId\" -> (\"prod-\" + scala.util.Random.nextInt(100)),\n      \"quantity\"  -> (scala.util.Random.nextInt(5) + 1)\n    )))\n    .exec(http(\"Create Order\")\n      .post(\"/api/orders\")\n      .body(StringBody(\n        \"\"\"{\"productId\": \"${productId}\", \"quantity\": ${quantity}}\"\"\"\n      )).asJson\n      .check(\n        status.is(200),\n        jsonPath(\"$.id\").saveAs(\"orderId\"),\n        jsonPath(\"$.status\").is(\"PENDING\")\n      )\n    )\n\n  // Scenario: admin operations\n  val adminOperations = scenario(\"Admin Operations\")\n    .exec(http(\"Get All Orders\")\n      .get(\"/api/admin/orders\")\n      .check(\n        status.is(200),\n        jsonPath(\"$..status\").findAll.transform(\n          statuses => statuses.distinct\n        )\n      )\n    )\n\n  // Injection profile\n  setUp(\n    browseOrders.inject(\n      nothingFor(4.seconds),          // Pause before starting\n      atOnceUsers(10),                // 10 immediate users\n      rampUsers(50).during(30.seconds), // 50 users over 30 seconds\n      constantUsersPerSec(20).during(1.minute), // 20 users/sec for 1 min\n      rampUsersPerSec(20).to(100).during(2.minutes), // Ramp to 100/sec\n      stressPeakUsers(200).during(30.seconds) // Spike to 200 users\n    ),\n    createOrders.inject(\n      rampUsers(30).during(30.seconds),\n      constantUsersPerSec(10).during(2.minutes)\n    ),\n    adminOperations.inject(\n      nothingFor(10.seconds),\n      atOnceUsers(5),\n      rampUsers(10).during(1.minute)\n    )\n  ).protocols(httpProtocol)\n   .maxDuration(5.minutes)\n   .assertions(\n     global.responseTime.mean.lt(500),          // Mean < 500ms\n     global.responseTime.max.lt(3000),          // Max < 3s\n     global.successfulRequests.percent.gt(99),  // 99%+ success rate\n     forAll.responseTime.percentile3.lt(2000)   // p95 < 2s\n   )\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-advanced-simulation-with-feeders",
      children: "4.2 Advanced Simulation with Feeders"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-scala",
        children: "// src/test/scala/com/example/AdvancedOrderSimulation.scala\nimport io.gatling.core.Predef._\nimport io.gatling.http.Predef._\nimport io.gatling.jdbc.Predef._\nimport io.gatling.jsonpath.JsonPath\nimport scala.concurrent.duration._\n\nclass AdvancedOrderSimulation extends Simulation {\n\n  val httpProtocol = http\n    .baseUrl(\"http://localhost:8080\")\n    .inferHtmlResources()\n    .userAgentHeader(\"Gatling/PerformanceTest\")\n    .disableFollowRedirect\n    .disableCaching\n\n  // CSV feeder — read test data from file\n  val productFeeder = csv(\"data/products.csv\").circular\n  val userFeeder = csv(\"data/users.csv\").random\n  val tokenFeeder = Iterator.continually(Map(\n    \"authToken\" -> (\"Bearer \" + generateToken())\n  ))\n\n  // Scenario with feeder\n  val orderFlow = scenario(\"Complete Order Flow\")\n    .feed(userFeeder)\n    .feed(tokenFeeder)\n    .feed(productFeeder)\n    .exec(http(\"Login\")\n      .post(\"/api/auth/login\")\n      .body(StringBody(\n        \"\"\"{\"email\": \"${email}\", \"password\": \"${password}\"}\"\"\"\n      )).asJson\n      .check(\n        jsonPath(\"$.accessToken\").saveAs(\"jwtToken\")\n      )\n    )\n    .exec(http(\"Browse Products\")\n      .get(\"/api/products\")\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\n      .check(\n        jsonPath(\"$[0].id\").saveAs(\"productId\")\n      )\n    )\n    .exec(http(\"Add to Cart\")\n      .post(\"/api/cart/items\")\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\n      .body(StringBody(\n        \"\"\"{\"productId\": \"${productId}\", \"quantity\": ${quantity}}\"\"\"\n      )).asJson\n    )\n    .exec(http(\"Checkout\")\n      .post(\"/api/orders\")\n      .header(\"Authorization\", \"Bearer ${jwtToken}\")\n      .body(StringBody(\n        \"\"\"{\"cartId\": \"${cartId}\", \"shippingAddress\": \"${address}\"}\"\"\"\n      )).asJson\n      .check(\n        jsonPath(\"$.id\").saveAs(\"orderId\")\n      )\n    )\n    .exec(session => {\n      println(s\"Order completed: ${session(\"orderId\").as[String]}\")\n      session\n    })\n\n  // Multiple injection profiles\n  setUp(\n    orderFlow.inject(\n      incrementUsersPerSec(10.0)\n        .times(5)        // 5 steps: 10, 20, 30, 40, 50 users/sec\n        .eachLevelLasting(30.seconds)\n        .separatedByRampsLasting(10.seconds)\n        .startingFrom(10)\n    )\n  ).protocols(httpProtocol)\n   .assertions(\n     global.failedRequests.count.lt(5)\n   )\n}\n\n// Helper method outside simulation\nobject generateToken {\n  def apply(): String = {\n    // In real tests, call the auth endpoint\n    java.util.UUID.randomUUID().toString\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-gatling-maven-plugin-configuration",
      children: "4.3 Gatling Maven Plugin Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<!-- pom.xml — Gatling Maven plugin -->\n<plugin>\n    <groupId>io.gatling</groupId>\n    <artifactId>gatling-maven-plugin</artifactId>\n    <version>4.7.0</version>\n    <configuration>\n        <simulationClass>com.example.OrderApiSimulation</simulationClass>\n        <jvmArgs>\n            <jvmArg>-Xmx2g</jvmArg>\n            <jvmArg>-Dgatling.http.ssl.trustStoreType=JKS</jvmArg>\n        </jvmArgs>\n        <runDescription>Order API load test - 200 concurrent users</runDescription>\n    </configuration>\n</plugin>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Run Gatling test\nmvn gatling:test \\\n    -Dgatling.simulationClass=com.example.OrderApiSimulation \\\n    -DbaseUrl=http://staging.example.com:8080\n\n# Output: target/gatling/orderapisimulation-{timestamp}/index.html\n"
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
        children: "// ProductController to be load-tested\n@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n\n    private final ProductRepository productRepository;\n    private final PriceCalculationService priceService;\n\n    public ProductController(ProductRepository productRepository,\n                             PriceCalculationService priceService) {\n        this.productRepository = productRepository;\n        this.priceService = priceService;\n    }\n\n    @GetMapping\n    public Page<ProductDto> getProducts(\n            @PageableDefault(size = 20) Pageable pageable,\n            @RequestParam(required = false) String category) {\n\n        Page<Product> products;\n        if (category != null) {\n            products = productRepository.findByCategory(category, pageable);\n        } else {\n            products = productRepository.findAll(pageable);\n        }\n\n        return products.map(product -> new ProductDto(\n            product.getId(),\n            product.getName(),\n            priceService.calculateFinalPrice(product.getPrice(), product.getDiscount()),\n            product.getCategory()\n        ));\n    }\n\n    @GetMapping(\"/{id}\")\n    public ProductDto getProduct(@PathVariable Long id) {\n        Product product = productRepository.findByIdWithReviews(id)\n            .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, \"Product not found\"));\n        return new ProductDto(product, product.getReviews());\n    }\n\n    @PostMapping\n    public ProductDto createProduct(@Valid @RequestBody CreateProductRequest request) {\n        Product product = new Product(request.name(), request.price(), request.category());\n        product = productRepository.save(product);\n        return new ProductDto(product);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-connection-pool-performance",
      children: "5.2 Connection Pool Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Monitor HikariCP connection pool metrics during load tests."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import com.zaxxer.hikari.HikariConfig;\nimport com.zaxxer.hikari.HikariDataSource;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport javax.sql.DataSource;\nimport java.time.Duration;\n\n@Configuration\nclass ConnectionPoolConfig {\n\n    @Bean\n    public DataSource dataSource() {\n        HikariConfig config = new HikariConfig();\n        config.setJdbcUrl(\"jdbc:postgresql://localhost:5432/orderdb\");\n        config.setUsername(\"app\");\n        config.setPassword(\"app\");\n        config.setDriverClassName(\"org.postgresql.Driver\");\n\n        // Connection pool tuning\n        config.setMaximumPoolSize(50);          // Max connections\n        config.setMinimumIdle(10);              // Keep 10 idle\n        config.setIdleTimeout(Duration.ofMinutes(5).toMillis());\n        config.setConnectionTimeout(Duration.ofSeconds(5).toMillis());  // Wait 5s for connection\n        config.setMaxLifetime(Duration.ofMinutes(30).toMillis());\n        config.setValidationTimeout(Duration.ofSeconds(2).toMillis());\n        config.setConnectionTestQuery(\"SELECT 1\");\n        config.setPoolName(\"OrderAppPool\");\n\n        // Metrics\n        config.setMetricsTrackerFactory(new MicrometerMetricsTrackerFactory());\n\n        return new HikariDataSource(config);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-database-query-performance-under-load",
      children: "5.3 Database Query Performance Under Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import io.micrometer.core.annotation.Timed;\nimport org.springframework.data.jpa.repository.Query;\nimport org.springframework.data.repository.query.Param;\n\n@Repository\npublic interface ProductRepository extends JpaRepository<Product, Long> {\n\n    @Timed(value = \"db.query.findByCategory\", extraTags = {\"repo\", \"ProductRepository\"})\n    Page<Product> findByCategory(String category, Pageable pageable);\n\n    @Query(\"\"\"\n        SELECT p FROM Product p\n        LEFT JOIN FETCH p.reviews\n        LEFT JOIN FETCH p.category\n        WHERE p.id = :id\n        \"\"\")\n    @Timed(value = \"db.query.findByIdWithReviews\", extraTags = {\"repo\", \"ProductRepository\"})\n    Optional<Product> findByIdWithReviews(@Param(\"id\") Long id);\n\n    @Query(value = \"\"\"\n        SELECT p FROM Product p\n        WHERE lower(p.name) LIKE lower(concat('%', :keyword, '%'))\n        ORDER BY p.salesCount DESC\n        \"\"\")\n    @Timed(value = \"db.query.searchByName\")\n    Page<Product> searchByName(@Param(\"keyword\") String keyword, Pageable pageable);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-measuring-latency-percentiles",
      children: "5.4 Measuring Latency Percentiles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import io.micrometer.core.instrument.MeterRegistry;\nimport io.micrometer.core.instrument.Timer;\nimport org.springframework.web.filter.OncePerRequestFilter;\nimport jakarta.servlet.FilterChain;\nimport jakarta.servlet.http.HttpServletRequest;\nimport jakarta.servlet.http.HttpServletResponse;\n\n@Component\npublic class LatencyMetricsFilter extends OncePerRequestFilter {\n\n    private final MeterRegistry meterRegistry;\n\n    public LatencyMetricsFilter(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @Override\n    protected void doFilterInternal(HttpServletRequest request,\n                                    HttpServletResponse response,\n                                    FilterChain filterChain) {\n\n        Timer.Sample sample = Timer.start(meterRegistry);\n\n        try {\n            filterChain.doFilter(request, response);\n        } catch (Exception e) {\n            throw new RuntimeException(e);\n        } finally {\n            String path = request.getRequestURI();\n            String method = request.getMethod();\n            int status = response.getStatus();\n\n            sample.stop(Timer.builder(\"http.request.latency\")\n                .description(\"HTTP request latency\")\n                .tags(\"method\", method, \"path\", path, \"status\", String.valueOf(status))\n                .publishPercentiles(0.5, 0.75, 0.90, 0.95, 0.99, 0.999)\n                .publishPercentileHistogram()\n                .register(meterRegistry));\n        }\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-yaml",
        children: "# application.yml — Micrometer percentile config\nmanagement:\n  metrics:\n    distribution:\n      percentiles-histogram:\n        http.request.latency: true\n      percentiles:\n        http.request.latency: 0.5, 0.75, 0.90, 0.95, 0.99, 0.999\n      slo:\n        http.request.latency: 10ms, 50ms, 100ms, 200ms, 500ms, 1s, 2s, 5s\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "55-spring-boot-actuator-endpoints-for-load-monitoring",
      children: "5.5 Spring Boot Actuator Endpoints for Load Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application.properties — expose all metrics during load test\nmanagement.endpoints.web.exposure.include=health,metrics,prometheus,threaddump,heapdump\nmanagement.endpoint.metrics.enabled=true\nmanagement.metrics.export.prometheus.enabled=true\n\n# Expose HikariCP metrics\nspring.datasource.hikari.metrics-tracker-factory=com.zaxxer.hikari.metrics.prometheus.PrometheusMetricsTrackerFactory\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# During a load test, watch these endpoints:\n\n# Active connections\ncurl localhost:8080/actuator/metrics/hikaricp.connections.active\n\n# Thread pool status\ncurl localhost:8080/actuator/metrics/jvm.threads.live\n\n# Database connections waiting\ncurl localhost:8080/actuator/metrics/hikaricp.connections.pending\n\n# HTTP request throughput\ncurl localhost:8080/actuator/metrics/http.server.requests\n\n# Heap memory\ncurl localhost:8080/actuator/metrics/jvm.memory.used\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.blockquote, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
        children: "[!NOTE]\nAlways run load tests against a staging environment that mirrors production → results from a developer laptop are not meaningful."
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
        children: "// Gatling ramp-up simulation\nimport io.gatling.javaapi.core.*;\nimport io.gatling.javaapi.http.*;\n\nimport static io.gatling.javaapi.core.CoreDsl.*;\nimport static io.gatling.javaapi.http.HttpDsl.*;\n\npublic class RampUpSimulation extends Simulation {\n\n    HttpProtocolBuilder httpProtocol = http\n        .baseUrl(\"http://localhost:8080\")\n        .acceptHeader(\"application/json\");\n\n    ScenarioBuilder rampUp = scenario(\"Ramp-Up Test\")\n        .exec(http(\"GET /api/orders\")\n            .get(\"/api/orders?page=0&size=20\")\n            .check(status().is(200)))\n        .pause(1);\n\n    {\n        setUp(\n            rampUp.inject(\n                rampUsersPerSec(1).to(500)\n                    .during(Duration.ofMinutes(10))  // 1 → 500 req/sec over 10 min\n            )\n        ).protocols(httpProtocol)\n         .assertions(\n             global().responseTime().max().lt(5000),  // Fail if max > 5s\n             global().successfulRequests().percent().gt(95.0)\n         );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-spike-test",
      children: "6.2 Spike Test"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sudden burst of traffic — tests auto-scaling and circuit breakers."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Gatling spike simulation\npublic class SpikeSimulation extends Simulation {\n\n    HttpProtocolBuilder httpProtocol = http\n        .baseUrl(\"http://localhost:8080\")\n        .acceptHeader(\"application/json\");\n\n    ScenarioBuilder spike = scenario(\"Spike Test\")\n        .exec(http(\"GET /api/products\")\n            .get(\"/api/products\")\n            .check(status().is(200)));\n\n    {\n        setUp(\n            spike.inject(\n                nothingFor(2.minutes),                    // Baseline steady state\n                atOnceUsers(1000),                         // Immediate 1000 users\n                nothingFor(30.seconds),                    // Observe recovery\n                atOnceUsers(2000),                         // Bigger spike\n                nothingFor(1.minutes),                     // Recovery\n                rampUsers(300).during(10.seconds)          // Mini spike\n            )\n        ).protocols(httpProtocol)\n         .maxDuration(5.minutes);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-soak-test-endurance",
      children: "6.3 Soak Test (Endurance)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Sustained load over hours to detect memory leaks and resource exhaustion."
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Gatling soak simulation\npublic class SoakSimulation extends Simulation {\n\n    HttpProtocolBuilder httpProtocol = http\n        .baseUrl(\"http://localhost:8080\")\n        .acceptHeader(\"application/json\");\n\n    ScenarioBuilder steadyLoad = scenario(\"Soak Test — 8 hours sustained\")\n        .exec(http(\"GET /api/health\")\n            .get(\"/api/health\")\n            .check(status().is(200)))\n        .pause(2, 5);  // Random pause between 2-5 seconds\n\n    {\n        setUp(\n            steadyLoad.inject(\n                constantUsersPerSec(100).during(8.hours)  // 100 req/sec for 8 hours\n            )\n        ).protocols(httpProtocol)\n         .assertions(\n             global().responseTime().mean().lt(1000),\n             global().failedRequests().count().lt(100)\n         );\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "64-stress-test-thresholds",
      children: "6.4 Stress Test Thresholds"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Threshold configuration\npublic class StressTestThresholds {\n\n    // Define thresholds as constants\n    public static final int MAX_P95_LATENCY_MS = 2000;\n    public static final int MAX_P99_LATENCY_MS = 5000;\n    public static final int MAX_ERROR_RATE_PERCENT = 1;\n    public static final int MIN_THROUGHPUT_RPS = 100;\n    public static final int MAX_CPU_PERCENT = 80;\n    public static final int MAX_MEMORY_USAGE_MB = 1024;\n    public static final int MAX_DB_CONNECTION_POOL_ACTIVE = 45;\n\n    // Gatling assertions from Java\n    public static PopulationBuilder applyAssertions(SetUp setUp) {\n        return setUp.assertions(\n            global().responseTime().percentile(95).lt(MAX_P95_LATENCY_MS),\n            global().responseTime().percentile(99).lt(MAX_P99_LATENCY_MS),\n            global().failedRequests().percent().lt(MAX_ERROR_RATE_PERCENT),\n            global().requestsPerSec().gt(MIN_THROUGHPUT_RPS)\n        );\n    }\n}\n\n// Usage in Gatling Java API\n/*\nsetUp(scenario.inject(...))\n    .assertions(\n        global().responseTime().percentile3().lt(2000),  // p95 < 2s\n        global().responseTime().percentile4().lt(5000),  // p99 < 5s\n        global().failedRequests().percent().lt(1.0),     // < 1% errors\n        global().requestsPerSec().gt(100)                // > 100 req/sec\n    );\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "65-resource-monitoring-during-load",
      children: "6.5 Resource Monitoring During Load"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "import java.lang.management.ManagementFactory;\nimport java.lang.management.MemoryMXBean;\nimport java.lang.management.OperatingSystemMXBean;\nimport java.lang.management.ThreadMXBean;\n\n@Component\npublic class ResourceMonitor {\n\n    private final MemoryMXBean memoryMXBean = ManagementFactory.getMemoryMXBean();\n    private final OperatingSystemMXBean osBean = ManagementFactory.getOperatingSystemMXBean();\n    private final ThreadMXBean threadMXBean = ManagementFactory.getThreadMXBean();\n\n    private final MeterRegistry meterRegistry;\n\n    public ResourceMonitor(MeterRegistry meterRegistry) {\n        this.meterRegistry = meterRegistry;\n    }\n\n    @Scheduled(fixedRate = 1000)\n    public void monitorResources() {\n        // JVM heap memory\n        var heap = memoryMXBean.getHeapMemoryUsage();\n        meterRegistry.gauge(\"jvm.memory.heap.used\", heap.getUsed());\n        meterRegistry.gauge(\"jvm.memory.heap.max\", heap.getMax());\n        meterRegistry.gauge(\"jvm.memory.heap.percent\",\n            (double) heap.getUsed() / heap.getMax() * 100);\n\n        // Non-heap memory\n        var nonHeap = memoryMXBean.getNonHeapMemoryUsage();\n        meterRegistry.gauge(\"jvm.memory.nonheap.used\", nonHeap.getUsed());\n\n        // Thread count\n        meterRegistry.gauge(\"jvm.threads.live\", threadMXBean.getThreadCount());\n        meterRegistry.gauge(\"jvm.threads.daemon\", threadMXBean.getDaemonThreadCount());\n        meterRegistry.gauge(\"jvm.threads.peak\", threadMXBean.getPeakThreadCount());\n\n        // CPU load\n        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {\n            meterRegistry.gauge(\"system.cpu.load\", sunOsBean.getCpuLoad());\n            meterRegistry.gauge(\"process.cpu.load\", sunOsBean.getProcessCpuLoad());\n            meterRegistry.gauge(\"system.memory.free\",\n                sunOsBean.getFreePhysicalMemorySize());\n            meterRegistry.gauge(\"system.memory.total\",\n                sunOsBean.getTotalPhysicalMemorySize());\n        }\n    }\n\n    @Scheduled(fixedRate = 5000)\n    public void logResourceSnapshot() {\n        var heap = memoryMXBean.getHeapMemoryUsage();\n        var usedMB = heap.getUsed() / (1024.0 * 1024.0);\n        var maxMB = heap.getMax() / (1024.0 * 1024.0);\n\n        log.info(\"Heap: {:.1f}/{:.1f} MB | Threads: {} | CPU: {:.1f}%\",\n            usedMB, maxMB,\n            threadMXBean.getThreadCount(),\n            getProcessCpuLoad() * 100);\n    }\n\n    private double getProcessCpuLoad() {\n        if (osBean instanceof com.sun.management.OperatingSystemMXBean sunOsBean) {\n            return sunOsBean.getProcessCpuLoad();\n        }\n        return -1;\n    }\n}\n"
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
        children: "<!-- pom.xml -->\n<dependency>\n    <groupId>de.codecentric</groupId>\n    <artifactId>chaos-monkey-spring-boot</artifactId>\n    <version>3.1.0</version>\n    <scope>test</scope>\n</dependency>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-properties",
        children: "# application-chaos.properties — enable Chaos Monkey\n# Enable Chaos Monkey\nchaos.monkey.enabled=true\n\n# Assault configuration\nchaos.monkey.assaults.level=1\nchaos.monkey.assaults.latency-active=true\nchaos.monkey.assaults.latency-range-start=1000\nchaos.monkey.assaults.latency-range-end=5000\nchaos.monkey.assaults.exceptions-active=true\nchaos.monkey.assaults.kill-application-active=true\nchaos.monkey.assaults.watched-custom-services=com.example.demo.*\n\n# Watcher configuration\nchaos.monkey.watcher.controller=true\nchaos.monkey.watcher.rest-controller=true\nchaos.monkey.watcher.service=true\nchaos.monkey.watcher.repository=true\nchaos.monkey.watcher.component=true\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-chaos-engineering-principles",
      children: "7.2 Chaos Engineering Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ChaosExperiment.java — programmatic chaos experiment\nimport org.springframework.web.client.RestTemplate;\n\npublic class ChaosExperiment {\n\n    private final RestTemplate restTemplate = new RestTemplate();\n    private final String baseUrl = \"http://localhost:8080\";\n\n    public record ExperimentResult(\n        String name,\n        boolean passed,\n        long p95LatencyMs,\n        double errorRate,\n        String details\n    ) {}\n\n    // Experiment 1: Inject latency into a single endpoint\n    public ExperimentResult testLatencyInjection() {\n        System.out.println(\"=== Experiment: Inject 3s latency into GET /api/orders ===\");\n\n        // Before chaos\n        long beforeAvg = measureAverageLatency(\"/api/orders\", 100);\n        System.out.println(\"Baseline avg latency: \" + beforeAvg + \"ms\");\n\n        // Enable latency assault via Chaos Monkey Actuator\n        restTemplate.postForEntity(\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\n            Map.of(\n                \"latencyActive\", true,\n                \"latencyRangeStart\", 3000,\n                \"latencyRangeEnd\", 3000,\n                \"level\", 1\n            ),\n            Void.class\n        );\n\n        // Wait for assault to activate\n        sleep(2000);\n\n        // During chaos\n        long duringAvg = measureAverageLatency(\"/api/orders\", 50);\n        System.out.println(\"During chaos avg latency: \" + duringAvg + \"ms\");\n\n        // Disable assault\n        restTemplate.postForEntity(\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\n            Map.of(\"latencyActive\", false),\n            Void.class\n        );\n\n        // Verify recovery\n        long afterAvg = measureAverageLatency(\"/api/orders\", 50);\n        System.out.println(\"After recovery avg latency: \" + afterAvg + \"ms\");\n\n        return new ExperimentResult(\"Latency Injection\",\n            duringAvg > beforeAvg + 2000, duringAvg, 0,\n            \"Baseline: \" + beforeAvg + \"ms → During: \" + duringAvg + \"ms → Recovery: \" + afterAvg + \"ms\");\n    }\n\n    // Experiment 2: Inject exceptions\n    public ExperimentResult testExceptionInjection() {\n        System.out.println(\"=== Experiment: Inject exceptions into POST /api/orders ===\");\n\n        // Baseline\n        double beforeErrors = measureErrorRate(\"/api/orders\", \"POST\", 50);\n        System.out.println(\"Baseline error rate: \" + (beforeErrors * 100) + \"%\");\n\n        // Enable exception assault\n        restTemplate.postForEntity(\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\n            Map.of(\n                \"exceptionsActive\", true,\n                \"level\", 5,  // High probability\n                \"watchedCustomServices\", List.of(\"com.example.demo.service.OrderService\")\n            ),\n            Void.class\n        );\n\n        sleep(1000);\n\n        // During chaos\n        double duringErrors = measureErrorRate(\"/api/orders\", \"POST\", 100);\n        System.out.println(\"During chaos error rate: \" + (duringErrors * 100) + \"%\");\n\n        // Disable\n        restTemplate.postForEntity(\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\n            Map.of(\"exceptionsActive\", false),\n            Void.class\n        );\n\n        return new ExperimentResult(\"Exception Injection\",\n            duringErrors > beforeErrors, 0, duringErrors,\n            \"Error rate: \" + (beforeErrors * 100) + \"% → \" + (duringErrors * 100) + \"%\");\n    }\n\n    // Experiment 3: Kill application (test graceful shutdown + restart)\n    public ExperimentResult testKillApplication() {\n        System.out.println(\"=== Experiment: Kill application ===\");\n\n        // Enable kill\n        restTemplate.postForEntity(\n            baseUrl + \"/actuator/chaosmonkey/assaults\",\n            Map.of(\"killApplicationActive\", true),\n            Void.class\n        );\n\n        sleep(5000);\n\n        // Application should have been killed\n        try {\n            restTemplate.getForEntity(baseUrl + \"/actuator/health\", String.class);\n            return new ExperimentResult(\"Kill Application\", false, 0, 0,\n                \"Application did not die — kill failed\");\n        } catch (Exception e) {\n            return new ExperimentResult(\"Kill Application\", true, 0, 1.0,\n                \"Application died as expected\");\n        }\n    }\n\n    private long measureAverageLatency(String path, int samples) {\n        long total = 0;\n        int success = 0;\n        for (int i = 0; i < samples; i++) {\n            try {\n                long start = System.currentTimeMillis();\n                restTemplate.getForEntity(baseUrl + path, String.class);\n                total += System.currentTimeMillis() - start;\n                success++;\n            } catch (Exception e) {\n                // Ignore — we're measuring latency, error handling is separate\n            }\n        }\n        return success > 0 ? total / success : -1;\n    }\n\n    private double measureErrorRate(String path, String method, int samples) {\n        int errors = 0;\n        for (int i = 0; i < samples; i++) {\n            try {\n                if (\"POST\".equals(method)) {\n                    restTemplate.postForEntity(baseUrl + path,\n                        Map.of(\"productId\", \"test\", \"quantity\", 1), String.class);\n                } else {\n                    restTemplate.getForEntity(baseUrl + path, String.class);\n                }\n            } catch (Exception e) {\n                errors++;\n            }\n        }\n        return (double) errors / samples;\n    }\n\n    private void sleep(long ms) {\n        try { Thread.sleep(ms); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }\n    }\n\n    public static void main(String[] args) {\n        ChaosExperiment experiment = new ChaosExperiment();\n\n        var latencyResult = experiment.testLatencyInjection();\n        System.out.println(latencyResult);\n\n        var exceptionResult = experiment.testExceptionInjection();\n        System.out.println(exceptionResult);\n\n        // Don't run kill in automated tests unless you have a restart mechanism\n        // var killResult = experiment.testKillApplication();\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-chaos-monkey-configuration-for-different-assault-types",
      children: "7.3 Chaos Monkey Configuration for Different Assault Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ChaosMonkeyConfig.java — programmatic configuration\nimport de.codecentric.spring.boot.chaos.monkey.configuration.AssaultProperties;\nimport de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeySettings;\nimport de.codecentric.spring.boot.chaos.monkey.configuration.WatcherProperties;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.context.annotation.Profile;\n\n@Configuration\n@Profile(\"chaos-test\")\npublic class ChaosMonkeyConfig {\n\n    @Bean\n    public ChaosMonkeySettings chaosMonkeySettings() {\n        var assaultProperties = new AssaultProperties();\n        assaultProperties.setLevel(3);\n        assaultProperties.setLatencyRangeStart(2000);\n        assaultProperties.setLatencyRangeEnd(8000);\n        assaultProperties.setLatencyActive(true);\n        assaultProperties.setExceptionsActive(true);\n        assaultProperties.setKillApplicationActive(false);\n        assaultProperties.setMemoryActive(true);\n        assaultProperties.setMemoryMillisecondsHold(5000);\n        assaultProperties.setRuntimeAssaultCronExpression(\"OFF\");\n\n        var watcherProperties = new WatcherProperties();\n        watcherProperties.setController(true);\n        watcherProperties.setRestController(true);\n        watcherProperties.setService(true);\n        watcherProperties.setRepository(true);\n\n        var settings = new ChaosMonkeySettings();\n        settings.setChaosMonkeyProperties(\n            new de.codecentric.spring.boot.chaos.monkey.configuration.ChaosMonkeyProperties());\n        settings.getChaosMonkeyProperties().setEnabled(true);\n        settings.setAssaultProperties(assaultProperties);\n        settings.setWatcherProperties(watcherProperties);\n\n        return settings;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "74-chaos-experiment-framework--automated-resilience-tests",
      children: "7.4 Chaos Experiment Framework — Automated Resilience Tests"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// AbstractChaosTest.java — base class for resilience tests\nimport org.junit.jupiter.api.TestInstance;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.boot.test.context.SpringBootTest;\nimport org.springframework.boot.test.web.client.TestRestTemplate;\nimport org.springframework.http.ResponseEntity;\nimport org.springframework.test.context.ActiveProfiles;\n\nimport java.time.Duration;\nimport java.util.ArrayList;\nimport java.util.List;\nimport java.util.concurrent.Callable;\nimport java.util.concurrent.Executors;\nimport java.util.concurrent.TimeUnit;\n\nimport static org.assertj.core.api.Assertions.assertThat;\n\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@ActiveProfiles(\"chaos-test\")\n@TestInstance(TestInstance.Lifecycle.PER_CLASS)\npublic abstract class AbstractChaosTest {\n\n    @Autowired\n    protected TestRestTemplate restTemplate;\n\n    @Autowired\n    private ResilienceProperties resilienceProperties;\n\n    protected record ResilienceAssertion(\n        String endpoint,\n        int expectedMaxLatencyMs,\n        double expectedMinSuccessRate,\n        int concurrentCalls,\n        Duration testDuration\n    ) {}\n\n    protected void assertEndpointResilient(ResilienceAssertion assertion) {\n        var executor = Executors.newFixedThreadPool(assertion.concurrentCalls());\n        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\n        var startTime = System.currentTimeMillis();\n\n        // Submit concurrent requests\n        for (int i = 0; i < assertion.concurrentCalls(); i++) {\n            futures.add(executor.submit(() ->\n                restTemplate.getForEntity(assertion.endpoint(), String.class)));\n        }\n\n        executor.shutdown();\n        try {\n            boolean completed = executor.awaitTermination(\n                assertion.testDuration().toSeconds(), TimeUnit.SECONDS);\n            assertThat(completed).as(\"All requests completed within timeout\").isTrue();\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n\n        // Analyze results\n        int successCount = 0;\n        int failureCount = 0;\n        long totalLatency = 0;\n        long maxLatency = 0;\n        List<Long> latencies = new ArrayList<>();\n\n        for (var future : futures) {\n            try {\n                long start = System.nanoTime();\n                var response = future.get();\n                long latency = Duration.ofNanos(System.nanoTime() - start).toMillis();\n\n                if (response.getStatusCode().is2xxSuccessful()) {\n                    successCount++;\n                    totalLatency += latency;\n                    latencies.add(latency);\n                    maxLatency = Math.max(maxLatency, latency);\n                } else {\n                    failureCount++;\n                }\n            } catch (Exception e) {\n                failureCount++;\n            }\n        }\n\n        double successRate = (double) successCount / assertion.concurrentCalls();\n        double avgLatency = successCount > 0 ? (double) totalLatency / successCount : 0;\n\n        // Sort for percentile calculation\n        java.util.Collections.sort(latencies);\n        int p95Index = (int) (latencies.size() * 0.95);\n        long p95Latency = p95Index < latencies.size() ? latencies.get(p95Index) : 0;\n\n        System.out.printf(\"\"\"\n            \n            === Resilience Test Results for %s ===\n            Total calls:     %d\n            Success:         %d (%.1f%%)\n            Failures:        %d (%.1f%%)\n            Avg latency:     %.0f ms\n            Max latency:     %d ms\n            p95 latency:     %d ms\n            Thresholds:      maxLatency=%dms, minSuccess=%.0f%%\n            %n\"\"\",\n            assertion.endpoint(),\n            assertion.concurrentCalls(),\n            successCount, successRate * 100,\n            failureCount, (1 - successRate) * 100,\n            avgLatency, maxLatency, p95Latency,\n            assertion.expectedMaxLatencyMs(),\n            assertion.expectedMinSuccessRate() * 100);\n\n        // Assert against thresholds\n        assertThat(successRate)\n            .as(\"Success rate %.1f%% >= %.1f%%\", successRate * 100,\n                assertion.expectedMinSuccessRate() * 100)\n            .isGreaterThanOrEqualTo(assertion.expectedMinSuccessRate());\n\n        assertThat(p95Latency)\n            .as(\"p95 latency %dms <= %dms\", p95Latency, assertion.expectedMaxLatencyMs())\n            .isLessThanOrEqualTo(assertion.expectedMaxLatencyMs());\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "75-circuit-breaker-resilience-under-chaos",
      children: "7.5 Circuit Breaker Resilience Under Chaos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// ResilienceProperties.java\n@ConfigurationProperties(prefix = \"resilience\")\n@Component\npublic class ResilienceProperties {\n    private int maxLatencyMs = 5000;\n    private double minSuccessRate = 0.95;\n    private int concurrentCalls = 50;\n    private Duration testDuration = Duration.ofSeconds(30);\n\n    // Getters and setters\n}\n\n// application-chaos.yml\n/*\nresilience:\n  max-latency-ms: 5000\n  min-success-rate: 0.95\n  concurrent-calls: 100\n  test-duration: 60s\n*/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// OrderServiceResilienceTest.java\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@ActiveProfiles(\"chaos-test\")\nclass OrderServiceResilienceTest extends AbstractChaosTest {\n\n    @Autowired\n    private OrderService orderService;\n\n    @Test\n    void testGetOrderEndpointUnderLatencyChaos() {\n        assertEndpointResilient(new ResilienceAssertion(\n            \"/api/orders?page=0&size=20\",\n            5000,     // max 5s p95 latency under chaos\n            0.90,     // 90% success rate minimum\n            50,       // 50 concurrent users\n            Duration.ofSeconds(30)\n        ));\n    }\n\n    @Test\n    void testCreateOrderWithExceptionAssault() {\n        // The exception assault will randomly throw exceptions\n        // Our service must handle them gracefully (circuit breaker, retry, fallback)\n\n        var executor = Executors.newFixedThreadPool(20);\n        var results = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\n\n        for (int i = 0; i < 100; i++) {\n            String productId = \"prod-\" + i;\n            results.add(executor.submit(() ->\n                restTemplate.postForEntity(\n                    \"/api/orders\",\n                    Map.of(\"productId\", productId, \"quantity\", 1),\n                    String.class\n                )\n            ));\n        }\n\n        executor.shutdown();\n\n        long successCount = results.stream()\n            .filter(f -> {\n                try { return f.get().getStatusCode().is2xxSuccessful(); }\n                catch (Exception e) { return false; }\n            })\n            .count();\n\n        double successRate = (double) successCount / results.size();\n        System.out.println(\"Order creation success rate under chaos: \" +\n            (successRate * 100) + \"%\");\n\n        // With circuit breaker, we expect some failures but not total outage\n        assertThat(successRate).isGreaterThan(0.50);\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "76-graceful-degradation-patterns",
      children: "7.6 Graceful Degradation Patterns"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Fallback methods to handle chaos monkey-induced failures\n@Service\npublic class ResilientOrderService {\n\n    private final OrderRepository orderRepository;\n    private final PaymentClient paymentClient;\n\n    public ResilientOrderService(OrderRepository orderRepository,\n                                  PaymentClient paymentClient) {\n        this.orderRepository = orderRepository;\n        this.paymentClient = paymentClient;\n    }\n\n    @CircuitBreaker(name = \"orderService\", fallbackMethod = \"createOrderFallback\")\n    @Retry(name = \"orderService\", fallbackMethod = \"createOrderFallback\")\n    public Order createOrder(String customerEmail, BigDecimal total) {\n        // May fail with latency or exceptions during chaos\n        Order order = new Order(customerEmail, total);\n        order = orderRepository.save(order);\n\n        PaymentResult payment = paymentClient.processPayment(order);\n        if (!payment.success()) {\n            throw new PaymentFailedException(\"Payment declined\");\n        }\n\n        order.setStatus(OrderStatus.CONFIRMED);\n        return orderRepository.save(order);\n    }\n\n    public Order createOrderFallback(String customerEmail, BigDecimal total, Throwable t) {\n        System.out.println(\"Fallback: creating pending order due to: \" + t.getMessage());\n        Order order = new Order(customerEmail, total);\n        order.setStatus(OrderStatus.PENDING);\n        return orderRepository.save(order);\n    }\n\n    @TimeLimiter(name = \"orderService\")\n    public CompletableFuture<Order> createOrderAsync(String email, BigDecimal total) {\n        return CompletableFuture.supplyAsync(() -> createOrder(email, total));\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "77-load-testing-with-simulated-chaos",
      children: "7.7 Load Testing with Simulated Chaos"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-java",
        children: "// Combined stress + chaos test\n@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)\n@ActiveProfiles({\"load-test\", \"chaos-test\"})\nclass StressAndChaosTest {\n\n    @Autowired\n    private TestRestTemplate restTemplate;\n\n    @Test\n    void testSystemUnderCombinedStressAndChaos() {\n        // Step 1: Warm up\n        System.out.println(\"=== Phase 1: Warm up ===\");\n        for (int i = 0; i < 100; i++) {\n            restTemplate.getForEntity(\"/api/health\", String.class);\n        }\n\n        // Step 2: Enable Chaos Monkey — latency injection\n        System.out.println(\"=== Phase 2: Enable latency chaos ===\");\n        restTemplate.postForEntity(\n            \"http://localhost:8080/actuator/chaosmonkey/assaults\",\n            Map.of(\"latencyActive\", true,\n                   \"latencyRangeStart\", 100,\n                   \"latencyRangeEnd\", 2000,\n                   \"level\", 3),\n            Void.class\n        );\n\n        // Step 3: Ramp up load\n        System.out.println(\"=== Phase 3: Ramp up load under chaos ===\");\n        var executor = Executors.newFixedThreadPool(50);\n        var futures = new ArrayList<java.util.concurrent.Future<ResponseEntity<String>>>();\n\n        for (int i = 0; i < 500; i++) {\n            futures.add(executor.submit(() ->\n                restTemplate.getForEntity(\"/api/orders?page=0&size=20\", String.class)));\n        }\n\n        executor.shutdown();\n        try {\n            executor.awaitTermination(30, TimeUnit.SECONDS);\n        } catch (InterruptedException e) {\n            Thread.currentThread().interrupt();\n        }\n\n        // Step 4: Analyze results\n        long successCount = futures.stream()\n            .filter(f -> {\n                try { return f.get().getStatusCode().is2xxSuccessful(); }\n                catch (Exception e) { return false; }\n            })\n            .count();\n\n        long failureCount = futures.size() - successCount;\n        double successRate = (double) successCount / futures.size();\n\n        System.out.printf(\"\"\"\n            \n            === Stress + Chaos Results ===\n            Total requests: %d\n            Successful:     %d\n            Failed:         %d\n            Success rate:   %.1f%%\n            %n\"\"\",\n            futures.size(), successCount, failureCount, successRate * 100);\n\n        // Step 5: Clean up — disable chaos monkey\n        restTemplate.postForEntity(\n            \"http://localhost:8080/actuator/chaosmonkey/assaults\",\n            Map.of(\"latencyActive\", false, \"exceptionsActive\", false),\n            Void.class\n        );\n\n        // Step 6: Verify recovery\n        ResponseEntity<String> healthCheck = restTemplate.getForEntity(\"/api/health\", String.class);\n        assertThat(healthCheck.getStatusCode().is2xxSuccessful()).isTrue();\n\n        // Assert that system survives\n        assertThat(successRate).isGreaterThan(0.80);\n    }\n}\n"
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